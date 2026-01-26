import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
    {
      name: 'answerPlainText',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Plain text version of the answer for FAQ schema (no formatting)',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Agentic AI', value: 'agentic-ai' },
        { label: 'SaaS Replacement', value: 'saas-replacement' },
        { label: 'Industry - Healthcare', value: 'industry-healthcare' },
        { label: 'Industry - Manufacturing', value: 'industry-manufacturing' },
        { label: 'Industry - Retail', value: 'industry-retail' },
        { label: 'Industry - Energy', value: 'industry-energy' },
        { label: 'Industry - Distribution', value: 'industry-distribution' },
        { label: 'Industry - FPGA/Electronics', value: 'industry-fpga' },
        { label: 'Industry - Robotics', value: 'industry-robotics' },
        { label: 'Industry - Pharma/Biotech', value: 'industry-pharma' },
        { label: 'Service & Process', value: 'service-process' },
        { label: 'Integration', value: 'integration' },
        { label: 'Security & Governance', value: 'security-governance' },
        { label: 'General', value: 'general' },
      ],
      defaultValue: 'general',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show this FAQ on the homepage',
      },
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
