import { CopyEmail } from "@/components/ui/CopyEmail";
import type { PortfolioContent } from "@/data/portfolio";

type EmailControlProps = {
  email: string;
  labels: PortfolioContent["emailControl"];
  className?: string;
};

export function EmailControl({
  email,
  labels,
  className = "",
}: EmailControlProps) {
  return (
    <div className={`email-control ${className}`.trim()}>
      <a className="text-link email-link" href={`mailto:${email}`}>
        {email}
      </a>
      <CopyEmail
        email={email}
        copyLabel={labels.copy}
        copiedLabel={labels.copied}
        copyAriaLabel={labels.copyAriaLabel}
        copiedAriaLabel={labels.copiedAriaLabel}
      />
    </div>
  );
}
