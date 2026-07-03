# Agentic Site

Marketing website for Agentic Labs, built with Next.js 15, Payload CMS 3, and Cloudflare infrastructure.

## Stack

- Next.js 15 App Router
- Payload CMS 3
- Cloudflare Pages through OpenNext
- Cloudflare D1 for SQLite data
- Cloudflare R2 for media storage
- Tailwind CSS 4

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

The first `/admin` request may take 10-30 seconds while Payload compiles and syncs the local schema.

## Commands

```bash
pnpm dev                    # Start the Next.js dev server
pnpm build                  # Build the Next.js app
pnpm build:cloudflare       # Build for Cloudflare with OpenNext
pnpm deploy                 # Build and deploy to Cloudflare
pnpm deploy:database        # Apply production D1 migrations
pnpm lint                   # Run ESLint
pnpm format                 # Format source files
pnpm typecheck              # Run TypeScript checks
pnpm test:run               # Run tests once
pnpm payload migrate        # Run Payload migrations
pnpm payload migrate:create # Create a Payload migration
```

## Project Structure

```text
src/app/(frontend)/   Public marketing routes
src/app/(payload)/    Payload admin and API routes
src/collections/      Payload collection definitions
src/components/       Shared UI and SEO components
src/globals/          Payload global settings
src/lib/              Shared application utilities
src/migrations/       Payload database migrations
public/               Static assets and crawler metadata
```

## Payload CMS

Collections live in `src/collections/`:

- Users
- Media
- Products
- Solutions
- CaseStudies
- FAQ
- Industries
- Integrations
- BlogPosts
- Leads

Globals live in `src/globals/`:

- Navigation
- SiteSettings

Use `src/lib/payload.ts` for CMS data fetching.

## Configuration

- `src/payload.config.ts` configures Payload and Cloudflare context handling.
- `wrangler.jsonc` defines Cloudflare D1, R2, and worker bindings.
- `open-next.config.ts` configures the OpenNext Cloudflare adapter.
- `next.config.ts` wraps Next.js with Payload.
- `cloudflare-env.d.ts` contains generated Cloudflare binding types.

## Validation

Before committing non-trivial changes, run:

```bash
pnpm lint
pnpm typecheck
pnpm test:run
```
