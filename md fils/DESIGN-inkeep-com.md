---
name: Inkeep
url: https://inkeep.com/
colors:
  primary: '#3784ff'
  primary-hover: '#2a6fdf'
  background: '#ffffff'
  background-alt: '#fafaf9'
  background-subtle: '#fcfbf8'
  text-primary: '#231f20'
  text-secondary: '#5f5c62'
  text-muted: '#6c696a'
  text-inverse: '#ffffff'
  text-accent-blue: '#3784ff'
  text-accent-purple: '#7c3aed'
  border: '#e9e9e9'
  border-light: '#eaecf1'
  success: '#16a34a'
  warning: '#c2410c'
  orange-light: '#fbe1bc'
  dark-surface: '#231f20'
  dark-text: '#ffffff'
typography:
  display:
    family: 'neueHaasGroteskDisplayPro'
    size: 54px
    weight: 600
    line-height: 1.2
  heading-h1:
    family: 'neueHaasGroteskDisplayPro'
    size: 54px
    weight: 600
    line-height: 1.2
  heading-h2:
    family: 'neueHaasGroteskDisplayPro'
    size: 36px
    weight: 500
    line-height: 1.3
  heading-h3:
    family: 'neueHaasGroteskDisplayPro'
    size: 22px
    weight: 400
    line-height: 1.5
  body:
    family: 'neueHaasGroteskDisplayPro'
    size: 16px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'neueHaasGroteskDisplayPro'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'neueHaasGroteskDisplayPro'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'JetBrains Mono'
    size: 13px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32]
radius:
  sm: 4px
  md: 6px
  lg: 10px
  full: 9999px
elevation:
  card: '0px 3px 3px 0px rgba(0, 0, 0, 0.09)'
  card-hover: '6px 6px 24px 0px rgba(153, 173, 205, 0.2)'
  button-special: '0px 0px 0px 12px rgba(255, 254, 254, 0.5), 5px 5px 19px 0px rgba(125, 125, 125, 0.25)'
motion:
  duration-fast: '0.2s'
  duration-base: '0.3s'
  duration-hero-medium: '0.6s'
  duration-hero-long: '0.7s'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  easing-decelerate: 'cubic-bezier(0.22, 1, 0.36, 1)'
  easing-ease-out: 'ease-out'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.full}'
    padding: '14px 20px'
  button-secondary:
    bg: '{colors.dark-surface}'
    text: '{colors.text-inverse}'
    radius: '{radius.full}'
    padding: '12px 16px'
  button-special:
    bg: '{colors.orange-light}'
    text: '{colors.text-primary}'
    radius: '{radius.lg}'
    padding: '13px 14px'
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
---

# Design System Inspired by Inkeep

## 1. Visual Theme & Atmosphere
Inkeep employs a clean, technical aesthetic, characterized by a dominant white background (`#ffffff`) and subtle off-white sections (`#fcfbf8`). The brand's primary interactive color, a vibrant blue (`#3784ff`), is strategically used for calls-to-action and key highlights, contrasting with the dark text (`#231f20`) set in the professional `neueHaasGroteskDisplayPro` typeface. Generous whitespace, often accented by a faint dotted grid pattern, creates a sense of openness and clarity across the interface.

The design system integrates sophisticated CSS keyframe animations, such as `hero-box-animation-module__HhV3jW__drawStroke` and `border-pulse`, alongside smooth transitions (`cubic-bezier(0.22, 1, 0.36, 1)`) to provide dynamic and engaging micro-interactions, particularly within the hero section's animated elements. This blend of precise typography, a focused color palette, and subtle motion conveys a modern, high-tech, and approachable brand identity, particularly for its developer-oriented tools.

Key Characteristics:
- Dominant `#ffffff` and `#fcfbf8` backgrounds for spacious layouts.
- Primary blue `#3784ff` for CTAs and interactive elements.
- `neueHaasGroteskDisplayPro` for all primary text content.
- `JetBrains Mono` for code blocks, maintaining technical precision.
- Subtle dotted background pattern adds visual texture.
- CSS keyframe animations enhance hero section engagement.
- Generous `24px` to `32px` vertical spacing for content separation.

