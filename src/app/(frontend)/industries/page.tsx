import Link from 'next/link'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { BreadcrumbSchema } from '@/components/SEO'
import { getIndustries } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'

// Metadata for /industries is provided by ./layout.tsx.
export const revalidate = 3600

const arrowIcon = (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
)

export default async function IndustriesPage() {
  const industries = await getIndustries()
  const featured = industries.find((i) => i.featured)
  const otherIndustries = industries.filter((i) => !i.featured)

  return (
    <main className="pt-16">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: SITE_URL },
            { name: 'Industries', url: `${SITE_URL}/industries` },
          ]}
        />
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-600 mb-4 text-sm font-medium tracking-wide uppercase">Industries</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Your industry. <span className="text-brand-600">Your workflows.</span>
            </h1>
            <p className="max-w-2xl text-xl text-stone-600">
              We build for the workflows, compliance rules, and systems your sector actually runs on —
              sized for a small or mid-market operator, not a Fortune 500 pilot budget.
            </p>
          </div>
        </section>

        {featured && (
          <section className="px-4 pb-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-4 text-sm font-medium tracking-wider text-stone-500 uppercase">
                Featured Industry
              </div>
              <Link
                href={`/industries/${featured.slug}`}
                className="block overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <div className="mb-4 text-4xl">{featured.icon}</div>
                    <h2 className="font-display mb-2 text-2xl font-bold text-stone-900 sm:text-3xl">
                      {featured.name}
                    </h2>
                    <p className="text-brand-600 mb-4 font-medium">{featured.tagline}</p>
                    <p className="mb-6 text-stone-600">{featured.cardDescription}</p>
                    <div className="text-brand-600 inline-flex items-center gap-2 font-medium">
                      Explore {featured.name} Solutions
                      {arrowIcon}
                    </div>
                  </div>
                  <div className="bg-brand-600 flex items-center justify-center p-8 md:p-10">
                    <div className="text-center">
                      <div className="mb-2 text-6xl font-bold text-white lg:text-7xl">20+ hrs</div>
                      <div className="text-brand-100 text-lg">admin hours reclaimed weekly</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 text-sm font-medium tracking-wider text-stone-500 uppercase">
              All Industries
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherIndustries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="hover:border-brand-500/50 group block rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:shadow-[0_16px_48px_-12px_rgba(91,141,255,0.25)]"
                >
                  <div className="mb-4 text-3xl">{industry.icon}</div>
                  <h3 className="group-hover:text-brand-600 mb-1 text-lg font-semibold text-stone-900 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-brand-600 mb-3 text-sm font-medium">{industry.tagline}</p>
                  <p className="mb-4 text-sm text-stone-600">{industry.cardDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-stone-500">Learn more</span>
                    <div className="group-hover:bg-brand-500 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-all duration-200 group-hover:text-white">
                      {arrowIcon}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display mb-4 text-center text-3xl font-bold text-stone-900">
              Built to ship. <span className="text-brand-600">Not enterprise theater.</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-stone-600">
              US-based small and medium enterprises that need production AI — not science projects,
              and not the Fortune 500 playbook shrunk to fit. One workflow, shipped, paying back in months.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-brand-600 mb-2 text-4xl font-bold">10&ndash;500</div>
                <div className="text-stone-600">Employees &mdash; built for your scale</div>
              </div>
              <div className="text-center">
                <div className="text-brand-600 mb-2 text-4xl font-bold">6&ndash;8 Weeks</div>
                <div className="text-stone-600">To production</div>
              </div>
              <div className="text-center">
                <div className="text-brand-600 mb-2 text-4xl font-bold">4&ndash;6 Months</div>
                <div className="text-stone-600">Typical SMB payback (industry benchmark)</div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          id="contact"
          bg="brand"
          headline="Let's talk about your industry."
          description="30 minutes. We'll map your workflows and show you what's possible."
          buttonLabel="Book a Discovery Call"
          href="/#contact"
        />
    </main>
  )
}
