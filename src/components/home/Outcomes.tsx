const outcomes = [
  {
    title: 'Reduce operational overhead',
    description:
      'Background agents remove the manual coordination, approvals, and repetitive operational work that pile up across systems.',
  },
  {
    title: 'Return time to customers',
    description:
      'The hours your team spends on data entry, handoffs, and status-chasing go back to the problems only people can solve.',
  },
  {
    title: 'Scale without hiring',
    description:
      'Operational output grows without adding headcount or new layers of coordination to manage it.',
  },
]

export default function Outcomes() {
  return (
    <section style={{ background: 'var(--pastel-green)', borderTop: '1px solid var(--border)' }}>
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
            The case for agentic operations is an operating-cost case.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '58ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            In our deployments, the same three effects show up regardless of department — and they
            compound as the system takes on more of the workflow.
          </p>
        </div>

        <div
          className="outcomes-grid"
          style={{ marginTop: 56, borderTop: '1px solid var(--border)' }}
        >
          {outcomes.map((item) => (
            <div key={item.title} className="outcomes-cell" style={{ padding: '28px 28px 0 0' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.25 }}>
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: 10,
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 32px;
        }
        .outcomes-cell + .outcomes-cell {
          border-left: 1px solid var(--border);
          padding-left: 28px !important;
        }
        @media (max-width: 768px) {
          .outcomes-grid { grid-template-columns: 1fr; }
          .outcomes-cell + .outcomes-cell {
            border-left: none;
            border-top: 1px solid var(--border);
            padding-left: 0 !important;
            margin-top: 28px;
          }
        }
      `}</style>
    </section>
  )
}
