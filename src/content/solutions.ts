import type { Solution } from './types'

// Canonical solutions data — consolidated from the former three sources
// (solutions/[slug] detail, solutions list cards, solutions/[slug]/seo.ts).
// Detail-page content is canonical; card headline metrics were reconciled to the
// detail pages' quantified results.
export const solutions: Solution[] = [
  {
    slug: 'intelligent-agents',
    name: 'Intelligent Agents',
    category: 'Core',
    featured: true,
    description:
      'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with Salesforce, Workday, Databricks.',
    heroTagline: 'Autonomous AI that works across your entire enterprise',
    cardMetric: '6-8 weeks',
    cardMetricLabel: 'to production',
    features: [
      'Multi-agent orchestration',
      'Tool calling & function execution',
      'Memory and context management',
      'Goal-driven task decomposition',
    ],
    problem:
      'Enterprises coordinate work across 150+ apps manually. Each handoff is a delay, each context switch is an error risk, and each integration maintenance is engineering debt.',
    challenges: [
      'Manual coordination across 150+ enterprise apps',
      'Context lost between systems and handoffs',
      'Engineering time spent on integration maintenance',
      'Slow decision-making due to information silos',
      'Inconsistent process execution across teams',
    ],
    solutionOverview:
      'Intelligent AI agents that autonomously orchestrate workflows across your entire tech stack. They understand context, make decisions within defined boundaries, and execute multi-step processes without constant human oversight.',
    capabilities: [
      {
        title: 'Multi-Agent Orchestration',
        description:
          'Deploy specialized agents that collaborate on complex tasks—one handles data extraction, another validates, a third executes.',
        metric: 'Up to 10 agents',
      },
      {
        title: 'Tool Calling & Function Execution',
        description:
          'Agents directly invoke APIs, update databases, send communications, and trigger downstream processes.',
        metric: 'Native integrations',
      },
      {
        title: 'Memory and Context Management',
        description:
          'Agents remember previous interactions, learn preferences, and maintain context across sessions using MCP.',
        metric: 'Persistent memory',
      },
      {
        title: 'Goal-Driven Task Decomposition',
        description:
          'Give agents a goal—they break it into steps, execute, verify, and report back.',
        metric: 'Autonomous execution',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Define Goals & Boundaries',
        description:
          'We work with you to define what the agent should accomplish and establish operational guardrails.',
      },
      {
        step: 2,
        title: 'Connect Systems',
        description:
          'Using MCP and native connectors, we integrate with Salesforce, Workday, Databricks, and your other systems of record.',
      },
      {
        step: 3,
        title: 'Deploy & Monitor',
        description:
          'Agents go into production with full logging, human-in-the-loop escalation paths, and performance monitoring.',
      },
      {
        step: 4,
        title: 'Iterate & Improve',
        description:
          'Based on real usage data, we optimize agent behavior and expand capabilities.',
      },
    ],
    integrations: [
      'Salesforce',
      'Workday',
      'Databricks',
      'SAP',
      'NetSuite',
      'ServiceNow',
      'Slack',
      'Microsoft 365',
    ],
    results: [
      {
        metric: 'Up to 10 agents',
        label: 'coordinating in parallel',
        description: 'Time saved on cross-system workflows',
      },
      {
        metric: '6-8 weeks',
        label: 'to production',
        description: 'From discovery to live deployment',
      },
      {
        metric: '150+ apps',
        label: 'orchestrated automatically',
        description: 'Through SaaS consolidation and automation',
      },
    ],
    faqs: [
      {
        question: 'What is an intelligent AI agent?',
        answer:
          'An intelligent AI agent is an autonomous system that can pursue goals, make decisions, and take actions without constant human oversight. Unlike traditional chatbots that respond to single prompts, agents execute multi-step workflows, coordinate across systems, and adapt to changing conditions.',
      },
      {
        question: 'How do agents integrate with our existing systems?',
        answer:
          'We use the Model Context Protocol (MCP) and native API connectors to integrate with your systems of record—Salesforce, Workday, Databricks, SAP, and others. Your data stays in your environment; agents orchestrate on top.',
      },
      {
        question: 'What happens when an agent encounters an edge case?',
        answer:
          'Agents operate within bounded autonomy. When they encounter situations outside their defined boundaries, they escalate to humans via Slack, email, or your preferred channel. All escalations are logged for continuous improvement.',
      },
      {
        question: 'How do you ensure agent actions are auditable?',
        answer:
          'Every agent action is logged with complete audit trails—what was done, when, why, and by which agent. This supports SOC 2 compliance and internal governance requirements.',
      },
      {
        question: 'Can agents work with our proprietary systems?',
        answer:
          'Yes. We build custom connectors for proprietary systems as part of our implementation. If it has an API, we can integrate it.',
      },
    ],
    cta: {
      headline: 'Ready to deploy intelligent agents?',
      description:
        'Book a 30-minute discovery call to see how autonomous AI agents can run your operations.',
    },
    seo: {
      metaTitle: 'Intelligent AI Agents for Enterprise',
      metaDescription:
        'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with Salesforce, Workday, Databricks. Production-ready in 6-8 weeks.',
    },
  },
  {
    slug: 'customer-service-automation',
    name: 'Customer Service Automation',
    category: 'Operations',
    description:
      'Replace fragmented support tools with unified AI agents that handle tickets, route inquiries, and resolve issues across all channels.',
    heroTagline: 'Faster resolution with unified AI agents — live in 6-8 weeks',
    cardMetric: '6-8 weeks',
    cardMetricLabel: 'to production',
    features: [
      'Multi-channel support automation',
      'Intelligent ticket routing',
      'Knowledge base integration',
      'Sentiment analysis & escalation',
    ],
    caseStudyLink: '/case-studies/customer-service',
    problem:
      'Support teams juggle 5-10 tools: ticketing, chat, email, knowledge base, CRM, analytics. Each tool is a silo, each integration is fragile, and customers feel the friction.',
    challenges: [
      'Siloed support tools create fragmented customer experiences',
      'Agents juggle 5-10 tools per ticket, losing time to context switching between systems',
      'Knowledge bases are outdated and hard to search',
      'First-response time averaging 4+ hours',
      'High cost per ticket with low automation rates',
    ],
    solutionOverview:
      'AI agents that unify your support stack. They understand customer intent, pull relevant context from all systems, and resolve or route tickets intelligently—across email, chat, phone, and social.',
    capabilities: [
      {
        title: 'Multi-Channel Support',
        description:
          'Single AI system handles email, chat, phone transcripts, and social media—unified context across all channels.',
        metric: 'Omnichannel',
      },
      {
        title: 'Intelligent Ticket Routing',
        description:
          'AI analyzes intent, sentiment, and complexity to route tickets to the right team or auto-resolve.',
        metric: 'Routes across 5-10 systems',
      },
      {
        title: 'Knowledge Base Integration',
        description:
          'Agents search your knowledge base, documentation, and past tickets to provide accurate responses.',
        metric: 'Real-time RAG',
      },
      {
        title: 'Sentiment Analysis & Escalation',
        description:
          'Detect frustrated customers early and escalate to human agents before issues escalate.',
        metric: 'Proactive escalation',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Connect Support Channels',
        description: 'Integrate with your ticketing system, chat, email, and knowledge base.',
      },
      {
        step: 2,
        title: 'Train on Your Data',
        description:
          'AI learns from your past tickets, knowledge articles, and product documentation.',
      },
      {
        step: 3,
        title: 'Deploy with Human Oversight',
        description:
          'Start with AI-assisted responses, then graduate to autonomous resolution as confidence grows.',
      },
      {
        step: 4,
        title: 'Measure & Optimize',
        description: 'Track resolution time, CSAT, and cost per ticket—continuously improve.',
      },
    ],
    integrations: [
      'Salesforce Service Cloud',
      'Zendesk',
      'ServiceNow',
      'Intercom',
      'Freshdesk',
      'Slack',
      'Microsoft Teams',
    ],
    results: [
      {
        metric: '6-8 weeks',
        label: 'to production',
        description: 'From discovery to live deployment across all channels',
      },
      {
        metric: '5-10 tools',
        label: 'consolidated into one AI layer',
        description: 'Replacing fragmented, costly point solutions',
      },
      {
        metric: '4+ hours',
        label: 'average first-response time before AI',
        description: 'Now addressed through instant multi-channel triage',
      },
    ],
    faqs: [
      {
        question: 'How does AI customer service differ from traditional chatbots?',
        answer:
          'Traditional chatbots follow rigid scripts. Our AI agents understand context, access all your systems, and handle complex multi-turn conversations. They can actually resolve issues, not just deflect them.',
      },
      {
        question: 'Will AI replace our support team?',
        answer:
          'No. AI handles routine inquiries (password resets, order status, FAQs) so your human agents can focus on complex, high-value interactions that require empathy and judgment.',
      },
      {
        question: 'How do you handle sensitive customer data?',
        answer:
          'Your data never leaves your environment. We implement strict access controls, encryption, and comply with SOC 2, HIPAA, and GDPR requirements as applicable.',
      },
      {
        question: 'What integrations do you support?',
        answer:
          'We integrate with major support platforms including Salesforce Service Cloud, Zendesk, ServiceNow, Intercom, and Freshdesk. Custom integrations are available for proprietary systems.',
      },
      {
        question: 'How long does implementation take?',
        answer:
          '6-8 weeks from discovery to production. We start with a focused use case (e.g., email auto-response) and expand from there.',
      },
    ],
    cta: {
      headline: 'Ready to transform your support?',
      description: 'Book a discovery call to see how AI can get you to production in 6-8 weeks.',
    },
    seo: {
      metaTitle: 'AI Customer Service Automation | Live in 6-8 Weeks',
      metaDescription:
        'Replace fragmented support tools with unified AI agents. Live in 6-8 weeks. Integrates with Salesforce Service Cloud, Zendesk, ServiceNow.',
    },
  },
  {
    slug: 'document-processing',
    name: 'Document Processing',
    category: 'Operations',
    description:
      'AI-powered document extraction, classification, and processing. Handle invoices, contracts, forms, and unstructured documents with enterprise-grade accuracy.',
    heroTagline: 'Enterprise-grade accuracy in document extraction at scale',
    cardMetric: '$2.4M',
    cardMetricLabel: 'in annual savings',
    features: [
      'Auto-classification and routing',
      'Entity extraction with enterprise-grade accuracy',
      'Human-in-the-loop exception handling',
      'Full audit trail and compliance',
    ],
    caseStudyLink: '/case-studies/document-processing',
    problem:
      'Document processing is manual, error-prone, and expensive. Teams spend hours extracting data from PDFs, routing documents, and re-keying information into systems.',
    challenges: [
      'Manual data entry from invoices, contracts, and forms',
      'Inconsistent document formats and poor OCR quality',
      'Compliance requirements for document retention and audit trails',
      'Backlog of documents waiting for processing',
      'Errors in extraction leading to downstream problems',
    ],
    solutionOverview:
      'AI agents that read, understand, and process documents at scale. Auto-classify incoming documents, extract structured data, validate against business rules, and route to the right systems—with human review only for exceptions.',
    capabilities: [
      {
        title: 'Auto-Classification',
        description:
          'Automatically categorize incoming documents by type, priority, and required action.',
        metric: 'Thousands/hour',
      },
      {
        title: 'Entity Extraction',
        description:
          'Extract names, dates, amounts, line items, and custom fields from any document format.',
        metric: '$2.4M saved annually',
      },
      {
        title: 'Human-in-the-Loop',
        description:
          'Low-confidence extractions are routed to humans for review, continuously training the model.',
        metric: 'Exception handling',
      },
      {
        title: 'Audit Trails',
        description:
          'Complete logging of every document processed—who, what, when, and any modifications.',
        metric: 'Full compliance',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Document Intake',
        description:
          'Documents arrive via email, upload portal, or system integration—any format accepted.',
      },
      {
        step: 2,
        title: 'Classification & Extraction',
        description: 'AI classifies the document type and extracts relevant data fields.',
      },
      {
        step: 3,
        title: 'Validation & Routing',
        description:
          'Extracted data is validated against business rules and routed to appropriate systems.',
      },
      {
        step: 4,
        title: 'Review & Confirm',
        description:
          'Exceptions are flagged for human review; confident extractions flow through automatically.',
      },
    ],
    integrations: [
      'SAP',
      'Oracle',
      'NetSuite',
      'QuickBooks',
      'Workday',
      'SharePoint',
      'Google Drive',
      'Box',
    ],
    results: [
      {
        metric: 'Thousands/hour',
        label: 'documents processed',
        description: 'Across invoice, contract, and form processing',
      },
      {
        metric: 'Full compliance',
        label: 'audit-ready processing',
        description: 'Full logging replaces manual, error-prone document handling',
      },
      {
        metric: '$2.4M',
        label: 'annual savings',
        description: 'Mid-market document-processing case',
      },
    ],
    faqs: [
      {
        question: 'What document formats do you support?',
        answer:
          'We process PDFs, scanned images, Word documents, Excel files, emails, and even handwritten forms. Our AI adapts to poor scan quality and inconsistent formatting.',
      },
      {
        question: 'How do you achieve that level of accuracy?',
        answer:
          'We combine multiple AI techniques: vision models for layout understanding, language models for context, and validation rules for domain-specific checks. Human review of edge cases continuously improves accuracy.',
      },
      {
        question: 'What happens with low-confidence extractions?',
        answer:
          'Documents below our confidence threshold are routed to human reviewers. Their corrections feed back into the model, improving accuracy over time.',
      },
      {
        question: 'How do you handle compliance requirements?',
        answer:
          'Full audit trails, configurable retention policies, role-based access, and encryption at rest and in transit. We support SOC 2, HIPAA, and industry-specific requirements.',
      },
      {
        question: 'Can you handle high volumes?',
        answer:
          'Yes. Our systems scale horizontally to handle thousands of documents per hour without degradation in accuracy or speed.',
      },
    ],
    cta: {
      headline: 'Ready to automate document processing?',
      description: 'Book a demo to see the accuracy behind $2.4M in annual savings.',
    },
    seo: {
      metaTitle: 'Intelligent Document Processing | $2.4M in Annual Savings',
      metaDescription:
        'AI-powered document extraction, classification, and processing at scale. Enterprise-grade accuracy. Integrates with existing ERP and systems of record.',
    },
  },
  {
    slug: 'context-management',
    name: 'Context Management',
    category: 'Platform',
    description:
      'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation.',
    heroTagline: 'AI that actually understands your business',
    cardMetric: '3x',
    cardMetricLabel: 'AI relevance',
    features: [
      'Knowledge graph construction',
      'Semantic indexing for RAG',
      'Model Context Protocol (MCP)',
      'Zero-copy data access',
    ],
    problem:
      'AI models are powerful but generic. Without business context, they produce hallucinations, irrelevant suggestions, and outputs that miss the mark. Many enterprises cite data searchability as a top AI challenge.',
    challenges: [
      'AI lacks understanding of your business processes and terminology',
      'Data fragmented across Salesforce, Workday, SAP, and file storage',
      'Generic AI responses that miss business context',
      'No standard protocol for AI-to-data connectivity',
      'Data quality issues magnified by AI systems',
    ],
    solutionOverview:
      'We build the context layer that makes AI useful. Knowledge graphs capture your business relationships, semantic indexing enables intelligent retrieval, and MCP provides standardized access—all without moving your data.',
    capabilities: [
      {
        title: 'Knowledge Graph Construction',
        description:
          'Map relationships between customers, products, processes, and systems into a queryable graph.',
        metric: 'Relationship mapping',
      },
      {
        title: 'Semantic Indexing for RAG',
        description:
          'Index your documents and data for retrieval-augmented generation with high relevance.',
        metric: 'High-precision retrieval',
      },
      {
        title: 'Model Context Protocol (MCP)',
        description:
          'Implement the emerging standard for AI-to-data connectivity—no lock-in when the standard shifts.',
        metric: 'MCP-ready',
      },
      {
        title: 'Zero-Copy Data Access',
        description: 'Agents access data in place—no migration, no duplication, no data sprawl.',
        metric: 'No data movement',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Data Discovery',
        description:
          'We map your existing data sources—CRM, HCM, ERP, files, databases—and identify context needs.',
      },
      {
        step: 2,
        title: 'Knowledge Graph Build',
        description:
          'Construct a knowledge graph that captures your business entities and relationships.',
      },
      {
        step: 3,
        title: 'MCP Implementation',
        description: 'Deploy MCP servers that give AI agents secure, contextualized data access.',
      },
      {
        step: 4,
        title: 'Agent Integration',
        description:
          'Connect your AI agents to the context layer for dramatically improved output quality.',
      },
    ],
    integrations: [
      'Salesforce',
      'Workday',
      'Databricks',
      'SAP',
      'NetSuite',
      'SharePoint',
      'Google Drive',
      'PostgreSQL',
      'MongoDB',
    ],
    results: [
      {
        metric: '3x',
        label: 'improvement in AI relevance',
        description: 'Output quality with proper context',
      },
      {
        metric: '0',
        label: 'data migration required',
        description: 'Access data where it lives',
      },
      {
        metric: 'MCP-ready',
        label: 'grounded in real context',
        description: 'Reduces hallucinations through business-specific grounding',
      },
    ],
    faqs: [
      {
        question: 'What is the Model Context Protocol (MCP)?',
        answer:
          'MCP is a standardization breakthrough developed by Anthropic that enables AI applications to connect with data sources, tools, and services through a universal interface—similar to how USB-C standardized hardware connectivity. It eliminates custom integrations between AI and each data source.',
      },
      {
        question: 'Do we need to move our data?',
        answer:
          'No. Our zero-copy approach accesses data where it lives. We build context layers on top of your existing systems without data migration or duplication.',
      },
      {
        question: 'How does context management improve AI accuracy?',
        answer:
          'By grounding AI responses in your actual business data—customer records, product catalogs, process documentation—we eliminate hallucinations and ensure outputs are relevant to your specific context.',
      },
      {
        question: 'How long does context setup take?',
        answer:
          '4-6 weeks for initial context layer deployment, depending on the number of data sources and complexity of your business model.',
      },
      {
        question: 'What happens when our data changes?',
        answer:
          'Context layers stay synchronized with source systems through real-time or scheduled sync, depending on your requirements.',
      },
    ],
    cta: {
      headline: 'Ready to contextualize your AI?',
      description:
        'Book a discovery call to see how MCP and knowledge graphs transform AI accuracy.',
    },
    seo: {
      metaTitle: 'Enterprise AI Context Management | MCP-Ready',
      metaDescription:
        'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation. Enable AI that understands your business.',
    },
  },
  {
    slug: 'agentic-evaluation',
    name: 'Agentic Evaluation',
    category: 'Platform',
    description:
      'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Move from "Is it working?" to proven ROI.',
    heroTagline: 'Prove AI ROI in 90 days',
    cardMetric: '90 days',
    cardMetricLabel: 'to ROI',
    features: [
      'Task success rate tracking',
      'Accuracy & hallucination monitoring',
      'Cost-per-action analysis',
      'Business outcome attribution',
    ],
    problem:
      '2025 was AI hype. 2026 is "Is it working?" Most executives haven\'t yet seen significant revenue gains from AI. The gap between expectations and realized benefits is massive.',
    challenges: [
      'No clear metrics for AI agent success',
      "Can't differentiate AI value from noise",
      'Stakeholders asking "Is it working?" with no answer',
      'Cost per AI action unknown',
      'Business outcomes unattributed to AI investments',
    ],
    solutionOverview:
      'A comprehensive evaluation framework that measures AI agent performance against business outcomes. Track task success, accuracy, efficiency, and cost—then prove ROI to stakeholders with hard numbers.',
    capabilities: [
      {
        title: 'Task Success Rate Tracking',
        description:
          'Measure whether agents complete their assigned goals, with breakdowns by task type and complexity.',
        metric: 'Goal completion tracking',
      },
      {
        title: 'Accuracy & Hallucination Monitoring',
        description:
          'Track factual correctness, citation accuracy, and hallucination rates across all agent outputs.',
        metric: 'Truth metrics',
      },
      {
        title: 'Cost-Per-Action Analysis',
        description:
          'Know exactly what each AI action costs—API calls, compute, human review—down to the task level.',
        metric: 'Cost transparency',
      },
      {
        title: 'Business Outcome Attribution',
        description:
          'Connect AI agent activity to revenue, cost savings, and throughput improvements.',
        metric: 'ROI attribution',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Baseline Measurement',
        description:
          'Establish current metrics for the processes AI will handle—time, cost, accuracy, throughput.',
      },
      {
        step: 2,
        title: 'Instrumentation',
        description: 'Deploy monitoring on AI agents—every action, decision, and outcome is tracked.',
      },
      {
        step: 3,
        title: 'A/B Testing',
        description: 'Compare AI-assisted vs baseline processes with statistical rigor.',
      },
      {
        step: 4,
        title: 'Dashboard & Reporting',
        description: 'Real-time visibility into AI performance, cost, and business impact.',
      },
    ],
    integrations: [
      'Datadog',
      'Grafana',
      'Tableau',
      'Power BI',
      'Custom dashboards',
      'Slack alerts',
    ],
    results: [
      {
        metric: '90 days',
        label: 'to ROI proof',
        description: 'From deployment to demonstrated business value',
      },
      {
        metric: '90 days',
        label: 'to optimized performance',
        description: 'Real performance data guides improvements within the same ROI window',
      },
      {
        metric: 'Complete',
        label: 'cost visibility',
        description: 'Know exactly what AI is costing and delivering',
      },
    ],
    faqs: [
      {
        question: 'How do you measure AI agent performance?',
        answer:
          'We track multiple dimensions: task success rate (did the agent complete the goal?), accuracy (was the output correct?), efficiency (how long did it take, at what cost?), and business outcomes (what value did it create?). All metrics are auditable and tied to specific agent actions.',
      },
      {
        question: "What's a good task success rate?",
        answer:
          'It depends on the task complexity. For routine tasks (data extraction, routing), we target near-complete success. For complex tasks (multi-step workflows, decision-making), a strong majority success rate is the bar. We establish baselines within the first 90 days and improve iteratively.',
      },
      {
        question: 'How often should we evaluate our agents?',
        answer:
          'Continuous monitoring with weekly reviews and monthly deep-dives. Drift detection alerts you when agent performance degrades, triggering investigation and retraining.',
      },
      {
        question: 'Can you evaluate existing AI deployments?',
        answer:
          "Yes. We can instrument and evaluate AI systems you've already deployed, providing visibility you may not currently have.",
      },
      {
        question: 'How do you handle the "black box" problem?',
        answer:
          'We require explainability in agent decisions. Every action has a logged rationale, enabling audit, debugging, and continuous improvement.',
      },
    ],
    cta: {
      headline: 'Ready to prove AI ROI?',
      description:
        'Book a discovery call to see how agentic evaluation delivers measurable business outcomes.',
    },
    seo: {
      metaTitle: 'Agentic AI Evaluation & Performance Measurement',
      metaDescription:
        'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Move from "Is it working?" to proven ROI in 90 days.',
    },
  },
  {
    slug: 'ai-governance-security',
    name: 'AI Governance & Security',
    category: 'Governance',
    description:
      'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. Deploy autonomous AI with confidence.',
    heroTagline: 'Governed AI that enterprises can trust',
    cardMetric: 'SOC 2',
    cardMetricLabel: 'Type II',
    features: [
      'Bounded autonomy controls',
      'Complete audit trails',
      'Policy enforcement engine',
      'Governance supervisor agents',
    ],
    problem:
      'Autonomous AI introduces new risk categories: unauthorized actions, data leakage, compliance violations, liability questions. Without governance, AI projects stall in legal and compliance review.',
    challenges: [
      'Unclear accountability for AI agent actions',
      'Regulatory requirements (SOC 2, HIPAA, GDPR) for AI systems',
      'Risk of unauthorized AI actions outside intended scope',
      'No audit trail for AI decisions',
      'Security concerns blocking AI adoption',
    ],
    solutionOverview:
      'A comprehensive governance framework for autonomous AI: bounded autonomy defines what agents can do, escalation paths ensure human oversight, audit trails provide accountability, and policy engines enforce compliance.',
    capabilities: [
      {
        title: 'Bounded Autonomy Controls',
        description:
          'Define explicit operational limits for each agent—what they can access, what actions they can take, when they must escalate.',
        metric: 'Policy-enforced',
      },
      {
        title: 'Complete Audit Trails',
        description:
          'Every agent action is logged: what was done, when, why, with full context for compliance and debugging.',
        metric: 'Full traceability',
      },
      {
        title: 'Policy Enforcement Engine',
        description:
          'Embed guardrails directly into agents—they literally cannot violate defined policies.',
        metric: 'Built-in compliance',
      },
      {
        title: 'Governance Supervisor Agents',
        description:
          'Deploy AI that monitors other AI—detecting anomalies, policy violations, and drift in real-time.',
        metric: 'AI-on-AI oversight',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Risk Assessment',
        description:
          'Identify data sensitivity, regulatory requirements, and risk tolerance for each AI use case.',
      },
      {
        step: 2,
        title: 'Policy Definition',
        description:
          'Define bounded autonomy policies—what agents can do, access, and when to escalate.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Embed policies into agents with technical controls, not just documentation.',
      },
      {
        step: 4,
        title: 'Monitoring & Audit',
        description:
          'Continuous oversight with governance agents, regular audits, and compliance reporting.',
      },
    ],
    integrations: [
      'SOC 2 compliance',
      'HIPAA support',
      'GDPR compliance',
      'Industry-specific regulations',
      'Existing GRC tools',
    ],
    results: [
      {
        metric: 'SOC 2',
        label: 'compliant',
        description: 'Type II certification for AI operations',
      },
      {
        metric: 'Full traceability',
        label: 'complete audit coverage',
        description: 'Every agent action logged and traceable',
      },
      {
        metric: '0',
        label: 'data residency violations',
        description: 'Your data stays in your environment',
      },
    ],
    faqs: [
      {
        question: 'How do you prevent AI hallucinations?',
        answer:
          'Multiple layers: context management grounds responses in real data, bounded autonomy limits agent scope, and validation steps check outputs before action. Our evaluation framework tracks hallucination rates and triggers alerts when they increase.',
      },
      {
        question: 'What happens when an agent encounters an edge case?',
        answer:
          'Agents operate within bounded autonomy. Edge cases outside their defined scope trigger escalation to human reviewers. The escalation is logged, the human decision is captured, and the system learns for future similar cases.',
      },
      {
        question: 'How do we maintain compliance with autonomous AI?',
        answer:
          "We embed compliance into the agents themselves—they technically cannot access data they shouldn't, take actions outside policy, or skip required approvals. Audit trails prove compliance to regulators.",
      },
      {
        question: 'Who is liable for agent actions?',
        answer:
          'Governance frameworks establish clear accountability: what the agent is authorized to do, what human approvals are required, and how decisions are logged. This clarity supports legal and regulatory discussions.',
      },
      {
        question: 'Do you support industry-specific regulations?',
        answer:
          'Yes. We implement HIPAA for healthcare, GxP for pharma, NERC CIP for energy, ISO standards for industrial, and other industry-specific requirements as needed.',
      },
    ],
    cta: {
      headline: 'Ready for governed AI?',
      description:
        'Book a discovery call to see how bounded autonomy and audit trails enable enterprise AI adoption.',
    },
    seo: {
      metaTitle: 'Enterprise AI Governance & Security | SOC 2 Compliant',
      metaDescription:
        'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. SOC 2 compliant. Your data never leaves your environment.',
    },
  },
]

export const solutionsBySlug: Record<string, Solution> = Object.fromEntries(
  solutions.map((s) => [s.slug, s]),
)

export const solutionSlugs: string[] = solutions.map((s) => s.slug)
