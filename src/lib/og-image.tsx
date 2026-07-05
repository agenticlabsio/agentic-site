import { ImageResponse } from 'next/og'

// Shared 1200×630 Open Graph card for the marketing detail routes. Each route
// supplies its own eyebrow / title / tagline; the layout and brand colors live
// here in one place so the routes can't drift apart.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

const FALLBACK_TAGLINE = 'Custom Agentic Solutions for the Enterprise'

export function createOgImageResponse({
  eyebrow,
  title,
  tagline,
}: {
  eyebrow: string
  title: string
  tagline?: string | null
}) {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#161613',
        color: '#f7f7f3',
        padding: 80,
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 24, color: '#7dbd9b', letterSpacing: 2, display: 'flex' }}>
        {eyebrow}
      </div>
      <div style={{ fontSize: 56, fontWeight: 700, marginTop: 24, display: 'flex' }}>{title}</div>
      <div
        style={{ fontSize: 30, color: '#9a9a8d', marginTop: 20, display: 'flex', maxWidth: 900 }}
      >
        {tagline || FALLBACK_TAGLINE}
      </div>
    </div>,
    { ...OG_SIZE }
  )
}
