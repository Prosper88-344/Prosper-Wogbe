import React from 'react';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative w-full bg-[var(--band)] text-[var(--band-ink)] overflow-hidden py-[clamp(40px,6vw,64px)]"
      >
        <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* >=1024px: two-column grid, 7fr 5fr, gap 48px, align-items center */}
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 sm:gap-10 lg:gap-12 items-center">
            
            {/* LEFT column, in order: tag, h1, role line, bio, actions */}
            <div className="flex flex-col items-start text-left w-full">
              {/* Tag: "IT SUPPORT SPECIALIST & SYSTEMS ADMINISTRATOR", IBM Plex Mono, uppercase */}
              <span className="inline-block font-[family-name:var(--font-mono)] text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.03em] sm:tracking-[0.08em] bg-[var(--accent)] text-[var(--on-accent)] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[2px] mb-3 sm:mb-4 max-w-full leading-snug">
                IT SUPPORT SPECIALIST &amp; SYSTEMS ADMINISTRATOR
              </span>

              {/* Page's only <h1>: "PROSPER WOGBE", Barlow Condensed 700, UPPERCASE */}
              <h1 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.02em] text-[clamp(2.1rem,6vw,4.5rem)] leading-[1.04] sm:leading-[0.95] text-[var(--band-ink)] [text-wrap:balance]">
                PROSPER WOGBE
              </h1>

              {/* Role line under h1: "Aspiring System Administrator · Founder of Tassu Technologies", rendered from data */}
              <p className="font-sans text-[15.5px] sm:text-[17px] md:text-[18px] leading-snug sm:leading-relaxed mt-2 sm:mt-2.5 text-[var(--band-muted)] flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="font-medium text-[var(--band-muted)]">Aspiring System Administrator</span>
                <span className="hidden xs:inline text-[var(--band-muted)] opacity-60" aria-hidden="true">·</span>
                <strong className="font-bold text-[var(--band-ink)]">Founder of {portfolioData.personal.company}</strong>
              </p>

              {/* Bio text, IBM Plex Sans, comfortable fluid reading width */}
              <p className="font-sans font-normal text-[16px] sm:text-[16.5px] md:text-[17px] leading-[1.65] text-[var(--band-muted)] max-w-2xl mt-3 sm:mt-4">
                {portfolioData.personal.bio}
              </p>

              {/* Actions: solid "Get in Touch" button; exactly one plain "Download CV" link; --status dot with "Open to IT roles" */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
                {/* Primary button: Get in Touch */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-[8px] bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] font-sans font-semibold text-[13.5px] sm:text-[14px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                >
                  Get in Touch
                </a>

                {/* Single Download CV link in hero: text link with 16px download icon */}
                <a
                  href={portfolioData.personal.cvUrl}
                  download="Prosper-Wogbe-CV.pdf"
                  className="band-link group inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] sm:text-[14px] text-[var(--band-ink)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded"
                >
                  <Download className="w-4 h-4 text-[var(--band-muted)] group-hover:text-[var(--band-ink)] transition-colors" aria-hidden="true" />
                  <span>Download CV</span>
                </a>

                {/* Open to IT roles with --status dot */}
                <span className="inline-flex items-center gap-2 font-sans text-[13px] sm:text-[14px] text-[var(--band-muted)]">
                  <span className="text-[var(--status)] text-[10px] sm:text-[11px] leading-none select-none" aria-hidden="true">
                    ●
                  </span>
                  <span>Open to IT roles</span>
                </span>
              </div>
            </div>

            {/* RIGHT column: "At a glance" flat definition list */}
            <div className="w-full mt-4 lg:mt-0">
              <aside
                aria-label="At a glance"
                className="bg-transparent border-0 rounded-none p-0"
              >
                {/* Photo at the top: 88x88px, radius 10px, object-cover, 1px --band-rule border, 16px bottom margin */}
                <img
                  src="/assets/profile.webp"
                  alt={portfolioData.personal.fullName}
                  width={88}
                  height={88}
                  fetchPriority="high"
                  className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] rounded-[10px] border border-[var(--band-rule)] object-cover object-[50%_25%] block shrink-0 mb-3 sm:mb-[16px]"
                />

                {/* Six fact rows: flat two-column definition list (96px label | 1fr value), gap 16px, padding 12px 0 */}
                <dl className="border-t border-b border-[var(--band-rule)] divide-y divide-[var(--band-rule)] m-0 p-0 w-full">
                  {portfolioData.profile.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[96px_1fr] gap-[16px] items-baseline py-[12px]"
                    >
                      {/* label: 13px/600 --band-muted */}
                      <dt className="font-sans text-[13px] font-semibold text-[var(--band-muted)] leading-snug shrink-0">
                        {fact.label}
                      </dt>
                      {/* value: 16px/1.5 --band-ink (15px on mobile for clean fit) */}
                      <dd className="font-sans text-[15px] sm:text-[16px] leading-[1.5] text-[var(--band-ink)] font-normal m-0 break-words w-full">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>

          </div>
        </div>
      </section>

      {/* Tool strip: a full-width band immediately after the hero: exactly six items, Plex Sans 600 14px, 16px gaps */}
      <section
        aria-label="Core tools and platforms"
        className="w-full bg-[var(--accent)] text-[var(--on-accent)] min-h-[44px] flex items-center py-[10px]"
      >
        <div className="max-w-[1120px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            aria-label="Tools and platforms"
            className="flex flex-wrap items-center gap-x-[16px] gap-y-[4px] list-none p-0 m-0 font-sans text-[14px] font-semibold text-[var(--on-accent)]"
          >
            {portfolioData.profile.tools.map((tool, idx) => (
              <React.Fragment key={tool}>
                {idx > 0 && (
                  <li aria-hidden="true" className="select-none text-[var(--on-accent)] opacity-80">
                    ·
                  </li>
                )}
                <li>{tool}</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