## 2. Color Palette & Roles
The Inkeep color palette is built around a core blue for interactivity and a neutral scale for content, complemented by a few accent hues.

-   **Primary**
    -   **Primary Blue** (`#3784ff`) — The core brand color, used for primary calls-to-action, active states, and key interactive elements like the "Get a demo" button.
-   **Accent Colors**
    -   **Orange Light** (`#fbe1bc`) — A soft, warm accent used for specific component backgrounds, such as the "NO-CODE BUILDER" button, providing a friendly contrast.
    -   **Text Accent Purple** (`#7c3aed`) — Used for specific text highlights or secondary interactive elements, offering an alternative accent to the primary blue.
    -   **Success Green** (`#16a34a`) — Employed for indicators of successful operations or positive status.
    -   **Warning Orange** (`#c2410c`) — Used for alerts or important, non-critical notifications.
-   **Interactive**
    -   **Primary Blue Hover** (`#2a6fdf`) — A darker shade of the primary blue, used for hover states on primary interactive elements, providing clear feedback.
    -   **Dark Surface** (`#231f20`) — Used for backgrounds of interactive elements like the "Ask AI" button, offering high contrast against white text.
-   **Neutral Scale**
    -   **Text Primary** (`#231f20`) — The main color for all body text, headings, and high-contrast content, ensuring readability.
    -   **Text Secondary** (`#5f5c62`) — Used for secondary information, descriptions, and less prominent text, offering a slightly softer tone.
    -   **Text Muted** (`#6c696a`) — For captions, footnotes, and very subtle text elements where lower contrast is acceptable.
    -   **Text Inverse** (`#ffffff`) — Used for text placed on dark or primary-colored backgrounds, ensuring legibility.
-   **Surface & Borders**
    -   **Background White** (`#ffffff`) — The predominant background color for the main content areas and cards.
    -   **Background Alt** (`#fafaf9`) — A very light off-white, used for subtle section distinctions or secondary background areas.
    -   **Background Subtle** (`#fcfbf8`) — An even softer, almost imperceptible off-white, used for large background areas to provide warmth without distraction.
    -   **Border Neutral** (`#e9e9e9`) — A light gray used for subtle borders, dividers, and outlines of non-interactive elements.
    -   **Border Light** (`#eaecf1`) — A slightly lighter border color, used for very subtle visual separation.

## 3. Typography Rules
-   **Font Family**:
    -   Primary: `'neueHaasGroteskDisplayPro'`, system-ui, sans-serif
    -   Monospace: `'JetBrains Mono'`, monospace
-   **Hierarchy**:
    -   **Display/H1**: `'neueHaasGroteskDisplayPro'` `54px` `600` · line-height `1.2` · tracking `none` · Used for prominent page titles and hero statements.
    -   **H2**: `'neueHaasGroteskDisplayPro'` `36px` `500` · line-height `1.3` · tracking `none` · (inferred from screenshot) · Used for major section headings.
    -   **H3**: `'neueHaasGroteskDisplayPro'` `22px` `400` · line-height `1.5` · tracking `none` · Used for sub-section titles and feature descriptions.
    -   **Body**: `'neueHaasGroteskDisplayPro'` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and general content.
    -   **Body Small**: `'neueHaasGroteskDisplayPro'` `14px` `400` · line-height `1.5` · tracking `none` · Used for secondary information, form labels, and navigation links.
    -   **Caption**: `'neueHaasGroteskDisplayPro'` `12px` `400` · line-height `1.5` · tracking `none` · Used for metadata, small print, and less critical information.
    -   **Code/Mono**: `'JetBrains Mono'` `13px` `400` · line-height `1.5` · tracking `none` · (inferred from screenshot) · Dedicated for code snippets, technical terms, and monospaced data.
-   **Principles**:
    -   Maintain a clear visual hierarchy by strictly adhering to the defined font sizes and weights for headings and body text.
    -   Utilize `neueHaasGroteskDisplayPro` for all primary content to ensure a consistent, professional, and highly readable brand voice.
    -   Reserve `JetBrains Mono` exclusively for code examples and technical displays to differentiate it from prose and enhance code readability.
    -   Employ ample line-heights (1.2 to 1.5) across all text sizes to improve legibility and provide breathing room within paragraphs.
    -   Prioritize legibility for body text on all backgrounds, ensuring a minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent, full-width button for primary calls-to-action, featuring a bold blue background and white text. It subtly darkens on hover and scales down on active.

