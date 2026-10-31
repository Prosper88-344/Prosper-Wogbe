import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  Network, 
  Headphones, 
  Search, 
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Systems Administration': return <Server className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Support & Troubleshooting': return <Cpu className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Networking': return <Network className="w-5 h-5 text-[var(--accent-ink)]" />;
      case 'Productivity & Design Tools': return <Headphones className="w-5 h-5 text-[var(--accent-ink)]" />;
      default: return <Server className="w-5 h-5 text-[var(--accent-ink)]" />;
    }
  };

  const filteredCategories = portfolioData.skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: matchingSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-[clamp(48px,7vw,72px)] bg-[var(--bg)] text-[var(--ink)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Quick Search, 24px bottom gap */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-[24px]">
          <SectionHeader
            index="02"
            label="Skills"
            title="SKILLS"
            subtitle="Hands-on technical capabilities grounded in banking floor realities and networking laboratories."
            className="max-w-2xl"
          />

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0 font-sans">
            <Search className="w-4 h-4 text-[var(--ink-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Active Directory)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-[14px] rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid with 16px gap; plain text chips, no levels, no checkmarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-4 font-sans"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--rule)]">
                <div className="p-2.5 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] shrink-0">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="font-sans text-[17px] sm:text-[18px] font-semibold text-[var(--ink)] leading-snug">
                    {cat.category}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[var(--ink-muted)] mt-0.5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Items: plain text in its group (chips), no levels */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[13.5px] sm:text-[14px] font-medium text-[var(--ink)] bg-[var(--bg)] px-3 py-1.5 rounded-[6px] border border-[var(--rule)]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-2 font-sans mt-[16px]">
            <p className="text-[15px] font-semibold text-[var(--ink)]">No skills matching "{searchTerm}"</p>
            <p className="text-[14px] text-[var(--ink-muted)]">Try searching for "VLAN", "Active Directory", "Printer", or "Windows".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-2 text-[14px] font-semibold accent-link cursor-pointer"
            >
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Certifications Block */}
        <div className="mt-12 pt-8 border-t border-[var(--rule)]">
          <div className="max-w-2xl mb-6">
            <h3 className="font-sans text-[18px] font-semibold text-[var(--ink)]">
              Certifications &amp; Professional Study Targets
            </h3>
            <p className="font-sans text-[14px] sm:text-[14.5px] text-[var(--ink-muted)] mt-1 leading-relaxed">
              Continuous technical learning aligned with systems administration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            {portfolioData.certificationsAndTraining.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-2 font-sans"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[var(--accent-ink)] shrink-0" />
                  <span className="text-[13px] sm:text-[13.5px] font-semibold text-[var(--accent-ink)]">{cert.provider}</span>
                </div>
                <h4 className="text-[15.5px] sm:text-[16px] font-semibold text-[var(--ink)] leading-snug">{cert.title}</h4>
                <p className="text-[13.5px] sm:text-[14px] text-[var(--ink-muted)] leading-relaxed">{cert.focus}</p>
                <div className="pt-2 text-[13px] sm:text-[13.5px] text-[var(--ink-muted)] border-t border-[var(--rule)]">
                  Status: <strong className="text-[var(--ink)] font-semibold">{cert.status}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
