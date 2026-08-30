import React from 'react';

/**
 * Skip Navigation Link Component
 * Allows keyboard users to skip directly to main content
 * WCAG 2.1 - Technique G1
 */
export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
}
