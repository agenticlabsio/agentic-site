'use client'

import { NeuralNetworkIcon, DataFlowIcon, AgentBrainIcon } from './icons/AgentIcons'

const metrics = [
  { value: '$1M+', label: 'Ops Cost Saved' },
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
      {/* Animated background gradient orbs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'var(--hero-bg-gradient)',
        }}
      />

      {/* Floating geometric shapes */}
      <div
        className="hero-shapes"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          className="hero-shape shape-1"
          style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.08 }}
        >
          <NeuralNetworkIcon size={120} />
        </div>
        <div
          className="hero-shape shape-2"
          style={{ position: 'absolute', top: '25%', right: '10%', opacity: 0.06 }}
        >
          <DataFlowIcon size={100} />
        </div>
        <div
          className="hero-shape shape-3"
          style={{ position: 'absolute', bottom: '20%', left: '15%', opacity: 0.05 }}
        >
          <AgentBrainIcon size={80} />
        </div>
      </div>

      {/* Grain texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          opacity: 'var(--grain-opacity, 0.15)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          pointerEvents: 'none',
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
              Enterprise AI, Measured in ROI
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
                fontWeight: 700,
                lineHeight: 1.08,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              <span>
                AI Agents That
              </span>
              <span>
                <span
                  className="text-gradient"
                  style={{
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Pay for Themselves
                </span>
              </span>
            </h1>

            {/* Accent line */}
            <div
              style={{
                position: 'relative',
                height: 3,
                width: 280,
                maxWidth: '70vw',
                overflow: 'hidden',
                borderRadius: 4,
                background: 'var(--border)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(90deg, var(--accent), var(--accent-secondary), var(--accent))',
                }}
              />
            </div>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: 580,
              lineHeight: 1.65,
            }}
          >
            We build production AI agents that cut operational cost significantly — end to end, on
            your infrastructure, live in 6–12 weeks. If it doesn&apos;t move a business metric, we
            don&apos;t ship it.
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
              <span>Book an ROI Assessment</span>
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
              href="#results"
              className="btn-outline"
              style={{
                padding: '14px 28px',
                fontSize: '0.95rem',
              }}
            >
              See the Results
            </a>
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
        .hero-shape {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .hero-metrics {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 16px 24px !important;
          }
          .hero-shapes { display: none; }
        }
      `}</style>
    </section>
  )
}
