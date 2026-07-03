import fs from 'fs'
import path from 'path'
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { r2Storage } from '@payloadcms/storage-r2'
import type { CloudflareContext } from '@opennextjs/cloudflare'
import type { GetPlatformProxyOptions } from 'wrangler'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Solutions } from './collections/Solutions'
import { CaseStudies } from './collections/CaseStudies'
import { FAQ } from './collections/FAQ'
import { Industries } from './collections/Industries'
import { Integrations } from './collections/Integrations'
import { BlogPosts } from './collections/BlogPosts'
import { Leads } from './collections/Leads'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const realpath = (value: string) => {
  try {
    return fs.existsSync(value) ? fs.realpathSync(value) : undefined
  } catch {
    return undefined
  }
}

const isCLI = process.argv.some((value) => {
  const resolved = realpath(value)
  return resolved?.endsWith(path.join('payload', 'bin.js'))
})
const isProduction = process.env.NODE_ENV === 'production'

// PAYLOAD_SECRET is used to sign auth tokens. Fall back to a dev-only value
// locally, but fail fast in production rather than shipping a public secret.
const payloadSecret = process.env.PAYLOAD_SECRET
if (isProduction && !payloadSecret) {
  throw new Error('PAYLOAD_SECRET must be set in production.')
}

// Get Cloudflare context - different methods for CLI vs production
const cloudflare =
  isCLI || !isProduction
    ? await getCloudflareContextFromWrangler()
    : await getCloudflareContextFromOpenNext()

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Products,
    Solutions,
    CaseStudies,
    FAQ,
    Industries,
    Integrations,
    BlogPosts,
    Leads,
  ],
  globals: [SiteSettings, Navigation],
  secret: payloadSecret || 'development-secret-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // Cloudflare D1 Database adapter.
  // push: false — this project tracks schema via committed migrations (src/migrations),
  // so disable dev-time schema push, which otherwise collides with the migrated schema.
  db: sqliteD1Adapter({ binding: cloudflare.env.D1, push: false }),

  // R2 Storage for media uploads
  plugins: [
    r2Storage({
      // Type cast required due to version mismatch between @cloudflare/workers-types and @payloadcms/storage-r2
      bucket: cloudflare.env.R2 as Parameters<typeof r2Storage>[0]['bucket'],
      collections: { media: true },
    }),
  ],
})

// Get Cloudflare context from Wrangler (for local dev and CLI commands)
function getCloudflareContextFromWrangler(): Promise<CloudflareContext> {
  // Dynamic import to avoid bundling issues - the string manipulation prevents webpack from resolving it
  return import(/* webpackIgnore: true */ `${'__wrangler'.replaceAll('_', '')}`).then(
    ({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        configPath: './wrangler.jsonc',
      } satisfies GetPlatformProxyOptions),
  )
}

// Get Cloudflare context from OpenNext (for production)
async function getCloudflareContextFromOpenNext(): Promise<CloudflareContext> {
  const { getCloudflareContext } = await import('@opennextjs/cloudflare')
  return getCloudflareContext({ async: true })
}
