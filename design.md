---
version: 1.0
name: Ledger
description: >-
  Agentic Labs brand & design system — light-only, enterprise-classy.
  Warm ivory canvas, near-black ink, one racing-green accent,
  classical-serif display type over technical body type. No gradients,
  no glows, no lifts — hairline rules and whitespace carry the page.
  This file is the single source of truth for coding & design agents:
  values below mirror the CSS custom properties in src/app/globals.css.
  When they diverge, globals.css wins — update this file to match.

mode: light-only            # No dark mode. No theme toggle. Do not add either.
color_scheme: light

colors:
  # Brand — racing green scale
  brand:
    50:  '#eef4f0'
    100: '#dcebe2'
    200: '#b9d7c6'
    300: '#8cbaa1'
    400: '#58977a'
    500: '#337a5b'
    600: '#1e5f45'   # PRIMARY brand
    700: '#174d38'   # hover/pressed, deep emphasis
    800: '#123d2d'
    900: '#0e3123'
  primary: '#1e5f45'          # brand-600 — default brand action color
  primary_dark: '#174d38'     # brand-700 — hover/pressed
  accent: '#1e5f45'           # same as primary — one accent, one story
  # Warm stone neutrals (NOT cool/blue-tinted — always warm)
  neutral:
    white: '#ffffff'
    50:  '#f7f7f3'   # ivory canvas
    100: '#efefe9'
    200: '#e1e1d8'
    300: '#c7c7bb'
    400: '#9a9a8d'
    500: '#6e6e63'
    600: '#4c4c44'
    700: '#34342e'
    800: '#222220'
    900: '#161613'   # near-black ink, warm
  semantic:
    success: '#2f7d52'
    success_light: '#e4f0e8'
    warning: '#a97e2c'
    error: '#c24141'
  # There is NO gradient in this system. Gradients were deliberately retired.
  gradient_brand: none

typography:
  fonts:
    display:                                  # h1–h6, stat numbers, nav links, big statements
      family: Newsreader
      fallback: "Georgia, 'Times New Roman', serif"
      var: '--font-display'   # wired via next/font as --font-newsreader
      weights: [400, 500, 600, 700]
      character: classical serif, always roman (never italic)
    body:                                     # paragraphs, prose, UI copy, BUTTONS
      family: IBM Plex Sans
      fallback: 'system-ui, -apple-system, sans-serif'
      var: '--font-body'
      weights: [400, 500, 600, 700]
      character: technical humanist
    mono:                                     # eyebrows, labels, code, micro-copy
      family: IBM Plex Mono
      fallback: "ui-monospace, 'SF Mono', Menlo, monospace"
      var: '--font-mono'
      weights: [400, 500, 600]
  scale:                                      # fluid clamp() — never hard-code these
    h1: 'clamp(2.5rem, 5vw, 3.75rem)'         # weight 600, tracking -0.015em, lh 1.12
    h2: 'clamp(1.875rem, 4vw, 2.75rem)'       # weight 600, tracking -0.015em, lh 1.12
    h3: 'clamp(1.25rem, 3vw, 1.5rem)'         # weight 600, tracking -0.005em, lh 1.25
    h4: 'clamp(1.125rem, 2vw, 1.25rem)'       # weight 600, tracking -0.005em, lh 1.25
    body: '1rem'                              # lh 1.6
    prose: '1rem'                             # lh 1.75
    hero_display: 'clamp(2.4rem, 6vw, 4rem)'  # homepage hero H1 only — weight 600, lh 1.12
  tracking:
    display: '-0.015em'                       # h1/h2 — serif needs gentle tracking, never -0.03em
    heading: '-0.005em'                       # h3–h6
    eyebrow_wide: '0.08em'                    # uppercase label micro-copy (.badge; Eyebrow.tsx uses tracking-widest 0.1em)
    stat_label: '0.05em'                      # uppercase sans labels under stat values

