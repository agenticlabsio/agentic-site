import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { getAllMarketingSlugs, getAllBlogPostSlugs } from '@/lib/payload'
import { legalDocuments } from '@/content/legal'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const currentDate = new Date().toISOString()
  const [marketingSlugs, blogSlugs] = await Promise.all([
    getAllMarketingSlugs(),
    getAllBlogPostSlugs(),
  ])

  const staticPages: {
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: number
  }[] = [
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
    { path: '/trust', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/legal', changeFrequency: 'monthly', priority: 0.4 },
  ]

  const detailPathByType = {
    solutions: '/solutions',
    industries: '/industries',
    'case-studies': '/case-studies',
  } as const

  const entries: MetadataRoute.Sitemap = [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: currentDate,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    // Solution / industry / case-study detail pages (Payload-backed)
    ...marketingSlugs.map((entry) => ({
      url: `${baseUrl}${detailPathByType[entry.type]}/${entry.slug}`,
      lastModified: entry.updatedAt ?? currentDate,
      changeFrequency: entry.type === 'case-studies' ? ('monthly' as const) : ('weekly' as const),
      priority: entry.type === 'case-studies' ? 0.7 : 0.8,
    })),
    // Blog post detail pages (Payload-backed, published only)
    ...blogSlugs.map((entry) => ({
      url: `${baseUrl}/resources/blog/${entry.slug}`,
      lastModified: entry.updatedAt ?? currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Legal detail pages (static, code-managed)
    ...legalDocuments.map((doc) => ({
      url: `${baseUrl}/legal/${doc.slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]

  return entries
}
