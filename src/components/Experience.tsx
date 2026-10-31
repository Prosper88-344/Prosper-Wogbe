import React from 'react';
import { Building2, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-[clamp(48px,7vw,72px)] bg-[var(--bg)] text-[var(--ink)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 01 Experience, 24px bottom margin */}
        <SectionHeader
          index="01"
          label="Experience"
          title="EXPERIENCE"
          subtitle="Banking branch IT support and university lab work."
          className="max-w-3xl mb-[24px]"
        />

        {/* Experience Timeline Cards: 16px gap */}
        <div className="space-y-[16px]">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[var(--rule)]">
                <div>
                  <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-[var(--ink)] leading-snug">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mt-2 font-sans text-[13.5px] sm:text-[14px] text-[var(--ink-muted)]">
                    <span className="font-semibold text-[var(--accent-ink)] flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 shrink-0" />
                      {exp.organization}
                    </span>
                    <span aria-hidden="true" className="text-[var(--rule)]">·</span>
                    <span className="text-[var(--ink-muted)]">{exp.department}</span>
                    <span aria-hidden="true" className="text-[var(--rule)]">·</span>
                    <span className="flex items-center gap-1 text-[var(--ink-muted)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent-ink)] shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] font-sans text-[12.5px] sm:text-[13px] font-medium text-[var(--ink)] shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent-ink)] shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities list without checkmark icons */}
              <div className="mt-4 sm:mt-5 space-y-2.5 font-sans">
                <p className="text-[14px] sm:text-[14.5px] font-semibold text-[var(--ink-muted)]">
                  Key Technical Responsibilities &amp; Achievements:
                </p>
                <ul className="space-y-3 sm:space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-[15.5px] sm:text-[16px] md:text-[17px] text-[var(--ink)] leading-[1.65]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tagged skills */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[var(--rule)] flex flex-wrap items-center gap-1.5 sm:gap-2 font-sans">
                <span className="text-[12.5px] sm:text-[13px] text-[var(--ink-muted)] mr-1">Tools &amp; Scope:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[12px] sm:text-[13px] font-medium text-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 rounded-[6px] border border-[var(--rule)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline Block: spacing tightened */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[var(--rule)]">
          <div className="max-w-3xl mb-3 sm:mb-4">
            <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-[var(--ink)]">
              Degree &amp; Diploma in Information Technology
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] mt-1">
              Ghana Communication Technology University (GCTU)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-3 font-sans"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] flex items-center justify-center text-[var(--accent-ink)] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-semibold text-[var(--ink)]">{edu.degree}</h4>
                    <p className="text-[13px] sm:text-[13.5px] text-[var(--ink-muted)]">{edu.institution} · {edu.location}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-[14px] sm:text-[14.5px] text-[var(--ink-muted)] pt-2 border-t border-[var(--rule)]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed text-[var(--ink)]">
                      <span className="text-[var(--accent-ink)] font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
