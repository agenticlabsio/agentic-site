import type { CollectionConfig } from 'payload'

export const Integrations: CollectionConfig = {
  slug: 'integrations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order', 'updatedAt'],
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
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Sales and CRM', value: 'sales-crm' },
        { label: 'Communication', value: 'communication' },
        { label: 'Productivity', value: 'productivity' },
        { label: 'Support', value: 'support' },
        { label: 'Business Intelligence', value: 'bi' },
        { label: 'File Storage', value: 'storage' },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
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
