export function TagListSection({
  heading,
  description,
  items,
  bgTint = false,
}: {
  heading: string
  description?: string
  items: string[]
  bgTint?: boolean
}) {
  return (
    <section className={`px-4 py-16 sm:px-6 lg:px-8 ${bgTint ? 'bg-white/[0.02]' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-3xl font-bold text-stone-50">{heading}</h2>
        {description && (
          <p className="font-body mb-8 max-w-2xl text-lg text-stone-300">{description}</p>
        )}
        <div className="flex flex-wrap gap-3">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-stone-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
