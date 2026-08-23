---
name: 'Samsung'
slug: samsung
url: https://www.samsung.com
category: 'Commerce'
mode: light
fonts:
  - 'SamsungOne'
preview:
  bg: '#ffffff'
  fg: '#000000'
  accent: '#006bea'
summary: >-
  SamsungOne exclusively, pure black on white, #006bea for every action — maximum contrast, minimum palette.
colors:
  primary: '#006bea'
  primary-hover: '#1428a0'
  background: '#ffffff'
  surface: '#ffffff'
  surface-light: '#f7f7f7'
  surface-hover: '#eeeeee'
  text-primary: '#000000'
  text-muted: '#757575'
  text-disabled: '#dddddd'
  link: '#0000ee'
  interactive-active: '#575e68'
typography:
  display:
    family: 'SamsungOne'
    size: 48px
    weight: 700
    line-height: 1.1
  heading:
    family: 'SamsungOne'
    size: 32px
    weight: 700
    line-height: 1.2
  body:
    family: 'SamsungOne'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'SamsungOne'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'monospace'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 32]
radius:
  sm: 4px
  md: 8px
elevation:
  z-dimmer: -1
  z-menu-item: 1
  z-cookie-consent: 9
  z-hero-text: 10
  z-screen-indicator: 600
  z-consent-banner: 999
  z-nav-bar: 2000
  z-fab-button: 2500
motion:
  duration-fast: '100ms'
  duration-base: '200ms'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '#ffffff'
    radius: '{radius.sm}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-primary}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-primary}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.md}'
    shadow: 'none'
  input:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-muted}'
    radius: '{radius.sm}'
    padding: '10px 12px'
  link-standard:
    color: '{colors.link}'
    hover-color: '{colors.primary-hover}'
---

# Design System Inspired by Samsung

## 1. Visual Theme & Atmosphere
Samsung's design system is characterized by a clean, product-centric aesthetic, emphasizing clarity and high-quality imagery. The primary typeface, SamsungOne, is consistently applied across all text elements, from large display headings like "Verbunden, durch den Tag" to smaller captions, maintaining a unified brand voice. Core colors are a stark `#000000` for text and backgrounds, complemented by a vibrant `#006bea` for interactive elements and accents, creating a high-contrast, easily scannable interface. Product photography is central, often presented with ample white space and subtle reflections, highlighting the devices themselves.

The user experience is enhanced by subtle interactive feedback and dynamic content. The site features autoplay video heroes, such as the "Galaxy AI" section, which immediately engages users with product showcases. Interactive elements, like buttons and links, provide clear `:hover` and `:active` states, often involving slight background changes to `#eeeeee` or color shifts to `#1428a0`. The overall impression is one of modern sophistication and user-friendliness, designed to showcase advanced technology with an approachable interface.

**Key Characteristics**
-   **Typography**: Exclusive use of SamsungOne for all text.
-   **Color Palette**: High contrast with `#000000` text on `#ffffff` backgrounds.
-   **Accent Color**: `#006bea` for CTAs and interactive elements.
-   **Imagery**: Prominent, high-quality product photography and video.
-   **Interaction**: Subtle `:hover` states and `opacity: 0.7` for `:active` elements.
-   **Motion**: Autoplay video and CSS keyframe animations for dynamic content.
-   **Layout**: Clean, spacious layouts with product-focused sections.

## 2. Color Palette & Roles
Samsung's color palette is minimal yet effective, focusing on high contrast and clear functional roles.

-   **Primary**: `#006bea` (Samsung Blue) — Used for primary call-to-action buttons, interactive link accents, and key brand highlights. It draws attention to interactive elements and important information.
-   **Primary Hover**: `#1428a0` — The darker blue used for `:hover` states on primary links and interactive text, providing clear visual feedback.
-   **Background**: `#ffffff` — The default background color for the main content areas, providing a clean canvas for product imagery and text.
-   **Surface**: `#ffffff` — Used for cards, containers, and other elevated content blocks, maintaining a bright and open aesthetic.
-   **Surface Light**: `#f7f7f7` (inferred from contrastPairs) — A very subtle off-white background used for certain sections, providing a slight visual separation without introducing strong color.
-   **Surface Hover**: `#eeeeee` — A light gray used for `:hover` states on various interactive elements, such as input wrappers and ghost buttons, indicating interactivity.
-   **Text Primary**: `#000000` — The dominant color for all headings, body text, and general UI labels, ensuring maximum readability and strong contrast.
-   **Text Muted**: `#757575` (inferred from contrastPairs) — Used for secondary information, descriptive text, and subtle labels where a softer visual presence is desired.
-   **Text Disabled**: `#dddddd` — Applied to disabled input text and radio button labels, clearly indicating non-interactable elements.
-   **Link**: `#0000ee` (inferred from contrastPairs) — The standard color for unvisited hyperlinks, providing a universally recognized visual cue.
-   **Interactive Active**: `#575e68` — A dark gray used for `:active` states on certain menu items, indicating a pressed or selected state.

