import type { ServerProps } from 'payload'
import Link from 'next/link'

// Custom /admin landing widgets (registered via admin.components.beforeDashboard).
// Server component: reads live Payload counts and surfaces content health + a
// leads pulse + quick-add deep links, so editors land on something useful.

const CONTENT: { slug: string; label: string }[] = [
  { slug: 'solutions', label: 'Solutions' },
  { slug: 'industries', label: 'Industries' },
  { slug: 'case-studies', label: 'Case Studies' },
  { slug: 'faq', label: 'FAQ' },
  { slug: 'integrations', label: 'Integrations' },
  { slug: 'blog-posts', label: 'Blog Posts' },
]

const QUICK_ADD: { slug: string; label: string }[] = [
  { slug: 'blog-posts', label: 'New Blog Post' },
  { slug: 'case-studies', label: 'New Case Study' },
  { slug: 'solutions', label: 'New Solution' },
]

// Computed outside the component body so react-hooks/purity doesn't flag the
// request-time Date.now() (intentional here — "this week" is per-request).
function sevenDaysAgoISO(): string {
  return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
}

const card: React.CSSProperties = {
  border: '1px solid var(--theme-elevation-100)',
  borderRadius: 8,
  padding: '16px 20px',
  background: 'var(--theme-elevation-50)',
}

export default async function DashboardWidgets({ payload }: ServerProps) {
  if (!payload) return null

  const contentCounts = await Promise.all(
    CONTENT.map(async (c) => ({
      ...c,
      total: (await payload.count({ collection: c.slug as 'solutions' })).totalDocs,
    })),
  )

  const weekAgo = sevenDaysAgoISO()
  const [leadsTotal, leadsThisWeek] = await Promise.all([
    payload.count({ collection: 'leads' }).then((r) => r.totalDocs),
    payload
      .count({ collection: 'leads', where: { createdAt: { greater_than: weekAgo } } })
      .then((r) => r.totalDocs),
  ])

  return (
    <div style={{ marginBottom: 32, display: 'grid', gap: 24 }}>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <div style={card}>
          <div style={{ fontSize: 13, opacity: 0.7 }}>Leads this week</div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{leadsThisWeek}</div>
          <Link href="/admin/collections/leads" style={{ fontSize: 13 }}>
            {leadsTotal} total →
          </Link>
        </div>
        <div style={{ ...card, gridColumn: '1 / -1' }}>
          <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 8 }}>Content health</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {contentCounts.map((c) => (
              <Link
                key={c.slug}
                href={`/admin/collections/${c.slug}`}
                style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}
              >
                <span style={{ fontSize: 20, fontWeight: 700 }}>{c.total}</span>
                <span style={{ fontSize: 13, opacity: 0.7 }}>{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 8 }}>Quick add</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {QUICK_ADD.map((q) => (
            <Link
              key={q.slug}
              href={`/admin/collections/${q.slug}/create`}
              className="btn btn--style-primary btn--size-small"
            >
              {q.label}
            </Link>
          ))}
          <Link href="/api/leads/export" className="btn btn--style-secondary btn--size-small">
            Export Leads CSV
          </Link>
        </div>
      </div>
    </div>
  )
}
