---
name: Arcads
url: https://www.arcads.ai
colors:
  primary: '#00da7f'
  primary-hover: '#00b86a' # inferred from opacity 0.85
  accent-blue: '#2d62ff'
  background: '#ffffff'
  background-dark: '#121212'
  background-neutral: '#ededed'
  text-primary: '#121212'
  text-inverse: '#ffffff'
  text-muted: '#545454'
  border-light: '#e2e2e2'
  border-dark: '#464646'
typography:
  display:
    family: 'Sohne Kraftig'
    size: 56px
    weight: 400
    line-height: 1.2
  h1:
    family: 'Sohne Kraftig'
    size: 44px
    weight: 400
    line-height: 1.2
  h2:
    family: 'Sohne Kraftig'
    size: 36px
    weight: 400
    line-height: 1.2
  h3:
    family: 'Sohne Kraftig'
    size: 32px
    weight: 400
    line-height: 1.2
  body:
    family: 'Sohne'
    size: 18px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Sohne'
    size: 14px
    weight: 400
    line-height: 1.5
  small-caption:
    family: 'Sohne'
    size: 10px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]
radius:
  sm: 6px
  md: 8px
  lg: 16px
  full: 9999px
elevation:
  card: 'rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px'
  card-hover: 'rgba(0, 0, 0, 0.15) 0px 8px 16px -4px'
  modal: 'rgba(0, 0, 0, 0.2) 0px 66px 120.3px 0px'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-primary}'
    radius: '{radius.lg}'
    padding: '12px 24px'
  button-secondary:
    bg: 'transparent'
    text: '{colors.text-inverse}'
    border: '1px solid {colors.border-dark}'
    radius: '{radius.lg}'
    padding: '12px 24px'
  button-tertiary:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    radius: '{radius.full}'
    padding: '7px 16px'
  card:
    bg: '{colors.background-dark}'
    text: '{colors.text-inverse}'
    radius: '{radius.lg}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.background-dark}'
    text: '{colors.text-inverse}'
    border: '1px solid {colors.border-dark}'
    radius: '{radius.lg}'
motion:
  duration-fast: '0.2s' # inferred from navigation_list_item transition
  duration-base: '0.3s' # from navigation_link transition
  duration-slow: '0.8s' # from swiper-slide transition
  easing-standard: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)' # from navigation_link
---

# Design System Inspired by Arcads

## 1. Visual Theme & Atmosphere
Arcads employs a bold, high-contrast aesthetic, primarily using a dark background (`#121212`) contrasted with bright green (`#00da7f`) for primary calls to action and white (`#ffffff`) for prominent text and interactive elements. The design features a modern, sans-serif typography system with `Sohne` and `Sohne Kraftig` families, maintaining a clean and professional appearance. Generous whitespace, particularly in dark sections, creates a sense of sophistication and allows content, often AI-generated video and image previews, to stand out. The site incorporates autoplay videos, adding dynamic visual interest and demonstrating product capabilities.

The visual theme is characterized by a blend of dark mode elegance and vibrant, tech-forward accents. Components often feature subtle rounded corners (e.g., `16px` radius on cards and buttons) and soft, diffused shadows, contributing to a premium feel without being overly ornate. The overall impression is one of innovation and efficiency, aligning with its AI-driven marketing platform.

**Key Characteristics**
- High-contrast dark theme with `#121212` and `#ffffff`.
- Primary accent color `#00da7f` for key actions.
- Modern `Sohne` and `Sohne Kraftig` typography.
- Generous use of `48px` and `64px` vertical spacing.
- Soft, diffused shadows for depth on `#121212` surfaces.
- Autoplaying videos for dynamic content display.
- Subtle `16px` border radii on most interactive elements.

## 2. Color Palette & Roles
The Arcads color palette is built around a strong dark/light contrast, punctuated by a distinctive brand green and a supportive blue.

