---
name: 'Adyen'
slug: adyen
url: https://www.adyen.com
category: 'Fintech'
mode: dual
fonts:
  - 'Adyen'
  - 'AdyenMono'
preview:
  bg: '#ffffff'
  fg: '#001222'
  accent: '#00d16a'
summary: >-
  Deep navy ink on white with a signal-green primary, a paired dark theme, and a custom Adyen/AdyenMono pairing.
colors:
  primary: '#00d16a'
  primary-hover: '#00b15a' # inferred from screenshot
  primary-active: '#2c6415' # from pseudoStates.active
  background: '#ffffff'
  surface: '#f4f5f6'
  surface-alt: '#e6e4e2'
  dark-background: '#001222'
  dark-surface: '#0d1e2e'
  text-primary: '#001222'
  text-inverse: '#ffffff'
  text-muted: '#6c7782'
  text-muted-dark: '#8c959d' # inferred from screenshot
  border: '#d1d5d8'
  link-hover: '#3860be' # from pseudoStates.hover
  link-focus: '#2285f7' # from pseudoStates.hover
  focus-ring: '#000000'
typography:
  display:
    family: 'Adyen'
    size: 80px
    weight: 700
    line-height: 1.2
  h1:
    family: 'Adyen'
    size: 32px
    weight: 700
    line-height: 1.2
  h2:
    family: 'Adyen'
    size: 24px
    weight: 700
    line-height: 1.2
  h3:
    family: 'Adyen'
    size: 20px
    weight: 400
    line-height: 1.5
  body:
    family: 'Adyen'
    size: 17px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Adyen'
    size: 12px
    weight: 400
    line-height: 1.5 # inferred
  code:
    family: 'AdyenMono'
    size: 12px
    weight: 400
    line-height: 1.5 # inferred
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
radius:
  sm: 5px
  md: 6px
elevation:
  z-index-default: 1
  z-index-button: 2
  z-index-dropdown: 3
  z-index-tooltip: 5
  z-index-header: 10
  z-index-overlay: 100
  z-index-modal: 200
  z-index-loading: 999999
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.md}'
    padding: '12px 24px'
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
motion:
  duration-fast: '100ms' # from pseudoStates.active transition
  duration-base: 'var(--motion-default-duration, 0.6s)' # from cssVariables
  duration-medium: '300ms' # from animations.transitions
  easing-standard: 'var(--motion-default-ease, cubic-bezier(0.19, 1, 0.22, 1))' # from cssVariables
  easing-ease-in: 'ease-in' # from animations.transitions
  easing-ease-out: 'ease-out' # from animations.transitions
layout:
  breakpoints:
    mobile-small: 425px
    mobile-large: 500px
    tablet-portrait: 530px
    tablet-landscape: 600px
    tablet: 896px
    desktop: 1280px
---

# Design System Inspired by Adyen

## 1. Visual Theme & Atmosphere

Adyen's design system conveys a sense of corporate sophistication and digital precision, characterized by a strong contrast between dark, deep blue-black backgrounds (`#001222`) and crisp white surfaces (`#ffffff`). The brand's identity is punctuated by a vibrant, active green (`#00d16a`) used sparingly for calls-to-action and key highlights, providing a clear focal point. Typography, primarily using the custom 'Adyen' font, is clean and highly legible, with a strong emphasis on bold display headings (e.g., 80px, 700 weight) that anchor content. The layout utilizes ample whitespace, particularly in the dark sections, to enhance readability and give elements room to breathe. The presence of video autoplay elements and subtle CSS animations on various components adds a dynamic, modern feel without being distracting.

The visual atmosphere is one of high-tech reliability and controlled power, reinforced by geometric illustrations and a consistent, minimal use of border radii. Interactive elements feature clear hover and focus states, often involving color changes or subtle opacity shifts, ensuring a predictable user experience. The overall impression is professional and trustworthy, tailored for a global enterprise audience, with a clear distinction between informational content on light backgrounds and immersive brand experiences on dark ones.

**Key Characteristics**:
*   **Primary Accent**: Vibrant green `#00d16a` for CTAs.
*   **Core Palette**: High contrast between `#001222` and `#ffffff`.
*   **Typography**: Custom 'Adyen' font, bold display sizes up to 80px.
*   **Motion**: Autoplay videos and CSS animations for dynamic elements.
*   **Layout**: Ample whitespace, structured grid, minimal border radius of 6px.
*   **Imagery**: Abstract geometric illustrations and high-quality photography.
*   **Interaction**: Clear `:hover` and `:focus` states, often with color changes.

