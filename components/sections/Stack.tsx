import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type StackProps = {
  content: PortfolioContent["stack"];
};

export function Stack({ content }: StackProps) {
  return (
    <section
      className="section-boundary"
      id="stack"
      aria-labelledby="stack-title"
    >
      <Reveal className="split-section">
        <SectionLabel id="stack-title">{content.label}</SectionLabel>

        <div>
          <p className="muted-text">{content.note}</p>
          <div className="stack-grid">
            {content.groups.map((group) => (
              <div className="stack-group" key={group.title}>
                <h3 className="section-label section-label--muted">
                  {group.title}
                </h3>
                <p className="detail-label">{content.applied}</p>
                <ul className="plain-list stack-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.learning?.length ? (
                  <>
                    <p className="detail-label">{content.learning}</p>
                    <ul className="plain-list muted-text">
                      {group.learning.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
