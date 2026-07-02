import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/solutions',
  'AI Solutions & Services',
  "Enterprise AI solutions from Agentic Labs: intelligent agents, document processing, customer service automation, context management, evaluation, and governance. Production-ready in 6-8 weeks.",
)

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
