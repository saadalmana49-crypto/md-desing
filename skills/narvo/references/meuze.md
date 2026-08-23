---
name: 'Meuze'
slug: meuze
url: https://www.meuze.ai
category: 'AI'
mode: dark
fonts:
  - 'Geist'
  - 'JetBrains Mono'
preview:
  bg: '#0b1014'
  fg: '#ffffff'
  accent: '#2c63ff'
summary: >-
  Data-dark #0b1014 with electric blue CTAs. Geist throughout, 23px card radius against 8px buttons.
colors:
  primary: '#2c63ff'
  primary-hover: '#2454e0'
  background: '#ffffff'
  background-dark: '#0b1014'
  text-primary: '#0b1014'
  text-inverse: '#ffffff'
  text-secondary: '#6e7180'
  text-muted: '#9da2b3'
  surface-light: '#f6f6f8'
  surface-dark: '#2a2e33'
  border: '#bcbfcc'
  border-light: '#e3e5ec'
  focus-ring: '#2c63ff'
  active-light: '#e5e5e5'
typography:
  display:
    family: 'Geist'
    size: 47px
    weight: 700
    line-height: 1.2
  heading-lg:
    family: 'Geist'
    size: 43px
    weight: 700
    line-height: 1.2
  heading-md:
    family: 'Geist'
    size: 36px
    weight: 700
    line-height: 1.2
  heading-sm:
    family: 'Geist'
    size: 24px
    weight: 700
    line-height: 1.2
  body:
    family: 'Geist'
    size: 16px
    weight: 400
    line-height: 1.5
  body-lg:
    family: 'Geist'
    size: 19px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Geist'
    size: 13px
    weight: 400
    line-height: 1.5
  code:
    family: 'JetBrains Mono'
    size: 16px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [0, 4, 8, 12, 16, 20, 24, 32]
radius:
  sm: 8px
  md: 23px
  full: 9999px
elevation:
  card: '0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)'
  modal-dark: 'rgba(11, 16, 20, 0.4) 0px 24px 48px -20px'
  hover: '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)' # (inferred from screenshot)
motion:
  duration-fast: '0.15s'
  duration-base: '0.3s'
  duration-slow: '0.4s'
  easing-standard: 'ease' # (inferred from screenshot)
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '{radius.sm}'
    padding: '12px 24px'
  card:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    radius: '{radius.md}'
    shadow: '{elevation.card}'
  input:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '{colors.border}'
    radius: '{radius.sm}'
---

# Design System Inspired by Meuze

## 1. Visual Theme & Atmosphere
Meuze employs a sophisticated, data-driven aesthetic, characterized by a dominant dark background (`#0b1014`) paired with crisp white text (`#ffffff`) and a vibrant primary blue accent (`#2c63ff`). The layout features generous section padding (e.g., 64px) and a clean, modern `Geist` typeface for all textual content, conveying a sense of precision and clarity. Visual elements include pixelated isometric illustrations and subtle animated dot patterns in the background, reinforcing the technical and analytical nature of the brand. The hero section incorporates a full-width video, adding dynamic visual interest, while other sections feature subtle CSS animations like `float` and `pulse-subtle` for interactive elements.

The overall atmosphere is one of high-tech reliability and efficiency, utilizing a strong contrast palette to highlight key information and interactive components. The design effectively balances complex data visualization with a user-friendly interface, ensuring that the advanced capabilities of the platform are communicated clearly. The consistent use of the primary blue for calls to action and interactive states guides the user's attention, while the dark theme provides a focused and immersive experience.

**Key Characteristics**
- Dark background (`#0b1014`) with high-contrast `#ffffff` text.
- Primary accent blue (`#2c63ff`) for CTAs and interactive states.
- Modern `Geist` typeface for all typographic elements.
- Pixelated isometric illustrations and subtle background patterns.
- Ample 24px and 32px spacing for content separation.
- Video hero and subtle CSS animations for dynamic engagement.
- Rounded corners (`23px` on cards, `8px` on buttons) soften the technical edge.

## 2. Color Palette & Roles
The Meuze color palette is built around a strong dark/light contrast, accented by a single, vibrant brand blue.

