"use client";

import { MetricsIcon, ShieldCheckIcon, WorkflowIcon, DataFlowIcon, NeuralNetworkIcon } from "./icons/AgentIcons";

const capabilities = [
  {
    icon: <MetricsIcon size={28} />,
    title: "Finance Operations",
    description: "Proactive agents handle accounts payable, receivable, reconciliation, and forecasting. Close the books faster, without the overhead.",
    tags: ["AP / AR", "Reconciliation", "Forecasting"],
  },
  {
    icon: <ShieldCheckIcon size={28} />,
    title: "Procurement",
    description: "Agents run vendor onboarding, purchasing approvals, contract coordination, and supplier communication — cutting cycle times and off-contract spend.",
    tags: ["Onboarding", "Approvals", "Contracts"],
  },
  {
    icon: <WorkflowIcon size={28} />,
    title: "Revenue Operations",
    description: "Agents keep CRM data clean, route deal-desk approvals, and assemble pipeline reporting and forecasts — so reps sell instead of doing ops work.",
    tags: ["CRM Hygiene", "Deal Desk", "Forecasts"],
  },
  {
    icon: <DataFlowIcon size={28} />,
    title: "Compliance & Risk",
    description: "Agents track regulatory deadlines, assemble audit documentation, monitor policy adherence, and flag exceptions before they become findings.",
    tags: ["Audit-Ready", "Monitoring", "Exceptions"],
  },
  {
    icon: <NeuralNetworkIcon size={28} />,
    title: "And the Rest of the Business",
    description: "From logistics and support to HR and IT operations, the same agentic layer extends across the workflows that run your organization.",
    tags: ["Logistics", "Support", "Operations"],
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: "var(--pastel-white)",
        padding: "100px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1140 }}>
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
              Where We Deploy
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
              Where Agentic Solutions{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                Get Deployed
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
              Across the operational functions that run the business — deployed on top of the systems you already use.
            </p>
          </div>

        {/* Hexagonal/Bento grid layout */}
        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
              <div className="card-bezel" key={i}>
              <div
                className="capability-card card-bezel-inner"
                style={{
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Hover glow */}
                <div
                  className="card-glow"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, transparent, var(--accent), var(--accent-secondary), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                />

                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "var(--accent-glow)",
                    border: "1px solid var(--border-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 20,
                    transition: "all 0.3s ease",
                  }}
                >
                  {cap.icon}
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
                  {cap.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: 18,
                    flex: 1,
                  }}
                >
                  {cap.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cap.tags.map((t, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "4px 10px",
                        fontSize: "0.72rem",
                        borderRadius: 999,
                        background: "var(--tag-bg)",
                        border: "1px solid var(--tag-border)",
                        color: "var(--accent-highlight)",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              </div>
          ))}
        </div>

          <div
            style={{
              marginTop: 48,
              textAlign: "center",
              padding: "24px 32px",
              borderRadius: 16,
              background: "linear-gradient(135deg, var(--accent-glow), transparent)",
              border: "1px solid var(--border-accent)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Built to work with{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                your existing systems
              </span>
              {" "}— no migrations required
            </p>
          </div>
      </div>

      <style>{`
        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .capabilities-grid > *:nth-child(4) {
          grid-column: span 1;
        }
        .capabilities-grid > *:nth-child(5) {
          grid-column: span 2;
        }

        .capability-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px -12px var(--accent-glow);
        }
        .capability-card:hover .card-glow {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .capabilities-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .capabilities-grid > *:nth-child(5) {
            grid-column: span 1;
          }
        }
        @media (max-width: 640px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
          }
          .capabilities-grid > *:nth-child(5) {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
