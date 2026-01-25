import { getPayload } from 'payload'
import config from '@payload-config'

const seedProducts = [
  {
    name: 'AgenForge',
    category: 'agents' as const,
    categoryColor: 'blue' as const,
    description: 'Agentic AI platform for orchestrating goal-driven autonomous agents.',
    tagline: 'Build autonomous agents that act',
    order: 1,
  },
  {
    name: 'OpsIQ',
    category: 'platform' as const,
    categoryColor: 'cyan' as const,
    description: 'Operations intelligence with automated insights and root-cause analysis.',
    tagline: 'Intelligence for operations',
    order: 2,
  },
  {
    name: 'OpsTalk',
    category: 'ai-tools' as const,
    categoryColor: 'blue' as const,
    description: 'Secure conversational AI for enterprise knowledge and SOPs.',
    tagline: 'Secure enterprise conversational AI',
    order: 3,
  },
  {
    name: 'OrderGenie',
    category: 'ai-tools' as const,
    categoryColor: 'purple' as const,
    description: 'AI-driven ordering and recommendations for retail and QSR.',
    tagline: 'AI-powered ordering intelligence',
    order: 4,
  },
  {
    name: 'DataMesh+',
    category: 'data' as const,
    categoryColor: 'cyan' as const,
    description:
      'Unified data access with governance and fine-grained line-of-business ownership.',
    tagline: 'Unified data governance',
    order: 5,
  },
  {
    name: 'IntegrateX',
    category: 'integration' as const,
    categoryColor: 'blue' as const,
    description: 'Prebuilt enterprise connectors and pipelines for rapid integrations.',
    tagline: 'Enterprise integration made simple',
    order: 6,
  },
]

const seedSolutions = [
  {
    name: 'Customer Service Automation',
    category: 'Service',
    categoryColor: 'blue' as const,
    description:
      'AI-powered support agents that resolve tickets, reduce response time, and improve CSAT.',
    order: 1,
  },
  {
    name: 'Document Processing',
    category: 'Automation',
    categoryColor: 'purple' as const,
    description:
      'Intelligent extraction, classification, and workflow automation for business documents.',
    order: 2,
  },
  {
    name: 'Predictive Maintenance',
    category: 'Manufacturing',
    categoryColor: 'amber' as const,
    description: 'Reduce downtime with AI-driven equipment monitoring and failure prediction.',
    order: 3,
  },
  {
    name: 'Fraud Detection',
    category: 'Security',
    categoryColor: 'red' as const,
    description: 'Real-time transaction monitoring and anomaly detection to prevent fraud.',
    order: 4,
  },
  {
    name: 'Supply Chain Optimization',
    category: 'Logistics',
    categoryColor: 'teal' as const,
    description: 'Demand forecasting, inventory optimization, and route planning with AI.',
    order: 5,
  },
  {
    name: 'Personalized Marketing',
    category: 'Marketing',
    categoryColor: 'cyan' as const,
    description: 'AI-driven customer segmentation and personalized campaign recommendations.',
    order: 6,
  },
]

const seedFAQ = [
  {
    question: 'What is Agentic Labs?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Agentic Labs specializes in providing customized AI solutions that help businesses drive efficiency, agility, and measurable results. We help enterprises and startups optimize operations, reduce complexity, and stay ahead of market disruptions with AI-driven innovations.',
              },
            ],
          },
        ],
      },
    },
    order: 1,
  },
  {
    question: 'How can AI help my business?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'AI can drive significant improvements in efficiency, streamline operations, and enhance decision-making. At Agentic Labs, we offer AI solutions tailored to your business needs, from automation and decision intelligence to predictive insights, helping you scale faster and smarter.',
              },
            ],
          },
        ],
      },
    },
    order: 2,
  },
  {
    question: 'Why should I trust Agentic Labs with my AI needs?',
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'With over a decade of AI expertise, we have delivered more than 50 solutions to enterprises and startups. Our industry-specific approach ensures that our solutions are not only relevant but also highly impactful. Our focus on measurable outcomes and continuous support ensures that your business can fully leverage the power of AI.',
              },
            ],
          },
        ],
      },
    },
    order: 3,
  },
  {
    question: "What type of businesses can benefit from Agentic Labs' AI solutions?",
    answer: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                text: 'Our AI solutions are suitable for businesses of all sizes, ranging from small startups to large enterprises. We tailor our services to meet the specific needs of your industry and company, ensuring that we address your unique business challenges.',
              },
            ],
          },
        ],
      },
    },
    order: 4,
  },
]

