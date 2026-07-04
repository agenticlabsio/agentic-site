"use client";


const traditionalApproach = [
  { label: "18+ month timelines", negative: true },
  { label: "Pilots that never reach production", negative: true },
  { label: "Generic off-the-shelf solutions", negative: true },
  { label: "Governance as an afterthought", negative: true },
  { label: "Hidden costs and scope creep", negative: true },
];

const agenticApproach = [
  { label: "Production in 4 weeks", positive: true },
  { label: "Built for ROI from day one", positive: true },
  { label: "Custom agents for your workflows", positive: true },
  { label: "Compliance baked into design", positive: true },
  { label: "Fixed outcomes, transparent pricing", positive: true },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      style={{
        position: "relative",
        padding: "100px 16px",
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />

      <div style={{ width: "100%", maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              The Difference
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.12,
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
                marginTop: 12,
              }}
            >
              Why Most AI Projects{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                Fail to Deliver
              </span>
            </h2>
          </div>

        <div
          className="comparison-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {/* Traditional */}
            <div
              style={{
                padding: 32,
                borderRadius: 16,
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(229, 72, 77, 0.1)",
                    border: "1px solid rgba(229, 72, 77, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5484d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M15 9l-6 6M9 9l6 6" />
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Traditional AI Consulting
                </h3>
              </div>

              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {traditionalApproach.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "rgba(229, 72, 77, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e5484d" strokeWidth="3" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  marginTop: 24,
                  padding: "16px 20px",
                  borderRadius: 10,
                  background: "rgba(229, 72, 77, 0.06)",
                  border: "1px solid rgba(229, 72, 77, 0.12)",
                }}
              >
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  &ldquo;Nearly 1 in 5 AI projects never reach production&rdquo;
                </p>
              </div>
            </div>

          {/* Agentic Labs */}
            <div
              style={{
                padding: 32,
                borderRadius: 16,
                background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--bg-card)), var(--bg-card))",
                border: "1px solid var(--border-accent)",
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow effect */}
              <div
                style={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "var(--accent-glow)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "var(--accent-glow)",
                      border: "1px solid var(--border-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    The Agentic Labs Way
                  </h3>
                </div>

                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {agenticApproach.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 20,
                          height: 20,
                          borderRadius: 6,
                          background: "var(--accent-glow)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 2,
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 24,
                    padding: "16px 20px",
                    borderRadius: 10,
                    background: "var(--accent-glow)",
                    border: "1px solid var(--border-accent)",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", color: "var(--accent-highlight)", fontWeight: 500 }}>
                    Every agent we ship reaches production with measurable ROI
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
