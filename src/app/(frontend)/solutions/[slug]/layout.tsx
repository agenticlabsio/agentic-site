import type { Metadata } from 'next'
import { solutionsSeo } from './seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = solutionsSeo[slug]
  const path = `/solutions/${slug}`

  if (!entry) {
    return { alternates: { canonical: path } }
  }

  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      title: `${entry.title} | Agentic Labs`,
      description: entry.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${entry.title} | Agentic Labs`,
      description: entry.description,
    },
  }
}

export default function SolutionSlugLayout({ children }: { children: React.ReactNode }) {
  return children
}
