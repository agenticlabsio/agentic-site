#!/usr/bin/env node
// Pre-deploy guard: the D1 binding carries `"remote": false` so local dev
// (getPlatformProxy / wrangler dev) hits the miniflare SQLite instead of the
// production database. Shipping that override to prod would silently point the
// deployed Worker at a non-existent local DB, so refuse to deploy while it's set.
import { readFileSync } from 'node:fs'

const path = new URL('../wrangler.jsonc', import.meta.url)
const text = readFileSync(path, 'utf8')

// wrangler.jsonc allows comments; a plain regex is enough to spot the override.
if (/"remote"\s*:\s*false/.test(text)) {
  console.error(
    '\n✖ Deploy blocked: wrangler.jsonc still has `"remote": false`.\n' +
      '  That is a local-dev override — remove it (or set true) before deploying to production.\n',
  )
  process.exit(1)
}

console.log('✓ deploy config check passed (no remote:false override)')
