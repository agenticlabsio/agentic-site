import { SITE_URL } from '@/lib/seo'

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Agentic Labs",
    "url": SITE_URL,
    "description":
      "Enterprise AI consulting. Autonomous agents in production in 8 weeks, integrated with your systems of record.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Agentic Labs",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
