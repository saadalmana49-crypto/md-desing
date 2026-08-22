---
name: Dodo Payments
url: https://dodopayments.com
colors:
  primary: '#00ad64'
  primary-hover: '#00995a'
  background: '#fbfbfb'
  text-primary: '#00160d'
  text-muted: '#666666'
  text-inverse: '#ffffff'
  surface: '#ffffff'
  surface-secondary: '#f6f7f9'
  border: '#e7e7e7'
  border-hover: 'hsl(0, 0%, 85%)'
  accent-blue: '#1264ff'
  accent-blue-dark: '#0e50cc'
  accent-pink: '#ee46bc'
  accent-orange: '#ff8b37'
  accent-purple: '#493695'
  light-blue-bg: '#e7efff'
  light-purple-bg: '#ebe4f5' # oklch(90.2% .063 306.703)
  light-green-bg: '#e0f7ec'
  light-peach-bg: '#fff0e8'
  dark-surface: '#0d0d0d'
  dark-text: '#ffffff'
  dark-border: 'hsl(0, 0%, 20%)'
  hero-dot-color: '#1f3a8a'
  hero-mesh-bg: '#fbfcff'
  hero-mesh-blue: '#e7edff'
  hero-mesh-blue-deep: '#d8e3ff'
  hero-mesh-mint: '#ecfaf3'
typography:
  display:
    family: 'ApfelGrotezk'
    size: 60px
    weight: 400
    line-height: 1.2
  heading-1:
    family: 'ApfelGrotezk'
    size: 40px
    weight: 400
    line-height: 1.2
  heading-2:
    family: 'ApfelGrotezk'
    size: 30px
    weight: 400
    line-height: 1.2
  heading-3:
    family: 'ApfelGrotezk'
    size: 24px
    weight: 400
    line-height: 1.2
  body:
    family: 'Inter'
    size: 16px
    weight: 400
    line-height: 1.5
  body-small:
    family: 'Inter'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Inter'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]
radius:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  full: 9999px
elevation:
  card-subtle: 'rgba(0, 0, 0, 0.04) 0px 0px 1px 1px'
  card-default: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
  modal: 'rgba(0, 0, 0, 0.5) 0px 20px 50px 0px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.md}'
    shadow: '{elevation.card-default}'
  input:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.sm}'
    padding: '8px 12px'
motion:
  duration-fast: '80ms'
  duration-base: '150ms'
  duration-slow: '200ms'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  easing-out: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  easing-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
---

# Design System Inspired by Dodo Payments

## 1. Visual Theme & Atmosphere
Dodo Payments presents a modern, clean interface characterized by a bright, spacious layout and a vibrant accent palette. The hero section features a subtle animated mesh background (`--hero-bg-mesh-a`, `--hero-bg-mesh-b`) with fine (`--hero-bg-dots-fine`) and coarse (`--hero-bg-dots-coarse`) dot patterns in `#1f3a8a` and `#fbfcff`, creating a dynamic yet understated visual texture. Primary calls to action are highlighted with a bold green (`#00ad64`), while secondary interactive elements leverage a crisp blue (`#1264ff`). Typography is a blend of the elegant `ApfelGrotezk` for display headings and the highly readable `Inter` for body text, ensuring clarity across all content.

The overall atmosphere is one of sophisticated simplicity and technological capability, reinforced by the use of Lottie animations for engaging visual storytelling without sacrificing performance. Ample whitespace, consistent border radii of `8px` and `6px`, and subtle card shadows (`rgba(0, 0, 0, 0.1) 0px 1px 3px 0px`) contribute to a polished and approachable user experience. The site effectively uses a dark mode for specific content sections, such as "Developer Resources", employing a dark surface (`#0d0d0d`) and inverse text (`#ffffff`) to differentiate content and provide visual contrast.

