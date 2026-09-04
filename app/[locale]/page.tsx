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
          <About content={content.about} />
          <Stack content={content.stack} />
          <Experience content={content.experience} />
          <Projects content={content.projects} />
        </div>
      </main>
      <Footer content={content} />
    </>
  );
}
