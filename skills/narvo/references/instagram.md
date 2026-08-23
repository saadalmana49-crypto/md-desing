---
name: 'Instagram'
slug: instagram
url: https://www.instagram.com
category: 'Consumer'
mode: light
fonts:
  - '-apple-system'
preview:
  bg: '#ffffff'
  fg: '#000000'
  accent: '#0064e0'
summary: >-
  System font, white canvas, #0064e0 actions and 16px radii — the chrome disappears behind the photos.
colors:
  primary: '#0064e0'
  primary-hover: '#0057c7'
  primary-active: 'rgba(0, 100, 224, 0.7)'
  background: '#ffffff'
  background-muted: '#f2f4f6'
  text-primary: '#000000'
  text-secondary: '#737373'
  text-accent: '#4150f7'
  text-link: '#0064e0'
  border-default: '#d0d3d6'
  input-bg: '#f2f4f6'
  input-border-focus: '#0064e0'
  secondary-button-hover-bg: 'rgba(0,0,0,0.05)'
  secondary-button-active-bg: '#4150f7'
typography:
  display:
    family: '-apple-system'
    size: 40px
    weight: 600
    line-height: 1.2
  heading-1:
    family: '-apple-system'
    size: 26px
    weight: 500
    line-height: 1.2
  body:
    family: '-apple-system'
    size: 17px
    weight: 400
    line-height: 1.5
  body-sm:
    family: '-apple-system'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: '-apple-system'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 40, 48, 128]
radius:
  sm: 16px
  md: 22px
  lg: 40px
elevation:
  card: '0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)'
  modal: 12
components:
  button-primary:
    bg: '{colors.primary}'
    text: '#ffffff'
    radius: '{radius.sm}'
    padding: '10px 16px'
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.primary}'
    border: '1px solid {colors.primary}'
    radius: '{radius.sm}'
    padding: '10px 16px'
  input:
    bg: '{colors.input-bg}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.border-default}'
    radius: '{radius.sm}'
    padding: '12px'
motion:
  duration-fast: '0.1s'
  duration-base: '0.2s'
  duration-medium: '0.3s'
  easing-standard: 'ease-in-out'
  easing-decelerate: 'ease-out'
layout:
  breakpoints:
    mobile-small: 679px
    mobile-large: 735px
    tablet: 767px
    desktop: 999px
    desktop-large: 1025px
---

# Design System Inspired by Instagram

## 1. Visual Theme & Atmosphere
Instagram's design system emphasizes clarity and directness, featuring a predominantly white background (`#ffffff`) that allows content and interactive elements to stand out. The brand's identity is subtly reinforced by the iconic purple-orange-pink gradient of its logo, which contrasts with the otherwise clean and functional interface. Key interactive elements, such as primary call-to-action buttons and links, are consistently highlighted using a vibrant blue (`#0064e0`), ensuring clear user guidance.

The visual atmosphere is clean and approachable, utilizing system fonts like `-apple-system` for optimal legibility across devices. Rounded corners (`16px` radius for buttons and inputs) soften the interface, contributing to a friendly user experience. While the static screenshot doesn't show dynamic interactions, the presence of CSS animations and transitions (e.g., `0.3s ease-in-out` for opacity changes) suggests a smooth and responsive user interface, enhancing the overall polish and engagement.

**Key Characteristics**
- Clean white background with minimal ornamentation.
- Primary interactive color: `#0064e0` blue.
- Rounded corners for interactive elements: `16px`.
- System font stack (`-apple-system`) for clear text.
- Prominent gradient logo as a brand identifier.
- Subtle CSS animations for smooth transitions.
- Ample use of `12px` and `24px` spacing for readability.

## 2. Color Palette & Roles
Instagram's color palette is functional and direct, primarily using neutrals to frame content and a distinct blue for interaction.

-   **Primary**:
    -   `primary` (`#0064e0`) — The core brand blue, used for primary call-to-action buttons, active states, and prominent links.
    -   `primary-hover` (`#0057c7`) — A slightly darker shade of the primary blue, indicating interactive hover states for buttons (inferred from screenshot).
    -   `primary-active` (`rgba(0, 100, 224, 0.7)`) — The primary blue with 70% opacity, used for the active (pressed) state of primary buttons.
