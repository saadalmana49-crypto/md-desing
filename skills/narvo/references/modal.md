---
name: 'Modal'
slug: modal
url: https://modal.com
category: 'Infrastructure'
mode: dark
fonts:
  - 'Goga'
preview:
  bg: '#000000'
  fg: '#e8e8e8'
  accent: '#7fee64'
summary: >-
  Terminal black with a phosphor-green accent, Goga with ss01, and a seven-stop dataviz ramp.
colors:
  brand-green: "#7fee64"
  brand-green-soft: "#6ac355"
  brand-green-muted: "#3e4a3c"
  brand-green-muted-hover: "#677d64"
  text-green-on-dark: "#859984"
  text-green-on-dark-dim: "#697368"
  ink-strong: "#ffffff"
  ink: "#e8e8e8"
  body-on-dark: "#d1d1d1"
  muted-on-dark: "#a3a3a3"
  faint-on-dark: "#747474"
  ink-on-light: "#222222"
  canvas-black: "#000000"
  canvas-near-black: "#181818"
  canvas-card: "#242424"
  canvas-off-white: "#fafafa"
  canvas-mint: "#def0dd"
  nav-pill: "#212525"
  hairline-on-dark: "#2f2f2f"
  dataviz-1: "#adeaab"
  dataviz-2: "#d9866b"
  dataviz-4: "#4aa19d"
  dataviz-7: "#648fe0"
  semantic-danger: "#f87171"
  semantic-warning: "#ffab5e"
  semantic-info: "#91c8ef"

typography:
  hero:
    fontFamily: Goga
    fontSize: "40px / 64px at ≥52.5rem"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: normal
    fontFeature: "ss01"
  display-h2:
    fontFamily: Goga
    fontSize: "36px / 40px / 54px, responsive"
    fontWeight: 400
    lineHeight: 1.1
    fontFeature: "ss01"
  display-h3:
    fontFamily: Goga
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.1
    fontFeature: "ss01"
  display-h4:
    fontFamily: Goga
    fontSize: "18px to 21px"
    fontWeight: 400
    lineHeight: 1.3
    fontFeature: "ss01"
  display-h5:
    fontFamily: Goga
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.3
    fontFeature: "ss01"
  body-xl:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
  body-base:
    fontFamily: Inter Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  caption:
    fontFamily: Inter Variable
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: Inter Variable
    fontSize: 14px
    fontWeight: "400 default, 500 on the primary button"
    lineHeight: 1.43
  mono:
    fontFamily: Fira Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.43

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  2xl: 16px
  3xl: 24px
  pill: 9999px

spacing:
  unit: 4px
  marketing-sm: 16px
  marketing-md: 32px
  marketing-lg: 48px

components:
  btn-primary:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.canvas-black}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 9px 21px
  btn-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink-strong}"
    border: "1px solid {colors.hairline-on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 20px
  nav-pill:
    backgroundColor: "{colors.nav-pill}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px
  demo-panel:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.body-on-dark}"
    typography: "{typography.mono}"
    rounded: "{rounded.2xl}"
    padding: 24px
  workload-tab-card:
    backgroundColor: "{colors.canvas-black} active / muted olive-gray inactive"
    rounded: "{rounded.xl}"
    padding: 0
  stat-card:
    backgroundColor: "diagonal gradient, {colors.brand-green-muted} to {colors.brand-green}"
    textColor: "{colors.canvas-black}"
    typography: "{typography.display-h2}"
    rounded: "{rounded.2xl}"
    padding: 24px
  story-card:
    backgroundColor: "{colors.canvas-card}"
    textColor: "{colors.ink-strong}"
    typography: "{typography.display-h2}"
    rounded: "{rounded.2xl}"
    padding: 24px
  example-card:
    backgroundColor: "bespoke abstract art fill"
    textColor: "{colors.ink-strong}"
    typography: "{typography.body-base}"
    rounded: "{rounded.xl}"
    padding: 20px
  accordion-row:
    backgroundColor: transparent
    textColor: "{colors.ink-strong}"
    typography: "{typography.display-h4}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline-on-dark}"
  announcement-bar:
    backgroundColor: "{colors.brand-green}"
    textColor: "{colors.canvas-black}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 10px 16px
