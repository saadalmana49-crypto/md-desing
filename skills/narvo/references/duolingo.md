---
name: 'Duolingo'
slug: duolingo
url: https://www.duolingo.com
category: 'Consumer'
mode: dual
fonts:
  - 'duolingo-sans'
preview:
  bg: '#ffffff'
  fg: '#3c3c3c'
  accent: '#58ce00'
summary: >-
  Bright #58ce00 green, custom duolingo-sans at weight 700, and character illustration as a load-bearing element.
coverage: partial
colors:
  primary: '#58ce00' # Macaw - Main brand green for CTAs and key elements.
  primary-dark: '#48af00' # Whale, Kiwi-dark - Darker green for primary button borders and active states.
  background: '#ffffff' # Snow - Main page background.
  surface: '#f7f7f7' # Polar - Subtle background for hovered elements or secondary containers.
  text-primary: '#3c3c3c' # Dark grey for main body text and headings.
  text-secondary: '#afafaf' # Light grey for secondary text, disabled states, and subtle details.
  text-muted: '#777777' # Wolf - Muted grey for supporting text.
  text-disabled: '#52656d' # Hare - Text color for disabled elements.
  text-inverse: '#ffffff' # White text used on dark backgrounds.
  border-light: '#e3e3e3' # Swan - Light grey for borders and dividers.
  link-default: '#1453a3' # Narwhal - Standard blue for interactive links.
  link-footer: '#3c598d' # Ether - Darker blue for footer links.
  focus-outline: '#00639b' # Blue for focus rings.
  dark-surface: '#19234b' # Inferred dark blue for prominent sections.
  gradient-purple-start: '#c962ff' # NYP Gradient Purple - Start color for purple gradients.
  gradient-purple-end: '#5f3cac' # Super Gradient Neutral Purple - End color for purple gradients.
  gradient-milestone-start: '#ff933a' # Streak Panel Milestone Gradient Start - Orange for progress milestones.
  gradient-diamond-start: '#a1a1ee' # Diamond Tournament Purple - Start color for diamond league gradients.
  gradient-diamond-end: '#56dbe2' # Diamond Stat - End color for diamond league gradients.
  social-tiktok: '#000000' # Black for TikTok brand elements.
  social-twitter: '#1da1f2' # Blue for Twitter brand elements.
typography:
  display:
    family: 'duolingo-sans, sans-serif'
    size: 40px
    weight: 700
    line-height: 1.2
  heading-large:
    family: 'duolingo-sans, sans-serif'
    size: 32px
    weight: 700
    line-height: 1.25
  heading-medium:
    family: 'duolingo-sans, sans-serif'
    size: 24px
    weight: 700
    line-height: 1.3
  heading-small:
    family: 'duolingo-sans, sans-serif'
    size: 20px
    weight: 700
    line-height: 1.3
  body:
    family: 'duolingo-sans, sans-serif'
    size: 17px
    weight: 500
    line-height: 1.5
  caption:
    family: 'duolingo-sans, sans-serif'
    size: 16px
    weight: 500
    line-height: 1.5
  small:
    family: 'duolingo-sans, sans-serif'
    size: 15px
    weight: 700
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 16, 24, 32, 48, 64, 80]
radius:
  sm: 4px
  md: 12px
  lg: 24px
  full: 9999px
elevation:
  flat: 'none'
  card: '0 1px 3px rgba(0,0,0,0.1)'
  overlay: '0 4px 12px rgba(0,0,0,0.15)'
  modal: '0 8px 24px rgba(0,0,0,0.2)'
motion:
  duration-fast: '0.1s'
  duration-base: '0.2s'
  duration-medium: '0.218s'
  duration-slow: '0.3s'
  duration-modal: '400ms'
  duration-lip: '0.15s' # Inferred from button transitions
  easing-linear: 'linear'
  easing-ease-in: 'ease-in'
  easing-standard: 'cubic-bezier(0.4, 0, 0.2, 1)' # Inferred
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    border: '{colors.primary-dark}'
    radius: '{radius.md}'
    padding: '0 16px'
    height: '50px'
  button-secondary:
    bg: '{colors.background}'
    text: '{colors.text-disabled}'
    border: '{colors.border-light}'
    radius: '{radius.md}'
    padding: '0 16px'
    height: '50px'
  button-ghost:
    bg: 'transparent'
    text: '{colors.primary}'
    radius: '{radius.md}'
    padding: '0 11px'
    height: '48px'
  card:
    bg: '{colors.background}'
    radius: '{radius.lg}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.background}'
    border: '{colors.border-light}'
    radius: '{radius.sm}'
    padding: '12px 16px'
    text: '{colors.text-primary}'
