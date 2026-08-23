---
name: 'Datadog'
slug: datadog
url: https://www.datadoghq.com
category: 'Infrastructure'
mode: dual
fonts:
  - 'NationalWeb'
preview:
  bg: '#ffffff'
  fg: '#212529'
  accent: '#632ca6'
summary: >-
  Observability purple #632ca6 on white, NationalWeb throughout, with a paired dark surface set.
coverage: partial
colors:
  primary: '#632ca6'
  primary-hover: '#BEAAFF'
  primary-dark: '#110617'
  background: '#ffffff'
  background-light: '#f6f6f6'
  background-subtle: '#eeeeee'
  background-dark: '#000000'
  text-primary: '#212529'
  text-secondary: '#555555'
  text-inverse: '#ffffff'
  text-dark: '#000000'
  border: '#e6e6e6'
  focus-ring: 'rgba(13, 110, 253, 0.25)'
  dropdown-link: '#333333'
  dropdown-link-hover-bg: '#f5f5f5'
  dropdown-header: '#888888'
  dropdown-disabled: '#888888'
  disabled-text: '#C7C7C7'
  checked-bg: '#632ca6'
  gradient-start: '#8904FF'
  gradient-end: '#110617'
typography:
  display:
    family: 'NationalWeb'
    size: 68px
    weight: 700
    line-height: 1.2
  heading-xl:
    family: 'NationalWeb'
    size: 48px
    weight: 700
    line-height: 1.2
  heading-lg:
    family: 'NationalWeb'
    size: 36px
    weight: 700
    line-height: 1.2
  heading-md:
    family: 'NationalWeb'
    size: 32px
    weight: 700
    line-height: 1.2
  heading-sm:
    family: 'NationalWeb'
    size: 28px
    weight: 700
    line-height: 1.2
  heading-xs:
    family: 'NationalWeb'
    size: 22px
    weight: 300
    line-height: 1.5
  body:
    family: 'NationalWeb'
    size: 16px
    weight: 400
    line-height: 1.42857143
  caption:
    family: 'NationalWeb'
    size: 12px
    weight: 300
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
radius:
  none: 0px
  sm: 4px
  md: 6px
elevation:
  card: '0px 8px 10px 0px rgba(0, 0, 0, 0.07)'
  card-hover: '0px 0px 8px 8px rgba(0, 0, 0, 0.07)'
  dropdown: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.none}'
    padding: '10px 12px'
    font-weight: 700
    font-size: 22px
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-primary}'
    border: '1px solid {colors.text-primary}'
    radius: '{radius.none}'
    padding: '10px 12px'
    font-weight: 700
    font-size: 22px
  link:
    color: '{colors.primary}'
    text-decoration: 'none'
motion:
  duration-base: '0.2s'
  duration-fast: '0.15s'
  easing-standard: 'ease'
  easing-in-out: 'ease-in-out'
layout:
  max-width: 1400px
  columns: 12
  gutter: 24px
  breakpoints:
    sm: 576px
    md: 768px
    lg: 992px
    xl: 1200px
    xxl: 1400px
---

# Design System Inspired by Datadog

## 1. Visual Theme & Atmosphere
Datadog's design system conveys a sophisticated, high-tech aesthetic, primarily driven by a deep purple brand color (`#632ca6`) and a near-black (`#110617`) for backgrounds and accents. Typography consistently uses the `NationalWeb` font family, emphasizing bold `700` weights for headings like `Display` `68px` and `Heading XL` `48px` to establish clear hierarchy and impact. Interactive elements, such as buttons, frequently feature sharp `0px` border radii, contributing to a precise and modern feel.

The visual experience is further enhanced by subtle depth using `0px 8px 10px 0px rgba(0, 0, 0, 0.07)` shadows for cards and dynamic background gradients, such as `linear-gradient(360deg, #8904FF, #110617)`, which provide visual interest in hero sections. The presence of an autoplay video hero and CSS transitions for hover states suggests a focus on engaging, responsive user interactions. Ample whitespace, guided by a `4px` base spacing scale, ensures content clarity and a professional, uncluttered presentation across the platform.

Key Characteristics:
- Primary brand color: `#632ca6` (purple).
- Headings: `NationalWeb` `700` weight, sizes up to `68px`.
- Sharp corners: `0px` border-radius on primary buttons.
- Subtle shadows: `0px 8px 10px 0px rgba(0, 0, 0, 0.07)` for depth.
- Dynamic gradients: `linear-gradient(360deg, #8904FF, #110617)`.
- Generous whitespace: `4px` base spacing scale.
- Interactive elements: `0.2s ease` transitions on hover.

