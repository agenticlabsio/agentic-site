import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true, // Public read access for frontend
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                { name: 'headline', type: 'text', required: true },
                { name: 'subheadline', type: 'text' },
                { name: 'ctaPrimaryText', type: 'text', defaultValue: 'Get Started' },
                { name: 'ctaPrimaryLink', type: 'text', defaultValue: '#contact' },
                { name: 'ctaSecondaryText', type: 'text', defaultValue: 'Learn More' },
                { name: 'ctaSecondaryLink', type: 'text', defaultValue: '#solutions' },
              ],
            },
          ],
        },
        {
          label: 'Statistics',
          fields: [
            {
              name: 'stats',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Stat', plural: 'Stats' },
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Trust Metrics',
          fields: [
            {
              name: 'trustMetrics',
              type: 'array',
              maxRows: 4,
              labels: { singular: 'Metric', plural: 'Metrics' },
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            { name: 'siteTitle', type: 'text', required: true },
            { name: 'siteDescription', type: 'textarea' },
            { name: 'ogImage', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
  ],
}
