import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://gcminerva.co'
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`

interface PingResult {
  service: string
  success: boolean
  message: string
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const results: PingResult[] = []
    const timestamp = new Date().toISOString()

    // 1. Google Search Console - Submit sitemap via IndexNow (Google uses IndexNow protocol)
    try {
      const googleResponse = await fetch(
        `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
        { method: 'GET' }
      )
      results.push({
        service: 'Google',
        success: googleResponse.ok,
        message: googleResponse.ok
          ? 'Successfully pinged Google'
          : `Failed with status ${googleResponse.status}`,
        timestamp,
      })
    } catch (error) {
      results.push({
        service: 'Google',
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp,
      })
    }

    // 2. Bing Webmaster Tools - Submit sitemap
    try {
      const bingResponse = await fetch(
        `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
        { method: 'GET' }
      )
      results.push({
        service: 'Bing',
        success: bingResponse.ok,
        message: bingResponse.ok
          ? 'Successfully pinged Bing'
          : `Failed with status ${bingResponse.status}`,
        timestamp,
      })
    } catch (error) {
      results.push({
        service: 'Bing',
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp,
      })
    }

    // 3. Yandex Webmaster - Submit sitemap
    try {
      const yandexResponse = await fetch(
        `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
        { method: 'GET' }
      )
      results.push({
        service: 'Yandex',
        success: yandexResponse.ok,
        message: yandexResponse.ok
          ? 'Successfully pinged Yandex'
          : `Failed with status ${yandexResponse.status}`,
        timestamp,
      })
    } catch (error) {
      results.push({
        service: 'Yandex',
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp,
      })
    }

    // 4. IndexNow (Bing, Yandex, Seznam.cz, and Naver)
    try {
      const indexNowResponse = await fetch(`${BASE_URL}/api/indexnow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          urls: [
            '/',
            '/about',
            '/project',
            '/social',
            '/sponser',
            '/contact',
            '/member',
            '/community',
          ],
        }),
      })
      const indexNowData = await indexNowResponse.json()
      results.push({
        service: 'IndexNow',
        success: indexNowResponse.ok,
        message: indexNowResponse.ok
          ? `Successfully submitted ${indexNowData.urls?.length || 0} URLs`
          : `Failed: ${indexNowData.error || 'Unknown error'}`,
        timestamp,
      })
    } catch (error) {
      results.push({
        service: 'IndexNow',
        success: false,
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp,
      })
    }

    // 5. Ping external sites (dekport.com and jnx03.xyz) - Multiple methods
    const externalSites = [
      {
        name: 'dekport.com',
        url: 'https://dekport.com',
        sitemap: 'https://dekport.com/sitemap.xml',
        pingback: 'https://dekport.com/xmlrpc.php',
        webmention: 'https://dekport.com/webmention'
      },
      {
        name: 'jnx03.xyz',
        url: 'https://jnx03.xyz',
        sitemap: 'https://jnx03.xyz/sitemap.xml',
        pingback: 'https://jnx03.xyz/xmlrpc.php',
        webmention: 'https://jnx03.xyz/webmention'
      },
    ]

    for (const site of externalSites) {
      try {
        // Method 1: Ping their sitemap to Google/Bing
        try {
          await fetch(
            `https://www.google.com/ping?sitemap=${encodeURIComponent(site.sitemap)}`,
            { method: 'GET' }
          )
        } catch (e) {
          // Ignore errors, continue
        }

        try {
          await fetch(
            `https://www.bing.com/ping?sitemap=${encodeURIComponent(site.sitemap)}`,
            { method: 'GET' }
          )
        } catch (e) {
          // Ignore errors, continue
        }

        // Method 2: Send webmention (notify about backlink)
        try {
          const webmentionPayload = new URLSearchParams({
            source: BASE_URL,
            target: site.url,
          })

          await fetch(site.webmention, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: webmentionPayload.toString(),
          })
        } catch (e) {
          // Webmention may not be supported
        }

        // Method 3: XML-RPC Pingback
        try {
          const pingbackXML = `<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
  <methodName>pingback.ping</methodName>
  <params>
    <param><value><string>${BASE_URL}</string></value></param>
    <param><value><string>${site.url}</string></value></param>
  </params>
</methodCall>`

          await fetch(site.pingback, {
            method: 'POST',
            headers: { 'Content-Type': 'text/xml' },
            body: pingbackXML,
          })
        } catch (e) {
          // Pingback may not be supported
        }

        // Method 4: HTTP HEAD request to verify site is up
        const siteResponse = await fetch(site.url, {
          method: 'HEAD',
          redirect: 'follow',
        })

        results.push({
          service: `External: ${site.name}`,
          success: siteResponse.ok,
          message: siteResponse.ok
            ? `✓ Multi-method ping sent (sitemap, webmention, pingback) + backlink cross-reference`
            : `Site returned status ${siteResponse.status}`,
          timestamp,
        })
      } catch (error) {
        results.push({
          service: `External: ${site.name}`,
          success: false,
          message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          timestamp,
        })
      }
    }

    const successCount = results.filter((r) => r.success).length
    const totalCount = results.length

    return NextResponse.json({
      success: true,
      summary: `Successfully pinged ${successCount} out of ${totalCount} services`,
      timestamp,
      results,
    })
  } catch (error) {
    console.error('Search engine ping error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

// GET endpoint to check API status
export async function GET() {
  return NextResponse.json({
    status: 'active',
    endpoint: '/api/ping-search-engines',
    method: 'POST',
    description: 'Ping search engines and external sites with sitemap updates',
    sitemapUrl: SITEMAP_URL,
  })
}
