---
name: 'Kast'
slug: kast
url: https://www.kast.xyz
category: 'Fintech'
mode: dark
fonts:
  - 'Instrument Sans'
preview:
  bg: '#000000'
  fg: '#ffffff'
  accent: '#3898ec'
summary: >-
  True-black crypto-card site. Instrument Sans Variable with glow-shadow button hovers.
colors:
  primary: '#3898ec'
  primary-hover-shadow: 'rgba(240, 210, 108, 0.6)'
  background: '#000000'
  background-alt: '#131313'
  text-primary: '#ffffff'
  text-secondary: '#a8a8aa'
  text-muted: '#cccccc'
  text-accent: '#1d9bf0'
  text-subtle: '#3e4961'
  surface: '#272727'
  surface-alt: '#3e3e40'
  border-neutral: '#676a79'
  border-primary: '#ffffff'
  border-secondary: '#404040'
  light-neutral: '#c9c7c5'
  button-hover-shadow-alt: 'rgba(203, 203, 223, 0.4)'
typography:
  display:
    family: 'Instrument Sans Variable'
    size: 48px
    weight: 700
    line-height: 1.1
  heading-xl:
    family: 'Instrument Sans Variable'
    size: 42px
    weight: 700
    line-height: 1.2
  heading-lg:
    family: 'Instrument Sans Variable'
    size: 32px
    weight: 700
    line-height: 1.2
  heading-md:
    family: 'Instrument Sans Variable'
    size: 22px
    weight: 400
    line-height: 1.5
  body:
    family: 'Instrument Sans Variable'
    size: 16px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'Instrument Sans Variable'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Instrument Sans Variable'
    size: 12px
    weight: 400
    line-height: 1.1
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96]
radius:
  sm: 4px
  md: 12px
  lg: 16px
  xl: 32px
  full: 9999px
elevation:
  card: 'rgba(21, 81, 109, 0.2) 0px 4px 20px 0px, rgba(0, 0, 0, 0.1) 0px 1px 16px 0px'
motion:
  duration-fast: '0.2s'
  duration-base: '0.3s'
  duration-slow: '0.5s'
  easing-standard: 'ease'
  easing-button: 'ease'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-primary}'
    radius: '{radius.xl}'
    padding: '12px 24px'
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border-neutral}'
    radius: '{radius.xl}'
    padding: '8px 20px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.lg}'
    shadow: '{elevation.card}'
---

# Design System Inspired by Kast

## 1. Visual Theme & Atmosphere
Kast presents a sophisticated, dark-themed financial technology platform, emphasizing stability and global reach. The aesthetic is built upon a deep black background (`#000000`) paired with crisp white typography (`#ffffff`) and a vibrant blue accent (`#3898ec`) that highlights interactive elements and key information. A recurring visual motif is the "glassmorphism" effect, where translucent, frosted surfaces (e.g., on cards and overlays) reveal blurred photographic backgrounds, creating a sense of depth and modernity. GSAP-driven animations provide smooth transitions and subtle interactive feedback, enhancing the premium feel without being distracting.

The brand's visual identity is defined by its strong contrast, clean sans-serif typography, and the strategic use of transparency and subtle shadows. Photography often features urban landscapes or individuals engaged in financial activities, frequently with a cool, desaturated palette that complements the dark interface. The overall impression is one of high-tech reliability and forward-thinking financial services, designed for a global, digitally native audience.

**Key Characteristics**
- Dark mode default with `#000000` background.
- Primary accent color: `#3898ec` for CTAs.
- Glassmorphism effect for cards and overlays.
- `Instrument Sans Variable` for all typography.
- GSAP-driven smooth UI transitions.
- Generous spacing, creating an airy, premium feel.
- Pill-shaped buttons with `{radius.xl}` (32px).

## 2. Color Palette & Roles
Kast's color palette is built on a dark foundation, designed for clarity and impact, with a strategic use of blue for interaction and emphasis.

-   **Primary**
    -   **Kast Blue** (`#3898ec`) — The brand's primary accent color, used for main call-to-action buttons, key interactive elements, and progress indicators.
-   **Accent Colors**
    -   **Twitter Blue** (`#1d9bf0`) — A secondary blue accent, used for specific links and subtle highlights, often seen in social media icons or specific text links.
