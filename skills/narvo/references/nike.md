---
name: 'Nike'
slug: nike
url: https://www.nike.sa
category: 'Commerce'
mode: light
fonts:
  - 'HelveticaNeue'
preview:
  bg: '#f5f5f5'
  fg: '#111111'
  accent: '#000000'
summary: >-
  Helvetica Neue, #f5f5f5 canvas, black CTAs and a lime accent — typography and product photography only.
colors:
  primary: '#000000'
  background: '#f5f5f5'
  text-primary: '#111111'
  text-inverse: '#ffffff'
  text-muted: '#757575'
  surface: '#ffffff'
  border-subtle: '#e5e5e5'
  accent-lime: '#ccff00'
  accent-grey: '#cccccc'
  interactive-hover-text: '#111111'
  interactive-focus-outline: '#000000'
  interactive-active-bg: '#007bff'
  interactive-disabled-bg: '#b8b8b8'
  interactive-checkbox-checked: '#128a09'
typography:
  display:
    family: 'HelveticaNeue, Helvetica, Arial, sans-serif'
    size: 76px
    weight: 700
    line-height: 1.2
  heading:
    family: 'HelveticaNeue, Helvetica, Arial, sans-serif'
    size: 24px
    weight: 700
    line-height: 1.2
  body:
    family: 'HelveticaNeue, Helvetica, Arial, sans-serif'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'HelveticaNeue, Helvetica, Arial, sans-serif'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 16, 20, 24, 40, 48]
radius:
  sm: 20px
  md: 36px
  lg: 40px
  full: 100px
elevation:
  flat: '0px 0px 0px 0px rgb(0, 0, 0)'
motion:
  duration-fast: '0.2s'
  duration-base: '0.4s'
  easing-standard: 'ease-in-out' # inferred from common practice
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.lg}'
    padding: '16px 24px'
  button-secondary:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '{colors.primary}'
    radius: '{radius.lg}'
    padding: '16px 24px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.sm}'
    shadow: '{elevation.flat}'
---

# Design System Inspired by Nike Saudi

## 1. Visual Theme & Atmosphere
The Nike Saudi online store presents a bold and athletic visual theme, characterized by a high-contrast monochromatic palette of black (`#111111`), white (`#ffffff`), and light grey (`#f5f5f5`). Dominant full-bleed hero sections feature impactful photography and video autoplay, creating an immersive and dynamic user experience. Large, rounded call-to-action buttons with a `40px` border-radius stand out against the imagery, guiding user interaction.

The overall atmosphere is clean, direct, and performance-oriented, with ample whitespace and a strong typographic presence using the `HelveticaNeue` font family. Minimal use of shadows (`0px 0px 0px 0px`) contributes to a flat, modern aesthetic, allowing product imagery and bold headlines to take center stage. The site leverages video content to enhance engagement, with 10 instances of autoplay video detected in hero areas.

**Key Characteristics**
*   High-contrast black, white, and light grey color scheme.
*   Bold, sans-serif typography (HelveticaNeue).
*   Prominent hero sections with autoplay video.
*   Large, rounded buttons (`40px` radius).
*   Clean, spacious layouts on a `#f5f5f5` background.
*   Flat design with `0px 0px 0px 0px` shadows.
*   Focus on high-quality product photography.

## 2. Color Palette & Roles
Nike Saudi's color palette is primarily monochromatic, emphasizing clarity and brand recognition, with subtle interactive states and a single vibrant accent.

-   **Primary**
    -   `primary` (`#000000`) — Used for strong call-to-action button backgrounds, important borders, and key interactive elements.
    -   `text-primary` (`#111111`) — The default color for all primary text content, including headings, body text, and navigation links.
-   **Accent Colors**
    -   `accent-lime` (`#ccff00`) — A vibrant, energetic hue used for promotional banners, such as the "Up to 50% Off" section, to draw immediate attention.
    -   `accent-grey` (`#cccccc`) — A light grey used for subtle accents or inactive elements, such as progress bar indicators.
