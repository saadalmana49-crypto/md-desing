---
name: 'Google'
slug: google
url: https://google.com
category: 'Consumer'
mode: light
fonts:
  - 'Google Sans'
  - 'Arial'
preview:
  bg: '#ffffff'
  fg: '#1f1f1f'
  accent: '#0b57d0'
summary: >-
  Google Sans over Arial, #0b57d0 for actions, #f8f9fa surfaces — restraint at planetary scale.
colors:
  primary: '#0b57d0'
  primary-light: '#e8f0fe'
  primary-text: '#ffffff'
  background: '#ffffff'
  surface: '#f8f9fa'
  surface-alt: '#f3f5f6'
  text-primary: '#1f1f1f'
  text-secondary: '#474747'
  text-muted: '#3c4043'
  text-subtle: '#636363'
  link: '#1a0dab'
  border: '#dadce0'
  border-light: '#d2d2d2'
  hover-neutral: 'rgba(68, 71, 70, 0.08)'
  active-neutral: 'rgba(109, 118, 124, 0.12)'
  focus-ring: '#0b57d0'
  overlay: 'rgba(0, 0, 0, 0.6)'
typography:
  display:
    family: 'Google Sans'
    size: 28px
    weight: 400
    line-height: 1.2
  body-lg:
    family: 'Arial'
    size: 16px
    weight: 400
    line-height: 1.5
  body:
    family: 'Arial'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Arial'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 64, 96]
radius:
  sm: 8px
  md: 24px
  lg: 50px
  full: 9999px
elevation:
  card: 'rgba(31, 31, 31, 0.08) 0px 3px 10px 0px'
  modal: 'rgba(0, 0, 0, 0.2) 0px 2px 10px 0px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.primary-text}'
    radius: '{radius.lg}'
    padding: '12px 24px'
  button-secondary:
    bg: '{colors.surface}'
    text: '{colors.text-muted}'
    radius: '{radius.sm}'
    padding: '8px 16px'
  card:
    bg: '{colors.background}'
    radius: '{radius.md}'
    shadow: '{elevation.modal}'
motion:
  duration-fast: '0.2s'
  duration-base: '0.4s'
  transition-opacity-fast: 'opacity 0.2s'
  transition-opacity-base: 'opacity 0.25s'
  animation-snackbar-hide: 'g-snackbar-hide 0.4s'
  animation-snackbar-show: 'g-snackbar-show 0.5s'
layout:
  breakpoints:
    mobile-sm: 320px
    mobile-lg: 479px
    tablet: 569px
---

# Design System Inspired by Google

## 1. Visual Theme & Atmosphere
The Google design system emphasizes a clean, highly functional aesthetic, prioritizing content clarity and user interaction. It features a predominant use of `#ffffff` for backgrounds, complemented by `#0b57d0` as a strong primary accent for interactive elements like buttons and links. Text is primarily set in `#1f1f1f` for high readability, with `Google Sans` serving for display text at `28px` and `Arial` for body content at `14px`. Layouts are structured with generous spacing, leveraging a `4px` base unit, and interactive elements frequently feature `8px` or `50px` border-radii for a soft, approachable feel.

The visual atmosphere is one of understated confidence and efficiency, achieved through a minimal color palette, clear typography, and subtle visual cues. Shadows, such as `rgba(0, 0, 0, 0.2) 0px 2px 10px 0px` for modals, are used sparingly to denote hierarchy and interactivity without visual clutter. The system incorporates CSS animations like `g-snackbar-hide` and `g-snackbar-show` for micro-interactions, providing smooth feedback without being distracting.

**Key Characteristics**
-   Primary blue accent: `#0b57d0` for key actions.
-   Clean backgrounds: `#ffffff` and `#f8f9fa` surfaces.
-   High-contrast text: `#1f1f1f` on light backgrounds.
-   Rounded corners: `8px` for subtle, `50px` for pill shapes.
-   Functional typography: `Google Sans` for display, `Arial` for body.
-   Subtle elevation: `rgba(31, 31, 31, 0.08)` for cards.
-   Animated feedback: `g-snackbar-hide` and `g-snackbar-show` transitions.

## 2. Color Palette & Roles
The Google color palette is functional and concise, designed for clarity and brand recognition across various applications.

