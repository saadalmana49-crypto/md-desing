---
name: 'Cloudflare'
slug: cloudflare
url: https://www.cloudflare.com
category: 'Infrastructure'
mode: light
fonts:
  - 'FT Kunst Grotesk'
preview:
  bg: '#ffffff'
  fg: '#262626'
  accent: '#ff5e1f'
summary: >-
  Orange-on-white infrastructure marketing. FT Kunst Grotesk, flat #f0f0f0 surfaces, and a full dark-mode mirror of the same tokens.
colors:
  primary: '#ff5e1f'
  primary-hover: '#d63c01'
  background: '#ffffff'
  text-primary: '#262626'
  text-secondary: '#707070'
  text-tertiary: '#727272'
  text-inverse: '#ffffff'
  surface: '#f0f0f0'
  border: '#f0f0f0'
  dark-background: '#171717'
  dark-surface: '#1a1a1a'
  dark-text-primary: '#fafafa'
  dark-border: '#262626'
  dark-primary: '#ff5e1f'
  dark-accent: '#d63c01'
typography:
  family-primary: 'FT Kunst Grotesk'
  family-mono: '"Apercu Mono Pro", monospace'
  display:
    family: 'FT Kunst Grotesk'
    size: 56px
    weight: 700
    line-height: 1.2
  heading1:
    family: 'FT Kunst Grotesk'
    size: 48px
    weight: 700
    line-height: 1.2
  heading2:
    family: 'FT Kunst Grotesk'
    size: 32px
    weight: 700
    line-height: 1.2
  body-large:
    family: 'FT Kunst Grotesk'
    size: 19px
    weight: 400
    line-height: 1.5
  body:
    family: 'FT Kunst Grotesk'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'FT Kunst Grotesk'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
radius:
  sm: 3px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
elevation:
  card: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 1px 6px 6px 0px inset, rgba(255, 255, 255, 0.35) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.02) 0px 4px 12px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 0px, rgba(0, 0, 0, 0.03) 0px 2px 12px 0px'
  tooltip: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
motion:
  duration-fast: '0.15s'
  duration-base: '0.16s'
  easing-standard: 'ease-out'
  easing-in: 'cubic-bezier(0.4, 0, 1, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.full}'
    padding: '16px 24px'
    font-weight: 500
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.full}'
    padding: '10px 10px'
    font-weight: 500
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
layout:
  breakpoints:
    mobile-sm: 425px
    mobile-lg: 640px
    tablet: 768px
    desktop: 1024px
---

# Design System Inspired by Cloudflare

## 1. Visual Theme & Atmosphere
Cloudflare's design system conveys a sense of technical precision and robust security, anchored by a vibrant orange accent (`#ff5e1f`) against a clean white (`#ffffff`) background and dark gray (`#262626`) text. The layout emphasizes ample whitespace (e.g., 64px vertical spacing between sections) and a structured grid, creating a professional and uncluttered user experience. Typography, primarily "FT Kunst Grotesk" at various weights, provides clear hierarchy and readability across display (56px, 700 weight) and body text (16px, 400 weight). The hero section features a subtle animated background of binary-like patterns and a central glowing light source, creating a dynamic yet focused atmosphere, complemented by autoplaying video elements.

The brand's visual identity is reinforced by subtle background textures, such as dot patterns (`#ebebeb` from `--color-decor-dots-100`) and line animations, hinting at network infrastructure. Interactive elements, like buttons and links, feature swift `0.15s` to `0.16s` transitions with `ease-out` timing, ensuring a responsive feel without being distracting. The use of a full border-radius (`9999px`) on primary buttons contrasts with the generally sharp corners of cards (6px radius), drawing immediate attention to key calls to action.

Key Characteristics:
- Primary accent color: `#ff5e1f` for CTAs and highlights.
- Clear typography: 'FT Kunst Grotesk' with strong hierarchy.
- Ample whitespace: 64px section padding, structured grid.
- Subtle animations: Binary patterns, autoplay video hero.
- Rounded buttons: `9999px` radius for primary calls to action.
- Dark mode support: Defined dark color palette for backgrounds and text.
- Defined motion: `0.15s` and `0.16s` transitions with `ease-out`.

## 2. Color Palette & Roles

- **Primary**
  - `primary` (`#ff5e1f`) — The brand's signature orange, used for primary calls to action, active states, and key highlights.
  - `primary-hover` (`#d63c01`) — A darker shade of orange/red, used for hover states on primary interactive elements (inferred from `dark-accent` variable).

- **Neutral Scale**
  - `background` (`#ffffff`) — The predominant background color for most page sections, providing a clean canvas.
  - `text-primary` (`#262626`) — The main color for body text, headings, and critical information, ensuring high readability.
  - `text-secondary` (`#707070`) — Used for secondary text, descriptions, and less emphasized content.
  - `text-tertiary` (`#727272`) — A slightly different shade of gray for tertiary information, often found in captions or supporting details.
  - `text-inverse` (`#ffffff`) — Used for text placed on dark or primary-colored backgrounds, such as button labels.

