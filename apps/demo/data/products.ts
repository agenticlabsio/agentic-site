export interface Product {
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  description: string;
  useCase: string[];
  impact: string[];
  clientProblem: string;
  solution: string[];
  outcomes: string[];
  appUrl: string;
  videoUrl: string | null;
  icon: string;
  status: "live" | "coming-soon";
}

export const products: Product[] = [
  {
    slug: "manufacturing-erp-agent",
    name: "ERP-to-Procurement Spend Analyzer",
    industry: "Manufacturing",
    tagline: "AI agent bridging legacy ERP and modern procurement systems",
    description:
      "An AI agent that connects disconnected ERP and procurement platforms, normalizes multi-year transactional data, and delivers automated comparative financial analysis — replacing days of manual FTE work with minutes of AI-driven insight.",
    useCase: [
      "Bridging legacy ERP systems with modern procurement platforms without costly re-platforming",
      "Running multi-year spend analysis across siloed datasets to uncover hidden savings",
      "Automating financial reconciliation workflows previously requiring dedicated FTE teams",
    ],
    impact: [
      "Reduced financial analysis timelines from days to minutes across years of spend data",
      "Surfaced previously invisible overhead cost reduction opportunities worth 8–12% of purchasing spend",
      "Freed multiple FTEs from manual reconciliation to focus on strategic procurement initiatives",
    ],
    clientProblem:
      "Legacy ERP platform does not easily communicate with newer procurement system. Overhead expenses have unrealized reduction opportunity. Analysis comparing years of data would take FTEs days to complete manually.",
    solution: [
      "Built AI agent bridging legacy ERP and modern procurement system",
      "Ingests and normalizes multi-year transactional data from both platforms",
      "Runs automated comparative financial analysis in minutes vs. days",
    ],
    outcomes: [
      "Reduced financial analysis from days to minutes across years of spend data",
      "Identified unrealized overhead cost reduction opportunities previously invisible",
      "Freed FTE capacity from manual reconciliation; comparable projects show 8–12% purchasing savings",
    ],
    appUrl: "#",
    videoUrl: null,
    icon: "Factory",
    status: "live",
  },
  {
    slug: "finance-back-office",
    name: "AP & Reconciliation Automation Agent",
    industry: "Finance / Back Office",
    tagline: "AI agents that cut reconciliation from 3 FTEs to 1 and close cycles 85% faster",
    description:
      "A suite of AI agents that automate the most labor-intensive finance operations — extracting invoice data, matching to purchase orders, reconciling GL balances across systems, and generating financial reports — replacing manual close-cycle work with continuous, error-free processing.",
    useCase: [
      "Extracting invoice data, matching to POs, and routing exceptions for human approval",
      "Reconciling general ledger balances across disparate systems and flagging discrepancies",
      "Replacing manual data entry in financial reporting and month-end close workflows",
    ],
    impact: [
      "Reduced reconciliation staffing from 3 FTEs to 1 — saving ~$450K annually",
      "Close cycles 85% faster with 95% fewer reconciliation errors",
      "AP processing costs cut up to 80% with median ROI of 150% within the first year",
    ],
    clientProblem:
      "Finance and back-office teams bogged down with manual, time-intensive reconciliation, accounts payable processing, and reporting tasks — leading to slow close cycles, high error rates, and excessive FTE cost for routine transactional work.",
    solution: [
      "AI agents extract invoice data, match to POs, and route exceptions for approval",
      "Reconciliation agents compare GL balances across systems and flag discrepancies",
      "Automated financial reporting replaces manual data entry and close-cycle work",
    ],
    outcomes: [
      "Reduced reconciliation from 3 FTEs to 1; ~$450K in annual savings",
      "85% faster close cycles and 95% reduction in reconciliation errors",
      "AP processing costs cut up to 80%; median ROI of 150% within first year",
    ],
    appUrl: "#",
    videoUrl: null,
    icon: "Calculator",
    status: "live",
  },
  {
    slug: "gaming-content-sync",
    name: "Video-Audio Sync Engine for Live Content",
    industry: "Online Gaming",
    tagline: "Proprietary AI that auto-syncs video and audio assets — hours of work reduced to minutes",
    description:
      "A proprietary AI tool that analyzes audio waveforms alongside video visual cue markers to automatically detect and correct misalignments at scale — replacing hours of manual sync work per asset with minutes of automated processing.",
    useCase: [
      "Analyzing audio waveforms and video cue markers to detect sync misalignments",
      "Applying frame-accurate corrections automatically across large content libraries",
      "Scaling content production without proportionally scaling production staff",
    ],
    impact: [
      "Eliminated manual sync workflows — production time cut from hours to minutes per asset",
      "Enabled content output to scale without adding production headcount",
      "AI-synced content delivers 30% higher viewer engagement compared to manually synced assets",
    ],
    clientProblem:
      "Client required precise synchronization of video and audio content for online gaming experiences. Manual syncing was time-consuming, inconsistent, and couldn't scale to meet the volume and speed of content production.",
    solution: [
      "Built proprietary AI tool analyzing audio waveforms and video visual cue markers",
      "Automatically detects misalignments and applies corrections at scale",
      "Reduces hours of manual sync work per asset down to minutes",
    ],
    outcomes: [
      "Eliminated manual sync workflows; production time cut from hours to minutes per asset",
      "Enabled content output to scale without adding production staff",
      "Industry data: AI-synced content delivers 30% higher viewer engagement vs. manual",
    ],
    appUrl: "#",
    videoUrl: null,
    icon: "Gamepad2",
    status: "live",
  },
];