spacing:
  section_py: 'clamp(4rem, 8vw, 7rem)'        # interior page vertical rhythm
  section_py_home: '100px'                    # .newsite (120px ≥768px)
  container_max: '72rem'                      # interior pages (max-w-6xl ≈ 72rem)
  container_max_home: '1200px'                # .newsite container-main
  container_px: 'clamp(1rem, 4vw, 2rem)'
  scale: [4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px]  # 4px base grid

rounded:
  sm: '3px'
  md: '6px'       # default for buttons
  lg: '8px'       # default for cards
  xl: '12px'
  2xl: '16px'
  full: '9999px'  # dots only — pills are not part of this system

elevation:
  # Barely-there. Borders carry depth, not shadows. Warm-ink tinted, never pure black.
  xs: '0 1px 2px 0 rgb(22 22 19 / 0.04)'
  sm: '0 1px 2px rgb(22 22 19 / 0.05)'
  md: '0 2px 8px rgb(22 22 19 / 0.06)'
  lg: '0 8px 20px rgb(22 22 19 / 0.08)'
  xl: '0 16px 36px rgb(22 22 19 / 0.10)'
  brand: '0 4px 16px rgb(22 22 19 / 0.08)'   # legacy alias — neutral, NOT a colored glow

motion:
  fast: '150ms ease-out'
  base: '200ms ease-out'
  slow: '300ms ease-out'
  ease_signature: 'cubic-bezier(0.16, 1, 0.3, 1)'  # icon-chip nudge, card underline grow
  hover_lift: none            # hover changes color/border only — no translateY, no glow
  reduced_motion: respected   # @media (prefers-reduced-motion) kills all animation

components:
  button_primary:
    background: '#161613'     # near-black ink fill (interior .btn-brand / homepage .btn-primary)
    color: '#ffffff'
    font: body (IBM Plex Sans) 600, 0.9375rem
    padding: '14px 28-32px'
    rounded: 6px
    hover: 'background → #174d38 (deep green). No lift, no glow.'
  button_secondary:
    background: 'transparent'
    color: neutral-900
    border: '1px solid neutral-300  (homepage .btn-outline: rgba(22,22,19,0.25))'
    rounded: 6px
    hover: 'border → ink. No lift.'
  button_icon_chip:            # trailing 26px circular arrow chip inside primary CTA
    hover: 'translateX(2px), signature ease'
  card:
    background: '#ffffff'
    border: '1px solid neutral-200  (homepage: rgba(22,22,19,0.12))'
    rounded: lg
    shadow: xs
    hover: 'border-color darkens (interior) or → rgba(30,95,69,0.35) (homepage). No lift.'
  card_bezel:                  # legacy class name — now a flat hairline card, names kept
    padding: 6px
    outer_rounded: 10px
    inner_rounded: 6px
    outer_bg: '#ffffff'
    inner_bg: '#ffffff'
    hover: 'border → rgba(30,95,69,0.35)'
  card_hover:                  # grows a centered 2px solid-green underline to 60% on hover
    underline: 'solid var(--accent), signature ease'
  badge:                       # eyebrow label — NOT a pill
    background: 'transparent'
    color: brand-700
    font: mono 500, 0.75rem, uppercase, tracking 0.08em
    rounded: none
  eyebrow:
    classes: 'font-mono text-brand-700 text-xs font-medium tracking-widest uppercase'
  hero_badge_chip:             # the one quiet chip on the homepage hero
    background: 'rgba(30,95,69,0.06)'
    border: '1px solid rgba(30,95,69,0.20)'
    dot: '6px circle, var(--accent)'
  logo:
    asset: '/logo.png (still the old blue raster)'
    treatment: "filter: brightness(0), opacity 0.88 — rendered monochrome ink in header + footer"
  focus_ring:
    outline: '2px solid #1e5f45'
    offset: '2px'
---

## Overview

**Agentic Labs — "Ledger".** The brand reads as *enterprise-classy*: an established,
credible AI consultancy that ships production agents. The visual language is deliberately
**light-only** — a warm ivory canvas, near-black ink, and a single deep racing-green
accent. It should feel like a banker's brief: calm, legible, expensive, quiet. Hairline
rules and whitespace do the work that gradients and shadows used to fake.

