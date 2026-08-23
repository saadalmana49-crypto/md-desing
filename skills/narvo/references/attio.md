---
name: 'Attio'
slug: attio
url: https://attio.com
category: 'SaaS'
mode: light
fonts:
  - 'Inter'
  - 'JetBrains Mono'
preview:
  bg: '#ffffff'
  fg: '#1e1e21'
  accent: '#1e1e21'
summary: >-
  Near-monochrome CRM marketing — #1e1e21 on white, with pale #8fb8ff the only chromatic note.
colors:
  primary: '#1E1E21'
  background: '#FFFFFF'
  text-primary: '#1E1E21'
  text-muted: '#818184'
  surface: '#FAFAFB'
  border: '#D4D4D6'
  primary-hover: '#424245'
  primary-active: '#424245'
  primary-focus: '#424245'
  primary-disabled-bg: '#FFFFFF'
  primary-button-text: '#FFFFFF'
  secondary-button-bg: '#FAFAFB'
  secondary-button-text: '#1E1E21'
  secondary-button-hover-bg: '#F0F0F2'
  secondary-button-active-bg: '#D4D4D6'
  secondary-button-disabled-bg: '#FFFFFF'
  secondary-button-disabled-text: '#D4D4D6'
  ghost-button-text: '#1E1E21'
  ghost-button-hover-text: '#424245'
  ghost-button-active-text: '#818184'
  ghost-button-focus-text: '#424245'
  ghost-button-disabled-text: '#D4D4D6'
  blue-accent: '#8FB8FF'
  blue-accent-light: '#B5C9FF'
  green-success: '#68D391'
  changelog-tag-blue: '#79C2FF'
  blue-hover-alpha: '#C8DCFFB2'
typography:
  display:
    family: 'Inter'
    size: 56px
    weight: 600
    line-height: 67.2px
  heading-sm:
    family: 'Inter'
    size: 32px
    weight: 600
    line-height: 36px
  h3:
    family: 'Inter'
    size: 20px
    weight: 500
    line-height: 30px
  body:
    family: 'Inter'
    size: 16px
    weight: 500
    line-height: 24px
  small:
    family: 'Inter'
    size: 14px
    weight: 500
    line-height: 21px
  caption:
    family: 'Inter'
    size: 12px
    weight: 500
    line-height: 18px
  code:
    family: 'JetBrains Mono'
    size: 14px
    weight: 400
    line-height: 21px
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 40, 48, 80, 128]
radius:
  sm: 8px
  md: 10px
  lg: 12px
  full: 50px
elevation:
  card: 'oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px'
motion:
  duration-fast: '50ms'
  duration-base: '150ms'
  duration-medium: '300ms'
  easing-ease-out: 'ease-out'
  easing-ease-in-out: 'ease-in-out'
  easing-standard: 'cubic-bezier(0.33, 0, 0, 1)'
  easing-decelerate: 'cubic-bezier(0.45, 0, 0.2, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.primary-button-text}'
    radius: '{radius.md}'
    padding: '12px 24px'
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
---

# Design System Inspired by Attio

## 1. Visual Theme & Atmosphere
Attio's design system presents a clean, modern, and highly functional aesthetic, characterized by a predominantly monochrome palette of white backgrounds and dark grey text. Subtle blue accents, such as the `#8FB8FF` used for interactive elements, provide visual cues and brand identity without overwhelming the interface. The typography, primarily set in the Inter font, emphasizes clarity and readability, with `56px` display text for impact and `16px` body text for content.

The interface leverages generous whitespace, particularly `40px` to `80px` section padding, to create an open and uncluttered user experience. Rounded corners, with radii ranging from `8px` to `12px`, soften the overall appearance, while a subtle, multi-layered `oklch` shadow (`oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px`) adds a sense of depth and hierarchy to cards and interactive elements. The system incorporates CSS animations like `ai-hero-box-gradient-spin` and `pricing-cards-grid-line-appear` for dynamic visual interest, alongside `50ms` to `300ms` transitions for smooth interactive feedback.