---

# Design System Inspired by Duolingo

## 1. Visual Theme & Atmosphere
Duolingo's design system is characterized by a playful and vibrant aesthetic, centered around the brand's iconic green, `{colors.primary}` (`#58ce00`). The visual theme is heavily driven by custom, friendly character illustrations and isometric elements that guide users through the learning experience. Large, clear typography in `duolingo-sans` with a strong `700` weight for headings like "The free, fun, and effective way to learn a language!" at `40px` ensures immediate comprehension, while body text at `17px` with `500` weight maintains readability. Ample whitespace, such as `64px` vertical padding between sections, contributes to a clean and inviting layout.

The atmosphere is one of approachable learning and gamification, reinforced by bright, contrasting accent colors like the purple-to-blue gradient (`#c962ff` to `#5f3cac`) used in the "Super Duolingo" section on a dark `{colors.dark-surface}` (`#19234b`) background. Interactive elements, such as primary buttons, feature a distinct `2px` border in `{colors.primary-dark}` (`#48af00`) and subtle `filter` transitions on hover, adding a tactile feel. The overall impression is engaging and encouraging, designed to make language learning fun and accessible.

**Key Characteristics**
-   **Primary Green**: `{colors.primary}` (`#58ce00`) for CTAs and branding.
-   **Custom Typography**: `duolingo-sans` font for all text, `700` weight for headings.
-   **Playful Illustrations**: Custom character and isometric graphics throughout.
-   **Generous Whitespace**: `64px` to `80px` vertical section padding.
-   **Subtle Interactions**: `filter` changes on button hovers, `0.2s` transition duration.
-   **Rounded Corners**: `12px` radius for buttons, `24px` for cards.
-   **Dark Section**: `{colors.dark-surface}` (`#19234b`) with gradient text for premium features.

## 2. Color Palette & Roles

-   **Primary**:
    -   `primary` (`#58ce00`) — The signature Duolingo green, used for primary calls-to-action, active states, and brand recognition.
    -   `primary-dark` (`#48af00`) — A darker shade of green, used for primary button borders and active background states.
-   **Accent Colors**:
    -   `link-default` (`#1453a3`) — A vibrant blue for standard interactive links.
    -   `link-footer` (`#3c598d`) — A slightly muted blue for links within the footer.
    -   `focus-outline` (`#00639b`) — A distinct blue for accessibility focus rings.
    -   `gradient-purple-start` (`#c962ff`) — The bright purple starting point for the "Super Duolingo" gradient.
    -   `gradient-purple-end` (`#5f3cac`) — The deep purple ending point for the "Super Duolingo" gradient.
    -   `gradient-milestone-start` (`#ff933a`) — An orange hue for progress milestone indicators.
    -   `gradient-diamond-start` (`#a1a1ee`) — A light purple used in diamond league gradients.
    -   `gradient-diamond-end` (`#56dbe2`) — A teal blue used in diamond league gradients.
    -   `social-tiktok` (`#000000`) — Black, specifically for TikTok brand elements.
    -   `social-twitter` (`#1da1f2`) — Twitter blue, specifically for Twitter brand elements.
-   **Neutral Scale**:
    -   `background` (`#ffffff`) — Pure white, serving as the main canvas for page content.
    -   `surface` (`#f7f7f7`) — A very light grey, used for subtle background tints, such as hovered states for secondary buttons.
    -   `text-primary` (`#3c3c3c`) — A dark grey for primary headings and body text, ensuring high readability.
    -   `text-secondary` (`#afafaf`) — A lighter grey for secondary information, placeholders, and less emphasized text.
    -   `text-muted` (`#777777`) — A mid-grey for supporting text and less critical information.
    -   `text-disabled` (`#52656d`) — A desaturated grey for text on disabled interactive elements.
    -   `text-inverse` (`#ffffff`) — White, used for text on dark backgrounds like the `{colors.dark-surface}` section.
    -   `border-light` (`#e3e3e3`) — A light grey for subtle borders, dividers, and outlines of secondary elements.
