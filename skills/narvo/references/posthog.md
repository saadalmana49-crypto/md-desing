---
name: 'PostHog'
slug: posthog
url: https://posthog.com
category: 'Dev Tools'
mode: light
fonts:
  - 'RoundHog'
  - 'Source Code Pro'
preview:
  bg: '#e5e7e0'
  fg: '#23251d'
  accent: '#cd8407'
summary: >-
  Warm putty #e5e7e0 canvas, rounded RoundHog display, ochre and blue accents, isometric 3D illustration.
colors:
  primary: '#cd8407'
  primary-hover: '#eb9d2a' # (inferred from screenshot)
  primary-border: '#b17816'
  accent-blue: '#2f80fa'
  accent-purple: '#b62ad9'
  accent-green: '#6aa84f'
  background: '#e5e7e0'
  surface: '#fdfdf8'
  surface-alt: '#eeefe9'
  text-primary: '#23251d'
  text-heading: '#111111'
  text-body: '#374151'
  text-muted: '#65675e'
  text-inverse: '#ffffff'
  border: '#e5e7e0'
  success: '#36c46f' # (inferred from screenshot)
  danger: '#f54e00' # (inferred from screenshot)
typography:
  display:
    family: 'RoundHog'
    size: 36px
    weight: 600
    line-height: 1.2
  heading-xl:
    family: 'RoundHog'
    size: 36px
    weight: 600
    line-height: 1.2
  heading-lg:
    family: 'RoundHog'
    size: 24px
    weight: 600
    line-height: 1.2
  body-lg:
    family: 'RoundHog'
    size: 18px
    weight: 500
    line-height: 1.5
  body:
    family: 'RoundHog'
    size: 16px
    weight: 500
    line-height: 1.5
  body-sm:
    family: 'RoundHog'
    size: 15px
    weight: 500
    line-height: 1.5
  caption:
    family: 'RoundHog'
    size: 13px
    weight: 500
    line-height: 1.5
  code:
    family: 'Source Code Pro, ui-monospace, monospace'
    size: 13px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 80]
radius:
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
  full: 9999px
elevation:
  card: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px'
  modal: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-primary}'
    border: '{colors.primary-border}'
    radius: '{radius.lg}'
    padding: '12px 24px' # (inferred from screenshot)
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '{colors.text-primary}'
    radius: '{radius.md}'
    padding: '2px 8px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: 'none'
    radius: '{radius.md}'
    padding: '2px 8px'
  card:
    bg: '{colors.surface}'
    radius: '{radius.xl}'
    shadow: '{elevation.card}'
  input-text:
    bg: '{colors.text-inverse}'
    text: '{colors.text-body}'
    border: '{colors.border}'
    radius: '{radius.md}'
    padding: '10px 12px' # (inferred from screenshot)
motion:
  duration-base: '0.2s'
  easing-standard: 'ease-out'
  easing-decelerate: 'cubic-bezier(0.25, 1, 0.5, 1)' # (inferred from screenshot)
---

# Design System Inspired by PostHog

## 1. Visual Theme & Atmosphere
PostHog's design system evokes a friendly, intelligent, and slightly playful atmosphere, primarily driven by its custom `RoundHog` typeface and a vibrant accent palette. The primary background color, `#e5e7e0`, provides a soft, earthy canvas, allowing interactive elements like the primary button in `#cd8407` to stand out. Large, bold headlines set in `RoundHog` at `36px` with a `600` weight establish a clear, direct communication style, complemented by ample `32px` to `64px` section padding that contributes to an open and inviting layout.

The visual identity is further defined by a mix of colorful, isometric 3D illustrations and subtle interactive elements. Accent colors like `#2f80fa` for links and `#b62ad9` for highlighted sections add dynamism without overwhelming the calm base. Components feature soft `4px` to `8px` border radii and subtle `rgba(0, 0, 0, 0.1) 0px 4px 6px` shadows, creating a sense of depth and approachability. The presence of numerous `cssAnimations` and `keyframeNames` such as `bounce` and `float` indicates a preference for micro-interactions that enhance user engagement, even if not directly visible in static screenshots.

