---
name: Creatify
url: https://creatify.ai
colors:
  primary: '#573cff'
  accent-blue: '#0088ff'
  background: '#ffffff'
  surface: '#f0f0f0'
  dark-surface: '#000000'
  text-primary: '#000000'
  text-inverse: '#ffffff'
  text-muted: '#9ca3bd'
  text-accent: '#573cff'
  text-accent-blue: '#0088ff'
typography:
  display:
    family: 'General Sans'
    size: 80px
    weight: 400
    line-height: 1.2
  heading:
    family: 'General Sans'
    size: 32px
    weight: 500
    line-height: 1.2
  body:
    family: 'sans-serif'
    size: 16px
    weight: 400
    line-height: 1.5
  small:
    family: 'sans-serif'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'sans-serif'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'IBM Plex Mono'
    size: 12px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 12, 16, 20, 24, 32, 40]
radius:
  sm: 12px
  md: 20px
  lg: 24px
  xl: 40px
  full: 60px
elevation:
  card-sm: 'rgba(0, 0, 0, 0.15) 0px 1px 25px 0px'
  card-md: 'rgba(0, 0, 0, 0.09) 0px 42px 42px 0px, rgba(0, 0, 0, 0.1) 0px 11px 23px 0px'
  card-lg: 'rgba(0, 0, 0, 0.06) 0px 81px 48px 0px'
  card-xl: 'rgba(0, 0, 0, 0.02) 0px 114px 57px 0px, rgba(0, 0, 0, 0.06) 0px 81px 48px 0px, rgba(0, 0, 0, 0.09) 0px 36px 36px 0px, rgba(0, 0, 0, 0.11) 0px 9px 20px 0px'
components:
  button-primary:
    bg: '{colors.dark-surface}'
    text: '{colors.text-inverse}'
    radius: '{radius.xl}'
    padding: '16px 32px'
  card:
    bg: '{colors.background}'
    radius: '{radius.lg}'
    shadow: '{elevation.card-sm}'
  input:
    bg: '{colors.background}'
    text: '{colors.text-primary}'
    border: '1px solid {colors.surface}'
    radius: '{radius.sm}'
motion:
  duration-base: '0.3s'
  easing-standard: 'cubic-bezier(0.44, 0, 0.56, 1)'
---

# Design System Inspired by Creatify

## 1. Visual Theme & Atmosphere
Creatify's design system is characterized by a vibrant, energetic aesthetic, anchored by a striking gradient hero section. This hero features a `linear-gradient(135deg, {colors.primary}, #8a4bff (inferred from screenshot), #ff5e62 (inferred from screenshot), #ff9900 (inferred from screenshot))` that transitions from deep purple to warm orange tones, immediately conveying a sense of innovation and creativity. This gradient motif is echoed in subtle ways throughout the site, particularly in background elements and visual accents, creating a cohesive and dynamic visual flow. Typography leverages the modern `General Sans` for impactful headings and a clean `sans-serif` for body text, ensuring readability while maintaining a contemporary feel.

The platform employs a clean, spacious layout with ample whitespace, allowing content to breathe and key information to stand out. Interactive elements, such as buttons and cards, feature generous `border-radius: {radius.xl}` and `border-radius: {radius.lg}` respectively, softening the interface and contributing to an approachable user experience. The presence of numerous autoplay videos and dynamic imagery, as indicated by `motion.videoAutoplay > 0`, suggests a focus on engaging visual content and a lively, interactive user journey.

Key Characteristics:
-   Multi-stop gradient backgrounds for hero and footer.
-   Prominent use of `General Sans` for display typography.
-   Primary interactive color is `{colors.primary}` (`#573cff`).
-   Generous `border-radius: {radius.xl}` on primary buttons.
-   Ample whitespace with `spacing.scale` values up to `40px`.
-   Subtle shadows (`{elevation.card-sm}`) for depth on cards.
-   Extensive use of autoplay video content for engagement.

## 2. Color Palette & Roles
Creatify utilizes a focused color palette that balances vibrant accents with a clean, neutral foundation.

-   **Primary**: `{colors.primary}` (`#573cff`) — The core brand purple, used for key interactive elements, accent text, and as a starting point for gradients.
-   **Accent Blue**: `{colors.accent-blue}` (`#0088ff`) — A secondary bright blue accent, appearing in gradients and for specific highlights.
-   **Background**: `{colors.background}` (`#ffffff`) — The predominant clean white background for main content areas.
-   **Surface**: `{colors.surface}` (`#f0f0f0`) — A light grey used for subtle section backgrounds and card containers, providing visual separation.
-   **Dark Surface**: `{colors.dark-surface}` (`#000000`) — Pure black used for primary buttons, the footer background, and other high-contrast elements.
-   **Text Primary**: `{colors.text-primary}` (`#000000`) — The main color for body text, headings, and other informational content on light backgrounds.
-   **Text Inverse**: `{colors.text-inverse}` (`#ffffff`) — White text used against dark backgrounds, such as primary buttons and the footer.
-   **Text Muted**: `{colors.text-muted}` (`#9ca3bd`) — A soft grey for secondary information, captions, and less prominent text elements.
-   **Text Accent**: `{colors.text-accent}` (`#573cff`) — Used for links and highlighted text, matching the primary brand color.
-   **Text Accent Blue**: `{colors.text-accent-blue}` (`#0088ff`) — Used for specific highlighted links or textual elements.

## 3. Typography Rules
-   **Font Family**: The primary display and heading font is `'General Sans'`, with a fallback to `sans-serif`. Body text defaults to `sans-serif`. Code snippets utilize `'IBM Plex Mono'`, falling back to `monospace`.
-   **Hierarchy**:
    -   **Display**: `'General Sans'` `80px` `400` · line-height `1.2` · tracking `none` · Used for the main hero headline.
    -   **H1**: `'General Sans'` `40px` `400` · line-height `1.2` · tracking `none` · For major section titles.
    -   **H2**: `'General Sans'` `32px` `500` · line-height `1.2` · tracking `-.01em` · For prominent sub-headings and feature titles.
    -   **H3**: `'General Sans'` `20px` `500` · line-height `1.2` · tracking `none` · For smaller section titles or component headings.
    -   **Body**: `sans-serif` `16px` `400` · line-height `1.5` · tracking `none` · Standard paragraph text for readability.
    -   **Small**: `sans-serif` `14px` `400` · line-height `1.5` · tracking `none` · For secondary body text or descriptions.
    -   **Caption**: `sans-serif` `12px` `400` · line-height `1.5` ·