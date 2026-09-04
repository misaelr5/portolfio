import Image from "next/image";

import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type ProjectsProps = {
  content: PortfolioContent["projects"];
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <Reveal>
        <SectionLabel id="projects-title">{content.label}</SectionLabel>

        <div className="project-list">
          {content.entries.map((project, index) => (
            <article className="project-entry" key={project.title}>
              <div className="project-heading">
                <span className="project-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{project.title}</h3>
              </div>

              <div className="project-details">
                <div>
                  <p className="detail-label">{content.fieldLabels.context}</p>
                  <p className="muted-text">{project.context}</p>
                </div>
                <div>
                  <p className="detail-label">{content.fieldLabels.solution}</p>
                  <p>{project.solution}</p>
                </div>

                {project.role ? (
                  <div>
                    <p className="detail-label">{content.fieldLabels.role}</p>
                    <p>{project.role}</p>
                  </div>
                ) : null}

                {project.technicalDetails?.length ? (
                  <div>
                    <p className="detail-label">
                      {content.fieldLabels.selectedDetails}
                    </p>
                    <p>{project.technicalDetails.join(" / ")}</p>
                  </div>
                ) : null}

                {project.links?.length ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <ExternalLink
                        className="text-link"
                        href={link.href}
                        key={link.href}
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </div>

              {project.image ? (
                <div className="project-image">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1440}
                    height={900}
                    sizes="(max-width: 767px) calc(100vw - 48px), 720px"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
