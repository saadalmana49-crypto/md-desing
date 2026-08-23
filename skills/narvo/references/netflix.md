---
name: 'Netflix'
slug: netflix
url: https://netflix.com
category: 'Media'
mode: dark
fonts:
  - 'Netflix Sans'
preview:
  bg: '#000000'
  fg: '#ffffff'
  accent: '#e50914'
summary: >-
  The red on black. Netflix Sans, alpha-stepped white text, and artwork carrying every bit of the color.
colors:
  primary: '#e50914'
  primary-hover: '#cc0711'
  background: '#000000'
  background-surface: '#232323'
  background-input: '#2d2d2d'
  background-header-footer: '#161616'
  text-primary: '#ffffff'
  text-muted: 'rgba(255,255,255,0.7)'
  border-default: 'rgba(128,128,128,0.7)'
  border-light: '#414141'
  focus-ring: 'rgb(255,255,255)'
  disabled-text: 'rgba(255,255,255,0.4)'
  disabled-bg: 'rgba(229, 9, 20, 0.5)'
  link-cookie-banner-hover: 'rgb(24, 131, 253)'
typography:
  display:
    family: 'Netflix Sans'
    size: 56px
    weight: 700
    line-height: 1.2
  heading-2:
    family: 'Netflix Sans'
    size: 24px
    weight: 700
    line-height: 1.2
  heading-3:
    family: 'Netflix Sans'
    size: 20px
    weight: 400
    line-height: 1.5
  body:
    family: 'Netflix Sans'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Netflix Sans'
    size: 14px
    weight: 400
    line-height: 1.5
  small:
    family: 'Netflix Sans'
    size: 13px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 96, 128]
radius:
  sm: 2px
  md: 4px
  lg: 8px
  full: 50px
elevation:
  z-negative: -1
  z-base: 1
  z-card: 2
  z-dropdown: 3
  z-button-overlay: 100
  z-modal-backdrop: 1002
  z-cookie-banner: 2147483645
  z-cookie-overlay: 2147483646
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-primary}'
    radius: '{radius.md}'
    padding: '8px 16px'
  card:
    bg: '{colors.background-surface}'
    radius: '{radius.lg}'
  input-text:
    border: '{colors.border-default}'
    radius: '{radius.md}'
    padding: '16px 12px'
    foreground: '{colors.text-primary}'
    label-foreground: '{colors.text-muted}'
motion:
  duration-base: '250ms'
  duration-pressed: '0ms'
  easing-standard: 'cubic-bezier(0.4,0,0.68,0.06)'
  easing-hover: 'cubic-bezier(0.32,0.94,0.6,1)'
---

# Design System Inspired by Netflix

## 1. Visual Theme & Atmosphere
Netflix employs a dark, immersive visual theme that prioritizes content and cinematic presentation. The primary background is a deep `#000000` black, providing a stark contrast for the vibrant `#e50914` Netflix Red used prominently for calls to action. Content sections and cards are set against a slightly lighter `#232323` background, creating subtle depth without relying on shadows. Typography consistently uses the `Netflix Sans` font, contributing to a unified and modern brand identity.

The design system emphasizes a content-forward approach, utilizing large hero imagery and video backgrounds to immediately engage users. Interactive elements, such as content cards, feature subtle `transform: scale(1.05)` hover animations to provide dynamic feedback. Minimalist iconography in `#ffffff` on dark surfaces ensures clarity, while CSS animations are detected for various micro-interactions, enhancing the overall user experience with smooth transitions and visual cues.

Key Characteristics:
- Dark, immersive aesthetic with `#000000` and `#232323` backgrounds.
- Striking `#e50914` red for primary calls to action.
- Exclusive use of `Netflix Sans` font for all text.
- Content-first layout with large visual elements and hero media.
- Subtle `transform: scale(1.05)` hover animations on content cards.
- Minimalist iconography, typically `#ffffff` on dark backgrounds.
- High contrast `text-primary` (`#ffffff`) on all dark surfaces.

