/**
 * Split Text Animation Utilities
 * Character-by-character and word-by-word text reveal animations
 */

import { gsap } from 'gsap';

/**
 * Split text into individual character spans
 * @param {HTMLElement} element - The element containing text to split
 * @returns {HTMLElement[]} - Array of character spans
 */
export const splitTextIntoChars = (element) => {
  if (!element) return [];

  const text = element.textContent;
  const chars = text.split('');

  // Clear the element
  element.innerHTML = '';

  // Create spans for each character
  const charSpans = chars.map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    // Preserve spaces
    if (char === ' ') {
      span.style.width = '0.25em';
    }
    element.appendChild(span);
    return span;
  });

  return charSpans;
};

/**
 * Split text into word spans
 * @param {HTMLElement} element - The element containing text to split
 * @returns {HTMLElement[]} - Array of word spans
 */
export const splitTextIntoWords = (element) => {
  if (!element) return [];

  const text = element.textContent;
  const words = text.split(' ');

  element.innerHTML = '';

  const wordSpans = words.map((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    element.appendChild(span);

    // Add space after word (except last)
    if (index < words.length - 1) {
      const space = document.createTextNode(' ');
      element.appendChild(space);
    }

    return span;
  });

  return wordSpans;
};

/**
 * Animate text reveal character by character
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const animateTextReveal = (element, options = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const defaults = {
    duration: 0.05,
    stagger: 0.03,
    ease: 'power3.out',
    from: {
      opacity: 0,
      y: 20,
      rotationX: -90,
    },
    scrollTrigger: null,
  };

  const settings = { ...defaults, ...options };

  // Split text into characters
  const chars = splitTextIntoChars(el);

  // Animate
  return gsap.from(chars, {
    ...settings.from,
    duration: settings.duration,
    stagger: settings.stagger,
    ease: settings.ease,
    scrollTrigger: settings.scrollTrigger,
  });
};

/**
 * Animate text reveal word by word
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const animateWordReveal = (element, options = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const defaults = {
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out',
    from: {
      opacity: 0,
      y: 30,
    },
    scrollTrigger: null,
  };

  const settings = { ...defaults, ...options };

  // Split text into words
  const words = splitTextIntoWords(el);

  // Animate
  return gsap.from(words, {
    ...settings.from,
    duration: settings.duration,
    stagger: settings.stagger,
    ease: settings.ease,
    scrollTrigger: settings.scrollTrigger,
  });
};

/**
 * Text scramble effect - characters scramble then settle
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const animateTextScramble = (element, options = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const originalText = el.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  const defaults = {
    duration: 2,
    delay: 0,
  };

  const settings = { ...defaults, ...options };

  let iteration = 0;
  const totalIterations = originalText.length;

  const interval = setInterval(() => {
    el.textContent = originalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iteration) return originalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    iteration += 1 / 3;

    if (iteration >= totalIterations) {
      clearInterval(interval);
      el.textContent = originalText;
    }
  }, 30);

  return {
    kill: () => clearInterval(interval),
  };
};

/**
 * Clip-path text reveal animation
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const animateTextClipReveal = (element, options = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const defaults = {
    duration: 1.5,
    ease: 'power4.out',
    direction: 'left', // 'left', 'right', 'top', 'bottom'
    scrollTrigger: null,
  };

  const settings = { ...defaults, ...options };

  const clipPaths = {
    left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
    top: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
    bottom: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
  };

  const clip = clipPaths[settings.direction] || clipPaths.left;

  return gsap.fromTo(
    el,
    { clipPath: clip.from },
    {
      clipPath: clip.to,
      duration: settings.duration,
      ease: settings.ease,
      scrollTrigger: settings.scrollTrigger,
    }
  );
};

/**
 * Typewriter effect
 * @param {HTMLElement|string} element - Element or selector
 * @param {Object} options - Animation options
 */
export const animateTypewriter = (element, options = {}) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const originalText = el.textContent;
  el.textContent = '';

  const defaults = {
    speed: 50, // milliseconds per character
    cursor: true,
    cursorChar: '|',
  };

  const settings = { ...defaults, ...options };

  // Add cursor
  if (settings.cursor) {
    const cursor = document.createElement('span');
    cursor.textContent = settings.cursorChar;
    cursor.style.animation = 'blink 1s step-end infinite';
    el.appendChild(cursor);
  }

  let index = 0;
  const interval = setInterval(() => {
    if (index < originalText.length) {
      if (settings.cursor) {
        el.childNodes[0].textContent = originalText.substring(0, index + 1);
      } else {
        el.textContent = originalText.substring(0, index + 1);
      }
      index++;
    } else {
      clearInterval(interval);
      if (settings.cursor) {
        // Remove cursor after typing
        setTimeout(() => {
          const cursor = el.querySelector('span');
          if (cursor) cursor.remove();
        }, 500);
      }
    }
  }, settings.speed);

  return {
    kill: () => clearInterval(interval),
  };
};
