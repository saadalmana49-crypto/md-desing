---
name: SoundCloud
url: https://soundcloud.com
colors:
  brand-orange: '#f50'
  link-blue: '#699fff'
  background-dark: '#121212'
  background-medium: '#303030'
  background-light: '#f3f3f3'
  background-white: '#ffffff'
  text-inverse: '#ffffff'
  text-primary: '#121212'
  text-muted: '#999999'
  link-active: 'rgba(4,77,210,0.6)'
  focus-ring: '#044dd2'
  button-primary-bg: '#f3f3f3'
  button-primary-text: '#121212'
  button-secondary-bg: '#121212'
  button-secondary-text: '#ffffff'
  button-ghost-text: '#ffffff'
  button-ghost-border: '#ffffff'
  border-subtle: '#999999'
  disabled-bg: 'rgba(18, 18, 18, 0.08)'
  disabled-text: 'rgba(18, 18, 18, 0.24)'
  button-outline-hover-bg: 'rgb(245, 245, 245)'
  button-outline-hover-outline: 'rgba(18, 18, 18, 0.16)'
  button-focus-outline: 'rgb(30, 136, 229)'
  link-secondary-hover: 'hsla(0,0%,40%,0.4)'
typography:
  display:
    family: 'Söhne'
    size: 65px
    weight: 600
    line-height: 1.2
  heading-1:
    family: 'Söhne'
    size: 60px
    weight: 600
    line-height: 36px
  heading-2:
    family: 'Söhne'
    size: 28px
    weight: 600
    line-height: 1.2
  heading-3:
    family: 'Söhne'
    size: 22px
    weight: 400
    line-height: 1.5
  body:
    family: 'Söhne'
    size: 17px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Söhne'
    size: 14px
    weight: 400
    line-height: 20px
  monospace:
    family: '"Monaco", "Courier New", monospace'
    size: 14px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48]
radius:
  sm: 3px
  md: 4px
  full: 9999px
motion:
  duration-fast: '0.1s'
  duration-base: '0.2s'
  duration-medium: '0.3s'
  easing-standard: 'ease-in-out'
  easing-decelerate: 'ease-out'
  easing-bounce-in: 'cubic-bezier(0.13, 1.07, 0.5, 1.01)'
  easing-bounce-out: 'cubic-bezier(0.98, -0.15, 0.9, 0.6)'
components:
  button-primary:
    bg: '{colors.button-primary-bg}'
    text: '{colors.button-primary-text}'
    radius: '{radius.full}'
    padding: '0px 24px'
  button-secondary:
    bg: '{colors.button-secondary-bg}'
    text: '{colors.button-secondary-text}'
    radius: '{radius.md}'
    padding: '6px 12px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.button-ghost-text}'
    border: '1px solid {colors.button-ghost-border}'
    radius: '{radius.md}'
    padding: '6px 12px'
  card:
    bg: '{colors.background-medium}'
    radius: '{radius.md}'
    shadow: 'none'
  input:
    bg: '{colors.background-medium}'
    text: '{colors.text-inverse}'
    border: '1px solid {colors.border-subtle}'
    radius: '{radius.md}'
    padding: '12px 16px'
---

# Design System Inspired by SoundCloud

## 1. Visual Theme & Atmosphere
SoundCloud's design system is characterized by a deep, immersive dark theme, primarily leveraging `{colors.background-dark}` (`#121212`) and `{colors.background-medium}` (`#303030`) as foundational surfaces. Prominent white typography set in the `Söhne` font, with a `65px` display size for hero statements, ensures high contrast and readability. Interactive elements and links are highlighted with a distinct `{colors.link-blue}` (`#699fff`), while the brand's iconic orange (`#f50`) serves as a powerful accent for key interactions like checkbox states. The visual experience is further enriched by dynamic, isometric 3D illustrations, such as the headphones and keyboard, which add a playful yet modern touch.

