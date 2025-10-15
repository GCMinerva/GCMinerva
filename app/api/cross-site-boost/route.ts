import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://gcminerva.co'

/**
 * Cross-site SEO boost API
 * This endpoint helps boost SEO for all your interconnected websites
 * by pinging them simultaneously and submitting their sitemaps to search engines
 */

interface Site {
  name: string
  url: string
  sitemap: string
  description: string
}

const NETWORK_SITES: Site[] = [
  {
    name: 'GC Minerva',
    url: 'https://gcminerva.co',
    sitemap: 'https://gcminerva.co/sitemap.xml',
    description: 'Minerva#24809 Gen3 FTC Robotics Team',
  },
  {
    name: 'Dekport',
    url: 'https://dekport.com',
    sitemap: 'https://dekport.com/sitemap.xml',
    description: 'Dekport Portfolio & Projects',
  },
  {
    name: 'JNX03',
    url: 'https://jnx03.xyz',
    sitemap: 'https://jnx03.xyz/sitemap.xml',
    description: 'JNX03 Personal Website',
  },
]

async function pingSearchEngineForSite(siteName: string, sitemapUrl: string) {
  const results = {
    site: siteName,
    google: false,
    bing: false,
    yandex: false,
  }

  // Ping Google
  try {
    const googleResponse = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { method: 'GET' }
    )
    results.google = googleResponse.ok
  } catch (e) {
    // Continue on error
  }

  // Ping Bing
  try {
    const bingResponse = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { method: 'GET' }
    )
    results.bing = bingResponse.ok
  } catch (e) {
    // Continue on error
  }

  // Ping Yandex
  try {
    const yandexResponse = await fetch(
      `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      { method: 'GET' }
    )
    results.yandex = yandexResponse.ok
  } catch (e) {
    // Continue on error
  }

  return results
}

async function checkSiteHealth(url: string) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
    })
    return {
      accessible: response.ok,
      statusCode: response.status,
    }
  } catch (e) {
    return {
      accessible: false,
      statusCode: 0,
      error: e instanceof Error ? e.message : 'Unknown error',
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const timestamp = new Date().toISOString()
    const results = []

    // Ping all sites in the network
    for (const site of NETWORK_SITES) {
      const health = await checkSiteHealth(site.url)
      const pingResults = await pingSearchEngineForSite(site.name, site.sitemap)

      results.push({
        site: site.name,
        url: site.url,
        description: site.description,
        health,
        searchEnginePings: pingResults,
        timestamp,
      })
    }

    // Calculate success metrics
    const totalSites = NETWORK_SITES.length
    const accessibleSites = results.filter((r) => r.health.accessible).length
    const totalPings = results.reduce((sum, r) => {
      const pings = r.searchEnginePings
      return sum + (pings.google ? 1 : 0) + (pings.bing ? 1 : 0) + (pings.yandex ? 1 : 0)
    }, 0)

    return NextResponse.json({
      success: true,
      summary: `Boosted ${accessibleSites}/${totalSites} sites with ${totalPings} search engine pings`,
      timestamp,
      networkSites: results,
      seoStrategy: {
        crossLinking: 'All sites in network should link to each other',
        sitemapPinging: 'Sitemaps pinged to Google, Bing, and Yandex',
        recommendation:
          'Ensure each site has visible links to the other sites in the network for maximum SEO benefit',
      },
    })
  } catch (error) {
    console.error('Cross-site boost error:', error)
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

// GET endpoint to show network info
export async function GET() {
  return NextResponse.json({
    endpoint: `${BASE_URL}/api/cross-site-boost`,
    description: 'Boost SEO for all interconnected websites in your network',
    networkSites: NETWORK_SITES,
    features: [
      'Pings Google, Bing, and Yandex for all sites',
      'Health checks all sites in the network',
      'Provides cross-linking recommendations',
      'Simultaneous sitemap submission',
    ],
    usage: {
      method: 'POST',
      example: `curl -X POST ${BASE_URL}/api/cross-site-boost`,
    },
  })
}
