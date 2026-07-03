import { SITE_URL } from '@/lib/seo'

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  image?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider = "Agentic Labs",
  areaServed = "United States",
  image
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    ...(image && { "image": image })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