The overall atmosphere is one of creative energy and accessibility, fostering engagement within its music-centric platform. Subtle CSS animations, including `ease-in-out` transitions for layout changes and `cubic-bezier` for modal interactions, contribute to a fluid user experience without being overly distracting. Generous use of whitespace, particularly `{spacing.scale.8}` (`32px`) and `{spacing.scale.9}` (`48px`) for section padding, provides clarity and focus, allowing content and interactive elements to breathe within the dark interface.

Key Characteristics:
- Dark theme with high-contrast `{colors.text-inverse}` (`#ffffff`) typography.
- Bold `Söhne` font for headlines, with `65px` display text.
- `{colors.brand-orange}` (`#f50`) and `{colors.link-blue}` (`#699fff`) as primary accents.
- Isometric 3D illustrations for visual interest.
- Rounded corners, notably `{radius.full}` for buttons and `{radius.md}` for inputs.
- Subtle CSS keyframe animations and transitions.
- Generous vertical and horizontal spacing.

## 2. Color Palette & Roles
SoundCloud employs a focused color palette designed for high contrast on dark backgrounds, with distinct interactive and accent hues.

-   **Brand Accent**:
    -   `brand-orange` (`#f50`) — The iconic SoundCloud orange, used for key interactive elements like checked checkboxes and as a powerful brand accent.
-   **Link & Interactive**:
    -   `link-blue` (`#699fff`) — Primary color for standard links, providing clear differentiation against dark backgrounds.
    -   `link-active` (`rgba(4,77,210,0.6)`) — The color for active link states.
    -   `focus-ring` (`#044dd2`) — A vibrant blue used for focus rings on interactive elements, ensuring accessibility.
    -   `link-secondary-hover` (`hsla(0,0%,40%,0.4)`) — Subtle hover state for secondary links.
-   **Neutral Scale**:
    -   `background-dark` (`#121212`) — The dominant background color for the application, providing depth and focus.
    -   `background-medium` (`#303030`) — Used for cards, inputs, and secondary content blocks, offering a slight visual lift from the main background.
    -   `background-light` (`#f3f3f3`) — A light background used for specific buttons and light-themed sections.
    -   `background-white` (`#ffffff`) — Pure white, used sparingly for elements requiring maximum contrast, such as buttons.
-   **Text**:
    -   `text-inverse` (`#ffffff`) — Primary text color, ensuring readability on dark backgrounds.
    -   `text-primary` (`#121212`) — Primary text color when placed on light backgrounds.
    -   `text-muted` (`#999999`) — Secondary text color for less prominent information, such as metadata or supporting details.
-   **Borders & States**:
    -   `border-subtle` (`#999999`) — A light grey used for subtle borders, like input fields or dividers.
    -   `button-primary-bg` (`#f3f3f3`) — Background for primary action buttons.
    -   `button-primary-text` (`#121212`) — Text for primary action buttons.
    -   `button-secondary-bg` (`#121212`) — Background for secondary action buttons.
    -   `button-secondary-text` (`#ffffff`) — Text for secondary action buttons.
    -   `button-ghost-text` (`#ffffff`) — Text color for ghost buttons.
    -   `button-ghost-border` (`#ffffff`) — Border color for ghost buttons.
    -   `disabled-bg` (`rgba(18, 18, 18, 0.08)`) — Background for disabled interactive elements.
    -   `disabled-text` (`rgba(18, 18, 18, 0.24)`) — Text color for disabled interactive elements.
    -   `button-outline-hover-bg` (`rgb(245, 245, 245)`) — Background for outlined buttons on hover.
    -   `button-outline-hover-outline` (`rgba(18, 18, 18, 0.16)`) — Outline color for outlined buttons on hover.
    -   `button-focus-outline` (`rgb(30, 136, 229)`) — Outline color for button focus states.