-   **Interactive**
    -   **Primary Button Hover Shadow** (`rgba(240, 210, 108, 0.6)`) — A distinct yellow-gold glow applied to primary buttons on hover, indicating interactivity.
    -   **Secondary Button Hover Shadow** (`rgba(203, 203, 223, 0.4)`) — A subtle light blue-gray glow for secondary buttons on hover.
-   **Neutral Scale**
    -   **Background Black** (`#000000`) — The dominant background color for the entire application and website, providing a deep, immersive dark theme.
    -   **Dark Surface** (`#131313`) — Used for secondary section backgrounds and darker card elements, offering a slight visual differentiation from the absolute black.
    -   **Text Primary** (`#ffffff`) — The main text color for headings, body copy, and primary labels, ensuring maximum contrast on dark backgrounds.
    -   **Text Secondary** (`#a8a8aa`) — Used for descriptive text, subheadings, and less critical information, providing good readability while reducing visual prominence.
    -   **Text Muted** (`#cccccc`) — For subtle hints, footnotes, and disabled text, offering a lighter gray for tertiary information.
    -   **Text Subtle** (`#3e4961`) — A very dark gray, used sparingly for very muted text or specific UI elements where extreme subtlety is desired.
    -   **Card Surface** (`#272727`) — A slightly lighter dark gray used as the background for cards and containers, providing a distinct boundary.
    -   **Surface Alternate** (`#3e3e40`) — Another dark gray variant, used for specific interactive elements or backgrounds within components.
    -   **Light Neutral** (`#c9c7c5`) — A rare light gray, observed in specific non-interactive elements or subtle background textures.
-   **Surface & Borders**
    -   **Border Neutral** (`#676a79`) — A medium-dark gray used for button borders and subtle dividers, offering a clear but understated separation.
    -   **Border Primary** (`#ffffff`) — Used for strong borders or outlines where high contrast is required, often for active states or selected items.
    -   **Border Secondary** (`#404040`) — A darker gray for subtle borders, often within tables or complex components.

## 3. Typography Rules
-   **Font Family**: 'Instrument Sans Variable', Arial, sans-serif, system-ui. Monospace fallback: 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', monospace.
-   **Hierarchy**:
    -   **Display/H1**: `Instrument Sans Variable` `48px` `700` · line-height `1.1` · tracking `none` · Used for the primary hero section headline.
    -   **H1**: `Instrument Sans Variable` `42px` `700` · line-height `1.2` · tracking `none` · For major section titles, demanding immediate attention.
    -   **H2**: `Instrument Sans Variable` `32px` `700` · line-height `1.2` · tracking `none` · For sub-section headings and prominent feature titles.
    -   **H3**: `Instrument Sans Variable` `22px` `400` · line-height `1.5` · tracking `none` · For card titles, important callouts, or introductory paragraphs.
    -   **Body**: `Instrument Sans Variable` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text for readability.
    -   **Body Small**: `Instrument Sans Variable` `14px` `400` · line-height `1.5` · tracking `none` · For secondary information, descriptions, and table content.
    -   **Caption**: `Instrument Sans Variable` `12px` `400` · line-height `1.1` · tracking `none` · For footnotes, legal text, and metadata.
    -   **Code/Mono**: `SFMono-Regular`, `Menlo`, `Consolas`, `Liberation Mono`, `monospace` `14px` `400` · line-height `1.5` · tracking `none` · For displaying code or fixed-width content.
-   **Principles**
    -   Kast employs a singular, modern sans-serif typeface, `Instrument Sans Variable`, across all typographic elements to ensure a cohesive and professional brand voice.
    -   Hierarchy is primarily established through `font-size` and `font-weight`, with `700` (Bold) reserved for headings and `400` (Regular) for body text to maintain readability.
    -   Generous `line-height` values (1.1 to 1.5) are used to improve legibility, especially for longer blocks of text on the dark background.
    -   Display and heading sizes are intentionally large and bold to create strong visual impact and clearly articulate key messages.

## 4. Component Stylings

### Buttons
Kast utilizes distinct button styles: a prominent primary action button, a more subdued secondary button, and a ghost button for less emphasized actions. All buttons feature a pill-shaped border-radius and consistent typography.

#### Primary Button
A bold, blue button for primary actions, featuring white text and a distinct yellow-gold glow on hover.