## 3. Typography Rules
-   **Font Family**: 'SamsungOne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' · For code, 'monospace' is used.
-   **Hierarchy**:
    -   **Display**: `SamsungOne` `48px` `700` · line-height `1.1` · tracking `none` · Used for prominent hero headlines.
    -   **Heading**: `SamsungOne` `32px` `700` · line-height `1.2` · tracking `none` · Used for major section titles.
    -   **Body**: `SamsungOne` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptions.
    -   **Caption**: `SamsungOne` `12px` `400` · line-height `1.5` · tracking `none` · Used for small print, legal text, and supplementary information.
    -   **Code/Mono**: `monospace` `14px` `400` · line-height `1.5` · tracking `none` · Reserved for technical code snippets or data display.
-   **Principles**
    -   **Brand Consistency**: The exclusive use of SamsungOne ensures a unified brand voice across all textual content.
    -   **Readability First**: High contrast text, primarily `#000000` on `#ffffff`, prioritizes legibility for all content.
    -   **Clear Hierarchy**: Distinct font sizes and weights create a clear visual hierarchy, guiding the user's eye through content.
    -   **Minimal Tracking**: Default letter spacing is maintained, avoiding condensed or expanded text for optimal readability.

## 4. Component Stylings

### Buttons
Samsung utilizes three primary button styles: Primary, Secondary, and Ghost, each designed for specific interaction contexts and providing clear visual feedback on hover, active, and disabled states. All buttons feature a subtle transition for smooth state changes.

#### Primary Button
A prominent button style used for main calls-to-action, such as "Kaufen" (Buy). It has a solid brand blue background and white text.

```css
.button-primary {
  background-color: var(--color-primary, #006bea);
  color: #ffffff;
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #1428a0); /* inferred from screenshot */
}

.button-primary:active {
  opacity: 0.7; /* inferred from pseudoStates */
  transition: opacity var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:disabled {
  background-color: var(--color-text-disabled, #dddddd); /* inferred from screenshot */
  cursor: auto; /* from pseudoStates */
}
```

#### Secondary Button
Used for less critical actions or as a secondary option, such as "Mehr erfahren" (Learn more). It features a transparent background with a dark border and text.

```css
.button-secondary {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  border: 1px solid var(--color-text-primary, #000000);
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  background-color: var(--color-surface-hover, #eeeeee); /* inferred from pseudoStates */
  border-color: var(--color-text-primary, #000000); /* inferred from screenshot */
}

.button-secondary:active {
  opacity: 0.7; /* inferred from pseudoStates */
  transition: opacity var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:disabled {
  color: var(--color-text-disabled, #dddddd); /* inferred from pseudoStates */
  border-color: var(--color-text-disabled, #dddddd); /* inferred from screenshot */
  cursor: auto; /* from pseudoStates */
}
```

