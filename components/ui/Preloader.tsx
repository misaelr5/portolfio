"use client";

import { useEffect, useState } from "react";

const NAME = "Misael Ledesma";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => setVisible(false),
      reducedMotion ? 180 : 1250,
    );

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <p className="preloader-name">
        {Array.from(NAME).map((character, index) => (
          <span
            className="preloader-character"
            style={{ "--character-index": index } as React.CSSProperties}
            key={`${character}-${index}`}
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </p>
    </div>
  );
}
