import Link from 'next/link'
import EmailCaptureForm from '@/components/newsite/EmailCaptureForm'
import { CALENDLY_URL, DEMO_URL } from '@/lib/seo'

export default function Closing() {
  return (
    <section
      id="contact"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              textWrap: 'balance',
            }}
          >
            See what agentic systems could run inside your company.
          </h2>

          <p
            style={{
              marginTop: 20,
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.75,
              maxWidth: '52ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            A 30-minute discovery call: we map one of your workflows and tell you honestly whether
            agentic systems fit — and where the impact would land first.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
              marginTop: 32,
            }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              Book a 30-minute call
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              Explore the live demo
            </a>
          </div>

          <div
            style={{
              maxWidth: 480,
              margin: '48px auto 0',
              paddingTop: 32,
              borderTop: '1px solid var(--border)',
            }}
          >
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Prefer email? Leave your work address and we&apos;ll reach out.
            </p>
            <EmailCaptureForm source="cta-section" buttonLabel="Request a call" />
            <p style={{ marginTop: 14, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              We reply within 24 hours. No commitment. Handled confidentially — see our{' '}
              <Link
                href="/legal/privacy"
                style={{
                  color: 'var(--text-link)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