-   **Primary**:
    -   `#00da7f` (Arcads Green) — The core brand color, used for primary calls-to-action, active states, and key highlights.
    -   `#00b86a` (Arcads Green Hover) — A slightly darker shade of green, used for hover states on primary interactive elements (inferred from `opacity: 0.85` on `#00da7f`).
-   **Accent Colors**:
    -   `#2d62ff` (Arcads Blue) — Used for secondary links, specific text accents, and interactive elements that require a distinct highlight.
-   **Neutral Scale**:
    -   `#121212` (Background Dark) — The dominant background color for most sections, providing a sleek, modern aesthetic. Also used for primary text on light backgrounds.
    -   `#ffffff` (Background Light / Text Inverse) — Used for light sections, primary text on dark backgrounds, and some interactive elements.
    -   `#ededed` (Background Neutral) — A light grey used for subtle background variations, borders, and secondary text on dark backgrounds.
    -   `#e2e2e2` (Border Light) — A very light grey, used for subtle borders in light contexts.
    -   `#464646` (Border Dark / Neutral Dark) — A darker grey, used for borders on dark components and muted text.
    -   `#545454` (Text Muted) — A mid-grey, used for secondary, less prominent text.

## 3. Typography Rules
-   **Font Family**:
    -   Primary: `'Sohne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
    -   Display: `'Sohne Kraftig', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
    -   Special Use: `'Redaction', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'` (used for highly stylized elements like "NEXT 24HRS").
-   **Hierarchy**:
    -   **Display**: `Sohne Kraftig` `56px` `400` · line-height `1.2` · tracking `none` · Used for the main hero headline, capturing immediate attention.
    -   **H1**: `Sohne Kraftig` `44px` `400` · line-height `1.2` · tracking `none` · Employed for major section titles, providing strong visual hierarchy.
    -   **H2**: `Sohne Kraftig` `36px` `400` · line-height `1.2` · tracking `none` · Used for prominent sub-section titles, breaking up content.
    -   **H3**: `Sohne Kraftig` `32px` `400` · line-height `1.2` · tracking `none` · For smaller section headings or key feature titles.
    -   **Body**: `Sohne` `18px` `400` · line-height `1.5` · tracking `none` · The primary text for all content, ensuring readability.
    -   **Caption**: `Sohne` `14px` `400` · line-height `1.5` · tracking `none` · Used for secondary information, descriptions, and metadata.
    -   **Small Caption**: `Sohne` `10px` `400` · line-height `1.5` · tracking `none` · For fine print, timestamps, or very subtle annotations.
-   **Principles**:
    -   Headlines utilize the `Sohne Kraftig` family with `400` weight, prioritizing clarity and impact over heavy weights.
    -   Body and caption text consistently use the `Sohne` family at `400` weight for optimal readability across all content.
    -   A consistent line-height of `1.2` for display/heading text and `1.5` for body/caption text ensures comfortable reading.
    -   The `Redaction` typeface is reserved for highly stylized, large-format numbers or words to create distinct visual breaks.

## 4. Component Stylings

### Buttons
Arcads buttons are designed for clarity and impact, with distinct visual cues for different actions and states. All buttons feature a `16px` border-radius, except for the pill-shaped tertiary button with `9999px`. Interaction states are subtle, primarily using opacity changes or background shifts.

#### Primary Button
A prominent call-to-action button with a vibrant green background and dark text.
```css
.button-primary {
  background-color: var(--color-primary, #00da7f);
  color: var(--color-text-primary, #121212);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius-lg, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), opacity var(--motion-duration-fast, 0.2s) ease-out;
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #00b86a); /* inferred from opacity 0.85 on primary */
  opacity: 0.85; /* extracted from .acb-btn:hover */
}

.button-primary:active {
  transform: translateY(1px); /* inferred from screenshot */
  opacity: 0.9; /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: var(--color-background-neutral, #ededed);
  color: var(--color-text-muted, #545454);
  cursor: not-allowed; /* extracted from button[disabled] */
  opacity: 0.6; /* inferred from screenshot */
}
```