```css
.button-primary {
  background-color: var(--color-primary, #3784ff);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 16px; /* {typography.body.size} */
  font-weight: 500; /* (inferred from screenshot) */
  padding: 14px 20px; /* {components.button-primary.padding} */
  border: none;
  border-radius: 9999px; /* {radius.full} */
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #2a6fdf); /* {colors.primary-hover} */
}

.button-primary:active {
  transform: scale(0.97); /* (extracted pseudoState) */
}

.button-primary:disabled {
  background-color: var(--color-border, #e9e9e9); /* (inferred from screenshot) */
  color: var(--color-text-muted, #6c696a); /* (inferred from screenshot) */
  cursor: not-allowed;
}
```


<details>
<summary>Secondary Button (Ask AI)</summary>

A dark button with white text, used for secondary but important actions, often with a subtle shadow.

```css
.button-secondary {
  background-color: var(--color-dark-surface, #231f20); /* {colors.dark-surface} */
  color: var(--color-dark-text, #ffffff); /* {colors.dark-text} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 16px; /* {typography.body.size} */
  font-weight: 500; /* (extracted from buttons) */
  padding: 12px 16px; /* {components.button-secondary.padding} */
  border: 1px solid var(--color-dark-surface, #231f20); /* {colors.dark-surface} */
  border-radius: 9999px; /* {radius.full} */
  cursor: pointer;
  box-shadow: var(--elevation-button-special, 0px 0px 0px 12px rgba(255, 254, 254, 0.5), 5px 5px 19px 0px rgba(125, 125, 125, 0.25)); /* {elevation.button-special} */
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  background-color: var(--color-text-secondary, #5f5c62); /* (inferred from screenshot) */
  box-shadow: none; /* (inferred from screenshot) */
}

.button-secondary:active {
  transform: scale(0.97); /* (inferred from screenshot) */
}

.button-secondary:disabled {
  background-color: var(--color-border, #e9e9e9); /* (inferred from screenshot) */
  color: var(--color-text-muted, #6c696a); /* (inferred from screenshot) */
  cursor: not-allowed;
  box-shadow: none;
}
```

</details>

<details>
<summary>Special Button (No-Code Builder / Typescript SDK)</summary>

A distinct button with a light orange background and dark text, used for highlighting specific features or development paths.

```css
.button-special {
  background-color: var(--color-orange-light, #fbe1bc); /* {colors.orange-light} */
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 16px; /* {typography.body.size} */
  font-weight: 400; /* (extracted from buttons) */
  padding: 13px 14px; /* {components.button-special.padding} */
  border: 1px solid var(--color-text-primary, #231f20); /* {colors.text-primary} */
  border-radius: 10px; /* {radius.lg} */
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-special:hover {
  background-color: var(--color-primary, #3784ff); /* (inferred from screenshot) */
  color: var(--color-text-inverse, #ffffff); /* (inferred from screenshot) */
  border-color: var(--color-primary, #3784ff); /* (inferred from screenshot) */
}

.button-special:active {
  transform: translateY(1px); /* (inferred from screenshot) */
}

.button-special:disabled {
  background-color: var(--color-border, #e9e9e9); /* (inferred from screenshot) */
  color: var(--color-text-muted, #6c696a); /* (inferred from screenshot) */
  border-color: var(--color-border, #e9e9e9); /* (inferred from screenshot) */
  cursor: not-allowed;
}
```

</details>
### Cards & Containers

#### Standard Card
A clean, white card with subtle rounded corners and a soft shadow, used for content grouping and feature display. It lifts slightly on hover.

```css
.card {
  background-color: var(--color-background, #ffffff); /* {colors.background} */
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  padding: 24px; /* {spacing.scale.6} (inferred from screenshot) */
  border: 1px solid var(--color-border, #e9e9e9); /* {colors.border} */
  border-radius: 6px; /* {radius.md} */
  box-shadow: var(--elevation-card, 0px 3px 3px 0px rgba(0, 0, 0, 0.09)); /* {elevation.card} */
  transition: box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.card:hover {
  box-shadow: var(--elevation-card-hover, 6px 6px 24px 0px rgba(153, 173, 205, 0.2)); /* {elevation.card-hover} */
  transform: translateY(-2px); /* (inferred from screenshot) */
}
```

