import { EmailControl } from "@/components/ui/EmailControl";
import { ExternalLink } from "@/components/ui/ExternalLink";
import type { PortfolioContent } from "@/data/portfolio";
import { siteConfig } from "@/lib/site";

type FooterProps = {
  content: PortfolioContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-column footer-content">
        <div className="footer-top">
          <div>
            <p className="footer-name">{siteConfig.name}</p>
            <p className="muted-text footer-availability">
              {content.profile.availability}
            </p>
          </div>
          <EmailControl
            email={siteConfig.email}
            labels={content.emailControl}
          />
        </div>

        <div className="footer-bottom">
          <nav
            className="footer-links"
            aria-label={content.accessibility.socialLinks}
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
          <p className="muted-text">© 2026 Misael Ledesma</p>
        </div>
      </div>
    </footer>
  );
}
