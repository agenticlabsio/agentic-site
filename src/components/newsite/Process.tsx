import { TargetIcon, CodeAgentIcon, RocketIcon, SupportAgentIcon } from './icons/AgentIcons'

const steps = [
  {
    icon: <TargetIcon size={40} />,
    title: 'Opportunity Audit',
    description:
      'We map how work actually moves through your organization — across teams, systems, and decision points — and pinpoint where agentic solutions cut overhead, speed execution, or replace manual coordination.',
    duration: 'Weeks 1-2',
    accent: 'var(--accent)',
  },
  {
    icon: <CodeAgentIcon size={40} />,
    title: 'Process Architecture & Redesign',
    description:
      'We design and build the agentic system that will run the workflow, integrating it with the tools, data, and operational logic that power the process. You stay in the loop the entire time.',
    duration: 'Weeks 3-6',
    accent: 'var(--accent-secondary)',
  },
  {
    icon: <RocketIcon size={40} />,
    title: 'Production Deployment',
    description:
      'We deploy into your existing stack on your cloud, connected to live systems so it begins executing real work. Built on top of your current software — no migrations, with your approved models.',
    duration: 'Weeks 6-12',
    accent: 'var(--accent-light)',
  },
  {
    icon: <SupportAgentIcon size={40} />,
    title: 'System Optimization',
    description:
      'After go-live, we keep improving how the system operates — sharpening its decision logic, increasing reliability, and extending it into new operational responsibilities.',
    duration: 'Ongoing',
    accent: 'var(--accent-dark)',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      style={{
        background: 'var(--bg-primary)',
        padding: '100px 16px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 60%)',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{ width: '100%', maxWidth: 1140, margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 64,
            textAlign: 'center',
          }}
        >
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
            How We Work
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.12,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
            }}
          >
            From Audit to{' '}
            <span className="text-gradient" style={{ fontFamily: 'var(--font-display)' }}>
              Autonomous Operations
            </span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
              lineHeight: 1.7,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            A proven methodology that combines agentic engineering with enterprise-grade delivery.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="process-timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-step"
              style={{
                display: 'flex',
                gap: 24,
                position: 'relative',
                ['--step-accent' as string]: step.accent,
              }}
            >
              {/* Timeline connector */}
              <div
                className="timeline-line"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
              >
                <div
                  className="timeline-dot"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `color-mix(in srgb, ${step.accent} 15%, var(--bg-card))`,
                    border: `2px solid color-mix(in srgb, ${step.accent} 40%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: step.accent,
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 40,
                      background: `linear-gradient(to bottom, ${step.accent}, var(--border))`,
                      borderRadius: 1,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                className="process-content"
                style={{
                  flex: 1,
                  padding: '8px 0 40px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: 999,
                      background: `color-mix(in srgb, ${step.accent} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${step.accent} 30%, transparent)`,
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: step.accent,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    maxWidth: 480,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: 48,
            textAlign: 'center',
            padding: '32px',
            borderRadius: 16,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}
          >
            Ready to transform a department?
          </p>
          <a href="#contact" className="btn-primary" style={{ padding: '12px 24px' }}>
            Book a Discovery Call
          </a>
        </div>
      </div>

      <style>{`
        .process-timeline {
          display: flex;
          flex-direction: column;
        }

        .process-step:hover .timeline-dot {
          transform: scale(1.08);
          box-shadow: 0 0 24px var(--step-accent);
        }

        @media (max-width: 640px) {
          .timeline-line {
            display: none !important;
          }
          .process-content {
            padding: 24px !important;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 12px;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </section>
  )
}