---

# Design System Inspired by Modal

## Overview

Modal doesn't pick one canvas and hold it. The default page background is
almost white (`{colors.canvas-off-white}`, `#fafafa`), but the homepage
overrides that section by section: the hero, the four-panel product demo, the
infrastructure globe, and the security band all drop to true black, while the
workload breakdown a few scrolls down sits on a pale minty tint
(`{colors.canvas-mint}`, `#def0dd`) instead. The page reads like it's cutting
between a night scene and a day scene, and it does that four or five times
before the footer.

What survives the cut every time is one green. `{colors.brand-green}`
(`#7fee64`) is the only saturated color the system allows itself: it's the
primary button, the key phrase in the hero ("AI infrastructure" in green,
"that developers love" in off-white), the sparkline inside the observability
demo, the syntax highlighting inside the code demo, and the focus ring on
every interactive element. Everything else in the palette is either plain
gray or a desaturated step of that same green. Red, orange, and blue exist in
the system, but they're kept for actual form states, not spent on decoration.

The headline face is Goga, a variable sans from Narrow Type, a small Czech
foundry, self-hosted from Modal's own CDN rather than pulled from Google
Fonts or a shared Adobe subscription. It's a rounder, warmer shape than the
geometric grotesques most infrastructure companies default to, and Modal
leaves it at zero letter-spacing rather than chasing the tight, tracked-in
"editorial" look that's become its own kind of house style among developer
tools. Body copy runs in plain Inter, so the display face never has to
compete with itself for attention.

The feature panels near the top of the page aren't code blocks or static
screenshots. They're silent, looping video of the actual product: a real
`@app.function(image=inference_image, gpu="B200")` call with pinned package
versions, a real cold-start benchmark chart, a real GPU picker, a real
observability dashboard reading "GPU Utilization 87%." Further down, the
customer wall names sixteen real companies (Runway, Suno, Decagon, Physical
Intelligence, Quora, Substack, and more) and attaches a specific number to
each one: 65% latency reduction, four months faster to launch, 10 to 15
millisecond robot-control latency. Nothing on the page is a placeholder, and
nothing is an anonymized "leading AI company."

The one illustration idea that repeats is a cube. It's the logo mark, it's
the icon for Sandboxes, and it comes back as a rendered chrome-and-green
container graphic in the security section and again as a glossy standalone
cube just before the final call to action. It isn't a decorative shape
borrowed from a generic 3D-icon pack; it's the same container Modal's product
runs workloads inside, drawn four different ways.

**Key Characteristics:**
- One accent color (`{colors.brand-green}`, `#7fee64`) carried through the button, the headline color-pop, the chart lines, and the focus ring; nothing else in the palette competes with it.
- Two backgrounds instead of one: `{colors.canvas-black}` for the hero, the product demos, the globe, and security; `{colors.canvas-mint}` (`#def0dd`) for the workload breakdown. The page swaps registers by section rather than staying in one mode top to bottom.
- A self-hosted variable display face, Goga, reserved for every heading on the marketing site, left at its natural (zero) letter-spacing.
- Real screen-captured product video in place of code blocks or static screenshots, down to pinned package versions in the sample code.
- One recurring shape, the cube, running from the logo through the Sandboxes icon to the rendered security graphic and the closing 3D cube.
- A customer wall built from named companies and specific numbers, each card keeping the customer's own logotype instead of a redrawn version.

## Colors

