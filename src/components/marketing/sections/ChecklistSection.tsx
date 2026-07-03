const checkIcon = (
  <svg className="text-brand-400 h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

// Industries "ROI Metrics" — slate-900 band, checkmark rows.
export function ChecklistSection({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-12 text-center text-3xl font-bold text-white">{heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl bg-white/5 p-6">
              {checkIcon}
              <span className="font-body text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
