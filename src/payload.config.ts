import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Products } from './collections/Products'
import { Solutions } from './collections/Solutions'
import { CaseStudies } from './collections/CaseStudies'
import { FAQ } from './collections/FAQ'
import { Industries } from './collections/Industries'
import { Integrations } from './collections/Integrations'

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
  secret: process.env.PAYLOAD_SECRET || 'development-secret-change-in-production',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, '../payload-types.ts'),
  },
})
