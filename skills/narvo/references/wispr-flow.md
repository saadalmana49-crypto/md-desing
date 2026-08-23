---
name: 'Wispr Flow'
slug: wispr-flow
url: https://wisprflow.ai
category: 'AI'
mode: light
fonts:
  - 'Figtree'
  - 'EB Garamond'
preview:
  bg: '#ffffeb'
  fg: '#1a1a1a'
  accent: '#034f46'
summary: >-
  Cream #ffffeb canvas, deep-teal accent, and a Garamond serif pairing. Warm rather than techy.
colors:
  primary-purple: '#f0d7ff'
  primary-cream: '#ffffeb'
  primary-dark-teal: '#034f46'
  background-light: '#ffffeb'
  background-dark: '#1a1a1a'
  text-primary: '#1a1a1a'
  text-inverse: '#ffffeb'
  text-muted: '#8a8a80'
  text-secondary-light: '#222222'
  border-primary: '#1a1a1a4d'
  border-dark: '#222222'
  border-light: '#e4e4d0'
  focus-ring-light: 'rgb(217, 217, 217)'
  focus-ring-dark: 'rgb(26, 26, 26)'
  disabled-bg: 'rgb(238, 238, 238)'
typography:
  display:
    family: 'Eb garamond'
    size: 64px
    weight: 400
    line-height: 1.2
  heading1:
    family: 'Eb garamond'
    size: 32px
    weight: 400
    line-height: 1.2
  heading2:
    family: 'Eb garamond'
    size: 24px
    weight: 400
    line-height: 1.2
  heading3:
    family: 'Eb garamond'
    size: 20px
    weight: 400
    line-height: 1.2
  body:
    family: 'Figtree'
    size: 16px
    weight: 400
    line-height: 1.5
  body-medium:
    family: 'Figtree'
    size: 16px
    weight: 500
    line-height: 1.5
  body-small:
    family: 'Figtree'
    size: 15px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Figtree'
    size: 14px
    weight: 400
    line-height: 1.5
  button:
    family: 'Figtree'
    size: 16px
    weight: 600
    line-height: 1.5
spacing:
  base: 8px
  scale: [8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]
radius:
  sm: 8px
  md: 14px
  lg: 16px
  xl: 40px
  full: 992px
elevation:
  z-background: -1
  z-overlay: 1
  z-dropdown: 2
  z-interactive: 3
  z-hero-animation: 10
  z-hero-link: 11
  z-icon: 111
components:
  button-primary:
    bg: '{colors.primary-purple}'
    text: '{colors.text-primary}'
    border: '{colors.text-primary}'
    radius: '{radius.sm}'
    padding: '16px 24px'
  button-secondary:
    bg: '{colors.primary-cream}'
    text: '{colors.text-primary}'
    border: '{colors.text-primary}'
    radius: '{radius.sm}'
    padding: '16px 24px'
  button-outline:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '{colors.text-primary}'
    radius: '{radius.sm}'
    padding: '16px 24px'
  card-light:
    bg: '{colors.background-light}'
    text: '{colors.text-primary}'
    border: '{colors.border-primary}'
    radius: '{radius.md}'
  card-dark:
    bg: '{colors.background-dark}'
    text: '{colors.text-inverse}'
    border: '{colors.border-primary}'
    radius: '{radius.md}'
motion:
  duration-fast: '0.1s'
  duration-base: '0.2s'
  duration-medium: '0.3s'
  easing-standard: 'ease-out'
  easing-transform: 'cubic-bezier(0.25, 1, 0.5, 1)' # (inferred for subtle scale transforms)
---

# Design System Inspired by Wispr Flow

## 1. Visual Theme & Atmosphere
Wispr Flow presents a modern and inviting aesthetic, characterized by a harmonious blend of soft, natural hues and a sophisticated typographic pairing. The primary background color is a warm `#ffffeb` cream, complemented by a gentle `#f0d7ff` lavender and a deep `#1a1a1a` charcoal for contrast. This palette is punctuated by an occasional dark teal, `#034f46`, providing a subtle accent. The visual experience is further enriched by GSAP-driven transitions, Lottie animations for playful illustrations (e.g., app icons), and SVG animations that introduce dynamic elements and a sense of fluidity.

