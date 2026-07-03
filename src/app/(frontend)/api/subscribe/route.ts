import { NextResponse } from 'next/server'
import { installMessageChannelPolyfill } from '@/lib/messagechannel-polyfill'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_SOURCES = new Set(['cta-section', 'footer', 'hero'])

// Best-effort per-IP rate limit. Cloudflare Worker isolates are ephemeral and
// per-colo, so this module-level window only throttles bursts within a single
// isolate — enough to blunt naive floods without a KV/Durable-Object round
// trip. Pair with the honeypot below; a KV-backed limiter is the prod upgrade.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again later.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const { email, source, page, consent, company } = (body ?? {}) as Record<string, unknown>

  // Honeypot: `company` is a hidden field real users never fill. If it's
  // populated, silently accept (200) so bots can't distinguish a rejection.
  if (typeof company === 'string' && company.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''

  if (!EMAIL_RE.test(normalizedEmail) || normalizedEmail.length > 254) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid email address.' },
      { status: 400 },
    )
  }

  const normalizedSource =
    typeof source === 'string' && VALID_SOURCES.has(source)
      ? (source as 'cta-section' | 'footer' | 'hero')
      : 'cta-section'

  try {
    // Ensure MessageChannel/MessagePort exist before Payload initializes.
    await installMessageChannelPolyfill()
    const { createLead } = await import('@/lib/payload')
    await createLead({
      email: normalizedEmail,
      source: normalizedSource,
      page: typeof page === 'string' ? page.slice(0, 512) : undefined,
      consent: consent === true,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[subscribe] failed to persist lead', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
