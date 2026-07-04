import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/SEO'
import { MarketingDetailTemplate, type DetailSection } from '@/components/marketing/MarketingDetailTemplate'
import { getIndustryBySlug, getAllIndustrySlugs } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'

export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = await getAllIndustrySlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = `/industries/${slug}`
  const industry = await getIndustryBySlug(slug)

  if (!industry) {
    return { alternates: { canonical: path } }
  }

  const title = industry.seo?.metaTitle || `AI Solutions for ${industry.name} | Agentic Labs`
  const description = industry.seo?.metaDescription || industry.heroDescription

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title, description },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = await getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const url = `${SITE_URL}/industries/${slug}`
  const faqs = (industry.faqs ?? []).map((f) => ({ question: f.question, answer: f.answer }))
  const nameLower = industry.name.toLowerCase()

  const sections: DetailSection[] = [
    {
      type: 'statBand',
      heading: 'Market Context',
      items: (industry.marketContext ?? []).map((m) => ({ stat: m.stat, source: m.source ?? undefined })),
    },
    {
      type: 'cardGrid',
      heading: 'Industry Challenges',
      description: `The pain points AI can address in ${industry.name}`,
      items: (industry.challenges ?? []).map((c) => ({ title: c.challenge, description: c.description })),
      variant: 'plain',
      columns: 2,
      bgTint: false,
    },
    {
      type: 'cardGrid',
      heading: `AI Solutions for ${industry.name}`,
      description: `How we help ${nameLower} companies transform operations`,
      items: (industry.aiSolutions ?? []).map((s) => ({
        title: s.title,
        description: s.description,
        metric: s.metric ?? undefined,
      })),
      variant: 'bordered',
      columns: 2,
      bgTint: true,
    },
    {
      type: 'integrations',
      heading: 'Integrations',
      description: `Works with your existing ${nameLower} systems`,
      items: (industry.integrations ?? []).map((i) => i.name),
      bgTint: false,
    },
    {
      type: 'cardGrid',
      heading: 'Compliance & Security',
      description: `Meeting ${nameLower} regulatory requirements`,
      items: (industry.compliance ?? []).map((c) => ({
        title: c.standard,
        description: c.description ?? '',
      })),
      variant: 'bordered',
      columns: 3,
      bgTint: true,
    },
    {
      type: 'checklist',
      heading: 'ROI Metrics',
      items: (industry.roiMetrics ?? []).map((r) => r.metric),
    },
    {
      type: 'faqs',
      heading: 'Frequently Asked Questions',
      description: `Common questions about AI for ${nameLower}`,
      items: faqs,
    },
    {
      type: 'pillLinks',
      heading: 'Related Solutions',
      slugs: (industry.relatedSolutions ?? []).map((r) => r.slug),
    },
    {
      type: 'cta',
      bg: 'brand',
      headline: `Ready to transform ${nameLower} operations with agentic solutions?`,
      description: "30 minutes. We'll map your workflows and tell you where an agent pays back first.",
      buttonLabel: 'Book a Discovery Call',
      href: '/#contact',
    },
  ]

  return (
    <MarketingDetailTemplate
      schemas={
        <>
          <ServiceSchema
            name={`AI Solutions for ${industry.name}`}
            description={industry.heroDescription}
            url={url}
            provider="Agentic Labs"
            areaServed="United States"
          />
          <FAQSchema faqs={faqs} />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: SITE_URL },
              { name: 'Industries', url: `${SITE_URL}/industries` },
              { name: industry.name, url },
            ]}
          />
        </>
      }
      hero={{
        variant: 'industry',
        breadcrumb: [
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ],
        icon: industry.icon,
        title: `AI for ${industry.name}`,
        tagline: industry.tagline,
        description: industry.heroDescription,
        meta: industry.targetAudience,
        primaryCta: { label: 'Book a Discovery Call', href: '/#contact' },
        secondaryCta: { label: 'View All Industries', href: '/industries' },
      }}
      sections={sections}
    />
  )
}
