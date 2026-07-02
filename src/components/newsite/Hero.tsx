"use client";

import Image from "next/image";

const partners = [
  { name: "ITC", height: 64 },
  { name: "HUL", height: 56 },
  { name: "DHL", height: 68 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        width: "100%",
        background: "var(--pastel-white)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: "var(--hero-bg-gradient)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: "var(--grain-opacity, 0.15)" as any,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          pointerEvents: "none",
        }}
      />

      <div style={{ height: 96, width: "100%", flexShrink: 0 }} />

      <div style={{ display: "flex", flex: 1, flexDirection: "column", position: "relative", zIndex: 10 }}>
        <div
          className="hero-center"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <h1
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                fontSize: "clamp(2.2rem, 5.5vw, 3.75rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              <span className="hero-text-reveal" style={{ animationDelay: "0.3s" }}>Code Moves Fast.</span>
              <span
                className="hero-light-speed hero-text-reveal hero-speed-text"
                data-text="We Move Faster."
                style={{
                  animationDelay: "0.5s",
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                }}
              >
                We Move Faster.
              </span>
            </h1>

            <div
              className="hero-animate"
              style={{
                animationDelay: "0.7s",
                position: "relative",
                height: 4,
                width: 320,
                maxWidth: "80vw",
                overflow: "hidden",
                borderRadius: 4,
              }}
            >
              <div className="laser-base" />
              <div className="laser-pulse" style={{ opacity: 0.6, animation: "pulseRing 2s ease-in-out infinite" }} />
              <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: 64, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)", animation: "laser 2s ease-in-out infinite" }} />
              <div className="laser-sweep" style={{ animation: "laser 2s ease-in-out infinite 0.5s" }} />
            </div>
          </div>

          <p
            className="hero-text-reveal"
            style={{
              animationDelay: "0.9s",
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            AI + Humans. Production-grade software. 10x faster.
          </p>

          <div className="hero-cta-in" style={{ animationDelay: "1.1s" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--cta-btn-bg)",
                color: "var(--cta-btn-color)",
                padding: "10px 24px",
                borderRadius: 8,
                fontSize: "0.9rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span style={{ marginTop: 1 }}>Book a Strategy Call</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--cta-btn-arrow)" }}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="hero-bottom-section"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "flex-start",
            borderTop: "1px solid var(--grid-line)",
            borderBottom: "1px solid var(--grid-line)",
          }}
        >
          <div className="hero-side-spacer" style={{ width: 80, height: 32, borderBottom: "1px solid var(--grid-line)" }} />

          <div className="hero-trust-grid" style={{ display: "flex", flex: 1 }}>
            <div
              className="hero-trusted-col"
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid var(--grid-line)",
              }}
            >
              <div
                style={{
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid var(--grid-line)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.02em",
                }}
              >
                Trusted by Leading Enterprises
              </div>
              <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
                {partners.map((p, i) => (
                  <div
                    key={p.name}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 12,
                      height: 112,
                      borderRight: i < partners.length - 1 ? "1px solid var(--grid-line)" : "none",
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--partner-text)",
                        letterSpacing: "0.08em",
                        filter: "grayscale(1)",
                      }}
                    >
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-backed-col" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid var(--grid-line)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.02em",
                }}
              >
                Backed By
              </div>
              <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center", padding: 12, height: 112 }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--partner-text)",
                    letterSpacing: "0.06em",
                    filter: "grayscale(1)",
                  }}
                >
                  Titan Capital
                </span>
              </div>
            </div>
          </div>

          <div className="hero-side-spacer" style={{ width: 80, height: 32, borderBottom: "1px solid var(--grid-line)" }} />
        </div>
      </div>

      <div className="hero-side-borders" style={{ position: "absolute", top: 96, bottom: 0, left: 80, width: 1, background: "var(--grid-line)", zIndex: 5, pointerEvents: "none" }} />
      <div className="hero-side-borders" style={{ position: "absolute", top: 96, bottom: 0, right: 80, width: 1, background: "var(--grid-line)", zIndex: 5, pointerEvents: "none" }} />

      <style>{`
        /* "We Move Faster." text — theme-aware via --accent-highlight */
        .hero-speed-text { color: var(--accent-highlight); }

        /* Laser bar — dark pastel green in light, original teal in dark */
        .laser-base  { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(46,125,82,0.50), rgba(106,191,138,0.30), transparent); }
        .laser-pulse { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(46,125,82,0.55), transparent); }
        .laser-sweep { position: absolute; top: 0; left: 0; height: 100%; width: 128px; background: linear-gradient(90deg, transparent, rgba(74,158,110,0.65), transparent); }
        [data-theme="dark"] .laser-base  { background: linear-gradient(90deg, transparent, rgba(48,100,126,0.50), transparent); }
        [data-theme="dark"] .laser-pulse { background: linear-gradient(90deg, transparent, rgba(48,100,126,0.60), transparent); }
        [data-theme="dark"] .laser-sweep { background: linear-gradient(90deg, transparent, rgba(48,100,126,0.70), transparent); }

        .hero-side-spacer { display: block; }
        .hero-side-borders { display: block; }
        .hero-trust-grid { flex-direction: row; }
        .hero-trusted-col { border-left: 1px solid var(--grid-line); }
        .hero-backed-col { border-right: 1px solid var(--grid-line); }

        @media (max-width: 1024px) {
          .hero-side-spacer { display: none !important; }
          .hero-side-borders { display: none !important; }
          .hero-trusted-col { border-left: none !important; }
          .hero-backed-col { border-right: none !important; }
        }

        @media (max-width: 768px) {
          .hero-trust-grid {
            flex-direction: column !important;
          }
          .hero-trusted-col {
            border-right: none !important;
            border-bottom: 1px solid var(--grid-line);
          }
        }
      `}</style>
    </section>
  );
}