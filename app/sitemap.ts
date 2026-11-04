import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languages = {
    en: new URL("/en", siteUrl).toString(),
    es: new URL("/es", siteUrl).toString(),
  };

  return Object.values(languages).map((url) => ({
    url,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
