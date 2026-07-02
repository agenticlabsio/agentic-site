import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/resources/faq',
  'Frequently Asked Questions',
  'Answers to common questions about enterprise AI agents: deployment timelines, security and compliance, integrations, pricing, and ROI.',
)

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
