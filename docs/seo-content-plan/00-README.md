# SEO / AEO Content Plan — Agentic Labs

A plan to grow organic ranking and answer-engine visibility by covering the
high-intent themes and keywords that leading enterprise-AI-agent sites rank for —
expressed as **our own original content**, in Agentic Labs' voice and weight
class, with **zero traceability** to any competitor and **no competitor brand
name anywhere**.

## Why this exists
A competitor teardown (homepage, 7 blog posts, 3 case studies, careers,
positioning pages) surfaced a coherent set of themes + keyword clusters that pull
qualified enterprise/SME AI-buyer traffic. We adopt the **search intent and
topical structure**, not the wording. Our differentiator: **SMEs + industrial
verticals + shipped in weeks**, honestly scaled proof.

## Read in this order
| File | What it gives you |
|------|-------------------|
| `01-keyword-theme-map.md` | The 10 narrative themes + 9 keyword clusters + entities to own. The strategic source of truth. |
| `02-current-state-and-fit.md` | What's in the codebase today (brand, blog schema, existing posts, routes) and how to reconcile enterprise themes with our SME positioning. |
| `03-blog-content-plan.md` | The article roster (4 pillars + engineering/strategy/career clusters), sequencing, and per-post spec. |
| `04-page-optimization-plan.md` | On-page SEO/AEO for existing pages + the site-wide internal link map. |
| `05-guardrails-and-anti-plagiarism.md` | Hard rules: no competitor brand, themes-not-words, data integrity, pre-publish checklist. |
| `06-technical-seo-aeo.md` | Metadata, sitemap/robots, JSON-LD, AEO writing structure, Core Web Vitals, measurement. |
| `07-terminology-lexicon.md` | The "Agentic Solutions" lexicon + per-surface "AI"-reduction policy + enterprise positioning. |

## The 5 things that matter most
1. **No competitor brand, ever.** `grep -rin "varick" src/ docs/ public/` must
   return nothing before any publish (`05`).
2. **Themes yes, sentences no.** Same intent, our own arguments/examples/voice.
   Replace distinctive metaphors; cite third-party stats to primary sources;
   our ROI numbers must be real and our scale (`05`, `02 §1`).
3. **Upgrade before you duplicate.** `why-ai-projects-fail` and other existing
   posts already cover some themes — deepen them, don't clone them (`02 §3`).
4. **Our moat is verticals.** Distributors, manufacturing, robotics, pharma,
   energy, hardware — low competition, matches real case studies (`02`, `04 §3`).
5. **The blog already has AEO fields** (FAQ, keyTakeaways, SEO group, related
   content). Fill them and render them as JSON-LD (`02 §2`, `06 §3`).

## What's already in place (confirmed by codebase audit)
- **Blog is CMS-backed, seeded from `src/content/blog.ts`** → `/api/seed`
  upserts to Payload. Author there. (`02 §2`)
- **SEO/AEO infra is mature** — dynamic sitemap, robots with an **AI-crawler
  allowlist already set** (GPTBot/ClaudeBot/PerplexityBot/…), full JSON-LD suite
  (Org/WebSite/Article/Breadcrumb/FAQ/Service), per-slug OG images, `llms.txt`,
  `agents.json`. `06` is now a **verify/extend** checklist, not a build. (`06 §0`)
- **Content collections are real & substantial** — Solutions (6), Industries (8,
  our vertical moat), Case Studies (5), FAQ (12). Blog bodies are thin stubs
  awaiting expansion. (`02 §4`)

## Already executed (this pass)
- **P1 pillar shipped as the template:** rewrote `why-ai-projects-fail` into a
  full original article (SME-framed, our own failure-mode framework + analogies,
  no competitor brand) with stronger key takeaways and **5 FAQs**. Extended the
  `BlogPost` type + `seedBlogPosts` to carry `faqs` (AEO). Typecheck + lint pass;
  `grep -rin "varick" src/ public/` is clean. **Apply step:** run `POST /api/seed`
  to upsert into the live CMS.

## Decisions needed from a human (before writing at scale)
- **Reconcile the time-to-production claim** — site says 4 wks / 6–8 wks / 6–12
  wks in different places (`02 §4a.1`). Pick one; it's a core answer-engine fact.
- **Verify or soften unverified stats** — `llms.txt` "$3.2M / 50+ deployments",
  homepage "0 pilot failures / 100% production", etc. (`05 §4`, `02 §4a.2`).
- **Name our methodology** (`02 §6`) — becomes an ownable entity used everywhere
  (homepage `Process.tsx` + P4 method post).
- **Approve real metrics** for case studies, or clearly-labeled illustrative
  ranges until real numbers exist (`05 §4`).

## Definition of success
- Ranking + impressions growth per keyword cluster (Search Console).
- Presence in AI answers for our target questions (AEO spot-checks, `06 §7`).
- Organic → book-a-call/audit conversions.
- A fully interlinked pillar/cluster structure with no orphan pages.

## First moves (condensed from `02 §5`)
1. Confirm live blog source → standardize on CMS.
2. Upgrade `why-ai-projects-fail` → pillar P1; deepen `agentic-ai-2026`,
   `enterprise-ai-governance`.
3. Ship pillars P2, P3, P4.
4. Homepage on-page pass + FAQ schema.
5. Technical layer: JSON-LD, dynamic sitemap/robots, metadata everywhere.
6. Fill clusters + vertical pages; quarterly refresh.
7. `05` guardrail check before every publish.
