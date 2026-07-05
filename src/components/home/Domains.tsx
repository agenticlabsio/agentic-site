const domains = [
  {
    title: 'Finance operations',
    description:
      'Proactive agents handle accounts payable, receivable, reconciliation, and forecasting. Close the books faster, without the overhead.',
    scope: 'AP / AR · Reconciliation · Forecasting',
  },
  {
    title: 'Procurement',
    description:
      'Agents run vendor onboarding, purchasing approvals, contract coordination, and supplier communication — cutting cycle times and off-contract spend.',
    scope: 'Onboarding · Approvals · Contracts',
  },
  {
    title: 'Revenue operations',
    description:
      'Agents keep CRM data clean, route deal-desk approvals, and assemble pipeline reporting and forecasts — so reps sell instead of doing ops work.',
    scope: 'CRM hygiene · Deal desk · Forecasts',
  },
  {
    title: 'Compliance & risk',
    description:
      'Agents track regulatory deadlines, assemble audit documentation, monitor policy adherence, and flag exceptions before they become findings.',
    scope: 'Audit-ready · Monitoring · Exceptions',
  },
  {
    title: 'And the rest of the business',
    description:
      'From logistics and support to HR and IT operations, the same agentic layer extends across the workflows that run your organization.',
    scope: 'Logistics · Support · Operations',
  },
]

export default function Domains() {
  return (
    <section
      id="domains"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
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
            Where agentic systems get deployed.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '58ch',
            }}
          >
            Across the operational functions that run the business — deployed on top of the systems
            you already use. No migrations required.
          </p>
        </div>

        <ul
          style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border)' }}
        >
          {domains.map((d) => (
            <li
              key={d.title}
              className="domain-row"
              style={{ borderBottom: '1px solid var(--border)', padding: '26px 0' }}
            >
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.3 }}>{d.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {d.description}
              </p>
              <span
                className="domain-scope font-mono"
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-dark)',
                  whiteSpace: 'nowrap',
                  paddingTop: 5,
                }}
              >
                {d.scope}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .domain-row {
          display: grid;
          grid-template-columns: 240px 1fr auto;
          gap: 12px 40px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .domain-row { grid-template-columns: 200px 1fr; }
          .domain-scope { grid-column: 2; padding-top: 0 !important; }
        }
        @media (max-width: 640px) {
          .domain-row { grid-template-columns: 1fr; gap: 8px; }
          .domain-scope { grid-column: 1; white-space: normal !important; }
        }
      `}</style>
    </section>
  )
}
