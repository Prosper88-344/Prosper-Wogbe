import React from 'react';

export interface SectionHeaderProps {
  /** Optional section index numeral or full index string, e.g. "01" or "01 Experience" */
  index?: string;
  /** Optional label next to the numeral in the mono eyebrow (e.g. "Experience") */
  label?: string;
  /** The section title rendered in the h2 display font (e.g. "EXPERIENCE") */
  title: string;
  /** Optional subtitle or description paragraph */
  subtitle?: string;
  /** True if the section is rendered on a dark band (e.g. Contact) */
  onBand?: boolean;
  /** Additional container classes (e.g. max-w-2xl, mb-6) */
  className?: string;
  /** Optional children elements to render below the subtitle */
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  label,
  title,
  subtitle,
  onBand = false,
  className = '',
  children,
}) => {
  // Parse numeral and label from index if needed
  const match = index ? index.match(/^(\d+)(?:\s+(.*))?$/) : null;
  const numeral = match ? match[1] : index;
  const labelText = label || (match ? match[2] : undefined);

  return (
    <div className={`section-header ${className}`}>
      {/* Section index numeral using --accent in monospace if provided */}
      {numeral && (
        <div
          className="font-mono text-[14px] font-medium tracking-[0.08em] mb-2"
          aria-hidden="true"
        >
          <span className="text-[var(--accent)] font-semibold">{numeral}</span>
          {labelText && (
            <span className={onBand ? 'text-[var(--accent)] ml-2' : 'text-[var(--accent-ink)] ml-2'}>
              {labelText}
            </span>
          )}
        </div>
      )}

      {/* Section title using h2 display font */}
      <h2
        className={`font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.02em] text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.08] sm:leading-none text-balance ${
          onBand ? 'text-[var(--band-ink)]' : 'text-[var(--ink)]'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle text */}
      {subtitle && (
        <p
          className={`font-sans text-[15.5px] sm:text-[17px] leading-[1.65] mt-2.5 sm:mt-2 ${
            onBand ? 'text-[var(--band-muted)]' : 'text-[var(--ink-muted)]'
          }`}
        >
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
};
