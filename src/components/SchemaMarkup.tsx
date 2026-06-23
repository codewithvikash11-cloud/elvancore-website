export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ITCompany",
    "name": "Elvancore Software Solutions",
    "url": "https://elvancore.com",
    "logo": "https://elvancore.com/logo.png",
    "description": "Enterprise software development, AI integration, and cloud infrastructure company.",
    "founder": "Vikash Khadoliya",
    "foundingDate": "2021",
    "areaServed": ["USA", "UK", "Canada", "Australia", "Europe", "Middle East", "India"],
    "sameAs": [
      "https://linkedin.com/company/elvancore"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
