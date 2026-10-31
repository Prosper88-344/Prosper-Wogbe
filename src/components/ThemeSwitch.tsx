import React, { useEffect, useState } from 'react';

export const ThemeSwitch: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined' && document.documentElement.dataset.theme) {
      return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    }
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') {
          return saved;
        }
      } catch {
        // ignore error
      }
    }
    // Light mode is the primary theme
    return 'light';
  });

  const syncThemeMeta = () => {
    const meta = document.getElementById('theme-color-meta') || document.querySelector('meta[name="theme-color"]');
    if (meta && typeof window !== 'undefined') {
      const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
      if (bg) {
        meta.setAttribute('content', bg);
      }
    }
  };

  const applyTheme = (nextTheme: 'light' | 'dark') => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    syncThemeMeta();
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // ignore error
    }
  };

  const toggleTheme = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    syncThemeMeta();
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`h-[36px] w-[36px] rounded-[8px] border border-[var(--band-rule)] bg-transparent inline-flex items-center justify-center text-[var(--band-ink)] hover:bg-[color-mix(in_srgb,var(--band-rule)_50%,transparent)] hover:text-[var(--band-ink)] transition-colors duration-150 motion-reduce:transition-none cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--accent)] shrink-0 ${className}`}
    >
      {isDark ? (
        /* Sun icon: currently dark, one click switches to light */
        <svg
          className="w-[18px] h-[18px] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        /* Moon icon: currently light, one click switches to dark */
        <svg
          className="w-[18px] h-[18px] shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};
