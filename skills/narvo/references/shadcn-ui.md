---
name: 'shadcn/ui'
slug: shadcn-ui
url: https://ui.shadcn.com/
category: 'Dev Tools'
mode: dual
fonts:
  - 'Geist'
  - 'Geist Mono'
preview:
  bg: '#ffffff'
  fg: '#000000'
  accent: '#000000'
summary: >-
  The component-library reference: a complete semantic token pair (background/foreground, card, muted, popover) for both themes.
colors:
  primary: '#000000'
  primary-foreground: '#ffffff'
  background: '#ffffff'
  foreground: '#000000'
  surface: '#ffffff' # var(--card)
  text-primary: '#000000' # var(--foreground)
  text-muted: '#737373' # var(--muted-foreground)
  border: '#e5e5e5' # var(--border)
  input: '#e5e5e5' # var(--input)
  muted: '#f5f5f5' # var(--muted)
  accent: '#f5f5f5' # var(--accent)
  accent-foreground: '#000000' # var(--accent-foreground)
  popover: '#ffffff' # var(--popover)
  popover-foreground: '#000000' # var(--popover-foreground)
  sidebar: '#fafafa' # var(--sidebar)
  sidebar-border: '#e5e5e5' # var(--sidebar-border)
  sidebar-accent: '#f5f5f5' # inferred from hover state on sidebar menu item
  sidebar-accent-foreground: '#000000' # inferred from hover state on sidebar menu item
  dark-background: '#0a0a0a'
  dark-foreground: '#fafafa'
  dark-border: '#ffffff1a'
  dark-card: '#171717'
  dark-card-foreground: '#fafafa'
  dark-input: '#ffffff26'
  dark-muted: '#262626'
  dark-muted-foreground: '#a1a1a1'
  dark-popover: '#171717'
  dark-popover-foreground: '#fafafa'
  dark-accent: '#404040'
  dark-accent-foreground: '#fafafa'
typography:
  display:
    family: 'Geist'
    size: 48px
    weight: 600
    line-height: 1.2
  h1:
    family: 'Geist'
    size: 36px
    weight: 600
    line-height: 1.2
  h2:
    family: 'Geist'
    size: 30px
    weight: 600
    line-height: 1.2
  h3:
    family: 'Geist'
    size: 24px
    weight: 600
    line-height: 1.2
  body:
    family: 'Geist'
    size: 16px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'Geist'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Geist'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'Geist Mono'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 48, 80]
radius:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 18px
  2xl: 20px
  3xl: 24px
  4xl: 26px
elevation:
  card: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)'
  focus-ring: '0px 0px 0px 2px rgba(0, 0, 0, 0.2)'
  hover: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)' # same as card for now, no distinct hover shadow observed
motion:
  duration-fast: '100ms'
  duration-base: '200ms'
  duration-medium: '300ms'
  duration-slow: '400ms'
  duration-extra-slow: '500ms'
  easing-standard: 'ease'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.primary-foreground}'
    radius: '{radius.xl}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.muted}'
    text: '{colors.foreground}'
    radius: '{radius.xl}'
    padding: '12px 24px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.foreground}'
    radius: '{radius.xl}'
    padding: '12px 24px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.3xl}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.background}'
    text: '{colors.foreground}'
    border: '1px solid {colors.input}'
    radius: '{radius.lg}'
    padding: '8px 12px'
---

# Design System Inspired by shadcn/ui

## 1. Visual Theme & Atmosphere
The shadcn/ui design system presents a clean, high-contrast aesthetic, primarily utilizing a monochromatic palette of `#000000` (black) for text and primary interactive elements against a `#ffffff` (white) background. This stark contrast is softened by a generous `24px` border-radius on cards and a `18px` radius on buttons, lending a modern, approachable feel. Typography is driven by the geometric sans-serif 'Geist' font, ensuring clear legibility and a strong visual hierarchy across various text sizes.

The interface is structured with ample whitespace, using a `4px` base spacing scale that contributes to a sense of order and focus. Subtle shadows, such as `0px 1px 3px rgba(0,0,0,0.1)`, provide minimal depth without distracting from the content. Interaction feedback is provided through CSS keyframe animations and transitions, particularly noticeable in elements like "Sonner toasts" with `0.4s` transform and opacity changes, indicating a responsive and engaging user experience.

