import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import { seedSolutions } from '@/seed'

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

export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Seeding is disabled in production' }, { status: 403 })
  }

  const payload = await getPayload({ config })
  const results: string[] = []

  // Seed Solutions (from the canonical content module)
  results.push(...(await seedSolutions(payload)))

  // Seed FAQ
  for (const faq of seedFAQ) {
    try {
      // Minimal Lexical root literal doesn't include every field the generated type wants.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await payload.create({ collection: 'faq', data: faq as any })
      results.push(`Created FAQ: ${faq.question}`)
    } catch {
      results.push(`FAQ "${faq.question}" may already exist, skipping...`)
    }
  }

  // Seed Industries
  for (const industry of seedIndustries) {
    try {
      // Industries has drafts enabled; the partial seed literal needs a loose cast here.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await payload.create({ collection: 'industries', data: industry as any })
      results.push(`Created industry: ${industry.name}`)
    } catch {
      results.push(`Industry ${industry.name} may already exist, skipping...`)
    }
  }

  // Seed Site Settings
  try {
    await payload.updateGlobal({ slug: 'site-settings', data: seedSiteSettings })
    results.push('Seeded site settings')
  } catch {
    results.push('Site settings update failed')
  }

  // Seed Navigation
  try {
    await payload.updateGlobal({ slug: 'navigation', data: seedNavigation })
    results.push('Seeded navigation')
  } catch {
    results.push('Navigation update failed')
  }

  return NextResponse.json({ success: true, results })
}
