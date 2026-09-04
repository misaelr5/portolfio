"use client";

import { useEffect, useRef, useState } from "react";

type CopyEmailProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  copyAriaLabel: string;
  copiedAriaLabel: string;
};

export function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
  copyAriaLabel,
  copiedAriaLabel,
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      className="copy-button"
      onClick={copyEmail}
      aria-label={copied ? copiedAriaLabel : copyAriaLabel}
      aria-live="polite"
    >
      <span className={copied ? "copy-label copy-label--hidden" : "copy-label"}>
        {copyLabel}
      </span>
      <span className={copied ? "copy-label" : "copy-label copy-label--hidden"}>
        {copiedLabel}
      </span>
    </button>
  );
}
