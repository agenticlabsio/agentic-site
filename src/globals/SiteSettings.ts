import type { GlobalConfig } from 'payload'
import { revalidateGlobalHook } from '@/collections/hooks/revalidateContent'

// Single source of truth for the site chrome — nav, footer, brand tagline,
// and default SEO fallback description — so editors can update them from
// the admin UI instead of a code deploy. Consumed by the unified SiteHeader
// and Footer via getSiteSettings() in src/lib/payload.ts.
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Site Configuration',
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  hooks: revalidateGlobalHook('site-settings'),
  fields: [
    {
      name: 'brandTagline',
      type: 'text',
      required: true,
      admin: {
        description: 'Short brand line shown in the footer, under the logo.',
      },
    },
    {
      name: 'defaultSeoDescription',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Fallback meta description for pages that do not set their own.',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Primary Navigation',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'ctaButton',
      type: 'group',
      label: 'Header CTA Button',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'footerLinkGroups',
      type: 'array',
      label: 'Footer Link Groups',
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'X (Twitter)', value: 'x' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
