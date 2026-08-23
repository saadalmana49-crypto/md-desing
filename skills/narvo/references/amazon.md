---
name: 'Amazon'
slug: amazon
url: https://www.amazon.com
category: 'Commerce'
mode: light
fonts:
  - 'Arial'
preview:
  bg: '#ffffff'
  fg: '#333333'
  accent: '#f0c14b'
summary: >-
  The retail workhorse: Arial throughout, squircle gold CTAs, dense information over ornament.
colors:
  primary: '#f0c14b'
  primary-hover: '#e47911'
  background: '#ffffff'
  background-offset: '#f6f6f6'
  text-primary: '#333333'
  text-secondary: '#4d4d4d'
  text-link: '#0066c0'
  text-link-hover: '#e47911'
  text-dark: '#111111'
  border-subtle: '#dddddd'
  border-info: '#bbd3de'
  focus-ring: '#e47911'
  button-active-bg: '#dce0e3'
typography:
  display:
    family: 'Arial'
    size: 17px
    weight: 400
    line-height: 1.5
  body:
    family: 'Arial'
    size: 13px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Arial'
    size: 11px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [12, 20, 24, 40, 64]
radius:
  sm: 3px
  md: 4px
elevation:
  button-inset: 'rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset'
  button-active-inset: 'rgba(0, 0, 0, 0.2) 0px 1px 3px inset'
  focus-ring-shadow: 'rgba(228, 121, 17, 0.5) 0px 0px 3px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-dark}'
    radius: '{radius.sm}'
    padding: '0px 10px 0px 11px'
    border: '1px solid {colors.text-dark}'
    shadow: '{elevation.button-inset}'
motion:
  duration-fast: '100ms'
  duration-base: '0.5s'
  easing-linear: 'linear'
  easing-standard: 'cubic-bezier(0.25, 1, 0.5, 1)'
layout:
  breakpoints:
    - minWidth: null
      maxWidth: 767
    - minWidth: 768
      maxWidth: 979
---

# Design System Inspired by Amazon

## 1. Visual Theme & Atmosphere
Amazon's design system prioritizes clarity, functionality, and a no-frills approach to user interaction. The visual theme is dominated by a clean white background (`#ffffff`) and a subtle light grey for secondary sections (`#f6f6f6`), providing a neutral canvas for content. Key interactive elements, such as the "Continue shopping" button, feature a distinctive yellow-orange hue (`#f0c14b`) that serves as the brand's primary accent. Typography is consistently set in `Arial` at various sizes, with `#333333` for primary text and `#0066c0` for links, ensuring high legibility and clear information hierarchy.

The overall atmosphere is one of efficiency and directness, with minimal decorative elements. Subtle `3px` and `4px` border radii soften interactive components like buttons and informational boxes, while focus states are clearly indicated by an orange shadow (`rgba(228, 121, 17, 0.5) 0px 0px 3px`). Interactive elements respond with fast `100ms linear` transitions, providing immediate feedback without distracting animations. The design emphasizes content accessibility and a straightforward user journey, avoiding visual complexity in favor of clear pathways.

**Key Characteristics**
*   **Primary Accent**: `#f0c14b` for key calls-to-action.
*   **Neutral Palette**: `#ffffff` and `#f6f6f6` for backgrounds.
*   **Typography**: `Arial` at `13px` for body text.
*   **Border Radius**: Subtle `3px` and `4px` on interactive elements.
*   **Focus State**: Prominent `rgba(228, 121, 17, 0.5) 0px 0px 3px` shadow.
*   **Motion**: Fast `100ms linear` transitions for interactive feedback.
*   **Information-focused**: Minimal decorative graphics, clear text hierarchy.

## 2. Color Palette & Roles

-   **Primary**
    -   `primary: #f0c14b` — The signature Amazon yellow-orange, used for primary action buttons and key highlights.
    -   `primary-hover: #e47911` — A darker orange used for hover states on primary buttons and links, providing clear interactive feedback.

-   **Accent Colors**
    -   `text-link: #0066c0` — The standard blue for all interactive text links.
    -   `text-link-hover: #e47911` — The hover state color for text links, matching the primary-hover for consistency.