**Key Characteristics**
-   **Typography**: Friendly `RoundHog` font, `36px` `600` weight for display.
-   **Color Palette**: Soft `#e5e7e0` background with vibrant `#cd8407` and `#2f80fa` accents.
-   **Illustrations**: Isometric 3D graphics add a playful, tech-forward touch.
-   **Corners & Shadows**: Subtle `4px` to `8px` border radii and soft `elevation.card` shadows.
-   **Spacing**: Generous `32px` to `64px` padding creates an open layout.
-   **Motion**: `cssAnimations` like `bounce` and `float` for engaging micro-interactions.
-   **Interactive Elements**: Buttons with `#cd8407` background and `#b17816` border.

## 2. Color Palette & Roles

-   **Primary**
    -   **Primary** (`#cd8407`) — The main call-to-action color, used for the "Get started" button background.
    -   **Primary Hover** (`#eb9d2a`) — A brighter, more saturated variant of the primary color, used for hover states on primary buttons. (inferred from screenshot)
    -   **Primary Border** (`#b17816`) — A darker, more muted shade used for borders on primary buttons, providing definition.
    -   **Accent Blue** (`#2f80fa`) — Used for primary links, highlighted text, and interactive elements, signaling action and information.
    -   **Accent Purple** (`#b62ad9`) — A vibrant accent used for specific UI elements or highlighted sections, such as the "Ask PostHog anything" tab.
    -   **Accent Green** (`#6aa84f`) — Used for success indicators and checkmark icons, conveying positive feedback.
    -   **Success** (`#36c46f`) — A distinct green for success messages or states. (inferred from screenshot)
    -   **Danger** (`#f54e00`) — A red-orange for error states or warnings. (inferred from screenshot)

-   **Neutral Scale**
    -   **Background** (`#e5e7e0`) — The dominant background color for the main content area, providing a soft, light base.
    -   **Surface** (`#fdfdf8`) — A very light, almost white, background used for cards, modals, and distinct content blocks.
    -   **Surface Alt** (`#eeefe9`) — A slightly darker off-white, used for subtle differentiation of surfaces or backgrounds.
    -   **Text Primary** (`#23251d`) — The darkest text color, used for prominent headings and key UI labels.
    -   **Text Heading** (`#111111`) — Used for main headings and titles, providing strong contrast.
    -   **Text Body** (`#374151`) — The default color for paragraph text, ensuring readability on light backgrounds.
    -   **Text Muted** (`#65675e`) — Used for secondary information, captions, or less emphasized text.
    -   **Text Inverse** (`#ffffff`) — Used for text on dark backgrounds, such as within the navigation bar or on dark buttons.
    -   **Border** (`#e5e7e0`) — A subtle border color used for separating UI elements and defining input fields.

## 3. Typography Rules

-   **Font Family**: 'RoundHog', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'. For code blocks, 'Source Code Pro', ui-monospace, monospace.
-   **Hierarchy**:
    -   **Display/H1**: `RoundHog` `36px` `600` · line-height `1.2` · tracking `none` · Used for primary page titles and hero sections.
    -   **H2**: `RoundHog` `24px` `600` · line-height `1.2` · tracking `none` · Used for major section headings.
    -   **Body Large**: `RoundHog` `18px` `500` · line-height `1.5` · tracking `none` · Used for emphasized body text or lead paragraphs.
    -   **Body**: `RoundHog` `16px` `500` · line-height `1.5` · tracking `none` · Standard paragraph text size.
    -   **Body Small**: `RoundHog` `15px` `500` · line-height `1.5` · tracking `none` · Used for less prominent body text or detailed descriptions.
    -   **Caption**: `RoundHog` `13px` `500` · line-height `1.5` · tracking `none` · Used for small labels, metadata, and navigation links.
    -   **Code/Mono**: `Source Code Pro` `13px` `400` · line-height `1.5` · tracking `none` · Used for inline code snippets and code blocks.
