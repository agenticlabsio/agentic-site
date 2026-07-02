"use client";

import Animate from "./Animate";

const testimonials = [
  {
    quote: "Every CSM knows the pain of digging through five different tools just to understand one customer. With Agentic Labs, we're building a system that does that work for you: pulling together signals from Salesforce, Gong, support tickets, and usage data into one clear picture. That's what's been missing.",
    name: "Palash Soni",
    role: "Co-founder",
    company: "Goldcast.io (Series A, WestBridge Capital)",
  },
  {
    quote: "Partnering with Agentic Labs has been instrumental for Tan90. The platform they built significantly improved the speed and efficiency of our deliveries, and helped us tighten inventory tracking, billing, and invoicing while improving communication across our internal teams and with customers.",
    name: "Soumalya Mukherjee",
    role: "Founder",
    company: "Tan90 Thermal Solutions (Series A, NABVENTURES)",
  },
  {
    quote: "It's been a pleasure working with the Agentic Labs team. They're fast, responsive, and deliver with precision. Whether it's AI capabilities, frontend optimization, or migrating our codebase, we've come to trust them as a go-to team for all things tech.",
    name: "Chavan B",
    role: "Cofounder",
    company: "Strike",
  },
];

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.35 }}>
      <path
        d="M10.5 17.5H6C6 12.5 8.5 9 13 7.5L14 9.5C11 11 9.5 13 9.5 15.5H12.5C13.6 15.5 14.5 16.4 14.5 17.5V24.5C14.5 25.6 13.6 26.5 12.5 26.5H8.5C7.4 26.5 6.5 25.6 6.5 24.5V17.5H10.5ZM24.5 17.5H20C20 12.5 22.5 9 27 7.5L28 9.5C25 11 23.5 13 23.5 15.5H26.5C27.6 15.5 28.5 16.4 28.5 17.5V24.5C28.5 25.6 27.6 26.5 26.5 26.5H22.5C21.4 26.5 20.5 25.6 20.5 24.5V17.5H24.5Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="results" className="section-padding" style={{ background: "var(--pastel-grey)", position: "relative" }}>
      <div className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container-main">
        <Animate type="fadeUp">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 72px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1.15, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
              Trusted by{" "}
              <span className="text-gradient" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Industry Leaders</span>
            </h2>
          </div>
        </Animate>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <Animate key={i} type="fadeUp" delay={0.12 * i}>
              <div
                className="card-hover"
                style={{
                  borderRadius: 14,
                  padding: 32,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "var(--bg-card-hover)";
                  e.currentTarget.style.boxShadow = "0 0 0 1px var(--accent-glow), 0 20px 48px -24px var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-card)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ marginBottom: 20 }}>
                  <QuoteIcon />
                </div>
                <p style={{
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: 24,
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 20,
                }}>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-primary)" }}>{t.name}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: 4, lineHeight: 1.5 }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
      <style>{`
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