-   **Dark Surface**:
    -   `dark-surface` (`#19234b`) — A deep, rich blue-purple used for prominent sections requiring a strong visual contrast, such as the "Super Duolingo" feature block (inferred from screenshot).

## 3. Typography Rules

-   **Font Family**: `duolingo-sans`, with `sans-serif` as a universal fallback.
-   **Hierarchy**:
    -   **Display**: `duolingo-sans` `40px` `700` · line-height `1.2` · tracking `none` · Used for the main hero headline.
    -   **Heading Large**: `duolingo-sans` `32px` `700` · line-height `1.25` · tracking `none` · Used for prominent section titles like "free. fun. effective.".
    -   **Heading Medium**: `duolingo-sans` `24px` `700` · line-height `1.3` · tracking `none` · Used for secondary section titles like "learn anytime, anywhere".
    -   **Heading Small**: `duolingo-sans` `20px` `700` · line-height `1.3` · tracking `none` · Used for subheadings and feature titles.
    -   **Body**: `duolingo-sans` `17px` `500` · line-height `1.5` · tracking `none` · The default text style for paragraphs and descriptive content.
    -   **Caption**: `duolingo-sans` `16px` `500` · line-height `1.5` · tracking `none` · Used for supplementary text, labels, and smaller details.
    -   **Small**: `duolingo-sans` `15px` `700` · line-height `1.5` · tracking `none` · Used for specific interactive elements like footer links or small buttons.
-   **Principles**:
    -   Prioritize `duolingo-sans` at `500` weight for body text and `700` weight for all headings to establish a clear visual hierarchy.
    -   Maintain a consistent `1.5` unitless line-height for body and caption text to ensure optimal readability.
    -   Utilize the `40px` `Display` style solely for the main page title to maximize impact and brand recognition.
    -   Ensure `Heading Large` (`32px`) and `Heading Medium` (`24px`) are used for distinct content blocks, never for inline text.
    -   Apply `15px` `700` `Small` text for compact interactive elements, such as the "Site language" button, where space is limited.

## 4. Component Stylings

### Buttons

#### Primary Button
A prominent, green button with a darker green border, designed for key calls-to-action. It has a `12px` border-radius and uses `{colors.text-inverse}` for text. On hover, it brightens slightly; when active, its background deepens.
```css
.button-primary {
  background-color: var(--color-primary, #58ce00);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: 17px; /* inferred from screenshot */
  font-weight: 700; /* inferred from screenshot */
  padding: 0 var(--spacing-md, 16px);
  height: 50px;
  border: 2px solid var(--color-primary-dark, #48af00);
  border-radius: var(--radius-md, 12px);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: filter var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-primary:hover {
  filter: brightness(1.1);
}

.button-primary:active {
  background-color: var(--color-primary-dark, #48af00);
  filter: brightness(1); /* Reset filter on active to prevent double brightening */
}

.button-primary:disabled {
  background-color: var(--color-border-light, #e3e3e3);
  border-color: var(--color-border-light, #e3e3e3);
  color: var(--color-text-disabled, #52656d);
  cursor: default;
  filter: none;
}
```

#### Secondary Button
A white button with a light grey border and dark grey text, used for secondary actions or alternative options. It has a `12px` border-radius. On hover, its background becomes a light grey; when active, it darkens slightly.
```css
.button-secondary {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-disabled, #52656d);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: 17px; /* inferred from screenshot */
  font-weight: 700; /* inferred from screenshot */
  padding: 0 var(--spacing-md, 16px);
  height: 50px;
  border: 2px solid var(--color-border-light, #e3e3e3);
  border-radius: var(--radius-md, 12px);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              filter var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-secondary:hover {
  background-color: var(--color-surface, #f7f7f7);
}

.button-secondary:active {
  filter: brightness(0.9);
}

.button-secondary:disabled {
  background-color: var(--color-border-light, #e3e3e3);
  border-color: var(--color-border-light, #e3e3e3);
  color: var(--color-text-disabled, #52656d);
  cursor: default;
  filter: none;
}
```

