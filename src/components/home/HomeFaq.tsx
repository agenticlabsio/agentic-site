'use client'

import { useId, useState } from 'react'

export interface HomepageFaq {
  question: string
  answer: string
}

// FAQs are sourced from the CMS (a subset of /resources/faq) and passed in by
// the homepage RSC, so the homepage FAQ can never drift from the canonical set.
export default function HomeFaq({ faqs }: { faqs: HomepageFaq[] }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (faqs.length === 0) return null

  return (
    <section
      id="faq"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
              }}
            >
              Frequently asked questions.
            </h2>
          </div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              const buttonId = `${baseId}-q-${i}`
              const panelId = `${baseId}-a-${i}`
              return (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '22px 4px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      minHeight: 44,
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        lineHeight: 1.4,
                        color: isOpen ? 'var(--accent-dark)' : 'var(--text-primary)',
                        transition: 'color var(--transition-base)',
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-mono"
                      style={{
                        flexShrink: 0,
                        fontSize: '1rem',
                        color: 'var(--accent-dark)',
                        width: 20,
                        textAlign: 'center',
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <p
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.95rem',
                          lineHeight: 1.75,
                          padding: '0 4px 22px',
                          maxWidth: '68ch',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
