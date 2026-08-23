---
name: 'Apollo'
slug: apollo
url: https://apollo.io
category: 'SaaS'
mode: light
fonts:
  - 'Season Mix'
  - 'ABC Diatype'
  - 'Founders Grotesk Mono'
preview:
  bg: '#ccc9c6'
  fg: '#1a1a1a'
  accent: '#ebf212'
summary: >-
  A taupe frame around a white content card. Season Mix headlines, one accent hue per product pillar.
colors:
  sand-10: '#f7f5f2'
  sand-20: '#edebe8'
  sand-30: '#e5e3e1'
  sand-40: '#ccc9c6'
  sand-50: '#94918e'
  sand-60: '#736f6c'
  sand-70: '#47423d'
  sand-80: '#1a1a1a'
  iris-05: '#f5f0ff'
  iris-10: '#c1b7ff'
  iris-50: '#9c73ff'
  iris-60: '#603fab'
  iris-100: '#3f3653'
  ocean-05: '#e9f2ff'
  ocean-10: '#c5ddff'
  ocean-50: '#3a6783'
  ocean-100: '#243031'
  rust-05: '#fff0fe'
  rust-10: '#ffbdf5'
  rust-50: '#ff8077'
  sunbeam-10: '#feffd9'
  sunbeam-20: '#fcffa8'
  sunbeam-50: '#f8ff2c'
  sunbeam-60: '#ebf212'
  sunbeam-70: '#c7cc43'
  text-header: '#000000'
  text-body: '#1a1a1a'
  text-placeholder: '#736f6c'
  text-negative: '#ff8077'
typography:
  hero:
    family: 'Season Mix'
    size: '44px / 56px / 64px / 72px / 80px across breakpoints'
    weight: 550
    line-height: '100%'
    letter-spacing: '-1% of size at every step'
  section-header:
    family: 'Season Mix'
    size: '36px / 40px / 48px / 56px across breakpoints'
    weight: 550
    line-height: '110%'
    letter-spacing: 'roughly -0.9% of size'
  body:
    family: 'ABC Diatype'
    size: '14px / 16px at desktop-xl'
    weight: 400
    line-height: '130%'
  button:
    family: 'ABC Diatype'
    size: '14px / 16px at desktop-xl'
    weight: 400
    line-height: '130%'
  mono-label:
    family: 'Founders Grotesk Mono'
    size: 12px
    weight: 400
    line-height: '130%'
    letter-spacing: 'wide, uppercase'
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  lg: 8px
  xl: 12px
  2xl: 16px
  full: 9999px
spacing:
  container-max: 1872px
  nav-height: '56px / 64px (tablet) / 72px (desktop-s and up)'
components:
  btn-primary:
    bg: '{colors.sunbeam-60}'
    text: '{colors.sand-80}'
    radius: '{rounded.lg}'
    height: 40px
    padding: '0 16px'
  btn-secondary:
    bg: transparent
    text: '{colors.text-header}'
    border: '1px solid {colors.sand-40}'
    radius: '{rounded.lg}'
    height: 40px
    padding: '0 16px'
  page-frame:
    bg: '{colors.sand-40}'
    radius: '{rounded.none}'
  content-card:
    bg: '#ffffff'
    radius: '{rounded.2xl}'
  pillar-tab:
    bg: 'sunbeam-60 / iris-50 / rust-50 / ocean-50, one per pillar'
    text: '{colors.sand-80}'
    radius: '{rounded.lg}'
  stat-card:
    bg: '#ffffff'
    text: '{colors.iris-100}'
    radius: '{rounded.xl}'
    padding: 24px
  testimonial-card:
    bg: '#ffffff'
    text: '{colors.text-body}'
    radius: '{rounded.xl}'
    padding: 24px
  nav-bar:
    bg: '{colors.sand-40}'
    radius: '{rounded.none}'
    height: '{spacing.nav-height}'
---

# Design System Inspired by Apollo

## Overview

Apollo doesn't run its marketing site full bleed. Every page sits inside a frame: a warm taupe band ({colors.sand-40}, #ccc9c6) fills the outer edges of the browser, and the actual page lives on a white card inset from it, closer to a document laid on a desk than a surface that owns the whole window. It's an unusual structural choice for a SaaS marketing site, and it gives even a very long, feature-dense homepage a defined edge.

