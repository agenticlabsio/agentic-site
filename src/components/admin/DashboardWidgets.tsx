import type { ServerProps } from 'payload'
import Link from 'next/link'

// Custom /admin landing widgets (registered via admin.components.beforeDashboard).
// Server component: reads live Payload counts and surfaces content health, a
// leads pulse, quick-add deep links, quick links out to the live properties,
// and an admin-only team panel. The view adapts to the signed-in user's role.

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

// External destinations editors reach for. Kept as plain anchors (target=_blank)
// since they leave the admin app. Some are only relevant to admins.
const QUICK_LINKS: { href: string; label: string; adminOnly?: boolean }[] = [
  { href: 'https://agenticlabs.io', label: 'Live site ↗' },
  { href: 'https://demo.agenticlabs.io', label: 'Demo site ↗' },
  {
    href: 'https://github.com/agenticlabsio/agentic-site',
    label: 'GitHub repo ↗',
    adminOnly: true,
  },
  { href: 'https://dash.cloudflare.com', label: 'Cloudflare ↗', adminOnly: true },
  {
    href: 'https://dash.cloudflare.com/?to=/:account/web-analytics',
    label: 'Traffic analytics ↗',
    adminOnly: true,
  },
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

const label: React.CSSProperties = { fontSize: 13, opacity: 0.7 }

function Stat({ value, caption, href }: { value: number; caption: string; href: string }) {
  return (
    <Link href={href} style={{ ...card, display: 'block' }}>
      <div style={label}>{caption}</div>
      <div style={{ fontSize: 32, fontWeight: 700 }}>{value}</div>
    </Link>
  )
}

export default async function DashboardWidgets({ payload, user }: ServerProps) {
  if (!payload) return null

  const isAdmin = Array.isArray(user?.roles) && user.roles.includes('admin')

  const contentCounts = await Promise.all(
    CONTENT.map(async (c) => ({
      ...c,
      total: (await payload.count({ collection: c.slug as 'solutions' })).totalDocs,
    }))
  )
  const contentTotal = contentCounts.reduce((sum, c) => sum + c.total, 0)

  const weekAgo = sevenDaysAgoISO()
  const [leadsTotal, leadsThisWeek, mediaTotal, usersTotal] = await Promise.all([
    payload.count({ collection: 'leads' }).then((r) => r.totalDocs),
    payload
      .count({ collection: 'leads', where: { createdAt: { greater_than: weekAgo } } })
      .then((r) => r.totalDocs),
    payload.count({ collection: 'media' }).then((r) => r.totalDocs),
    payload.count({ collection: 'users' }).then((r) => r.totalDocs),
  ])

  const links = QUICK_LINKS.filter((l) => isAdmin || !l.adminOnly)

  return (
    <div style={{ marginBottom: 32, display: 'grid', gap: 24 }}>
      <div>
        <div style={{ fontSize: 20, fontWeight: 700 }}>
          Welcome{user?.name ? `, ${user.name}` : ''}
        </div>
        <div style={label}>
          Signed in as {isAdmin ? 'Admin' : 'Editor'} · manage content for agenticlabs.io
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}
      >
        <Stat value={leadsThisWeek} caption="Leads this week" href="/admin/collections/leads" />
        <Stat value={leadsTotal} caption="Leads total" href="/admin/collections/leads" />
        <Stat value={contentTotal} caption="Content items" href="/admin/collections/solutions" />
        <Stat value={mediaTotal} caption="Media files" href="/admin/collections/media" />
        {isAdmin && (
          <Stat value={usersTotal} caption="Team members" href="/admin/collections/users" />
        )}
      </div>

      <div style={card}>
        <div style={{ ...label, marginBottom: 8 }}>Content health</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {contentCounts.map((c) => (
            <Link
              key={c.slug}
              href={`/admin/collections/${c.slug}`}
              style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}
            >
              <span style={{ fontSize: 20, fontWeight: 700 }}>{c.total}</span>
              <span style={label}>{c.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: isAdmin ? '2fr 1fr' : '1fr' }}>
        <div>
          <div style={{ ...label, marginBottom: 8 }}>Quick add</div>
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

          <div style={{ ...label, margin: '16px 0 8px' }}>Quick links</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14 }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {isAdmin && (
          <div style={card}>
            <div style={{ ...label, marginBottom: 8 }}>Team</div>
            <div style={{ fontSize: 14, marginBottom: 12 }}>
              {usersTotal} account{usersTotal === 1 ? '' : 's'} with admin access
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link href="/admin/collections/users" style={{ fontSize: 14 }}>
                Manage team →
              </Link>
              <Link href="/admin/collections/users/create" style={{ fontSize: 14 }}>
                Invite a teammate →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
