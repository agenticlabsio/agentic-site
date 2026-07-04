import { ImageResponse } from 'next/og'

export const alt = 'Agentic Labs — Custom Agentic Solutions for the Enterprise'
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
          background: '#161613',
          color: '#f7f7f3',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, display: 'flex' }}>Agentic Labs</div>
        <div style={{ fontSize: 32, color: '#9a9a8d', marginTop: 20, display: 'flex' }}>
          Custom Agentic Solutions for the Enterprise, Shipped in Weeks
        </div>
      </div>
    ),
    { ...size },
  )
}
