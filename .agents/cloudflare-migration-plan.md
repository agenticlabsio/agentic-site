# Cloudflare Migration Plan: Next.js + Payload CMS

## Current State

| Component | Current | Target |
|-----------|---------|--------|
| Hosting | Local / Vercel-ready | Cloudflare Pages |
| Database | SQLite (file: `payload.db`) | Cloudflare D1 (SQLite) |
| Media Storage | Local filesystem | Cloudflare R2 |
| Admin Panel | `/admin` route | Same, via Cloudflare |
| Frontend | `/` route | Same, via Cloudflare |

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    Cloudflare Edge Network                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────┐ │
│  │ Cloudflare      │    │ Cloudflare      │    │ Cloudflare  │ │
│  │ Pages           │───▶│ D1              │    │ R2          │ │
│  │ (Next.js +      │    │ (SQLite DB)     │    │ (Media)     │ │
│  │  Payload CMS)   │    └─────────────────┘    └─────────────┘ │
│  │                 │                                  ▲         │
│  │  - Frontend     │──────────────────────────────────┘         │
│  │  - Admin        │                                            │
│  │  - API Routes   │                                            │
│  └─────────────────┘                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Cloudflare Account Setup

### 1.1 Prerequisites
- [ ] Cloudflare account (free tier works, but paid Workers plan recommended for bundle size)
- [ ] Wrangler CLI installed globally or as dev dependency
- [ ] Domain configured in Cloudflare (optional, can use `*.pages.dev`)

### 1.2 Create Resources

```bash
# Login to Cloudflare
wrangler login

# Create D1 database
wrangler d1 create payload-db
# Save the database_id from output

# Create R2 bucket for media
wrangler r2 bucket create payload-media --location=enam
# (use appropriate location: wnam, enam, weur, eeur, apac)
```

---

## Phase 2: Project Configuration

### 2.1 Install Dependencies

```bash
# Remove current SQLite adapter
pnpm remove @payloadcms/db-sqlite

# Install Cloudflare-specific packages
pnpm add @opennextjs/cloudflare @payloadcms/db-sqlite wrangler

# Note: @payloadcms/db-sqlite works with D1 via binding
# Alternative: @payloadcms/db-d1-sqlite (if available, check npm)
```

### 2.2 Create `wrangler.toml`

```toml
name = "agentic-site"
compatibility_date = "2024-12-30"
compatibility_flags = ["nodejs_compat"]

# Main entry point (OpenNext builds to this)
main = ".open-next/worker.js"

# Static assets
[assets]
directory = ".open-next/assets"
binding = "ASSETS"

# Database - Cloudflare D1
[[d1_databases]]
binding = "DB"
database_name = "payload-db"
database_id = "<YOUR_DATABASE_ID>"  # From wrangler d1 create output

# Media Storage - Cloudflare R2
[[r2_buckets]]
binding = "MEDIA_BUCKET"
bucket_name = "payload-media"

# Environment variables (non-sensitive)
[vars]
NEXT_PUBLIC_SERVER_URL = "https://agentic-site.pages.dev"
NODE_ENV = "production"

# Preview environment overrides
[env.preview]
[env.preview.vars]
NEXT_PUBLIC_SERVER_URL = "https://preview.agentic-site.pages.dev"

# Local development
[env.development]
[[env.development.d1_databases]]
binding = "DB"
database_name = "payload-db"
database_id = "<YOUR_DATABASE_ID>"
```

### 2.3 Update `payload.config.ts`