-   **Primary**
    -   **Primary Blue** (`#0b57d0`) — The core brand blue, used for primary call-to-action buttons, active states, and focus rings.
    -   **Primary Light** (`#e8f0fe`) — A very light blue, often used for subtle background highlights or secondary interactive elements.
    -   **Primary Text** (`#ffffff`) — Used exclusively for text on dark interactive elements, such as primary buttons.

-   **Accent Colors**
    -   **Link Blue** (`#1a0dab`) — A distinct blue shade specifically for standard hyperlinks.

-   **Interactive**
    -   **Hover Neutral** (`rgba(68, 71, 70, 0.08)`) — A subtle dark transparent overlay for hover states on neutral interactive elements, like navigation items.
    -   **Active Neutral** (`rgba(109, 118, 124, 0.12)`) — A slightly stronger dark transparent overlay for active states on neutral interactive elements.
    -   **Focus Ring** (`#0b57d0`) — The primary blue used as a visible outline for keyboard focus states.

-   **Neutral Scale**
    -   **Background** (`#ffffff`) — The predominant background color for the overall page and content areas.
    -   **Surface** (`#f8f9fa`) — A very light gray used for secondary backgrounds, such as search bars or secondary buttons.
    -   **Surface Alt** (`#f3f5f6`) — Another light gray, providing slight differentiation for alternative background sections.
    -   **Text Primary** (`#1f1f1f`) — The primary color for most body text and headings, ensuring high readability.
    -   **Text Secondary** (`#474747`) — A slightly lighter dark gray for secondary text, subheadings, or less emphasized content.
    -   **Text Muted** (`#3c4043`) — Used for button text on light backgrounds and other muted informational text.
    -   **Text Subtle** (`#636363`) — A lighter gray for minor text elements, such as captions or footnotes.

-   **Surface & Borders**
    -   **Border** (`#dadce0`) — A light gray used for subtle borders separating UI elements or defining input fields.
    -   **Border Light** (`#d2d2d2`) — A slightly darker light gray for more defined borders or dividers.
    -   **Overlay** (`rgba(0, 0, 0, 0.6)`) — A semi-transparent dark overlay used for full-screen modal backgrounds.

## 3. Typography Rules
Google's typography system prioritizes clarity, readability, and a clear content hierarchy, leveraging two core font families.

-   **Font Family**:
    -   Primary: 'Google Sans', Arial, sans-serif
    -   Body: Arial, sans-serif
    -   Monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace

-   **Hierarchy**:
    -   **Display**: `Google Sans` `28px` `400` · line-height `1.2` · tracking `none` · Used for prominent page titles and key informational headings.
    -   **Body Large**: `Arial` `16px` `400` · line-height `1.5` · tracking `none` · Used for extended body copy or slightly emphasized text.
    -   **Body**: `Arial` `14px` `400` · line-height `1.5` · tracking `none` · The standard size for most paragraph text and interactive labels.
    -   **Caption**: `Arial` `12px` `400` · line-height `1.5` · tracking `none` · Reserved for legal text, footnotes, or minor annotations.

-   **Principles**
    -   **Clarity First**: Prioritize legibility with `Arial` for body text and `Google Sans` for display, ensuring text is easily scannable on all devices.
    -   **Functional Hierarchy**: Use distinct font sizes and weights from the defined scale to establish a clear visual hierarchy, guiding the user's eye through content.
    -   **Minimalist Application**: Avoid excessive font variations or decorative styles, focusing on the core purpose of conveying information efficiently.
    -   **Consistent Line Height**: Apply a generous line-height of `1.5` for `Arial` body text to enhance readability over longer passages.

## 4. Component Stylings

### Buttons

**Primary Button**
A bold, pill-shaped button for the most important actions, using the brand's primary blue and white text. It provides clear visual feedback on hover, active, and disabled states.

```css
.button-primary {
  background-color: var(--color-primary, #0b57d0);
  color: var(--color-primary-text, #ffffff);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: 12px 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-lg, 50px);
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.button-primary:hover {
  background-color: #0d65e0; /* inferred from screenshot */
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15); /* inferred from screenshot */
}

.button-primary:active {
  background-color: #0a4fb8; /* inferred from screenshot */
  box-shadow: none;
}

.button-primary:disabled {
  background-color: var(--color-border, #dadce0);
  color: var(--color-text-subtle, #636363);
  cursor: default;
  opacity: 0.8; /* inferred from screenshot */
}
```

**Secondary Button**
A more subdued button for less critical actions, featuring a light gray background and dark text with subtly rounded corners.