Key Characteristics:
- Subtle animated mesh and dot patterns in the hero section.
- Primary green CTAs (`#00ad64`) for clear user guidance.
- Elegant `ApfelGrotezk` display font for impact.
- Generous use of white space and a `#fbfbfb` background.
- Consistent `6px` and `8px` border radii on interactive elements.
- Lottie animations enhance engagement.
- Dedicated dark sections with `#0d0d0d` background.

## 2. Color Palette & Roles

-   **Primary**:
    -   `primary` (`#00ad64`) — The dominant green used for primary calls to action, such as the "Get Started Now" button.
    -   `primary-hover` (`#00995a`) — A slightly darker shade of green, used for the hover state of primary interactive elements (inferred from screenshot).

-   **Accent Colors**:
    -   `accent-blue` (`#1264ff`) — A vibrant blue used for secondary calls to action, links, and key visual elements in the hero text.
    -   `accent-blue-dark` (`#0e50cc`) — A deeper blue, used for some interactive elements and highlights.
    -   `accent-pink` (`#ee46bc`) — A bright pink used for specific highlights and decorative elements.
    -   `accent-orange` (`#ff8b37`) — A warm orange used for occasional highlights and status indicators.
    -   `accent-purple` (`#493695`) — A deep purple used for specific text accents and decorative elements.
    -   `light-blue-bg` (`#e7efff`) — A very light blue used as a background for informational cards or sections, like "40+ Payment methods".
    -   `light-purple-bg` (`#ebe4f5`) — A soft purple background for informational cards, such as "220+ Countries & territories supported".
    -   `light-green-bg` (`#e0f7ec`) — A pale green background for success or security indicators, like "100% safe & secure".
    -   `light-peach-bg` (`#fff0e8`) — A gentle peach background for informational cards, such as "99.99% Uptime".

-   **Neutral Scale**:
    -   `background` (`#fbfbfb`) — The primary background color for most page sections, providing a clean canvas.
    -   `surface` (`#ffffff`) — Used for cards, modals, and other elevated content containers.
    -   `surface-secondary` (`#f6f7f9`) — A slightly off-white background for subtle distinction in sections or components.
    -   `text-primary` (`#00160d`) — The main dark text color for headings and body copy, ensuring high readability.
    -   `text-muted` (`#666666`) — A softer gray used for secondary text, captions, and descriptive labels.
    -   `text-inverse` (`#ffffff`) — White text used on dark backgrounds or primary colored buttons.
    -   `border` (`#e7e7e7`) — A light gray used for subtle borders on inputs, buttons, and cards.
    -   `border-hover` (`hsl(0, 0%, 85%)`) — A slightly darker border color for hover states.

-   **Dark Mode Palette**:
    -   `dark-surface` (`#0d0d0d`) — The background color for dark-themed sections, like "Developer Resources".
    -   `dark-text` (`#ffffff`) — Text color used on `dark-surface` backgrounds.
    -   `dark-border` (`hsl(0, 0%, 20%)`) — Border color used on dark-themed components.

-   **Hero Background Elements**:
    -   `hero-dot-color` (`#1f3a8a`) — The color for the dots in the hero background pattern.
    -   `hero-mesh-bg` (`#fbfcff`) — The base background color for the hero mesh.
    -   `hero-mesh-blue` (`#e7edff`) — A light blue within the hero mesh gradient.
    -   `hero-mesh-blue-deep` (`#d8e3ff`) — A deeper blue within the hero mesh gradient.
    -   `hero-mesh-mint` (`#ecfaf3`) — A mint green within the hero mesh gradient.

## 3. Typography Rules

