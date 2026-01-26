import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {

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