The brand's signature visual element is the use of organic, flowing curves that define section boundaries and background elements, often rendered in `#f0d7ff` or `#034f46`. These curves, combined with elegant serif headlines set in `Eb Garamond` (e.g., 64px, 400 weight) and approachable sans-serif body text in `Figtree` (16px, 400 weight), create a professional yet friendly atmosphere. Ample spacing, with a base unit of 8px, ensures clarity and a premium feel, while rounded corners (e.g., 8px radius for buttons) soften the overall presentation.

**Key Characteristics**
-   Soft, natural color palette: `#ffffeb`, `#f0d7ff`, `#1a1a1a`.
-   Elegant `Eb Garamond` display paired with `Figtree` body text.
-   Dynamic Lottie illustrations and GSAP-driven animations.
-   Organic, flowing curved section dividers and background shapes.
-   Ample whitespace with a consistent 8px spacing scale.
-   Rounded corners (e.g., 8px, 14px radii) on interactive elements and containers.
-   Strong visual hierarchy through typography and color contrast.

## 2. Color Palette & Roles
The Wispr Flow color palette balances warmth and professionalism, using a limited set of hues to establish a clear visual identity.

-   **primary-purple** (`#f0d7ff`) — A soft lavender used for primary call-to-action buttons, accent backgrounds, and key interactive elements.
-   **primary-cream** (`#ffffeb`) — The dominant background color for most content sections, providing a warm and inviting canvas. Also used for secondary button backgrounds.
-   **primary-dark-teal** (`#034f46`) — A deep teal used sparingly as an accent for specific sections or graphic elements, offering a strong contrast.
-   **background-light** (`#ffffeb`) — The main page background color, identical to `primary-cream`.
-   **background-dark** (`#1a1a1a`) — A deep charcoal used for dark content sections and cards, providing a strong visual break and contrast.
-   **text-primary** (`#1a1a1a`) — The primary text color, a rich charcoal, used for most body text and headings on light backgrounds.
-   **text-inverse** (`#ffffeb`) — Used for text elements placed on dark backgrounds, such as `background-dark` sections.
-   **text-muted** (`#8a8a80`) — A subtle grayish-olive, used for secondary information, captions, or less prominent text.
-   **text-secondary-light** (`#222222`) — A slightly lighter charcoal used for some text elements, particularly in navigation.
-   **border-primary** (`#1a1a1a4d`) — A semi-transparent charcoal used for subtle borders on cards and interactive elements, providing definition without harshness.
-   **border-dark** (`#222222`) — A dark charcoal used for button borders and outlines on light backgrounds.
-   **border-light** (`#e4e4d0`) — A very light, muted cream used for subtle dividers or outlines, often on `primary-cream` backgrounds.
-   **focus-ring-light** (`rgb(217, 217, 217)`) — A light gray used for the focus ring on inputs on light backgrounds.
-   **focus-ring-dark** (`rgb(26, 26, 26)`) — A dark charcoal used for the focus ring on inputs, particularly on dark backgrounds.
-   **disabled-bg** (`rgb(238, 238, 238)`) — A light gray background color for disabled input fields.

## 3. Typography Rules
-   **Font Family**: Primary display font is `Eb Garamond`, with `Arial, sans-serif` as a fallback. The primary body font is `Figtree`, with `sans-serif` as a fallback. For code or monospaced text, `monospace` should be used.
-   **Hierarchy**:
    -   **Display**: `Eb Garamond` `64px` `400` · line-height `1.2` · tracking `none` · Used for hero headlines and impactful statements.
    -   **H1**: `Eb Garamond` `32px` `400` · line-height `1.2` · tracking `none` · Used for major section titles.
    -   **H2**: `Eb Garamond` `24px` `400` · line-height `1.2` · tracking `none` · Used for sub-section titles and prominent headings.
    -   **H3**: `Eb Garamond` `20px` `400` · line-height `1.2` · tracking `none` · Used for smaller headings and feature titles.
    -   **Body**: `Figtree` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and general content.
    -   **Body Medium**: `Figtree` `16px` `500` · line-height `1.5` · tracking `none` · Used for emphasized body text or list items.
    -   **Body Small**: `Figtree` `15px` `400` · line-height `1.5` · tracking `none` · Used for less prominent body text or detailed descriptions.
    -   **Caption**: `Figtree` `14px` `400` · line-height `1.5` · tracking `none` · Used for small labels, legal text, or meta-information.
    -   **Button**: `Figtree` `16px` `600` · line-height `1.5` · tracking `none` · Used for all interactive button labels.
