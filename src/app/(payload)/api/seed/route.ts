import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import {
  seedSolutions,
  seedIndustries,
  seedCaseStudies,
  seedFAQ,
  seedBlogPosts,
  seedSiteSettings,
} from '@/seed'

export async function GET(request: Request) {
  // In development this is open. In production it requires a matching
  // x-seed-secret header (set via `wrangler secret put SEED_SECRET`) so the
  // canonical content in src/content can be (re-)synced to prod on demand
  // without leaving an open re-seed endpoint on the public site.
  if (process.env.NODE_ENV === 'production') {
    const provided = request.headers.get('x-seed-secret')
    if (!process.env.SEED_SECRET || provided !== process.env.SEED_SECRET) {
      return NextResponse.json({ error: 'Seeding is disabled' }, { status: 403 })
    }
  }

  const payload = await getPayloadClient()
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