## 3. Typography Rules
-   **Font Family**: `'Söhne', system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto San', sans-serif`. For monospace contexts: `'Monaco', 'Courier New', monospace`.
-   **Hierarchy**:
    -   **Display**: `Söhne` `65px` `600` · line-height `1.2` · tracking `none` · Used for prominent hero statements and impactful headlines.
    -   **Heading 1**: `Söhne` `60px` `600` · line-height `36px` · tracking `none` · For main section titles, ensuring strong visual hierarchy.
    -   **Heading 2**: `Söhne` `28px` `600` · line-height `1.2` · tracking `none` · For sub-sections and important content groupings.
    -   **Heading 3**: `Söhne` `22px` `400` · line-height `1.5` · tracking `none` · For smaller subheadings or emphasized text.
    -   **Body**: `Söhne` `17px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptive content.
    -   **Caption**: `Söhne` `14px` `400` · line-height `20px` · tracking `none` · For metadata, small print, and less prominent information.
    -   **Code/Mono**: `'Monaco', 'Courier New', monospace` `14px` `400` · line-height `1.5` · tracking `none` · For code snippets or fixed-width text.
-   **Principles**:
    -   Prioritize legibility on dark backgrounds by pairing `{colors.text-inverse}` (`#ffffff`) with `{colors.background-dark}` (`#121212`).
    -   Establish a clear visual hierarchy using distinct font sizes and weights from the `Söhne` family, with `600` for headings and `400` for body text.
    -   Maintain consistent line-heights across text roles to ensure comfortable reading, particularly `1.5` for body text.
    -   Utilize the `Söhne` font's modern, sans-serif aesthetic to convey a contemporary and professional brand identity.
    -   Avoid excessive variation in font styles, sticking primarily to the defined `Söhne` weights to maintain visual consistency.

## 4. Component Stylings

### Buttons
SoundCloud features three primary button styles: Primary, Secondary, and Ghost, each designed for distinct levels of emphasis and interaction. All buttons include a subtle `opacity` change on active states and a `background-color` transition on hover.

#### Primary Button
The Primary Button, like "Upload" or "Get started," is a highly visible call to action with a light background and dark text, featuring fully rounded corners. On hover, its background slightly darkens, and when active, its opacity reduces to `{motion.button-active-opacity}` (`0.4`).

```css
.button-primary {
  background-color: var(--button-primary-bg, #f3f3f3);
  color: var(--button-primary-text, #121212);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-heading2-font-weight, 600);
  padding: 0px 24px; /* Inferred from button data */
  border: none;
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) linear;
  height: 36px; /* Inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-primary:hover {
  background-color: var(--button-primary-hover-bg, #e5e5e5); /* inferred from screenshot */
}

.button-primary:active {
  opacity: 0.4; /* Extracted from --button-active-opacity */
}

.button-primary:disabled {
  background-color: var(--disabled-bg, rgba(18, 18, 18, 0.08));
  color: var(--disabled-text, rgba(18, 18, 18, 0.24));
  cursor: default;
  opacity: 0.4; /* Extracted from --button-disabled-opacity */
}
```

#### Secondary Button
The Secondary Button, such as "Create account," uses a dark background with white text, providing a strong but less prominent call to action than the primary variant. It features `{radius.md}` (`4px`) rounded corners. On hover, its background lightens slightly, and when active, its opacity reduces.

```css
.button-secondary {
  background-color: var(--button-secondary-bg, #121212);
  color: var(--button-secondary-text, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-heading2-font-weight, 600);
  padding: 6px 12px; /* Extracted from button data */
  border: none;
  border-radius: var(--radius-md, 4px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) linear;
  height: 36px; /* Inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-secondary:hover {
  background-color: var(--button-secondary-hover-bg, #0a0a0a); /* inferred from screenshot */
}

.button-secondary:active {
  opacity: 0.4; /* Extracted from --button-active-opacity */
}

.button-secondary:disabled {
  background-color: var(--disabled-bg, rgba(18, 18, 18, 0.08));
  color: var(--disabled-text, rgba(18, 18, 18, 0.24));
  cursor: default;
  opacity: 0.4; /* Extracted from --button-disabled-opacity */
}
```

