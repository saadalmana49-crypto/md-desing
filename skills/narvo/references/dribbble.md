---
name: 'Dribbble'
slug: dribbble
url: https://dribbble.com
category: 'Design'
mode: dual
fonts:
  - 'Mona Sans'
preview:
  bg: '#ffffff'
  fg: '#0d0c22'
  accent: '#ea4c89'
summary: >-
  Dribbble pink on near-black ink, Mona Sans from 52px display down to 12px, dense 24px-gutter card grid.
colors:
  primary: '#ea4c89'
  primary-hover: '#d4447d'
  background: '#ffffff'
  surface: '#faf9fb'
  text-primary: '#0d0c22'
  text-secondary: '#524b63'
  text-muted: '#beb9ca'
  text-accent: '#060318'
  border: '#ecebf0'
  border-alt: '#e7e7e9'
  link-hover: '#3d3d4e'
  dark-surface: '#3a3546'
  dark-text: '#beb9ca'
  dark-text-primary: '#ffffff'
  dark-border: '#7b7194'
typography:
  display:
    family: 'Mona Sans'
    size: 52px
    weight: 600
    line-height: 1.2
  heading-lg:
    family: 'Mona Sans'
    size: 18px
    weight: 400
    line-height: 1.5
  heading-md:
    family: 'Mona Sans'
    size: 16px
    weight: 400
    line-height: 1.5
  body:
    family: 'Mona Sans'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Mona Sans'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'Mona Sans'
    size: 13px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
radius:
  sm: 2px
  md: 4px
  lg: 12px
  pill: 50px
  full: 9999px
elevation:
  card: '0px 2px 4px 0px rgba(6, 3, 24, 0.1)'
  card-hover: '0px 3px 6px 0px rgba(0, 0, 0, 0.14)'
  cookie-banner: '0px -1px 10px 0px rgba(172, 171, 171, 0.3)'
motion:
  duration-fast: '0.15s'
  duration-base: '0.2s'
  easing-standard: 'ease-in-out'
  easing-ease-out: 'ease-out'
layout:
  breakpoints:
    mobile-small: 375px
    mobile-large: 767px
    tablet: 959px
    desktop: 1200px
    desktop-large: 1440px
---

# Design System Inspired by Dribbble

## 1. Visual Theme & Atmosphere
Dribbble's design system evokes a vibrant, creative, and community-focused atmosphere, driven by its signature `#ea4c89` pink accent and the clean, modern `Mona Sans` typeface. The layout emphasizes a dense grid of visual content, allowing designers' work to be the primary focus, while subtle shadows and ample whitespace maintain visual clarity. Interactive elements are clearly delineated with a distinct pink, ensuring calls to action stand out without overwhelming the content.

The platform incorporates subtle CSS keyframe animations and SVG animations for interactive elements, such as loading indicators and icon transitions, alongside embedded video content in some design showcases. This adds a dynamic layer to the user experience, providing micro-interactions that enhance engagement without distracting from the core visual content. The overall impression is one of approachable professionalism, designed to inspire and facilitate creative exchange.

**Key Characteristics**
- **Primary Accent**: Dribbble pink (`#ea4c89`) for CTAs and highlights.
- **Typography**: `Mona Sans` for all text roles, from 52px display to 12px captions.
- **Content Grid**: Densely packed visual cards with 24px gutters.
- **Soft Shadows**: `0px 2px 4px rgba(6, 3, 24, 0.1)` for subtle depth on cards.
- **Generous Spacing**: A 4px base spacing scale, with 24px and 32px common for sections.
- **Rounded Corners**: `12px` radius on cards, `9999px` for pill-shaped buttons.
- **Interactive Feedback**: `0.15s ease-in-out` transitions on hover states.

## 2. Color Palette & Roles
Dribbble's color palette is built around a distinctive pink accent, complemented by a versatile neutral scale that supports content-heavy layouts and ensures high readability.