-   **Interactive**
    -   `focus-ring: #e47911` — The color used for the focus ring shadow around interactive elements, ensuring accessibility.
    -   `button-active-bg: #dce0e3` — A light grey-blue background for the active (pressed) state of buttons.
    -   `button-active-shadow-inset: rgba(0, 0, 0, 0.2) 0px 1px 3px inset` — An inner shadow applied to buttons when in an active (pressed) state.

-   **Neutral Scale**
    -   `background: #ffffff` — The main canvas color for page backgrounds and primary content areas.
    -   `background-offset: #f6f6f6` — A subtle light grey used for secondary background sections or subtle content distinctions.
    -   `text-primary: #333333` — The default color for most body text and headings, offering high contrast on light backgrounds.
    -   `text-secondary: #4d4d4d` — A slightly lighter grey for secondary or less prominent text, such as captions or descriptions.
    -   `text-dark: #111111` — A very dark grey, almost black, used for strong emphasis text and primary button labels.

-   **Surface & Borders**
    -   `border-subtle: #dddddd` — A light grey used for general borders, separators, and outlines on non-interactive elements.
    -   `border-info: #bbd3de` — A light blue-grey used for borders around informational alert boxes.
    -   `button-inset: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset` — A subtle white inner shadow applied to primary buttons for a slight highlight effect.

## 3. Typography Rules

-   **Font Family**: `Arial, sans-serif` is the primary typeface for all content, prioritizing clarity and widespread availability. `Times New Roman, serif` is a less common fallback, and `monospace, monospace` is reserved for code snippets.

-   **Hierarchy**:
    -   **Display/H1**: `Arial` `17px` `400` · line-height `1.5` · tracking `none` · Used for prominent informational text, such as alert messages.
    -   **Body**: `Arial` `13px` `400` · line-height `1.5` · tracking `none` · The standard size for most paragraph text and general content.
    -   **Caption**: `Arial` `11px` `400` · line-height `1.5` · tracking `none` · Used for fine print, legal text, and supporting information.
    -   **Link**: `Arial` `13px` `400` · line-height `1.5` · tracking `none` · Interactive text elements, typically in `{colors.text-link}`.

-   **Principles**
    -   Prioritize legibility and accessibility by consistently using the `Arial` sans-serif typeface across all content.
    -   Maintain a clear visual hierarchy primarily through font size variations (17px, 13px, 11px), with a consistent `400` weight.
    -   Employ a unitless line-height of `1.5` for all text roles to ensure comfortable reading and sufficient vertical spacing.
    -   Utilize distinct color roles, such as `{colors.text-primary}` (`#333333`) for main content and `{colors.text-link}` (`#0066c0`) for interactive elements, to guide user attention.
    -   Avoid decorative or overly stylized typography, adhering to a functional and straightforward presentation.

## 4. Component Stylings

### Buttons

Amazon buttons are functional and clearly indicate interactivity through color and subtle state changes. All buttons feature a fast `100ms linear` transition for smooth feedback.

**Primary Button**
A prominent call-to-action button with the brand's signature yellow-orange. It features a subtle inner highlight and changes background color on hover and active states.

```css
.a-button-primary {
  background-color: var(--color-primary, #f0c14b);
  color: var(--color-text-dark, #111111);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  padding: 0px 10px 0px 11px;
  border: 1px solid var(--color-text-dark, #111111);
  border-radius: var(--radius-sm, 3px);
  box-shadow: var(--elevation-button-inset, rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-button-primary:hover {
  background-color: var(--color-primary-hover, #e47911); /* inferred from screenshot */
  border-color: var(--color-primary-hover, #e47911); /* inferred from screenshot */
}

.a-button-primary:active {
  background-color: var(--color-button-active-bg, #dce0e3);
  box-shadow: var(--elevation-button-active-inset, rgba(0, 0, 0, 0.2) 0px 1px 3px inset);
  border-color: var(--color-button-active-bg, #dce0e3); /* inferred from screenshot */
}

.a-button-primary:disabled {
  opacity: 0.5; /* inferred from screenshot */
  cursor: not-allowed; /* inferred from screenshot */
}
```

**Secondary Button**
A more subdued button for less critical actions, typically using a light background and subtle border.