#### Secondary Button
An outlined button for less critical actions, maintaining brand aesthetics with dark border and inverse text.
```css
.button-secondary {
  background-color: transparent;
  color: var(--color-text-inverse, #ffffff);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 24px;
  border: 1px solid var(--color-border-dark, #464646);
  border-radius: var(--radius-lg, 16px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), opacity var(--motion-duration-fast, 0.2s) ease-out;
}

.button-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1); /* inferred from screenshot */
  border-color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  opacity: 0.85; /* extracted from .acb-btn:hover */
}

.button-secondary:active {
  transform: translateY(1px); /* inferred from screenshot */
  opacity: 0.9; /* inferred from screenshot */
}

.button-secondary:disabled {
  border-color: var(--color-background-neutral, #ededed);
  color: var(--color-text-muted, #545454);
  cursor: not-allowed; /* extracted from button[disabled] */
  opacity: 0.6; /* inferred from screenshot */
}
```

#### Tertiary Button
A small, pill-shaped button often used for secondary actions or quick navigation, with a white background and dark text.
```css
.button-tertiary {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #121212);
  font-family: 'Sohne', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 7px 16px;
  border: none;
  border-radius: var(--radius-full, 9999px);
  cursor: pointer;
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), opacity var(--motion-duration-fast, 0.2s) ease-out;
}

.button-tertiary:hover {
  background-color: var(--color-background-neutral, #ededed); /* inferred from screenshot */
  opacity: 0.85; /* extracted from .acb-btn:hover */
}

.button-tertiary:active {
  transform: translateY(1px); /* inferred from screenshot */
  opacity: 0.9; /* inferred from screenshot */
}

.button-tertiary:disabled {
  background-color: var(--color-background-neutral, #ededed);
  color: var(--color-text-muted, #545454);
  cursor: not-allowed; /* extracted from button[disabled] */
  opacity: 0.6; /* inferred from screenshot */
}
```

### Cards & Containers
Cards are used to group content, often featuring video or image previews. They typically have a dark background and subtle shadows, lifting them from the main background.

#### Standard Card
A dark-themed card with rounded corners and a subtle shadow, used for displaying content blocks like video previews or testimonials.
```css
.card-standard {
  background-color: var(--color-background-dark, #121212);
  color: var(--color-text-inverse, #ffffff);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 24px; /* inferred from screenshot */
  border: 1px solid var(--color-border-dark, #464646); /* inferred from screenshot */
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-card, rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px);
  transition: box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), transform var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955));
}

.card-standard:hover {
  box-shadow: var(--elevation-card-hover, rgba(0, 0, 0, 0.15) 0px 8px 16px -4px);
  transform: translateY(-2px); /* inferred from screenshot */
}
```

#### Testimonial Card
A light-themed card used for displaying testimonials, contrasting with the dark background sections.
```css
.card-testimonial {
  background-color: var(--color-background, #ffffff);
  color: var(--color-text-primary, #121212);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 24px; /* inferred from screenshot */
  border: none;
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-card, rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px);
  transition: box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), transform var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955));
}

.card-testimonial:hover {
  box-shadow: var(--elevation-card-hover, rgba(0, 0, 0, 0.15) 0px 8px 16px -4px);
  transform: translateY(-2px); /* inferred from screenshot */
}
```

### Inputs & Forms
Form elements are styled to integrate seamlessly into the dark theme, with clear focus indicators.

#### Text Input
A dark input field with a subtle border, designed for text entry.
```css
.input-text {
  background-color: var(--color-background-dark, #121212);
  color: var(--color-text-inverse, #ffffff);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 12px 16px; /* inferred from screenshot */
  border: 1px solid var(--color-border-dark, #464646);
  border-radius: var(--radius-lg, 16px);
  transition: border-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)), box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955));
}

.input-text::placeholder {
  color: var(--color-text-muted, #545454);
}

.input-text:focus {
  border-color: var(--color-primary, #00da7f);
  outline: 2px solid var(--color-primary, #00da7f); /* inferred from screenshot, common focus style */
  outline-offset: 1px; /* inferred from screenshot */
  box-shadow: 0 0 0 4px rgba(0, 218, 127, 0.2); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: rgb(238, 238, 238); /* extracted from .w-input[disabled] */
  color: var(--color-text-muted, #545454);
  cursor: not-allowed; /* extracted from .w-input[disabled] */
  border-color: var(--color-border-light, #e2e2e2); /* inferred from screenshot */
}
```

