import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/resources/blog',
  'Blog | Enterprise AI Insights',
  'Articles on agentic AI, the Model Context Protocol (MCP), AI governance, and real-world enterprise AI deployment from Agentic Labs.',
)

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