-   **Principles**
    -   Pair the elegant `Eb Garamond` serif for display and headings with the modern `Figtree` sans-serif for body text to create a balanced aesthetic.
    -   Maintain a clear visual hierarchy using distinct font sizes and weights from the defined scale, ensuring readability and scannability.
    -   Utilize `Figtree` at 16px/400 weight for all primary body content on `#ffffeb` backgrounds, ensuring a high contrast ratio of 17.2:1 (AAA).
    -   Employ `Eb Garamond` for headings to convey sophistication and brand identity, reserving `Figtree` for functional and informational text.
    -   Ensure consistent line-heights of 1.2 for headings and 1.5 for body text for optimal readability across all typographic elements.

## 4. Component Stylings

### Buttons

Wispr Flow buttons feature rounded corners and clear text labels, with distinct styles for primary, secondary, and ghost actions. Interaction states include a subtle `scale(0.98)` transform on hover and a background change for visual feedback.

#### Primary Button
Used for key calls-to-action like "Download for macOS". It has a soft purple background and dark charcoal text.

```css
.button-primary {
  background-color: var(--colors-primary-purple, #f0d7ff);
  color: var(--colors-text-primary, #1a1a1a);
  font-family: var(--typography-button-family, 'Figtree');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 16px 24px;
  border: 1px solid var(--colors-text-primary, #1a1a1a);
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: transform var(--motion-duration-base, 0.2s) var(--motion-easing-transform, cubic-bezier(0.25, 1, 0.5, 1)),
              background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out);
}

.button-primary:hover {
  transform: scale(0.98);
  background-color: var(--colors-primary-purple, #f0d7ff); /* No explicit hover color change, transform is primary feedback */
}

.button-primary:active {
  transform: scale(0.96); /* inferred from screenshot */
  background-color: var(--colors-primary-purple, #f0d7ff); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--colors-disabled-bg, rgb(238, 238, 238));
  color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  border-color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  cursor: not-allowed;
  transform: none;
}
```


<details>
<summary>Secondary Button</summary>

Used for supporting actions like "Try Flow" or "Watch in action". It features a cream background with dark charcoal text.

```css
.button-secondary {
  background-color: var(--colors-primary-cream, #ffffeb);
  color: var(--colors-text-primary, #1a1a1a);
  font-family: var(--typography-button-family, 'Figtree');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 16px 24px;
  border: 1px solid var(--colors-text-primary, #1a1a1a);
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: transform var(--motion-duration-base, 0.2s) var(--motion-easing-transform, cubic-bezier(0.25, 1, 0.5, 1)),
              background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out);
}

.button-secondary:hover {
  transform: scale(0.98);
  background-color: var(--colors-primary-cream, #ffffeb); /* No explicit hover color change, transform is primary feedback */
}

.button-secondary:active {
  transform: scale(0.96); /* inferred from screenshot */
  background-color: var(--colors-primary-cream, #ffffeb); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--colors-disabled-bg, rgb(238, 238, 238));
  color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  border-color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  cursor: not-allowed;
  transform: none;
}
```

</details>

<details>
<summary>Ghost Button</summary>

Used for navigation links or subtle actions that should appear as plain text until hovered, such as "Product" or "Individuals" in the main navigation.

```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-secondary-light, #222222);
  font-family: var(--typography-button-family, 'Figtree');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 12px 14px; /* Matches extracted nav button padding */
  border: none;
  border-radius: var(--radius-sm, 8px); /* Inferred, not explicitly rounded in nav */
  cursor: pointer;
  transition: color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-out);
}

.button-ghost:hover {
  color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  cursor: not-allowed;
}
```

</details>
### Cards & Containers

Wispr Flow utilizes both light and dark cards, characterized by rounded corners and a subtle border. They serve as content containers for testimonials, features, and interactive elements.

#### Standard Card (Light)
Used for content sections on dark backgrounds, such as the "Still not sure?" section. It has a cream background and a subtle dark border.

