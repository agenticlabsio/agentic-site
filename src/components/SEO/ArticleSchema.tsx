interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Agentic Labs",
  image
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://agenticlabs.io"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Agentic Labs",
      "url": "https://agenticlabs.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://agenticlabs.io/logo.png"
      }
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