#### Ghost Button
Ghost Buttons, like "Sign in" or "Explore Artist Pro," are transparent with a subtle border, used for less emphasized actions or navigation. They adapt their text and border color based on context. On hover, a subtle background appears, and when active, their opacity reduces.

```css
.button-ghost {
  background-color: transparent;
  color: var(--button-ghost-text, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-heading2-font-weight, 600);
  padding: 6px 12px; /* Inferred from button data */
  border: 1px solid var(--button-ghost-border, #ffffff);
  border-radius: var(--radius-md, 4px); /* Can be full, e.g., for "Explore Artist Pro" */
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) linear, border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
  height: 36px; /* Inferred from screenshot */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-ghost:hover {
  background-color: var(--button-outline-hover-bg, rgb(245, 245, 245)); /* Extracted from pseudoStates */
  border-color: var(--button-outline-hover-outline, rgba(18, 18, 18, 0.16)); /* Extracted from pseudoStates */
  color: var(--text-primary, #121212); /* inferred from screenshot */
}

.button-ghost:active {
  opacity: 0.4; /* Extracted from --button-active-opacity */
}

.button-ghost:disabled {
  border-color: var(--disabled-text, rgba(18, 18, 18, 0.24));
  color: var(--disabled-text, rgba(18, 18, 18, 0.24));
  cursor: default;
  opacity: 0.4; /* Extracted from --button-disabled-opacity */
}
```

### Cards & Containers
SoundCloud uses cards to group content, typically with a slightly lighter background than the main page to create visual separation. They feature subtle rounded corners and no explicit shadows, relying on color contrast for definition.

#### Standard Card
Standard cards serve as content containers, such as the sections "Never Stop Listening" or "Calling All Creators." They are characterized by a `{colors.background-medium}` (`#303030`) background and `{radius.md}` (`4px`) rounded corners. No explicit shadow is observed.

```css
.card {
  background-color: var(--surface, #303030);
  border-radius: var(--radius-md, 4px);
  padding: var(--spacing-8x, 32px); /* inferred from screenshot */
  color: var(--text-inverse, #ffffff);
  transition: transform var(--motion-duration-base, 0.2s) var(--motion-easing-decelerate, ease-out);
}

.card:hover {
  transform: translateY(-2px); /* inferred from screenshot */
  /* No explicit shadow change detected, relying on transform for hover */
}
```

### Inputs & Forms
Form elements are designed for clarity and ease of use within the dark theme, featuring distinct focus states for accessibility.

#### Text Input
The Text Input, exemplified by the search bar, uses a `{colors.background-medium}` (`#303030`) fill with a `{colors.border-subtle}` (`#999999`) border, ensuring visibility on dark backgrounds. It has `{radius.md}` (`4px`) rounded corners. A clear focus ring highlights interaction.

```css
.input-text {
  background-color: var(--surface, #303030);
  color: var(--text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-body-font-weight, 400);
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--border-subtle, #999999);
  border-radius: var(--radius-md, 4px);
  transition: border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.input-text::placeholder {
  color: var(--text-muted, #999999);
}

.input-text:focus {
  outline: none;
  border-color: var(--focus-ring, #044dd2); /* inferred from screenshot */
  box-shadow: 0 0 0 2px var(--focus-ring, #044dd2); /* Extracted from --link-primary-focus-box-shadow */
}

.input-text:disabled {
  background-color: var(--disabled-bg, rgba(18, 18, 18, 0.08)); /* Extracted from pseudoStates */
  color: var(--disabled-text, rgba(18, 18, 18, 0.24));
  border-color: transparent; /* Extracted from --input-disabled-border-color */
  cursor: default;
}
```

#### Form Label
Form labels are typically set in `{colors.text-inverse}` (`#ffffff`) using the body font, positioned above their corresponding input fields.