-   **Primary**: `#ea4c89` — The iconic Dribbble pink, used for primary calls to action, active states, and brand highlights.
-   **Primary Hover**: `#d4447d` (inferred from screenshot) — A slightly darker shade of primary pink, used for hover states on primary interactive elements.
-   **Text Primary**: `#0d0c22` — The darkest text color, used for main headings, body text, and critical information, ensuring high contrast.
-   **Text Accent**: `#060318` — A slightly darker variant of primary text, used for strong emphasis or specific interactive elements.
-   **Text Secondary**: `#524b63` — Used for secondary information, descriptions, and less prominent text elements.
-   **Text Muted**: `#beb9ca` — Lightest text color, used for subtle hints, timestamps, and disabled states.
-   **Link Hover**: `#3d3d4e` — A dark gray for hover states on standard text links.
-   **Background**: `#ffffff` — The dominant background color for most page content, providing a clean canvas.
-   **Surface**: `#faf9fb` — A very light gray, used for subtle background differentiation in sections or containers.
-   **Border**: `#ecebf0` — A light gray, used for subtle dividers, input borders, and component outlines.
-   **Border Alt**: `#e7e7e9` — A slightly lighter gray border, used for less prominent borders or separators.
-   **Dark Surface**: `#3a3546` — A dark background color, used for specific sections or potential dark mode elements.
-   **Dark Text**: `#beb9ca` (inferred from screenshot) — A light, muted text color for use on dark surfaces.
-   **Dark Text Primary**: `#ffffff` (inferred from screenshot) — White text for primary content on dark surfaces.
-   **Dark Border**: `#7b7194` (inferred from screenshot) — A muted purple-gray for borders on dark backgrounds.

## 3. Typography Rules
-   **Font Family**: 'Mona Sans', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif. For code, 'Mona Sans' is used as a monospace fallback.
-   **Hierarchy**:
    -   **Display/H1**: 'Mona Sans' 52px 600 · line-height 1.2 · tracking none · Used for prominent hero headlines.
    -   **H2**: 'Mona Sans' 18px 400 · line-height 1.5 · tracking none · Used for section titles and important subheadings.
    -   **H3**: 'Mona Sans' 16px 400 · line-height 1.5 · tracking none · Used for card titles, navigation items, and secondary headings.
    -   **Body**: 'Mona Sans' 14px 400 · line-height 1.5 · tracking none · Standard text for paragraphs, descriptions, and lists.
    -   **Caption**: 'Mona Sans' 12px 400 · line-height 1.5 · tracking none · Used for metadata, timestamps, and small print.
    -   **Code/Mono**: 'Mona Sans' 13px 400 · line-height 1.5 · tracking none · For code snippets, tags, or fixed-width text.
-   **Principles**
    -   **Unified Sans-Serif**: The exclusive use of 'Mona Sans' across all typographic scales creates a cohesive and modern brand voice.
    -   **Weight for Emphasis**: Font weight (e.g., 600 for display, 700 for some buttons) is primarily used to establish hierarchy rather than mixing font families.
    -   **Generous Line Height**: A consistent line-height of 1.5 for body and smaller text ensures readability, especially in content-rich areas.
    -   **Clear Hierarchy**: A distinct step-down in font sizes and weights provides a clear visual path for users to scan and comprehend information.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent, solid button in Dribbble pink, used for primary calls to action like "Accept All". It features a subtle brightness reduction on hover for feedback.
```css
.button-primary {
  background-color: var(--colors-primary, #ea4c89);
  color: var(--colors-background, #ffffff);
  font-family: var(--typography-body-family, 'Mona Sans');
  font-size: 14px;
  font-weight: 500;
  padding: 8px 8px;
  border: 1px solid var(--colors-primary, #ea4c89);
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              filter var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #d4447d); /* inferred from screenshot */
  filter: brightness(0.9); /* inferred from pseudoStates.hover for .cky-btn */
}

.button-primary:active {
  background-color: rgb(187, 61, 110); /* from pseudoStates.active for .btn-icon */
  filter: brightness(0.8); /* inferred from screenshot */
}

.button-primary:disabled {
  opacity: 0.6; /* from pseudoStates.disabled for .btn2 */
  cursor: not-allowed;
}
```

#### Secondary Button
An outlined button with Dribbble pink text and border, used for secondary actions like "Customise" or "Reject All". It subtly fills with a transparent pink on hover.
```css
.button-secondary {
  background-color: transparent;
  color: var(--colors-primary, #ea4c89);
  font-family: var(--typography-body-family, 'Mona Sans');
  font-size: 14px;
  font-weight: 500;
  padding: 8px 8px;
  border: 1px solid var(--colors-primary, #ea4c89);
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.button-secondary:hover {
  background-color: rgba(234, 76, 137, 0.1); /* inferred from screenshot */
  color: var(--colors-primary, #ea4c89);
}

.button-secondary:active {
  background-color: rgba(234, 76, 137, 0.2); /* inferred from screenshot */
  color: var(--colors-primary, #ea4c89);
}

.button-secondary:disabled {
  opacity: 0.6; /* from pseudoStates.disabled for .btn2 */
  cursor: not-allowed;
}
```

