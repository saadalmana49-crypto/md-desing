---
name: 'Hermes Agent'
slug: hermes-agent
url: https://hermes-agent.nousresearch.com/
category: 'AI'
mode: dual
fonts:
  - 'displayFont'
  - 'monoFont'
preview:
  bg: '#0000f2'
  fg: '#f5f5f5'
  accent: '#edff45'
summary: >-
  Pure #0000f2 blue against paper white, serif display over mono, glitch-art and classical illustration.
colors:
  primary: '#0000f2'
  background: '#f5f5f5'
  text-primary: '#f5f5f5'
  text-secondary: '#000000'
  accent-yellow: '#edff45'
  surface-light: '#ffffff'
  border-light: '#f5f5f5'
  dropdown-hover: '#eceaf5'
typography:
  display:
    family: 'displayFont, ui-sans-serif, system-ui, sans-serif'
    size: 81px
    weight: 800
    line-height: 1.2
  h1:
    family: 'displayFont, ui-sans-serif, system-ui, sans-serif'
    size: 39px
    weight: 800
    line-height: 1.2
  h2:
    family: 'displayFont, ui-sans-serif, system-ui, sans-serif'
    size: 24px
    weight: 800
    line-height: 1.2
  body:
    family: 'displayFont, ui-sans-serif, system-ui, sans-serif'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'displayFont, ui-sans-serif, system-ui, sans-serif'
    size: 11px
    weight: 400
    line-height: 1.5
  code:
    family: 'monoFont, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 96, 128]
radius:
  sm: 4px
  none: 0px
elevation:
  card: 'rgba(0, 0, 0, 0.25) 0px 4px 14px 0px'
motion:
  duration-base: '0.15s'
  duration-arc: '0.2s'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  easing-ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  animation-arc-stroke: '2.23s'
layout:
  breakpoints:
    sm: 767px
    md: 768px
components:
  button-primary:
    bg: '{colors.background}'
    text: '{colors.primary}'
    border: '1px solid {colors.primary}'
    radius: '{radius.none}'
    padding: '8.57px 16px'
    font-weight: 800
    font-size: 13.47px
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-primary}'
    radius: '{radius.none}'
    padding: '8.57px 16px'
    font-weight: 800
    font-size: 13.47px
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: 'none'
    radius: '{radius.none}'
    padding: '0px 0px 7.35px 0px'
    font-weight: 400
    font-size: 10.08px
  card-feature:
    bg: '{colors.primary}'
    text: '{colors.text-primary}'
    radius: '{radius.none}'
    padding: '48px'
  input-text:
    bg: '{colors.surface-light}'
    text: '{colors.text-secondary}'
    border: '1px solid {colors.primary}'
    radius: '{radius.none}'
    padding: '12px 16px'
  nav-link:
    color: '{colors.text-primary}'
    hover-color: '{colors.accent-yellow}'
    font-weight: 400
    font-size: 14px
  dropdown-menu:
    bg: '{colors.surface-light}'
    text: '{colors.primary}'
    border: '2px solid {colors.primary}'
    radius: '{radius.none}'
    padding: '8px 12px'
  link-standard:
    color: '{colors.primary}'
    text-decoration: 'underline'
  link-secondary:
    color: '{colors.text-primary}'
    text-decoration: 'underline'
---

# Design System Inspired by Hermes Agent | Nous Research

## 1. Visual Theme & Atmosphere
The Hermes Agent design system is characterized by a high-contrast, monochromatic blue (`#0000f2`) and white (`#f5f5f5`) aesthetic, creating a stark and technical atmosphere. Dominant visual elements include "glitch art" or "digital noise" textures and classical-inspired illustrations of figures radiating energy, often rendered in the primary blue on a white background or vice-versa. The layout emphasizes generous whitespace and a frameless, full-bleed presentation, particularly for hero sections and feature cards, which are often set against the vibrant `#0000f2` background. The site incorporates autoplay video and CSS keyframe animations, such as the `hw-arc-stroke` animation, to add subtle dynamism to static imagery.

