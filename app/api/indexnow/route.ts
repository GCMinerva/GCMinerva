import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = 'ff6f9e628e87475aae6ba4df5250e791'
const BASE_URL = 'https://minerva.jnx03.xyz'

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      )
    }

    // Validate and format URLs
    const formattedUrls = urls.map(url => {
      if (url.startsWith('/')) {
        return `${BASE_URL}${url}`
      }
      return url
    })

    // Submit to IndexNow
    const payload = {
      host: 'minerva.jnx03.xyz',
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: formattedUrls
    }

    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        {
          error: 'IndexNow submission failed',
          status: response.status,
          details: errorText
        },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Successfully submitted ${formattedUrls.length} URL(s) to IndexNow`,
      urls: formattedUrls
    })

  } catch (error) {
    console.error('IndexNow API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
