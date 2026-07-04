import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/industries',
  'AI Solutions by Industry',
  'Industry-specific agentic automation for healthcare, manufacturing, retail, energy, distribution, vLA agents, and biologics logistics. HIPAA and SOC 2 compliant.',
)

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children
}