#### Form Label
Labels for form inputs, typically in white text on dark backgrounds.
```css
.form-label {
  color: var(--color-text-inverse, #ffffff);
  font-family: 'Sohne', sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px; /* inferred from screenshot */
  display: block;
}
```

### Navigation

#### Top Navigation Bar
The main navigation bar, featuring a dark background and inverse text, with a subtle transition for height changes.
```css
.nav-bar {
  background-color: var(--color-background-dark, #121212);
  color: var(--color-text-inverse, #ffffff);
  padding: 16px 48px; /* inferred from screenshot */
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding var(--motion-duration-base, 0.3s) ease-out; /* extracted from .nav_component */
}
```

#### Navigation Link
Individual links within the navigation bar, with a subtle color transition on hover.
```css
.nav-link {
  color: var(--color-text-inverse, #ffffff);
  font-family: 'Sohne', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px; /* inferred from screenshot */
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955)); /* extracted from .navigation_link */
}

.nav-link:hover {
  color: var(--color-primary, #00da7f); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #00da7f); /* inferred from screenshot */
  border-bottom: 2px solid var(--color-primary, #00da7f); /* inferred from screenshot */
  padding-bottom: 6px; /* inferred from screenshot */
}
```

### Links

#### Standard Link
Inline text links, typically in accent blue, with a subtle hover effect.
```css
.link-standard {
  color: var(--color-accent-blue, #2d62ff);
  text-decoration: none;
  transition: color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, cubic-bezier(0.455, 0.03, 0.515, 0.955));
}

.link-standard:hover {
  color: #1a4cdb; /* inferred from screenshot, slightly darker blue */
  text-decoration: underline; /* inferred from screenshot */
  outline-color: initial; /* extracted from a:hover */
  outline-width: 0px; /* extracted from a:hover */
}

.link-standard:visited {
  color: var(--color-accent-blue, #2d62ff); /* inferred from screenshot */
}
```

### Badges
#### Status Badge
Small, informative badges used to indicate status (e.g., "New", "Active").
```css
.badge-status {
  background-color: var(--color-primary, #00da7f);
  color: var(--color-text-primary, #121212);
  font-family: 'Sohne', sans-serif;
  font-size: 10px;
  font-weight: 500;
  padding: 4px 8px; /* inferred from screenshot */
  border-radius: var(--radius-sm, 6px);
  text-transform: uppercase;
  letter-spacing: 0.5px; /* inferred from screenshot */
  display: inline-flex;
  align-items: center;
  gap: 4px; /* inferred from screenshot */
}

.badge-status.is-active {
  background-color: var(--color-primary, #00da7f); /* inferred from screenshot */
  color: var(--color-text-primary, #121212);
}

.badge-status.is-new {
  background-color: var(--color-accent-blue, #2d62ff); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff);
}
```

## 5. Layout Principles
-   **Spacing System**: Arcads uses a `4px` base unit for its spacing scale, providing granular control and consistent visual rhythm.
    -   Base `4px` → `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]`
    -   `4px`: Smallest gaps, icon-to-text spacing.
    -   `8px`: Inline element spacing, very small component margins.
    -   `12px`: Input field padding, small button padding.
    -   `16px`: Component internal padding, list item spacing.
    -   `20px`: Moderate spacing between elements.
    -   `24px`: Card padding, spacing between closely related sections.
    -   `32px`: Vertical spacing between form elements or card groups.
    -   `40px`: Larger component margins.
    -   `48px`: Horizontal padding for main content areas, section sub-headings.
    -   `64px`: Generous vertical padding between major sections.
