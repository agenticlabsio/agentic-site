"use client";

import Animate from "./Animate";

const logos = ["ITC", "HUL", "DHL", "Goldcast", "Tan90", "Strike", "SPRY", "Baki AI"];

export default function TrustBar() {
  return (
    <section style={{ padding: "48px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-secondary)" }}>
      <div className="container-main">
        <Animate type="fadeUp">
          <p className="font-display" style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 32 }}>
            Trusted by Leading Enterprises
          </p>
        </Animate>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} style={{ flexShrink: 0, padding: "0 44px", display: "flex", alignItems: "center", height: 40 }}>
              <span className="font-display" style={{ fontSize: "1.15rem", fontWeight: 700, color: "rgba(240,242,245,0.12)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
