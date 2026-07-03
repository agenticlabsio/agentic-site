import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { BreadcrumbSchema } from '@/components/SEO'
import { getCaseStudies } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'

// Metadata for /case-studies is provided by ./layout.tsx.
export const revalidate = 3600

// Representative aggregate outcomes — not modeled per-case-study in the CMS,
// so this stays a static editorial summary (matches the original page).
const aggregateStats = [
  { value: '6–8 wks', label: 'To Production' },
  { value: '94%', label: 'Extraction Accuracy' },
  { value: '60%', label: 'Faster Resolution' },
  { value: '40%', label: 'Cost Reduction' },
]

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()
  const featured = caseStudies.find((cs) => cs.featured)
  const others = caseStudies.filter((cs) => !cs.featured)

  return (
    <main className="pt-16">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: SITE_URL },
            { name: 'Case Studies', url: `${SITE_URL}/case-studies` },
          ]}
        />
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-400 mb-3 text-sm font-medium tracking-wider uppercase">
              Case Studies
            </p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Proof, <span className="text-brand-400">not promises.</span>
            </h1>
            <p className="max-w-2xl text-xl text-stone-300">
              Real workflows for small and mid-market teams — measurable outcomes and honest
              numbers, not a demo that never shipped.
            </p>
          </div>
        </section>

        {featured && (
          <section className="px-4 pb-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <Link
                href={`/case-studies/${featured.slug}`}
                className="hover:border-brand-400/50 block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="mb-4 inline-flex items-center gap-3">
                      <span className="bg-brand-600 rounded-full px-3 py-1 text-xs font-medium tracking-wider text-white uppercase">
                        Featured
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-stone-300">
                        {featured.industry}
                      </span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-stone-50 sm:text-3xl">
                      {featured.card.title}
                    </h2>
                    <p className="mb-6 text-stone-400">{featured.card.subtitle}</p>
                    <div className="text-brand-400 inline-flex items-center gap-2 font-medium">
                      Read Case Study
                      {arrowIcon}
                    </div>
                  </div>
                  <div className="bg-brand-600 flex items-center p-8 md:p-10">
                    <div className="grid w-full grid-cols-3 gap-6">
                      {(featured.card.metrics ?? []).map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="mb-1 text-3xl font-bold text-white lg:text-4xl">
                            {metric.value}
                          </div>
                          <div className="text-brand-100 text-sm">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {others.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="hover:border-brand-400/50 group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  <div className="mb-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-stone-300">
                    {cs.industry}
                  </div>
                  <h3 className="mb-1 text-xl font-semibold text-stone-50">{cs.card.title}</h3>
                  <p className="mb-4 text-sm text-stone-400">{cs.card.subtitle}</p>
                  <div className="flex items-end justify-between">
                    <div className="flex gap-6">
                      {(cs.card.metrics ?? []).map((metric, i) => (
                        <div key={i}>
                          <div className="text-brand-400 text-lg font-bold">{metric.value}</div>
                          <div className="text-xs text-stone-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="group-hover:bg-brand-500 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-stone-300 transition-all duration-200 group-hover:text-white">
                      {arrowIcon}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.02] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-10 text-center text-sm font-medium tracking-wider text-stone-400 uppercase">
              Representative Outcomes From Our Builds
            </h3>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {aggregateStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="mb-1 text-3xl font-bold text-stone-50 lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          id="contact"
          bg="brand"
          headline="Your results could be next."
          buttonLabel="Book a Strategy Call"
          href="mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request"
          external
        />
    </main>
  )
}