### Accent
- **Brand Green** (`{colors.brand-green}`, `#7fee64`): the entire accent system in one swatch. Primary button fill, the emphasized word or two inside every big headline, chart lines, syntax highlights inside the product demos, and every focus ring on the site.
- **Brand Green Soft** (`{colors.brand-green-soft}`, `#6ac355`): a slightly deeper step used in gradient fills on the stat cards and in icon-render highlights.
- **Brand Green Muted** (`{colors.brand-green-muted}`, `#3e4a3c`): the fill for the secondary button variant on dark backgrounds, dark enough to read as a button and not a highlight.
- **Brand Green Muted Hover** (`{colors.brand-green-muted-hover}`, `#677d64`): the hover state for that secondary button.
- **Text Green on Dark** (`{colors.text-green-on-dark}`, `#859984`) and **Text Green on Dark, Dim** (`{colors.text-green-on-dark-dim}`, `#697368`): the two muted greens used for subheads and captions sitting on black, doing the job a plain gray would do on a less disciplined palette.

### Canvas
- **Canvas Black** (`{colors.canvas-black}`, `#000000`): true black, used for the hero, the product-demo section, the globe section, and security. Not a near-black; the value is literally `#000`.
- **Canvas Near Black** (`{colors.canvas-near-black}`, `#181818`): the dark end of the product's own light/dark theme system, one step off pure black.
- **Canvas Card** (`{colors.canvas-card}`, `#242424`): the panel background for the demo videos and the dark customer-story cards, one step up from the black page behind them.
- **Canvas Off White** (`{colors.canvas-off-white}`, `#fafafa`): the page's actual default background before any section overrides it. Most of what a visitor perceives as "the site" is the overridden sections, not this default.
- **Canvas Mint** (`{colors.canvas-mint}`, `#def0dd`): the pale tint behind the "Build full-scale AI systems" workload section, the one deliberately light beat in an otherwise dark-leaning page.
- **Nav Pill** (`{colors.nav-pill}`, `#212525`): the fill of the floating, fully rounded navigation bar, one tone up from the black canvas so it reads as a physically separate object sitting on top of the page.

### Text
- **Ink Strong** (`{colors.ink-strong}`, `#ffffff`) and **Ink** (`{colors.ink}`, `#e8e8e8`): the two whites used for headline text and emphasized labels on dark backgrounds.
- **Body on Dark** (`{colors.body-on-dark}`, `#d1d1d1`), **Muted on Dark** (`{colors.muted-on-dark}`, `#a3a3a3`), **Faint on Dark** (`{colors.faint-on-dark}`, `#747474`): a three-step gray ramp for paragraph text, secondary labels, and disabled or tertiary text on black.
- **Ink on Light** (`{colors.ink-on-light}`, `#222222`): the near-black used for headline and body text inside the mint-background workload section.

### Data & Semantic
- **Dataviz 1, 2, 4, 7** (`{colors.dataviz-1}`, `#adeaab`; `{colors.dataviz-2}`, `#d9866b`; `{colors.dataviz-4}`, `#4aa19d`; `{colors.dataviz-7}`, `#648fe0`): four of an eight-color chart palette reserved for real data visualization, not brand decoration. This is the only place in the system where non-green hues show up as solid fills rather than as functional-only signals.
- **Semantic Danger** (`{colors.semantic-danger}`, `#f87171`), **Semantic Warning** (`{colors.semantic-warning}`, `#ffab5e`), **Semantic Info** (`{colors.semantic-info}`, `#91c8ef`): reserved for form validation and status states. They don't appear anywhere in the homepage's decorative palette.

## Typography

### Font Family

Modal's marketing headlines run in a single typeface:

- **Goga**: a geometric sans from Narrow Type (designer Andrej Ševčík), self-hosted as a variable font (`Goga-VariableVF.woff2`, weight axis 100 to 900) from Modal's own CDN rather than a font-hosting service. Every marketing heading, `h1` through `h5`, uses it with the `ss01` stylistic-alternate feature turned on.
- **Inter Variable**: the body and UI workhorse, covering paragraphs, nav labels, button text, and captions. It's the same default most of the web already uses, which is exactly why it stays out of the headline job here.
- **Fira Mono**: the monospace family, declared for code and other technical, numeric contexts.
- **Degular** (OH no Type Co., licensed through Adobe Typekit, full family with italics across weights 300 to 700) is loaded on every page but wasn't found applied on the marketing surfaces reviewed for this document. See Known Gaps.
- **Guyot** (Ramiro Espinoza, Retype Foundry) has a defined utility class (`font-guyot`) but, like Degular, wasn't observed in use on the pages checked.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.hero}` | 40px → 64px at ≥52.5rem | 500 | 1.0 | Page `h1`. One per page. |
| `{typography.display-h2}` | 36px → 40px → 54px | 400 | 1.1 | Section openers ("The production cloud for AI," "Build full-scale AI systems"). |
| `{typography.display-h3}` | 30px | 400 | 1.1 | Sub-section headers within a band. |
| `{typography.display-h4}` | 18px to 21px | 400 | 1.3 | Card and list-item titles ("Fine-tuning," accordion rows). |
| `{typography.display-h5}` | 16px | 500 | 1.3 | Small emphasized labels, kicker-adjacent headings. |
| `{typography.body-xl}` | 20px | 400 | 1.5 | Hero subhead, section intro paragraphs. |
| `{typography.body-base}` | 16px | 400 | 1.5 | Default paragraph text. |
| `{typography.body-sm}` | 14px | 400 | 1.43 | Captions, footer copy, announcement bar. |
| `{typography.caption}` | 12px | 400 | 1.5 | Fine print ("$30 / month free compute"). |
| `{typography.button}` | 14px | 400 / 500 | 1.43 | Button and nav-link labels. |
| `{typography.mono}` | 13px | 400 | 1.43 | Code and technical/numeric display. |

### Principles

- Goga carries the entire display hierarchy by itself; there's no second display face and no bold-weight jump doing that job, headings just get bigger or smaller.
- Letter-spacing across the whole type scale sits at zero. Modal doesn't tighten tracking on big type the way many "premium developer tool" sites do; Goga's natural spacing is left alone.
- `ss01` is switched on for every Goga instance. It's a small, consistent detail rather than a one-off flourish on the hero alone.
- Green does the emphasis work that bold weight or italics would do elsewhere: the word that matters in a headline turns `{colors.brand-green}` instead of getting heavier.

### Note on Font Substitutes

No official fallback is published for either display face. If Goga isn't
licensed, a free alternative in the same geometric-meets-humanist family,
something like General Sans or Switzer, would read closest, since Goga's own
description places it between Avenir and Helvetica. If Degular is needed
somewhere it hasn't been confirmed on this site, Inter Tight or Neue Haas
Grotesk Text are reasonable stand-ins for its role as a plain corporate
workhorse sans.

## Layout

### Spacing System

- **Base unit**: 4px, the same atomic unit Tailwind ships by default; most padding and gap values on the site are small multiples of it (8px, 16px, 24px, 32px).
- **Named tokens**: `{spacing.marketing-sm}` 16px, `{spacing.marketing-md}` 32px, `{spacing.marketing-lg}` 48px, the three responsive steps for a section's horizontal padding.
- Beyond those three, section-level spacing is set with one-off arbitrary values per component rather than a longer named scale. Treat the 4px unit as the source of truth, not a fixed set of named steps.

### Grid & Container

- **Max content width**: 1400px (`.marketing-container{max-width:1400px}`), with side padding stepping through the three named spacing tokens as the viewport grows.
- **Product-demo grid**: 2-up at desktop, stacking to 1-up on narrower screens.
- **Workload tabs**: three cards (Inference, Training, Sandboxes) side by side at desktop.
- **Customer-story wall**: an asymmetric bento grid, tall stat cards mixed with wide video and quote cards, not a uniform repeating grid.
- **Example gallery**: a horizontally scrollable row with filter pills above it, not a fixed grid at all.

