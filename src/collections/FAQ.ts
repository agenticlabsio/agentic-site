import type { CollectionConfig } from 'payload'
import { revalidateContentHooks } from './hooks/revalidateContent'

// FAQ collection — mirrors the FaqCategory shape in src/content/faq.ts so the
// seed script, the CMS, and the /resources/faq page all share one source of truth.
// Answers are plain strings (textarea), matching the page and the seed data.
export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
    group: 'Marketing Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: revalidateContentHooks('faq'),
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Agentic AI', value: 'agentic-ai' },
        { label: 'SaaS Replacement', value: 'saas-replacement' },
        { label: 'Service & Process', value: 'service-process' },
        { label: 'Security & Governance', value: 'security-governance' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
  defaultSort: 'order',
}