## 2. Color Palette & Roles
Datadog's color palette is built around a deep purple, complemented by a range of neutrals and a distinctive gradient.

-   **Primary**
    -   `primary`: `#632ca6` – The core brand purple, used for primary call-to-action buttons, interactive elements, and key brand accents.
    -   `primary-hover`: `#BEAAFF` – A lighter purple shade that indicates hover states for interactive elements like buttons and links.
    -   `primary-dark`: `#110617` – A very dark purple, almost black, used for deep background sections, especially in hero areas and footers, providing strong contrast for inverse text.

-   **Accent Colors**
    -   `gradient-start`: `#8904FF` – A vibrant purple, serving as the starting point for prominent background gradients.
    -   `gradient-end`: `#110617` – The ending color for background gradients, matching `primary-dark`, creating a seamless transition.

-   **Interactive**
    -   `focus-ring`: `rgba(13, 110, 253, 0.25)` – A light blue, semi-transparent ring used to clearly indicate focus states on interactive elements.
    -   `checked-bg`: `#632ca6` – The primary purple used as the background for checked checkboxes and radio buttons.

-   **Neutral Scale**
    -   `text-primary`: `#212529` – The main dark charcoal color for body text, ensuring high readability on light backgrounds.
    -   `text-secondary`: `#555555` – A medium gray used for secondary information, captions, and less prominent text.
    -   `text-inverse`: `#ffffff` – Pure white, used for text on dark backgrounds and primary buttons.
    -   `text-dark`: `#000000` – Pure black, used for specific high-contrast text elements on white backgrounds.
    -   `disabled-text`: `#C7C7C7` – A light gray for text on disabled interactive elements.
    -   `dropdown-link`: `#333333` – A dark gray specifically for standard text within dropdown menu items.
    -   `dropdown-header`: `#888888` – A medium gray for non-interactive header text within dropdowns.
    -   `dropdown-disabled`: `#888888` – A medium gray for disabled links within dropdown menus.

-   **Surface & Borders**
    -   `background`: `#ffffff` – The dominant white background color for most page content.
    -   `background-light`: `#f6f6f6` – A very light gray used for subtle section breaks or tinted content areas.
    -   `background-subtle`: `#eeeeee` – A slightly darker light gray for minor background distinctions.
    -   `background-dark`: `#000000` – Pure black, used as a very deep background in specific contexts.
    -   `border`: `#e6e6e6` – A light gray used for input borders, dividers, and subtle outlines.
    -   `dropdown-link-hover-bg`: `#f5f5f5` – A very light gray background for hovered dropdown menu items.

## 3. Typography Rules
Datadog's typography relies on a single, versatile typeface, `NationalWeb`, to establish a clear and consistent visual hierarchy.

-   **Font Family**: `NationalWeb`, `ui-sans-serif`, `sans-serif`. For code snippets, `monospace` should be used.

-   **Hierarchy**:
    -   **Display**: `NationalWeb` `68px` `700` · line-height `1.2` · tracking `none` · Reserved for primary hero headlines and high-impact statements.
    -   **Heading XL**: `NationalWeb` `48px` `700` · line-height `1.2` · tracking `none` · Used for major section titles and prominent content headings.
    -   **Heading LG**: `NationalWeb` `36px` `700` · line-height `1.2` · tracking `none` · Primary content headings, offering strong visual presence.
    -   **Heading MD**: `NationalWeb` `32px` `700` · line-height `1.2` · tracking `none` · Secondary content headings, maintaining strong hierarchy.
    -   **Heading SM**: `NationalWeb` `28px` `700` · line-height `1.2` · tracking `none` · Sub-section titles and emphasized content blocks.
    -   **Heading XS**: `NationalWeb` `22px` `300` · line-height `1.5` · tracking `none` · A distinct style for emphasized body text or lighter sub-headings, providing a visual break with its `300` weight.
    -   **Body**: `NationalWeb` `16px` `400` · line-height `1.42857143` · tracking `none` · Standard paragraph text for readability and information delivery.
    -   **Caption**: `NationalWeb` `12px` `300` · line-height `1.5` · tracking `none` · Used for legal text, metadata, or minor annotations.

