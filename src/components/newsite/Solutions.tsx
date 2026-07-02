"use client";

import Animate from "./Animate";

const solutions = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L2 8l12 6 12-6-12-6zM2 20l12 6 12-6M2 14l12 6 12-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No More Bottlenecks",
    description:
      "Teams ask live system questions in natural language, with safe access controls and reliable answers.",
    tags: ["Sales", "Finance", "Operation", "Leadership"],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8l3 3M20 8l-3 3M8 20l3-3M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "One Trusted View",
    description:
      "We connect ERP, 3PL, and BI data into a single governed source of truth for inventory, demand, and POs.",
    tags: ["ERP", "3PL", "BI Data", "Source of Truth"],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h22M9 4v6M19 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ROI From Tools",
    description:
      "We layer agents on top of your data lake and SaaS stack to drive real decisions and workflows. You get measurable outcomes.",
    tags: ["Data Lakes", "SaaS Stack", "Measurable Outcomes"],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Safe AI Outputs",
    description:
      "LLMs are constrained with code, evals, and human checks so results stay predictable, auditable, and inventory-safe.",
    tags: ["Deterministic AI", "Trusted", "Governed", "Transparent"],
  },
];

export default function Solutions() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-main">
        <Animate type="fadeUp">
          <div style={{ maxWidth: 600, marginBottom: 56 }}>
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
              Our Solutions
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                marginTop: 12,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              End-to-End AI Transformation
            </h2>
          </div>
        </Animate>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {solutions.map((s, i) => (
            <Animate key={i} type={i % 2 === 0 ? "fadeLeft" : "fadeRight"} delay={0.08 * i}>
              <div
                className="card-hover"
                style={{
                  borderRadius: 14,
                  padding: 32,
                  background: "var(--bg-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="icon-box"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
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
                  {s.icon}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10 }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    marginBottom: 18,
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
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
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
      </div>
      <style>{`
        @media (max-width: 768px) { .solutions-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
