import type { CollectionConfig } from 'payload'
import { revalidateContentHooks } from './hooks/revalidateContent'

// CaseStudies collection — mirrors the CaseStudy shape in src/content/case-studies.ts
// so the seed script, the CMS, and the RSC detail/list pages share one source of truth.
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'slug', 'order', 'updatedAt'],
    group: 'Marketing Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: revalidateContentHooks('case-studies'),
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, index: true },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
          admin: { description: 'URL-friendly identifier (e.g., "document-processing")' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'industry', type: 'text', required: true },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          admin: { description: 'Detail-page subtitle, e.g. "for a Mid-Market Bank"' },
        },
      ],
    },
    // Card (list page) — fields may diverge slightly from the detail title/subtitle/metrics.
    {
      name: 'card',
      type: 'group',
      label: 'List Card',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: { description: 'Card title on the list page (may differ from the detail title)' },
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          admin: { description: 'Shorter card subtitle, e.g. "Mid-Market Bank"' },
        },
        {
          name: 'metrics',
          type: 'array',
          label: 'Card Metrics',
          maxRows: 3,
          admin: { description: 'Metrics shown on the list card (value + label only)' },
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },
    // Key results metrics on the detail page.
    {
      name: 'metrics',
      type: 'array',
      label: 'Key Results',
      maxRows: 3,
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        { name: 'description', type: 'text', required: true },
      ],
    },
    // The Challenge
    {
      name: 'challenge',
      type: 'group',
      label: 'The Challenge',
      fields: [
        { name: 'intro', type: 'textarea', required: true },
        {
          name: 'painPoints',
          type: 'array',
          label: 'Pain Points',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
    // The Solution
    {
      name: 'solution',
      type: 'group',
      label: 'The Solution',
      fields: [
        { name: 'intro', type: 'textarea', required: true },
        {
          name: 'components',
          type: 'array',
          label: 'Solution Components',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
        { name: 'timeline', type: 'text', required: true },
      ],
    },
    // The Results (before / after)
    {
      name: 'results',
      type: 'group',
      label: 'The Results',
      fields: [
        {
          name: 'before',
          type: 'array',
          label: 'Before',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        {
          name: 'after',
          type: 'array',
          label: 'After',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
    // Quote
    {
      name: 'quote',
      type: 'group',
      label: 'Quote',
      fields: [
        { name: 'text', type: 'textarea', required: true },
        { name: 'author', type: 'text', required: true },
      ],
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
      admin: { position: 'sidebar', description: 'Feature this case study on the list page' },
    },
  ],
  defaultSort: 'order',
}
