# AGENTS.md

## Cursor Cloud specific instructions

### Services overview

This is a single Next.js 15 + Payload CMS 3 marketing site. One service: `pnpm dev` starts the entire stack (Next.js dev server with Turbopack + local Cloudflare D1/R2 emulation via wrangler).

### Key gotchas

- **D1 `remote: false`**: The `wrangler.jsonc` must have `"remote": false` for the D1 database binding to use local emulation. The repo default is `"remote": true` (for production). Without this change, all Payload commands fail with a Cloudflare authentication error.
- **Schema migrations**: The initial migration is outdated relative to the current collection definitions. A second migration (`20260227_153548`) was generated to bring the schema up to date. If the local DB (`.wrangler/` directory) is deleted, you must run `pnpm payload migrate` before accessing `/admin`. Alternatively, skip migrations entirely and let the dev server's drizzle-kit push sync the schema on first `/admin` access (this may take ~10-30 seconds).
- **Interactive drizzle prompts**: If drizzle-kit push runs (e.g. schema is out of sync), it uses interactive TTY prompts. In non-interactive environments, use `expect` to auto-select defaults (always choose "create column", never "rename column").
- **pnpm build scripts**: `@tailwindcss/oxide` and `sharp` require their postinstall build scripts to run. The `pnpm.onlyBuiltDependencies` field in `package.json` whitelists them for non-interactive installs.
- **Pre-existing type errors**: There are pre-existing type errors in `src/seed/` and `src/app/(payload)/api/_seed/` files.
- **Admin panel first access**: The first request to `/admin` compiles the admin bundle and performs schema push, which can take 10-30 seconds. Subsequent requests are fast.

### Commands reference

See `CLAUDE.md` for the full command reference. Key commands:
- `pnpm dev` — start dev server (localhost:3000)
- `pnpm payload migrate` — run pending DB migrations
- `pnpm build` — standard Next.js build
- `pnpm lint` — run ESLint on src/
- `pnpm lint:fix` — run ESLint with auto-fix
- `pnpm format` — format code with Prettier
- `pnpm typecheck` — run TypeScript type checking
- `pnpm test` — run Vitest in watch mode
- `pnpm test:run` — run tests once