-   **Principles**
    -   Utilize the `RoundHog` typeface consistently across all text elements to maintain a unified, friendly brand voice.
    -   Employ `500` and `600` font weights to establish clear visual hierarchy, reserving `600` for headings and `500` for body text.
    -   Ensure ample line height of `1.5` for body text to enhance readability, especially in longer content blocks.
    -   Highlight key phrases within body text using `colors.accent-blue` (`#2f80fa`) to draw attention to important concepts.
    -   Maintain a consistent `13px` `500` weight for navigation and utility text to ensure clarity without competing with main content.

## 4. Component Stylings

### Buttons

**Primary Button**
A prominent call-to-action button with a warm orange background, dark text, and a subtle border. It features a slight vertical lift on hover and a subtle press effect on active.

```css
.button-primary {
  background-color: var(--colors-primary, #cd8407);
  color: var(--colors-text-primary, #23251d);
  font-family: var(--typography-body-family, 'RoundHog');
  font-size: 16px; /* inferred from screenshot */
  font-weight: 400; /* inferred from screenshot */
  padding: 12px 24px; /* inferred from screenshot */
  border: 1px solid var(--colors-primary-border, #b17816);
  border-radius: var(--radius-lg, 6px);
  cursor: pointer;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out;
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #eb9d2a); /* inferred from screenshot */
  border-color: var(--colors-primary-hover, #eb9d2a); /* inferred from screenshot */
  transform: translateY(-1px); /* inferred from screenshot */
}

.button-primary:active {
  transform: translateY(0.5px); /* inferred from screenshot */
}

.button-primary:disabled {
  opacity: 0.4; /* inferred from pseudoStates.disabled */
  cursor: default;
}
```

**Secondary Button**
A button with a transparent background and a dark border and text, used for secondary actions or alternatives. It has a subtle lift on hover.

```css
.button-secondary {
  background-color: transparent;
  color: var(--colors-text-primary, #23251d);
  font-family: var(--typography-caption-family, 'RoundHog');
  font-size: var(--typography-caption-size, 13px);
  font-weight: var(--typography-caption-weight, 500);
  padding: 2px 8px;
  border: 1px solid var(--colors-text-primary, #23251d);
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out, color 0.2s ease-out;
}

.button-secondary:hover {
  background-color: var(--colors-surface-alt, #eeefe9); /* inferred from screenshot */
  transform: translateY(-0.5px); /* inferred from screenshot */
}

.button-secondary:active {
  transform: translateY(0.5px); /* inferred from screenshot */
}

.button-secondary:disabled {
  opacity: 0.4; /* inferred from pseudoStates.disabled */
  cursor: default;
  border-color: var(--colors-text-muted, #65675e); /* inferred from screenshot */
  color: var(--colors-text-muted, #65675e); /* inferred from screenshot */
}
```

**Ghost Button**
A text-only button with no background or border, used for less prominent actions or navigation within a component. It has a slight vertical shift on hover.

```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #23251d);
  font-family: var(--typography-caption-family, 'RoundHog');
  font-size: var(--typography-caption-size, 13px);
  font-weight: var(--typography-caption-weight, 500);
  padding: 2px 8px;
  border: none;
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: background-color 0.2s ease-out, transform 0.2s ease-out, color 0.2s ease-out;
}

.button-ghost:hover {
  background-color: var(--colors-surface-alt, #eeefe9); /* inferred from screenshot */
  transform: translateY(-0.5px); /* inferred from componentFamilies.topClassStrings */
}

.button-ghost:active {
  transform: translateY(0.5px); /* inferred from componentFamilies.topClassStrings */
}

.button-ghost:disabled {
  opacity: 0.4; /* inferred from pseudoStates.disabled */
  cursor: default;
  color: var(--colors-text-muted, #65675e); /* inferred from screenshot */
}
```

