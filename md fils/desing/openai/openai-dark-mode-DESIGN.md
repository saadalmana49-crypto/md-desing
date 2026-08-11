---
version: alpha
name: OpenAI Dark Mode
description: |
  OpenAI's dark mode isn't a separate design, it's a different frame around
  the same pictures. Flip the color-scheme preference and the canvas swaps
  from white to true black, the ink swaps from black to white, and every
  button inverts, but the featured images themselves don't change a single
  pixel. That works because the imagery was never neutral to begin with: it's
  built from deep space photography, warm sunrise gradients, and soft
  color-field renders that already read as night scenes whether they're
  sitting on black or floating on white. The site's real personality lives in
  that imagery and in the restraint around it, a plain chat prompt for a
  homepage hero, quiet gray UI chrome, and then, dropped into the middle of
  that quiet, pictures of sunrises seen from orbit.

colors:
  canvas: "#000000"
  surface: "#1f1f1f"
  surface-muted: "#505050"
  ink-primary: "#ffffff"
  ink-primary-80: "#fffc"
  ink-primary-60: "#fff9"
  ink-primary-44: "#ffffff70"
  ink-secondary: "#000000"
  loading-slate: "#343541"
  hue-red: "#f53255"
  hue-lime: "#9dca1c"
  hue-magenta: "#eb56c5"
  hue-blue: "#29bdfd"
  hue-yellow: "#ffaf00"
  brand-blue-500: "#2c67c5"
  brand-purple-500: "#7849d1"
  brand-pink-500: "#cf6194"
  brand-orange-500: "#d25e28"
  brand-yellow-500: "#d9a337"
  brand-green-500: "#48a04c"
  brand-red-500: "#de282f"
  brand-teal-500: "#05c099"
  brand-gray-900: "#181818"

typography:
  headline:
    fontFamily: OpenAI Sans
    fontWeight: "600 to 700"
    lineHeight: 1.2
  ui-body:
    fontFamily: OpenAI Sans
    fontSize: 16px
    fontWeight: 400
  ui-label:
    fontFamily: OpenAI Sans
    fontSize: 14px
    fontWeight: "400 to 500"
  nav-link:
    fontFamily: OpenAI Sans
    fontSize: 14px
    fontWeight: 400
  mono:
    fontFamily: "SF Mono, Consolas, Liberation Mono, ui-monospace"
    fontWeight: 400

imagery:
  flagship-composite:
    source: commissioned photography or a photoreal 3D render
    palette: deep space black warming into amber and gold at the light source
    treatment: an oversized numeral or wordmark integrated into the frame's negative space
    modeInvariant: true
  gradient-bokeh:
    source: an abstract, softly blurred color field
    palette: one hue per topic, drawn from the brand color families
    treatment: heavy blur plus a low-opacity fractal noise texture to prevent flat banding
    modeInvariant: true
  gradient-streak:
    source: an abstract diagonal light-streak, sharper and more directional than the bokeh style
    palette: one hue per topic or partner
    treatment: motion-blur-like diagonal bands, partner logo set in white on top
    modeInvariant: true
  research-collage:
    source: layered flat-color panels combined with real diagrams, equations, or molecular structures
    palette: a pastel brand hue paired with cream or off-white panels
    treatment: editorial poster layout, sometimes a ghosted repeated wordmark in the background
    modeInvariant: true
  documentary-photo:
    source: real, on-location editorial photography
    palette: natural and unaltered
    treatment: full-bleed, no text overlay, no color grading applied on top
    modeInvariant: true

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 16px
  xl: 32px
  full: 9999px

spacing:
  unit: 4px
  container-desktop-max: 1440px
  fullbleed-max: 3840px

components:
  chat-hero-input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-primary-60}"
    rounded: "{rounded.lg}"
    padding: 24px
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-primary}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  article-card:
    backgroundColor: transparent
    textColor: "{colors.ink-primary}"
    typography: "{typography.headline}"
    rounded: "{rounded.md}"
  gradient-thumbnail:
    backgroundColor: "hue drawn from {imagery.gradient-bokeh}"
    rounded: "{rounded.md}"
    padding: 0
---

## Overview

Set a browser to `prefers-color-scheme: dark` and openai.com's canvas drops
to a flat, literal `{colors.canvas}` (`#000`), not a near-black. Set it back
to light and the same canvas is pure white. Everything built from opacity,
the button fills, the input borders, the muted captions, flips with it: a
white "Try ChatGPT" pill on black becomes a black pill on white, gray-on-black
body copy becomes gray-on-white. This is a real, working
`prefers-color-scheme` implementation with a fully mirrored token set behind
it, not a tint layered over one fixed design.

