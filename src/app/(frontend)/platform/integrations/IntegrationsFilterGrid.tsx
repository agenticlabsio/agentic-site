'use client'

import { useState } from 'react'

export interface IntegrationData {
  slug: string
  name: string
  category: string
  description: string
  features: string[]
}

const categories = ['All', 'CRM', 'HCM', 'Analytics', 'ERP', 'ITSM', 'Productivity', 'Communication']

// Isolated interactive leaf: category filter over the (static) integrations list.
export function IntegrationsFilterGrid({ integrations }: { integrations: IntegrationData[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredIntegrations =
    activeCategory === 'All' ? integrations : integrations.filter((i) => i.category === activeCategory)

  return (
    <>
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-display rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
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

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.slug}
                className="hover:border-brand-400/50 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-stone-50">{integration.name}</h3>
                    <span className="text-brand-400 font-display text-sm font-medium">
                      {integration.category}
                    </span>
                  </div>
                </div>
                <p className="font-body mb-4 text-stone-300">{integration.description}</p>
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature, i) => (
                    <span
                      key={i}
                      className="font-display rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-stone-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
