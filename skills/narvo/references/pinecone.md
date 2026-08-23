---
name: 'Pinecone'
slug: pinecone
url: https://www.pinecone.io
category: 'AI'
mode: light
fonts:
  - 'GT Planar'
  - 'JetBrains Mono'
preview:
  bg: '#ffffff'
  fg: '#000000'
  accent: '#002bff'
summary: >-
  Pure-white vector-database site. Ultramarine #002bff primary, GT Planar with mono accents.
colors:
  primary: '#002bff'
  primary-hover: '#302bff'
  background: '#ffffff'
  text-primary: '#000000'
  text-accent: '#111827'
  text-secondary: '#4b5563'
  text-muted: '#57534e'
  text-subtle: '#9ca3af'
  text-placeholder: '#a8a29e'
  surface: '#ffffff'
  surface-alt: '#f8fafc'
  surface-sunk: '#f1f5f9'
  border: '#e7e5e4'
  border-strong: '#cbd5e1'
  border-subtle: '#e2e8f0'
  success: '#22c55e'
  accent-violet: '#a440ce'
  accent-cyan: '#8bf6ff'
  dark-surface: '#1c1c1c'
  dark-text: '#ffffff'
  dark-text-muted: '#7a7a7a'
  dark-border: '#404040'
  dark-primary: '#1e86ee'
typography:
  display:
    family: 'gtPlanar'
    size: 32px
    weight: 600
    line-height: 1.2
  heading-1:
    family: 'gtPlanar'
    size: 32px
    weight: 600
    line-height: 1.2
  heading-2:
    family: 'gtPlanar'
    size: 24px
    weight: 600
    line-height: 1.2
  heading-3:
    family: 'gtPlanar'
    size: 20px
    weight: 400
    line-height: 1.5
  body:
    family: 'gtPlanar'
    size: 16px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'gtPlanar'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'gtPlanar'
    size: 12px
    weight: 400
    line-height: 1.5
  overline:
    family: 'gtPlanar'
    size: 10px
    weight: 500
    line-height: 1.6
  code:
    family: 'JetBrains Mono'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40]
radius:
  none: 0px
  full: 50px
elevation:
  card: 'rgba(0, 0, 0, 0.1) 0px 8px 32px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px'
  focus-ring: 'rgb(0, 43, 255) 0px 0px 0px 1px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '#ffffff'
    radius: '{radius.none}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.none}'
    padding: '12px 24px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.none}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.none}'
    padding: '10px 12px'
motion:
  duration-fast: '100ms'
  duration-base: '200ms'
  duration-long: '1000ms'
  easing-linear: 'linear'
  easing-ease-out: 'ease-out'
  easing-cubic: 'cubic-bezier(.4, 0, 1, 1)'
---

# Design System Inspired by Pinecone

## 1. Visual Theme & Atmosphere
Pinecone's design system conveys a modern, data-centric, and technically precise atmosphere, primarily through its sharp `0px` border radii and a high-contrast color palette. The brand's identity is anchored by a vibrant `#002bff` blue, used prominently for calls-to-action and interactive elements, set against a clean `#ffffff` background. The visual experience is further enhanced by subtle CSS keyframe animations, such as the `osano-load-scale` and `cpk-rip` effects, which add dynamism without distraction.

The layout emphasizes clarity and structure, utilizing the `gtPlanar` typeface for both headings and body text to maintain a consistent, professional tone, complemented by `JetBrains Mono` for code snippets. A signature visual element is the abstract network of glowing blue nodes, subtly animated and layered over white space, suggesting connectivity and intelligence. This is reinforced by a grid-like background texture (inferred from screenshot) that provides a sense of order and depth.

Key Characteristics:
-   **Sharp Corners**: `0px` border-radius on most interactive elements.
-   **Primary Blue**: `#002bff` for CTAs and key highlights.
-   **Grid & Nodes**: Subtle background grid with glowing blue nodes.
-   **Monochromatic Icons**: Line-style icons in `#000000` or `#4b5563`.
-   **High Contrast**: `#000000` text on `#ffffff` backgrounds.
-   **Technical Typeface**: `gtPlanar` for readability, `JetBrains Mono` for code.
-   **Subtle Motion**: CSS keyframe animations for interactive feedback.

