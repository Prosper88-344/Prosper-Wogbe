import React from 'react';

/**
 * Skeleton placeholder for an individual Experience Card.
 * Mirrors the exact border, background, typography hierarchy, and spacing of Experience cards.
 */
export const ExperienceCardSkeleton: React.FC = () => {
  return (
    <div
      className="p-6 sm:p-8 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] motion-safe:animate-pulse"
      aria-hidden="true"
    >
      {/* Header Row: Role & Meta vs Date Badge */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--rule)]">
        <div className="space-y-2.5">
          {/* Role title */}
          <div className="h-5 w-52 sm:w-64 bg-[var(--rule)] rounded-[4px]" />
          {/* Company / department / location row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="h-3.5 w-32 bg-[var(--rule)] rounded-[4px]" />
            <div className="h-3.5 w-3 bg-[var(--rule)] rounded-[4px]" />
            <div className="h-3.5 w-24 bg-[var(--rule)] rounded-[4px]" />
            <div className="h-3.5 w-3 bg-[var(--rule)] rounded-[4px]" />
            <div className="h-3.5 w-20 bg-[var(--rule)] rounded-[4px]" />
          </div>
        </div>

        {/* Date badge */}
        <div className="h-8 w-28 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] shrink-0" />
      </div>

      {/* Responsibilities list placeholder */}
      <div className="mt-5 space-y-3">
        <div className="h-4 w-48 bg-[var(--rule)] rounded-[4px]" />
        <div className="space-y-2.5 pt-1">
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-[var(--rule)] shrink-0 mt-0.5" />
            <div className="h-3.5 w-full bg-[var(--rule)] rounded-[4px]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-[var(--rule)] shrink-0 mt-0.5" />
            <div className="h-3.5 w-5/6 bg-[var(--rule)] rounded-[4px]" />
          </div>
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full bg-[var(--rule)] shrink-0 mt-0.5" />
            <div className="h-3.5 w-4/6 bg-[var(--rule)] rounded-[4px]" />
          </div>
        </div>
      </div>

      {/* Tools & Scope Tags row */}
      <div className="mt-6 pt-4 border-t border-[var(--rule)] flex flex-wrap items-center gap-2">
        <div className="h-3.5 w-24 bg-[var(--rule)] rounded-[4px] mr-1" />
        <div className="h-6 w-16 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
        <div className="h-6 w-20 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
        <div className="h-6 w-24 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
        <div className="h-6 w-16 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
      </div>
    </div>
  );
};

/**
 * Skeleton placeholder for the entire Experience section during lazy loading.
 */
export const ExperienceSectionSkeleton: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-[clamp(48px,7vw,72px)] bg-[var(--bg)] text-[var(--ink)]"
      role="status"
      aria-busy="true"
      aria-label="Loading experience section"
    >
      <span className="sr-only">Loading work experience and background...</span>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Placeholder */}
        <div className="max-w-3xl mb-12 motion-safe:animate-pulse">
          <div className="h-3.5 w-24 bg-[var(--rule)] rounded-[4px] mb-2" />
          <div className="h-10 w-48 sm:w-60 bg-[var(--rule)] rounded-[4px] mb-3" />
          <div className="h-4 w-72 sm:w-96 bg-[var(--rule)] rounded-[4px]" />
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          <ExperienceCardSkeleton />
          <ExperienceCardSkeleton />
        </div>

        {/* Education Block Placeholder */}
        <div className="mt-12 pt-8 border-t border-[var(--rule)]">
          <div className="max-w-3xl mb-8 motion-safe:animate-pulse">
            <div className="h-5 w-64 bg-[var(--rule)] rounded-[4px] mb-2" />
            <div className="h-3.5 w-48 bg-[var(--rule)] rounded-[4px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((idx) => (
              <div
                key={idx}
                className="p-6 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-3 motion-safe:animate-pulse"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 bg-[var(--rule)] rounded-[4px]" />
                    <div className="h-3 w-1/2 bg-[var(--rule)] rounded-[4px]" />
                  </div>
                </div>
                <div className="pt-2 border-t border-[var(--rule)] space-y-2">
                  <div className="h-3 w-full bg-[var(--rule)] rounded-[4px]" />
                  <div className="h-3 w-5/6 bg-[var(--rule)] rounded-[4px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Skeleton placeholder for an individual Case Study / Troubleshooting Project Card.
 * Mirrors category header, 3-step breakdown (Problem -> Fix -> Outcome), and tech tags.
 */