- **Surface & Borders**
  - `surface` (`#f0f0f0`) — A very light gray used for subtle background tints, borders on secondary elements, and dividers.
  - `border` (`#f0f0f0`) — The default color for borders on inputs, cards, and other structural elements.

- **Dark Mode Palette**
  - `dark-background` (`#171717`) — The primary background color for dark mode, providing a deep, muted base.
  - `dark-surface` (`#1a1a1a`) — A slightly lighter dark gray for containers and cards in dark mode.
  - `dark-text-primary` (`#fafafa`) — The main text color for dark mode, offering high contrast against dark backgrounds.
  - `dark-border` (`#262626`) — The border color used in dark mode, providing subtle separation.
  - `dark-primary` (`#ff5e1f`) — The primary accent color remains consistent in dark mode.
  - `dark-accent` (`#d63c01`) — A specific darker accent color used within the dark mode context.

## 3. Typography Rules

- **Font Family**:
  - Primary: 'FT Kunst Grotesk', system-ui, sans-serif
  - Monospace: "Apercu Mono Pro", monospace

- **Hierarchy**:
  - **Display**: 'FT Kunst Grotesk' 56px 700 · line-height 1.2 · tracking none · Used for prominent hero headlines.
  - **Heading 1**: 'FT Kunst Grotesk' 48px 700 · line-height 1.2 · tracking none · Main section titles.
  - **Heading 2**: 'FT Kunst Grotesk' 32px 700 · line-height 1.2 · tracking none · Sub-section titles and key feature headings.
  - **Body Large**: 'FT Kunst Grotesk' 19px 400 · line-height 1.5 · tracking none · Emphasized body text or lead paragraphs.
  - **Body**: 'FT Kunst Grotesk' 16px 400 · line-height 1.5 · tracking none · Standard paragraph text and general content.
  - **Caption**: 'FT Kunst Grotesk' 14px 400 · line-height 1.5 · tracking none · Small print, metadata, and secondary notes.
  - **Code/Mono**: "Apercu Mono Pro" 16px 400 · line-height 1.5 · tracking none · For code snippets and technical terms.

- **Principles**
  - **Clarity and Impact**: Headings leverage 'FT Kunst Grotesk' at 700 weight to create immediate visual impact and clear content hierarchy.
  - **Readability**: Body text is set at 16px and 19px with a 1.5 line-height, ensuring comfortable reading on various screen sizes.
  - **Consistent Scale**: A defined typographic scale (56px, 48px, 32px, 19px, 16px, 14px) is used consistently to maintain visual rhythm.
  - **Minimal Tracking**: Tracking is generally set to 'none' for most text, preserving the natural spacing of the 'FT Kunst Grotesk' typeface.

## 4. Component Stylings

### Buttons

Cloudflare features distinct button styles for primary actions, secondary actions, and ghost links, each with clear interactive states. All buttons include a subtle `0.16s ease-out` transition for smooth feedback.

#### Primary Button
The primary button is a prominent call to action, featuring the brand's orange color and a fully rounded shape. On hover, it darkens slightly, and on active, it scales down for a tactile press effect.

```css
.button-primary {
  background-color: var(--color-primary, #ff5e1f);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-family-primary, 'FT Kunst Grotesk'), system-ui, sans-serif;
  font-size: 16px; /* inferred from button[0] and body text */
  font-weight: 500;
  padding: 16px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out),
              transform var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out);
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #d63c01);
}

.button-primary:active {
  transform: scale(0.98) translateY(1px); /* from pseudoStates.active */
}

.button-primary:disabled {
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
Secondary buttons are outlined, using the neutral border color, and are also fully rounded. They provide a less emphatic action, often for supporting choices.

```css
.button-secondary {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #262626);
  font-family: var(--typography-family-primary, 'FT Kunst Grotesk'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 10px; /* from buttons[0] */
  border: 1px solid var(--color-border, #f0f0f0);
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out),
              border-color var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out),
              color var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out),
              transform var(--motion-duration-base, 0.16s) var(--motion-easing-standard, ease-out);
}

.button-secondary:hover {
  background-color: var(--color-surface, #f0f0f0); /* inferred from screenshot */
  border-color: var(--color-surface, #f0f0f0); /* inferred from screenshot */
}

.button-secondary:active {
  transform: scale(0.98) translateY(1px); /* from pseudoStates.active */
}

.button-secondary:disabled {
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
Ghost buttons are text-only links styled as buttons, used for less prominent actions or navigation within a component.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #262626);
  font-family: var(--typography-family-primary, 'FT Kunst Grotesk'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400; /* inferred from screenshot */
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md,