```typescript
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { r2Storage } from '@payloadcms/storage-r2'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Solutions } from './collections/Solutions'
import { CaseStudies } from './collections/CaseStudies'
import { FAQ } from './collections/FAQ'
import { Industries } from './collections/Industries'
import { Integrations } from './collections/Integrations'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Access Cloudflare bindings
const getCloudflareEnv = () => {
  if (typeof process !== 'undefined' && process.env.DB) {
    // Running in Cloudflare Workers
    return {
      DB: process.env.DB,
      MEDIA_BUCKET: process.env.MEDIA_BUCKET,
    }
  }
  return null
}

export default buildConfig({
  admin: {
    user: 'users',
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
  ],
  globals: [SiteSettings, Navigation],
  secret: process.env.PAYLOAD_SECRET || 'development-secret-change-in-production',

  // Database configuration for D1
  db: sqliteAdapter({
    client: {
      // For local development, use file-based SQLite
      // For production, Payload will use the D1 binding
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),

  // R2 storage for media uploads
  plugins: [
    r2Storage({
      collections: {
        media: true,
      },
      bucket: process.env.MEDIA_BUCKET,
      // Public URL for media files
      generateFileURL: ({ filename }) => {
        return `https://media.your-domain.com/${filename}`
      },
    }),
  ],

  typescript: {
    outputFile: path.resolve(dirname, '../payload-types.ts'),
  },
})
```

### 2.4 Update `next.config.ts`

```typescript
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: false,

  // Image optimization - use Cloudflare or external service
  images: {
    unoptimized: true, // Disable Next.js image optimization (not supported on Workers)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: 'media.your-domain.com', // Your R2 custom domain
      },
    ],
  },

  // Required for Cloudflare Pages
  output: 'standalone',
}

export default withPayload(nextConfig)
```

### 2.5 Update `package.json` Scripts

```json
{
  "scripts": {
    "dev": "wrangler dev",
    "dev:local": "next dev --turbopack",
    "build": "next build && npx @opennextjs/cloudflare",
    "start": "next start",
    "deploy": "pnpm build && wrangler pages deploy .open-next/assets --project-name=agentic-site",
    "db:migrate": "wrangler d1 execute payload-db --remote --file=./migrations/schema.sql",
    "db:migrate:local": "wrangler d1 execute payload-db --local --file=./migrations/schema.sql",
    "cf:login": "wrangler login",
    "cf:tail": "wrangler pages deployment tail --project-name=agentic-site"
  }
}
```

### 2.6 Create `.dev.vars` (Local Secrets)

```bash
# .dev.vars (DO NOT COMMIT)
PAYLOAD_SECRET=your-super-secret-key-minimum-32-characters-long
```

---

## Phase 3: Database Migration

### 3.1 Export Current Data (if any)

```bash
# If you have existing data in payload.db
sqlite3 payload.db .dump > migrations/backup.sql
```

### 3.2 Create Migration File

```bash
mkdir -p migrations
```

Create `migrations/0001_initial_schema.sql` - Payload will auto-generate schema, but you may need to run:

```bash
# Generate Payload's schema
pnpm payload migrate:create
```

### 3.3 Apply to D1

```bash
# Local testing
wrangler d1 execute payload-db --local --file=./migrations/0001_initial_schema.sql

