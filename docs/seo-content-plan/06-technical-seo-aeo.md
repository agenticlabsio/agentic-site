# 06 — Technical SEO & AEO Implementation

> How we make the content in `03`/`04` *findable and citable* — by search
> engines (SEO) and by answer engines / LLMs (AEO). Next.js App Router + Payload
> CMS specifics.

---

## 0. Current state — MOST OF THIS IS ALREADY BUILT ✅

The site map confirmed a mature SEO/AEO foundation. **This doc is now a
verify/extend checklist, not a from-scratch build.** Already implemented:

- **`src/lib/seo.ts`** — `SITE_URL` (`https://agenticlabs.io`) + `pageMetadata()`
  helper (canonical + OG + Twitter). Title template `%s | Agentic Labs`,
  `metadataBase` set in root layout.
- **`generateMetadata`** on dynamic routes (blog/solution/industry/case-study
  `[slug]`), reading CMS `seo` fields with fallbacks.
- **`src/app/sitemap.ts`** — dynamic; merges static pages + Payload solution/
  industry/case-study/blog slugs with per-type priority/changeFrequency.
- **`src/app/robots.ts`** — allows crawl, disallows `/admin` + `/api/`, and
  **already allow-lists AI crawlers for AEO** (GPTBot, ChatGPT-User,
  Google-Extended, PerplexityBot, ClaudeBot, Anthropic-AI, Googlebot, Bingbot).
- **JSON-LD components** in `src/components/SEO/`: `OrganizationSchema` (Org +
  `hasOfferCatalog` of 6 services + `knowsAbout` + `sameAs`) and `WebSiteSchema`
  render globally; `ArticleSchema` + `BreadcrumbSchema` + `FAQSchema` on blog
  posts; `ServiceSchema` available; per-`[slug]` `opengraph-image.tsx` handlers.
- **AEO assets in `public/`:** `llms.txt` (structured brand summary + links) and
  `agents.json` (declares agent actions: subscribe endpoint + book-a-call link).

**What's left to VERIFY / EXTEND (the real remaining work):**

1. ~~**Blog inline internal links**~~ **DONE** — `content/blog.ts` now has an
   `InlineSegment` type and a `{ paragraph: InlineSegment[] }` block; the seeder
   (`src/seed/blog-lexical.ts`) emits a Payload Lexical `link` node (v3,
   `linkType: 'custom'`) so pillar↔cluster links live in post bodies. Used to
   interlink the P1 pillar with its three cluster posts. *(Optional next:
   populate `relatedSolutions`/`relatedIndustries` for auto "Related" blocks.)*
2. **`ServiceSchema` coverage** — confirm it renders on each `/solutions/[slug]`.
3. **Sitemap completeness** — confirm every published collection + static route
   is included; confirm `lastmod` uses `updatedAt`.
4. **Verify the facts in `llms.txt` / `OrganizationSchema` / homepage stats** —
   reconcile the time-to-production number and the "$3.2M / 50+ deployments" and
   "0 pilot failures" style claims before answer engines quote them (`05 §4`).
5. **FAQ breadth** — expand CMS `FAQ` to cover more Cluster 9 objection queries.
6. **Footer legal pages** — replace `#` placeholder links with real pages.

The sections below remain as the reference spec / definition of done. Treat them
as "confirm it matches this," not "build it."

---

## 1. Metadata (every route)

Use App Router `generateMetadata` on every page and post. Pull from CMS SEO
fields where they exist; fall back to sensible defaults.

Each page needs:
- **`title`** — unique, ≤60 chars, primary keyword near the front. Use a
  `title.template` in the root layout (`%s | <Brand>`).
- **`description`** — unique, 140–160 chars, includes the keyword + a reason to
  click.
- **`alternates.canonical`** — absolute canonical URL (kills duplicate-content
  risk from query params / trailing slashes).
- **Open Graph** (`title`, `description`, `type`, `url`, `images` 1200×630) and
  **Twitter** (`summary_large_image`).
- **`keywords`** optional (low value) — skip or keep minimal.

Add a Payload **SEO group field** to `BlogPosts`, `CaseStudies`, `Solutions`,
`Industries` (and Pages if present): `metaTitle`, `metaDescription`,
`ogImage`, `canonicalOverride`, `noindex`. Then `generateMetadata` reads them.
*(Payload has an official SEO plugin — `@payloadcms/plugin-seo` — prefer it over
hand-rolling if not already installed.)*

---

## 2. Sitemap & robots (dynamic, from real content)

- **`src/app/sitemap.ts`** (or route) — generate from CMS: query all published
  blog posts, case studies, solutions, industries + static routes, emit
  `<loc>`/`<lastmod>` from `updatedAt`. *(Confirm whether a real dynamic sitemap
  already exists — see `02`.)*
