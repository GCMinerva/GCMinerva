/**
 * Submit URLs to IndexNow for immediate indexing
 * @param urls - Array of URLs or URL paths to submit
 * @returns Response from IndexNow API
 */
export async function submitToIndexNow(urls: string | string[]) {
  const urlArray = Array.isArray(urls) ? urls : [urls]

  try {
    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls: urlArray })
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'IndexNow submission failed')
    }

    return data
  } catch (error) {
    console.error('Error submitting to IndexNow:', error)
    throw error
  }
}

/**
 * Submit all sitemap URLs to IndexNow
 */
export async function submitSitemapToIndexNow() {
  const sitemapUrls = [
    '/',
    '/about',
    '/project',
    '/social',
    '/sponser',
    '/contact',
    '/member',
    '/community'
  ]

  return submitToIndexNow(sitemapUrls)
}
