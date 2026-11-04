import Link from "next/link";
import { professionalContent } from "@/data/professional";
import type { Locale } from "@/lib/i18n";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Security({ locale }: { locale: Locale }) {
  const content = professionalContent[locale].security;
  return (
    <section
      id="security"
      className="section-boundary security-section"
      aria-labelledby="security-title"
    >
      <SectionLabel id="security-title">{content.label}</SectionLabel>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      <ul className="technology-list">
        {content.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <p className="muted-text">{content.note}</p>
      <Link
        className="text-link"
        href={`/${locale}/projects/wordpress-security`}
      >
        {content.cta}
      </Link>
    </section>
  );
}
