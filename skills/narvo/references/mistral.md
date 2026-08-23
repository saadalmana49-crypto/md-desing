---
name: 'Mistral AI'
slug: mistral
url: https://mistral.ai
category: 'AI'
mode: dual
fonts:
  - 'ALTMistral'
  - 'Inter'
  - 'Space Mono'
preview:
  bg: '#fbfbf8'
  fg: '#000000'
  accent: '#ff5229'
summary: >-
  Warm off-white #fbfbf8 with a signal-orange accent; ALTMistral display, Space Mono labels, OKLCH text ramp.
coverage: partial
colors:
  primary: '#ff5229'
  accent-orange: '#fa500f'
  background: '#fbfbf8'
  surface-light: '#f5f4ef'
  dark-surface: '#07070b'
  text-primary: '#000000'
  text-secondary: 'oklch(27.4% .006 286.033)'
  text-tertiary: 'oklch(37% .013 285.805)'
  dark-text: '#ffffff'
  border: '#e4e3de'
  focus-ring: 'rgb(0, 124, 255)'
  surface-brand-secondary: 'oklch(96.7% .001 286.375)'
typography:
  display:
    family: 'ALTMistral'
    size: 96px
    weight: 700
    line-height: 1.2
  heading-h1:
    family: 'Inter'
    size: 32px
    weight: 700
    line-height: 1.2
  body:
    family: 'Inter'
    size: 16px
    weight: 400
    line-height: 1.5
  body-small:
    family: 'Inter'
    size: 14px
    weight: 400
    line-height: 1.5
  code:
    family: 'Space Mono'
    size: 16px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 40, 80]
radius:
  sm: 6px
motion:
  duration-fast: '50ms'
  duration-base: '300ms'
  easing-standard: 'cubic-bezier(0.4, 0, 1, 1)'
  easing-in-out: 'ease-in-out'
components:
  button-primary:
    bg: '{colors.text-primary}'
    text: '{colors.dark-text}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '0px'
    padding: '16px 16px'
  card:
    bg: '{colors.dark-surface}'
    text: '{colors.dark-text}'
    radius: '{radius.sm}'
    shadow: 'none'
  input:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.sm}'
    padding: '10px 12px'
  badge-category:
    bg: '{colors.surface-brand-secondary}'
    text: '{colors.text-primary}'
    radius: '{radius.sm}'
    padding: '4px 8px'
---

# Design System Inspired by Mistral AI

## 1. Visual Theme & Atmosphere
Mistral AI's design system conveys a clean, modern, and high-tech atmosphere, balancing scientific rigor with distinctive visual elements. The hero section prominently features a vibrant, pixelated gradient in shades of `#ff5229` and `#fa500f`, creating a unique digital texture. This energetic primary color palette is grounded by a predominantly light background of `#fbfbf8` and `#f5f4ef`, ensuring content clarity and visual spaciousness.

Typography plays a crucial role, with the unique `ALTMistral` typeface reserved for commanding display headlines (e.g., `96px` `700`), contrasted with the highly legible and professional `Inter` font for all body copy. The site avoids explicit `box-shadow` for depth, instead relying on `z-index` stacking and distinct background color changes, such as the dark `#07070b` for featured cards. Subtle CSS keyframe animations, like `animate-hero-ocr4-block-1`, add dynamic visual interest, while a playful pixel art cat illustration serves as a memorable brand signature.

Key Characteristics:
- Hero section features a vibrant pixelated orange (`#ff5229`, `#fa500f`) gradient.
- Typography blends unique `ALTMistral` display with `Inter` body text.
- Clean, spacious layout with `#fbfbf8` and `#f5f4ef` backgrounds.
- Depth achieved via `z-index` stacking and distinct background colors like `#07070b`.
- Subtle CSS keyframe animations enhance dynamic visual feedback.
- Pixel art cat and abstract geometric icons provide brand distinctiveness.
- Interactive elements like cards use a dark `#07070b` background with `#ffffff` text.

## 2. Color Palette & Roles
- **Primary**
  - `#ff5229` (Mistral Orange) — The core brand color, used for key highlights, the primary orange in the hero section, and specific interactive elements.
- **Accent Colors**
  - `#fa500f` (Deep Orange) — A complementary orange, appearing in gradients and background patterns, adding visual depth.
  - `rgb(0, 124, 255)` (Focus Blue) — Employed for accessible focus rings on interactive elements, ensuring high visibility.
