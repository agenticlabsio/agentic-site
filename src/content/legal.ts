// Legal & policy documents for the public site. Structured content (matching
// the blog.ts / faq.ts pattern) rendered by <LegalDocLayout> through the
// /legal/[slug] dynamic route.
//
// ⚠️ REVIEW BEFORE PUBLISHING. These are industry-standard templates grounded
// in the facts the site already states (SOC 2 Type II, HIPAA support, GDPR/CCPA,
// "your data never leaves your environment"). They are NOT legal advice — have
// counsel review them, and replace every [BRACKETED] placeholder (registered
// address, and the actual sub-processor list) with real values.

export const LEGAL_ENTITY = {
  name: 'Agentic Labs Solutions LLC',
  brand: 'Agentic Labs',
  website: 'agenticlabs.io',
  contactEmail: 'contact@agenticlabs.io',
  governingState: 'State of Delaware',
  governingCourts: 'state and federal courts located in Delaware',
  // TODO: replace with the registered business mailing address before publishing.
  mailingAddress: '[Registered business address]',
  effectiveDate: 'July 4, 2026',
} as const

// Inline **bold** is supported inside `text` and table cells; the renderer
// splits on `**` pairs. Keep it to emphasising defined terms.
export interface LegalBlock {
  type: 'text' | 'list' | 'table'
  text?: string
  items?: string[]
  columns?: string[]
  rows?: string[][]
}

export interface LegalSection {
  heading: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  slug: string
  title: string
  /** Meta description + hero lede. */
  summary: string
  updated: string
  /** Short paragraph shown under the title, above the table of contents. */
  intro: string
  sections: LegalSection[]
}

const E = LEGAL_ENTITY