-   **Interactive**
    -   `interactive-hover-text` (`#111111`) — The text color for links and textual buttons on hover, maintaining strong readability.
    -   `interactive-focus-outline` (`#000000`) — A sharp black outline used for keyboard focus states, ensuring accessibility.
    -   `interactive-active-bg` (`#007bff`) — A blue background used for active states in dropdown menus, providing clear visual feedback.
    -   `interactive-disabled-bg` (`#b8b8b8`) — A muted grey background indicating disabled interactive elements, such as sliders.
    -   `interactive-checkbox-checked` (`#128a09`) — A distinct green used for the checked state of checkboxes, providing clear selection feedback.
-   **Neutral Scale**
    -   `background` (`#f5f5f5`) — The predominant light grey background color for the main page content, providing a clean canvas.
    -   `surface` (`#ffffff`) — Used for card backgrounds, content blocks, and navigation bars, offering a crisp, clean surface.
    -   `text-inverse` (`#ffffff`) — Text color used on dark backgrounds, such as primary buttons or hero overlays, ensuring contrast.
    -   `text-muted` (`#757575`) — A softer grey used for secondary information, captions, and less prominent text elements.
    -   `border-subtle` (`#e5e5e5`) — A very light grey used for subtle dividers or borders, maintaining a clean aesthetic.

## 3. Typography Rules
Nike Saudi's typography is built on a robust sans-serif system, prioritizing readability and impact.

-   **Font Family**: `HelveticaNeue, Helvetica, Arial, sans-serif`. For code blocks, `SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace` (inferred).
-   **Hierarchy**:
    -   **Display**: `HelveticaNeue` `76px` `700` · line-height `1.2` · tracking `none` · Used for prominent hero headlines and key promotional text.
    -   **H1**: `HelveticaNeue` `76px` `700` · line-height `1.2` · tracking `none` · Primary page title.
    -   **H2**: `HelveticaNeue` `24px` `700` · line-height `1.2` · tracking `none` · Section headings, product categories.
    -   **H3**: `HelveticaNeue` `23px` `400` · line-height `1.5` · tracking `none` · Product titles and sub-sections.
    -   **H4**: `HelveticaNeue` `20px` `400` · line-height `1.5` · tracking `none` · Supporting subheadings.
    -   **Body**: `HelveticaNeue` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text and descriptive content.
    -   **Caption**: `HelveticaNeue` `12px` `400` · line-height `1.5` · tracking `none` · Legal text, metadata, and supplementary information.
    -   **Code/Mono**: `SFMono-Regular` `16px` `400` · line-height `1.5` · tracking `none` · (inferred) Used for displaying code snippets.
-   **Principles**
    -   Prioritize `HelveticaNeue` across all textual elements to maintain a consistent, modern, and legible brand voice.
    -   Utilize `700` (bold) weight for all headings and primary calls-to-action to establish clear visual hierarchy and emphasis.
    -   Ensure generous line-heights, particularly `1.5` for body and caption text, to enhance readability and reduce eye strain.
    -   Employ `16px` as the foundational body text size, providing a comfortable reading experience on various screen sizes.
    -   Reserve `12px` for fine print and secondary details, ensuring it remains legible against the `#f5f5f5` background.

## 4. Component Stylings

### Buttons
Buttons feature prominent rounded corners, clear text, and distinct hover/active states. Transitions are subtle and quick for a responsive feel.

#### Primary Button
A bold, black button with white text, used for primary calls-to-action.
```css
.button-primary {
  background-color: var(--color-primary, #000000);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 16px 24px;
  border: none;
  border-radius: var(--radius-lg, 40px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-primary:hover {
  background-color: var(--color-text-primary, #111111); /* inferred from screenshot */
  transform: translateY(-2px); /* inferred from common practice */
}

.button-primary:active {
  background-color: var(--color-primary, #000000); /* inferred from screenshot */
  transform: translateY(0); /* inferred from common practice */
}

.button-primary:disabled {
  background-color: var(--color-interactive-disabled-bg, #b8b8b8);
  color: var(--color-text-inverse, #ffffff);
  cursor: not-allowed;
}
```

