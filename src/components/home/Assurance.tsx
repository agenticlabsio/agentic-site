import Link from 'next/link'

const assurances = [
  {
    title: 'Your infrastructure',
    description:
      'Agents run in your approved cloud environment or on-premises. You control access, networking, and data boundaries.',
  },
  {
    title: 'Zero data retention',
    description:
      'Client data is never reused, retained, or used for model training. Your data stays yours.',
  },
  {
    title: 'Full observability',
    description:
      'Every action, decision, and workflow is logged for review and audit. Complete transparency into agent behavior.',
  },
  {
    title: 'You own the stack',
    description:
      'Data, models, agents, and workflows are yours — built in your environment, documented, and handed over. Every component can be inspected and explained. No lock-in.',
  },
]

export default function Assurance() {
  return (
    <section
      id="security"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              textWrap: 'balance',
            }}
          >
            Built for enterprise constraints, not around them.
          </h2>
        </div>

        <div
          className="assurance-grid"
          style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          {assurances.map((card) => (
            <div
              key={card.title}
              style={{
                padding: 28,
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-elevated)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.3 }}>
                {card.title}
              </h3>
              <p
                style={{
                  marginTop: 10,
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 32,
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--accent-dark)',
              marginRight: 12,
            }}
          >
            Compliance posture
          </span>
          GDPR-aligned · SOC 2-aligned controls · ISO 27001-aligned practices · HIPAA-ready
          architecture.{' '}
          <Link
            href="/trust"
            style={{
              color: 'var(--text-link)',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            Full detail in Trust &amp; Security
          </Link>
        </p>
      </div>

      <style>{`
        .assurance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 640px) {
          .assurance-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