## 2. Color Palette & Roles
Pinecone employs a focused color palette to establish clear hierarchy and interaction states, with a strong emphasis on a distinct brand blue and a robust neutral scale.

-   **Primary**:
    -   `{colors.primary}` (`#002bff`) — The core brand blue, used for primary calls-to-action, active states, and key interactive elements like links.
    -   `{colors.primary-hover}` (`#302bff`) — A slightly darker shade of blue, used for `:hover` states on primary interactive elements and buttons.
-   **Accent Colors**:
    -   `{colors.success}` (`#22c55e`) — A vibrant green, used for success messages, indicators, and specific data visualizations.
    -   `{colors.accent-violet}` (`#a440ce`) — A deep violet, used sparingly for specific highlight elements or data points (inferred from screenshot).
    -   `{colors.accent-cyan}` (`#8bf6ff`) — A light cyan, used for subtle background accents or glow effects (inferred from screenshot).
-   **Neutral Scale**:
    -   `{colors.text-primary}` (`#000000`) — Dominant text color for headings, main body copy, and high-emphasis content.
    -   `{colors.text-accent}` (`#111827`) — A deep charcoal, used for prominent text elements, often in specific component contexts.
    -   `{colors.text-secondary}` (`#4b5563`) — A medium gray, used for secondary text, descriptions, and less emphasized content.
    -   `{colors.text-muted}` (`#57534e`) — A warm gray, used for tertiary information, footnotes, and subtle details.
    -   `{colors.text-subtle}` (`#9ca3af`) — A light gray, used for very subtle text, often in disabled states or as placeholder text.
    -   `{colors.text-placeholder}` (`#a8a29e`) — A lighter gray, used for placeholder text in input fields.
    -   `{colors.background}` (`#ffffff`) — The main background color for the entire application and content areas.
    -   `{colors.surface-alt}` (`#f8fafc`) — A very light off-white, used for subtle distinctions in background surfaces, like card backgrounds or section separators.
    -   `{colors.surface-sunk}` (`#f1f5f9`) — A slightly darker off-white, used for sunk-in UI elements or subtle background tints.
-   **Borders**:
    -   `{colors.border}` (`#e7e5e4`) — A light gray, used for general borders, dividers, and input field outlines.
    -   `{colors.border-strong}` (`#cbd5e1`) — A slightly darker gray, used for more prominent borders or separators.
    -   `{colors.border-subtle}` (`#e2e8f0`) — A very light gray, used for subtle internal component borders.
-   **Dark Mode (Scoped)**:
    -   `{colors.dark-surface}` (`#1c1c1c`) — Dark background for components in dark mode.
    -   `{colors.dark-text}` (`#ffffff`) — White text on dark backgrounds.
    -   `{colors.dark-text-muted}` (`#7a7a7a`) — Muted text on dark backgrounds.
    -   `{colors.dark-border}` (`#404040`) — Border color in dark mode.
    -   `{colors.dark-primary}` (`#1e86ee`) — Primary color in dark mode.

## 3. Typography Rules
Pinecone utilizes a clear and consistent typographic hierarchy, primarily driven by the `gtPlanar` typeface for both display and body text, with `JetBrains Mono` reserved for code.

-   **Font Family**:
    -   Primary: `'gtPlanar', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
    -   Monospace: `'JetBrains Mono', "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
-   **Hierarchy**:
    -   **Display**: `gtPlanar` `32px` `600` · line-height `1.2` · tracking `none` · Used for prominent hero sections and main page titles.
    -   **H1**: `gtPlanar` `32px` `600` · line-height `1.2` · tracking `none` · Primary section headings.
    -   **H2**: `gtPlanar` `24px` `600` · line-height `1.2` · tracking `none` · Secondary section titles and important sub-headings.
    -   **H3**: `gtPlanar` `20px` `400` · line-height `1.5` · tracking `none` · Tertiary headings and feature titles.
    -   **Body**: `gtPlanar` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text and general content.
    -   **Body Small**: `gtPlanar` `14px` `400` · line-height `1.5` · tracking `none` · Smaller descriptive text, form field hints.
    -   **Caption**: `gtPlanar` `12px` `400` · line-height `1.5` · tracking `none` · Legal text, meta-information, and secondary labels.
    -   **Overline**: `gtPlanar` `10px` `500` · line-height `1.6` · tracking `none` · Uppercase labels for categories or contextual tags.
    -   **Code/Mono**: `JetBrains Mono` `14px` `400` · line-height `1.5` · tracking `.05em` · Used for code snippets, commands, and technical data.
