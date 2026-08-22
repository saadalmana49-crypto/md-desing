---
name: Cutpunk
url: https://cutpunk.ai
colors:
  primary-accent: '#d0ff00'
  primary-accent-hover: '#82b541' # (inferred from screenshot)
  background-dark: '#0e0e10'
  background-dark-secondary: '#19191c'
  background-dark-tertiary: '#1f1f22'
  surface-light: '#faf9f4'
  surface-light-secondary: '#f1efe7'
  text-primary-dark: '#0e0e10'
  text-inverse-light: '#f6f3f5'
  text-inverse-white: '#ffffff'
  text-muted-dark: '#6c6a6e'
  text-muted-dark-secondary: '#5e5e63'
  text-muted-dark-tertiary: '#acaaad'
  accent-orange: '#ff6b35'
  accent-purple: '#c180ff'
  border-dark: 'rgba(14, 14, 16, 0.1)'
  border-light: 'rgba(250, 249, 244, 0.1)' # (inferred from screenshot)
typography:
  display:
    family: 'Druk Wide'
    size: 88px # (inferred from screenshot)
    weight: 800
    line-height: 0.95
  heading-h1: # (inferred, larger than extracted H2)
    family: 'Druk Wide'
    size: 72px # (inferred from screenshot)
    weight: 800
    line-height: 0.95
  heading-h2:
    family: 'Druk Wide'
    size: 42px
    weight: 800
    line-height: 0.95
  heading-h3:
    family: 'Druk Wide'
    size: 22px
    weight: 400
    line-height: 1.2
  body:
    family: 'Manrope'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Manrope'
    size: 11px
    weight: 400
    line-height: 1.5
  code:
    family: 'ui-monospace'
    size: 13px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32]
radius:
  sm: 6px
  md: 12px
  lg: 14px
  full: 50% # (inferred from screenshot for circular elements)
elevation:
  card: '0px 30px 60px -20px rgba(14, 14, 16, 0.35)'
  card-hover: '0px 60px 120px -40px rgba(14, 14, 16, 0.45), 0px 8px 24px -8px rgba(14, 14, 16, 0.18)'
  focus-ring-primary: '0px 0px 0px 1px rgb(208, 255, 0)'
  focus-ring-purple: '0px 0px 0px 1px rgb(193, 128, 255), 0px 0px 12px 0px rgba(193, 128, 255, 0.667)'
layout:
  max-width: 1320px
  gutter: 32px
  columns: 12 # (inferred from screenshot)
motion:
  duration-base: '0.2s' # (inferred from common UI transitions)
  easing-standard: 'ease-in-out' # (inferred for smooth transitions)
components:
  button-primary:
    bg: '{colors.primary-accent}'
    text: '{colors.text-primary-dark}'
    border: '{colors.primary-accent}'
    radius: '0px'
    padding: '18px 32px'
  button-secondary:
    bg: '{colors.background-dark}'
    text: '{colors.text-inverse-light}'
    border: '{colors.text-inverse-light}'
    radius: '0px'
    padding: '18px 32px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-primary-dark}'
    border: '{colors.text-primary-dark}'
    radius: '0px'
    padding: '16px 28px'
  card-light:
    bg: '{colors.surface-light}'
    text: '{colors.text-primary-dark}'
    border: '{colors.border-dark}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
  card-dark:
    bg: '{colors.background-dark-secondary}'
    text: '{colors.text-inverse-light}'
    border: '{colors.border-dark}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
---

# Design System Inspired by Cutpunk

## 1. Visual Theme & Atmosphere
Cutpunk's design system is characterized by a bold, high-contrast aesthetic, leveraging a vibrant primary accent color, `#d0ff00`, against a predominantly dark background, `#0e0e10`. This creates a striking, energetic feel, reinforced by the use of the `Druk Wide` typeface for headlines, conveying a sense of directness and power. Ample negative space and structured layouts ensure clarity, while subtle CSS animations like `cutpunkBlink` and `cutpunkPlayhead` add dynamic interaction without overwhelming the user.

The brand's visual identity is rooted in a modern, tech-forward approach, using a dark mode interface with neon-like highlights to emphasize interactive elements and key information. Light-colored content sections, such as those with `#faf9f4` backgrounds, provide visual breaks and serve as canvases for detailed information, maintaining readability with `#0e0e10` text. The overall atmosphere is one of efficiency and cutting-edge technology, designed to appeal to professional video editors and creators.

