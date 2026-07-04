export interface FaqItem {
  question: string
  answer: string
}

// Plain, non-interactive FAQ list used on the solution/industry detail pages
// (distinct from the accordion on /resources/faq, which needs client state).
export function FaqListSection({
  heading,
  description,
  items,
}: {
  heading: string
  description?: string
  items: FaqItem[]
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display mb-4 text-3xl font-bold text-stone-900">{heading}</h2>
        {description && <p className="font-body mb-12 text-lg text-stone-600">{description}</p>}
        <div className="space-y-6">
          {items.map((faq, i) => (
            <div key={i} className="border-b border-stone-200 pb-6">
              <h3 className="font-display mb-3 text-lg font-bold text-stone-900">{faq.question}</h3>
              <p className="font-body text-stone-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
