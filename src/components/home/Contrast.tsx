const transformationPitch = [
  'Automate entire departments, end to end',
  'Replace headcount from day one',
  'Move fast, measure the value later',
  'Black-box platforms that hold your data',
  'Pilots that never survive security review',
]

const whatWeBuild = [
  'Agents that own defined workflows — reconciliation, approvals, reporting, follow-ups',
  'Your team stays in command of every decision',
  'A dollar baseline agreed before we build, measured after',
  'Your data, models, agents, and workflows — owned by you',
  'Governed, logged, and audit-ready from week one',
]

const markStyle: React.CSSProperties = {
  flexShrink: 0,
  width: 18,
  display: 'inline-flex',
  justifyContent: 'center',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.85rem',
  lineHeight: 1.6,
}

export default function Contrast() {
  return (
    <section
      id="comparison"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 640 }}>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: '-0.015em',
              textWrap: 'balance',
            }}
          >
            We don&apos;t replace departments. We take the busywork off them.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '58ch',
            }}
          >
            The agentic wins that stick aren&apos;t moonshots. They&apos;re the manual coordination,
            reconciliation, and reporting your team shouldn&apos;t be doing by hand — automated
            correctly, with your people in command.
          </p>
        </div>

        <div
          className="contrast-grid"
          style={{ marginTop: 56, borderTop: '1px solid var(--border)' }}
        >
          <div style={{ padding: '28px 32px 28px 0' }}>
            <h3
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginBottom: 20,
              }}
            >
              The transformation pitch
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {transformationPitch.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 12,
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span aria-hidden="true" style={{ ...markStyle, color: 'var(--color-error)' }}>
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="contrast-right" style={{ padding: '28px 0 28px 32px' }}>
            <h3
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent-dark)',
                marginBottom: 20,
              }}
            >
              What we build instead
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {whatWeBuild.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 12,
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  <span aria-hidden="true" style={{ ...markStyle, color: 'var(--accent)' }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                marginTop: 24,
                paddingTop: 20,
                borderTop: '1px solid var(--border)',
                fontSize: '0.9rem',
                color: 'var(--accent-dark)',
                fontWeight: 500,
              }}
            >
              Your team stops gluing systems together by hand — and spends that time on the customer
              problems only people can solve.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .contrast-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .contrast-right {
          border-left: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .contrast-grid { grid-template-columns: 1fr; }
          .contrast-right {
            border-left: none;
            border-top: 1px solid var(--border);
            padding-left: 0 !important;
          }
          .contrast-grid > div:first-child { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  )
}
