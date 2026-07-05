import { getCaseStudyBySlug } from '@/lib/payload'
import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image'

export const alt = 'Agentic Labs Case Study'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  return createOgImageResponse({
    eyebrow: 'AGENTIC LABS · CASE STUDY',
    title: caseStudy ? `${caseStudy.title} ${caseStudy.subtitle}` : 'Agentic Labs',
    tagline: caseStudy?.industry,
  })
}
