import { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { OrganizationSchema, WebSiteSchema } from "@/components/SEO";
import "../globals.css";

// Sapphire Nocturne type system:
// Display = Sora (geometric grotesque), Body = IBM Plex Sans (technical),
// Mono = IBM Plex Mono (stats / labels).
const sora = Sora({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agenticlabs.io'),
  title: {
    default: 'Agentic Labs | Custom AI Agents for SMEs, Shipped in Weeks',
    template: '%s | Agentic Labs'
  },
  description: 'Custom AI agents for small and medium enterprises. In production in 6-8 weeks, on infrastructure you control, built to pay back. Book a strategy call.',
  keywords: [
    'agentic AI',
    'enterprise AI agents',
    'AI automation consulting',
    'SaaS consolidation',
    'AI governance',
    'Salesforce AI integration',
    'Workday AI integration',
    'Databricks AI',
    'enterprise automation',
    'AI implementation services'
  ],
  authors: [{ name: 'Agentic Labs' }],
  creator: 'Agentic Labs',
  publisher: 'Agentic Labs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agenticlabs.io',
    siteName: 'Agentic Labs',
    title: 'Agentic Labs | Custom AI Agents for SMEs, Shipped in Weeks',
    description: 'Custom AI agents for small and medium enterprises. In production in 6-8 weeks, on infrastructure you control, built to pay back.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentic Labs - Custom AI Agents for SMEs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Labs | Custom AI Agents for SMEs',
    description: 'Custom AI agents for small and medium enterprises. In production in 6-8 weeks, on infrastructure you control, built to pay back.',
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
    canonical: 'https://agenticlabs.io',
  },
};

// Sapphire Nocturne is dark-first: the homepage (.newsite) renders dark by
// default and only switches to light when the visitor explicitly opts in.
const themeScript = `
(function(){
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();
`;

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${sora.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        {children}
      </body>
    </html>
  );
}