### Cards & Containers

**Standard Card**
A light-colored container with rounded corners and a subtle shadow, used to group related content. On hover, the card's shadow deepens slightly.

```css
.card {
  background-color: var(--colors-surface, #fdfdf8);
  color: var(--colors-text-body, #374151);
  padding: var(--spacing-48, 48px); /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e5e7e0); /* inferred from screenshot */
  border-radius: var(--radius-xl, 8px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px);
  transition: box-shadow 0.2s var(--motion-easing-decelerate, cubic-bezier(0.25, 1, 0.5, 1));
}

.card:hover {
  box-shadow: var(--elevation-modal, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px); /* inferred from screenshot */
}
```

### Inputs & Forms

**Text Input**
A standard text input field with a light background, subtle border, and rounded corners. It displays a clear focus ring on interaction.

```css
.input-text {
  background-color: var(--colors-text-inverse, #ffffff);
  color: var(--colors-text-body, #374151);
  font-family: var(--typography-body-family, 'RoundHog');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 500);
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e5e7e0);
  border-radius: var(--radius-md, 4px);
  outline: none;
  transition: border-color 0.2s var(--motion-easing-standard, ease-out), box-shadow 0.2s var(--motion-easing-standard, ease-out);
}

.input-text:focus {
  border-color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  box-shadow: 0 0 0 2px rgba(47, 128, 250, 0.2); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--colors-surface-alt, #eeefe9); /* inferred from screenshot */
  color: var(--colors-text-muted, #65675e); /* inferred from screenshot */
  cursor: default;
}
```

**Form Label**
The label associated with form input fields, using a slightly darker text color for clarity.

```css
.form-label {
  color: var(--colors-text-primary, #23251d);
  font-family: var(--typography-body-family, 'RoundHog');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 500);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block;
}
```

**Checkbox/Radio**
Custom-styled checkboxes and radio buttons with a distinct checked state.

```css
.checkbox, .radio {
  appearance: none;
  width: 16px; /* inferred from screenshot */
  height: 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e5e7e0); /* inferred from screenshot */
  border-radius: var(--radius-sm, 2px); /* inferred from screenshot */
  background-color: var(--colors-text-inverse, #ffffff);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s var(--motion-easing-standard, ease-out), border-color 0.2s var(--motion-easing-standard, ease-out);
}

.radio {
  border-radius: var(--radius-full, 9999px);
}

.checkbox:checked, .radio:checked {
  background-color: var(--colors-accent-green, #6aa84f); /* inferred from pseudoStates.checked */
  border-color: var(--colors-accent-green, #6aa84f); /* inferred from pseudoStates.checked */
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E"); /* from pseudoStates.checked */
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.radio:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 16 16'%3E%3Ccircle data-name='ellipse' cx='8' cy='8' r='3'/%3E%3C/svg%3E"); /* from pseudoStates.checked */
}

.checkbox:focus, .radio:focus {
  box-shadow: 0 0 0 2px rgba(47, 128, 250, 0.2); /* inferred from screenshot */
}
```

### Navigation

**Top Navigation Bar**
A clean, light navigation bar at the top of the page, providing access to main sections and utility functions.

```css
.top-nav-bar {
  background-color: var(--colors-surface, #fdfdf8);
  border-bottom: 1px solid var(--colors-border, #e5e7e0); /* inferred from screenshot */
  padding: var(--spacing-16, 16px) var(--spacing-32, 32px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05); /* inferred from screenshot */
}
```

**Navigation Link**
Individual links within navigation menus, featuring a subtle hover effect that slightly lifts the link.

