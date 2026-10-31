import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--band-rule)] bg-[var(--band)] text-[var(--band-muted)] py-12">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Reusable Logo component */}
        <div>
          <Logo />
        </div>

        {/* Line 1: "Tech that works." in Plex Sans 600, 16px --band-muted, left-aligned */}
        <p className="font-sans font-semibold text-[16px] text-[var(--band-muted)]">
          Tech that works.
        </p>

        {/* Line 2: One row (stacked on <640px) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[var(--band-rule)] text-[14px] text-[var(--band-muted)] font-sans">
          <span>© 2026 Prosper Wogbe</span>
          <span>IT Support Specialist · Founder, Tassu Technologies · Accra, Ghana</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="font-sans text-[14px] font-semibold text-[var(--band-ink)] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 transition-colors cursor-pointer self-start sm:self-auto"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
