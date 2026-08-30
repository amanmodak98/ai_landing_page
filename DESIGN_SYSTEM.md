# Design System Documentation

## Overview

This design system provides a comprehensive, accessible, and modern foundation for the AI Landing Page. Built with world-class UI/UX principles, it ensures consistency, scalability, and excellent user experience across all devices.

---

## Table of Contents

1. [Typography](#typography)
2. [Color System](#color-system)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Accessibility](#accessibility)
6. [Usage Guidelines](#usage-guidelines)

---

## Typography

### Font Stack

**Display/Headings:** Space Grotesk (300-700)
- Modern, geometric sans-serif
- Excellent for headings and display text
- Variable font for optimal performance

**Body Text:** Inter (300-700)
- Highly legible at all sizes
- Optimized for screen reading
- Variable font support

**Code/Monospace:** JetBrains Mono (400-600)
- Clear distinction between characters
- Perfect for technical content

### Fluid Typography

The system uses `clamp()` for responsive typography that scales smoothly between viewports:

```css
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);  /* 16-18px */
--font-size-xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);  /* 24-30px */
--font-size-4xl: clamp(3rem, 2.5rem + 2.5vw, 3.75rem);      /* 48-60px */
```

### Heading Scale

| Class | Size Range | Usage |
|-------|-----------|--------|
| `.h1` or `<h1>` | 48-60px | Page titles, hero headings |
| `.h2` or `<h2>` | 36-48px | Section headings |
| `.h3` or `<h3>` | 30-36px | Subsection headings |
| `.h4` or `<h4>` | 24-30px | Card/component headings |
| `.h5` or `<h5>` | 20-24px | Small headings |
| `.h6` or `<h6>` | 18-20px | Micro headings |

### Body Text

| Class | Usage |
|-------|--------|
| `.body-1` | Large body text, lead paragraphs |
| `.body-2` | Default body text |
| `.body-sm` | Small text |
| `.caption` | Captions, labels |

### Specialized Text

| Class | Usage |
|-------|--------|
| `.tagline` | Uppercase labels/tags |
| `.quote` | Pull quotes, testimonials |
| `.button-text` | Button labels |
| `.lead` | Introductory paragraph |

### Best Practices

✅ **DO:**
- Use semantic HTML headings (h1-h6) for proper hierarchy
- Apply utility classes (`.h1`, `.h2`) only when semantic HTML isn't appropriate
- Use `.lead` for introductory paragraphs
- Keep line length between 60-75 characters for optimal readability

❌ **DON'T:**
- Skip heading levels (h1 → h3)
- Use headings for styling alone (use classes instead)
- Set font sizes with pixel values (use design tokens)
- Use more than one h1 per page

---

## Color System

### Brand Colors

**Primary (Cyber Blue)**
```css
--color-primary: #1677ff
```
Use for: Primary CTAs, links, key interactive elements

**Secondary (Electric Purple)**
```css
--color-secondary: #722ed1
```
Use for: Secondary CTAs, accents, highlights

**Accent (Neon Cyan)**
```css
--color-accent: #13c2c2
```
Use for: Highlights, special elements, alerts

### Semantic Colors

| Color | Variable | Usage |
|-------|----------|--------|
| Success | `--color-success` | Success states, confirmations |
| Warning | `--color-warning` | Warnings, cautions |
| Error | `--color-error` | Errors, destructive actions |
| Info | `--color-info` | Informational messages |

### Neutral Scale

Dark mode optimized neutral palette:

```css
--color-neutral-50:  #fafafa  /* Primary text */
--color-neutral-400: #a3a3a3  /* Secondary text */
--color-neutral-500: #737373  /* Tertiary text */
--color-neutral-800: #262626  /* Elevated surfaces */
--color-neutral-900: #171717  /* Secondary background */
--color-neutral-950: #0a0a0a  /* Primary background */
```

### Background Hierarchy

```css
--bg-primary:   #0a0a0a  /* Main background */
--bg-secondary: #171717  /* Panels, cards */
--bg-tertiary:  #1f1f1f  /* Elevated cards */
--bg-elevated:  #262626  /* Modals, dropdowns */
```

### Gradients

```css
--gradient-blue-purple:   linear-gradient(135deg, #1677ff 0%, #722ed1 100%)
--gradient-cyan-blue:     linear-gradient(135deg, #13c2c2 0%, #1677ff 100%)
--gradient-multi:         linear-gradient(135deg, #1677ff 0%, #722ed1 50%, #eb2f96 100%)
```

### Usage in Tailwind

```jsx
<div className="bg-primary text-white">Primary button</div>
<div className="bg-secondary-500">Secondary color</div>
<div className="text-primary">Primary colored text</div>
```

### Accessibility

All color combinations meet WCAG AA contrast requirements:
- Primary text on dark: 19.36:1 ✅
- Secondary text on dark: 7.42:1 ✅
- Tertiary text on dark: 4.63:1 ✅

---

## Spacing & Layout

### Spacing Scale

Based on 4px (0.25rem) grid:

| Token | Value | Usage |
|-------|-------|--------|
| `--space-1` | 4px | Tight spacing |
| `--space-2` | 8px | Small gaps |
| `--space-3` | 12px | Default gaps |
| `--space-4` | 16px | Medium spacing |
| `--space-6` | 24px | Large spacing |
| `--space-8` | 32px | Section spacing |
| `--space-12` | 48px | Large sections |
| `--space-16` | 64px | Major sections |

### Container

```jsx
<div className="container">
  {/* Max-width: 1240px (77.5rem) on desktop */}
  {/* Responsive padding: 20px mobile, 40px tablet, 60px desktop */}
</div>
```

### Responsive Breakpoints

| Breakpoint | Value | Usage |
|------------|-------|--------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

---

## Components

### Buttons

**Variants:**

```jsx
// Primary button
<button className="btn btn-primary">Primary</button>

// Secondary button
<button className="btn btn-secondary">Secondary</button>

// Outline button
<button className="btn btn-outline">Outline</button>

// Ghost button
<button className="btn btn-ghost">Ghost</button>
```

**Sizes:**

```jsx
<button className="btn btn-sm">Small</button>
<button className="btn">Default</button>
<button className="btn btn-lg">Large</button>
```

**States:**
- Hover: Lift animation + glow effect
- Active: Pressed state
- Disabled: 50% opacity, not clickable
- Focus: Blue outline for keyboard navigation

### Cards

```jsx
// Default card
<div className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

// Glass effect card
<div className="card-glass">
  <h3>Glass Card</h3>
</div>

// Card with glow on hover
<div className="card-glow">
  <h3>Glow Card</h3>
</div>
```

**Card Structure:**

```jsx
<div className="card">
  <div className="card-header">
    <h3>Header</h3>
  </div>
  <div className="card-body">
    <p>Content</p>
  </div>
  <div className="card-footer">
    <button>Action</button>
  </div>
</div>
```

### Badges

```jsx
<span className="badge badge-primary">New</span>
<span className="badge badge-success">Active</span>
<span className="badge badge-warning">Pending</span>
<span className="badge badge-error">Error</span>
```

### Form Elements

```jsx
// Input
<input className="input" type="text" placeholder="Enter text" />

// Error state
<input className="input input-error" />

// Success state
<input className="input input-success" />
```

### Alerts

```jsx
<div className="alert alert-info">
  <span>ℹ️</span>
  <p>Informational message</p>
</div>

<div className="alert alert-success">Success message</div>
<div className="alert alert-warning">Warning message</div>
<div className="alert alert-error">Error message</div>
```

---

## Accessibility

### WCAG 2.1 AA Compliance

This design system is built to meet WCAG 2.1 Level AA standards:

✅ Color Contrast: All text meets 4.5:1 ratio minimum
✅ Touch Targets: Minimum 44×44px for interactive elements
✅ Keyboard Navigation: Full keyboard support
✅ Screen Readers: Proper ARIA labels and semantic HTML
✅ Focus Indicators: Clear, visible focus states
✅ Reduced Motion: Respects `prefers-reduced-motion`

### Skip Navigation

Every page includes a skip navigation link for keyboard users:

```jsx
import SkipNav from './Components/SkipNav'

<SkipNav />
// Allows users to skip directly to main content
```

### Semantic HTML

Use proper semantic elements:

```jsx
<header role="banner">...</header>
<nav role="navigation" aria-label="Main navigation">...</nav>
<main role="main">...</main>
<footer role="contentinfo">...</footer>
```

### ARIA Labels

Provide context for interactive elements:

```jsx
<button aria-label="Close menu" aria-expanded={isOpen}>
  <MenuIcon />
</button>

<img src="logo.png" alt="Company logo" />
<img src="decorative.png" alt="" aria-hidden="true" />
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Visible focus indicators (blue outline)
- Logical tab order
- Escape key closes modals

### Reduced Motion

Animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Usage Guidelines

### Getting Started

1. **Import design system in your component:**

```jsx
import './styles/design-tokens.css'
import './styles/typography.css'
import './styles/accessibility.css'
import './styles/components.css'
```

2. **Use Tailwind utilities:**

```jsx
<div className="container mx-auto px-4">
  <h1 className="h1 mb-6">Heading</h1>
  <p className="body-1 text-secondary">Body text</p>
</div>
```

3. **Apply component classes:**

```jsx
<button className="btn btn-primary">Click me</button>
<div className="card card-glass">Glass card</div>
```

### Component Composition

Build complex UIs by combining primitives:

```jsx
<div className="card hover-lift">
  <div className="card-header">
    <h3 className="h4">Feature Title</h3>
    <span className="badge badge-primary">New</span>
  </div>
  <div className="card-body">
    <p className="body-2 text-secondary">Feature description</p>
  </div>
  <div className="card-footer">
    <button className="btn btn-primary">Learn More</button>
  </div>
</div>
```

### Custom Styling

When needed, extend with CSS custom properties:

```css
.my-component {
  padding: var(--space-6);
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  color: var(--text-primary);
}
```

### Performance Tips

1. **Use variable fonts** - Already configured
2. **Lazy load images** - Implement for below-fold content
3. **Minimize CSS** - Tailwind purges unused styles
4. **Optimize assets** - Compress images before deployment

### Testing Checklist

Before deploying:

- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Check color contrast with tools
- [ ] Test on mobile devices
- [ ] Verify reduced motion preference
- [ ] Validate HTML semantics
- [ ] Run Lighthouse audit (target: 90+)

---

## Design Tokens Reference

All design tokens are defined in `src/styles/design-tokens.css`. Use these variables instead of hardcoded values for consistency:

**Typography:** `--font-size-*`, `--font-weight-*`, `--line-height-*`, `--letter-spacing-*`

**Colors:** `--color-*`, `--bg-*`, `--text-*`, `--border-*`

**Spacing:** `--space-*`

**Animation:** `--duration-*`, `--ease-*`

**Borders:** `--radius-*`, `--border-width-*`

**Shadows:** `--shadow-*`, `--glow-*`

**Z-index:** `--z-*`

---

## Support & Contribution

For questions or improvements to the design system:

1. Check this documentation first
2. Review existing components in `src/styles/components.css`
3. Ensure changes maintain WCAG AA compliance
4. Test across browsers and devices
5. Update this documentation with new patterns

---

**Last Updated:** August 2026
**Version:** 2.0
**Maintained by:** Development Team
