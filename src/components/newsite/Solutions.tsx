"use client";

import Animate from "./Animate";

const solutions = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4v4M20 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 14h4M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Finance & Operations",
    description: "Automate AP/AR, reconciliation, forecasting, and close processes. Your finance team operates like it's 3x the size.",
    industries: ["AP/AR", "Reconciliation", "FP&A", "Close"],
    color: "var(--accent)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 9v10l10 5 10-5V9L14 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 9l10 5 10-5M14 14v10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Supply Chain & Logistics",
    description: "Exception handling, demand sensing, inventory optimization, and supplier coordination. Ship without the backlog.",
    industries: ["Demand Planning", "Inventory", "Procurement", "WMS"],
    color: "var(--accent-secondary)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S4 19.523 4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 14h6M14 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 10l-4 4-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Revenue Operations",
    description: "CRM hygiene, deal desk automation, pipeline intelligence, and forecast assembly. Keep reps selling, not doing admin.",
    industries: ["CRM", "Deal Desk", "Forecasting", "Enablement"],
    color: "var(--accent-light)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L4 6v8c0 7 5 12 10 14 5-2 10-7 10-14V6L14 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Compliance & Risk",
    description: "Regulatory tracking, audit documentation, policy monitoring, and exception flagging. Stay audit-ready without the overhead.",
    industries: ["Regulatory", "Audit", "Policy", "Risk"],
    color: "var(--accent-dark)",
  },
];

export default function Solutions() {
  return (
    <section id="services" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-main">
        <Animate type="fadeUp">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
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
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                marginTop: 12,
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
              }}
            >
              AI Agents Across Your{" "}
              <span className="text-gradient">Enterprise</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 20, fontSize: "1.05rem", lineHeight: 1.7 }}>
              We deploy autonomous agents in the operational functions that run your business.
            </p>
          </div>
        </Animate>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {solutions.map((s, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * i}>
              <div
                className="solution-card"
                style={{
                  borderRadius: 16,
                  padding: 32,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  ["--card-accent" as string]: s.color,
                }}
              >
                {/* Accent line on hover */}
                <div
                  className="accent-line"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                />

                <div
                  className="icon-box"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `color-mix(in srgb, ${s.color} 12%, var(--bg-card))`,
                    border: `1px solid color-mix(in srgb, ${s.color} 25%, transparent)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: s.color,
                    marginBottom: 24,
                    transition: "all 0.3s ease",
                  }}
                >
                  {s.icon}
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: 12 }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.7,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {s.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.industries.map((ind, j) => (
                    <span
                      key={j}
                      style={{
                        padding: "6px 12px",
                        fontSize: "0.75rem",
                        borderRadius: 8,
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </Animate>
          ))}
        </div>

        <Animate type="fadeUp" delay={0.4}>
          <div
            style={{
              marginTop: 48,
              padding: "24px 32px",
              borderRadius: 12,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>+ 300</span> additional enterprise workflows supported
            </p>
          </div>
        </Animate>
      </div>

      <style>{`
        .solution-card:hover {
          transform: translateY(-4px);
          border-color: var(--card-accent);
          box-shadow: 0 20px 50px -12px var(--accent-glow);
        }
        .solution-card:hover .accent-line {
          opacity: 1;
        }
        .solution-card:hover .icon-box {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
