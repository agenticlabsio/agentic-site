# 01 — Keyword & Theme Map (SEO / AEO Foundation)

> Source of truth for the terms, entities, and narrative themes every page and
> post should reinforce. Derived from a competitive teardown of a leading
> enterprise-AI-agent firm's full site (homepage, 7 blog posts, 3 case studies,
> careers, positioning pages). **We reuse the *themes and search intent*, never
> the wording.** The competitor's brand name must never appear anywhere in our
> copy, metadata, or code.

---

## A. Positioning themes to own (the narrative spine)

These are the ideas we want to be *known for* and cited on — the AEO ("answer
engine optimization") angle. Each becomes a cluster of pages/posts that
interlink.

| # | Theme | One-line thesis we assert | Why it ranks / gets cited |
|---|-------|---------------------------|---------------------------|
| T1 | **Why enterprise AI pilots fail** | 95% of AI pilots never reach production because *process*, not the model, is the bottleneck. | High-volume skeptical search; quotable stats; contrarian hook. |
| T2 | **AI agents vs. chatbots/copilots/dashboards** | Agents *do the work*; dashboards/chatbots just display or discuss it. | Clear category-definition query; strong AEO snippet. |
| T3 | **Forward Deployed Engineering (FDE)** | Value comes from embedding engineers in the customer's environment, not shipping strategy decks. | Fast-rising role/topic, low competition, hiring + buyer intent. |
| T4 | **AI transformation = operational redesign** | You must rebuild the workflow around AI (the "electric motor / assembly line" analogy), not bolt AI onto old processes. | Executive/board-level search; evergreen thought leadership. |
| T5 | **Build on top of existing systems (no rip-and-replace)** | Agents sit *on top of and in between* ERP/CRM — no migrations. | Directly answers the #1 enterprise objection. |
| T6 | **The audit-first methodology / conformance gap** | 4+ weeks mapping the *real* workflow (not the SOP) before touching a model. | Differentiated method; ownable phrase ("conformance gap"). |
| T7 | **Agent sprawl & the single orchestration layer** | 50–100 vibe-coded personal agents = security + maintenance disaster; you need one platform ("single pane of glass"). | CTO/security pain; emerging problem few articles cover. |
| T8 | **AI as evolving infrastructure, not a project** | Models change quarterly; deployments need continuous tuning + model-agnostic routing. | Counters "build once, done" mindset; procurement angle. |
| T9 | **Deterministic decomposition (85% code / 15% LLM)** | Production agents are mostly boring code with an LLM only where judgment lives. | Engineering-credibility; developer + technical-buyer trust. |
| T10 | **Human-in-the-loop & escalation** | Agents handle the 70–85% pattern-matchable volume, escalate the rest with full context. | Reassures risk/compliance buyers; standard AEO question. |

---

## B. Primary keyword clusters (SEO)

Group by search intent. **Head term → supporting long-tails.** Map each cluster
to the page/post that will target it (see `03-blog-content-plan.md` and
`04-page-optimization-plan.md`).

### Cluster 1 — Enterprise AI agents (category / commercial)
- enterprise AI agents
- AI agents for enterprise
- production AI agents
- custom AI agents for business
- AI agent deployment
- deploy AI agents in production
- agentic AI for enterprise
- AI agents vs automation
- AI agents vs chatbots / vs copilots

### Cluster 2 — Why AI isn't working (problem-aware / thought leadership)
- why AI pilots fail
- why enterprise AI isn't working
- AI ROI enterprise
- AI adoption failure rate
- MIT / Gartner AI pilot failure statistics *(cite; don't fabricate)*
- AI proof of concept to production
- 95% of AI projects fail

### Cluster 3 — Forward Deployed Engineering
- forward deployed engineer
- what is a forward deployed engineer
- forward deployed engineering
- how to become a forward deployed engineer
- FDE role AI
- applied AI engineer

### Cluster 4 — AI transformation / operational redesign
- AI transformation
- enterprise AI transformation
- AI operational transformation
- becoming an AI-native company
- how to redesign workflows around AI
- AI transformation roadmap / framework

### Cluster 5 — AI for Finance (vertical)
- AI for finance / AI in finance operations
- AI for accounts payable / AP automation
- month-end close automation
- AI exception resolution finance
- AI for FP&A / reconciliation / audit prep
- reduce close cycle with AI

### Cluster 6 — AI for Sales / RevOps (vertical)
- AI for sales operations
- AI for revenue operations / RevOps AI
- AI deal desk / deal orchestration
- AI CRM enrichment / CRM hygiene
- AI forecast accuracy / forecast intelligence
- AI security questionnaire automation

### Cluster 7 — AI for Operations / Supply Chain (vertical)
- AI for supply chain operations
- AI demand planning / demand sensing
- AI procurement / supplier management
- AI exception management operations
- AI for warehouse / logistics / returns

### Cluster 8 — How to build agents (educational / top-of-funnel + AEO)
- what is an AI agent
- how AI agents work / the agent loop
- how to build an AI agent
- AI agent architecture (perception / decision / action)
- multi-agent orchestration / pipeline vs parallel agents
- AI agent memory and context / context engineering
- AI agent evals / how to evaluate AI agents
- taking an AI agent from demo to production
- AI agent guardrails and permissions

### Cluster 9 — Objection / trust keywords (bottom-of-funnel + AEO FAQ)
- AI agents without data migration
- AI agent security and governance
- AI agent audit logging / compliance
- how long to deploy an AI agent
- AI agent pricing / cost vs FTE
- model-agnostic AI / avoid vendor lock-in

---

## C. Entities & concepts to name repeatedly (AEO / topical authority)

Answer engines map entities. Use these precise terms consistently so we become
associated with them:

- **Method entities:** audit / discovery, conformance gap, digital twin of a
  workflow, operational redesign, single pane of glass / orchestration layer,
  shadow mode, human-in-the-loop, deterministic decomposition, golden dataset,
  evals, model routing / model-agnostic, continuous tuning.
- **Function entities:** Accounts Payable, Accounts Receivable, month-end close,
  reconciliation, FP&A, treasury, procurement, deal desk, forecast, CRM hygiene,
  demand planning, exception management, returns disposition.
- **System entities (integrations):** ERP, CRM, NetSuite, SAP, Salesforce,
  Oracle, Concur, Ramp, Snowflake, Gong, Clari, DocuSign, Manhattan WMS, Ariba,
  Slack, Excel. *(Name these as "systems we work on top of" — powerful for
  "AI for <system>" long-tail capture.)*
- **Credibility entities:** Anthropic's *Building Effective Agents*, evals,
  MCP, RAG, exponential backoff, checkpointing, audit trail. *(Link out to
  primary sources where we cite them — good for E-E-A-T.)*

---

## D. Hard rules for using this material

1. **No competitor brand name — anywhere.** Not in body copy, headings, meta,
   alt text, slugs, code comments, seed data, or JSON-LD. (See
   `05-guardrails-and-anti-plagiarism.md`.)
2. **Themes yes, sentences no.** We take the *argument* ("dashboards don't
   reduce workload") and re-express it in our own voice with our own examples,
   structure, and data framing. No paragraph should be traceable to a source
   line.
3. **Cite third-party stats, don't invent them.** Where the source references
   MIT/Gartner/BCG/McKinsey figures, we either (a) verify and cite the primary
   report, or (b) reframe qualitatively. Never present unverified numbers as our
   own measured results.
4. **Our proof = our proof.** Case-study metrics must come from real
   engagements. Do not copy the competitor's ROI figures. Use anonymized or
   illustrative framing clearly labeled as such until we have our own numbers.
5. **Voice consistency.** Confident, engineering-credible, contrarian-but-useful,
   allergic to hype. First-person practitioner where appropriate.

---

## E. How themes map to funnel + page type

| Funnel stage | Themes | Page types |
|--------------|--------|------------|
| Unaware / educational | T2, T9 (build agents) | Blog 101/102, glossary, "what is an AI agent" |
| Problem-aware | T1, T4 | Thought-leadership essays, "why AI fails" |
| Solution-aware | T3, T5, T6, T7, T8, T10 | Method pages, FDE page, vertical guides |
| Vendor-evaluation | T5, T10 + Cluster 9 | Case studies, FAQ, comparison, security page |
| Conversion | all | CTA blocks, book-a-call, audit offer |