Key Characteristics:
- High-contrast black (`#000000`) and white (`#ffffff`) palette.
- Geometric 'Geist' font family for all text.
- Generous `24px` and `18px` border-radii on containers and buttons.
- Subtle `0px 1px 3px rgba(0,0,0,0.1)` shadows for elevation.
- Line-based, monochrome iconography.
- Ample use of `24px` and `48px` spacing for clear separation.
- CSS-driven animations for interactive feedback.

## 2. Color Palette & Roles
The color palette is intentionally minimal, relying on a strong contrast between foreground and background, with a carefully constructed neutral scale for supporting elements. Dark mode variants are also provided.

-   **Primary**
    -   `primary`: `#000000` — Used for primary call-to-action buttons, main headings, and core interactive elements.
    -   `primary-foreground`: `#ffffff` — Text color used on primary backgrounds.
-   **Neutral Scale**
    -   `background`: `#ffffff` — The default page background color.
    -   `foreground`: `#000000` — Primary text color on light backgrounds.
    -   `surface`: `#ffffff` (`var(--card)`) — Background for cards, popovers, and other elevated containers.
    -   `text-muted`: `#737373` (`var(--muted-foreground)`) — Secondary text, helper text, and less prominent information.
    -   `border`: `#e5e5e5` (`var(--border)`) — Used for subtle borders on inputs, cards, and dividers.
    -   `input`: `#e5e5e5` (`var(--input)`) — Background for text inputs and form fields.
    -   `muted`: `#f5f5f5` (`var(--muted)`) — Background for secondary buttons, hover states, and subtle UI elements.
-   **Accent Colors**
    -   `accent`: `#f5f5f5` (`var(--accent)`) — Used for hover states on navigation items and other interactive elements.
    -   `accent-foreground`: `#000000` (`var(--accent-foreground)`) — Text color on accent backgrounds.
-   **Interactive**
    -   `popover`: `#ffffff` (`var(--popover)`) — Background for ephemeral UI elements like tooltips and dropdowns.
    -   `popover-foreground`: `#000000` (`var(--popover-foreground)`) — Text color on popover backgrounds.
    -   `sidebar`: `#fafafa` (`var(--sidebar)`) — Background for the left-hand navigation sidebar.
    -   `sidebar-border`: `#e5e5e5` (`var(--sidebar-border)`) — Border color for the sidebar.
    -   `sidebar-accent`: `#f5f5f5` (inferred from screenshot) — Background for active/hovered sidebar menu items.
    -   `sidebar-accent-foreground`: `#000000` (inferred from screenshot) — Text color for active/hovered sidebar menu items.
-   **Dark Mode Palette**
    -   `dark-background`: `#0a0a0a`
    -   `dark-foreground`: `#fafafa`
    -   `dark-border`: `#ffffff1a` (rgba(255, 255, 255, 0.1))
    -   `dark-card`: `#171717`
    -   `dark-card-foreground`: `#fafafa`
    -   `dark-input`: `#ffffff26` (rgba(255, 255, 255, 0.15))
    -   `dark-muted`: `#262626`
    -   `dark-muted-foreground`: `#a1a1a1`
    -   `dark-popover`: `#171717`
    -   `dark-popover-foreground`: `#fafafa`
    -   `dark-accent`: `#404040`
    -   `dark-accent-foreground`: `#fafafa`

## 3. Typography Rules
-   **Font Family**: 'Geist', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif. For code blocks, 'Geist Mono', monospace.
-   **Hierarchy**:
    -   **Display**: `Geist` `48px` `600` · line-height `1.2` · tracking `none` · Used for prominent hero sections.
    -   **H1**: `Geist` `36px` `600` · line-height `1.2` · tracking `none` · Main page titles.
    -   **H2**: `Geist` `30px` `600` · line-height `1.2` · tracking `none` · Section titles within a page.
    -   **H3**: `Geist` `24px` `600` · line-height `1.2` · tracking `none` · Sub-section titles or card headings.
    -   **Body**: `Geist` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text and general content.
    -   **Body Small**: `Geist` `14px` `400` · line-height `1.5` · tracking `none` · Used for descriptive text, form labels, and button text.
    -   **Caption**: `Geist` `12px` `400` · line-height `1.5` · tracking `none` · Small annotations, metadata, or legal text.
    -   **Code/Mono**: `Geist Mono` `14px` `400` · line-height `1.5` · tracking `none` · For code snippets and monospace contexts.