**Key Characteristics**
-   **Monochrome Base**: Predominantly `#FFFFFF` backgrounds with `#1E1E21` text.
-   **Subtle Blue Accents**: `#8FB8FF` for interactive elements and highlights.
-   **Inter Typography**: `Inter` font for all text, with `56px` display and `16px` body.
-   **Generous Whitespace**: Ample `40px` to `80px` padding for visual breathing room.
-   **Soft Rounding**: `8px` to `12px` border radii on most components.
-   **Layered Shadows**: Multi-stop `oklch` shadows for subtle elevation.
-   **Animated Feedback**: CSS animations and `50ms` to `300ms` transitions.

## 2. Color Palette & Roles
Attio employs a refined color palette, balancing strong neutrals with strategic, vibrant accents to guide user attention and establish brand identity.

-   **Primary**: `#1E1E21` — Used for primary text, headings, and main call-to-action button backgrounds. This dark shade provides strong contrast against light backgrounds.
-   **Background**: `#FFFFFF` — The main page background color, providing a clean canvas.
-   **Text Primary**: `#1E1E21` — Standard text color for optimal readability on light backgrounds.
-   **Text Muted**: `#818184` — Used for secondary information, helper text, and less prominent UI elements to reduce visual hierarchy.
-   **Surface**: `#FAFAFB` — A subtle off-white used for cards, secondary containers, and slightly differentiated background sections.
-   **Border**: `#D4D4D6` — Light grey used for subtle borders, dividers, and outlines on neutral elements.
-   **Primary Hover**: `#424245` — Darker shade for primary button hover states, indicating interactivity.
-   **Primary Active**: `#424245` — Darker shade for primary button active states, indicating engagement.
-   **Primary Focus**: `#424245` — Darker shade for primary button focus states.
-   **Primary Disabled Background**: `#FFFFFF` — Background for disabled primary buttons, providing a muted appearance.
-   **Primary Button Text**: `#FFFFFF` — White text color for primary buttons, ensuring high contrast.
-   **Secondary Button Background**: `#FAFAFB` — Background for secondary buttons, matching the `surface` color.
-   **Secondary Button Text**: `#1E1E21` — Dark text for secondary buttons, maintaining readability.
-   **Secondary Button Hover Background**: `#F0F0F2` (inferred from screenshot) — A lighter grey for secondary button hover states.
-   **Secondary Button Active Background**: `#D4D4D6` (inferred from screenshot) — A medium grey for secondary button active states.
-   **Secondary Button Disabled Background**: `#FFFFFF` (inferred from screenshot) — Background for disabled secondary buttons.
-   **Secondary Button Disabled Text**: `#D4D4D6` (inferred from screenshot) — Light grey text for disabled secondary buttons.
-   **Ghost Button Text**: `#1E1E21` (inferred from screenshot) — Default text color for ghost buttons.
-   **Ghost Button Hover Text**: `#424245` (inferred from screenshot) — Darker text for ghost button hover states.
-   **Ghost Button Active Text**: `#818184` (inferred from screenshot) — Muted text for ghost button active states.
-   **Ghost Button Focus Text**: `#424245` (inferred from screenshot) — Darker text for ghost button focus states.
-   **Ghost Button Disabled Text**: `#D4D4D6` (inferred from screenshot) — Light grey text for disabled ghost buttons.
-   **Blue Accent**: `#8FB8FF` — A vibrant blue used for interactive elements, links, and key visual highlights.
-   **Blue Accent Light**: `#B5C9FF` — Lighter blue, often used for subtle backgrounds or secondary blue elements.
-   **Green Success**: `#68D391` — Used for success indicators, positive states, and confirmations.
-   **Changelog Tag Blue**: `#79C2FF` — Specific blue for changelog tags, providing categorization.
-   **Blue Hover Alpha**: `#C8DCFFB2` — A translucent blue used in hover/focus states for blue primary buttons.

