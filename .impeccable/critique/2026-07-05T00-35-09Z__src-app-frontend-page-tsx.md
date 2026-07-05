---
target: homepage (/)
total_score: 24
p0_count: 2
p1_count: 3
timestamp: 2026-07-05T00-35-09Z
slug: src-app-frontend-page-tsx
---
Method: dual-agent (A: design-review agent · B: detector/browser-evidence agent)

# Critique — Agentic Labs homepage (src/app/(frontend)/page.tsx)

## Design Health Score — 24/40 (Acceptable)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Form has loading/success/error + aria-live; "Book a Discovery Call" gives no cue it's an anchor scroll |
| 2 | Match System / Real World | 2 | "Agentic" used ~30× before defined; `.01/.02/.03` read as corrupted data; vendor-speak for an ops/finance audience |
| 3 | User Control and Freedom | 3 | No traps; but CTA-section primary button links to `#contact` from inside `#contact` — dead click |
| 4 | Consistency and Standards | 1 | Two design languages: homepage = re-tinted Sapphire (`newsite/`), interior = Ledger; serif vs mono eyebrows; same label on different behaviors |
| 5 | Error Prevention | 2 | Honeypot + validation good; submit labeled "Book a Discovery Call" only collects an email |
| 6 | Recognition Rather Than Recall | 3 | Everything visible and labeled |
| 7 | Flexibility and Efficiency | 2 | No scheduling shortcut exists; no skip-to-content link |
| 8 | Aesthetic and Minimalist Design | 2 | Palette restraint real; undermined by radial glows, grid texture, redundant CTA stacks |
| 9 | Error Recovery | 3 | Inline form errors with actionable copy |
| 10 | Help and Documentation | 3 | FAQ + case studies + trust/legal links; "What is MCP?" misaimed at primary buyer |
| **Total** | | **24/40** | **Acceptable** |

## Anti-Patterns Verdict

**A well-groomed instance of the AI template, not an escape from it.** Tells are structural: identical section scaffolding ×7 (eyebrow → serif H2 with one green span → subhead → card grid), `.01/.02/.03` numbered markers with empty label slots (Differentiation.tsx), hero-metric strip with non-metrics (End-to-End / 6–12 wks / 24/7), icon-chip-in-tile on every card. Absent tells (credit): no purple gradients, no glassmorphism, real case-study numbers.

**Deterministic scan**: 27 findings — 19 are OG-image false positives; genuine: `rgba(229,72,77,*)` red drift in Comparison.tsx (homepage-visible), `#ef4444` in EmailCaptureForm.tsx:176, `transition: max-height` mobile menu (SiteHeader.tsx:206), side-tab blockquote (QuoteSection.tsx:5 — legitimate editorial convention, downgraded).

**Browser evidence**: overlay injection skipped (headless Playwright run, no user-visible browser session). Measured: 768px viewport clips "Book a Discovery Call" header button ~194px offscreen (unreachable); "Case Studies" nav label wraps at 1024px; mobile touch targets below 44px (hamburger 38×32, footer links 18px tall, social 36×36); all measured text contrast passes AA (lowest 4.77:1).

## Overall Impression

The surface palette is held with real discipline and the proof section is structurally real — but the flagship page is retired Sapphire-era component code (`src/components/newsite/*`) wearing green paint, with gradients, glows, lifts and grid textures still live in code, and the page's core promise (book a call) has no functioning path.

## What's Working

1. Palette execution: warm ivory + ink + one racing green, never purple-SaaS; mono category labels and arrow-notation stats on-voice.
2. InProduction.tsx pulls the five real case studies from src/content with working links — "show, don't claim" is wired in.
3. EmailCaptureForm.tsx craft: honeypot, aria-live status, explicit errors, loading guard.

## Priority Issues

- **[P0] "Book a Discovery Call" cannot book a call** — every instance is `href="#contact"`; the button inside #contact links to #contact. No scheduler exists. The site's stated success metric has no functioning path. Fix: wire a real scheduling URL; rename email submit to match behavior. Suggested: /impeccable harden + /impeccable clarify
- **[P0] Homepage violates its own shipped design system** — live in newsite/*: card gradient + blur(60px) glow + `#e5484d` (Comparison), colored hover glows (Process), translateY lifts (Differentiation/Problem/Security), radial decorations, 64px grid texture (CTA), pill chips, gradient hairlines. Each is a design.md ban. Fix: rebuild newsite/* on Ledger tokens or recompose from marketing/sections/. Suggested: /impeccable polish
- **[P1] 768px tablet: header CTA clipped offscreen and unreachable** — desktop nav renders at 768; measured right edge 962px vs 768 viewport, overflow hidden. Fix: collapse to hamburger ≤~1080px or shorten labels. Suggested: /impeccable adapt
- **[P1] Off-register hype copy fails the procurement read** — "Only Agentic-Native Organizations Will Survive"; unqualified SOC 2 / ISO 27001 badges imply held certifications (legal exposure); "Transform" ×4. Fix: evidence claims; link badges to /trust with accurate qualifiers. Suggested: /impeccable clarify
- **[P1] Italic display type — spec'd hard error** — FAQ.tsx:49 `fontStyle: "italic"` on serif span. Fix: remove. Suggested: /impeccable typeset

## Persona Red Flags

**Jordan (first-timer)**: H1 is company-name tautology ("Agentic Labs… Agentic Solutions") that never says what they sell; "agentic" undefined until FAQ 8,500px down; clicks Book → gets an email input.
**Riley (stress tester)**: dead #contact click inside #contact reads as broken; `.01/.02/.03` reads as truncated stats; unlinked compliance badges → "claims it can't back".
**Casey (mobile)**: 100dvh hero + stacked metric card = zero proof on first 2 screens; ~14,200px page with strongest content ~9 screens down; touch targets below 44px throughout footer.
**Procurement reviewer**: "Will Survive" struck in compliance read; inconsistent badge qualification ("HIPAA Ready" vs bare "SOC 2"); "Fully confidential" near capture with no privacy link at point of capture.

## Minor Observations

- Hero metric strip: replace non-metrics with real case-study numbers or delete; unify eyebrows to mono Eyebrow.tsx spec (homepage uses serif at 0.15em).
- Comparison red iconography uses cool `#e5484d` instead of system `--error #c24141`; form error `#ef4444` same issue.
- Unbalanced heading line-breaks split green spans across lines — add text-wrap: balance.
- Homepage H2s hard-code weight 700 + own clamp instead of base h2 rule (600).
- "Case Studies" nav wraps to two lines at 1024px.
- Footer tagline "Built agentic. Deployed for humans." is chiasmus-slop.

## Questions to Consider

1. The interior pages got a true Ledger rebuild; why does the flagship page have the lowest-fidelity implementation of the brand — should it be recomposed from marketing/sections/ rather than patched?
2. If "the demo is the CTA", why does the working demo get a side-button while a booking flow that doesn't exist holds primary position in nav, hero, process, and closing?
3. Would this page survive its own critique, given the Comparison card mocks "dashboards that report problems, not resolve them" while the hero shows three non-numbers?