Typography plays a critical role, leveraging a distinct serif `displayFont` for headings and a `monoFont` for code and secondary information, reinforcing a blend of classical and futuristic themes. Interactive elements are minimal, often appearing as text links or buttons with sharp, unrounded corners and clear hover states. The overall impression is one of advanced technology, precision, and a unique visual identity that avoids conventional gradients or complex shadow effects, instead relying on strong color blocking and textured imagery to convey depth and focus.

**Key Characteristics**
-   Dominant `#0000f2` (Hermes Blue) and `#f5f5f5` (Paper White) palette.
-   Serif `displayFont` for titles, monospace `monoFont` for code.
-   "Glitch art" and classical illustrations as signature imagery.
-   Minimalist UI with sharp, `0px` border-radius elements.
-   Autoplay video and CSS animations for subtle motion.
-   High-contrast text pairings like `#f5f5f5` on `#0000f2`.
-   Generous whitespace and full-bleed section backgrounds.

## 2. Color Palette & Roles
The Hermes Agent color palette is highly constrained, primarily relying on a bold blue and a stark white, with a single bright accent for highlights.

-   **Primary**:
    -   `#0000f2` (Hermes Blue) — The brand's core identity color, used extensively for backgrounds, primary text on light surfaces, and interactive elements.
-   **Accent Colors**:
    -   `#edff45` (Accent Yellow) — A high-contrast yellow used sparingly for highlights, active states, and specific text elements to draw attention.
-   **Neutral Scale**:
    -   `#f5f5f5` (Paper White) — The main background color for light sections and primary text color when placed on Hermes Blue.
    -   `#ffffff` (Pure White) — Used for specific surface elements like input fields and occasionally as a background.
    -   `#000000` (Text Secondary) — Used for body text on light backgrounds like Pure White or Paper White.
-   **Surface & Borders**:
    -   `#eceaf5` (Dropdown Hover) — A light grey-purple used as a subtle hover background for dropdown menu items.
    -   `#f5f5f5` (Border Light) — Used for subtle borders on elements like secondary buttons.

## 3. Typography Rules
The typography system for Hermes Agent combines a strong, classic serif typeface for display and headings with a precise monospace font for functional text, all within a high-contrast environment.

-   **Font Family**:
    -   Primary: `displayFont`, with fallbacks `ui-sans-serif, system-ui, sans-serif`.
    -   Monospace: `monoFont`, with fallbacks `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`.
-   **Hierarchy**:
    -   **Display**: `displayFont` `81px` `800` · line-height `1.2` · tracking `none` · Used for prominent hero section headlines.
    -   **H1**: `displayFont` `39px` `800` · line-height `1.2` · tracking `none` · Main section titles.
    -   **H2**: `displayFont` `24px` `800` · line-height `1.2` · tracking `none` · Sub-section titles and feature headings.
    -   **Body**: `displayFont` `14px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text on light backgrounds.
    -   **Caption**: `displayFont` `11px` `400` · line-height `1.5` · tracking `none` · Small descriptive text or metadata.
    -   **Code/Mono**: `monoFont` `14px` `400` · line-height `1.5` · tracking `0.18em` · Used for code snippets, terminal commands, and eyebrow text.
-   **Principles**:
    -   **High Contrast Readability**: Prioritize strong contrast pairings, such as `#f5f5f5` on `#0000f2` or `#000000` on `#ffffff`, for optimal legibility.
    -   **Distinctive Headings**: Utilize the `displayFont` at large sizes and `800` weight to create a bold and memorable visual identity for key messages.
    -   **Functional Monospace**: Reserve `monoFont` for technical details, labels, and elements requiring a precise, code-like appearance, often with `0.18em` tracking.
    -   **Minimal Text Styling**: Avoid decorative text styles beyond font family, size, and weight, maintaining a clean and direct presentation.
    -   **Consistent Line Height**: Apply a tighter line-height of `1.2` for headings and a more generous `1.5` for body text to ensure readability and visual balance.

## 4. Component Stylings

### Buttons
Buttons feature sharp, unrounded corners and high-contrast text, often with a subtle border. Hover states introduce a color inversion or highlight.