-   **Principles**:
    -   Prioritize legibility and clarity across all text sizes, especially with the high contrast.
    -   Maintain a strong visual hierarchy using distinct font sizes and weights for headings and body text.
    -   Utilize the 'Geist Mono' family exclusively for code-related content to ensure clear differentiation.
    -   Employ a consistent line-height of `1.5` for body and smaller text to enhance readability.
    -   Avoid excessive use of bolding; reserve `font-weight: 600` for primary headings and key UI elements.

## 4. Component Stylings

### Buttons

Buttons feature generous padding and `18px` rounded corners, providing a friendly yet professional appearance. Interaction states are clear, with subtle background color changes on hover and distinct focus rings.

#### Primary Button
A solid black button for primary actions, with white text. On hover, the background darkens slightly.
```css
.btn-primary {
  background-color: var(--color-primary, #000000);
  color: var(--color-primary-foreground, #ffffff);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-xl, 18px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.btn-primary:hover {
  background-color: #333333; /* inferred from screenshot */
}

.btn-primary:active {
  background-color: #1a1a1a; /* inferred from screenshot */
}

.btn-primary:disabled {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-text-muted, #737373);
  cursor: not-allowed;
}

.btn-primary:focus-visible {
  outline: none;
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}
```


<details>
<summary>Secondary Button</summary>

A light grey button for secondary actions, with black text. On hover, the background darkens to match the border color.
```css
.btn-secondary {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-foreground, #000000);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #e5e5e5);
  border-radius: var(--radius-xl, 18px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.btn-secondary:hover {
  background-color: var(--color-border, #e5e5e5); /* inferred from screenshot */
  border-color: var(--color-border, #e5e5e5);
}

.btn-secondary:active {
  background-color: #d1d1d1; /* inferred from screenshot */
  border-color: #d1d1d1;
}

.btn-secondary:disabled {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-text-muted, #737373);
  border-color: var(--color-border, #e5e5e5);
  cursor: not-allowed;
}

.btn-secondary:focus-visible {
  outline: none;
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}
```

</details>

<details>
<summary>Ghost Button</summary>

A text-only button with a transparent background, primarily used for less prominent actions or within groups. On hover, a subtle light grey background appears.
```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-foreground, #000000);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-xl, 18px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.btn-ghost:hover {
  background-color: var(--color-muted, #f5f5f5);
}

.btn-ghost:active {
  background-color: var(--color-border, #e5e5e5); /* inferred from screenshot */
}

.btn-ghost:disabled {
  color: var(--color-text-muted, #737373);
  cursor: not-allowed;
}

.btn-ghost:focus-visible {
  outline: none;
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}
```

</details>
### Cards & Containers
Cards are the primary content containers, featuring a white background, `24px` rounded corners, and a subtle shadow for depth. On hover, the shadow subtly darkens to indicate interactivity.

```css
.card {
  background-color: var(--color-surface, #ffffff);
  color: var(--color-foreground, #000000);
  border-radius: var(--radius-3xl, 24px);
  box-shadow: var(--elevation-card, 0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1));
  padding: var(--spacing-24, 24px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 200ms) var(--motion-easing-standard, ease);
}

.card:hover {
  box-shadow: var(--elevation-hover, 0px 2px 6px 0px rgba(0,0,0,0.15), 0px 1px 2px -1px rgba(0,0,0,0.1)); /* inferred from screenshot */
}
```

### Inputs & Forms

#### Text Input
Standard text inputs have a light grey border and `10px` rounded corners. A clear focus ring appears on interaction.
```css
.input-text {
  background-color: var(--color-background, #ffffff);
  color: var(--color-foreground, #000000);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 12px;
  border: 1px solid var(--color-input, #e5e5e5);
  border-radius: var(--radius-lg, 10px);
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), box-shadow var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.input-text::placeholder {
  color: var(--color-text-muted, #737373);
}

.input-text:focus {
  outline: none;
  border-color: var(--color-primary, #000000); /* inferred from screenshot */
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}

.input-text:disabled {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-text-muted, #737373);
  border-color: var(--color-border, #e5e5e5);
  cursor: not-allowed;
}
```


<details>
<summary>Form Label</summary>