```css
.nav-link {
  color: var(--colors-text-primary, #23251d);
  font-family: var(--typography-caption-family, 'RoundHog');
  font-size: var(--typography-caption-size, 13px);
  font-weight: var(--typography-caption-weight, 500);
  text-decoration: none;
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  position: relative;
  display: inline-block;
  transition: transform 0.2s var(--motion-easing-standard, ease-out), color 0.2s var(--motion-easing-standard, ease-out);
}

.nav-link:hover {
  color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  transform: translateY(-0.5px); /* from componentFamilies.topClassStrings */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 500); /* inferred from screenshot */
}
```

**Dropdown Menu**
A standard dropdown menu, appearing as a card with links inside.

```css
.dropdown-menu {
  background-color: var(--colors-surface, #fdfdf8);
  border: 1px solid var(--colors-border, #e5e7e0); /* inferred from screenshot */
  border-radius: var(--radius-md, 4px);
  box-shadow: var(--elevation-card, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px);
  padding: var(--spacing-8, 8px) 0;
  min-width: 160px; /* inferred from screenshot */
  z-index: 50; /* inferred from elevation.zIndexValues */
}

.dropdown-menu .dropdown-item {
  color: var(--colors-text-body, #374151);
  font-family: var(--typography-body-family, 'RoundHog');
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 500);
  padding: var(--spacing-8, 8px) var(--spacing-16, 16px);
  text-decoration: none;
  display: block;
  transition: background-color 0.2s var(--motion-easing-standard, ease-out), color 0.2s var(--motion-easing-standard, ease-out);
}

.dropdown-menu .dropdown-item:hover {
  background-color: var(--colors-surface-alt, #eeefe9); /* inferred from screenshot */
  color: var(--colors-text-primary, #23251d); /* inferred from screenshot */
}
```

### Links

**Standard Link**
A primary interactive link, using the brand's accent blue and a standard underline.

```css
.link-standard {
  color: var(--colors-accent-blue, #2f80fa);
  text-decoration: underline;
  text-decoration-color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  transition: color 0.2s var(--motion-easing-standard, ease-out), text-decoration-color 0.2s var(--motion-easing-standard, ease-out);
}

.link-standard:hover {
  color: var(--colors-primary-border, #b17816); /* inferred from screenshot */
  text-decoration-color: var(--colors-primary-border, #b17816); /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  text-decoration-color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
}
```

**Secondary Link**
A less prominent link, using the primary text color and a dotted underline.

```css
.link-secondary {
  color: var(--colors-text-primary, #23251d);
  text-decoration: underline dotted;
  text-decoration-color: var(--colors-primary, #cd8407); /* inferred from componentFamilies.topClassStrings */
  text-underline-offset: 3px; /* inferred from componentFamilies.topClassStrings */
  transition: color 0.2s var(--motion-easing-standard, ease-out), text-decoration-color 0.2s var(--motion-easing-standard, ease-out);
}

.link-secondary:hover {
  color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
  text-decoration-color: var(--colors-accent-blue, #2f80fa); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-primary, #23251d); /* inferred from screenshot */
  text-decoration-color: var(--colors-primary, #cd8407); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Base unit `4px` → `0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 80`
    -   `0px`: Used for resetting margins/padding, or for tightly coupled elements.
    -   `4px`: Smallest increment, for spacing between icon and text, or very tight element grouping.
    -   `8px`: Standard small spacing, for list items, form field labels, or inline elements.
    -   `12px`: Used for padding within small components like buttons, or between minor elements.
    -   `16px`: Base padding for text blocks, internal component spacing, or vertical rhythm.
    -   `20px`: Moderate spacing for grouping related elements or small section breaks.
    -   `24px`: Standard spacing for component separation, card padding, or major vertical rhythm.
    -   `32px`: Larger spacing for section padding, between major content blocks, or element groups.
    -   `48px`: Significant vertical spacing, for section breaks or large component separation.
    -   `64px`: Generous spacing, for hero sections, major content divisions, or ample whitespace.
    -   `80px`: Maximum spacing, for very large section breaks or page-level content separation.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*
    -   **Max Width**: `1280px` (inferred from screenshot)
    -   **Columns**: `12` (inferred from screenshot)
    -   **Gutter**: `24px` (inferred from screenshot)
    -   **Section Padding**: `64px` vertical, `32px` horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: PostHog employs generous whitespace, particularly around main content blocks and between distinct UI components. This creates an open, breathable layout that enhances readability and reduces visual clutter. The use of large `48px` to `64px` vertical spacing between sections ensures clear content segmentation and a sense of calm.
-   **Border Radius Scale**:
    -   **sm**: `2px` — For very subtle rounding, e.g., small badges.
    -   **md**: `4px` — Standard rounding for buttons, input fields, and small interactive elements.
    -   **lg**: `6px` — Used for primary buttons and slightly larger interactive components.
    -   **xl**: `8px` — For cards, larger containers, and distinct UI blocks.
    -   **full**: `9999px` — For pill-shaped elements or avatars.

## 6. Depth & Elevation

-   **Flat (z-0)**: `none` — Default for most static content and background elements.
-   **Card (z-10)**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` — Used for cards, dropdowns, and elevated content blocks.
-   **Tooltip/Overlay (z-20)**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` (inferred from screenshot) — Used for tooltips, small popovers, and elements that need to appear above cards.
-   **Modal (z-50)**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` — Used for full-screen overlays, dialogs, and prominent interactive modals.
-   **Background Layer (z--10)**: `none` — Used for background elements that should appear behind the main content flow.

