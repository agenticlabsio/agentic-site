import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/resources',
  'Resources',
  'Guides, FAQs, and insights on deploying enterprise agentic solutions in production from the Agentic Labs team.',
)

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
