import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/case-studies',
  'AI Case Studies & Client Outcomes',
  'Real enterprise agentic deployments and measurable results — processing time cuts, cost reduction, and accuracy gains across financial services, healthcare, retail, and manufacturing.',
)

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
