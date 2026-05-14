import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Dental Clinic Namour'

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f7f5',
        padding: '60px',
      }}
    >
      <div
        style={{
          fontSize: 24,
          color: '#2a5099',
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        Dental Clinic Namour
      </div>
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: '#1a1814',
          textAlign: 'center',
          lineHeight: 1.2,
          maxWidth: 900,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 20,
          color: '#5a5650',
          marginTop: 24,
        }}
      >
        Rue Paul Spaak 3, 1000 Bruxelles
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