```css
.a-button-secondary {
  background-color: var(--color-background-offset, #f6f6f6); /* inferred from screenshot */
  color: var(--color-text-primary, #333333); /* inferred from screenshot */
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  padding: 0px 10px 0px 11px; /* inferred from primary button */
  border: 1px solid var(--color-border-subtle, #dddddd); /* inferred from screenshot */
  border-radius: var(--radius-sm, 3px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-button-secondary:hover {
  background-color: var(--color-background, #ffffff); /* inferred from screenshot */
  border-color: var(--color-primary-hover, #e47911); /* inferred from screenshot */
}

.a-button-secondary:active {
  background-color: var(--color-button-active-bg, #dce0e3); /* inferred from screenshot */
  box-shadow: var(--elevation-button-active-inset, rgba(0, 0, 0, 0.2) 0px 1px 3px inset); /* inferred from screenshot */
  border-color: var(--color-button-active-bg, #dce0e3); /* inferred from screenshot */
}

.a-button-secondary:disabled {
  opacity: 0.5; /* inferred from screenshot */
  cursor: not-allowed; /* inferred from screenshot */
}
```

**Ghost Button**
A text-only button used for less prominent actions, often within content.

```css
.a-button-ghost {
  background-color: transparent;
  color: var(--color-text-link, #0066c0); /* inferred from screenshot */
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  padding: 0;
  border: none;
  border-radius: var(--radius-sm, 3px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-button-ghost:hover {
  color: var(--color-text-link-hover, #e47911);
  text-decoration: underline; /* inferred from screenshot */
}

.a-button-ghost:active {
  color: var(--color-text-link-hover, #e47911); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.a-button-ghost:disabled {
  opacity: 0.5; /* inferred from screenshot */
  cursor: not-allowed; /* inferred from screenshot */
}
```

### Cards & Containers

**Standard Card**
A basic container for content, featuring a white background and a subtle border. Hover states are minimal, maintaining a clean aesthetic.

```css
.a-card {
  background-color: var(--color-background, #ffffff);
  border: 1px solid var(--color-border-subtle, #dddddd); /* inferred from screenshot */
  border-radius: var(--radius-md, 4px);
  padding: var(--spacing-20, 20px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-fast, 100ms) var(--motion-easing-standard, cubic-bezier(0.25, 1, 0.5, 1));
}

.a-card:hover {
  box-shadow: 0 0 5px rgba(0,0,0,0.1); /* inferred from screenshot */
}
```

**Alert Info Box**
A container for important informational messages, distinguished by a light blue border.

```css
.a-alert-info {
  background-color: var(--color-background, #ffffff);
  border: 1px solid var(--color-border-info, #bbd3de);
  border-radius: var(--radius-md, 4px);
  padding: var(--spacing-20, 20px); /* inferred from screenshot */
  color: var(--color-text-primary, #333333);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  line-height: var(--typography-body-line-height, 1.5);
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}
```

### Inputs & Forms

**Text Input**
Standard text input fields with a clear border and a distinct focus ring for accessibility.

```css
.a-input-text {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #333333);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 10px; /* inferred from screenshot */
  border: 1px solid var(--color-border-subtle, #dddddd); /* inferred from screenshot */
  border-radius: var(--radius-sm, 3px);
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              box-shadow var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-input-text:focus {
  outline: 0;
  border-color: var(--color-focus-ring, #e47911); /* inferred from screenshot */
  box-shadow: var(--elevation-focus-ring-shadow, rgba(228, 121, 17, 0.5) 0px 0px 3px);
}

.a-input-text:disabled {
  background-color: var(--color-background-offset, #f6f6f6); /* inferred from screenshot */
  color: var(--color-text-secondary, #4d4d4d); /* inferred from screenshot */
  cursor: not-allowed; /* inferred from screenshot */
  border-color: var(--color-border-subtle, #dddddd);
}
```

**Form Label**
Labels for form fields, providing clear and concise descriptions.

```css
.a-form-label {
  color: var(--color-text-primary, #333333);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: 700; /* inferred from screenshot */
  line-height: var(--typography-body-line-height, 1.5);
  display: block;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}
```

### Navigation

**Navigation Link**
Links used within navigation menus or footers, typically blue and underlined on hover.

```css
.a-nav-link {
  color: var(--color-text-link, #0066c0);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              text-decoration-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-nav-link:hover {
  color: var(--color-text-link-hover, #e47911);
  text-decoration: underline; /* inferred from screenshot */
}

.a-nav-link.active,
.a-nav-link[aria-current="page"] {
  color: var(--color-text-link-hover, #e47911); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
  font-weight: 700; /* inferred from screenshot */
}
```