**Design philosophy**
- **Ivory, ink, one green.** Paper `#f7f7f3`, ink `#161613`, accent `#1e5f45`. Nothing else
  competes. The accent appears in small doses — emphasis spans, rules, labels, stat values,
  the occasional full-green band (featured panels, closing CTA sections).
- **No gradients, ever.** The former blue→violet gradient was retired as an AI-slop tell.
  Legacy classes (`.text-gradient`, `.text-gradient-brand`) still exist but render solid
  deep green — never reintroduce a real gradient behind them.
- **Serif display, sans everything else.** Newsreader carries headings and stat numbers,
  always roman — an italic heading is a hard error. Buttons, nav, body, and UI copy are
  IBM Plex Sans. Labels and eyebrows are IBM Plex Mono, uppercase, wide-tracked.
- **Warm over cool.** Every neutral is warm stone (`#6e6e63`, not `#5c6478`). Cool
  blue-tinted grays are off-brand now — the exact inverse of the old Sapphire rule.
- **Depth from borders, not shadows.** Cards are white with 1px hairlines; hover darkens
  the border (or shifts it green). No hover lifts, no colored glows, no grain, no dot-grid,
  no floating icons.

**Two token layers — know which you're in.** The system is intentionally split:

| Layer | Scope | Tokens | Use it for |
|-------|-------|--------|-----------|
| **Interior** | `:root`, all Tailwind utilities | `--color-*`, `--bg-*`, `--text-*`, `--radius-*`, `.btn-brand`, `.card`, `.badge` | Every page except the homepage — solutions, industries, case studies, blog, resources, platform |
| **Homepage** | `.newsite` scope only | `--accent`, `--bg-card`, `--border`, `.btn-primary`, `.btn-outline`, `.card-bezel`, `.card-hover` | The bespoke homepage sections (`src/components/newsite/*`) |

Both layers describe the *same* Ledger palette — two vocabularies for one brand. When you
build a new **interior** page, use Tailwind utilities and `:root` tokens. When you extend
the **homepage**, stay inside `.newsite` and use its variables.

> Source of truth: `src/app/globals.css`. Fonts wired in `src/app/(frontend)/layout.tsx`
> (Newsreader / IBM Plex Sans / IBM Plex Mono via `next/font/google`). If a value here
> disagrees with `globals.css`, **globals.css is correct** — fix this file.

## Colors

**Primary brand — racing green.** `brand-600 #1e5f45` is the default brand/emphasis color.
`brand-700 #174d38` is hover/pressed and the deep-emphasis text variant (eyebrows, the
`.text-gradient` legacy spans). The lighter steps (`brand-50`–`brand-200`) exist for tinted
chips and success-adjacent surfaces; steps above 400 are rarely needed.

**Ink leads actions.** Primary buttons are **near-black ink fills** (`#161613`), not green —
green arrives on hover (`#174d38`). This is the signature CTA move: ink at rest, green on
intent. Full-green bands (`bg-brand-600`/`700`) are reserved for featured panels and
closing CTA sections — roughly one per page.

**Neutrals are warm stone.** The ramp runs `#f7f7f3` (ivory canvas) down to `#161613`
(warm near-black ink). Text hierarchy: primary `neutral-900`, secondary `neutral-600`,
tertiary/muted `neutral-500`. Borders: light `neutral-200`, default `neutral-300`. Never
substitute a cool or blue-tinted ramp.

**Backgrounds.** Interior surface is `#ffffff`; secondary `#f7f7f3`; tertiary `#efefe9`.
The homepage canvas is the ivory `#f7f7f3` with a barely-there `#fdfdfb → #f7f7f3` hero
wash (the one permitted background transition — it is a paper wash, not a brand gradient).
`.section-dark` inverts to `neutral-900` for occasional high-contrast bands.

**Semantic colors** (`success #2f7d52`, `warning #a97e2c`, `error #c24141`) are for status
only. Note success is deliberately close to brand green — keep it confined to feedback,
form validation, and badges so the two never sit side by side decoratively.

## Typography

Three families, each with a job:

