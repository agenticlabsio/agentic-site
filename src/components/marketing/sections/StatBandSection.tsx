export interface MarketStat {
  stat: string
  source?: string
}

// Industries "Market Context" — brand-600 band with backdrop-blur stat cards.
export function StatBandSection({ heading, items }: { heading: string; items: MarketStat[] }) {
  return (
    <section className="bg-brand-600 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-8 text-center text-2xl font-bold text-white">{heading}</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl bg-white/10 p-6 text-center backdrop-blur">
              <p className="font-body mb-2 font-medium text-white">{item.stat}</p>
              {item.source && <p className="text-brand-200 font-body text-sm">— {item.source}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