Labels are rendered in primary text color with a `14px` font size.
```css
.form-label {
  color: var(--color-foreground, #000000);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500; /* inferred from screenshot */
  line-height: 1.5;
  padding: 0;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
}
```

</details>

<details>
<summary>Checkbox/Radio</summary>

Checkbox and radio buttons are not explicitly visible in the screenshot, but based on the overall aesthetic, they would likely feature a simple, monochromatic design with a clear focus state.
```css
.checkbox, .radio {
  appearance: none;
  width: 16px; /* inferred from screenshot */
  height: 16px; /* inferred from screenshot */
  border: 1px solid var(--color-input, #e5e5e5);
  border-radius: var(--radius-sm, 6px); /* inferred, smaller radius for checkboxes */
  background-color: var(--color-background, #ffffff);
  cursor: pointer;
  transition: border-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.radio {
  border-radius: var(--radius-full, 9999px); /* full for radio buttons */
}

.checkbox:checked, .radio:checked {
  background-color: var(--color-primary, #000000);
  border-color: var(--color-primary, #000000);
}

.checkbox:focus-visible, .radio:focus-visible {
  outline: none;
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}

.checkbox:disabled, .radio:disabled {
  background-color: var(--color-muted, #f5f5f5);
  border-color: var(--color-border, #e5e5e5);
  cursor: not-allowed;
}
```

</details>
### Navigation

#### Top Navigation Bar
The top navigation bar is a fixed element with a white background and a subtle border, providing clear access to main sections.
```css
.nav-top-bar {
  position: sticky;
  top: 0;
  z-index: 50; /* from elevation.zIndexValues */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-background, #ffffff);
  border-bottom: 1px solid var(--color-border, #e5e5e5);
  padding: var(--spacing-16, 16px) var(--spacing-24, 24px); /* inferred from screenshot */
  min-height: calc(0.25rem * 16); /* var(--header-height) */
}
```


<details>
<summary>Navigation Link</summary>

Navigation links are simple text, turning a light grey on hover and maintaining primary text color when active.
```css
.nav-link {
  color: var(--color-foreground, #000000);
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px; /* inferred from screenshot */
  border-radius: var(--radius-md, 8px); /* inferred from screenshot */
  text-decoration: none;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.nav-link:hover {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-foreground, #000000);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  background-color: var(--color-accent, #f5f5f5); /* inferred from screenshot */
  color: var(--color-accent-foreground, #000000);
  font-weight: 500;
}

.nav-link:visited {
  color: var(--color-foreground, #000000); /* Visited links retain primary color */
}
```

</details>

<details>
<summary>Dropdown Menu</summary>

Dropdown menus are not explicitly shown in the screenshot, but based on the popover tokens, they would likely have a white background, `10px` rounded corners, and subtle shadows.
```css
.dropdown-menu {
  background-color: var(--color-popover, #ffffff);
  color: var(--color-popover-foreground, #000000);
  border-radius: var(--radius-lg, 10px);
  box-shadow: var(--elevation-card, 0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)); /* inferred from screenshot */
  padding: var(--spacing-8, 8px); /* inferred from screenshot */
  min-width: 160px; /* inferred from screenshot */
  z-index: 20; /* inferred from screenshot */
}

.dropdown-menu-item {
  display: block;
  width: 100%;
  padding: 8px 12px; /* inferred from screenshot */
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-popover-foreground, #000000);
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-radius: var(--radius-md, 8px); /* inferred from screenshot */
  cursor: pointer;
  text-align: left;
  transition: background-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.dropdown-menu-item:hover {
  background-color: var(--color-muted, #f5f5f5);
  color: var(--color-foreground, #000000);
}

.dropdown-menu-item:focus-visible {
  outline: none;
  box-shadow: var(--elevation-focus-ring, 0px 0px 0px 2px rgba(0, 0, 0, 0.2));
}
```

</details>
### Links

#### Standard Link
Standard text links are underlined and use the primary foreground color, with a subtle underline fade on hover.
```css
.link-standard {
  color: var(--color-foreground, #000000);
  text-decoration: underline;
  text-decoration-color: var(--color-foreground, #000000);
  text-underline-offset: 2px; /* inferred from screenshot */
  transition: text-decoration-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.link-standard:hover {
  text-decoration-color: transparent; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-foreground, #000000); /* Visited links retain primary color */
}
```


