/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* ============================================
         UNIFIED COLOR SYSTEM
         Maps to design tokens for consistency
         ============================================ */
      colors: {
        // Primary brand colors using design tokens
        primary: {
          DEFAULT: '#1677ff',
          50: '#e6f4ff',
          100: '#bae0ff',
          200: '#91caff',
          300: '#69b1ff',
          400: '#4096ff',
          500: '#1677ff',
          600: '#0958d9',
          700: '#003eb3',
          800: '#002c8c',
          900: '#001d66',
        },
        secondary: {
          DEFAULT: '#722ed1',
          50: '#f9f0ff',
          100: '#efdbff',
          200: '#d3adf7',
          300: '#b37feb',
          400: '#9254de',
          500: '#722ed1',
          600: '#531dab',
          700: '#391085',
          800: '#22075e',
          900: '#120338',
        },
        accent: {
          DEFAULT: '#13c2c2',
          50: '#e6fffb',
          100: '#b5f5ec',
          200: '#87e8de',
          300: '#5cdbd3',
          400: '#36cfc9',
          500: '#13c2c2',
          600: '#08979c',
          700: '#006d75',
          800: '#00474f',
          900: '#002329',
        },
        // Legacy color mappings for backwards compatibility
        color: {
          1: "#AC6AFF",  // Purple
          2: "#FFC876",  // Orange
          3: "#FF776F",  // Coral
          4: "#7ADB78",  // Green
          5: "#858DFF",  // Blue
          6: "#FF98E2",  // Pink
        },
        // Stroke color
        stroke: {
          1: "#26242C",
        },
        // Legacy neutral scale (n-*) - maps to new system where appropriate
        n: {
          1: "#FFFFFF",  // text-primary
          2: "#CAC6DD",  // text-secondary (custom)
          3: "#ADA8C3",  // text-tertiary (custom)
          4: "#757185",  // neutral-500 equivalent
          5: "#3F3A52",  // custom dark
          6: "#252134",  // custom dark
          7: "#15131D",  // custom dark
          8: "#0E0C15",  // bg-primary
          9: "#474060",  // custom
          10: "#43435C", // custom
          11: "#1B1B2E", // custom
          12: "#2E2A41", // custom
          13: "#6C7275", // neutral-600 equivalent
        },
      },

      /* ============================================
         TYPOGRAPHY SYSTEM
         Using design tokens for consistency
         ============================================ */
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        code: ["var(--font-mono)", ...fontFamily.mono],
        grotesk: ["var(--font-display)", ...fontFamily.sans],
        // Legacy compatibility
        sora: ["var(--font-body)", ...fontFamily.sans],
      },

      fontSize: {
        // Fluid typography - values set in CSS custom properties
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },

      letterSpacing: {
        tighter: 'var(--letter-spacing-tight)',
        tight: 'var(--letter-spacing-tight)',
        normal: 'var(--letter-spacing-normal)',
        wide: 'var(--letter-spacing-wide)',
        wider: 'var(--letter-spacing-wider)',
        widest: 'var(--letter-spacing-widest)',
        tagline: ".15em",  // Legacy compatibility
      },

      lineHeight: {
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },

      /* ============================================
         SPACING SYSTEM
         Using design token spacing scale
         ============================================ */
      spacing: {
        0.25: "0.0625rem",  // 1px
        0.5: "0.125rem",    // 2px
        7.5: "1.875rem",    // 30px
        15: "3.75rem",      // 60px
      },

      /* ============================================
         OPACITY & EFFECTS
         ============================================ */
      opacity: {
        15: ".15",
      },

      /* ============================================
         TRANSITIONS
         Using design token timing
         ============================================ */
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "150ms",
        normal: "250ms",
        moderate: "350ms",
        slow: "400ms",
      },

      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        'ease-in': "cubic-bezier(0.4, 0, 1, 1)",
        'ease-out': "cubic-bezier(0, 0, 0.2, 1)",
        'ease-in-out': "cubic-bezier(0.4, 0, 0.2, 1)",
        'sharp': "cubic-bezier(0.4, 0, 0.6, 1)",
        'bounce': "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      /* ============================================
         Z-INDEX SCALE
         ============================================ */
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        dropdown: "100",
        sticky: "200",
        fixed: "300",
        modal: "500",
        popover: "600",
        tooltip: "700",
      },

      /* ============================================
         BORDER SYSTEM
         ============================================ */
      borderWidth: {
        DEFAULT: "0.0625rem",  // 1px
        thin: "1px",
        medium: "2px",
        thick: "4px",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      /* ============================================
         BACKGROUND IMAGES
         ============================================ */
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "gradient-mesh": "var(--gradient-mesh-1)",
      },

      /* ============================================
         SHADOWS & GLOWS
         ============================================ */
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-md)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'glow-blue': 'var(--glow-blue)',
        'glow-purple': 'var(--glow-purple)',
        'glow-cyan': 'var(--glow-cyan)',
      },

      /* ============================================
         ANIMATION
         ============================================ */
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },

  /* ============================================
     PLUGINS
     Custom components and utilities
     ============================================ */
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});

      addComponents({
        /* Container */
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },

        /* Typography Components - Use semantic classes */
        ".h1": {
          "@apply font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tighter": {},
        },
        ".h2": {
          "@apply font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight": {},
        },
        ".h3": {
          "@apply font-display font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight": {},
        },
        ".h4": {
          "@apply font-display font-semibold text-xl md:text-2xl lg:text-3xl leading-snug": {},
        },
        ".h5": {
          "@apply font-display font-semibold text-lg md:text-xl lg:text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-display font-semibold text-base md:text-lg leading-normal": {},
        },

        /* Body Text Variants */
        ".body-1": {
          "@apply text-base md:text-lg lg:text-xl leading-relaxed font-regular": {},
        },
        ".body-2": {
          "@apply text-sm md:text-base leading-normal font-light": {},
        },
        ".caption": {
          "@apply text-sm leading-snug": {},
        },

        /* Tagline */
        ".tagline": {
          "@apply font-display font-medium text-xs tracking-widest uppercase text-secondary": {},
        },

        /* Quote */
        ".quote": {
          "@apply font-mono text-base md:text-lg leading-relaxed": {},
        },

        /* Button Text */
        ".button": {
          "@apply font-mono text-xs font-bold uppercase tracking-wider": {},
        },
      });

      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },
      });
    }),
  ],
};