## 2. Color Palette & Roles
The Netflix color palette is built around a strong brand accent against a deep, dark neutral scale, ensuring content remains the focal point.

-   **Primary**
    -   **primary** (`#e50914`) — The iconic Netflix Red, used for primary calls to action, brand logos, and key interactive elements.
    -   **primary-hover** (`#cc0711`) — A slightly darker shade of red, inferred for hover states on primary buttons to provide visual feedback.

-   **Neutral Scale**
    -   **background** (`#000000`) — The dominant, deep black background for the main page, footer, and large sections, providing maximum contrast.
    -   **background-surface** (`#232323`) — A dark gray used for content cards, FAQ sections, and other contained UI elements, offering a subtle visual separation from the main background.
    -   **background-input** (`#2d2d2d`) — A slightly lighter dark gray specifically used for input fields, distinguishing them from surrounding content.
    -   **background-header-footer** (`#161616`) — A very dark gray used for the top navigation bar and footer, providing a consistent, subtle background.
    -   **text-primary** (`#ffffff`) — Pure white, used for almost all primary text, headings, and interactive elements, ensuring high readability on dark backgrounds.
    -   **text-muted** (`rgba(255,255,255,0.7)`) — A semi-transparent white, used for input labels, secondary descriptive text, and footer links, providing a softer visual hierarchy.
    -   **border-default** (`rgba(128,128,128,0.7)`) — A semi-transparent gray, used for borders on input fields.
    -   **border-light** (`#414141`) — A darker gray, used for subtle dividers, such as between FAQ items.

-   **Interactive**
    -   **focus-ring** (`rgb(255,255,255)`) — A bright white outline used for focus states on interactive elements, ensuring accessibility.
    -   **disabled-text** (`rgba(255,255,255,0.4)`) — A highly transparent white for text on disabled interactive elements.
    -   **disabled-bg** (`rgba(229, 9, 20, 0.5)`) — A semi-transparent primary red, inferred for disabled primary buttons.
    -   **link-cookie-banner-hover** (`rgb(24, 131, 253)`) — A distinct blue used for hover states on specific links within the cookie consent banner.

## 3. Typography Rules
Netflix maintains a strong and consistent typographic identity using a single, custom font family across its interface.

-   **Font Family**: `'Netflix Sans'`, `sans-serif` (fallback)
    -   Monospace fallback for code: `'SFMono-Regular'`, `'Consolas'`, `'Liberation Mono'`, `'Menlo'`, `'monospace'` (inferred from common practice).

-   **Hierarchy**:
    -   **Display/H1**: `Netflix Sans` `56px` `700` · line-height `1.2` · tracking `none` · Used for prominent hero titles like "Unlimited movies, TV shows, and more".
    -   **H2**: `Netflix Sans` `24px` `700` · line-height `1.2` · tracking `none` · Used for section headings such as "Trending Now" and "Frequently Asked Questions".
    -   **H3**: `Netflix Sans` `20px` `400` · line-height `1.5` · tracking `none` · Used for subheadings and individual FAQ questions.
    -   **Body**: `Netflix Sans` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text for descriptions and general content.
    -   **Caption**: `Netflix Sans` `14px` `400` · line-height `1.5` · tracking `none` · Used for smaller descriptive text and form field hints.
    -   **Small**: `Netflix Sans` `13px` `400` · line-height `1.5` · tracking `none` · Used for legal disclaimers and very fine print.

-   **Principles**:
    -   **Unified Brand Voice**: Exclusively uses `Netflix Sans` across all text elements to establish a strong, recognizable brand presence.
    -   **Clear Hierarchy**: Employs distinct font sizes and weights, particularly `700` for headings, to create a clear visual hierarchy that guides the user's eye.
    -   **Readability on Dark**: Prioritizes legibility on dark backgrounds by consistently using `text-primary` (`#ffffff`) for most text, with `text-muted` (`rgba(255,255,255,0.7)`) for secondary information.
    -   **Purposeful Weight Usage**: Reserves `font-weight: 700` for primary headings and calls to action, while `font-weight: 400` supports body and descriptive text.

