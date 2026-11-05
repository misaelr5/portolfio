import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Preloader } from "@/components/ui/Preloader";
import { portfolioContent } from "@/data/portfolio";
import { isLocale } from "@/lib/i18n";
import { getSiteUrl, siteConfig } from "@/lib/site";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = portfolioContent[locale];
  const siteUrl = getSiteUrl().toString();
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}/${locale}/opengraph-image`,
    jobTitle: locale === "es" ? "Desarrollador Full Stack" : "Full Stack Developer",
    description: content.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    sameAs: [siteConfig.links.github],
    knowsAbout: [
      "Full-stack web development",
      "Software engineering",
      "Cybersecurity",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Preloader />
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>
      <Header locale={locale} content={content} />
      <main className="main-content" id="main-content">
        <div className="content-column" id="top">
          <Hero content={content} />
          <About content={content.about} />
          <Experience content={content.experience} />
          <Projects
            content={content.projects}
            selectedProjectIds={content.experience.entries.map(
              (project) => project.projectId,
            )}
          />
          <Stack content={content.stack} />
        </div>
      </main>
      <Footer content={content} />
    </>
  );
}
