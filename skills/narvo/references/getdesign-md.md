---
name: 'getdesign.md'
slug: getdesign-md
url: https://getdesign.md/
category: 'Dev Tools'
mode: dark
fonts:
  - 'Geist'
  - 'Geist Mono'
  - 'GeistPixel-Circle'
preview:
  bg: '#000000'
  fg: '#ededed'
  accent: '#ffb1ee'
summary: >-
  True-black canvas with a candy-pink accent and a pixel display cut alongside Geist.
colors:
  primary: '#ffb1ee'
  primary-button-bg: '#f5a623'
  primary-button-text: '#1a1400'
  background: '#000000'
  background-dark: '#111111'
  background-dark-secondary: '#292929'
  text-primary: '#ededed'
  text-muted: '#a0a0a0'
  text-secondary-muted: '#878787'
  surface: '#111111'
  border: '#2e2e2e'
  everyfeed-accent: '#c7ff00'
  input-bg-hover: 'rgba(255, 255, 255, 0.04)'
  input-focus-bg: 'rgba(255, 177, 238, 0.04)'
  input-focus-shadow: 'rgba(255, 177, 238, 0.12) 0px 0px 0px 3px'
typography:
  display:
    family: 'GeistPixel-Circle'
    size: 48px
    weight: 400
    line-height: 1.2
  heading:
    family: 'Geist'
    size: 26px
    weight: 400
    line-height: 1.2
  body:
    family: 'Geist'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Geist'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'Geist Mono'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 96]
radius:
  sm: 4px
  md: 6px
  lg: 10px
  full: 9999px
elevation:
  card: 'rgba(0, 0, 0, 0.16) 0px 10px 28px 0px'
  overlay: 'rgba(0, 0, 0, 0.45) 0px -16px 48px 0px'
motion:
  duration-fast: '150ms'
  duration-base: '200ms'
  easing-standard: 'ease-out'
components:
  button-primary:
    bg: '{colors.primary-button-bg}'
    text: '{colors.primary-button-text}'
    radius: '{radius.sm}'
    padding: '10px 16px'
  button-secondary:
    bg: '{colors.background-dark-secondary}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-primary}'
    radius: '{radius.full}'
    padding: '10px 16px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-muted}'
    border: '1px solid {colors.text-muted}'
    radius: '{radius.full}'
    padding: '6px 12px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.background-dark}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border}'
    radius: '{radius.sm}'
---

# Design System Inspired by getdesign.md

## 1. Visual Theme & Atmosphere
The getdesign.md aesthetic is a high-contrast dark mode, built on a deep `#000000` background with lighter `#111111` surfaces and bright `#ededed` text. A distinctive pixelated `GeistPixel-Circle` font is used for display headings, creating a retro-futuristic feel, while the modern `Geist` sans-serif handles body content. Subtle geometric background patterns and a vibrant `#ffb1ee` accent color provide visual interest without overwhelming the minimalist dark canvas. The site incorporates several CSS animations, including `marquee` effects and `heartbeat` pulses, adding dynamic flair to an otherwise static layout.

The overall atmosphere is one of sophisticated technical precision, emphasizing clarity and structured information presentation against a dark, immersive backdrop. Interactive elements are highlighted with a warm `#f5a623` primary action color and a playful `#ffb1ee` accent, guiding user attention effectively. Generous spacing and a clear typographic hierarchy ensure readability, while subtle transitions on hover states provide a polished user experience.

**Key Characteristics**:
- Dark theme with `#000000` background and `#111111` surfaces.
- Pixelated `GeistPixel-Circle` for display text (e.g., "DESIGN.md").
- `Geist` sans-serif for body text, primarily `#ededed` and `#a0a0a0`.
- Vibrant `#ffb1ee` accent for highlights and interactive elements.
- Primary CTA in warm `#f5a623` with `#1a1400` text.
- Subtle geometric background patterns and CSS animations.
- Rounded corners at `4px` and `6px` for interactive elements and cards.

## 2. Color Palette & Roles
The color palette is built around a dark background, ensuring high contrast for readability and a modern, tech-focused aesthetic.

