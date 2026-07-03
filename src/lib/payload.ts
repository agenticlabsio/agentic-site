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
