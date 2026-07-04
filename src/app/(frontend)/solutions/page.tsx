import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { BreadcrumbSchema } from '@/components/SEO'
import { getSolutions } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'
import { SolutionsFilterGrid } from './SolutionsFilterGrid'

// Metadata for /solutions is provided by ./layout.tsx.
export const revalidate = 3600

export default async function SolutionsPage() {
  const solutions = await getSolutions()

  return (
    <main className="pt-16">
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: SITE_URL },
            { name: 'Solutions', url: `${SITE_URL}/solutions` },
          ]}
        />
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-600 mb-4 text-sm font-medium tracking-wide uppercase">Solutions</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Custom agents that ship. <span className="text-brand-600">Not another pilot.</span>
            </h1>
            <p className="max-w-2xl text-xl text-stone-600">
              Built for small and medium enterprises — not the Fortune 500 playbook shrunk to fit.
              Each solution reaches production in 6&ndash;8 weeks, runs on infrastructure you control,
              and is instrumented to prove its payback.
            </p>
          </div>
        </section>

        <SolutionsFilterGrid
          solutions={solutions.map((s) => ({
            slug: s.slug,
            name: s.name,
            category: s.category,
            description: s.description,
            cardMetric: s.cardMetric,
            cardMetricLabel: s.cardMetricLabel,
            features: (s.features ?? []).map((f) => f.text),
            featured: s.featured ?? false,
          }))}
        />

        <CtaSection
          id="contact"
          bg="brand"
          headline="Not sure which solution fits?"
          description="30 minutes. We'll map your workflows and tell you exactly what to build first."
          buttonLabel="Book a Discovery Call"
          href="/#contact"
        />
    </main>
  )
}