**Primary Button**
A prominent call-to-action button, typically with a light background and Hermes Blue text and border. On hover, the background inverts to Hermes Blue.
```css
.button-primary {
  background-color: var(--color-background, #f5f5f5);
  color: var(--color-primary, #0000f2);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--components-button-primary-font-size, 13.47px);
  font-weight: var(--components-button-primary-font-weight, 800);
  padding: var(--components-button-primary-padding, 8.57px 16px);
  border: var(--components-button-primary-border, 1px solid #0000f2);
  border-radius: var(--radius-none, 0px);
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  background-color: var(--color-primary, #0000f2); /* inferred from screenshot */
  color: var(--color-text-primary, #f5f5f5); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-primary, #0000f2); /* inferred from screenshot */
  color: var(--color-text-primary, #f5f5f5); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Secondary Button**
Used for less prominent actions, often appearing as a bordered outline button on a dark background. On hover, the background fills with the border color.
```css
.button-secondary {
  background-color: var(--components-button-secondary-bg, transparent);
  color: var(--colors-text-primary, #f5f5f5);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--components-button-secondary-font-size, 13.47px);
  font-weight: var(--components-button-secondary-font-weight, 800);
  padding: var(--components-button-secondary-padding, 8.57px 16px);
  border: var(--components-button-secondary-border, 1px solid #f5f5f5);
  border-radius: var(--radius-none, 0px);
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  background-color: var(--colors-text-primary, #f5f5f5); /* inferred from screenshot */
  color: var(--color-primary, #0000f2); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--colors-text-primary, #f5f5f5); /* inferred from screenshot */
  color: var(--color-primary, #0000f2); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

**Ghost Button**
A text-only button, often used for navigation within a section or for less critical actions. It appears as plain text with an underline on hover.
```css
.button-ghost {
  background-color: var(--components-button-ghost-bg, transparent);
  color: var(--colors-text-primary, #f5f5f5);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--components-button-ghost-font-size, 10.08px);
  font-weight: var(--components-button-ghost-font-weight, 400);
  padding: var(--components-button-ghost-padding, 0px 0px 7.35px 0px);
  border: var(--components-button-ghost-border, none);
  border-radius: var(--radius-none, 0px);
  text-decoration: none;
  cursor: pointer;
  transition: text-decoration-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:hover {
  text-decoration: underline;
  text-decoration-color: currentcolor;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-accent-yellow, #edff45); /* inferred from screenshot */
  text-decoration: underline;
  text-decoration-color: currentcolor;
}

.button-ghost:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Cards & Containers
Feature cards are full-bleed sections with a solid Hermes Blue background, displaying white text and digital art. They are typically flat with no visible shadows.

**Feature Card**
A large, distinct card used to highlight product features. It uses the primary brand color as its background and white text, often incorporating a unique glitch art image.
```css
.card-feature {
  background-color: var(--components-card-feature-bg, #0000f2);
  color: var(--components-card-feature-text, #f5f5f5);
  padding: var(--components-card-feature-padding, 48px);
  border-radius: var(--radius-none, 0px);
  position: relative;
  overflow: hidden;
  transition: transform var(--motion-duration-base, 0.15s) var(--motion-easing-ease-out, cubic-bezier(0, 0, 0.2, 1));
}

.card-feature:hover {
  transform: translateY(-2px); /* inferred from screenshot */
  box-shadow: 0px 4px 14px rgba(0,0,0,0.1); /* inferred from screenshot, a subtle lift */
}
```

### Inputs & Forms
Input fields are minimal, featuring a light background and a Hermes Blue border to indicate focus.

**Text Input**
A standard text input field, typically with a white background and a clear Hermes Blue border when active.
```css
.input-text {
  background-color: var(--components-input-text-bg, #ffffff);
  color: var(--components-input-text-text, #000000);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--components-input-text-padding, 12px 16px);
  border: var(--components-input-text-border, 1px solid #0000f2);
  border-radius: var(--radius-none, 0px);
  outline: none;
  transition: border-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.input-text:focus {
  border-color: var(--color-primary, #0000f2);
  box-shadow: 0 0 0 2px rgba(0, 0, 242, 0.2); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-background, #f5f5f5); /* inferred from screenshot */
  color: var(--color-text-secondary, #000000); /* inferred from screenshot */
  opacity: 0.7;
  cursor: not-allowed;
}
```

**Form Label**
Simple text label for form elements, using the primary text color on its respective background.
```css
.form-label {
  color: var(--colors-text-primary, #f5f5f5);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
}
```

**Checkbox/Radio**
(none observed in source)

### Navigation
The navigation is clean and direct, featuring text links that highlight on hover and indicate active states.

**Top Navigation Bar**
The main navigation bar, typically a solid Hermes Blue background with white text links.
```css
.nav-bar {
  background-color: var(--color-primary, #0000f2);
  color: var(--colors-text-primary, #f5f5f5);
  padding: var(--spacing-24, 24px) var(--spacing-48, 48px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}
```

**Navigation Link**
Individual links within the navigation bar. They are simple text, with an underline appearing on hover and an accent color for the active state.
```css
.nav-link {
  color: var(--components-nav-link-color, #f5f5f5);
  font-family: var(--typography-body-family, 'displayFont, ui-sans-serif, system-ui, sans-serif');
  font-size: var(--components-nav-link-font-size, 14px);
  font-weight: var(--components-nav-link-font-weight, 400);
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              text-decoration-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  color: var(--components-nav-link-hover-color, #edff45); /* inferred from screenshot */
  text-decoration: underline;
  text-decoration-color: currentcolor;
  text-underline-offset: 4px; /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-accent-yellow, #edff45); /* inferred from screenshot */
  text-decoration: underline;
  text-decoration-color: var(--color-accent-yellow, #edff45); /* inferred from screenshot */
  text-underline-offset: 4px; /* inferred from screenshot */
}
```

**Dropdown Menu**
A menu that appears on hover, typically with a light background, Hermes Blue text, and a distinct blue border.
```css
.dropdown-menu {
  background-color: var(--components-dropdown-menu-bg, #f5f5f5);
  color: var(--components-dropdown-menu-text, #0000f2);
  border: var(--components-dropdown-menu-border, 2px solid #0000f2); /* inferred from screenshot, overrides extracted --hermes-outline-inset */
  border-radius: var(--radius-none, 0px);
  padding: var(--components-dropdown-menu-padding, 8px 12px);
  list-style: none;
  margin: 0;
  min-width: 160px; /* inferred from screenshot */
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.25) 0px 4px 14px 0px);
  transition: opacity var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item {
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px);
  cursor: pointer;
  white-space: nowrap;
  transition: background-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--colors-dropdown-hover, #eceaf5);
}
```

### Links
Links are primarily text-based, using either Hermes Blue on light backgrounds or white on Hermes Blue backgrounds, with a clear underline on hover.

**Standard Link**
Used for inline text links on light backgrounds, such as within documentation or body text.
```css
.link-standard {
  color: var(--components-link-standard-color, #0000f2);
  text-decoration: var(--components-link-standard-text-decoration, underline);
  transition: text-decoration-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-standard:hover {
  text-decoration-color: var(--color-accent-yellow, #edff45); /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--components-link-standard-color, #0000f2); /* inferred from screenshot */
}
```

**Secondary Link**
Used for inline text links on Hermes Blue backgrounds, such as in the hero section or feature cards.
```css
.link-secondary {
  color: var(--components-link-secondary-color, #f5f5f5);
  text-decoration: var(--components-link-secondary-text-decoration, underline);
  transition: text-decoration-color var(--motion-duration-base, 0.15s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary:hover {
  text-decoration-color: var(--color-accent-yellow, #edff45); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--components-link-secondary-color, #f5f5f5); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: The spacing system is built on a `4px` base unit, creating a comprehensive scale for consistent layout and element separation.
    -   Base `4px` → `[4, 8, 12, 16, 20, 24, 32, 40, 48, 96, 128]`
    -   **Usage Context**:
        -   `4px`: Smallest element spacing, e.g., between icon and text.
        -   `8px`: Padding within small components, spacing between inline items.
        -   `12px`: Padding for dropdown items, minor vertical spacing.
        -   `16px`: Horizontal padding for buttons, input fields.
        -   `20px`: (no specific usage observed, available for fine-tuning)
        -   `24px`: Padding for navigation bars, spacing between distinct elements.
        -   `32px`: Gutter between grid columns (inferred), vertical spacing for smaller sections.
        -   `40px`: (no specific usage observed, available for fine-tuning)
        -   `48px`: Large section padding, padding within feature cards.
        -   `96px`: Significant vertical spacing between major page sections.
        -   `128px`: Extra large vertical spacing for hero sections or full-page breaks.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*:
    -   **Max Width**: `1440px` (inferred from viewport)
    -   **Columns**: `12` (inferred)
    -   **Gutter**: `32px` (inferred from `--hw-gap` variable)
    -   **Section Padding**: `48px` horizontal and vertical (inferred from `--hw-gutter` variable)
-   **Whitespace Philosophy**: Hermes Agent utilizes generous whitespace, particularly the dominant `#0000f2` background, to create a sense of expansiveness and focus around content blocks. Elements are often isolated, allowing them to breathe and stand out, contributing to a clean, uncluttered, and high-tech aesthetic. The ample use of negative space reinforces the minimalist approach and directs user attention efficiently.
-   **Border Radius Scale**:
    -   `0px` (none) — Default for most UI elements, including buttons, cards, and input fields, emphasizing a sharp, angular aesthetic.
    -   `4px` (sm) — Used for very subtle rounding, primarily for specific internal elements if needed, but not widely applied.

## 6. Depth & Elevation
The Hermes Agent design system primarily relies on strong color contrast and minimal visual depth. Shadows are used sparingly, mostly for transient elements like dropdowns or modals, rather than for general component separation.

-   **Base (z-0)**: `none` — Default stacking context for static page content and backgrounds.
-   **Content (z-1)**: `none` — Used for main content sections, such as the downloads section.
-   **Main Content (z-2)**: `none` — Applied to the primary `main` element, indicating it sits above base content.
-   **Overlay (z-3)**: `none` — For specific `div` overlays that need to appear above main content.
-   **Sticky (z-10)**: `none` — Used for sticky elements like feature badges that remain visible during scroll.
-   **Navigation (z-20)**: `none` — Applied to the top navigation bar, ensuring it floats above page content.
-   **Parallax (z-30)**: `none` — For elements participating in parallax effects, ensuring their layering.
-   **Preview (z-50)**: `none` — For sections like the preview, indicating a higher stacking order.
-   **Frame (z-100)**: `none` — The highest z-index for the main page frame, ensuring it's always on top.
-   **Transient (z-100+)**: `rgba(0, 0, 0, 0.25) 0px 4px 14px 0px` — Used for temporary UI elements like dropdowns or modals that need to clearly float above all other content.

**Shadow Philosophy**: The design system largely eschews complex shadow effects, favoring a flat, high-contrast aesthetic. When shadows are present, they are subtle and functional, primarily used to indicate elevation for interactive or temporary components like dropdowns, rather than to define the depth of static content. This approach maintains a clean, modern, and direct visual language, relying on color blocking and typography for hierarchy.

## 7. Do's and Don'ts

### Do's
-   Always pair `#f5f5f5` text on `#0000f2` backgrounds; this combination achieves a contrast ratio of 8.44 (AAA).
-   Utilize `displayFont` at `81px` with `800` weight and `1.2` line-height for hero section headlines.
-   Maintain `48px` of vertical and horizontal padding for major sections and `Feature Card` components.
-   Apply `tracking-[0.18em]` to `monoFont` elements like eyebrow text for a distinct, technical feel.
-   Ensure all interactive links and `Ghost Button` components show `text-decoration-color: currentcolor` on hover.
-   Use `#edff45` sparingly as a highlight accent for active states or key information.
-   Keep `Card Feature` backgrounds `#0000f2` with `#f5f5f5` text, maintaining a consistent brand aesthetic.
-   Apply `0px` border-radius to most UI elements, including `Primary Button` and `Text Input`, for a sharp look.
-   Use `12px` horizontal padding and `8px` vertical padding for `Dropdown Menu Item` elements.

### Don'ts
-   Avoid placing `#000000` text directly on `#0000f2` backgrounds; the measured ratio of 2.28 fails AA contrast.
-   Never use `#f5f5f5` text on `#ffffff` backgrounds; this pairing has a ratio of 1.09 and fails AA contrast.
-   Do not introduce additional font families beyond `displayFont` and `monoFont` to maintain brand consistency.
-   Avoid applying shadows to standard `Feature Card` components; rely on flat design principles.
-   Do not use `border-radius` values other than `0px` or `4px` to preserve the angular aesthetic.
-   Avoid using `displayFont` for body text below `14px` to ensure optimal readability.
-   Do not use `font-weight: 300` for critical information; reserve it for subtle, non-essential text.
-   Avoid mixing `displayFont` and `monoFont` within a single phrase or short sentence.
-   Do not use `10.08px` font size for primary call-to-action buttons; reserve it for `Ghost Button` components.

## 8. Responsive Behavior *(Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing.)*

-   **Breakpoints**:
    -   **Mobile Small** (~320px): Stack elements vertically, hide complex navigation behind a hamburger menu.
    -   **Mobile Large** (~480px): Adjust section padding to `24px`, scale down display typography to `39px`.
    -   **Tablet** (~767px): Collapse sidebars, optimize `Feature Card` grid for 1-2 columns.
    -   **Desktop** (~768px): Full desktop layout, expanded navigation, restore `48px` section padding.
    -   **Desktop Large** (~1440px): Apply max-width container to content, maintain generous whitespace.
-   **Touch Targets**:
    -   Maintain a minimum touch target size of `44px` for all interactive elements like buttons and links.
    -   Ensure a minimum `8px` clear space between touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: The `Top Navigation Bar` should collapse into a hamburger menu at `767px` and below.
    -   **Cards**: `Feature Card` components should stack vertically on mobile, transitioning from a multi-column grid.
    -   **Typography**: `Display` and `H1` font sizes should scale down significantly on smaller viewports to prevent overflow.
    -   **Padding**: Reduce horizontal and vertical section padding from `48px` to `24px` on mobile devices.
    -   **Forms**: `Text Input` fields should occupy full width on mobile, with adjusted vertical spacing.
    -   **Spacing**: The `spacing.scale` values should be used proportionally, with larger values potentially compressed on smaller screens.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#0000f2`
    -   `background`: `#f5f5f5`
    -   `text-primary`: `#f5f5f5`
    -   `text-secondary`: `#000000`
    -   `accent-yellow`: `#edff45`
    -   `surface-light`: `#ffffff`
    -   `border-light`: `#f5f5f5`
    -   `dropdown-hover`: `#eceaf5`
-   **Iteration Guide**:
    1.  Always use `displayFont` for headings and `monoFont` for code/technical labels.
    2.  Ensure CTAs like `Primary Button` use `background: #f5f5f5` and `color: #0000f2`.
    3.  Set `Display` typography to `81px` `800` weight with `1.2` line-height for hero titles.
    4.  Apply `0px` border-radius to all buttons, cards, and input fields.
    5.  Utilize the `spacing.scale` values for all layout and component spacing.
    6.  Default `Card Feature` components to `background: #0000f2` and `color: #f5f5f5`.
    7.  Implement `Text Input` `:focus` state with a `2px` blue shadow ring (`rgba(0, 0, 242, 0.2)`).
    8.  Ensure `Navigation Link` `:hover` state changes color to `#edff45` and shows an underline.
    9.  Use `rgba(0, 0, 0, 0.25) 0px 4px 14px 0px` for `dropdown-menu` shadow.
    10. Prioritize `#f5f5f5` text on `#0000f2` backgrounds for AAA contrast.
    11. Implement `Top Navigation Bar` as sticky with `z-index: 20`.
    12. On mobile (`<768px`), collapse the main navigation into a hamburger menu.
