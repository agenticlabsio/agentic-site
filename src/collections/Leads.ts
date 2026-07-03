import type { CollectionConfig } from 'payload'

const CSV_COLUMNS = ['email', 'source', 'page', 'consent', 'createdAt'] as const

function csvCell(value: unknown): string {
  const s = value == null ? '' : String(value)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

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
  // Admin-only CSV export, reachable at GET /api/leads/export.
  endpoints: [
    {
      path: '/export',
      method: 'get',
      handler: async (req) => {
        if (!req.user) {
          return Response.json({ error: 'Unauthorized' }, { status: 401 })
        }
        const { docs } = await req.payload.find({
          collection: 'leads',
          limit: 0,
          depth: 0,
          pagination: false,
          sort: '-createdAt',
        })
        const rows = docs.map((doc) =>
          CSV_COLUMNS.map((col) => csvCell((doc as unknown as Record<string, unknown>)[col])).join(
            ',',
          ),
        )
        const csv = [CSV_COLUMNS.join(','), ...rows].join('\n')
        return new Response(csv, {
          headers: {
            'Content-Type': 'text/csv; charset=utf-8',
            'Content-Disposition': 'attachment; filename="leads.csv"',
          },
        })
      },
    },
  ],
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
      unique: true,
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