- **Newsreader (display)** — all headings `h1–h6`, stat numbers, big statements, **and the
  header nav links** (masthead voice: `font-display`, 0.9rem, weight 500). Classical serif,
  **always roman** — never italic, anywhere, at any size. `h1/h2` at weight 600 with gentle
  `-0.015em` tracking and `1.12` line-height; `h3–h6` at 600 with `-0.005em`. Serif display
  is the brand's voice — don't swap a grotesque back in.
- **IBM Plex Sans (body)** — paragraphs, prose, UI copy, **and all buttons**. Weight 400
  body, 600 for emphasis and button labels. Body line-height `1.6`; `.prose` `1.75`.
- **IBM Plex Mono (mono)** — eyebrows, stat labels, micro-copy. Uppercase with `0.08em`
  tracking (`tracking-widest`).

**Sizing is fluid — never hard-code pixel font-sizes for headings.** Use the `clamp()`
scale in the front matter (the base `h1–h4` rules already apply it). The homepage hero H1
is the one exception at `clamp(2.4rem, 6vw, 4rem)`, weight 600.

**Green emphasis spans.** The classy headline move is a solid deep-green span inside an
ink headline ("Proof, **not promises.**"). Use the `.text-gradient` (homepage) /
`.text-gradient-brand` (interior) classes — despite their legacy names they render solid
green. At most one emphasized span per heading.

**Eyebrows** use the shared component: `font-mono text-brand-700 text-xs font-medium
tracking-widest uppercase` (see `src/components/ui/Eyebrow.tsx`). No pill background.

## Layout

- **Interior pages**: centered column, `max-w-6xl` (~72rem) via `.container-narrow` /
  `mx-auto max-w-6xl`, padding `clamp(1rem, 4vw, 2rem)`. Vertical rhythm from
  `--section-py: clamp(4rem, 8vw, 7rem)` (`.section-padding`).
- **Homepage** (`.newsite`): wider `max-width: 1200px` via `.container-main`
  (24px padding, 40px ≥1024px). Section padding `100px` (`120px` ≥768px).
- **Spacing grid**: 4px base. Prefer the scale `4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64`.
- **Breakpoints**: mobile-first Tailwind defaults — `sm 640`, `md 768`, `lg 1024`,
  `xl 1280`. Homepage components collapse multi-column rows to stacks at `768px`.
- `html` and `body` carry `overflow-x: clip` — keep it; no component may cause
  horizontal scroll at 320/375/414/768px.
- Be generous with whitespace. Density is not the brand; clarity is.

## Elevation & Depth

Shadows are **nearly invisible** — warm-ink tinted (`rgb(22 22 19 / …)`), never pure black,
never colored. Resting cards sit at `xs`; there is no hover-shadow escalation. Depth is
expressed through **1px hairline borders** that darken (interior) or shift green (homepage)
on hover. The old lift-and-glow vocabulary (translateY + colored shadow) is retired — do
not bring it back.

## Shapes

Square-ish, engineered, calm. Radii: `sm 3 · md 6 · lg 8 · xl 12 · 2xl 16 · full`.
Defaults: **buttons `6px`**, **cards `8px`**, the legacy `.card-bezel` `10px` outer / `6px`
inner. `full` radius survives only for tiny dots and the single homepage hero chip —
pill-shaped buttons and pill badges are not part of this system. Decorative texture is
**none**: no grain, no dot-grid, no floating glyphs, no background icons. Whitespace and
one short green rule (e.g. the 72×2px hero accent rule) are the only ornaments.

## Components

**Buttons**
- **Primary** — near-black ink fill (`#161613`), white **IBM Plex Sans 600** text, `6px`
  radius, `14px` vertical padding. Hover: background → deep green `#174d38`. No lift, no
  glow. Classes: `.btn-brand` (interior) / `.btn-primary` (homepage). Often paired with a
  trailing `.btn-icon-chip` (26px circular arrow chip that nudges 2px right on hover).
- **Secondary / outline** — transparent, `1px` neutral border, ink text, `6px` radius.
  Hover: border darkens toward ink. Classes: `.btn-secondary` / `.btn-outline`.

