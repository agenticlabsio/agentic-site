import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/portfolio',
  'Portfolio',
  'A selection of Agentic Labs enterprise AI work and production deployments across industries.',
)

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
