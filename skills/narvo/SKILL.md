---
name: narvo
description: >-
  Build UI that matches a specific real product's visual language — Linear, Stripe,
  Vercel, Figma, Spotify, Notion and 30 more. Use when the user names a product as a
  style target ("make it look like Linear", "Stripe-style pricing page", "give this a
  Vercel feel"), asks for a design direction or visual identity for a new interface, or
  wants a design system, color palette, type scale, or component tokens to build
  against. Each reference documents measured colors, typography, spacing, radii,
  elevation, components, and responsive behavior from the real site.
license: MIT
---

# Narvo

A reference library of <!--COUNT-->54<!--/COUNT--> design systems documented from real product websites. Each one
records what the site actually does — measured hex values, type scales, radii, shadow
stacks, component CSS, breakpoints — so an agent can build in that visual language
instead of inventing a generic one.

## When to use this

- The user names a product as a style target: *"make it look like Linear"*, *"Stripe-style checkout"*.
- The user asks for a visual direction and has no strong opinion — offer two or three from the table below rather than defaulting to house style.
- The user needs concrete tokens (palette, type scale, spacing, radii, elevation) to build against.
- The user is auditing an existing UI for consistency and wants a documented system to compare with.

Do **not** use this to clone a competitor's site wholesale, or to reproduce a company's
logo, wordmark, proprietary fonts, or copy. These files document *visual language* —
color, type, spacing, and component patterns. See [Scope and attribution](#scope-and-attribution).

## How to use this

1. **Pick a system.** Match on the user's named product, or on the character they
   describe. Consult the table below; `mode` tells you whether the source is
   light, dark, or runs both.
2. **Read the whole file** — `references/<slug>.md`. Do not work from the frontmatter
   alone. The prose carries the reasoning that makes the values cohere: *why*
   Vercel replaces borders with shadows, *why* Lovable derives every grey from one
   hex at varying alpha. Reproducing values without that reasoning yields a
   flat imitation.
3. **Lift the tokens first.** Start from the frontmatter block — `colors`,
   `typography`, `radius`/`rounded`, `spacing`, `elevation`, `components` — and
   define them as CSS custom properties or a theme object before writing components.
4. **Honor the Do's and Don'ts section.** It is the part most often skipped and the
   part that most determines whether the result reads as the real thing.
5. **Substitute fonts honestly.** Most of these use licensed or proprietary
   typefaces. Check the `fonts` list, then pick the closest available face and
   say which substitution you made. Never claim you are using a font you are not.

## Reference index

<!-- BEGIN:index -->
| Slug | System | Category | Mode | Notes |
|---|---|---|---|---|
| `adyen` | Adyen | Fintech | dual | Deep navy ink on white with a signal-green primary, a paired dark theme, and a custom Adyen/AdyenMono pairing. |
| `amazon` | Amazon | Commerce | light | The retail workhorse: Arial throughout, squircle gold CTAs, dense information over ornament. |
| `apollo` | Apollo | SaaS | light | A taupe frame around a white content card. Season Mix headlines, one accent hue per product pillar. |
| `arcads` | Arcads | AI | light | White with a mint-green primary and a #121212 dark section. Söhne Kräftig display. |
| `attio` | Attio | SaaS | light | Near-monochrome CRM marketing — #1e1e21 on white, with pale #8fb8ff the only chromatic note. |
| `clay` | Clay | SaaS | light | Cream #fffaf0 canvas with a seven-hue brand palette — pink, teal, lavender, peach, ochre, mint, coral. |
| `cloudflare` | Cloudflare | Infrastructure | light · *partial* | Orange-on-white infrastructure marketing. FT Kunst Grotesk, flat #f0f0f0 surfaces, and a full dark-mode mirror of the same tokens. |
| `clypmint` | Clypmint | AI | dark | Near-black canvas with a champagne accent. Inter Tight over JetBrains Mono, hairline #242420 borders. |
| `cohere` | Cohere | AI | light | Enterprise-AI white with coral accents, deep-green and navy section blocks, 96px hero display. |
| `creatify` | Creatify | AI | light · *partial* | Violet primary on white. General Sans at 80px display with IBM Plex Mono labels. |
| `cursor` | Cursor | Dev Tools | light | Warm paper canvas #f7f7f4, burnt-orange primary, and a five-color agent-timeline palette. |
| `cutpunk` | Cutpunk | AI | dark | Acid lime on charcoal. Druk Wide display over Manrope body — the loudest system in the set. |
| `datadog` | Datadog | Infrastructure | dual · *partial* | Observability purple #632ca6 on white, NationalWeb throughout, with a paired dark surface set. |
| `dodo-payments` | Dodo Payments | Fintech | light | Off-white fintech with a green primary and a five-hue pastel tint system for feature cards. |
| `dribbble` | Dribbble | Design | dual | Dribbble pink on near-black ink, Mona Sans from 52px display down to 12px, dense 24px-gutter card grid. |
| `duolingo` | Duolingo | Consumer | dual · *partial* | Bright #58ce00 green, custom duolingo-sans at weight 700, and character illustration as a load-bearing element. |
| `elevenlabs` | ElevenLabs | AI | light | Stone-grey neutrals, weight-300 display type, and a five-hue pastel gradient set for imagery. |
| `figma` | Figma | Design | light | Pure black on white with six pastel content blocks. 86px Figma Sans at weight 340. |
| `framer` | Framer | Design | dark | A #090909 canvas, 110px display at 0.85 line-height and -5.5px tracking, four-stop gradient accents. |
| `getdesign-md` | getdesign.md | Dev Tools | dark | True-black canvas with a candy-pink accent and a pixel display cut alongside Geist. |
| `google` | Google | Consumer | light | Google Sans over Arial, #0b57d0 for actions, #f8f9fa surfaces — restraint at planetary scale. |
| `hermes-agent` | Hermes Agent | AI | dual | Pure #0000f2 blue against paper white, serif display over mono, glitch-art and classical illustration. |
| `inkeep` | Inkeep | AI | light | Warm-white documentation aesthetic. Neue Haas Grotesk display, blue primary, near-black #231f20 ink. |
| `instagram` | Instagram | Consumer | light | System font, white canvas, #0064e0 actions and 16px radii — the chrome disappears behind the photos. |
| `intercom` | Intercom | SaaS | light | Warm linen canvas #f5f1ec, black ink, Fin orange, plus a six-hue report palette. |
| `kast` | Kast | Fintech | dark | True-black crypto-card site. Instrument Sans Variable with glow-shadow button hovers. |
| `linear` | Linear | SaaS | dark | A #010102 near-void canvas, four stacked surface greys, indigo primary, -3px display tracking. |
| `lovable` | Lovable | Dev Tools | light | Parchment #f7f4ed and an opacity-driven grey scale — every grey is #1c1c1c at a different alpha. |
| `meuze` | Meuze | AI | dark | Data-dark #0b1014 with electric blue CTAs. Geist throughout, 23px card radius against 8px buttons. |
| `mistral` | Mistral AI | AI | dual · *partial* | Warm off-white #fbfbf8 with a signal-orange accent; ALTMistral display, Space Mono labels, OKLCH text ramp. |
| `modal` | Modal | Infrastructure | dark | Terminal black with a phosphor-green accent, Goga with ss01, and a seven-stop dataviz ramp. |
| `netflix` | Netflix | Media | dark | The red on black. Netflix Sans, alpha-stepped white text, and artwork carrying every bit of the color. |
| `nike` | Nike | Commerce | light | Helvetica Neue, #f5f5f5 canvas, black CTAs and a lime accent — typography and product photography only. |
| `notion` | Notion | SaaS | light | White with navy ink and a full set of pastel card tints — peach, rose, mint, lavender, sky. |
| `openai-dark` | OpenAI (Dark) | AI | dark | Black canvas, #1f1f1f surfaces, alpha-stepped white ink, and a twelve-hue brand ramp. |
| `pinecone` | Pinecone | AI | light | Pure-white vector-database site. Ultramarine #002bff primary, GT Planar with mono accents. |
| `posthog` | PostHog | Dev Tools | light | Warm putty #e5e7e0 canvas, rounded RoundHog display, ochre and blue accents, isometric 3D illustration. |
| `resend` | Resend | Dev Tools | dark | True black with a Domaine Display serif at 96px, alpha-based hairlines, and four glow accents. |
| `runway` | Runway | AI | light | Gallery white, pure monochrome. No accent hue at all — hierarchy carried entirely by type and hairlines. |
| `samsung` | Samsung | Commerce | light | SamsungOne exclusively, pure black on white, #006bea for every action — maximum contrast, minimum palette. |
| `shadcn-ui` | shadcn/ui | Dev Tools | dual | The component-library reference: a complete semantic token pair (background/foreground, card, muted, popover) for both themes. |
| `shopify` | Shopify | Commerce | dark | Dark-first with forest-teal undertones. 96px Haas at weight 330, neon mint reserved for focus rings. |
| `soundcloud` | SoundCloud | Media | dark | The orange. #f50 on #121212, with a light #f3f3f3 surface mode for player chrome. |
| `spotify` | Spotify | Media | dark | Content-first darkness. #121212 shell, pill-and-circle geometry, green reserved for functional highlights. |
| `stripe` | Stripe | Fintech | light | Navy ink on white with a violet primary. Weight-300 display type and blue-tinted multi-layer shadows. |
| `supabase` | Supabase | Dev Tools | dual | The green. #3ecf8e on white or #1c1c1c, Circular display, and a wide accent set for docs categories. |
| `superhuman` | Superhuman | SaaS | light | A white body under a #1b1938 purple gradient hero. Warm cream buttons instead of bright CTAs. |
| `together-ai` | Together AI | AI | dual | A pastel-gradient light world for product, #010120 midnight for research. Magenta and orange accents. |
| `vercel` | Vercel | Dev Tools | light | Shadow-as-border: box-shadow 0 0 0 1px replaces every CSS border. Geist with -2.4px display tracking. |
| `warp` | Warp | Dev Tools | dark | Warm near-black rather than cold. Parchment #faf9f6 text, Matter Regular everywhere, almost no color. |
| `whatsapp` | WhatsApp | Consumer | dual | That green, #25d366, over a white or near-black canvas with the variable WhatsApp Sans. |
| `wise` | Wise | Fintech | light | Bright green #9fe870 on white, 126px/900 display type, and a full semantic state palette. |
| `wispr-flow` | Wispr Flow | AI | light | Cream #ffffeb canvas, deep-teal accent, and a Garamond serif pairing. Warm rather than techy. |
| `zed` | Zed | Dev Tools | dual | An editor site that reads like a document — serif and mono pairing, periwinkle #5c78e2 accent, paired dark theme. |
<!-- END:index -->

## File anatomy

Every reference file opens with YAML frontmatter and continues as prose:

```yaml
name: Linear          # display name
slug: linear          # file name, stable identifier
url: https://...      # the site the system was documented from
category: SaaS        # AI · Commerce · Design · Dev Tools · Fintech · Infrastructure · Media · SaaS
mode: dark            # light · dark · dual
fonts: [...]          # typefaces used by the source
preview: {bg, fg, accent}
summary: >-           # one line
colors: {...}         # the measured palette
typography: {...}     # type scale with size, weight, line-height, tracking
# plus, where documented: spacing, radius/rounded, elevation, motion, components
```

Prose sections vary slightly between the two documentation formats in the set, but
every file covers: visual theme, color roles, typography rules, components, layout,
elevation, do's and don'ts, and responsive behavior.

Two values worth knowing about:

- Entries marked *(inferred from screenshot)* were read off a rendering rather than
  extracted from source CSS. Treat them as close, not exact.
- Some files carry a **Known Gaps** section listing what could not be measured.
  Read it before treating a file as complete.
- Some files are marked `coverage: partial` in their frontmatter and appear with a
  *partial* tag in the index below. Their token blocks are complete and usable, but
  the prose was truncated at the source, so some of components, layout, do's/don'ts,
  or responsive guidance is missing. Build those from the tokens and say what you
  had to decide yourself.

## Working from a reference

A reasonable order of operations:

```
1. Read references/<slug>.md end to end.
2. Emit the palette + type scale as CSS variables / theme tokens.
3. Build the primitives: button, input, card, link, nav.
4. Compose the layout using the documented container width, grid, and section padding.
5. Re-read Do's and Don'ts. Fix what drifted.
```

When the user's product needs a color the source system does not define — a
destructive red where none is documented, say — derive it to match the palette's
saturation and lightness rather than dropping in a default. Then tell the user you
added it.

## Scope and attribution

These documents describe the visual language of public websites for the purpose of
design reference and education. They contain no source code, assets, fonts, or
copy from those sites.

Product names and trademarks belong to their respective owners. None of these
companies endorses or is affiliated with this library. Use these references to
inform your own design work — not to pass work off as another company's, and not
to build something a visitor would mistake for the real product.
