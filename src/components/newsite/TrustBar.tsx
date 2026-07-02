"use client";

import Animate from "./Animate";

const logos = ["ITC", "HUL", "DHL", "Goldcast", "Tan90", "Strike", "SPRY", "Baki AI"];

const integrations = [
  { name: "Salesforce", category: "CRM" },
  { name: "SAP", category: "ERP" },
  { name: "Oracle", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Snowflake", category: "Data" },
  { name: "Slack", category: "Communication" },
];

export default function TrustBar() {
  return (
    <section
      style={{
        padding: "64px 16px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Clients section */}
      <div className="container-main">
        <Animate type="fadeUp">
          <p
            className="font-display"
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            Trusted by Leading Enterprises
          </p>
        </Animate>
      </div>

      {/* Animated marquee */}
      <div style={{ overflow: "hidden", marginBottom: 48 }}>
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                padding: "0 48px",
                display: "flex",
                alignItems: "center",
                height: 48,
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--partner-text)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations section */}
      <div className="container-main">
        <Animate type="fadeUp" delay={0.2}>
          <p
            className="font-display"
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Works With Your Stack
          </p>
        </Animate>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
          }}
        >
          {integrations.map((int, i) => (
            <Animate key={i} type="fadeUp" delay={0.05 * i}>
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>
                  {int.name}
                </span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  {int.category}
                </span>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
