# 02 — Current State & Strategic Fit

> What exists in the codebase today, and how to reconcile the competitor's
> (enterprise-grade) themes with **Agentic Labs' actual positioning** so we
> capture the search demand *without* impersonating a company we're not.

---

## 1. Who we are (from the codebase)

- **Brand:** Agentic Labs (legal "Agentic Labs Solutions LLC"; domain
  `agenticlabs.io`; `contact@agenticlabs.io`).
- **Positioning / metadata title:** *"Agentic Labs | Custom AI Agents for SMEs,
  Shipped in Weeks."*
- **Hero copy** (`src/components/newsite/Hero.tsx`): badge *"Enterprise AI,
  Measured in ROI"*; H1 *"AI Agents That Pay for Themselves"*; subhead *"We build
  production AI agents that cut operational cost up to 90% — end to end, on your
  infrastructure, live in 6–12 weeks. If it doesn't move a business metric, we
  don't ship it."*; CTAs *"Book an ROI Assessment"* / *"See the Results"*.
- **Brand tagline** (CMS `site-settings`): *"We design, ship, and run custom AI
  agents that handle your team's autonomous workflows. Built for ROI, governed
  end to end."*
- **Note the tension:** the hero badge says "Enterprise AI" while metadata/
  tagline say "SMEs / small and medium enterprises." Keep the *keyword* reach of
  "enterprise" but let the **proof and examples stay SME/mid-market** (§1
  reconciliation below).
- **Audience:** **SMEs** and mid-market — plus specific **industrial/vertical
  niches** (see existing posts): dealers & distributors, industrial robotics,
  pharma logistics, energy/grid, FPGA/hardware.
- **Promise:** custom agents, fast delivery ("in weeks"), governance-aware.

### The reference competitor (for contrast)
Targets **Fortune 2000 / billion-dollar enterprises**, org-wide **finance /
sales / operations** transformations, forward-deployed engineers embedded
on-site, 6–12 week deployments, nine-figure ROI framing.

### The reconciliation (important)
We want the competitor's **search demand and thematic authority**, but our
**proof, scale, and voice are SME/mid-market + industrial**. So:

- Keep enterprise-flavored **keywords** where volume justifies (e.g. "enterprise
  AI agents", "AI transformation") — but our **examples, ROI numbers, and case
  studies stay in our real weight class** (SME/mid-market, industrial verticals).
- Where the competitor says "Fortune 2000 finance org of 280 people," we say
  "a mid-market distributor" or "a 40-person operations team." Same *method*,
  honest *scale*.
- **Lean into our verticals** as the differentiator. The competitor owns generic
  finance/sales/ops; we can own **AI agents for distributors / manufacturers /
  pharma / energy / hardware** — lower competition, higher relevance, matches
  our real case studies.

---

## 2. Content infrastructure that already exists (good news)

The blog is well-built for SEO/AEO already — we mostly need **content + wiring**,
not new plumbing.

**`src/collections/BlogPosts.ts`** (`blog-posts`) fields:
- `title`, `slug` (unique), `excerpt` (required, "for listings and SEO"),
  `content` (Payload **richText / Lexical**), `featuredImage`.
- `category` select: Thought Leadership, Technical Deep-Dive, Industry Insights,
  Case Study, How-To Guide, News & Announcements.
- `tags[]`, `relatedSolutions[]`, `relatedIndustries[]` (relationship fields →
  ready-made **internal linking**).
- **`faqs[]`** — explicitly labeled *"FAQ Section (for AEO)"*. ✅ AEO-ready.
- **`keyTakeaways[]`** — great for snippet/extraction. ✅
- `status` (draft/published/scheduled), `publishedAt`, `author` (default
  "Agentic Labs"), `featured`.
- **`seo` group:** `metaTitle`, `metaDescription`, `ogImage`, `noIndex`. ✅

**Implication:** every item in `03-blog-content-plan.md` maps cleanly onto
existing fields. The FAQ + keyTakeaways + seo + related-content fields are the
exact AEO/SEO levers `06` calls for — they just need to be **filled and
rendered as JSON-LD**.

### Content source of truth — CONFIRMED
The blog is **CMS-backed and seeded from code**. The flow:

`src/content/blog.ts` (canonical TS data — the source of truth you edit)
→ `src/seed/blog-lexical.ts` (`blocksToLexical` converts `body: BlogBlock[]`
  into Payload Lexical state; supports **paragraphs + H2 headings only**)
→ `seedBlogPosts` in `src/seed/index.ts` (idempotent upsert by slug, sets
  `status: 'published'`, auto-fills `seo.metaTitle`/`metaDescription`)
→ served by `getBlogPostBySlug` / `getBlogPosts` in `src/lib/payload.ts`
→ rendered by `src/app/(frontend)/resources/blog/[slug]/page.tsx` (ISR 3600s),
  which already emits `ArticleSchema` + `BreadcrumbSchema` + `FAQSchema` and
  renders `keyTakeaways` + `faqs`.

**So: author/upgrade posts by editing `src/content/blog.ts`, then run the seed
(`POST /api/seed`) to upsert into the CMS.** Editors can further expand bodies in
`/admin`.

**Two known seeder limitations to plan around:**
1. **No `faqs` mapping originally** — the blog seed did not carry FAQs.
   *Resolved in execution:* `BlogPost` now has an optional `faqs` field and
   `seedBlogPosts` maps it (see the P1 upgrade). Add FAQs to any post via the
   `faqs` array.
2. **Body supports only paragraphs + H2.** No inline links, lists, or bold. So
   **inline internal links inside post bodies aren't expressible yet** — either
   extend the seeder with a Lexical link node, or wire internal links via the
   collection's `relatedSolutions`/`relatedIndustries` relationship fields (not
   currently populated by the seed). Tracked as a follow-up in `06`.