**Cards**
- **Standard** (`.card`) — white, `1px` neutral-200 hairline, `lg (8px)` radius, `xs`
  shadow; hover → border darkens. No lift.
- **Bezel** (`.card-bezel` + `.card-bezel-inner`) — legacy class names kept; now a flat
  white hairline card (`10px`/`6px` concentric). Hover: border → `rgba(30,95,69,0.35)`.
- **Hover-underline** (`.card-hover`) — grows a centered **solid green** 2px underline to
  60% width on hover using the signature ease.

**Badges / eyebrows** — quiet mono labels: uppercase, `0.08em` tracking, `brand-700` text,
no background, no pill. The homepage hero keeps one subtle chip (faint green tint + 6px
accent dot) — that is the only chip on the site.

**Marketing section library** (`src/components/marketing/sections/`) — compose interior
pages from these, don't reinvent them: `HeroSection`, `NarrativeSection`, `CardGridSection`,
`MetricsGrid`, `StatBandSection`, `ProcessStepsSection`, `BeforeAfterSection`,
`ChecklistSection`, `FaqListSection`, `QuoteSection`, `PillLinksSection`, `TagListSection`,
`CtaSection`. `HeroSection` has `solution | industry | case-study` variants.

**Logo** — `/logo.png` is still the old blue raster asset; the header and footer render it
monochrome via `filter: brightness(0)` at `0.88` opacity. Keep that treatment until a
properly re-colored (ink or green) logo asset ships.

**Focus & a11y** — visible focus ring is `2px solid #1e5f45` at `2px` offset
(`:focus-visible`). Selection highlight is green-on-white. Keep AA contrast: body text is
`neutral-600` on white (passes); don't drop below `neutral-500` for meaningful text.
`.sr-only` exists for screen-reader-only labels. All motion is disabled under
`prefers-reduced-motion`.

## Voice & Tone

The design and copy speak with one voice: **direct, technical, ROI-obsessed, no hype.**

- Lead with outcomes and numbers: "AI Agents That Pay for Themselves", "$1M+ Ops Cost
  Saved", "live in 6–12 weeks".
- Short, confident, declarative. Prefer plain claims over adjectives.
- Enterprise-credible, never salesy or cutesy. No emoji in body copy; no exclamation spam.
- Stats belong in serif display (green or ink) with small uppercase wide-tracked sans
  labels beneath (`0.75rem`, `0.05em`) — see the homepage hero metrics card.

## Do's and Don'ts

**Do**
- Use `:root` / Tailwind tokens for interior pages; `.newsite` variables for the homepage.
- Keep primary CTAs ink-filled with the green-on-hover shift.
- Use warm stone neutrals for every gray.
- Reach for existing classes (`.btn-brand`, `.card`, `.badge`) and section components
  before writing new CSS.
- Use fluid `clamp()` type; let the `h1–h4` base rules do the work.
- Express hover with border/color shifts only; respect reduced motion.
- Keep contrast AA-safe and provide the standard focus ring.
- Use at most one green emphasis span per heading, one full-green band per page.

**Don't**
- ❌ Add dark mode, a theme toggle, or `@media (prefers-color-scheme: dark)` styling —
  this is a **light-only** brand by decision.
- ❌ Reintroduce **any** gradient — text, button, background, or underline. The legacy
  `.text-gradient*` classes must keep rendering solid green.
- ❌ Reintroduce entry/scroll animations, a homepage testimonials section, floating hero
  glyphs, grain textures, or dot-grids — all deliberately removed.
- ❌ Use hover lifts (`translateY`) or colored glow shadows on any element.
- ❌ Italicize headings or display type, ever. Emphasis = weight or green, never italic.
- ❌ Use cool/blue-tinted grays (`#5c6478`, `#6b7280`, etc.) — always warm stone.
- ❌ Ship pill-shaped buttons or pill badges; `radius-full` is for dots only.
- ❌ Hard-code hex values or pixel font-sizes when a token/clamp exists.
- ❌ Introduce a fourth typeface, off-system radii, or a second accent hue.