-   **Principles**:
    -   **Strong Hierarchy**: Headings primarily leverage the `700` weight of `NationalWeb` to create a bold and impactful visual hierarchy from `Display` to `Heading SM`.
    -   **Purposeful Contrast**: The `Heading XS` style introduces a `300` weight at `22px`, providing a deliberate visual contrast and a lighter feel for specific content emphasis, distinct from the heavier headings.
    -   **Readability Focus**: Body text maintains excellent readability with a `16px` font size and a generous line height of `1.42857143`, ensuring comfortable consumption of information.
    -   **Minimalist Typeface Use**: The system relies on a single font family, `NationalWeb`, with variations in size and weight to achieve all typographic needs, promoting consistency and reducing cognitive load.
    -   **Ample Spacing**: Typography is consistently paired with ample vertical and horizontal whitespace, enhancing content legibility and contributing to a professional, uncluttered layout.

## 4. Component Stylings

### Buttons
Datadog buttons are characterized by their sharp, `0px` border-radius and clear visual hierarchy, with distinct hover, active, and disabled states.

#### Primary Button
A prominent call-to-action button with a solid brand purple background and inverse text. On hover, the background lightens to `{colors.primary-hover}` and a subtle shadow appears.
```css
.button-primary {
  background-color: var(--colors-primary, #632ca6);
  color: var(--colors-text-inverse, #ffffff);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: var(--components-button-primary-font-size, 22px);
  font-weight: var(--components-button-primary-font-weight, 700);
  padding: var(--components-button-primary-padding, 10px 12px);
  border: none;
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #BEAAFF); /* inferred from screenshot */
  box-shadow: 0px 0px 8px 4px rgba(99, 44, 166, 0.2); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  box-shadow: none;
}

.button-primary:disabled {
  background-color: var(--colors-background-subtle, #eeeeee); /* inferred from screenshot */
  color: var(--colors-disabled-text, #C7C7C7);
  cursor: default;
}
```

#### Secondary Button
A button with a transparent background and a border matching its text color, typically used for secondary actions or navigation.
```css
.button-secondary {
  background-color: var(--components-button-secondary-bg, transparent);
  color: var(--colors-text-primary, #212529);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: var(--components-button-secondary-font-size, 22px);
  font-weight: var(--components-button-secondary-font-weight, 700);
  padding: var(--components-button-secondary-padding, 10px 12px);
  border: var(--components-button-secondary-border, 1px solid #212529);
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease),
              color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.button-secondary:hover {
  background-color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  color: var(--colors-text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--colors-primary, #632ca6); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--colors-primary-dark, #110617); /* inferred from screenshot */
  color: var(--colors-text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--colors-primary-dark, #110617); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: transparent;
  color: var(--colors-disabled-text, #C7C7C7);
  border-color: var(--colors-disabled-text, #C7C7C7);
  cursor: default;
}
```

#### Ghost Button
A text-only button with no background or border, primarily used for subtle actions or navigation within content.
```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-primary, #212529);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: 18px; /* extracted from tokens */
  font-weight: 600; /* extracted from tokens */
  padding: 0px; /* extracted from tokens */
  border: none;
  border-radius: var(--radius-none, 0px);
  cursor: pointer;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.button-ghost:hover {
  color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--colors-primary-dark, #110617); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: var(--colors-disabled-text, #C7C7C7);
  cursor: default;
}
```

### Cards & Containers
Datadog cards are clean content containers, often with sharp corners and subtle shadows to provide depth.

#### Standard Card
A basic content container with a white background and a subtle shadow, lifting it slightly from the page. On hover, the shadow subtly expands.
```css
.card {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #212529);
  padding: var(--spacing-scale-24, 24px); /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e6e6e6); /* inferred from screenshot */
  border-radius: var(--radius-none, 0px); /* inferred from screenshot */
  box-shadow: var(--elevation-card, 0px 8px 10px 0px rgba(0, 0, 0, 0.07));
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.card:hover {
  box-shadow: var(--elevation-card-hover, 0px 0px 8px 8px rgba(0, 0, 0, 0.07));
}
```

### Inputs & Forms
Form elements are clean and functional, with clear focus indicators and disabled states.

#### Text Input
Standard text input field with a light border and a clear focus ring.
```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #212529);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-scale-8, 8px) var(--spacing-scale-12, 12px); /* inferred from screenshot */
  border: 1px solid var(--colors-border, #e6e6e6);
  border-radius: var(--radius-sm, 4px);
  transition: border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-in-out, ease-in-out),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-in-out, ease-in-out);
}

.input-text:focus {
  border-color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  outline: 0;
  box-shadow: 0px 0px 0px 0.25rem var(--colors-focus-ring, rgba(13, 110, 253, 0.25));
}

.input-text:disabled {
  background-color: var(--colors-background-subtle, #eeeeee); /* inferred from screenshot */
  color: var(--colors-disabled-text, #C7C7C7);
  opacity: 1;
  cursor: default;
}
```