### Whitespace Philosophy

The black sections lean on genuine empty space, there's a long stretch of
plain black between the hero's CTAs and the logo wall with nothing in it.
The mint section is denser and more conventional, closer to a standard
marketing page with headline, copy, and a feature grid stacked tightly. That
contrast in density is part of how the page signals a register change,
alongside the color swap itself.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow | The canvas itself, full-bleed color bands. |
| 1 (card) | `{colors.canvas-card}` (`#242424`) background only | Dark customer-story cards, workload tab thumbnails. |
| 2 (floating panel) | `{colors.canvas-card}` + hairline border + soft shadow + a green atmospheric glow bleeding from the edges | The four product-demo panels near the top of the page. |
| 3 (floating chrome) | `{colors.nav-pill}` + a real drop shadow (`shadow-lg`) | The navigation bar, which sits above the page content at every scroll position. |

### Decorative Depth

- **Atmospheric glow**: a soft green wash bleeding from behind the demo panels, implemented as a background-image asset per section rather than a single shared CSS gradient, so its exact position and falloff vary panel to panel.
- **The particle globe**: a real `<canvas>` element (a Svelte component, not a static image or a Lottie file) rendering a field of green dots with brighter "hub" nodes connected by thin arcing lines, a literal illustration of "globally distributed," not an abstract decoration.
- **The security render**: a glossy dark cube wrapped in three thick green bands, echoing the logo mark and the Sandboxes icon rather than introducing a new shape for this one section.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Full-bleed color bands, the announcement bar. |
| `{rounded.xs}` | 2px | Small inline chips. |
| `{rounded.sm}` | 4px | Rare, mostly form-adjacent elements. |
| `{rounded.md}` | 6px | Mostly reserved for the authenticated product, not the marketing site. |
| `{rounded.lg}` | 8px | Occasional smaller panels. |
| `{rounded.xl}` | 12px | Workload tab thumbnails, example-gallery cards. |
| `{rounded.2xl}` | 16px | Demo panels, stat cards, customer-story cards. |
| `{rounded.pill}` | effectively infinite | Every button, the floating nav bar, badges. |

### Illustration & Video Geometry

- Photography doesn't appear anywhere on the marketing site. Visual interest instead comes from three sources: real screen-captured product video, a small set of bespoke 3D-rendered icons and graphics (all variations on the cube), and a curated set of abstract art thumbnails on the examples gallery.
- Customer logos in the top-of-page proof strip run in a flat, muted gray treatment, uniform across all sixteen. Lower on the page, in the story-card proof wall, each customer's logo reverts to full color and its own real logotype, a deliberate second treatment rather than an inconsistency.
- Example-gallery thumbnails are distinct, generated pieces per example (a warm cloud-like texture for a Whisper transcription example, a duotone double-profile image for a voice-chat example), art-directed enough that no two look like variations on the same template.

## Components

### Buttons

**`btn-primary`**: solid green pill
- Background `{colors.brand-green}`, label `{colors.canvas-black}`, type `{typography.button}` at weight 500, `rounded: {rounded.pill}`, padding `9px 21px`.
- The only solid, fully saturated surface on the page. Active state scales to 97%; hover brightens rather than swapping to a second color.

**`btn-secondary`**: outlined pill
- Transparent background, `{colors.ink-strong}` label, 1px `{colors.hairline-on-dark}` border, type `{typography.button}`, `rounded: {rounded.pill}`, padding `8px 20px`.
- Pairs with `{component.btn-primary}` wherever a lower-emphasis action sits next to the main one ("Contact Us" beside "Get Started").

### Cards & Containers

