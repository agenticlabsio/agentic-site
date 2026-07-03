import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the heavy Payload data layer + Worker polyfill so these stay fast unit
// tests with no DB or network. The route imports createLead dynamically.
const createLead = vi.fn()
vi.mock('@/lib/payload', () => ({ createLead: (...args: unknown[]) => createLead(...args) }))
vi.mock('@/lib/messagechannel-polyfill', () => ({
  installMessageChannelPolyfill: vi.fn().mockResolvedValue(undefined),
}))

import { POST } from './route'

// Each test uses a distinct IP so the module-level rate limiter never bleeds
// between cases.
let ipCounter = 0
function post(body: unknown, { ip, raw }: { ip?: string; raw?: string } = {}) {
  const clientIp = ip ?? `10.0.0.${++ipCounter}`
  return POST(
    new Request('http://localhost/api/subscribe', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'cf-connecting-ip': clientIp },
      body: raw ?? JSON.stringify(body),
    }),
  )
}

beforeEach(() => {
  createLead.mockReset()
  createLead.mockResolvedValue({ id: 1 })
})

describe('POST /api/subscribe', () => {
  it('accepts a valid email and persists a normalized lead', async () => {
    const res = await post({ email: '  Test@Example.COM ', source: 'hero', consent: true })
    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ ok: true })
    expect(createLead).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'test@example.com', source: 'hero', consent: true }),
    )
  })

  it('rejects an invalid email with 400 and does not persist', async () => {
    const res = await post({ email: 'not-an-email' })
    expect(res.status).toBe(400)
    expect(createLead).not.toHaveBeenCalled()
  })

  it('rejects an oversized email with 400', async () => {
    const res = await post({ email: `${'a'.repeat(250)}@example.com` })
    expect(res.status).toBe(400)
    expect(createLead).not.toHaveBeenCalled()
  })

  it('rejects malformed JSON with 400', async () => {
    const res = await post(null, { raw: '{ not json' })
    expect(res.status).toBe(400)
    expect(createLead).not.toHaveBeenCalled()
  })

  it('silently accepts a filled honeypot without persisting', async () => {
    const res = await post({ email: 'bot@example.com', company: 'AcmeBot' })
    expect(res.status).toBe(200)
    await expect(res.json()).resolves.toEqual({ ok: true })
    expect(createLead).not.toHaveBeenCalled()
  })

  it('falls back to a default source for an unknown source value', async () => {
    await post({ email: 'a@b.com', source: 'nope' })
    expect(createLead).toHaveBeenCalledWith(expect.objectContaining({ source: 'cta-section' }))
  })

  it('returns 500 when persistence fails', async () => {
    createLead.mockRejectedValueOnce(new Error('db down'))
    const res = await post({ email: 'boom@example.com' })
    expect(res.status).toBe(500)
    await expect(res.json()).resolves.toEqual(
      expect.objectContaining({ ok: false }),
    )
  })

  it('rate-limits repeated requests from the same IP with 429', async () => {
    const ip = '203.0.113.7'
    const codes: number[] = []
    for (let i = 0; i < 7; i++) {
      const res = await post({ email: `rl${i}@example.com` }, { ip })
      codes.push(res.status)
    }
    // First 5 pass, the rest are throttled.
    expect(codes.slice(0, 5).every((c) => c === 200)).toBe(true)
    expect(codes.slice(5)).toContain(429)
  })
})
