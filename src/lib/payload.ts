import { getPayload } from 'payload'
import config from '@payload-config'

// Cached payload instance getter
export async function getPayloadClient() {
  return getPayload({ config })
}

// Products
export async function getProducts() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'products',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Solutions
export async function getSolutions() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Case Studies
export async function getCaseStudies() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// FAQ
export async function getFAQ() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'faq',
    sort: 'order',
    limit: 100,
  })
  return docs
}

// Industries
export async function getIndustries() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Integrations
export async function getIntegrations() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'integrations',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Integrations grouped by category
export async function getIntegrationsByCategory() {
  const integrations = await getIntegrations()
  return integrations.reduce(
    (acc, integration) => {
      const category = integration.category || 'other'
      if (!acc[category]) acc[category] = []
      acc[category].push(integration)
      return acc
    },
    {} as Record<string, typeof integrations>
  )
}

// Leads — persist a captured email (public write path for the CTA/footer forms)
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

// Site Settings
export async function getSiteSettings() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}

// Navigation
export async function getNavigation() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'navigation' })
}