#### Ghost Button
A pill-shaped button with dark text and a subtle light border, primarily seen in the navigation for "Get Started". It lightens its background on hover.
```css
.button-ghost {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #0d0c22);
  font-family: var(--typography-caption-family, 'Mona Sans');
  font-size: 12px;
  font-weight: 700;
  padding: 0px 16px;
  height: 32px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-alt, #e7e7e9);
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.button-ghost:hover {
  background-color: var(--colors-surface, #faf9fb); /* inferred from screenshot */
  border-color: var(--colors-border, #ecebf0); /* inferred from screenshot */
}

.button-ghost:active {
  background-color: var(--colors-border, #ecebf0); /* inferred from screenshot */
  border-color: var(--colors-border, #ecebf0); /* inferred from screenshot */
}

.button-ghost:disabled {
  opacity: 0.6; /* from pseudoStates.disabled for .btn2 */
  cursor: not-allowed;
}
```

### Cards & Containers

#### Standard Card
A white card with rounded corners and a soft shadow, used for displaying individual design shots. On hover, its shadow deepens slightly to indicate interactivity.
```css
.card-standard {
  background-color: var(--colors-background, #ffffff);
  border-radius: var(--radius-lg, 12px);
  box-shadow: var(--elevation-card, 0px 2px 4px 0px rgba(6, 3, 24, 0.1));
  padding: 0; /* Content padding handled internally */
  overflow: hidden;
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card-standard:hover {
  box-shadow: var(--elevation-card-hover, 0px 3px 6px 0px rgba(0, 0, 0, 0.14));
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light border and rounded corners. It gains a prominent primary pink focus ring on interaction.
```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #0d0c22);
  font-family: var(--typography-body-family, 'Mona Sans');
  font-size: 14px;
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-alt, #e7e7e9);
  border-radius: var(--radius-md, 4px);
  transition: border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.input-text::placeholder {
  color: var(--colors-text-muted, #beb9ca); /* inferred from cssVariables --placeholder-color */
}

.input-text:focus {
  border-color: var(--colors-primary, #ea4c89);
  outline: none;
  box-shadow: 0 0 0 2px rgba(234, 76, 137, 0.2); /* inferred from pseudoStates.focus for .aa-Form:focus-within */
}

.input-text:disabled {
  background-color: var(--colors-surface, #faf9fb);
  color: var(--colors-text-muted, #beb9ca);
  opacity: 0.5; /* from pseudoStates.disabled for .toggle2:has() */
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, typically dark gray and slightly bolder than body text for clarity.
```css
.form-label {
  color: var(--colors-text-primary, #0d0c22);
  font-family: var(--typography-body-family, 'Mona Sans');
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  display: block;
  margin-bottom: var(--spacing-4, 4px);
}
```

#### Checkbox/Radio
Standard checkbox and radio button styling, with a custom appearance.
```css
.checkbox, .radio {
  appearance: none;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #ecebf0);
  border-radius: var(--radius-sm, 2px); /* Checkbox */
  border-radius: var(--radius-full, 9999px); /* Radio */
  background-color: var(--colors-background, #ffffff);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.checkbox:checked, .radio:checked {
  background-color: var(--colors-primary, #ea4c89);
  border-color: var(--colors-primary, #ea4c89);
}

.checkbox:checked::after {
  content: '';
  display: block;
  width: 10px; /* inferred from screenshot */
  height: 10px; /* inferred from screenshot */
  background-image: url("/assets/icons/check-white-4280ab4c53ca62fad039199f10c3964076dae155a1335788ec62f4b9dd5a5f4f.svg"); /* from pseudoStates.checked */
  background-size: contain;
  background-repeat: no-repeat;
}

.radio:checked::after {
  content: '';
  display: block;
  width: 8px; /* inferred from screenshot */
  height: 8px; /* inferred from screenshot */
  border-radius: var(--radius-full, 9999px);
  background-color: var(--colors-background, #ffffff); /* from pseudoStates.checked */
}

.checkbox:disabled, .radio:disabled {
  opacity: 0.5; /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Navigation

#### Top Navigation Bar
The main navigation bar at the top of the page, featuring a white background and a subtle bottom border.
```css
.nav-top-bar {
  background-color: var(--colors-background, #ffffff);
  border-bottom: 1px solid var(--colors-border, #ecebf0); /* inferred from screenshot */
  padding: var(--spacing-16, 16px) var(--spacing-32, 32px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9996; /* from elevation.zIndexValues */
}
```

#### Navigation Link
Individual links within the navigation bar, typically dark gray. They darken to primary text color on hover and for active states.
```css
.nav-link {
  color: var(--colors-text-secondary, #524b63);
  font-family: var(--typography-heading-md-family, 'Mona Sans');
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.nav-link:hover {
  color: var(--colors-text-primary, #0d0c22); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-text-primary, #0d0c22);
  font-weight: 600; /* inferred from screenshot */
}
```

#### Dropdown Menu
A white, rounded panel with a subtle shadow, used for navigation dropdowns.
```css
.dropdown-menu {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border, #ecebf0);
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--elevation-card, 0px 2px 4px 0px rgba(6, 3, 24, 0.1)); /* inferred from screenshot */
  padding: var(--spacing-12, 12px) 0;
  min-width: 160px; /* inferred from screenshot */
  position: absolute;
  z-index: 9997; /* inferred from screenshot */
  transition: opacity var(--motion-duration-base, 0.2s) var(--motion-easing-ease-out, ease-out);
}

.dropdown-menu-item {
  color: var(--colors-text-primary, #0d0c22);
  font-family: var(--typography-body-family, 'Mona Sans');
  font-size: 14px;
  font-weight: 400;
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.dropdown-menu-item:hover {
  background-color: var(--colors-surface, #faf9fb);
}
```

### Links

#### Standard Link
A standard inline text link, typically Dribbble pink, with an underline appearing on hover.
```css
.link-standard {
  color: var(--colors-primary, #ea4c89);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out),
              text-decoration var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.link-standard:hover {
  color: var(--colors-primary-hover, #d4447d); /* inferred from screenshot */
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--colors-primary, #ea4c89); /* inferred from screenshot */
}
```

#### Secondary Link
A muted text link, often used for less prominent actions or information, with a subtle color change on hover.
```css
.link-secondary {
  color: var(--colors-text-secondary, #524b63);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease-in-out);
}

.link-secondary:hover {
  color: var(--colors-text-primary, #0d0c22); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-secondary, #524b63); /* inferred from screenshot */
}
```

### Badges

#### Status Badge - PRO
A small, dark badge with white text, indicating a "PRO" status.
```css
.badge-pro {
  background-color: var(--colors-text-primary, #0d0c22);
  color: var(--colors-background, #ffffff);
  font-family: var(--typography-caption-family, 'Mona Sans');
  font-size: 10px; /* inferred from screenshot */
  font-weight: 600; /* inferred from screenshot */
  padding: 2px 6px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 2px);
  text-transform: uppercase;
  letter-spacing: 0.5px; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

#### Status Badge - PRO+
A small, Dribbble pink badge with white text, indicating a "PRO+" status.
```css
.badge-pro-plus {
  background-color: var(--colors-primary, #ea4c89);
  color: var(--colors-background, #ffffff);
  font-family: var(--typography-caption-family, 'Mona Sans');
  font-size: 10px; /* inferred from screenshot */
  font-weight: 600; /* inferred from screenshot */
  padding: 2px 6px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 2px);
  text-transform: uppercase;
  letter-spacing: 0.5px; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## 5. Layout Principles
-   **Spacing System**: Dribbble utilizes a modular spacing system based on a 4px grid.
    -   Base: 4px
    -   Scale: `[4, 8, 12, 16, 20, 24, 32, 40, 48, 64]`
    -   Usage Context:
        -   `4px`: Smallest inline element spacing, icon-to-text.
        -   `8px`: Padding within smaller components, spacing between related items.
        -   `12px`: Padding for input fields, vertical spacing in lists.
        -   `16px`: Horizontal padding in buttons, spacing between minor sections.
        -   `20px`: Moderate spacing between distinct UI elements.
        -   `24px`: Gutter spacing in grids, vertical spacing between cards.
        -   `32px`: Section padding, spacing between major content blocks.
        -   `40px`: Larger vertical separation for content areas.
        -   `48px`: Significant vertical section padding.
        -   `64px`: Max vertical spacing for hero sections or large content breaks.
-   **Grid & Container**:
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: 1440px (inferred from screenshot)
    -   Columns: 4 (inferred from screenshot for desktop grid)
    -   Gutter: 24px (inferred from screenshot)
    -   Section Padding: 48px vertical, 32px horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: Dribbble employs generous whitespace to create a sense of openness and allow individual design shots to breathe. Ample padding around content blocks and between grid items reduces visual clutter, enhancing focus on the creative work. This strategic use of negative space contributes to a premium and organized aesthetic, making the platform feel easy to navigate despite its content density.
-   **Border Radius Scale**:
    -   `sm`: 2px — Smallest radius, used for subtle softening on buttons and badges.
    -   `md`: 4px — Standard radius for input fields and smaller containers.
    -   `lg`: 12px — Prominent radius for cards and larger content blocks.
    -   `pill`: 50px — Used for distinct pill-shaped elements like filter tags.
    -   `full`: 9999px — For perfectly rounded elements like avatars or circular buttons.

## 6. Depth & Elevation
Dribbble uses subtle shadows to establish hierarchy and provide visual cues for interactive elements, avoiding heavy or intrusive depth.
-   **Flat (z-0)**: `none` — Default state for background elements and static content.
-   **Interactive (z-1)**: `0px 2px 4px 0px rgba(6, 3, 24, 0.1)` — Used for cards, buttons, and inputs to give a subtle lift.
-   **Hover (z-1)**: `0px 3px 6px 0px rgba(0, 0, 0, 0.14)` — Applied to interactive cards on hover, indicating a raised state.
-   **Cookie Banner (z-999)**: `0px -1px 10px 0px rgba(172, 171, 171, 0.3)` — A distinct shadow for the bottom-anchored cookie consent banner.
-   **Navigation (z-9996)**: `0px 2px 4px 0px rgba(6, 3, 24, 0.1)` (inferred from screenshot) — Applied to the sticky top navigation bar for subtle separation from content.
-   **Modal (z-9997)**: `0px 3px 6px 0px rgba(0, 0, 0, 0.14)` (inferred from screenshot) — Used for overlays and modals to ensure they appear above all page content.

**Shadow Philosophy**: Dribbble's shadow philosophy is one of understated elegance. Shadows are light and diffuse, primarily serving to differentiate interactive components and provide a sense of subtle lift rather than heavy depth. The use of low opacity dark grays ensures that shadows integrate smoothly with the clean aesthetic, contributing to a modern and inviting user interface.

## 7. Do's and Don'ts

### Do's
-   **Do** use `#ea4c89` for all primary calls to action, such as the "Accept All" button, to maintain brand consistency.
-   **Do** ensure body text is set in `Mona Sans` 14px 400 with a color of `#0d0c22` on `#ffffff` for optimal readability (ratio 19.22, passes AAA).
-   **Do** apply a `12px` border-radius to all `Standard Card` components to maintain the signature rounded aesthetic.
-   **Do** utilize `24px` spacing for grid gutters between design shots to provide visual breathing room.
-   **Do** set navigation links in `Mona Sans` 16px 500, changing from `#524b63` to `#0d0c22` on hover.
-   **Do** use the `0px 2px 4px 0px rgba(6, 3, 24, 0.1)` shadow for default interactive components like cards.
-   **Do** ensure text on secondary surfaces, like `#524b63` on `#ecebf0`, achieves at least AA contrast (ratio 6.96).
-   **Do** use `9999px` border-radius for pill-shaped elements like the "Get Started" button in the top navigation.
-   **Do** apply a `2px` primary pink focus ring (`rgba(234, 76, 137, 0.2)`) to all text input fields.

### Don'ts
-   **Don't** use `#beb9ca` for body text on `#ffffff` backgrounds, as it fails AA contrast with a ratio of 1.91.
-   **Don't** introduce custom spacing values; adhere strictly to the `[4, 8, 12, 16, 20, 24, 32, 40, 48, 64]` spacing scale.
-   **Don't** use a border-radius other than `12px` for `Standard Card` components.
-   **Don't** use any font family other than `Mona Sans` for headings or body text.
-   **Don't** use `#ea4c89` for small text on `#ffffff` if it's not large text, as it only passes AA-large (3.56 ratio).
-   **Don't** apply shadows heavier than `0px 3px 6px 0px rgba(0, 0, 0, 0.14)` to any UI element.
-   **Don't** use `opacity: 1` for `disabled` buttons; always set `opacity: 0.6` and `cursor: not-allowed`.
-   **Don't** underline `Standard Link` elements in their default state; reserve underlines for `:hover`.

## 8. Responsive Behavior
_Note: breakpoints below are from the source's actual media queries. Adjust to the brand's actual media queries when implementing._

-   **Breakpoints**:
    -   **Mobile Small** (~375px): Content stacks vertically; secondary navigation items are hidden or moved to an off-canvas menu.
    -   **Mobile Large** (~767px): Main navigation collapses to a hamburger menu; larger touch targets are implemented for better usability.
    -   **Tablet** (~959px): Grid layouts adjust to fewer columns (e.g., 2-column layout for shots); typography scales up slightly.
    -   **Desktop** (~1200px): Standard multi-column layouts (e.g., 4-column shot grid) with full navigation visible.
    -   **Desktop Large** (~1440px): Wider content areas and increased horizontal padding are utilized for optimal viewing.
-   **Touch Targets**:
    -   All interactive elements, especially buttons and links, should have a minimum touch target size of 44px (inferred from screenshot).
    -   Maintain at least 8px of clear space around touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: Top navigation links collapse into a hamburger menu below `767px`; the "Get Started" button remains prominent.
    -   **Cards**: Design `Standard Card` grids reflow from 4 columns to 2 columns on tablets, and to a single column on mobile.
    -   **Typography**: Display headlines scale down proportionally on smaller viewports to fit screen width while maintaining hierarchy.
    -   **Padding**: Horizontal section padding reduces from `32px` to `16px` on mobile, and `48px` vertical padding reduces to `24px`.
    -   **Forms**: Input fields maintain full width, but labels might stack above fields on mobile.
    -   **Spacing**: Larger spacing units (e.g., `48px`, `64px`) are often reduced to `32px` or `24px` on mobile for compactness.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#ea4c89`
    -   `primary-hover`: `#d4447d`
    -   `background`: `#ffffff`
    -   `surface`: `#faf9fb`
    -   `text-primary`: `#0d0c22`
    -   `text-secondary`: `#524b63`
    -   `text-muted`: `#beb9ca`
    -   `text-accent`: `#060318`
    -   `border`: `#ecebf0`
    -   `border-alt`: `#e7e7e9`
    -   `link-hover`: `#3d3d4e`
    -   `dark-surface`: `#3a3546`
    -   `dark-text`: `#beb9ca`
    -   `dark-text-primary`: `#ffffff`
    -   `dark-border`: `#7b7194`

-   **Iteration Guide**:
    1.  Always use `Mona Sans` for all text elements, prioritizing `52px 600` for display and `14px 400` for body.
    2.  Always use `#ea4c89` for primary CTAs, ensuring the `:hover` state is `#d4447d`.
    3.  Always apply `12px` `border-radius` to `Standard Card` components and `9999px` for pill-shaped buttons.
    4.  Always use the `4px` base spacing scale, with `24px` for grid gutters and `48px` for major section padding.
    5.  Always include a `0.15s ease-in-out` transition for color and background-color changes on interactive elements.
    6.  Always use `0px 2px 4px 0px rgba(6, 3, 24, 0.1)` for default card shadows, deepening to `0px 3px 6px 0px rgba(0, 0, 0, 0.14)` on hover.
    7.  Always ensure text input fields have a `2px` `rgba(234, 76, 137, 0.2)` focus ring and `1px solid #e7e7e9` border.
    8.  Always set `disabled` components to `opacity: 0.6` and `cursor: not-allowed`.
    9.  Always ensure primary body text (`#0d0c22` on `#ffffff`) passes AAA contrast (19.22 ratio).
    10. Always collapse the main navigation into a hamburger menu on viewports below `767px`.
    11. Always use `2px` `border-radius` for small badges like "PRO" and "PRO+".
    12. Always use `background-color: transparent` and `border: 1px solid {colors.primary}` for `Secondary Button` variants.