What doesn't flip is the imagery. The hero article's photo, Earth's
atmosphere glowing at the edge of a sunrise with a smaller moon-like body
in shadow, renders identically in both modes, pixel for pixel. So does every
other featured image checked for this document. That's only possible because
the images were never designed to be neutral. They're already dark: deep
space blacks, night-sky blues, and gradients that stay legible whether they
sit on a black page or float as a lit window inside a white one. Dark mode
here isn't a second visual language for the pictures. It's the register the
pictures were shot in from the start, and light mode is the one doing the
adapting.

The homepage itself doesn't open with a marketing pitch. It opens with "What
can I help with?" and an actual-looking chat input, cycling through example
prompts. That's the whole hero. No headline claiming the future of AI, no
subhead explaining the product, just the product's own interaction pattern
placed where a hero image would normally go. Everything that would carry
"personality" on a typical SaaS homepage, tone, persuasion, adjectives, is
absent from the chrome and concentrated entirely in what comes after: a long
feed of article cards where the photography and generative color work is
doing all the emotional lifting the copy usually would.

**Key Characteristics:**
- A literal `#000` canvas in dark mode, not a softened near-black, with a fully mirrored token set (`{colors.ink-primary}`, `{colors.surface}`) rather than a single dark theme bolted onto a light one.
- Featured images that render identically in light and dark mode. The site's visual mood comes from the pictures themselves, not from a color treatment applied around them.
- A five-tier image system (flagship composites, soft gradient fields, diagonal light-streaks, research collages, documentary photography) that varies by content type but stays within a single, deliberate palette logic.
- A homepage hero built from the product's own chat interface rather than marketing copy.
- OpenAI Sans, a bespoke typeface commissioned from ABC Dinamo as part of a 2025 rebrand, the same rebrand that appears to have produced this image system.
- Recurring space and horizon imagery tied to model names that are themselves celestial (Sol, Luna, Rosalind), so the art direction and the product naming reinforce each other.

## Colors in Dark Mode

- **Canvas** (`{colors.canvas}`, `#000000`): the literal, confirmed value of `--color-background` under `prefers-color-scheme: dark`. Not `#0a0a0a` or a softened charcoal, the true value.
- **Surface** (`{colors.surface}`, `#1f1f1f`): the fill behind the homepage's chat input and similar raised elements. This is the "tertiary" token in OpenAI's own system, and it's the closest thing dark mode has to a card background.
- **Surface Muted** (`{colors.surface-muted}`, `#505050`): a secondary fill step, used at partial opacity for quieter UI moments.
- **Ink Primary** (`{colors.ink-primary}` through `{colors.ink-primary-44}`): white at 100%, 80%, 60%, and 44% opacity, the full text hierarchy in dark mode, from headline white down to placeholder gray. In light mode this exact same token ramp is black instead; the naming stays constant and the color inverts underneath it.
- **Ink Secondary** (`{colors.ink-secondary}`, `#000000`): reserved for text sitting on a locally inverted surface, black type on a white chip floating inside an otherwise dark page.
- **Loading Slate** (`{colors.loading-slate}`, `#343541`): the background color of OpenAI's own interstitial and loading screens. It doesn't appear in the main page chrome, but it's a real, shipped dark-mode color worth knowing since it's the first thing rendered while the real page loads.
- **The brand hue families**: nine full color ramps (`{colors.brand-blue-500}`, `-purple`, `-pink`, `-orange`, `-yellow`, `-green`, `-red`, `-teal`, plus a neutral `-gray`), each running from near-white to near-black across thirteen steps. These aren't decorative extras; they're the palette every featured image and section tint appears to draw from, so a given hue shows up consistently across a topic (health content leans pink, technical performance content leans teal) rather than being picked freehand per image.
- **Hue tokens** (`{colors.hue-red}`, `-lime`, `-magenta`, `-blue`, `-yellow`): a smaller, separate set used with the CSS `color-mix()` function to tint a section's background a small percentage toward a hue without leaving the neutral canvas entirely, the mechanism behind soft-tinted backgrounds like the pink wash behind the ChatGPT Health announcement.

## Featured Images

Five distinct image treatments cover what's actually on the homepage, and
each one is reserved for a different kind of content rather than mixed
freely.