**`demo-panel`**: product-demo video panel
- Background `{colors.canvas-card}`, `rounded: {rounded.2xl}`, padding `24px`, a three-dot browser-chrome row (white, gray, gray, not the red/yellow/green convention) above the video itself.
- Holds a silent, looping capture of real product UI: the SDK, the cold-start benchmark, the GPU picker, the observability dashboard.

**`workload-tab-card`**: category tab
- Black background when active, a muted olive-gray when inactive, `rounded: {rounded.xl}`, holding one of three bespoke isometric 3D icons (a wireframe cube for Inference, a stepped block for Training, stacked layers for Sandboxes).

**`stat-card`**: customer proof, number-led
- A diagonal gradient from `{colors.brand-green-muted}` to `{colors.brand-green}`, `{colors.canvas-black}` text, the number set in `{typography.display-h2}`, `rounded: {rounded.2xl}`.
- Used for the handful of story cards that lead with a metric ("65%," "4 months") rather than a headline.

**`story-card`**: customer proof, quote or video-led
- `{colors.canvas-card}` background, `{colors.ink-strong}` text, `rounded: {rounded.2xl}`, the customer's own logotype rendered in full color rather than Modal's own type system.
- Some carry an embedded video with a small circular play icon; others carry a direct customer quote.

**`example-card`**: gallery card
- A bespoke generated-art background per example, `{colors.ink-strong}` title text, `rounded: {rounded.xl}`, a small arrow icon in the corner linking out to the real, runnable example.

### Navigation

**`nav-pill`**: floating top navigation
- `{colors.nav-pill}` background, `rounded: {rounded.pill}`, a real drop shadow lifting it off the canvas, the logo left, "Product / Solutions / Resources / Customers / Pricing / Docs" center, "Log In" and a small green "Sign Up" chip (with an outbound-arrow icon) right.
- Collapses to a plain rectangular bar with a hamburger icon below the `md` breakpoint; the pill shape itself doesn't survive onto mobile.

