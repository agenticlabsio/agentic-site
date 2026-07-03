import type { Metadata } from 'next'
import Footer from '@/components/newsite/Footer'
import { MarketingHeader, type MarketingNavItem } from '@/components/marketing/MarketingHeader'
import { CtaSection } from '@/components/marketing/sections/CtaSection'
import { getSolutions } from '@/lib/payload'
import { SolutionsFilterGrid } from './SolutionsFilterGrid'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'AI Solutions | Agentic Labs',
  description:
    'Custom AI agents that ship in 6–8 weeks — built for small and medium enterprises, not the Fortune 500 playbook shrunk to fit.',
  alternates: { canonical: '/solutions' },
}

const navItems: MarketingNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
]

export default async function SolutionsPage() {
  const solutions = await getSolutions()

  return (
    <div className="newsite relative min-h-screen">
      <MarketingHeader items={navItems} activeHref="/solutions" ctaHref="/#contact" />

      <main className="pt-16">
        <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-brand-400 mb-4 text-sm font-medium tracking-wide uppercase">Solutions</p>
            <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
              Custom agents that ship. <span className="text-brand-400">Not another pilot.</span>
            </h1>
            <p className="max-w-2xl text-xl text-stone-300">
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
          buttonLabel="Book a Strategy Call"
          href="/#contact"
        />
      </main>

      <Footer />
    </div>
  )
}