```css
.button-primary {
  background-color: var(--color-primary, #3898ec);
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-xl, 32px);
  cursor: pointer;
  transition: box-shadow var(--motion-duration-slow, 0.5s) var(--motion-easing-button, ease), background-color var(--motion-duration-slow, 0.5s) var(--motion-easing-button, ease);
}

.button-primary:hover {
  background-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  box-shadow: 0px 0px 2.5rem var(--color-primary-hover-shadow, rgba(240, 210, 108, 0.6));
}

.button-primary:active {
  background-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3) (inferred from screenshot);
}

.button-primary:disabled {
  background-color: var(--color-border-neutral, #676a79); /* (inferred from screenshot) */
  color: var(--color-text-muted, #cccccc); /* (inferred from screenshot) */
  cursor: default;
  box-shadow: none;
}
```

#### Secondary Button
A transparent button with a subtle gray border and white text, used for secondary actions. It features a light blue-gray glow on hover.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 20px;
  border: 1px solid var(--color-border-neutral, #676a79);
  border-radius: var(--radius-xl, 32px);
  cursor: pointer;
  transition: box-shadow var(--motion-duration-slow, 0.5s) var(--motion-easing-button, ease), background-color var(--motion-duration-slow, 0.5s) var(--motion-easing-button, ease);
}

