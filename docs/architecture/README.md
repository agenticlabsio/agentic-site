# Architecture Overview

This document describes the high-level architecture of the Agentic Labs marketing site.

## System Diagram

See [overview.mermaid](./overview.mermaid) for the visual architecture diagram.

## Components

### Client Layer
- **Browser**: End users accessing the marketing site
- **AI Agents**: Automated agents interacting with the site via MCP

### Edge Layer (Cloudflare)
- **Cloudflare Pages**: Hosts the Next.js application via OpenNext adapter
- **Cloudflare CDN**: Global content delivery and caching

### Application Layer

#### Main Site
- **Next.js 15**: React framework with App Router for server-side rendering
- **Payload CMS 3**: Headless CMS for content management
- **OpenNext Adapter**: Bridges Next.js to Cloudflare Workers runtime

#### Demo App
- **Next.js Demo**: Standalone demo application showcasing AI operations

### Data Layer (Cloudflare)
- **Cloudflare D1**: SQLite database for CMS data
- **Cloudflare R2**: Object storage for media assets

### External Services
- **GitHub**: Source control and CI/CD via Actions
- **Mesa Review**: Automated PR review bot

## Data Flow

1. User requests hit Cloudflare CDN
2. CDN routes to Cloudflare Pages
3. OpenNext adapter translates requests for Next.js
4. Next.js renders pages, fetching data from Payload CMS
5. Payload CMS queries D1 for content and R2 for media
6. Response flows back through the stack to the user

## Deployment

Deployments are triggered:
- Automatically on push to `prod` branch via GitHub Actions
- Manually via `pnpm deploy` command

See [deploy.yml](../../.github/workflows/deploy.yml) for the deployment workflow.