- **Neutral Scale**
  - `#fbfbf8` (Background Light) — The predominant light background color for the main content areas, providing a clean canvas.
  - `#f5f4ef` (Surface Light) — A slightly darker, off-white background used for subtle section breaks or containers, creating gentle visual separation.
  - `#e4e3de` (Border Neutral) — A light, subtle grey used for borders, dividers, and inactive states, offering soft definition.
  - `oklch(96.7% .001 286.375)` (Surface Brand Secondary) — A very light, almost white grey used for category badges and subtle background tints.
  - `#000000` (Text Primary) — The main color for headings, body text, and primary interactive elements, ensuring maximum readability.
  - `oklch(27.4% .006 286.033)` (Text Secondary) — A dark grey for secondary text, descriptions, and link hover states, providing a slightly muted tone.
  - `oklch(37% .013 285.805)` (Text Tertiary) — A lighter dark grey for less prominent text, often found in captions or metadata.
- **Surface & Borders**
  - `#07070b` (Dark Surface) — A deep, near-black background used for featured cards and dark-themed sections, creating strong contrast.
  - `#ffffff` (Dark Text) — Pure white, used for text and iconography when placed on the `#07070b` dark surface, ensuring legibility.

## 3. Typography Rules
- **Font Family**:
  - Primary: 'Inter', system-ui, sans-serif
  - Display: 'ALTMistral', system-ui, sans-serif
  - Monospace: 'Space Mono', monospace, ui-monospace
- **Hierarchy**:
  - **Display**: `ALTMistral` `96px` `700` · line-height `1.2` · tracking `-0.02em` (inferred) · Used for hero headlines, commanding attention with its unique character.
  - **H1**: `Inter` `32px` `700` · line-height `1.2` · tracking `none` · Used for major section titles.
  - **H2**: `Inter` `56px` `700` · line-height `1.2` · tracking `none` (inferred) · Used for prominent sub-headlines.
  - **Body**: `Inter` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and detailed content.
  - **Body Small**: `Inter` `14px` `400` · line-height `1.5` · tracking `none` · Used for secondary information, descriptions, and metadata.
  - **Caption**: `Inter` `13px` `400` · line-height `1.5` · tracking `none` · Smallest body text for legal notes or fine print.
  - **Code/Mono**: `Space Mono` `16px` `400` · line-height `1.5` · tracking `none` · Applied to code blocks, inline code, and technical labels.
- **Principles**:
  - The `ALTMistral` typeface is reserved for large, impactful display text, creating a distinctive brand voice that is both modern and slightly retro.
  - `Inter` serves as the versatile workhorse font, ensuring readability across all body and interface elements with consistent weights and generous line heights.
  - Monospace `Space Mono` is used consistently for all code-related content and technical labels, maintaining a clear visual distinction for technical information.
  - A clear typographic scale from `96px` down to `13px` establishes strong visual hierarchy, guiding the user through content efficiently.
  - Line heights are optimized for readability, typically `1.2` for headings and `1.5` for body text, enhancing visual comfort and content flow.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent call-to-action button with a solid dark background and white text, designed for maximum visibility. On hover, it subtly darkens, and when active, it presses down slightly with a fast transform.