```css
.form-label {
  color: var(--text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-caption-font-size, 14px);
  font-weight: var(--typography-body-font-weight, 400);
  margin-bottom: var(--spacing-2x, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
Checkboxes and radio buttons feature a distinct `{colors.brand-orange}` (`#f50`) fill when checked, providing clear visual feedback.

```css
.checkbox-input,
.radio-input {
  /* Hidden native input */
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-visual,
.radio-visual {
  display: inline-block;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--text-muted, #999999); /* inferred from screenshot */
  border-radius: var(--radius-sm, 3px); /* For checkbox */
  position: relative;
  transition: background-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out), border-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
  vertical-align: middle;
  margin-right: var(--spacing-2x, 8px); /* inferred from screenshot */
}

.radio-visual {
  border-radius: var(--radius-full, 9999px); /* For radio */
}

.checkbox-input:checked + .checkbox-visual,
.radio-input:checked + .radio-visual {
  background-color: var(--brand-orange, #f50); /* Extracted from pseudoStates */
  border-color: var(--brand-orange, #f50);
}

.checkbox-input:checked + .checkbox-visual::before {
  content: '';
  position: absolute;
  top: 3px; /* inferred from screenshot */
  left: 6px; /* inferred from screenshot */
  width: 5px; /* inferred from screenshot */
  height: 10px; /* inferred from screenshot */
  border: solid var(--text-inverse, #ffffff);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.radio-input:checked + .radio-visual::after {
  content: '';
  position: absolute;
  top: 4px; /* inferred from screenshot */
  left: 4px; /* inferred from screenshot */
  width: 8px; /* inferred from screenshot */
  height: 8px; /* inferred from screenshot */
  border-radius: var(--radius-full, 9999px);
  background-color: var(--text-inverse, #ffffff);
}
```

### Navigation
The navigation system is clear and concise, adapting to the dark theme with distinct states for links.

#### Top Navigation Bar
The Top Navigation Bar maintains a fixed position at the top, featuring a `{colors.background-dark}` (`#121212`) background and a fixed height. It uses `height` transitions for dynamic adjustments.

```css
.nav-bar {
  background-color: var(--background-dark, #121212);
  height: var(--header-height, 46px); /* Extracted from cssVariables */
  padding: 0 var(--spacing-4x, 16px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000; /* Extracted from zIndexValues */
  transition: height var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out); /* Extracted from animations */
}
```

#### Navigation Link
Navigation links, such as "Sign in" or "Create account" in the header, are typically `{colors.text-inverse}` (`#ffffff`) or `{colors.text-muted}` (`#999999`) and gain an underline on hover. An active state is visually distinct.

```css
.nav-link {
  color: var(--text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-caption-font-size, 14px);
  font-weight: var(--typography-body-font-weight, 400);
  text-decoration: none;
  padding: var(--spacing-2x, 8px) var(--spacing-3x, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out), text-decoration-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.nav-link:hover {
  text-decoration: underline; /* Extracted from --link-standard-hover-text-decoration */
  text-decoration-color: var(--text-inverse, #ffffff); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--link-blue, #699fff); /* inferred from screenshot */
  font-weight: var(--typography-heading2-font-weight, 600); /* inferred from screenshot */
}
```

#### Dropdown Menu
(No explicit dropdown menu observed in source, inferring common dark theme styles.)
Dropdown menus would typically feature a `{colors.background-medium}` (`#303030`) background, `{radius.md}` (`4px`) corners, and `{colors.text-inverse}` (`#ffffff`) text for items.

```css
.dropdown-menu {
  background-color: var(--surface, #303030);
  border-radius: var(--radius-md, 4px);
  padding: var(--spacing-2x, 8px) 0;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.25); /* inferred from common UI patterns */
  position: absolute;
  z-index: 100; /* inferred from common UI patterns */
  min-width: 160px; /* inferred from common UI patterns */
  transition: opacity var(--motion-duration-base, 0.2s) var(--motion-easing-decelerate, ease-out), transform var(--motion-duration-base, 0.2s) var(--motion-easing-decelerate, ease-out);
}

.dropdown-menu-item {
  color: var(--text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-body-font-weight, 400);
  padding: var(--spacing-2x, 8px) var(--spacing-4x, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.dropdown-menu-item:hover {
  background-color: var(--background-dark, #121212); /* inferred from screenshot */
}
```

