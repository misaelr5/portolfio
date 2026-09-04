const FALLBACK_URL = "http://localhost:3000";

function normalizeUrl(value: string) {
  const url = value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;

  return url.replace(/\/$/, "");
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  return new URL(configuredUrl ? normalizeUrl(configuredUrl) : FALLBACK_URL);
}

export const siteConfig = {
  name: "Misael Ledesma",
  email: "ledesma.rme@gmail.com",
  links: {
    github: "https://github.com/misaelr5",
    reacStudio: "https://reacs-studio.vercel.app/",
  },
} as const;