-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*:
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from common practice)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `48px` horizontal (inferred from screenshot)
-   **Whitespace Philosophy**: Arcads leverages ample dark whitespace to create a premium, uncluttered, and focused user experience. Generous padding around content blocks and between sections allows elements to breathe, enhancing readability and drawing attention to key visual components like AI-generated media. The dark background further emphasizes content by reducing visual noise.
-   **Border Radius Scale**:
    -   `sm`: `6px` — Used for small elements like badges or subtle internal component rounding.
    -   `md`: `8px` — Standard for smaller interactive elements or internal card elements.
    -   `lg`: `16px` — Applied to most buttons, cards, and input fields for a soft, modern aesthetic.
    -   `full`: `9999px` — Used for pill-shaped buttons and other fully rounded elements.

## 6. Depth & Elevation
Arcads uses subtle shadows to create a sense of depth, primarily on dark surfaces, enhancing the modern aesthetic without being overly dramatic. Z-index values are explicitly managed for layering.

-   **Base Content (z-1)**: No shadow — Used for general content blocks and embedded elements.
    -   `box-shadow: none` — General content, code embeds.
-   **Interactive Elements (z-2)**: No shadow — Used for button text and other interactive labels.
    -   `box-shadow: none` — Button text.
-   **Component Layer (z-3)**: No shadow — For components that slightly overlay base content, like reel components.
    -   `box-shadow: none` — Layout integration reel components.
-   **Card (z-4)**: `rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px` — Applied to standard cards and containers, providing a subtle lift from the background.
    -   `box-shadow: var(--elevation-card, rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px)` — Hero animation components.
-   **Card Hover (z-5)**: `rgba(0, 0, 0, 0.15) 0px 8px 16px -4px` — A more pronounced shadow for hover states on cards, indicating interactivity.
    -   `box-shadow: var(--elevation-card-hover, rgba(0, 0, 0, 0.15) 0px 8px 16px -4px)` — Hero components.
-   **Hero Foreground (z-6)**: No shadow — The most prominent visual elements within the hero section, such as video wrappers.
    -   `box-shadow: none` — Hero video item wrappers.
-   **Modal (z-10)**: `rgba(0, 0, 0, 0.2) 0px 66px 120.3px 0px` (inferred from largest shadow value) — Reserved for modals or elements that require significant visual separation.
-   **Background Video (z-100)**: No shadow — Used for background video elements.
    -   `box-shadow: none` — Background videos.
-   **Hidden/Off-screen (z-1000)**: No shadow — For elements that are intentionally off-screen or hidden.
    -   `box-shadow: none` — Swiper notifications.

**Shadow Philosophy**: Arcads uses shadows sparingly and subtly, primarily to give interactive components like cards a slight lift against the dark backgrounds. The shadows are diffused and dark, enhancing the sense of depth without introducing harsh lines. Hover states introduce a slightly larger, more prominent shadow to provide clear visual feedback.

## 7. Do's and Don'ts

### Do's
-   **Do** use `#00da7f` for all primary calls-to-action, such as the Primary Button, to ensure high visibility.
-   **Do** pair `Sohne Kraftig 56px 400` for display headlines with `Sohne 18px 400` for body text to maintain clear hierarchy.
-   **Do** use `#ffffff` text on `#121212` backgrounds; this combination achieves an AAA contrast ratio of 18.73.
-   **Do** apply `16px` border-radius to all Cards and Primary/Secondary Buttons for a consistent, modern feel.
-   **Do** use `64px` of vertical spacing between major content sections to provide ample breathing room.
-   **Do** ensure text inputs use `1px solid #464646` borders in their default state, and `outline: 2px solid #00da7f` on `:focus`.
-   **Do** use `rgba(0, 0, 0, 0.15) 0px 8px 16px -4px` for card hover states to provide clear interactive feedback.
-   **Do** use `#2d62ff` for secondary links to differentiate them from primary text and buttons.
-   **Do** use `Sohne 14px 400` for all caption text on both light and dark backgrounds.

