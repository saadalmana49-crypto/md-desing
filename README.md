<div align="center">

# narvo

**Real design systems, installed into your AI coding agent.**

36 design systems documented from live product websites — measured hex values, type
scales, radii, shadow stacks, component CSS, breakpoints. So your agent can build
in a specific visual language instead of inventing another grey card with a purple gradient.

[Browse the library](https://narvo.pages.dev) · [Install](#install) · [What's inside](#the-library)

</div>

---

## The problem

Ask any coding agent for a landing page and you get the same page. Indigo-to-violet
gradient, Inter, three feature cards with emoji, uniformly rounded corners. Not because
the model has bad taste — because "make it look good" carries no information, so it
falls back on the average of its training data.

"Make it look like Linear" carries a lot of information. But the agent has to *have*
Linear's system: that the canvas is `#010102` and not `#000`, that there are four
distinct surface greys stacked above it, that display type tracks at `-3px`.

That is what this is. 36 systems, 687 documented colors, and the prose
explaining why the values cohere.

## Install

<details open>
<summary><b>Any agent — the <code>skills</code> CLI</b> (easiest)</summary>

Detects which agents you have installed and places the skill for each:

```bash
npx skills add YOUR_GITHUB_USERNAME/narvo
```
</details>

<details>
<summary><b>Claude Code</b></summary>

Claude Code reads `SKILL.md` natively.

```bash
# available in every project
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/install.sh | sh

# or just this project
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/install.sh | NARVO_TARGET=project sh
```

Or by hand:

```bash
git clone --depth 1 https://github.com/YOUR_GITHUB_USERNAME/narvo.git /tmp/narvo
mkdir -p ~/.claude/skills && cp -R /tmp/narvo/skills/narvo ~/.claude/skills/
rm -rf /tmp/narvo
```

Verify with `/skills`.
</details>

<details>
<summary><b>OpenAI Codex CLI</b></summary>

Codex reads `AGENTS.md` from the repository root.

```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/install.sh | NARVO_AGENT=codex sh
```

That clones the references to `.narvo/`, appends a section to `AGENTS.md`, and adds
`.narvo/` to `.gitignore`.
</details>

<details>
<summary><b>Cursor</b></summary>

```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/install.sh | NARVO_AGENT=cursor sh
```

Writes `.cursor/rules/narvo.mdc` pointing at `.narvo/skills/narvo/`.
</details>

<details>
<summary><b>Windsurf · Cline · Copilot · Gemini CLI</b></summary>

Same installer, different target file:

```bash
curl -fsSL .../install.sh | NARVO_AGENT=windsurf sh   # .windsurf/rules/narvo.md
curl -fsSL .../install.sh | NARVO_AGENT=cline    sh   # .clinerules/narvo.md
curl -fsSL .../install.sh | NARVO_AGENT=copilot  sh   # .github/copilot-instructions.md
curl -fsSL .../install.sh | NARVO_AGENT=gemini   sh   # GEMINI.md
```
</details>

<details>
<summary><b>Anything else</b></summary>

It is plain Markdown with YAML frontmatter. Clone it where the agent can read, and
tell the agent when to look:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/narvo.git
```

Or pull one file straight from the CDN, no install:

```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/skills/narvo/references/linear.md
curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/catalog.json
```
</details>

> [!NOTE]
> Replace `YOUR_GITHUB_USERNAME` throughout with your account:
> ```bash
> sed -i '' 's/YOUR_GITHUB_USERNAME/your-name/g' $(grep -rl YOUR_GITHUB_USERNAME . --exclude-dir=.git)
> ```
> (drop the `''` after `-i` on Linux)

## Using it

Name a product as a style target:

```
> Build the pricing page. Use the Linear system from narvo.
```

Or describe the character and let the agent pick:

```
> I want something warm and editorial, not another dark SaaS dashboard.
> Pick a system from narvo and show me two options.
```

Or pull tokens into a project you already have:

```
> Read narvo's stripe reference and emit its palette and type scale
> as CSS custom properties in src/styles/tokens.css
```

## The library

| Slug | System | Category | Mode | Notes |
|---|---|---|---|---|
| `apollo` | Apollo | SaaS | light | A taupe frame around a white content card. Season Mix headlines, one accent hue per product pillar. |
| `arcads` | Arcads | AI | light | White with a mint-green primary and a #121212 dark section. Söhne Kräftig display. |
| `clay` | Clay | SaaS | light | Cream #fffaf0 canvas with a seven-hue brand palette — pink, teal, lavender, peach, ochre, mint, coral. |
| `cloudflare` | Cloudflare | Infrastructure | light | Orange-on-white infrastructure marketing. FT Kunst Grotesk, flat #f0f0f0 surfaces, and a full dark-mode mirror of the same tokens. |
| `clypmint` | Clypmint | AI | dark | Near-black canvas with a champagne accent. Inter Tight over JetBrains Mono, hairline #242420 borders. |
| `cohere` | Cohere | AI | light | Enterprise-AI white with coral accents, deep-green and navy section blocks, 96px hero display. |
| `creatify` | Creatify | AI | light | Violet primary on white. General Sans at 80px display with IBM Plex Mono labels. |
| `cursor` | Cursor | Dev Tools | light | Warm paper canvas #f7f7f4, burnt-orange primary, and a five-color agent-timeline palette. |
| `cutpunk` | Cutpunk | AI | dark | Acid lime on charcoal. Druk Wide display over Manrope body — the loudest system in the set. |
| `dodo-payments` | Dodo Payments | Fintech | light | Off-white fintech with a green primary and a five-hue pastel tint system for feature cards. |
| `elevenlabs` | ElevenLabs | AI | light | Stone-grey neutrals, weight-300 display type, and a five-hue pastel gradient set for imagery. |
| `figma` | Figma | Design | light | Pure black on white with six pastel content blocks. 86px Figma Sans at weight 340. |
| `framer` | Framer | Design | dark | A #090909 canvas, 110px display at 0.85 line-height and -5.5px tracking, four-stop gradient accents. |
| `inkeep` | Inkeep | AI | light | Warm-white documentation aesthetic. Neue Haas Grotesk display, blue primary, near-black #231f20 ink. |
| `intercom` | Intercom | SaaS | light | Warm linen canvas #f5f1ec, black ink, Fin orange, plus a six-hue report palette. |
| `kast` | Kast | Fintech | dark | True-black crypto-card site. Instrument Sans Variable with glow-shadow button hovers. |
| `linear` | Linear | SaaS | dark | A #010102 near-void canvas, four stacked surface greys, indigo primary, -3px display tracking. |
| `lovable` | Lovable | Dev Tools | light | Parchment #f7f4ed and an opacity-driven grey scale — every grey is #1c1c1c at a different alpha. |
| `meuze` | Meuze | AI | dark | Data-dark #0b1014 with electric blue CTAs. Geist throughout, 23px card radius against 8px buttons. |
| `modal` | Modal | Infrastructure | dark | Terminal black with a phosphor-green accent, Goga with ss01, and a seven-stop dataviz ramp. |
| `notion` | Notion | SaaS | light | White with navy ink and a full set of pastel card tints — peach, rose, mint, lavender, sky. |
| `openai-dark` | OpenAI (Dark) | AI | dark | Black canvas, #1f1f1f surfaces, alpha-stepped white ink, and a twelve-hue brand ramp. |
| `pinecone` | Pinecone | AI | light | Pure-white vector-database site. Ultramarine #002bff primary, GT Planar with mono accents. |
| `resend` | Resend | Dev Tools | dark | True black with a Domaine Display serif at 96px, alpha-based hairlines, and four glow accents. |
| `runway` | Runway | AI | light | Gallery white, pure monochrome. No accent hue at all — hierarchy carried entirely by type and hairlines. |
| `shopify` | Shopify | Commerce | dark | Dark-first with forest-teal undertones. 96px Haas at weight 330, neon mint reserved for focus rings. |
| `soundcloud` | SoundCloud | Media | dark | The orange. #f50 on #121212, with a light #f3f3f3 surface mode for player chrome. |
| `spotify` | Spotify | Media | dark | Content-first darkness. #121212 shell, pill-and-circle geometry, green reserved for functional highlights. |
| `stripe` | Stripe | Fintech | light | Navy ink on white with a violet primary. Weight-300 display type and blue-tinted multi-layer shadows. |
| `supabase` | Supabase | Dev Tools | dual | The green. #3ecf8e on white or #1c1c1c, Circular display, and a wide accent set for docs categories. |
| `superhuman` | Superhuman | SaaS | light | A white body under a #1b1938 purple gradient hero. Warm cream buttons instead of bright CTAs. |
| `together-ai` | Together AI | AI | dual | A pastel-gradient light world for product, #010120 midnight for research. Magenta and orange accents. |
| `vercel` | Vercel | Dev Tools | light | Shadow-as-border: box-shadow 0 0 0 1px replaces every CSS border. Geist with -2.4px display tracking. |
| `warp` | Warp | Dev Tools | dark | Warm near-black rather than cold. Parchment #faf9f6 text, Matter Regular everywhere, almost no color. |
| `wise` | Wise | Fintech | light | Bright green #9fe870 on white, 126px/900 display type, and a full semantic state palette. |
| `wispr-flow` | Wispr Flow | AI | light | Cream #ffffeb canvas, deep-teal accent, and a Garamond serif pairing. Warm rather than techy. |

## What a reference contains

Every file is YAML frontmatter plus prose.

```yaml
---
name: Linear
slug: linear
url: https://linear.app
category: SaaS
mode: dark                # light · dark · dual
fonts: ['Linear Display', 'Inter']
preview: { bg: '#010102', fg: '#f7f8f8', accent: '#5e6ad2' }
summary: >-
  A #010102 near-void canvas, four stacked surface greys, indigo primary…
colors:                   # the measured palette
  primary: '#5e6ad2'
  canvas:  '#010102'
  surface-1: '#0f1011'
  …
typography:               # size, weight, line-height, tracking per role
  display-xl: { fontFamily: Linear Display, fontSize: 80px, fontWeight: 600, … }
# plus, where documented: spacing, radius, elevation, motion, components
---
```

The prose covers visual theme, color roles, typography rules, component CSS, layout,
elevation, do's and don'ts, and responsive behavior.

Two things to know when reading:

- Values marked *(inferred from screenshot)* were read off a rendering rather than
  extracted from source CSS. Close, not exact.
- Some files carry a **Known Gaps** section listing what could not be measured. Read
  it before treating a file as complete.

`catalog.json` at the repo root is the whole set parsed into one machine-readable
index — useful if you want to build something on top of this.

## Repository layout

```
skills/narvo/
  SKILL.md               the skill entry point — index + how to use a reference
  references/*.md        36 design systems, one file each
catalog.json             all frontmatter, parsed — generated, do not hand-edit
scripts/build-catalog.mjs  regenerates catalog.json (node, zero deps)
install.sh               multi-agent installer
index.html assets/       the website — static, no backend
_headers _redirects wrangler.toml   Cloudflare Pages config
```

## The website

Static HTML, CSS and one JavaScript file. No framework, no build step, no backend,
no analytics, no cookies. It fetches `catalog.json` and reads the same Markdown
files the skill installs — the repository is the site.

Its own visual system is the Meuze reference in this library, applied to itself.

```bash
npx serve .                          # local preview
npx wrangler pages project create narvo
npx wrangler pages deploy .          # deploy
```

Or connect the repo in the Cloudflare dashboard: **build command** empty,
**output directory** `/`.

## Contributing

New systems welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) — the short version is:
add `skills/narvo/references/<slug>.md` with the frontmatter above, run
`node scripts/build-catalog.mjs`, open a PR. Document what the site actually does;
mark anything you inferred.

## Scope and attribution

These documents describe the visual language of public websites for the purpose of
design reference and education. They contain **no source code, assets, fonts, or copy**
from those sites.

Product names and trademarks belong to their respective owners. None of these companies
endorses or is affiliated with this project. Use these references to inform your own
design work — not to pass work off as another company's, and not to build something a
visitor would mistake for the real product.

Typefaces are named, not distributed. Most are commercial or proprietary; license them
if you intend to use them, or substitute and say so.

## License

[MIT](LICENSE) — the tooling, the site, and the documents.