.button-secondary:hover {
  background-color: var(--color-surface-alt, #3e3e40); /* (inferred from screenshot) */
  box-shadow: 0px 0px 1rem var(--color-button-hover-shadow-alt, rgba(203, 203, 223, 0.4));
}

.button-secondary:active {
  background-color: var(--color-surface, #272727); /* (inferred from screenshot) */
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2) (inferred from screenshot);
}

.button-secondary:disabled {
  border-color: var(--color-border-secondary, #404040); /* (inferred from screenshot) */
  color: var(--color-text-muted, #cccccc); /* (inferred from screenshot) */
  cursor: default;
  box-shadow: none;
}
```

#### Ghost Button
Similar to the secondary button, but often with a lighter border or used in contexts where the background itself provides sufficient contrast.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 12px;
  font-weight: 400;
  padding: 0px 0px 0px 0px; /* (inferred from screenshot) */
  border: 1px solid var(--color-border-primary, #ffffff); /* (inferred from screenshot, based on extracted button data) */
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease), border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.button-ghost:hover {
  color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  border-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
}

.button-ghost:active {
  color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  border-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  transform: translateY(1px); /* (inferred from screenshot) */
}

.button-ghost:disabled {
  color: var(--color-text-muted, #cccccc); /* (inferred from screenshot) */
  border-color: var(--color-text-muted, #cccccc); /* (inferred from screenshot) */
  cursor: default;
}
```

### Cards & Containers
Cards are dark, rounded containers with a subtle shadow, often featuring a frosted glass effect on their internal content overlays.

#### Standard Card
A dark, rectangular container used for displaying features, updates, or content blocks. It has rounded corners and a subtle shadow, with a slight border color change on hover.

```css
.card {
  background-color: var(--color-surface, #272727);
  color: var(--color-text-primary, #ffffff);
  border: 1px solid transparent; /* (inferred from screenshot) */
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-card, rgba(21, 81, 109, 0.2) 0px 4px 20px 0px, rgba(0, 0, 0, 0.1) 0px 1px 16px 0px);
  padding: var(--spacing-lg, 24px); /* (inferred from screenshot) */
  transition: border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.card:hover {
  border-color: var(--color-border-neutral, #676a79); /* (inferred from screenshot) */
  box-shadow: var(--elevation-card, rgba(21, 81, 109, 0.2) 0px 4px 20px 0px, rgba(0, 0, 0, 0.1) 0px 1px 16px 0px); /* Shadow remains consistent (inferred from screenshot) */
}
```

### Inputs & Forms

#### Text Input
A dark input field with a subtle border, white text, and a distinct white outline on focus.

```css
.input-text {
  background-color: var(--color-background-alt, #131313); /* (inferred from screenshot) */
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px;
  border: 1px solid var(--color-border-secondary, #404040); /* (inferred from screenshot) */
  border-radius: var(--radius-sm, 4px);
  transition: border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease), box-shadow var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.input-text::placeholder {
  color: var(--color-text-secondary, #a8a8aa);
}

.input-text:focus {
  border-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  outline: 2px solid var(--color-primary, #3898ec); /* (inferred from screenshot) */
  box-shadow: 0 0 0 2px var(--color-primary, #3898ec); /* (inferred from screenshot) */
}

.input-text:disabled {
  background-color: var(--color-background-alt, #131313); /* (inferred from screenshot) */
  color: var(--color-text-muted, #cccccc);
  border-color: var(--color-border-secondary, #404040);
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, using a slightly muted white for clarity.

```css
.form-label {
  color: var(--color-text-secondary, #a8a8aa);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: var(--spacing-sm, 4px);
  display: block;
}
```

#### Checkbox/Radio
Custom-styled checkboxes and radio buttons (inferred), with a subtle transition for the checked state.

```css
.checkbox-container {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 8px); /* (inferred from screenshot) */
  cursor: pointer;
}

.checkbox-input {
  appearance: none;
  width: 18px; /* (inferred from screenshot) */
  height: 18px; /* (inferred from screenshot) */
  border: 1px solid var(--color-border-neutral, #676a79); /* (inferred from screenshot) */
  border-radius: var(--radius-sm, 4px);
  background-color: var(--color-background-alt, #131313); /* (inferred from screenshot) */
  position: relative;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease), border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.checkbox-input:checked {
  background-color: var(--color-primary, #3898ec);
  border-color: var(--color-primary, #3898ec);
}

.checkbox-input:checked::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 6px;
  width: 4px;
  height: 8px;
  border: solid var(--color-text-primary, #ffffff);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-input:focus {
  outline: 2px solid var(--color-primary, #3898ec); /* (inferred from screenshot) */
  outline-offset: 2px; /* (inferred from screenshot) */
}

.checkbox-input:disabled {
  background-color: var(--color-background-alt, #131313);
  border-color: var(--color-border-secondary, #404040);
  opacity: 0.6;
  cursor: not-allowed;
}
```

### Navigation

#### Top Navigation Bar
A sleek, dark navigation bar with white text links, positioned at the top of the page.

```css
.nav-bar {
  background-color: var(--color-background, #000000);
  padding: var(--spacing-md, 16px) var(--spacing-lg, 24px); /* (inferred from screenshot) */
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px; /* (inferred from screenshot) */
  position: sticky;
  top: 0;
  z-index: 100; /* (inferred from elevation.zIndexValues) */
}
```

#### Navigation Link
Individual links within the navigation bar, featuring white text and a subtle background change on hover.

```css
.nav-link {
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  padding: var(--spacing-sm, 8px) var(--spacing-md, 16px); /* (inferred from screenshot) */
  border-radius: var(--radius-sm, 4px); /* (inferred from screenshot) */
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease), color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.16);
  color: var(--color-text-primary, #ffffff);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  background-color: var(--color-primary, #3898ec); /* (inferred from screenshot) */
  color: var(--color-text-primary, #ffffff);
  font-weight: 500; /* (inferred from screenshot) */
}
```

#### Dropdown Menu
A dark, rounded dropdown menu for sub-navigation items (inferred).

```css
.dropdown-menu {
  background-color: var(--color-surface, #272727); /* (inferred from screenshot) */
  border-radius: var(--radius-md, 12px); /* (inferred from screenshot) */
  box-shadow: var(--elevation-card, rgba(21, 81, 109, 0.2) 0px 4px 20px 0px, rgba(0, 0, 0, 0.1) 0px 1px 16px 0px); /* (inferred from screenshot) */
  padding: var(--spacing-sm, 8px) 0;
  min-width: 180px; /* (inferred from screenshot) */
  z-index: 100; /* (inferred from screenshot) */
  transition: opacity var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease), transform var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.dropdown-menu-item {
  color: var(--color-text-primary, #ffffff);
  font-family: 'Instrument Sans Variable', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: var(--spacing-xs, 8px) var(--spacing-md, 16px);
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.dropdown-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1); /* (inferred from screenshot) */
}
```

### Links

#### Standard Link
Default text links, typically white on a dark background, with a subtle underline.

```css
.link-standard {
  color: var(--color-text-primary, #ffffff);
  text-decoration: underline;
  text-underline-offset: 2px; /* (inferred from screenshot) */
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease), text-decoration-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.link-standard:hover {
  color: var(--color-primary, #3898ec);
  text-decoration-color: var(--color-primary, #3898ec);
}

.link-standard:visited {
  color: var(--color-text-secondary, #a8a8aa); /* (inferred from screenshot) */
}
```

#### Secondary Link
Links used for less prominent actions or within descriptive text, often in a muted gray.

```css
.link-secondary {
  color: var(--color-text-secondary, #a8a8aa);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, ease);
}

.link-secondary:hover {
  color: var(--color-primary, #3898ec);
  text-decoration: underline; /* (inferred from screenshot) */
}

.link-secondary:visited {
  color: var(--color-text-muted, #cccccc); /* (inferred from screenshot) */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: Kast employs a `4px` base unit for its spacing system, creating a consistent rhythm across the interface.
    -   Base: `4px`
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96]`
    -   Usage Context:
        -   `4px`: Smallest internal spacing, e.g., between icon and text.
        -   `8px`: Compact spacing, between form elements or list items.
        -   `12px`: Standard padding for small components, e.g., button vertical padding.
        -   `16px`: Medium spacing, for internal component padding or grid gutters.
        -   `20px`: Button horizontal padding.
        -   `24px`: Section padding, vertical spacing between cards or major blocks.
        -   `32px`: Larger section padding, significant vertical separation.
        -   `48px`: Generous spacing, for hero sections or distinct content areas.
        -   `64px`: Large section breaks, creating visual breathing room.
        -   `80px`: Very large spacing, for hero sections or distinct content areas.
        -   `96px`: Maximum spacing for significant content breaks.
-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1344px` (corresponds to `84rem` from CSS variables)
    -   Columns: `12` (inferred from common web layouts)
    -   Gutter: `24px` (inferred from visual spacing)
    -   Section Padding: `32px` vertical, `24px` horizontal (inferred from `_sizes---padding--section` which is `2rem`).
-   **Whitespace Philosophy**: Kast utilizes generous whitespace, particularly vertical spacing, to create a sense of openness and highlight content. This approach minimizes visual clutter on the dark background, allowing elements to breathe and improving readability. Large margins and padding around sections and components contribute to a premium, uncluttered aesthetic, guiding the user's eye through the content.
-   **Border Radius Scale**:
    -   `sm` (`4px`): Smallest radius, used for input fields and subtle component rounding.
    -   `md` (`12px`): Medium radius, for dropdowns or smaller card-like elements.
    -   `lg` (`16px`): Standard card radius, providing a soft, modern edge.
    -   `xl` (`32px`): Large radius, prominently used for pill-shaped buttons and larger interactive elements.
    -   `full` (`9999px`): For perfectly circular elements like avatars or small badges.

## 6. Depth & Elevation
Kast employs a subtle elevation strategy, primarily using shadows to differentiate interactive elements and content cards from the dark background. The glassmorphism effect also contributes to perceived depth.

-   **Flat (z-0)**: `none` — Default background elements and static content.
-   **Card (z-1)**: `rgba(21, 81, 109, 0.2) 0px 4px 20px 0px, rgba(0, 0, 0, 0.1) 0px 1px 16px 0px` — Standard content cards and containers.
-   **Interactive (z-2)**: `0 0 1rem rgba(203, 203, 223, 0.4)` (inferred from pseudoStates) — Hovered buttons and interactive elements, creating a soft glow.
-   **Overlay (z-99)**: `none` (inferred) — QR code container, positioned above most content.
-   **Modal (z-100)**: `none` (inferred) — Navigation menu overlay, positioned at the highest stacking context for full-screen interactions.

**Shadow Philosophy**: Shadows are used sparingly and subtly, primarily to give cards a detached, floating appearance without being overly heavy. The primary interactive elements gain a distinct, colored glow on hover, providing clear feedback that an element is actionable. This combination of subtle depth and interactive highlights ensures a clean, modern interface.

## 7. Do's and Don'ts

### Do's
-   Use `{colors.primary}` (`#3898ec`) for all primary call-to-action buttons like "Get KAST" to ensure prominence.
-   Ensure body text uses `{colors.text-primary}` (`#ffffff`) on `{colors.background}` (`#000000`) for AAA contrast (21:1).
-   Apply `{radius.xl}` (`32px`) to all primary and secondary buttons for a consistent pill shape.
-   Maintain a minimum vertical spacing of `{spacing.lg}` (`24px`) between major content blocks.
-   Utilize `Instrument Sans Variable` `700` for all headings to establish strong hierarchy and impact.
-   Apply `{elevation.card}` shadow to all `{components.card}` instances for consistent depth.
-   Use `{colors.text-secondary}` (`#a8a8aa`) on `{colors.background-alt}` (`#131313`) for descriptive text, achieving AAA contrast (7.83:1).
-   Implement the `box-shadow` from `rgba(240, 210, 108, 0.6) 0px 0px 2.5rem` on Primary Button hover.
-   Ensure navigation links use `background-color: rgba(255, 255, 255, 0.16)` on hover for clear feedback.

### Don'ts
-   Avoid using `{colors.primary}` (`#3898ec`) directly as body text on `{colors.background}` (`#000000`) as its 3.06:1 ratio fails AA.
-   Do not use `{radius.sm}` (`4px`) on cards; prefer `{radius.lg}` (`16px`) or `{radius.xl}` (`32px`).
-   Introduce custom spacing values; stick strictly to the `{spacing.scale}` (e.g., `4px`, `8px`, `16px`).
-   Mix font families; `Instrument Sans Variable` is the sole typeface for all prose and headings.
-   Apply shadows to elements that are not cards or interactive components; maintain visual clarity.
-   Use `{colors.text-muted}` (`#cccccc`) on `{colors.background-alt}` (`#131313`) for critical information; its 5.42:1 ratio is only AA.
-   Change the `border-radius` of `{components.button-primary}` on hover or active states.
-   Use `Instrument Sans Variable` `500` for body text; `400` is preferred for readability.

## 8. Responsive Behavior *(Suggested — not measured)*
_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~479px): Layout shifts to single column; main navigation collapses to a hamburger menu.
    -   **Mobile Large** (~767px): Cards stack vertically; typography scales down for tighter screens.
    -   **Tablet** (~1023px): Two-column layouts may appear; larger touch targets are ensured.
    -   **Desktop** (~1280px): Full desktop layout with expanded navigation and multi-column grids.
    -   **Desktop Large** (~1440px): Wider content containers and increased horizontal padding.
-   **Touch Targets**:
    -   Interactive elements should have a minimum tap area of `44px` x `44px`.
    -   Maintain at least `8px` spacing between adjacent touch targets.
-   **Collapsing Strategy**:
    -   **Navigation**: Top-level navigation links collapse into a hamburger menu on screens below `768px`.
    -   **Cards**: Multi-column card layouts transition to a single-column stack on mobile.
    -   **Typography**: Display and heading font sizes scale down by `20-30%` on smaller viewports.
    -   **Padding**: Section padding reduces from `{spacing.lg}` (`24px`) to `{spacing.md}` (`16px`) on mobile.
    -   **Forms**: Multi-field form layouts become single-column for easier mobile input.
    -   **Spacing**: Vertical spacing between major sections may reduce by `25%` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   Primary: `#3898ec`
    -   Background: `#000000`
    -   Background Alt: `#131313`
    -   Text Primary: `#ffffff`
    -   Text Secondary: `#a8a8aa`
    -   Text Muted: `#cccccc`
    -   Text Accent: `#1d9bf0`
    -   Surface: `#272727`
    -   Border Neutral: `#676a79`
    -   Primary Button Hover Shadow: `rgba(240, 210, 108, 0.6)`
-   **Iteration Guide**
    1.  Always use `{colors.primary}` (`#3898ec`) for all main call-to-action buttons.
    2.  Ensure all body text is `Instrument Sans Variable` `16px` `400` with `{colors.text-primary}` (`#ffffff`).
    3.  Apply `{radius.xl}` (`32px`) to all primary and secondary buttons for a pill shape.
    4.  Maintain vertical spacing using `{spacing.scale}` values, prioritizing `24px` and `32px` for sections.
    5.  All cards should use `{colors.surface}` (`#272727`) background and `{elevation.card}` shadow.
    6.  Primary buttons must have `padding: 12px 24px` and a `box-shadow` of `rgba(240, 210, 108, 0.6) 0px 0px 2.5rem` on hover.
    7.  Input fields require a `2px` `{colors.primary}` (`#3898ec`) outline on `:focus`.
    8.  Navigation links should use `background-color: rgba(255, 255, 255, 0.16)` on hover.
    9.  The stacking order for overlays should be `z-index: 99` for QR codes and `z-index: 100` for main navigation menus.
    10. Ensure `#ffffff` text on `#000000` background (21:1) and `#a8a8aa` text on `#131313` background (7.83:1) for AAA contrast.
    11. Implement GSAP for all major UI animations and transitions.
    12. On mobile (`max-width: 767px`), collapse the main navigation into a hamburger menu and stack multi-column layouts.
