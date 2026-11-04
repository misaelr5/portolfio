import { ExternalLink } from "@/components/ui/ExternalLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

export function Projects({
  content,
  selectedProjectIds,
}: {
  content: PortfolioContent["projects"];
  selectedProjectIds: readonly string[];
}) {
  const selectedIds = new Set(selectedProjectIds);
  const remainingProjects = content.entries.filter(
    (project) => !selectedIds.has(project.id),
  );
  return (
    <section id="other-projects" aria-labelledby="other-projects-title">
      <Reveal>
        <SectionLabel id="other-projects-title">{content.label}</SectionLabel>
        <div className="experience-list">
          {remainingProjects.map((project) => (
            <article
              className="experience-entry"
              key={project.id}
              data-project-id={project.id}
            >
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