### Links

**Standard Link**
General text links within content, clearly distinguishable by color and hover state.

```css
.a-link {
  color: var(--color-text-link, #0066c0);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-body-size, 13px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              text-decoration-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-link:hover {
  color: var(--color-text-link-hover, #e47911);
  text-decoration: underline; /* inferred from screenshot */
}

.a-link:visited {
  color: var(--color-text-link, #0066c0); /* from pseudoStates */
}
```

**Secondary Link**
Smaller links, often found in footers or supplementary content.

```css
.a-link-secondary {
  color: var(--color-text-link, #0066c0);
  font-family: var(--typography-body-family, Arial);
  font-size: var(--typography-caption-size, 11px); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear),
              text-decoration-color var(--motion-duration-fast, 100ms) var(--motion-easing-linear, linear);
}

.a-link-secondary:hover {
  color: var(--color-text-link-hover, #e47911);
  text-decoration: underline; /* inferred from screenshot */
}

.a-link-secondary:visited {
  color: var(--color-text-link, #0066c0); /* from pseudoStates */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: The spacing system is built around a base unit of `4px` (inferred), with key values used for consistent layout and rhythm.
    -   `12px`: Used for internal padding within smaller components like buttons or tight vertical spacing between text elements.
    -   `20px`: Employed for standard internal padding within cards and informational boxes.
    -   `24px`: Applied for horizontal and vertical spacing between major content blocks or sections.
    -   `40px`: Utilized for larger vertical separation between distinct page sections or major components.
    -   `64px`: Reserved for significant margins or padding, often for hero sections or full-width content areas.

-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._: The main content area typically adheres to a `1200px` maximum width (inferred), centered on the page. A `12-column` grid (inferred) with a `24px` gutter (inferred) provides flexibility for content arrangement. Sections often feature `40px` (inferred) of padding on desktop.

-   **Whitespace Philosophy**: Amazon's design employs ample whitespace to create clear separation between content blocks and interactive elements. This approach reduces visual clutter, making information easier to scan and interact with. The focus is on functional spacing rather than decorative, ensuring that every element has room to breathe and maintain its individual prominence.

-   **Border Radius Scale**:
    -   `sm: 3px` — Applied to smaller interactive elements like buttons and text input fields for a subtle softening.
    -   `md: 4px` — Used for larger containers such as cards and alert boxes, providing a consistent, slightly rounded aesthetic.

## 6. Depth & Elevation

Amazon's use of depth and elevation is minimal, primarily focusing on functional cues rather than decorative shadows.

-   **Flat (z-0)**: `none` — This represents the default z-index for most page content and backgrounds, appearing flush with the surface.
-   **Button Inset (z-1)**: `rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset` — A subtle inner highlight applied to primary buttons, giving them a slightly raised appearance.
-   **Focus Ring (z-2)**: `0 0 0 3px rgba(228, 121, 17, 0.5)` (inferred) — A prominent orange outer shadow used to clearly indicate the focused state of interactive elements for accessibility.
-   **Button Active (z-3)**: `rgba(0, 0, 0, 0.2) 0px 1px 3px inset` — An inner shadow that visually depresses a button, providing tactile feedback when clicked or activated.

**Shadow Philosophy**: Amazon primarily uses subtle inset shadows to provide functional feedback for interactive states, such as button presses or highlights. There is a clear, distinct focus ring for accessibility. The design avoids complex drop shadows, maintaining a flat and efficient visual hierarchy.

## 7. Do's and Don'ts

### Do's
-   Use `#f0c14b` for Primary Buttons to ensure high visibility and brand recognition.
-   Apply `Arial` font at `13px` with `400` weight for all body text content.
-   Ensure interactive links use `#0066c0` and change to `#e47911` on hover.
-   Maintain a `3px` border-radius for buttons and inputs for a subtle softening effect.
-   Use `12px` vertical spacing for elements within a form or compact content block.
-   Ensure text on `#ffffff` backgrounds uses `#333333` for AAA contrast (12.63:1).
-   Apply `0 0 0 3px rgba(228, 121, 17, 0.5)` for all interactive element focus rings.
-   Utilize `100ms linear` transitions for interactive state changes on links and inputs.
-   Ensure `#111111` text on `#f0c14b` buttons maintains AAA contrast (11.18:1).
-   Use `#4d4d4d` text on `#f6f6f6` backgrounds for AAA contrast (7.82:1) in secondary contexts.