#### Form Label
Standard label for form inputs.
```css
.form-label {
  color: var(--colors-text-primary, #212529);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  margin-bottom: var(--spacing-scale-8, 8px); /* inferred from screenshot */
}
```

#### Checkbox/Radio
Custom styled checkboxes and radio buttons with a distinct checked state.
```css
.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border, #e6e6e6);
  appearance: none;
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-in-out, ease-in-out),
              border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-in-out, ease-in-out);
}

.form-check-input[type="checkbox"] {
  border-radius: var(--radius-sm, 4px);
}

.form-check-input[type="radio"] {
  border-radius: var(--radius-full, 9999px); /* inferred from screenshot */
}

.form-check-input:checked {
  background-color: var(--colors-checked-bg, #632ca6);
  border-color: var(--colors-checked-bg, #632ca6);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); /* inferred from screenshot */
  background-size: 100% 100%; /* inferred from screenshot */
  background-position: center; /* inferred from screenshot */
  background-repeat: no-repeat; /* inferred from screenshot */
}

.form-check-input:focus {
  border-color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  outline: 0;
  box-shadow: 0px 0px 0px 0.25rem var(--colors-focus-ring, rgba(13, 110, 253, 0.25));
}

.form-check-input:disabled {
  background-color: var(--colors-background-subtle, #eeeeee); /* inferred from screenshot */
  border-color: var(--colors-border, #e6e6e6);
  cursor: default;
}
```

### Navigation
Navigation elements are clear and provide interactive feedback.

#### Top Navigation Bar
The main navigation bar at the top of the page, providing access to key sections.
```css
.main-nav-wrapper {
  background-color: var(--colors-background, #ffffff);
  height: 64px; /* inferred from screenshot */
  padding: 0 var(--spacing-scale-24, 24px); /* inferred from screenshot */
  border-bottom: 1px solid var(--colors-border, #e6e6e6); /* inferred from screenshot */
  box-shadow: var(--elevation-card, 0px 8px 10px 0px rgba(0, 0, 0, 0.07)); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}
```

#### Navigation Link
Individual links within the navigation, offering a subtle hover effect.
```css
.nav-link {
  color: var(--colors-text-primary, #212529);
  font-family: 'NationalWeb', ui-sans-serif, sans-serif;
  font-size: var(--typography-body-size, 16px);
  font-weight: var(--typography-body-weight, 400);
  padding: var(--spacing-scale-20, 20px) var(--spacing-scale-16, 16px); /* inferred from screenshot */
  text-decoration: none;
  transition: all var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.nav-link:hover {
  color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  text-decoration: none;
}

.nav-link[aria-current="page"],
.nav-link.active {
  color: var(--colors-primary, #632ca6);
  font-weight: var(--typography-body-weight, 400); /* inferred from screenshot */
  border-bottom: 2px solid var(--colors-primary, #632ca6); /* inferred from screenshot */
}
```

#### Dropdown Menu
A contextual menu that appears on interaction, featuring distinct link styles and hover states.
```css
.dropdown-menu {
  background-color: var(--colors-background, #ffffff);
  border: 1px solid var(--colors-border, #e6e6e6);
  border-radius: var(--radius-sm, 4px);
  box-shadow: var(--elevation-dropdown, 0 0.5rem 1rem rgba(0, 0, 0, 0.15));
  color: var(--colors-dropdown-link, #333333);
  font-size: var(--typography-body-size, 16px);
  padding: var(--spacing-scale-8, 8px) var(--spacing-scale-0, 0px); /* inferred from screenshot */
  z-index: 2; /* extracted from tokens */
}

.dropdown-menu .dropdown-item {
  color: var(--colors-dropdown-link, #333333);
  padding: 0.25rem 1rem; /* extracted from cssVariables */
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.dropdown-menu .dropdown-item:hover {
  background-color: var(--colors-dropdown-link-hover-bg, #f5f5f5);
  color: var(--colors-dropdown-link, #333333);
}

.dropdown-menu .dropdown-item.active,
.dropdown-menu .dropdown-item:active {
  background-color: var(--colors-primary, #632ca6); /* extracted from cssVariables */
  color: var(--colors-text-inverse, #ffffff); /* extracted from cssVariables */
}

.dropdown-menu .dropdown-header {
  color: var(--colors-dropdown-header, #888888);
  padding: 0.5rem 1rem; /* extracted from cssVariables */
  font-weight: 400; /* inferred from screenshot */
}

.dropdown-menu .dropdown-item:disabled {
  color: var(--colors-dropdown-disabled, #888888);
  cursor: default;
}
```

