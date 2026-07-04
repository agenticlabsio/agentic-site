"use client";

import EmailCaptureForm from "./EmailCaptureForm";
import { RocketIcon } from "./icons/AgentIcons";
import { DEMO_URL } from "@/lib/seo";

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--pastel-white)",
        padding: "100px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "100%",
          maxWidth: 700,
        }}
      >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: "var(--accent-glow)",
                border: "1px solid var(--border-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent)",
              }}
            >
              <RocketIcon size={36} />
            </div>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              lineHeight: 1.12,
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
              marginBottom: 20,
            }}
          >
            Explore What Agentic Solutions{" "}
            <span className="text-gradient" style={{ fontFamily: "var(--font-display)" }}>
              Could Do Inside Your Company
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              lineHeight: 1.75,
              maxWidth: 520,
              margin: "0 auto 32px",
            }}
          >
            Book a short discovery call. We&apos;ll map your workflows and show you exactly where agentic solutions can deliver immediate impact.
          </p>

          <div style={{ marginBottom: 24 }}>
            <EmailCaptureForm source="cta-section" buttonLabel="Book a Discovery Call" />
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              marginBottom: 28,
            }}
          >
            Or book a call directly:
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "16px 32px",
                fontSize: "1rem",
              }}
            >
              <span>Book a Discovery Call</span>
              <span className="btn-icon-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
              style={{
                padding: "16px 32px",
                fontSize: "1rem",
              }}
            >
              <span>Explore Live Demo</span>
              <span className="btn-icon-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
            <a
              href="#process"
              className="btn-outline"
              style={{
                padding: "16px 32px",
                fontSize: "1rem",
              }}
            >
              See Our Process
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "clock", text: "Response within 24h" },
              { icon: "check", text: "No commitment" },
              { icon: "lock", text: "Fully confidential" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {item.icon === "clock" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )}
                {item.icon === "check" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )}
                {item.icon === "lock" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                )}
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
