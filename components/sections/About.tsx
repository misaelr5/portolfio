import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { PortfolioContent } from "@/data/portfolio";

type AboutProps = {
  content: PortfolioContent["about"];
};

export function About({ content }: AboutProps) {
  return (
    <section className="section-boundary" id="about" aria-labelledby="about-title">
      <Reveal className="split-section">
        <SectionLabel id="about-title">{content.label}</SectionLabel>

        <div className="prose">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link inline-cta" href="#projects">
            {content.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