- **`src/app/robots.ts`** — allow crawl, point to sitemap, disallow `/admin` and
  Payload API routes. **Explicitly allow AI crawlers** we want citing us
  (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — this is an AEO decision;
  allowing them lets our content surface in AI answers. Document the choice.

---

## 3. Structured data / JSON-LD (the AEO backbone)

Answer engines and rich results lean on schema. Add JSON-LD via a small
`<script type="application/ld+json">` component, per type:

- **`Organization`** (root layout, once): name, url, logo, sameAs (socials),
  founder/description. Foundational entity.
- **`WebSite`** + `SearchAction` (root): enables sitelinks search box.
- **`BlogPosting` / `Article`** (every post): headline, description, author
  (`Person`), datePublished, dateModified, image, publisher, mainEntityOfPage.
- **`FAQPage`** (posts/pages with a Q&A block): powers FAQ rich results and is
  *highly* favored by answer engines for extraction. Wire it to the FAQ CMS
  content.
- **`BreadcrumbList`** (all nested routes): breadcrumb rich results + clearer
  site structure.
- **`Service`** / **`Product`** (solutions pages) and **`CaseStudy`-style
  `Article`** (case studies) as appropriate.

Keep JSON-LD generated from the same CMS data that renders the page (single
source of truth — never hand-maintain duplicate facts).

---

## 4. AEO — writing & structure so LLMs cite us

Answer engines extract and quote. Optimize for extractability:

- **Lead with the answer.** Each post/section opens with a 1–2 sentence direct
  answer, then elaborates ("inverted pyramid"). This is what gets quoted.
- **Question-shaped H2s** matching how people ask ("How long does it take to
  deploy an AI agent?"). Mirror the keyword clusters in `01 §B`.
- **Definition boxes & TL;DRs.** A crisp definition near the top of explainer
  posts (P2, E1) → prime snippet/citation target.
- **Comparison tables** (agent vs. chatbot vs. copilot; pipeline vs. parallel) —
  tables are disproportionately extracted.
- **FAQ blocks** on every commercial + question-intent page, backed by
  `FAQPage` schema.
- **Cite primary sources** (Anthropic/OpenAI docs, named research reports) with
  outbound links — raises trust signals and E-E-A-T.
- **Named, ownable frameworks & entities** (see `01 §C`) used consistently so
  answer engines associate the concept with our brand.
- **Stable, semantic URLs**; real author `Person` pages with bios (E-E-A-T);
  `dateModified` kept fresh on refresh.

---

## 5. Core Web Vitals & crawlability (Next.js hygiene)

- Prefer **RSC / static** for content pages; `next/image` for all imagery
  (proper sizes, lazy, width/height to avoid CLS).
- Real, crawlable **anchor `<a>` links** for internal linking (not JS-only
  navigation) so link equity + crawl paths exist.
- Semantic HTML: one `<h1>` per page, logical heading order, descriptive alt
  text (keyword-aware but honest).
- Fast TTFB via caching/ISR on CMS-backed pages; revalidate on publish.

---

## 6. Internal linking system (compounding authority)

- **Pillar↔cluster wiring** per `03`: every cluster post links up to its pillar
  and sideways to 1–2 siblings; pillars link down to all clusters.
- **Contextual links from vertical pages** (`solutions`, `industries`) into the
  matching blog posts and case studies, and vice versa.
- A **"related resources"** block on posts (CMS relationship field) to automate
  some of this.
- Keep a link map in `04-page-optimization-plan.md` so nothing is orphaned.

---

## 7. Measurement

- **Google Search Console** — verify domain, submit sitemap, track impressions/
  clicks/position per cluster; watch for indexing errors.
- **Analytics** — organic landing pages, scroll/engagement, CTA conversions
  (book-a-call from organic).
- **AEO spot-checks** — periodically query ChatGPT/Claude/Perplexity/Google
  AI Overviews on our target questions; track whether we're cited and iterate
  the pages that aren't.
- **Rank tracking** for the head terms in each cluster.

---

## 8. Build order (technical)

1. Add/confirm SEO fields on CMS collections (or install Payload SEO plugin).
2. Root layout: `Organization` + `WebSite` JSON-LD, title template, default OG.
3. `generateMetadata` on all dynamic routes (blog, case-study, solution,
   industry, static pages).
4. Dynamic `sitemap.ts` + `robots.ts` (with AI-crawler policy).
5. `BlogPosting` + `BreadcrumbList` + `FAQPage` JSON-LD components.
6. FAQ content + schema on commercial pages.
7. Internal-linking pass per `04`.
8. GSC + analytics + AEO spot-check cadence.