Key Characteristics:
- Primary accent color `#d0ff00` for CTAs and highlights.
- Dominant dark background `#0e0e10` with light text.
- Bold, condensed `Druk Wide` for display typography.
- Generous use of 32px and 24px spacing for clarity.
- Interactive elements feature subtle CSS keyframe animations.
- Cards use `0px 30px 60px -20px rgba(14, 14, 16, 0.35)` shadow for depth.
- Max content width of 1320px with 32px horizontal padding.

## 2. Color Palette & Roles
- **Primary Accent (`#d0ff00`)** — The signature neon yellow, used for primary calls-to-action, active states, highlights, and key informational badges.
- **Primary Accent Hover (`#82b541`)** — A slightly darker green-yellow, used for the hover state of primary interactive elements (inferred from screenshot).
- **Background Dark (`#0e0e10`)** — The foundational dark background color for most sections and UI elements, providing high contrast for light text.
- **Background Dark Secondary (`#19191c`)** — A slightly lighter dark background, used for nested dark containers or distinct dark sections.
- **Background Dark Tertiary (`#1f1f22`)** — Another shade of dark background, for subtle variations in dark UI elements.
- **Surface Light (`#faf9f4`)** — A warm off-white surface color, used for content cards, light sections, and distinct informational blocks.
- **Surface Light Secondary (`#f1efe7`)** — A slightly darker off-white surface, used for secondary light sections or subtle background variations.
- **Text Primary Dark (`#0e0e10`)** — The main text color used on light backgrounds, ensuring strong readability.
- **Text Inverse Light (`#f6f3f5`)** — The primary text color used on dark backgrounds, offering excellent contrast.
- **Text Inverse White (`#ffffff`)** — Pure white text, used sparingly for specific highlights or icons on dark backgrounds.
- **Text Muted Dark (`#6c6a6e`)** — A dark grey for secondary information or less prominent text on dark backgrounds.
- **Text Muted Dark Secondary (`#5e5e63`)** — A slightly lighter dark grey for muted text on light surfaces.
- **Text Muted Dark Tertiary (`#acaaad`)** — A light grey for tertiary text or subtle labels on dark backgrounds.
- **Accent Orange (`#ff6b35`)** — A vibrant orange, used as a secondary accent for specific highlights or data visualization.
- **Accent Purple (`#c180ff`)** — A bright purple, used as another secondary accent for specific highlights or data visualization.
- **Border Dark (`rgba(14, 14, 16, 0.1)`)** — A subtle dark border, used for separating elements on light surfaces.
- **Border Light (`rgba(250, 249, 244, 0.1)`)** — A subtle light border, used for separating elements on dark surfaces (inferred from screenshot).

## 3. Typography Rules
- **Font Family**: Primary headings use 'Druk Wide', `sans-serif`. Body text and general UI elements use 'Manrope', `system-ui`, `sans-serif`. Code snippets use 'ui-monospace', `monospace`.
- **Hierarchy**:
  - **Display**: `Druk Wide` `88px` `800` · line-height `0.95` · tracking `-0.005em` · Used for hero headlines, commanding immediate attention.
  - **Heading H1**: `Druk Wide` `72px` `800` · line-height `0.95` · tracking `-0.005em` · For main section titles, slightly smaller than display.
  - **Heading H2**: `Druk Wide` `42px` `800` · line-height `0.95` · tracking `-0.005em` · For major content headings, such as `cutpunk-h2` class.
  - **Heading H3**: `Druk Wide` `22px` `400` · line-height `1.2` · tracking `none` · For sub-headings and key feature titles.
  - **Body**: `Manrope` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text for readability.
  - **Caption**: `Manrope` `11px` `400` · line-height `1.5` · tracking `none` · For small labels, metadata, and secondary information.
  - **Code/Mono**: `ui-monospace` `13px` `400` · line-height `1.5` · tracking `none` · For code blocks or fixed-width text.
