---
name: 'WhatsApp'
slug: whatsapp
url: https://www.whatsapp.com
category: 'Consumer'
mode: dual
fonts:
  - 'WhatsApp Sans Var'
preview:
  bg: '#ffffff'
  fg: '#1c1e21'
  accent: '#25d366'
summary: >-
  That green, #25d366, over a white or near-black canvas with the variable WhatsApp Sans.
colors:
  primary: '#25d366'
  primary-hover: '#00803e'
  background: '#ffffff'
  background-alt: '#fcf5eb'
  background-dark: '#1c1e21'
  background-dark-alt: '#111b21'
  text-primary: '#1c1e21'
  text-inverse: '#ffffff'
  text-muted: '#5e5e5e'
  text-accent-blue: '#385898'
  text-accent-link: '#0373e9'
  border-light: '#e6ffda'
  border-disabled: '#cdd0d5'
  surface-disabled: '#f0f4f9'
typography:
  display:
    family: 'WhatsApp Sans Var'
    size: 60px
    weight: 700
    line-height: 1.2
  heading-1:
    family: 'WhatsApp Sans Var'
    size: 32px
    weight: 700
    line-height: 1.2
  body:
    family: 'WhatsApp Sans Var'
    size: 18px
    weight: 400
    line-height: 1.5
  body-sm:
    family: 'WhatsApp Sans Var'
    size: 16px
    weight: 400
    line-height: 1.5
  caption:
    family: 'WhatsApp Sans Var'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]
radius:
  sm: 25px
  full: 50px
elevation:
  z-1: 1
  z-modal-backdrop: 999
  z-header: 1000
  z-modal: 9999
  z-tooltip: 10000
motion:
  duration-fast: '250ms'
  duration-base: '300ms'
  duration-medium: '500ms'
  duration-slow: '1s'
  easing-ease-in-out: 'ease-in-out'
  easing-cubic-bezier-1: 'cubic-bezier(0.42, 0, 0.58, 1)'
  easing-cubic-bezier-2: 'cubic-bezier(0.66, 0, 0.34, 1)'
  easing-ease-out: 'ease-out'
  easing-linear: 'linear'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.full}'
    padding: '16px 28px'
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-primary}'
    radius: '{radius.full}'
    padding: '16px 28px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.text-primary}'
    padding: '8px 12px'
  card:
    bg: '{colors.background}'
    radius: '{radius.sm}'
    padding: '24px'
    shadow: 'none'
---

# Design System Inspired by WhatsApp

## 1. Visual Theme & Atmosphere

WhatsApp's design system conveys a sense of security and approachability, anchored by its distinctive green (#25d366) and a clean, light aesthetic. The hero section prominently features a large, rounded container with a photographic background, setting a friendly tone. This is contrasted with ample use of a light beige (#fcf5eb) background for secondary content areas and a dark charcoal (#1c1e21) for footer and deep sections, creating clear content separation. Typography relies exclusively on the WhatsApp Sans Var font, with large, bold display text (e.g., 60px, 700 weight) for headlines and smaller, legible text for body content.

The interface emphasizes clarity and direct interaction, with interactive elements like buttons and input fields featuring generous border radii (50px for buttons, 25px for cards). Iconography is typically monochrome line-based, complementing the clean aesthetic. The layout is spacious, using a consistent spacing scale to ensure elements breathe. No significant motion or complex animations were detected, reinforcing a focus on straightforward functionality.

