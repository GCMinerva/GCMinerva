#!/usr/bin/env node

/**
 * SEO Ping Script for gcminerva.co
 *
 * This script automatically pings search engines and submits sitemaps
 * to ensure maximum visibility and indexing for the website.
 *
 * Usage:
 *   node scripts/ping-seo.js
 *
 * Or add to package.json:
 *   "seo:ping": "node scripts/ping-seo.js"
 */

const https = require('https');
const http = require('http');

const BASE_URL = 'https://gcminerva.co';
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

// Network sites to boost
const NETWORK_SITES = [
  {
    name: 'GC Minerva',
    url: 'https://gcminerva.co',
    sitemap: 'https://gcminerva.co/sitemap.xml',
  },
  {
    name: 'Dekport',
    url: 'https://dekport.com',
    sitemap: 'https://dekport.com/sitemap.xml',
  },
  {
    name: 'JNX03',
    url: 'https://jnx03.xyz',
    sitemap: 'https://jnx03.xyz/sitemap.xml',
  },
];

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const request = protocol.get(url, options, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve({
          statusCode: response.statusCode,
          data,
          headers: response.headers,
        });
      });
    });

    request.on('error', (error) => {
      reject(error);
    });

    request.setTimeout(15000, () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function pingSearchEngine(name, url) {
  try {
    log(`\n[${name}] Pinging...`, 'cyan');
    const response = await makeRequest(url);

    if (response.statusCode >= 200 && response.statusCode < 300) {
      log(`[${name}] ✓ Successfully pinged (Status: ${response.statusCode})`, 'green');
      return { name, success: true, statusCode: response.statusCode };
    } else {
      log(`[${name}] ✗ Failed (Status: ${response.statusCode})`, 'red');
      return { name, success: false, statusCode: response.statusCode };
    }
  } catch (error) {
    log(`[${name}] ✗ Error: ${error.message}`, 'red');
    return { name, success: false, error: error.message };
  }
}

async function pingInternalAPI(name, endpoint, method = 'POST') {
  try {
    log(`\n[${name}] Calling internal API...`, 'cyan');

    const url = new URL(endpoint, BASE_URL);
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000,
    };

    const protocol = url.protocol === 'https:' ? https : http;

    return new Promise((resolve, reject) => {
      const req = protocol.request(url, options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            if (response.statusCode >= 200 && response.statusCode < 300) {
              log(`[${name}] ✓ Success: ${jsonData.summary || jsonData.message || 'OK'}`, 'green');
              resolve({ name, success: true, data: jsonData });
            } else {
              log(`[${name}] ✗ Failed (Status: ${response.statusCode})`, 'red');
              resolve({ name, success: false, statusCode: response.statusCode, data: jsonData });
            }
          } catch (e) {
            log(`[${name}] ✓ Success (Status: ${response.statusCode})`, 'green');
            resolve({ name, success: true, statusCode: response.statusCode });
          }
        });
      });

      req.on('error', (error) => {
        log(`[${name}] ✗ Error: ${error.message}`, 'red');
        resolve({ name, success: false, error: error.message });
      });

      if (method === 'POST') {
        req.write(JSON.stringify({}));
      }
      req.end();
    });
  } catch (error) {
    log(`[${name}] ✗ Error: ${error.message}`, 'red');
    return { name, success: false, error: error.message };
  }
}

async function main() {
  log('\n═══════════════════════════════════════════════════════', 'bright');
  log('  SEO Ping Script - Network Boost', 'bright');
  log('  Sites: gcminerva.co, dekport.com, jnx03.xyz', 'bright');
  log('═══════════════════════════════════════════════════════\n', 'bright');

  const results = [];

  // 1. Ping all network sites to search engines
  log('\n--- Pinging Network Sites to Search Engines ---', 'yellow');

  for (const site of NETWORK_SITES) {
    log(`\n[${site.name}] Pinging sitemap...`, 'cyan');

    // Ping to Google
    results.push(
      await pingSearchEngine(
        `Google (${site.name})`,
        `https://www.google.com/ping?sitemap=${encodeURIComponent(site.sitemap)}`
      )
    );

    // Ping to Bing
    results.push(
      await pingSearchEngine(
        `Bing (${site.name})`,
        `https://www.bing.com/ping?sitemap=${encodeURIComponent(site.sitemap)}`
      )
    );

    // Ping to Yandex
    results.push(
      await pingSearchEngine(
        `Yandex (${site.name})`,
        `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(site.sitemap)}`
      )
    );
  }

  // 2. Call internal ping API (pings all services including IndexNow)
  log('\n--- Calling Internal APIs ---', 'yellow');
  results.push(
    await pingInternalAPI('Internal Ping API', '/api/ping-search-engines', 'POST')
  );

  // 3. Call cross-site boost API
  results.push(
    await pingInternalAPI('Cross-Site Network Boost', '/api/cross-site-boost', 'POST')
  );

  // 5. Summary
  log('\n═══════════════════════════════════════════════════════', 'bright');
  log('  Summary', 'bright');
  log('═══════════════════════════════════════════════════════\n', 'bright');

  const successful = results.filter((r) => r.success).length;
  const total = results.length;

  log(`Total Services: ${total}`, 'blue');
  log(`Successful: ${successful}`, 'green');
  log(`Failed: ${total - successful}`, 'red');

  if (successful === total) {
    log('\n✓ All services pinged successfully!', 'green');
    process.exit(0);
  } else {
    log('\n⚠ Some services failed. Check the logs above for details.', 'yellow');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    log(`\n✗ Fatal error: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  });
}

module.exports = { pingSearchEngine, pingInternalAPI };