## 3. Typography Rules
-   **Font Family**: 'Inter', system-ui, sans-serif for primary text. 'JetBrains Mono', 'JetBrains Mono Fallback', monospace for code.
-   **Hierarchy**:
    -   **Display**: `Inter` `56px` `600` · line-height `67.2px` · tracking `-.01em` (inferred) · Used for hero headlines and prominent page titles.
    -   **Heading Small**: `Inter` `32px` `600` · line-height `36px` · tracking `-.01em` (inferred) · Used for major section titles.
    -   **H3**: `Inter` `20px` `500` · line-height `30px` · tracking `none` · Used for subheadings and card titles.
    -   **Body**: `Inter` `16px` `500` · line-height `24px` · tracking `none` · Standard text for paragraphs and general content.
    -   **Small**: `Inter` `14px` `500` · line-height `21px` · tracking `none` · Used for secondary text, labels, and navigation items.
    -   **Caption**: `Inter` `12px` `500` · line-height `18px` · tracking `none` · Used for metadata, timestamps, and subtle UI text.
    -   **Code/Mono**: `JetBrains Mono` `14px` `400` · line-height `21px` · tracking `none` · Used for code snippets and technical text.
-   **Principles**
    -   Prioritize readability with the `Inter` typeface across all content.
    -   Utilize `500` and `600` weights to establish clear visual hierarchy and emphasis.
    -   Maintain generous line heights (1.2 to 1.5) to enhance text legibility and visual comfort.
    -   Employ subtle letter-spacing adjustments (`-.01em` for `2xl` and `display`) for larger text to optimize visual balance.
    -   Reserve `JetBrains Mono` exclusively for technical content to preserve its distinct character.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent call-to-action button with a dark background and white text, designed for high visibility and user interaction. It features smooth color transitions on hover and active states.

```css
.button-primary {
  background-color: var(--color-primary, #1E1E21);
  color: var(--color-primary-button-text, #FFFFFF);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 10px);
  cursor: pointer;
  transition: background-color var(--motion-duration-medium, 300ms) var(--motion-easing-ease-in-out, ease-in-out),
              color var(--motion-duration-medium, 300ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #424245);
}

.button-primary:active {
  background-color: var(--color-primary-active, #424245);
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:focus-visible {
  outline: 2px solid var(--color-primary-focus, #424245); /* inferred from screenshot */
  outline-offset: 2px;
}

.button-primary:disabled {
  background-color: var(--color-primary-disabled-bg, #FFFFFF);
  color: var(--color-secondary-button-disabled-text, #D4D4D6); /* inferred from screenshot */
  cursor: default;
  opacity: 0.7; /* inferred from screenshot */
}
```


<details>
<summary>Secondary Button</summary>

A less prominent button, typically with a light background and dark text, used for secondary actions or when multiple actions are present.

```css
.button-secondary {
  background-color: var(--color-secondary-button-bg, #FAFAFB);
  color: var(--color-secondary-button-text, #1E1E21);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #D4D4D6); /* inferred from screenshot */
  border-radius: var(--radius-md, 10px);
  cursor: pointer;
  transition: background-color var(--motion-duration-medium, 300ms) var(--motion-easing-ease-in-out, ease-in-out),
              border-color var(--motion-duration-medium, 300ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-secondary:hover {
  background-color: var(--color-secondary-button-hover-bg, #F0F0F2); /* inferred from screenshot */
  border-color: var(--color-secondary-button-hover-bg, #F0F0F2); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-secondary-button-active-bg, #D4D4D6); /* inferred from screenshot */
  border-color: var(--color-secondary-button-active-bg, #D4D4D6); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:focus-visible {
  outline: 2px solid var(--color-primary-focus, #424245); /* inferred from screenshot */
  outline-offset: 2px;
}

.button-secondary:disabled {
  background-color: var(--color-secondary-button-disabled-bg, #FFFFFF); /* inferred from screenshot */
  color: var(--color-secondary-button-disabled-text, #D4D4D6);
  border-color: var(--color-border, #D4D4D6);
  cursor: default;
  opacity: 0.7; /* inferred from screenshot */
}
```

</details>

<details>
<summary>Ghost Button</summary>

A minimal button, typically text-only or with a subtle icon, used for less critical actions or within denser UI areas.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-ghost-button-text, #1E1E21); /* inferred from screenshot */
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-md, 10px);
  cursor: pointer;
  transition: color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out),
              background-color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out);
}

