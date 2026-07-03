import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/SEO'
import { MarketingDetailTemplate, type DetailSection } from '@/components/marketing/MarketingDetailTemplate'
import { getSolutionBySlug, getAllSolutionSlugs } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllSolutionSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = `/solutions/${slug}`
  const solution = await getSolutionBySlug(slug)

  if (!solution) {
    return { alternates: { canonical: path } }
  }

  const title = solution.seo?.metaTitle || `${solution.name} | Agentic Labs`
  const description = solution.seo?.metaDescription || solution.description

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title, description },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const solution = await getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  const url = `${SITE_URL}/solutions/${slug}`
  const faqs = (solution.faqs ?? []).map((f) => ({ question: f.question, answer: f.answer }))

  const sections: DetailSection[] = [
    {
      type: 'narrative',
      heading: 'The Challenge',
      intro: solution.problem,
      list: (solution.challenges ?? []).map((c) => c.text),
      listIcon: 'warning',
      sideCard: { heading: 'Our Solution', body: solution.solutionOverview },
    },
    {
      type: 'cardGrid',
      heading: 'Key Capabilities',
      description: `What you get with ${solution.name}`,
      items: (solution.capabilities ?? []).map((c) => ({
        title: c.title,
        description: c.description,
        metric: c.metric ?? undefined,
      })),
      variant: 'bordered',
      columns: 2,
      bgTint: true,
    },
    {
      type: 'processSteps',
      heading: 'How It Works',
      description: 'Our implementation process',
      steps: (solution.howItWorks ?? []).map((s) => ({
        step: s.step,
        title: s.title,
        description: s.description,
      })),
    },
    {
      type: 'integrations',
      heading: 'Integrations',
      description: 'Works with your existing systems of record',
      items: (solution.integrations ?? []).map((i) => i.name),
      bgTint: true,
    },
    {
      type: 'metrics',
      heading: 'Results We Deliver',
      variant: 'band',
      items: (solution.results ?? []).map((r) => ({
        metric: r.metric,
        label: r.label,
        description: r.description,
      })),
    },
    {
      type: 'faqs',
      heading: 'Frequently Asked Questions',
      description: `Common questions about ${solution.name}`,
      items: faqs,
    },
    {
      type: 'cta',
      bg: 'slate',
      headline: solution.cta.headline,
      description: solution.cta.description,
      buttonLabel: 'Book a Strategy Call',
      href: '/#contact',
    },
  ]

  return (
    <MarketingDetailTemplate
      schemas={
        <>
          <ServiceSchema
            name={solution.name}
            description={solution.description}
            url={url}
            provider="Agentic Labs"
            areaServed="United States"
          />
          <FAQSchema faqs={faqs} />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: SITE_URL },
              { name: 'Solutions', url: `${SITE_URL}/solutions` },
              { name: solution.name, url },
            ]}
          />
        </>
      }
      hero={{
        variant: 'solution',
        breadcrumb: [
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: solution.name },
        ],
        eyebrow: solution.category,
        title: solution.name,
        tagline: solution.heroTagline,
        description: solution.description,
        primaryCta: { label: 'Book a Strategy Call', href: '/#contact' },
        secondaryCta: { label: 'View All Solutions', href: '/solutions' },
      }}
      sections={sections}
    />
  )
}
