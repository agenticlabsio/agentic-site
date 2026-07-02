# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Agentic Labs - an enterprise AI consulting company. Built with Next.js 15, Payload CMS 3, and deployed to Cloudflare Pages with D1 (SQLite) database and R2 storage.

## Commands

```bash
# Development
pnpm dev                    # Start dev server with Turbo (uses wrangler for local D1/R2)

# Build & Deploy
pnpm build                  # Standard Next.js build
pnpm build:cloudflare       # Build for Cloudflare (next build + OpenNext)
pnpm deploy                 # Build and deploy to Cloudflare Pages
pnpm deploy:database        # Apply D1 migrations to production

# Payload CMS
pnpm payload migrate        # Run pending migrations
pnpm payload migrate:create # Generate new migration

# Cloudflare CLI
pnpm cf:login               # Authenticate with Cloudflare
pnpm cf:tail                # Tail production logs (agentic-site)
```

## Architecture

### Deployment Stack
- **Hosting**: Cloudflare Pages via OpenNext (`@opennextjs/cloudflare`)
- **Database**: Cloudflare D1 (SQLite) via `@payloadcms/db-d1-sqlite`
- **Media Storage**: Cloudflare R2 via `@payloadcms/storage-r2`
- **CMS**: Payload CMS 3 with Lexical rich text editor

### Route Groups
- `src/app/(frontend)/` - Public marketing pages
- `src/app/(payload)/` - Payload admin panel at `/admin`

### Payload CMS
Collections in `src/collections/`: Users, Media, Products, Solutions, CaseStudies, FAQ, Industries, Integrations, BlogPosts

Globals in `src/globals/`: SiteSettings, Navigation

### Data Fetching
Use `src/lib/payload.ts` for all CMS data fetching. Functions like `getSolutions()`, `getCaseStudies()`, `getIndustries()` provide typed data access with appropriate depth and sorting.

### Key Files
- `src/payload.config.ts` - Payload CMS config (handles local dev vs production Cloudflare context)
- `wrangler.jsonc` - Cloudflare Workers config (D1, R2 bindings)
- `open-next.config.ts` - OpenNext Cloudflare adapter config
- `next.config.ts` - Next.js config wrapped with `withPayload`

### Path Aliases
- `@/*` → `./src/*`
- `@payload-config` → `./src/payload.config.ts`

## Cloudflare Context

Payload config dynamically gets Cloudflare context:
- **Local dev/CLI**: Uses `wrangler.getPlatformProxy()`
- **Production**: Uses `@opennextjs/cloudflare.getCloudflareContext()`

## Styling

- Tailwind CSS 4 with PostCSS
- Fonts: DM Sans (body), Instrument Serif (display headings)
- Use `font-display` class for headings/nav/CTAs, `font-body` for body text
- Brand color: `brand-600` (primary), `brand-700` (hover states)

## Patterns

### SEO
Reusable schema components in `src/components/SEO/`: FAQSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema, OrganizationSchema

### Static Marketing Content
Solution detail pages (`/solutions/[slug]`) use client-side rendering with hardcoded data objects for performance. This is intentional for rarely-changing marketing copy.
