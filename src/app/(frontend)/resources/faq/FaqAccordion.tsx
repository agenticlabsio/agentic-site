'use client'

import { useState } from 'react'

export interface FaqCategoryGroup {
  name: string
  slug: string
  faqs: { question: string; answer: string }[]
}

// Isolated interactive leaf: only one FAQ (across all categories) is open at a
// time, matching the original page's single top-level `openIndex` state.
export function FaqAccordion({ categories }: { categories: FaqCategoryGroup[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleFAQ = (categorySlug: string, faqIndex: number) => {
    const key = `${categorySlug}-${faqIndex}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <>
      {categories.map((category) => (
        <div key={category.slug} id={category.slug} className="mb-12 scroll-mt-24">
          <h2 className="font-display mb-6 text-2xl font-bold text-slate-50">{category.name}</h2>
          <div className="space-y-4">
            {category.faqs.map((faq, faqIndex) => {
              const key = `${category.slug}-${faqIndex}`
              const isOpen = openIndex === key

              return (
                <div key={faqIndex} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  <button
                    onClick={() => toggleFAQ(category.slug, faqIndex)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-semibold text-slate-50">{faq.question}</span>
                    <svg
                      className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="font-body px-6 pb-5 text-slate-300">{faq.answer}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}
