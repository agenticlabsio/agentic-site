// Case-study "The Results" before/after split card.
export function BeforeAfterSection({
  heading,
  before,
  after,
}: {
  heading: string
  before: string[]
  after: string[]
}) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-6 text-2xl font-bold text-stone-900 sm:text-3xl">{heading}</h2>
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-lg">
          <div className="grid grid-cols-2">
            <div className="border-r border-stone-200 p-6">
              <h3 className="font-display mb-4 text-sm font-semibold tracking-wider text-stone-500 uppercase">
                Before
              </h3>
              <ul className="space-y-3">
                {before.map((item, i) => (
                  <li key={i} className="font-body text-sm text-stone-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-500/10 p-6">
              <h3 className="text-brand-600 font-display mb-4 text-sm font-semibold tracking-wider uppercase">
                After
              </h3>
              <ul className="space-y-3">
                {after.map((item, i) => (
                  <li key={i} className="font-body text-sm font-medium text-stone-900">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
