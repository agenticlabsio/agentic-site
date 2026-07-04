# 07 — Terminology Lexicon & "AI"-Reduction Policy

> The house style for naming. Applied site-wide (homepage rebuild + terminology
> sweep). Future copy must follow this so the brand voice stays consistent.

## Preferred lexicon (use these)

- **Agentic Solutions** — the primary product noun (replaces "AI Agents").
- **Multi-Agentic Systems** — orchestration / multiple agents on one workflow.
- **Background Agents** — async / monitoring / always-on work.
- **Proactive Agents** — catch-and-resolve (vs. dashboards that just report).
- **Self-Learning Systems** — post-deployment tuning / optimization.
- **Agentic systems / agentic engineering / agentic operations** — general.

## Phrase swaps (already applied)

| Old | New |
|---|---|
| AI Agents / AI agents | Agentic Solutions / agentic solutions |
| AI agent (singular) | agentic system |
| AI-native (engineering) | agentic (engineering) |
| AI-powered / AI-assisted / AI-enhanced / AI-driven | agentic |
| AI automation | agentic automation |
| Autonomous AI | Autonomous agents |
| AI system(s) / AI layer / AI deployments | agentic system(s) / agentic layer / agentic deployments |
| Book a Strategy Call / strategy call | Book a Discovery Call / discovery call |
| ROI framing in the primary CTA | Discovery Call |

## Per-surface "AI" policy (minimize in copy, keep SEO spots)

- **Visible copy** (headings, body, cards, CTAs, homepage): **no bare "AI"** —
  use the lexicon above.
- **Meta title**: "Agentic Solutions" (no "AI Agents").
- **Meta descriptions, `keywords` array, JSON-LD `knowsAbout`, `llms.txt`,
  `agents.json`, `.well-known/ai-catalog.json`**: **keep a controlled amount of
  "AI" / "AI agents"** for discoverability (machine-facing SEO/AEO surfaces).
- **Blog bodies that are *about* AI adoption** (e.g. "why AI pilots fail"):
  "AI" is the subject and stays — that is topical, not "random."

## Positioning

Enterprise-leaning ("Transform Your Enterprise", departments, ops functions),
with all specific claims kept truthful to what Agentic Labs can back up (no
"Fortune 5000" clients, no fabricated logos; the homepage "In Production" section
links to the 5 real case studies).

## Known remaining work (follow-up pass)

The deep content data layer (`src/content/solutions.ts`, `industries.ts`,
`faq.ts`) still contains descriptor-level "AI" inside FAQ answers and long body
copy (~200 occurrences). These are lower-visibility and partly AEO-useful;
reducing them further needs careful, context-aware edits (grammar varies per
sentence) rather than a blind swap. Recommended as a scoped follow-up.