<details>
<summary>Secondary Link</summary>

Secondary links appear as plain text, often in a muted color, gaining a subtle underline on hover.
```css
.link-secondary {
  color: var(--color-text-muted, #737373);
  text-decoration: none;
  text-underline-offset: 2px; /* inferred from screenshot */
  transition: text-decoration-color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease), color var(--motion-duration-fast, 100ms) var(--motion-easing-standard, ease);
}

.link-secondary:hover {
  color: var(--color-foreground, #000000); /* inferred from screenshot */
  text-decoration: underline;
  text-decoration-color: var(--color-foreground, #000000); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-muted, #737373); /* Visited links retain muted color */
}
```

</details>
### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: The design system uses a `4px` base unit, creating a granular and consistent spacing scale.
    -   `0px`: No spacing, for tight alignments.
    -   `4px`: Smallest increment, for tight element spacing (e.g., icon to text).
    -   `8px`: Compact spacing for inline elements or small vertical gaps.
    -   `12px`: Standard spacing for form elements or list items.
    -   `16px`: Moderate spacing, often used for padding within components.
    -   `20px`: Slightly larger spacing for distinct groups of elements.
    -   `24px`: Generous spacing for section padding, card content, or between major components.
    -   `48px`: Large spacing for significant vertical separation between sections.
    -   `80px`: Extra large spacing for hero sections or full-page content breaks.
-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   **Max Width**: `1440px` (inferred from viewport)
    -   **Columns**: `12` (inferred from common practice)
    -   **Gutter**: `24px` (inferred from visual separation)
    -   **Section Padding**: `48px` vertical, `24px` horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: Whitespace is a critical element, used generously to create a sense of calm and clarity. It separates distinct content blocks, improves readability, and draws attention to key information by providing visual breathing room. The ample use of `24px` and `48px` spacing around and within components ensures that the high-contrast elements do not feel overwhelming.
-   **Border Radius Scale**:
    -   `sm`: `6px` — Smallest radius, for subtle rounding on minor elements.
    -   `md`: `8px` — Standard small radius, for input fields and smaller interactive elements.
    -   `lg`: `10px` — Used for text inputs and dropdown menus.
    -   `xl`: `18px` — Prominent radius for primary and secondary buttons.
    -   `2xl`: `20px` — Larger radius for certain UI elements.
    -   `3xl`: `24px` — Signature large radius for cards and main containers.
    -   `4xl`: `26px` — Largest radius, for very prominent containers or specific stylistic elements.

## 6. Depth & Elevation
The elevation system is subtle, primarily using shadows to denote interactive elements and distinct content blocks. Z-index values are clearly defined for stacking contexts.

-   **Flat (z-0)**: `none` — Default state for most background elements and static content.
-   **Card (z-1)**: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` — Used for standard cards and subtle interactive elements, like `div.absolute.inset-x-0`.
-   **Dropdown/Modal Backdrop (z-10)**: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` (inferred) — Used for elements that layer above content but below modals, like `div.group/layout.relative`.
-   **Popover (z-20)**: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` (inferred) — Used for ephemeral UI elements like tooltips or context menus, like `div.absolute.inset-x-0`.
-   **Sticky Header (z-50)**: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` (inferred) — Used for sticky navigation bars and elements that must always remain visible, like `header.sticky.top-0`.

**Shadow Philosophy**: Shadows are used sparingly and subtly to provide a sense of depth and hierarchy without being overly distracting. They primarily serve to lift interactive elements and content cards off the background, enhancing their perceived prominence. The focus ring (`0px 0px 0px 2px rgba(0, 0, 0, 0.2)`) is a key part of elevation for interactive elements, ensuring accessibility.

## 7. Do's and Don'ts

### Do's
-   **Do** use `Geist` `48px` `600` for primary display headings to establish strong visual presence.
-   **Do** ensure all body text uses `Geist` `16px` `400` with a line-height of `1.5` for optimal readability on `#ffffff`.
-   **Do** apply `24px` of vertical spacing between consecutive `.card` components.
-   **Do** use `#000000` for `.btn-primary` backgrounds and `#ffffff` for its text, ensuring a 21:1 contrast ratio.
-   **Do** maintain `18px` `border-radius` for all primary and secondary buttons.
-   **Do** utilize `48px` vertical padding for main content sections to provide ample whitespace.
-   **Do** ensure interactive elements like `.input-text` show a `0px 0px 0px 2px rgba(0, 0, 0, 0.2)` focus ring.
-   **Do** use `10px` `border-radius` for `.input-text` fields for consistent form styling.
-   **Do** use `#e5e5e5` for borders on `.input-text` and `.btn-secondary` elements.
-   **Do** use `background-color: var(--color-muted, #f5f5f5)` for hover states on `.nav-link` elements.

