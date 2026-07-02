export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agentic Labs",
    "legalName": "Agentic Labs Solutions LLC",
    "description": "Enterprise AI consulting firm building agentic systems that replace fragmented SaaS with intelligent automation. Production-ready in 6-8 weeks.",
    "url": "https://agenticlabs.io",
    "logo": "https://agenticlabs.io/logo.png",
    "image": "https://agenticlabs.io/og-image.png",
    "email": "contact@agenticlabs.io",
    "sameAs": [
      "https://www.linkedin.com/company/agenticlabsio/",
      "https://twitter.com/agenticlabs",
      "https://github.com/agenticlabsio"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Agentic AI",
      "Enterprise Automation",
      "AI Governance",
      "Context Management",
      "Model Context Protocol",
      "Salesforce Integration",
      "Workday Integration",
      "Databricks Integration",
      "SAP Integration",
      "SaaS Consolidation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Enterprise AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Agents",
            "description": "Goal-driven autonomous systems for complex workflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Service Automation",
            "description": "AI agents for 60% faster ticket resolution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Document Processing",
            "description": "Intelligent extraction and classification at 94% accuracy"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Context Management",
            "description": "MCP implementation for enterprise AI data context"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agentic Evaluation",
            "description": "AI agent performance measurement and ROI tracking"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Governance & Security",
            "description": "Bounded autonomy, audit trails, SOC 2 compliance"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