- **Principles**:
  - **High Impact Headings**: Utilize `Druk Wide` at `800` weight with tight line-heights for prominent, attention-grabbing titles.
  - **Legible Body Text**: Employ `Manrope` `16px` `400` with generous line-height for optimal readability in long-form content.
  - **Clear Hierarchy**: Distinguish content sections using a clear progression from large, bold `Druk Wide` headings to smaller, lighter `Manrope` body text.
  - **Purposeful Contrast**: Pair dark text (`#0e0e10`) on light surfaces (`#faf9f4`) and light text (`#f6f3f5`) on dark backgrounds (`#0e0e10`) consistently for accessibility.
  - **Minimal Tracking**: Apply slight negative tracking to display headings to enhance their condensed appearance, but keep body text tracking neutral.

## 4. Component Stylings

### Buttons
Cutpunk features distinct button styles: a high-visibility primary button in neon yellow, a dark-filled secondary button, and a ghost (outlined) button for less prominent actions. All buttons have sharp, unrounded corners and bold text.

#### Primary Button
A vibrant neon yellow button for primary actions, with dark text.

```css
.button-primary {
  background-color: var(--color-primary-accent, #d0ff00);
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 32px;
  border: 1px solid var(--color-primary-accent, #d0ff00);
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-primary:hover {
  background-color: var(--color-primary-accent-hover, #82b541); /* inferred from screenshot */
  border-color: var(--color-primary-accent-hover, #82b541); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-primary-accent, #d0ff00);
  border-color: var(--color-primary-accent, #d0ff00);
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  border-color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  color: var(--color-background-dark, #0e0e10); /* inferred from screenshot */
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

#### Secondary Button
A dark-filled button with light text and a light border, used for secondary actions.

```css
.button-secondary {
  background-color: var(--color-background-dark, #0e0e10);
  color: var(--color-text-inverse-light, #f6f3f5);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 32px;
  border: 1px solid var(--color-text-inverse-light, #f6f3f5);
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-secondary:hover {
  background-color: var(--color-background-dark-secondary, #19191c); /* inferred from screenshot */
  border-color: var(--color-text-inverse-white, #ffffff); /* inferred from screenshot */
  color: var(--color-text-inverse-white, #ffffff); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-background-dark, #0e0e10);
  border-color: var(--color-text-inverse-light, #f6f3f5);
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--color-background-dark, #0e0e10);
  border-color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

#### Ghost Button
An outlined button with transparent background, used for tertiary actions or navigation.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 15px; /* from extracted buttons */
  font-weight: 700;
  padding: 16px 28px;
  border: 1px solid var(--color-text-primary-dark, #0e0e10);
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.button-ghost:hover {
  background-color: var(--color-text-primary-dark, #0e0e10); /* inferred from screenshot */
  color: var(--color-text-inverse-white, #ffffff); /* inferred from screenshot */
  border-color: var(--color-text-primary-dark, #0e0e10);
}

.button-ghost:active {
  background-color: var(--color-background-dark-secondary, #19191c); /* inferred from screenshot */
  color: var(--color-text-inverse-white, #ffffff); /* inferred from screenshot */
  border-color: var(--color-background-dark-secondary, #19191c); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-ghost:disabled {
  background-color: transparent;
  border-color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

### Cards & Containers
Cutpunk uses both light and dark cards, often with subtle borders and shadows to provide clear content separation. The `cutpunk-card-split` class indicates a grid-based card layout.

#### Standard Light Card
A light-surfaced card with dark text, used for testimonials and feature blocks.

```css
.card-light {
  background-color: var(--color-surface-light, #faf9f4);
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 32px; /* inferred from screenshot */
  border: 1px solid var(--color-border-dark, rgba(14, 14, 16, 0.1));
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-card, 0px 30px 60px -20px rgba(14, 14, 16, 0.35));
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card-light:hover {
  box-shadow: var(--elevation-card-hover, 0px 60px 120px -40px rgba(14, 14, 16, 0.45), 0px 8px 24px -8px rgba(14, 14, 16, 0.18));
  transform: translateY(-2px); /* inferred from screenshot */
}
```

#### Dark Feature Card
A dark-surfaced card, often used for data-rich components or interactive timelines.

```css
.card-dark {
  background-color: var(--color-background-dark-secondary, #19191c);
  color: var(--color-text-inverse-light, #f6f3f5);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 24px; /* inferred from screenshot */
  border: 1px solid var(--color-border-light, rgba(250, 249, 244, 0.1)); /* inferred from screenshot */
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-card, 0px 30px 60px -20px rgba(14, 14, 16, 0.35));
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card-dark:hover {
  box-shadow: var(--elevation-card-hover, 0px 60px 120px -40px rgba(14, 14, 16, 0.45), 0px 8px 24px -8px rgba(14, 14, 16, 0.18));
  transform: translateY(-2px); /* inferred from screenshot */
}
```

### Inputs & Forms
Input fields are typically dark with light text, reflecting the overall UI theme.

#### Text Input
A text input field with a dark background and light text, featuring a distinct focus ring.

```css
.input-text {
  background-color: var(--color-background-dark-secondary, #19191c);
  color: var(--color-text-inverse-light, #f6f3f5);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--color-text-muted-dark, #6c6a6e); /* inferred from screenshot */
  border-radius: var(--radius-sm, 6px);
  outline: none;
  transition: border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.input-text:focus {
  border-color: var(--color-primary-accent, #d0ff00);
  box-shadow: var(--elevation-focus-ring-primary, 0px 0px 0px 1px rgb(208, 255, 0));
}

.input-text:disabled {
  background-color: var(--color-background-dark-tertiary, #1f1f22); /* inferred from screenshot */
  color: var(--color-text-muted-dark-tertiary, #acaaad);
  border-color: var(--color-text-muted-dark-tertiary, #acaaad);
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

#### Form Label
Standard label text for input fields.

```css
.form-label {
  color: var(--color-text-inverse-light, #f6f3f5);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 14px; /* inferred from screenshot */
  font-weight: 400;
  margin-bottom: var(--spacing-4, 4px);
  display: block;
}
```

#### Checkbox/Radio
(none observed in source)

### Navigation
The top navigation bar is light with dark text, featuring clear, unstyled links and a prominent primary CTA.

#### Top Navigation Bar
The header navigation bar, typically light with dark text and a strong accent button.

```css
.nav-bar {
  background-color: var(--color-surface-light, #faf9f4);
  color: var(--color-text-primary-dark, #0e0e10);
  padding: 0 var(--layout-gutter, 32px);
  height: 68px; /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-dark, rgba(14, 14, 16, 0.1)); /* inferred from screenshot */
}
```

#### Navigation Link
A standard link within the navigation bar, with a subtle hover effect.

```css
.nav-link {
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* inferred from screenshot */
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.nav-link:hover {
  color: var(--color-primary-accent, #d0ff00); /* inferred from screenshot */
  background-color: var(--color-surface-light-secondary, #f1efe7); /* inferred from screenshot */
  border-radius: var(--radius-sm, 6px); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary-accent, #d0ff00);
  font-weight: 700; /* inferred from screenshot */
}
```

#### Dropdown Menu
(none observed in source)

### Links
Links are generally simple, using the primary dark text color on light backgrounds and light text on dark backgrounds, with a clear hover state.

#### Standard Link
A default link style, often underlined on hover.

```css
.link-standard {
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out),
              text-decoration var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.link-standard:hover {
  color: var(--color-primary-accent, #d0ff00); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--color-text-muted-dark, #6c6a6e); /* inferred from screenshot */
}
```

#### Secondary Link
A link style used for less emphasized actions or supplementary information, often with a muted color.

```css
.link-secondary {
  color: var(--color-text-muted-dark-secondary, #5e5e63);
  font-family: var(--typography-body-family, 'Manrope'), system-ui, sans-serif;
  font-size: 14px; /* inferred from screenshot */
  font-weight: 400;
  text-decoration: none;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.link-secondary:hover {
  color: var(--color-text-primary-dark, #0e0e10); /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--color-text-muted-dark-tertiary, #acaaad); /* inferred from screenshot */
}
```

### Badges
#### Status Badge - Accent
A small, rectangular badge using the primary accent color for key status indicators.

```css
.badge-status-accent {
  background-color: var(--color-primary-accent, #d0ff00);
  color: var(--color-text-primary-dark, #0e0e10);
  font-family: var(--typography-caption-family, 'Manrope'), system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 6px);
  text-transform: uppercase;
  letter-spacing: 0.05em; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  gap: 4px; /* inferred from screenshot */
}
```

## 5. Layout Principles
- **Spacing System**: Cutpunk utilizes a 4px base unit spacing system, creating a consistent rhythm across the interface.
  - Scale: `[0, 4, 8, 12, 16, 20, 24, 32]`
  - Usage Context:
    - `0px`: No spacing, for tightly packed elements.
    - `4px`: Smallest element gaps, inline icon-text spacing.
    - `8px`: Minor spacing between related elements, list item padding.
    - `12px`: Spacing within components, small button padding.
    - `16px`: Standard spacing for text blocks, input padding.
    - `20px`: Vertical spacing between form elements or small paragraphs.
    - `24px`: Section padding, component internal spacing.
    - `32px`: Major section padding, large component gaps, `cutpunk-container` horizontal padding.
- **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._:
  - Max Width: `1320px` (from `.cutpunk-container` class)
  - Columns: `12` (inferred from common grid systems and content distribution)
  - Gutter: `32px` (from `.cutpunk-container` padding, also used as gap in `cutpunk-grid-2`)
  - Section Padding: `88px 0px` (vertical padding from `.cutpunk-section` class)
- **Whitespace Philosophy**: Cutpunk employs generous whitespace to create a clean, modern aesthetic and improve readability. Large vertical and horizontal padding around content blocks (`88px` vertical, `32px` horizontal) ensures elements breathe. This deliberate use of negative space emphasizes key content and calls-to-action, preventing visual clutter in data-dense interfaces.
- **Border Radius Scale**:
  - `sm`: `6px` — Used for smaller interactive elements like badges or input fields.
  - `md`: `12px` — Standard radius for cards and larger containers.
  - `lg`: `14px` — For prominent cards or special UI elements.
  - `full`: `50%` — For perfectly circular elements like avatars or icons.

## 6. Depth & Elevation
Cutpunk uses subtle shadows to create depth, primarily for cards and interactive elements, enhancing their visual separation from the background.
- **Flat (z-0)**: `none` — Default state for most background elements and text.
- **Card (z-1)**: `0px 30px 60px -20px rgba(14, 14, 16, 0.35)` — Standard shadow for cards and informational blocks on dark or light surfaces.
- **Card Hover (z-2)**: `0px 60px 120px -40px rgba(14, 14, 16, 0.45), 0px 8px 24px -8px rgba(14, 14, 16, 0.18)` — Enhanced shadow on hover for interactive cards, indicating elevated state.
- **Focus Ring Primary (z-3)**: `0px 0px 0px 1px rgb(208, 255, 0)` — A crisp 1px primary accent border for focus states on interactive elements.
- **Focus Ring Purple (z-3)**: `0px 0px 0px 1px rgb(193, 128, 255), 0px 0px 12px 0px rgba(193, 128, 255, 0.667)` — A prominent purple focus ring for specific interactive elements.
- **Overlay (z-50)**: `none` (shadow not measured) — Used for elements that layer over content, such as tooltips or modals, with `z-index: 50`.

Shadow Philosophy: Shadows are sparingly applied to provide a subtle lift and hierarchy, rather than heavy skeuomorphism. The primary card shadow uses a dark, spread out effect to create a floating appearance, which deepens on hover to draw attention. Focus rings are bright and thin, utilizing the brand's accent colors for clear interaction feedback.

## 7. Do's and Don'ts

### Do's
- **Do** use `Druk Wide` `88px` `800` for hero headlines on `#faf9f4` backgrounds.
- **Do** ensure all primary buttons use `#d0ff00` background with `#0e0e10` text.
- **Do** maintain `32px` horizontal padding within the `cutpunk-container` for consistent edge spacing.
- **Do** apply `12px` border-radius (`--radius-md`) to all standard cards and containers.
- **Do** use `#f6f3f5` text on `#0e0e10` backgrounds for main content; ratio 16.52 passes AAA.
- **Do** highlight interactive elements with the `#d0ff00` focus ring (`0px 0px 0px 1px rgb(208, 255, 0)`).
- **Do** use `Manrope` `16px` `400` for all body text for optimal readability.
- **Do** ensure `cutpunk-section` elements have `88px` vertical padding for generous whitespace.
- **Do** use `#0e0e10` text on `#faf9f4` backgrounds for main content; ratio 18.29 passes AAA.
- **Do** apply `0px 30px 60px -20px rgba(14, 14, 16, 0.35)` shadow to `.card-light` elements.

### Don'ts
- **Don't** use `#6c6a6e` text on `#0e0e10` backgrounds; ratio 3.6 only passes AA-large, not suitable for small text.
- **Don't** introduce custom spacing values; adhere strictly to the `[0, 4, 8, 12, 16, 20, 24, 32]` scale.
- **Don't** use rounded corners on buttons; all buttons must have `0px` border-radius.
- **Don't** use `Druk Wide` for body text; reserve it for headings and display purposes only.
- **Don't** place `#5e5e63` text on `#faf9f4` backgrounds; ratio 6.12 passes AA, but prefer higher contrast for key info.
- **Don't** apply shadows to text elements; shadows are reserved for cards and elevated containers.
- **Don't** use less than `16px` vertical padding within a `.card-dark` element.
- **Don't** use a text color other than `#0e0e10` for the primary button text on `#d0ff00`.
- **Don't** use `#6c6a6e` text on `#19191c` backgrounds; ratio 3.28 only passes AA-large, avoid for critical information.
- **Don't** deviate from the `1320px` max-width for the main content container.

## 8. Responsive Behavior
_Note: breakpoints below are industry-standard recommendations, not measurements from the source. Adjust to the brand's actual media queries when implementing._
- **Suggested Breakpoints**:
  - **Mobile Small** (~480px): Stack multi-column layouts; adjust font sizes for `Manrope` to `14px`.
  - **Mobile Large** (~640px): Navigation collapses to a hamburger menu; increase button padding slightly.
  - **Tablet** (~768px): Cards may transition to a single column; `Druk Wide` headings scale down to `32px`.
  - **Desktop** (~1024px): Standard desktop layout; ensure `cutpunk-container` max-width is respected.
  - **Desktop Large** (~1100px): Optimize for wider screens; maintain generous spacing and grid integrity.
  - **Desktop XL** (~1320px): Max content width reached; content centers within the viewport.
- **Touch Targets**:
  - All interactive elements, especially buttons and links, should have a minimum touch target size of `44px` by `44px` (inferred from common accessibility guidelines).
  - Maintain a minimum of `8px` spacing between adjacent touch targets to prevent accidental taps (inferred from common accessibility guidelines).
- **Collapsing Strategy**:
  - **Navigation**: Top navigation links collapse into a hamburger menu at `640px` breakpoint, while the primary accent button remains accessible.
  - **Cards**: Multi-column card layouts (e.g., `cutpunk-grid-2`) stack vertically on `768px` and smaller viewports.
  - **Typography**: Display and Heading `Druk Wide` sizes scale down proportionally on smaller screens to prevent overflow and maintain hierarchy.
  - **Padding**: Section padding (`88px` vertical, `32px` horizontal) reduces to `48px` vertical and `16px` horizontal on mobile.
  - **Forms**: Input fields and labels stack vertically, ensuring sufficient vertical spacing of `20px` between elements.
  - **Spacing**: Larger spacing values like `32px` may be reduced to `24px` or `16px` on mobile to optimize screen real estate.

## 9. Agent Prompt Guide
- **Quick Color Reference**
  - `primary-accent`: `#d0ff00`
  - `primary-accent-hover`: `#82b541`
  - `background-dark`: `#0e0e10`
  - `surface-light`: `#faf9f4`
  - `text-primary-dark`: `#0e0e10`
  - `text-inverse-light`: `#f6f3f5`
  - `text-muted-dark`: `#6c6a6e`
  - `border-dark`: `rgba(14, 14, 16, 0.1)`
- **Iteration Guide**:
  1.  Always use `#d0ff00` for primary CTAs, with `#0e0e10` text.
  2.  Ensure `Druk Wide` is used for all headings, with `Manrope` for body text.
  3.  Apply `18px 32px` padding to primary and secondary buttons.
  4.  Use the `[0, 4, 8, 12, 16, 20, 24, 32]` spacing scale exclusively.
  5.  All cards must have `12px` border-radius (`--radius-md`).
  6.  Inputs should have a `1px` solid border in `#6c6a6e`, turning `#d0ff00` on focus.
  7.  Implement `0.2s ease-in-out` transitions for all interactive element state changes.
  8.  Maintain `1320px` max-width for the main content area, with `32px` side padding.
  9.  Use `0px 30px 60px -20px rgba(14, 14, 16, 0.35)` for default card shadows.
  10. Navigation links should change color to `#d0ff00` on hover.
  11. Ensure body text `#f6f3f5` on `#0e0e10` background maintains AAA contrast.
  12. Collapse multi-column layouts to single column on screens below `768px`.