-   **Primary**:
    -   `#ffb1ee` (primary) — Used for subtle highlights, interactive elements like the input focus ring, and as a general accent color. Defined as `--color-accent`.
    -   `#f5a623` (primary-button-bg) — The background color for the main call-to-action button, "Request a DESIGN.md".
    -   `#1a1400` (primary-button-text) — The text color specifically for the primary call-to-action button.

-   **Accent Colors**:
    -   `#c7ff00` (everyfeed-accent) — A vibrant green-yellow used for the "NEW EveryFeed" banner, indicating new features. Defined as `--color-everyfeed`.

-   **Interactive**:
    -   `rgba(255, 255, 255, 0.04)` (input-bg-hover) — A subtle white overlay for input fields on hover.
    -   `rgba(255, 177, 238, 0.04)` (input-focus-bg) — A light pink overlay for input fields when focused.
    -   `rgba(255, 177, 238, 0.12) 0px 0px 0px 3px` (input-focus-shadow) — The soft pink glow for the focus ring on input elements.

-   **Neutral Scale**:
    -   `#000000` (background) — The primary page background color, providing a deep, immersive dark canvas.
    -   `#111111` (background-dark) — Used for secondary backgrounds, such as the sidebar and card surfaces. Defined as `--color-panel`.
    -   `#292929` (background-dark-secondary) — A slightly lighter dark gray, used for secondary buttons and subtle background elements. Defined as `--color-gray-300`.
    -   `#383838` (background-dark-tertiary) — Another dark gray, used for subtle variations in background.
    -   `#ededed` (text-primary) — The main text color, providing high contrast on dark backgrounds. Defined as `--color-card-foreground` or `--color-gray-1000`.
    -   `#a0a0a0` (text-muted) — Secondary text color, used for descriptions and less prominent information. Defined as `--catalog-use-case-copy`.
    -   `#878787` (text-secondary-muted) — A slightly darker muted text color, used for tertiary information. Defined as `--color-muted-foreground`.
    -   `#666666` (text-tertiary-muted) — A darker gray for very subtle text elements.
    -   `#d4d4d4` (text-light-muted) — A lighter muted text color, occasionally used for contrast on slightly darker surfaces.

-   **Surface & Borders**:
    -   `#111111` (surface) — The background color for cards and panels.
    -   `#2e2e2e` (border) — A subtle dark gray for borders, providing separation without harsh lines. Defined as `--catalog-use-case-border`.

