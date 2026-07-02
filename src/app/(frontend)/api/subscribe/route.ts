import { NextResponse } from 'next/server'
import { installMessageChannelPolyfill } from '@/lib/messagechannel-polyfill'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_SOURCES = new Set(['cta-section', 'footer', 'hero'])

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const { email, source, page, consent } = (body ?? {}) as Record<string, unknown>
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