**Flagship composites** (`{imagery.flagship-composite}`) carry the single
biggest story on the page. The GPT-5.6 announcement uses a real-feeling
photograph of Earth's limb glowing at sunrise, a smaller shadowed moon in the
foreground, and a visible band of the Milky Way, with "GPT" and "5.6" set
in enormous white numerals worked directly into the image's empty space
rather than floating as a caption below it. The GPT-Red security post uses
the same register: a black starfield scattered with small light points, a
shield-and-sword mark, "GPT" and "Red" integrated the same way. These are
full production pieces, not stock photography with text dropped on top.

**Gradient bokeh** (`{imagery.gradient-bokeh}`) covers most of the routine
news feed. Each card gets a softly blurred color field, warm peach for
"Launching Health in ChatGPT," bright turquoise for "Advancing the
price-performance frontier with GPT-5.6," pale blue-lavender for a board
appointment announcement. No two are identical, but all of them share the
same rendering approach: a smooth, out-of-focus gradient with visible grain
rather than a flat CSS fill.

**Gradient streaks** (`{imagery.gradient-streak}`) appear on partner and
customer cards. "Introducing OpenAI Presence" uses green-to-cyan diagonal
light bands; the CyberAgent and Gradient Labs business spotlights use green
and orange versions of the same idea, with the partner's own logo set
cleanly in white on top. It's a variant of the bokeh style, sharper and more
directional, closer to a long camera exposure of moving light than a soft
color cloud.

**Research collages** (`{imagery.research-collage}`) are reserved for
research posts specifically, and they're the most content-aware treatment on
the site. "An OpenAI model has disproved a central conjecture in discrete
geometry" shows the actual "Unit Distance Problem" name, a real graph-theory
diagram in black linework, and the notation `n^(1+δ)` set into a mustard-yellow
panel. "Introducing GPT-Rosalind for life sciences research" shows a real
molecular skeletal formula on a cream panel against a green gradient
background, with "OpenAI for Science" ghosted repeatedly behind the headline.
These aren't abstract decoration standing in for the subject matter, they
incorporate the subject matter directly.

**Documentary photography** (`{imagery.documentary-photo}`) is reserved for
the "Stories" section, and it's the one place the site steps fully away from
generated or composited imagery: a cyclist pulling a supply sled across
Arctic ice, a portrait of a researcher standing beneath a large satellite
dish, an open-wheel race car mid-motion-blur with "R&D" set over the frame.
No overlay text competing with the numeral treatment above, no gradient
grading, just full-bleed, high-production photography.

A sixth pattern, real subject photography for business customer spotlights
(close-up blueberries for a food-distribution customer named Choco), shows
up rarely enough that it reads more as an exception proving the rule: when a
customer's actual business gives the design team something concrete to
photograph, they'll use it instead of falling back to an abstract gradient.

## Image Coloration

The single most important fact about coloration here is one most sites don't
share: **the images don't change between light and dark mode.** Every
featured image checked for this document, the GPT-5.6 composite, the Health
gradient, the research collages, rendered as an identical file in both
`color-scheme` settings. What changes around them is the surrounding chrome:
white becomes black, black becomes white, and the image sits in the middle
of that flip unaffected.

That's a deliberate authoring choice, not an oversight. Every image treatment
on the site is built from a palette that's already dark or richly saturated
at its core: black space, deep saturated color fields, cream research panels
that read as warm rather than stark. None of the featured images lean on a
light, airy palette that would only make sense against a white background.
The practical result is that the imagery reads as a lit window into another
scene regardless of what mode the surrounding page is in. In dark mode that
window sits flush with its surroundings; in light mode it reads as a
deliberate dark portal set into a bright page. Both are intentional-looking,
which is the actual craft.

A few specific techniques recur across images:

- **A warm-to-cool or cool-to-warm gradient anchors most of the photographic and rendered work.** The flagship composite runs from black space through blue atmospheric scatter into a blazing amber-gold sun core. It's a real, physically motivated gradient (an actual sunrise has this color story), not an arbitrary brand-color blend.
- **Grain is added on purpose.** The gradient-bokeh cards use a low-opacity SVG fractal noise texture layered over the blur (confirmed in the site's own CSS at roughly 18% opacity), the same trick film photography and high-end gradient design both use to stop a smooth color field from banding or looking synthetic.
- **One hue per topic, drawn from a shared nine-family palette.** Health leans pink and peach. The price-performance and Presence posts lean teal and green. Research posts lean yellow or green depending on the field. This isn't random variety, it's the same nine `--color-brand-*` families (blue, purple, pink, orange, yellow, green, red, teal, gray) that exist in the site's core token set, each with its own thirteen-step range from near-white to near-black.
- **Text integrated into the image, not layered over it as a caption.** The oversized "GPT," "5.6," "Red," and "Unit Distance Problem" treatments are composed as part of the image file itself, sized and placed to interact with the photo's negative space, closer to a magazine cover than a web card with alt text.

## Typography

OpenAI Sans (`{typography.headline}`, `{typography.ui-body}`) is a bespoke
geometric sans designed with the type foundry Dinamo and publicly rolled out
in OpenAI's early-2025 rebrand, the same effort that produced the current logo mark and
the nine-family color system described above. It carries every weight of
text on the site, from the enormous flagship-image numerals down to nav
labels. A secondary, unconfirmed serif (`LF Serif`) and a monospace-styled
display face (`Build Week Digital`) are both loaded as real `@font-face`
declarations on the homepage, but neither was found rendering anywhere on
the page itself; they likely belong to editorial or campaign pages outside
this document's scope. Code and technical text fall back to a plain system
monospace stack (`{typography.mono}`) rather than a custom mono cut.

On the canvas itself, type carries almost no color of its own in dark mode.
Headlines and body copy both run through the same white-based opacity ramp
(`{colors.ink-primary}` at 100%, 80%, 60%, 44%), so hierarchy comes from
opacity and size rather than introducing a second hue for emphasis. The one
place type gets genuinely large is inside the flagship images themselves,
where numerals like "5.6" run far bigger than anything in the live HTML type
scale, another sign that the image is doing character work the page copy
isn't asked to do.

## Vibe and Feel

Two things sit in tension on this page, and the tension is the actual feel
of the site. The interface chrome is almost administrative: plain black or
white canvas, thin borders, gray captions, pill buttons with no gradient or
shadow on them. Nothing about the nav bar, the search icon, or the account
menu is trying to impress anyone. Then, dropped directly into that quiet
frame, the imagery reaches for genuine scale: a sunrise seen from orbit, a
researcher dwarfed by a satellite dish, an Arctic ice sheet, a race car at
speed. The chrome doesn't compete with the pictures for attention, and the
pictures don't need help from the chrome. That division of labor, quiet
interface, loud imagery, is more consistent and more deliberate than it
would be if it happened by accident.

The specific choice of imagery matters too. Space and horizon photography
recur often enough, and line up closely enough with model names like Sol and
Luna, that they read as a coordinated theme rather than a stock-photo
default. It's a documentary register: real telescopes, real ice, real
motion blur, rather than the neon grid lines, glowing circuit patterns, or
purple-cyan cyberpunk gradients that a lot of AI-company dark modes reach
for. Where the color does get generated or abstracted, in the bokeh and
streak thumbnails, it stays soft and photographic rather than sharp and
synthetic, grain included.

Placing an actual chat prompt as the homepage's entire hero is the boldest
individual choice on the page, and it sets the tone for everything under it.
A visitor isn't told what the product does before being shown it; the first
interactive element on the page already looks and behaves like the product
itself. Combined with the imagery's reach for scale and the chrome's refusal
to editorialize, the overall feeling is closer to a research institute's
annual report than a startup's landing page, confident enough to let a
single photograph carry the emotional weight a paragraph of copy usually
would.

## Shapes & Elevation

Dark surfaces here get their separation from flat color steps, not shadows.
`{colors.canvas}` to `{colors.surface}` is the entire elevation system for
most of the page: a card is simply a `#1f1f1f` rectangle on a `#000`
background, no drop shadow, no border glow. The one confirmed shadow token
in the whole system (`--drop-shadow-sm`, a soft 1px offset at low opacity)
is minimal enough that it reads as a hint rather than a real lighting cue.
Depth instead comes from the images: the flagship composites and gradient
thumbnails carry their own implied lighting (a sun flare, a light streak),
which does more visual "lifting" work than a CSS shadow would on a pure
black background, where shadows barely register anyway.

Corners are rounder here than in comparable systems. `{rounded.lg}` resolves
to 16px, `{rounded.xl}` to a full 32px, both noticeably softer than the
8 to 12px range common elsewhere. The chat input, the article-card images,
and the gradient thumbnails all carry this same generous rounding, which
reads as approachable rather than clinical, consistent with the "more
human" language OpenAI's own designers used to describe the 2025 rebrand.

## Components

**`chat-hero-input`**: the homepage's central element
- `{colors.surface}` fill, `rounded: {rounded.lg}`, rotating placeholder copy, a circular send button in the corner. It's styled to look like a real product surface, not a marketing mockup of one.

**`nav-bar`**: top navigation
- Flat `{colors.canvas}`, no border or shadow separating it from the page, white text links, and a solid white "Try ChatGPT" pill (solid black in light mode) as the one high-contrast element in an otherwise quiet bar.

**`article-card`**: the recurring news and research unit
- An image (in one of the five `imagery` treatments) paired with a small category label, a headline in `{typography.headline}`, and a muted read-time caption. The image is always the largest element in the card by a wide margin.

**`gradient-thumbnail`**: the compact version of the bokeh and streak treatments
- Used at smaller sizes throughout the "Recent news" and "Latest research" grids, always `rounded: {rounded.md}`, always full-bleed within its card with no padding around the image itself.

## Do's and Don'ts

### Do
- Keep featured images mode-invariant. Author them dark and rich enough that they work unedited against both `{colors.canvas}` and a white page.
- Reserve `{imagery.flagship-composite}` for genuinely major announcements only. Its impact depends on it being rare.
- Pull a new section's accent from the existing nine brand-hue families rather than introducing a new hue; the system already covers warm and cool, bright and muted.
- Keep the noise texture on any new gradient-bokeh image. A perfectly smooth gradient reads synthetic in a way the grained version doesn't.
- Let the interface chrome stay quiet. If a new component wants to compete visually with the imagery, that's a sign it doesn't belong.

### Don't
- Don't design an image assuming a white background or a black background specifically. Every image on this site has to survive both.
- Don't reach for neon, glow, or cyberpunk color combinations to signal "AI." The site's actual dark-mode instinct is documentary, not synthetic.
- Don't add drop shadows to create depth on the black canvas. Use a flat surface-color step instead; shadows barely read against true black.
- Don't caption a research image with a generic icon when the real diagram, formula, or chart is available. The research-collage treatment exists specifically to avoid that shortcut.
- Don't tighten the border radius to match a more common 8 to 12px range. The rounder corners are a deliberate, confirmed part of this system.

## Responsive Behavior

- **Breakpoints**: a `--breakpoint-nav-desktop` at 63.75rem (1020px) governs when the navigation switches from a mobile to a desktop layout; container widths step through several named sizes up to a 90rem (1440px) desktop maximum.
- **Full-bleed ceiling**: a small number of hero and backdrop elements are allowed to stretch to `{spacing.fullbleed-max}` (3840px), meaning the biggest imagery on the site has effectively no practical width cap on very large displays.
- **Article cards**: the two-column "flagship image plus sidebar list" layout on the homepage collapses to a single stacked column below desktop widths, based on the mobile-viewport-equivalent behavior visible in the responsive screenshots taken for this document.
- **Images stay fixed, chrome reflows**: across every breakpoint checked, the featured images keep their aspect ratio and color treatment; only their surrounding grid and card size change.

## Iteration Guide

1. Before adding a new image, decide which of the five treatments it belongs to; don't invent a sixth without a genuine new content type to justify it.
2. Check that any new image works against both `{colors.canvas}` and white before shipping it. If it only works on one, it needs more contrast built into the file itself, not a CSS filter applied per mode.
3. Assign new sections a hue from the existing nine brand families rather than picking a new color; the palette already has the range covered.
4. Reference tokens directly (`{colors.canvas}`, `{imagery.gradient-bokeh}`, `{rounded.lg}`) instead of restating raw hex values in prose.
5. When in doubt about how loud a new element should be, default toward the chrome's restraint rather than the imagery's boldness. Only the featured images get to be loud.

## Known Gaps

- The individual GPT-5.6 article page, and with it the "Sol" ASCII-style animated hero backdrop referenced in the site's own CSS (`SolAsciiHeroBackdrop`), returned a Cloudflare human-verification challenge on every attempt and wasn't accessible for this document. Its color and motion treatment aren't documented here.
- `LF Serif` and `Build Week Digital` are both real, loaded typefaces confirmed in the site's CSS, but neither was found rendering on the homepage itself; their actual use elsewhere on the site is undocumented.
- A "responsive, programmed" animated brand element referred to in press coverage of the 2025 rebrand as the "Emotive Point" wasn't identified with confidence on the pages reviewed here.
- This document covers the homepage only, in both color modes, plus a blocked attempt at one article page. The Research, Products, Business, and Company sections weren't reviewed.
- The precise mapping from each brand hue family to its associated content category (health, research, business, and so on) is inferred from the handful of examples visible on the homepage, not confirmed against every category on the site.
