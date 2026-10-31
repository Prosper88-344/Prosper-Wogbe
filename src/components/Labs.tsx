import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Labs: React.FC = () => {
  return (
    <section id="labs" className="py-[clamp(48px,7vw,72px)] bg-[var(--bg)] text-[var(--ink)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: 04 Labs, 24px bottom margin */}
        <SectionHeader
          index="04"
          label="Labs"
          title="LABS"
          subtitle="Rigorous configurations tested in Cisco Packet Tracer and Hyper-V environments reflecting real-world multi-tier topologies."
          className="max-w-3xl mb-[24px]"
        />

        {/* Labs Grid: cards with 16px gap */}
        <div className="space-y-[16px]">
          {portfolioData.labs.map((lab) => (
            <div
              key={lab.id}
              className="p-6 sm:p-8 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-5 font-sans"
            >
              {/* Lab Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--rule)]">
                <div>
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[var(--accent-ink)] mb-1">
                    <span>{lab.badge}</span>
                  </div>
                  <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-[var(--ink)] leading-snug">
                    {lab.title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[15.5px] text-[var(--ink-muted)] mt-1.5 max-w-3xl leading-relaxed">
                    {lab.summary}
                  </p>
                </div>
              </div>

              {/* Topology Architecture Spec */}
              <div className="p-3.5 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] text-[14px] sm:text-[14.5px] text-[var(--ink)]">
                <span className="text-[var(--ink-muted)] block mb-1 text-[13px] font-medium">Target Topology:</span>
                <span className="text-[var(--accent-ink)] font-semibold">{lab.topology}</span>
              </div>

              {/* Configured Architecture Components & Demonstrated Skills */}
              <div className="space-y-4 pt-1">
                <div>
                  <p className="text-[14.5px] font-semibold text-[var(--ink)] mb-2">
                    Configured Architecture Components:
                  </p>
                  <ul className="space-y-2 text-[14.5px] sm:text-[15px] text-[var(--ink-muted)]">
                    {lab.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-[var(--rule)]">
                  <span className="text-[13px] sm:text-[13.5px] text-[var(--ink-muted)] mr-1">Skills:</span>
                  {lab.skillsDemonstrated.map((s, i) => (
                    <span
                      key={i}
                      className="text-[12.5px] sm:text-[13px] font-medium text-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 rounded-[6px] border border-[var(--rule)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
