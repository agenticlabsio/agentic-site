'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Footer from '@/components/Footer';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/components/SEO';

// Solution data with full details for each solution page
const solutionsData: Record<string, {
  name: string;
  category: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  problem: string;
  challenges: string[];
  solutionOverview: string;
  capabilities: { title: string; description: string; metric?: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  integrations: string[];
  results: { metric: string; label: string; description: string }[];
  faqs: { question: string; answer: string }[];
  cta: { headline: string; description: string };
}> = {
  'intelligent-agents': {
    name: 'Intelligent Agents',
    category: 'Core',
    metaTitle: 'Intelligent AI Agents for Enterprise | Agentic Labs',
    metaDescription: 'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with Salesforce, Workday, Databricks. Production-ready in 6-8 weeks.',
    heroTagline: 'Autonomous AI that works across your entire enterprise',
    description: 'Goal-driven autonomous AI agents that execute complex workflows, make decisions, and integrate with your systems of record.',
    problem: 'Enterprises coordinate work across 150+ apps manually. Each handoff is a delay, each context switch is an error risk, and each integration maintenance is engineering debt.',
    challenges: [
      'Manual coordination across 150+ enterprise apps',
      'Context lost between systems and handoffs',
      'Engineering time spent on integration maintenance',
      'Slow decision-making due to information silos',
      'Inconsistent process execution across teams',
    ],
    solutionOverview: 'Intelligent AI agents that autonomously orchestrate workflows across your entire tech stack. They understand context, make decisions within defined boundaries, and execute multi-step processes without constant human oversight.',
    capabilities: [
      { title: 'Multi-Agent Orchestration', description: 'Deploy specialized agents that collaborate on complex tasks—one handles data extraction, another validates, a third executes.', metric: 'Up to 10 agents' },
      { title: 'Tool Calling & Function Execution', description: 'Agents directly invoke APIs, update databases, send communications, and trigger downstream processes.', metric: 'Native integrations' },
      { title: 'Memory and Context Management', description: 'Agents remember previous interactions, learn preferences, and maintain context across sessions using MCP.', metric: 'Persistent memory' },
      { title: 'Goal-Driven Task Decomposition', description: 'Give agents a goal—they break it into steps, execute, verify, and report back.', metric: 'Autonomous execution' },
    ],
    howItWorks: [
      { step: 1, title: 'Define Goals & Boundaries', description: 'We work with you to define what the agent should accomplish and establish operational guardrails.' },
      { step: 2, title: 'Connect Systems', description: 'Using MCP and native connectors, we integrate with Salesforce, Workday, Databricks, and your other systems of record.' },
      { step: 3, title: 'Deploy & Monitor', description: 'Agents go into production with full logging, human-in-the-loop escalation paths, and performance monitoring.' },
      { step: 4, title: 'Iterate & Improve', description: 'Based on real usage data, we optimize agent behavior and expand capabilities.' },
    ],
    integrations: ['Salesforce', 'Workday', 'Databricks', 'SAP', 'NetSuite', 'ServiceNow', 'Slack', 'Microsoft 365'],
    results: [
      { metric: '60%', label: 'reduction in manual coordination', description: 'Time saved on cross-system workflows' },
      { metric: '6-8 weeks', label: 'to production', description: 'From discovery to live deployment' },
      { metric: '40%', label: 'cost reduction', description: 'Through SaaS consolidation and automation' },
    ],
    faqs: [
      { question: 'What is an intelligent AI agent?', answer: 'An intelligent AI agent is an autonomous system that can pursue goals, make decisions, and take actions without constant human oversight. Unlike traditional chatbots that respond to single prompts, agents execute multi-step workflows, coordinate across systems, and adapt to changing conditions.' },
      { question: 'How do agents integrate with our existing systems?', answer: 'We use the Model Context Protocol (MCP) and native API connectors to integrate with your systems of record—Salesforce, Workday, Databricks, SAP, and others. Your data stays in your environment; agents orchestrate on top.' },
      { question: 'What happens when an agent encounters an edge case?', answer: 'Agents operate within bounded autonomy. When they encounter situations outside their defined boundaries, they escalate to humans via Slack, email, or your preferred channel. All escalations are logged for continuous improvement.' },
      { question: 'How do you ensure agent actions are auditable?', answer: 'Every agent action is logged with complete audit trails—what was done, when, why, and by which agent. This supports SOC 2 compliance and internal governance requirements.' },
      { question: 'Can agents work with our proprietary systems?', answer: 'Yes. We build custom connectors for proprietary systems as part of our implementation. If it has an API, we can integrate it.' },
    ],
    cta: { headline: 'Ready to deploy intelligent agents?', description: 'Book a 30-minute discovery call to see how autonomous AI agents can streamline your operations.' },
  },
  'customer-service-automation': {
    name: 'Customer Service Automation',
    category: 'Operations',
    metaTitle: 'AI Customer Service Automation | 60% Faster Resolution | Agentic Labs',
    metaDescription: 'Replace fragmented support tools with unified AI agents. 60% faster ticket resolution. Integrates with Salesforce Service Cloud, Zendesk, ServiceNow.',
    heroTagline: '60% faster resolution with unified AI agents',
    description: 'Replace fragmented support tools with unified AI agents that handle tickets, route inquiries, and resolve issues across all channels.',
    problem: 'Support teams juggle 5-10 tools: ticketing, chat, email, knowledge base, CRM, analytics. Each tool is a silo, each integration is fragile, and customers feel the friction.',
    challenges: [
      'Siloed support tools create fragmented customer experiences',
      'Agents spend 40% of time on context switching between systems',
      'Knowledge bases are outdated and hard to search',
      'First-response time averaging 4+ hours',
      'High cost per ticket with low automation rates',
    ],
    solutionOverview: 'AI agents that unify your support stack. They understand customer intent, pull relevant context from all systems, and resolve or route tickets intelligently—across email, chat, phone, and social.',
    capabilities: [
      { title: 'Multi-Channel Support', description: 'Single AI system handles email, chat, phone transcripts, and social media—unified context across all channels.', metric: 'Omnichannel' },
      { title: 'Intelligent Ticket Routing', description: 'AI analyzes intent, sentiment, and complexity to route tickets to the right team or auto-resolve.', metric: '80% auto-routed' },
      { title: 'Knowledge Base Integration', description: 'Agents search your knowledge base, documentation, and past tickets to provide accurate responses.', metric: 'Real-time RAG' },
      { title: 'Sentiment Analysis & Escalation', description: 'Detect frustrated customers early and escalate to human agents before issues escalate.', metric: 'Proactive escalation' },
    ],
    howItWorks: [
      { step: 1, title: 'Connect Support Channels', description: 'Integrate with your ticketing system, chat, email, and knowledge base.' },
      { step: 2, title: 'Train on Your Data', description: 'AI learns from your past tickets, knowledge articles, and product documentation.' },
      { step: 3, title: 'Deploy with Human Oversight', description: 'Start with AI-assisted responses, then graduate to autonomous resolution as confidence grows.' },
      { step: 4, title: 'Measure & Optimize', description: 'Track resolution time, CSAT, and cost per ticket—continuously improve.' },
    ],
    integrations: ['Salesforce Service Cloud', 'Zendesk', 'ServiceNow', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams'],
    results: [
      { metric: '60%', label: 'faster resolution', description: 'Average ticket resolution time improvement' },
      { metric: '40%', label: 'cost reduction', description: 'Lower cost per ticket through automation' },
      { metric: '85%', label: 'first-contact resolution', description: 'Issues resolved without escalation' },
    ],
    faqs: [
      { question: 'How does AI customer service differ from traditional chatbots?', answer: 'Traditional chatbots follow rigid scripts. Our AI agents understand context, access all your systems, and handle complex multi-turn conversations. They can actually resolve issues, not just deflect them.' },
      { question: 'Will AI replace our support team?', answer: 'No. AI handles routine inquiries (password resets, order status, FAQs) so your human agents can focus on complex, high-value interactions that require empathy and judgment.' },
      { question: 'How do you handle sensitive customer data?', answer: 'Your data never leaves your environment. We implement strict access controls, encryption, and comply with SOC 2, HIPAA, and GDPR requirements as applicable.' },
      { question: 'What integrations do you support?', answer: 'We integrate with major support platforms including Salesforce Service Cloud, Zendesk, ServiceNow, Intercom, and Freshdesk. Custom integrations are available for proprietary systems.' },
      { question: 'How long does implementation take?', answer: '6-8 weeks from discovery to production. We start with a focused use case (e.g., email auto-response) and expand from there.' },
    ],
    cta: { headline: 'Ready to transform your support?', description: 'Book a discovery call to see how AI can cut your resolution time by 60%.' },
  },
  'document-processing': {
    name: 'Document Processing',
    category: 'Operations',
    metaTitle: 'Intelligent Document Processing | 94% Accuracy | Agentic Labs',
    metaDescription: 'AI-powered document extraction, classification, and processing at scale. 94% accuracy rate. Integrates with existing ERP and systems of record.',
    heroTagline: '94% accuracy in document extraction at scale',
    description: 'AI-powered document extraction, classification, and processing. Handle invoices, contracts, forms, and unstructured documents with enterprise-grade accuracy.',
    problem: 'Document processing is manual, error-prone, and expensive. Teams spend hours extracting data from PDFs, routing documents, and re-keying information into systems.',
    challenges: [
      'Manual data entry from invoices, contracts, and forms',
      'Inconsistent document formats and poor OCR quality',
      'Compliance requirements for document retention and audit trails',
      'Backlog of documents waiting for processing',
      'Errors in extraction leading to downstream problems',
    ],
    solutionOverview: 'AI agents that read, understand, and process documents at scale. Auto-classify incoming documents, extract structured data, validate against business rules, and route to the right systems—with human review only for exceptions.',
    capabilities: [
      { title: 'Auto-Classification', description: 'Automatically categorize incoming documents by type, priority, and required action.', metric: '95% accuracy' },
      { title: 'Entity Extraction', description: 'Extract names, dates, amounts, line items, and custom fields from any document format.', metric: '94%+ accuracy' },
      { title: 'Human-in-the-Loop', description: 'Low-confidence extractions are routed to humans for review, continuously training the model.', metric: 'Exception handling' },
      { title: 'Audit Trails', description: 'Complete logging of every document processed—who, what, when, and any modifications.', metric: 'Full compliance' },
    ],
    howItWorks: [
      { step: 1, title: 'Document Intake', description: 'Documents arrive via email, upload portal, or system integration—any format accepted.' },
      { step: 2, title: 'Classification & Extraction', description: 'AI classifies the document type and extracts relevant data fields.' },
      { step: 3, title: 'Validation & Routing', description: 'Extracted data is validated against business rules and routed to appropriate systems.' },
      { step: 4, title: 'Review & Confirm', description: 'Exceptions are flagged for human review; confident extractions flow through automatically.' },
    ],
    integrations: ['SAP', 'Oracle', 'NetSuite', 'QuickBooks', 'Workday', 'SharePoint', 'Google Drive', 'Box'],
    results: [
      { metric: '94%', label: 'extraction accuracy', description: 'Across invoice, contract, and form processing' },
      { metric: '80%', label: 'time savings', description: 'Reduction in manual document handling' },
      { metric: '$2.4M', label: 'annual savings', description: 'Fortune 500 client case study' },
    ],
    faqs: [
      { question: 'What document formats do you support?', answer: 'We process PDFs, scanned images, Word documents, Excel files, emails, and even handwritten forms. Our AI adapts to poor scan quality and inconsistent formatting.' },
      { question: 'How do you achieve 94% accuracy?', answer: 'We combine multiple AI techniques: vision models for layout understanding, language models for context, and validation rules for domain-specific checks. Human review of edge cases continuously improves accuracy.' },
      { question: 'What happens with low-confidence extractions?', answer: 'Documents below our confidence threshold are routed to human reviewers. Their corrections feed back into the model, improving accuracy over time.' },
      { question: 'How do you handle compliance requirements?', answer: 'Full audit trails, configurable retention policies, role-based access, and encryption at rest and in transit. We support SOC 2, HIPAA, and industry-specific requirements.' },
      { question: 'Can you handle high volumes?', answer: 'Yes. Our systems scale horizontally to handle thousands of documents per hour without degradation in accuracy or speed.' },
    ],
    cta: { headline: 'Ready to automate document processing?', description: 'Book a demo to see 94% accuracy document extraction in action.' },
  },
  'context-management': {
    name: 'Context Management',
    category: 'Platform',
    metaTitle: 'Enterprise AI Context Management | MCP-Ready | Agentic Labs',
    metaDescription: 'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation. Enable AI that understands your business.',
    heroTagline: 'AI that actually understands your business',
    description: 'Contextualize enterprise data for AI agents. Knowledge graphs, semantic indexing, and Model Context Protocol (MCP) implementation.',
    problem: 'AI models are powerful but generic. Without business context, they produce hallucinations, irrelevant suggestions, and outputs that miss the mark. 48% of enterprises cite data searchability as their top AI challenge.',
    challenges: [
      'AI lacks understanding of your business processes and terminology',
      'Data fragmented across Salesforce, Workday, SAP, and file storage',
      'Generic AI responses that miss business context',
      'No standard protocol for AI-to-data connectivity',
      'Data quality issues magnified by AI systems',
    ],
    solutionOverview: 'We build the context layer that makes AI useful. Knowledge graphs capture your business relationships, semantic indexing enables intelligent retrieval, and MCP provides standardized access—all without moving your data.',
    capabilities: [
      { title: 'Knowledge Graph Construction', description: 'Map relationships between customers, products, processes, and systems into a queryable graph.', metric: 'Relationship mapping' },
      { title: 'Semantic Indexing for RAG', description: 'Index your documents and data for retrieval-augmented generation with high relevance.', metric: 'High-precision retrieval' },
      { title: 'Model Context Protocol (MCP)', description: 'Implement the emerging standard for AI-to-data connectivity—future-proof your AI infrastructure.', metric: 'MCP-ready' },
      { title: 'Zero-Copy Data Access', description: 'Agents access data in place—no migration, no duplication, no data sprawl.', metric: 'No data movement' },
    ],
    howItWorks: [
      { step: 1, title: 'Data Discovery', description: 'We map your existing data sources—CRM, HCM, ERP, files, databases—and identify context needs.' },
      { step: 2, title: 'Knowledge Graph Build', description: 'Construct a knowledge graph that captures your business entities and relationships.' },
      { step: 3, title: 'MCP Implementation', description: 'Deploy MCP servers that give AI agents secure, contextualized data access.' },
      { step: 4, title: 'Agent Integration', description: 'Connect your AI agents to the context layer for dramatically improved output quality.' },
    ],
    integrations: ['Salesforce', 'Workday', 'Databricks', 'SAP', 'NetSuite', 'SharePoint', 'Google Drive', 'PostgreSQL', 'MongoDB'],
    results: [
      { metric: '3x', label: 'improvement in AI relevance', description: 'Output quality with proper context' },
      { metric: '0', label: 'data migration required', description: 'Access data where it lives' },
      { metric: '80%', label: 'reduction in hallucinations', description: 'Grounded AI responses' },
    ],
    faqs: [
      { question: 'What is the Model Context Protocol (MCP)?', answer: 'MCP is a standardization breakthrough developed by Anthropic that enables AI applications to connect with data sources, tools, and services through a universal interface—similar to how USB-C standardized hardware connectivity. It eliminates custom integrations between AI and each data source.' },
      { question: 'Do we need to move our data?', answer: 'No. Our zero-copy approach accesses data where it lives. We build context layers on top of your existing systems without data migration or duplication.' },
      { question: 'How does context management improve AI accuracy?', answer: 'By grounding AI responses in your actual business data—customer records, product catalogs, process documentation—we eliminate hallucinations and ensure outputs are relevant to your specific context.' },
      { question: 'How long does context setup take?', answer: '4-6 weeks for initial context layer deployment, depending on the number of data sources and complexity of your business model.' },
      { question: 'What happens when our data changes?', answer: 'Context layers stay synchronized with source systems through real-time or scheduled sync, depending on your requirements.' },
    ],
    cta: { headline: 'Ready to contextualize your AI?', description: 'Book a discovery call to see how MCP and knowledge graphs transform AI accuracy.' },
  },
  'agentic-evaluation': {
    name: 'Agentic Evaluation',
    category: 'Platform',
    metaTitle: 'Agentic AI Evaluation & Performance Measurement | Agentic Labs',
    metaDescription: 'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Move from "Is it working?" to proven ROI in 90 days.',
    heroTagline: 'Prove AI ROI in 90 days',
    description: 'Measure what matters: AI agent accuracy, task completion, cost-per-action, and business outcomes. Move from "Is it working?" to proven ROI.',
    problem: '2025 was AI hype. 2026 is "Is it working?" Only 19% of executives report >5% revenue increase from AI. The gap between expectations and realized benefits is massive.',
    challenges: [
      'No clear metrics for AI agent success',
      'Can\'t differentiate AI value from noise',
      'Stakeholders asking "Is it working?" with no answer',
      'Cost per AI action unknown',
      'Business outcomes unattributed to AI investments',
    ],
    solutionOverview: 'A comprehensive evaluation framework that measures AI agent performance against business outcomes. Track task success, accuracy, efficiency, and cost—then prove ROI to stakeholders with hard numbers.',
    capabilities: [
      { title: 'Task Success Rate Tracking', description: 'Measure whether agents complete their assigned goals, with breakdowns by task type and complexity.', metric: 'Goal completion %' },
      { title: 'Accuracy & Hallucination Monitoring', description: 'Track factual correctness, citation accuracy, and hallucination rates across all agent outputs.', metric: 'Truth metrics' },
      { title: 'Cost-Per-Action Analysis', description: 'Know exactly what each AI action costs—API calls, compute, human review—down to the task level.', metric: 'Cost transparency' },
      { title: 'Business Outcome Attribution', description: 'Connect AI agent activity to revenue, cost savings, and throughput improvements.', metric: 'ROI attribution' },
    ],
    howItWorks: [
      { step: 1, title: 'Baseline Measurement', description: 'Establish current metrics for the processes AI will handle—time, cost, accuracy, throughput.' },
      { step: 2, title: 'Instrumentation', description: 'Deploy monitoring on AI agents—every action, decision, and outcome is tracked.' },
      { step: 3, title: 'A/B Testing', description: 'Compare AI-assisted vs baseline processes with statistical rigor.' },
      { step: 4, title: 'Dashboard & Reporting', description: 'Real-time visibility into AI performance, cost, and business impact.' },
    ],
    integrations: ['Datadog', 'Grafana', 'Tableau', 'Power BI', 'Custom dashboards', 'Slack alerts'],
    results: [
      { metric: '90 days', label: 'to ROI proof', description: 'From deployment to demonstrated business value' },
      { metric: '25%', label: 'faster optimization', description: 'With real performance data to guide improvements' },
      { metric: 'Complete', label: 'cost visibility', description: 'Know exactly what AI is costing and delivering' },
    ],
    faqs: [
      { question: 'How do you measure AI agent performance?', answer: 'We track multiple dimensions: task success rate (did the agent complete the goal?), accuracy (was the output correct?), efficiency (how long did it take, at what cost?), and business outcomes (what value did it create?). All metrics are auditable and tied to specific agent actions.' },
      { question: 'What\'s a good task success rate?', answer: 'It depends on the task complexity. For routine tasks (data extraction, routing), we target 95%+. For complex tasks (multi-step workflows, decision-making), 85%+ is strong. We establish baselines and improve iteratively.' },
      { question: 'How often should we evaluate our agents?', answer: 'Continuous monitoring with weekly reviews and monthly deep-dives. Drift detection alerts you when agent performance degrades, triggering investigation and retraining.' },
      { question: 'Can you evaluate existing AI deployments?', answer: 'Yes. We can instrument and evaluate AI systems you\'ve already deployed, providing visibility you may not currently have.' },
      { question: 'How do you handle the "black box" problem?', answer: 'We require explainability in agent decisions. Every action has a logged rationale, enabling audit, debugging, and continuous improvement.' },
    ],
    cta: { headline: 'Ready to prove AI ROI?', description: 'Book a discovery call to see how agentic evaluation delivers measurable business outcomes.' },
  },
  'ai-governance-security': {
    name: 'AI Governance & Security',
    category: 'Governance',
    metaTitle: 'Enterprise AI Governance & Security | SOC 2 Compliant | Agentic Labs',
    metaDescription: 'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. SOC 2 compliant. Your data never leaves your environment.',
    heroTagline: 'Governed AI that enterprises can trust',
    description: 'Bounded autonomy, audit trails, policy enforcement, and compliance-ready AI agents. Deploy autonomous AI with confidence.',
    problem: 'Autonomous AI introduces new risk categories: unauthorized actions, data leakage, compliance violations, liability questions. Without governance, AI projects stall in legal and compliance review.',
    challenges: [
      'Unclear accountability for AI agent actions',
      'Regulatory requirements (SOC 2, HIPAA, GDPR) for AI systems',
      'Risk of unauthorized AI actions outside intended scope',
      'No audit trail for AI decisions',
      'Security concerns blocking AI adoption',
    ],
    solutionOverview: 'A comprehensive governance framework for autonomous AI: bounded autonomy defines what agents can do, escalation paths ensure human oversight, audit trails provide accountability, and policy engines enforce compliance.',
    capabilities: [
      { title: 'Bounded Autonomy Controls', description: 'Define explicit operational limits for each agent—what they can access, what actions they can take, when they must escalate.', metric: 'Policy-enforced' },
      { title: 'Complete Audit Trails', description: 'Every agent action is logged: what was done, when, why, with full context for compliance and debugging.', metric: 'Full traceability' },
      { title: 'Policy Enforcement Engine', description: 'Embed guardrails directly into agents—they literally cannot violate defined policies.', metric: 'Built-in compliance' },
      { title: 'Governance Supervisor Agents', description: 'Deploy AI that monitors other AI—detecting anomalies, policy violations, and drift in real-time.', metric: 'AI-on-AI oversight' },
    ],
    howItWorks: [
      { step: 1, title: 'Risk Assessment', description: 'Identify data sensitivity, regulatory requirements, and risk tolerance for each AI use case.' },
      { step: 2, title: 'Policy Definition', description: 'Define bounded autonomy policies—what agents can do, access, and when to escalate.' },
      { step: 3, title: 'Implementation', description: 'Embed policies into agents with technical controls, not just documentation.' },
      { step: 4, title: 'Monitoring & Audit', description: 'Continuous oversight with governance agents, regular audits, and compliance reporting.' },
    ],
    integrations: ['SOC 2 compliance', 'HIPAA support', 'GDPR compliance', 'Industry-specific regulations', 'Existing GRC tools'],
    results: [
      { metric: 'SOC 2', label: 'compliant', description: 'Type II certification for AI operations' },
      { metric: '100%', label: 'audit coverage', description: 'Every agent action logged and traceable' },
      { metric: '0', label: 'data residency violations', description: 'Your data stays in your environment' },
    ],
    faqs: [
      { question: 'How do you prevent AI hallucinations?', answer: 'Multiple layers: context management grounds responses in real data, bounded autonomy limits agent scope, and validation steps check outputs before action. Our evaluation framework tracks hallucination rates and triggers alerts when they increase.' },
      { question: 'What happens when an agent encounters an edge case?', answer: 'Agents operate within bounded autonomy. Edge cases outside their defined scope trigger escalation to human reviewers. The escalation is logged, the human decision is captured, and the system learns for future similar cases.' },
      { question: 'How do we maintain compliance with autonomous AI?', answer: 'We embed compliance into the agents themselves—they technically cannot access data they shouldn\'t, take actions outside policy, or skip required approvals. Audit trails prove compliance to regulators.' },
      { question: 'Who is liable for agent actions?', answer: 'Governance frameworks establish clear accountability: what the agent is authorized to do, what human approvals are required, and how decisions are logged. This clarity supports legal and regulatory discussions.' },
      { question: 'Do you support industry-specific regulations?', answer: 'Yes. We implement HIPAA for healthcare, GxP for pharma, NERC CIP for energy, ISO standards for industrial, and other industry-specific requirements as needed.' },
    ],
    cta: { headline: 'Ready for governed AI?', description: 'Book a discovery call to see how bounded autonomy and audit trails enable enterprise AI adoption.' },
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function SolutionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solution = solutionsData[slug];

  if (!solution) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Solution Not Found</h1>
          <Link href="/solutions" className="text-sky-500 hover:underline">
            View all solutions
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://agenticlabs.io' },
    { name: 'Solutions', url: 'https://agenticlabs.io/solutions' },
    { name: solution.name, url: `https://agenticlabs.io/solutions/${slug}` },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Schema Markup */}
      <ServiceSchema
        name={solution.name}
        description={solution.description}
        url={`https://agenticlabs.io/solutions/${slug}`}
        provider="Agentic Labs"
        areaServed="United States"
      />
      <FAQSchema faqs={solution.faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`font-medium text-sm transition-colors font-display ${
                    item.href === '/solutions' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 font-display"
              >
                Get In Touch
              </Link>
            </nav>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-700 p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href} className="text-slate-600 hover:text-slate-900 py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm font-display" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-4 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold text-sm text-center transition-colors font-display">
                  Get In Touch
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link></li>
                <li className="text-slate-400">/</li>
                <li><Link href="/solutions" className="text-slate-500 hover:text-slate-700">Solutions</Link></li>
                <li className="text-slate-400">/</li>
                <li className="text-slate-900 font-medium">{solution.name}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-sm font-medium rounded-full mb-4 font-display">
              {solution.category}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4 font-display">
              {solution.name}
            </h1>
            <p className="text-xl sm:text-2xl text-sky-500 font-medium mb-6 font-display">
              {solution.heroTagline}
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mb-8 font-body">
              {solution.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-sky-500/25 font-display"
              >
                Schedule Discovery Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors font-display"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">The Challenge</h2>
                <p className="text-lg text-slate-600 mb-8 font-body">{solution.problem}</p>
                <ul className="space-y-4">
                  {solution.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-body">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Our Solution</h3>
                <p className="text-slate-600 font-body">{solution.solutionOverview}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Key Capabilities</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl font-body">What you get with {solution.name}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.capabilities.map((cap, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-900 font-display">{cap.title}</h3>
                    {cap.metric && (
                      <span className="text-sm font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded font-display">
                        {cap.metric}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 font-body">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">How It Works</h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl font-body">Our implementation process</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.howItWorks.map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-5xl font-bold text-sky-100 absolute -top-2 -left-2 font-display">
                    {step.step}
                  </div>
                  <div className="relative pt-8 pl-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{step.title}</h3>
                    <p className="text-slate-600 text-sm font-body">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Integrations</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl font-body">Works with your existing systems of record</p>
            <div className="flex flex-wrap gap-3">
              {solution.integrations.map((integration, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium text-sm font-display">
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sky-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center font-display">Results We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solution.results.map((result, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2 font-display">{result.metric}</div>
                  <div className="text-sky-100 font-medium mb-2 font-display">{result.label}</div>
                  <p className="text-sky-200 text-sm font-body">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600 mb-12 font-body">Common questions about {solution.name}</p>
            <div className="space-y-6">
              {solution.faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{faq.question}</h3>
                  <p className="text-slate-600 font-body">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 font-display">
              {solution.cta.headline}
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-body">
              {solution.cta.description}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg font-display"
            >
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