### Inputs & Forms

#### Text Input
A standard text input with a light border, designed for clarity and ease of use. It gains a blue outline on focus.

```css
.input-text {
  background-color: var(--color-background, #ffffff); /* {colors.background} */
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 16px; /* {typography.body.size} */
  font-weight: 400; /* {typography.body.weight} */
  padding: 12px 16px; /* {spacing.scale.3} {spacing.scale.4} (inferred from screenshot) */
  border: 1px solid var(--color-border, #e9e9e9); /* {colors.border} */
  border-radius: 6px; /* {radius.md} */
  transition: border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), box-shadow var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.input-text:focus {
  border-color: var(--color-primary, #3784ff); /* {colors.primary} */
  outline: none;
  box-shadow: 0 0 0 2px rgba(55, 132, 255, 0.2); /* (inferred from screenshot) */
}

.input-text:disabled {
  background-color: var(--color-background-alt, #fafaf9); /* {colors.background-alt} */
  color: var(--color-text-muted, #6c696a); /* {colors.text-muted} */
  cursor: not-allowed;
}
```


<details>
<summary>Form Label</summary>

Simple, clear label for form fields, using the primary text color.

```css
.form-label {
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 14px; /* {typography.body-sm.size} */
  font-weight: 500; /* (inferred from screenshot) */
  margin-bottom: 8px; /* {spacing.scale.2} (inferred from screenshot) */
  display: block;
}
```

</details>

<details>
<summary>Checkbox/Radio</summary>

Custom-styled checkbox/radio with a primary blue fill for the checked state.

```css
.checkbox-radio {
  appearance: none;
  width: 20px; /* (inferred from screenshot) */
  height: 20px; /* (inferred from screenshot) */
  border: 1px solid var(--color-border, #e9e9e9); /* {colors.border} */
  border-radius: 4px; /* {radius.sm} */
  background-color: var(--color-background, #ffffff); /* {colors.background} */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), border-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.checkbox-radio:checked {
  background-color: var(--color-primary, #3784ff); /* {colors.primary} */
  border-color: var(--color-primary, #3784ff); /* {colors.primary} */
}

.checkbox-radio:checked::before {
  content: '';
  display: block;
  width: 10px; /* (inferred from screenshot) */
  height: 10px; /* (inferred from screenshot) */
  background-color: var(--color-text-inverse, #ffffff); /* {colors.text-inverse} */
  border-radius: 2px; /* (inferred from screenshot) */
}

.checkbox-radio[type="radio"] {
  border-radius: 9999px; /* {radius.full} */
}

.checkbox-radio[type="radio"]:checked::before {
  border-radius: 9999px; /* {radius.full} */
}

.checkbox-radio:focus {
  outline: 2px solid rgba(55, 132, 255, 0.4); /* (inferred from screenshot) */
  outline-offset: 2px;
}

.checkbox-radio:disabled {
  background-color: var(--color-background-alt, #fafaf9); /* {colors.background-alt} */
  border-color: var(--color-border, #e9e9e9); /* {colors.border} */
  cursor: not-allowed;
}
```

</details>
### Navigation

#### Top Navigation Bar
The main header navigation bar, fixed at the top, providing brand logo, links, and CTAs.

```css
.nav-bar {
  background-color: var(--color-background, #ffffff); /* {colors.background} */
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  padding: 16px 32px; /* {spacing.scale.4} {spacing.scale.7} (inferred from screenshot) */
  border-bottom: 1px solid var(--color-border-light, #eaecf1); /* {colors.border-light} */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50; /* {elevation.z-50} */
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}
```


<details>
<summary>Navigation Link</summary>

Individual links within the navigation bar, subtly changing opacity on hover.

```css
.nav-link {
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 14px; /* {typography.body-sm.size} */
  font-weight: 500; /* (extracted from componentFamilies.topClassStrings) */
  line-height: 1; /* (extracted from componentFamilies.topClassStrings) */
  text-decoration: none;
  padding: 8px 12px; /* {spacing.scale.2} {spacing.scale.3} (inferred from screenshot) */
  transition: opacity var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  opacity: 0.7; /* (extracted pseudoState from .topClassStrings) */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #3784ff); /* {colors.primary} (inferred from screenshot) */
  font-weight: 600; /* (inferred from screenshot) */
}
```

