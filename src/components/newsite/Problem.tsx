"use client";

import Animate from "./Animate";
import { MetricsIcon, ShieldCheckIcon, WorkflowIcon, DataFlowIcon, NeuralNetworkIcon } from "./icons/AgentIcons";

const capabilities = [
  {
    icon: <MetricsIcon size={28} />,
    title: "ROI-First Design",
    description: "Every agent is built to a measurable outcome with an honest payback window. We instrument the work so you see the return.",
    tags: ["Outcome-First", "Instrumented", "Measurable"],
  },
  {
    icon: <ShieldCheckIcon size={28} />,
    title: "Compliance by Design",
    description: "Agents are architected around your compliance reality from day one: data residency, verifiable identity, and audit trails.",
    tags: ["Data Residency", "Audit Trails", "Regulated"],
  },
  {
    icon: <WorkflowIcon size={28} />,
    title: "Governance Built In",
    description: "Oversight over permissions, tool access, and real-world actions. Human-in-the-loop where it counts.",
    tags: ["Permissions", "HITL", "Guardrails"],
  },
  {
    icon: <DataFlowIcon size={28} />,
    title: "Cost Optimization",
    description: "One agent does the work of ten seats. We right-size models and tune inference so spend tracks outcomes.",
    tags: ["Right-Sized", "Inference Tuning", "Efficient"],
  },
  {
    icon: <NeuralNetworkIcon size={28} />,
    title: "Your Infrastructure",
    description: "Agents run on compute you control: your VPC or hardware. Sensitive data stays home with no API markup.",
    tags: ["Your VPC", "Low Latency", "Data Control"],
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
        <Animate type="blur">
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
              Our Capabilities
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
              Agents Built for{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                Enterprise Reality
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
              Most AI pilots fail because they ignore enterprise constraints. We build custom agents that ship, govern, and return real ROI.
            </p>
          </div>
        </Animate>

        {/* Hexagonal/Bento grid layout */}
        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * i}>
              <div
                className="capability-card"
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
            </Animate>
          ))}
        </div>

        <Animate type="fadeUp" delay={0.5}>
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
              Get{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                Measurable Outcomes
              </span>
              {" "}From Your AI Investment
            </p>
          </div>
        </Animate>
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