## 4. Component Stylings

### Buttons

**Primary Button**
The primary button, typically Netflix Red, is used for key calls to action like "Try 7 Days for EUR 0". It features bold text and a subtle hover effect.

```css
.btn-primary {
  background-color: var(--colors-primary, #e50914);
  color: var(--colors-text-primary, #ffffff);
  font-family: 'Netflix Sans', sans-serif;
  font-size: 24px;
  font-weight: 500;
  padding: 8px 16px;
  border: none;
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 250ms) var(--motion-easing-hover, cubic-bezier(0.32,0.94,0.6,1));
}

.btn-primary:hover {
  background-color: var(--colors-primary-hover, #cc0711); /* inferred from screenshot */
}

.btn-primary:active {
  background-color: var(--colors-primary, #e50914);
  transition-duration: var(--motion-duration-pressed, 0ms);
}

.btn-primary:disabled {
  background-color: var(--colors-disabled-bg, rgba(229, 9, 20, 0.5)); /* inferred from screenshot */
  color: var(--colors-disabled-text, rgba(255,255,255,0.4));
  cursor: not-allowed;
}
```

**Secondary Button**
Used for less prominent actions, often within content cards or as supporting navigation. This button has a dark background and white text, with a subtle hover effect.

```css
.btn-secondary {
  background-color: var(--colors-background-surface, #232323);
  color: var(--colors-text-primary, #ffffff);
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-lg, 8px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 250ms) var(--motion-easing-hover, cubic-bezier(0.32,0.94,0.6,1));
}

.btn-secondary:hover {
  background-color: var(--colors-background-header-footer, #161616); /* inferred from screenshot */
}

.btn-secondary:active {
  background-color: var(--colors-background-surface, #232323);
  transition-duration: var(--motion-duration-pressed, 0ms);
}

.btn-secondary:disabled {
  background-color: var(--colors-background-surface, #232323);
  color: var(--colors-disabled-text, rgba(255,255,255,0.4));
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

**Ghost Button**
A text-only button, typically used for tertiary actions or navigation, with a subtle hover underline.

```css
.btn-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #ffffff);
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 2px);
  cursor: pointer;
  transition: text-decoration var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}

.btn-ghost:hover {
  text-decoration: underline; /* inferred from screenshot */
}