# Production
wrangler d1 execute payload-db --remote --file=./migrations/0001_initial_schema.sql
```

---

## Phase 4: R2 Media Configuration

### 4.1 Configure Public Access

Option A: Custom Domain (Recommended)
```bash
# In Cloudflare Dashboard:
# 1. Go to R2 > payload-media bucket
# 2. Settings > Public access > Custom domain
# 3. Add: media.your-domain.com
```

Option B: R2.dev subdomain
```bash
# Enable in R2 bucket settings
# URL format: https://<bucket>.r2.dev/<file>
```

### 4.2 CORS Configuration (if needed)

```json
// r2-cors.json
[
  {
    "AllowedOrigins": ["https://agentic-site.pages.dev", "https://your-domain.com"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3600
  }
]
```

---

## Phase 5: Cloudflare Pages Setup

### 5.1 Connect Repository

1. Go to Cloudflare Dashboard > Pages
2. Create project > Connect to Git
3. Select your repository
4. Configure build settings:
   - Build command: `pnpm build`
   - Build output directory: `.open-next/assets`
   - Root directory: `/`

### 5.2 Environment Variables (Dashboard)

Add in Cloudflare Pages > Settings > Environment variables:

| Variable | Value | Type |
|----------|-------|------|
| `PAYLOAD_SECRET` | `<your-32-char-secret>` | Secret (encrypted) |
| `NEXT_PUBLIC_SERVER_URL` | `https://your-domain.com` | Plain text |

### 5.3 Bindings (Dashboard)

Add in Cloudflare Pages > Settings > Functions > Bindings:

| Type | Name | Resource |
|------|------|----------|
| D1 Database | `DB` | `payload-db` |
| R2 Bucket | `MEDIA_BUCKET` | `payload-media` |

---

## Phase 6: DNS & Domain

### 6.1 Custom Domain Setup

```bash
# In Cloudflare Dashboard:
# 1. Pages > agentic-site > Custom domains
# 2. Add domain: your-domain.com
# 3. Cloudflare auto-configures DNS
```

### 6.2 Recommended DNS Records

```
Type    Name    Content                         Proxy
CNAME   @       agentic-site.pages.dev          Yes
CNAME   www     agentic-site.pages.dev          Yes
CNAME   media   <r2-public-url>                 Yes
```

---

## Phase 7: Testing & Verification

### 7.1 Local Testing

```bash
# Build and test locally with Wrangler
pnpm build
wrangler pages dev .open-next/assets --d1=DB --r2=MEDIA_BUCKET
```

### 7.2 Preview Deployment

```bash
# Deploy to preview environment
wrangler pages deploy .open-next/assets --project-name=agentic-site --branch=preview
```

### 7.3 Production Checklist

- [ ] Frontend loads at `/`
- [ ] Admin panel loads at `/admin`
- [ ] Can create/edit content in admin
- [ ] Media uploads work (stored in R2)
- [ ] API routes respond (`/api/products`, etc.)
- [ ] HTTPS enforced
- [ ] Environment variables set correctly

---

## Gotchas & Limitations

### Known Issues

1. **Bundle Size**: Free tier has 3MB limit. Paid plan gives 10MB. Payload + Next.js can exceed free tier.

2. **No `next/image` Optimization**: Cloudflare Workers don't support Next.js image optimization. Use `unoptimized: true` or Cloudflare Image Resizing.

3. **D1 Parameter Limits**: Large collections may hit SQLite parameter limits. Use `blocksAsJSON: true` in adapter config if needed.

4. **Cold Starts**: First request after deployment may be slower.

5. **CPU Time Limit**: 10ms CPU time per request on free tier, 30ms on paid.

6. **Memory Limit**: 128MB per request.

7. **No Persistent Connections**: Each request is stateless.

### Workarounds

| Issue | Solution |
|-------|----------|
| Bundle too large | Tree-shake, code-split, use paid plan |
| Image optimization | Cloudflare Image Resizing, pre-optimize |
| D1 query timeout | Add indexes, optimize queries |
| Media URL issues | Use R2 custom domain with CDN |

---

## Cost Estimate

### Free Tier Limits

| Service | Free Tier |
|---------|-----------|
| Pages | Unlimited sites, 500 builds/month |
| D1 | 5M rows read, 100k writes/day, 5GB storage |
| R2 | 10GB storage, 10M requests/month |
| Workers | 100k requests/day |

### Paid Plan (Workers Paid - $5/month)

| Service | Included |
|---------|----------|
| Workers | 10M requests/month |
| D1 | $0.75/M reads, $1/M writes |
| R2 | $0.015/GB storage, $0.36/M Class A, $0.036/M Class B |

---

## Rollback Plan

If migration fails:

1. Revert `payload.config.ts` to use `file:./payload.db`
2. Remove wrangler.toml
3. Deploy to alternative platform (Vercel, Railway, etc.)
4. Export D1 data if needed: `wrangler d1 export payload-db --output=backup.sql`

---

## File Changes Summary

| File | Action | Purpose |
|------|--------|---------|
| `wrangler.toml` | Create | Cloudflare configuration |
| `.dev.vars` | Create | Local secrets |
| `payload.config.ts` | Modify | D1 + R2 bindings |
| `next.config.ts` | Modify | Disable image optimization |
| `package.json` | Modify | Add build/deploy scripts |
| `.gitignore` | Modify | Add `.dev.vars`, `.wrangler/` |
| `migrations/*.sql` | Create | Database schema |

---

## Commands Quick Reference

```bash
# Setup
wrangler login
wrangler d1 create payload-db
wrangler r2 bucket create payload-media

# Development
pnpm dev                    # Local with Wrangler
pnpm dev:local              # Local with Next.js (no Cloudflare)

# Database
pnpm db:migrate:local       # Apply migrations locally
pnpm db:migrate             # Apply migrations to production

# Deploy
pnpm build                  # Build for Cloudflare
pnpm deploy                 # Deploy to Cloudflare Pages

# Debugging
wrangler pages deployment tail --project-name=agentic-site
wrangler d1 execute payload-db --remote --command="SELECT * FROM users"
```
