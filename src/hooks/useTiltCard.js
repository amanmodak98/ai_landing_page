/**
 * useTiltCard Hook
 * 3D tilt effect for cards based on mouse position
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useTiltCard = (options = {}) => {
  const cardRef = useRef(null);

  const defaults = {
    maxTilt: 15,        // Maximum tilt angle in degrees
    perspective: 1000,  // CSS perspective value
    scale: 1.05,        // Scale on hover
    speed: 400,         // Animation speed in ms
    glare: true,        // Enable glare effect
    glareMaxOpacity: 0.3,
  };

  const settings = { ...defaults, ...options };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Set initial styles
    card.style.transformStyle = 'preserve-3d';
    card.style.perspective = `${settings.perspective}px`;

    // Create glare element if enabled
    let glare;
    if (settings.glare) {
      glare = document.createElement('div');
      glare.className = 'card-glare';
      glare.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
        opacity: 0;
        pointer-events: none;
        mix-blend-mode: overlay;
        border-radius: inherit;
        transition: opacity 0.3s ease;
      `;
      card.appendChild(glare);
    }

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;
      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (mouseY / cardHeight) * settings.maxTilt * -1;
      const rotateY = (mouseX / cardWidth) * settings.maxTilt;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: settings.scale,
        duration: settings.speed / 1000,
        ease: 'power2.out',
      });

      // Update glare
      if (glare) {
        const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        gsap.to(glare, {
          opacity: settings.glareMaxOpacity,
          background: `linear-gradient(${angle}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)`,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: settings.speed / 1000,
        ease: 'power2.out',
      });

      if (glare) {
        gsap.to(glare, {
          opacity: 0,
          duration: 0.3,
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (glare && card.contains(glare)) {
        card.removeChild(glare);
      }
    };
  }, [settings.maxTilt, settings.perspective, settings.scale, settings.speed, settings.glare, settings.glareMaxOpacity]);

  return cardRef;
};

export default useTiltCard;
