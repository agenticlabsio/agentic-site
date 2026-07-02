import type { Metadata } from 'next'

// Builds per-page metadata with a self-referential canonical + OpenGraph/Twitter.
// `title` is passed through the root layout's "%s | Agentic Labs" template.
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = `${title} | Agentic Labs`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      title: fullTitle,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
