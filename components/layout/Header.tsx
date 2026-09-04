import { EmailControl } from "@/components/ui/EmailControl";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import type { PortfolioContent } from "@/data/portfolio";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type HeaderProps = {
  locale: Locale;
  content: PortfolioContent;
};

export function Header({ locale, content }: HeaderProps) {
  return (
    <header className="site-header intro-header">
      <div className="header-inner">
        <a
          className="brand text-link"
          href="#top"
          aria-label={content.accessibility.backToTop}
        >
          {siteConfig.name}
          <span aria-hidden="true">_</span>
        </a>

        <div className="header-actions">
          <LanguageSwitcher
            locale={locale}
            label={content.languageSwitcher.label}
            switchTo={content.languageSwitcher.switchTo}
          />
          <div className="header-contact">
            <span className="availability">{content.profile.availability}</span>
            <span className="header-separator" aria-hidden="true">
              /
            </span>
            <EmailControl
              email={siteConfig.email}
              labels={content.emailControl}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
