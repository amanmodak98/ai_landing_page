/**
 * Scroll Progress Indicator
 * Visual indicator of page scroll progress
 */

import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 100); // Show after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-1 z-[1000] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Page scroll progress"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Glow effect */}
        <div
          className="absolute right-0 top-0 h-full w-20 blur-xl opacity-75"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(114, 46, 209, 0.8))',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
