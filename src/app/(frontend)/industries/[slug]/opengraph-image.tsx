import { getIndustryBySlug } from '@/lib/payload'
import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image'

export const alt = 'Agentic Labs Industry'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = await getIndustryBySlug(slug)
  return createOgImageResponse({
    eyebrow: 'AGENTIC LABS',
    title: industry ? `AI for ${industry.name}` : 'Agentic Labs',
    tagline: industry?.tagline,
  })
}
