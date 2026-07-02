"use client";

import Animate from "./Animate";

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
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(48,100,126,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "100%",
          maxWidth: 1140,
        }}
      >
        <Animate type="blur">
          <div
            style={{ margin: "0 auto 48px" }}
          >
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: 20,
                whiteSpace: "nowrap",
              }}
            >
              Welcome to the{" "}
              <span
                style={{
                  fontFamily: "'Inria Serif', serif",
                  fontStyle: "italic",
                  color: "var(--accent-highlight)",
                }}
              >
                AI-Powered Era of Supply Chain Operations.
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.75,
                maxWidth: 520,
                margin: "0 auto",
              }}
            >
              Book a free strategy session and get a sprint roadmap, tailored to
              your goals.
            </p>
          </div>
        </Animate>

        <Animate type="fadeUp" delay={0.2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--cta-btn-bg)",
                color: "var(--cta-btn-color)",
                padding: "15px 32px",
                borderRadius: 8,
                fontSize: "0.95rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span>Book a Strategy Call</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--cta-btn-arrow)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href="#process"
              style={{
                padding: "15px 32px",
                borderRadius: 10,
                border: "1px solid var(--card-blue-border)",
                background: "var(--card-blue-bg)",
                color: "var(--text-primary)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                transition:
                  "border-color 0.3s ease, background 0.3s ease, color 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--card-blue-border-hover)";
                e.currentTarget.style.background = "var(--card-blue-bg-hover)";
                e.currentTarget.style.color = "#5a9cb8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--card-blue-border)";
                e.currentTarget.style.background = "var(--card-blue-bg)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Review Your System
            </a>
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginTop: 28,
            }}
          >
            We&apos;ll respond within 24 hours. No spam, ever.
          </p>
        </Animate>
      </div>
    </section>
  );
}