```css
.card-light {
  background-color: var(--colors-background-light, #ffffeb);
  color: var(--colors-text-primary, #1a1a1a);
  padding: var(--spacing-40, 40px); /* inferred from screenshot */
  border: 1px solid var(--colors-border-primary, #1a1a1a4d);
  border-radius: var(--radius-md, 14px);
  transition: border-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-out);
}

.card-light:hover {
  border-color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
}
```


<details>
<summary>Standard Card (Dark)</summary>

Used for content blocks on light backgrounds, such as the "Personal dictionary" and "Snippet library" sections. It has a dark charcoal background and a subtle transparent border.

```css
.card-dark {
  background-color: var(--colors-background-dark, #1a1a1a);
  color: var(--colors-text-inverse, #ffffeb);
  padding: var(--spacing-40, 40px); /* inferred from screenshot */
  border: 1px solid var(--colors-border-primary, #1a1a1a4d);
  border-radius: var(--radius-md, 14px);
  transition: border-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-out);
}

.card-dark:hover {
  border-color: var(--colors-text-inverse, #ffffeb); /* inferred from screenshot */
}
```

</details>
### Inputs & Forms

Wispr Flow inputs maintain a clean, minimal appearance with clear focus states.

#### Text Input
Standard text input fields, typically with a light background and dark text.

```css
.input-text {
  background-color: var(--colors-background-light, #ffffeb);
  color: var(--colors-text-primary, #1a1a1a);
  font-family: var(--typography-body-family, 'Figtree');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-border-primary, #1a1a1a4d);
  border-radius: var(--radius-sm, 8px);
  transition: border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out),
              outline-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out);
}

.input-text:focus {
  outline: 3px solid var(--colors-focus-ring-light, rgb(217, 217, 217));
  outline-offset: 0px;
  border-color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--colors-disabled-bg, rgb(238, 238, 238));
  color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  border-color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  cursor: not-allowed;
}
```


<details>
<summary>Form Label</summary>

Labels for form fields, using the primary text color.

```css
.form-label {
  color: var(--colors-text-primary, #1a1a1a);
  font-family: var(--typography-body-family, 'Figtree');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
}
```

</details>

<details>
<summary>Checkbox/Radio</summary>

Custom styled checkboxes or radio buttons (not explicitly visible, but inferred from typical form components).

```css
.checkbox-custom,
.radio-custom {
  appearance: none;
  width: 20px; /* inferred from screenshot */
  height: 20px; /* inferred from screenshot */
  border: 2px solid var(--colors-text-primary, #1a1a1a);
  border-radius: var(--radius-sm, 8px); /* For checkbox */
  vertical-align: middle;
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out),
              border-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out);
}

.radio-custom {
  border-radius: 50%; /* For radio */
}

.checkbox-custom:checked,
.radio-custom:checked {
  background-color: var(--colors-text-primary, #1a1a1a);
  border-color: var(--colors-text-primary, #1a1a1a);
}

.checkbox-custom:focus,
.radio-custom:focus {
  outline: 2px solid var(--colors-focus-ring-light, rgb(217, 217, 217)); /* inferred from screenshot */
  outline-offset: 2px;
}

.checkbox-custom:disabled,
.radio-custom:disabled {
  background-color: var(--colors-disabled-bg, rgb(238, 238, 238));
  border-color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
  cursor: not-allowed;
}
```

</details>
### Navigation

The top navigation bar provides clear links and a primary call-to-action button, with subtle hover effects.

#### Top Navigation Bar
The main header element, fixed at the top, providing global navigation.

```css
.nav-bar {
  background-color: var(--colors-background-light, #ffffeb);
  color: var(--colors-text-primary, #1a1a1a);
  padding: var(--spacing-20, 20px) var(--spacing-40, 40px); /* inferred from screenshot */
  border-bottom: 1px solid var(--colors-border-light, #e4e4d0); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: var(--elevation-z-interactive, 3);
}
```


<details>
<summary>Navigation Link</summary>

Individual links within the navigation bar, using ghost button styling.

```css
.nav-link {
  color: var(--colors-text-secondary-light, #222222);
  font-family: var(--typography-button-family, 'Figtree');
  font-size: var(--typography-button-size, 16px);
  font-weight: var(--typography-button-weight, 600);
  padding: 12px 14px;
  text-decoration: none;
  transition: color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-out),
              border-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-out);
}

.nav-link:hover {
  color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
  border-color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-text-primary, #1a1a1a);
  border-bottom: 2px solid var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
  padding-bottom: 10px; /* Adjust padding to accommodate border */
}
```

