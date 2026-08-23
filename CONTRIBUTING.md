# Contributing

New design systems are welcome. So are corrections to existing ones — a wrong hex is
worse than a missing one.

## Adding a system

1. Create `skills/narvo/references/<slug>.md`. The slug is lowercase, hyphenated, and
   becomes the filename, the URL, and the identifier the agent uses. Keep it stable.

2. Open with this frontmatter. The first eight keys are required; everything after
   `summary` is the token block and varies by what you could measure.

   ```yaml
   ---
   name: 'Linear'
   slug: linear
   url: https://linear.app
   category: 'SaaS'        # AI · Commerce · Design · Dev Tools · Fintech
                           # Infrastructure · Media · SaaS
   mode: dark              # light · dark · dual
   fonts:
     - 'Linear Display'
     - 'Inter'
   preview:                # drives the card thumbnail on the site
     bg: '#010102'
     fg: '#f7f8f8'
     accent: '#5e6ad2'
   summary: >-
     One sentence. What makes this system specific — a value, a technique,
     a structural choice. Not "a modern, clean design system."
   colors:
     primary: '#5e6ad2'
     canvas: '#010102'
     # …
   typography:
     display-xl:
       fontFamily: Linear Display
       fontSize: 80px
       fontWeight: 600
       lineHeight: 1.05
       letterSpacing: -3.0px
   # plus, where documented: spacing, radius/rounded, elevation, motion, components
   ---
   ```

3. Write the body. Either section layout in the library is fine — match whichever
   neighbouring file you prefer — but cover: visual theme, color roles, typography
   rules, components, layout, elevation, do's and don'ts, responsive behavior.

4. Regenerate the index and check it passes:

   ```bash
   node scripts/build-catalog.mjs
   ```

   It validates required keys and that `slug` matches the filename. A non-zero exit
   means something is wrong.

5. Preview locally, open the card, read all three tabs:

   ```bash
   npx serve .
   ```

## What makes a good reference

**Measure, don't guess.** Pull values from computed styles and the stylesheet, not
from a screenshot, wherever you can. Where you did read off a rendering, mark it
`(inferred from screenshot)` inline. Where you could not determine something at all,
say so in a `## Known Gaps` section. A file that admits its gaps is more useful than
one that quietly invents.

**Explain why the values cohere.** The tokens alone produce a flat imitation. The
reason Vercel replaces borders with `box-shadow 0 0 0 1px`, the reason every Lovable
grey is one hex at a different alpha — that reasoning is the part an agent cannot
infer, and it is the part that makes the output read as the real thing.

**Be specific in the don'ts.** "Don't use other radii" beats "maintain consistency."

**Mark incomplete work.** If you can only document part of a system, add
`coverage: partial` to the frontmatter and a `## Known Gaps` section saying exactly
what is missing. The site badges those cards and warns in the token view. A partial
reference that says so is welcome; one that pretends to be complete is not.

**Name typefaces honestly.** Most of these are commercial. Name the real face and
note a plausible substitute; never imply a font ships with this repository.

## Scope

This documents *visual language* — color, type, spacing, component patterns.

Do not add: source code, CSS files, images, icons, fonts, or copy lifted from a
site. Do not add references intended to help someone clone a product wholesale or
build a page a visitor would mistake for the real one. Do not add logos or wordmarks.

## Style

Markdown, wrapped around 90 columns, no trailing whitespace. Hex values lowercase.
Frontmatter strings single-quoted. Run the build script before opening the PR.