-   **Primary**
    -   **Primary (`#2c63ff`)**: The brand's signature blue, used for primary calls to action, interactive elements, and key highlights.
    -   **Primary Hover (`#2454e0`)**: A slightly darker shade of the primary blue, used for hover states on interactive elements.
-   **Neutral Scale**
    -   **Background Dark (`#0b1014`)**: The dominant dark background color for most sections, providing a deep, immersive canvas.
    -   **Background (`#ffffff`)**: Used for lighter sections, cards, and input fields, offering a clean contrast.
    -   **Text Primary (`#0b1014`)**: The main text color used on light backgrounds.
    -   **Text Inverse (`#ffffff`)**: The primary text color used on dark backgrounds and primary buttons.
    -   **Text Secondary (`#6e7180`)**: A muted gray for secondary information, subheadings, and less prominent text on light backgrounds.
    -   **Text Muted (`#9da2b3`)**: A lighter gray for tertiary text, captions, and subtle details on dark backgrounds.
    -   **Surface Light (`#f6f6f8`)**: A very light gray used for subtle background variations or secondary containers on light sections.
    -   **Surface Dark (`#2a2e33`)**: A dark gray used for subtle background variations or secondary containers on dark sections (inferred from screenshot).
-   **Surface & Borders**
    -   **Border (`#bcbfcc`)**: A medium gray used for input borders and subtle dividers on light backgrounds.
    -   **Border Light (`#e3e5ec`)**: A very light gray used for subtle borders on light backgrounds, such as button outlines.
-   **Interactive**
    -   **Focus Ring (`#2c63ff`)**: The primary blue used for outline focus rings on interactive elements.
    -   **Active Light (`#e5e5e5`)**: A light gray used for the active state background of primary buttons.

## 3. Typography Rules
Meuze utilizes a modern, technical typeface for clarity and impact, with a monospace font for code-related content.

