// Engagement-dossier content for the four focus demos.
// Every figure is consistent with the case studies on agenticlabs.io.

export interface Phase {
  num: string;
  duration: string;
  name: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface StatWithSub extends Stat {
  sub: string;
}

export interface ValueSplit {
  label: string;
  amount: string;
  pct: number;
}

export interface Interview {
  who: string;
  sessions: string;
  focus: string;
}

export interface DocSource {
  name: string;
  kind: string;
}

export interface SystemMapped {
  name: string;
  role: string;
}

export interface AutomationAgent {
  name: string;
  hours: string;
  value: string;
  pct: number; // share of automated hours, for the bar chart
}

export interface TimelineRow {
  name: string;
  start: number; // week (0-indexed)
  span: number; // weeks; 0 = arrow to end
  kind: "audit" | "build" | "operate";
}

export interface BuildAgent {
  name: string;
  value: string;
  hours: string;
  auto: number;
  human: number;
}

export interface TraceStep {
  text: string;
  detail: string;
  kind: "auto" | "human";
}

export interface QueueItem {
  id: string;
  severity: "high" | "medium" | "low";
  type: string;
  party: string;
  amount: string;
  note: string;
}

export interface TeamRole {
  key: string;
  label: string;
  sub: string;
  handledTitle: string;
  handled: Stat[];
  timeNote: string;
  queueTitle: string;
  queue: QueueItem[];
}

export interface BeforeAfterRow {
  metric: string;
  before: string;
  after: string;
  delta: string;
}

export interface Demo {
  slug: string;
  index: string;
  domain: string;
  engine: string;
  title: string;
  heroSub: string;
  cardTagline: string;
  cardStats: Stat[];
  phases: Phase[];
  benchmark: StatWithSub[];
  value: {
    total: string;
    split: ValueSplit[];
    note: string;
  };
  audit: {
    heading: string;
    intro: string;
    interviewsSummary: string;
    interviewsNote: string;
    interviews: Interview[];
    docsSummary: string;
    docsNote: string;
    docs: DocSource[];
    systemsSummary: string;
    systemsNote: string;
    systems: SystemMapped[];
    stats: Stat[];
    automation: {
      totalHours: string;
      automatablePct: number;
      automatedHours: string;
      humanHours: string;
      agents: AutomationAgent[];
    };
    timelineWeeks: number;
    timeline: TimelineRow[];
  };
  build: {
    heading: string;
    intro: string;
    agents: BuildAgent[];
    trace: {
      title: string;
      sub: string;
      meta: Stat[];
      steps: TraceStep[];
    };
    outcomes: StatWithSub[];
  };
  team: {
    heading: string;
    intro: string;
    roles: TeamRole[];
  };
  ongoing: {
    heading: string;
    intro: string;
    beforeAfter: BeforeAfterRow[];
    curve: {
      title: string;
      note: string;
      points: number[]; // percentages over 12 weeks
      final: string;
      annotations: string[];
    };
    maintain: { title: string; description: string }[];
    cadence: { name: string; description: string }[];
  };
}

export const demos: Demo[] = [
  // ─────────────────────────────────────────────
  // 01 · REVENUE MANAGEMENT
  // ─────────────────────────────────────────────
  {
    slug: "revenue",
    index: "01",
    domain: "Revenue Management",
    engine: "Revenue Engine",
    title: "Your revenue desk, rebuilt around AI.",
    heroSub:
      "Audit, build, operate. Inside the CRM, CPQ, and ERP your sales team already uses.",
    cardTagline: "Quote building, margin guardrails, leakage recovery.",
    cardStats: [
      { value: "3d → 4hr", label: "quote turnaround" },
      { value: "+2.1pp", label: "gross margin" },
    ],
    phases: [
      {
        num: "01",
        duration: "4 weeks",
        name: "Audit",
        description:
          "Process-owner interviews, pricing map, ROI baseline, build plan.",
      },
      {
        num: "02",
        duration: "10–12 weeks",
        name: "Build",
        description:
          "Agents shipped inside your quoting stack. Deal desk trained.",
      },
      {
        num: "03",
        duration: "Ongoing",
        name: "Operate",
        description:
          "Tuning, model swaps, expansion into adjacent revenue motions.",
      },
    ],
    benchmark: [
      {
        value: "4 months",
        label: "Audit through live agents",
        sub: "Diagnosis to operating system",
      },
      {
        value: "$3.2M",
        label: "Annual value created",
        sub: "Modeled from audit baselines",
      },
      {
        value: "1",
        label: "Revenue desk, end-to-end",
        sub: "Depth, not breadth",
      },
    ],
    value: {
      total: "$3.2M",
      split: [
        { label: "Revenue growth", amount: "$2.1M", pct: 66 },
        { label: "Cost reduction", amount: "$0.7M", pct: 22 },
        { label: "Risk mitigation", amount: "$0.4M", pct: 12 },
      ],
      note: "Modeled from audit baselines. Value is captured across revenue growth, cost reduction, and risk mitigation — not cost alone.",
    },
    audit: {
      heading: "The audit process: we learn your revenue operation",
      intro:
        "4 weeks. The CRO sponsors the work, then pricing, deal desk, regional sales, and RevOps owners pull in their teams. Outputs: pricing and time map, discount controls register, ROI baseline, and a build plan signed by the people who run the work.",
      interviewsSummary: "18 sessions / 16 stakeholders",
      interviewsNote:
        "We start with the CRO and VP Sales, then interview every pricing owner plus the analysts who handle exceptions day to day.",
      interviews: [
        { who: "CRO", sessions: "1×60min", focus: "priorities + margin targets" },
        { who: "VP Sales", sessions: "1×60min", focus: "quota motion + discount culture" },
        { who: "Pricing manager", sessions: "2×60min", focus: "rate cards + floor logic" },
        { who: "Deal desk", sessions: "3×45min", focus: "exception paths + approvals" },
        { who: "Regional sales leads", sessions: "4×45min", focus: "quote flow + workarounds" },
        { who: "RevOps analysts", sessions: "5×30min", focus: "reporting + manual roll-ups" },
        { who: "Contract admins", sessions: "2×30min", focus: "terms + rebate schedules" },
      ],
      docsSummary: "60+ sources ingested",
      docsNote:
        "Rate cards, contracts, approval matrices, win/loss exports, and shadow pricing spreadsheets are indexed together.",
      docs: [
        { name: "Rate cards v1–v9", kind: "Pricing" },
        { name: "Master service agreements", kind: "Contracts" },
        { name: "Discount approval matrix", kind: "Governance" },
        { name: "Win/loss exports", kind: "CRM data" },
        { name: "Quote + invoice logs", kind: "Operational data" },
        { name: "Rebate schedules", kind: "Finance" },
        { name: "Shadow pricing spreadsheets", kind: "Working files" },
      ],
      systemsSummary: "9 systems mapped",
      systemsNote:
        "CRM, CPQ, ERP, spreadsheets, and shadow workflows are mapped as one revenue operating graph.",
      systems: [
        { name: "Salesforce", role: "CRM" },
        { name: "Salesforce CPQ", role: "Quoting" },
        { name: "NetSuite", role: "ERP / invoicing" },
        { name: "Excel", role: "Rate cards" },
        { name: "DocuSign", role: "Contracts" },
        { name: "Power BI", role: "Reporting" },
        { name: "Snowflake", role: "Warehouse" },
        { name: "Outlook", role: "Email" },
        { name: "Slack", role: "Approvals" },
      ],
      stats: [
        { value: "9", label: "Systems mapped" },
        { value: "14", label: "Workflows analyzed" },
        { value: "12,400", label: "Quotes sampled" },
        { value: "26K", label: "Hours of manual work / yr" },
      ],
      automation: {
        totalHours: "26,000",
        automatablePct: 72,
        automatedHours: "18,700",
        humanHours: "7,300",
        agents: [
          { name: "Quote builder", hours: "7.2K", value: "$1.1M", pct: 38 },
          { name: "Margin guardrails", hours: "4.1K", value: "$820K", pct: 22 },
          { name: "Contract compliance", hours: "3.2K", value: "$610K", pct: 17 },
          { name: "Rebate & leakage", hours: "2.6K", value: "$410K", pct: 14 },
          { name: "Forecast roll-up", hours: "1.6K", value: "$260K", pct: 9 },
        ],
      },
      timelineWeeks: 16,
      timeline: [
        { name: "Audit — interviews, pricing map, ROI baseline", start: 0, span: 4, kind: "audit" },
        { name: "P1 Quote builder", start: 4, span: 5, kind: "build" },
        { name: "P2 Margin guardrails", start: 6, span: 5, kind: "build" },
        { name: "P3 Contract compliance", start: 8, span: 5, kind: "build" },
        { name: "P4 Rebate & leakage", start: 10, span: 5, kind: "build" },
        { name: "P5 Forecast roll-up", start: 12, span: 4, kind: "build" },
        { name: "Operate", start: 15, span: 0, kind: "operate" },
      ],
    },
    build: {
      heading: "The build process: agents shipped inside your stack",
      intro:
        "Five agents deployed inside your quoting stack. Each one tied to a measured baseline from the audit, with one full production trace shown below.",
      agents: [
        { name: "Quote builder", value: "$1.1M/yr", hours: "140 hrs/wk", auto: 4, human: 1 },
        { name: "Margin guardrails", value: "$820K/yr", hours: "80 hrs/wk", auto: 3, human: 1 },
        { name: "Contract compliance", value: "$610K/yr", hours: "60 hrs/wk", auto: 4, human: 1 },
        { name: "Rebate & leakage", value: "$410K/yr", hours: "50 hrs/wk", auto: 3, human: 1 },
        { name: "Forecast roll-up", value: "$260K/yr", hours: "30 hrs/wk", auto: 3, human: 0 },
      ],
      trace: {
        title: "Full production trace — Quote builder",
        sub: "One complete agent path with inputs, policy checks, reviewer gates, and write-back logic visible.",
        meta: [
          { value: "140 hrs/wk", label: "Time" },
          { value: "$1.1M/yr", label: "Impact" },
          { value: "Audit log", label: "Control" },
        ],
        steps: [
          {
            text: "Watches CRM opportunities and inbound quote requests",
            detail: "Every 5 minutes, business hours and after",
            kind: "auto",
          },
          {
            text: "Assembles live cost, contract terms, and win-rate history",
            detail: "Customer, SKU mix, volume breaks, prior pricing",
            kind: "auto",
          },
          {
            text: "Drafts the quote inside contract floors and margin guardrails",
            detail: "Policy checks run before a human ever sees it",
            kind: "auto",
          },
          {
            text: "Deal desk approves anything outside guardrails",
            detail: "The decision is written back as pricing signal, not a one-off override",
            kind: "human",
          },
          {
            text: "Writes the approved quote to CPQ with full audit trail",
            detail: "Terms, floors checked, approver, and timing logged",
            kind: "auto",
          },
        ],
      },
      outcomes: [
        {
          value: "~18.7K hrs/yr",
          label: "Time returned",
          sub: "capacity moved to selling, not quoting",
        },
        {
          value: "3d → 4hr",
          label: "Quote turnaround",
          sub: "core workflow simplified",
        },
        {
          value: "$3.2M/yr",
          label: "Annual value",
          sub: "modeled from audit baseline",
        },
      ],
    },
    team: {
      heading: "Team view: one engine, three perspectives",
      intro: "What each role sees on day one. Same data, different lens.",
      roles: [
        {
          key: "analyst",
          label: "Pricing Analyst",
          sub: "Day-to-day operator",
          handledTitle: "What agents handled for you today",
          handled: [
            { value: "63", label: "Quotes drafted" },
            { value: "19", label: "Guardrail checks passed" },
            { value: "7", label: "Leakage flags raised" },
            { value: "4", label: "Rebates reconciled" },
          ],
          timeNote: "You used to spend 6 hours/day building quotes. Now it's 50 minutes.",
          queueTitle: "Your queue today",
          queue: [
            {
              id: "QTE-2211",
              severity: "high",
              type: "Guardrail Exception",
              party: "Meridian Supply Co.",
              amount: "$182,400",
              note: "Requested discount 14% vs contract floor 10%. Win-rate model supports 11.5%.",
            },
            {
              id: "QTE-2216",
              severity: "medium",
              type: "New Customer Pricing",
              party: "Halberd Industrial",
              amount: "$46,900",
              note: "No prior history. Draft priced from segment comparables; needs analyst sign-off.",
            },
            {
              id: "LKG-0341",
              severity: "medium",
              type: "Leakage Flag",
              party: "Corvus Freight",
              amount: "$8,120",
              note: "Invoiced price 6% under contract on 3 lines. Draft correction memo attached.",
            },
            {
              id: "RBT-1187",
              severity: "low",
              type: "Rebate Variance",
              party: "Atlas Components",
              amount: "$2,340",
              note: "Q2 volume rebate accrual differs from schedule. One tier boundary case.",
            },
          ],
        },
        {
          key: "dealdesk",
          label: "Deal Desk Manager",
          sub: "Team manager",
          handledTitle: "What the desk cleared this week",
          handled: [
            { value: "312", label: "Quotes auto-drafted" },
            { value: "96%", label: "Inside guardrails" },
            { value: "11", label: "Exceptions escalated" },
            { value: "4hr", label: "Median turnaround" },
          ],
          timeNote: "Exception review is the job now — not quote assembly.",
          queueTitle: "Escalations needing your call",
          queue: [
            {
              id: "ESC-0412",
              severity: "high",
              type: "Floor Override Request",
              party: "Meridian Supply Co.",
              amount: "$182,400",
              note: "Regional lead requests 14% to defend renewal. Margin impact modeled at −$7.3K.",
            },
            {
              id: "ESC-0415",
              severity: "medium",
              type: "Non-Standard Terms",
              party: "Bellwether Foods",
              amount: "$91,000",
              note: "120-day payment terms requested. Finance policy caps at 60 without CFO sign-off.",
            },
            {
              id: "ESC-0416",
              severity: "low",
              type: "Bundle Pricing",
              party: "Halberd Industrial",
              amount: "$46,900",
              note: "Cross-category bundle has no rate-card precedent. Draft uses nearest comparable.",
            },
          ],
        },
        {
          key: "cro",
          label: "CRO",
          sub: "Executive",
          handledTitle: "This quarter, at a glance",
          handled: [
            { value: "+2.1pp", label: "Gross margin recovered" },
            { value: "96%", label: "Contract price compliance" },
            { value: "±6%", label: "Forecast variance" },
            { value: "$540K", label: "Leakage recovered QTD" },
          ],
          timeNote: "Every discount is visible before it goes out — not after it hits margin.",
          queueTitle: "Decisions pending",
          queue: [
            {
              id: "POL-0021",
              severity: "medium",
              type: "Policy Review",
              party: "Guardrail thresholds",
              amount: "—",
              note: "Exception rate fell to 4%. Recommend tightening floor tolerance from 2% to 1%.",
            },
            {
              id: "EXP-0007",
              severity: "low",
              type: "Expansion Scoping",
              party: "Renewals motion",
              amount: "—",
              note: "Quote engine chassis extends to renewal pricing. Audit scoped at 2 weeks.",
            },
          ],
        },
      ],
    },
    ongoing: {
      heading: "Operate: we keep it tuned and expanding",
      intro:
        "Pricing rules drift and models improve quarterly. We treat your revenue engine as continuous infrastructure.",
      beforeAfter: [
        { metric: "Quote turnaround", before: "3 days", after: "4 hours", delta: "−89%" },
        { metric: "Contract price compliance", before: "78%", after: "96%", delta: "+18pp" },
        { metric: "Gross margin", before: "Baseline", after: "+2.1pp recovered", delta: "+2.1pp" },
        { metric: "Quoting hours per rep", before: "9 hrs/wk", after: "2 hrs/wk", delta: "−78%" },
        { metric: "Forecast variance", before: "±14%", after: "±6%", delta: "−8pp" },
      ],
      curve: {
        title: "The accuracy curve",
        note: "Deal-desk corrections and rate-card changes are absorbed automatically. 84% to 97.2% in three months.",
        points: [84, 86, 88.5, 91, 92.5, 94.5, 97.2],
        final: "97.2%",
        annotations: [
          "Go-live",
          "Feedback loop activated",
          "Rate-card change auto-detected",
          "Guardrail tolerance tightened",
        ],
      },
      maintain: [
        {
          title: "Model swaps",
          description:
            "Frontier models ship every quarter. We swap in better, cheaper, or faster — your quoting flow doesn't change.",
        },
        {
          title: "Pricing drift",
          description:
            "Rate cards, costs, and contracts change. Embedded engineers keep guardrails matched to the actual terms.",
        },
        {
          title: "Adjacent motions",
          description:
            "Once quoting is live, the chassis extends into renewals, rebates, and channel pricing.",
        },
      ],
      cadence: [
        {
          name: "Monthly",
          description: "Pricing drift report. Guardrail tuning. Rate-card format updates.",
        },
        {
          name: "Quarterly",
          description:
            "Business review with the CRO. New agent scoping. Roadmap for adjacent revenue motions.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 02 · PROCUREMENT OPERATIONS
  // ─────────────────────────────────────────────
  {
    slug: "procurement",
    index: "02",
    domain: "Procurement Operations",
    engine: "Procurement Engine",
    title: "Your procurement operation, rebuilt around AI.",
    heroSub:
      "Audit, build, operate. Bridging the legacy ERP and the procurement platform your buyers already use.",
    cardTagline: "Spend analysis, vendor onboarding, PO exception resolution.",
    cardStats: [
      { value: "Days → Min", label: "spend analysis" },
      { value: "8–12%", label: "savings identified" },
    ],
    phases: [
      {
        num: "01",
        duration: "5 weeks",
        name: "Audit",
        description:
          "Process-owner interviews, systems map, spend baseline, build plan.",
      },
      {
        num: "02",
        duration: "12 weeks",
        name: "Build",
        description:
          "The ERP–procurement bridge ships first, then the agents on top of it.",
      },
      {
        num: "03",
        duration: "Ongoing",
        name: "Operate",
        description:
          "Tuning, model swaps, expansion into AP and contract operations.",
      },
    ],
    benchmark: [
      {
        value: "5 months",
        label: "Audit through live agents",
        sub: "Diagnosis to operating system",
      },
      {
        value: "$2.6M",
        label: "Annual value created",
        sub: "Modeled from audit baselines",
      },
      {
        value: "1",
        label: "Procurement function, end-to-end",
        sub: "Depth, not breadth",
      },
    ],
    value: {
      total: "$2.6M",
      split: [
        { label: "Cost reduction", amount: "$1.7M", pct: 65 },
        { label: "Risk mitigation", amount: "$0.6M", pct: 23 },
        { label: "Revenue growth", amount: "$0.3M", pct: 12 },
      ],
      note: "Modeled from audit baselines. Value is captured across cost reduction, risk mitigation, and revenue growth — not cost alone.",
    },
    audit: {
      heading: "The audit process: we learn your procurement operation",
      intro:
        "5 weeks. The CFO sponsors the work, then procurement, AP, vendor ops, and plant owners pull in their teams. Outputs: spend and time map, controls register, ROI baseline, and a build plan signed by the people who run the work.",
      interviewsSummary: "21 sessions / 17 stakeholders",
      interviewsNote:
        "We start with the CFO and procurement director, then interview every buyer plus the analysts who reconcile spend by hand.",
      interviews: [
        { who: "CFO", sessions: "1×60min", focus: "priorities + savings targets" },
        { who: "Procurement director", sessions: "2×60min", focus: "category strategy + exceptions" },
        { who: "Buyers", sessions: "6×45min", focus: "PO flow + vendor workarounds" },
        { who: "AP team", sessions: "4×30min", focus: "invoice matching + holds" },
        { who: "Vendor operations", sessions: "3×30min", focus: "onboarding + master data" },
        { who: "Plant operations", sessions: "3×45min", focus: "requisitions + urgency paths" },
        { who: "Systems admin", sessions: "2×45min", focus: "ERP permissions + integration limits" },
      ],
      docsSummary: "80+ sources ingested",
      docsNote:
        "Vendor masters, PO exports, contracts, approval matrices, and shadow reconciliation spreadsheets are indexed together.",
      docs: [
        { name: "Vendor master (both systems)", kind: "Master data" },
        { name: "Multi-year PO + invoice exports", kind: "Operational data" },
        { name: "Category contracts", kind: "Contracts" },
        { name: "Approval matrix", kind: "Governance" },
        { name: "Onboarding checklists", kind: "SOP" },
        { name: "Shadow reconciliation spreadsheets", kind: "Working files" },
        { name: "Savings tracker", kind: "Finance" },
      ],
      systemsSummary: "8 systems mapped",
      systemsNote:
        "The legacy ERP, the modern procurement platform, and everything taped between them are mapped as one operating graph.",
      systems: [
        { name: "Epicor", role: "Legacy ERP" },
        { name: "Coupa", role: "Procurement" },
        { name: "Bill.com", role: "AP automation" },
        { name: "Excel", role: "Reconciliation" },
        { name: "SharePoint", role: "Document store" },
        { name: "SQL warehouse", role: "Reporting" },
        { name: "Outlook", role: "Vendor email" },
        { name: "Slack", role: "Approvals" },
      ],
      stats: [
        { value: "8", label: "Systems mapped" },
        { value: "17", label: "Workflows analyzed" },
        { value: "23,000", label: "POs sampled" },
        { value: "31K", label: "Hours of manual work / yr" },
      ],
      automation: {
        totalHours: "31,000",
        automatablePct: 68,
        automatedHours: "21,100",
        humanHours: "9,900",
        agents: [
          { name: "ERP–procurement bridge", hours: "8.4K", value: "$980K", pct: 40 },
          { name: "Spend analysis", hours: "5.2K", value: "$640K", pct: 25 },
          { name: "Vendor onboarding", hours: "3.4K", value: "$420K", pct: 16 },
          { name: "PO exception resolution", hours: "2.8K", value: "$360K", pct: 13 },
          { name: "Contract compliance", hours: "1.3K", value: "$200K", pct: 6 },
        ],
      },
      timelineWeeks: 17,
      timeline: [
        { name: "Audit — interviews, systems map, spend baseline", start: 0, span: 5, kind: "audit" },
        { name: "P1 ERP–procurement bridge", start: 5, span: 5, kind: "build" },
        { name: "P2 Spend analysis", start: 7, span: 5, kind: "build" },
        { name: "P3 Vendor onboarding", start: 9, span: 5, kind: "build" },
        { name: "P4 PO exception resolution", start: 11, span: 5, kind: "build" },
        { name: "P5 Contract compliance", start: 13, span: 4, kind: "build" },
        { name: "Operate", start: 16, span: 0, kind: "operate" },
      ],
    },
    build: {
      heading: "The build process: agents shipped inside your stack",
      intro:
        "Five agents deployed across the ERP–procurement seam. Each one tied to a measured baseline from the audit, with one full production trace shown below.",
      agents: [
        { name: "ERP–procurement bridge", value: "$980K/yr", hours: "160 hrs/wk", auto: 4, human: 0 },
        { name: "Spend analysis", value: "$640K/yr", hours: "100 hrs/wk", auto: 4, human: 1 },
        { name: "Vendor onboarding", value: "$420K/yr", hours: "65 hrs/wk", auto: 3, human: 1 },
        { name: "PO exception resolution", value: "$360K/yr", hours: "54 hrs/wk", auto: 3, human: 1 },
        { name: "Contract compliance", value: "$200K/yr", hours: "25 hrs/wk", auto: 3, human: 1 },
      ],
      trace: {
        title: "Full production trace — Spend analysis",
        sub: "One complete agent path with inputs, normalization, reviewer gates, and write-back logic visible.",
        meta: [
          { value: "100 hrs/wk", label: "Time" },
          { value: "$640K/yr", label: "Impact" },
          { value: "Audit log", label: "Control" },
        ],
        steps: [
          {
            text: "Pulls transactions from the legacy ERP and the procurement platform",
            detail: "Nightly sync plus on-demand queries",
            kind: "auto",
          },
          {
            text: "Normalizes vendors, units, and categories across both systems",
            detail: "One vendor, one identity — across five years of data",
            kind: "auto",
          },
          {
            text: "Runs comparative analysis: price drift, volume leverage, duplicate spend",
            detail: "The analysis that used to take days runs in minutes",
            kind: "auto",
          },
          {
            text: "Buyer reviews flagged savings opportunities",
            detail: "Accept/reject decisions train the next pass",
            kind: "human",
          },
          {
            text: "Publishes the savings register with full lineage",
            detail: "Every figure traces back to source transactions",
            kind: "auto",
          },
        ],
      },
      outcomes: [
        {
          value: "~21.1K hrs/yr",
          label: "Time returned",
          sub: "capacity moved to strategic sourcing",
        },
        {
          value: "Days → Minutes",
          label: "Spend analysis",
          sub: "core workflow simplified",
        },
        {
          value: "$2.6M/yr",
          label: "Annual value",
          sub: "modeled from audit baseline",
        },
      ],
    },
    team: {
      heading: "Team view: one engine, three perspectives",
      intro: "What each role sees on day one. Same data, different lens.",
      roles: [
        {
          key: "buyer",
          label: "Buyer",
          sub: "Day-to-day operator",
          handledTitle: "What agents handled for you today",
          handled: [
            { value: "148", label: "POs matched & routed" },
            { value: "31", label: "Exceptions auto-resolved" },
            { value: "5", label: "Vendors onboarded" },
            { value: "12", label: "Savings flags raised" },
          ],
          timeNote: "You used to spend 5 hours/day reconciling systems. Now it's 40 minutes.",
          queueTitle: "Your queue today",
          queue: [
            {
              id: "PO-8841",
              severity: "high",
              type: "Price Variance",
              party: "Keystone Metals",
              amount: "$61,200",
              note: "Invoice 9% over PO on rolled steel. Contract allows 3%. Draft dispute attached.",
            },
            {
              id: "VEN-0293",
              severity: "medium",
              type: "New Vendor Hold",
              party: "Cascade Analytics",
              amount: "$8,750",
              note: "W-9 on file but no contract. Category manager confirmed engagement via Slack.",
            },
            {
              id: "SAV-1104",
              severity: "medium",
              type: "Savings Opportunity",
              party: "Fastener category",
              amount: "$44,000/yr",
              note: "Same SKUs bought from 3 vendors at 11% spread. Consolidation model attached.",
            },
            {
              id: "PO-8856",
              severity: "low",
              type: "Unit Mismatch",
              party: "Brightline Packaging",
              amount: "$3,180",
              note: "Cases vs eaches on 2 lines. Historical pattern suggests vendor-side entry error.",
            },
          ],
        },
        {
          key: "director",
          label: "Procurement Director",
          sub: "Team manager",
          handledTitle: "What the function cleared this week",
          handled: [
            { value: "740", label: "POs processed" },
            { value: "82%", label: "Touchless rate" },
            { value: "9", label: "Escalations" },
            { value: "2 days", label: "Vendor onboarding median" },
          ],
          timeNote: "The team manages categories now — not data entry.",
          queueTitle: "Escalations needing your call",
          queue: [
            {
              id: "ESC-1120",
              severity: "high",
              type: "Contract Breach Pattern",
              party: "Keystone Metals",
              amount: "$188K YTD",
              note: "Third over-contract invoice this quarter. Recommend formal supplier review.",
            },
            {
              id: "ESC-1123",
              severity: "medium",
              type: "Consolidation Decision",
              party: "Fastener category",
              amount: "$44,000/yr",
              note: "Two plants prefer incumbent vendors. Savings model vs switching cost attached.",
            },
            {
              id: "ESC-1124",
              severity: "low",
              type: "Policy Exception",
              party: "R&D requisitions",
              amount: "$12,500",
              note: "Emergency purchase path used 4× this month for non-emergencies.",
            },
          ],
        },
        {
          key: "cfo",
          label: "CFO",
          sub: "Executive",
          handledTitle: "This quarter, at a glance",
          handled: [
            { value: "8–12%", label: "Savings identified" },
            { value: "$410K", label: "Savings captured QTD" },
            { value: "95%", label: "Spend under management" },
            { value: "3 FTEs", label: "Redeployed to sourcing" },
          ],
          timeNote: "One operating picture across both systems — for the first time.",
          queueTitle: "Decisions pending",
          queue: [
            {
              id: "CAP-0009",
              severity: "medium",
              type: "Savings Reinvestment",
              party: "Category strategy",
              amount: "$410K",
              note: "Captured savings exceed plan. Options memo: margin vs sourcing capacity.",
            },
            {
              id: "EXP-0014",
              severity: "low",
              type: "Expansion Scoping",
              party: "AP operations",
              amount: "—",
              note: "Bridge chassis extends to AP invoice matching. Audit scoped at 3 weeks.",
            },
          ],
        },
      ],
    },
    ongoing: {
      heading: "Operate: we keep it tuned and expanding",
      intro:
        "Vendors change formats and contracts renew. We treat your procurement engine as continuous infrastructure.",
      beforeAfter: [
        { metric: "Multi-year spend analysis", before: "Days", after: "Minutes", delta: "−99%" },
        { metric: "Vendor onboarding", before: "9 days", after: "2 days", delta: "−78%" },
        { metric: "PO exception backlog", before: "Baseline", after: "74% smaller", delta: "−74%" },
        { metric: "Maverick spend", before: "14%", after: "5%", delta: "−9pp" },
        { metric: "Reconciliation staffing", before: "3 FTEs", after: "Redeployed", delta: "3 FTEs" },
      ],
      curve: {
        title: "The accuracy curve",
        note: "Buyer corrections and vendor-format changes are absorbed automatically. 86% to 98.1% in three months.",
        points: [86, 88, 90.5, 93, 95, 96.5, 98.1],
        final: "98.1%",
        annotations: [
          "Go-live",
          "Feedback loop activated",
          "Vendor format change auto-detected",
          "Match threshold raised",
        ],
      },
      maintain: [
        {
          title: "Model swaps",
          description:
            "Frontier models ship every quarter. We swap in better, cheaper, or faster — your workflows don't change.",
        },
        {
          title: "Master-data drift",
          description:
            "Vendors merge, SKUs change, contracts renew. Embedded engineers keep the bridge matched to reality.",
        },
        {
          title: "Adjacent functions",
          description:
            "Once procurement is live, the chassis extends into AP, contract operations, and inventory.",
        },
      ],
      cadence: [
        {
          name: "Monthly",
          description: "Master-data drift report. Match-threshold tuning. Vendor format updates.",
        },
        {
          name: "Quarterly",
          description:
            "Business review with the CFO. New agent scoping. Roadmap for adjacent functions.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 03 · AGENTIC COMMERCE
  // ─────────────────────────────────────────────
  {
    slug: "commerce",
    index: "03",
    domain: "Agentic Commerce",
    engine: "Commerce Engine",
    title: "Your storefront, rebuilt for AI buyers.",
    heroSub:
      "Audit, build, operate. AI shopping agents are already trying to buy from you — we make your storefront serve them.",
    cardTagline: "Agent-ready catalog, agentic checkout, conversational reorder.",
    cardStats: [
      { value: "11%", label: "orders via agents" },
      { value: "+18%", label: "AOV agent-assisted" },
    ],
    phases: [
      {
        num: "01",
        duration: "3 weeks",
        name: "Audit",
        description:
          "Agent-traffic analysis, catalog readability review, checkout gap map.",
      },
      {
        num: "02",
        duration: "9 weeks",
        name: "Build",
        description:
          "MCP storefront, authenticated agent checkout, conversational reorder.",
      },
      {
        num: "03",
        duration: "Ongoing",
        name: "Operate",
        description:
          "Guardrail tuning, protocol updates, expansion to new agent channels.",
      },
    ],
    benchmark: [
      {
        value: "3 months",
        label: "Audit through live channel",
        sub: "Diagnosis to operating system",
      },
      {
        value: "$1.8M",
        label: "Annual value created",
        sub: "Modeled from audit baselines",
      },
      {
        value: "1",
        label: "New sales channel, end-to-end",
        sub: "Machine-readable, 24/7",
      },
    ],
    value: {
      total: "$1.8M",
      split: [
        { label: "Revenue growth", amount: "$1.3M", pct: 72 },
        { label: "Cost reduction", amount: "$0.3M", pct: 17 },
        { label: "Risk mitigation", amount: "$0.2M", pct: 11 },
      ],
      note: "Modeled from audit baselines. Value is captured across revenue growth, cost reduction, and risk mitigation — not cost alone.",
    },
    audit: {
      heading: "The audit process: we learn how agents fail against your store",
      intro:
        "3 weeks. The VP Digital sponsors the work, then ecommerce, merchandising, CS, and fulfillment owners pull in their teams. Outputs: agent-traffic baseline, catalog readability map, checkout gap register, and a build plan signed by the people who run the channel.",
      interviewsSummary: "14 sessions / 12 stakeholders",
      interviewsNote:
        "We start with the VP Digital Commerce, then interview every owner of the surfaces an agent touches on its way to checkout.",
      interviews: [
        { who: "VP Digital Commerce", sessions: "1×60min", focus: "channel strategy + targets" },
        { who: "Ecommerce manager", sessions: "2×60min", focus: "storefront + conversion paths" },
        { who: "Merchandising", sessions: "3×45min", focus: "product data + catalog gaps" },
        { who: "Customer service lead", sessions: "2×45min", focus: "emailed orders + failures" },
        { who: "Fulfillment ops", sessions: "3×30min", focus: "order routing + exceptions" },
        { who: "IT / platform admin", sessions: "3×45min", focus: "APIs + auth constraints" },
      ],
      docsSummary: "40+ sources ingested",
      docsNote:
        "Product feeds, order logs, agent-traffic captures, and the email order backlog are indexed together.",
      docs: [
        { name: "Product catalog exports", kind: "Master data" },
        { name: "Agent-traffic logs (90 days)", kind: "Operational data" },
        { name: "Emailed order backlog", kind: "Working files" },
        { name: "Checkout funnel analytics", kind: "Analytics" },
        { name: "Payment + fraud policies", kind: "Governance" },
        { name: "B2B account terms", kind: "Contracts" },
      ],
      systemsSummary: "7 systems mapped",
      systemsNote:
        "The storefront, the systems behind it, and every fallback path an agent order takes today are mapped as one graph.",
      systems: [
        { name: "Shopify Plus", role: "Storefront" },
        { name: "NetSuite", role: "ERP / orders" },
        { name: "PIM", role: "Product data" },
        { name: "Stripe", role: "Payments" },
        { name: "Zendesk", role: "Support" },
        { name: "Email inbox", role: "Manual orders" },
        { name: "3PL portal", role: "Fulfillment" },
      ],
      stats: [
        { value: "7", label: "Systems mapped" },
        { value: "11", label: "Workflows analyzed" },
        { value: "8,900", label: "Agent sessions sampled" },
        { value: "9K", label: "Hours of manual work / yr" },
      ],
      automation: {
        totalHours: "9,000",
        automatablePct: 76,
        automatedHours: "6,800",
        humanHours: "2,200",
        agents: [
          { name: "Agent-ready catalog (MCP)", hours: "2.6K", value: "$600K", pct: 38 },
          { name: "Agentic checkout", hours: "1.9K", value: "$520K", pct: 28 },
          { name: "Conversational reorder", hours: "1.4K", value: "$410K", pct: 21 },
          { name: "Order fallback conversion", hours: "0.9K", value: "$270K", pct: 13 },
        ],
      },
      timelineWeeks: 12,
      timeline: [
        { name: "Audit — traffic analysis, catalog review, gap map", start: 0, span: 3, kind: "audit" },
        { name: "P1 Agent-ready catalog (MCP)", start: 3, span: 4, kind: "build" },
        { name: "P2 Agentic checkout", start: 5, span: 4, kind: "build" },
        { name: "P3 Conversational reorder", start: 7, span: 4, kind: "build" },
        { name: "P4 Order fallback conversion", start: 9, span: 3, kind: "build" },
        { name: "Operate", start: 11, span: 0, kind: "operate" },
      ],
    },
    build: {
      heading: "The build process: a storefront agents can transact with",
      intro:
        "Four agents and surfaces deployed on your existing platform. Each one tied to a measured baseline from the audit, with one full production trace shown below.",
      agents: [
        { name: "Agent-ready catalog (MCP)", value: "$600K/yr", hours: "50 hrs/wk", auto: 3, human: 0 },
        { name: "Agentic checkout", value: "$520K/yr", hours: "37 hrs/wk", auto: 4, human: 1 },
        { name: "Conversational reorder", value: "$410K/yr", hours: "27 hrs/wk", auto: 3, human: 1 },
        { name: "Order fallback conversion", value: "$270K/yr", hours: "17 hrs/wk", auto: 3, human: 1 },
      ],
      trace: {
        title: "Full production trace — Agentic checkout",
        sub: "One complete agent-order path with authentication, mandates, review gates, and write-back visible.",
        meta: [
          { value: "<1s", label: "Catalog response" },
          { value: "$520K/yr", label: "Impact" },
          { value: "Full audit trail", label: "Control" },
        ],
        steps: [
          {
            text: "Shopping agent authenticates against the MCP storefront",
            detail: "Scoped credentials tied to a customer account",
            kind: "auto",
          },
          {
            text: "Queries structured product, price, and availability data",
            detail: "Sub-second responses; no HTML scraping",
            kind: "auto",
          },
          {
            text: "Builds the cart within payment mandates and order limits",
            detail: "Spend caps, category limits, velocity checks",
            kind: "auto",
          },
          {
            text: "Orders above mandate route to the account owner for approval",
            detail: "One tap in email or Slack; decision logged",
            kind: "human",
          },
          {
            text: "Order posts to the ERP with agent identity attached",
            detail: "Same fulfillment path as any human order",
            kind: "auto",
          },
        ],
      },
      outcomes: [
        {
          value: "11%",
          label: "Orders via agents",
          sub: "a channel that did not exist at baseline",
        },
        {
          value: "Zero-touch",
          label: "Agent checkout",
          sub: "email rekeying eliminated",
        },
        {
          value: "$1.8M/yr",
          label: "Annual value",
          sub: "modeled from audit baseline",
        },
      ],
    },
    team: {
      heading: "Team view: one engine, three perspectives",
      intro: "What each role sees on day one. Same data, different lens.",
      roles: [
        {
          key: "manager",
          label: "Digital Commerce Manager",
          sub: "Day-to-day operator",
          handledTitle: "What the channel handled today",
          handled: [
            { value: "214", label: "Agent sessions served" },
            { value: "38", label: "Agent orders placed" },
            { value: "6", label: "Mandate approvals routed" },
            { value: "0", label: "Orders fell to email" },
          ],
          timeNote: "You used to rekey emailed orders for 3 hours/day. Now it's zero.",
          queueTitle: "Your queue today",
          queue: [
            {
              id: "ORD-7731",
              severity: "high",
              type: "Mandate Exceeded",
              party: "Ridgeline Outfitters (agent)",
              amount: "$5,840",
              note: "Reorder 2.3× usual volume. Account owner approval requested; expires in 4 hours.",
            },
            {
              id: "CAT-0512",
              severity: "medium",
              type: "Catalog Gap",
              party: "New spring line",
              amount: "—",
              note: "62 SKUs missing structured dimensions. Agents fall back to descriptions.",
            },
            {
              id: "ORD-7738",
              severity: "low",
              type: "Velocity Flag",
              party: "Neuvo Concierge (agent)",
              amount: "$940",
              note: "Fourth order this week, all within mandate. Pattern consistent with client batch.",
            },
          ],
        },
        {
          key: "merchandiser",
          label: "Merchandiser",
          sub: "Catalog owner",
          handledTitle: "How agents read your catalog this week",
          handled: [
            { value: "12,400", label: "Catalog queries" },
            { value: "<1s", label: "Median response" },
            { value: "97%", label: "Queries fully answered" },
            { value: "31", label: "Attribute gaps flagged" },
          ],
          timeNote: "Agents tell you exactly which product data is missing — before it costs a sale.",
          queueTitle: "Catalog work the engine surfaced",
          queue: [
            {
              id: "GAP-0114",
              severity: "medium",
              type: "Attribute Gap",
              party: "Footwear category",
              amount: "—",
              note: "Agents asked for width sizing 340× this week; field empty on 48 SKUs.",
            },
            {
              id: "GAP-0117",
              severity: "low",
              type: "Compatibility Data",
              party: "Accessories",
              amount: "—",
              note: "\"Fits model X?\" unanswerable for 12 SKUs. Draft compatibility table attached.",
            },
          ],
        },
        {
          key: "vp",
          label: "VP Digital Commerce",
          sub: "Executive",
          handledTitle: "This quarter, at a glance",
          handled: [
            { value: "11%", label: "Orders via agents" },
            { value: "+18%", label: "AOV on agent orders" },
            { value: "24/7", label: "Channel availability" },
            { value: "100%", label: "Agent orders authenticated" },
          ],
          timeNote: "The fastest-growing channel is one no shopper ever sees.",
          queueTitle: "Decisions pending",
          queue: [
            {
              id: "CHN-0004",
              severity: "medium",
              type: "Channel Expansion",
              party: "B2B replenishment agents",
              amount: "—",
              note: "Three enterprise accounts asked for standing-order mandates. Scoping memo attached.",
            },
            {
              id: "POL-0031",
              severity: "low",
              type: "Mandate Policy",
              party: "Approval thresholds",
              amount: "—",
              note: "94% of approvals clear untouched. Recommend raising default mandate 25%.",
            },
          ],
        },
      ],
    },
    ongoing: {
      heading: "Operate: we keep it tuned and expanding",
      intro:
        "Agent protocols are evolving fast. We treat your commerce engine as continuous infrastructure.",
      beforeAfter: [
        { metric: "Orders via agents", before: "0%", after: "11%", delta: "+11pp" },
        { metric: "AOV, agent-assisted", before: "Baseline", after: "+18%", delta: "+18%" },
        { metric: "Emailed-order rekeying", before: "15 hrs/wk", after: "0 hrs/wk", delta: "−100%" },
        { metric: "Catalog query response", before: "Unservable", after: "<1s", delta: "New" },
        { metric: "Agent order auditability", before: "None", after: "100% logged", delta: "New" },
      ],
      curve: {
        title: "The adoption curve",
        note: "Share of orders placed by authenticated agents. 0% to 11% in three months, with AOV 18% above baseline.",
        points: [0, 1.5, 3, 5, 7, 9, 11],
        final: "11%",
        annotations: [
          "Channel live",
          "First B2B reorder agents",
          "Mandate limits raised",
          "Conversational reorder live",
        ],
      },
      maintain: [
        {
          title: "Protocol updates",
          description:
            "MCP and agent-payment standards are moving targets. We keep the storefront current as they evolve.",
        },
        {
          title: "Guardrail tuning",
          description:
            "Mandates, velocity checks, and fraud thresholds are tuned against real agent behavior monthly.",
        },
        {
          title: "New agent channels",
          description:
            "Once the storefront is agent-ready, the same surface serves shopping assistants, B2B replenishment bots, and marketplaces.",
        },
      ],
      cadence: [
        {
          name: "Monthly",
          description: "Agent-traffic report. Mandate tuning. Catalog gap register review.",
        },
        {
          name: "Quarterly",
          description:
            "Business review with the VP Digital. Protocol roadmap. New channel scoping.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 04 · RETAIL
  // ─────────────────────────────────────────────
  {
    slug: "retail",
    index: "04",
    domain: "Retail",
    engine: "Retail Engine",
    title: "Your inventory operation, rebuilt around AI.",
    heroSub:
      "Audit, build, operate. Inside the planning, POS, and warehouse systems your 400+ stores already run on.",
    cardTagline: "Demand forecasting, replenishment, anomaly detection.",
    cardStats: [
      { value: "$8M", label: "annual impact" },
      { value: "40 → 5 hrs", label: "weekly forecasting" },
    ],
    phases: [
      {
        num: "01",
        duration: "6 weeks",
        name: "Audit",
        description:
          "Planner interviews, demand-signal map, write-off baseline, build plan.",
      },
      {
        num: "02",
        duration: "12–16 weeks",
        name: "Build",
        description:
          "Forecasting first, then replenishment and anomaly agents on top.",
      },
      {
        num: "03",
        duration: "Ongoing",
        name: "Operate",
        description:
          "Seasonal retuning, model swaps, expansion into allocation and vendor ops.",
      },
    ],
    benchmark: [
      {
        value: "6 months",
        label: "Audit through live agents",
        sub: "Diagnosis to operating system",
      },
      {
        value: "$8M",
        label: "Annual impact",
        sub: "Modeled from audit baselines",
      },
      {
        value: "400+",
        label: "Locations, one engine",
        sub: "Depth and scale",
      },
    ],
    value: {
      total: "$8M",
      split: [
        { label: "Cost reduction", amount: "$4.8M", pct: 60 },
        { label: "Revenue growth", amount: "$2.4M", pct: 30 },
        { label: "Risk mitigation", amount: "$0.8M", pct: 10 },
      ],
      note: "Modeled from audit baselines. Value is captured across cost reduction, revenue growth, and risk mitigation — not cost alone.",
    },
    audit: {
      heading: "The audit process: we learn your inventory operation",
      intro:
        "6 weeks. The SVP Supply Chain sponsors the work, then planning, regional ops, merchandising, and store owners pull in their teams. Outputs: demand-signal map, write-off baseline, controls register, and a build plan signed by the people who run the work.",
      interviewsSummary: "24 sessions / 19 stakeholders",
      interviewsNote:
        "We start with the SVP Supply Chain, then interview every planning owner plus the regional managers who live with the stockouts.",
      interviews: [
        { who: "SVP Supply Chain", sessions: "1×60min", focus: "priorities + write-off targets" },
        { who: "Demand planning team", sessions: "6×45min", focus: "forecast process + overrides" },
        { who: "Regional ops managers", sessions: "5×45min", focus: "stockouts + transfer workarounds" },
        { who: "Merchandising", sessions: "4×45min", focus: "assortment + seasonal resets" },
        { who: "Store operations", sessions: "4×30min", focus: "receiving + shelf availability" },
        { who: "Systems / data team", sessions: "4×45min", focus: "POS pipeline + integration limits" },
      ],
      docsSummary: "120+ sources ingested",
      docsNote:
        "Forecast files, write-off ledgers, planograms, transfer logs, and the planners' override spreadsheets are indexed together.",
      docs: [
        { name: "Forecast workbooks (52 weeks)", kind: "Working files" },
        { name: "Write-off ledger", kind: "Finance" },
        { name: "Planogram + assortment files", kind: "Merchandising" },
        { name: "Store transfer logs", kind: "Operational data" },
        { name: "Seasonal reset calendars", kind: "SOP" },
        { name: "Vendor lead-time records", kind: "Master data" },
        { name: "Override history exports", kind: "Operational data" },
      ],
      systemsSummary: "9 systems mapped",
      systemsNote:
        "Planning, POS, warehouse, and the spreadsheet layer between them are mapped as one operating graph.",
      systems: [
        { name: "Oracle", role: "ERP" },
        { name: "Blue Yonder", role: "Planning" },
        { name: "Snowflake", role: "POS warehouse" },
        { name: "Manhattan WMS", role: "Warehouse" },
        { name: "Excel", role: "Overrides" },
        { name: "Tableau", role: "Reporting" },
        { name: "Vendor portals", role: "Inbound supply" },
        { name: "Outlook", role: "Vendor email" },
        { name: "Teams", role: "Store comms" },
      ],
      stats: [
        { value: "9", label: "Systems mapped" },
        { value: "22", label: "Workflows analyzed" },
        { value: "400+", label: "Locations modeled" },
        { value: "68K", label: "Hours of manual work / yr" },
      ],
      automation: {
        totalHours: "68,000",
        automatablePct: 71,
        automatedHours: "48,300",
        humanHours: "19,700",
        agents: [
          { name: "Demand forecasting", hours: "18K", value: "$3.4M", pct: 37 },
          { name: "Replenishment triggers", hours: "12K", value: "$2.2M", pct: 25 },
          { name: "Anomaly detection", hours: "8.3K", value: "$1.1M", pct: 17 },
          { name: "Allocation & transfers", hours: "6K", value: "$800K", pct: 13 },
          { name: "Vendor communication", hours: "4K", value: "$500K", pct: 8 },
        ],
      },
      timelineWeeks: 22,
      timeline: [
        { name: "Audit — interviews, signal map, write-off baseline", start: 0, span: 6, kind: "audit" },
        { name: "P1 Demand forecasting", start: 6, span: 7, kind: "build" },
        { name: "P2 Replenishment triggers", start: 9, span: 6, kind: "build" },
        { name: "P3 Anomaly detection", start: 12, span: 5, kind: "build" },
        { name: "P4 Allocation & transfers", start: 15, span: 5, kind: "build" },
        { name: "P5 Vendor communication", start: 17, span: 4, kind: "build" },
        { name: "Operate", start: 21, span: 0, kind: "operate" },
      ],
    },
    build: {
      heading: "The build process: agents shipped inside your stack",
      intro:
        "Five agents deployed across planning and store operations. Each one tied to a measured baseline from the audit, with one full production trace shown below.",
      agents: [
        { name: "Demand forecasting", value: "$3.4M/yr", hours: "346 hrs/wk", auto: 4, human: 1 },
        { name: "Replenishment triggers", value: "$2.2M/yr", hours: "230 hrs/wk", auto: 4, human: 1 },
        { name: "Anomaly detection", value: "$1.1M/yr", hours: "160 hrs/wk", auto: 3, human: 1 },
        { name: "Allocation & transfers", value: "$800K/yr", hours: "115 hrs/wk", auto: 3, human: 1 },
        { name: "Vendor communication", value: "$500K/yr", hours: "77 hrs/wk", auto: 3, human: 1 },
      ],
      trace: {
        title: "Full production trace — Demand forecasting",
        sub: "One complete agent path with signals, model runs, planner gates, and write-back logic visible.",
        meta: [
          { value: "346 hrs/wk", label: "Time" },
          { value: "$3.4M/yr", label: "Impact" },
          { value: "Override log", label: "Control" },
        ],
        steps: [
          {
            text: "Ingests POS, weather, promo calendar, and 50+ demand signals",
            detail: "Nightly, per SKU per location",
            kind: "auto",
          },
          {
            text: "Runs the forecast across 400+ locations",
            detail: "Seasonal patterns, local events, cannibalization effects",
            kind: "auto",
          },
          {
            text: "Flags SKU/location pairs where confidence is low",
            detail: "New items, sparse history, conflicting signals",
            kind: "auto",
          },
          {
            text: "Planner reviews flagged forecasts and overrides where judgment applies",
            detail: "Every override is captured as training signal",
            kind: "human",
          },
          {
            text: "Publishes reorder points to planning and WMS with lineage",
            detail: "Each number traces to the signals that produced it",
            kind: "auto",
          },
        ],
      },
      outcomes: [
        {
          value: "~48.3K hrs/yr",
          label: "Time returned",
          sub: "planners moved from spreadsheets to strategy",
        },
        {
          value: "40 → 5 hrs/wk",
          label: "Manual forecasting",
          sub: "core workflow simplified",
        },
        {
          value: "$8M/yr",
          label: "Annual impact",
          sub: "modeled from audit baseline",
        },
      ],
    },
    team: {
      heading: "Team view: one engine, three perspectives",
      intro: "What each role sees on day one. Same data, different lens.",
      roles: [
        {
          key: "planner",
          label: "Demand Planner",
          sub: "Day-to-day operator",
          handledTitle: "What agents handled for you today",
          handled: [
            { value: "38K", label: "SKU/location forecasts" },
            { value: "1,240", label: "Reorder points updated" },
            { value: "96", label: "Anomalies triaged" },
            { value: "17", label: "Transfers proposed" },
          ],
          timeNote: "You used to spend 8 hours/day in forecast workbooks. Now it's 1 hour on exceptions.",
          queueTitle: "Your queue today",
          queue: [
            {
              id: "FCT-9921",
              severity: "high",
              type: "Low-Confidence Forecast",
              party: "New grill line · SE region",
              amount: "214 SKUs",
              note: "No sales history; comparable-item model suggests 3× vendor's initial buy plan.",
            },
            {
              id: "ANM-0388",
              severity: "high",
              type: "Demand Anomaly",
              party: "Store 0412 · Houston",
              amount: "$68K exposure",
              note: "Generator demand 11× baseline on storm forecast. Transfer plan drafted from 3 stores.",
            },
            {
              id: "TRF-1140",
              severity: "medium",
              type: "Transfer Proposal",
              party: "Patio sets · Midwest",
              amount: "$41K",
              note: "8 stores overstocked, 5 understocked. Net freight cost $2.9K vs markdown risk $18K.",
            },
            {
              id: "FCT-9934",
              severity: "low",
              type: "Override Review",
              party: "Holiday lighting",
              amount: "62 SKUs",
              note: "Your October override beat the model by 12%. Pattern absorbed into seasonal profile.",
            },
          ],
        },
        {
          key: "regional",
          label: "Regional Ops Manager",
          sub: "Team manager",
          handledTitle: "Your region this week",
          handled: [
            { value: "98.2%", label: "On-shelf availability" },
            { value: "3", label: "Stockout events" },
            { value: "$120K", label: "Markdown risk averted" },
            { value: "22", label: "Store transfers executed" },
          ],
          timeNote: "Stockouts are exceptions now — not the weekly firefight.",
          queueTitle: "Needs your sign-off",
          queue: [
            {
              id: "REG-0771",
              severity: "high",
              type: "Storm Response",
              party: "Gulf Coast stores",
              amount: "$68K",
              note: "Generator + plywood surge plan across 9 stores. Approve transfer set before 2pm cutoff.",
            },
            {
              id: "REG-0774",
              severity: "medium",
              type: "Overstock Escalation",
              party: "Store 0219 · Tulsa",
              amount: "$27K",
              note: "Seasonal overstock past reset date. Options: transfer (3 stores) or markdown 20%.",
            },
          ],
        },
        {
          key: "svp",
          label: "SVP Supply Chain",
          sub: "Executive",
          handledTitle: "This quarter, at a glance",
          handled: [
            { value: "$7.2M", label: "Write-off run-rate (was $12M)" },
            { value: "98%+", label: "Chain availability" },
            { value: "±5%", label: "Forecast error (was ±18%)" },
            { value: "5 hrs/wk", label: "Manual forecasting (was 40)" },
          ],
          timeNote: "Visibility into demand before it happens — chain-wide, every night.",
          queueTitle: "Decisions pending",
          queue: [
            {
              id: "CAP-0018",
              severity: "medium",
              type: "Buy-Plan Shift",
              party: "Spring season",
              amount: "$2.1M",
              note: "Model recommends shifting 8% of spring buy from big-box to regional DCs.",
            },
            {
              id: "EXP-0022",
              severity: "low",
              type: "Expansion Scoping",
              party: "Vendor operations",
              amount: "—",
              note: "Forecast chassis extends to vendor lead-time management. Audit scoped at 4 weeks.",
            },
          ],
        },
      ],
    },
    ongoing: {
      heading: "Operate: we keep it tuned and expanding",
      intro:
        "Seasons change and assortments reset. We treat your retail engine as continuous infrastructure.",
      beforeAfter: [
        { metric: "Annual write-offs", before: "$12M", after: "$7.2M", delta: "−40%" },
        { metric: "Manual forecasting", before: "40 hrs/wk", after: "5 hrs/wk", delta: "−88%" },
        { metric: "Forecast error", before: "±18%", after: "±5%", delta: "−13pp" },
        { metric: "Stockout events", before: "Frequent", after: "Rare", delta: "Availability 98%+" },
        { metric: "Seasonal prediction", before: "Poor", after: "Highly accurate", delta: "Absorbed overrides" },
      ],
      curve: {
        title: "The accuracy curve",
        note: "Planner overrides and seasonal patterns are absorbed automatically. 82% to 95.4% in three months.",
        points: [82, 84.5, 87, 89.5, 92, 94, 95.4],
        final: "95.4%",
        annotations: [
          "Go-live",
          "Override feedback loop activated",
          "Seasonal profiles rebuilt",
          "Confidence threshold raised",
        ],
      },
      maintain: [
        {
          title: "Model swaps",
          description:
            "Frontier models ship every quarter. We swap in better, cheaper, or faster — your planning flow doesn't change.",
        },
        {
          title: "Seasonal retuning",
          description:
            "Resets, new lines, and local events shift demand. Embedded engineers keep profiles matched to the floor.",
        },
        {
          title: "Adjacent functions",
          description:
            "Once forecasting is live, the chassis extends into allocation, vendor lead-times, and labor planning.",
        },
      ],
      cadence: [
        {
          name: "Monthly",
          description: "Forecast drift report. Threshold tuning. New-item onboarding review.",
        },
        {
          name: "Quarterly",
          description:
            "Business review with the SVP. Seasonal retune. Roadmap for adjacent functions.",
        },
      ],
    },
  },
];

export const demosBySlug: Record<string, Demo> = Object.fromEntries(
  demos.map((d) => [d.slug, d]),
);

export const demoSlugs: string[] = demos.map((d) => d.slug);

export const chapters = [
  { path: "", num: "01", name: "Overview" },
  { path: "/audit", num: "02", name: "Audit Process" },
  { path: "/build", num: "03", name: "Build Process" },
  { path: "/team", num: "04", name: "Team View" },
  { path: "/ongoing", num: "05", name: "Operate" },
] as const;
