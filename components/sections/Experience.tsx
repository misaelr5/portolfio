import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { PortfolioContent } from "@/data/portfolio";

type ExperienceProps = {
  content: PortfolioContent["experience"];
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section
      className="section-boundary"
      id="projects"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <SectionLabel id="projects-title">{content.label}</SectionLabel>

        <div className="experience-list">
          {content.entries.map((entry) => (
            <article
              className="experience-entry"
              key={entry.projectId}
              data-project-id={entry.projectId}
            >
              <div className="experience-heading">
                <h3>
                  <span>{entry.organization}</span>
                  {entry.role ? (
                    <span className="muted-text"> / {entry.role}</span>
                  ) : null}
                </h3>
                {entry.period ? (
                  <p className="experience-period">{entry.period}</p>
                ) : null}
              </div>
              <ul className="experience-highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {entry.links?.length ? (
                <div className="project-links">
                  {entry.links.map((link) => (
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