#### Secondary Button
A white button with a black border and black text, used for secondary actions or alternatives.
```css
.button-secondary {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 16px 24px;
  border: 1px solid var(--color-primary, #000000);
  border-radius: var(--radius-lg, 40px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-secondary:hover {
  background-color: var(--color-primary, #000000); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-surface, #ffffff); /* inferred from screenshot */
  color: var(--color-text-primary, #111111); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--color-interactive-disabled-bg, #b8b8b8);
  border-color: var(--color-interactive-disabled-bg, #b8b8b8);
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button with a transparent background, used for less prominent actions or navigation within content.
```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: 0; /* inferred from screenshot */
  cursor: pointer;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              text-decoration var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-ghost:hover {
  color: var(--color-interactive-hover-text, #111111);
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-primary, #000000); /* inferred from screenshot */
  text-decoration: none;
}

.button-ghost:disabled {
  color: var(--color-text-muted, #757575);
  cursor: not-allowed;
}
```

### Cards & Containers
Cards are clean, white containers with subtle rounded corners, emphasizing product imagery.

#### Standard Card
A basic container for product listings or content blocks, featuring a white background and slight border-radius. No visible shadow is applied.
```css
.card {
  background-color: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border-subtle, #e5e5e5); /* inferred from screenshot */
  border-radius: var(--radius-sm, 20px);
  box-shadow: var(--elevation-flat, 0px 0px 0px 0px rgb(0, 0, 0));
  overflow: hidden;
  transition: border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card:hover {
  border-color: var(--color-primary, #000000); /* inferred from screenshot */
  transform: translateY(-2px); /* inferred from common practice */
}
```

### Inputs & Forms

#### Text Input
Standard text input field with a subtle border and clear focus state.
```css
.input-text {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--color-border-subtle, #e5e5e5);
  border-radius: var(--radius-sm, 20px); /* inferred from screenshot */
  transition: border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              box-shadow var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.input-text:focus {
  border-color: var(--color-interactive-focus-outline, #000000);
  outline: 2px solid var(--color-interactive-focus-outline, #000000);
  outline-offset: 2px; /* inferred from pseudoStates for onetrust-banner-sdk */
  box-shadow: 0 0 0 2px var(--color-interactive-focus-outline, #000000); /* inferred from common practice */
}

.input-text:disabled {
  background-color: var(--color-interactive-disabled-bg, #b8b8b8);
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--color-interactive-disabled-bg, #b8b8b8);
  cursor: not-allowed;
}
```

#### Form Label
Standard label for form elements.
```css
.form-label {
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
}
```

#### Checkbox/Radio
Custom-styled checkbox or radio input.
```css
.checkbox-input {
  appearance: none;
  width: 20px; /* inferred from screenshot */
  height: 20px; /* inferred from screenshot */
  border: 1px solid var(--color-border-subtle, #e5e5e5);
  border-radius: 4px; /* inferred from screenshot */
  background-color: var(--color-surface, #ffffff);
  cursor: pointer;
  position: relative;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.checkbox-input:checked {
  background-color: var(--color-interactive-checkbox-checked, #128a09);
  border-color: var(--color-interactive-checkbox-checked, #128a09);
}

.checkbox-input:checked::after {
  content: '✔'; /* inferred from common practice */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-text-inverse, #ffffff);
  font-size: 14px; /* inferred from screenshot */
}

.checkbox-input:disabled {
  background-color: var(--color-interactive-disabled-bg, #b8b8b8);
  border-color: var(--color-interactive-disabled-bg, #b8b8b8);
  cursor: not-allowed;
}
```

### Navigation

#### Top Navigation Bar
The main header navigation bar, fixed at the top of the viewport.
```css
.nav-bar {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #111111);
  padding: 17px 20px; /* from extracted buttons, inferred for nav */
  border-bottom: 1px solid var(--color-border-subtle, #e5e5e5); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000; /* from elevation.zIndexValues */
}
```

#### Navigation Link
Individual links within the main navigation, typically text-based.
```css
.nav-link {
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 500; /* from extracted buttons */
  text-decoration: none;
  padding: 17px 2px; /* from extracted buttons */
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-bottom-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.nav-link:hover {
  color: var(--color-primary, #000000); /* inferred from screenshot */
  border-bottom: 2px solid var(--color-primary, #000000); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #000000);
  font-weight: 700; /* inferred from screenshot */
  border-bottom: 2px solid var(--color-primary, #000000); /* inferred from screenshot */
}
```

#### Dropdown Menu
A contextual menu that appears on hover or click, typically for navigation categories.
```css
.dropdown-menu {
  background-color: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border-subtle, #e5e5e5);
  border-radius: 4px; /* inferred from screenshot */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* inferred from common practice */
  padding: var(--spacing-8, 8px) 0;
  z-index: 999; /* from elevation.zIndexValues */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--color-text-primary, #111111);
  font-family: var(--typography-body-family, 'HelveticaNeue', sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.dropdown-menu-item:hover {
  background-color: var(--color-background, #f5f5f5); /* inferred from screenshot */
  color: var(--color-text-primary, #111111);
}

.dropdown-menu-item.active {
  background-color: var(--color-interactive-active-bg, #007bff);
  color: var(--color-text-inverse, #ffffff);
}
```

### Links

#### Standard Link
Default text link, typically black on a light background.
```css
.link-standard {
  color: var(--color-text-primary, #111111);
  text-decoration: none;
  transition: text-decoration-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.link-standard:hover {
  text-decoration: underline; /* inferred from pseudoStates `initial` */
  text-decoration-color: var(--color-primary, #000000); /* inferred from screenshot */
  color: var(--color-primary, #000000); /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-text-primary, #111111); /* inferred from common practice */
}
```

#### Secondary Link
A less prominent link, often used for supplementary information or within muted text.
```css
.link-secondary {
  color: var(--color-text-muted, #757575);
  text-decoration: none;
  font-size: 14px; /* inferred from screenshot */
  transition: text-decoration-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.link-secondary:hover {
  text-decoration: underline; /* inferred from pseudoStates `initial` */
  text-decoration-color: var(--color-text-primary, #111111); /* inferred from screenshot */
  color: var(--color-text-primary, #111111); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-muted, #757575); /* inferred from common practice */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
Nike Saudi employs a spacious and clear layout, emphasizing content and imagery through generous spacing and a flexible grid.

-   **Spacing System**: Base `4px` → `4, 8, 16, 20, 24, 40, 48`.
    -   **Usage Context**:
        -   `4px`: Minimal spacing for tight element clusters (e.g., icon and text).
        -   `8px`: Small gaps between related items, internal component padding.
        -   `16px`: Standard spacing for text-to-element, small component margins.
        -   `20px`: Medium separation between components or list items.
        -   `24px`: Generous spacing for section padding, large component margins, and vertical rhythm.
        -   `40px`: Significant vertical or horizontal separation between major content blocks.
        -   `48px`: Large padding for hero sections and main content areas, creating visual breathing room.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*
    -   **Max Width**: `1440px` (inferred from viewport)
    -   **Columns**: `12` (inferred)
    -   **Gutter**: `24px` (inferred)
    -   **Section Padding**: `48px 0` (inferred)
-   **Whitespace Philosophy**: The design system leverages ample whitespace to create a premium, uncluttered, and focused user experience. Large margins and padding, particularly `24px` and `48px` values, are consistently applied around hero sections, product listings, and content blocks to highlight key visuals and calls-to-action, allowing elements to breathe and improving overall readability.
-   **Border Radius Scale**:
    -   `sm`: `20px` (Used for product image cards, input fields, and smaller containers).
    -   `md`: `36px` (Applied to smaller interactive buttons or elements requiring a softer edge).
    -   `lg`: `40px` (The signature large radius for primary call-to-action buttons and prominent interactive elements).
    -   `full`: `100px` (Used for pill-shaped elements or search inputs, creating a distinct, soft aesthetic).

## 6. Depth & Elevation
Nike Saudi primarily utilizes a flat design aesthetic, with elevation managed through z-index stacking rather than prominent visual shadows. The extracted shadow token indicates no visible shadows.
-   **Flat (z-0)**: `0px 0px 0px 0px rgb(0, 0, 0)` — Standard page content, product listings, and most static UI elements.
-   **Overlay (z-1)**: `none` (inferred) — Header logos and small interactive elements that need to appear above general content.
-   **Interactive (z-2)**: `none` (inferred) — Navigation links and interactive card overlays that require a higher stacking context.
-   **Banner (z-3)**: `none` (inferred) — Promotional banners or content blocks positioned above main page flow.
-   **Mega Menu Overlay (z-14)**: `none` (inferred) — Full-width mega menu backgrounds that cover content when active.
-   **Dropdown/Modal (z-999)**: `none` (inferred) — Dropdown menus, tooltips, or smaller modal windows.
-   **Global Header (z-1000)**: `none` (inferred) — The fixed main page header, ensuring it's always visible.
-   **Alert/Toast (z-1001)**: `none` (inferred) — System-level alerts or temporary notifications.
-   **Modal Content (z-1002)**: `none` (inferred) — Primary content for large modal dialogs.

Shadow Philosophy: The Nike Saudi design system embraces a flat visual style, as indicated by the `0px 0px 0px 0px rgb(0, 0, 0)` shadow value. Depth is primarily achieved through clear visual hierarchy, strong typography, and strategic use of z-index for layering interactive and overlay elements rather than relying on `box-shadow` for perceived elevation.

## 7. Do's and Don'ts

### Do's
-   **Do** use `HelveticaNeue` `700` for all H2 headings (`24px`) to maintain strong visual hierarchy.
-   **Do** apply `40px` `border-radius` to all Primary and Secondary Buttons for a consistent, soft, and approachable feel.
-   **Do** ensure body text (`16px` `HelveticaNeue` `400`) uses `#111111` on `#ffffff` backgrounds for AAA contrast.
-   **Do** use `48px` vertical spacing for major section breaks to provide ample visual breathing room.
-   **Do** highlight interactive elements with a `2px` `outline` of `#000000` on `:focus` for accessibility.
-   **Do** use `accent-lime` (`#ccff00`) sparingly for high-impact promotional banners, such as "Up to 50% Off".
-   **Do** maintain `16px` padding and `24px` horizontal padding for Primary Buttons to ensure sufficient touch target size.
-   **Do** use `text-muted` (`#757575`) for secondary links, ensuring a contrast ratio of 4.61 on `#ffffff` (passes AA).
-   **Do** use `background` (`#f5f5f5`) as the main page background to provide a clean, neutral canvas.

### Don'ts
-   **Don't** use any `box-shadow` values other than `0px 0px 0px 0px rgb(0, 0, 0)` for cards or containers.
-   **Don't** use text color lighter than `#757575` on a `#ffffff` background, as it may fail AA contrast.
-   **Don't** introduce `border-radius` values outside of `20px`, `36px`, `40px`, or `100px` for UI elements.
-   **Don't** use `HelveticaNeue` `400` for H2 headings; always use `700` weight to maintain hierarchy.
-   **Don't** use less than `16px` spacing between product cards to avoid visual clutter.
-   **Don't** apply `text-decoration: underline` to standard links by default; reserve it for the `:hover` state.
-   **Don't** use `interactive-disabled-bg` (`#b8b8b8`) for active elements; it is reserved for disabled states.
-   **Don't** use `interactive-active-bg` (`#007bff`) for general UI elements; it is specific to active dropdown items.
-   **Don't** introduce custom font families; strictly adhere to `HelveticaNeue` for all textual content.

## 8. Responsive Behavior
Note: breakpoints below are from the source's actual CSS media queries.

-   **Breakpoints**:
    -   **Mobile/Tablet** (~1023px max-width): Primary navigation collapses into a hamburger menu; content stacks vertically.
    -   **Tablet Small** (~544px min-width): Layouts begin to introduce multiple columns for content sections.
    -   **Tablet Large** (~768px min-width): More complex grid structures become visible; typography sizes may adjust slightly.
    -   **Desktop** (~1024px min-width): Full desktop navigation is visible; hero sections expand to full width.
    -   **Desktop Large** (~1200px min-width): Content containers expand to accommodate larger screens; additional product details may appear.
    -   **Desktop XL** (~1360px min-width): Maximum content width is reached, optimizing for very large displays.
-   **Touch Targets**:
    -   Interactive elements like buttons and links should have a minimum tap area of `48px` x `48px` (inferred).
    -   Maintain at least `16px` (inferred) clear space between touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation bar transitions to a hamburger menu on screens below `1024px`.
    -   **Cards**: Product and content cards reflow from multi-column grids to single-column stacks on mobile.
    -   **Typography**: Display headlines (`76px`) scale down to `48px` (inferred) or `36px` (inferred) on smaller viewports.
    -   **Padding**: Horizontal section padding may reduce from `48px` to `24px` or `16px` on mobile.
    -   **Forms**: Form inputs maintain their full width but may stack vertically on smaller screens.
    -   **Spacing**: Vertical spacing between major content blocks remains generous, but horizontal spacing may tighten to `16px` on mobile.

## 9. Agent Prompt Guide
-   **Quick Color Reference**
    -   `primary`: `#000000`
    -   `background`: `#f5f5f5`
    -   `text-primary`: `#111111`
    -   `text-inverse`: `#ffffff`
    -   `text-muted`: `#757575`
    -   `surface`: `#ffffff`
    -   `border-subtle`: `#e5e5e5`
    -   `accent-lime`: `#ccff00`
    -   `accent-grey`: `#cccccc`
    -   `interactive-hover-text`: `#111111`
    -   `interactive-focus-outline`: `#000000`
    -   `interactive-active-bg`: `#007bff`
    -   `interactive-disabled-bg`: `#b8b8b8`
    -   `interactive-checkbox-checked`: `#128a09`
-   **Iteration Guide**
    1.  Always use `HelveticaNeue` as the primary font family for all text.
    2.  Ensure Primary Buttons have a `background-color` of `#000000` and `color` of `#ffffff`.
    3.  Set all button `border-radius` to `40px` for primary and secondary variants.
    4.  Apply `16px` `padding` for all buttons, with `24px` horizontal padding for primary/secondary.
    5.  Use `background` (`#f5f5f5`) as the default page background color.
    6.  Default body text (`16px` `400`) should be `text-primary` (`#111111`).
    7.  Maintain `24px` as a minimum vertical spacing unit between major UI components.
    8.  All interactive elements must have a `2px` `outline` of `interactive-focus-outline` (`#000000`) on focus.
    9.  Cards should have a `background-color` of `surface` (`#ffffff`) and `border-radius` of `20px`.
    10. Navigation links should be `text-primary` (`#111111`) and gain a `2px` `border-bottom` of `primary` (`#000000`) on hover/active.
    11. Implement `0.2s` `ease-in-out` transitions for all color and background changes on interactive elements.
    12. Ensure text color `#757575` on `#ffffff` meets at least AA contrast ratio (4.61:1).
    13. Hero sections should utilize video autoplay and minimal text for maximum impact.