-   **Principles**:
    -   Maintain a strong visual hierarchy by reserving `gtPlanar` `600` weight for all headings (H1-H2) and display text.
    -   Utilize `JetBrains Mono` exclusively for code blocks and inline code, with a `0.05em` letter spacing for distinct readability.
    -   Ensure body text in `gtPlanar` `16px` `400` on `{colors.background}` (`#ffffff`) maintains a high contrast ratio (20.31:1) for optimal readability.
    -   Employ `gtPlanar` `10px` `500` for overline text to clearly categorize sections and maintain a structured appearance.
    -   Avoid mixing `gtPlanar` and `JetBrains Mono` within the same sentence, except for inline code snippets.

## 4. Component Stylings

### Buttons

Pinecone buttons feature sharp corners and clear visual hierarchy, with distinct states for interaction. Transitions are smooth and subtle, enhancing user feedback.

#### Primary Button
A bold, blue button for high-priority actions, featuring white text.
```css
.button-primary {
  background-color: var(--colors-primary, #002bff);
  color: #ffffff;
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 200ms) var(--motion-easing-ease-out, ease-out);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #302bff);
}

.button-primary:active {
  background-color: var(--colors-primary-hover, #302bff); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--colors-primary, #002bff); /* inferred from screenshot */
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
A light button with a subtle border for secondary actions, using primary text color.
```css
.button-secondary {
  background-color: var(--colors-surface, #ffffff);
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 24px;
  border: 1px solid var(--colors-border, #e7e5e4);
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 200ms) var(--motion-easing-ease-out, ease-out),
              border-color var(--motion-duration-base, 200ms) var(--motion-easing-ease-out, ease-out);
}

.button-secondary:hover {
  background-color: var(--colors-surface-sunk, #f1f5f9); /* inferred from screenshot */
  border-color: var(--colors-border-strong, #cbd5e1); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--colors-surface-sunk, #f1f5f9); /* inferred from screenshot */
  border-color: var(--colors-border-strong, #cbd5e1); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--colors-surface-sunk, #f1f5f9); /* inferred from screenshot */
  color: var(--colors-text-subtle, #9ca3af); /* inferred from screenshot */
  border-color: var(--colors-border-subtle, #e2e8f0); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button for tertiary actions, often used in navigation or inline.
```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 0px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.button-ghost:hover {
  color: var(--colors-primary, #002bff);
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--colors-primary-hover, #302bff); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-text-subtle, #9ca3af); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

#### Standard Card
A clean, white card with sharp corners and a subtle shadow, used for displaying content blocks. On hover, the card's shadow subtly expands to indicate interactivity.
```css
.card {
  background-color: var(--colors-surface, #ffffff);
  border-radius: var(--radius-none, 0px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 8px 32px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px);
  padding: 32px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-subtle, #e2e8f0); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 200ms) var(--motion-easing-ease-out, ease-out);
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 12px 48px 0px, rgba(0, 0, 0, 0.08) 0px 4px 16px 0px; /* inferred from screenshot */
}
```

### Inputs & Forms

#### Text Input
A standard text input field with sharp corners and a subtle border. The focus state highlights the input with a blue ring.
```css
.input-text {
  background-color: var(--colors-surface, #ffffff);
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 10px 12px;
  border: 1px solid var(--colors-border, #e7e5e4);
  border-radius: var(--radius-none, 0px);
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              box-shadow var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.input-text::placeholder {
  color: var(--colors-text-placeholder, #a8a29e);
}

.input-text:focus {
  outline: none;
  border-color: var(--colors-primary, #002bff); /* inferred from screenshot */
  box-shadow: var(--elevation-focus-ring, rgb(0, 43, 255) 0px 0px 0px 1px);
}

.input-text:disabled {
  background-color: var(--colors-surface-sunk, #f1f5f9);
  color: var(--colors-text-subtle, #9ca3af);
  border-color: var(--colors-border-subtle, #e2e8f0);
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, using a slightly muted text color.
```css
.form-label {
  color: var(--colors-text-secondary, #4b5563);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
Custom styled checkboxes and radio buttons (inferred, as no specific pseudoStates were extracted beyond general Osano consent manager components).
```css
.checkbox, .radio {
  appearance: none;
  width: 16px; /* inferred from screenshot */
  height: 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e7e5e4);
  border-radius: var(--radius-none, 0px); /* Checkbox */
  border-radius: var(--radius-full, 50px); /* Radio */
  background-color: var(--colors-surface, #ffffff);
  cursor: pointer;
  margin-right: var(--spacing-8, 8px); /* inferred from screenshot */
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}

.checkbox:checked {
  background-color: var(--colors-primary, #002bff);
  border-color: var(--colors-primary, #002bff);
}

.checkbox:checked::before {
  content: '✔'; /* inferred from screenshot */
  color: #ffffff;
  font-size: 10px; /* inferred from screenshot */
  line-height: 1;
}

.radio:checked {
  background-color: var(--colors-primary, #002bff);
  border-color: var(--colors-primary, #002bff);
}

.radio:checked::before {
  content: '';
  width: 8px; /* inferred from screenshot */
  height: 8px; /* inferred from screenshot */
  border-radius: var(--radius-full, 50px);
  background-color: #ffffff;
}

.checkbox:focus, .radio:focus {
  outline: none;
  box-shadow: var(--elevation-focus-ring, rgb(0, 43, 255) 0px 0px 0px 1px);
}

.checkbox:disabled, .radio:disabled {
  background-color: var(--colors-surface-sunk, #f1f5f9);
  border-color: var(--colors-border-subtle, #e2e8f0);
  cursor: not-allowed;
  opacity: 0.7;
}
```

### Navigation

#### Top Navigation Bar
The main navigation bar at the top of the page, featuring a white background and a subtle bottom border.
```css
.nav-bar {
  background-color: var(--colors-surface, #ffffff);
  border-bottom: 1px solid var(--colors-border, #e7e5e4);
  padding: 0 var(--spacing-32, 32px); /* inferred from screenshot */
  height: 73px; /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 50; /* from extracted zIndexValues */
}
```

#### Navigation Link
Individual links within the navigation bar, typically dark text that turns blue on hover.
```css
.nav-link {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  padding: 12px 16px; /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.nav-link:hover {
  color: var(--colors-primary, #002bff);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #002bff);
  font-weight: var(--typography-body-weight, 400); /* inferred from screenshot */
  position: relative;
}

.nav-link.active::after,
.nav-link[aria-current="page"]::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 32px); /* inferred from screenshot */
  height: 2px; /* inferred from screenshot */
  background-color: var(--colors-primary, #002bff);
}
```

#### Dropdown Menu
A menu that appears on hover or click, typically from a navigation item, with a subtle card shadow.
```css
.dropdown-menu {
  background-color: var(--colors-surface, #ffffff);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.1) 0px 8px 32px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px);
  border-radius: var(--radius-none, 0px);
  padding: var(--spacing-16, 16px) 0; /* inferred from screenshot */
  min-width: 180px; /* inferred from screenshot */
  z-index: 10; /* inferred from screenshot */
  transition: opacity var(--motion-duration-base, 200ms) var(--motion-easing-ease-out, ease-out);
}

.dropdown-menu-item {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 10px var(--spacing-16, 16px); /* inferred from screenshot */
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.dropdown-menu-item:hover {
  background-color: var(--colors-surface-sunk, #f1f5f9);
  color: var(--colors-primary, #002bff);
}
```

### Links

#### Standard Link
A typical inline link, styled with the primary blue and an underline.
```css
.link-standard {
  color: var(--colors-primary, #002bff);
  text-decoration: underline;
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: text-decoration var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.link-standard:hover {
  text-decoration: none;
}

.link-standard:visited {
  color: #001eff; /* inferred from screenshot, slightly darker blue */
}
```

#### Secondary Link
A less prominent link, using a secondary text color and no default underline.
```css
.link-secondary {
  color: var(--colors-text-secondary, #4b5563);
  text-decoration: none;
  font-family: var(--typography-body-family, 'gtPlanar');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              text-decoration var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.link-secondary:hover {
  color: var(--colors-primary, #002bff);
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--colors-text-muted, #57534e); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Pinecone utilizes a `4px` base unit for its spacing system, creating a consistent and harmonious visual rhythm.
    -   Base: `4px`
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 40]`
    -   Usage Context:
        -   `0px`: No spacing, for tight alignments.
        -   `4px`: Smallest internal element spacing, e.g., icon to text.
        -   `8px`: Standard small spacing, e.g., between form fields or list items.
        -   `12px`: Moderate spacing, e.g., button padding vertical.
        -   `16px`: Standard component padding, e.g., inside cards or between navigation items.
        -   `20px`: Slightly larger component spacing.
        -   `24px`: Sectional padding, e.g., vertical spacing between content blocks.
        -   `32px`: Larger sectional spacing, e.g., horizontal page padding.
        -   `40px`: Generous spacing for distinct content separation.

-   **Grid & Container** _(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)_
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from screenshot)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `32px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**: Pinecone embraces generous whitespace to create a sense of openness, clarity, and focus. Ample padding around content blocks and between sections reduces visual clutter, allowing key information and interactive elements to stand out. This deliberate use of negative space enhances readability and contributes to a professional, modern aesthetic. The layout often features large horizontal and vertical gaps, typically `64px` or more, to visually separate distinct content areas.

-   **Border Radius Scale**: Pinecone's design language heavily favors sharp, `0px` corners, contributing to its precise and modern aesthetic.
    -   `none`: `0px` — Applied universally to buttons, cards, inputs, and most UI elements.
    -   `full`: `50px` — Used sparingly for specific circular elements, such as avatars or radio buttons.

## 6. Depth & Elevation
Pinecone uses shadows subtly to indicate depth and hierarchy, primarily for interactive components and content containers, while maintaining a generally flat aesthetic.

-   **Flat (z-0)**: `none` — Default state for most static background elements and text.
-   **Card (z-1)**: `{elevation.card}` (`rgba(0, 0, 0, 0.1) 0px 8px 32px 0px, rgba(0, 0, 0, 0.06) 0px 2px 8px 0px`) — Used for standard cards, dropdown menus, and modal backgrounds to lift them slightly off the page.
-   **Focus Ring (z-1)**: `{elevation.focus-ring}` (`rgb(0, 43, 255) 0px 0px 0px 1px`) — Applied as an outline to interactive elements on focus, ensuring accessibility.
-   **Sticky Header (z-50)**: `none` — The main navigation bar maintains a `z-index` of `50` to ensure it remains above scrolling content.
-   **Modal/Overlay (z-2147483636)**: `none` — Overlays and modal dialogs use an extremely high `z-index` of `2147483636` to guarantee they appear on top of all other content.

Shadow Philosophy: Pinecone's shadow usage is minimal and intentional. Shadows are primarily employed to distinguish interactive elements like cards and dropdowns, providing a subtle sense of depth without introducing heavy visual effects. The focus ring is a clear, single-pixel blue outline, prioritizing accessibility and clarity over elaborate visual styling.

## 7. Do's and Don'ts

### Do's
-   **Do** use `{colors.primary}` (`#002bff`) for all primary calls-to-action, such as the "Start Building" button.
-   **Do** set body text to `{typography.body.size}` (`16px`) in `{typography.body.family}` (`gtPlanar`) with `{colors.text-primary}` (`#000000`) on `{colors.background}` (`#ffffff`) for AAA readability (ratio 20.31:1).
-   **Do** apply `0px` border-radius to all buttons, cards, and input fields to maintain the sharp-edged aesthetic.
-   **Do** use `{spacing.32}` (`32px`) for horizontal page padding and `{spacing.64}` (`64px`) for vertical section spacing.
-   **Do** use `{colors.text-secondary}` (`#4b5563`) for secondary descriptive text, ensuring it passes AAA contrast (ratio 7.56:1) on `{colors.background}` (`#ffffff`).
-   **Do** ensure interactive elements like the "Start Building" button transition `background-color` over `{motion.duration-base}` (`200ms`) with `{motion.easing-ease-out}`.
-   **Do** use `{typography.code.family}` (`JetBrains Mono`) for all code snippets and commands like `claude plugin install pinecone`.
-   **Do** apply `{elevation.focus-ring}` (`rgb(0, 43, 255) 0px 0px 0px 1px`) as an outline to all `:focus` states on interactive elements.

### Don'ts
-   **Don't** use `{colors.text-subtle}` (`#9ca3af`) for body text on `{colors.background}` (`#ffffff`); its ratio of 2.54:1 fails AA contrast.
-   **Don't** introduce `border-radius` values other than `0px` or `50px` (for circular elements).
-   **Don't** use `background-color` changes on `:hover` for the Primary Button that deviate from `{colors.primary-hover}` (`#302bff`).
-   **Don't** use `gtPlanar` `600` weight for paragraph text; reserve it for headings (H1, H2) and display text.
-   **Don't** use spacing values outside the defined `{spacing.scale}` `[0, 4, 8, 12, 16, 20, 24, 32, 40]` to ensure consistency.
-   **Don't** use any text color lighter than `{colors.text-secondary}` (`#4b5563`) for essential body copy on white backgrounds.
-   **Don't** use `{colors.primary}` (`#002bff`) as text color on a dark background without ensuring sufficient contrast (e.g., `#002bff` on `#1c1c1c` would be 4.5:1, barely passing AA).
-   **Don't** apply box shadows to elements that are not interactive or intended to convey elevation, to maintain a clean aesthetic.

## 8. Responsive Behavior *(Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing.)*

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~375px): Adjust typography to `14px` body, stack content vertically.
    -   **Mobile Large** (~500px): Navigation collapses to a hamburger menu; primary CTA remains visible.
    -   **Tablet** (~768px): Card layouts shift to 1-2 columns; larger `24px` body text.
    -   **Desktop** (~1024px): Standard 3-column layouts; full navigation visible.
    -   **Desktop Large** (~1440px): Wider content containers, increased horizontal padding.

-   **Touch Targets**:
    -   All interactive elements, especially buttons and links, should maintain a minimum touch target size of `44px` by `44px` (inferred from screenshot).
    -   Ensure a minimum of `8px` spacing between adjacent touch targets to prevent accidental activations.

-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation bar (`.nav-bar`) transitions into a hamburger menu icon at `500px` breakpoint, revealing full links in an overlay.
    -   **Cards**: Multi-column card layouts (`.card`) reflow into a single vertical stack on screens smaller than `768px`.
    -   **Typography**: Display headings (`.display`) scale down to `24px` on mobile (`<500px`) to fit screen width.
    -   **Padding**: Horizontal page padding (`32px`) reduces to `16px` on mobile (`<500px`) to maximize content area.
    -   **Forms**: Complex form layouts with multiple inputs per row (`.input-text`) stack vertically on `768px` and below.
    -   **Spacing**: Vertical spacing between major sections (`64px`) may condense to `40px` on mobile devices.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   Primary: `#002bff`
    -   Primary Hover: `#302bff`
    -   Background: `#ffffff`
    -   Text Primary: `#000000`
    -   Text Secondary: `#4b5563`
    -   Text Subtle: `#9ca3af`
    -   Surface Alt: `#f8fafc`
    -   Border: `#e7e5e4`
    -   Success: `#22c55e`
    -   Dark Surface: `#1c1c1c`
    -   Dark Text: `#ffffff`

-   **Iteration Guide**:
    1.  Always use `{colors.primary}` (`#002bff`) for main CTAs, with `#ffffff` text.
    2.  Ensure all interactive elements have `0px` border-radius.
    3.  Apply `{elevation.card}` shadow to all `.card` components.
    4.  Use `{typography.body.family}` (`gtPlanar`) at `{typography.body.size}` (`16px`) for standard text.
    5.  Implement a `1px` `{colors.primary}` (`#002bff`) outline for `:focus` states on inputs.
    6.  Maintain `{spacing.base}` (`4px`) as the smallest unit for all layout and component spacing.
    7.  Ensure primary buttons have a minimum height of `48px` (inferred from screenshot).
    8.  Use `{typography.code.family}` (`JetBrains Mono`) for all code blocks and inline code.
    9.  Verify text contrast: `#000000` on `#ffffff` (20.31:1 AAA) and `#4b5563` on `#ffffff` (7.56:1 AAA) are good; avoid `#9ca3af` on `#ffffff` (2.54:1 FAIL).
    10. Implement CSS transitions for `background-color` and `color` on interactive elements, using `{motion.duration-base}` (`200ms`) and `{motion.easing-ease-out}`.
    11. Design for mobile-first, collapsing navigation and content to single columns below `768px`.
    12. Use `{colors.border}` (`#e7e5e4`) for all standard borders and dividers.