### Don'ts
-   **Don't** use `#000000` text on `#121212` backgrounds; this combination has a failing contrast ratio of 1.12.
-   **Don't** introduce custom spacing values; strictly adhere to the `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px` scale.
-   **Don't** use `Sohne Kraftig` for body text; reserve it exclusively for display and heading roles to preserve typographic hierarchy.
-   **Don't** apply border-radius values other than `6px`, `8px`, `16px`, or `9999px` to interactive components.
-   **Don't** use `#545454` text on `#121212` backgrounds without careful consideration; it may fail AA contrast (inferred).
-   **Don't** use `opacity` changes on hover for elements other than buttons, as it might dilute their visual impact.
-   **Don't** use any shadow other than `rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px` for standard cards.
-   **Don't** use `Redaction` for any text other than highly stylized display elements, as it's a specific brand accent.

## 8. Responsive Behavior
Note: breakpoints below are measured from the source CSS.

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~479px): Typography scales down, navigation collapses into a hamburger menu.
    -   **Mobile Large** (~767px): Cards may stack vertically, main content areas adjust padding.
    -   **Tablet** (~991px): Layout shifts from multi-column to fewer columns, larger touch targets.
    -   **Desktop** (~1200px): Standard desktop layout, full navigation visible.
    -   **Desktop Large** (~1440px): Expanded content areas, optimized for large screens.
-   **Touch Targets**:
    -   Interactive elements like buttons and links should have a minimum tap area of `44px` by `44px` (inferred).
    -   Maintain a minimum of `8px` spacing between interactive elements to prevent accidental taps (inferred).
-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation bar collapses into a hamburger menu below `991px`, with primary CTAs remaining accessible.
    -   **Cards**: Multi-column card layouts transition to single-column stacking on screens smaller than `768px`.
    -   **Typography**: Display and heading font sizes scale down progressively on smaller viewports to maintain readability and hierarchy.
    -   **Padding**: Horizontal section padding reduces from `48px` to `24px` or `16px` on mobile for better content utilization.
    -   **Forms**: Input fields maintain their height but may expand to full width on mobile devices.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#00da7f`
    -   `primary-hover`: `#00b86a`
    -   `accent-blue`: `#2d62ff`
    -   `background`: `#ffffff`
    -   `background-dark`: `#121212`
    -   `background-neutral`: `#ededed`
    -   `text-primary`: `#121212`
    -   `text-inverse`: `#ffffff`
    -   `text-muted`: `#545454`
    -   `border-light`: `#e2e2e2`
    -   `border-dark`: `#464646`

-   **Iteration Guide**:
    1.  Always use `#00da7f` for primary calls-to-action, ensuring a hover effect to `#00b86a` or `opacity: 0.85`.
    2.  Prioritize `Sohne Kraftig` for all headlines (Display `56px`, H1 `44px`, H2 `36px`, H3 `32px`).
    3.  Set body text to `Sohne 18px 400` with `1.5` line-height for optimal readability.
    4.  Apply `16px` border-radius to all `Card` and `Button` components, and `9999px` for pill-shaped buttons.
    5.  Utilize the spacing scale `[4, 8, 12, 16, 20, 24, 32, 40, 48, 64]` for all layout and component spacing.
    6.  Ensure all `Input` fields have a `1px solid #464646` border and a `2px solid #00da7f` outline on `:focus`.
    7.  Implement `Card` components with `background-color: #121212` and `box-shadow: rgba(16, 24, 40, 0.1) 0px 3.667px 11px 0px, rgba(16, 24, 40, 0.06) 0px 3.667px 7.333px 0px`.
    8.  For `Card:hover` states, apply `box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px -4px` and a `translateY(-2px)` transform.
    9.  Ensure `Link` elements use `color: #2d62ff` and `text-decoration: none`, with a subtle `underline` on `:hover`.
    10. All interactive elements must include `transition: [property] 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955)`.
    11. Implement responsive breakpoints at `479px`, `767px`, and `991px` for layout adjustments.
    12. Verify all text on `#121212` backgrounds is `#ffffff` or `#00da7f` to pass AAA contrast ratios.