### Links
Links are a fundamental interactive element, with distinct styles for primary and secondary contexts.

#### Standard Link
Standard links, primarily `{colors.link-blue}` (`#699fff`), are used for navigation and actionable text. They gain an underline and slightly darken on hover.

```css
.link-standard {
  color: var(--link-blue, #699fff);
  text-decoration: none;
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-body-font-size, 17px);
  font-weight: var(--typography-body-font-weight, 400);
  transition: color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out), text-decoration-color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.link-standard:hover {
  color: var(--link-active, rgba(4,77,210,0.6)); /* Extracted from pseudoStates */
  text-decoration: underline; /* Extracted from --link-standard-hover-text-decoration */
  text-decoration-color: var(--link-active, rgba(4,77,210,0.6)); /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--link-blue, #699fff); /* inferred from screenshot */
}
```

#### Secondary Link
Secondary links, often `{colors.text-muted}` (`#999999`), are used for less critical actions or supplementary information. They become slightly transparent on hover.

```css
.link-secondary {
  color: var(--text-muted, #999999);
  text-decoration: none;
  font-family: var(--typography-body-family, 'Söhne');
  font-size: var(--typography-caption-font-size, 14px);
  font-weight: var(--typography-body-font-weight, 400);
  transition: color var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.link-secondary:hover {
  color: var(--link-secondary-hover, hsla(0,0%,40%,0.4)); /* Extracted from cssVariables */
  text-decoration: none; /* Extracted from --link-secondary-hover-text-decoration */
}

.link-secondary:visited {
  color: var(--text-muted, #999999); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: SoundCloud utilizes a `4px` base unit for its spacing scale, providing a consistent rhythm across the interface.
    -   Base `4px` → `0, 4, 8, 12, 16, 20, 24, 32, 48`
    -   `0px`: For tight alignments or no spacing.
    -   `4px`: Smallest internal padding, icon-to-text spacing.
    -   `8px`: Standard internal padding, element separation.
    -   `12px`: Padding for smaller buttons, form field vertical spacing.
    -   `16px`: Horizontal padding for containers, larger button padding.
    -   `20px`: Moderate spacing between components.
    -   `24px`: Sectional padding, prominent component separation.
    -   `32px`: Larger vertical spacing between major content blocks.
    -   `48px`: Generous section padding, hero content spacing.
-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max content width: `1200px` (inferred from screenshot)
    -   Columns: `12` (inferred from common practice)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section padding: `48px` vertical, `24px` horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: SoundCloud embraces a spacious layout, particularly on its dark backgrounds. Generous vertical and horizontal padding, often `32px` to `48px`, creates clear visual separation between content blocks and interactive elements. This ample whitespace reduces visual clutter, allowing the vibrant typography and imagery to stand out and guide the user's focus. The deliberate use of negative space contributes to a modern and uncluttered aesthetic, enhancing content readability and user experience.
-   **Border Radius Scale**:
    -   `sm` (`3px`): For subtle rounding on smaller elements (e.g., checkbox corners).
    -   `md` (`4px`): Standard rounded corners for buttons, cards, and input fields.
    -   `full` (`9999px`): For pill-shaped buttons or fully rounded elements (e.g., "Upload" button).

## 6. Depth & Elevation
SoundCloud primarily uses z-index values to manage stacking context, with minimal reliance on `box-shadow` for depth, especially on its dark theme.

-   **Base (z-0)**: Default stacking context for most content elements.
-   **Queue Drag Cover (z-1)**: `z-index: 1` — Used for overlays during drag operations within queues.
-   **Cookie Consent Block (z-3)**: `z-index: 3` — Specific cookie consent elements.
-   **Play Controls Panel (z-350)**: `z-index: 350` — The main playback controls panel.
-   **Header (z-1000)**: `z-index: 1000` — The persistent top navigation bar.
-   **Play Controls Bar (z-1001)**: `z-index: 1001` — The full-width play controls bar at the bottom of the viewport.
-   **Upload Modal (z-2000)**: `z-index: 2000` — Modals for user actions like uploading.
-   **Cookie Consent Dark Filter (z-2147483645)**: `z-index: 2147483645` — Dark overlay for the cookie consent modal.
-   **Cookie Consent Modal (z-2147483646)**: `z-index: 2147483646` — The highest stacking context for critical modal interfaces.

Shadow Philosophy: SoundCloud's dark theme largely forgoes explicit `box-shadow` for elevation, instead relying on color contrast and distinct z-index values to establish layering and hierarchy. Elements appear to float above one another through their stacking order rather than cast visible shadows, maintaining a clean and modern aesthetic. The absence of shadows prevents visual muddiness on dark backgrounds, ensuring clarity for all interactive components.

## 7. Do's and Don'ts

### Do's
-   **Do** use `{colors.text-inverse}` (`#ffffff`) for body text on `{colors.background-dark}` (`#121212`); measured ratio `18.73`, passes AAA.
-   **Do** ensure all interactive elements, like the Primary Button with `{colors.button-primary-bg}` (`#f3f3f3`), have `{radius.full}` (`9999px`) for a consistent pill shape.
-   **Do** apply `{colors.link-blue}` (`#699fff`) for standard links, ensuring they are distinct from regular text.
-   **Do** use `Söhne` `65px` `600` for hero section display text to create immediate visual impact.
-   **Do** maintain `1.5` line-height for `Body` text (`17px`) to enhance readability on dark surfaces.
-   **Do** separate major content sections with at least `{spacing.scale.8}` (`32px`) of vertical padding.
-   **Do** utilize `{colors.brand-orange}` (`#f50`) as the brand's accent for checked states in checkboxes.
-   **Do** ensure `:focus` states on inputs show a clear `{colors.focus-ring}` (`#044dd2`) `2px` `box-shadow` for accessibility.
-   **Do** use `{colors.text-muted}` (`#999999`) for secondary information, ensuring it remains legible on `{colors.background-dark}` (`#121212`); measured ratio `6.58`, passes AA.