.button-ghost:hover {
  color: var(--color-ghost-button-hover-text, #424245); /* inferred from screenshot */
  background-color: var(--color-secondary-button-hover-bg, #F0F0F2); /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-ghost-button-active-text, #818184); /* inferred from screenshot */
  background-color: var(--color-secondary-button-active-bg, #D4D4D6); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-ghost:focus-visible {
  outline: 2px solid var(--color-primary-focus, #424245); /* inferred from screenshot */
  outline-offset: 2px;
}

.button-ghost:disabled {
  color: var(--color-ghost-button-disabled-text, #D4D4D6);
  background-color: transparent;
  cursor: default;
  opacity: 0.7; /* inferred from screenshot */
}
```

</details>
### Cards & Containers

#### Standard Card
A versatile container for content, featuring a light background, rounded corners, and a subtle shadow for elevation.

```css
.card {
  background-color: var(--colors-background, #FFFFFF);
  color: var(--colors-text-primary, #1E1E21);
  padding: 24px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #D4D4D6); /* inferred from screenshot */
  border-radius: var(--radius-md, 10px);
  box-shadow: var(--elevation-card, oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px);
  transition: box-shadow var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out),
              border-color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out);
}

.card:hover {
  box-shadow: oklch(0 0 0 / 0.02) 0px 2px 4px 0px, oklch(0 0 0 / 0.04) 0px 4px 8px -1px, oklch(0 0 0 / 0.06) 0px 8px 16px -2px; /* inferred from screenshot */
  border-color: var(--color-blue-accent, #8FB8FF); /* inferred from screenshot */
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light background, subtle border, and clear focus indication.

```css
.input-text {
  background-color: var(--colors-background, #FFFFFF);
  color: var(--colors-text-primary, #1E1E21);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 14px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #D4D4D6);
  border-radius: var(--radius-sm, 8px);
  transition: border-color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out),
              box-shadow var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out);
}

.input-text::placeholder {
  color: var(--colors-text-muted, #818184); /* inferred from screenshot */
}

.input-text:focus {
  border-color: var(--color-blue-accent, #8FB8FF);
  box-shadow: 0 0 0 2px var(--color-blue-accent-light, #B5C9FF); /* inferred from screenshot */
  outline: none;
}

.input-text:disabled {
  background-color: var(--colors-surface, #FAFAFB);
  color: var(--colors-text-muted, #818184);
  border-color: var(--colors-border, #D4D4D6);
  cursor: not-allowed;
  opacity: 0.8; /* inferred from screenshot */
}
```


<details>
<summary>Form Label</summary>

Text label associated with form input elements.

```css
.form-label {
  color: var(--colors-text-primary, #1E1E21);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-bottom: 4px; /* inferred from screenshot */
  display: block;
}
```

</details>

<details>
<summary>Checkbox/Radio</summary>

Minimalist checkbox and radio button styles (inferred).

```css
.checkbox, .radio {
  appearance: none;
  width: 18px; /* inferred from screenshot */
  height: 18px; /* inferred from screenshot */
  border: 1px solid var(--colors-border, #D4D4D6);
  border-radius: var(--radius-sm, 8px); /* square for checkbox, full for radio */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out),
              background-color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out);
}

.radio {
  border-radius: var(--radius-full, 50px);
}

.checkbox:checked, .radio:checked {
  background-color: var(--color-blue-accent, #8FB8FF);
  border-color: var(--color-blue-accent, #8FB8FF);
}

.checkbox:checked::before, .radio:checked::before {
  content: '';
  display: block;
  width: 8px; /* inferred from screenshot */
  height: 8px; /* inferred from screenshot */
  background-color: var(--colors-primary-button-text, #FFFFFF);
  border-radius: 2px; /* inferred from screenshot */
}

.radio:checked::before {
  border-radius: var(--radius-full, 50px);
}

.checkbox:focus-visible, .radio:focus-visible {
  outline: 2px solid var(--color-blue-accent, #8FB8FF);
  outline-offset: 2px;
}

.checkbox:disabled, .radio:disabled {
  background-color: var(--colors-surface, #FAFAFB);
  border-color: var(--colors-border, #D4D4D6);
  cursor: not-allowed;
  opacity: 0.7; /* inferred from screenshot */
}
```

</details>
### Navigation

#### Top Navigation Bar
A fixed navigation bar at the top of the viewport, providing primary site navigation and branding.

```css
.nav-top {
  background-color: var(--colors-background, #FFFFFF);
  border-bottom: 1px solid var(--colors-border, #D4D4D6); /* inferred from screenshot */
  padding: 16px 40px; /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px; /* inferred from screenshot */
  position: sticky;
  top: 0;
  z-index: 92; /* from elevation.zIndexValues */
}
```


<details>
<summary>Navigation Link</summary>

Individual links within the navigation, designed for clear readability and subtle hover feedback.

```css
.nav-link {
  color: var(--colors-text-primary, #1E1E21);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px; /* inferred from screenshot */
  text-decoration: none;
  border-radius: var(--radius-sm, 8px); /* inferred from screenshot */
  transition: color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out),
              background-color var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out);
}

.nav-link:hover {
  color: var(--colors-primary-hover, #424245); /* inferred from screenshot */
  background-color: var(--colors-surface, #FAFAFB); /* inferred from screenshot */
}

.nav-link.active, .nav-link[aria-current="page"] {
  color: var(--color-blue-accent, #8FB8FF); /* inferred from screenshot */
  font-weight: 600; /* inferred from screenshot */
  background-color: var(--color-blue-accent-light, #B5C9FF); /* inferred from screenshot */
}
```

</details>

<details>
<summary>Dropdown Menu</summary>

A contextual menu that appears upon interaction, offering additional navigation or actions (inferred).

```css
.dropdown-menu {
  background-color: var(--colors-background, #FFFFFF);
  border: 1px solid var(--colors-border, #D4D4D6);
  border-radius: var(--radius-md, 10px);
  box-shadow: var(--elevation-card, oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px);
  padding: 8px; /* inferred from screenshot */
  min-width: 180px; /* inferred from screenshot */
  z-index: 101; /* from elevation.zIndexValues for fixed overlays */
  transition: opacity var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out),
              transform var(--motion-duration-base, 150ms) var(--motion-easing-ease-out, ease-out);
}

.dropdown-menu-item {
  color: var(--colors-text-primary, #1E1E21);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 12px; /* inferred from screenshot */
  text-decoration: none;
  display: block;
  border-radius: var(--radius-sm, 8px);
  transition: background-color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out),
              color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out);
}

.dropdown-menu-item:hover {
  background-color: var(--colors-surface, #FAFAFB);
  color: var(--colors-primary-hover, #424245);
}

.dropdown-menu-item:active {
  background-color: var(--color-secondary-button-active-bg, #D4D4D6); /* inferred from screenshot */
  color: var(--color-ghost-button-active-text, #818184); /* inferred from screenshot */
}
```

</details>
### Links

#### Standard Link
A default inline text link, typically blue and underlined, for navigating to other content.

```css
.link-standard {
  color: var(--color-blue-accent, #8FB8FF);
  text-decoration: underline;
  transition: color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out);
}

.link-standard:hover {
  color: var(--color-blue-accent-light, #B5C9FF); /* inferred from screenshot */
  text-decoration: none;
}

.link-standard:visited {
  color: var(--color-blue-accent, #8FB8FF); /* inferred from screenshot */
}
```


<details>
<summary>Secondary Link</summary>

A less emphasized link, often used in navigation or supplementary content, without an underline by default.

```css
.link-secondary {
  color: var(--colors-text-primary, #1E1E21);
  text-decoration: none;
  transition: color var(--motion-duration-fast, 50ms) var(--motion-easing-ease-out, ease-out);
}

.link-secondary:hover {
  color: var(--colors-primary-hover, #424245); /* inferred from screenshot */
  text-decoration: underline;
}

.link-secondary:visited {
  color: var(--colors-text-primary, #1E1E21); /* inferred from screenshot */
}
```

</details>
### Badges
(none observed in source)

## 5. Layout Principles
-   **Spacing System**: Attio utilizes a `4px` base unit for its spacing scale, providing a granular yet consistent approach to layout.
    -   Base `4px` → `[4, 8, 12, 16, 20, 24, 40, 48, 80, 128]`
    -   `4px`: Smallest inline elements, icon-to-text spacing.
    -   `8px`: Tight spacing for related items, list item padding.
    -   `12px`: Padding within small components, button internal spacing.
    -   `16px`: Standard component internal padding, vertical spacing between text blocks.
    -   `20px`: Moderate spacing, often for form fields or grouped elements.
    -   `24px`: Standard vertical separation between components, card padding.
    -   `40px`: Section padding, major vertical content separation.
    -   `48px`: Larger section padding, significant vertical breaks.
    -   `80px`: Hero section padding, large content blocks.
    -   `128px`: Generous page-level spacing, full-width section separation.
-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._: Attio appears to use a flexible grid system, likely `12` columns, with content constrained within a `1280px` maximum width. A `24px` gutter between columns ensures clear separation. Sections typically employ `40px` to `80px` of vertical padding.
-   **Whitespace Philosophy**: Attio's design philosophy heavily relies on generous whitespace to create a sense of calm and clarity. Elements are given ample room to breathe, reducing visual clutter and emphasizing key content. This approach improves readability and guides the user's eye through the interface, making complex information digestible.
-   **Border Radius Scale**:
    -   `8px` (`sm`): Small elements, input fields, subtle rounding.
    -   `10px` (`md`): Buttons, cards, main UI components.
    -   `12px` (`lg`): Larger containers, more pronounced rounding.
    -   `50px` (`full`): Pill-shaped elements, badges, avatars.

## 6. Depth & Elevation
Attio uses a subtle, layered shadow system to create depth, enhancing the visual hierarchy without being overly obtrusive. Z-index values are strategically applied to manage stacking order.

-   **Flat (z-0)**: `none` — Default background elements and static content.
-   **Card (z-1)**: `oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px` — Standard cards, dropdown menus, and interactive surfaces.
-   **Sticky (z-92)**: `oklch(0 0 0 / 0.01) 0px 1px 2px 0px, oklch(0 0 0 / 0.02) 0px 2px 4px -1px, oklch(0 0 0 / 0.03) 0px 4px 8px -2px` (inferred from screenshot) — Sticky navigation bars and headers.
-   **Overlay (z-101)**: `rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.2) 0px 0px 0px 2px` (from `[data-sonner-toast]:focus-visible` box-shadow) — Fixed overlays like toasts, modals, and tooltips.
-   **Intercom (z-2147483000)**: `none` (inferred) — Intercom messenger button.
-   **Intercom Frame (z-2147483002)**: `none` (inferred) — Intercom messenger frame.

**Shadow Philosophy**
Attio's shadow philosophy is one of gentle progression. Shadows are light and diffuse, primarily using multiple `oklch` stops to create a soft, natural lift rather than stark separation. This approach contributes to the clean and modern aesthetic, ensuring that elevated elements feel integrated into the design rather than floating abruptly. The focus is on subtle visual cues for interactive elements and hierarchy.

## 7. Do's and Don'ts

### Do's
-   **Do** use `#1E1E21` for all primary text on `#FFFFFF` backgrounds for optimal contrast.
-   **Do** apply `10px` border-radius to all `Primary Button` and `Secondary Button` components.
-   **Do** ensure `Navigation Link` components transition `color` and `background-color` over `150ms` with `ease-out`.
-   **Do** maintain at least `24px` of vertical spacing between `Card` components.
-   **Do** use `Inter` `56px` `600` for hero sections, paired with `Inter` `16px` `500` for body text.
-   **Do** highlight interactive elements with `#8FB8FF` for links and focus states.
-   **Do** provide `12px 24px` padding for `Primary Button` and `Secondary Button` components.
-   **Do** use the multi-stop `oklch` shadow for all `Card` components.
-   **Do** ensure `Text Input` fields display a `2px` blue focus ring with `#8FB8FF`.
-   **Do** use `#68D391` for all success messages or positive status indicators.

### Don'ts
-   **Don't** use `#818184` for primary body text on `#FAFAFB`; the contrast ratio is 3.7:1 (inferred), failing AA.
-   **Don't** introduce custom spacing values outside the `[4, 8, 12, 16, 20, 24, 40, 48, 80, 128]` scale.
-   **Don't** use `Inter` `400` weight for `H3` titles; always use `500` weight.
-   **Don't** apply `box-shadow: none` to `Card` components; they require the subtle elevation.
-   **Don't** use `#FFFFFF` text on `Ghost Button` components; use `#1E1E21` or its hover variants.
-   **Don't** use `text-decoration: none` on `Standard Link` components in their default state.
-   **Don't** exceed `1280px` for main content container widths.
-   **Don't** use `border-radius: 0px` on interactive elements like buttons or inputs.
-   **Don't** use `#D4D4D6` for button text on `#FFFFFF` backgrounds; contrast is too low (inferred, 1.2:1 fails AA).
-   **Don't** animate elements with `transition-duration` longer than `300ms` for standard interactions.

## 8. Responsive Behavior
_Note: breakpoints below are derived from the source's media queries (max-width: 1199px, max-width: 600px, min-width: 992px) combined with industry-standard recommendations. Adjust to the brand's actual media queries when implementing._

-   **Breakpoints**:
    -   **Mobile Small** (~375px): Primary navigation collapses into a hamburger menu.
    -   **Mobile Large** (~600px): Cards stack vertically with increased `24px` padding.
    -   **Tablet** (~768px): Two-column layouts may collapse to single column.
    -   **Desktop** (~992px): Full desktop navigation and multi-column layouts.
    -   **Desktop Large** (~1200px): Content expands to `1280px` max-width.
-   **Touch Targets**:
    -   Ensure all interactive elements have a minimum touch target size of `44px` by `44px` (inferred from screenshot).
    -   Maintain at least `8px` of clear space between touch targets to prevent accidental taps (inferred from screenshot).
-   **Collapsing Strategy**:
    -   **Navigation**: Top navigation links collapse into a hamburger menu below `600px`.
    -   **Cards**: Multi-column `Card` layouts transition to a single column stack below `768px`.
    -   **Typography**: `Display` font size may scale down to `32px` on screens below `600px`.
    -   **Padding**: Horizontal page padding reduces from `40px` to `24px` on mobile devices.
    -   **Forms**: Complex form layouts convert to single-column inputs with `16px` vertical spacing.
    -   **Spacing**: Larger `80px` and `128px` vertical spacing values condense to `40px` on mobile.

## 9. Agent Prompt Guide
-   **Quick Color Reference**
    -   `primary`: `#1E1E21`
    -   `background`: `#FFFFFF`
    -   `text-primary`: `#1E1E21`
    -   `text-muted`: `#818184`
    -   `surface`: `#FAFAFB`
    -   `border`: `#D4D4D6`
    -   `primary-hover`: `#424245`
    -   `blue-accent`: `#8FB8FF`
    -   `green-success`: `#68D391`
-   **Iteration Guide**
    1.  Always use `Primary Button` with `background-color: #1E1E21` and `color: #FFFFFF`.
    2.  Ensure all text uses the `Inter` font family.
    3.  Apply `10px` border-radius to all `Button` and `Card` components.
    4.  Use the `4px` base spacing scale: `[4, 8, 12, 16, 20, 24, 40, 48, 80, 128]`.
    5.  `Card` components must include the multi-stop `oklch` shadow for elevation.
    6.  `Text Input` fields require a `2px` solid blue focus ring (`#8FB8FF`).
    7.  `Navigation Link` components should have a `150ms ease-out` transition for `color` and `background-color` on hover.
    8.  Prioritize `Display` `56px` `600` for main headlines and `Body` `16px` `500` for paragraphs.
    9.  Ensure `Top Navigation Bar` has `z-index: 92` and `Dropdown Menu` has `z-index: 101`.
    10. All interactive elements must meet a `44px` minimum touch target size.
    11. Use `#8FB8FF` for all standard links and interactive accents.
    12. Validate that `#1E1E21` text on `#FFFFFF` backgrounds maintains a WCAG AAA contrast ratio.

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-07-30T06:55:37.896Z",
  "summary": {
    "unpairedBanned": 2,
    "bannedPhrase": 0,
    "total": 2
  },
  "warnings": [
    {
      "kind": "unpaired-banned-word",
      "term": "modern",
      "sentence": "Attio's design system presents a clean, modern, and highly functional aesthetic, characterized by a predominantly monochrome palette of white backgrounds and dark grey text."
    },
    {
      "kind": "unpaired-banned-word",
      "term": "clean",
      "sentence": "Attio's design system presents a clean, modern, and highly functional aesthetic, characterized by a predominantly monochrome palette of white backgrounds and dark grey text."
    }
  ]
}
-->
