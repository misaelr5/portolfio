import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";

import { portfolioContent } from "@/data/portfolio";
import {
  defaultLocale,
  getAlternateLocale,
  getLocalePath,
  isLocale,
  locales,
} from "@/lib/i18n";
import { getSiteUrl, siteConfig } from "@/lib/site";

import "../globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = portfolioContent[locale];
  const pathname = getLocalePath(locale);
  const alternateLocale = getAlternateLocale(locale);

  return {
    metadataBase: siteUrl,
    title: content.meta.title,
    description: content.meta.description,
    applicationName: "Misael Ledesma Portfolio",
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: {
      canonical: pathname,
      languages: {
        en: getLocalePath("en"),
        es: getLocalePath("es"),
        "x-default": getLocalePath(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: content.meta.locale,
      alternateLocale: portfolioContent[alternateLocale].meta.locale,
      url: pathname,
      title: content.meta.title,
      description: content.meta.description,
      siteName: "Misael Ledesma Portfolio",
    },
    twitter: {
      card: "summary",
      title: content.meta.title,
      description: content.meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#141414",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={geist.variable}>
      <head>
        <noscript>
          <style>{`.preloader{display:none!important}.reveal{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
