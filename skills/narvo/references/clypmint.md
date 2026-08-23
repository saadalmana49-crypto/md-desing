---
name: 'Clypmint'
slug: clypmint
url: https://clypmint.com
category: 'AI'
mode: dark
fonts:
  - 'Inter Tight'
  - 'JetBrains Mono'
preview:
  bg: '#020202'
  fg: '#f1f1f1'
  accent: '#e7c9a1'
summary: >-
  Near-black canvas with a champagne accent. Inter Tight over JetBrains Mono, hairline #242420 borders.
colors:
  primary: '#e7c9a1'
  accent-text: '#e08a6b'
  background-deep: '#020202'
  background-surface: '#0b0b0c'
  background-elevated: '#141416'
  text-on-dark: '#f1f1f1'
  text-muted-on-dark: '#8c8c88'
  text-faint-on-dark: '#56564f'
  border-dark: '#242420'
  link-hover-on-dark: '#ffffff'
  background-light: '#ffffff'
  text-on-light: '#111111'
  text-muted-on-light: '#8c8c88'
  button-google-bg: '#ffffff'
  button-google-text: '#111111'
  button-google-border: '#111111'
typography:
  display:
    family: 'Inter Tight'
    size: 82px
    weight: 600
    line-height: 1.2
  heading-h1:
    family: 'Inter Tight'
    size: 60px
    weight: 600
    line-height: 1.2
  heading-h2:
    family: 'Inter Tight'
    size: 25px
    weight: 600
    line-height: 1.2
  body:
    family: 'Inter Tight'
    size: 17px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'Inter Tight'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Inter Tight'
    size: 11px
    weight: 400
    line-height: 1.5
  code:
    family: 'JetBrains Mono'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32]
radius:
  xs: 3px
  sm: 5px
  md: 6px
  lg: 8px
  xl: 50px
  full: 999px
elevation:
  inset: 'rgba(0, 0, 0, 0.3) 0px 0px 0px 1px inset'
  accent-glow: 'rgb(231, 201, 161) 0px 0px 10px 0px'
  card: 'rgba(0, 0, 0, 0.45) 0px 18px 45px -35px'
  card-hover: 'rgba(0, 0, 0, 0.92) 0px 46px 84px -40px, rgba(86, 163, 224, 0.22) 0px 0px 54px -16px'
  modal: 'rgb(0, 0, 0) 0px 30px 60px -34px'
motion:
  duration-fast: '0.25s'
  duration-base: '0.35s'
  duration-slow: '0.45s'
  duration-nav-bg: '0.4s'
  easing-standard: 'cubic-bezier(0.2, 0.7, 0.2, 1)'
layout:
  max-width: '1240px'
  gutter: 'clamp(20px,5vw,64px)'
components:
  button-primary:
    bg: '{colors.background-dark-secondary}'
    text: '{colors.text-on-dark}'
    radius: '{radius.full}'
    padding: '15px 25px'
  card:
    bg: '{colors.background-dark-surface}'
    radius: '{radius.lg}'
    shadow: '{elevation.card}'
  input-text:
    bg: '{colors.background-dark-surface}'
    text: '{colors.text-on-dark}'
    border: '{colors.border-dark}'
    radius: '{radius.sm}'
---

# Design System Inspired by Clypmint

## 1. Visual Theme & Atmosphere

Clypmint employs a sophisticated, dark-themed aesthetic, centered around a video-driven experience. The primary visual identity is established through deep, dark backgrounds like `#020202` and `#111111`, contrasted by crisp `#f1f1f1` text and a warm accent hue of `#e7c9a1`. The hero section leverages large `Inter Tight` typography at `82px` and `60px` sizes, overlaid on autoplaying video footage of a desert landscape, creating an immersive and dynamic introduction. Subtle animations, including `lpRiseIn` for text and `lpHazeDrift` for atmospheric effects, enhance the interactive feel without distracting from the core message.

The design system is characterized by its emphasis on visual depth and micro-interactions. Elements like cards and buttons feature `rgba(0,0,0,0.45)` shadows and lift on hover, utilizing `cubic-bezier(0.2, 0.7, 0.2, 1)` easing for smooth transitions. A distinctive glassmorphism effect is present in certain containers, using `linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.012))` for background fills and `rgba(255,255,255,.12)` for edges. The content is structured within a `1240px` max-width container, maintaining a focused layout.

