import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  ChevronRight, 
  X,
  ShieldAlert,
  Server,
  Network,
  Cpu
} from 'lucide-react';
import { portfolioData, CaseStudy } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const CaseStudies: React.FC = () => {
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hardware': return <Cpu className="w-4 h-4 text-[var(--accent-ink)]" />;
      case 'network': return <Network className="w-4 h-4 text-[var(--accent-ink)]" />;
      case 'systems': return <Server className="w-4 h-4 text-[var(--accent-ink)]" />;
      default: return <Wrench className="w-4 h-4 text-[var(--accent-ink)]" />;
    }
  };

  return (
    <section id="case-studies" className="py-[clamp(48px,7vw,72px)] bg-[var(--surface)] text-[var(--ink)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header without section index numeral, 24px bottom margin */}
        <div className="mb-[24px]">
          <SectionHeader
            title="TROUBLESHOOTING"
            subtitle="Structured four-stage incident documentation: Problem → Diagnosis → Fix → Result. Grounded in root-cause remediation."
            className="max-w-2xl"
          />
        </div>

        {/* Incidents rendered one after another with 16px gap (tabs/filter removed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {portfolioData.caseStudies.map((item) => (
            <div
              key={item.id}
              className="rounded-[8px] bg-[var(--bg)] border border-[var(--rule)] flex flex-col justify-between overflow-hidden font-sans"
            >
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Metadata Header */}
                <div className="flex items-center justify-between gap-2 text-[13px] text-[var(--ink-muted)] border-b border-[var(--rule)] pb-3">
                  <div className="flex items-center gap-1.5 font-medium text-[var(--ink)]">
                    {getCategoryIcon(item.category)}
                    <span className="capitalize">{item.category} Domain</span>
                  </div>
                  <span className="text-[13px] text-[var(--ink-muted)]">{item.timeframe}</span>
                </div>

                {/* Case Title & Summary */}
                <div>
                  <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-[var(--ink)] leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[14.5px] sm:text-[15px] text-[var(--ink-muted)] mt-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* 4-Step Breakdown Mini View */}
                <div className="space-y-[12px] pt-1 text-[14px]">
                  
                  {/* 1. Problem */}
                  <div className="p-3 rounded-[6px] bg-[var(--surface)] border border-[var(--rule)] text-[var(--ink)]">
                    <span className="font-semibold text-[var(--ink)] block mb-0.5">1. Incident / Problem:</span>
                    <p className="line-clamp-3 sm:line-clamp-2 text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] leading-relaxed">{item.problem}</p>
                  </div>

                  {/* 2. Fix Snapshot */}
                  <div className="p-3 rounded-[6px] bg-[var(--surface)] border border-[var(--rule)] text-[var(--ink)]">
                    <span className="font-semibold text-[var(--accent-ink)] block mb-0.5">2. Applied Resolution:</span>
                    <p className="line-clamp-3 sm:line-clamp-2 text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] leading-relaxed">{item.fix[0]}</p>
                  </div>

                  {/* 3. Business Result */}
                  <div className="p-3 rounded-[6px] bg-[var(--surface)] border border-[var(--rule)] text-[var(--ink)]">
                    <span className="font-semibold text-[var(--accent-ink)] block mb-0.5">3. Business Outcome:</span>
                    <p className="line-clamp-3 sm:line-clamp-2 text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] leading-relaxed">{item.result}</p>
                  </div>

                </div>
              </div>

              {/* Card Footer: Tech Stack + Deep Dive Trigger */}
              <div className="px-5 sm:px-6 py-3.5 bg-[var(--bg)] border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[12.5px] sm:text-[13px] font-medium text-[var(--ink)] bg-[var(--surface)] px-2.5 py-1 rounded-[6px] border border-[var(--rule)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.techStack.length > 3 && (
                    <span className="text-[12px] text-[var(--ink-muted)]">
                      +{item.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalCase(item)}
                  className="accent-link inline-flex items-center gap-1 font-sans text-[14px] font-semibold ml-auto cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 rounded"
                >
                  <span>Full Incident Notes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Incident Detail Modal */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={() => setActiveModalCase(null)}
            className="fixed inset-0 bg-black/60 transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl max-h-[calc(100%-48px)] overflow-y-auto rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] p-6 sm:p-8 space-y-6 font-sans">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--rule)]">
              <div>
                <div className="flex items-center gap-2 text-[13px] text-[var(--ink-muted)] mb-1">
                  <span className="capitalize font-semibold text-[var(--accent-ink)]">{activeModalCase.category} Domain Incident</span>
                  <span>·</span>
                  <span>{activeModalCase.timeframe}</span>
                </div>
                <h3 id="case-modal-title" className="font-sans text-[20px] font-semibold text-[var(--ink)] leading-snug">
                  {activeModalCase.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalCase(null)}
                className="p-1 rounded-[6px] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              
              {/* Problem Statement */}
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold text-[var(--accent-ink)] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-[var(--accent-ink)] shrink-0" />
                  Stage 1: Symptom &amp; Incident Scope
                </h4>
                <div className="p-4 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] text-[14px] text-[var(--ink)] leading-relaxed">
                  {activeModalCase.problem}
                </div>
              </div>

              {/* Diagnosis Steps */}
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold text-[var(--accent-ink)] flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-[var(--accent-ink)] shrink-0" />
                  Stage 2: Root Cause Analysis &amp; Diagnostic Steps
                </h4>
                <div className="p-4 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] space-y-2 text-[14px]">
                  {activeModalCase.diagnosis.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[var(--ink)]">
                      <span className="text-[var(--accent-ink)] font-bold select-none">[0{idx + 1}]</span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fix */}
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold text-[var(--accent-ink)] flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-[var(--accent-ink)] shrink-0" />
                  Stage 3: Technical Resolution Implemented
                </h4>
                <div className="p-4 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] space-y-2 text-[14px]">
                  {activeModalCase.fix.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[var(--ink)]">
                      <span className="text-[var(--accent-ink)] font-bold select-none">→</span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="space-y-2">
                <h4 className="text-[14px] font-semibold text-[var(--accent-ink)] flex items-center gap-1.5">
                  Stage 4: Operational Outcome
                </h4>
                <div className="p-4 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] text-[var(--ink)] leading-relaxed">
                  {activeModalCase.result}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 border-t border-[var(--rule)] flex flex-wrap items-center gap-2">
                <span className="text-[13px] font-medium text-[var(--ink-muted)]">Environment &amp; Technologies:</span>
                {activeModalCase.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[12px] font-medium text-[var(--ink)] bg-[var(--bg)] px-2.5 py-1 rounded-[6px] border border-[var(--rule)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

            {/* Modal Bottom Action */}
            <div className="pt-4 border-t border-[var(--rule)] flex justify-end">
              <button
                onClick={() => setActiveModalCase(null)}
                className="px-4 py-2 text-[14px] font-semibold text-[var(--ink)] hover:text-[var(--accent-ink)] bg-[var(--bg)] border border-[var(--rule)] rounded-[6px] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
