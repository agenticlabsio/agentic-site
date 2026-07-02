"use client";

import Animate from "./Animate";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Client-Controlled Environments",
    description: "Systems run in your approved infrastructure or cloud environment. You control access, networking, and data boundaries.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "No Client Data Retention",
    description: "Client data is never reused, retained, or used for model training across engagements.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Observable Systems",
    description: "Actions, decisions, and workflows can be logged, reviewed, and audited.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "No Black Boxes",
    description: "We do not deploy opaque systems that teams can't inspect or reason about.",
  },
];

export default function Security() {
  return (
    <section id="security" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
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
              Trust &amp; Security
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
              Speed Without Compromising Control
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 20, fontSize: "1.05rem", lineHeight: 1.7 }}>
              Our delivery model is designed to move fast inside enterprise constraints, not around them.
            </p>
          </div>
        </Animate>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="security-grid">
          {cards.map((card, i) => (
            <Animate key={i} type="fadeUp" delay={0.1 * i}>
              <div
                className="card-hover"
                style={{
                  borderRadius: 14,
                  padding: 28,
                  background: "var(--bg-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
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
            </Animate>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) { .security-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