#### Ghost Button
A text-only button with no background or border, primarily used for less prominent actions or links within a section. It uses `{colors.primary}` for text and has a `12px` border-radius. On hover, it brightens; when active, it darkens.
```css
.button-ghost {
  background: transparent;
  color: var(--color-primary, #58ce00);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-caption-size, 16px);
  font-weight: 700; /* inferred from screenshot */
  padding: 0 var(--spacing-sm, 11px); /* Matches extracted _1GQxS padding */
  height: 48px; /* Matches extracted _1GQxS height */
  border: none;
  border-radius: var(--radius-md, 12px); /* inferred from other buttons */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  letter-spacing: 0.04em; /* extracted from _1GQxS */
  transition: filter var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.button-ghost:hover {
  filter: brightness(1.1);
}

.button-ghost:active {
  filter: brightness(0.8);
}

.button-ghost:disabled {
  color: var(--color-text-disabled, #52656d);
  cursor: default;
  filter: none;
}
```

### Cards & Containers

#### Standard Card
A simple white rectangular container with a subtle shadow and `24px` border-radius, used for grouping related content. On hover, its shadow subtly increases.
```css
.card {
  background-color: var(--color-background, #ffffff);
  border-radius: var(--radius-lg, 24px);
  box-shadow: var(--elevation-card, 0 1px 3px rgba(0,0,0,0.1));
  padding: var(--spacing-lg, 24px); /* inferred from screenshot */
  transition: box-shadow var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.card:hover {
  box-shadow: var(--elevation-overlay, 0 4px 12px rgba(0,0,0,0.15));
}
```

### Inputs & Forms

#### Text Input
A standard text input field with a light grey border and `4px` border-radius. Text is `{colors.text-primary}`. On focus, it gains a distinct blue outline.
```css
.text-input {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #3c3c3c);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 500);
  padding: 12px var(--spacing-md, 16px); /* inferred from screenshot */
  border: 1px solid var(--color-border-light, #e3e3e3);
  border-radius: var(--radius-sm, 4px);
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--motion-duration-medium, 0.218s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              outline-color var(--motion-duration-medium, 0.218s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.text-input:focus {
  outline: 2px solid var(--color-focus-outline, #00639b);
  outline-offset: 0px; /* inferred */
  border-color: transparent; /* Hide default border when outline is active */
}

.text-input:disabled {
  background-color: var(--color-surface, #f7f7f7);
  color: var(--color-text-disabled, #52656d);
  cursor: default;
  border-color: var(--color-border-light, #e3e3e3);
}
```

#### Form Label
Labels for form fields, using `{colors.text-primary}` for clear identification.
```css
.form-label {
  color: var(--color-text-primary, #3c3c3c);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 500);
  display: block;
  margin-bottom: var(--spacing-xs, 8px); /* inferred from screenshot */
}
```

#### Checkbox/Radio
Standard checkbox or radio input, with a custom checkmark animation.
```css
input[type="checkbox"] {
  /* Base styles for checkbox, visual appearance inferred */
  width: 20px; /* inferred */
  height: 20px; /* inferred */
  border: 1px solid var(--color-border-light, #e3e3e3); /* inferred */
  border-radius: var(--radius-sm, 4px); /* inferred */
  background-color: var(--color-background, #ffffff); /* inferred */
  cursor: pointer;
  appearance: none;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

input[type="checkbox"]:checked {
  background-color: var(--color-primary, #58ce00); /* inferred */
  border-color: var(--color-primary, #58ce00); /* inferred */
}

input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 6px; /* inferred */
  top: 2px; /* inferred */
  width: 6px; /* inferred */
  height: 12px; /* inferred */
  border: solid var(--color-text-inverse, #ffffff);
  border-width: 0 2px 2px 0;
  transform: rotate(-45deg); /* extracted from pseudoStates */
  transition: transform var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

input[type="radio"] {
  /* Base styles for radio, visual appearance inferred */
  width: 20px; /* inferred */
  height: 20px; /* inferred */
  border: 1px solid var(--color-border-light, #e3e3e3); /* inferred */
  border-radius: var(--radius-full, 9999px); /* inferred */
  background-color: var(--color-background, #ffffff); /* inferred */
  cursor: pointer;
  appearance: none;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              border-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

input[type="radio"]:checked {
  border: 6px solid var(--color-primary, #58ce00); /* inferred */
}
```