The headline face is Season Mix, a 2024 release from Displaay, a small foundry in Prague. It isn't a sans and it isn't a serif; it's a variable typeface built on an axis that blends the two, and the "Mix" cut sits at the midpoint. That's why the big headlines read as slightly serif without fully committing to one, an effect that's engineered into the font itself rather than picked from a font menu. Every size of it is tracked in tight, at close to exactly one percent of its point size, whether that's 44px on a phone or 80px on a wide desktop. Body copy and buttons run in ABC Diatype, a neo-grotesque from the Berlin foundry Dinamo. Diatype is a considered choice, but it's also one of the most common typefaces in current B2B software design; pairing it with something as unusual as Season Mix is what keeps the system from reading as one more Diatype-and-Inter site.

Color does real information-architecture work here, not just decoration. The homepage's four product pillars, Outbound, Inbound, Data Enrichment, and Deal Execution, sit in a tab switcher, and each one owns a named hue: sunbeam (yellow-green) for Outbound, iris (purple) for Inbound, rust (pink to coral, despite the name) for Data Enrichment, and ocean (teal) for Deal Execution. Switching tabs recolors the active pill, the section's accent band, and nothing else, so a visitor can learn to associate a color with a product area purely by scrolling. The primary CTA button borrows the same {colors.sunbeam-60} that Outbound uses, which makes sense given Outbound (prospecting) is Apollo's original product.

Where the page is weakest is the writing, not the visual system. The FAQ section near the footer runs ten questions, and most of the answers open by restating the question almost word for word before padding out to a generic benefit statement, the exact rhythm of search-optimized filler copy rather than something a person actually asked. It sits in real contrast to the pull quotes and stat cards higher up the page, which are specific and clearly sourced from real customers. The visual system carries more conviction than the copy does everywhere on this page.

### Key Characteristics

- A sand-colored outer frame ({colors.sand-40}) around a white content card on every page, instead of a full-bleed layout.
- Season Mix, a genuinely unusual sans-to-serif variable typeface, reserved for every headline, tracked to almost exactly negative one percent of its size at each breakpoint.
- Four product pillars, each with its own named accent color (sunbeam, iris, rust, ocean) that recolors as a visitor switches tabs.
- Real customer headshots and named companies throughout the proof sections, not stock photography or anonymized logos.
- A workhorse UI typeface (ABC Diatype) that is, honestly, one of the most common choices in current B2B software design.
- A footer built partly for AI agents: pre-written prompts for ChatGPT, Claude, Perplexity, Grok, and Google, plus a dedicated page written for language models rather than people.

## Colors

### Neutral (Sand)

