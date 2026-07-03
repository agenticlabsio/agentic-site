import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'
import {
  seedSolutions,
  seedIndustries,
  seedCaseStudies,
  seedFAQ,
  seedBlogPosts,
  seedSiteSettings,
} from '@/seed'

export async function GET() {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Seeding is disabled in production' }, { status: 403 })
  }

  const payload = await getPayload({ config })
  const results: string[] = []

  // Seed the marketing collections from the canonical content modules.
  results.push(...(await seedSolutions(payload)))
  results.push(...(await seedIndustries(payload)))
  results.push(...(await seedCaseStudies(payload)))
  results.push(...(await seedFAQ(payload)))
  results.push(...(await seedBlogPosts(payload)))
  results.push(...(await seedSiteSettings(payload)))

  return NextResponse.json({ success: true, results })
}
