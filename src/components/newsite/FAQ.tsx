"use client";

import { useState } from "react";

export interface HomepageFaq {
  question: string;
  answer: string;
}

// FAQs are sourced from the CMS (a subset of /resources/faq) and passed in by
// the homepage RSC, so the homepage FAQ can never drift from the canonical set.
export default function FAQ({ faqs }: { faqs: HomepageFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      style={{
        background: "var(--bg-secondary)",
        padding: "100px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 800 }}>
        {/* Header */}
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              Frequently Asked{" "}
              <span
                className="text-gradient"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                Questions
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Everything you need to know about working with Agentic Labs.
            </p>
          </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
                <div
                  key={i}
                  style={{
                    borderRadius: 12,
                    background: isOpen
                      ? "var(--faq-bg-open)"
                      : "var(--faq-bg)",
                    border: isOpen
                      ? "1px solid var(--faq-border-open)"
                      : "1px solid var(--faq-border)",
                    transition:
                      "background 0.3s ease, border-color 0.3s ease",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: isOpen ? "var(--accent-highlight)" : "var(--text-primary)",
                        lineHeight: 1.4,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: isOpen
                          ? "var(--faq-border-open)"
                          : "var(--faq-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path
                          d="M3 5.5L7 9.5L11 5.5"
                          stroke="var(--accent)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? 500 : 0,
                      transition:
                        "max-height 0.35s ease, opacity 0.3s ease",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        padding: "0 24px 22px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
