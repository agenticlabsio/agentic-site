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
```

## Architecture

### Deployment Stack
- **Hosting**: Cloudflare Pages via OpenNext (`@opennextjs/cloudflare`)
- **Database**: Cloudflare D1 (SQLite) via `@payloadcms/db-d1-sqlite`
- **Media Storage**: Cloudflare R2 via `@payloadcms/storage-r2`
- **CMS**: Payload CMS 3 with Lexical rich text editor

### Route Groups
- `src/app/(frontend)/` - Public marketing pages (home, solutions, industries, case studies)
- `src/app/(payload)/` - Payload admin panel at `/admin`

### Payload CMS Collections
Located in `src/collections/`:
- Users, Media, Products, Solutions, CaseStudies, FAQ, Industries, Integrations, BlogPosts

Globals in `src/globals/`:
- SiteSettings, Navigation

### Key Configuration Files
- `src/payload.config.ts` - Payload CMS config (handles both local dev and production Cloudflare contexts)
- `wrangler.jsonc` - Cloudflare Workers config (D1, R2 bindings)
- `open-next.config.ts` - OpenNext Cloudflare config
- `next.config.ts` - Next.js config wrapped with `withPayload`

### Path Aliases
- `@/*` maps to `./src/*`
- `@payload-config` maps to `./src/payload.config.ts`

## Cloudflare Context

The Payload config dynamically gets Cloudflare context:
- **Local dev/CLI**: Uses `wrangler.getPlatformProxy()`
- **Production**: Uses `@opennextjs/cloudflare.getCloudflareContext()`

Environment bindings configured in `wrangler.jsonc`:
- `D1` - D1 database binding
- `R2` - R2 storage bucket binding
- `ASSETS` - Static assets

## Styling

- Tailwind CSS 4 with PostCSS
- Fonts: DM Sans (body), Instrument Serif (display)
- CSS variables: `--font-dm-sans`, `--font-instrument-serif`
