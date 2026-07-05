import { Metadata } from 'next'
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import { OrganizationSchema, WebSiteSchema } from '@/components/SEO'
import SiteHeader from '@/components/site/SiteHeader'
import Footer from '@/components/newsite/Footer'
import { getSiteSettings } from '@/lib/payload'
import { SITE_URL } from '@/lib/seo'
import '../globals.css'

// Ledger type system:
// Display = Newsreader (classical serif), Body = IBM Plex Sans (technical),
// Mono = IBM Plex Mono (stats / labels).
const newsreader = Newsreader({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Agentic Labs | Custom Agentic Solutions for the Enterprise',
    template: '%s | Agentic Labs',
  },
  description:
    'Custom agentic solutions — enterprise AI agents and multi-agentic systems that automate entire departments end to end, in production in 6–12 weeks on infrastructure you control. Book a discovery call.',
  keywords: [
    'agentic solutions',
    'enterprise AI agents',
    'agentic AI',
    'multi-agentic systems',
    'background agents',
    'agentic automation consulting',
    'SaaS consolidation',
    'AI governance',
    'enterprise automation',
    'AI implementation services',
  ],
  authors: [{ name: 'Agentic Labs' }],
  creator: 'Agentic Labs',
  publisher: 'Agentic Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Agentic Labs',
    title: 'Agentic Labs | Custom Agentic Solutions for the Enterprise',
    description:
      'Custom agentic solutions that automate entire departments end to end — in production in 6–12 weeks, on infrastructure you control.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentic Labs — Custom Agentic Solutions for the Enterprise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Labs | Custom Agentic Solutions',
    description:
      'Custom agentic solutions that automate entire departments end to end — in production in 6–12 weeks, on infrastructure you control.',
    creator: '@agenticlabs',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  const siteSettings = await getSiteSettings()
  // Payload returns an empty group ({}) for ctaButton when the site-settings
  // global has never been saved (e.g. a freshly provisioned database before
  // the first seed/edit) — fall back rather than pass an undefined href to
  // <Link>, which throws inside Next's URL formatter.
  const cta = siteSettings.ctaButton?.href
    ? siteSettings.ctaButton
    : { label: 'Book a Discovery Call', href: '/#contact' }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <div className="newsite">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <SiteHeader navItems={siteSettings.navItems ?? []} cta={cta} />
          {children}
          <Footer
            tagline={siteSettings.brandTagline}
            linkGroups={(siteSettings.footerLinkGroups ?? []).map((group) => ({
              title: group.title,
              links: group.links ?? [],
            }))}
            socialLinks={siteSettings.socialLinks ?? []}
          />
        </div>
      </body>
    </html>
  )
}
