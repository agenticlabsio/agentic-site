import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static generation now fans out across many CMS-backed [slug] routes
  // (solutions, industries, case-studies). The local D1/miniflare emulation
  // used for `next build` is a single SQLite file and throws SQLITE_BUSY
  // under the default multi-worker concurrency, so force serial generation.
  experimental: {
    cpus: 1,
  },

  // Image optimization is not supported on Cloudflare Workers
  // Use Cloudflare Image Resizing or pre-optimize images
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '**.r2.dev',
      },
    ],
  },

  // Required for OpenNext/Cloudflare
  output: 'standalone',

  // Type safety is enforced separately via `pnpm typecheck` (tsc --noEmit).
  // Skip lint during build so an ESLint plugin crash can't block production deploys.
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Transpile Cloudflare packages
  transpilePackages: ['@opennextjs/cloudflare'],

  // Exclude dev dependencies from server bundle
  serverExternalPackages: ['drizzle-kit', 'typescript'],

  // Webpack configuration for Cloudflare compatibility
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Mark dev-only packages as external
      config.externals = config.externals || []
      if (Array.isArray(config.externals)) {
        config.externals.push('drizzle-kit', 'typescript')
      }
    }
    return config
  },
}

export default withPayload(nextConfig)
