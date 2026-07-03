import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

// Shared afterChange/afterDelete hooks for the marketing content collections
// (Solutions, Industries, CaseStudies, FAQ). Each collection is cached in
// src/lib/payload.ts under a matching tag; editing or deleting a doc purges
// that tag so the next request rebuilds from fresh data instead of waiting
// for the page-level `revalidate` window to elapse.
export function revalidateContentHooks(tag: string): {
  afterChange: CollectionAfterChangeHook[]
  afterDelete: CollectionAfterDeleteHook[]
} {
  const revalidate = () => {
    try {
      revalidateTag(tag)
    } catch {
      // Outside a Next.js request context (e.g. seed scripts, migrations) — no-op.
    }
  }

  return {
    afterChange: [
      ({ doc }) => {
        revalidate()
        return doc
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidate()
        return doc
      },
    ],
  }
}