### Don'ts
-   Avoid using `#e47911` as a primary text color on `#ffffff` backgrounds.
-   Do not deviate from the `Arial` font family for any primary page content.
-   Do not use border-radius values larger than `4px` for cards or containers.
-   Avoid introducing custom spacing values outside the `[12, 20, 24, 40, 64]` scale.
-   Do not use drop shadows for standard cards; prefer subtle borders like `1px solid #dddddd`.
-   Never use `#0066c0` for body text on `#f6f6f6` backgrounds; stick to `#333333` for readability.
-   Do not remove the `rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset` shadow from primary buttons.
-   Avoid using `Times New Roman` for any primary content, reserving it for specific legacy contexts if at all.
-   Do not use `#0066c0` for text on `#ffffff` where AAA contrast is required, as it only achieves AA (5.74:1).
-   Avoid applying any background color other than `transparent` to Ghost Buttons.

## 8. Responsive Behavior

_Note: breakpoints below are measured from the source. Adjust to the brand's actual media queries when implementing._

-   **Measured Breakpoints**:
    -   **Mobile Large** (~767px): Content typically stacks vertically; full-width buttons and inputs become common.
    -   **Tablet** (~979px): Layouts shift to fewer columns, and navigation elements may begin to consolidate.

-   **Touch Targets**:
    -   Maintain a minimum touch target size of `44px` (inferred) for all interactive elements to ensure usability on touch devices.
    -   Ensure a minimum of `12px` (inferred) spacing between adjacent touch targets to prevent accidental activations.

-   **Collapsing Strategy**:
    -   **Navigation**: Top navigation elements (if present) should collapse into a hamburger menu icon on smaller screens.
    -   **Cards**: Multiple column card layouts should stack vertically on mobile breakpoints.
    -   **Typography**: Font sizes, particularly for display text, should scale down for optimal readability on smaller viewports.
    -   **Padding**: Reduce horizontal padding on page sections and components on mobile to maximize content area.
    -   **Forms**: Input fields and form controls should expand to full width within their containers on mobile.
    -   **Spacing**: Larger vertical spacing values, such as `40px` or `64px`, may be condensed to `24px` or `20px` on mobile for a more compact layout.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#f0c14b`
    -   `primary-hover`: `#e47911`
    -   `background`: `#ffffff`
    -   `background-offset`: `#f6f6f6`
    -   `text-primary`: `#333333`
    -   `text-secondary`: `#4d4d4d`
    -   `text-link`: `#0066c0`
    -   `text-link-hover`: `#e47911`
    -   `text-dark`: `#111111`
    -   `border-subtle`: `#dddddd`
    -   `border-info`: `#bbd3de`
    -   `focus-ring`: `#e47911`
    -   `button-active-bg`: `#dce0e3`

-   **Iteration Guide**
    1.  Always use `{colors.primary}` (`#f0c14b`) for primary call-to-action buttons.
    2.  Always set body text in `Arial` at `13px` with `400` weight and `1.5` line-height.
    3.  Always use the extracted spacing scale `[12, 20, 24, 40, 64]` for consistent element separation.
    4.  Always apply `{radius.sm}` (`3px`) to buttons and input fields, and `{radius.md}` (`4px`) to cards.
    5.  Always style standard cards with a `{colors.background}` (`#ffffff`) background and a `1px solid {colors.border-subtle}` (`#dddddd`) border.
    6.  Always ensure primary buttons have a `0px 10px 0px 11px` padding.
    7.  Always apply a `box-shadow: {elevation.focus-ring-shadow}` (`rgba(228, 121, 17, 0.5) 0px 0px 3px`) for input and button focus states.
    8.  Always transition link and button hover/active states with `100ms linear`.
    9.  Always use `rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset` for primary button inner shadows.
    10. Always stack content vertically on screens up to `767px` wide.
    11. Always ensure `#333333` text on `#ffffff` background passes AAA contrast (12.63:1).
    12. Always use `{colors.text-link}` (`#0066c0`) for links, changing to `{colors.text-link-hover}` (`#e47911`) on hover.
