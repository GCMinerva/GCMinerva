import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Minerva#24809 Gen3 | FTC'
  const description = searchParams.get('description') || 'Official website for Minerva#24809 Gen3 | FTC robotics team'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#003350',
          backgroundImage: 'linear-gradient(135deg, #003350 0%, #00548e 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e0e0e0',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            {description}
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '40px',
              fontSize: '24px',
              color: '#ffffff',
              opacity: 0.9,
            }}
          >
            <span style={{ marginRight: '20px' }}>🤖</span>
            <span>FIRST Tech Challenge</span>
            <span style={{ margin: '0 20px' }}>•</span>
            <span>Team #24809</span>
            <span style={{ margin: '0 20px' }}>•</span>
            <span>INTO THE DEEP</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
