import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleSchema, BreadcrumbSchema } from '@/components/SEO'
import { MarketingDetailTemplate, type DetailSection } from '@/components/marketing/MarketingDetailTemplate'
import type { MarketingNavItem } from '@/components/marketing/MarketingHeader'
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/payload'

export const revalidate = 3600

const navItems: MarketingNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
]

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = `/case-studies/${slug}`
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return { alternates: { canonical: path } }
  }

  const title = caseStudy.seo?.metaTitle || `${caseStudy.title} ${caseStudy.subtitle} | Case Study`
  const description = caseStudy.seo?.metaDescription || caseStudy.challenge.intro

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'article', url: path, title: `${caseStudy.title} ${caseStudy.subtitle}`, description },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} ${caseStudy.subtitle}`,
      description,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const canonicalUrl = `https://agenticlabs.io/case-studies/${slug}`
  const headline = `${caseStudy.title} ${caseStudy.subtitle}`

  const sections: DetailSection[] = [
    {
      type: 'metrics',
      heading: 'Key Results',
      variant: 'cards',
      items: (caseStudy.metrics ?? []).map((m) => ({
        metric: m.value,
        label: m.label,
        description: m.description,
      })),
    },
    {
      type: 'narrative',
      heading: 'The Challenge',
      intro: caseStudy.challenge.intro,
      list: (caseStudy.challenge.painPoints ?? []).map((p) => p.text),
      listIcon: 'x',
    },
    {
      type: 'narrative',
      heading: 'The Solution',
      intro: caseStudy.solution.intro,
      numberedCards: (caseStudy.solution.components ?? []).map((c) => ({
        title: c.title,
        description: c.description,
      })),
      timeline: caseStudy.solution.timeline,
    },
    {
      type: 'beforeAfter',
      heading: 'The Results',
      before: (caseStudy.results?.before ?? []).map((b) => b.text),
      after: (caseStudy.results?.after ?? []).map((a) => a.text),
    },
    { type: 'quote', text: caseStudy.quote.text, author: caseStudy.quote.author },
    {
      type: 'cta',
      id: 'contact',
      bg: 'brand',
      headline: 'Want similar results?',
      buttonLabel: 'Book a Strategy Call',
      href: 'mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request',
      external: true,
    },
  ]

  return (
    <MarketingDetailTemplate
      schemas={
        <>
          <ArticleSchema
            headline={headline}
            description={caseStudy.challenge.intro}
            url={canonicalUrl}
            datePublished="2026-01-01"
          />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: 'https://agenticlabs.io' },
              { name: 'Case Studies', url: 'https://agenticlabs.io/case-studies' },
              { name: caseStudy.title, url: canonicalUrl },
            ]}
          />
        </>
      }
      navItems={navItems}
      activeNavHref="/case-studies"
      navCtaHref="#contact"
      hero={{
        variant: 'case-study',
        backLink: { href: '/case-studies', label: 'Back to Case Studies' },
        eyebrow: caseStudy.industry,
        title: caseStudy.title,
        tagline: caseStudy.subtitle,
      }}
      sections={sections}
    />
  )
}