</details>

<details>
<summary>Dropdown Menu</summary>

A menu that appears on hover, providing nested navigation options.

```css
.dropdown-menu {
  background-color: var(--color-background, #ffffff); /* {colors.background} */
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  padding: 12px 0; /* {spacing.scale.3} (inferred from screenshot) */
  border: 1px solid var(--color-border, #e9e9e9); /* {colors.border} */
  border-radius: 6px; /* {radius.md} */
  box-shadow: var(--elevation-card, 0px 3px 3px 0px rgba(0, 0, 0, 0.09)); /* {elevation.card} */
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px; /* (inferred from screenshot) */
  z-index: 10; /* {elevation.z-10} */
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px); /* (inferred from screenshot) */
  transition: opacity var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), transform var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu-item {
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} */
  font-family: var(--typography-body-family, 'neueHaasGroteskDisplayPro'), system-ui, sans-serif;
  font-size: 14px; /* {typography.body-sm.size} */
  font-weight: 400; /* {typography.body-sm.weight} */
  padding: 8px 16px; /* {spacing.scale.2} {spacing.scale.4} (inferred from screenshot) */
  display: block;
  text-decoration: none;
  transition: background-color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)), color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--color-background-alt, #fafaf9); /* {colors.background-alt} */
  color: var(--color-primary, #3784ff); /* {colors.primary} (inferred from screenshot) */
}
```

</details>
### Links

#### Standard Link
Inline text links, using the primary blue for emphasis and darkening on hover.

```css
.link-standard {
  color: var(--color-text-accent-blue, #3784ff); /* {colors.text-accent-blue} */
  text-decoration: underline;
  text-underline-offset: 2px; /* (inferred from screenshot) */
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-standard:hover {
  color: var(--color-primary-hover, #2a6fdf); /* {colors.primary-hover} */
}

.link-standard:visited {
  color: var(--color-text-accent-purple, #7c3aed); /* {colors.text-accent-purple} (inferred from screenshot) */
}
```


<details>
<summary>Secondary Link</summary>

Less prominent links, often found in footers or secondary content areas, using muted text color.

```css
.link-secondary {
  color: var(--color-text-secondary, #5f5c62); /* {colors.text-secondary} */
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.link-secondary:hover {
  color: var(--color-text-primary, #231f20); /* {colors.text-primary} (inferred from screenshot) */
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--color-text-muted, #6c696a); /* {colors.text-muted} (inferred from screenshot) */
}
```

</details>
### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**:
    -   Base unit: `4px`
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32]`
    -   Usage Context:
        -   `0px`: No spacing, for tight alignments.
        -   `4px`: Smallest spacing, for inline elements or subtle separation.
        -   `8px`: Standard small spacing, for lists, icon-text pairs, and minor vertical gaps.
        -   `12px`: Moderate spacing, for button padding, input fields, and component internal spacing.
        -   `16px`: Base padding for many components, spacing between related elements.
        -   `20px`: Larger internal padding or spacing between distinct but related content blocks.
        -   `24px`: Section padding, spacing between major content blocks, card padding.
        -   `32px`: Generous spacing for large section breaks, hero content separation, and main layout gutters.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*
    -   Max Width: `1348px` (inferred from `topClassStrings`)
    -   Columns: `12` (inferred from common web patterns)
    -   Gutter: `32px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `32px` horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: Inkeep leverages generous whitespace, particularly vertical spacing, to create a sense of calm and clarity. This ample negative space allows content blocks to breathe, preventing visual clutter and guiding the user's eye through the technical information. The subtle dotted background pattern provides texture without compromising the clean aesthetic.
-   **Border Radius Scale**:
    -   `sm`: `4px` — For small interactive elements like checkboxes and subtle borders.
    -   `md`: `6px` — Standard for cards, inputs, and most UI elements.
    -   `lg`: `10px` — For distinctive components like the "NO-CODE BUILDER" button.
    -   `full`: `9999px` — For pill-shaped buttons and avatars, indicating a fully rounded shape.