Key Characteristics:
- Dominant brand green (#25d366) for primary actions.
- Soft beige (#fcf5eb) and crisp white (#ffffff) backgrounds.
- WhatsApp Sans Var font for all text.
- Large display typography (60px, 700 weight).
- Generous border radii: 50px for buttons, 25px for cards.
- Dark charcoal (#1c1e21) for footer and deep sections.
- Spacious layouts with consistent 32px and 64px padding.

## 2. Color Palette & Roles

-   **Primary**
    -   **Primary Green** (`#25d366`) — The core brand color, used for primary calls-to-action, key interactive elements, and brand accents.
    -   **Primary Green Hover** (`#00803e`) — The darkened state for primary interactive elements on hover, ensuring clear feedback.

-   **Accent Colors**
    -   **Background Alt** (`#fcf5eb`) — A warm, light beige used for tinted background sections, providing visual separation from pure white areas.
    -   **Border Light** (`#e6ffda`) — A subtle light green used for decorative borders or very light accents.

-   **Interactive**
    -   **Text Accent Blue** (`#385898`) — Used for specific informational links, such as "For Business" in the header.
    -   **Text Accent Link** (`#0373e9`) — Used for general informational links, such as "Help Center" in the header.

-   **Neutral Scale**
    -   **Background** (`#ffffff`) — The main background color for most content areas, providing a clean canvas.
    -   **Text Primary** (`#1c1e21`) — The primary color for all body text, headings, and core UI elements.
    -   **Text Inverse** (`#ffffff`) — Used for text placed on dark backgrounds or primary brand color elements, ensuring contrast.
    -   **Text Muted** (`#5e5e5e`) — Used for secondary text, captions, or less prominent information.

-   **Surface & Borders**
    -   **Background Dark** (`#1c1e21`) — A dark charcoal color used for prominent dark sections and sometimes as a background for inverse text.
    -   **Background Dark Alt** (`#111b21`) — A slightly darker charcoal used specifically for the footer background.
    -   **Border Disabled** (`#cdd0d5`) — A light grey used for borders of disabled input fields or buttons.
    -   **Surface Disabled** (`#f0f4f9`) — A very light grey used for the background of disabled input fields or buttons.

## 3. Typography Rules

-   **Font Family**: 'WhatsApp Sans Var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'. For code blocks, `SFMono-Regular`, `Consolas`, `Liberation Mono`, `Menlo`, `monospace` (inferred).

-   **Hierarchy**:
    -   **Display**: `WhatsApp Sans Var` `60px` `700` · line-height `1.2` · tracking `none` · Used for prominent hero headlines.
    -   **H1**: `WhatsApp Sans Var` `32px` `700` · line-height `1.2` · tracking `none` · Used for major section titles.
    -   **Body**: `WhatsApp Sans Var` `18px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and descriptions.
    -   **Body Small**: `WhatsApp Sans Var` `16px` `400` · line-height `1.5` · tracking `none` · Used for secondary text, form labels, and navigation links.
    -   **Caption**: `WhatsApp Sans Var` `12px` `400` · line-height `1.5` · tracking `none` · Smallest text for legal notes or metadata.
    -   **Code/Mono**: `SFMono-Regular` `14px` `400` · line-height `1.4` · tracking `none` · (inferred) For displaying code snippets or technical information.

-   **Principles**
    -   WhatsApp Sans Var 700 is reserved for all headings and display text, establishing a strong, clear content hierarchy.
    -   Body text, set at 18px or 16px with a 400 weight, prioritizes readability and comfort across all devices.
    -   Line heights of 1.2 for headings and 1.5 for body text ensure text is open and easy to scan.
    -   The consistent use of a single sans-serif font family maintains a unified and modern brand voice.
    -   All interactive text elements, such as navigation links, maintain a 400 or 500 weight for clear distinction from static text.

## 4. Component Stylings

### Buttons

Buttons leverage the brand's primary green for calls-to-action, with generous padding and fully rounded corners for a friendly, approachable feel.

#### Primary Button
A prominent, filled button for key actions, using the brand's primary green.
```css
.button-primary {
  background-color: var(--colors-primary, #25d366);
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 400; /* extracted from button sample */
  padding: 16px 28px;
  border: none;
  border-radius: var(--radius-full, 50px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 300ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #00803e);
}

.button-primary:active {
  background-color: var(--colors-primary-hover, #00803e); /* inferred from screenshot */
  transform: translateY(1px); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--colors-border-disabled, #cdd0d5);
  color: var(--colors-text-muted, #5e5e5e);
  cursor: not-allowed;
}
```

#### Secondary Button
An outlined button for secondary actions, often seen with a white background and dark text.
```css
.button-secondary {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #1c1e21);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 500; /* extracted from button sample */
  padding: 16px 28px;
  border: 1px solid var(--colors-text-primary, #1c1e21);
  border-radius: var(--radius-full, 50px);
  cursor: pointer;
  transition: border-color var(--motion-duration-base, 300ms) var(--motion-easing-ease-in-out, ease-in-out),
              color var(--motion-duration-base, 300ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-secondary:hover {
  border-color: var(--colors-primary-hover, #00803e); /* inferred from screenshot */
  color: var(--colors-primary-hover, #00803e); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--colors-surface-disabled, #f0f4f9); /* inferred from screenshot */
  border-color: var(--colors-primary-hover, #00803e); /* inferred from screenshot */
}

.button-secondary:disabled {
  border-color: var(--colors-border-disabled, #cdd0d5);
  color: var(--colors-text-muted, #5e5e5e);
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button, typically used for navigation items or less prominent actions.
```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #1c1e21);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 400;
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 25px); /* inferred from screenshot */
  cursor: pointer;
  transition: color var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.button-ghost:hover {
  color: var(--colors-primary-hover, #00803e);
}

.button-ghost:active {
  color: var(--colors-primary, #25d366); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-text-muted, #5e5e5e);
  cursor: not-allowed;
}
```

### Cards & Containers

Cards are used for grouping related content, featuring a clean white background and subtle rounded corners.

#### Standard Card
A basic container for content, often seen in the "Stay up to date" section.
```css
.card {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #1c1e21);
  padding: var(--spacing-scale-5, 24px); /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 25px);
  box-shadow: none;
  transition: box-shadow var(--motion-duration-base, 300ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* inferred from screenshot */
}
```

### Inputs & Forms

Input fields are minimalistic, focusing on clarity and accessibility.

#### Text Input
A standard text input field with a subtle border.
```css
.text-input {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #1c1e21);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--colors-text-muted, #5e5e5e); /* inferred from screenshot */
  border-radius: var(--radius-sm, 25px); /* inferred from screenshot */
  transition: border-color var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out),
              outline-color var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.text-input:focus {
  outline: 2px solid var(--colors-primary, #25d366);
  outline-offset: 2px;
  border-color: var(--colors-primary, #25d366); /* inferred from screenshot */
}

.text-input:disabled {
  background-color: var(--colors-surface-disabled, #f0f4f9);
  border-color: var(--colors-border-disabled, #cdd0d5);
  color: var(--colors-text-muted, #5e5e5e);
  cursor: not-allowed;
}
```

#### Form Label
Labels for form fields, using a slightly smaller font size.
```css
.form-label {
  color: var(--colors-text-primary, #1c1e21);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 400;
  margin-bottom: var(--spacing-scale-2, 8px); /* inferred from screenshot */
  display: block;
}
```

#### Checkbox/Radio
(none observed in source)

### Navigation

The top navigation bar provides clear access to main sections, with links that subtly change color on interaction.

#### Top Navigation Bar
The header bar at the top of the page.
```css
.top-nav-bar {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #1c1e21);
  padding: var(--spacing-scale-4, 16px) var(--spacing-scale-10, 64px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid transparent; /* inferred from screenshot */
}
```

#### Navigation Link
Individual links within the navigation bar.
```css
.nav-link {
  color: var(--colors-text-primary, #1c1e21);
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 400;
  text-decoration: none;
  padding: var(--spacing-scale-2, 8px) var(--spacing-scale-3, 12px); /* inferred from screenshot */
  transition: color var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.nav-link:hover {
  color: var(--colors-primary-hover, #00803e);
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #25d366); /* inferred from screenshot */
  font-weight: 500; /* inferred from screenshot */
}
```

#### Dropdown Menu
(none explicitly visible in source)

### Links

Standard links are underlined and use specific accent blues, while secondary links might use the brand green.

#### Standard Link
Inline text links, typically blue and underlined.
```css
.link-standard {
  color: var(--colors-text-accent-blue, #385898);
  text-decoration: underline;
  font-family: var(--typography-body-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-size, 18px);
  font-weight: 400;
  transition: text-decoration-color var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.link-standard:hover {
  text-decoration-color: initial; /* extracted from a:hover */
  text-decoration: none; /* inferred from screenshot */
}

.link-standard:visited {
  color: var(--colors-text-accent-blue, #385898); /* inferred from screenshot */
}
```

#### Secondary Link
Links that are part of a component or a "Read More" action, often using the primary green.
```css
.link-secondary {
  color: var(--colors-primary, #25d366);
  text-decoration: none;
  font-family: var(--typography-body-sm-family, 'WhatsApp Sans Var');
  font-size: var(--typography-body-sm-size, 16px);
  font-weight: 500; /* inferred from screenshot */
  transition: text-decoration var(--motion-duration-fast, 250ms) var(--motion-easing-ease-in-out, ease-in-out);
}

.link-secondary:hover {
  text-decoration: underline; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-primary, #25d366); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: The spacing system is built on a `4px` base unit, creating a comprehensive scale for consistent element separation.
    -   **Scale**: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`.
    -   **Usage Context**:
        -   `4px`, `8px`: Micro-spacing, for icons next to text or small inline gaps.
        -   `12px`, `16px`: Component internal padding, spacing between form elements.
        -   `20px`, `24px`: Spacing between major component blocks, card padding.
        -   `32px`, `40px`: Section padding, vertical rhythm between content areas.
        -   `48px`, `64px`: Large section gaps, header/footer vertical padding.
        -   `80px`: Hero section vertical padding, significant content breaks.

-   **Grid & Container** *(Suggested — not measured)*:
    _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   **Max Width**: `1280px` (inferred)
    -   **Columns**: `12` (inferred)
    -   **Gutter**: `24px` (inferred)
    -   **Section Padding**: `0 64px` (inferred) on desktop, reducing on smaller viewports.

-   **Whitespace Philosophy**: WhatsApp employs a generous whitespace philosophy, particularly using `32px` and `64px` for vertical and horizontal section padding. This creates a clean, uncluttered interface that enhances readability and directs user attention to key content, contributing to an overall sense of calm and professionalism.

-   **Border Radius Scale**:
    -   **Small (`sm`)**: `25px` — Applied to cards, input fields, and smaller container elements.
    -   **Full (`full`)**: `50px` — Used for primary buttons, secondary buttons, and circular elements like avatars, providing a distinctly soft and friendly aesthetic.

## 6. Depth & Elevation

WhatsApp primarily uses a flat design, with elevation introduced subtly through z-index layering rather than prominent shadows.

-   **Flat (z-0)**: `none` — Default state for all background elements and static content.
-   **Content Layer (z-1)**: `none` — Used for interactive elements or content that might slightly overlap the base layer, such as navigation items.
-   **Modal Backdrop (z-999)**: `0 0 0 100vmax rgba(0,0,0,0.5)` (inferred) — A semi-transparent overlay to dim content behind active modals or pop-ups.
-   **Header (z-1000)**: `0 2px 4px rgba(0,0,0,0.08)` (inferred) — Applied to the fixed top navigation bar, ensuring it remains above scrolling content.
-   **Modal (z-9999)**: `0 8px 24px rgba(0,0,0,0.15)` (inferred) — Used for primary dialogs and full-screen overlays, providing significant visual separation.
-   **Tooltip (z-10000)**: `0 1px 4px rgba(0,0,0,0.1)` (inferred) — For small, temporary informational popovers that need to sit atop all other UI elements.

**Shadow Philosophy**: Shadows are minimal, serving to subtly lift interactive elements or indicate a modal dialog's prominence. The primary mechanism for visual hierarchy in depth is through explicit `z-index` values, ensuring a clear stacking order for interactive and overlay components without heavy visual noise.

## 7. Do's and Don'ts

### Do's
-   **DO** use `colors.primary` (#25d366) for all primary calls-to-action, like the "Download" button.
-   **DO** set all body text in `WhatsApp Sans Var` at `18px` with `400` weight for optimal readability.
-   **DO** maintain `50px` border-radius (`radius.full`) for all primary and secondary buttons.
-   **DO** apply `25px` border-radius (`radius.sm`) to cards and input fields for a consistent soft aesthetic.
-   **DO** ensure text on `colors.background` (#ffffff) uses `colors.text-primary` (#1c1e21) for AAA contrast (16.71 ratio).
-   **DO** use `colors.background-alt` (#fcf5eb) to visually distinguish secondary content sections from the main `colors.background` (#ffffff).
-   **DO** use `colors.background-dark-alt` (#111b21) exclusively for the footer section.
-   **DO** apply `32px` of vertical spacing (`spacing.scale-6`) between major content blocks on desktop.
-   **DO** ensure interactive elements like inputs use a `2px` `outline` in `colors.primary` (#25d366) on `:focus`.
-   **DO** use `colors.primary-hover` (#00803e) for all hover states on `colors.primary` (#25d366) buttons and links.

### Don'ts
-   **DON'T** use `WhatsApp Sans Var` with a `700` weight for body text; reserve it for headings and display type.
-   **DON'T** use `colors.text-muted` (#5e5e5e) on `colors.background-alt` (#fcf5eb) for primary content, as it may reduce legibility for some users (inferred, though extracted pairs pass AAA).
-   **DON'T** introduce custom spacing values; adhere strictly to the `4px` base `spacing.scale` values.
-   **DON'T** use sharp, `0px` border-radii on interactive components; always apply `radius.sm` (`25px`) or `radius.full` (`50px`).
-   **DON'T** use `colors.text-accent-blue` (#385898) for primary calls-to-action; reserve `colors.primary` (#25d366) for this role.
-   **DON'T** remove the underline from standard links unless they are explicitly styled as secondary links; it aids discoverability.
-   **DON'T** use `colors.background-dark` (#1c1e21) for small text on `colors.background` (#ffffff) as it's too dark for subtle accents.
-   **DON'T** use any font family other than `WhatsApp Sans Var` for primary UI text.

## 8. Responsive Behavior

_Note: breakpoints below are extracted from the source. These are the brand's actual media queries._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~319px): Content reflows to single column; typography scales down.
    -   **Mobile Large** (~639px): Images and cards stack vertically; header elements may condense.
    -   **Tablet** (~767px): Main navigation collapses into a hamburger menu; multi-column layouts begin to appear.
    -   **Desktop** (~1023px): Standard desktop layout with full navigation and multi-column content.
    -   **Desktop Large** (~1100px): Layout reaches maximum width; content remains centered with increased side padding.

-   **Touch Targets**:
    -   All interactive elements, especially buttons and links, should have a minimum touch target size of `44px` by `44px` (inferred).
    -   Maintain a minimum of `16px` (`spacing.scale-4`) clear space between adjacent touch targets (inferred).

-   **Collapsing Strategy**:
    -   **Navigation**: The primary navigation bar will transition to a hamburger menu on viewports smaller than `768px`.
    -   **Cards**: Cards will stack vertically on mobile and tablet breakpoints, maintaining `24px` (`spacing.scale-5`) vertical spacing.
    -   **Typography**: Display headlines (`typography.display`) will scale down to `32px` (`typography.heading-1.size`) on mobile to fit screen constraints.
    -   **Padding**: Horizontal section padding will decrease from `64px` (`spacing.scale-10`) on desktop to `24px` (`spacing.scale-5`) or `16px` (`spacing.scale-4`) on mobile.
    -   **Forms**: Input fields will maintain `100%` width on mobile, with labels always placed above the input.
    -   **Spacing**: Vertical spacing between major sections will adapt from `64px` (`spacing.scale-10`) to `40px` (`spacing.scale-8`) on smaller screens.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   Primary Green: `#25d366`
    -   Primary Green Hover: `#00803e`
    -   Background White: `#ffffff`
    -   Background Alt Beige: `#fcf5eb`
    -   Background Dark Charcoal: `#1c1e21`
    -   Background Darker Charcoal: `#111b21`
    -   Text Primary: `#1c1e21`
    -   Text Inverse: `#ffffff`
    -   Text Muted: `#5e5e5e`
    -   Text Accent Blue: `#385898`
    -   Text Accent Link: `#0373e9`
    -   Border Light Green: `#e6ffda`
    -   Border Disabled Grey: `#cdd0d5`
    -   Surface Disabled Light Grey: `#f0f4f9`

-   **Iteration Guide**:
    1.  Always use `colors.primary` (#25d366) for all main calls-to-action.
    2.  Ensure all text uses the `WhatsApp Sans Var` font family.
    3.  Set display headings to `60px` `700` weight and body text to `18px` `400` weight.
    4.  Apply `radius.full` (`50px`) to all buttons and `radius.sm` (`25px`) to cards.
    5.  Utilize the `spacing.scale` with `4px` base, preferring `16px`, `24px`, `32px`, `40px`, `64px` for layout.
    6.  Primary buttons should have `16px 28px` padding and `colors.text-inverse` (#ffffff) text.
    7.  Input fields must show a `2px` `outline` in `colors.primary` (#25d366) on `:focus`.
    8.  Navigation links should transition `color` to `colors.primary-hover` (#00803e) on hover.
    9.  The fixed header should have a `z-index` of `1000`.
    10. Ensure all text on `colors.background` (#ffffff) uses `colors.text-primary` (#1c1e21) for AAA contrast.
    11. On mobile, the navigation must collapse into a hamburger menu below `768px`.
    12. Cards should stack vertically on screens smaller than `768px`, with `24px` vertical spacing.
