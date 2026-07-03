'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export interface SolutionCardData {
  slug: string
  name: string
  category: string
  description: string
  cardMetric: string
  cardMetricLabel: string
  features: string[]
  featured: boolean
}

const categories = ['All', 'Core', 'Operations', 'Platform', 'Governance']

const checkIcon = (
  <svg className="text-brand-400 mt-0.5 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

// Isolated interactive leaf: category filter + featured/grid visibility. The
// page itself (solutions/page.tsx) stays an RSC that fetches the CMS data.
export function SolutionsFilterGrid({ solutions }: { solutions: SolutionCardData[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = solutions.find((s) => s.featured)
  const filteredSolutions =
    activeCategory === 'All'
      ? solutions.filter((s) => !s.featured)
      : solutions.filter((s) => s.category === activeCategory && !s.featured)

  return (
    <>
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-600 shadow-brand-600/25 text-white shadow-lg'
                    : 'bg-white/5 text-stone-300 hover:bg-white/10 hover:text-stone-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featured && activeCategory === 'All' && (
        <section className="px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-sm font-medium tracking-wider text-stone-400 uppercase">
              Featured Solution
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-10">
                  <div className="bg-brand-500/10 text-brand-300 mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                    {featured.category}
                  </div>
                  <h2 className="font-display mb-4 text-2xl font-bold text-stone-50 sm:text-3xl">
                    {featured.name}
                  </h2>
                  <p className="mb-6 text-stone-300">{featured.description}</p>
                  <ul className="mb-8 space-y-3">
                    {featured.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-300">
                        {checkIcon}
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button href={`/solutions/${featured.slug}`} variant="primary">
                      Learn More
                      {arrowIcon}
                    </Button>
                  </div>
                </div>
                <div className="bg-brand-600 flex items-center justify-center p-8 md:p-10">
                  <div className="text-center">
                    <div className="mb-2 text-6xl font-bold text-white lg:text-7xl">
                      {featured.cardMetric}
                    </div>
                    <div className="text-brand-100 text-lg">{featured.cardMetricLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {activeCategory === 'All' && (
            <div className="mb-4 text-sm font-medium tracking-wider text-stone-400 uppercase">
              All Solutions
            </div>
          )}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSolutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="hover:border-brand-400/50 group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
              >
                <div className="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-stone-300">
                  {solution.category}
                </div>
                <h3 className="group-hover:text-brand-300 mb-2 text-lg font-semibold text-stone-50 transition-colors">
                  {solution.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-stone-300">{solution.description}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-brand-400 text-2xl font-bold">{solution.cardMetric}</div>
                    <div className="text-sm text-stone-400">{solution.cardMetricLabel}</div>
                  </div>
                  <div className="group-hover:bg-brand-500 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-stone-300 transition-all duration-200 group-hover:text-white">
                    {arrowIcon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