### Navigation

#### Top Navigation Bar
The main header bar, typically white with dark text, containing the Duolingo logo and main navigation links.
```css
.top-nav-bar {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #3c3c3c);
  padding: var(--spacing-md, 16px) var(--spacing-lg, 24px); /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px; /* inferred */
  box-shadow: var(--elevation-flat, none); /* No shadow on main nav by default */
}
```

#### Navigation Link
Individual links within the top navigation bar, using `{colors.text-primary}`. On hover, they change to `{colors.link-default}`. An active state is indicated by a bold weight and an underline.
```css
.nav-link {
  color: var(--color-text-primary, #3c3c3c);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 500);
  text-decoration: none;
  padding: var(--spacing-xs, 8px) var(--spacing-sm, 16px); /* inferred */
  display: inline-block;
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              font-weight var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1)),
              border-bottom-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.nav-link:hover {
  color: var(--color-link-default, #1453a3); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  font-weight: var(--typography-heading-small-weight, 700); /* inferred from screenshot */
  color: var(--color-link-default, #1453a3); /* inferred from screenshot */
  border-bottom: 2px solid var(--color-link-default, #1453a3); /* inferred from screenshot */
}
```

#### Dropdown Menu
A contextual menu that appears upon interaction, typically white with a subtle shadow and `4px` border-radius.
```css
.dropdown-menu {
  background-color: var(--color-background, #ffffff);
  border-radius: var(--radius-sm, 4px);
  box-shadow: var(--elevation-overlay, 0 4px 12px rgba(0,0,0,0.15));
  padding: var(--spacing-sm, 16px) 0; /* inferred from screenshot */
  position: absolute;
  z-index: 2; /* extracted from zIndexValues */
  min-width: 160px; /* inferred */
  transition: opacity var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item {
  color: var(--color-text-primary, #3c3c3c);
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 500);
  padding: var(--spacing-xs, 8px) var(--spacing-md, 16px); /* inferred */
  text-decoration: none;
  display: block;
  white-space: nowrap;
  transition: background-color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.dropdown-menu-item:hover {
  background-color: var(--color-surface, #f7f7f7);
}
```

### Links

#### Standard Link
A typical inline text link, using `{colors.link-default}` and underlined. On hover, the text color changes to `{colors.text-muted}`.
```css
.standard-link {
  color: var(--color-link-default, #1453a3);
  text-decoration: underline;
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-body-size, 17px);
  font-weight: var(--typography-body-weight, 500);
  transition: color var(--motion-duration-base, 0.2s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.standard-link:hover {
  color: var(--color-text-muted, #777777);
}

.standard-link:visited {
  color: var(--color-link-default, #1453a3); /* inferred */
}
```

#### Secondary Link
Used for less prominent links, such as those in the footer. It uses `{colors.link-footer}` and is not underlined by default. On hover, it gains an underline.
```css
.secondary-link {
  color: var(--color-link-footer, #3c598d);
  text-decoration: none;
  font-family: var(--typography-body-family, 'duolingo-sans', sans-serif);
  font-size: var(--typography-caption-size, 16px); /* inferred from screenshot */
  font-weight: var(--typography-body-weight, 500);
  transition: text-decoration var(--motion-duration-fast, 0.1s) var(--motion-easing-standard, cubic-bezier(0.4, 0, 0.2, 1));
}

.secondary-link:hover {
  text-decoration: underline;
}

.secondary-link:visited {
  color: var(--color-link-footer, #3c598d); /* inferred */
}
```

### Badges
(none observed in source)

## 5. Layout Principles

-   **Spacing System**:
    -   Base unit: `4px` (inferred)
    -   Scale: `[4, 8, 16, 24, 32, 48, 64, 80]`
    -   Usage Context:
        -   `4px`: Smallest gaps, icon-to-text spacing (inferred).
        -   `8px`: Inline element spacing, vertical rhythm for small components (e.g., form label margin-bottom).
        -   `16px`: Component internal padding (e.g., button padding, dropdown menu item padding).
        -   `24px`: Card padding, spacing between minor sections.
        -   `32px`: Spacing between major components or content blocks.
        -   `48px`: Section padding, spacing between distinct content areas (extracted from source).
        -   `64px`: Large section padding, significant vertical separation (extracted from source).
        -   `80px`: Extra-large section padding, hero section vertical spacing (extracted from source).
