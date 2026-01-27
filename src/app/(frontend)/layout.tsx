import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "../globals.css";
import ElevenLabsVoiceWidget from "@/components/ElevenLabsVoiceWidget";

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agenticlabs.io'),
  title: {
    default: 'Agentic Labs | Enterprise AI Systems Shipped in 8 Weeks',
    template: '%s | Agentic Labs'
  },
  description: 'Enterprise AI systems in production in 8 weeks. $3.2M average client savings. 50+ successful deployments. Book your free strategy session.',
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
    title: 'Agentic Labs | Enterprise AI Systems Shipped in 8 Weeks',
    description: 'Enterprise AI systems in production in 8 weeks. $3.2M average client savings. 50+ successful deployments.',
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
    title: 'Agentic Labs | Enterprise AI Systems in 8 Weeks',
    description: 'Enterprise AI systems in production in 8 weeks. $3.2M average savings. 50+ deployments.',
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
        className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <ElevenLabsVoiceWidget />
      </body>
    </html>
  );
}
