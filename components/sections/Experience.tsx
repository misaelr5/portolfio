import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type ExperienceProps = {
  content: PortfolioContent["experience"];
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section
      className="section-boundary"
      id="experience"
      aria-labelledby="experience-title"
    >
      <Reveal>
        <SectionLabel id="experience-title">{content.label}</SectionLabel>

        <div className="experience-list">
          {content.entries.map((entry) => (
            <article className="experience-entry" key={entry.organization}>
              <div className="experience-heading">
                <h3>
                  <span>{entry.organization}</span>
                  <span className="muted-text"> / {entry.role}</span>
                </h3>
                <p className="experience-period">{entry.period}</p>
              </div>
              <ul className="experience-highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