const seedIndustries = [
  { name: 'Healthcare', description: 'AI solutions for healthcare providers and payers.', order: 1 },
  {
    name: 'Software & Platforms',
    description: 'AI-powered tools for software companies.',
    order: 2,
  },
  { name: 'Retail', description: 'Retail and e-commerce AI solutions.', order: 3 },
  { name: 'Manufacturing', description: 'Industrial AI for manufacturing.', order: 4 },
  { name: 'Banking & Insurance', description: 'Financial services AI solutions.', order: 5 },
  { name: 'Supply Chain', description: 'Logistics and supply chain AI.', order: 6 },
]

const seedSiteSettings = {
  hero: {
    headline: 'Enterprise AI that works',
    subheadline: 'Transform your operations with AI-powered automation and intelligence.',
    ctaPrimaryText: 'Book A Demo',
    ctaPrimaryLink: '#contact',
    ctaSecondaryText: 'Learn More',
    ctaSecondaryLink: '#solutions',
  },
  stats: [
    { value: '42%', label: 'Avg. Efficiency Gain' },
    { value: '30%', label: 'Cost Reduction' },
    { value: '+18', label: 'NPS Improvement' },
    { value: 'Weeks', label: 'Time to Value' },
  ],
  trustMetrics: [
    { value: '50+', label: 'Enterprise Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: 'SOC2', label: 'Compliant' },
  ],
  siteTitle: 'Agentic Labs',
  siteDescription:
    'Enterprise AI solutions for operations, automation, and intelligence. Transform your business with AI that works.',
}

const seedNavigation = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '#solutions' },
  ],
  footerNav: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { platform: 'linkedin' as const, url: 'https://linkedin.com/company/agenticlabs' },
    { platform: 'twitter' as const, url: 'https://twitter.com/agenticlabs' },
    { platform: 'github' as const, url: 'https://github.com/agenticlabs' },
  ],
  contactInfo: {
    email: 'hello@agenticlabs.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
  },
}

export async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Seed Products
  console.log('Seeding products...')
  for (const product of seedProducts) {
    try {
      await payload.create({
        collection: 'products',
        data: product,
      })
    } catch (error) {
      console.log(`Product ${product.name} may already exist, skipping...`)
    }
  }
  console.log(`Seeded ${seedProducts.length} products`)

  // Seed Solutions
  console.log('Seeding solutions...')
  for (const solution of seedSolutions) {
    try {
      await payload.create({
        collection: 'solutions',
        data: solution,
      })
    } catch (error) {
      console.log(`Solution ${solution.name} may already exist, skipping...`)
    }
  }
  console.log(`Seeded ${seedSolutions.length} solutions`)

  // Seed FAQ
  console.log('Seeding FAQ...')
  for (const faq of seedFAQ) {
    try {
      await payload.create({
        collection: 'faq',
        data: faq,
      })
    } catch (error) {
      console.log(`FAQ "${faq.question}" may already exist, skipping...`)
    }
  }
  console.log(`Seeded ${seedFAQ.length} FAQ items`)

  // Seed Industries
  console.log('Seeding industries...')
  for (const industry of seedIndustries) {
    try {
      await payload.create({
        collection: 'industries',
        data: industry,
      })
    } catch (error) {
      console.log(`Industry ${industry.name} may already exist, skipping...`)
    }
  }
  console.log(`Seeded ${seedIndustries.length} industries`)

  // Seed Site Settings
  console.log('Seeding site settings...')
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: seedSiteSettings,
    })
    console.log('Seeded site settings')
  } catch (error) {
    console.log('Site settings update failed, may need manual setup')
  }

  // Seed Navigation
  console.log('Seeding navigation...')
  try {
    await payload.updateGlobal({
      slug: 'navigation',
      data: seedNavigation,
    })
    console.log('Seeded navigation')
  } catch (error) {
    console.log('Navigation update failed, may need manual setup')
  }

  console.log('Seeding complete!')
}

// Allow running directly
seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
