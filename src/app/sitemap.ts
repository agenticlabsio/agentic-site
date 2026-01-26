import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://agenticlabs.io'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform/integrations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Solution pages
  const solutions = [
    'intelligent-agents',
    'customer-service-automation',
    'document-processing',
    'context-management',
    'agentic-evaluation',
    'ai-governance-security',
  ]

  const solutionPages: MetadataRoute.Sitemap = solutions.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Industry pages
  const industries = [
    'healthcare',
    'manufacturing',
    'retail',
    'energy',
    'dealers-distributors',
    'power-electronics-fpga',
    'autonomy-robotics',
    'biotech-pharma-logistics',
  ]

  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Integration pages
  const integrations = [
    'salesforce',
    'workday',
    'databricks',
    'sap',
    'netsuite',
  ]

  const integrationPages: MetadataRoute.Sitemap = integrations.map((slug) => ({
    url: `${baseUrl}/platform/integrations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...solutionPages,
    ...industryPages,
    ...integrationPages,
  ]
}
