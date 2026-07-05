// Shared blog types + category labels. This module is intentionally runtime-safe:
// the marketing pages import BLOG_CATEGORY_LABELS / BlogCategory from here, and the
// Lexical seeder imports the BlogBlock / InlineSegment shapes. The post corpus itself
// lives in src/seed/data/blog.ts (seed-only) so runtime code never pulls it in.

export type BlogCategory =
  'thought-leadership' | 'technical' | 'industry' | 'case-study' | 'how-to' | 'news'

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  'thought-leadership': 'Thought Leadership',
  technical: 'Technical Deep-Dive',
  industry: 'Industry',
  'case-study': 'Case Study',
  'how-to': 'How-To Guide',
  news: 'News & Announcements',
}

// An inline segment is plain text, an internal/external link, or bold text
// (used for the "What happens today:" / "With AI:" lead-ins).
export type InlineSegment = string | { text: string; href: string } | { text: string; bold: true }
// A body block is a plain paragraph (string), a section heading, or a paragraph
// that contains inline links.
export type BlogBlock = string | { heading: string } | { paragraph: InlineSegment[] }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: BlogCategory
  author: string
  /** ISO date used for publishedAt + Article schema. */
  publishedAt: string
  readTime: string
  featured?: boolean
  tags: string[]
  keyTakeaways: string[]
  body: BlogBlock[]
  /** Optional Q&A block rendered at the end of the post and emitted as FAQ JSON-LD (AEO). */
  faqs?: { question: string; answer: string }[]
}