**Key Characteristics**
- Deep dark backgrounds like `#020202` with `#f1f1f1` text.
- Primary accent color: `#e7c9a1` (cream/gold).
- `Inter Tight` font for all primary typography.
- Prominent video elements and subtle CSS animations.
- Card elements lift and cast `rgba(0,0,0,0.92)` shadows on hover.
- Glassmorphic UI elements with transparent gradients.
- Generous `clamp(20px,5vw,64px)` horizontal gutter spacing.

## 2. Color Palette & Roles

Clypmint's color palette is built on a dark foundation, using a limited set of accent and neutral tones to ensure clarity and focus.

-   **Primary**
    -   `primary`: `#e7c9a1` (from `--accent` in `.lp`) — The main brand accent, used for subtle highlights, interactive elements, and key visual cues.
    -   `accent-text`: `#e08a6b` — A warm, reddish-orange accent specifically for text elements, providing a secondary highlight.

-   **Neutral Scale (Dark Mode Focused)**
    -   `background-deep`: `#020202` (from `--bg` in `.lp`) — The deepest background color, forming the base of the dark theme.
    -   `background-surface`: `#0b0b0c` (from `--bg-2` or `--card` in `.lp`) — Used for card backgrounds and other elevated surfaces, slightly lighter than the deep background.
    -   `background-elevated`: `#141416` (from `--bg-3` in `.lp`) — A slightly lighter dark background, used for components that need to stand out more.
    -   `text-on-dark`: `#f1f1f1` (from `--cream` in `.lp`) — The primary text color for readability on dark backgrounds.
    -   `text-muted-on-dark`: `#8c8c88` — Secondary text color, used for less prominent information or descriptions on dark backgrounds.
    -   `text-faint-on-dark`: `#56564f` (from `--faint` in `.lp`) — Very subtle text or decorative elements on dark backgrounds.
    -   `link-hover-on-dark`: `#ffffff` — The color for links when hovered over on dark backgrounds.

-   **Neutral Scale (Light Mode / Specific Elements)**
    -   `background-light`: `#ffffff` — Used for specific components like the "Continue with Google" button background.
    -   `text-on-light`: `#111111` — Primary text color when displayed on light backgrounds.
    -   `text-muted-on-light`: `#8c8c88` (inferred) — Muted text color when displayed on light backgrounds.

-   **Borders**
    -   `border-dark`: `#242420` (as a solid hex for frontmatter, actual CSS will use `var(--line, rgba(241,241,241,.12))`) — A subtle dark border color used for dividing elements or outlines.

-   **Interactive**
    -   `button-google-bg`: `#ffffff` — Background for the "Continue with Google" button.
    -   `button-google-text`: `#111111` — Text color for the "Continue with Google" button.
    -   `button-google-border`: `#111111` — Border color for the "Continue with Google" button.

## 3. Typography Rules

-   **Font Family**:
    -   Primary: `'Inter Tight', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol'`
    -   Monospace: `'JetBrains Mono', monospace`

-   **Hierarchy**:
    -   **Display**: `Inter Tight` `82px` `600` · line-height `1.2` · tracking `none` · Used for prominent hero headlines.
    -   **H1**: `Inter Tight` `60px` `600` · line-height `1.2` · tracking `none` · Main section titles.
    -   **H2**: `Inter Tight` `25px` `600` · line-height `1.2` · tracking `none` · Sub-section headings.
    -   **Body**: `Inter Tight` `17px` `400` · line-height `1.5` · tracking `none` · Primary text content.
    -   **Body Small**: `Inter Tight` `14px` `400` · line-height `1.5` · tracking `none` · Secondary text, captions, and smaller details.
    -   **Caption**: `Inter Tight` `11px` `400` · line-height `1.5` · tracking `none` · Smallest text for metadata or legal info.
    -   **Code/Mono**: `JetBrains Mono` `14px` `400` · line-height `1.5` · tracking `none` · For code snippets or technical text.

-   **Principles**
    -   Maintain high contrast by pairing `#f1f1f1` text with dark backgrounds like `#020202` for optimal readability.
    -   Utilize `Inter Tight` with `600` weight for all headings to establish a clear and consistent visual hierarchy.
    -   Employ `JetBrains Mono` exclusively for code-related content, ensuring clear distinction from body text.
    -   Ensure ample line-height of `1.5` for body text to improve legibility on dark themes.
    -   Reserve the largest display sizes (`82px`, `60px`) for the hero section to create immediate impact.

## 4. Component Stylings

### Buttons

Clypmint features distinct button styles for primary actions, secondary actions, and ghost-like interactive elements, all designed with a dark theme in mind and subtle hover effects.