```css
.button-secondary {
  background-color: var(--color-surface, #f8f9fa);
  color: var(--color-text-muted, #3c4043);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 16px;
  border: none;
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.button-secondary:hover {
  background-color: var(--color-hover-neutral, rgba(68, 71, 70, 0.08));
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-active-neutral, rgba(109, 118, 124, 0.12));
  box-shadow: none;
}

.button-secondary:disabled {
  background-color: var(--color-surface, #f8f9fa);
  color: var(--color-text-subtle, #636363);
  cursor: default;
  opacity: 0.4;
}
```

**Ghost Button**
A text-only button used for tertiary actions or navigation, with no background fill and a clear hover state.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-link, #1a0dab);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: 8px 12px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.button-ghost:hover {
  background-color: var(--color-hover-neutral, rgba(68, 71, 70, 0.08));
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  background-color: var(--color-active-neutral, rgba(109, 118, 124, 0.12));
  text-decoration: none;
}

.button-ghost:disabled {
  color: var(--color-text-subtle, #636363);
  cursor: default;
  opacity: 0.4;
}
```

### Cards & Containers

**Standard Card**
A versatile container for content, featuring a white background, rounded corners, and a subtle shadow for elevation, indicating a clickable or distinct content block.

```css
.card {
  background-color: var(--color-background, #ffffff);
  border-radius: var(--radius-md, 24px);
  box-shadow: var(--elevation-card, rgba(31, 31, 31, 0.08) 0px 3px 10px 0px);
  padding: var(--spacing-48, 48px); /* inferred from screenshot */
  transition: box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.card:hover {
  box-shadow: var(--elevation-modal, rgba(0, 0, 0, 0.2) 0px 2px 10px 0px); /* inferred from screenshot */
}
```

### Inputs & Forms

**Text Input**
A standard text input field with a light border, a clear focus ring, and a disabled state for non-editable content.

```css
.text-input {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #1f1f1f);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-border, #dadce0);
  border-radius: var(--radius-sm, 8px);
  transition: border-color 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.text-input:focus {
  border-color: var(--color-focus-ring, #0b57d0);
  outline: 1px solid var(--color-focus-ring, #0b57d0); /* outline-width: 1px, outline-offset: 0px from pseudoStates */
  outline-offset: 0px;
  box-shadow: 0 0 0 1px var(--color-focus-ring, #0b57d0); /* inferred from screenshot */
}

.text-input:disabled {
  background-color: var(--color-surface-alt, #f3f5f6);
  color: var(--color-text-subtle, #636363);
  border-color: var(--color-border-light, #d2d2d2);
  cursor: default;
  opacity: 0.7; /* inferred from screenshot */
}
```

**Form Label**
Standard text label for input fields, using the primary text color.

```css
.form-label {
  color: var(--color-text-primary, #1f1f1f);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-8, 8px); /* inferred from screenshot */
}
```

### Navigation

**Top Navigation Bar**
A minimal top bar with left-aligned brand elements and right-aligned utility links and actions, featuring a subtle hover effect on items.

```css
.nav-bar {
  background-color: var(--color-background, #ffffff);
  padding: var(--spacing-16, 16px) var(--spacing-24, 24px); /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border, #dadce0); /* inferred from screenshot */
}

.nav-bar-item {
  color: var(--color-text-primary, #1f1f1f);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  border-radius: var(--radius-sm, 8px); /* inferred from screenshot */
  text-decoration: none;
  transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-bar-item:hover {
  background-color: var(--color-hover-neutral, rgba(68, 71, 70, 0.08));
}
```

**Navigation Link**
Individual links within navigation contexts, typically text-based, with a distinct hover and active state.

```css
.nav-link {
  color: var(--color-text-primary, #1f1f1f);
  font-family: var(--typography-body-family, Arial, sans-serif);
  font-size: var(--typography-body-size, 14px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-8, 8px) var(--spacing-12, 12px); /* inferred from screenshot */
  border-radius: var(--radius-sm, 8px); /* inferred from screenshot */
  text-decoration: none;
  transition: background-color 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-link:hover {
  background-color: var(--color-hover-neutral, rgba(68, 71, 70, 0.08));
}

.nav-link[aria-current="page"],
.nav-link.active {
  color: var(--color-primary, #0b57d0); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 500); /* inferred from screenshot */
}
```

### Links

**Standard Link**
Inline text links, distinguished by the brand's link blue color and an underline on hover.

```css
.link {
  color: var(--color-link, #1a0dab);
  text-decoration: none;
  transition: text-decoration-color 0.2s ease-in-out;
}

.link:hover {
  text-decoration: underline;
  text-decoration-color: initial; /* from pseudoStates */
}

.link:visited {
  color: #681da8; /* inferred from typical browser visited link color */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: The system is built on a `4px` base unit, creating a consistent and harmonious rhythm across the interface.
    -   Base: `4px`
    -   Scale: `[4, 8, 12, 16, 20, 24, 32, 64, 96]`
    -   Usage Context:
        -   `4px`: Smallest element spacing, e.g., icon to text.
        -   `8px`: Default internal padding for small components, list item spacing.
        -   `12px`: Padding within buttons or input fields.
        -   `16px`: Standard padding for elements, vertical spacing between form fields.
        -   `20px`: Moderate spacing for distinct content blocks.
        -   `24px`: Section padding, spacing between major components.
        -   `32px`: Larger vertical separation between content areas.
        -   `64px`: Significant vertical spacing for page sections.
        -   `96px`: Hero section padding or large structural gaps.

-   **Grid & Container** *(Suggested — not measured)*: _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from common practice)
    -   Gutter: `24px` (inferred from common practice)
    -   Section Padding: `64px` vertical, `24px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**: Google's design embraces generous whitespace to reduce cognitive load and enhance content readability. Ample padding and margins create clear visual separation between elements, allowing content to breathe and guiding the user's focus. This intentional use of negative space contributes to the clean and uncluttered aesthetic, making complex information digestible.

-   **Border Radius Scale**:
    -   **Small** (`8px`): Applied to secondary buttons, input fields, and subtle container elements for a soft, friendly touch.
    -   **Medium** (`24px`): Used for cards, larger content blocks, and the modal dialog box, providing a distinct visual boundary.
    -   **Large** (`50px`): Reserved for primary call-to-action buttons, creating a prominent pill-shaped appearance.
    -   **Full** (`9999px`): For perfectly circular elements like avatars or small badges.

## 6. Depth & Elevation
Google's elevation system is subtle, using shadows to indicate interactivity and hierarchy without heavy visual distraction. Z-index values are used precisely to manage stacking context.

-   **Flat (z-0)**: `none` — Default state for most static content and background elements.
-   **Raised (z-1)**: `rgba(31, 31, 31, 0.08) 0px 3px 10px 0px` — Used for interactive cards, search bars, and elements that appear slightly above the surface, like the main search input.
-   **Interactive (z-10)**: `rgba(0, 0, 0, 0.2) 0px 2px 10px 0px` — Applied to elements like dropdowns or tooltips that overlay content and require a stronger visual separation.
-   **Modal Overlay (z-928)**: `rgba(0, 0, 0, 0.2) 0px 2px 10px 0px` — The highest z-index for full-screen modal dialogs, ensuring they appear above all other content.

**Shadow Philosophy**
Shadows are used sparingly and intentionally to provide a sense of depth and indicate interactive affordances. The system employs soft, diffused shadows to lift elements subtly from the background, enhancing clickability and drawing attention to key components like cards or modal dialogs. The use of a darker, more prominent shadow for modals helps to visually separate them from the underlying page content, guiding user focus to the active interaction.

## 7. Do's and Don'ts

### Do's
-   Use `Google Sans` `28px` `400` for primary page headings to establish clear hierarchy.
-   Maintain `16px` horizontal padding for interactive elements, such as secondary buttons.
-   Ensure body text uses `#1f1f1f` on `#ffffff` for an excellent contrast ratio of 16.48 (AAA).
-   Apply `8px` `border-radius` to secondary buttons and input fields for subtle rounding.
-   Use `#0b57d0` for primary button backgrounds to highlight key calls to action.
-   Keep at least `24px` of vertical space between distinct content cards.
-   Use `rgba(68, 71, 70, 0.08)` for hover states on neutral interactive elements.
-   Apply `50px` `border-radius` to primary buttons to achieve a distinct pill shape.
-   Utilize `Arial` `14px` `400` for all standard body text for consistent readability.

### Don'ts
-   Avoid using `#636363` text on `#ffffff` for critical information, as its 6.01 contrast ratio (AA) may be insufficient for small text.
-   Do not use arbitrary spacing values; adhere strictly to the `4px` base spacing scale.
-   Do not use `Arial` for display headings; reserve `Google Sans` for prominent text elements.
-   Avoid harsh, opaque shadows; prefer `rgba(31, 31, 31, 0.08) 0px 3px 10px 0px` for subtle elevation.
-   Do not use `#1a0dab` for general body text; reserve it exclusively for hyperlinks.
-   Do not introduce new border radius values outside of `8px`, `24px`, `50px`, or `9999px`.
-   Avoid using `rgba(0, 0, 0, 0.6)` for anything other than full-screen modal overlays.
-   Do not use `12px` font size for anything other than captions or legal disclosures.

## 8. Responsive Behavior
-   **Breakpoints**:
    -   **Mobile Small** (~320px): Adjust typography to `13px` body text, stack form elements.
    -   **Mobile Large** (~479px): Collapse top navigation into a hamburger menu.
    -   **Tablet** (~569px): Reorient cards into a single column layout.
    -   **Desktop** (~1024px): Display full navigation, enable multi-column layouts.
    -   **Desktop Large** (~1440px): Increase max content width, add more generous section padding.

-   **Touch Targets**:
    -   Minimum size for interactive elements should be `48px` by `48px` (inferred from screenshot).
    -   Maintain at least `8px` clear space between touch targets to prevent accidental taps (inferred from screenshot).

-   **Collapsing Strategy**:
    -   **Navigation**: Top navigation links should collapse into an off-canvas menu below `479px`.
    -   **Cards**: Cards transition from grid to single-column layouts on screens smaller than `569px`.
    -   **Typography**: `Display` text `28px` should scale down to `24px` on mobile devices.
    -   **Padding**: Horizontal section padding reduces from `24px` to `16px` on smaller viewports.
    -   **Forms**: Form inputs and labels stack vertically on mobile, ensuring full width.
    -   **Spacing**: Larger spacing values like `64px` and `96px` should be reduced to `32px` or `48px` on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#0b57d0`
    -   `primary-light`: `#e8f0fe`
    -   `primary-text`: `#ffffff`
    -   `background`: `#ffffff`
    -   `surface`: `#f8f9fa`
    -   `surface-alt`: `#f3f5f6`
    -   `text-primary`: `#1f1f1f`
    -   `text-secondary`: `#474747`
    -   `text-muted`: `#3c4043`
    -   `text-subtle`: `#636363`
    -   `link`: `#1a0dab`
    -   `border`: `#dadce0`
    -   `border-light`: `#d2d2d2`
    -   `hover-neutral`: `rgba(68, 71, 70, 0.08)`
    -   `active-neutral`: `rgba(109, 118, 124, 0.12)`
    -   `focus-ring`: `#0b57d0`
    -   `overlay`: `rgba(0, 0, 0, 0.6)`

-   **Iteration Guide**
    1.  Always use `#0b57d0` for primary CTAs, with `#ffffff` text.
    2.  Ensure all body text is `Arial` `14px` `400` with `line-height: 1.5`.
    3.  Apply `8px` border-radius for secondary buttons and input fields.
    4.  Utilize the `4px` spacing scale for all layout and component spacing.
    5.  Cards should have a `24px` border-radius and `rgba(31, 31, 31, 0.08) 0px 3px 10px 0px` shadow.
    6.  Primary buttons must have `12px 24px` padding and `50px` border-radius.
    7.  Input fields require a `1px solid #dadce0` border and a `#0b57d0` focus ring.
    8.  Navigation links should use `rgba(68, 71, 70, 0.08)` for hover states.
    9.  Elevated elements like modals use `rgba(0, 0, 0, 0.2) 0px 2px 10px 0px` shadow.
    10. Ensure `#1f1f1f` text on `#ffffff` backgrounds for AAA contrast (16.48 ratio).
    11. Implement `g-snackbar-hide 0.4s` and `g-snackbar-show 0.5s` for snackbar animations.
    12. Collapse navigation and stack cards for viewports below `479px` width.

<!-- DESIGNMD_VALIDATOR_WARNINGS
{
  "version": 1,
  "generatedAt": "2026-08-21T04:44:46.665Z",
  "summary": {
    "unpairedBanned": 1,
    "bannedPhrase": 0,
    "total": 1
  },
  "warnings": [
    {
      "kind": "unpaired-banned-word",
      "term": "clean",
      "sentence": "The Google design system emphasizes a clean, highly functional aesthetic, prioritizing content clarity and user interaction."
    }
  ]
}
-->
