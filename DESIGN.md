---
name: Clinical Luminance
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#006a63'
  on-secondary: '#ffffff'
  secondary-container: '#99efe5'
  on-secondary-container: '#006f67'
  tertiary: '#00668a'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a7e0'
  on-tertiary-container: '#00384e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#9cf2e8'
  secondary-fixed-dim: '#80d5cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#00504a'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses immaculate hygiene, state-of-the-art dental technology, and empathetic patient care. Designed for high-end boutique dental clinics and cosmetic oral healthcare practices, the aesthetic marries clinical precision with restorative sanctuary.

The core visual movement is a synthesis of **Clinical Modernism** and **Soft Glassmorphism**:
- Ultra-clean backgrounds evoking sterilized, sunlit architectural clinical suites.
- Subtle translucent frosted surfaces representing clarity, glass instrumentation, and purity.
- Deep, grounded typography conveying medical authority, clinical rigor, and trust.
- Calming water-like cyan and sea-glass hues that alleviate medical anxiety, replacing sterile coldness with serene warmth.

## Colors

The palette establishes an atmosphere of tranquil clinical luxury:

- **Primary (`#0ea5e9` - Medical Cerulean):** Conveys water, clean rinses, and vitality. Used for primary calls to action (e.g., "Book Consultation"), active states, and focal progress markers.
- **Secondary (`#0f766e` - Deep Sea Pine / Clinical Teal):** Adds diagnostic authority, grounding, and organic health associations. Ideal for specialized badging, credential badges, and supporting iconography.
- **Tertiary (`#38bdf8` - Luminous Cyan):** Used sparingly for interactive glows, gradient blends, highlights, and secondary badges.
- **Neutral (`#0f172a` - Deep Slate Navy):** Replaces pure black to avoid clinical harshness while delivering AAA accessible contrast for long-form diagnostic copy and prominent titles.
- **Canvas & Surface Base:** Crisp optic white (`#ffffff`) as the root backdrop, complemented by misty cyan-tinted neutrals (`#f8fafc` to `#f0fdfa`) to maintain optical softness without glare.

## Typography

Typography reinforces high-end clinical expertise and effortless legibility:

- **Display & Headlines (Plus Jakarta Sans):** Selected for its welcoming, geometric architecture and contemporary medical warmth. It removes sterility through open apertures and soft curves while retaining strict structural poise.
- **Body & Functional UI (Inter):** Provides neutral, hyper-legible rendering for medical descriptions, procedural breakdowns, pricing transparency, and form interfaces.
- **Tracking & Proportion:** Headings utilize tighter negative tracking (`-0.01em` to `-0.03em`) for a premium editorial finish, while small uppercase metadata badges and procedural tags leverage expanded tracking (`0.04em` to `0.06em`) for immediate scannability.

## Layout & Spacing

The layout is constructed around an expansive 12-column fluid grid system with purposeful whitespace breathing room:

- **Desktop (>= 1200px):** 12 columns, max container width of 1280px, `gutter-desktop` (2rem / 32px), with `margin-desktop` (3.5rem / 56px).
- **Tablet (768px - 1199px):** 8 columns, `gutter` (1.5rem / 24px), with `margin-tablet` (2rem / 32px).
- **Mobile (< 768px):** 4 columns, `gutter` (1rem / 16px), with `margin` (1rem / 16px).

Section flow relies on generous vertical padding (`4rem` to `6rem`) to create an uncluttered, premium sensory experience that eliminates patient cognitive overload.

## Elevation & Depth

Visual hierarchy combines soft, clinical glass surfaces with multi-layered ethereal ambient shadows:

- **Surface Layers (Glassmorphism):**
  - **Base Layer:** Crisp white canvas or faint sky mist (`#f8fafc`).
  - **Glass Surface:** `rgba(255, 255, 255, 0.72)` paired with `backdrop-filter: blur(16px)` and an ultra-fine border `1px solid rgba(255, 255, 255, 0.8)`.
  - **Elevated Glass (Flyouts / Modals):** `rgba(255, 255, 255, 0.88)` with `backdrop-filter: blur(24px)`.

- **Shadow Craft:**
  - **Resting Elements:** Diffused, zero-offset or low-Y ambient drop `box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(14, 165, 233, 0.05)`.
  - **Hovered / Selected Cards:** `box-shadow: 0 20px 40px -12px rgba(14, 165, 233, 0.12), 0 8px 16px -4px rgba(15, 23, 42, 0.04)`.
  - Avoid opaque dark shadows; every shadow carries a microscopic drop of cyan/slate to simulate luminous natural clinic skylights.

## Shapes

The shape vocabulary uses tailored, curvature-continuous rounding (`roundedness: 2`) to communicate safety and modern ergonomics:

- Standard interactive controls (inputs, buttons, select menus) use an 8px (`0.5rem`) radius.
- Treatment cards, procedural containers, and dialog panels use 16px (`1rem`) up to 24px (`1.5rem`) outer radii.
- Pill tags and status pills use full rounding (`9999px`) to offset structural grid lines with organic softness.

## Components

### Buttons
- **Primary:** Filled in `#0ea5e9` with white text, crisp 8px border radius, transitioning to `#0284c7` on hover. Accompanied by a soft cyan ambient shadow on focus and hover.
- **Secondary / Ghost:** Translucent background (`rgba(14, 165, 233, 0.08)`), text in `#0f766e`, with a matching hairline border (`rgba(14, 165, 233, 0.2)`).
- **Size Scale:** Standard interactive height of 48px to accommodate touch accessibility for anxious or elderly patients.

### Cards (Treatments & Doctor Profiles)
- Built on translucent frosted glass (`rgba(255, 255, 255, 0.75)` with `backdrop-filter: blur(12px)`).
- Outlined with a delicate dual-tone rim: light top edge (`rgba(255, 255, 255, 0.9)`) shifting to soft neutral boundary (`rgba(226, 232, 240, 0.6)`).
- Includes an internal padding of `space-lg` (1.5rem).

### Form Inputs & Date Selectors
- Background: `#f8fafc` transitioning to `#ffffff` on active focus.
- 1px border using `#cbd5e1`; shifts to `#0ea5e9` on focus with an outer glow of `rgba(14, 165, 233, 0.15)`.
- Explicit floating labels using `label-md` for accessibility.

### Badges & Chips
- Procedural tags (e.g., "Invisalign Certified", "Painless Sedation") feature a pill-shaped layout with an active pastel wash: background `rgba(56, 189, 248, 0.12)`, text `#0f766e`, and font `label-md`.

### Checkboxes & Radios
- Rounded checkboxes (6px radius) and radios with a 2px stroke in `#94a3b8`.
- Checked state fills with `#0ea5e9` alongside a white checkmark or inner pill dot, surrounded by a 4px soft teal focus ring.

### Domain-Specific Components
- **Before / After Comparison Slider:** Smooth glass handle divider with subtle cyan glow, rounded corners (16px), and high-contrast pill labels anchored at top corners.
- **Appointment Booking Drawer:** Multi-step modal using heavy backdrop blur (`backdrop-filter: blur(20px)`), progress timeline with illuminated cyan nodes, and clear duration/pricing estimates.