"use client";

import Image from "next/image";
import EmailCaptureForm from "./EmailCaptureForm";

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterSocialLink {
  platform: string;
  url: string;
}

export interface FooterProps {
  tagline: string;
  linkGroups: FooterLinkGroup[];
  socialLinks: FooterSocialLink[];
}

export default function Footer({ tagline, linkGroups, socialLinks }: FooterProps) {
  return (
    <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--border)" }}>
      <div className="container-main" style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div
          className="footer-signup"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            paddingBottom: 40,
            marginBottom: 48,
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 420 }}>
            <h3
              className="font-display"
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 6,
              }}
            >
              Stay ahead on agentic operations
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              Get occasional briefings on agentic systems, deployment playbooks, and client outcomes. No spam.
            </p>
          </div>
          <EmailCaptureForm source="footer" compact buttonLabel="Subscribe" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }} className="footer-grid">
          <div>
            <Image
              src="/logo.png"
              alt="Agentic Labs"
              width={160}
              height={56}
              style={{ height: 42, width: "auto", marginBottom: 20, filter: "brightness(0)", opacity: 0.88 }}
            />
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.88rem",
                lineHeight: 1.7,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              {tagline}
            </p>

            <div style={{ display: "flex", gap: 12 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                  aria-label={s.platform}
                >
                  {s.platform === "linkedin" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {s.platform === "x" && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {s.platform === "github" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4
                className="font-display"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "var(--text-primary)",
                }}
              >
                {group.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      style={{
                        fontSize: "0.85rem",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} Agentic Labs. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Built agentic. Deployed for humans.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .footer-link:hover, .footer-link:focus-visible {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
