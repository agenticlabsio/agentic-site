import Link from 'next/link'
import { getCaseStudies } from '@/lib/payload'

// Proof section — the real case studies from the CMS, rendered as ledger rows
// so the homepage stays in lockstep with /case-studies. Async RSC, no client JS.
export default async function Proof() {
  const studies = (await getCaseStudies()).slice(0, 5)

  return (
    <section
      id="results"
      style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main" style={{ padding: '96px 24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}
        >
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
              Deployed and delivering.
            </h2>
            <p
              style={{
                marginTop: 16,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '58ch',
              }}
            >
              Real deployments executing work that used to require entire teams.
            </p>
          </div>
          <Link
            href="/case-studies"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text-link)',
              whiteSpace: 'nowrap',
            }}
          >
            All case studies →
          </Link>
        </div>

        <ul
          style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--border)' }}
        >
          {studies.map((study) => {
            const metric = study.card.metrics?.[0]
            return (
              <li key={study.slug} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link href={`/case-studies/${study.slug}`} className="proof-row">
                  <span
                    className="proof-industry font-mono"
                    style={{
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-dark)',
                      paddingTop: 5,
                    }}
                  >
                    {study.industry}
                  </span>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {study.card.title}
                  </span>
                  {metric ? (
                    <span className="proof-metric" style={{ textAlign: 'right' }}>
                      <span
                        className="font-display"
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 600,
                          color: 'var(--accent-dark)',
                          fontVariantNumeric: 'tabular-nums',
                          lineHeight: 1.1,
                          display: 'block',
                        }}
                      >
                        {metric.value}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        {metric.label}
                      </span>
                    </span>
                  ) : (
                    <span className="proof-metric" aria-hidden="true" />
                  )}
                  <span
                    aria-hidden="true"
                    className="proof-arrow"
                    style={{ color: 'var(--accent)', fontSize: '1.1rem', paddingTop: 2 }}
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <style>{`
        .proof-row {
          display: grid;
          grid-template-columns: 200px 1fr 180px 32px;
          gap: 8px 32px;
          align-items: start;
          padding: 24px 0;
          text-decoration: none;
          transition: background-color var(--transition-base);
        }
        .proof-row:hover {
          background: var(--bg-secondary);
        }
        .proof-row:hover .proof-arrow {
          color: var(--accent-dark);
        }
        @media (max-width: 900px) {
          .proof-row { grid-template-columns: 1fr auto; }
          .proof-industry { grid-column: 1 / -1; padding-top: 0 !important; }
          .proof-metric { text-align: left !important; grid-column: 1; }
          .proof-arrow { grid-row: 2; grid-column: 2; align-self: center; }
        }
      `}</style>
    </section>
  )
}
