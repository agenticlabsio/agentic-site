import Link from 'next/link'

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export interface CtaSectionProps {
  id?: string
  bg: 'slate' | 'brand'
  headline: string
  description?: string
  buttonLabel: string
  href: string
  /** true for mailto: links — rendered as a plain <a>, not a Next <Link>. */
  external?: boolean
}

// Final CTA band shared by every marketing detail and list page. `bg`
// controls the section/button color pairing; everything else (headline,
// description, link target) is data the caller supplies.
export function CtaSection({ id, bg, headline, description, buttonLabel, href, external }: CtaSectionProps) {
  const sectionBg = bg === 'slate' ? 'bg-slate-900' : 'bg-brand-600'
  const buttonClass =
    bg === 'slate'
      ? 'bg-brand-600 hover:bg-brand-700 text-white'
      : 'text-brand-700 hover:bg-brand-50 bg-white'
  const descriptionClass = bg === 'slate' ? 'text-stone-300' : 'text-white/80'

  const button = (
    <span
      className={`font-display inline-flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 ${buttonClass}`}
    >
      {buttonLabel}
      {arrowIcon}
    </span>
  )

  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionBg}`}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        {description && <p className={`font-body mb-8 text-xl ${descriptionClass}`}>{description}</p>}
        {external ? (
          <a href={href}>{button}</a>
        ) : (
          <Link href={href}>{button}</Link>
        )}
      </div>
    </section>
  )
}