</details>

<details>
<summary>Dropdown Menu</summary>

Used for nested navigation items, such as "Product" or "Resources".

```css
.dropdown-menu {
  background-color: var(--colors-background-light, #ffffeb);
  border: 1px solid var(--colors-border-primary, #1a1a1a4d);
  border-radius: var(--radius-sm, 8px);
  padding: var(--spacing-16, 16px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05); /* inferred from screenshot */
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px; /* inferred from screenshot */
  z-index: var(--elevation-z-dropdown, 2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out),
              transform var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-out);
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  display: block;
  padding: var(--spacing-12, 12px) var(--spacing-16, 16px);
  color: var(--colors-text-primary, #1a1a1a);
  font-family: var(--typography-body-family, 'Figtree');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  text-decoration: none;
  border-radius: var(--radius-sm, 8px); /* inferred from screenshot */
  transition: background-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out);
}

.dropdown-menu-item:hover {
  background-color: var(--colors-primary-purple, #f0d7ff); /* inferred from screenshot */
}
```

</details>
### Links

Links are typically underlined on hover for clear interaction feedback.

#### Standard Link
Used for inline text links and general navigation.

```css
.link-standard {
  color: var(--colors-text-primary, #1a1a1a);
  text-decoration: none;
  transition: text-decoration var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out),
              color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out);
}

.link-standard:hover {
  text-decoration: underline;
  color: var(--colors-text-primary, #1a1a1a); /* No explicit color change on hover */
}

.link-standard:visited {
  color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
}
```


<details>
<summary>Secondary Link</summary>

Used for footer navigation and less prominent links.

```css
.link-secondary {
  color: var(--colors-text-muted, #8a8a80);
  text-decoration: none;
  font-family: var(--typography-body-family, 'Figtree');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  transition: text-decoration var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out),
              color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-out);
}

.link-secondary:hover {
  text-decoration: underline;
  color: var(--colors-text-primary, #1a1a1a); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-muted, #8a8a80); /* inferred from screenshot */
}
```

</details>
### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: Wispr Flow employs a robust 8px base spacing system, ensuring consistent visual rhythm and hierarchy. The scale is derived from multiples of this base, providing flexibility for various layout needs.
    -   **Base 8px** → 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
    -   **8px**: Smallest gaps, inline element spacing, icon-text separation.
    -   **12-16px**: Padding within small components, spacing between form elements.
    -   **20-24px**: Standard padding for buttons, spacing between list items or small content blocks.
    -   **32-40px**: Padding within cards, vertical spacing between related sections.
    -   **48-64px**: Section padding on smaller screens, spacing between major content blocks.
    -   **80-96px**: Large section padding, particularly for hero sections and between distinct content areas on desktop.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*: Wispr Flow appears to use a flexible 12-column grid system within a maximum content width of approximately 1280px.
    -   **Max Width**: 1280px
    -   **Columns**: 12
    -   **Gutter**: 24px (12px on each side of a column)
    -   **Section Padding**: 96px vertical, 64px horizontal (on desktop)
-   **Whitespace Philosophy**: The design emphasizes generous whitespace, particularly around major content blocks and headings. This creates a sense of openness and allows content to breathe, enhancing readability and focus. Organic, flowing shapes often define the boundaries of these spacious sections, contributing to a soft, inviting atmosphere. The deliberate use of large vertical and horizontal padding ensures a clear separation of concerns and prevents visual clutter.
-   **Border Radius Scale**: Wispr Flow uses a subtle yet consistent border-radius scale to soften interactive elements and containers.
    -   **sm (8px)**: Buttons, input fields, smaller interactive elements.
    -   **md (14px)**: Standard cards, larger content containers.
    -   **lg (16px)**: Prominent cards or feature blocks.
    -   **xl (40px)**: Larger, more decorative container elements or unique shapes.
    -   **full (992px)**: Pill-shaped elements or fully rounded items.

## 6. Depth & Elevation
Wispr Flow primarily uses z-index for layering interactive and background elements, with minimal reliance on shadows for depth. The focus is on clear content separation through distinct background colors and ample spacing.

