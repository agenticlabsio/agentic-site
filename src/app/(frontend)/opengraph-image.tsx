import { ImageResponse } from 'next/og'

export const alt = 'Agentic Labs — Custom AI Agents for SMEs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
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
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, display: 'flex' }}>Agentic Labs</div>
        <div style={{ fontSize: 32, color: '#9aa3b8', marginTop: 20, display: 'flex' }}>
          Custom AI Agents for SMEs, Shipped in Weeks
        </div>
      </div>
    ),
    { ...size },
  )
}
