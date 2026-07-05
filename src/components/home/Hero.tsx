import Link from 'next/link'
import { CALENDLY_URL, DEMO_URL } from '@/lib/seo'

// Proof strip figures are the headline numbers from real, published case
// studies (see /case-studies) — keep them in lockstep when those change.
const proof = [
  { value: '$8M', label: 'Annual impact', source: 'Regional bank' },
  { value: '12→6 days', label: 'Claims processing', source: 'Insurance operations' },
  { value: '8 wks', label: 'Kickoff to production', source: 'First deployment' },
]

export default function Hero() {
  return (
    <section id="hero" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-main" style={{ paddingTop: 180, paddingBottom: 96 }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              color: 'var(--text-primary)',
              textWrap: 'balance',
            }}
          >
            Agentic solutions that pay for themselves.
          </h1>

          <div style={{ height: 2, width: 72, background: 'var(--accent)', margin: '28px auto' }} />

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              maxWidth: '62ch',
              margin: '0 auto',
              lineHeight: 1.65,
              textWrap: 'pretty',
            }}
          >
            Agentic Labs builds and operates AI agents that take the manual operations work off your
            finance, procurement, revenue, and compliance teams — so they can focus on customers.
            Measured in dollars, deployed on infrastructure you own: your data, your models, your
            agents, your workflows.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 36,
            }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a 30-minute call
            </a>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-demo">
              Explore the live demo
            </a>
            <Link href="/case-studies" className="btn-outline">
              View case studies
            </Link>
          </div>
        </div>

        {/* Proof strip — real case-study figures, ledger-ruled */}
        <div
          style={{
            maxWidth: 880,
            margin: '88px auto 0',
            borderTop: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          {proof.map((p) => (
            <div key={p.label} style={{ padding: '24px 16px 0', textAlign: 'center' }}>
              <span
                className="font-display"
                style={{
                  display: 'block',
                  fontSize: '1.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontVariantNumeric: 'tabular-nums',
                  lineHeight: 1.1,
                }}
              >
                {p.value}
              </span>
              <span
                className="font-mono"
                style={{
                  display: 'block',
                  marginTop: 8,
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-dark)',
                }}
              >
                {p.label}
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: 2,
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {p.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
