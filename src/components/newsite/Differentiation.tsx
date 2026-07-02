"use client";

import Animate from "./Animate";

const items = [
  {
    num: "01",
    title: "Outcomes, Not Hours",
    description:
      "Fixed weekly outcomes eliminate planning drag and billable-hour friction.",
  },
  {
    num: "02",
    title: "AI-Native Engineering Team",
    description:
      "Senior engineers trained to ship real systems, not experiments.",
  },
  {
    num: "03",
    title: "Internal Agent System",
    description:
      "AI agents accelerate specs, code, testing, and deployment in parallel.",
  },
  {
    num: "04",
    title: "Built for Production",
    description:
      "Enterprise constraints are addressed early, not after 'success'.",
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
      }}
    >
      <div style={{ width: "100%", maxWidth: 1140 }}>
        {/* Header */}
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
              We Don&apos;t Just Claim.{" "}
              <br />
              <span
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontStyle: "italic",
                  color: "var(--accent-highlight)",
                }}
              >
                We Prove.
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
              Agentic Labs is built different — outcome-driven, AI-native, and
              production-first from day one.
            </p>
          </div>
        </Animate>

        {/* Cards grid */}
        <div
          className="diff-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
        >
          {items.map((item, i) => (
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
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--tag-bg)",
                    border: "1px solid var(--tag-border)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--accent-highlight)",
                    marginBottom: 18,
                    fontFamily: "'Inria Serif', serif",
                    fontStyle: "italic",
                  }}
                >
                  {item.num}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "var(--text-primary)",
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
            </Animate>
          ))}
        </div>

      </div>

      <style>{`
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
