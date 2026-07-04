"use client";

import { SpeedIcon, NeuralNetworkIcon, AgentBrainIcon, ShieldCheckIcon } from "./icons/AgentIcons";

const items = [
  {
    icon: <SpeedIcon size={32} />,
    title: "Outcomes, Not Hours",
    description: "Fixed weekly outcomes eliminate planning drag and billable-hour friction. Pay for shipped results.",
    stat: "10x",
    statLabel: "Faster",
  },
  {
    icon: <NeuralNetworkIcon size={32} />,
    title: "AI-Native Engineering",
    description: "Senior engineers trained to ship production systems, not experiments. Every line is production-ready.",
    stat: "10+ yrs",
    statLabel: "Senior Engineers",
  },
  {
    icon: <AgentBrainIcon size={32} />,
    title: "Internal Agent Systems",
    description: "AI agents accelerate specs, code, testing, and deployment in parallel. We practice what we preach.",
    stat: "4x",
    statLabel: "Throughput",
  },
  {
    icon: <ShieldCheckIcon size={32} />,
    title: "Built for Production",
    description: "Compliance, governance, and enterprise constraints are designed in from day one, not bolted on after.",
    stat: "0",
    statLabel: "Pilot Failures",
  },
];

export default function Differentiation() {
  return (
    <section
      style={{
        background: "var(--pastel-green)",
        padding: "100px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: 1140, position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
            <span
              className="font-display"
              style={{
                fontSize: "0.8rem",
                color: "var(--accent)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Why Agentic Labs
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
                marginTop: 12,
                marginBottom: 20,
              }}
            >
              We Don&apos;t Just Promise.{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                We Deliver.
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.75,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              Outcome-driven, AI-native, and built for production and governance from day one.
            </p>
          </div>

        <div
          className="diff-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {items.map((item, i) => (
              <div
                key={i}
                className="diff-card"
                style={{
                  borderRadius: 16,
                  padding: "28px 24px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "var(--accent-glow)",
                    border: "1px solid var(--border-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 20,
                  }}
                >
                  {item.icon}
                </div>

                {/* Stat */}
                <div style={{ marginBottom: 16 }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--accent-highlight)",
                      lineHeight: 1,
                    }}
                  >
                    {item.stat}
                  </span>
                  <span
                    style={{
                      marginLeft: 6,
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.statLabel}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--text-primary)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {item.description}
                </p>
              </div>
          ))}
        </div>
      </div>

      <style>{`
        .diff-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px -12px var(--accent-glow);
        }

        @media (max-width: 1024px) {
          .diff-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .diff-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