---

## 3. Existing blog posts (avoid duplication; upgrade instead)

Already defined in `src/content/blog.ts` (10 posts):

| Slug | Title | Overlaps competitor theme |
|------|-------|---------------------------|
| `agentic-ai-2026` | Agentic AI in 2026: From Hype to "Is It Working?" | T1 (why AI isn't working) |
| `model-context-protocol-mcp` | The Model Context Protocol (MCP)… | T9/T8 (technical) |
| `replace-saas-with-ai` | Replace 10 SaaS Tools with One AI Agent | T2 / SaaS-vs-agents |
| `ai-dealers-distributors-order-entry` | AI for Dealers & Distributors… | our vertical |
| `fpga-design-automation-ai` | AI-Enhanced FPGA Design… | our vertical |
| `enterprise-ai-governance` | Enterprise AI Governance: Bounded Autonomy… | T7/T10 (governance) |
| `robotics-ai-downtime-reduction` | AI for Industrial Robotics… | our vertical |
| `pharma-logistics-ai-cold-chain` | Pharma Logistics AI… | our vertical |
| `energy-ai-grid-optimization` | Energy Sector AI… | our vertical |
| `why-ai-projects-fail` | Most AI Pilots Never Ship… | **T1 — direct overlap** |

**Consequences for `03`:**
- `why-ai-projects-fail` already covers Pillar **P1** intent. → **Don't create a
  duplicate.** Instead **upgrade** it to full pillar depth (our failure-mode
  framework, self-assessment checklist, FAQ schema, internal links) and treat it
  as the P1 pillar.
- `agentic-ai-2026` overlaps T1/"is it working" → keep as a complementary,
  time-stamped opinion piece; interlink with P1, don't compete.
- `replace-saas-with-ai` covers the SaaS-vs-agents / "AI as infrastructure"
  angle (S6/Theme T8) partially → extend rather than duplicate.
- `enterprise-ai-governance` covers agent-sprawl/governance (S5/T7) partially →
  interlink; the new S5 can go deeper on the sprawl problem specifically.
- The **vertical posts** (dealers, FPGA, robotics, pharma, energy) are our
  moat — the competitor has nothing like them. **Double down**: give each the
  full SEO/AEO treatment (FAQ, takeaways, JSON-LD, case-study links) and add
  more verticals.

**Net:** several `03` pillars/clusters already have a seed post. The plan is
**~40% upgrade existing, ~60% net-new**, not a from-scratch build.

---

## 4. Site sections / routes + real content inventory

**Routes** under `src/app/(frontend)/` (CMS = Payload-backed; HC = hardcoded copy):
- `/` (homepage, HC sections) — Hero → Comparison → Process → Problem →
  Differentiation → Security → CTA → FAQ(CMS). Copy lives in
  `src/components/newsite/*.tsx` (only FAQ items come from CMS). Exact headings
  in `04 §2`.
- `/solutions` + `/solutions/[slug]` — **CMS**, H1 *"Custom agents that ship.
  Not another pilot."*
- `/industries` + `/industries/[slug]` — **CMS**.
- `/case-studies` + `/case-studies/[slug]` — **CMS**.
- `/platform` + `/platform/integrations` — **HC** (integrations are a literal
  array; the `Integrations` CMS collection is unused/empty).
- `/portfolio` — **HC** (H1 "Our Work", metrics band).
- `/resources` (HC hub) · `/resources/blog` + `[slug]` (**CMS**, H1 "The Agentic
  Labs Blog") · `/resources/faq` (**CMS**, H1 "Straight answers.").
- `/api/subscribe` (lead capture POST).

**Real content that already exists** (substantial, not placeholder), each with a
canonical `src/content/*.ts` file:
- **Solutions (6):** intelligent-agents, customer-service-automation,
  document-processing, context-management, agentic-evaluation,
  ai-governance-security. *(rich: features, problem, howItWorks, results, faqs)*
- **Industries (8):** healthcare, manufacturing, retail, energy,
  dealers-distributors, power-electronics-fpga, autonomy-robotics,
  biotech-pharma-logistics. *(each has an ROI metric, challenges, aiSolutions,
  compliance, faqs)* — **this is our vertical moat.**
- **Case Studies (5):** document-processing (FinServ), patient-intake
  (Healthcare), inventory-forecasting (Retail), predictive-maintenance (Mfg),
  claims-processing (Insurance). *(metrics, before/after, quote)*
- **FAQ (12)** across 4 categories (agentic-ai, saas-replacement,
  service-process, security-governance) → homepage + `/resources/faq`, both emit
  FAQ JSON-LD.
- **Blog (10)** — see §3.

## 4a. Gaps & inconsistencies to fix (from the site map)

1. **Time-to-production claim is inconsistent** across the site: Hero says
   **6–12 weeks**, layout/OrganizationSchema/`llms.txt`/solutions say
   **6–8 weeks**, homepage `Comparison.tsx`/`Process.tsx` say **4 weeks**.
   → **Reconcile to one number** before amplifying it in content (it's a core
   proof point and answer-engine fact). Decision owner: founder/marketing.
2. **Unverified quantitative claims** live in `public/llms.txt` and portfolio/
   schema (e.g. *"$3.2M average savings across 50+ deployments"*). → **Verify or
   soften** before we build content around them (`05 §4`).
3. **`Integrations` CMS collection is dead** — the real `/platform/integrations`
   page is hardcoded. → Either wire the page to the collection (so integration
   long-tails scale via CMS) or leave hardcoded but keep the list accurate.
4. **Blog bodies are thin seed stubs** (a lead + 1–2 H2s). → The core content
   work of this plan: expand to full pillar/cluster depth (P1 done as the
   template).
5. **Footer legal links are `#` placeholders** (Privacy/Terms/Cookie). → Ship
   real pages (trust + crawlability).

---

## 5. Priorities (what to do, in order)

1. ~~Confirm the live blog source~~ **DONE** — CMS, seeded from
   `src/content/blog.ts` (§2). Author there, run `/api/seed`.
2. **Upgrade the overlapping existing posts** to full SEO/AEO depth:
   - `why-ai-projects-fail` → **P1 — DONE** (full body + 5 FAQs + takeaways;
     serves as the template for voice/format). Seeder extended to carry `faqs`.
   - `agentic-ai-2026`, `enterprise-ai-governance`, `replace-saas-with-ai` — next.
3. **Ship the 4 pillars** (`03`): P1 ✅, then P2, P3, P4.
4. **On-page pass** on homepage `newsite/*` + solutions/industries (`04`), and
   **reconcile the time-to-production number** (§4a.1).
5. **Technical layer** (`06`): mostly already built — **verify/extend** (sitemap
   coverage, ServiceSchema on solutions, seeder link-node for internal links,
   verify `llms.txt` claims). Not a from-scratch build.
6. **Fill clusters + verticals**, then quarterly refresh (`03` cadence).
7. Run the `05` guardrails (incl. `grep -rin "varick"`) before every publish.

---

## 6. Naming our method (do this early)

`03`'s P4 and several pages reference "our methodology." Give it a **distinct,
ownable name** (the competitor uses generic terms + their own labels; we need
ours). Draft candidates — pick one and use it everywhere for topical authority:
- e.g. "Ship-in-Weeks Method", "Workflow-First Deployment", "the Agentic Labs
  Deployment Loop (Map → Decompose → Deploy → Tune)".
  *(Decision owner: founder/marketing. Once chosen, it becomes an entity in
  `01 §C` and appears in JSON-LD + method page.)*
