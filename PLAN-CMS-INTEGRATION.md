# CMS Integration Plan for Agentic Site

## Executive Summary

**Recommendation: Payload CMS 3.0** - The only fully open-source, self-hostable CMS with native Next.js integration.

### Why Payload over Sanity?

| Criteria | Payload CMS 3.0 | Sanity v3 |
|----------|-----------------|-----------|
| **Open Source** | Fully MIT licensed | Studio only (Content Lake is cloud-only) |
| **Self-Hosting** | Complete control | **Not possible** for data layer |
| **Next.js Integration** | Native - installs in `/app` folder | External API calls |
| **Cost at Scale** | Infrastructure only (~$20-50/mo small) | $15/user/mo + API quotas |
| **Vendor Lock-in** | Zero | Medium-High (data in Sanity Cloud) |
| **Requirements** | Next.js 15+ | Any framework |

**Critical Insight**: Sanity is NOT truly self-hostable. The Content Lake (database) is proprietary cloud infrastructure. Only Sanity Studio (the editing UI) is open source. For true data ownership, Payload is the only option.

---

## Current State Analysis

### Tech Stack
- Next.js 16.1.1 (exceeds Payload's Next.js 15 requirement)
- React 19.1.0
- TypeScript 5
- Tailwind CSS v4
- Three.js for 3D effects

### Content Currently Hardcoded (10 content types)

| Content Type | Items | Location | Priority |
|--------------|-------|----------|----------|
| Products | 6 | `ProductsSection.tsx` | High |
| Solutions | 6 | `SolutionsSection.tsx` | High |
| Case Studies | 6 | `CaseStudiesSection.tsx` | High |
| FAQ | 4 | `FAQSection.tsx` | High |
| Industries | 6 | `IndustriesSection.tsx` | Medium |
| Hero Stats | 4 | `HeroSection.tsx` | Medium |
| Integration Logos | 36+ | `products/page.tsx` | Medium |
| Hero Headlines | 3 | `HeroSection.tsx` | Low |
| Navigation Links | ~10 | `NavBar.tsx`, `Footer.tsx` | Low |
| Trust Metrics | 4 | `WhyTrustUsSection.tsx` | Low |

---

## Architecture Decision

### Recommended: Payload in Same Repo (Route Groups)

```
agentic-site/
├── src/
│   ├── app/
│   │   ├── (frontend)/           # Marketing site routes (route group)
│   │   │   ├── page.tsx
│   │   │   ├── products/
│   │   │   └── layout.tsx
│   │   └── (payload)/            # Payload admin panel (route group)
│   │       └── admin/[[...segments]]/page.tsx
│   ├── collections/              # Payload content schemas
│   ├── globals/                  # Single-instance content
│   ├── components/               # Existing components
│   ├── lib/
│   │   └── payload.ts            # Data fetching utilities
│   └── payload.config.ts         # Payload configuration
├── payload-types.ts              # Auto-generated types
└── package.json
```

**Why Route Groups?**
- Folders in parentheses `(frontend)` and `(payload)` don't appear in URLs
- Clean separation between marketing site and admin panel
- Single deployment, shared types, simpler infrastructure

---

## Phase 1: Setup & Infrastructure

### 1.1 Install Dependencies

```bash
# Core Payload packages
pnpm add payload @payloadcms/next @payloadcms/richtext-lexical

# Database adapter (choose one)
pnpm add @payloadcms/db-sqlite          # Development (zero config)
# pnpm add @payloadcms/db-postgres      # Production

# Media storage (choose one)
pnpm add @payloadcms/storage-vercel-blob  # For Vercel deployment
# pnpm add @payloadcms/storage-s3         # For self-hosted
```

### 1.2 Environment Variables

```env
# .env.local
DATABASE_URI=file:./payload.db
PAYLOAD_SECRET=your-secret-key-minimum-32-characters-long
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# For Vercel Blob storage (production)
BLOB_READ_WRITE_TOKEN=vercel_blob_...

# OR for S3 (self-hosted)
S3_BUCKET=your-bucket
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_REGION=us-east-1
```

### 1.3 TypeScript Configuration

```json
// tsconfig.json - add path alias
{
  "compilerOptions": {
    "paths": {
      "@payload-config": ["./src/payload.config.ts"],
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Phase 2: Payload Configuration

### 2.1 Main Config (payload.config.ts)

```typescript
// src/payload.config.ts
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Products } from './collections/Products'
import { Solutions } from './collections/Solutions'
import { CaseStudies } from './collections/CaseStudies'
import { FAQ } from './collections/FAQ'
import { Industries } from './collections/Industries'
import { Integrations } from './collections/Integrations'
import { Media } from './collections/Media'
import { Users } from './collections/Users'

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Products,
    Solutions,
    CaseStudies,
    FAQ,
    Industries,
    Integrations,
  ],
  globals: [SiteSettings, Navigation],
  secret: process.env.PAYLOAD_SECRET || '',
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./payload.db' },
  }),
  typescript: {
    outputFile: path.resolve(dirname, '../payload-types.ts'),
  },
})
```

---

## Phase 3: Collection Schemas

### 3.1 Users Collection (Required for Auth)

```typescript
// src/collections/Users.ts
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200, // 2 hours
    maxLoginAttempts: 5,
    lockTime: 600000, // 10 minutes
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: ['editor'],
      saveToJWT: true,
    },
  ],
}
```

### 3.2 Media Collection (Required for Uploads)

```typescript
// src/collections/Media.ts
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
      },
    ],
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    crop: true,
  },
  access: {
    read: () => true, // Public read access
  },
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}
```

### 3.3 Products Collection

```typescript
// src/collections/Products.ts
import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order', 'updatedAt'],
    group: 'Content',
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
        { label: 'Agents', value: 'agents' },
        { label: 'AI Tools', value: 'ai-tools' },
        { label: 'Platform', value: 'platform' },
        { label: 'Data', value: 'data' },
        { label: 'Integration', value: 'integration' },
      ],
    },
    {
      name: 'categoryColor',
      type: 'select',
      required: true,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Purple', value: 'purple' },
        { label: 'Cyan', value: 'cyan' },
        { label: 'Teal', value: 'teal' },
        { label: 'Amber', value: 'amber' },
        { label: 'Red', value: 'red' },
      ],
      defaultValue: 'blue',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'features',
      type: 'array',
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  defaultSort: 'order',
}
```

### 3.4 Solutions Collection

```typescript
// src/collections/Solutions.ts
import type { CollectionConfig } from 'payload'

