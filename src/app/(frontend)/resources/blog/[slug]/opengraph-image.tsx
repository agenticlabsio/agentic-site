import { getBlogPostBySlug } from '@/lib/payload'
import { createOgImageResponse, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-image'

export const alt = 'Agentic Labs Blog'
export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  return createOgImageResponse({
    eyebrow: 'AGENTIC LABS BLOG',
    title: post?.title ?? 'Agentic Labs',
    tagline: post?.excerpt,
  })
}
