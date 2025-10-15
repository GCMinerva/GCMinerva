import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://gcminerva.co'
const ALLOWED_SOURCES = ['https://dekport.com', 'https://jnx03.xyz']

/**
 * Webmention receiver endpoint
 * This allows dekport.com and jnx03.xyz to notify gcminerva.co about backlinks
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const source = formData.get('source')?.toString()
    const target = formData.get('target')?.toString()

    if (!source || !target) {
      return NextResponse.json(
        { error: 'Both source and target parameters are required' },
        { status: 400 }
      )
    }

    // Verify target is this site
    if (!target.startsWith(BASE_URL)) {
      return NextResponse.json(
        { error: 'Target must be a URL on this site' },
        { status: 400 }
      )
    }

    // Verify source is from allowed sites
    const isAllowedSource = ALLOWED_SOURCES.some((allowed) =>
      source.startsWith(allowed)
    )

    if (!isAllowedSource) {
      return NextResponse.json(
        {
          error: 'Source must be from an allowed domain',
          allowedDomains: ALLOWED_SOURCES,
        },
        { status: 403 }
      )
    }

    // In production, you would:
    // 1. Verify the source URL actually contains a link to target
    // 2. Store the webmention in a database
    // 3. Display received webmentions on your site

    console.log(`Webmention received: ${source} -> ${target}`)

    return NextResponse.json({
      success: true,
      message: 'Webmention received and queued for processing',
      source,
      target,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Webmention error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to show webmention info
export async function GET() {
  return NextResponse.json({
    endpoint: `${BASE_URL}/api/webmention`,
    description: 'Webmention receiver for cross-site notifications',
    allowedSources: ALLOWED_SOURCES,
    usage: {
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      parameters: {
        source: 'URL of the page containing the link',
        target: 'URL of the page being linked to',
      },
      example: `curl -X POST ${BASE_URL}/api/webmention -d "source=https://dekport.com/post&target=${BASE_URL}/"`,
    },
  })
}