-   **Accent Colors**:
    -   `text-accent` (`#4150f7`) — A distinct purple-blue, used for specific text highlights and as the active background for secondary buttons.
-   **Neutral Scale**:
    -   `background` (`#ffffff`) — The dominant clean white background for the entire application interface.
    -   `background-muted` (`#f2f4f6`) — A very light gray, used for subtle background sections, input fields, and hover states on certain elements.
    -   `text-primary` (`#000000`) — The main color for headings and body text, ensuring maximum readability on white backgrounds.
    -   `text-secondary` (`#737373`) — A medium gray for less prominent text, such as captions, secondary labels, and footer links.
-   **Surface & Borders**:
    -   `border-default` (`#d0d3d6`) — A light gray, used for subtle borders around input fields and other UI containers.
    -   `input-bg` (`#f2f4f6`) — The light gray background specifically for text input fields.
    -   `input-border-focus` (`#0064e0`) — The primary blue used for the border of input fields when they are in a focused state (inferred from screenshot).
    -   `secondary-button-hover-bg` (`rgba(0,0,0,0.05)`) — A very subtle transparent black, used as the background for secondary buttons on hover.
    -   `secondary-button-active-bg` (`#4150f7`) — The accent purple-blue, used as the background for secondary buttons when in an active (pressed) state.

## 3. Typography Rules
Instagram employs a system font stack to ensure optimal rendering and legibility across diverse devices and operating systems.