## 3. Typography Rules
-   **Font Family**:
    -   Primary: `Geist`, `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
    -   Display: `GeistPixel-Circle`, `sans-serif` (inferred)
    -   Monospace: `Geist Mono`, `"SFMono-Regular", Menlo, monospace`

-   **Hierarchy**:
    -   **Display**: `GeistPixel-Circle` `48px` `400` · line-height `1.2` · tracking `none` · Used for prominent hero headings.
    -   **H1**: `Geist` `26px` `400` · line-height `1.2` · tracking `none` · Used for section titles within the content.
    -   **Body**: `Geist` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptions.
    -   **Body Semibold**: `Geist` `16px` `600` · line-height `1.5` · tracking `none` · Used for emphasis within body text or short labels.
    -   **Caption**: `Geist` `12px` `400` · line-height `1.5` · tracking `none` · Used for metadata, small labels, and secondary information.
    -   **Small Caption**: `Geist` `10px` `400` · line-height `1.5` · tracking `none` · Used for very fine print or numerical data.
    -   **Code/Mono**: `Geist Mono` `12px` `400` · line-height `1.5` · tracking `none` · Used for code snippets or fixed-width data.

-   **Principles**:
    -   Prioritize `Geist` for all functional text, ensuring high readability on dark backgrounds.
    -   Reserve `GeistPixel-Circle` exclusively for large, impactful display text to maintain its unique character.
    -   Utilize `Geist Mono` for technical details and numerical data to clearly distinguish it from prose.
    -   Employ `600` weight for key interactive labels and `500` for secondary labels to guide attention.
    -   Maintain a generous line-height of `1.5` for body and caption text to enhance legibility.

## 4. Component Stylings

### Buttons

**Primary Button**
A prominent call-to-action button with a warm orange background and dark text, featuring slightly rounded corners.
```css
.button-primary {
  background-color: var(--color-primary-button-bg, #f5a623);
  color: var(--color-primary-button-text, #1a1400);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 600;
  padding: 10px 16px; /* inferred from screenshot */
  border: 1px solid transparent;
  border-radius: var(--radius-sm, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out),
              box-shadow var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.button-primary:hover {
  background-color: #e0991f; /* inferred from screenshot */
  box-shadow: 0 4px 12px rgba(0,0,0,0.2); /* inferred from screenshot */
}

.button-primary:active {
  background-color: #c7861b; /* inferred from screenshot */
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.2); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: #4a381e; /* inferred from screenshot */
  color: #7a6e5b; /* inferred from screenshot */
  cursor: not-allowed;
  box-shadow: none;
}
```

**Secondary Button**
A dark pill-shaped button with light text and a light border, used for secondary actions.
```css
.button-secondary {
  background-color: var(--color-background-dark-secondary, #292929);
  color: var(--color-text-primary, #ededed);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 10px 16px; /* inferred from screenshot */
  border: 1px solid var(--color-text-primary, #ededed);
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out),
              border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.button-secondary:hover {
  background-color: var(--color-background-dark, #111111); /* inferred from screenshot */
  border-color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-background, #000000); /* inferred from screenshot */
  border-color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--color-background-dark-tertiary, #383838); /* inferred from screenshot */
  color: var(--color-text-secondary-muted, #878787); /* inferred from screenshot */
  border-color: var(--color-text-secondary-muted, #878787); /* inferred from screenshot */
  cursor: not-allowed;
}
```

**Ghost Button**
A text-only button with muted text and a subtle border, often used for filters or less prominent actions.
```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-muted, #a0a0a0);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-text-muted, #a0a0a0); /* inferred from screenshot */
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out),
              border-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.button-ghost:hover {
  color: var(--color-text-primary, #ededed);
  border-color: var(--color-text-primary, #ededed);
}

.button-ghost:active {
  color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
  border-color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--color-text-tertiary-muted, #666666); /* inferred from screenshot */
  border-color: var(--color-text-tertiary-muted, #666666); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

**Standard Card**
A dark rectangular container with rounded corners and a subtle shadow, used for listing items or grouping content. Hover state adds a slight lift and increased shadow.
```css
.card {
  background-color: var(--color-surface, #111111);
  color: var(--color-text-primary, #ededed);
  border: none;
  border-radius: var(--radius-md, 6px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0.16) 0px 10px 28px 0px);
  padding: 16px; /* inferred from screenshot */
  transition: transform var(--motion-duration-base, 200ms) var(--motion-easing-standard, ease-out),
              box-shadow var(--motion-duration-base, 200ms) var(--motion-easing-standard, ease-out);
}

.card:hover {
  transform: translateY(-2px); /* inferred from screenshot */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 38px 0px; /* inferred from screenshot */
}
```

### Inputs & Forms

**Text Input**
A dark input field with a subtle border, featuring a soft white hover state and a pink focus ring.
```css
.input-text {
  background-color: var(--color-background-dark, #111111);
  color: var(--color-text-primary, #ededed);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #2e2e2e);
  border-radius: var(--radius-sm, 4px);
  transition: background-color var(--motion-duration-fast, 150ms),
              border-color var(--motion-duration-fast, 150ms),
              box-shadow var(--motion-duration-fast, 150ms);
}

.input-text:hover {
  background-color: var(--color-input-bg-hover, rgba(255, 255, 255, 0.04));
}

.input-text:focus,
.input-text:focus-visible {
  background-color: var(--color-input-focus-bg, rgba(255, 177, 238, 0.04));
  border-color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
  outline: none;
  box-shadow: var(--color-input-focus-shadow, rgba(255, 177, 238, 0.12) 0px 0px 0px 3px);
}

.input-text:disabled {
  background-color: var(--color-background-dark-tertiary, #383838); /* inferred from screenshot */
  color: var(--color-text-secondary-muted, #878787); /* inferred from screenshot */
  border-color: var(--color-text-tertiary-muted, #666666); /* inferred from screenshot */
  cursor: not-allowed;
}
```

**Form Label**
Muted text label for form fields, providing clear association without being visually dominant.
```css
.form-label {
  color: var(--color-text-muted, #a0a0a0);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 13px; /* inferred from screenshot */
  font-weight: 400;
  margin-bottom: var(--spacing-4, 4px); /* inferred from screenshot */
  display: block;
}
```

**Checkbox/Radio**
(none observed in source)

### Navigation

**Top Navigation Bar**
A sticky dark navigation bar at the top, providing global links and branding.
```css
.top-nav-bar {
  background-color: var(--color-background, #000000);
  border-bottom: 1px solid var(--color-border, #2e2e2e); /* inferred from screenshot */
  padding: 12px var(--spacing-24, 24px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
}
```

**Navigation Link**
Individual links within the navigation, typically muted text that brightens on hover and has an active state.
```css
.nav-link {
  color: var(--color-text-muted, #a0a0a0);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 4px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out),
              background-color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.nav-link:hover {
  color: var(--color-text-primary, #ededed);
  background-color: var(--color-background-dark-secondary, #292929); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-text-primary, #ededed);
  background-color: var(--color-background-dark, #111111); /* inferred from screenshot */
  font-weight: 500; /* inferred from screenshot */
}
```

**Dropdown Menu**
(none observed in source)

### Links

**Standard Link**
Inline text links, typically muted and underlined, brightening on hover.
```css
.standard-link {
  color: var(--color-text-muted, #a0a0a0);
  text-decoration: underline;
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 400;
  transition: color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.standard-link:hover {
  color: var(--color-text-primary, #ededed);
}

.standard-link:visited {
  color: var(--color-text-secondary-muted, #878787); /* inferred from screenshot */
}
```

**Secondary Link**
A link styled with the accent color, used for highlighting important references.
```css
.secondary-link {
  color: var(--color-primary, #ffb1ee);
  text-decoration: none;
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 16px;
  font-weight: 400;
  transition: color var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out),
              text-decoration var(--motion-duration-fast, 150ms) var(--motion-easing-standard, ease-out);
}

.secondary-link:hover {
  color: var(--color-text-primary, #ededed); /* inferred from screenshot */
  text-decoration: underline;
}

.secondary-link:visited {
  color: var(--color-primary, #ffb1ee); /* inferred from screenshot */
}
```

### Badges

**Status Badge - New**
A small, rounded badge indicating new content, using the accent color for text on a transparent background.
```css
.badge-new {
  background-color: transparent;
  color: var(--color-primary, #ffb1ee);
  font-family: var(--font-sans, "Geist", sans-serif);
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px; /* inferred from screenshot */
  border: 1px solid var(--color-primary, #ffb1ee); /* inferred from screenshot */
  border-radius: var(--radius-full, 9999px);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

## 5. Layout Principles
-   **Spacing System**:
    The spacing system is built on a `4px` base unit, providing a flexible yet consistent rhythm across the design.
    -   Base: `4px`
    -   Scale: `[4, 8, 12, 16, 24, 32, 40, 48, 64, 96]`
    -   Usage Context:
        -   `4px`: Smallest element spacing, e.g., between icon and text.
        -   `8px`: Default for inline element separation, minor vertical gaps.
        -   `12px`: Padding within smaller components like input fields.
        -   `16px`: Standard padding for cards and internal section elements.
        -   `24px`: Vertical spacing between distinct content blocks or major component padding.
        -   `32px`: Spacing between larger sections or groups of components.
        -   `40px`: Generous vertical separation for content areas.
        -   `48px`: Significant vertical spacing, often for hero sections.
        -   `64px`: Large section padding, providing ample breathing room.
        -   `96px`: Extra large spacing for hero sections or full-width content.

-   **Grid & Container** *(Suggested — not measured)*:
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max content width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from screenshot)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section padding: `0 64px` for desktop, collapsing to `0 24px` on mobile (inferred from screenshot)

-   **Whitespace Philosophy**:
    getdesign.md leverages a generous amount of dark whitespace, primarily using `#000000` as a canvas to make content pop. This ample negative space creates a sense of calm and focus, reducing visual clutter and emphasizing key information. Elements are clearly separated, allowing the eye to easily navigate the structured layout, contributing to a premium and precise feel.

-   **Border Radius Scale**:
    -   `sm`: `4px` — Used for interactive elements like buttons and input fields.
    -   `md`: `6px` — Applied to cards and larger containers for a soft, modern edge.
    -   `lg`: `10px` — Used for more prominent containers or unique visual elements.
    -   `full`: `9999px` — Creates pill-shaped elements, such as secondary buttons and badges.

## 6. Depth & Elevation
The elevation system is subtle, primarily using shadows to create depth on dark backgrounds, with a clear z-index hierarchy for stacking contexts.

-   **Flat (z-0)**: `none` — Default state for most background elements and static content.
-   **Card (z-1)**: `rgba(0, 0, 0, 0.16) 0px 10px 28px 0px` — Used for standard cards and list items, providing a subtle lift from the background.
-   **Interactive (z-10)**: `rgba(0, 0, 0, 0.25) 0px 14px 38px 0px` (inferred from screenshot) — Applied to interactive elements or cards on hover, suggesting a slight elevation.
-   **Section Overlay (z-20)**: `rgba(0, 0, 0, 0.45) 0px -16px 48px 0px` — Used for larger content sections that need to appear above others, like a hero element.
-   **Sticky Header (z-50)**: `0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a` (from `--shadow-md` inferred as sticky header shadow) — For sticky navigation bars that float above scrolling content.
-   **Modal/Dropdown (z-100)**: `rgba(0, 0, 0, 0.45) 0px 20px 60px 0px` (inferred from screenshot) — Reserved for modals, dropdowns, and other elements that require being on top of all other content.

**Shadow Philosophy**:
Shadows are used sparingly and subtly, primarily to give cards and interactive elements a sense of depth against the dark `#000000` background. The default card shadow is a soft, diffused dark shade, while interactive states introduce a slightly more pronounced shadow to indicate responsiveness. Higher z-index elements, like sticky headers or modals, utilize more opaque and larger shadows to clearly separate them from the underlying content.

## 7. Do's and Don'ts

### Do's
-   **Do** use `GeistPixel-Circle` `48px` `400` only for the primary display heading, "Give AI-built websites a real design with DESIGN.md".
-   **Do** ensure all body text uses `Geist` `16px` `400` with `#ededed` on `#000000` for a WCAG AAA ratio of 17.94.
-   **Do** apply the `primary-button-bg` `#f5a623` background with `primary-button-text` `#1a1400` for all primary calls-to-action.
-   **Do** maintain `16px` padding on all `card` components to ensure adequate content spacing.
-   **Do** use `4px` border-radius for buttons and `6px` for cards to keep a consistent visual language.
-   **Do** highlight interactive elements like the text input focus with the `#ffb1ee` accent color and `rgba(255, 177, 238, 0.12) 0px 0px 0px 3px` shadow.
-   **Do** use `text-muted` `#a0a0a0` on `background` `#000000` for secondary text, which has a WCAG AAA ratio of 8.03.
-   **Do** ensure all links use `text-muted` `#a0a0a0` and brighten to `text-primary` `#ededed` on `:hover`.
-   **Do** utilize the `everyfeed-accent` `#c7ff00` for "NEW" badges and similar feature highlights.
-   **Do** apply `background-dark` `#111111` to all card backgrounds, providing a clear visual separation from the main page background.

### Don'ts
-   **Don't** use `GeistPixel-Circle` for any text smaller than `48px` or for body content, as it loses readability.
-   **Don't** use `text-tertiary-muted` `#666666` on `background` `#000000` for essential information, as its WCAG AA-large ratio of 3.66 is insufficient for small text.
-   **Don't** introduce custom spacing values; adhere strictly to the `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `96px` scale.
-   **Don't** use hard `0px` border-radius on interactive elements; maintain `4px` or `6px` for a softer, modern feel.
-   **Don't** apply shadows to elements at `z-0` level; elevation should be intentional and follow the defined scale.
-   **Don't** use a text color darker than `text-muted` `#a0a0a0` for standard link text on `#000000` background.
-   **Don't** deviate from `background-dark-secondary` `#292929` for secondary button backgrounds.
-   **Don't** use `text-secondary-muted` `#878787` on `background` `#000000` for body text, as its WCAG AA ratio of 5.85 is too low for small text.
-   **Don't** use any other color than `border` `#2e2e2e` for subtle dividing lines or input field borders.
-   **Don't** animate elements without a `transition` property; ensure all interactive states have a `150ms` or `200ms` `ease-out` transition.

## 8. Responsive Behavior
-   **Breakpoints**:
    -   **Mobile Small** (~375px): Stacks all columns, reduces padding to `16px`.
    -   **Mobile Large** (~480px): Adjusts typography scale, simplifies navigation to a hamburger menu.
    -   **Tablet** (~768px): Allows for 2-column layouts, expands navigation to show key links.
    -   **Desktop** (~1024px): Full 12-column grid, standard typography and spacing.
    -   **Desktop Large** (~1440px): Maximizes content width for larger displays, maintains generous padding.

-   **Touch Targets**:
    -   Ensure all interactive elements, like buttons and links, have a minimum touch target size of `44px` by `44px`.
    -   Maintain at least `8px` of clear space between adjacent touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: Collapse the main navigation into a hamburger menu icon on mobile, revealing a full-screen overlay for links.
    -   **Cards**: Stack all `card` components vertically on mobile, removing any horizontal grid layouts.
    -   **Typography**: Reduce `display` font sizes on smaller screens (e.g., `48px` to `32px`) while maintaining hierarchy.
    -   **Padding**: Decrease horizontal `section padding` from `64px` to `24px` on tablet and `16px` on mobile.
    -   **Forms**: Expand input fields to full width within their container on mobile devices for easier interaction.
    -   **Spacing**: Condense larger spacing values (e.g., `64px` to `32px`) on mobile to optimize vertical screen real estate.

## 9. Agent Prompt Guide
-   **Quick Color Reference**:
    -   primary: `#ffb1ee`
    -   primary-button-bg: `#f5a623`
    -   primary-button-text: `#1a1400`
    -   background: `#000000`
    -   background-dark: `#111111`
    -   background-dark-secondary: `#292929`
    -   text-primary: `#ededed`
    -   text-muted: `#a0a0a0`
    -   text-secondary-muted: `#878787`
    -   surface: `#111111`
    -   border: `#2e2e2e`
    -   everyfeed-accent: `#c7ff00`
    -   input-bg-hover: `rgba(255, 255, 255, 0.04)`
    -   input-focus-bg: `rgba(255, 177, 238, 0.04)`
    -   input-focus-shadow: `rgba(255, 177, 238, 0.12) 0px 0px 0px 3px`

-   **Iteration Guide**:
    1.  Always use `primary-button-bg` `#f5a623` for main CTAs, with `primary-button-text` `#1a1400`.
    2.  Always set `GeistPixel-Circle` `48px` `400` for display headings and `Geist` `16px` `400` for body text.
    3.  Always apply spacing from the `4, 8, 12, 16, 24, 32, 40, 48, 64, 96` scale.
    4.  Always use `4px` radius for interactive elements and `6px` for cards/containers.
    5.  Always set card backgrounds to `surface` `#111111` with `elevation-card` shadow.
    6.  Always use `10px 16px` padding for primary and secondary buttons.
    7.  Always apply `input-focus-bg` and `input-focus-shadow` for text input focus states.
    8.  Always ensure navigation links brighten from `text-muted` to `text-primary` on hover.
    9.  Always use `z-50` for sticky headers and `z-100` for modals/dropdowns.
    10. Always ensure `text-primary` `#ededed` on `background` `#000000` has a contrast ratio of 17.94 (AAA).
    11. Always apply `duration-fast` `150ms` `ease-out` for micro-interactions like button hovers.
    12. Always stack content vertically on screens smaller than `768px`, maintaining `24px` horizontal padding.

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-08-06T11:53:52.140Z",
  "summary": {
    "unpairedBanned": 2,
    "bannedPhrase": 1,
    "total": 3
  },
  "warnings": [
    {
      "kind": "banned-phrase",
      "term": "technical precision",
      "sentence": "The overall atmosphere is one of sophisticated technical precision, emphasizing clarity and structured information presentation against a dark, immersive backdrop."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "sophisticated",
      "sentence": "The overall atmosphere is one of sophisticated technical precision, emphasizing clarity and structured information presentation against a dark, immersive backdrop."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "polished",
      "sentence": "Generous spacing and a clear typographic hierarchy ensure readability, while subtle transitions on hover states provide a polished user experience."
    }
  ]
}
-->