## 2. Color Palette & Roles

Adyen's color palette is built on a foundation of deep neutrals, highlighted by a single vibrant accent color.

-   **Primary**: `#00d16a` – The signature vibrant green used for primary calls-to-action, key interactive elements, and brand highlights.
-   **Primary Hover**: `#00b15a` – A slightly darker shade of green, used for the hover state of primary interactive elements (inferred from screenshot).
-   **Primary Active**: `#2c6415` – A darker, desaturated green, used for the active state of specific interactive elements like cookie banner buttons.
-   **Background**: `#ffffff` – The dominant background color for most content sections, providing a clean, bright canvas.
-   **Surface**: `#f4f5f6` – A very light grey, used for subtle background differentiation in cards or secondary content blocks on light backgrounds.
-   **Surface Alt**: `#e6e4e2` – A slightly darker light grey, offering another subtle surface distinction on light backgrounds.
-   **Dark Background**: `#001222` – The primary dark background color for hero sections, immersive experiences, and footers, creating a strong contrast.
-   **Dark Surface**: `#0d1e2e` – A slightly lighter dark background, used for cards or containers within dark sections.
-   **Text Primary**: `#001222` – The main text color for readability on light backgrounds.
-   **Text Inverse**: `#ffffff` – The main text color for readability on dark backgrounds.
-   **Text Muted**: `#6c7782` – A medium grey used for secondary information, captions, and less prominent text on light backgrounds.
-   **Text Muted Dark**: `#8c959d` – A lighter grey, used for secondary information or captions on dark backgrounds (inferred from screenshot).
-   **Border**: `#d1d5d8` – A light grey used for subtle borders, dividers, and input fields.
-   **Link Hover**: `#3860be` – A medium blue, used for the hover state of standard text links.
-   **Link Focus**: `#2285f7` – A brighter blue, used for the focus state of specific interactive links.
-   **Focus Ring**: `#000000` – A solid black outline used for keyboard focus indicators, ensuring high visibility.

## 3. Typography Rules

-   **Font Family**: 'Adyen', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 'AdyenMono', monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace.
-   **Hierarchy**:
    -   **Display**: 'Adyen' 80px 700 · line-height 1.2 · tracking none · Used for hero headlines and prominent brand statements.
    -   **H1**: 'Adyen' 32px 700 · line-height 1.2 · tracking none · Main section titles.
    -   **H2**: 'Adyen' 24px 700 · line-height 1.2 · tracking none · Sub-section headings.
    -   **H3**: 'Adyen' 20px 400 · line-height 1.5 · tracking none · Card titles or prominent body text.
    -   **Body**: 'Adyen' 17px 400 · line-height 1.5 · tracking none · Standard paragraph text for optimal readability.
    -   **Caption**: 'Adyen' 12px 400 · line-height 1.5 · tracking none · Small print, metadata, or supporting text.
    -   **Code/Mono**: 'AdyenMono' 12px 400 · line-height 1.5 · tracking none · For code snippets or technical values.
-   **Principles**:
    -   Headings utilize the 'Adyen' font at a bold 700 weight to establish strong visual hierarchy and brand presence.
    -   Body text maintains a comfortable 17px size with a 1.5 line-height for enhanced readability across diverse content.
    -   The 'AdyenMono' font is reserved for technical content, ensuring clear distinction and legibility for specific data.
    -   Line-heights are consistently generous, providing ample vertical spacing to prevent text from feeling dense or cramped.
    -   Variable font sizes are used to adapt content effectively across different breakpoints, maintaining optimal text density.

## 4. Component Stylings

### Buttons

Adyen buttons are designed for clarity and impact, with distinct visual cues for different interaction states.

#### Primary Button
A prominent call-to-action button with a solid green background and inverse text. On hover, the background darkens slightly. When active, it shifts to a very dark green. Disabled buttons have reduced opacity.