.btn-ghost:active {
  color: var(--colors-text-primary, #ffffff);
  text-decoration: none;
}

.btn-ghost:disabled {
  color: var(--colors-disabled-text, rgba(255,255,255,0.4));
  cursor: not-allowed;
}
```

### Cards & Containers

**Standard Card**
Content cards, like those in the "Trending Now" section, feature a dark background and rounded corners, with a distinct scale-up effect on hover.

```css
.card {
  background-color: var(--colors-background-surface, #232323);
  border-radius: var(--radius-lg, 8px);
  overflow: hidden;
  position: relative;
  transition: transform var(--motion-duration-base, 250ms) var(--motion-easing-hover, cubic-bezier(0.32,0.94,0.6,1));
}

.card:hover {
  transform: scale(1.05);
}

/* Specific styling for "More Reasons to Join" feature cards */
.feature-card {
  background-color: var(--colors-background-surface, #232323);
  border-radius: var(--radius-lg, 8px);
  padding: 32px; /* inferred from screenshot */
  color: var(--colors-text-primary, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px; /* inferred from screenshot */
  transition: background-color var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}
```

### Inputs & Forms

**Text Input**
Standard text input fields have a dark background, white text, and a subtle gray border, with a distinct white focus ring.

```css
.input-text {
  background-color: var(--colors-background-input, #2d2d2d);
  color: var(--colors-text-primary, #ffffff);
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 16px 12px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-default, rgba(128,128,128,0.7));
  border-radius: var(--radius-md, 4px);
  transition: border-color var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}

.input-text::placeholder {
  color: var(--colors-text-muted, rgba(255,255,255,0.7));
}

.input-text:focus {
  outline: 2px solid var(--colors-focus-ring, rgb(255,255,255));
  outline-offset: 2px;
  border-color: transparent;
}

.input-text:disabled {
  background-color: var(--colors-background-input, #2d2d2d);
  color: var(--colors-disabled-text, rgba(255,255,255,0.4));
  border-color: rgba(128,128,128,0.4); /* inferred from cssVariables */
  cursor: not-allowed;
}
```

**Form Label**
Labels for input fields are rendered in a muted white, providing clarity without competing with the input value.

```css
.form-label {
  color: var(--colors-text-muted, rgba(255,255,255,0.7));
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px; /* inferred from screenshot */
  display: block;
}
```

**Checkbox/Radio**
(none observed in source)

### Navigation

**Top Navigation Bar**
The top navigation bar is a dark, fixed element that houses the Netflix logo, language selector, and sign-in button.

```css
.nav-bar {
  background-color: var(--colors-background-header-footer, #161616);
  color: var(--colors-text-primary, #ffffff);
  padding: 20px 48px; /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--elevation-z-dropdown, 3); /* inferred for fixed header */
}
```

**Navigation Link**
Links within the navigation bar are simple white text, with an underline on hover.

```css
.nav-link {
  color: var(--colors-text-primary, #ffffff);
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* inferred from screenshot */
  transition: text-decoration var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}

.nav-link:hover {
  text-decoration: underline; /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  font-weight: 700; /* inferred from screenshot */
  text-decoration: none;
}
```

**Dropdown Menu**
(none observed in source)

### Links

**Standard Link**
General links within body text are white, with an underline on hover.

```css
.link-standard {
  color: var(--colors-text-primary, #ffffff);
  text-decoration: none;
  font-family: 'Netflix Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  transition: text-decoration var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}

.link-standard:hover {
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--colors-text-primary, #ffffff); /* inferred from screenshot */
}
```

**Secondary Link**
Used for less prominent links, such as those in the footer, rendered in a muted white.

```css
.link-secondary {
  color: var(--colors-text-muted, rgba(255,255,255,0.7));
  text-decoration: none;
  font-family: 'Netflix Sans', sans-serif;
  font-size: 14px; /* inferred from screenshot */
  font-weight: 400;
  transition: text-decoration var(--motion-duration-base, 250ms) var(--motion-easing-standard, cubic-bezier(0.4,0,0.68,0.06));
}

.link-secondary:hover {
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--colors-text-muted, rgba(255,255,255,0.7)); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Netflix utilizes a `4px` base unit for its spacing system, creating a consistent rhythm across the interface.
    -   Base `4px` → Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 48, 96, 128]`
    -   **Usage Context**:
        -   `4px`: Smallest gaps, e.g., between an icon and text.
        -   `8px`: Inner padding within small components, item spacing in lists.
        -   `12px`: Horizontal spacing between elements, minor vertical separation.
        -   `16px`: Standard padding for inputs, horizontal content gaps.
        -   `20px`: Vertical spacing in navigation, larger internal component padding.
        -   `24px`: Vertical separation between distinct content blocks, button padding.
        -   `32px`: Section padding, spacing between major components.
        -   `48px`: Larger section breaks, significant vertical separation.
        -   `96px`: Generous vertical padding for hero sections or full-width content.
        -   `128px`: Maximum vertical padding for hero sections or page separators.

-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   **Max Width**: `1280px` (inferred from screenshot)
    -   **Columns**: `12` (inferred from screenshot)
    -   **Gutter**: `24px` (inferred from screenshot)
    -   **Section Padding**: `48px` vertical, `96px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**: Netflix employs a generous use of dark whitespace, primarily `background` (`#000000`), to create a sense of spaciousness and direct focus to content. Content blocks are typically centered within the available width, with ample padding, allowing visuals to breathe and preventing visual clutter. This approach enhances the cinematic feel by framing content against a minimalist backdrop.

-   **Border Radius Scale**:
    -   **sm**: `2px` — Minimal rounding for subtle elements.
    -   **md**: `4px` — Standard rounding for buttons and input fields.
    -   **lg**: `8px` — More pronounced rounding for content cards and larger containers.
    -   **full**: `50px` — Used for circular elements or pill-shaped components (e.g., language selector dropdown).

## 6. Depth & Elevation
Netflix primarily relies on z-index for layering interactive elements and modals, rather than box-shadows, which are largely absent from the design. This contributes to a flat, modern aesthetic.

-   **Base (z-negative)**: `-1` — Used for background hero imagery or video that sits behind the primary content layer.
-   **Default (z-base)**: `1` — Standard interactive elements that need to be above the base content, like navigation links.
-   **Card (z-card)**: `2` — Content cards and other interactive overlays that appear slightly above the default content.
-   **Dropdown (z-dropdown)**: `3` — Dropdown menus, such as the language selector, ensuring they appear above most page elements.
-   **Button Overlay (z-button-overlay)**: `100` — Specific button overlays or interactive elements that require a higher stacking context within a component.
-   **Modal Backdrop (z-modal-backdrop)**: `1002` — The overlay that darkens the background when a modal is active, ensuring the modal is the primary focus.
-   **Cookie Banner (z-cookie-banner)**: `2147483645` — The cookie consent banner, positioned to be visible above all other page content.
-   **Cookie Overlay (z-cookie-overlay)**: `2147483646` — The overlay for the cookie consent modal, ensuring it is the absolute top-most element.

**Shadow Philosophy**: Netflix's design system embraces a largely flat aesthetic, with no discernible box-shadows used for depth. Instead, elevation is achieved through careful management of z-index values, creating clear layering for interactive components like modals and navigation elements. This approach maintains a clean, modern, and content-focused visual experience.

## 7. Do's and Don'ts

### Do's
-   **Do** use `primary` (`#e50914`) exclusively for primary calls to action, like the "Try 7 Days for EUR 0" button.
-   **Do** maintain a minimum `48px` vertical spacing between major content sections, like "Trending Now" and "More Reasons to Join".
-   **Do** apply `font-weight: 700` only to `display` (`56px`) and `heading-2` (`24px`) typography roles for strong hierarchy.
-   **Do** ensure body text (`Netflix Sans 16px 400`) on `background` (`#000000`) maintains a contrast ratio of 21:1, passing AAA.
-   **Do** use `background-surface` (`#232323`) for all `card` components, ensuring a subtle visual break from the main `background` (`#000000`).
-   **Do** apply `border-radius: 8px` to all `card` components for a consistent, soft visual.
-   **Do** use `text-muted` (`rgba(255,255,255,0.7)`) for `form-label` elements and secondary `link-secondary` text.
-   **Do** implement a `2px` `focus-ring` in `focus-ring` (`rgb(255,255,255)`) for all interactive input fields.
-   **Do** use `transform: scale(1.05)` on hover for `card` elements to provide interactive feedback.
-   **Do** ensure the `nav-bar` remains fixed at `z-index: 3` with `background-header-footer` (`#161616`).

### Don'ts
-   **Don't** use `primary` (`#e50914`) for non-interactive text or decorative elements; it's reserved for actions.
-   **Don't** introduce spacing values outside the `[0, 4, 8, 12, 16, 20, 24, 32, 48, 96, 128]` scale to avoid visual inconsistency.
-   **Don't** use `font-weight: 700` for `body` (`16px`) or `caption` (`14px`) text, as it disrupts typographic hierarchy.
-   **Don't** place `text-muted` (`rgba(255,255,255,0.7)`) text on `background-surface` (`#232323`); its 10.9:1 ratio passes AA but is less legible than `text-primary`.
-   **Don't** use `border-radius: 2px` on `card` components; `8px` is the established standard for content containers.
-   **Don't** use any box-shadows for elevation; rely solely on z-index and background color variations.
-   **Don't** use `link-cookie-banner-hover` (`rgb(24, 131, 253)`) for general link hover states; it's specific to the cookie banner.
-   **Don't** use `disabled-text` (`rgba(255,255,255,0.4)`) on `background-input` (`#2d2d2d`); its 6.8:1 ratio passes AA but is intended for disabled states.
-   **Don't** remove the `transform: scale(1.05)` hover effect from `card` elements, as it's a key interactive cue.
-   **Don't** use any font family other than `Netflix Sans` for primary UI text.

## 8. Responsive Behavior
_Note: breakpoints below are derived from the source's media queries, but their application strategy is inferred. Adjust to the brand's actual media queries when implementing._

-   **Breakpoints**:
    -   **Mobile Small** (~530px): Primary `button-primary` font size reduces to `16px`; hero section padding decreases to `24px` vertical.
    -   **Mobile Large** (~640px): `card` components stack vertically; navigation may collapse into a hamburger menu.
    -   **Tablet** (~896px): `heading-2` font size adjusts to `20px`; `input-text` fields may expand to full width.
    -   **Desktop** (~960px): `nav-bar` elements are fully visible; multi-column layouts for `card` sections activate.
    -   **Desktop Large** (~1280px): `display` font size is `56px`; maximum `1280px` container width is applied.

-   **Touch Targets**:
    -   Minimum interactive element size should be `48px` by `48px` (inferred) for optimal touch interaction.
    -   Maintain a minimum `16px` (inferred) clear space around touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: The top `nav-bar` transitions from horizontal links to a hamburger icon on `max-width: 640px`.
    -   **Cards**: `card` layouts in sections like "Trending Now" switch from a horizontal scroll to a vertical stack on `max-width: 640px`.
    -   **Typography**: `display` and `heading-2` font sizes scale down on `max-width: 640px` to fit smaller viewports.
    -   **Padding**: Horizontal and vertical padding, especially in hero sections, reduces significantly on `max-width: 530px`.
    -   **Forms**: Input fields and `button-primary` components expand to `100%` width on `max-width: 640px`.
    -   **Spacing**: Larger spacing values, such as `48px` and `96px`, are proportionally reduced on mobile breakpoints.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#e50914`
    -   `primary-hover`: `#cc0711`
    -   `background`: `#000000`
    -   `background-surface`: `#232323`
    -   `background-input`: `#2d2d2d`
    -   `background-header-footer`: `#161616`
    -   `text-primary`: `#ffffff`
    -   `text-muted`: `rgba(255,255,255,0.7)`
    -   `border-default`: `rgba(128,128,128,0.7)`
    -   `border-light`: `#414141`
    -   `focus-ring`: `rgb(255,255,255)`
    -   `disabled-text`: `rgba(255,255,255,0.4)`
    -   `disabled-bg`: `rgba(229, 9, 20, 0.5)`

-   **Iteration Guide**:
    1.  Always use `primary` (`#e50914`) for `button-primary` backgrounds and `text-primary` (`#ffffff`) for its text.
    2.  Ensure `display` text is `Netflix Sans 56px 700` and `body` text is `Netflix Sans 16px 400`.
    3.  Apply spacing from the `[4, 8, 12, 16, 20, 24, 32, 48, 96, 128]` scale.
    4.  All `card` components must have `border-radius: 8px` and `background-surface` (`#232323`).
    5.  `button-primary` components should have `padding: 8px 16px` and `border-radius: 4px`.
    6.  `input-text` fields require `padding: 16px 12px`, `border-radius: 4px`, and `border-default` (`rgba(128,128,128,0.7)`).
    7.  Implement `focus-ring` (`rgb(255,255,255)`) with `2px` width and `2px` offset for all interactive inputs.
    8.  `nav-bar` elements should be fixed with `background-header-footer` (`#161616`) and `z-index: 3`.
    9.  `card` elements must include a `transform: scale(1.05)` hover effect with `250ms` `cubic-bezier(0.32,0.94,0.6,1)` easing.
    10. Ensure text on dark backgrounds always uses `text-primary` (`#ffffff`) for high contrast.
    11. On mobile (`max-width: 640px`), `button-primary` font size reduces to `16px` and `card` layouts stack vertically.
    12. Do not use any box-shadows for elevation; manage layering purely with z-index values.