**Shadow Philosophy**
PostHog utilizes subtle, diffused shadows to create a gentle sense of depth and hierarchy, primarily for cards and interactive elements. The `elevation.card` shadow provides a soft lift for content blocks, while the `elevation.modal` shadow is reserved for more prominent, temporary UI elements like modals, ensuring they stand out clearly from the background. Shadows are not overly dramatic, maintaining the overall light and approachable aesthetic.

## 7. Do's and Don'ts

### Do's
-   **Do** use `colors.primary` (`#cd8407`) for all primary call-to-action buttons, ensuring a consistent visual prompt.
-   **Do** set body text in `colors.text-body` (`#374151`) on `colors.background` (`#e5e7e0`); this pair has a contrast ratio of 8.26, passing AAA.
-   **Do** use `RoundHog` `36px` `600` for main display headings to establish a clear and engaging hierarchy.
-   **Do** apply `radius.xl` (`8px`) to all `Card` components for a consistent soft, modern aesthetic.
-   **Do** use `colors.accent-blue` (`#2f80fa`) for all standard links, clearly indicating interactive text.
-   **Do** ensure all interactive elements, like `button-primary` and `input-text`, have a `0.2s ease-out` transition for smooth feedback.
-   **Do** apply `spacing-32` (`32px`) as the minimum vertical separation between major content sections.
-   **Do** use `colors.text-primary` (`#23251d`) for navigation links and prominent labels for strong legibility.
-   **Do** ensure `input-text` fields display a clear focus ring using `2px rgba(47, 128, 250, 0.2)` shadow when `:focus`.

### Don'ts
-   **Don't** use `colors.text-inverse` (`#ffffff`) on `colors.surface-alt` (`#eeefe9`); their contrast ratio of 1.16 fails AA and is illegible.
-   **Don't** introduce custom spacing values; adhere strictly to the `4px` to `80px` scale defined in `spacing.scale`.
-   **Don't** use `RoundHog` `13px` `500` for primary body text; reserve `typography.body` (`16px` `500`) for readability.
-   **Don't** apply `elevation.modal` shadow to standard `Card` components; reserve it for high-priority elements like modals.
-   **Don't** use `colors.text-muted` (`#65675e`) on `colors.e5e7e0` for critical information; while 4.61 passes AA, it's too subtle for essential content.
-   **Don't** modify the `border-radius` of `button-primary` from `radius.lg` (`6px`); maintain consistency across all primary actions.
-   **Don't** use `colors.accent-purple` (`#b62ad9`) as a primary text color; it is intended for accentuation, not readability.
-   **Don't** remove the `1px solid colors.border` from `input-text` fields; it provides essential visual structure.