```css
.button-primary {
  background-color: var(--color-text-primary, #000000);
  color: var(--color-dark-text, #ffffff);
  font-family: var(--typography-body-family, 'Inter'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 500; /* inferred from screenshot */
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 6px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1)), transform var(--motion-duration-fast, 50ms) ease-out;
}

.button-primary:hover {
  background-color: var(--color-dark-surface, #07070b); /* inferred from screenshot */
}

.button-primary:active {
  transform: translateY(1px); /* inferred from screenshot */
  box-shadow: none; /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--color-border, #e4e3de); /* inferred from screenshot */
  color: var(--color-text-tertiary, oklch(37% .013 285.805)); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button
Used for navigation and less critical actions, featuring a light background with a subtle border. On hover, the background fills with the border color, providing clear visual feedback with a smooth transition.
```css
.button-secondary {
  background-color: var(--color-background, #fbfbf8);
  color: var(--color-text-primary, #000000);
  font-family: var(--typography-body-family, 'Inter'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 16px 16px;
  border: 1px solid var(--color-border, #e4e3de);
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1));
}

.button-secondary:hover {
  background-color: var(--color-border, #e4e3de); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-border, #e4e3de); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: var(--color-background, #fbfbf8);
  color: var(--color-text-tertiary, oklch(37% .013 285.805)); /* inferred from screenshot */
  border-color: var(--color-border, #e4e3de);
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button, often used for secondary actions or dropdown triggers, with minimal styling. On hover, it shows a subtle background change, providing quick visual feedback.
```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #000000);
  font-family: var(--typography-body-family, 'Inter'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 16px 16px; /* inferred from screenshot */
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 50ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1)), color var(--motion-duration-fast, 50ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1));
}

.button-ghost:hover {
  background-color: var(--color-surface-light, #f5f4ef); /* inferred from screenshot */
  color: var(--color-text-primary, #000000);
}

.button-ghost:active {
  background-color: var(--color-border, #e4e3de); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--color-text-tertiary, oklch(37% .013 285.805)); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

#### Standard Card
A dark-themed card used for showcasing featured content, like customer stories. It has rounded corners and features a subtle image transform and card lift on hover, driven by a `300ms` transition.
```css
.card-standard {
  background-color: var(--color-dark-surface, #07070b);
  color: var(--color-dark-text, #ffffff);
  border-radius: var(--radius-sm, 6px);
  padding: 24px; /* inferred from screenshot */
  overflow: hidden;
  position: relative;
  transition: transform var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1));
}

.card-standard:hover {
  transform: translateY(-4px); /* inferred from screenshot */
}

.js-product-card:hover img {
  transform: scale3d(1.05, 1.05, 1.05); /* extracted from pseudoStates */
  transition: transform var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1));
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light background and a subtle border. It features a clear blue focus ring for accessibility, with a `2px` outline.
```css
.input-text {
  background-color: var(--color-background, #fbfbf8);
  color: var(--color-text-primary, #000000);
  font-family: var(--typography-body-family, 'Inter'), system-ui, sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #e4e3de);
  border-radius: var(--radius-sm, 6px);
  transition: border-color var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1)), box-shadow var(--motion-duration-base, 300ms) var(--motion-easing-standard, cubic-bezier(0.4, 0, 1, 1));
}

.input-text:focus {
  border-color: var(--color-focus-ring, rgb(0, 124, 255)); /* inferred from screenshot */
  outline: 2px solid var(--color-focus-ring, rgb(0, 124, 255)); /* extracted from pseudoStates */
  outline-offset: 2px; /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-surface-light, #f5f4ef); /* inferred from screenshot */
  color: var(--color-text-tertiary, oklch(37% .013 285.805)); /* inferred from screenshot */
  border-color: var(--color-border, #e4e3de);
  cursor: not-allowed;
}
```

#### Form Label
Standard label for input fields, using the default body text style and `14px` font size for clarity.
```css
.form-label {
  color: var(--color-text-primary, #000000);
  font-family: var(--typography-body-family, 'Inter'), system-ui, sans-serif;
  font-size: 14px; /* inferred from screenshot */
  font-weight: 400;
  margin-bottom: var(--spacing-4, 4px);
  display: block;
}
```

### Navigation

#### Top Navigation Bar
The main header navigation, providing access to key sections of the site. It has a light background, a subtle bottom border, and remains sticky at the top with a high `z-index` of `40`.
```css
.nav-top-bar {
  background-color: var(--color-background, #fbfbf8);
  border-bottom: 1px solid var(--color-border, #e4e3de); /* inferred from screenshot */
  padding: var(--spacing-16, 16px) var(--spacing-40, 40px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 40; /* inferred from mobile-nav-panel z-index */
}
```



> The source capture for this system was truncated at this point, part-way
> through the navigation component section.

## Known Gaps

This reference is **partial**. The token block in the frontmatter is complete —
colors, typography, spacing, radius, elevation, motion and components are all
present and usable. The prose stops inside the navigation section.

Not captured:

- The remainder of the navigation component, plus links and badges.
- Layout principles: grid, container width, section padding, whitespace.
- Depth and elevation guidance beyond the `elevation` tokens.
- Do's and don'ts.
- Responsive behavior and breakpoints.
- The agent prompt guide and quick colour reference other files carry.

Note that several text values are expressed in OKLCH rather than hex
(`text-secondary`, `text-tertiary`); convert before use if your toolchain
expects hex.
