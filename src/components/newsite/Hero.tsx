'use client'

import { NeuralNetworkIcon, DataFlowIcon, AgentBrainIcon } from './icons/AgentIcons'

const partners = [
  { name: 'ITC', height: 64 },
  { name: 'HUL', height: 56 },
  { name: 'DHL', height: 68 },
]

const metrics = [
  { value: '90%', label: 'Lower Ops Cost' },
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
            className="hero-badge-in"
            style={{
              animationDelay: '0.2s',
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
                animation: 'glowPulse 2s ease-in-out infinite',
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
              <span className="hero-text-reveal" style={{ animationDelay: '0.3s' }}>
                AI Agents That
              </span>
              <span className="hero-text-reveal" style={{ animationDelay: '0.45s' }}>
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

            {/* Animated accent line */}
            <div
              className="hero-animate"
              style={{
                animationDelay: '0.6s',
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
                  backgroundSize: '200% 100%',
                  animation: 'gradientTextShift 3s linear infinite',
                }}
              />
            </div>
          </div>

          <p
            className="hero-text-reveal"
            style={{
              animationDelay: '0.75s',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: 580,
              lineHeight: 1.65,
            }}
          >
            We build production AI agents that cut operational cost up to 90% — end to end, on
            your infrastructure, live in 6–12 weeks. If it doesn&apos;t move a business metric, we
            don&apos;t ship it.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-cta-in"
            style={{
              animationDelay: '0.9s',
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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
            className="hero-animate hero-metrics"
            style={{
              animationDelay: '1.1s',
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

        {/* Trust section */}
        <div
          className="hero-trust"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '32px 16px',
            borderTop: '1px solid var(--grid-line)',
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Trusted by Industry Leaders
          </p>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
            {partners.map((p) => (
              <span
                key={p.name}
                className="font-display"
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--partner-text)',
                  letterSpacing: '0.06em',
                }}
              >
                {p.name}
              </span>
            ))}
            <span
              className="font-display"
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--partner-text)',
                letterSpacing: '0.06em',
              }}
            >
              Titan Capital
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-shape {
          color: var(--accent);
          animation: floatShape 8s ease-in-out infinite;
        }
        .shape-1 { animation-delay: 0s; }
        .shape-2 { animation-delay: -2s; }
        .shape-3 { animation-delay: -4s; }

        @keyframes floatShape {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
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
