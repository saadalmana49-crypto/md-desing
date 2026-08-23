---
name: 'Zed'
slug: zed
url: https://zed.dev
category: 'Dev Tools'
mode: dual
fonts:
  - 'Writer'
  - 'IBM Plex Serif'
  - 'Zed Mono'
preview:
  bg: '#ffffff'
  fg: '#242529'
  accent: '#5c78e2'
summary: >-
  An editor site that reads like a document — serif and mono pairing, periwinkle #5c78e2 accent, paired dark theme.
colors:
  primary: '#5c78e2'
  primary-light: '#e2e2fa'
  primary-hover: '#4b67d0' # Inferred from screenshot
  background: '#ffffff'
  surface: '#fafafa'
  neutral-light: '#ebebec'
  border: '#dcdcdd'
  text-primary: '#242529'
  text-secondary: '#58585a'
  text-muted: '#b4b4bb'
  text-dark-secondary: '#4d4f52'
  text-link: '#3882b7'
  text-purple: '#a449ab'
  text-red: '#b92b46'
  text-orange: '#d3604f'
  text-green: '#649f57'
  text-gray: '#a2a3a7'
  error: '#ff5c57'
  warning: '#ffbb2e'
  dark-background: '#3b414dff'
  dark-text: '#d0d4da'
  dark-border: '#464b57ff'
typography:
  display:
    family: 'plexSerif'
    size: 48px
    weight: 400
    line-height: 1.2
  heading-1:
    family: 'plexSerif'
    size: 48px
    weight: 400
    line-height: 1.2
  heading-2:
    family: 'plexSerif'
    size: 32px
    weight: 400
    line-height: 1.2 # Inferred
  heading-3:
    family: 'plexSerif'
    size: 24px
    weight: 400
    line-height: 1.2 # Inferred
  body:
    family: 'writer'
    size: 16px
    weight: 400
    line-height: 1.2
  caption:
    family: 'writer'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'zedMono'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 64]
radius:
  sm: 2px
  md: 4px
  lg: 6px
  full: 9999px # Inferred from 33554400
elevation:
  button-primary: 'rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px'
  card-hover: 'rgba(7, 77, 207, 0.04) 6px 6px 0px 0px'
  inset-border-blue: 'rgba(102, 139, 204, 0.1) 0px -2px 0px 0px inset'
  inset-border-gray: 'rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset'
  modal: 'oklab(0.642147 -0.00263254 -0.0210819 / 0.5) 0px 20px 25px -5px, oklab(0.642147 -0.00263254 -0.0210819 / 0.5) 0px 8px 10px -6px'
motion:
  duration-fast: '80ms'
  duration-normal: '150ms'
  duration-slow: '200ms'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  easing-in-out: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  easing-out: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  easing-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.background}'
    radius: '{radius.md}'
    padding: '8px 16px'
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border}'
    radius: '{radius.md}'
    padding: '8px 16px'
  card:
    bg: '{colors.surface}'
    text: '{colors.text-primary}'
    radius: '{radius.md}'
    shadow: '{elevation.card-hover}'
  input:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border}'
    radius: '{radius.sm}'
    padding: '8px 12px'
---

# Design System Inspired by Zed

## 1. Visual Theme & Atmosphere
Zed's design system conveys precision and high performance, characteristic of a developer tool. The primary aesthetic is clean and functional, built upon a subtle grid background pattern (`#ebebec` on `#ffffff`) that provides a structured yet airy feel. Prominent use of the brand blue (`#5c78e2`) for calls-to-action and interactive elements injects a focused energy, while the `plexSerif` typeface for display text establishes a distinct, authoritative voice. Code editor screenshots, showcasing syntax highlighting and a dark mode variant, are a signature visual element, reinforcing the product's core identity.

The visual atmosphere is one of understated sophistication, prioritizing clarity and efficiency. Generous whitespace, particularly 64px section padding, ensures content is easily digestible. Subtle CSS animations and canvas-driven elements (such as the hero section) add a dynamic, modern touch without distracting from the primary goal of showcasing a powerful development tool. The overall impression is professional, reliable, and meticulously crafted, reflecting the product's promise of a "last next editor."

