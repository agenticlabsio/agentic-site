export interface MetricItem {
  metric: string
  label: string
  description?: string
}

export interface MetricsGridProps {
  heading: string
  variant: 'band' | 'cards'
  items: MetricItem[]
}

// 'band' = solution detail "Results We Deliver" (full-bleed brand-600, white text).
// 'cards' = case-study detail "Key Results" (bordered cards, brand-colored number).
export function MetricsGrid({ heading, variant, items }: MetricsGridProps) {
  if (variant === 'band') {
    return (
      <section className="bg-brand-600 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display mb-12 text-center text-3xl font-bold text-white">{heading}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-display mb-2 text-5xl font-bold text-white">{item.metric}</div>
                <div className="text-brand-100 font-display mb-2 font-medium">{item.label}</div>
                {item.description && (
                  <p className="text-brand-200 font-body text-sm">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-6 text-sm font-semibold tracking-wider text-stone-500 uppercase">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <div className="text-brand-600 font-display mb-1 text-3xl font-bold sm:text-4xl">
                {item.metric}
              </div>
              <div className="font-display text-sm font-medium text-stone-900">{item.label}</div>
              {item.description && (
                <div className="font-body text-sm text-stone-500">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
