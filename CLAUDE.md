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

## Styling — "Sapphire Nocturne" (dark-first)

- Tailwind CSS 4 with PostCSS; all design tokens live in `src/app/globals.css`.
- **Fonts** (via `next/font` in `(frontend)/layout.tsx`): Sora (`--font-display`),
  IBM Plex Sans (`--font-body`), IBM Plex Mono (`--font-mono`, for stats/labels).
  Use `font-display` for headings/CTAs, `font-body` for prose, `font-mono` for numbers.
- **Palette**: electric sapphire brand scale (`brand-500` #5b8dff, `brand-600` #3b6ae0)
  with a violet accent (#a855f7). Base element styles are in `@layer base` so Tailwind
  text/bg utilities override them.
- **Theme**: dark by default. The homepage (`.newsite` wrapper) reads its own scoped
  dark tokens and flips to light via `[data-theme="light"] .newsite` (theme toggle,
  default = dark). Interior pages also use the `newsite` wrapper for the dark canvas +
  shared `newsite/Footer`; they style with Tailwind utilities against the sapphire scale.
- Respect `prefers-reduced-motion` (handled globally in globals.css).

## Patterns

### SEO
Reusable schema components in `src/components/SEO/`: FAQSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema, OrganizationSchema

### Static Marketing Content
Solution detail pages (`/solutions/[slug]`) use client-side rendering with hardcoded data objects for performance. This is intentional for rarely-changing marketing copy.