export const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order', 'updatedAt'],
    group: 'Content',
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
      type: 'text',
      required: true,
    },
    {
      name: 'categoryColor',
      type: 'select',
      required: true,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Purple', value: 'purple' },
        { label: 'Cyan', value: 'cyan' },
        { label: 'Teal', value: 'teal' },
        { label: 'Amber', value: 'amber' },
        { label: 'Red', value: 'red' },
      ],
      defaultValue: 'purple',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
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
```

### 3.5 Case Studies Collection

```typescript
// src/collections/CaseStudies.ts
import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'updatedAt'],
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'metrics',
      type: 'array',
      maxRows: 4,
      labels: { singular: 'Metric', plural: 'Metrics' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
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
```

### 3.6 FAQ Collection

```typescript
// src/collections/FAQ.ts
import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'order', 'updatedAt'],
    group: 'Content',
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
  defaultSort: 'order',
}
```

### 3.7 Industries Collection

```typescript
// src/collections/Industries.ts
import type { CollectionConfig } from 'payload'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'updatedAt'],
    group: 'Content',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
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
```

### 3.8 Integrations Collection

```typescript
// src/collections/Integrations.ts
import type { CollectionConfig } from 'payload'

export const Integrations: CollectionConfig = {
  slug: 'integrations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order', 'updatedAt'],
    group: 'Content',
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
```

---

## Phase 4: Global Schemas

### 4.1 Site Settings Global

```typescript
// src/globals/SiteSettings.ts
import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Settings',
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
```

### 4.2 Navigation Global

```typescript
// src/globals/Navigation.ts
import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'mainNav',
      type: 'array',
      label: 'Main Navigation',
      maxRows: 8,
      labels: { singular: 'Link', plural: 'Links' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'footerNav',
      type: 'array',
      label: 'Footer Navigation',
      labels: { singular: 'Link', plural: 'Links' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      labels: { singular: 'Social', plural: 'Social Links' },
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
  ],
}
```

---

## Phase 5: Admin Panel Routes

### 5.1 Admin Page

```typescript
// src/app/(payload)/admin/[[...segments]]/page.tsx
import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
```

### 5.2 Admin Not Found

```typescript
// src/app/(payload)/admin/[[...segments]]/not-found.tsx
import type { Metadata } from 'next'
import { NotFoundPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'
import config from '@payload-config'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const NotFound = ({ params, searchParams }: Args) =>
  NotFoundPage({ config, params, searchParams, importMap })

export default NotFound
```

### 5.3 API Routes

```typescript
// src/app/(payload)/api/[...slug]/route.ts
import { REST_METHODS } from '@payloadcms/next/api'
import config from '@payload-config'

export const GET = REST_METHODS.GET({ config })
export const POST = REST_METHODS.POST({ config })
export const DELETE = REST_METHODS.DELETE({ config })
export const PATCH = REST_METHODS.PATCH({ config })
export const PUT = REST_METHODS.PUT({ config })
export const OPTIONS = REST_METHODS.OPTIONS({ config })
```

### 5.4 Import Map

```typescript
// src/app/(payload)/importMap.ts
import { importMap } from '@payloadcms/next/importMap'

export { importMap }
```

---

## Phase 6: Data Fetching Utilities

### 6.1 Payload Client

```typescript
// src/lib/payload.ts
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Product, Solution, CaseStudy, Faq, Industry, Integration } from '@/payload-types'

