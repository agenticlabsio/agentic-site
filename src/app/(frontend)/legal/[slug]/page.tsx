import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/SEO'
import { LegalDocLayout } from '@/components/legal/LegalDocLayout'
import { getLegalDocument, legalDocuments } from '@/content/legal'
import { SITE_URL } from '@/lib/seo'

export function generateStaticParams() {
  return legalDocuments.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getLegalDocument(slug)
  const path = `/legal/${slug}`

  if (!doc) {
    return { alternates: { canonical: path } }
  }

  return {
    title: doc.title,
    description: doc.summary,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title: doc.title, description: doc.summary },
    twitter: { card: 'summary_large_image', title: doc.title, description: doc.summary },
  }
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getLegalDocument(slug)

  if (!doc) {
    notFound()
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Legal', url: `${SITE_URL}/legal` },
          { name: doc.title, url: `${SITE_URL}/legal/${doc.slug}` },
        ]}
      />
      <LegalDocLayout doc={doc} />
    </>
  )
}
