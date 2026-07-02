import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/platform',
  'The Agentic Labs Platform',
  'The platform behind production enterprise AI agents: pre-built integrations, governance, evaluation, and orchestration across your systems of record.',
)

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return children
}
