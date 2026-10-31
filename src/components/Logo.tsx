import React from 'react';

interface LogoProps {
  className?: string;
  wordmarkClassName?: string;
  glyphClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  wordmarkClassName = '', 
  glyphClassName = '',
  onClick 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Prosper Wogbe, back to top"
      className={`group inline-flex items-center gap-[10px] whitespace-nowrap no-underline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded shrink-0 ${className}`}
    >
      {/* "PW" Glyph: inline SVG, 26px tall (35px wide), stroke-width 3.8, stroke takes color from var(--logo) / var(--accent) */}
      <svg
        viewBox="0 0 36 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={`w-[35px] h-[26px] shrink-0 text-[var(--logo)] group-hover:text-[var(--accent-hover)] transition-colors duration-150 motion-reduce:transition-none ${glyphClassName}`}
      >
        <path d="M2.5 23 V4 H10 L13.5 7.5 V9 L10 12.5 H2.5" />
        <path d="M18.5 4 L22.2 23 L26 11 L29.8 23 L33.5 4" />
      </svg>

      {/* "PROSPER WOGBE" Wordmark: Barlow Condensed 700, 22px, uppercase, letter-spacing 0.04em, using var(--band-ink) */}
      <span
        className={`font-[family-name:var(--font-display)] font-bold uppercase text-[19px] sm:text-[22px] tracking-[0.04em] whitespace-nowrap leading-none select-none text-[var(--band-ink)] ${wordmarkClassName}`}
      >
        PROSPER WOGBE
      </span>
    </a>
  );
};
