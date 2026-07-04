export interface CardGridItem {
  title: string
  description: string
  metric?: string
}

export interface CardGridSectionProps {
  heading: string
  description?: string
  items: CardGridItem[]
  /** Both variants render as bordered cards; the distinction is retained for callers/CMS data that still set it. */
  variant?: 'bordered' | 'plain'
  columns?: 2 | 3
  bgTint?: boolean
}

// Shared "title + description (+ optional metric badge)" card grid used for
// Solutions' Key Capabilities, and Industries' Industry Challenges, AI
// Solutions, and Compliance & Security sections.
export function CardGridSection({
  heading,
  description,
  items,
  columns = 2,
  bgTint = false,
}: CardGridSectionProps) {
  const gridCols = columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'
  const cardClass = `rounded-xl border border-stone-200 p-6 ${bgTint ? 'bg-white' : 'bg-stone-50'}`

  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${bgTint ? 'bg-stone-50' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-3xl font-bold text-stone-900">{heading}</h2>
        {description && (
          <p className="font-body mb-12 max-w-2xl text-lg text-stone-600">{description}</p>
        )}
        <div className={`grid grid-cols-1 gap-6 ${gridCols}`}>
          {items.map((item, i) => (
            <div key={i} className={cardClass}>
              <div className="mb-3 flex items-start justify-between">
                <h3 className="font-display text-lg font-bold text-stone-900">{item.title}</h3>
                {item.metric && (
                  <span className="text-brand-600 bg-brand-500/10 font-display rounded px-2 py-1 text-sm font-medium">
                    {item.metric}
                  </span>
                )}
              </div>
              <p className="font-body text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
