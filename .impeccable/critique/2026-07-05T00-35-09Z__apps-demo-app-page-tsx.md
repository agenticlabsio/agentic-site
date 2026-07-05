---
target: demo suite (apps/demo)
total_score: 28
p0_count: 2
p1_count: 3
timestamp: 2026-07-05T00-35-09Z
slug: apps-demo-app-page-tsx
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

# Critique — Ledger demo suite (apps/demo/app/page.tsx, product register)

## Design Health Score — 28/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | ChapterNav aria-current exemplary; "Launch Demo" gives zero signal it's inert; Team View tab swap is unannounced |
| 2 | Match System / Real World | 4 | Queue items read like a real deal desk; best-in-class fake data |
| 3 | User Control and Freedom | 2 | No cross-engine switcher or breadcrumb from inside a dossier; logo → home is the only exit |
| 4 | Consistency and Standards | 2 | Two dialects: Ledger dossiers vs legacy SaaS /products pages (emerald palette, pills, rounded-xl, Sapphire-blue hover) |
| 5 | Error Prevention | 2 | Dead `#` CTA invites the worst prospect-facing error |
| 6 | Recognition Rather Than Recall | 4 | Numbered chapters, persistent nav, "Next: →" |
| 7 | Flexibility and Efficiency | 3 | Linear flow right for sales; RoleTabs lack arrow keys; mobile chapter strip has no affordance |
| 8 | Aesthetic and Minimalist Design | 4 | Audit page compresses heavy density into one calm column |
| 9 | Error Recovery | 1 | No not-found.tsx / error.tsx anywhere — mistyped slug shows unstyled default 404 inside a "Confidential" dossier |
| 10 | Help and Documentation | 3 | Chapter intros and gate labels teach the model as you read |
| **Total** | | **28/40** | **Good** |

## Anti-Patterns Verdict

**Product slop test: PASS with two ruptures.** The four dossier walkthroughs are convincing product-register work a Linear/Stripe-fluent user would trust. The ruptures: (1) `/products/[slug]` is a pre-Ledger fossil — emerald-200/50/500 palette, rounded-xl tinted cards, lucide icon tile, pill badge, faux-bold serif (700 synthesized — Newsreader loads 400/500/600), and `hover:bg-[#155a8a]`: the Launch Demo button turns retired-Sapphire blue on hover (page.tsx:165). (2) Dead Launch Demo — all three products have `appUrl: "#"` with target="_blank" (data/products.ts:48/82/116).

**Deterministic scan**: 2 findings only — `#ffffff` advisory (globals.css:90, benign surface token, undocumented) and `border-l-2` side-tab warning (ChapterNav.tsx:23 — false positive: it's the active-chapter nav rail, not a card accent).

**Browser evidence**: overlay injection skipped (headless Playwright run, no user-visible browser session). Measured: all four demo pages (/revenue /retail /commerce /procurement) overflow horizontally at 390px — scrollWidth 643 vs 390 (253px), culprit: ChapterNav's `shrink-0` chapter links inside an `overflow-x-auto` ol that isn't containing them. Homepage and /products pages: no overflow. Body contrast 8.06:1 (AAA). Focus indicators visible on 10/10 tab stops. Console clean.

## Overall Impression

The dossier conceit (chapters, "Confidential", anonymized benchmarks, human-gate visualization) is genuinely original and matches "show, don't claim" — but the highest-skepticism click ("deployed client work" → /products) lands on the most off-brand surface in the codebase with a dead CTA, and every dossier breaks on a phone.

## What's Working

1. The dossier register itself — sidesteps the fake-SaaS-dashboard trap; TraceSteps' reviewer-gate dots tell the compliance story in one glance.
2. Data writing quality: internally consistent (Meridian Supply Co. recurs across views), honest caveat copy ("Modeled from audit baselines").
3. Global :focus-visible ring and aria-current chapter nav — real accessibility engineering.

## Priority Issues

- **[P0] Legacy /products/[slug] template breaks brand at the proof moment** — emerald palette, pills, rounded-xl, lucide tiles, faux-bold serif, `hover:bg-[#155a8a]` Sapphire hover. Real client work gets the cheapest treatment while hypothetical engines get the best. Fix: rebuild on the dossier vocabulary; kill every emerald-*, pill, and the blue hex. Suggested: /impeccable polish
- **[P0] Dead "Launch Demo" CTA ×3** — `appUrl: "#"` opens a blank duplicate tab in front of the buyer. Fix: real URLs, or replace with "Schedule a walkthrough", or remove. Suggested: /impeccable harden
- **[P1] Mobile horizontal overflow on all four dossiers** — 643px content in a 390px viewport via ChapterNav shrink-0 row. Fix: contain the strip (min-w-0 on ancestors / remove shrink-0 / proper overflow containment). Suggested: /impeccable adapt
- **[P1] `--faint` (#9a9a8d, ~2.8:1) used for meaningful text** — interview labels, trace details, stat sublines, doc tags, value-split note. Fix: sweep meaningful copy to --muted-fg; reserve --faint for decoration. Suggested: /impeccable polish
- **[P1] Italic serif pull-quote — spec'd hard error** — RoleTabs.tsx:62 `font-display italic`, plus layout.tsx:10 loads the italic Newsreader subset solely for it. Fix: roman or mono treatment; drop the italic subset. Suggested: /impeccable typeset

## Persona Red Flags

**Alex (technical evaluator)**: Launch Demo → dead tab (kill shot); notices all four dossiers share one skeleton + sentence templates within ~90s; curve annotations don't map to the chart; nothing is operable → reports "it's a brochure".
**Sam (keyboard/AT)**: no skip-to-content; RoleTabs are ARIA-shaped but not functional (no aria-controls/tabpanel/arrow keys); --faint text below AA; Gantt spans invisible to AT; severity = color + 9.6px text.
**Enterprise buyer watching a screen-share**: big serif figures legible across a conference room (good); "Confidential" on a public URL invites the first credibility question; gaming case study dilutes the regulated-industries story.

## Minor Observations

- No branded 404/error pages (app/not-found.tsx missing).
- Queue cards styled with the same hover border as clickable dossier cards but aren't clickable — affordance lie.
- geist dependency imported nowhere (remove); ProductCard.tsx + VideoEmbed.tsx dead code.
- Gantt gray/green distinction unlabeled; 0.6rem week numerals below comfortable legibility.
- Footer has no privacy/terms links — marketing site just shipped /legal/*; demo domain links none of it.
- Severity pills `text-[0.6rem]` with #a97e2c on #f5efe2 (~3.3:1) — bump size, darken.

## Questions to Consider

1. Is this a demo suite or a beautifully-typeset PDF? Would one genuinely interactive moment (approve QTE-2211, watch the margin move) convert more than four immaculate static dossiers?
2. Does "Confidential" on a public URL build mystique or invite the first compliance question asked out loud? Should it read "Anonymized · representative figures"?
3. Why does the archive undercut the flagship — real engagements in the oldest template, hypothetical engines in the best? Should real work be promoted into the dossier format?
