export interface NumberedCard {
  title: string
  description: string
}

export interface NarrativeSectionProps {
  heading: string
  intro: string
  /** Bulleted list under the intro — used for challenges / pain points. */
  list?: string[]
  listIcon?: 'warning' | 'x'
  /** Side card next to the intro+list (solutions "Our Solution" panel). */
  sideCard?: { heading: string; body: string }
  /** Numbered component cards (case-study "Solution" build-out). */
  numberedCards?: NumberedCard[]
  timeline?: string
}

const warningIcon = (
  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
)

const xIcon = (
  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const clockIcon = (
  <svg className="text-brand-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

// Covers solutions' "The Challenge" (intro + list + side card) and
// case-studies' "The Challenge" (intro + pain-point list) and "The Solution"
// (intro + numbered component cards + timeline) narrative blocks.
export function NarrativeSection({
  heading,
  intro,
  list,
  listIcon = 'warning',
  sideCard,
  numberedCards,
  timeline,
}: NarrativeSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-6 text-2xl font-bold text-stone-50 sm:text-3xl">{heading}</h2>
        <p className="font-body mb-6 max-w-2xl text-lg leading-relaxed text-stone-300 sm:mb-8">{intro}</p>

        {sideCard && list ? (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i} className="font-body flex items-start gap-3 text-stone-300">
                    {warningIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white/[0.02] p-8">
              <h3 className="font-display mb-4 text-xl font-bold text-stone-50">{sideCard.heading}</h3>
              <p className="font-body text-stone-300">{sideCard.body}</p>
            </div>
          </div>
        ) : (
          list && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-display mb-4 text-sm font-semibold tracking-wider text-stone-400 uppercase">
                Pain Points
              </h3>
              <ul className="space-y-3">
                {list.map((item, i) => (
                  <li key={i} className="font-body flex items-start gap-3 text-stone-300">
                    {listIcon === 'x' ? xIcon : warningIcon}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {numberedCards && (
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {numberedCards.map((card, i) => (
              <div
                key={i}
                className="hover:border-brand-400/50 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
              >
                <div className="bg-brand-500/10 text-brand-300 font-display mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold">
                  {i + 1}
                </div>
                <div className="font-display mb-2 font-semibold text-stone-50">{card.title}</div>
                <p className="font-body text-sm text-stone-400">{card.description}</p>
              </div>
            ))}
          </div>
        )}

        {timeline && (
          <div className="flex items-center gap-2 text-stone-300">
            {clockIcon}
            <span className="font-body">
              <span className="font-display font-semibold text-stone-50">Timeline:</span> {timeline}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