### Don'ts
-   **Don't** use text colors lighter than `#000000` on `#ffffff` for body text, as this fails the AAA contrast ratio of 21:1.
-   **Don't** introduce custom spacing values; adhere strictly to the `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `48px`, `80px` scale.
-   **Don't** use `font-weight: 600` for standard body text (e.g., `16px`), as it disrupts the typographic hierarchy.
-   **Don't** apply `border-radius` values other than `24px` to main `.card` containers.
-   **Don't** use `box-shadow` values other than `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` for cards.
-   **Don't** use colors other than `#737373` for `text-muted` roles.
-   **Don't** use `background-color: transparent` for `.btn-primary` or `.btn-secondary` elements.
-   **Don't** use `text-decoration: underline` on `.link-secondary` in its default state.
-   **Don't** use `padding` values less than `12px 24px` for `.btn-primary` and `.btn-secondary`.
-   **Don't** use `z-index` values outside the `1, 10, 20, 50` scale.

## 8. Responsive Behavior
-   **Breakpoints**:
    -   **Mobile Small** (~320px): Stack all columns; simplify navigation to a hamburger menu.
    -   **Mobile Large** (~600px): Adjust typography sizes; reduce horizontal padding to `16px`.
    -   **Tablet** (~768px): Introduce a two-column layout for some content; expand navigation.
    -   **Desktop** (~1024px): Enable multi-column layouts; full navigation visible.
    -   **Desktop Large** (~1440px): Optimize for wider screens; increase content area max-width.
-   **Touch Targets**:
    -   All interactive elements (buttons, links, form controls) should have a minimum touch target size of `44px` by `44px`.
    -   Ensure a minimum `8px` spacing between adjacent touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: Collapse top navigation links into a hamburger menu below `1024px`; the search input simplifies.
    -   **Cards**: Stack `.card` components vertically on mobile (`<600px`); maintain `24px` vertical spacing.
    -   **Typography**: Scale down `display` and `h1` font sizes by approximately `20%` on mobile.
    -   **Padding**: Reduce horizontal section padding from `24px` to `16px` on screens below `600px`.
    -   **Forms**: Stack form labels above inputs on mobile; ensure inputs remain `100%` width.
    -   **Spacing**: Consolidate larger `48px` and `80px` vertical spacing to `24px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   `primary`: `#000000`
    -   `primary-foreground`: `#ffffff`
    -   `background`: `#ffffff`
    -   `foreground`: `#000000`
    -   `surface`: `#ffffff`
    -   `text-muted`: `#737373`
    -   `border`: `#e5e5e5`
    -   `input`: `#e5e5e5`
    -   `muted`: `#f5f5f5`
    -   `accent`: `#f5f5f5`
    -   `accent-foreground`: `#000000`
-   **Iteration Guide**:
    1.  Always use `Geist` font family for all text, with `Geist Mono` for code.
    2.  Always use `14px` `font-size` and `500` `font-weight` for button text.
    3.  Always apply `18px` `border-radius` to primary and secondary buttons.
    4.  Always use `12px 24px` `padding` for `.btn-primary` and `.btn-secondary`.
    5.  Always use `24px` `border-radius` for `.card` components.
    6.  Always use `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)` for card shadows.
    7.  Always use `8px 12px` `padding` for `.input-text` fields with a `10px` `border-radius`.
    8.  Always apply a `0px 0px 0px 2px rgba(0, 0, 0, 0.2)` focus ring to interactive elements.
    9.  Always use spacing values from the `4px` base scale: `4, 8, 12, 16, 20, 24, 48, 80` px.
    10. Always ensure `#000000` text on `#ffffff` background for main content (21:1 contrast).
    11. Always collapse main navigation into a hamburger menu below `1024px` viewport width.
    12. Always use `background-color: #333333` (inferred) for `.btn-primary:hover` state.
