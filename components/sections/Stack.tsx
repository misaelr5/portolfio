import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type StackProps = {
  content: PortfolioContent["stack"];
};

export function Stack({ content }: StackProps) {
  return (
    <section className="section-boundary" id="stack" aria-labelledby="stack-title">
      <Reveal className="split-section">
        <SectionLabel id="stack-title">{content.label}</SectionLabel>

        <div className="stack-grid">
          {content.groups.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3 className="section-label section-label--muted">{group.title}</h3>
              <ul className="plain-list stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
