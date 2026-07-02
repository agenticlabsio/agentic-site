import Image from "next/image";

const withoutItems = [
  { label: "PRD Creation", img: "/images/comparison/without-prd.avif", span: true },
  { label: "Task Creation", img: "/images/comparison/without-task.avif" },
  { label: "Code Implementation", img: "/images/comparison/without-implementation.avif" },
];

const withItems = [
  { label: "Code Analysis", img: "/images/comparison/with-analysis.avif" },
  { label: "PRD Creation", img: "/images/comparison/with-prd.avif" },
  { label: "Task Creation", img: "/images/comparison/with-task.avif" },
  { label: "Code Implementation", img: "/images/comparison/with-implementation.avif" },
  { label: "QA Testing", img: "/images/comparison/with-testing.avif" },
  { label: "DevOps", img: "/images/comparison/with-devops.avif" },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid var(--grid-line)",
        borderBottom: "1px solid var(--grid-line)",
        background: "#e8f5e9",
        color: "var(--text-primary)",
        padding: "80px 5vw",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, zIndex: 50, height: "100%", width: 1, background: "var(--grid-line)" }} />
      <div style={{ position: "absolute", top: 0, right: 0, zIndex: 50, height: "100%", width: 1, background: "var(--grid-line)" }} />

      <div
        className="comparison-header"
        style={{
          display: "flex",
          width: "100%",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            flex: 1,
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
          }}
        >
          The New Physics of Software Delivery.{" "}
          <span
            style={{
              fontFamily: "'Inria Serif', serif",
              fontStyle: "italic",
              color: "var(--accent-highlight)",
            }}
          >
            10x Faster.
          </span>
        </h2>
        <div className="comparison-vs-spacer" style={{ flexShrink: 0, width: 40 }} />
        <h2
          style={{
            flex: 1,
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "var(--text-primary)",
            whiteSpace: "nowrap",
          }}
        >
          AI Agents + Elite Engineers.{" "}
          <span
            style={{
              fontFamily: "'Inria Serif', serif",
              fontStyle: "italic",
              color: "var(--accent-highlight)",
            }}
          >
            Strategy becomes execution.
          </span>
        </h2>
      </div>

      <div
        className="comparison-columns"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 0,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", alignSelf: "stretch" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px", width: "100%", maxWidth: 360 }}>
              {withoutItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gridColumn: item.span ? "span 2" : undefined,
                  }}
                >
                  <p style={{ marginBottom: 6, fontSize: "0.82rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                    {item.label}
                  </p>
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={140}
                    height={140}
                    style={{ height: "auto", width: "clamp(80px, 9vw, 120px)", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'Inria Serif', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#000000" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span style={{ minWidth: 24, textAlign: "center" }}>4</span>
              <span>Weeks</span>
            </div>
            <p style={{ marginTop: 4, fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              without Agentic Labs
            </p>
          </div>
        </div>

        <div
          className="comparison-vs"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch",
            flexShrink: 0,
            width: 40,
          }}
        >
          <div style={{ flex: 1, width: 1, background: "var(--grid-line)" }} />
          <span style={{ padding: "12px 0", fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", whiteSpace: "nowrap" }}>V/S</span>
          <div style={{ flex: 1, width: 1, background: "var(--grid-line)" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", alignSelf: "stretch" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px 24px", width: "100%", maxWidth: 440 }}>
              {withItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ marginBottom: 6, fontSize: "0.8rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                    {item.label}
                  </p>
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={140}
                    height={140}
                    style={{ height: "auto", width: "clamp(70px, 8vw, 110px)", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "'Inria Serif', serif", fontStyle: "italic", fontWeight: 700, fontSize: "clamp(1.6rem, 2.5vw, 2rem)", color: "#000000" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" stroke="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span style={{ minWidth: 24, textAlign: "center" }}>4</span>
              <span>Days</span>
            </div>
            <p style={{ marginTop: 4, fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>
              with Agentic Labs
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .comparison-header {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px;
          }
          .comparison-vs-spacer {
            display: none !important;
          }
          .comparison-vs {
            display: none !important;
          }
          .comparison-columns {
            flex-direction: column !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
