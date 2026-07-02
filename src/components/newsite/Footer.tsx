"use client";

import Image from "next/image";

const footerLinks = {
  Solutions: [
    { label: "Supply Chain AI", href: "#problem" },
    { label: "Agentic Workflows", href: "#process" },
    { label: "Data & Analytics", href: "#problem" },
    { label: "Enterprise AI", href: "#problem" },
  ],
  Navigate: [
    { label: "How We Work", href: "#process" },
    { label: "Testimonials", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container-main" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}
          className="footer-grid"
        >
          {/* Logo column */}
          <div>
            <Image
              src="/logo.png"
              alt="Agentic Labs"
              width={160}
              height={56}
              style={{ height: 46, width: "auto", marginBottom: 16 }}
            />
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              We build AI-native operations, agentic workflows, and data-driven strategies that transform how
              enterprises work.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/agenticlabsio/posts/?feedView=all" },
                { label: "X", href: "https://x.com/agenticlabsio" },
                { label: "GitHub", href: "https://github.com/agenticlabsio" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services & Company columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-display"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 14,
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal column */}
          <div>
            <h4
              className="font-display"
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                marginBottom: 14,
                color: "var(--text-primary)",
              }}
            >
              Legal
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {["Privacy Policy", "Refund Policy", "Terms and Conditions"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 20,
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            &copy; 2026 Agentic Labs. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