-   **Grid & Container** _Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density._:
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred, standard practice)
    -   Gutter: `24px` (inferred)
    -   Section Padding: `0 80px` on desktop (inferred), reducing to `0 24px` on smaller viewports.
-   **Whitespace Philosophy**: Duolingo employs a generous whitespace philosophy, particularly vertically, using large `48px` to `80px` gaps between major content blocks. This creates an open, uncluttered, and inviting layout that allows illustrations and key messages to breathe, enhancing focus and readability. Horizontal spacing is also ample, preventing content from feeling cramped.
-   **Border Radius Scale**:
    -   `sm` (`4px`): Used for subtle rounding on input fields and small interactive elements.
    -   `md` (`12px`): Applied to primary and secondary buttons, providing a friendly, approachable aesthetic.
    -   `lg` (`24px`): Used for larger containers and cards, contributing to the soft, playful brand identity.
    -   `full` (`9999px`): For perfectly rounded elements like radio buttons or circular avatars.

## 6. Depth & Elevation

-   **Flat (z-0)**: `none` — Used for background elements or components that lie flat on the page, such as the main navigation bar.
-   **Card (z-1)**: `0 1px 3px rgba(0,0,0,0.1)` — Applied to standard cards and containers, providing a subtle lift from the background.
-   **Overlay (z-2)**: `0 4px 12px rgba(0,0,0,0.15)` — Used for dropdown menus and other temporary overlays, providing a clear visual hierarchy above page content (extracted z-index value).
-   **Modal (z-3)**: `0 8px 24px rgba(0,0,0,0.2)` — Reserved for prominent modal dialogs or pop-ups, ensuring they stand out distinctly from all underlying content.

**Shadow Philosophy**: Duolingo uses subtle, soft shadows to create a gentle sense of depth and hierarchy, rather than strong, dramatic effects. Shadows are primarily used to distinguish interactive elements and temporary overlays, with a focus on light opacity and minimal blur to maintain a clean and airy aesthetic. The largest shadows are reserved for critical elements like modals, ensuring they command attention without feeling heavy.

## 7. Do's and Don'ts

### Do's
-   **Do** use `{colors.primary}` (`#58ce00`) for all primary calls-to-action, such as the `Primary Button`, to maintain brand consistency.
-   **Do** ensure all headings use `duolingo-sans` at `700` weight, with `Display` at `40px` for the main hero title.
-   **Do** maintain `1.5` unitless line-height for `Body` (`17px`) and `Caption` (`16px`) text for optimal readability.
-   **Do** apply `12px` border-radius to `Primary` and `Secondary Buttons` for a consistent, friendly appearance.
-   **Do** use `48px`, `64px`, or `80px` for vertical spacing between major content sections to ensure ample breathing room.
-   **Do** use `outline: 2px solid {colors.focus-outline}` (`#00639b`) for all interactive element focus states.
-   **Do** use `{colors.text-primary}` (`#3c3c3c`) on `{colors.background}` (`#ffffff`) for body text, which achieves a ratio of 11.03 (AAA).
-   **Do** use `{colors.text-inverse}` (`#ffffff`) on `{colors.dark-surface}` (`#19234b`) for text in dark sections (inferred ratio > 4.5:1).
-   **Do** use `filter: brightness(1.1)` for `Primary Button` hover states to provide a clear, subtle visual feedback.

### Don'ts
-   **Don't** use `{colors.text-muted}` (`#777777`) on `{colors.background}` (`#ffffff`) for critical body text; its contrast ratio of 4.48 falls just under the 4.5:1 AA threshold.

> The source capture for this system was truncated mid-sentence at this point.
> The don't above is completed from the contrast figure it had already stated.

## Known Gaps

This reference is **partial**. The token block in the frontmatter is complete,
and the prose covers theme, colour, typography, components, layout, elevation
and most of the do's and don'ts.

Not captured:

- The remaining don'ts after the contrast item above.
- Responsive behavior and breakpoints.
- The agent prompt guide and quick colour reference other files carry.
