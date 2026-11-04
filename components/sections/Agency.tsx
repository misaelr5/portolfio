import Link from "next/link";
import { professionalContent } from "@/data/professional";
import type { Locale } from "@/lib/i18n";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Agency({ locale }: { locale: Locale }) {
  const content = professionalContent[locale].agency;
  return (
    <section
      id="agency"
      className="section-boundary agency-section"
      aria-labelledby="agency-title"
    >
      <SectionLabel id="agency-title">{content.label}</SectionLabel>
      <div className="agency-heading">
        <h3>
          Reac Studio<span aria-hidden="true">↗</span>
        </h3>
        <p className="muted-text">{content.category}</p>
        <p>{content.role}</p>
      </div>
      <div className="prose">
        <p>{content.description}</p>
        <h4 className="detail-label">{content.contributionLabel}</h4>
        <p>{content.contribution}</p>
      </div>
      <div className="project-links">
        <ExternalLink href="https://reacstudio.com" className="text-link">
          {content.visit}
        </ExternalLink>
        <Link className="text-link" href={`/${locale}/projects/reac-studio`}>
          {content.caseStudy}
        </Link>
      </div>
      <details className="agency-services">
        <summary>{content.servicesLabel}</summary>
        <p className="muted-text">{content.note}</p>
        <div className="service-grid">
          {content.services.map((service) => (
            <div key={service.title}>
              <h4>{service.title}</h4>
              <ul className="plain-list muted-text">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </section>
  );
}
