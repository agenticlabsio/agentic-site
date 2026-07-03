import type { CollectionConfig } from 'payload'
import { revalidateContentHooks } from './hooks/revalidateContent'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'publishedAt', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  hooks: revalidateContentHooks('blog-posts'),
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Short summary for listings and SEO (150-200 chars)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Thought Leadership', value: 'thought-leadership' },
        { label: 'Technical Deep-Dive', value: 'technical' },
        { label: 'Industry Insights', value: 'industry' },
        { label: 'Case Study', value: 'case-study' },
        { label: 'How-To Guide', value: 'how-to' },
        { label: 'News & Announcements', value: 'news' },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    // Related content
    {
      name: 'relatedSolutions',
      type: 'relationship',
      relationTo: 'solutions',
      hasMany: true,
    },
    {
      name: 'relatedIndustries',
      type: 'relationship',
      relationTo: 'industries',
      hasMany: true,
    },
    // FAQ for AEO
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQ Section (for AEO)',
      admin: {
        description: 'Add FAQs at the end of the post for AEO optimization',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
    // Key Takeaways
    {
      name: 'keyTakeaways',
      type: 'array',
      label: 'Key Takeaways',
      fields: [
        {
          name: 'takeaway',
          type: 'text',
          required: true,
        },
      ],
    },
    // Publication settings
    {
      name: 'status',
      type: 'select',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Scheduled', value: 'scheduled' },
      ],
      defaultValue: 'draft',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Publication date',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Agentic Labs',
      admin: { position: 'sidebar' },
    },
    // SEO Fields
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          admin: {
            description: 'Page title for search engines (50-60 chars)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          admin: {
            description: 'Page description for search engines (150-160 chars)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'noIndex',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature this post on the homepage/blog listing',
      },
    },
  ],
  defaultSort: '-publishedAt',
}