## 8. Responsive Behavior

_Note: breakpoints below are actual measurements from the source. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~482px): Content stacks vertically, navigation collapses to a hamburger menu.
    -   **Mobile Large** (~640px): Minor layout adjustments, increased padding for touch targets.
    -   **Tablet** (~768px): Two-column layouts may emerge, side navigation might appear.
    -   **Desktop** (~900px): Primary desktop layout, multi-column sections are common.
    -   **Desktop Large** (~1024px): Wider content containers, additional whitespace.
    -   **Desktop Extra Large** (~1280px): Maximum content width, optimized for large screens.
    -   **Desktop Ultra Large** (~1536px): Expansive layouts, subtle content adjustments for very wide displays.
-   **Touch Targets**:
    -   Ensure all interactive elements, such as `button-primary` and `nav-link`, have a minimum tap area of `44px` by `44px` (inferred from screenshot).
    -   Maintain at least `8px` of clear space around touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   **Navigation**: The top navigation bar collapses into a hamburger menu icon on screens below `768px` width.
    -   **Cards**: Multi-column `Card` layouts transition to single-column stacking on screens below `768px`.
    -   **Typography**: `Display` and `H2` font sizes scale down to `24px` and `18px` respectively for mobile views.
    -   **Padding**: Horizontal `section-padding` reduces from `32px` to `16px` on smaller viewports.
    -   **Forms**: `Input` fields and `form-label` elements maintain full width on mobile, stacking vertically.
    -   **Spacing**: Vertical spacing between major sections may reduce from `64px` to `32px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   primary: `#cd8407`
    -   primary-hover: `#eb9d2a`
    -   primary-border: `#b17816`
    -   accent-blue: `#2f80fa`
    -   accent-purple: `#b62ad9`
    -   accent-green: `#6aa84f`
    -   background: `#e5e7e0`
    -   surface: `#fdfdf8`
    -   surface-alt: `#eeefe9`
    -   text-primary: `#23251d`
    -   text-heading: `#111111`
    -   text-body: `#374151`
    -   text-muted: `#65675e`
    -   text-inverse: `#ffffff`
    -   border: `#e5e7e0`
    -   success: `#36c46f`
    -   danger: `#f54e00`

-   **Iteration Guide**
    1.  Always use `colors.primary` (`#cd8407`) for main CTAs, with `colors.primary-hover` (`#eb9d2a`) on hover.
    2.  Ensure all display text uses `RoundHog` `36px` `600` with `1.2` line height.
    3.  Apply `spacing.scale` values for all margins and padding; prefer `16px`, `24px`, `32px`, `48px`, `64px` for major elements.
    4.  Set `border-radius.xl` (`8px`) for `Card` components and `border-radius.lg` (`6px`) for `button-primary`.
    5.  Default `Card` background is `colors.surface` (`#fdfdf8`) with `elevation.card` shadow.
    6.  `button-primary` height should be `48px` (inferred from `12px 24px` padding and `16px` font size).
    7.  `input-text` fields must show a `2px` `rgba(47, 128, 250, 0.2)` focus ring on interaction.
    8.  Navigation links should employ the `transform: translateY(-0.5px)` hover effect.
    9.  Implement `elevation.modal` for all overlays and dialogs to ensure clear hierarchy.
    10. Ensure body text (`#374151`) on `background` (`#e5e7e0`) passes AAA contrast.
    11. Implement responsive breakpoints at `482px`, `640px`, `768px`, `900px`, `1024px`, `1280px`, and `1536px`.
    12. All interactive components should include `transition: all 0.2s ease-out;` for smooth state changes.