**Key Characteristics:**
- Grid-based layout with `#ebebec` background tint.
- `plexSerif` for display, `writer` for body text.
- Primary brand blue (`#5c78e2`) for interactive elements.
- Subtle shadows and `4px` rounded corners.
- Code editor UI as a central visual motif.
- Generous use of 64px vertical spacing.
- Subtle CSS and canvas animations.

## 2. Color Palette & Roles
Zed's color palette is designed for clarity and a developer-centric interface, balancing a vibrant primary blue with a comprehensive neutral scale and specific accent colors for semantic feedback.

-   **Primary**
    -   `primary` (`#5c78e2`) — The core brand blue, used for primary calls-to-action, active states, and key interactive elements.
    -   `primary-light` (`#e2e2fa`) — A lighter tint of the primary blue, used for subtle backgrounds or secondary accents.
    -   `primary-hover` (`#4b67d0`) — A slightly darker shade of the primary blue, used for hover states on interactive elements (inferred from screenshot).

-   **Accent Colors**
    -   `error` (`#ff5c57`) — A bright red, used for error messages or destructive actions.
    -   `warning` (`#ffbb2e`) — A vibrant yellow, used for warnings or important notifications.
    -   `text-purple` (`#a449ab`) — A purple accent, used for specific text highlights or code syntax.
    -   `text-red` (`#b92b46`) — A red accent, used for specific text highlights or code syntax.
    -   `text-orange` (`#d3604f`) — An orange accent, used for specific text highlights or code syntax.
    -   `text-green` (`#649f57`) — A green accent, used for specific text highlights or code syntax.
    -   `text-gray` (`#a2a3a7`) — A neutral gray accent, used for secondary text highlights or code syntax.

-   **Interactive**
    -   `text-link` (`#3882b7`) — A distinct blue for standard hyperlinks.

-   **Neutral Scale**
    -   `text-primary` (`#242529`) — The darkest text color, used for main headings and primary content.
    -   `text-secondary` (`#58585a`) — A medium gray for secondary text, descriptions, and less prominent information.
    -   `text-dark-secondary` (`#4d4f52`) — A slightly darker medium gray, used for specific text blocks.
    -   `text-muted` (`#b4b4bb`) — A light gray for tertiary text, timestamps, or disabled states.
    -   `background` (`#ffffff`) — The main page background.
    -   `surface` (`#fafafa`) — A slightly off-white, used for cards, sections, and content containers.
    -   `neutral-light` (`#ebebec`) — A very light gray, used for subtle background tints or dividers.

-   **Surface & Borders**
    -   `border` (`#dcdcdd`) — A light gray, used for subtle borders, dividers, and input outlines.

-   **Dark Mode (Inferred from CSS Variables)**
    -   `dark-background` (`#3b414dff`) — A dark gray for the background in dark theme.
    -   `dark-text` (`#d0d4da`) — A light gray for text on dark backgrounds.
    -   `dark-border` (`#464b57ff`) — A darker gray for borders in dark theme.

