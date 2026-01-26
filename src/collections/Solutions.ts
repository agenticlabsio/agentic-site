import type { CollectionConfig } from 'payload'

export const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'category', 'order', 'updatedAt'],
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
      index: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g., "intelligent-agents")',
      },
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      admin: {
        description: 'Short tagline for the solution (e.g., "60% Faster Resolution")',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Intelligent Agents', value: 'agents' },
        { label: 'Customer Service', value: 'customer-service' },
        { label: 'Document Processing', value: 'document-processing' },
        { label: 'Context Management', value: 'context-management' },
        { label: 'Agentic Evaluation', value: 'agentic-evaluation' },
        { label: 'AI Governance', value: 'ai-governance' },
      ],
    },
    {
      name: 'categoryColor',
      type: 'select',
      required: true,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Purple', value: 'purple' },
        { label: 'Cyan', value: 'cyan' },
        { label: 'Teal', value: 'teal' },
        { label: 'Amber', value: 'amber' },
        { label: 'Red', value: 'red' },
      ],
      defaultValue: 'purple',
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
        description: 'Full description for the solution page',
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
        description: 'Hero image for the solution detail page',
      },
    },
    // Problem Section
    {
      name: 'challenges',
      type: 'array',
      label: 'Industry Challenges',
      admin: {
        description: 'List of challenges this solution addresses',
      },
      fields: [
        {
          name: 'challenge',
          type: 'text',
          required: true,
        },
      ],
    },
    // Features/Capabilities
    {
      name: 'capabilities',
      type: 'array',
      label: 'Key Capabilities',
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
            description: 'e.g., "94% accuracy" or "60% faster"',
          },
        },
      ],
    },
    // How It Works
    {
      name: 'processSteps',
      type: 'array',
      label: 'How It Works',
      fields: [
        {
          name: 'step',
          type: 'number',
          required: true,
        },
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
      ],
    },
    // Integrations
    {
      name: 'integrations',
      type: 'relationship',
      relationTo: 'integrations',
      hasMany: true,
      admin: {
        description: 'Related integrations for this solution',
      },
    },
    // Related FAQ
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      admin: {
        description: 'Related FAQs for this solution',
      },
    },
    // Related Case Studies
    {
      name: 'caseStudies',
      type: 'relationship',
      relationTo: 'case-studies',
      hasMany: true,
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
        description: 'Feature this solution on the homepage',
      },
    },
  ],
  defaultSort: 'order',
}
