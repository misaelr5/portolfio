import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { caseStudies, caseLabels } from "@/data/case-studies";
import type { PortfolioContent } from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";

export function Projects({
  content,
  locale,
}: {
  content: PortfolioContent["projects"];
  locale: Locale;
}) {
  const labels = caseLabels[locale];
  const moreServices = content.entries.find(
    (project) => project.id === "mas-servicios",
  )!;
  const secondary = content.entries.filter(
    (project) => project.id !== "mas-servicios",
  );
  const categories =
    locale === "en"
      ? {
          client: "Client project",
          personal: "Personal project",
          academic: "Academic project",
        }
      : {
          client: "Proyecto para cliente",
          personal: "Proyecto personal",
          academic: "Proyecto académico",
        };
  return (
    <section id="projects" aria-labelledby="projects-title">
      <SectionLabel id="projects-title">{content.label}</SectionLabel>
      <div className="featured-projects">
        {caseStudies[locale].map((project, index) => (
          <article className="featured-project" key={project.slug}>
            {project.image ? (
              <Link
                href={`/${locale}/projects/${project.slug}`}
                className="project-cover"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt!}
                  width={1440}
                  height={1000}
                  sizes="(max-width: 767px) 100vw, 720px"
                />
              </Link>
            ) : null}
            <div className="project-card-body">
              <p className="detail-label">
                {String(index + 1).padStart(2, "0")} /{" "}
                {labels[project.category]}
              </p>
              <h3>
                <Link href={`/${locale}/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>
              {project.slug === "reac-studio" ? (
                <Image
                  src="/projects/reac-symbol.svg"
                  alt="Reac Studio"
                  width={36}
                  height={36}
                />
              ) : null}
              {project.status ? (
                <p className="project-status">{project.status}</p>
              ) : null}
              <p className="muted-text">{project.overview}</p>
              <p className="project-role">{project.role.split(". ")[0]}</p>
              <ul className="technology-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <Link
                  className="text-link case-link"
                  href={`/${locale}/projects/${project.slug}`}
                >
                  {labels.caseStudy} <span aria-hidden="true">↗</span>
                </Link>
                {project.links
                  .filter((link) => !link.href.includes("github.com"))
                  .map((link) => (
                    <ExternalLink
                      className="text-link"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                    </ExternalLink>
                  ))}
              </div>
            </div>
          </article>
        ))}
        <article className="featured-project project-card-body">
          <p className="detail-label">05 / {labels.client}</p>
          <h3>{moreServices.title}</h3>
          <p className="muted-text">{moreServices.context}</p>
          <p>{moreServices.solution}</p>
          <ul className="technology-list">
            {moreServices.technicalDetails?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <details className="secondary-projects">
        <summary>{labels.secondary}</summary>
        <div className="project-list">
          {secondary.map((project) => (
            <article className="project-entry" key={project.id}>
              <div className="project-heading">
                <p className="detail-label">{categories[project.category]}</p>
                <h3>{project.title}</h3>
                <p className="muted-text">{project.context}</p>
              </div>
              <div className="project-details">
                <p>{project.solution}</p>
                <p className="muted-text">
                  {project.technicalDetails?.join(" / ")}
                </p>
                {project.links?.map((link) => (
                  <ExternalLink
                    className="text-link"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
