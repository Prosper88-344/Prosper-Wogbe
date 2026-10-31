import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ThemeSwitch } from './ThemeSwitch';
import { AccraClock } from './AccraClock';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const menuToggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // 5 main links in the desktop horizontal bar
  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Labs', href: '#labs' },
    { label: 'Contact', href: '#contact' },
  ];

  // Portfolio sections with descriptors for the vertical panel (renumbered 01-05 in nav order)
  const portfolioSections = [
    {
      num: '01',
      label: 'Experience',
      href: '#experience',
      descriptor: 'Banking branch IT support & university lab work',
    },
    {
      num: '02',
      label: 'Skills',
      href: '#skills',
      descriptor: 'Core technical proficiencies & administration tooling',
    },
    {
      num: '03',
      label: 'Services',
      href: '#services',
      descriptor: 'Targeted IT support, domain & network setup for business',
    },
    {
      num: '04',
      label: 'Labs',
      href: '#labs',
      descriptor: 'Cisco Packet Tracer topologies & Hyper-V environments',
    },
    {
      num: '05',
      label: 'Contact',
      href: '#contact',
      descriptor: 'Direct phone, email, WhatsApp & professional profiles',
    },
  ];

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Active section scroll spy (Troubleshooting removed)
  useEffect(() => {
    const sectionIds = [
      'hero',
      'experience',
      'skills',
      'services',
      'labs',
      'contact',
    ];

    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const navbarThreshold = 80;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarThreshold && rect.bottom > navbarThreshold) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll clicks with accurate header offset
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = '';

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
      setActiveSection(targetId);
      window.history.pushState(null, '', href);
    }
  };

  // Focus trap & Esc handling for vertical panel
  useEffect(() => {
    if (menuOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
          document.body.style.overflow = '';
          previouslyFocusedRef.current?.focus();
          return;
        }

        if (e.key === 'Tab' && panelRef.current) {
          const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
      }
    }
  }, [menuOpen]);

  return (
    <>
      {/* 1. BAR: one non-wrapping flex row, height 64px */}
      <header className="sticky top-0 z-40 bg-[var(--band)] text-[var(--band-ink)] border-b border-[var(--band-rule)]/40">
        <div className="max-w-[1120px] h-[64px] mx-auto px-4 min-[1100px]:px-6">
          <div className="flex items-stretch h-full w-full whitespace-nowrap">
            
            {/* a) <Logo /> */}
            <div className="flex-none flex items-center">
              <Logo wordmarkClassName="logo-wordmark-responsive" />
            </div>

            {/* b) LINKS STRIP: Desktop horizontal nav with all 5 sections */}
            <nav
              aria-label="Main Navigation"
              className="hidden min-[720px]:flex flex-1 min-w-0 mx-2 sm:mx-4 items-stretch justify-center"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="nav-link-cell flex focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Mobile spacer: pushes actions to the right on <720px screens */}
            <div className="flex-1 min-[720px]:hidden" />

            {/* c) ACTIONS: Theme control | Menu button */}
            <div className="flex-none flex items-center gap-[8px] sm:gap-[10px]">
              {/* Theme control */}
              <div className="h-[36px] flex items-center">
                <ThemeSwitch />
              </div>

              {/* Menu button: sleek icon on 720-959px, label on 960px+ */}
              <button
                type="button"
                id="menu-toggle-button"
                ref={menuToggleButtonRef}
                aria-controls="site-menu"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => {
                  const next = !menuOpen;
                  setMenuOpen(next);
                  document.body.style.overflow = next ? 'hidden' : '';
                }}
                className={`h-[44px] w-[44px] min-[720px]:h-[36px] min-[720px]:w-auto min-[720px]:px-2.5 min-[960px]:px-3 inline-flex items-center justify-center gap-1.5 rounded-[8px] border transition-colors duration-150 motion-reduce:transition-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 shrink-0 font-sans text-[13px] sm:text-[14px] font-semibold ${
                  menuOpen
                    ? 'border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)]'
                    : 'border-[var(--band-rule)] bg-transparent text-[var(--band-ink)] hover:bg-[color-mix(in_srgb,var(--band-rule)_50%,transparent)]'
                }`}
              >
                {menuOpen ? (
                  <svg
                    className="w-4 h-4 shrink-0 text-current"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="3" y1="3" x2="13" y2="13" />
                    <line x1="13" y1="3" x2="3" y2="13" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 shrink-0 text-current"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="2" y1="4" x2="14" y2="4" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                    <line x1="2" y1="12" x2="14" y2="12" />
                  </svg>
                )}
                <span className="hidden min-[960px]:inline">{menuOpen ? 'Close' : 'Menu'}</span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* 2. VERTICAL PANEL & SCRIM */}
      {menuOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-50 flex justify-end transition-opacity duration-150 motion-reduce:transition-none"
        >
          {/* Flat scrim behind it */}
          <div
            onClick={() => {
              document.body.style.overflow = '';
              setMenuOpen(false);
            }}
            className="fixed inset-0 bg-black/70 cursor-pointer"
            aria-hidden="true"
          />

          {/* Vertical Panel Container */}
          <div
            ref={panelRef}
            className="relative w-full min-[720px]:w-[380px] h-full bg-[var(--band)] text-[var(--band-ink)] flex flex-col z-10 shadow-none border-l border-[var(--band-rule)] overflow-y-auto"
          >
            
            {/* Panel Header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--band-rule)] shrink-0">
              <Logo
                onClick={() => {
                  document.body.style.overflow = '';
                  setMenuOpen(false);
                }}
              />
              <button
                type="button"
                ref={closeButtonRef}
                onClick={() => {
                  document.body.style.overflow = '';
                  setMenuOpen(false);
                }}
                className="w-[36px] h-[36px] inline-flex items-center justify-center rounded-[8px] border border-[var(--band-rule)] text-[var(--band-muted)] hover:text-[var(--band-ink)] hover:bg-[color-mix(in_srgb,var(--band-rule)_50%,transparent)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                aria-label="Close menu"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </svg>
              </button>
            </div>

            {/* Panel Body */}
            <div className="p-5 space-y-6 flex-1">
              
              {/* Profile Card */}
              <div className="p-4 rounded-[8px] bg-[var(--band)] border border-[var(--band-rule)] space-y-3 font-sans">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full bg-[var(--status)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-[var(--band-ink)]">
                    {portfolioData.personal.availability.status}
                  </span>
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-[var(--band-ink)]">
                    {portfolioData.personal.name}
                  </h4>
                  <p className="text-[13px] text-[var(--band-muted)] mt-0.5">
                    {portfolioData.personal.titleLine1} &amp; {portfolioData.personal.titleLine2}
                  </p>
                </div>
                <div className="pt-2 border-t border-[var(--band-rule)] text-[12px] text-[var(--band-muted)] flex items-center justify-between">
                  <span>Based in {portfolioData.personal.location}</span>
                  <span className="font-mono text-[11px] text-[var(--band-muted)]">NIB Experience</span>
                </div>
              </div>

              {/* CTAs in Panel: Download CV & Get in Touch */}
              <div className="grid grid-cols-1 gap-2.5 font-sans">
                <a
                  href={portfolioData.personal.cvUrl}
                  download="Prosper-Wogbe-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[40px] inline-flex items-center justify-center gap-2 rounded-[8px] border border-[var(--band-rule)] bg-transparent text-[var(--band-ink)] hover:bg-[color-mix(in_srgb,var(--band-rule)_50%,transparent)] font-semibold text-[14px] transition-colors"
                >
                  <Download className="w-4 h-4 text-[var(--band-ink)]" aria-hidden="true" />
                  <span>Download CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full h-[40px] inline-flex items-center justify-center rounded-[8px] border border-[var(--band-ink)] bg-transparent text-[var(--band-ink)] hover:bg-[var(--band-ink)] hover:border-[var(--band-ink)] hover:text-[var(--band)] font-semibold text-[14px] transition-colors duration-150 motion-reduce:transition-none cursor-pointer"
                >
                  Get in Touch
                </a>
              </div>

              {/* Portfolio Sections list with descriptors: renumbered 01-05 */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-[var(--band-muted)] pb-1.5 border-b border-[var(--band-rule)]">
                  Portfolio Sections
                </div>
                <nav aria-label="Vertical Panel Sections" className="space-y-1">
                  {portfolioSections.map((sec) => {
                    const isActive = activeSection === sec.href.substring(1);
                    return (
                      <a
                        key={sec.href}
                        href={sec.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(sec.href);
                        }}
                        className={`group block p-2.5 rounded-[4px] transition-colors ${
                          isActive
                            ? 'bg-[var(--band-ink)] text-[var(--band)]'
                            : 'hover:bg-[color-mix(in_srgb,var(--band-rule)_50%,transparent)] text-[var(--band-ink)]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-[12px] ${
                              isActive ? 'text-[var(--band)] font-bold' : 'text-[var(--band-muted)] group-hover:text-[var(--band-ink)]'
                            }`}
                          >
                            {sec.num}
                          </span>
                          <span
                            className={`font-sans text-[14px] font-semibold ${
                              isActive ? 'text-[var(--band)]' : 'text-[var(--band-ink)]'
                            }`}
                          >
                            {sec.label}
                          </span>
                        </div>
                        <p
                          className={`font-sans text-[12px] leading-relaxed mt-1 pl-[24px] ${
                            isActive ? 'text-[var(--band)] opacity-90' : 'text-[var(--band-muted)]'
                          }`}
                        >
                          {sec.descriptor}
                        </p>
                      </a>
                    );
                  })}
                </nav>
              </div>

            </div>

            {/* Muted last line: Accra clock component */}
            <div className="p-4 border-t border-[var(--band-rule)] flex items-center justify-center shrink-0">
              <AccraClock />
            </div>

          </div>
        </div>
      )}
    </>
  );
};
