import { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "../globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agenticlabs.io'),
  title: {
    default: 'Agentic Labs | Enterprise AI Agents That Replace SaaS Sprawl',
    template: '%s | Agentic Labs'
  },
  description: 'Enterprise AI agents that replace fragmented SaaS. Integrates with Salesforce, Workday, Databricks. Production-ready in 6-8 weeks. $3.2M+ average savings.',
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
    title: 'Agentic Labs | Enterprise AI Agents That Replace SaaS Sprawl',
    description: 'Enterprise AI agents that replace fragmented SaaS. Integrates with Salesforce, Workday, Databricks. Production-ready in 6-8 weeks.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agentic Labs - Enterprise AI Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Labs | Enterprise AI Agents',
    description: 'Enterprise AI agents that replace fragmented SaaS. Production-ready in 6-8 weeks.',
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

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
