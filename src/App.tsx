import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { AnimatedSection } from './components/AnimatedSection';
import { 
  ExperienceSectionSkeleton, 
  CaseStudiesSectionSkeleton, 
  LabsSectionSkeleton 
} from './components/Skeletons';

const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const CaseStudies = lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })));
const Labs = lazy(() => import('./components/Labs').then(m => ({ default: m.Labs })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] flex flex-col font-sans">
      {/* Skip to Main Content Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--accent)] focus:text-[var(--on-accent)] focus:font-semibold focus:text-xs sm:focus:text-sm focus:rounded-[8px] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
      >
        Skip to main content
      </a>

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero: Profile & Bio */}
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        {/* 2. Experience: Career Milestone (01 Experience) */}
        <AnimatedSection>
          <Suspense fallback={<ExperienceSectionSkeleton />}>
            <Experience />
          </Suspense>
        </AnimatedSection>

        {/* 1px --rule line separating consecutive light sections */}
        <SectionDivider />

        {/* 3. Troubleshooting: Field Incident Case Studies (Section index removed, rendered directly) */}
        <AnimatedSection>
          <Suspense fallback={<CaseStudiesSectionSkeleton />}>
            <CaseStudies />
          </Suspense>
        </AnimatedSection>

        {/* 1px --rule line separating consecutive light sections */}
        <SectionDivider />

        {/* 4. Skills: Core Competencies (02 Skills) */}
        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        {/* 1px --rule line separating consecutive light sections */}
        <SectionDivider />

        {/* 5. Services: IT Services & Capabilities (03 Services) */}
        <AnimatedSection>
          <Services />
        </AnimatedSection>

        {/* 1px --rule line separating consecutive light sections */}
        <SectionDivider />

        {/* 6. Labs: Technical Simulation Labs (04 Labs) */}
        <AnimatedSection>
          <Suspense fallback={<LabsSectionSkeleton />}>
            <Labs />
          </Suspense>
        </AnimatedSection>

        {/* 7. Contact: Direct Channels (05 Contact) */}
        <AnimatedSection>
          <Suspense fallback={<div className="py-12 text-center text-sm text-[var(--band-muted)] bg-[var(--band)]">Loading contact channels...</div>}>
            <Contact />
          </Suspense>
        </AnimatedSection>
      </main>

      {/* 8. Footer: Dark Band with 1px --band-rule top border */}
      <Footer />
    </div>
  );
}