-   **Font Family**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
-   **Hierarchy**:
    -   **Display**: `-apple-system` `40px` `600` · line-height `1.2` · tracking `none` · Used for large, impactful headlines.
    -   **Heading 1**: `-apple-system` `26px` `500` · line-height `1.2` · tracking `none` · Used for prominent section titles like "Log into Instagram".
    -   **Body**: `-apple-system` `17px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and main content.
    -   **Body Small**: `-apple-system` `14px` `400` · line-height `1.5` · tracking `none` · Used for input field labels, secondary information, and button text.
    -   **Caption**: `-apple-system` `12px` `400` · line-height `1.5` · tracking `none` · Smallest text for legal notices and helper text.
-   **Principles**
    -   Prioritize native system fonts for consistent rendering and performance across platforms.
    -   Maintain a clear visual hierarchy using distinct font sizes and weights, with `40px` for display and `14px` for button text.
    -   Utilize `400` (Regular) and `500` (Medium) weights for most text, with `600` (Semi-Bold) reserved for display-level emphasis.
    -   Employ a unitless line-height of `1.5` for body and caption text to ensure comfortable reading.
    -   Avoid custom font loading to optimize page load times, relying on system defaults.

## 4. Component Stylings

### Buttons
Instagram buttons are characterized by their rounded corners and clear visual hierarchy, with primary actions in blue and secondary actions outlined. All buttons feature subtle transitions for a smooth interactive experience.

#### Primary Button
A solid blue button with white text, used for primary actions like "Log in". It has a `16px` border-radius. On hover, the background darkens slightly; when active, its opacity reduces.

```css
.button-primary {
  background-color: var(--colors-primary, #0064e0);
  color: #ffffff;
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  padding: 10px 16px;
  border: none;
  border-radius: var(--radius-sm, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #0057c7); /* inferred from screenshot */
}

.button-primary:active {
  opacity: 0.7; /* from pseudoStates._acan:active */
}

.button-primary:disabled {
  opacity: 0.7; /* from pseudoStates._acao[disabled] */
  cursor: not-allowed;
}
```

#### Secondary Button
A transparent button with a blue border and blue text, used for secondary actions like "Log in with Facebook" or "Create new account". It also has a `16px` border-radius. On hover, a subtle light gray background appears; when active, its background turns to `text-accent` blue.

```css
.button-secondary {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-primary, #0064e0);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  padding: 10px 16px;
  border: 1px solid var(--colors-primary, #0064e0);
  border-radius: var(--radius-sm, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.button-secondary:hover {
  background-color: var(--colors-secondary-button-hover-bg, rgba(0,0,0,0.05)); /* from pseudoStates.x14uxoo:hover */
}

.button-secondary:active {
  background-color: var(--colors-secondary-button-active-bg, #4150f7); /* from pseudoStates._aswv:active */
  color: var(--colors-background, #ffffff); /* inferred from screenshot */
  border-color: var(--colors-secondary-button-active-bg, #4150f7); /* inferred from screenshot */
}

.button-secondary:disabled {
  opacity: 0.7; /* from pseudoStates._aswq[disabled] */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button with a transparent background, used for less prominent actions like "Forgot password?". On hover, it shows a subtle background, and its opacity reduces when active.

```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-primary, #0064e0);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 16px); /* inferred from screenshot */
  cursor: pointer;
  transition: background-color var(--motion-duration-medium, 0.3s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.button-ghost:hover {
  background-color: var(--colors-secondary-button-hover-bg, rgba(0,0,0,0.05)); /* inferred from screenshot */
}

.button-ghost:active {
  opacity: 0.7; /* inferred from screenshot */
}

.button-ghost:disabled {
  opacity: 0.7; /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers
Instagram uses a clean, minimal card style for content and functional blocks, often with rounded corners and subtle borders or shadows.

#### Standard Card
A white background container with a subtle border and rounded corners, used for the login form. On hover, its background lightens slightly.

```css
.card {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border-default, #d0d3d6); /* inferred from screenshot */
  border-radius: var(--radius-sm, 16px);
  padding: var(--spacing-40, 40px); /* inferred from screenshot */
  box-shadow: none;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
}

.card:hover {
  background-color: var(--colors-background-muted, #f2f4f6); /* from pseudoStates.x2nact:hover */
}
```

### Inputs & Forms
Form elements are clean and straightforward, prioritizing usability and clear feedback.

#### Text Input
A text input field with a light gray background, subtle border, and rounded corners. It provides clear visual feedback on focus with a blue border.

```css
.input-text {
  background-color: var(--colors-input-bg, #f2f4f6);
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  padding: 12px;
  border: 1px solid var(--colors-border-default, #d0d3d6);
  border-radius: var(--radius-sm, 16px);
  transition: border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out);
  width: 100%; /* inferred from screenshot */
  box-sizing: border-box; /* inferred from screenshot */
}

.input-text::placeholder {
  color: var(--colors-text-secondary, #737373);
}

.input-text:focus {
  border-color: var(--colors-input-border-focus, #0064e0); /* inferred from screenshot */
  outline: 1px solid var(--colors-input-border-focus, #0064e0); /* inferred from screenshot */
  outline-offset: 2px; /* from pseudoStates.x7s97pk:focus-visible */
}

.input-text:disabled {
  opacity: 0.7; /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Form Label
Simple text labels for form fields, using the primary text color and a smaller font size.

```css
.form-label {
  color: var(--colors-text-primary, #000000);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
  display: block; /* inferred from screenshot */
}
```

### Navigation
Instagram's navigation is minimal on the login page, primarily consisting of footer links.

#### Navigation Link
Standard text links used in the footer, appearing in a secondary gray color. On hover, the underline color transitions, and on active, its opacity reduces.

```css
.nav-link {
  color: var(--colors-text-secondary, #737373);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  text-decoration: none;
  transition: text-decoration-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.nav-link:hover {
  text-decoration: underline;
  text-decoration-color: var(--colors-text-secondary, #737373); /* from pseudoStates.a:hover */
}

.nav-link:active {
  opacity: 0.5; /* from pseudoStates.body a:active */
}

.nav-link:visited {
  color: var(--colors-text-secondary, #737373); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  font-weight: var(--typography-body-sm-weight, 400); /* inferred, no strong visual change */
  color: var(--colors-text-primary, #000000); /* inferred for current page */
}
```

### Links
General text links, often using the primary brand blue.

#### Standard Link
Used for interactive text, such as "Forgot password?". It uses the primary blue and underlines on hover.

```css
.link-standard {
  color: var(--colors-text-link, #0064e0);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  text-decoration: none;
  transition: text-decoration-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.link-standard:hover {
  text-decoration: underline;
  text-decoration-color: var(--colors-text-link, #0064e0); /* from pseudoStates.a:hover */
}

.link-standard:active {
  opacity: 0.5; /* from pseudoStates.body a:active */
}

.link-standard:visited {
  color: var(--colors-text-link, #0064e0); /* inferred from screenshot */
}
```

#### Secondary Link
Used for less prominent links, like the footer navigation, using secondary text color.

```css
.link-secondary {
  color: var(--colors-text-secondary, #737373);
  font-family: var(--typography-body-sm-family, -apple-system);
  font-size: var(--typography-body-sm-size, 14px);
  font-weight: var(--typography-body-sm-weight, 400);
  text-decoration: none;
  transition: text-decoration-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease-in-out), opacity var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, ease-in-out);
}

.link-secondary:hover {
  text-decoration: underline;
  text-decoration-color: var(--colors-text-secondary, #737373); /* inferred from screenshot */
}

.link-secondary:active {
  opacity: 0.5; /* inferred from screenshot */
}

.link-secondary:visited {
  color: var(--colors-text-secondary, #737373); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles
Instagram prioritizes a clean, content-focused layout with generous whitespace and a consistent spacing system.

-   **Spacing System**: Base unit `4px` → `0, 4, 8, 12, 16, 20, 24, 40, 48, 128`.
    -   `0`: No spacing, for tightly grouped elements.
    -   `4px`: Smallest internal padding for icons or inline elements.
    -   `8px`: Standard spacing for form element labels and small gaps.
    -   `12px`: Padding for input fields, vertical spacing between small components.
    -   `16px`: Horizontal padding for buttons, general component spacing.
    -   `20px`: Moderate vertical spacing between distinct UI elements.
    -   `24px`: Section padding, vertical spacing between major content blocks.
    -   `40px`: Large padding, used for card content and significant vertical separation.
    -   `48px`: Extra large spacing, often for page-level section separation.
    -   `128px`: Maximum spacing, for hero sections or significant visual breaks.
-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._:
    -   Max width: `935px` (inferred from screenshot content width).
    -   Columns: `12` (inferred).
    -   Gutter: `24px` (inferred).
    -   Section Padding: `40px` horizontal, `48px` vertical (inferred from screenshot).
-   **Whitespace Philosophy**: Instagram leverages ample whitespace to create a sense of calm and focus, directing user attention to visual content and interactive elements. Margins and padding are consistently applied using the defined spacing scale, ensuring a breathable and uncluttered interface. This approach enhances readability and reduces cognitive load, making the platform feel intuitive.
-   **Border Radius Scale**:
    -   `sm`: `16px` — Used for buttons, input fields, and small interactive elements.
    -   `md`: `22px` — Used for card containers and larger interactive components.
    -   `lg`: `40px` — Used for profile pictures or very large rounded elements (not prominently visible in screenshot).

## 6. Depth & Elevation
Instagram primarily employs a flat design, but introduces subtle elevation for modals and specific components to guide user interaction and establish hierarchy.

-   **Flat (z-0)**: `none` — Default state for most background elements and static content.
-   **Interactive (z-1)**: `none` — Used for interactive elements like buttons and links, which primarily rely on color changes and opacity for feedback.
-   **Card (z-2)**: `0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)` — Applied to cards or containers that require subtle separation from the background.
-   **Modal (z-12)**: `0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)` — Used for overlays, dialogs, and other elements that appear above the main content, providing a distinct visual layer.

**Shadow Philosophy**
Instagram's shadow philosophy is restrained, reserving `box-shadow` for specific UI elements like cards and modals to denote hierarchy and interaction. The shadows are soft and diffused, primarily using `rgba(0,0,0,0.2)` and `rgba(0,0,0,0.1)` to create a subtle lift without appearing heavy. The z-index scale is minimal, with `z-12` for modals indicating a clear stacking order for critical overlays.

## 7. Do's and Don'ts

### Do's
-   **Do** use `#0064e0` for primary button backgrounds and `text-link` elements.
-   **Do** ensure body text uses `#000000` on `#ffffff` for a contrast ratio of 21:1, passing AAA.
-   **Do** apply a `16px` border-radius to all Primary and Secondary Buttons.
-   **Do** use `14px` font size with `400` weight for button text and input placeholders.
-   **Do** maintain `12px` vertical spacing between input fields and their associated labels.
-   **Do** use `#f2f4f6` as the background color for all text input fields.
-   **Do** highlight focused input fields with a `1px solid #0064e0` border and `2px` outline offset.
-   **Do** use `rgba(0,0,0,0.05)` as the background for Secondary Buttons on hover.
-   **Do** use `40px` of padding inside the main login `card` container.
-   **Do** use `#737373` for footer links on `#ffffff`, ensuring a contrast ratio of 4.74:1, passing AA.

### Don'ts
-   **Don't** use any color other than `#0064e0` for the primary action buttons.
-   **Don't** use text colors lighter than `#737373` on a `#ffffff` background for body text.
-   **Don't** introduce `border-radius` values other than `16px`, `22px`, or `40px`.
-   **Don't** use font sizes outside the defined `12px`, `14px`, `17px`, `26px`, `40px` scale.
-   **Don't** apply custom `box-shadow` values; use the defined `elevation.card` or `elevation.modal` for depth.
-   **Don't** use `opacity` less than `0.7` for disabled states of buttons or inputs.
-   **Don't** place `#f2f4f6` text on `#0064e0` backgrounds; ratio 4.88:1 passes AA, but this combination is not part of the brand's primary usage.
-   **Don't** use `background-color: #4150f7` for any element other than the `secondary-button-active-bg`.
-   **Don't** use `10px` or `20px` for vertical spacing between major sections; prefer `24px` or `40px`.
-   **Don't** remove the `text-decoration: underline` on hover for standard links.

## 8. Responsive Behavior
_Note: breakpoints below are measured from the source. Adjust to the brand's actual media queries when implementing._

-   **Measured Breakpoints**:
    -   **Mobile Small** (~679px): Layouts adjust for smaller screens, usually single-column.
    -   **Mobile Large** (~735px): Navigation elements may shift or collapse into a hamburger menu.
    -   **Tablet** (~767px): Content areas begin to expand, potentially introducing two-column layouts.
    -   **Desktop** (~999px): Full desktop layout with multi-column grids and expanded navigation.
    -   **Desktop Large** (~1025px): Wider content areas and more generous spacing for large displays.
-   **Touch Targets**:
    -   Ensure all interactive elements, especially buttons, have a minimum touch target area of `44px` by `44px` (inferred from best practices).
    -   Provide at least `12px` of clear space between adjacent touch targets.
-   **Collapsing Strategy**:
    -   Navigation: The primary navigation bar (if present) collapses into a hamburger menu on screens below `735px`.
    -   Cards: Cards expand to `100%` width on mobile, with internal padding remaining `24px`.
    -   Typography: Display `40px` font size scales down to `26px` on screens below `735px` (inferred).
    -   Padding: Horizontal page padding reduces from `40px` to `24px` on mobile.
    -   Forms: Input fields maintain `100%` width, but vertical spacing between fields might reduce to `16px`.
    -   Spacing: Larger spacing values like `40px` and `48px` may be condensed to `24px` or `20px` on smaller viewports.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#0064e0`
    -   `primary-hover`: `#0057c7`
    -   `primary-active`: `rgba(0, 100, 224, 0.7)`
    -   `background`: `#ffffff`
    -   `background-muted`: `#f2f4f6`
    -   `text-primary`: `#000000`
    -   `text-secondary`: `#737373`
    -   `text-accent`: `#4150f7`
    -   `text-link`: `#0064e0`
    -   `border-default`: `#d0d3d6`
    -   `input-bg`: `#f2f4f6`
    -   `input-border-focus`: `#0064e0`
    -   `secondary-button-hover-bg`: `rgba(0,0,0,0.05)`
    -   `secondary-button-active-bg`: `#4150f7`
-   **Iteration Guide**:
    1.  Always use `#0064e0` for primary call-to-action buttons, ensuring white text.
    2.  Always set button `border-radius` to `16px`.
    3.  Always use `-apple-system` font family for all text elements.
    4.  Always use `14px` font size for button text and standard input fields.
    5.  Always apply `12px` vertical spacing between form labels and input fields.
    6.  Always use `#f2f4f6` as the background for input fields, with a `1px solid #d0d3d6` border.
    7.  Always highlight focused input fields with a `1px solid #0064e0` border and `2px` `outline-offset`.
    8.  Always use `0.3s ease-in-out` for `background-color` transitions on interactive elements.
    9.  Always use `opacity: 0.7` for disabled states of buttons and inputs.
    10. Always use `#000000` for primary body text on `#ffffff` backgrounds.
    11. Always use `40px` and `48px` for major vertical spacing between sections on desktop.
    12. Always ensure text color `#737373` on `#ffffff` passes WCAG AA contrast.