-   **Font Family**:
    -   Primary Headings: `'ApfelGrotezk', system-ui, -apple-system, sans-serif`
    -   Body Text: `'Inter', system-ui, -apple-system, sans-serif`
    -   Monospace: `'ui-monospace', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

-   **Hierarchy**:
    -   **Display**: `ApfelGrotezk` `60px` `400` · line-height `1.2` · tracking `none` · Used for the main hero headline.
    -   **H1**: `ApfelGrotezk` `40px` `400` · line-height `1.2` · tracking `none` · Major section titles.
    -   **H2**: `ApfelGrotezk` `30px` `400` · line-height `1.2` · tracking `none` · Sub-section titles.
    -   **H3**: `ApfelGrotezk` `24px` `400` · line-height `1.2` · tracking `none` · Card titles and prominent labels.
    -   **Body**: `Inter` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text.
    -   **Body Small**: `Inter` `14px` `400` · line-height `1.5` · tracking `none` · Secondary information and form field text.
    -   **Caption**: `Inter` `12px` `400` · line-height `1.5` · tracking `none` · Fine print, footnotes, and metadata.
    -   **Code/Mono**: `ui-monospace` `14px` `400` · line-height `1.5` · tracking `none` · Code snippets and technical output.

-   **Principles**:
    -   **Clarity and Readability**: Prioritize the `Inter` font for all body text to ensure optimal readability at various sizes, using a `400` weight and `1.5` line-height.
    -   **Brand Distinction**: Utilize the unique `ApfelGrotezk` typeface exclusively for display and heading levels to establish a strong brand identity and visual hierarchy.
    -   **Consistent Weight**: Maintain a consistent `400` (normal) font weight across most text elements, reserving `300`, `500`, `600`, `700` for specific emphasis or interactive states (inferred from `typography.weights`).
    -   **Generous Line Height**: Apply a `1.2` line-height for headings and `1.5` for body text to improve legibility and visual comfort, especially in dense content blocks.
    -   **Minimal Tracking**: Avoid explicit letter-spacing adjustments for most text, relying on the default kerning of the chosen typefaces for a natural reading experience.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent green button for primary actions, featuring white text and a subtle press animation on active.

```css
.button-primary {
  background-color: var(--color-primary, #00ad64);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #00995a); /* inferred from screenshot */
}

.button-primary:active {
  transform: scale(0.97);
}

.button-primary:disabled {
  background-color: var(--color-border, #e7e7e7); /* inferred from screenshot */
  color: var(--color-text-muted, #666666); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
A light button with a border, used for secondary actions. It features a background color change on hover and a slight scale on active.

```css
.button-secondary {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #00160d);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: 12px 24px;
  border: 1px solid var(--color-border, #e7e7e7);
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), border-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  background-color: rgb(240, 240, 240); /* from pseudoStates.hover */
  border-color: var(--color-border-hover, hsl(0, 0%, 85%));
}

.button-secondary:active {
  transform: scale(0.97);
}

.button-secondary:disabled {
  background-color: var(--color-surface, #ffffff); /* inferred from screenshot */
  color: var(--color-text-muted, #666666); /* inferred from screenshot */
  border-color: var(--color-border, #e7e7e7); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button for tertiary actions, often used in navigation or subtle prompts. It changes text color on hover and scales on active.

```css
.button-ghost {
  background: none;
  color: var(--color-text-primary, #00160d);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: 4px 12px;
  border: none;
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:hover {
  color: var(--color-accent-blue, #1264ff); /* inferred from screenshot */
}

.button-ghost:active {
  transform: scale(0.97);
}

.button-ghost:disabled {
  color: var(--color-text-muted, #666666); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

#### Standard Card
A versatile container for content, featuring a white background, rounded corners, and a subtle shadow. On hover, it gains a slightly more pronounced shadow.

```css
.card {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #00160d);
  border: 1px solid var(--color-border, #e7e7e7); /* inferred from screenshot */
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--elevation-card-default, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  padding: var(--spacing-48, 48px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px, rgba(0, 0, 0, 0.04) 0px 1px 3px; /* from pseudoStates.hover */
}
```

#### Dark Feature Card
A card variant used in dark sections, such as "Developer Resources," with a dark background and inverse text. It also features a subtle hover shadow.

```css
.card-dark-feature {
  background-color: var(--color-dark-surface, #0d0d0d);
  color: var(--color-dark-text, #ffffff);
  border: 1px solid var(--color-dark-border, hsl(0, 0%, 20%)); /* inferred from screenshot */
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--elevation-card-default, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px);
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.card-dark-feature:hover {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px, rgba(0, 0, 0, 0.04) 0px 1px 3px; /* from pseudoStates.hover */
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light border and rounded corners. It features a distinct blue focus ring for accessibility and a muted disabled state.

```css
.input-text {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #00160d);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: 8px 12px;
  border: 1px solid var(--color-border, #e7e7e7);
  border-radius: var(--radius-sm, 6px);
  transition: border-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), box-shadow var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.input-text:focus {
  border-color: var(--color-accent-blue, #1264ff); /* inferred from screenshot */
  outline: none;
  box-shadow: 0 0 0 2px var(--color-accent-blue, #1264ff); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-surface-secondary, #f6f7f9); /* inferred from screenshot */
  color: var(--color-text-muted, #666666);
  border-color: var(--color-border, #e7e7e7);
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, using the primary text color and a standard body font.

```css
.form-label {
  color: var(--color-text-primary, #00160d);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
Custom styled checkboxes and radio buttons with a distinct primary color for their checked state.

```css
.checkbox-radio {
  /* Base styles for visual consistency */
  appearance: none;
  width: 16px; /* inferred from screenshot */
  height: 16px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #e7e7e7);
  border-radius: var(--radius-sm, 6px); /* for checkbox */
  background-color: var(--color-surface, #ffffff);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), border-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.checkbox-radio[type="radio"] {
  border-radius: var(--radius-full, 9999px); /* for radio */
}

.checkbox-radio:checked {
  background-color: var(--color-primary, #00ad64);
  border-color: var(--color-primary, #00ad64);
}

.checkbox-radio:checked::before {
  content: '';
  display: block;
  width: 8px; /* inferred from screenshot */
  height: 8px; /* inferred from screenshot */
  border-radius: var(--radius-full, 9999px); /* for radio */
  background-color: var(--color-text-inverse, #ffffff);
  transform: scale(1);
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.checkbox-radio[type="checkbox"]:checked::before {
  content: '✓'; /* inferred from screenshot */
  font-size: 10px; /* inferred from screenshot */
  line-height: 1;
  color: var(--color-text-inverse, #ffffff);
  background-color: transparent;
  border-radius: 0;
}

.checkbox-radio:disabled {
  background-color: var(--color-surface-secondary, #f6f7f9); /* inferred from screenshot */
  border-color: var(--color-border, #e7e7e7);
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

### Navigation

#### Top Navigation Bar
The main header navigation, featuring the brand logo and key links. It is fixed at the top and has a subtle shadow.

```css
.nav-bar {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-text-primary, #00160d);
  padding: var(--spacing-16, 16px) var(--spacing-40, 40px); /* inferred from screenshot */
  border-bottom: 1px solid var(--color-border, #e7e7e7); /* inferred from screenshot */
  box-shadow: var(--elevation-card-subtle, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: var(--elevation-z-header, 50);
}
```

#### Navigation Link
Individual links within the navigation bar or dropdowns, with a subtle color change on hover and a distinct active state.

```css
.nav-link {
  color: var(--color-text-primary, #00160d);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  border-radius: var(--radius-sm, 6px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  color: var(--color-accent-blue, #1264ff); /* inferred from screenshot */
  background-color: var(--color-surface-secondary, #f6f7f9); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-accent-blue, #1264ff); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 400); /* inferred from screenshot */
  background-color: var(--color-light-blue-bg, #e7efff); /* inferred from screenshot */
}
```

#### Dropdown Menu
A contextual menu that appears on hover, providing additional navigation options.

```css
.dropdown-menu {
  background-color: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #e7e7e7);
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--elevation-card-default, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px); /* inferred from screenshot */
  padding: var(--spacing-8, 8px);
  min-width: 180px; /* inferred from screenshot */
  position: absolute;
  top: 100%; /* inferred from screenshot */
  left: 0;
  z-index: var(--elevation-z-content, 10);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px); /* inferred from screenshot */
  transition: opacity var(--motion-duration-base, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1)), transform var(--motion-duration-base, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu .nav-link {
  display: block;
  width: 100%;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px);
  text-align: left;
}
```

### Links

#### Standard Link
Default inline text links, typically blue and underlined on hover.

```css
.link-standard {
  color: var(--color-accent-blue, #1264ff);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  text-decoration: none;
  transition: text-decoration var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-standard:hover {
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--color-accent-blue-dark, #0e50cc); /* inferred from screenshot */
}
```

#### Secondary Link
Links used for less prominent actions, often appearing as plain text that changes color on hover.

```css
.link-secondary {
  color: var(--color-text-muted, #666666);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary:hover {
  color: var(--color-text-primary, #00160d);
}

.link-secondary:visited {
  color: var(--color-text-muted, #666666); /* inferred from screenshot */
}
```

### Badges
Dodo Payments uses colored background blocks as informational badges, rather than traditional small status badges.

#### Informational Badge - Blue
Used for displaying metrics or categories, such as "40+ Payment methods".

```css
.badge-info-blue {
  background-color: var(--color-light-blue-bg, #e7efff);
  color: var(--color-accent-blue-dark, #0e50cc);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: var(--spacing-16, 16px) var(--spacing-24, 24px); /* inferred from screenshot */
  border-radius: var(--radius-md, 8px);
  text-align: center;
  display: inline-block;
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.badge-info-blue:hover {
  transform: translateY(-2px); /* inferred from screenshot */
}
```

#### Informational Badge - Purple
Used for displaying metrics or categories, such as "220+ Countries & territories supported".

```css
.badge-info-purple {
  background-color: var(--color-light-purple-bg, #ebe4f5);
  color: var(--color-accent-purple, #493695);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: var(--spacing-16, 16px) var(--spacing-24, 24px); /* inferred from screenshot */
  border-radius: var(--radius-md, 8px);
  text-align: center;
  display: inline-block;
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.badge-info-purple:hover {
  transform: translateY(-2px); /* inferred from screenshot */
}
```

#### Informational Badge - Green
Used for success or security indicators, such as "100% safe & secure".

```css
.badge-info-green {
  background-color: var(--color-light-green-bg, #e0f7ec);
  color: var(--color-primary, #00ad64);
  font-family: var(--typography-body-small-family, 'Inter', system-ui, -apple-system, sans-serif);
  font-size: var(--typography-body-small-size, 14px);
  font-weight: var(--typography-body-small-weight, 400);
  padding: var(--spacing-16, 16px) var(--spacing-24, 24px); /* inferred from screenshot */
  border-radius: var(--radius-md, 8px);
  text-align: center;
  display: inline-block;
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.badge-info-green:hover {
  transform: translateY(-2px); /* inferred from screenshot */
}
```

## 5. Layout Principles

-   **Spacing System**: Base unit `4px`.
    -   `4px`: Smallest element spacing, e.g., icons to text.
    -   `8px`: Inline element separation, form field labels to inputs.
    -   `12px`: Padding inside small buttons, list item spacing.
    -   `16px`: Component internal padding, vertical spacing between minor elements.
    -   `20px`: Moderate spacing for content blocks.
    -   `24px`: Section padding, spacing between cards.
    -   `32px`: Vertical rhythm for content sections.
    -   `40px`: Larger component padding, header spacing.
    -   `48px`: Standard section padding, card internal padding.
    -   `64px`: Major section breaks, hero content spacing.
    -   `80px`: Large vertical separation for distinct content blocks.

-   **Grid & Container** *(Suggested — not measured)*:
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from screenshot)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `0 64px` (inferred from screenshot)

-   **Whitespace Philosophy**: Dodo Payments embraces a generous whitespace philosophy, using ample padding (`48px` to `64px`) around major content blocks and within components to create a sense of openness and reduce cognitive load. This approach highlights key information and interactive elements, allowing them to breathe and stand out against the `#fbfbfb` background. Negative space is strategically employed to define visual hierarchy and guide the user's eye through the content, contributing to the clean and modern aesthetic.

-   **Border Radius Scale**:
    -   `sm` (`6px`): Small interactive elements like buttons, input fields, and small badges.
    -   `md` (`8px`): Standard cards, larger input fields, and some navigation elements.
    -   `lg` (`12px`): Larger buttons, select containers.
    -   `xl` (`16px`): Prominent feature cards or larger interactive elements.
    -   `xxl` (`24px`): Large containers or decorative elements.
    -   `full` (`9999px`): Pill-shaped elements, radio buttons.

## 6. Depth & Elevation

-   **Hero Background (z--10)**: `none` — Used for the subtle animated mesh and dot patterns that sit behind the main content.
-   **Base Content (z-1)**: `none` — Applies to standard content panels and sections that do not require elevation.
-   **Default Card (z-2)**: `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` — Used for standard cards and containers, providing a subtle lift from the background.
-   **Subtle Overlay (z-10)**: `none` — Applies to elements that need to appear slightly above the base content, such as tooltips or contextual menus.
-   **Interactive Overlay (z-20)**: `none` — Used for temporary elements like dropdowns or popovers that overlay content.
-   **Header (z-50)**: `rgba(0, 0, 0, 0.04) 0px 0px 1px 1px` (inferred from screenshot) — Applied to the fixed top navigation bar, ensuring it remains visible above scrolling content.
-   **Modal / Global UI (z-999999998)**: `rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` — Reserved for full-screen modals, cookie consent banners, or critical global UI elements that must appear above all other content.

**Shadow Philosophy**: Dodo Payments uses shadows sparingly and subtly, primarily for defining interactive elements and content containers. The `card-default` shadow provides a soft, diffused lift, giving elements a tangible presence without feeling heavy. Hover states introduce a slightly more pronounced `box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px, rgba(0, 0, 0, 0.04) 0px 1px 3px` to indicate interactivity. The most significant shadow, `modal`, is reserved for critical, temporary overlays to ensure they command full attention. Z-index values are carefully managed to create clear stacking contexts, with the header and global UI elements having the highest values.

## 7. Do's and Don'ts

### Do's
-   **Do** use `ApfelGrotezk` `40px` `400` for H1 titles to establish strong hierarchy.
-   **Do** ensure all body text uses `Inter` `16px` `400` with `1.5` line-height for optimal readability on `#fbfbfb`.
-   **Do** apply `padding: 12px 24px` and `border-radius: 6px` consistently to all Primary Buttons (`#00ad64`).
-   **Do** use the `spacing` scale, specifically `24px` for vertical separation between Cards.
-   **Do** highlight interactive links with `color: #1264ff` and an underline on hover.
-   **Do** use `border-radius: 8px` for standard Cards and input fields.
-   **Do** use `box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px, rgba(0, 0, 0, 0.04) 0px 1px 3px` for card hover states.
-   **Do** use `color: #00160d` on `#ffffff` for body text; measured ratio `18.74` passes AAA.
-   **Do** use `color: #00160d` on `#fafafa` for body text; measured ratio `17.95` passes AAA.
-   **Do** use `color: #ffffff` on `#1b1b1b` for text in dark sections; measured ratio `17.22` passes AAA.

### Don'ts
-   **Don't** use `Inter` for major display headings; reserve `ApfelGrotezk` for brand impact.
-   **Don't** introduce custom spacing values; adhere strictly to the `4px` base spacing scale.
-   **Don't** use `border-radius` values other than `6px`, `8px`, `12px`, `16px`, `24px`, or `9999px`.
-   **Don't** place `#666666` (text-muted) on backgrounds darker than `#ffffff`; measured ratio `5.74` on `#ffffff` passes AA, but darker backgrounds will fail.
-   **Don't** use `box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 50px 0px` on standard Cards; reserve it for modals.
-   **Don't** use `color: #00160d` on `light-blue-bg` (`#e7efff`) for body text; measured ratio `16.34` passes AAA.
-   **Don't** use `color: #00160d` on `light-green-bg` (`#e6fbf2`) for body text; measured ratio `17.35` passes AAA.
-   **Don't** use `color: #00160d` on `light-peach-bg` (`#fdedf8`) for body text; measured ratio `16.64` passes AAA.

## 8. Responsive Behavior
_Note: breakpoints below are measured from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~320px - 767px): Content stacks vertically, font sizes scale down, and primary navigation collapses into a hamburger menu.
    -   **Mobile Large** (~768px): Card layouts may shift from single column to two columns, and navigation might expand slightly.
    -   **Tablet** (~768px - 1023px): Two-column layouts become common, and the main navigation remains visible with reduced padding.
    -   **Desktop** (~1024px - 1439px): Full desktop layout, with ample whitespace and multi-column grids.
    -   **Desktop Large** (~1440px+): Max container width is reached, with content centered and increased side margins.

-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons and links, have a minimum touch target size of `44px` by `44px` (inferred from screenshot).
    -   Maintain at least `8px` of clear space between adjacent touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: The top navigation bar collapses into a hamburger menu icon below `768px`, revealing a full-screen or slide-out menu.
    -   **Cards**: Multi-column card layouts transition to a single-column stack on smaller viewports, typically below `768px`.
    -   **Typography**: Display and heading font sizes (`60px`, `40px`) scale down by `20-30%` on mobile to fit screen width.
    -   **Padding**: Horizontal section padding reduces from `64px` to `24px` or `16px` on mobile for better content utilization.
    -   **Forms**: Multi-column form layouts collapse into a single column, and input fields maintain their height but adjust width.
    -   **Spacing**: Larger spacing units (`48px`, `64px`) may be reduced to `24px` or `32px` on mobile to optimize vertical density.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   primary: `#00ad64`
    -   primary-hover: `#00995a`
    -   background: `#fbfbfb`
    -   text-primary: `#00160d`
    -   text-muted: `#666666`
    -   text-inverse: `#ffffff`
    -   surface: `#ffffff`
    -   surface-secondary: `#f6f7f9`
    -   border: `#e7e7e7`
    -   accent-blue: `#1264ff`
    -   dark-surface: `#0d0d0d`
    -   dark-text: `#ffffff`

-   **Iteration Guide**:
    1.  Always use `ApfelGrotezk` for display and heading elements, `Inter` for body and caption text.
    2.  Ensure all primary CTAs use the `button-primary` styling with `background-color: #00ad64` and `color: #ffffff`.
    3.  Apply `border-radius: 6px` to all buttons and input fields for a consistent soft edge.
    4.  Utilize the `4px` spacing base and its derived scale for all layout and component spacing.
    5.  Default Cards should have `background-color: #ffffff` and `box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`.
    6.  Input fields must include a `box-shadow: 0 0 0 2px #1264ff` focus ring on interaction.
    7.  Navigation links should transition `color` and `background-color` over `80ms` with `cubic-bezier(0.4, 0, 0.2, 1)`.
    8.  Implement dark sections with `background-color: #0d0d0d` and `color: #ffffff` for text.
    9.  Ensure all text on `#fbfbfb` is at least `#666666` for AA contrast, preferring `#00160d` for AAA.
    10. Apply `transform: scale(0.97)` on `:active` states for all interactive elements.
    11. Use `padding: 12px 24px` for buttons and `padding: 8px 12px` for inputs.
    12. Ensure all `badge-info` variants use `border-radius: 8px` and `transform: translateY(-2px)` on hover.