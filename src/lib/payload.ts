import { getPayload } from 'payload'
import { cache } from 'react'
import config from '@payload-config'

// Request-scoped singleton: React.cache dedupes the (heavy) Payload init so all
// fetchers in a single render share one instance.
export const getPayloadClient = cache(async () => getPayload({ config }))

// Solutions ---------------------------------------------------------------
export const getSolutions = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getSolutionBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  return docs[0] ?? null
})

export const getAllSolutionSlugs = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Case Studies ------------------------------------------------------------
export const getCaseStudies = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getCaseStudyBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  return docs[0] ?? null
})

export const getAllCaseStudySlugs = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Industries --------------------------------------------------------------
export const getIndustries = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
})

export const getIndustryBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  return docs[0] ?? null
})

export const getAllIndustrySlugs = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    limit: 100,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })
  return docs.map((doc) => doc.slug)
})

// Combined marketing slugs (for sitemap / generateStaticParams) ------------
export const getAllMarketingSlugs = cache(
  async (): Promise<{ type: 'solutions' | 'industries' | 'case-studies'; slug: string }[]> => {
    const [solutionSlugs, industrySlugs, caseStudySlugs] = await Promise.all([
      getAllSolutionSlugs(),
      getAllIndustrySlugs(),
      getAllCaseStudySlugs(),
    ])
    return [
      ...solutionSlugs.map((slug) => ({ type: 'solutions' as const, slug })),
      ...industrySlugs.map((slug) => ({ type: 'industries' as const, slug })),
      ...caseStudySlugs.map((slug) => ({ type: 'case-studies' as const, slug })),
    ]
  },
)

// FAQ ---------------------------------------------------------------------
export const getFAQ = cache(async () => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({ collection: 'faq', sort: 'order', limit: 100 })
  return docs
})

// Leads — public write path for the CTA / footer signup forms.
export async function createLead(data: {
  email: string
  source?: 'cta-section' | 'footer' | 'hero'
  page?: string
  consent?: boolean
}) {
  const payload = await getPayloadClient()
  return payload.create({
    collection: 'leads',
    data: {
      email: data.email,
      source: data.source ?? 'cta-section',
      page: data.page,
      consent: data.consent ?? false,
    },
  })
}
