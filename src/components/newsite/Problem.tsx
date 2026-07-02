"use client";

import Animate from "./Animate";

const solutions = [
  {
    title: "No More Bottlenecks",
    description:
      "Teams ask live system questions in natural language, with safe access controls and reliable answers.",
    tags: ["Sales", "Finance", "Operation", "Leadership"],
  },
  {
    title: "One Trusted View",
    description:
      "We connect ERP, 3PL, and BI data into a single governed source of truth for inventory, demand, and POs.",
    tags: ["ERP", "3PL", "BI Data", "Source of Truth"],
  },
  {
    title: "ROI From Tools",
    description:
      "We layer agents on top of your data lake and SaaS stack to drive real decisions and workflows.",
    subtitle: "Deploy AGENTS on top of existing data lakes and SaaS tools",
    tags: ["Data Lakes", "SaaS Stack", "Measurable Outcomes"],
  },
  {
    title: "Safe AI Outputs",
    description:
      "LLMs are constrained with code, evals, and human checks so results stay predictable, auditable, and inventory-safe.",
    tags: ["Deterministic AI", "Trusted", "Governed", "Transparent", "Verifiable"],
  },
  {
    title: "Fast Scenarios",
    description:
      '"What if" changes run quickly and correctly with deterministic models, not fragile spreadsheets.',
    tags: ["Scenario Planning", "Deterministic", "Real-time"],
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
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              Too Many Supply Chain Tools.
              <br />
              <span
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontStyle: "italic",
                  color: "var(--accent-highlight)",
                }}
              >
                Not Enough ROI
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
              Data is fragmented, answers aren&apos;t trusted, and decisions are still bottleneck in supply chain operations.
            </p>
          </div>
        </Animate>

        <div
          className="solutions-grid-top"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginBottom: 12,
          }}
        >
          {solutions.slice(0, 3).map((s, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * i}>
              <div
                style={{
                  borderRadius: 12,
                  padding: "28px 24px",
                  background: "var(--card-blue-bg)",
                  border: "1px solid var(--card-blue-border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-blue-border-hover)";
                  e.currentTarget.style.background = "var(--card-blue-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-blue-border)";
                  e.currentTarget.style.background = "var(--card-blue-bg)";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--text-primary)",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: s.subtitle ? 12 : 18,
                    flex: 1,
                  }}
                >
                  {s.description}
                </p>
                {s.subtitle && (
                  <p
                    style={{
                      color: "var(--accent-highlight)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      fontFamily: "'Inria Serif', serif",
                      fontStyle: "italic",
                      marginBottom: 18,
                      lineHeight: 1.5,
                    }}
                  >
                    {s.subtitle}
                  </p>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((t, j) => (
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

        <div
          className="solutions-grid-bottom"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
          }}
        >
          {solutions.slice(3).map((s, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * (i + 3)}>
              <div
                style={{
                  borderRadius: 12,
                  padding: "28px 24px",
                  background: "var(--card-blue-bg)",
                  border: "1px solid var(--card-blue-border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-blue-border-hover)";
                  e.currentTarget.style.background = "var(--card-blue-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-blue-border)";
                  e.currentTarget.style.background = "var(--card-blue-bg)";
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--text-primary)",
                  }}
                >
                  {s.title}
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
                  {s.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((t, j) => (
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

        <Animate type="fadeUp" delay={0.35}>
          <div
            style={{
              marginTop: 24,
              textAlign: "center",
              padding: "20px 32px",
              borderRadius: 12,
              background: "var(--card-blue-bg-hover)",
              border: "1px solid var(--tag-border)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              You Get{" "}
              <span
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontStyle: "italic",
                  color: "var(--accent-highlight)",
                }}
              >
                Measurable Outcomes
              </span>
            </p>
          </div>
        </Animate>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .solutions-grid-top {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .solutions-grid-top,
          .solutions-grid-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