**`accordion-row`**: collapsible list item
- Transparent background, 1px `{colors.hairline-on-dark}` divider, type `{typography.display-h4}`, a plus icon that presumably rotates on open (built on Melt UI's collapsible primitive).
- Used for the "Global GPU infrastructure" and "Security and governance" claim lists, four rows each, collapsed by default.

### Signature Components

**`announcement-bar`**: top-of-page product news strip
- `{colors.brand-green}` background, `{colors.canvas-black}` text, type `{typography.body-sm}`, full width, a single underlined "Learn more" link with an arrow. No icon, no dismiss button visible.

**`particle-globe`**: infrastructure visualization
- A `<canvas>`-rendered field of green dots forming a sphere, with a handful of brighter connected "hub" nodes and thin arcing lines between them. Runs once, next to the "Global GPU infrastructure" claim list.

**`logo-wall-marquee`**: customer logo strip
- A CSS-keyframe auto-scroll (translateX, pausable on hover, built to support one row scrolling each direction) holding sixteen real, named customer logos in flat gray.

## Do's and Don'ts

### Do
- Keep `{colors.brand-green}` as the only saturated color in the system. Every other hue is either plain gray or a muted step of the same green.
- Alternate `{colors.canvas-black}` and `{colors.canvas-mint}` by section instead of committing the whole page to one register.
- Show real product surfaces, the code editor, the GPU picker, the benchmark chart, as captured video, not invented mockups or static screenshots.
- Back every stat card with a real number and a real, named company. If there's no specific figure behind a claim, the card doesn't run.
- Leave Goga at zero letter-spacing. Resist tightening it for a more "premium" editorial look; that's not this brand's move.
- Let each customer keep their own logotype in the story-card proof wall rather than redrawing every logo in Modal's own type.

### Don't
- Don't reach for a generic radial-gradient blob as a section backdrop. Every glow on this page bleeds out from an actual product panel; none of them float on their own as pure decoration.
- Don't illustrate a concept with a stock icon pack or an abstract Lottie loop. The cube is the one recurring shape, and it always ties back to containers.
- Don't use Inter, or any other grotesque, for a heading. Goga owns that job everywhere on the marketing site.
- Don't flatten the story-card proof wall into uniform gray logo tiles. That's the one deliberate place the page breaks its own restraint, and it's on purpose.
- Don't add a second saturated accent color "for variety." The discipline of a single green is the point.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| `sm` | ≥ 40rem (640px) | Base mobile layout starts loosening up. |
| `md` | ≥ 52.5rem (840px) | Hero jumps from 40px to 64px; container padding steps up to 32px; this is a customized breakpoint, not Tailwind's default 48rem. |
| `lg` | ≥ 64rem (1024px) | Container padding steps up to 48px; multi-column grids (product demos, workload tabs) reach full width. |
| `xl` | ≥ 75rem (1200px) | Content approaches the 1400px container ceiling. |

### Touch Targets

- Primary and secondary buttons land at roughly 38px tall (9px vertical padding plus a 14px label), on the smaller side of common touch-target guidance but consistent across every button on the site.
- The nav's mobile hamburger and the "Sign Up" chip both stay comfortably tappable; neither shrinks further than its desktop sibling.

### Collapsing Strategy

- The floating pill nav becomes a plain rectangular bar with a hamburger icon below the `md` breakpoint; the pill shape is a desktop-only flourish.
- The hero headline steps down from 64px to 40px, and its line breaks shift from two lines to three.
- The customer logo wall reflows from a single scrolling row into a wrapped grid (three columns, then two) on narrow viewports.
- The two hero CTAs stay side by side even at 390px wide; they never stack vertically.

### Media Behavior

- The four hero-adjacent product videos are silent, looping, and autoplay muted; there's no static-image fallback documented for reduced-motion contexts.
- Atmospheric glows are background-image assets, not live CSS gradients, so they don't recompute at different breakpoints; they simply scale with their container.
- Example-gallery thumbnails and customer logos both keep their aspect ratio fixed across breakpoints; only the surrounding grid reflows.

## Iteration Guide

1. Start from the green. If a new component doesn't have an obvious reason to use `{colors.brand-green}`, it probably shouldn't, the color's restraint is the brand.
2. Decide which canvas a new section belongs on, `{colors.canvas-black}` or `{colors.canvas-mint}`, before touching typography or components; the register drives everything else in that section.
3. Reference tokens directly (`{colors.brand-green}`, `{component.btn-primary}`, `{rounded.2xl}`) rather than restating their raw values in prose.
4. When a section needs an illustration, ask whether it can be a variation on the cube before reaching for a new shape.
5. Keep proof points specific. A new customer card needs a real name and a real number before it ships, not a placeholder metric to be filled in later.
6. Run any new marketing headline through Goga at zero letter-spacing before considering a tighter track; the type system has held that line consistently so far.

## Known Gaps

- This document covers the public marketing site only, primarily the homepage, spot-checked against the pricing page and the landing views of the blog, docs, and GPU Glossary. The authenticated product dashboard runs on a much larger internal token system (roughly 200 semantic color mappings with full light and dark theme support) that's out of scope here.
- Degular and Guyot are both licensed and loaded on every page (a Typekit stylesheet for the former, a dedicated CSS variable for the latter), but neither was found actually applied on the pages reviewed for this document. They may be reserved for a surface not checked here, or left over from an earlier version of the system.
- Glow-gradient positioning and the auto-scroll marquee's speed and gap are set per instance through CSS custom properties rather than fixed, shared tokens. Treat "glow" and "marquee" as patterns to reproduce, not single values to copy.
- The Inference / Training / Sandboxes tab control wasn't driven interactively; whether it swaps content in place or scrolls to a linked section is inferred from the markup, not confirmed by using it.
- Individual case-study pages, the careers and events pages, and the customer index weren't reviewed. This document reflects the homepage and pricing page only.
