import React from 'react';
import { Headphones, Server, Wifi, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Services: React.FC = () => {
  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'Headphones': return <Headphones className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Server': return <Server className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[var(--accent-ink)]" />;
      default: return <Server className="w-5 h-5 text-[var(--accent-ink)]" />;
    }
  };

  return (
    <section id="services" className="py-[clamp(48px,7vw,72px)] bg-[var(--surface)] text-[var(--ink)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: 03 Services, 24px bottom gap */}
        <SectionHeader
          index="03"
          label="Services"
          title="SERVICES"
          subtitle="Targeted infrastructure maintenance, client desktop support, and domain provisioning for business environments."
          className="max-w-2xl mb-[24px]"
        />

        {/* Services Grid with 16px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {portfolioData.services.map((svc) => (
            <div
              key={svc.id}
              className="p-5 sm:p-6 rounded-[8px] bg-[var(--bg)] border border-[var(--rule)] space-y-3.5 font-sans"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--rule)]">
                <div className="p-2.5 rounded-[6px] bg-[var(--surface)] border border-[var(--rule)] shrink-0">
                  {getServiceIcon(svc.icon)}
                </div>
                <h3 className="font-sans text-[18px] sm:text-[19px] font-semibold text-[var(--ink)] leading-snug">
                  {svc.title}
                </h3>
              </div>

              <p className="text-[15px] sm:text-[15.5px] text-[var(--ink-muted)] leading-relaxed">
                {svc.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-1.5 font-sans">
                <span className="text-[13px] sm:text-[13.5px] text-[var(--ink-muted)] mr-1">Tools &amp; Platforms:</span>
                {svc.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-[12.5px] sm:text-[13px] font-medium text-[var(--ink)] bg-[var(--surface)] px-2.5 py-1 rounded-[6px] border border-[var(--rule)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
