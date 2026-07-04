'use client'

import Link from 'next/link'
import { DEMO_URL } from '@/lib/seo'

const metrics = [
  { value: 'End-to-End', label: 'Department Automation' },
  { value: '6–12 wks', label: 'To Production' },
  { value: '24/7', label: 'Autonomous Ops' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100dvh',
        width: '100%',
        background: 'var(--pastel-white)',
        overflow: 'hidden',
      }}
    >
      {/* Quiet paper wash */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'var(--hero-bg-gradient)',
        }}
      />

      <div style={{ height: 96, width: '100%', flexShrink: 0 }} />

      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          className="hero-center"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            padding: '0 16px',
            textAlign: 'center',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 999,
              background: 'var(--tag-bg)',
              border: '1px solid var(--tag-border)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
              }}
            />
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--accent-highlight)',
                letterSpacing: '0.02em',
              }}
            >
              Enterprise Agentic Solutions
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
            }}
          >
            <h1
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                fontWeight: 600,
                lineHeight: 1.12,
                color: 'var(--text-primary)',
                letterSpacing: '-0.015em',
              }}
            >
              <span>
                Transform Your Enterprise
              </span>
              <span>
                <span
                  className="text-gradient"
                  style={{
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  With Agentic Solutions
                </span>
              </span>
            </h1>

            {/* Accent rule */}
            <div
              style={{
                height: 2,
                width: 72,
                background: 'var(--accent)',
              }}
            />
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: 580,
              lineHeight: 1.65,
            }}
          >
            Custom agentic implementations, tailored to your business, that automate entire
            departments from the inside — end to end. No generalized software that does half the
            job. No 18-month timelines. No migrations.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '0.95rem',
              }}
            >
              <span>Book a Discovery Call</span>
              <span className="btn-icon-chip">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
              style={{
                padding: '14px 28px',
                fontSize: '0.95rem',
              }}
            >
              <span>Explore Live Demo</span>
              <span className="btn-icon-chip">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
            <Link
              href="/case-studies"
              className="btn-outline"
              style={{
                padding: '14px 28px',
                fontSize: '0.95rem',
              }}
            >
              View Case Studies
            </Link>
          </div>

          {/* Quick metrics */}
          <div
            className="hero-metrics"
            style={{
              display: 'flex',
              gap: 32,
              marginTop: 24,
              padding: '20px 32px',
              borderRadius: 12,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--accent-highlight)',
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-metrics {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