#### Ghost Button
A minimal button style, often text-only, used for tertiary actions or within navigation. It has a transparent background and dark text, with a subtle background change on hover.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400; /* inferred from screenshot */
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:hover {
  background-color: var(--color-surface-hover, #eeeeee); /* inferred from pseudoStates */
}

.button-ghost:active {
  opacity: 0.7; /* inferred from pseudoStates */
  transition: opacity var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:disabled {
  color: var(--color-text-disabled, #dddddd); /* inferred from pseudoStates */
  cursor: auto; /* from pseudoStates */
}
```

### Cards & Containers
Product cards and content containers typically feature a clean white background with minimal styling, relying on ample white space and strong imagery. Interactive cards, especially those with product images, incorporate a subtle scaling effect on hover.

#### Standard Card
Used for displaying product previews or featured content. It's a simple container with a white background and rounded corners.

```css
.card {
  background-color: var(--color-surface, #ffffff);
  border-radius: var(--radius-md, 8px); /* inferred from screenshot */
  padding: var(--spacing-32, 32px); /* inferred from screenshot */
  box-shadow: none; /* inferred from screenshot */
  overflow: hidden; /* for image hover effect */
  transition: box-shadow var(--motion-duration-base, 200ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* inferred from screenshot */
}

.card .image .hover-scale {
  transition: transform var(--motion-duration-base, 200ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)); /* from pseudoStates */
}

.card .image:hover .hover-scale {
  transform: scale(1.1); /* from pseudoStates */
}
```

### Inputs & Forms
Form elements are designed for clarity and ease of use, with distinct visual states for focus and disabled.

#### Text Input
A standard text input field for user data entry, with a subtle border and clear focus indication.

```css
.input-text {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-text-muted, #757575); /* inferred from screenshot */
  border-radius: var(--radius-sm, 4px); /* inferred from screenshot */
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.input-text:focus {
  outline: none; /* from pseudoStates */
  border-color: var(--color-primary, #006bea); /* inferred from screenshot */
  box-shadow: 0 0 0 2px rgba(0, 107, 234, 0.2); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-surface-light, #f7f7f7); /* inferred from screenshot */
  color: var(--color-text-disabled, #dddddd); /* from pseudoStates */
  border-color: var(--color-text-disabled, #dddddd); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, typically positioned above or alongside the input.

```css
.form-label {
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
Custom-styled checkboxes and radio buttons with clear checked and disabled states.

```css
/* Base styles for the custom checkbox/radio visual element */
.checkbox-v2__label-box,
.radio-v2__label-box-circle {
  display: inline-block;
  width: 20px; /* inferred from screenshot */
  height: 20px; /* inferred from screenshot */
  border: 1px solid var(--color-text-primary, #000000); /* inferred from screenshot */
  background-color: var(--color-surface, #ffffff);
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.radio-v2__label-box-circle {
  border-radius: 50%;
}

/* Checked state for checkbox */
input[type="checkbox"]:checked ~ .checkbox-v2__label .checkbox-v2__label-box {
  background-color: var(--color-text-disabled, #dddddd); /* from pseudoStates */
  border-color: var(--color-text-disabled, #dddddd); /* inferred from screenshot */
}

/* Checked state for radio */
input[type="radio"]:checked ~ .radio-v2__label .radio-v2__label-box-circle {
  background-color: var(--color-text-disabled, #dddddd); /* from pseudoStates */
  border-color: var(--color-text-disabled, #dddddd); /* inferred from screenshot */
  transform: scale(1); /* from pseudoStates */
  transition-duration: 0s; /* from pseudoStates */
}

/* Disabled state for checkbox/radio labels */
input[type="checkbox"]:disabled ~ .checkbox-v2__label,
input[type="radio"]:disabled ~ .radio-v2__label {
  color: var(--color-text-disabled, #dddddd); /* inferred from pseudoStates */
  cursor: default; /* from pseudoStates */
}
```

### Navigation
The top navigation bar provides clear links to different sections of the site, with interactive hover and active states.

#### Top Navigation Bar
The main header navigation, typically horizontal, containing primary links.

```css
.main-nav-bar {
  background-color: var(--color-surface, #ffffff);
  padding: var(--spacing-16, 16px) 0; /* inferred from screenshot */
  border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* inferred from screenshot */
  z-index: var(--z-nav-bar, 2000); /* from elevation */
}
```

#### Navigation Link
Individual links within the navigation bar. They are typically black text, turning blue on hover and for the active state.

```css
.nav-link {
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  display: inline-block;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  color: var(--color-primary, #006bea); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #006bea); /* inferred from screenshot */
  font-weight: 700; /* inferred from screenshot */
}
```

#### Dropdown Menu
A menu that appears on hover or click, typically for sub-navigation.

```css
.dropdown-menu {
  background-color: var(--color-surface, #ffffff);
  border: 1px solid rgba(0, 0, 0, 0.1); /* inferred from screenshot */
  border-radius: var(--radius-sm, 4px); /* inferred from screenshot */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* inferred from screenshot */
  padding: var(--spacing-8, 8px) 0;
  position: absolute;
  z-index: var(--z-menu-item, 1); /* from elevation */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-base, 200ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              transform var(--motion-duration-base, 200ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--color-surface-hover, #eeeeee); /* inferred from screenshot */
}

.dropdown-menu-item:active {
  background-color: var(--color-interactive-active, #575e68); /* from pseudoStates */
  color: #ffffff; /* inferred from screenshot */
}
```

### Links
Standard text links are underlined and change color on hover.

#### Standard Link
A typical hyperlink used within body text or for general navigation.

```css
.link-standard {
  color: var(--color-link, #0000ee);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: underline;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-standard:hover {
  color: var(--color-primary-hover, #1428a0); /* from pseudoStates */
  text-decoration: none; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-link, #0000ee); /* inferred from screenshot */
}
```

#### Secondary Link
Used for less emphasized links, often without an underline by default, with a subtle hover effect.

```css
.link-secondary {
  color: var(--color-text-primary, #000000);
  font-family: 'SamsungOne', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              text-decoration var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary:hover {
  color: var(--color-primary, #006bea); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-primary, #000000); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: Samsung employs a precise spacing system built on a 4px base unit, ensuring consistent visual rhythm and hierarchy.
    -   Base: 4px
    -   Scale: `[0, 4, 8, 12, 16, 32]`
    -   Usage Context:
        -   `0px`: No spacing, for tight alignments.
        -   `4px`: Smallest increment, used for inline element separation.
        -   `8px`: Standard spacing for text elements, icon-text pairs, and minor vertical separation.
        -   `12px`: Padding for smaller interactive elements like buttons.
        -   `16px`: Moderate spacing for list items, component internal padding, and vertical section breaks.
        -   `32px`: Generous spacing for major content blocks, section padding, and significant vertical separation.
-   **Grid & Container**:
    -   Max Width: 1440px (inferred from breakpoints)
    -   Columns: 12 (inferred from screenshot)
    -   Gutter: 24px (inferred from screenshot)
    -   Section Padding: 64px vertical, 32px horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: Samsung's design heavily leverages ample whitespace to create a clean, uncluttered aesthetic. This generous use of negative space around products and content helps to draw focus, enhance readability, and convey a sense of premium quality and sophistication. It ensures that individual elements breathe and are easily digestible.
-   **Border Radius Scale**:
    -   `sm`: 4px — Applied to buttons and smaller interactive elements for a subtle softening.
    -   `md`: 8px — Used for cards and larger containers, providing a gentle rounding that feels modern without being overly soft.

## 6. Depth & Elevation
Samsung's design system uses elevation sparingly, primarily for functional elements rather than decorative purposes, with a clear z-index hierarchy. Shadows are minimal to non-existent on static content, emphasizing a flat, modern interface.

-   **Dimmer (z--1)**: `none` — Used for background overlays behind modals or full-screen menus, pushing content back.
-   **Menu Item (z-1)**: `none` — Applied to individual items within a dropdown or navigation menu, slightly above base content.
-   **Cookie Consent (z-9)**: `0 2px 8px rgba(0,0,0,0.1)` (inferred from screenshot) — For banners or pop-ups that appear above general page content.
-   **Hero Text (z-10)**: `none` — Used for text overlays on hero images or videos, ensuring readability against dynamic backgrounds.
-   **Screen Indicator (z-600)**: `none` — For small, fixed UI elements like scroll indicators or progress bars.
-   **Consent Banner (z-999)**: `0 4px 16px rgba(0,0,0,0.15)` (inferred from screenshot) — High-priority, site-wide banners that need to be clearly visible.
-   **Navigation Bar (z-2000)**: `0 2px 4px rgba(0,0,0,0.05)` (inferred from screenshot) — The main global navigation, fixed at the top, requiring a high stacking order.
-   **FAB Button (z-2500)**: `0 8px 24px rgba(0,0,0,0.15)` (inferred from screenshot) — Floating action buttons, requiring the highest stacking context to remain accessible.

**Shadow Philosophy**
Shadows are used judiciously to indicate interactivity or to distinguish critical, transient UI elements like consent banners and floating action buttons. Most static content, such as cards and sections, remains flat, relying on clean lines and ample whitespace for separation. When shadows are present, they are subtle and diffuse, typically a light gray with a low opacity, avoiding heavy or dark effects.

## 7. Do's and Don'ts

### Do's
-   **Do** use `SamsungOne` at `16px` with `400` weight for all body text, paired with `#000000` on `#ffffff` for AAA contrast (ratio 21:1).
-   **Do** apply `#006bea` for all primary button backgrounds and link hover states, ensuring consistent brand interaction cues.
-   **Do** maintain a minimum `32px` vertical spacing between major content sections to ensure ample whitespace.
-   **Do** use `4px` border-radius for buttons and `8px` for cards, providing a consistent modern aesthetic.
-   **Do** ensure interactive elements like inputs have a clear `2px` focus ring in `rgba(0, 107, 234, 0.2)` to meet accessibility guidelines.
-   **Do** use `#eeeeee` as the background for ghost button and input wrapper hover states, providing subtle interactive feedback.
-   **Do** leverage `opacity: 0.7` for the `:active` state of all buttons, indicating a pressed interaction.
-   **Do** use `SamsungOne` `48px` `700` for main display headlines to establish clear visual hierarchy.
-   **Do** ensure all product images within cards scale to `transform: scale(1.1)` on hover for engaging interaction.

### Don'ts
-   **Don't** use `#757575` for small text (below `18px`) on a `#ffffff` background, as its 4.61:1 contrast ratio only passes AA.
-   **Don't** introduce custom spacing values; adhere strictly to the `[0, 4, 8, 12, 16, 32]px` spacing scale.
-   **Don't** use any font family other than `SamsungOne` for primary brand communication.
-   **Don't** apply strong box-shadows to standard cards; maintain a flat aesthetic for static content.
-   **Don't** use `#dddddd` for active text or backgrounds, as it is reserved for disabled states.
-   **Don't** remove the underline from standard links (`.link-standard`) in their default state.
-   **Don't** use `font-weight: 700` for body text; reserve it for headings and primary interactive elements.
-   **Don't** place elements with a z-index lower than `2000` over the main navigation bar.
-   **Don't** use a `transition-duration` longer than `200ms` for micro-interactions to avoid sluggishness.

## 8. Responsive Behavior

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~360px): `(max-width: 360px)`: Primary navigation collapses to a hamburger menu; typography scales down.
    -   **Mobile Large** (~767px): `(max-width: 767px)`: Product cards stack vertically; main content padding adjusts to 16px horizontal.
    -   **Tablet** (~1024px): `(max-width: 1024px)`: Multi-column layouts may shift to 1 or 2 columns; larger images may scale.
    -   **Desktop** (~1279px): `(max-width: 1279px)`: Adjusts content width to prevent excessive line length; fine-tunes spacing.
    -   **Desktop Large** (~1440px): `(min-width: 1440px)`: Optimizes for large screens, potentially expanding content areas or increasing whitespace.
-   **Touch Targets**:
    -   Minimum touch target size of 44px by 44px (inferred from screenshot) for all interactive elements.
    -   Maintain at least 8px (inferred from screenshot) of clear space between touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: Top navigation bar transforms into a hamburger menu on mobile (`max-width: 767px`).
    -   **Cards**: Multi-column product card grids collapse to a single column on smaller viewports.
    -   **Typography**: Display and heading font sizes are reduced for mobile to fit screen width and maintain readability.
    -   **Padding**: Horizontal page padding reduces from 32px to 16px on mobile for better content utilization.
    -   **Forms**: Input fields maintain full width, labels stack above inputs for clarity on mobile.
    -   **Spacing**: Vertical spacing between sections may be slightly compressed on mobile to reduce scroll depth.

## 9. Agent Prompt Guide
-   **Quick Color Reference**:
    -   Primary: `#006bea`
    -   Primary Hover: `#1428a0`
    -   Background: `#ffffff`
    -   Surface: `#ffffff`
    -   Surface Light: `#f7f7f7`
    -   Surface Hover: `#eeeeee`
    -   Text Primary: `#000000`
    -   Text Muted: `#757575`
    -   Text Disabled: `#dddddd`
    -   Link: `#0000ee`
    -   Interactive Active: `#575e68`
-   **Iteration Guide**:
    1.  Always use `SamsungOne` as the primary font family for all text.
    2.  Ensure all primary CTAs use `{colors.primary}` (`#006bea`) background with `#ffffff` text.
    3.  Set body text to `16px` `SamsungOne` `400` with `{colors.text-primary}` (`#000000`).
    4.  Apply `4px` border-radius to buttons and `8px` to cards.
    5.  Use `12px 24px` padding for standard buttons.
    6.  Implement `:hover` states with `{colors.surface-hover}` (`#eeeeee`) background for ghost/secondary buttons.
    7.  For input fields, ensure a `1px` `{colors.text-muted}` (`#757575`) border and a `{colors.primary}` (`#006bea`) focus ring.
    8.  Maintain `32px` as the standard vertical spacing between major content sections.
    9.  The main navigation bar should have a `z-index` of `2000`.
    10. Ensure all interactive elements have a minimum touch target of `44px` and `8px` clear space.
    11. Implement `opacity: 0.7` for all button `:active` states.
    12. Use `cubic-bezier(0.4, 0, 0.2, 1)` for all standard CSS transitions with `100ms` or `200ms` duration.
