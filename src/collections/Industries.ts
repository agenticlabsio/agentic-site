import type { CollectionConfig } from 'payload'

// Industries collection — mirrors the Industry shape in src/content/industries.ts so the
// seed script, the CMS, and the RSC detail/list pages all share one source of truth.
export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'tagline', 'order', 'updatedAt'],
    group: 'Marketing Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', required: true, index: true },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: { description: 'URL-friendly identifier (e.g., "dealers-distributors")' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'tagline',
          type: 'text',
          required: true,
          admin: { description: 'Short headline metric, e.g. "80% Faster Order Entry"' },
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Emoji icon shown on cards and the detail hero, e.g. "📦"' },
        },
      ],
    },
    {
      name: 'cardDescription',
      type: 'textarea',
      required: true,
      admin: { description: 'Short description used on the industries list card (150–200 chars)' },
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: true,
      admin: { description: 'Longer description shown under the title on the detail page hero' },
    },
    {
      name: 'targetAudience',
      type: 'text',
      required: true,
      admin: {
        description:
          'Target audience description (e.g., "Utilities, energy producers, grid operators ($500M-$10B)")',
      },
    },
    // Market Context
    {
      name: 'marketContext',
      type: 'array',
      label: 'Market Context',
      admin: { description: 'Market statistics and trends for this industry' },
      fields: [
        {
          name: 'stat',
          type: 'text',
          required: true,
          admin: { description: 'e.g., "65% of energy CEOs rank AI as top investment priority"' },
        },
        { name: 'source', type: 'text', admin: { description: 'Source of the statistic' } },
      ],
    },
    // Industry Challenges
    {
      name: 'challenges',
      type: 'array',
      label: 'Industry Challenges',
      fields: [
        { name: 'challenge', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    // AI Solutions for this industry
    {
      name: 'aiSolutions',
      type: 'array',
      label: 'AI Solutions',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'metric',
          type: 'text',
          admin: { description: 'Key metric (e.g., "35% reduction in downtime")' },
        },
      ],
    },
    {
      name: 'integrations',
      type: 'array',
      label: 'Integrations',
      admin: { description: 'Systems this industry commonly runs on' },
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    // Compliance requirements
    {
      name: 'compliance',
      type: 'array',
      label: 'Compliance Requirements',
      admin: { description: 'Industry-specific compliance standards' },
      fields: [
        {
          name: 'standard',
          type: 'text',
          required: true,
          admin: { description: 'e.g., "HIPAA", "NERC CIP", "GxP"' },
        },
        { name: 'description', type: 'textarea' },
      ],
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
          admin: { description: 'e.g., "$50M distributor: $75K-$180K annual labor savings"' },
        },
      ],
    },
    // FAQ (inline — distinct from the general /resources/faq collection)
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ',
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
    // Related Solutions (slugs → /solutions/[slug])
    {
      name: 'relatedSolutions',
      type: 'array',
      label: 'Related Solutions',
      admin: { description: 'Slugs of related solutions, e.g. "document-processing"' },
      fields: [{ name: 'slug', type: 'text', required: true }],
    },
    // SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: { description: 'Page title for search engines (50–60 chars)' },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: { description: 'Page description for search engines (150–160 chars)' },
        },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
        {
          name: 'noIndex',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Prevent this page from being indexed by search engines' },
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
      admin: { position: 'sidebar', description: 'Feature this industry on the industries list' },
    },
  ],
  defaultSort: 'order',
}
