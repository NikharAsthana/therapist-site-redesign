import type { MetadataRoute } from "next";
import { site } from "../../content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.siteUrl;
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/style-guide`, lastModified },
  ];
}