### Don'ts
-   **Don't** use `{colors.text-primary}` (`#121212`) on `{colors.background-medium}` (`#303030`); measured ratio `3.26`, only passes AA-large, potentially difficult for small text.
-   **Don't** introduce custom spacing values; stick strictly to the `{spacing.scale}` of `0, 4, 8, 12, 16, 20, 24, 32, 48` px.
-   **Don't** use `Söhne` `600` weight for `Body` text; reserve it for `Heading` roles to maintain hierarchy.
-   **Don't** use `{radius.sm}` (`3px`) on large interactive elements like the Primary Button; always use `{radius.full}` (`9999px`).
-   **Don't** place `{colors.text-inverse}` (`#ffffff`) on `{colors.background-light}` (`#f3f3f3`); measured ratio `1.06`, fails AA.
-   **Don't** apply `text-decoration: underline` to `Secondary Links` on hover, as `text-decoration: none` is explicitly defined.
-   **Don't** use `opacity` less than `0.4` for `:disabled` states; `0.4` is the established minimum for visibility.
-   **Don't** deviate from the `{colors.background-dark}` (`#121212`) for the main application background.

## 8. Responsive Behavior
_Note: breakpoints below are extracted from the source. Adjust to the brand's actual media queries when implementing._

-   **Extracted Breakpoints**:
    -   **Mobile Small** (~`530px`): Content stacks vertically, main navigation often collapses into a hamburger menu.
    -   **Mobile Large** (~`600px`): Adjustments for slightly larger mobile devices, potentially showing more navigation items.
    -   **Tablet** (~`769px`): Two-column layouts may emerge, typography scales down from desktop sizes.
    -   **Desktop** (~`1079px`): Standard desktop layout, full navigation, and multi-column content.
    -   **Desktop Large** (~`1239px`): Wider content areas and increased padding for large screens.
