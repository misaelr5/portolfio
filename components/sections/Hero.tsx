import { ExternalLink } from "@/components/ui/ExternalLink";
import type { PortfolioContent } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero section-boundary" aria-labelledby="hero-title">
      <div className="hero-primary">
        <p className="section-label intro-hero intro-hero--eyebrow">
          {content.profile.role}
        </p>
        <h1 className="hero-title intro-hero intro-hero--title" id="hero-title">
          Misael Ledesma
        </h1>
        <div className="hero-copy">
          <p className="hero-statement intro-hero intro-hero--statement">
            {content.hero.statement}
          </p>
          <p className="muted-text intro-hero intro-hero--supporting">
            {content.hero.supporting}
          </p>
        </div>
      </div>

      <div className="hero-meta intro-hero intro-hero--meta">
        <div className="location-language">
          <span>{content.profile.location}</span>
          <span aria-hidden="true">/</span>
          <span>{content.profile.languages}</span>
        </div>
        <nav
          className="hero-links"
          aria-label={content.accessibility.primaryLinks}
        >
          <ExternalLink className="text-link" href={siteConfig.links.github}>
            GitHub
          </ExternalLink>
          <span aria-hidden="true">/</span>
          <ExternalLink
            className="text-link"
            href={siteConfig.links.reacStudio}
          >
            Reac Studio
          </ExternalLink>
          <span aria-hidden="true">/</span>
          <a className="text-link" href={`mailto:${siteConfig.email}`}>
            {content.profile.emailLabel}
          </a>
        </nav>
      </div>
    </section>
  );
}
