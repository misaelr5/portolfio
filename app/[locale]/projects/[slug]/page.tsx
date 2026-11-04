import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { caseStudies, caseLabels } from "@/data/case-studies";
import { portfolioContent } from "@/data/portfolio";
import { isLocale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudies.en.map(({ slug }) => ({ slug }));
}

async function getContent(params: Props["params"]) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = caseStudies[locale].find((project) => project.slug === slug);
  if (!project) notFound();
  return { locale, project };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, project } = await getContent(params);
  const path = `/${locale}/projects/${project.slug}`;
  const title = `${project.title} | Misael Ledesma`;
  return {
    title,
    description: project.overview,
    alternates: {
      canonical: path,
      languages: {
        en: `/en/projects/${project.slug}`,
        es: `/es/projects/${project.slug}`,
        "x-default": `/en/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description: project.overview,
      url: path,
      locale: portfolioContent[locale].meta.locale,
      alternateLocale: locale === "en" ? "es_AR" : "en_US",
      siteName: "Misael Ledesma Portfolio",
      images: project.image
        ? [
            {
              url: project.image,
              width: 1440,
              height: 1000,
              alt: project.imageAlt,
            },
          ]
        : [
            {
              url: `/${locale}/opengraph-image`,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.overview,
      images: [project.image ?? `/${locale}/opengraph-image`],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, project } = await getContent(params);
  const content = portfolioContent[locale];
  const labels = caseLabels[locale];
  const sections = [
    "overview",
    "challenge",
    "role",
    "approach",
    "architecture",
    "technologies",
    "features",
    "decisions",
    "results",
  ] as const;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.overview,
    inLanguage: locale,
    url: new URL(`/${locale}/projects/${project.slug}`, getSiteUrl()).href,
    author: { "@type": "Person", name: "Misael Ledesma" },
  };
  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.accessibility.skipToContent}
      </a>
      <Header
        locale={locale}
        content={content}
        path={`/projects/${project.slug}`}
      />
      <main id="main-content" className="main-content case-main">
        <article className="content-column" id="top">
          <header className="case-hero">
            <Link className="text-link" href={`/${locale}#projects`}>
              ← {labels.back}
            </Link>
            <p className="detail-label">{labels[project.category]}</p>
            <h1>{project.title}</h1>
            {project.status ? (
              <p className="project-status">{project.status}</p>
            ) : null}
            <p className="muted-text">{project.overview}</p>
            {project.image ? (
              <Image
                className="case-cover"
                src={project.image}
                alt={project.imageAlt!}
                width={1440}
                height={1000}
                sizes="(max-width:767px) 100vw, 720px"
                preload
              />
            ) : null}
          </header>
          <nav
            className="section-nav"
            aria-label={content.accessibility.primaryLinks}
          >
            {sections.map((key) => (
              <a href={`#${key}`} key={key}>
                {labels[key]}
              </a>
            ))}
          </nav>
          {sections.map((key) => (
            <section
              className="case-section"
              id={key}
              aria-labelledby={`${key}-title`}
              key={key}
            >
              <h2 id={`${key}-title`}>{labels[key]}</h2>
              {typeof project[key] === "string" ? (
                <p>{project[key]}</p>
              ) : (
                <ul
                  className={
                    key === "technologies" ? "technology-list" : "case-list"
                  }
                >
                  {project[key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="case-section" aria-labelledby="gallery-title">
            <h2 id="gallery-title">{labels.gallery}</h2>
            {project.image ? (
              <div className="case-gallery">
                {(["desktop", "mobile"] as const).map((device) => (
                  <figure key={device}>
                    <Image
                      src={`/projects/${project.slug}-${device}.webp`}
                      alt={`${project.imageAlt} — ${labels[device]}`}
                      width={device === "desktop" ? 1440 : 390}
                      height={device === "desktop" ? 1000 : 844}
                      sizes="(max-width:767px) 100vw, 500px"
                    />
                    <figcaption>{labels[device]}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="muted-text">{project.galleryNote}</p>
            )}
          </section>
          <section className="case-section" aria-labelledby="external-title">
            <h2 id="external-title">{labels.links}</h2>
            <div className="project-links">
              {project.links.map((link) => (
                <ExternalLink
                  href={link.href}
                  className="text-link"
                  key={link.href}
                >
                  {link.label}
                </ExternalLink>
              ))}
              <a className="text-link" href="mailto:ledesma.rme@gmail.com">
                {locale === "en"
                  ? "Discuss this work"
                  : "Consultar sobre este trabajo"}
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer content={content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
