import Link from 'next/link'

export interface MarketingNavItem {
  label: string
  href: string
}

// Static marketing-site header shared by the CMS-backed detail and list pages.
// Deliberately has no mobile menu / client state — mirrors the structure the
// original case-studies/[slug] detail page already shipped. Shell unification
// (including restoring a mobile nav) is Phase 3 work.
export function MarketingHeader({
  items,
  activeHref,
  ctaHref,
}: {
  items: MarketingNavItem[]
  activeHref: string
  ctaHref: string
}) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-[#0a0e1a]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold text-stone-50">
            Agentic Labs
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-display text-sm font-medium transition-colors ${
                  item.href === activeHref ? 'text-stone-50' : 'text-stone-300 hover:text-stone-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="bg-brand-600 hover:bg-brand-700 shadow-brand-600/25 hover:shadow-brand-600/30 font-display rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl"
            >
              Book a Strategy Call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
