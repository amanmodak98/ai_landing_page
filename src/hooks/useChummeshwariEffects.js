import { useEffect } from 'react';
import { initSmoothScroll } from '../utils/smoothScroll';
import { initChummeshwariAnimations } from '../utils/animations';

/**
 * Chummeshwari Effects Hook
 * Initializes all world-class animations and smooth scroll
 */
export const useChummeshwariEffects = () => {
  useEffect(() => {
    try {
      // Initialize smooth scroll
      const lenis = initSmoothScroll();

      // Initialize all chummeshwari animations
      initChummeshwariAnimations();

      // Cleanup
      return () => {
        if (lenis) {
          lenis.destroy();
        }
      };
    } catch (error) {
      console.error('Error initializing chummeshwari effects:', error);
    }
  }, []);
};
