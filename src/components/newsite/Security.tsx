"use client";


const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    title: "Your Infrastructure",
    description: "Agents run in your approved cloud environment or on-premises. You control access, networking, and data boundaries.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: "Zero Data Retention",
    description: "Client data is never reused, retained, or used for model training. Your data stays yours.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: "Full Observability",
    description: "Every action, decision, and workflow is logged for review and audit. Complete transparency into agent behavior.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: "No Black Boxes",
    description: "We never deploy opaque systems. Every agent component can be inspected, understood, and explained.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section-padding" style={{ background: "var(--bg-secondary)", position: "relative" }}>
      {/* Top border gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--accent), var(--accent-secondary), transparent)",
        }}
      />

      <div className="container-main">
          <div style={{ maxWidth: 600, marginBottom: 56, textAlign: "center", margin: "0 auto 56px" }}>
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
              Trust & Security
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
              Enterprise-Grade{" "}
              <span className="text-gradient">Security</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 20, fontSize: "1.05rem", lineHeight: 1.7 }}>
              Our delivery model moves fast inside enterprise constraints, not around them.
            </p>
          </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="security-grid">
          {cards.map((card, i) => (
              <div
                key={i}
                className="security-card"
                style={{
                  borderRadius: 16,
                  padding: 28,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
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
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 10, color: "var(--text-primary)" }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                  {card.description}
                </p>
              </div>
          ))}
        </div>

        {/* Compliance badges */}
          <div
            style={{
              marginTop: 48,
              padding: "24px 32px",
              borderRadius: 16,
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            {["SOC 2", "GDPR", "HIPAA Ready", "ISO 27001"].map((badge, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
      </div>

      <style>{`
        .security-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-accent);
          box-shadow: 0 20px 50px -12px var(--accent-glow);
        }

        @media (max-width: 640px) {
          .security-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
