import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

export function Projects({
  content,
}: {
  content: PortfolioContent["projects"];
}) {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <Reveal>
        <SectionLabel id="projects-title">{content.label}</SectionLabel>
        <div className="experience-list">
          {content.entries.map((project) => (
            <article className="experience-entry" key={project.title}>
              <div className="experience-heading">
                <h3>
                  <span>{project.title}</span>
                  {project.role ? (
                    <span className="muted-text"> / {project.role}</span>
                  ) : null}
                </h3>
              </div>
              <ul className="experience-highlights">
                <li>{project.context}</li>
                <li>{project.solution}</li>
                {project.technicalDetails?.length ? (
                  <li>{project.technicalDetails.join(" / ")}</li>
                ) : null}
              </ul>
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
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
