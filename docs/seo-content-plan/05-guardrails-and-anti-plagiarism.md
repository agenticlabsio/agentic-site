# 05 — Guardrails: Uniqueness, Brand Safety & Anti-Plagiarism

> Non-negotiable rules for turning competitive *themes* into *our* content.
> Every writer/agent producing copy under this plan must pass these checks
> before publish.

---

## 1. The "no competitor brand" rule (absolute)

The reference material comes from a competitor. Their brand name (and any
variant, subdomain, or person's name from their site) must **never** appear in:

- Body copy, headings, captions, pull-quotes
- Page titles, meta descriptions, OG tags, alt text
- URL slugs
- Code (component text, seed files, JSON-LD, comments, config)
- Author bylines (use our own real people)

**Verification step (run before every publish):**
```bash
# From repo root — should return NOTHING.
grep -rin "varick" src/ docs/ public/ 2>/dev/null
```
If this matches anything, it is a release blocker. Also scan built output and
any CMS seed JSON.

---

## 2. Themes are borrowed; words are not

We are allowed to compete on the **same search intent and the same arguments**.
We are **not** allowed to reproduce phrasing, sentence structure, list ordering,
or distinctive metaphors verbatim.

**Do:**
- Take the *claim* ("most AI pilots fail because process is the bottleneck") and
  make our own argument with our own framing, examples, and structure.
- Cover the *same questions* a reader is searching for.
- Use industry-standard terminology (agent loop, evals, human-in-the-loop) —
  these are common vocabulary, not owned phrases.

**Don't:**
- Reuse a distinctive turn of phrase or a whole rhetorical device as-is.
- Copy the exact sequence of section headings from a source article.
- Lift example scenarios (names, dollar amounts, specific company vignettes).
- Reproduce their case-study numbers, ROI tables, or client descriptions.

**Rewrite test:** If you placed our paragraph next to the source paragraph,
a reader should see the *same idea reached differently* — different opening,
different examples, different order, different sentences. If any sentence maps
1:1, rewrite it.

---

## 3. Distinctive metaphors — replace, don't reuse

The source leans on specific analogies (e.g. the industrial-revolution / steam
engine → electric motor → assembly line story; "single pane of glass";
"digital twin"; the "expensive random number generator" line). Treat memorable
metaphors as fingerprints:

- **Generic/industry-standard** ("human-in-the-loop", "single pane of glass" is
  borderline-common) → fine to use, but don't build a whole section around it
  the way the source does.
- **Distinctive/authored** (the multi-paragraph factory-electrification
  narrative, unique one-liners) → **invent our own analogy** that makes the same
  point. We have plenty: e.g. plumbing vs. fixtures, roads vs. cars,
  nervous-system-vs-org-chart, etc. Pick fresh ones.

---

## 4. Data & claims integrity

- **Third-party statistics** (MIT NANDA, Gartner, BCG, Deloitte, McKinsey,
  GitHub/Copilot studies, etc.): only use if we can point to the **primary
  source**. Link it. If we can't verify, reframe qualitatively ("the large
  majority of pilots stall before production") rather than citing a hard number.
- **Our own results:** case-study metrics, ROI, close-cycle reductions must be
  **real and attributable to our engagements**. Until we have them, label
  illustrative examples explicitly ("illustrative", "representative scenario")
  and keep them clearly hypothetical. Never present borrowed numbers as ours.
- **No fabricated logos / client names.** Don't imply customers we don't have.

---

## 5. Voice & differentiation (so we don't read as a clone)

To rank *and* be distinct, our content needs a recognizable point of view:

- **Our own opinionated framework names.** Where the source has its own labels,
  coin ours (see `01-keyword-theme-map.md` §C for the entities; give our method
  its own branded name in `02-current-state.md` follow-up).
- **Our own vertical emphasis.** Lead with the industries/functions where *we*
  have genuine depth; don't mirror the competitor's exact ordering.
- **Our own formats.** Add formats they don't have (interactive checklists,
  short glossary entries, a downloadable audit template, FAQ schema) to win
  different SERP features.

---

## 6. Pre-publish checklist (per page/post)

- [ ] `grep -rin "varick"` across repo returns nothing.
- [ ] No sentence maps 1:1 to a source line (rewrite test passed).
- [ ] Distinctive source metaphors replaced with our own.
- [ ] All hard statistics have a linked primary source, or are reframed.
- [ ] All result/ROI numbers are our own or clearly labeled illustrative.
- [ ] Target keyword cluster present in title, H1, first 100 words, one H2, slug.
- [ ] Author is a real person on our team.
- [ ] Internal links to ≥2 related pages (pillar/cluster wiring).
- [ ] Metadata + JSON-LD populated (see `06-technical-seo-aeo.md`).
- [ ] Reads in our voice, not a paraphrase of theirs.