-   **Font Family**:
    -   Primary: `'Geist', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
    -   Monospace: `'JetBrains Mono', monospace`
-   **Hierarchy**:
    -   **Display**: `Geist` `47px` `700` · line-height `1.2` · tracking `none` · Used for prominent hero headlines.
    -   **H1**: `Geist` `43px` `700` · line-height `1.2` · tracking `none` · Main section titles.
    -   **H1 (Alternative)**: `Geist` `36px` `700` · line-height `1.2` · tracking `none` · Secondary large headlines.
    -   **H2**: `Geist` `24px` `700` · line-height `1.2` · tracking `none` · Sub-section titles.
    -   **Body Large**: `Geist` `19px` `400` · line-height `1.5` · tracking `none` · Enhanced body text for emphasis.
    -   **Body**: `Geist` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text and most content.
    -   **Caption**: `Geist` `13px` `400` · line-height `1.5` · tracking `none` · Small descriptive text, button labels, and metadata.
    -   **Code/Mono**: `JetBrains Mono` `16px` `400` · line-height `1.5` · tracking `0.05em` · Used for code snippets and technical data.
-   **Principles**:
    -   **Clear Hierarchy**: Type sizes and weights are distinctly varied to establish a clear visual hierarchy, guiding the reader through content from display headlines to detailed captions.
    -   **Modern Readability**: The `Geist` typeface, with its clean lines and generous letter spacing, ensures high readability across all sizes, especially on dark backgrounds.
    -   **Technical Precision**: `JetBrains Mono` is reserved for code and technical data, providing a consistent and recognizable style for developers and technical users.
    -   **Ample Line Height**: A `line-height` of `1.5` (or `1.2` for headings) is consistently applied to improve text legibility and reduce visual density.
    -   **Consistent Weight Usage**: Bold weights (700) are reserved for headings to maintain impact, while body text uses a standard weight (400) for optimal reading flow.

## 4. Component Stylings

### Buttons
Meuze buttons are designed for clear interaction, featuring distinct states for hover, active, and disabled, with subtle transitions for a responsive feel.

#### Primary Button
A prominent call-to-action button, using the brand's primary blue.
```css
.button-primary {
  background-color: var(--colors-primary, #2c63ff);
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 13px; /* (inferred from screenshot) */
  font-weight: 400;
  padding: 12px 24px; /* (inferred from screenshot) */
  border: none;
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.button-primary:hover {
  background-color: var(--colors-primary-hover, #2454e0);
  box-shadow: 0 2px 8px rgba(44, 99, 255, 0.2), 0 4px 16px rgba(44, 99, 255, 0.1); /* (inferred from screenshot) */
}

.button-primary:active {
  background-color: var(--colors-active-light, #e5e5e5); /* Extracted from pseudoStates */
  color: var(--colors-text-primary, #0b1014); /* (inferred from screenshot) */
  box-shadow: none;
}

.button-primary:disabled {
  opacity: 0.6; /* (inferred from screenshot) */
  cursor: not-allowed;
}
```

#### Secondary Button
A less prominent button, typically with a light background and border, for secondary actions.
```css
.button-secondary {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #0b1014);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 13px; /* (inferred from screenshot) */
  font-weight: 400;
  padding: 12px 24px; /* (inferred from screenshot) */
  border: 1px solid var(--colors-border-light, #e3e5ec);
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.button-secondary:hover {
  background-color: var(--colors-surface-light, #f6f6f8); /* (inferred from screenshot) */
  border-color: var(--colors-border, #bcbfcc); /* (inferred from screenshot) */
  box-shadow: 0 1px 4px rgba(0,0,0,0.04); /* (inferred from screenshot) */
}

.button-secondary:active {
  background-color: var(--colors-active-light, #e5e5e5); /* (inferred from screenshot) */
  border-color: var(--colors-border-light, #e3e5ec);
  box-shadow: none;
}

.button-secondary:disabled {
  opacity: 0.6; /* (inferred from screenshot) */
  cursor: not-allowed;
}
```

#### Ghost Button
A text-only button for tertiary actions or navigation, often found in headers or footers.
```css
.button-ghost {
  background-color: transparent;
  color: var(--colors-text-inverse, #ffffff); /* Default on dark background */
  font-family: var(--typography-body-family, 'Geist');
  font-size: 13px;
  font-weight: 400;
  padding: 8px 16px; /* (inferred from screenshot) */
  border: none;
  border-radius: var(--radius-sm, 8px);
  cursor: pointer;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.button-ghost:hover {
  color: var(--colors-primary, #2c63ff); /* (inferred from screenshot) */
  background-color: rgba(255, 255, 255, 0.08); /* (inferred from screenshot) */
}

.button-ghost:active {
  color: var(--colors-primary-hover, #2454e0); /* (inferred from screenshot) */
  background-color: rgba(255, 255, 255, 0.12); /* (inferred from screenshot) */
}

.button-ghost:disabled {
  opacity: 0.4; /* (inferred from screenshot) */
  cursor: not-allowed;
}
```

### Cards & Containers
Cards are used to group related content, featuring a light background and subtle shadow for depth. Dark containers are used for sections on the dark background.

#### Standard Card
A white background card with rounded corners and a subtle shadow, used for content blocks on light backgrounds.
```css
.card {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #0b1014);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 16px;
  font-weight: 400;
  padding: 24px; /* (inferred from screenshot) */
  border: none;
  border-radius: var(--radius-md, 23px);
  box-shadow: var(--elevation-card, 0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04));
  transition: box-shadow var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}

.card:hover {
  box-shadow: var(--elevation-hover, 0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.08)); /* (inferred from screenshot) */
}
```

#### Dark Container
A dark background container without shadow, used for content blocks within the primary dark sections.
```css
.container-dark {
  background-color: var(--colors-surface-dark, #2a2e33);
  color: var(--colors-text-inverse, #ffffff);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 16px;
  font-weight: 400;
  padding: 24px; /* (inferred from screenshot) */
  border: none;
  border-radius: var(--radius-md, 23px);
  transition: background-color var(--motion-duration-base, 0.3s) var(--motion-easing-standard, ease);
}
```

### Inputs & Forms
Form elements are clean and functional, with clear focus states to indicate interaction.

#### Text Input
Standard text input field with a light background and subtle border.
```css
.input-text {
  background-color: var(--colors-background, #ffffff);
  color: var(--colors-text-primary, #0b1014);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 16px;
  font-weight: 400;
  padding: 12px 16px; /* (inferred from screenshot) */
  border: 1px solid var(--colors-border, #bcbfcc);
  border-radius: var(--radius-sm, 8px);
  transition: border-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              box-shadow var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.input-text::placeholder {
  color: var(--css-variables-root-text-placeholder, #bcbfcc);
}

.input-text:focus {
  outline: 2px solid var(--colors-focus-ring, #2c63ff);
  outline-offset: 2px; /* Extracted from pseudoStates */
  border-color: var(--colors-focus-ring, #2c63ff);
  box-shadow: 0 0 0 1px var(--colors-focus-ring, #2c63ff); /* (inferred from screenshot) */
}

.input-text:disabled {
  opacity: 0.6; /* (inferred from screenshot) */
  background-color: var(--colors-surface-light, #f6f6f8); /* (inferred from screenshot) */
  cursor: not-allowed;
}
```

#### Form Label
Text label associated with form input fields.
```css
.form-label {
  color: var(--colors-text-primary, #0b1014);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 15px; /* (inferred from screenshot) */
  font-weight: 500; /* (inferred from screenshot) */
  margin-bottom: 8px;
  display: block;
}
```

#### Checkbox/Radio
(None observed in source screenshots. These components would typically follow the brand's aesthetic with primary blue accents for checked states and clear focus rings.)

### Navigation
Navigation elements are clean and functional, designed for easy access to key sections.

#### Top Navigation Bar
The main header navigation, fixed at the top, providing brand logo and primary links.
```css
.nav-bar {
  background-color: var(--colors-background-dark, #0b1014);
  color: var(--colors-text-inverse, #ffffff);
  padding: 16px 32px; /* (inferred from screenshot) */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px; /* (inferred from screenshot) */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60; /* Extracted from elevation.zIndexValues */
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* (inferred from screenshot) */
}
```

#### Navigation Link
Individual links within the navigation bar or dropdown menus.
```css
.nav-link {
  color: var(--colors-text-inverse, #ffffff); /* Default on dark nav */
  font-family: var(--typography-body-family, 'Geist');
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 12px; /* (inferred from screenshot) */
  border-radius: var(--radius-sm, 8px); /* (inferred from screenshot) */
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              background-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.nav-link:hover {
  color: var(--colors-primary, #2c63ff); /* Extracted from pseudoStates (.mfl .mf-link-dim:hover) */
  background-color: rgba(255, 255, 255, 0.08); /* (inferred from screenshot) */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--colors-primary, #2c63ff);
  font-weight: 500; /* (inferred from screenshot) */
  background-color: rgba(44, 99, 255, 0.1); /* (inferred from screenshot) */
}

.nav-link:visited {
  color: var(--colors-text-inverse, #ffffff); /* (inferred from screenshot) */
}
```

#### Dropdown Menu
(None observed in source screenshots. A dropdown menu would typically feature a dark background, white text, and primary blue on hover for menu items, with subtle shadows.)

### Links
Meuze uses distinct styles for standard and secondary links, maintaining brand consistency.

#### Standard Link
A prominent link, typically using the brand's primary blue.
```css
.link-standard {
  color: var(--colors-primary, #2c63ff);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              text-decoration-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.link-standard:hover {
  color: var(--colors-primary-hover, #2454e0);
  text-decoration: underline;
  text-decoration-color: var(--colors-primary-hover, #2454e0);
}

.link-standard:visited {
  color: var(--colors-primary, #2c63ff); /* (inferred from screenshot) */
}
```

#### Secondary Link
A less prominent link, often used for supplementary information or within body text, using a neutral color.
```css
.link-secondary {
  color: var(--colors-text-secondary, #6e7180);
  font-family: var(--typography-body-family, 'Geist');
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease),
              text-decoration-color var(--motion-duration-fast, 0.15s) var(--motion-easing-standard, ease);
}

.link-secondary:hover {
  color: var(--colors-primary, #2c63ff); /* (inferred from screenshot) */
  text-decoration: underline;
  text-decoration-color: var(--colors-primary, #2c63ff);
}

.link-secondary:visited {
  color: var(--colors-text-secondary, #6e7180); /* (inferred from screenshot) */
}
```

### Badges
(None observed in source.)

## 5. Layout Principles

-   **Spacing System**: Meuze utilizes a consistent 4px base unit for its spacing scale, ensuring harmonious visual relationships between elements.
    -   Base: 4px
    -   Scale: `[0, 4, 8, 12, 16, 20, 24, 32]`
    -   Usage Context:
        -   `0px`: No spacing, for tightly coupled elements.
        -   `4px`: Smallest increment, for inline element separation or very tight padding.
        -   `8px`: Standard small spacing, for form element gaps or icon-text separation.
        -   `12px`: Moderate spacing, for button padding or list item separation.
        -   `16px`: Base vertical rhythm, for paragraph breaks or component internal padding.
        -   `20px`: Slightly larger spacing for visual breaks.
        -   `24px`: Sectional padding, card padding, or major vertical rhythm.
        -   `32px`: Larger sectional spacing, for significant content breaks.
-   **Grid & Container**:
    -   Max Width: `1280px` (inferred from screenshot)
    -   Columns: `12` (inferred from screenshot)
    -   Gutter: `24px` (inferred from screenshot)
    -   Section Padding: `64px` vertical, `128px` horizontal (inferred from screenshot, based on `--space-16` equivalent for padding)
-   **Whitespace Philosophy**: Meuze embraces generous whitespace, particularly in its dark-themed sections, to create a sense of spaciousness and focus. Ample padding around content blocks and between sections reduces visual clutter, allowing key information and data visualizations to stand out. This deliberate use of negative space enhances readability and contributes to the brand's modern, sophisticated aesthetic, preventing the dark background from feeling heavy or overwhelming.
-   **Border Radius Scale**: Meuze uses two primary border radius values to soften elements while maintaining a clean, modern look.
    -   **`sm` (8px)**: Applied to interactive elements like buttons and input fields for a subtle rounded edge.
    -   **`md` (23px)**: Used for larger containers such as cards and content blocks, providing a distinct, softer aesthetic.

## 6. Depth & Elevation
Meuze uses a subtle elevation system, primarily through shadows, to indicate hierarchy and interactivity, with specific z-index values for stacking contexts.

-   **Flat (z-0)**: No shadow, default state for most background elements.
-   **Base Interactive (z-1)**: `0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)` — Used for standard cards and interactive elements that require a slight lift.
-   **Active Interactive (z-2)**: No specific shadow, but used for active interactive elements like scale markers.
-   **Hero Content (z-10)**: No specific shadow, but used for content layers within the hero section.
-   **Loaders (z-30)**: No specific shadow, but used for loading indicators to ensure visibility above content.
-   **Fixed Header (z-60)**: No specific shadow, but used for the main navigation bar to keep it above all page content.
-   **Modal (z-500)**: `rgba(11, 16, 20, 0.4) 0px 24px 48px -20px` — Used for modals and overlays to create a strong sense of depth and focus.
-   **Fixed Bottom (z-10000)**: No specific shadow, but used for elements like chat widgets or sticky footers that need to be on top of everything.

**Shadow Philosophy**: Shadows are used sparingly and subtly, primarily to give a slight lift to cards and to create a distinct overlay effect for modals. The `elevation-card` shadow is soft and diffused, contributing to a clean aesthetic without heavy visual noise. The `modal-dark` shadow is more pronounced, designed to visually separate overlay content from the background.

## 7. Do's and Don'ts

### Do's
-   **Do** use `Geist` `47px` `700` for primary hero headlines on a `#0b1014` background.
-   **Do** ensure body text is `#ffffff` on `#0b1014` backgrounds, achieving an AAA contrast ratio of 19.12.
-   **Do** apply `8px` `border-radius` to all primary and secondary buttons for consistent softening.
-   **Do** use `12px` `padding` for buttons and `24px` for cards to maintain ample internal spacing.
-   **Do** use `#2c63ff` for all interactive links and primary buttons to clearly indicate interactivity.
-   **Do** ensure secondary text, like `#6e7180` on `#ffffff`, passes at least AA contrast ratio of 4.84.
-   **Do** use the `0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)` shadow for standard cards.
-   **Do** reserve `JetBrains Mono` for code snippets and technical data, maintaining a distinct visual cue.
-   **Do** maintain at least `24px` of vertical spacing between major content sections.

### Don'ts
-   **Don't** use `#000000` text on `#0b1014` backgrounds, as it fails AA contrast with a ratio of 1.1.
-   **Don't** introduce `border-radius` values other than `8px` or `23px` on components.
-   **Don't** use `Geist` `400` weight for any headline role (H1, H2, H3, H4).
-   **Don't** use `#9da2b3` for primary body text on a `#ffffff` background; it would fail AA contrast.
-   **Don't** use `15px` or `19px` font sizes for button text; use `13px` or `16px`.
-   **Don't** apply shadows to elements that are meant to be flat or within a dark container.
-   **Don't** use `#2c63ff` for body text on a white background; `#0b1014` is reserved for this.
-   **Don't** vary the `line-height` from `1.5` for body text or `1.2` for headings.

## 8. Responsive Behavior
Note: breakpoints below are measured from the source CSS.

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~639px): Navigation collapses to a hamburger menu; primary sections stack vertically.
    -   **Mobile Large** (~767px): Typography scales down; image-text layouts convert to single columns.
    -   **Tablet** (~899px): Cards may reflow into 2-column grids; form inputs expand to full width.
    -   **Desktop** (~1023px): Full desktop navigation becomes visible; complex data visualizations expand.
    -   **Desktop Large** (~1100px+): Content containers reach maximum width; additional whitespace is introduced.
-   **Touch Targets**:
    -   Minimum touch target size for interactive elements should be `44px` by `44px` (inferred from screenshot).
    -   Maintain a minimum `8px` spacing between touch targets to prevent accidental activation (inferred from screenshot).
-   **Collapsing Strategy**:
    -   **Navigation**: The main navigation bar transforms into a hamburger menu on screens up to `1023px`.
    -   **Cards**: Multi-column card layouts collapse to a single column on screens up to `899px`.
    -   **Typography**: Display and heading font sizes scale down responsively to maintain readability on smaller viewports.
    -   **Padding**: Horizontal section padding reduces from `128px` to `24px` or `16px` on mobile.
    -   **Forms**: Multi-column form layouts stack vertically on screens up to `767px`.
    -   **Spacing**: Larger spacing values like `32px` may be reduced to `24px` or `16px` on smaller screens.

## 9. Agent Prompt Guide

-   **Quick Color Reference**:
    -   Primary: `#2c63ff`
    -   Primary Hover: `#2454e0`
    -   Background: `#ffffff`
    -   Background Dark: `#0b1014`
    -   Text Primary: `#0b1014`
    -   Text Inverse: `#ffffff`
    -   Text Secondary: `#6e7180`
    -   Text Muted: `#9da2b3`
    -   Surface Light: `#f6f6f8`
    -   Surface Dark: `#2a2e33`
    -   Border: `#bcbfcc`
    -   Border Light: `#e3e5ec`
    -   Focus Ring: `#2c63ff`
    -   Active Light: `#e5e5e5`
-   **Iteration Guide**:
    1.  Always use `Geist` for all text unless explicitly for code.
    2.  Always use `#2c63ff` for primary CTAs and `#2454e0` for their hover state.
    3.  Always ensure text on `#0b1014` backgrounds is `#ffffff` for AAA contrast.
    4.  Always use `16px` for body text and `1.5` line-height.
    5.  Always apply `8px` `border-radius` to buttons and inputs, and `23px` to cards.
    6.  Always use `12px 24px` padding for primary and secondary buttons.
    7.  Always include a `2px solid #2c63ff` outline for input focus states.
    8.  Always use the `0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)` shadow for standard cards.
    9.  Always use `0.15s ease` for micro-interactions and `0.3s ease` for larger component transitions.
    10. Always collapse navigation to a hamburger menu below `1023px` viewport width.
    11. Always maintain at least `24px` of vertical spacing between major content blocks.
    12. Always use `#6e7180` for secondary text on light backgrounds.