// Cached payload instance getter
export async function getPayloadClient() {
  return getPayload({ config })
}

// Products
export async function getProducts(): Promise<Product[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'products',
    sort: 'order',
    limit: 100,
    depth: 1, // Include media relationships
  })
  return docs
}

// Solutions
export async function getSolutions(): Promise<Solution[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'solutions',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Case Studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// FAQ
export async function getFAQ(): Promise<Faq[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'faq',
    sort: 'order',
    limit: 100,
  })
  return docs
}

// Industries
export async function getIndustries(): Promise<Industry[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Integrations
export async function getIntegrations(): Promise<Integration[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'integrations',
    sort: 'order',
    limit: 100,
    depth: 1,
  })
  return docs
}

// Integrations grouped by category
export async function getIntegrationsByCategory() {
  const integrations = await getIntegrations()
  return integrations.reduce((acc, integration) => {
    const category = integration.category || 'other'
    if (!acc[category]) acc[category] = []
    acc[category].push(integration)
    return acc
  }, {} as Record<string, Integration[]>)
}

// Site Settings
export async function getSiteSettings() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings', depth: 1 })
}

// Navigation
export async function getNavigation() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'navigation' })
}
```

---

## Phase 7: Component Refactoring Pattern

### 7.1 Server Component Pattern (Recommended)

```typescript
// src/components/ProductsSection.tsx
import { getProducts } from '@/lib/payload'
import type { Product } from '@/payload-types'

// Component is now async server component
export default async function ProductsSection() {
  const products = await getProducts()

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Separate client component for interactivity if needed
function ProductCard({ product }: { product: Product }) {
  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    red: 'bg-red-500/10 border-red-500/30 text-red-400',
  }

  return (
    <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
      <span className={`px-3 py-1 rounded-full text-sm ${colorClasses[product.categoryColor]}`}>
        {product.category}
      </span>
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-400 mt-2">{product.description}</p>
    </div>
  )
}
```

---

## Phase 8: Seed Data Script

```typescript
// src/seed/index.ts
import { getPayload } from 'payload'
import config from '@payload-config'

// Extract from current hardcoded data
const seedData = {
  products: [
    {
      name: 'AgenForge',
      category: 'agents',
      categoryColor: 'blue',
      description: 'Build custom AI agents with enterprise-grade capabilities...',
      order: 1,
    },
    // ... rest of products from ProductsSection.tsx
  ],
  solutions: [
    {
      name: 'Customer Service',
      category: 'Service Automation',
      categoryColor: 'purple',
      description: 'AI-powered customer support that scales...',
      order: 1,
    },
    // ... rest of solutions
  ],
  // ... other collections
}

export async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding database...')

  // Seed Products
  for (const product of seedData.products) {
    await payload.create({
      collection: 'products',
      data: product,
    })
  }
  console.log(`Seeded ${seedData.products.length} products`)

  // Seed Solutions
  for (const solution of seedData.solutions) {
    await payload.create({
      collection: 'solutions',
      data: solution,
    })
  }
  console.log(`Seeded ${seedData.solutions.length} solutions`)

  // Continue for other collections...

  console.log('Seeding complete!')
}

// Run: pnpm payload seed
```

---

## Phase 9: Caching & Revalidation

### 9.1 Revalidation Hook

```typescript
// src/collections/hooks/revalidateCollection.ts
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateAfterChange: CollectionAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating after change`)
    revalidatePath('/')
    revalidatePath('/products')
    revalidateTag('content')
  }
  return doc
}

export const revalidateAfterDelete: CollectionAfterDeleteHook = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePath('/')
    revalidatePath('/products')
    revalidateTag('content')
  }
  return doc
}
```

