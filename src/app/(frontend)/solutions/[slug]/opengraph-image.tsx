import { getSolutionBySlug } from '@/lib/payload'
import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image'

export const alt = 'Agentic Labs Solution'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolutionBySlug(slug)
  return createOgImageResponse({
    eyebrow: 'AGENTIC LABS',
    title: solution?.name ?? 'Agentic Labs',
    tagline: solution?.heroTagline,
  })
}
