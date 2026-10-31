import React from 'react';

interface SectionDividerProps {
  className?: string;
  contained?: boolean;
}

/**
 * A subtle, thin horizontal line separator component using the --rule border token
 * designed to be inserted between section components in App.tsx to improve visual rhythm and separation.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  contained = false,
}) => {
  if (contained) {
    return (
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} role="separator">
        <hr className="border-0 border-t border-[var(--rule)] my-0" />
      </div>
    );
  }

  return (
    <hr
      className={`border-0 border-t border-[var(--rule)] w-full my-0 ${className}`}
      role="separator"
    />
  );
};

export default SectionDivider;