### Links
Links are styled to be clear and interactive, indicating their clickable nature.

#### Standard Link
Default text link, typically appearing in the body content.
```css
.link-standard {
  color: var(--components-link-color, #632ca6);
  text-decoration: var(--components-link-text-decoration, none);
  transition: text-decoration-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.link-standard:hover {
  text-decoration: underline; /* inferred from screenshot */
  text-decoration-color: var(--colors-primary, #632ca6);
}

.link-standard:visited {
  color: var(--colors-primary, #632ca6); /* inferred from screenshot */
}
```

#### Secondary Link
A link style used for less prominent actions or informational purposes, often matching body text color.
```css
.link-secondary {
  color: var(--colors-text-primary, #212529);
  text-decoration: none;
  transition: text-decoration-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease),
              color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, ease);
}

.link-secondary:hover {
  color: var(--colors-primary, #632ca6); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
  text-decoration-color: var(--colors-primary, #632ca6);
}

.link-secondary:visited {
  color: var(--colors-text-primary, #212529); /* inferred from screenshot */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Datadog employs a robust `4px` base unit for its spacing system, ensuring consistent and proportional layouts.
    -   Base: `4px`
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]`
    -   Usage Context:
        -   `0px`: For tight alignments or when no spacing is desired (e.g., between tightly grouped icons).
        -   `4px`: Smallest increment, often used for internal component spacing or icon-to-text separation.
        -   `8px`: Minor spacing, common between form fields or list items.
        -   `12px`: Standard padding for smaller interactive elements or internal component spacing.
        -   `16px`: Base vertical rhythm for paragraphs and small content blocks.
        -   `20px`: Medium padding, frequently seen in button heights or navigation links.
        -   `24px`: Standard section padding, spacing between major content blocks or cards.
        -   `32px`: Larger vertical separation between sections or groups of components.
        -   `40px`: Significant vertical spacing for emphasis or clear content division.
        -   `48px`: Ample padding for larger sections or hero content.
        -   `64px`: Maximum spacing for hero sections or significant content breaks.

-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._
    -   Max Width: `1400px`
    -   Columns: `12`
    -   Gutter: `24px` (between columns)
    -   Section Padding: `64px` (vertical, for large sections), `24px` (horizontal, for main content areas).

-   **Whitespace Philosophy**: Datadog utilizes whitespace generously to create a clean, organized, and breathable interface. Ample vertical spacing is particularly noticeable, separating distinct content blocks and improving readability. Horizontal whitespace provides clear boundaries for content, preventing visual clutter and guiding the user's eye through the layout. This deliberate use of space contributes to a professional and focused user experience.

-   **Border Radius Scale**: Datadog's design often favors sharp edges for a modern, precise look, but also incorporates subtle rounding where appropriate.
    -   `none`: `0px` – Predominantly used for primary buttons, some cards, and structural elements for a sharp aesthetic.
    -   `sm`: `4px` – Applied to input fields, dropdown menus, and smaller interactive elements.
    -   `md`: `6px` – Used for larger cards or containers where a slight softness is desired without losing the overall crispness.
    -   `full`: `9999px` – Reserved for circular elements like radio buttons.

## 6. Depth & Elevation
Datadog uses subtle shadows to create a clear sense of depth and hierarchy, distinguishing interactive elements and content blocks from the background.

-   **Flat (z-0)**: `none` — Default, for elements sitting directly on the page background.

> The source capture for this system was truncated at this point, part-way
> through the elevation scale.

## Known Gaps

This reference is **partial**. The token block in the frontmatter is complete —
colors, typography, spacing, radius, elevation, motion and components are all
present and usable. The prose stops after the first entry of the elevation scale.

Not captured:

- The remaining elevation levels and the shadow philosophy behind them. Use the
  `elevation` tokens in the frontmatter instead.
- Do's and don'ts.
- Responsive behavior and breakpoints.
- The agent prompt guide and quick colour reference other files carry.

The dark token set (`background-dark`, `primary-dark`, `text-dark`) is present
but undocumented in prose — treat it as the paired theme.