-   **z-background (z--1)**: `z-index: -1` — Used for background images or decorative elements that should appear behind main content, such as `img.faster_flow-image`.
-   **z-overlay (z-1)**: `z-index: 1` — Used for temporary overlays or off-canvas elements, such as `div#w-nav-overlay-0`.
-   **z-dropdown (z-2)**: `z-index: 2` — Dedicated to dropdown menus and similar transient content that appears above the main page flow, like `nav#w-dropdown-list-0`.
-   **z-interactive (z-3)**: `z-index: 3` — Applied to interactive components that need to be above most content, such as navigation dropdown toggles (`div.nav_menu-dropdown-toggle-v2.w-dropdown`).
-   **z-hero-animation (z-10)**: `z-index: 10` — Reserved for prominent animated hero elements that require a higher stacking context, like `div.hero_animation-lottie-bg`.
-   **z-hero-link (z-11)**: `z-index: 11` — For interactive links or controls within the hero animation that must be clickable and visible, such as `a.hero_animation-lottie-link.w-inline-block`.
-   **z-icon (z-111)**: `z-index: 111` — For small, highly visible icons that need to float above all other content, such as `img.icon-1x1-small`.

**Shadow Philosophy**: Wispr Flow generally avoids heavy shadows, opting for a flatter, modern aesthetic. When depth is needed, it's primarily achieved through distinct background color changes (e.g., `#ffffeb` on `#1a1a1a`) and clear z-index layering. Subtle borders (e.g., `1px solid #1a1a1a4d`) are preferred over shadows for defining component boundaries.

## 7. Do's and Don'ts