### 9.2 Apply to Collections

```typescript
// Add to each collection
export const Products: CollectionConfig = {
  slug: 'products',
  hooks: {
    afterChange: [revalidateAfterChange],
    afterDelete: [revalidateAfterDelete],
  },
  // ... fields
}
```

---

## Phase 10: Next.js Config Updates

```typescript
// next.config.ts
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
```

---

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
# 1. Push to GitHub
# 2. Connect to Vercel
# 3. Add environment variables:
#    - PAYLOAD_SECRET
#    - DATABASE_URI (Vercel Postgres)
#    - BLOB_READ_WRITE_TOKEN

# Vercel Postgres setup
vercel env pull
npx vercel postgres create
```

**Estimated Cost**: $20-50/month (Pro + Postgres + Blob)

### Option 2: Docker Self-Hosted

```yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URI=postgres://postgres:postgres@db:5432/payload
      - PAYLOAD_SECRET=${PAYLOAD_SECRET}
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=payload
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

**Estimated Cost**: $10-30/month (VPS)

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Install Payload dependencies
- [ ] Create `payload.config.ts`
- [ ] Add environment variables
- [ ] Update `tsconfig.json` with path alias
- [ ] Update `next.config.ts` with `withPayload`

### Phase 2: Collections
- [ ] Create Users collection (auth)
- [ ] Create Media collection (uploads)
- [ ] Create Products collection
- [ ] Create Solutions collection
- [ ] Create CaseStudies collection
- [ ] Create FAQ collection
- [ ] Create Industries collection
- [ ] Create Integrations collection

### Phase 3: Globals
- [ ] Create SiteSettings global
- [ ] Create Navigation global

### Phase 4: Admin Routes
- [ ] Create `(payload)/admin/[[...segments]]/page.tsx`
- [ ] Create `(payload)/admin/[[...segments]]/not-found.tsx`
- [ ] Create `(payload)/api/[...slug]/route.ts`
- [ ] Create `(payload)/importMap.ts`

### Phase 5: Data Layer
- [ ] Create `lib/payload.ts` with fetch utilities
- [ ] Move frontend to `(frontend)/` route group
- [ ] Generate types: `pnpm payload generate:types`

### Phase 6: Seed & Test
- [ ] Create seed script with existing content
- [ ] Run seed: `pnpm payload seed`
- [ ] Verify admin panel at `/admin`
- [ ] Create first admin user

### Phase 7: Component Migration
- [ ] Refactor ProductsSection
- [ ] Refactor SolutionsSection
- [ ] Refactor CaseStudiesSection
- [ ] Refactor FAQSection
- [ ] Refactor IndustriesSection
- [ ] Refactor HeroSection
- [ ] Refactor NavBar
- [ ] Refactor Footer

### Phase 8: Production
- [ ] Set up production database (Postgres)
- [ ] Configure media storage (Vercel Blob/S3)
- [ ] Deploy and test
- [ ] Set up revalidation hooks

---

## Security Considerations

### Local API Access Control

```typescript
// ❌ WRONG: Bypasses access control even with user
await payload.find({
  collection: 'posts',
  user: someUser,
})

// ✅ CORRECT: Enforces user permissions
await payload.find({
  collection: 'posts',
  user: someUser,
  overrideAccess: false, // Required!
})
```

### Transaction Safety in Hooks

```typescript
// ✅ CORRECT: Pass req for atomic transactions
hooks: {
  afterChange: [
    async ({ doc, req }) => {
      await req.payload.create({
        collection: 'audit-log',
        data: { docId: doc.id },
        req, // Maintains atomicity
      })
    },
  ],
}
```

---

## Quick Start Commands

```bash
# Install
pnpm add payload @payloadcms/next @payloadcms/richtext-lexical @payloadcms/db-sqlite

# Generate types
pnpm payload generate:types

# Start dev
pnpm dev

# Access admin
open http://localhost:3000/admin

# Seed data
pnpm payload seed
```

---

## Sources & References

- [Payload CMS Documentation](https://payloadcms.com/docs)
- [Payload 3.0 Announcement](https://payloadcms.com/posts/blog/payload-30-the-first-cms-that-installs-directly-into-any-nextjs-app)
- [Payload GitHub](https://github.com/payloadcms/payload)
- [Payload vs Sanity](https://payloadcms.com/compare/sanity)
- [Ultimate Guide to Next.js with Payload](https://payloadcms.com/posts/blog/the-ultimate-guide-to-using-nextjs-with-payload)
- [Sanity Pricing](https://www.sanity.io/pricing)