-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons and links, have a minimum touch target area of `44px` x `44px` (inferred from common practice).
    -   Maintain at least `{spacing.scale.2}` (`8px`) clear space around touch targets to prevent accidental taps (inferred from common practice).
-   **Collapsing Strategy**:
    -   **Navigation**: The top navigation bar (height `46px`) transforms from horizontal links to a hamburger menu on screens below `769px`.
    -   **Cards**: Content cards transition from multi-column grids to single-column stacking below `769px` to optimize for vertical scrolling.
    -   **Typography**: `Display` and `Heading 1` font sizes will scale down proportionally on smaller viewports to prevent overflow and maintain legibility.
    -   **Padding**: Section padding, typically `{spacing.scale.9}` (`48px`), reduces to `{spacing.scale.6}` (`24px`) or `{spacing.scale.5}` (`20px`) on mobile.
    -   **Forms**: Input fields and form elements will expand to full width on mobile to maximize usability.
    -   **Spacing**: Horizontal spacing between inline elements may decrease to `{spacing.scale.2}` (`8px`) on mobile to conserve space.

## 9. Agent Prompt Guide
-   **Quick Color Reference**:
    -   `brand-orange`: `#f50`
    -   `link-blue`: `#699fff`
    -   `background-dark`: `#121212`
    -   `background-medium`: `#303030`
    -   `background-light`: `#f3f3f3`
    -   `background-white`: `#ffffff`
    -   `text-inverse`: `#ffffff`
    -   `text-primary`: `#121212`
    -   `text-muted`: `#999999`
    -   `link-active`: `rgba(4,77,210,0.6)`
    -   `focus-ring`: `#044dd2`
    -   `button-primary-bg`: `#f3f3f3`
    -   `button-primary-text`: `#121212`
    -   `button-secondary-bg`: `#121212`
    -   `button-secondary-text`: `#ffffff`
    -   `button-ghost-text`: `#ffffff`
    -   `button-ghost-border`: `#ffffff`
    -   `border-subtle`: `#999999`
    -   `disabled-bg`: `rgba(18, 18, 18, 0.08)`
    -   `disabled-text`: `rgba(18, 18, 18, 0.24)`
-   **Iteration Guide**:
    1.  Always use `Söhne` font family for all text elements.
    2.  Ensure CTAs like the Primary Button use `{radius.full}` (`9999px`) and `height: 36px`.
    3.  Set `Display` text to `65px` `600` and `Body` text to `17px` `400` with `1.5` line-height.
    4.  Apply `{spacing.scale.4}` (`16px`) horizontal padding to main containers and `{spacing.scale.8}` (`32px`) vertical spacing between major sections.
    5.  Use `{radius.md}` (`4px`) for card and input border-radius.
    6.  Default card background is `{colors.background-medium}` (`#303030`) with `{colors.text-inverse}` (`#ffffff`) text.
    7.  Input fields must have a `{colors.focus-ring}` (`#044dd2`) `2px` `box-shadow` on focus.
    8.  Navigation links should transition `color` and `text-decoration-color` over `{motion.duration-fast}` (`0.1s`) with `ease-in-out` easing.
    9.  The main `nav-bar` has a fixed height of `46px` and `background-color: #121212`.
    10. Maintain a minimum contrast ratio of `4.5:1` for all text, especially `{colors.text-muted}` (`#999999`) on `{colors.background-dark}` (`#121212`).
    11. All interactive elements should have a minimum touch target of `44px` and `{spacing.scale.2}` (`8px`) clear space.
    12. Implement modal entry/exit transitions using `{motion.duration-medium}` (`0.3s`) with `{motion.easing-bounce-in}` and `{motion.easing-bounce-out}` respectively.