## 3. Typography Rules
-   **Font Family**:
    -   Primary Display: `'plexSerif', serif`
    -   Primary Body: `'writer', system-ui, -apple-system, sans-serif`
    -   Monospace/Code: `'zedMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
-   **Hierarchy**:
    -   **Display/H1**: `plexSerif` `48px` `400` · line-height `1.2` · tracking `none` · Used for prominent hero headlines.
    -   **H2**: `plexSerif` `32px` `400` · line-height `1.2` · tracking `none` · Used for major section titles (inferred).
    -   **H3**: `plexSerif` `24px` `400` · line-height `1.2` · tracking `none` · Used for sub-section titles (inferred).
    -   **H4**: `writer` `16px` `400` · line-height `1.2` · tracking `none` · Used for card titles or feature headings (inferred).
    -   **Body**: `writer` `16px` `400` · line-height `1.2` · tracking `none` · Standard paragraph text.
    -   **Small**: `writer` `14px` `400` · line-height `1.2` · tracking `none` · Used for secondary descriptions (inferred).
    -   **Caption**: `writer` `12px` `400` · line-height `1.5` · tracking `none` · Used for metadata, timestamps, or subtle hints.
    -   **Code/Mono**: `zedMono` `12px` `400` · line-height `1.5` · tracking `none` · Used for code snippets, editor content, and technical details.
-   **Principles**:
    -   Use `plexSerif` exclusively for headlines to establish a distinct brand voice, reserving `writer` for all body text.
    -   Maintain a tight line-height of 1.2 for display and heading text, expanding to 1.5 for body and caption text for readability.
    -   Prioritize `400` (Normal) weight across most text elements, with `500` (Medium) reserved for subtle emphasis in UI elements.
    -   Employ `zedMono` consistently for all code-related content, ensuring a clear distinction from prose.
    -   Vary font sizes minimally for body text, primarily using `16px` for readability and `12px` for supporting information.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent blue button for primary calls-to-action, featuring white text and a subtle inset shadow for depth. On hover, the background darkens slightly.

```css
.button-primary {
  background-color: var(--colors-primary, #5c78e2);
  color: var(--colors-background, #ffffff);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 16px; /* Inferred from screenshot */
  font-weight: 400;
  padding: 8px 16px; /* Inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--elevation-button-primary, rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px);
  cursor: pointer;
  transition: background-color var(--motion-duration-normal, 150ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--motion-duration-normal, 150ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #4b67d0); /* Inferred from screenshot */
  box-shadow: var(--elevation-button-primary-hover, rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 2px 6px 0px); /* Inferred from screenshot */
}

.button-primary:active {
  background-color: var(--colors-primary, #5c78e2); /* Inferred to return to base */
  box-shadow: var(--elevation-button-primary-active, rgb(5, 55, 148) 0px -1px 0px 0px inset, rgb(230, 239, 254) 0px 0px 1px 0px); /* Inferred from screenshot */
  transform: translateY(1px); /* Inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
  color: var(--colors-text-muted, #b4b4bb); /* Inferred from screenshot */
  box-shadow: none;
  cursor: not-allowed;
}
```

#### Secondary Button
An outline button with dark text, used for less prominent actions or alternatives. It has a light gray border that darkens slightly on hover.

```css
.button-secondary {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #242529);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 16px; /* Inferred from screenshot */
  font-weight: 400;
  padding: 8px 16px; /* Inferred from screenshot */
  border: 1px solid var(--colors-border, #dcdcdd);
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: border-color var(--motion-duration-normal, 150ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              background-color var(--motion-duration-normal, 150ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  border-color: var(--colors-text-muted, #b4b4bb); /* Inferred from screenshot */
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
  border-color: var(--colors-text-muted, #b4b4bb); /* Inferred from screenshot */
  transform: translateY(1px); /* Inferred from screenshot */
}

.button-secondary:disabled {
  color: var(--colors-text-muted, #b4b4bb); /* Inferred from screenshot */
  border-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
  background-color: var(--colors-background, #ffffff);
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button for tertiary actions, often used within navigation or as subtle prompts. It gains a subtle background on hover.

```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #242529);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 14px; /* Inferred from screenshot */
  font-weight: 400;
  padding: 4px 8px; /* Inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:hover {
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
  color: var(--colors-text-primary, #242529);
}

.button-ghost:active {
  background-color: var(--colors-border, #dcdcdd); /* Inferred from screenshot */
  transform: translateY(1px); /* Inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-text-muted, #b4b4bb); /* Inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

#### Standard Card
A content container with a light background and subtle rounded corners. On hover, it gains an offset shadow, suggesting interactivity.

```css
.card {
  background-color: var(--colors-surface, #fafafa);
  color: var(--colors-text-primary, #242529);
  padding: 24px; /* Inferred from screenshot */
  border: 1px solid var(--colors-border, #dcdcdd);
  border-radius: var(--radius-md, 4px);
  box-shadow: none;
  transition: box-shadow var(--motion-duration-normal, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.card:hover {
  box-shadow: var(--elevation-card-hover, rgba(7, 77, 207, 0.04) 6px 6px 0px 0px);
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light background and a subtle border. It features a distinct blue focus ring for accessibility.

```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #242529);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 16px; /* Inferred from screenshot */
  font-weight: 400;
  padding: 8px 12px; /* Inferred from screenshot */
  border: 1px solid var(--colors-border, #dcdcdd);
  border-radius: var(--radius-sm, 2px);
  transition: border-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              box-shadow var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.input-text::placeholder {
  color: var(--colors-text-muted, #b4b4bb);
}

.input-text:focus {
  border-color: var(--colors-primary, #5c78e2);
  outline: none;
  box-shadow: 0 0 0 2px var(--colors-primary-light, #e2e2fa); /* Inferred focus ring */
}

.input-text:disabled {
  background-color: var(--colors-neutral-light, #ebebec);
  color: var(--colors-text-muted, #b4b4bb);
  border-color: var(--colors-border, #dcdcdd);
  cursor: not-allowed;
}
```

#### Form Label
Standard label for form fields, using the secondary text color for clarity.

```css
.form-label {
  color: var(--colors-text-secondary, #58585a);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 14px; /* Inferred from screenshot */
  font-weight: 400;
  margin-bottom: var(--spacing-4, 4px);
  display: block;
}
```

#### Checkbox/Radio
Custom styled checkbox/radio inputs with a square shape and primary blue fill when checked.

```css
.checkbox-radio {
  appearance: none;
  width: 16px; /* Inferred from screenshot */
  height: 16px; /* Inferred from screenshot */
  border: 1px solid var(--colors-border, #dcdcdd);
  border-radius: var(--radius-sm, 2px);
  background-color: var(--colors-background, #ffffff);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              border-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.checkbox-radio::before {
  content: '';
  display: block;
  width: 8px; /* Inferred from screenshot */
  height: 8px; /* Inferred from screenshot */
  border-radius: 1px; /* Inferred from screenshot */
  background-color: var(--colors-background, #ffffff); /* Inferred from screenshot */
  transform: scale(0);
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-spring, cubic-bezier(0.34, 1.56, 0.64, 1));
}

.checkbox-radio:checked {
  background-color: var(--colors-primary, #5c78e2);
  border-color: var(--colors-primary, #5c78e2);
}

.checkbox-radio:checked::before {
  transform: scale(1);
}

.checkbox-radio:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--colors-primary-light, #e2e2fa); /* Inferred focus ring */
}

.checkbox-radio:disabled {
  background-color: var(--colors-neutral-light, #ebebec);
  border-color: var(--colors-border, #dcdcdd);
  cursor: not-allowed;
}
```

### Navigation

#### Top Navigation Bar
A clean, horizontally aligned navigation bar with a white background and subtle bottom border.

```css
.nav-top-bar {
  background-color: var(--colors-background, #ffffff);
  border-bottom: 1px solid var(--colors-border, #dcdcdd);
  padding: 16px 64px; /* Inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
```

#### Navigation Link
Standard text links within the navigation, using `text-primary` color and darkening slightly on hover.

```css
.nav-link {
  color: var(--colors-text-primary, #242529);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 14px; /* Inferred from screenshot */
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* Inferred from screenshot */
  border-radius: var(--radius-md, 4px);
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
  color: var(--colors-text-primary, #242529);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #5c78e2); /* Inferred from screenshot */
  font-weight: 500; /* Inferred from screenshot */
  background-color: var(--colors-primary-light, #e2e2fa); /* Inferred from screenshot */
}
```

#### Dropdown Menu
A simple dropdown menu for navigation items, with a white background and subtle border/shadow.

```css
.dropdown-menu {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border, #dcdcdd);
  border-radius: var(--radius-md, 4px);
  box-shadow: 0px 2px 8px rgba(0,0,0,0.08); /* Inferred from screenshot */
  padding: 8px 0;
  min-width: 160px; /* Inferred from screenshot */
  position: absolute;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity var(--motion-duration-normal, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1)),
              transform var(--motion-duration-normal, 150ms) var(--motion-easing-out, cubic-bezier(0.215, 0.61, 0.355, 1));
}

.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--colors-text-primary, #242529);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 14px; /* Inferred from screenshot */
  font-weight: 400;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  transition: background-color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--colors-neutral-light, #ebebec); /* Inferred from screenshot */
}
```

### Links

#### Standard Link
Default text links, using the `text-link` blue color and an underline on hover.

```css
.link-standard {
  color: var(--colors-text-link, #3882b7);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 16px; /* Inferred from screenshot */
  font-weight: 400;
  text-decoration: none;
  transition: text-decoration var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-standard:hover {
  text-decoration: underline;
  color: var(--colors-text-link, #3882b7); /* Stays same */
}

.link-standard:visited {
  color: var(--colors-text-link, #3882b7); /* Inferred to be the same as standard */
}
```

#### Secondary Link
A more subtle link, often used for "Learn More" or "View All" actions, using `text-secondary` color and an arrow icon.

```css
.link-secondary {
  color: var(--colors-text-secondary, #58585a);
  font-family: var(--typography-body-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 16px; /* Inferred from screenshot */
  font-weight: 400;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-4, 4px); /* Inferred from screenshot */
  transition: color var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary::after {
  content: '→'; /* Inferred from screenshot */
  display: inline-block;
  transform: translateX(0);
  transition: transform var(--motion-duration-fast, 80ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary:hover {
  color: var(--colors-text-primary, #242529); /* Inferred from screenshot */
}

.link-secondary:hover::after {
  transform: translateX(2px); /* Inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-secondary, #58585a); /* Inferred to be the same as standard */
}
```

### Badges

#### Status Badge - New
A small badge indicating new content or features, with a primary blue background and white text.

```css
.badge-new {
  background-color: var(--colors-primary, #5c78e2);
  color: var(--colors-background, #ffffff);
  font-family: var(--typography-caption-family, 'writer', system-ui, -apple-system, sans-serif);
  font-size: 10px; /* Inferred from screenshot */
  font-weight: 500; /* Inferred from screenshot */
  padding: 2px 6px; /* Inferred from screenshot */
  border-radius: var(--radius-md, 4px);
  text-transform: uppercase;
  letter-spacing: 0.5px; /* Inferred from screenshot */
  display: inline-block;
}
```

## 5. Layout Principles

-   **Spacing System**: Zed employs a `4px` base unit for its spacing system, creating a predictable and harmonious layout.
    -   Base: `4px`
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 64]`
    -   Usage Context:
        -   `0px`: No spacing, for tightly grouped elements.
        -   `4px`: Smallest increments, for inline element separation or icon-text gaps.
        -   `8px`: Standard small spacing, for list items or minor vertical separation.
        -   `12px`: Input padding, button padding (small).
        -   `16px`: Component internal padding, button padding (medium), vertical rhythm.
        -   `20px`: Moderate spacing for distinct content blocks.
        -   `24px`: Card padding, vertical separation between sections.
        -   `32px`: Larger vertical gaps, column gutters.
        -   `64px`: Generous section padding, hero content separation.

-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1280px`
    -   Columns: `12`
    -   Gutter: `32px`
    -   Section Padding: `64px` vertical, `64px` horizontal.

-   **Whitespace Philosophy**: Zed utilizes generous whitespace to create a clean, uncluttered interface that enhances readability and focuses user attention. Ample padding, particularly `64px` for major sections, provides visual breathing room around content blocks. This expansive use of white space, combined with a subtle grid background, reinforces a sense of precision and order, preventing visual fatigue in a detail-rich environment.

-   **Border Radius Scale**:
    -   `sm` (`2px`): Used for small interactive elements like checkboxes, input fields, and subtle internal components.
    -   `md` (`4px`): Standard radius for buttons, cards, badges, and most UI containers.
    -   `lg` (`6px`): Used for larger containers or elements requiring a slightly softer visual appearance.
    -   `full` (`9999px`): For pill-shaped elements or avatars.

## 6. Depth & Elevation
Zed's elevation system is subtle, primarily using inset shadows for interactive elements and an offset shadow for cards on hover, with a distinct modal shadow for foreground elements.

-   **Flat (z-0)**: `none` — Default state for most background elements and static content.
-   **Interactive Inset (z-1)**: `rgb(5, 55, 148) 0px -2px 0px 0px inset, rgb(230, 239, 254) 0px 1px 3px 0px` — Used for primary buttons to give a subtle pressed effect.
-   **Navigation (z-2)**: `none` (with `border-bottom: 1px solid {colors.border}`) — The main navigation bar, positioned above content.
-   **Card Hover (z-10)**: `rgba(7, 77, 207, 0.04) 6px 6px 0px 0px` — Applied to cards on hover, creating a distinct lifted appearance.
-   **Tooltip/Popover (z-50)**: `0px 2px 8px rgba(0,0,0,0.08)` (inferred from screenshot) — Used for small, temporary overlays like tooltips or dropdowns.
-   **Modal/Dialog (z-99)**: `oklab(0.642147 -0.00263254 -0.0210819 / 0.5) 0px 20px 25px -5px, oklab(0.642147 -0.00263254 -0.0210819 / 0.5) 0px 8px 10px -6px` — For prominent, full-screen blocking elements.
-   **Sticky Header (z-100)**: `none` (with `border-bottom: 1px solid {colors.border}`) — The sticky header, ensuring it always remains on top.

**Shadow Philosophy**: Zed employs shadows sparingly and intentionally. Inset shadows provide a subtle tactile feel for interactive elements like buttons, while offset shadows (`rgba(7, 77, 207, 0.04) 6px 6px 0px 0px`) are reserved for hover states on cards to indicate interactivity and hierarchy. Deeper, multi-layered shadows are used exclusively for modal and dialog elements, clearly separating them from the page content. This minimal approach ensures that depth is added functionally, without cluttering the clean aesthetic.

## 7. Do's and Don'ts

### Do's
-   **Do** use `plexSerif` `48px` `400` for main hero headlines to establish a strong brand presence.
-   **Do** ensure body text is set in `writer` `16px` `400` with a line-height of `1.2` for optimal readability.
-   **Do** apply `colors.primary` (`#5c78e2`) for all Primary Buttons and key interactive elements.
-   **Do** use `colors.text-primary` (`#242529`) for main content text on `colors.surface` (`#fafafa`); ratio 14.67 passes AAA.
-   **Do** maintain `64px` of vertical spacing between major content sections.
-   **Do** use `radius.md` (`4px`) for buttons and cards for a consistent, soft edge.
-   **Do** apply `elevation.card-hover` (`rgba(7, 77, 207, 0.04) 6px 6px 0px 0px`) to cards on hover.
-   **Do** ensure input fields have a `2px` `colors.primary-light` (`#e2e2fa`) focus ring when active.
-   **Do** use `colors.text-secondary` (`#58585a`) on `colors.neutral-light` (`#ebebec`) for secondary text; ratio 5.96 passes AA.

### Don'ts
-   **Don't** use `colors.text-muted` (`#b4b4bb`) for body text on `colors.surface` (`#fafafa`); measured ratio 1.98 fails AA.
-   **Don't** deviate from the `4px` spacing scale; avoid custom values like `10px` or `22px`.
-   **Don't** use `plexSerif` for body copy; it is reserved for headlines and display text.
-   **Don't** apply strong shadows to static cards; reserve `elevation.card-hover` for interactive states.
-   **Don't** use `colors.error` (`#ff5c57`) for anything other than error messages or destructive actions.
-   **Don't** use `text-decoration: underline` on `link-secondary` elements; they use an arrow icon.
-   **Don't** use `colors.text-link` (`#3882b7`) on `colors.surface` (`#fafafa`) for small text; ratio 3.99 only passes AA-large.
-   **Don't** use `colors.text-purple` (`#a449ab`) on `colors.surface` (`#fafafa`) for small text; ratio 4.88 only passes AA.
-   **Don't** introduce new border radius values; stick to `2px`, `4px`, `6px`, and `full`.
-   **Don't** use `colors.text-secondary` (`#58585a`) as the primary text color on `colors.background` (`#ffffff`); prefer `colors.text-primary` (`#242529`).

## 8. Responsive Behavior *(Suggested — not measured)*
_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~320px): Stacks all content vertically; navigation becomes a hamburger menu.
    -   **Mobile Large** (~480px): Adjusts padding to `16px`; single-column layouts for cards.
    -   **Tablet** (~768px): Two-column card layouts; navigation expands to show key links.
    -   **Desktop** (~1024px): Standard multi-column layouts; full navigation visible.
    -   **Desktop Large** (~1440px): Maximizes content width up to `1280px` centered.
-   **Touch Targets**:
    -   Ensure all interactive elements have a minimum touch target size of `44px` by `44px` (inferred).
    -   Maintain at least `8px` of clear space between touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   Navigation: Collapse top navigation links into a hamburger menu on screens smaller than `768px`.
    -   Cards: Transition from multi-column grids to single-column stacking on mobile breakpoints.
    -   Typography: Scale down `Display` and `H1` font sizes by `25%` on mobile for better fit.
    -   Padding: Reduce horizontal section padding from `64px` to `24px` on mobile.
    -   Forms: Stack form labels above input fields on smaller screens.
    -   Spacing: Reduce larger spacing values (e.g., `64px`) to `32px` or `24px` on mobile.

## 9. Agent Prompt Guide
-   **Quick Color Reference**
    -   `primary`: `#5c78e2`
    -   `primary-light`: `#e2e2fa`
    -   `primary-hover`: `#4b67d0`
    -   `background`: `#ffffff`
    -   `surface`: `#fafafa`
    -   `neutral-light`: `#ebebec`
    -   `border`: `#dcdcdd`
    -   `text-primary`: `#242529`
    -   `text-secondary`: `#58585a`
    -   `text-muted`: `#b4b4bb`
    -   `text-link`: `#3882b7`
    -   `error`: `#ff5c57`
    -   `warning`: `#ffbb2e`

-   **Iteration Guide**:
    1.  Always use `colors.primary` (`#5c78e2`) for Primary Buttons and `colors.primary-hover` (`#4b67d0`) for their hover state.
    2.  Set all display and heading text in `plexSerif` with a `400` weight and `1.2` line-height.
    3.  Ensure body text uses `writer` `16px` `400` with a `1.2` line-height.
    4.  Apply `radius.md` (`4px`) to all buttons and cards.
    5.  Use the `4px` spacing scale (`[0, 4, 8, 12, 16, 20, 24, 32, 64]`) for all layout and component spacing.
    6.  Default card backgrounds should be `colors.surface` (`#fafafa`) with `1px solid colors.border` (`#dcdcdd`).
    7.  Input fields must have a `1px solid colors.border` (`#dcdcdd`) and a `2px` `colors.primary-light` (`#e2e2fa`) focus ring.
    8.  Standard links (`.link-standard`) use `colors.text-link` (`#3882b7`) and underline on hover.
    9.  For elevation, use `elevation.card-hover` for interactive cards and `elevation.modal` for dialogs.
    10. Ensure `colors.text-primary` (`#242529`) on `colors.surface` (`#fafafa`) always passes AAA contrast.
    11. Implement a hamburger menu for navigation on viewports below `768px`.
    12. Apply `motion.duration-normal` (`150ms`) with `motion.easing-standard` (`cubic-bezier(0.4, 0, 0.2, 1)`) for most UI transitions.
