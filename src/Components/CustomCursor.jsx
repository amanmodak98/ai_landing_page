/**
 * CustomCursor Component
 * React wrapper for custom cursor effects
 */

import { useEffect } from 'react';
import { initCustomCursor, destroyCustomCursor } from '../utils/cursorEffects';

const CustomCursor = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled) return;

    const cursor = initCustomCursor({
      size: 40,
      trailSize: 8,
      speed: 0.7,
      magneticRadius: 80,
      magneticStrength: 0.3,
    });

    return () => {
      destroyCustomCursor();
    };
  }, [enabled]);

  return null; // This component doesn't render anything
};

export default CustomCursor;
