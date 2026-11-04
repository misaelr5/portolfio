import Link from "next/link";

import { getAlternateLocale, getLocalePath, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  switchTo: string;
  path?: string;
};

export function LanguageSwitcher({
  locale,
  label,
  switchTo,
  path = "",
}: LanguageSwitcherProps) {
  const alternateLocale = getAlternateLocale(locale);

  return (
    <div className="language-control">
      <span className="visually-hidden">{label}</span>
      <Link
        className="language-switch"
        href={`${getLocalePath(alternateLocale)}${path}`}
        hrefLang={alternateLocale}
        lang={alternateLocale}
        aria-label={switchTo}
      >
        {alternateLocale.toUpperCase()}
      </Link>
    </div>
  );
}
