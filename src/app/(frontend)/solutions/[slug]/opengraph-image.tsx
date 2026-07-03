import { ImageResponse } from 'next/og'
import { getSolutionBySlug } from '@/lib/payload'

export const alt = 'Agentic Labs Solution'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolutionBySlug(slug)
  const title = solution?.name ?? 'Agentic Labs'
  const tagline = solution?.heroTagline ?? 'Custom AI Agents for SMEs'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0e1a',
          color: '#eef1f8',
          padding: 80,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 24, color: '#7da5ff', letterSpacing: 2, display: 'flex' }}>
          AGENTIC LABS
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 24, display: 'flex' }}>{title}</div>
        <div style={{ fontSize: 30, color: '#9aa3b8', marginTop: 20, display: 'flex' }}>
          {tagline}
        </div>
      </div>
    ),
    { ...size },
  )
}