## 6. Depth & Elevation
-   **Flat (z-0)**: `none` — Default background for main content areas and static elements.
-   **Interactive (z-1)**: `none` — Used for interactive elements that are part of the normal flow, like `[aria-current]` spans.
-   **Layered (z-2)**: `none` — Used for specific animated elements within the hero section, like `hero-box-animation-module__HhV3jW__iconsRow`.
-   **Card (z-auto)**: `0px 3px 3px 0px rgba(0, 0, 0, 0.09)` — For standard cards and content containers, providing subtle visual separation.
-   **Dropdown/Tooltip (z-10)**: `0px 3px 3px 0px rgba(0, 0, 0, 0.09)` — Used for dropdown menus, tooltips, and elements that float above content.
-   **Header (z-50)**: `none` — The fixed top navigation bar, ensuring it always stays on top of page content.
-   **Floating Action Button (z-55)**: `none` — For persistent interactive elements like the "Ask AI" button, ensuring it's accessible above all other content.

Shadow Philosophy: Inkeep uses subtle, single-direction shadows primarily for cards and interactive elements, providing a gentle sense of depth without appearing heavy. The `elevation.card-hover` shadow is more pronounced, indicating interactivity and lifting elements slightly from the surface. A unique, multi-layered shadow (`elevation.button-special`) is reserved for specific high-impact buttons, creating a distinct visual pop.

## 7. Do's and Don'ts

### Do's
-   Always use `neueHaasGroteskDisplayPro` for headings and body text to maintain a professional brand voice.
-   Ensure primary body text (`#231f20`) always appears on `#fcfbf8` or `#ffffff` backgrounds for an AAA contrast ratio of at least 15.75:1.
-   Apply `14px 20px` padding to the Primary Button (`#3784ff`) and ensure its text is `#ffffff`.
-   Use `JetBrains Mono` at `13px` for all code blocks to clearly distinguish technical content.
-   Maintain at least `24px` of vertical spacing between major content sections and Cards.
-   Use the Primary Blue (`#3784ff`) for all interactive text links, ensuring a minimum AA contrast ratio of 4.7:1 on white backgrounds.
-   Apply a `6px` border-radius to all standard Cards and Input fields.
-   Ensure the Top Navigation Bar (`z-50`) remains fixed at the top, visually distinct with `16px 32px` padding.
-   Use `#fbe1bc` for the Special Button, paired with `#231f20` text and a `10px` border-radius.
-   For interactive elements, ensure a `0.2s` transition duration with `cubic-bezier(0.4, 0, 0.2, 1)` easing.

### Don'ts
-   Do not use any font family other than `neueHaasGroteskDisplayPro` or `JetBrains Mono` for content.
-   Avoid placing secondary text (`#5f5c62`) on backgrounds lighter than `#fafaf9`; measured ratio 6.53:1 passes AA on `#fffefe`.
-   Never use arbitrary spacing values; stick strictly to the `[0, 4, 8, 12, 16, 20, 24, 32]px` scale.
-   Do not introduce shadows other than `0px 3px 3px 0px rgba(0, 0, 0, 0.09)` for cards, or `6px 6px 24px 0px rgba(153, 173, 205, 0.2)` for card hover states.
-   Do not use the Primary Blue (`#3784ff`) for small body text on `#fcfbf8` as its ratio of 3.44:1 only passes AA-large.
-   Avoid applying `font-weight: 600` to body text; reserve it for Display/H1 roles.
-   Do not use border radii other than `4px`, `6px`, `10px`, or `9999px`.
-   Never use a `text-accent-purple` (`#7c3aed`) link on a white background without ensuring its 5.66:1 ratio passes AA.
-   Do not use the same background color for the Primary Button and the Secondary Button; they should be `#3784ff` and `#231f20` respectively.
-   Avoid using `opacity: 0.9` for logo hover states; use `opacity: 0.7` as defined for navigation links.

## 8. Responsive Behavior
-   **Breakpoints**:
    -   **Mobile Small** (~375px): Stack elements vertically; hide secondary navigation.
    -   **Mobile Large** (~640px): Adjust padding to `16px` horizontal; scale down display typography.
    -   **Tablet** (~768px): Navigation may transition to a hamburger menu; cards may stack in 1 or 2 columns.
    -   **Desktop** (~1024px): Full navigation visible; content containers expand to `960px` max width.
    -   **Desktop Large** (~1280px): Max content width of `1348px`; ample horizontal padding.
