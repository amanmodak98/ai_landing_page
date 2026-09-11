/**
 * Smooth Scroll Setup with Lenis
 * Provides buttery-smooth scrolling experience
 */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initialize Lenis smooth scroll
 */
export const initSmoothScroll = () => {
  // Create Lenis instance
  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  // Request animation frame loop
  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // GSAP ScrollTrigger integration
  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  console.log('✨ Smooth scroll initialized');
  return lenisInstance;
};

/**
 * Scroll to a specific element
 */
export const scrollTo = (target, options = {}) => {
  if (!lenisInstance) {
    console.warn('Lenis not initialized');
    return;
  }

  const defaults = {
    offset: 0,
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  };

  const settings = { ...defaults, ...options };

  lenisInstance.scrollTo(target, settings);
};

/**
 * Stop smooth scroll
 */
export const stopScroll = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

/**
 * Start smooth scroll
 */
export const startScroll = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

/**
 * Destroy Lenis instance
 */
export const destroySmoothScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

/**
 * Get Lenis instance
 */
export const getLenis = () => lenisInstance;