#### Primary Button

A prominent call-to-action button with dark background and light text, featuring a subtle upward transform on hover.

```css
.btn-primary {
  background-color: var(--bg-2, #0b0b0c);
  color: var(--cream, #f1f1f1);
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 25px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), background 0.3s, color 0.3s;
}

.btn-primary:hover {
  transform: translateY(-4px); /* inferred from screenshot */
  background-color: var(--bg-3, #141416); /* inferred from screenshot */
  color: var(--cream, #f1f1f1);
}

.btn-primary:active {
  transform: translateY(-2px); /* inferred from screenshot */
  background-color: var(--bg-2, #0b0b0c); /* inferred from screenshot */
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

#### Secondary Button (Google)

A light-background button with dark text, used for alternative sign-in methods, also featuring a subtle transform on hover.

```css
.btn-secondary.btn-google {
  background-color: var(--cream, #f1f1f1);
  color: var(--bg-2, #0b0b0c);
  font-family: 'Inter Tight', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 25px;
  border: 1px solid var(--bg-2, #0b0b0c);
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), background 0.3s, color 0.3s, border-color 0.3s;
}

.btn-secondary.btn-google:hover {
  transform: translateY(-4px); /* inferred from screenshot */
  background-color: var(--bg-3, #141416); /* inferred from screenshot */
  color: var(--cream, #f1f1f1); /* inferred from screenshot */
  border-color: var(--bg-3, #141416); /* inferred from screenshot */
}

.btn-secondary.btn-google:active {
  transform: translateY(-2px); /* inferred from screenshot */
  background-color: var(--cream, #f1f1f1); /* inferred from screenshot */
  color: var(--bg-2, #0b0b0c); /* inferred from screenshot */
  border-color: var(--bg-2, #0b0b0c); /* inferred from screenshot */
}

.btn-secondary.btn-google:disabled {
  opacity: 0.6;
  cursor: wait;
  transform: none;
}
```

#### Ghost Button

A subtle button with a transparent background and a light border, used for secondary actions or informational links.

```css
.btn-ghost {
  background-color: var(--bg-3, #141416); /* from extracted button data */
  color: var(--cream, #f1f1f1);
  font-family: 'Inter Tight', sans-serif;
  font-size: 11px;
  font-weight: 400;
  padding: 5px 12px;
  border: 1px solid var(--cream, #f1f1f1);
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

.btn-ghost:hover {
  background-color: var(--accent, #e7c9a1); /* inferred from screenshot */
  color: var(--bg-2, #0b0b0c); /* inferred from screenshot */
  border-color: var(--accent, #e7c9a1); /* inferred from screenshot */
}

.btn-ghost:active {
  background-color: var(--accent-lo, #b08f5f); /* inferred from screenshot */
  color: var(--bg-2, #0b0b0c); /* inferred from screenshot */
  border-color: var(--accent-lo, #b08f5f); /* inferred from screenshot */
}

.btn-ghost:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

### Cards & Containers

Clypmint uses distinct card styles, including a standard dark card and a unique glassmorphic variant, both featuring elevation and hover effects.

#### Standard Card

A dark, elevated container for content, featuring a subtle shadow and a significant lift on hover.

```css
.card {
  background-color: var(--card, #0b0b0c);
  color: var(--cream, #f1f1f1);
  padding: 24px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 18px 45px -35px;
  transition: transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: rgba(0, 0, 0, 0.92) 0px 46px 84px -40px, rgba(86, 163, 224, 0.22) 0px 0px 54px -16px;
}
```

#### Glassmorphic Card

A translucent container with a frosted glass effect, featuring a subtle gradient fill and a distinct hover elevation.

```css
.glass-card {
  background: linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.012));
  backdrop-filter: blur(10px); /* inferred from screenshot */
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 8px;
  padding: 24px;
  color: var(--cream, #f1f1f1);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 10px 20px rgba(0,0,0,.3); /* inferred from screenshot */
  transition: transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.45s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.85),0 38px 66px -32px rgba(0,0,0,.7),0 10px 22px -14px rgba(26,56,102,.26);
}
```

### Inputs & Forms

Clypmint uses a dark-themed input field with a subtle border and a focus state highlighted by the accent color.

#### Text Input

A standard text input field designed for dark backgrounds, with a clear focus state.

```css
.text-input {
  background-color: var(--card, #0b0b0c);
  color: var(--cream, #f1f1f1);
  font-family: 'Inter Tight', sans-serif;
  font-size: 17px;
  font-weight: 400;
  padding: 12px 16px;
  border: 1px solid var(--line, rgba(241,241,241,.12));
  border-radius: 5px; /* inferred from screenshot */
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.text-input:focus {
  border-color: var(--accent, #e7c9a1); /* inferred from screenshot */
  outline: none;
  box-shadow: 0 0 0 2px rgba(231, 201, 161, 0.3); /* inferred from screenshot */
}

.text-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: var(--bg-3, #141416); /* inferred from screenshot */
}
```

#### Form Label

Labels for form fields, using a muted text color for clear association.

```css
.form-label {
  color: var(--faint, #56564f);
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  display: block;
}
```

#### Checkbox/Radio
(none observed in source)

### Navigation

Clypmint features a subtle top navigation bar with clear links and an active state.

#### Top Navigation Bar

A fixed top navigation bar that is transparent on the hero section and becomes slightly opaque with a blur effect when scrolled.

```css
.nav-bar {
  background-color: transparent; /* Initial state, inferred from screenshot */
  color: var(--cream, #f1f1f1);
  padding: 20px clamp(20px,5vw,64px); /* inferred from screenshot */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 60;
  border-bottom: 1px solid transparent;
  transition: background 0.4s ease-in-out, backdrop-filter 0.4s ease-in-out, border-color 0.4s ease-in-out, padding 0.4s ease-in-out;
}

.nav-bar.scrolled {
  background-color: rgba(2,2,2,0.8); /* inferred from screenshot */
  backdrop-filter: blur(10px); /* inferred from screenshot */
  border-color: var(--line, rgba(241,241,241,.12)); /* inferred from screenshot */
  padding: 12px clamp(20px,5vw,64px); /* inferred from screenshot */
}
```

#### Navigation Link

Individual links within the navigation bar, with a subtle color change on hover and for the active state.

```css
.nav-link {
  color: var(--cream, #f1f1f1);
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 3px; /* inferred from screenshot */
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;
}

.nav-link:hover {
  background-color: var(--bg-3, #141416); /* inferred from screenshot */
  color: var(--accent, #e7c9a1); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--accent, #e7c9a1);
  background-color: var(--bg-3, #141416); /* inferred from screenshot */
}
```

#### Dropdown Menu
(none observed in source)

### Links

Clypmint uses distinct link styles for standard text links and secondary, less prominent links.

#### Standard Link

Primary text links, often highlighted with the accent color or a lighter shade on hover.

```css
.standard-link {
  color: var(--accent, #e7c9a1); /* inferred from screenshot */
  text-decoration: none;
  transition: color 0.25s ease-in-out, text-decoration 0.25s ease-in-out;
}

.standard-link:hover {
  color: var(--link-hover-on-dark, #ffffff);
  text-decoration: underline; /* inferred from screenshot */
}

.standard-link:visited {
  color: var(--accent-text, #e08a6b); /* inferred from screenshot */
}
```

#### Secondary Link

Subtle links used for less critical information, often appearing as muted text.

```css
.secondary-link {
  color: var(--text-muted-on-dark, #8c8c88);
  font-family: 'Inter Tight', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.25s ease-in-out;
}

.secondary-link:hover {
  color: var(--cream, #f1f1f1); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.secondary-link:visited {
  color: var(--text-faint-on-dark, #56564f); /* inferred from screenshot */
}
```

### Badges

Clypmint uses small circular badges to indicate steps in a process, with a distinct active state.

#### Step Badge

Circular badges used to denote steps in a workflow, with a subtle border and a highlighted active state.

```css
.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px; /* inferred from screenshot */
  height: 24px; /* inferred from screenshot */
  border-radius: 999px;
  border: 1px solid var(--text-muted-on-dark, #8c8c88);
  color: var(--text-muted-on-dark, #8c8c88);
  font-family: 'Inter Tight', sans-serif;
  font-size: 11px;
  font-weight: 400;
  transition: border-color 0.25s ease-in-out, color 0.25s ease-in-out;
}

.step-badge.active {
  border-color: var(--cream, #f1f1f1);
  color: var(--cream, #f1f1f1);
}

.step-badge:hover {
  border-color: var(--accent, #e7c9a1); /* inferred from screenshot */
  color: var(--accent, #e7c9a1); /* inferred from screenshot */
}
```

## 5. Layout Principles

-   **Spacing System**: Clypmint utilizes a base unit of `4px` for its spacing system, creating a consistent rhythm across the interface.
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32]`
    -   Usage Context:
        -   `4px`: Smallest gaps, e.g., between icons and text.
        -   `8px`: Default spacing for inline elements, form labels to inputs.
        -   `12px`: Padding for smaller buttons, spacing within compact components.
        -   `16px`: Standard paragraph spacing, padding for text inputs.
        -   `20px`: Moderate spacing for lists or grouped items.
        -   `24px`: Padding for cards, vertical spacing between sections.
        -   `32px`: Larger vertical spacing, section internal padding.

-   **Grid & Container**:
    -   Max width: `1240px` (from `--maxw` in `.lp`) — Content is constrained to this maximum width for readability and aesthetic balance.
    -   Columns: 12-column grid (inferred from screenshot) — Provides flexibility for content arrangement across various breakpoints.
    -   Gutter: `clamp(20px,5vw,64px)` (from `--gut` in `.lp`) — Responsive horizontal spacing between grid columns and page edges.
    -   Section Padding: `64px` vertical, `clamp(20px,5vw,64px)` horizontal (inferred from screenshot) — Generous padding around main content sections.

-   **Whitespace Philosophy**: Clypmint embraces ample dark whitespace, particularly vertical spacing, to create a sense of calm and focus. This negative space allows the content, especially large typography and video elements, to breathe and stand out without feeling cluttered. It emphasizes a premium and intentional presentation, directing the user's eye to key information and interactive elements.

-   **Border Radius Scale**: Clypmint utilizes a precise border-radius scale to define the softness of its UI elements.
    -   `xs`: `3px` — For subtle rounding on small interactive elements or badges.
    -   `sm`: `5px` — Standard rounding for input fields and smaller components.
    -   `md`: `6px` — Used for cards and containers, providing a soft, modern edge.
    -   `lg`: `8px` — Larger rounding for more prominent cards or sections.
    -   `xl`: `50px` — For distinct, pill-shaped elements or large decorative corners.
    -   `full`: `999px` — Applied to buttons and circular elements for a fully rounded appearance.

## 6. Depth & Elevation

Clypmint uses a sophisticated layering system for its interface, combining z-index values with subtle shadows to create depth, particularly on its dark theme.

-   **Background Stage (z-minus-3)**: `none` — Used for the deepest background elements, such as the hero video stage.
-   **Hero Haze (z-minus-2)**: `none` — For atmospheric effects that appear behind primary content but above the deepest background.
-   **Hero Glint (z-minus-1)**: `none` — For subtle light effects positioned just behind the main hero content.
-   **Base Content (z-1)**: `none` — Default z-index for most page content and interactive elements, like general text blocks.
-   **Scroll Cue (z-2)**: `none` — For floating indicators that guide user interaction, such as scroll prompts.
-   **Hero Content (z-3)**: `none` — For the main interactive elements and text within the hero section, ensuring they are prominent.
-   **Clone Divider (z-4)**: `none` — Used for specific visual separators that need a higher stacking context within content areas.
-   **Navigation (z-60)**: `none` — The highest z-index, reserved for the fixed header navigation bar to ensure it always stays on top.

**Shadow Philosophy**: Clypmint's shadow philosophy leverages dark, diffused shadows to create a sense of subtle elevation on its dark backgrounds. Interactive elements like cards use `rgba(0,0,0,0.45)` shadows that deepen to `rgba(0,0,0,0.92)` on hover, paired with a `translateY` transform to simulate lifting off the surface. Specific accent glows, like `rgb(231, 201, 161) 0px 0px 10px 0px`, are used sparingly to highlight key elements, while inset shadows provide subtle internal definition. Modal elements utilize a strong `rgb(0, 0, 0) 0px 30px 60px -34px` shadow to clearly separate them from the underlying content.

## 7. Do's and Don'ts

### Do's

-   **Do** use `Inter Tight` with `600` weight for all headings to maintain a strong typographic hierarchy.
-   **Do** ensure primary body text uses `#f1f1f1` on `#020202` backgrounds, achieving an 18.37:1 contrast ratio (AAA).
-   **Do** apply `translateY(-4px)` and `rgba(0,0,0,0.92)` shadow to Cards on hover for consistent elevation feedback.
-   **Do** use `padding: 15px 25px` for Primary Buttons to ensure adequate touch target size and visual weight.
-   **Do** highlight interactive elements with `primary` (`#e7c9a1`) on hover or focus, like Navigation Links.
-   **Do** maintain `border-radius: 999px` for all main buttons to give them a distinct pill shape.
-   **Do** use `JetBrains Mono` for any code-like text, ensuring it is `14px` in size for readability.
-   **Do** use `rgba(255,255,255,.05)` to `rgba(255,255,255,.012)` gradient for glassmorphic backgrounds.
-   **Do** use `text-muted-on-dark` (`#8c8c88`) for secondary text on `#020202` backgrounds (6.15:1 ratio, AA).

### Don'ts

-   **Don't** use `#e08a6b` on `#ffffff` backgrounds; its 2.62:1 ratio fails AA contrast standards.
-   **Don't** introduce spacing values outside the `[0, 4, 8, 12, 16, 20, 24, 32]` scale for new elements.
-   **Don't** mix `Inter Tight` with other sans-serif fonts for headings or body text.
-   **Don't** use `#f1f1f1` text on `#ffffff` backgrounds; its 1.13:1 ratio fails AA contrast standards.
-   **Don't** apply `box-shadow` values other than the defined `elevation.card` or `elevation.modal` for containers.
-   **Don't** use `font-weight: 600` for `body` text; reserve it for `heading-h1` and `heading-h2` roles.
-   **Don't** use `border-radius` values other than `3px`, `5px`, `6px`, `8px`, `50px`, or `999px`.
-   **Don't** use `text-faint-on-dark` (`#56564f`) for critical information on `background-deep` (`#020202`).
-   **Don't** apply `text-decoration: underline` to Standard Links in their default state.

## 8. Responsive Behavior

_Note: breakpoints below are from the source's actual media queries. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Tablet Large** (~1000px): Navigation may condense, and grid layouts shift to fewer columns.
    -   **Tablet Medium** (~820px): Primary hero text may reduce in size from `82px` to `60px`.
    -   **Tablet Small** (~700px): Card layouts often stack vertically, and section padding might decrease.
    -   **Mobile Large** (~640px): Navigation typically collapses into a hamburger menu.
    -   **Mobile Small** (~480px): Typography sizes reduce further, and horizontal padding becomes more constrained.

-   **Touch Targets**:
    -   Minimum size: Ensure interactive elements like buttons and links are at least `44px` by `44px` (inferred).
    -   Minimum spacing: Maintain at least `12px` of clear space between touch targets (inferred).

-   **Collapsing Strategy**:
    -   **Navigation**: At `max-width: 640px`, top navigation links collapse into a hamburger menu icon.
    -   **Cards**: Multi-column card layouts transition to single-column stacking below `max-width: 700px`.
    -   **Typography**: Display and heading font sizes (`82px`, `60px`) dynamically scale down on smaller viewports.
    -   **Padding**: Horizontal section padding (`clamp(20px,5vw,64px)`) reduces to `20px` on mobile.
    -   **Forms**: Multi-input form rows stack vertically on viewports below `max-width: 700px`.
    -   **Spacing**: Larger spacing values (`24px`, `32px`) may be reduced to `16px` or `20px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#e7c9a1`
    -   `accent-text`: `#e08a6b`
    -   `background-deep`: `#020202`
    -   `background-surface`: `#0b0b0c`
    -   `background-elevated`: `#141416`
    -   `text-on-dark`: `#f1f1f1`
    -   `text-muted-on-dark`: `#8c8c88`
    -   `text-faint-on-dark`: `#56564f`
    -   `border-dark`: `#242420`
    -   `link-hover-on-dark`: `#ffffff`
    -   `background-light`: `#ffffff`
    -   `text-on-light`: `#111111`
    -   `button-google-bg`: `#ffffff`
    -   `button-google-text`: `#111111`
    -   `button-google-border`: `#111111`

-   **Iteration Guide**
    1.  Always use `Inter Tight` for all text roles, with `JetBrains Mono` for code.
    2.  Ensure CTAs use `background-dark-secondary` (`#111111`) with `text-on-dark` (`#f1f1f1`) and `radius.full` (`999px`).
    3.  Apply `padding: 15px 25px` to primary action buttons.
    4.  Maintain `text-on-dark` (`#f1f1f1`) on `background-deep` (`#020202`) for AAA contrast.
    5.  Utilize the `[0, 4, 8, 12, 16, 20, 24, 32]` spacing scale for all layout and component spacing.
    6.  Default card backgrounds should be `background-dark-surface` (`#0b0b0c`) with `radius.lg` (`8px`).
    7.  Implement `transform: translateY(-4px)` and `elevation.card-hover` on card hover states.
    8.  Text inputs should have a `border: 1
