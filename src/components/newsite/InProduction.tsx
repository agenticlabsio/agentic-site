import Link from 'next/link'
import { caseStudies } from '@/content/case-studies'

// "In Production" proof section — pulls the real case studies so the homepage
// shows genuine deployments (linked to their detail pages) rather than invented
// examples. Server component: the data is static, no client interactivity.
export default function InProduction() {
  const studies = caseStudies.slice(0, 5)

  return (
    <section
      id="results"
      style={{
        background: 'var(--bg-primary)',
        padding: '100px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '100%', maxWidth: 1140, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <span
            className="font-display"
            style={{
              fontSize: '0.8rem',
              color: 'var(--accent)',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            In Production
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
              marginTop: 12,
              marginBottom: 20,
            }}
          >
            Deployed and{' '}
            <span className="text-gradient" style={{ fontFamily: 'var(--font-display)' }}>
              Delivering
            </span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.75,
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            Real deployments executing work that used to require entire teams.
          </p>
        </div>

        <div className="inprod-grid">
          {studies.map((study) => {
            const metric = study.card.metrics[0]
            return (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="inprod-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 16,
                  padding: '28px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  textDecoration: 'none',
                  height: '100%',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: 14,
                  }}
                >
                  {study.industry}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    marginBottom: 16,
                    flex: 1,
                  }}
                >
                  {study.card.title}
                </h3>
                {metric && (
                  <div style={{ marginBottom: 14 }}>
                    <span
                      className="font-display"
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--accent-highlight)',
                        lineHeight: 1,
                      }}
                    >
                      {metric.value}
                    </span>
                    <span
                      style={{
                        marginLeft: 8,
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {metric.label}
                    </span>
                  </div>
                )}
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <style>{`
        .inprod-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .inprod-grid > *:nth-child(4),
        .inprod-grid > *:nth-child(5) {
          grid-column: span 1;
        }
        .inprod-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px -12px var(--accent-glow);
        }
        @media (max-width: 1024px) {
          .inprod-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .inprod-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
