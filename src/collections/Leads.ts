import type { CollectionConfig } from 'payload'

// Captured email leads from the site's CTA / footer signup forms.
// Publicly writable (anyone can submit) but only readable by authenticated
// admins — the inverse of the read-only content collections.
export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'page', 'createdAt'],
    group: 'Content',
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'source',
      type: 'select',
      defaultValue: 'cta-section',
      options: [
        { label: 'CTA Section', value: 'cta-section' },
        { label: 'Footer', value: 'footer' },
        { label: 'Hero', value: 'hero' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'page',
      type: 'text',
      admin: { position: 'sidebar', description: 'Path the lead was captured from' },
    },
    {
      name: 'consent',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  defaultSort: '-createdAt',
}
