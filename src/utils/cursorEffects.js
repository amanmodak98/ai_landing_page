/**
 * Custom Cursor Effects
 * Animated cursor follower with trail effect and magnetic attraction
 */

import { gsap } from 'gsap';

let cursorInstance = null;

export class CustomCursor {
  constructor(options = {}) {
    this.options = {
      size: 40,
      trailSize: 8,
      ease: 'power2.out',
      speed: 0.7,
      magneticRadius: 80,
      magneticStrength: 0.3,
      ...options,
    };

    this.cursor = null;
    this.cursorTrail = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    this.isHovering = false;
    this.magneticTarget = null;

    this.init();
  }

  init() {
    // Create cursor element
    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    this.cursor.style.cssText = `
      position: fixed;
      width: ${this.options.size}px;
      height: ${this.options.size}px;
      border: 2px solid rgba(22, 119, 255, 0.5);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
      mix-blend-mode: difference;
    `;

    // Create cursor trail
    this.cursorTrail = document.createElement('div');
    this.cursorTrail.className = 'custom-cursor-trail';
    this.cursorTrail.style.cssText = `
      position: fixed;
      width: ${this.options.trailSize}px;
      height: ${this.options.trailSize}px;
      background: rgba(114, 46, 209, 0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
    `;

    document.body.appendChild(this.cursor);
    document.body.appendChild(this.cursorTrail);

    // Hide default cursor
    document.body.style.cursor = 'none';

    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    document.addEventListener('mouseleave', this.handleMouseLeave.bind(this));

    // Detect hoverable elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"], .btn-magnetic');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => this.handleElementHover(el, true));
      el.addEventListener('mouseleave', () => this.handleElementHover(el, false));
    });
  }

  handleMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Check for magnetic elements
    this.checkMagneticElements(e);
  }

  handleMouseEnter() {
    gsap.to(this.cursor, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  }

  handleMouseLeave() {
    gsap.to(this.cursor, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  }

  handleElementHover(element, isEntering) {
    if (isEntering) {
      this.isHovering = true;
      gsap.to(this.cursor, {
        width: this.options.size * 1.5,
        height: this.options.size * 1.5,
        borderColor: 'rgba(22, 119, 255, 1)',
        duration: 0.3,
      });
    } else {
      this.isHovering = false;
      this.magneticTarget = null;
      gsap.to(this.cursor, {
        width: this.options.size,
        height: this.options.size,
        borderColor: 'rgba(22, 119, 255, 0.5)',
        duration: 0.3,
      });
    }
  }

  checkMagneticElements(e) {
    const magneticElements = document.querySelectorAll('.btn-magnetic');
    let foundTarget = null;

    magneticElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (distance < this.options.magneticRadius) {
        foundTarget = { el, centerX, centerY };
      }
    });

    this.magneticTarget = foundTarget;
  }

  animate() {
    // Smooth cursor follow
    let targetX = this.mouseX;
    let targetY = this.mouseY;

    // Apply magnetic pull
    if (this.magneticTarget) {
      const { centerX, centerY } = this.magneticTarget;
      targetX += (centerX - this.mouseX) * this.options.magneticStrength;
      targetY += (centerY - this.mouseY) * this.options.magneticStrength;
    }

    this.cursorX += (targetX - this.cursorX) * this.options.speed;
    this.cursorY += (targetY - this.cursorY) * this.options.speed;

    // Update cursor position
    this.cursor.style.left = `${this.cursorX}px`;
    this.cursor.style.top = `${this.cursorY}px`;

    // Update trail position (slower)
    const trailSpeed = this.options.speed * 0.5;
    const trailX = parseFloat(this.cursorTrail.style.left || this.mouseX);
    const trailY = parseFloat(this.cursorTrail.style.top || this.mouseY);

    this.cursorTrail.style.left = `${trailX + (this.cursorX - trailX) * trailSpeed}px`;
    this.cursorTrail.style.top = `${trailY + (this.cursorY - trailY) * trailSpeed}px`;

    requestAnimationFrame(this.animate.bind(this));
  }

  destroy() {
    if (this.cursor) {
      this.cursor.remove();
    }
    if (this.cursorTrail) {
      this.cursorTrail.remove();
    }
    document.body.style.cursor = 'auto';
    cursorInstance = null;
  }
}

/**
 * Initialize custom cursor (singleton)
 */
export const initCustomCursor = (options = {}) => {
  // Only initialize on desktop
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return null;
  }

  if (cursorInstance) {
    return cursorInstance;
  }

  cursorInstance = new CustomCursor(options);
  return cursorInstance;
};

/**
 * Destroy custom cursor
 */
export const destroyCustomCursor = () => {
  if (cursorInstance) {
    cursorInstance.destroy();
  }
};

export default { initCustomCursor, destroyCustomCursor };
