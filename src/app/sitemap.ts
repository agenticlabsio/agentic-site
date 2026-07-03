import { MetadataRoute } from 'next'
import { solutionSlugs } from '@/content/solutions'
import { industrySlugs } from '@/content/industries'
import { caseStudySlugs } from '@/content/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  // Canonical production origin. Hardcoded to match robots.txt, metadataBase, and
  // the JSON-LD schemas — NEXT_PUBLIC_SERVER_URL resolves to localhost at build time.
  const baseUrl = 'https://agenticlabs.io'
  const currentDate = new Date().toISOString()

  const staticPages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/solutions', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/industries', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/case-studies', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/portfolio', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/platform', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/platform/integrations', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/resources', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/resources/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/resources/faq', changeFrequency: 'weekly', priority: 0.8 },
  ]

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: currentDate,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    // Solution detail pages (src/content/solutions.ts)
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Industry detail pages (src/content/industries.ts)
    ...industrySlugs.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Case study detail pages (src/content/case-studies.ts)
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return entries
}
