/**
 * Chummeshwari Animation Utilities
 * World-class animation helpers for magnetic interactions
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize scroll-triggered reveal animations
 * Elements fade in and slide up as they enter viewport
 */
export const initScrollReveal = (selector = '.reveal-on-scroll', options = {}) => {
  const defaults = {
    start: 'top 80%',
    end: 'top 20%',
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
  };

  const settings = { ...defaults, ...options };

  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: settings.start,
        end: settings.end,
        toggleActions: 'play none none reverse',
      },
      opacity: settings.opacity,
      y: settings.y,
      duration: settings.duration,
      ease: 'power3.out',
    });
  });

  return elements;
};

/**
 * Magnetic hover effect - element follows cursor within bounds
 */
export const magneticHover = (element, strength = 20) => {
  if (!element) return null;

  const handleMouseMove = (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) / width;
    const deltaY = (e.clientY - centerY) / height;

    gsap.to(element, {
      x: deltaX * strength,
      y: deltaY * strength,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Stagger animation for child elements
 */
export const staggerAnimation = (selector, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
  };

  const settings = { ...defaults, ...options };

  gsap.from(selector, settings);
};

/**
 * Parallax effect for background elements
 */
export const initParallax = (selector, speed = 0.5) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.to(element, {
      y: () => (window.innerHeight - element.getBoundingClientRect().top) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return elements;
};

/**
 * Horizontal parallax effect
 */
export const initParallaxHorizontal = (selector, speed = 0.3) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.to(element, {
      x: () => window.scrollY * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return elements;
};

/**
 * Scale parallax - element scales based on scroll
 */
export const initParallaxScale = (selector, scaleRange = [0.8, 1.2]) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { scale: scaleRange[0] },
      {
        scale: scaleRange[1],
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  return elements;
};

/**
 * Rotation parallax - element rotates based on scroll
 */
export const initParallaxRotate = (selector, rotation = 360) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.to(element, {
      rotation: rotation,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return elements;
};

/**
 * Opacity parallax - element fades based on scroll
 */
export const initParallaxOpacity = (selector, opacityRange = [0, 1]) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: opacityRange[0] },
      {
        opacity: opacityRange[1],
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      }
    );
  });

  return elements;
};

/**
 * Text reveal animation with clip-path
 */
export const textRevealClip = (selector) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    gsap.from(element, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return elements;
};

/**
 * Hover lift effect with dynamic shadow
 */
export const hoverLift = (element, liftAmount = 8) => {
  if (!element) return null;

  const handleMouseEnter = () => {
    gsap.to(element, {
      y: -liftAmount,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      y: 0,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Counter animation (numbers counting up)
 */
export const counterAnimation = (element, endValue, duration = 2) => {
  if (!element) return;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: endValue,
    duration: duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Gradient shift animation for backgrounds
 */
export const gradientShift = (element) => {
  if (!element) return;

  gsap.to(element, {
    backgroundPosition: '200% 0',
    duration: 3,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Page transition effect
 */
export const pageTransition = (onComplete) => {
  const tl = gsap.timeline({
    onComplete: onComplete,
  });

  tl.to('.page-transition', {
    scaleY: 1,
    transformOrigin: 'top',
    duration: 0.5,
    ease: 'power3.inOut',
  })
    .to('.page-transition', {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2,
    });

  return tl;
};

/**
 * Batch reveal for multiple elements
 */
export const batchReveal = (selector) => {
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    start: 'top 85%',
  });
};

/**
 * Initialize all chummeshwari animations
 */
export const initChummeshwariAnimations = () => {
  // Scroll reveals
  initScrollReveal('.reveal-on-scroll');

  // Parallax backgrounds - vertical
  initParallax('.parallax-slow', 0.3);
  initParallax('.parallax-medium', 0.5);
  initParallax('.parallax-fast', 0.7);

  // Horizontal parallax
  initParallaxHorizontal('.parallax-horizontal', 0.2);

  // Scale parallax
  initParallaxScale('.parallax-scale', [0.9, 1.1]);

  // Rotation parallax
  initParallaxRotate('.parallax-rotate', 180);

  // Opacity parallax
  initParallaxOpacity('.parallax-fade', [0.3, 1]);

  // Text reveals
  textRevealClip('.text-reveal-clip');

  // Batch reveals for cards
  batchReveal('.card-reveal');

  // Magnetic buttons
  document.querySelectorAll('.btn-magnetic').forEach((btn) => {
    magneticHover(btn, 15);
  });

  // Hover lift for cards
  document.querySelectorAll('.hover-lift').forEach((card) => {
    hoverLift(card, 8);
  });

  console.log('✨ Chummeshwari animations initialized');
};