-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons and links, have a minimum touch target size of `44px` by `44px`.
    -   Maintain at least `8px` of clear space between adjacent touch targets to prevent accidental taps.
-   **Collapsing Strategy**:
    -   Navigation: Collapse primary navigation links into a hamburger menu below `768px`; the "Get a demo" button remains visible.
    -   Cards: Stack cards vertically on mobile screens, maintaining `24px` vertical spacing.
    -   Typography: Scale down display and heading font sizes by 20-30% on mobile to fit smaller viewports.
    -   Padding: Reduce horizontal section padding to `16px` on mobile, maintaining `32px` vertical padding.
    -   Forms: Form inputs should expand to 100% width on smaller screens, with labels stacked above.
    -   Spacing: Reduce larger spacing values (e.g., `32px` to `24px`) on mobile to optimize screen real estate.

## 9. Agent Prompt Guide
-   **Quick Color Reference**
    -   Primary: `#3784ff`
    -   Primary Hover: `#2a6fdf`
    -   Background: `#ffffff`
    -   Background Alt: `#fafaf9`
    -   Background Subtle: `#fcfbf8`
    -   Text Primary: `#231f20`
    -   Text Secondary: `#5f5c62`
    -   Text Muted: `#6c696a`
    -   Text Inverse: `#ffffff`
    -   Text Accent Blue: `#3784ff`
    -   Text Accent Purple: `#7c3aed`
    -   Border: `#e9e9e9`
    -   Border Light: `#eaecf1`
    -   Success: `#16a34a`
    -   Warning: `#c2410c`
    -   Orange Light: `#fbe1bc`
    -   Dark Surface: `#231f20`
    -   Dark Text: `#ffffff`
-   **Iteration Guide**
    1.  Always use `neueHaasGroteskDisplayPro` for all text unless it's code.
    2.  Set Primary Buttons with `background: #3784ff`, `color: #ffffff`, `padding: 14px 20px`, and `border-radius: 9999px`.
    3.  Ensure all interactive elements have a `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);`.
    4.  Apply `font-size: 54px; font-weight: 600; line-height: 1.2;` for main display headings.
    5.  Utilize the spacing scale `[0, 4, 8, 12, 16, 20, 24, 32]` for all layout and component spacing.
    6.  Default Cards should have `background: #ffffff`, `border-radius: 6px`, and `box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.09)`.
    7.  Inputs must have `border: 1px solid #e9e9e9` and a `2px` blue focus ring.
    8.  Navigation links should be `font-size: 14px`, `font-weight: 500`, and `opacity: 0.7` on hover.
    9.  The "Ask AI" button uses `background: #231f20`, `color: #ffffff`, and `border-radius: 9999px`.
    10. Ensure body text (`#231f20`) on `#fcfbf8` or `#ffffff` always meets AAA contrast (15.75:1).
    11. Implement responsive breakpoints at `640px`, `768px`, `1024px`, and `1280px` for layout adjustments.
    12. Floating elements like the header should have `z-index: 50`.

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-08-01T13:20:15.358Z",
  "summary": {
    "unpairedBanned": 3,
    "bannedPhrase": 0,
    "total": 3
  },
  "warnings": [
    {
      "kind": "unpaired-banned-word",
      "term": "sophisticated",
      "sentence": "The design system integrates sophisticated CSS keyframe animations, such as `hero-box-animation-module__HhV3jW__drawStroke` and `border-pulse`, alongside smooth transitions (`cubic-bezier(0.22, 1, 0.3"
    },
    {
      "kind": "unpaired-banned-word",
      "term": "modern",
      "sentence": "This blend of precise typography, a focused color palette, and subtle motion conveys a modern, high-tech, and approachable brand identity, particularly for its developer-oriented tools."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "approachable",
      "sentence": "This blend of precise typography, a focused color palette, and subtle motion conveys a modern, high-tech, and approachable brand identity, particularly for its developer-oriented tools."
    }
  ]
}
-->
