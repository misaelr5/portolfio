import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return ["", ...caseStudies.en.map(({ slug }) => `/projects/${slug}`)].flatMap(
    (path) => {
      const languages = {
        en: new URL(`/en${path}`, siteUrl).href,
        es: new URL(`/es${path}`, siteUrl).href,
      };
      return Object.values(languages).map((url) => ({
        url,
        changeFrequency: "monthly",
        priority: 1,
        alternates: { languages },
      }));
    },
  );
}
