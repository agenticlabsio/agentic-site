import type { Metadata } from 'next'

// Canonical production origin, consumed by metadata, JSON-LD schemas, and the
// sitemap so it's defined once instead of scattered as string literals.
// NEXT_PUBLIC_SERVER_URL is deliberately NOT used here — it resolves to
// localhost at build time in this project's Cloudflare Workers deploy.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agenticlabs.io'

// Hosted interactive demo suite (Ledger). Linked as a CTA from the header,
// hero, and closing CTA bands. Defined once so the URL isn't scattered.
export const DEMO_URL = 'https://demo.agenticlabs.io'

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