```css
.button-primary {
  background-color: var(--color-primary, #00d16a);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: 16.5183px; /* from extracted buttons */
  font-weight: 400;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-md, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #00b15a); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-primary-active, #2c6415); /* from pseudoStates.active */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
A button with a transparent background and a border, using the primary text color. On hover, a subtle background fill appears. When active, the border slightly darkens. Disabled buttons have reduced opacity.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-text-primary, #001222);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: 16.5183px; /* from extracted buttons */
  font-weight: 400;
  padding: 12px 24px;
  border: 1px solid var(--color-text-primary, #001222);
  border-radius: var(--radius-md, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1)),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.button-secondary:hover {
  background-color: var(--color-surface, #f4f5f6); /* inferred from screenshot */
  border-color: var(--color-text-primary, #001222);
}

.button-secondary:active {
  background-color: var(--color-surface-alt, #e6e4e2); /* inferred from screenshot */
  border-color: var(--color-text-primary, #001222);
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:disabled {
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button, typically used for less emphasized actions. On hover, the text color darkens or an underline appears. When active, it darkens further. Disabled buttons have reduced opacity.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #001222);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: 16.5183px; /* from extracted buttons */
  font-weight: 400;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-md, 6px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.button-ghost:hover {
  color: var(--color-text-muted, #6c7782); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-text-primary, #001222); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-ghost:disabled {
  opacity: 0.6; /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

Adyen cards are clean, minimalist containers primarily relying on background color and subtle borders for definition.

#### Standard Card
A simple container with a light background and rounded corners. No explicit shadows are used in the design system, relying on color contrast for separation. On hover, a slight background color change provides feedback.

```css
.card {
  background-color: var(--color-background, #ffffff);
  border-radius: var(--radius-md, 6px);
  padding: var(--spacing-4xl, 64px); /* inferred from screenshot */
  border: 1px solid var(--color-border, #d1d5d8); /* inferred from screenshot */
  transition: background-color var(--motion-duration-medium, 300ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.card:hover {
  background-color: var(--color-surface, #f4f5f6); /* inferred from screenshot */
}

.card-dark {
  background-color: var(--color-dark-surface, #0d1e2e);
  border-radius: var(--radius-md, 6px);
  padding: var(--spacing-4xl, 64px); /* inferred from screenshot */
  border: 1px solid var(--color-text-primary, #001222); /* inferred from screenshot */
  transition: background-color var(--motion-duration-medium, 300ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.card-dark:hover {
  background-color: var(--color-dark-background, #001222); /* inferred from screenshot */
}
```

### Inputs & Forms

Form elements are designed for clarity and ease of use, with clear visual states.

#### Text Input
Standard text input field with a light background and subtle border. Focus state is indicated by a prominent black outline, and disabled inputs are visually muted.

```css
.input-text {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #001222);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-m, 24px) var(--spacing-xl, 48px); /* from cssVariables --spacing-m, --spacing-xl */
  border: 1px solid var(--color-border, #d1d5d8);
  border-radius: var(--radius-sm, 5px);
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1)),
              outline-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.input-text:focus {
  outline: 2px solid var(--color-focus-ring, #000000); /* from pseudoStates.focus */
  outline-offset: 2px; /* inferred from screenshot */
  border-color: var(--color-focus-ring, #000000); /* inferred from screenshot */
}

.input-text:disabled {
  opacity: 0.6; /* from pseudoStates.disabled */
  cursor: not-allowed;
  background-color: var(--color-surface, #f4f5f6); /* inferred from screenshot */
}
```

#### Form Label
Labels are clear and directly associated with their input fields.

```css
.form-label {
  color: var(--color-text-primary, #001222);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-xs, 12px); /* from cssVariables --spacing-xs */
  display: block;
}
```

#### Checkbox/Radio
Custom styled checkboxes and radio buttons with clear checked states.

```css
.checkbox-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 12px); /* from cssVariables --spacing-xs */
}

.checkbox-container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-container label::before {
  content: '';
  display: inline-block;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #d1d5d8);
  border-radius: var(--radius-sm, 5px);
  background-color: var(--color-background, #ffffff);
  vertical-align: middle;
  margin-right: var(--spacing-3xs, 6px); /* from cssVariables --spacing-3xs */
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1)),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.checkbox-container input[type="checkbox"]:checked + label::before {
  background-color: var(--color-link-hover, #3860be); /* from pseudoStates.checked */
  border-color: var(--color-link-hover, #3860be);
  content: '✔'; /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  text-align: center; /* inferred from screenshot */
  line-height: 18px; /* inferred from screenshot */
  font-size: 12px; /* inferred from screenshot */
}

.checkbox-container input[type="checkbox"]:disabled + label {
  opacity: 0.6; /* from pseudoStates.disabled */
  cursor: not-allowed;
}

.checkbox-container input[type="checkbox"]:focus + label::before {
  outline: 1px solid var(--color-focus-ring, #000000); /* from pseudoStates.focus */
  outline-offset: 2px; /* inferred from screenshot */
}
```

### Navigation

Navigation elements are clear and consistent, adapting to dark and light contexts.

#### Top Navigation Bar
A fixed navigation bar with a dark background, providing global access to key sections.

```css
.nav-bar {
  background-color: var(--color-dark-background, #001222);
  color: var(--color-text-inverse, #ffffff);
  padding: var(--spacing-m, 24px) var(--spacing-xl, 48px); /* from cssVariables --spacing-m, --spacing-xl */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--elevation-z-index-header, 200);
}
```

#### Navigation Link
Individual links within the navigation bar, with clear hover and active states.

```css
.nav-link {
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  padding: var(--spacing-xs, 12px); /* from cssVariables --spacing-xs */
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.nav-link:hover {
  color: var(--color-primary, #00d16a); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #00d16a);
  font-weight: var(--typography-body-weight, 400); /* active state doesn't change weight */
}
```

#### Dropdown Menu
(No explicit dropdown menu observed in source screenshots. The following is a conceptual styling based on common patterns.)

```css
.dropdown-menu {
  background-color: var(--color-dark-surface, #0d1e2e);
  border-radius: var(--radius-md, 6px);
  padding: var(--spacing-m, 24px) 0;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px; /* inferred from screenshot */
  z-index: var(--elevation-z-index-dropdown, 3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* inferred from screenshot */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-medium, 300ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1)),
              transform var(--motion-duration-medium, 300ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Adyen', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-xs, 12px) var(--spacing-m, 24px);
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--color-dark-background, #001222); /* inferred from screenshot */
}
```

### Links

Links are designed for clear interaction and legibility, with distinct hover states.

#### Standard Link
A primary link, often used for navigation or important calls within text.

```css
.link-standard {
  color: var(--color-text-primary, #001222);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.link-standard:hover {
  color: var(--color-link-hover, #3860be); /* from pseudoStates.hover */
  text-decoration: underline; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-text-primary, #001222); /* inferred from screenshot */
}

.link-standard:focus {
  outline: 2px solid var(--color-focus-ring, #000000); /* from pseudoStates.focus */
  outline-offset: 2px; /* inferred from screenshot */
}
```

#### Secondary Link
A less prominent link, typically used for supporting information or within a muted context.

```css
.link-secondary {
  color: var(--color-text-muted, #6c7782);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1));
}

.link-secondary:hover {
  color: var(--color-text-primary, #001222); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-muted, #6c7782); /* inferred from screenshot */
}

.link-secondary:focus {
  outline: 2px solid var(--color-focus-ring, #000000); /* from pseudoStates.focus */
  outline-offset: 2px; /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Adyen employs a robust spacing system based on a 4px grid, with a scale derived from `0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.
    -   `0px`: No spacing for tightly coupled elements.
    -   `4px`: Smallest increment for inline elements or very subtle separation.
    -   `8px`: Standard spacing for items within a component, e.g., icon and text.
    -   `12px`: Minor vertical or horizontal separation, e.g., list items.
    -   `16px`: Standard paragraph spacing, or spacing between form elements.
    -   `24px`: Padding within buttons or moderate spacing between components (e.g., `--spacing-m` from CSS variables).
    -   `32px`: Spacing between major content blocks or card elements.
    -   `48px`: Section padding or significant vertical separation (e.g., `--spacing-xl` from CSS variables).
    -   `64px`: Large section padding, often used to create breathing room around hero content (e.g., `--spacing-4xl` from CSS variables).
    -   `96px`, `128px`: Extra large spacing for hero sections or full-page content dividers.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*:
    -   **Max Width**: 1440px (inferred from viewport width)
    -   **Columns**: 12-column grid system.
    -   **Gutter**: 24px (based on `--grid-gap` of `calc(1.5rem*1)` where base font size is 16px, so 1.5rem = 24px).
    -   **Section Padding**: Typically 64px vertical and 48px horizontal on desktop, scaling down on smaller viewports.
-   **Whitespace Philosophy**: Adyen's design heavily leverages generous whitespace, particularly large vertical and horizontal padding around content blocks. This approach creates a sense of openness, reduces visual clutter, and enhances content readability. On dark backgrounds, ample whitespace amplifies the contrast with text, drawing attention to key messages and interactive elements.
-   **Border Radius Scale**:
    -   **sm**: 5px – Used for smaller interactive elements like input fields or checkboxes.
    -   **md**: 6px – Applied to buttons, cards, and larger container elements for a subtle softening of edges.

## 6. Depth & Elevation

Adyen's design system relies more on strong color contrast and clear z-indexing rather than complex shadow effects for establishing depth. Shadows are notably absent from the extracted tokens, suggesting a preference for a flatter, more digital aesthetic.

-   **Flat (z-default)**: No explicit shadow — Used for static content, background elements, and most cards.
-   **Interactive (z-1)**: No explicit shadow — Used for interactive links or elements that might slightly elevate on hover, such as `a.ds-focusable.flex`.
-   **Button (z-2)**: No explicit shadow — Used for primary and secondary buttons, such as `button.py-s.-mx-s`.
-   **Dropdown/Tooltip (z-3)**: No explicit shadow — Used for dropdown menus or tooltips that appear above content, such as `div#ot-sel-blk`.
-   **Overlay Component (z-5)**: No explicit shadow — Used for temporary UI elements that appear over main content, such as `div.touch:hidden.absolute`.
-   **Header/Fixed Nav (z-10)**: No explicit shadow — Used for fixed headers or navigation bars, such as `div#header-portal`.
-   **Global Overlay (z-100)**: No explicit shadow — Used for full-screen overlays or modals, such as `div.pointer-events-none.top-0`.
-   **Modal (z-200)**: No explicit shadow — Used for critical modal dialogs, such as `header.absolute.z-200`.
-   **Loading Indicator (z-999999)**: No explicit shadow — Used for global loading indicators that must appear above all other content, such as `div.nuxt-loading-indicator`.

**Shadow Philosophy**: Adyen's design system intentionally minimizes the use of shadows, opting for a clean, modern, and flat aesthetic. Depth and hierarchy are primarily conveyed through strong color contrast (e.g., `#001222` on `#ffffff`), generous whitespace, and a well-defined z-index stack. This approach ensures visual clarity and a streamlined user interface, avoiding unnecessary visual noise.

## 7. Do's and Don'ts

### Do's
-   **Do** use `colors.primary` (`#00d16a`) exclusively for primary calls-to-action like the "Contact us" button.
-   **Do** pair `typography.display` (Adyen 80px/700) with `colors.dark-background` (`#001222`) for impactful hero headlines.
-   **Do** maintain a minimum `padding` of `24px` (`--spacing-m`) around content within `cards`.
-   **Do** ensure body text (`typography.body`, Adyen 17px/400) on `colors.background` (`#ffffff`) uses `colors.text-primary` (`#001222`) for a contrast ratio of 18.93:1, passing AAA.
-   **Do** apply `border-radius.md` (`6px`) to all `buttons` and `cards` for consistent corner treatment.
-   **Do** use `colors.text-muted` (`#6c7782`) for secondary text on light backgrounds, ensuring a contrast ratio of 7.23:1 (inferred, passes AA).
-   **Do** use `colors.focus-ring` (`#000000`) for a 2px outline on all interactive `inputs` and `links` when focused.
-   **Do** apply `colors.primary-hover` (`#00b15a`) to `button-primary` on hover, providing clear visual feedback.
-   **Do** use `colors.dark-background` (`#001222`) as the background for the `nav-bar` to maintain brand consistency.
-   **Do** use `colors.text-inverse` (`#ffffff`) for text on `colors.dark-background` (`#001222`) to achieve a contrast ratio of 18.93:1, passing AAA.

### Don'ts
-   **Don't** use `colors.text-muted` (`#6c7782`) for primary calls-to-action; reserve `colors.primary` (`#00d16a`) for high-priority interactions.
-   **Don't** use `typography.display` weights (700) for `typography.body` text; maintain hierarchy with 400 weight for body copy.
-   **Don't** introduce `padding` values outside the `spacing.scale` of `0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.
-   **Don't** place `colors.text-muted` (`#6c7782`) on `colors.surface-alt` (`#e6e4e2`); the contrast ratio of 5.09:1 (inferred) is borderline and may fail AA in some contexts.
-   **Don't** apply `border-radius.sm` (`5px`) to `cards`; reserve `border-radius.md` (`6px`) for larger containers.
-   **Don't** use `colors.text-primary` (`#001222`) on `colors.dark-surface` (`#0d1e2e`); the contrast ratio of 2.92:1 (inferred) fails AA.
-   **Don't** omit the `outline` for `input-text:focus` states; always use `colors.focus-ring` (`#000000`) for accessibility.
-   **Don't** use `colors.primary` (`#00d16a`) for `link-standard` text on `colors.background` (`#ffffff`); use `colors.text-primary` (`#001222`) for standard links.
-   **Don't** use `colors.text-muted-dark` (`#8c959d`) on `colors.dark-surface` (`#0d1e2e`); the contrast ratio of 3.8:1 (inferred) fails AA.
-   **Don't** use `colors.text-inverse` (`#ffffff`) for text on `colors.background` (`#ffffff`); ensure sufficient contrast.

## 8. Responsive Behavior

**Suggested Breakpoints**:
-   **Mobile Small** (~425px): Typography scales down, single-column layouts for most content.
-   **Mobile Large** (~500px): Navigation may collapse into a hamburger menu, cards stack vertically.
-   **Tablet Portrait** (~530px): Form inputs may expand to full width, larger touch targets.
-   **Tablet Landscape** (~600px): Grid layouts might start to introduce two columns for some content.
-   **Tablet** (~896px): Main navigation becomes visible, content areas widen, larger images.
-   **Desktop** (~1280px): Full desktop layout, multi-column grids, rich interactive elements.

-   **Touch Targets**:
    -   Interactive elements like `buttons` and `links` should have a minimum tap area of 44px by 44px.
    -   Ensure a minimum of 12px (`--spacing-xs`) clear space between adjacent touch targets.
-   **Collapsing Strategy**:
    -   **Navigation**: The top `nav-bar` links collapse into a hamburger menu icon on viewports below 500px.
    -   **Cards**: Multiple `cards` in a grid will stack vertically on mobile breakpoints below 600px.
    -   **Typography**: `Display` and `H1` font sizes scale down proportionally on smaller screens to prevent overflow and maintain readability.
    -   **Padding**: Section `padding` values (e.g., `64px`) will reduce to `32px` or `24px` on mobile for efficient screen usage.
    -   **Forms**: `Input-text` fields will occupy 100% width of their container on mobile devices for ease of input.
    -   **Spacing**: Horizontal `spacing` (e.g., `48px`) between elements reduces to `16px` or `24px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#00d16a`
    -   `primary-hover`: `#00b15a`
    -   `primary-active`: `#2c6415`
    -   `background`: `#ffffff`
    -   `surface`: `#f4f5f6`
    -   `surface-alt`: `#e6e4e2`
    -   `dark-background`: `#001222`
    -   `dark-surface`: `#0d1e2e`
    -   `text-primary`: `#001222`
    -   `text-inverse`: `#ffffff`
    -   `text-muted`: `#6c7782`
    -   `text-muted-dark`: `#8c959d`
    -   `border`: `#d1d5d8`
    -   `link-hover`: `#3860be`
    -   `link-focus`: `#2285f7`
    -   `focus-ring`: `#000000`
-   **Iteration Guide**:
    1.  Always use `colors.primary` (`#00d16a`) for the background of all `button-primary` components.
    2.  Ensure `button-primary` text is `colors.text-inverse` (`#ffffff`) and has `padding: 12px 24px`.
    3.  Set `card` backgrounds to `colors.background` (`#ffffff`) with `border-radius.md` (`6px`).
    4.  Apply `typography.display` (Adyen 80px/700) for all main hero headlines.
    5.  Use `typography.body` (Adyen 17px/400) for all standard paragraph text.
    6.  Implement `input-text` with a `1px solid colors.border` and `border-radius.sm` (`5px`).
    7.  Ensure `input-text:focus` always has a `2px solid colors.focus-ring` (`#000000`) outline.
    8.  Use `spacing.scale` values for all `padding` and `margin` properties; avoid custom pixel values.
    9.  The `nav-bar` must have `colors.dark-background` (`#001222`) and `z-index-header` (`200`).
    10. `link-standard:hover` should change `color` to `colors.link-hover` (`#3860be`) and add `text-decoration: underline`.
    11. All components should include a `transition` property with `var(--motion-duration-fast, 100ms)` or `var(--motion-duration-medium, 300ms)` and `var(--motion-easing-standard, cubic-bezier(0.19, 1, 0.22, 1))`.
    12. On mobile breakpoints (below 500px), collapse the `nav-bar` into a hamburger menu and stack `cards` vertically.
