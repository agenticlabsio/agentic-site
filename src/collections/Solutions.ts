import type { CollectionConfig } from 'payload'
import { revalidateContentHooks } from './hooks/revalidateContent'

// Solutions collection — mirrors the Solution shape in src/content/types.ts so the
// seed script, the CMS, and the RSC detail/list pages all share one source of truth.
export const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'category', 'order', 'updatedAt'],
    group: 'Marketing Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: revalidateContentHooks('solutions'),
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
          admin: { description: 'URL-friendly identifier (e.g., "intelligent-agents")' },
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Core', value: 'Core' },
        { label: 'Operations', value: 'Operations' },
        { label: 'Platform', value: 'Platform' },
        { label: 'Governance', value: 'Governance' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'Short description used on cards and as the SEO fallback (150–200 chars)' },
    },
    {
      name: 'heroTagline',
      type: 'text',
      required: true,
      admin: { description: 'One-line headline under the title on the detail page' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'cardMetric',
          type: 'text',
          required: true,
          admin: { description: 'Card headline metric, e.g. "60%"' },
        },
        {
          name: 'cardMetricLabel',
          type: 'text',
          required: true,
          admin: { description: 'Card metric label, e.g. "faster resolution"' },
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Card Feature Bullets',
      admin: { description: 'Four short capability bullets shown on the solutions list card' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    // Problem / challenge section
    { name: 'problem', type: 'textarea', required: true, label: 'Problem Statement' },
    {
      name: 'challenges',
      type: 'array',
      label: 'Industry Challenges',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'solutionOverview', type: 'textarea', required: true },
    // Capabilities
    {
      name: 'capabilities',
      type: 'array',
      label: 'Key Capabilities',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'metric',
          type: 'text',
          admin: { description: 'e.g., "94% accuracy" or "60% faster"' },
        },
      ],
    },
    // How it works
    {
      name: 'howItWorks',
      type: 'array',
      label: 'How It Works',
      fields: [
        { name: 'step', type: 'number', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'integrations',
      type: 'array',
      label: 'Integrations',
      admin: { description: 'Systems this solution integrates with' },
      fields: [{ name: 'name', type: 'text', required: true }],
    },
    // Results
    {
      name: 'results',
      type: 'array',
      label: 'Results We Deliver',
      fields: [
        { name: 'metric', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
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
    {
      name: 'cta',
      type: 'group',
      label: 'Call To Action',
      fields: [
        { name: 'headline', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    {
      name: 'caseStudyLink',
      type: 'text',
      admin: { description: 'Optional path to a related case study, e.g. /case-studies/customer-service' },
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
      admin: { position: 'sidebar', description: 'Feature this solution on the solutions list' },
    },
  ],
  defaultSort: 'order',
}
