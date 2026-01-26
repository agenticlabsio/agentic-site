import type { CollectionConfig } from 'payload'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "dealers-distributors")',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      admin: {
        description: 'Short tagline (e.g., "80% Faster Order Entry")',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Manufacturing', value: 'manufacturing' },
        { label: 'Retail', value: 'retail' },
        { label: 'Energy', value: 'energy' },
        { label: 'Dealers & Distributors', value: 'dealers-distributors' },
        { label: 'Power Electronics & FPGA', value: 'power-electronics-fpga' },
        { label: 'Autonomy & Robotics', value: 'autonomy-robotics' },
        { label: 'Biotech & Pharma Logistics', value: 'biotech-pharma-logistics' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short description for cards (150-200 chars)',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      required: true,
      admin: {
        description: 'Full description for the industry page',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero image for the industry detail page',
      },
    },
    // Market Context
    {
      name: 'marketContext',
      type: 'array',
      label: 'Market Context',
      admin: {
        description: 'Market statistics and trends for this industry',
      },
      fields: [
        {
          name: 'stat',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "65% of energy CEOs rank AI as top investment"',
          },
        },
        {
          name: 'source',
          type: 'text',
          admin: {
            description: 'Source of the statistic',
          },
        },
      ],
    },
    // Industry Challenges
    {
      name: 'challenges',
      type: 'array',
      label: 'Industry Challenges',
      fields: [
        {
          name: 'challenge',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    // AI Solutions for this industry
    {
      name: 'aiSolutions',
      type: 'array',
      label: 'AI Solutions',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'metric',
          type: 'text',
          admin: {
            description: 'Key metric (e.g., "35% reduction in downtime")',
          },
        },
      ],
    },
    // Compliance requirements
    {
      name: 'compliance',
      type: 'array',
      label: 'Compliance Requirements',
      admin: {
        description: 'Industry-specific compliance standards',
      },
      fields: [
        {
          name: 'standard',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "HIPAA", "NERC CIP", "GxP"',
          },
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    // Target Audience
    {
      name: 'targetAudience',
      type: 'text',
      admin: {
        description: 'Target audience description (e.g., "Utilities, energy producers, grid operators ($500M-$10B)")',
      },
    },
    // Related Solutions
    {
      name: 'solutions',
      type: 'relationship',
      relationTo: 'solutions',
      hasMany: true,
      admin: {
        description: 'Related solutions for this industry',
      },
    },
    // Related Integrations
    {
      name: 'integrations',
      type: 'relationship',
      relationTo: 'integrations',
      hasMany: true,
      admin: {
        description: 'Key integrations for this industry',
      },
    },
    // Related FAQ
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      admin: {
        description: 'Related FAQs for this industry',
      },
    },
    // Related Case Studies
    {
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'case-studies',
      hasMany: true,
    },
    // ROI Metrics
    {
      name: 'roiMetrics',
      type: 'array',
      label: 'ROI Metrics',
      fields: [
        {
          name: 'metric',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g., "$50M distributor: $75K-$180K annual labor savings"',
          },
        },
      ],
    },
    // SEO Fields
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      admin: {
        description: 'Search engine optimization settings',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Page title for search engines (50-60 chars)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Page description for search engines (150-160 chars)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Image for social media sharing',
          },
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Prevent this page from being indexed by search engines',
          },
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature this industry on the homepage',
      },
    },
  ],
  defaultSort: 'order',
}