export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div
      className="rounded-[8px] bg-[var(--bg)] border border-[var(--rule)] flex flex-col justify-between overflow-hidden motion-safe:animate-pulse"
      aria-hidden="true"
    >
      <div className="p-6 sm:p-7 space-y-5">
        {/* Metadata Header */}
        <div className="flex items-center justify-between gap-2 border-b border-[var(--rule)] pb-3">
          <div className="h-4 w-28 bg-[var(--rule)] rounded-[4px]" />
          <div className="h-3.5 w-16 bg-[var(--rule)] rounded-[4px]" />
        </div>

        {/* Case Title & Summary */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 bg-[var(--rule)] rounded-[4px]" />
          <div className="h-3.5 w-full bg-[var(--rule)] rounded-[4px]" />
          <div className="h-3.5 w-3/4 bg-[var(--rule)] rounded-[4px]" />
        </div>

        {/* 3-Step Breakdown Mini View */}
        <div className="space-y-3 pt-2">
          {[0, 1, 2].map((step) => (
            <div
              key={step}
              className="p-3 rounded-[6px] bg-[var(--surface)] border border-[var(--rule)] space-y-1.5"
            >
              <div className="h-3.5 w-32 bg-[var(--rule)] rounded-[4px]" />
              <div className="h-3 w-full bg-[var(--rule)] rounded-[4px]" />
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Tech Stack + Deep Dive Trigger */}
      <div className="px-6 py-4 bg-[var(--bg)] border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="h-6 w-14 bg-[var(--surface)] rounded-[6px] border border-[var(--rule)]" />
          <div className="h-6 w-16 bg-[var(--surface)] rounded-[6px] border border-[var(--rule)]" />
          <div className="h-6 w-14 bg-[var(--surface)] rounded-[6px] border border-[var(--rule)]" />
        </div>
        <div className="h-4 w-28 bg-[var(--rule)] rounded-[4px]" />
      </div>
    </div>
  );
};

/**
 * Skeleton placeholder for the Troubleshooting / Case Studies section during lazy loading.
 */
export const CaseStudiesSectionSkeleton: React.FC = () => {
  return (
    <section
      id="case-studies"
      className="py-[clamp(48px,7vw,72px)] bg-[var(--surface)] text-[var(--ink)]"
      role="status"
      aria-busy="true"
      aria-label="Loading troubleshooting case studies"
    >
      <span className="sr-only">Loading troubleshooting case studies...</span>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 motion-safe:animate-pulse">
          <div className="max-w-2xl space-y-2">
            <div className="h-3.5 w-32 bg-[var(--rule)] rounded-[4px] mb-2" />
            <div className="h-10 w-56 sm:w-72 bg-[var(--rule)] rounded-[4px] mb-3" />
            <div className="h-4 w-full max-w-lg bg-[var(--rule)] rounded-[4px]" />
          </div>

          {/* Category Filter Tabs skeleton */}
          <div className="flex items-center gap-1.5 p-1 bg-[var(--bg)] border border-[var(--rule)] rounded-[8px] shrink-0">
            {[0, 1, 2, 3].map((tab) => (
              <div key={tab} className="h-8 w-16 bg-[var(--rule)] rounded-[6px]" />
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </div>
      </div>
    </section>
  );
};

/**
 * Skeleton placeholder for an individual Lab Project Card.
 */
export const LabProjectCardSkeleton: React.FC = () => {
  return (
    <div
      className="p-6 sm:p-8 rounded-[8px] bg-[var(--surface)] border border-[var(--rule)] space-y-6 motion-safe:animate-pulse"
      aria-hidden="true"
    >
      {/* Lab Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--rule)]">
        <div className="space-y-2 flex-1">
          <div className="h-3.5 w-28 bg-[var(--rule)] rounded-[4px]" />
          <div className="h-5 w-3/4 sm:w-1/2 bg-[var(--rule)] rounded-[4px]" />
          <div className="h-3.5 w-full max-w-2xl bg-[var(--rule)] rounded-[4px]" />
        </div>
      </div>

      {/* Topology Architecture Spec Box */}
      <div className="p-3.5 rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] space-y-1.5">
        <div className="h-3 w-28 bg-[var(--rule)] rounded-[4px]" />
        <div className="h-4 w-48 bg-[var(--rule)] rounded-[4px]" />
      </div>

      {/* Two Column Grid: Features & Command Snippets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Features */}
        <div className="lg:col-span-6 space-y-3">
          <div className="h-4 w-44 bg-[var(--rule)] rounded-[4px]" />
          <div className="space-y-2">
            {[0, 1, 2, 3].map((f) => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--rule)] shrink-0" />
                <div className="h-3.5 w-5/6 bg-[var(--rule)] rounded-[4px]" />
              </div>
            ))}
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-1.5">
            <div className="h-3.5 w-12 bg-[var(--rule)] rounded-[4px]" />
            <div className="h-6 w-16 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
            <div className="h-6 w-20 bg-[var(--bg)] rounded-[6px] border border-[var(--rule)]" />
          </div>
        </div>

        {/* Right: Command Snippet Box */}
        <div className="lg:col-span-6 space-y-3">
          <div className="h-4 w-48 bg-[var(--rule)] rounded-[4px]" />
          <div className="rounded-[6px] bg-[var(--bg)] border border-[var(--rule)] overflow-hidden">
            <div className="h-8 bg-[var(--surface)] border-b border-[var(--rule)] px-3.5 flex items-center justify-between">
              <div className="h-3 w-28 bg-[var(--rule)] rounded-[4px]" />
              <div className="h-3 w-12 bg-[var(--rule)] rounded-[4px]" />
            </div>
            <div className="p-3.5 space-y-2">
              <div className="h-3 w-3/4 bg-[var(--rule)] rounded-[4px]" />
              <div className="h-3 w-2/3 bg-[var(--rule)] rounded-[4px]" />
              <div className="h-3 w-4/5 bg-[var(--rule)] rounded-[4px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Skeleton placeholder for the Labs section during lazy loading.
 */
export const LabsSectionSkeleton: React.FC = () => {
  return (
    <section
      id="labs"
      className="py-[clamp(48px,7vw,72px)] bg-[var(--bg)] text-[var(--ink)]"
      role="status"
      aria-busy="true"
      aria-label="Loading lab environments and topologies"
    >
      <span className="sr-only">Loading hands-on lab projects and topologies...</span>
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 motion-safe:animate-pulse">
          <div className="h-3.5 w-20 bg-[var(--rule)] rounded-[4px] mb-2" />
          <div className="h-10 w-36 sm:w-48 bg-[var(--rule)] rounded-[4px] mb-3" />
          <div className="h-4 w-full max-w-lg bg-[var(--rule)] rounded-[4px]" />
        </div>

        {/* Labs Grid */}
        <div className="space-y-10">
          <LabProjectCardSkeleton />
          <LabProjectCardSkeleton />
        </div>
      </div>
    </section>
  );
};