- Sand 10 to 30 ({colors.sand-10}, #f7f5f2, {colors.sand-20}, #edebe8, {colors.sand-30}, #e5e3e1): the three lightest steps, used for section backgrounds that need to read as slightly warmer than pure white (the compliance-badge strip, alternating content bands).
- Sand 40 ({colors.sand-40}, #ccc9c6): the outer page frame color. This is the single most visible color on the site even though it never appears inside the white content card.
- Sand 50 to 70 ({colors.sand-50}, #94918e, {colors.sand-60}, #736f6c, {colors.sand-70}, #47423d): the mid gray ramp, used for placeholder text, secondary labels, and muted captions.
- Sand 80 ({colors.sand-80}, #1a1a1a): the near-black used for primary body text and for text sitting on top of the bright accent colors (button labels included).

### Accent (One Per Pillar)

- Sunbeam ({colors.sunbeam-60}, #ebf212, with a range from {colors.sunbeam-10}, #feffd9 to {colors.sunbeam-70}, #c7cc43): Outbound's color and the site-wide primary button color.
- Iris ({colors.iris-50}, #9c73ff, ranging to {colors.iris-100}, #3f3653): Inbound's color, also used for the large stat-card numbers regardless of which pillar they illustrate.
- Rust ({colors.rust-50}, #ff8077, ranging to {colors.rust-10}, #ffbdf5): Data Enrichment's color. The name suggests orange or brown; the actual hues run pink to coral, which is worth knowing before assuming what "rust" will look like.
- Ocean ({colors.ocean-50}, #3a6783, ranging to {colors.ocean-100}, #243031): Deal Execution's color, the coolest and darkest of the four.

### Text

- Text Header ({colors.text-header}, #000000): pure black, reserved for headline text specifically.
- Text Body ({colors.text-body}, #1a1a1a, same value as {colors.sand-80}): paragraph and UI text.
- Text Placeholder ({colors.text-placeholder}, #736f6c, same value as {colors.sand-60}): form placeholder text and disabled labels.
- Text Negative ({colors.text-negative}, #ff8077, same value as {colors.rust-50}): error and validation states, drawn from the Data Enrichment accent rather than a separate red.

## Typography

### Font Family

- Season Mix: a variable typeface from Displaay (designer Martin Vácha, released 2024) built on a sans-to-serif axis rather than just weight or width. Every headline on the marketing site, from the hero down to section openers, uses it at [font-weight:550].
- ABC Diatype: a neo-grotesque from the Berlin foundry Dinamo, carrying body copy, button labels, and most UI text. It's a genuinely well-made typeface and also one of the default choices across current B2B software, so it isn't doing much to differentiate Apollo on its own.
- Founders Grotesk Mono: a Klim Type Foundry face used for the small uppercase labels: the pillar-tab names, the customer-role categories ("SALES LEADERS," "SDRS"), and the compliance-badge captions.
- Founders Grotesk (non-mono), Tiempos, Söhne, Söhne Mono, and four numbered weight-named grotesks are all loaded as @font-face declarations on this page but weren't found applied anywhere on the homepage. See Known Gaps.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| {typography.hero} | 44px → 80px across five breakpoints | 550 | 100% | The page h1. One per page. |
| {typography.section-header} | 36px → 56px across four breakpoints | 550 | 110% | Section openers, tab headlines, FAQ heading. |
| {typography.body} | 14px → 16px | 400 | 130% | Paragraphs, form labels. |
| {typography.button} | 14px → 16px | 400 | 130% | Button and link labels. |
| {typography.mono-label} | 12px | 400 | 130% | Uppercase tags: pillar names, role categories, badge captions. |

### Principles

- Letter-spacing on every Season Mix instance tracks in at close to exactly negative one percent of the font size, a consistent formula rather than a hand-picked value per breakpoint.
- Season Mix never drops below roughly 36px on this page; once type gets small enough to be UI or body copy, the system switches families entirely rather than shrinking the display face.
- The uppercase mono label is the only place tracking runs positive and wide instead of tight and negative, marking it clearly as a tag or category rather than a heading.
- Color, not weight, marks which product pillar a piece of content belongs to; ABC Diatype's own weight range barely gets used outside regular and medium.

### Note on Font Substitutes

No official fallback is published. Season Mix is unusual enough that a straight substitute is hard to find; if it's unavailable, a general-purpose serif like Tiempos (already licensed elsewhere in this same font stack) paired with slightly tighter tracking would read closer than reaching for another sans. ABC Diatype has close, common alternatives if needed, Söhne (also already loaded on this site) or Inter both sit in the same neo-grotesque territory.

## Layout

### Spacing System

- No named spacing scale was found comparable to a formal design-token system; padding and gap values on this page are mostly one-off pixel values per component (32px, 40px, 54px, and similar) rather than steps on a shared scale.
- Container max width: {spacing.container-max}, 1872px, noticeably wider than the 1400px-class ceilings common on similar sites.
- Nav height: {spacing.nav-height}, 56px on mobile, stepping to 64px and then 72px as the viewport widens.

### Grid & Container

- The page frame: {component.page-frame} ({colors.sand-40}) fills the browser edge to edge; {component.content-card} (white, rounded) sits inset from it and holds everything else.
- Stat-card row: three cards side by side at desktop, each pairing a customer logo with one large number.
- Pillar tab content: a two-column split, copy and bullet list on one side, a real product screenshot on the other, matching the pattern used across all four pillars.
- Customer testimonial carousel: a horizontally navigable row of real headshots grouped by role (Sales Leaders, Account Execs, SDRs, Rev Ops).

### Whitespace Philosophy

The page frame itself is the biggest whitespace decision on the site; every section inherits a defined edge rather than running to the browser's actual boundary. Inside that card, sections alternate between plain white and the lightest sand tones, with generous vertical padding between them, closer in spirit to a long-form editorial page than a dense product dashboard.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No border, no shadow | The sand page frame, plain content bands. |
| 1 (card) | White background only | Stat cards, testimonial cards, FAQ rows. |
| 2 (accent panel) | A gradient fill (amber to gold in the hero's AI-assistant demo, or a pillar's accent color in the tab sections) | The interactive chat-style demo near the top of the page, the tab accent bands. |
| 3 (floating nav) | Fixed position at the top of the viewport, sitting on {colors.sand-40} rather than a separate surface color | The navigation bar, which does not visually separate itself from the page frame the way a floating pill would. |

### Decorative Depth

- The gradient demo card: an amber-to-gold gradient panel in the hero holds an animated video of a chat-style AI assistant composing a prospecting list, the richest single color moment on the page.
- Product screenshots: real captured UI (a lead table, a workflow-trigger builder, a meeting-prep panel) rather than illustrated mockups, shown inside a plain rounded frame with no added chrome.
- Compliance badges: eight simple outline icons (a shield, a lock, a diamond, a circular seal) drawn specifically for each certification rather than pulled from a generic badge pack.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| {rounded.none} | 0px | The page frame, full-bleed content bands. |
| {rounded.xs} | 2px | Small inline elements. |
| {rounded.sm} | 4px | Rare, minor UI details. |
| {rounded.lg} | 8px | The dominant radius: buttons, tabs, most cards. |
| {rounded.xl} | 12px | Stat cards, testimonial cards. |
| {rounded.2xl} | 16px | The white content card itself. |
| {rounded.full} | 9999px | Used once on this page; Apollo's buttons are rounded rectangles, not pills. |

### Illustration & Photography Geometry

- Unlike sites that avoid photography entirely, Apollo leans on it: real headshots of named customers in the testimonial carousel, and a real photograph (people at a table with laptops and coffee) illustrating the "why buy five tools" section.
- Product screenshots run edge to edge inside a plain rounded frame, no browser-chrome dots, no drop shadow, just the rounded corner and the pillar's accent color bleeding in from behind.
- The four pillar-icon thumbnails (a paper plane, a magnet, layered documents, a handshake, roughly) are simple line icons rather than the fully rendered 3D objects some competitors use.

## Components

**`btn-primary`** — solid sunbeam button

Background {colors.sunbeam-60}, label {colors.sand-80}, type {typography.button}, rounded: {rounded.lg}, height 40px, padding 0 16px.

Hover lightens to sunbeam-20; active state darkens to sunbeam-70. A rounded rectangle, not a pill.

**`btn-secondary`** — outlined button

Transparent background, {colors.text-header} label, 1px {colors.sand-40} border, same type and radius as the primary button.

Pairs with {component.btn-primary} as "Learn more" beside "Get started for free."

### Cards & Containers

page-frame and content-card

The frame is flat {colors.sand-40} filling the viewport; the card is white with {rounded.2xl} corners, holding the entire page's content.

This pairing is the single most distinctive structural choice on the site.

**`pillar-tab`** — product-pillar switcher

Four tabs, each recoloring to its own accent (sunbeam, iris, rust, ocean) when active, {typography.mono-label} for the tab name, rounded: {rounded.lg}.

Switching tabs swaps the headline, the bullet list, the screenshot, and the accent band together.

**`stat-card`** — proof-point card

White background, the number set large in {colors.iris-100} regardless of which pillar it's near, a customer logo in the corner, rounded: {rounded.xl}.

**`testimonial-card`** — customer headshot card

A real photograph, a name, a title, and a company logo, grouped into role categories and browsable through a carousel.

### Navigation

**`nav-bar`** — top navigation

Sits on {colors.sand-40}, the same color as the page frame, so it reads as part of the frame rather than a separate floating object.

Full mega-menu on desktop (Solutions, Roles, Resources, Platform, each with sub-links and a promotional card); collapses to a hamburger menu on mobile, keeping only the logo and the primary sign-up button visible.

### Signature Components

**`ai-assistant-demo`** — hero gradient panel

An amber-to-gold gradient card holding a looping video of a chat-style assistant building a prospecting list and outreach sequence live.

**`compliance-badge`** — trust strip

Eight custom outline icons (GDPR, SOC 2, CCPA, ISO/IEC 27001, CASA Tier 2, CPRA, EU-US DPF, PCI DSS) on {colors.sand-10} cards.

**`footer-ai-links`** — agent-facing footer block

A row of pre-written prompts linking directly into ChatGPT, Claude, Perplexity, Grok, and Google's AI mode, each pre-filled with a request to summarize Apollo's site, plus a separate page (/llm-info) written for language models rather than human visitors.

## Do's and Don'ts

### Do

- Keep each product pillar tied to its own accent color (sunbeam, iris, rust, ocean) everywhere that pillar appears, not just inside the tab switcher.
- Use the sand page frame on every marketing page. It's the site's clearest structural signature and worth protecting.
- Reserve Season Mix for headlines only; letting it drift down into body sizes would blur the one place the type system is genuinely distinctive.
- Back every stat card and testimonial with a real, named customer and a specific number, matching the standard the top of the page already sets.
- Write new FAQ or support copy the way the pull quotes read, specific and sourced, rather than the way the current FAQ section reads.

### Don't

- Don't reach for ABC Diatype to carry a headline. It's a fine workhorse, but the type system's identity lives in Season Mix.
- Don't add a fifth accent color. Four pillars, four colors; a new one breaks the mapping a visitor has already learned.
- Don't round a button into a full pill. The rounded-rectangle at {rounded.lg} is the established button shape here, and switching would fight the rest of the shape language.
- Don't write FAQ answers that open by restating the question. It's the one part of this page that reads like search-optimized filler rather than something written for a visitor.
- Don't drop the page frame on a new template. A full-bleed section would look like a different product bolted onto this one.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Base | ≥ 375px | Mobile layout; nav collapses to hamburger; hero type starts at 44px. |
| tablet | ≥ 640px / 768px | Nav grows to 64px tall; type steps up (hero to 56px). |
| desktop-s | ≥ 1024px to 1250px | Full mega-menu nav appears; nav reaches 72px; hero type reaches 64px. |
| desktop | ≥ 1280px to 1440px | Hero type reaches 72px; two-column pillar layout reaches full width. |
| desktop-xl | ≥ 1536px to 1920px | Hero type reaches its maximum, 80px; body type steps from 14px to 16px. |

This system uses a custom, more granular breakpoint ladder (375, 640, 768, 1024, 1250, 1280, 1440, 1536, 1920px) rather than a standard four-step scale, and the exact pixel boundary for each named tier above wasn't confirmed with full certainty. Treat the named order as reliable and the exact pixel cutoffs as approximate.

### Touch Targets

- Buttons hold a steady 40px height across breakpoints, on the small side of common touch-target guidance but consistent everywhere they appear.
- The hamburger menu and primary sign-up button both stay full-size on mobile; neither shrinks to accommodate the smaller nav bar.

### Collapsing Strategy

- The full mega-menu (Solutions, Roles, Resources, Platform, each with sub-links) collapses entirely into a hamburger icon below desktop-s; there's no intermediate simplified state.
- The hero's two-column layout (headline and signup form over the gradient demo card) stacks to a single column on mobile, with the demo card moving below the form.
- The two-column pillar-tab layout (copy plus screenshot) stacks to copy-then-screenshot on narrow viewports.
- The three stat cards stack vertically rather than compressing to fit three across.

### Media Behavior

- The hero's chat-assistant animation is a .webm video with a static image fallback for the first frame, not a Lottie or CSS animation.
- Customer headshots and logos keep a fixed aspect ratio across breakpoints.
- Product screenshots inside the pillar tabs scale down proportionally rather than cropping.

## Iteration Guide

1. Decide which of the four pillars a new section belongs to before choosing a color; the accent should follow the pillar, not the other way around.
2. Keep new headlines in Season Mix and new body or UI text in ABC Diatype. Don't blend them within the same text block.
3. Reference tokens directly ({colors.sunbeam-60}, {component.btn-primary}, {rounded.lg}) rather than restating raw values in prose.
4. Any new proof point (a stat, a quote, a case study) needs a real customer name attached before it ships; the page has no anonymous claims to model from.
5. If writing FAQ or help copy, model it on the pull quotes and stat cards, not on the existing FAQ section, which is the one part of the system worth deviating from.
6. Keep the sand page frame and white content card on any new marketing template; it's the single element that makes this site recognizable at a glance.

## Known Gaps

- The pricing page (/pricing) returned a genuine client-side application error in every automated visit made for this document, both on first load and after a reload. Its layout and content aren't documented here as a result.
- Founders Grotesk (the non-mono cut), Tiempos, Söhne, Söhne Mono, and four numbered weight-named grotesks are all loaded as @font-face declarations on the homepage but weren't found applied to any element checked. They may serve other marketing pages, the product dashboard, or the Magazine and Academy content sections, none of which were reviewed here.
- The exact pixel boundary for each named breakpoint tier (tablet, desktop-s, desktop, desktop-xl) is inferred from a broader set of confirmed media-query widths rather than confirmed one to one; treat the Responsive Behavior table as approximate on exact cutoffs.
- This document covers the homepage only, spot-checked on mobile. The Solutions, Roles, Resources, Magazine, Academy, and individual product pages, along with the authenticated product itself, weren't reviewed.
- Whether the pillar-tab switcher changes content in place or navigates to an anchor on the same page was inferred from the markup (it uses in-page anchor links like #outbound-tab) rather than confirmed by driving the interaction directly.