### Do's
-   **Do** use `Eb Garamond` (400 weight) for all display and heading text, reserving `Figtree` for body and interactive elements.
-   **Do** ensure primary body text (`Figtree` 16px, #1a1a1a) on light backgrounds (`#ffffeb`) maintains a 17.2:1 contrast ratio (AAA).
-   **Do** apply `border-radius: 8px` to all interactive buttons and input fields for a consistent soft appearance.
-   **Do** utilize the `primary-purple` (`#f0d7ff`) for primary call-to-action buttons to draw immediate attention.
-   **Do** maintain at least 40px of internal padding within `card-light` and `card-dark` components.
-   **Do** use `background-dark` (`#1a1a1a`) with `text-inverse` (`#ffffeb`) for sections requiring high contrast and visual separation.
-   **Do** use the 8px spacing base for all minor spacing adjustments like icon-text gaps.
-   **Do** provide a `3px solid rgb(217, 217, 217)` outline for inputs on focus to ensure clear accessibility.
-   **Do** ensure navigation links (`.nav-link`) show a `border-bottom: 2px solid #1a1a1a` when active.
-   **Do** use `transform: scale(0.98)` for button hover states to provide subtle feedback.

### Don'ts
-   **Don't** use `Figtree` for large display headings; reserve `Eb Garamond` for this purpose.
-   **Don't** place `text-inverse` (`#ffffeb`) on `border-light` (`#e4e4d0`); measured ratio 1.34 fails AA.
-   **Don't** introduce custom spacing values; stick strictly to the 8px-based spacing scale (8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px).
-   **Don't** use hard, sharp corners; always apply a minimum `border-radius: 8px` to interactive elements.
-   **Don't** use `background-dark` (`#1a1a1a`) as the primary text color on `primary-dark-teal` (`#034f46`) backgrounds without careful testing.
-   **Don't** use generic blue for links; ensure all links use `text-primary` (`#1a1a1a`) or `text-muted` (`#8a8a80`).
-   **Don't** omit the `outline` property for `:focus` states on interactive elements like inputs and buttons.
-   **Don't** use shadows for depth; rely on distinct background colors and z-index values for layering.
-   **Don't** use `font-weight: 700` for body text; `Figtree` `400` or `500` is sufficient for emphasis.
-   **Don't** use `padding: 12.4px 14px 24px 14px` for buttons; standardize to `16px 24px` for consistency.

## 8. Responsive Behavior
_Note: breakpoints below are measured from the source CSS. Adjust to the brand's actual media queries when implementing._

-   **Measured Breakpoints**:
    -   **Mobile Small** (~479px): Significant layout adjustments occur, including typography scale reductions and stacking of elements.
    -   **Mobile Large** (~767px): Content columns begin to stack, navigation often collapses into a hamburger menu.
    -   **Tablet** (~991px): Layouts transition from stacked to multi-column, with adjustments to padding and font sizes.
    -   **Desktop** (~1024px): Minor adjustments to spacing and element alignment for wider screens.
    -   **Desktop Large** (~1281px): Specific adjustments for very wide screens, often increasing max-width or column counts.
-   **Touch Targets**:
    -   Minimum touch target size: All interactive elements should have a minimum tap area of 44x44px (inferred from best practices).
    -   Minimum spacing: Maintain at least 8px of clear space between adjacent touch targets (inferred from best practices).
-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation bar collapses into a hamburger menu at `max-width: 991px`.
    -   **Cards**: Multi-column card layouts (e.g., testimonials) stack vertically on `max-width: 767px` and below.
    -   **Typography**: Display and heading font sizes scale down significantly on `max-width: 479px` to fit smaller viewports.
    -   **Padding**: Section padding reduces from 96px to 40px (inferred) vertically and 24px (inferred) horizontally on mobile breakpoints.
    -   **Forms**: Form inputs and labels stack vertically on `max-width: 767px` to ensure single-column readability.
    -   **Spacing**: Larger spacing values (e.g., 64px, 96px) are often reduced to 32px or 48px on mobile to optimize screen real estate.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   primary-purple: `#f0d7ff`
    -   primary-cream: `#ffffeb`
    -   primary-dark-teal: `#034f46`
    -   background-light: `#ffffeb`
    -   background-dark: `#1a1a1a`
    -   text-primary: `#1a1a1a`
    -   text-inverse: `#ffffeb`
    -   text-muted: `#8a8a80`
    -   text-secondary-light: `#222222`
    -   border-primary: `#1a1a1a4d`
    -   border-dark: `#222222`
    -   border-light: `#e4e4d0`
    -   focus-ring-light: `rgb(217, 217, 217)`
    -   focus-ring-dark: `rgb(26, 26, 26)`
    -   disabled-bg: `rgb(238, 238, 238)`
-   **Iteration Guide**
    1.  Always use `primary-purple` (`#f0d7ff`) for the `button-primary` background and `text-primary` (`#1a1a1a`) for its text.
    2.  Ensure all buttons have `border-radius: 8px` and `padding: 16px 24px`.
    3.  Apply `transform: scale(0.98)` on button hover with a `0.2s cubic-bezier(0.25, 1, 0.5, 1)` transition.
    4.  Set display and heading text in `Eb Garamond` (400 weight) and body text in `Figtree` (400 weight).
    5.  Use `16px` as the base font size for body text and `64px` for hero display text.
    6.  Maintain an 8px spacing base, using values from the `[8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]` scale.
    7.  All cards (`card-light`, `card-dark`) should have `border-radius: 14px` and a `1px solid border-primary` border.
    8.  Inputs must show a `3px solid focus-ring-light` or `focus-ring-dark` outline on `:focus`.
    9.  Navigation links (`.nav-link`) should have a `0.3s` color transition and a `2px solid text-primary` bottom border when active.
    10. Prioritize z-index for layering; avoid complex shadows for depth.
    11. Implement a fluid layout that stacks content columns on `max-width: 767px` and reduces typography scale on `max-width: 479px`.
    12. Ensure `text-primary` (`#1a1a1a`) on `background-light` (`#ffffeb`) passes AAA contrast (17.2:1).

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-08-01T01:33:38.287Z",
  "summary": {
    "unpairedBanned": 2,
    "bannedPhrase": 1,
    "total": 3
  },
  "warnings": [
    {
      "kind": "unpaired-banned-word",
      "term": "modern",
      "sentence": "Wispr Flow presents a modern and inviting aesthetic, characterized by a harmonious blend of soft, natural hues and a sophisticated typographic pairing."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "sophisticated",
      "sentence": "Wispr Flow presents a modern and inviting aesthetic, characterized by a harmonious blend of soft, natural hues and a sophisticated typographic pairing."
    },
    {
      "kind": "banned-phrase",
      "term": "premium feel",
      "sentence": "Ample spacing, with a base unit of 8px, ensures clarity and a premium feel, while rounded corners (e.g., 8px radius for buttons) soften the overall presentation."
    }
  ]
}
-->
