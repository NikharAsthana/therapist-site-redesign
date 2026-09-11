import { site } from "../../../content/site";

/**
 * Schema.org structured data for the practice. Every value comes from
 * `content/site.ts` (profile facts only) — no telephone, hours, or pricing,
 * because the profile provides none.
 */
export default function PsychologistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: `${site.brand.name}, ${site.brand.credential}`,
    description: site.metadata.description,
    url: site.seo.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.footer.postalAddress.street,
      addressLocality: site.footer.postalAddress.locality,
      addressRegion: site.footer.postalAddress.region,
      postalCode: site.footer.postalAddress.postalCode,
      addressCountry: "US",
    },
    areaServed: "California",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
