import Link from 'next/link'

export interface HeroCta {
  label: string
  href: string
}

export interface HeroBreadcrumbItem {
  label: string
  href?: string
}

export interface HeroSectionProps {
  variant: 'solution' | 'industry' | 'case-study'
  backLink?: { href: string; label: string }
  breadcrumb?: HeroBreadcrumbItem[]
  eyebrow?: string
  icon?: string
  title: string
  tagline?: string
  description?: string
  meta?: string
  primaryCta?: HeroCta
  secondaryCta?: HeroCta
}

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

// Renders the detail-page hero for all three marketing entities. The three
// source pages diverge enough (bg wrapper, eyebrow vs icon, tagline color,
// presence of CTAs) that this stays a single component with a variant switch
// rather than three near-duplicate ones.
export function HeroSection({
  variant,
  backLink,
  breadcrumb,
  eyebrow,
  icon,
  title,
  tagline,
  description,
  meta,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  if (variant === 'case-study') {
    return (
      <>
        {backLink && (
          <div className="px-4 pt-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <Link
                href={backLink.href}
                className="font-display inline-flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-stone-50"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {backLink.label}
              </Link>
            </div>
          </div>
        )}
        <section className="px-4 pt-8 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {eyebrow && (
              <div className="bg-brand-500/10 text-brand-300 font-display mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium">
                {eyebrow}
              </div>
            )}
            <h1 className="font-display mb-2 text-3xl font-bold tracking-tight text-stone-50 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {tagline && <p className="font-body text-xl text-stone-400">{tagline}</p>}
          </div>
        </section>
      </>
    )
  }

  const taglineColor = 'text-brand-400'

  return (
    <section className="bg-white/[0.02] px-4 pt-20 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {breadcrumb && (
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-stone-400">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="text-stone-400 hover:text-stone-200">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-stone-50">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="bg-brand-500/10 text-brand-300 font-display mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
            {eyebrow}
          </div>
        )}
        {icon && <div className="mb-4 text-5xl">{icon}</div>}

        <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {tagline && (
          <p className={`font-display mb-6 text-xl font-medium sm:text-2xl ${taglineColor}`}>{tagline}</p>
        )}
        {description && (
          <p className="font-body mb-8 max-w-3xl text-lg text-stone-300">{description}</p>
        )}
        {meta && (
          <p className="font-body mb-8 text-sm text-stone-400">
            <strong>Target Audience:</strong> {meta}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="bg-brand-600 hover:bg-brand-700 shadow-brand-600/25 font-display inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200"
              >
                {primaryCta.label}
                {arrowIcon}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="font-display inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-stone-300 transition-colors hover:bg-white/5"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