// ─────────────────────────────────────────────────────────────────────────────
// Privacy Policy
// ─────────────────────────────────────────────────────────────────────────────
const privacy: LegalDocument = {
  slug: 'privacy',
  title: 'Privacy Policy',
  summary:
    'How Agentic Labs collects, uses, and protects personal information across our website and engagements — and why your production data stays in your environment.',
  updated: E.effectiveDate,
  intro: `This Privacy Policy explains how ${E.name} ("${E.brand}," "we," "us," or "our") handles personal information when you visit ${E.website}, contact us, or engage us to design and operate agentic systems. We build for enterprises in regulated industries, so privacy and data governance are core to how we work — not an afterthought.`,
  sections: [
    {
      heading: 'Our data philosophy',
      blocks: [
        {
          type: 'text',
          text: `A defining part of how we deliver: **your production data stays in your environment.** We orchestrate agents on top of your existing infrastructure and systems of record, so we do not need to copy your business data or your customers' data into our systems to do our work. Where we do process personal information, we limit it to what is necessary and describe it below.`,
        },
        {
          type: 'text',
          text: `We do **not** sell personal information, and we do **not** use client or end-user data to train foundation models or any general-purpose model of our own.`,
        },
      ],
    },
    {
      heading: 'Information we collect',
      blocks: [
        {
          type: 'text',
          text: 'We collect the following categories of information:',
        },
        {
          type: 'list',
          items: [
            '**Contact and inquiry data** — name, work email, company, role, and the contents of messages you send through our contact form, email subscription, or when you book a discovery call.',
            '**Engagement data** — information exchanged while scoping and delivering a project, including configuration details, documentation, and credentials you choose to share to grant us access to your systems.',
            '**Website usage data** — IP address, device and browser type, pages viewed, referring URLs, and similar analytics collected through cookies and comparable technologies (see our Cookie Policy).',
            '**Communications** — records of correspondence and support interactions.',
          ],
        },
        {
          type: 'text',
          text: 'We do not intentionally collect special categories of data (such as health or biometric data) through our website. In client engagements, any regulated data (e.g., PHI) is processed within your environment under the terms of our agreement and, where applicable, a Business Associate Agreement or Data Processing Addendum.',
        },
      ],
    },
    {
      heading: 'How we use information',
      blocks: [
        {
          type: 'list',
          items: [
            'Respond to inquiries, schedule calls, and provide the services you request.',
            'Design, deliver, operate, and support agentic systems under our engagements.',
            'Send administrative messages and, where you have opted in, occasional briefings — which you can unsubscribe from at any time.',
            'Operate, secure, and improve our website and business operations.',
            'Comply with legal obligations and enforce our agreements.',
          ],
        },
      ],
    },
    {
      heading: 'Legal bases for processing',
      blocks: [
        {
          type: 'text',
          text: 'Where the GDPR or similar laws apply, we rely on the following legal bases: performance of a contract (delivering services you request); our legitimate interests (operating and securing our business and website); your consent (marketing communications and non-essential cookies); and compliance with legal obligations.',
        },
      ],
    },
    {
      heading: 'AI, agents, and model providers',
      blocks: [
        {
          type: 'text',
          text: 'Our engagements often involve large language models and agentic workflows. When we implement these on your behalf:',
        },
        {
          type: 'list',
          items: [
            'Agents run within, or connected to, **your** environment and systems of record.',
            'We configure enterprise model endpoints so that your inputs and outputs are **not** used by model providers to train their models, consistent with those providers’ enterprise terms.',
            'Every agent action can be logged with full audit trails to support your governance and compliance requirements.',
            'You remain the controller of your data; we act as a processor only to the extent set out in your agreement and DPA.',
          ],
        },
      ],
    },
    {
      heading: 'How we share information',
      blocks: [
        {
          type: 'text',
          text: 'We share personal information only as needed to run our business and deliver our services:',
        },
        {
          type: 'list',
          items: [
            '**Service providers (sub-processors)** who host our website, send email, and provide analytics and infrastructure, under contracts that require appropriate safeguards. See our Sub-processors list.',
            '**Professional advisors** such as legal, accounting, and insurance providers.',
            '**Legal and safety** disclosures where required by law or to protect rights, safety, and property.',
            '**Business transfers** in connection with a merger, acquisition, or sale of assets, subject to this Policy.',
          ],
        },
        {
          type: 'text',
          text: 'We do not sell or rent personal information, and we do not share it for cross-context behavioral advertising.',
        },
      ],
    },
    {
      heading: 'International transfers',
      blocks: [
        {
          type: 'text',
          text: 'We are based in the United States and may process information in the U.S. and other countries. Where we transfer personal information from the EEA, UK, or Switzerland, we use appropriate safeguards such as the European Commission’s Standard Contractual Clauses.',
        },
      ],
    },
    {
      heading: 'Data retention',
      blocks: [
        {
          type: 'text',
          text: 'We keep personal information only for as long as necessary for the purposes described here — to deliver services, meet legal, tax, and accounting obligations, and resolve disputes — after which we delete or anonymize it. Engagement data handled within your environment is retained per your configured retention policies.',
        },
      ],
    },
    {
      heading: 'Your rights',
      blocks: [
        {
          type: 'text',
          text: 'Depending on where you live, you may have the right to access, correct, delete, or port your personal information, to object to or restrict certain processing, and to withdraw consent. California residents have rights under the CCPA/CPRA, including the right to know, delete, correct, and opt out of sale/sharing (we do neither). EEA/UK residents have rights under the GDPR/UK GDPR.',
        },
        {
          type: 'text',
          text: `To exercise any right, email **${E.contactEmail}** (Attn: Privacy). We will respond within the timeframe required by applicable law and will not discriminate against you for exercising your rights. You may also lodge a complaint with your local data protection authority.`,
        },
      ],
    },
    {
      heading: 'Security',
      blocks: [
        {
          type: 'text',
          text: 'We maintain a documented information security program with administrative, technical, and organizational safeguards including encryption in transit (TLS 1.2+) and at rest (AES-256), role-based access controls, least-privilege access, logging, and vendor risk management. We maintain SOC 2 Type II controls and support HIPAA-regulated workloads under a BAA. See our Trust & Security page for details. No method of transmission or storage is perfectly secure, but we work to protect your information and to notify you of incidents as required by law.',
        },
      ],
    },
    {
      heading: "Children's privacy",
      blocks: [
        {
          type: 'text',
          text: 'Our website and services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children.',
        },
      ],
    },
    {
      heading: 'Changes to this Policy',
      blocks: [
        {
          type: 'text',
          text: 'We may update this Policy from time to time. We will post the revised version here and update the "Last updated" date. Material changes will be communicated as required by law.',
        },
      ],
    },
    {
      heading: 'Contact us',
      blocks: [
        {
          type: 'text',
          text: `Questions about this Policy or our privacy practices? Email **${E.contactEmail}** (Attn: Privacy) or write to us at ${E.mailingAddress}.`,
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Terms of Service
// ─────────────────────────────────────────────────────────────────────────────
const terms: LegalDocument = {
  slug: 'terms',
  title: 'Terms of Service',
  summary:
    'The terms that govern your use of the Agentic Labs website and the framework for our professional engagements.',
  updated: E.effectiveDate,
  intro: `These Terms of Service ("Terms") govern your access to and use of the ${E.website} website and any content, materials, or resources we make available (the "Site"). Professional services we deliver are governed by a separate written agreement (a Master Services Agreement or Statement of Work); where that agreement conflicts with these Terms, the agreement controls for those services. By using the Site, you agree to these Terms.`,
  sections: [
    {
      heading: 'Who we are',
      blocks: [
        {
          type: 'text',
          text: `The Site is operated by ${E.name} ("${E.brand}," "we," "us," or "our"). You can reach us at ${E.contactEmail}.`,
        },
      ],
    },
    {
      heading: 'Use of the Site',
      blocks: [
        {
          type: 'text',
          text: 'You may use the Site for lawful, informational, and business purposes. You agree not to:',
        },
        {
          type: 'list',
          items: [
            'Use the Site in violation of any law or these Terms, or in a way that infringes the rights of others.',
            'Attempt to gain unauthorized access to, probe, scan, or disrupt the Site or its underlying infrastructure.',
            'Introduce malware, or scrape or harvest content or data except as expressly permitted.',
            'Misrepresent your identity or affiliation, or use the Site to send unsolicited communications.',
          ],
        },
      ],
    },
    {
      heading: 'Professional services',
      blocks: [
        {
          type: 'text',
          text: 'Any design, implementation, or operation of agentic systems is provided under a separate written agreement that defines scope, fees, deliverables, intellectual property, warranties, data protection (including a DPA where applicable), and limitations of liability. Nothing on the Site constitutes an offer to provide services on particular terms, and marketing statements do not create binding commitments. Where our engagements involve AI systems, our Acceptable Use Policy also applies.',
        },
      ],
    },
    {
      heading: 'Intellectual property',
      blocks: [
        {
          type: 'text',
          text: `The Site and its content — text, graphics, logos, and the ${E.brand} name and marks — are owned by us or our licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to view the Site for your internal, informational use. You may not copy, modify, distribute, or create derivative works from the Site without our permission, except as allowed by applicable law. Ownership of deliverables produced under an engagement is governed by the applicable services agreement.`,
        },
      ],
    },
    {
      heading: 'Third-party links',
      blocks: [
        {
          type: 'text',
          text: 'The Site may link to third-party websites and resources. We do not control and are not responsible for their content, policies, or practices. Your use of third-party sites is at your own risk and subject to their terms.',
        },
      ],
    },
    {
      heading: 'Disclaimers',
      blocks: [
        {
          type: 'text',
          text: 'The Site and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Content is for general information only and is not professional, legal, or financial advice. We do not warrant that the Site will be uninterrupted, error-free, or secure.',
        },
      ],
    },
    {
      heading: 'Limitation of liability',
      blocks: [
        {
          type: 'text',
          text: 'To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Site. Our total liability for any claim relating to the Site will not exceed one hundred U.S. dollars ($100). Liability arising under a professional services agreement is governed by that agreement.',
        },
      ],
    },
    {
      heading: 'Indemnification',
      blocks: [
        {
          type: 'text',
          text: 'You agree to indemnify and hold us harmless from claims, damages, and expenses (including reasonable legal fees) arising from your misuse of the Site or violation of these Terms.',
        },
      ],
    },
    {
      heading: 'Governing law and disputes',
      blocks: [
        {
          type: 'text',
          text: `These Terms are governed by the laws of the ${E.governingState}, without regard to its conflict-of-laws rules. You agree to the exclusive jurisdiction of the ${E.governingCourts} for any dispute not subject to a separate agreement, and to attempt to resolve disputes informally by contacting us first.`,
        },
      ],
    },
    {
      heading: 'Changes to these Terms',
      blocks: [
        {
          type: 'text',
          text: 'We may update these Terms from time to time. The "Last updated" date reflects the latest version, and your continued use of the Site after changes take effect constitutes acceptance.',
        },
      ],
    },
    {
      heading: 'Contact us',
      blocks: [
        {
          type: 'text',
          text: `Questions about these Terms? Email **${E.contactEmail}** (Attn: Legal).`,
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Cookie Policy
// ─────────────────────────────────────────────────────────────────────────────
const cookies: LegalDocument = {
  slug: 'cookies',
  title: 'Cookie Policy',
  summary:
    'What cookies and similar technologies we use on the Agentic Labs website, why, and how to control them.',
  updated: E.effectiveDate,
  intro: `This Cookie Policy explains how ${E.name} uses cookies and similar technologies on ${E.website}. It should be read together with our Privacy Policy.`,
  sections: [
    {
      heading: 'What cookies are',
      blocks: [
        {
          type: 'text',
          text: 'Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and understand how the site is used. We also use similar technologies such as local storage and pixels; we refer to all of these as "cookies" here.',
        },
      ],
    },
    {
      heading: 'Types of cookies we use',
      blocks: [
        {
          type: 'table',
          columns: ['Category', 'Purpose', 'Consent'],
          rows: [
            [
              'Strictly necessary',
              'Enable core functions such as page navigation, security, and form submission. The site cannot work properly without these.',
              'Not required',
            ],
            [
              'Preferences',
              'Remember choices you make to personalize your experience.',
              'Optional',
            ],
            [
              'Analytics',
              'Help us understand how visitors use the site so we can improve it, in aggregate.',
              'Optional',
            ],
          ],
        },
      ],
    },
    {
      heading: 'How we use cookies',
      blocks: [
        {
          type: 'list',
          items: [
            'Keep the site secure and operating correctly.',
            'Remember your preferences between visits.',
            'Measure and improve site performance and content in aggregate.',
          ],
        },
        {
          type: 'text',
          text: 'We do not use cookies for cross-context behavioral advertising, and we do not sell information collected through cookies.',
        },
      ],
    },
    {
      heading: 'Managing your preferences',
      blocks: [
        {
          type: 'text',
          text: 'You can control non-essential cookies through any consent banner we present and through your browser settings, which let you block or delete cookies. Blocking some cookies may affect how parts of the site function. Most browsers also honor the Global Privacy Control (GPC) signal.',
        },
      ],
    },
    {
      heading: 'Changes to this Policy',
      blocks: [
        {
          type: 'text',
          text: 'We may update this Cookie Policy as our practices or the law change. The "Last updated" date reflects the current version.',
        },
      ],
    },
    {
      heading: 'Contact us',
      blocks: [
        {
          type: 'text',
          text: `Questions about our use of cookies? Email **${E.contactEmail}** (Attn: Privacy).`,
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Acceptable Use Policy
// ─────────────────────────────────────────────────────────────────────────────
const acceptableUse: LegalDocument = {
  slug: 'acceptable-use',
  title: 'Acceptable Use Policy',
  summary:
    'The uses that are prohibited when working with Agentic Labs services and the agentic systems we deliver.',
  updated: E.effectiveDate,
  intro: `This Acceptable Use Policy ("AUP") applies to your use of ${E.brand} services and any agentic systems we design, deliver, or operate for you. It exists to keep our systems — and the AI capabilities within them — safe, lawful, and reliable. Capitalized terms not defined here have the meaning given in your services agreement. We may update this AUP to address new risks; the current version always applies.`,
  sections: [
    {
      heading: 'General prohibitions',
      blocks: [
        {
          type: 'text',
          text: 'You may not use our services, or agentic systems we deliver, to:',
        },
        {
          type: 'list',
          items: [
            'Violate any law, regulation, or third-party right, including intellectual property, privacy, and export-control laws.',
            'Access, interfere with, or disrupt systems, networks, or data without authorization.',
            'Distribute malware, or engage in phishing, fraud, or deceptive practices.',
            'Infringe, misappropriate, or violate the intellectual property or confidentiality rights of others.',
            'Circumvent usage limits, security controls, or access restrictions.',
          ],
        },
      ],
    },
    {
      heading: 'AI-specific prohibited uses',
      blocks: [
        {
          type: 'text',
          text: 'Because our systems use large language models and autonomous agents, you additionally may not use them to:',
        },
        {
          type: 'list',
          items: [
            'Make **fully automated, consequential decisions without appropriate human oversight** — including decisions with legal or similarly significant effects on people in employment (hiring, firing, promotion), credit, insurance, housing, education, or access to essential services.',
            'Provide medical, legal, or financial advice presented as coming from a licensed professional, or make automated clinical or diagnostic decisions, without qualified human review.',
            'Generate or facilitate disinformation, non-consensual, sexual, or child-exploitative content, harassment, or content that promotes self-harm or violence.',
            'Create content designed to impersonate a person or organization in order to deceive, or to evade detection of AI-generated content where disclosure is required.',
            'Develop weapons, or plan or facilitate physical harm, or engage in unlawful surveillance or biometric identification of individuals without a lawful basis.',
            'Input regulated or highly sensitive data (such as PHI, PCI cardholder data, or government-issued identifiers) into systems that have not been explicitly configured and contracted to handle it.',
          ],
        },
      ],
    },
    {
      heading: 'Your responsibilities',
      blocks: [
        {
          type: 'list',
          items: [
            'You are responsible for the configuration, instructions, prompts, and testing of agents you operate or customize, and for the outputs and actions they produce within your environment.',
            'You must keep human oversight and escalation paths in place for high-stakes workflows, consistent with the governance controls we implement together.',
            'You must maintain the confidentiality of credentials and access we are granted, and promptly report suspected misuse or security incidents.',
            'You must ensure your own use complies with laws applicable to you, including the EU AI Act and sector-specific regulations where relevant.',
          ],
        },
      ],
    },
    {
      heading: 'Enforcement',
      blocks: [
        {
          type: 'text',
          text: `We may investigate suspected violations and take appropriate action, including suspending access, disabling offending functionality, or terminating the applicable engagement in accordance with your agreement. We will use reasonable efforts to notify you first where practical and lawful. To report a violation, contact **${E.contactEmail}** (Attn: Trust & Safety).`,
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Data Processing Addendum
// ─────────────────────────────────────────────────────────────────────────────
const dpa: LegalDocument = {
  slug: 'dpa',
  title: 'Data Processing Addendum',
  summary:
    'How Agentic Labs processes personal data on behalf of customers, in support of GDPR, UK GDPR, and CCPA compliance.',
  updated: E.effectiveDate,
  intro: `This Data Processing Addendum ("DPA") describes how ${E.name} processes personal data on behalf of customers in connection with our services, and forms part of the services agreement between you (the "Customer") and ${E.brand}. This page summarizes our standard terms; a countersigned DPA is available on request via ${E.contactEmail}.`,
  sections: [
    {
      heading: 'Roles of the parties',
      blocks: [
        {
          type: 'text',
          text: 'For personal data processed in connection with the services, the Customer is the **controller** (or processor acting on behalf of its own controllers) and Agentic Labs is the **processor** (or sub-processor). Each party complies with the data protection laws applicable to it, including the GDPR, UK GDPR, and the CCPA/CPRA as a "service provider."',
        },
        {
          type: 'text',
          text: 'Because our delivery model keeps your production data within your environment, Agentic Labs processes limited personal data and only on your documented instructions, as set out in the services agreement and this DPA.',
        },
      ],
    },
    {
      heading: 'Scope and processing details',
      blocks: [
        {
          type: 'table',
          columns: ['Item', 'Details'],
          rows: [
            [
              'Subject matter',
              'Design, delivery, and operation of agentic systems as described in the applicable Statement of Work.',
            ],
            [
              'Duration',
              'The term of the services agreement, plus any legally required retention period.',
            ],
            [
              'Nature and purpose',
              'Configuration, integration, orchestration, monitoring, and support of AI agents within the Customer environment.',
            ],
            [
              'Types of personal data',
              'As determined and controlled by the Customer; typically business contact data and any data present in the Customer systems the agents access.',
            ],
            [
              'Categories of data subjects',
              'As determined by the Customer — e.g., the Customer’s personnel, customers, and end users.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Our obligations as processor',
      blocks: [
        {
          type: 'list',
          items: [
            'Process personal data only on the Customer’s documented instructions, including for international transfers, unless required otherwise by law.',
            'Ensure personnel authorized to process personal data are bound by confidentiality.',
            'Implement appropriate technical and organizational security measures (see below and our Trust & Security page).',
            'Not sell or share personal data, and not use it for our own purposes or to train general-purpose models.',
            'Assist the Customer, taking into account the nature of processing, with data subject requests and with security, breach notification, and data protection impact assessments.',
            'Delete or return personal data at the end of the services, except where retention is legally required.',
            'Make available information necessary to demonstrate compliance and allow for audits, subject to reasonable confidentiality and security conditions.',
          ],
        },
      ],
    },
    {
      heading: 'Security measures',
      blocks: [
        {
          type: 'text',
          text: 'We maintain a documented security program aligned with SOC 2 Type II, including encryption in transit (TLS 1.2+) and at rest (AES-256), role-based and least-privilege access, audit logging of agent actions, vulnerability management, and incident response. For HIPAA-regulated workloads we enter into a Business Associate Agreement. Full details are on our Trust & Security page.',
        },
      ],
    },
    {
      heading: 'Sub-processors',
      blocks: [
        {
          type: 'text',
          text: 'The Customer authorizes Agentic Labs to engage the sub-processors listed on our Sub-processors page to support the services. We impose data protection obligations on sub-processors no less protective than those in this DPA and remain responsible for their performance. We provide a mechanism to receive notice of new sub-processors and a reasonable opportunity to object.',
        },
      ],
    },
    {
      heading: 'International transfers',
      blocks: [
        {
          type: 'text',
          text: 'Where processing involves transfers of personal data from the EEA, UK, or Switzerland to a country without an adequacy decision, the parties rely on the European Commission’s Standard Contractual Clauses (and the UK Addendum, as applicable), which are incorporated by reference into the signed DPA.',
        },
      ],
    },
    {
      heading: 'Data breach notification',
      blocks: [
        {
          type: 'text',
          text: 'We will notify the Customer without undue delay after becoming aware of a personal data breach affecting Customer personal data, and will provide the information reasonably needed for the Customer to meet its own notification obligations.',
        },
      ],
    },
    {
      heading: 'Requesting a signed DPA',
      blocks: [
        {
          type: 'text',
          text: `To execute a DPA (including SCCs and, where relevant, a BAA), contact **${E.contactEmail}** (Attn: Legal). We are glad to complete security questionnaires and provide our SOC 2 report under NDA.`,
        },
      ],
    },
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-processors
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ VERIFY THIS LIST against the actual vendor stack before publishing. The
// entries below are representative of a company like this; confirm each one and
// add/remove as appropriate. Cloudflare is confirmed (the site runs on it).
const subprocessors: LegalDocument = {
  slug: 'subprocessors',
  title: 'Sub-processors',
  summary:
    'The third parties that may process limited personal data on behalf of Agentic Labs, and how to subscribe to changes.',
  updated: E.effectiveDate,
  intro: `To deliver and operate our website and services, ${E.name} engages a small number of trusted sub-processors. This page lists them and the purpose of each. Because our delivery model keeps Customer production data within the Customer’s own environment, most Customer data is never shared with these providers. We update this list before adding a new sub-processor.`,
  sections: [
    {
      heading: 'Current sub-processors',
      blocks: [
        {
          type: 'table',
          columns: ['Sub-processor', 'Purpose', 'Location'],
          rows: [
            [
              'Cloudflare, Inc.',
              'Website hosting, edge compute, CDN, and DDoS protection',
              'United States',
            ],
            [
              '[Email/CRM provider]',
              'Delivery of transactional and subscription email and inquiry management',
              '[Location]',
            ],
            ['[Analytics provider]', 'Aggregate website usage analytics', '[Location]'],
            [
              '[Enterprise LLM provider(s)]',
              'Model inference for agentic workflows, under enterprise terms with no training on your data',
              '[Location]',
            ],
          ],
        },
        {
          type: 'text',
          text: 'Entries shown in brackets are placeholders to be confirmed against our current vendor stack. Within client engagements, any additional sub-processors are identified and authorized in the applicable Statement of Work and DPA.',
        },
      ],
    },
    {
      heading: 'Notice of changes',
      blocks: [
        {
          type: 'text',
          text: `We will update this page and, for customers who subscribe, provide advance notice before a new sub-processor begins processing personal data, along with a reasonable opportunity to object. To subscribe to sub-processor change notifications, email **${E.contactEmail}** (Attn: Privacy).`,
        },
      ],
    },
  ],
}

export const legalDocuments: LegalDocument[] = [
  privacy,
  terms,
  cookies,
  acceptableUse,
  dpa,
  subprocessors,
]

export function getLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((d) => d.slug === slug)
}
