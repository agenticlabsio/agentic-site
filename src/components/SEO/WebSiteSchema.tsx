export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://agenticlabs.io/#website",
    "name": "Agentic Labs",
    "url": "https://agenticlabs.io",
    "description":
      "Enterprise AI consulting. Autonomous agents in production in 8 weeks, integrated with your systems of record.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "@id": "https://agenticlabs.io/#organization",
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
