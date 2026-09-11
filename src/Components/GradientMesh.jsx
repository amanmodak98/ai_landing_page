/**
 * Gradient Mesh Background Component
 * Animated multi-point radial gradients for dynamic backgrounds
 */

import React from 'react';

const GradientMesh = ({ variant = 'hero', className = '' }) => {
  const variants = {
    hero: {
      background: `
        radial-gradient(at 0% 0%, rgba(22, 119, 255, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(114, 46, 209, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(19, 194, 194, 0.15) 0px, transparent 50%),
        radial-gradient(at 0% 100%, rgba(235, 47, 150, 0.1) 0px, transparent 50%)
      `,
    },
    subtle: {
      background: `
        radial-gradient(at 20% 30%, rgba(22, 119, 255, 0.08) 0px, transparent 50%),
        radial-gradient(at 80% 20%, rgba(114, 46, 209, 0.08) 0px, transparent 50%),
        radial-gradient(at 70% 80%, rgba(19, 194, 194, 0.08) 0px, transparent 50%)
      `,
    },
    intense: {
      background: `
        radial-gradient(at 0% 0%, rgba(22, 119, 255, 0.25) 0px, transparent 40%),
        radial-gradient(at 100% 0%, rgba(114, 46, 209, 0.25) 0px, transparent 40%),
        radial-gradient(at 100% 100%, rgba(19, 194, 194, 0.25) 0px, transparent 40%),
        radial-gradient(at 0% 100%, rgba(235, 47, 150, 0.2) 0px, transparent 40%)
      `,
    },
    dual: {
      background: `
        radial-gradient(at 30% 50%, rgba(22, 119, 255, 0.2) 0px, transparent 60%),
        radial-gradient(at 70% 50%, rgba(114, 46, 209, 0.2) 0px, transparent 60%)
      `,
    },
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: variants[variant].background,
        filter: 'blur(60px)',
        opacity: 0.8,
      }}
      aria-hidden="true"
    />
  );
};

export default GradientMesh;
