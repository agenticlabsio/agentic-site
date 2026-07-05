import { CALENDLY_URL } from '@/lib/seo'

// A genuine ordered sequence — the one place numbered markers carry meaning.
const steps = [
  {
    number: '01',
    title: 'Opportunity audit',
    duration: 'Weeks 1–2',
    description:
      'We map how work actually moves through your organization — across teams, systems, and decision points — and pinpoint where agentic systems cut overhead, speed execution, or replace manual coordination.',
  },
  {
    number: '02',
    title: 'Process architecture & redesign',
    duration: 'Weeks 3–6',
    description:
      'We design and build the agentic system that will run the workflow, integrating it with the tools, data, and operational logic that power the process. You stay in the loop the entire time.',
  },
  {
    number: '03',
    title: 'Production deployment',
    duration: 'Weeks 6–12',
    description:
      'We deploy into your existing stack on your cloud, connected to live systems so it begins executing real work. Built on top of your current software — no migrations, with your approved models.',
  },
  {
    number: '04',
    title: 'System optimization',
    duration: 'Ongoing',
    description:
      'After go-live, we keep improving how the system operates — sharpening its decision logic, increasing reliability, and extending it into new operational responsibilities.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--bg-primary)' }}>
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
            From audit to autonomous operations.
          </h2>
          <p
            style={{
              marginTop: 16,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '58ch',
            }}
          >
            Agentic engineering delivered inside enterprise constraints — security review, change
            management, and audit trails included from week one.
          </p>
        </div>

        <ol
          style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border)' }}
        >
          {steps.map((step) => (
            <li
              key={step.number}
              className="process-row"
              style={{ borderBottom: '1px solid var(--border)', padding: '28px 0' }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.85rem', color: 'var(--accent-dark)', paddingTop: 4 }}
              >
                {step.number}
              </span>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.25 }}>
                  {step.title}
                </h3>
                <p
                  style={{
                    marginTop: 8,
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    maxWidth: '60ch',
                  }}
                >
                  {step.description}
                </p>
              </div>
              <span
                className="process-duration font-mono"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-secondary)',
                  paddingTop: 6,
                  whiteSpace: 'nowrap',
                }}
              >
                {step.duration}
              </span>
            </li>
          ))}
        </ol>

        <div
          style={{
            marginTop: 48,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-primary)' }}>
            Ready to see where this fits in your organization?
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '12px 24px' }}
          >
            Book a 30-minute call
          </a>
        </div>
      </div>

      <style>{`
        .process-row {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          gap: 24px;
        }
        @media (max-width: 640px) {
          .process-row { grid-template-columns: 40px 1fr; }
          .process-duration { grid-column: 2; padding-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
