import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Agency } from "@/components/sections/Agency";
import { Security } from "@/components/sections/Security";
import { Preloader } from "@/components/ui/Preloader";
import { portfolioContent } from "@/data/portfolio";
import { isLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = portfolioContent[locale];

  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>
      <Header locale={locale} content={content} />
      <main className="main-content" id="main-content">
        <div className="content-column" id="top">
          <Hero content={content} />
          <nav
            className="section-nav"
            aria-label={content.accessibility.primaryLinks}
          >
            <a href="#projects">{content.projects.label}</a>
            <a href="#experience">{content.experience.label}</a>
            <a href="#agency">Reac Studio</a>
            <a href="#security">{locale === "en" ? "Security" : "Seguridad"}</a>
            <a href="#contact">{content.profile.emailLabel}</a>
          </nav>
          <Projects content={content.projects} locale={locale} />
          <About content={content.about} />
          <Experience content={content.experience} />
          <Agency locale={locale} />
          <Stack content={content.stack} />
          <Security locale={locale} />
        </div>
      </main>
      <Footer content={content} />
    </>
  );
}
