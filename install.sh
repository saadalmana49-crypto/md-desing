#!/usr/bin/env sh
# Narvo — design system references for AI coding agents.
#
#   curl -fsSL https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/narvo/main/install.sh | sh
#
# Options (environment variables):
#   NARVO_TARGET=user|project   install for all projects, or just this one (default: user)
#   NARVO_AGENT=claude|codex|cursor|windsurf|cline|copilot|gemini|plain
#   NARVO_REPO=owner/name       install from a fork
#   NARVO_SRC=<git url>         install from an arbitrary git remote or local path
#
set -eu

REPO="${NARVO_REPO:-YOUR_GITHUB_USERNAME/narvo}"
TARGET="${NARVO_TARGET:-user}"
AGENT="${NARVO_AGENT:-claude}"
SRC="${NARVO_SRC:-https://github.com/${REPO}.git}"

say()  { printf '%s\n' "$*"; }
die()  { printf 'error: %s\n' "$*" >&2; exit 1; }

command -v git >/dev/null 2>&1 || die "git is required but was not found on PATH."

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT INT TERM

say "Fetching ${REPO}…"
git clone --depth 1 --quiet "$SRC" "$TMP/narvo" \
  || die "could not clone ${SRC}"

SKILL_SRC="$TMP/narvo/skills/narvo"
[ -f "$SKILL_SRC/SKILL.md" ] || die "the clone does not contain skills/narvo/SKILL.md"
COUNT=$(ls -1 "$SKILL_SRC/references" | wc -l | tr -d ' ')

case "$AGENT" in
  claude)
    case "$TARGET" in
      user)    DEST="$HOME/.claude/skills" ;;
      project) DEST=".claude/skills" ;;
      *) die "NARVO_TARGET must be 'user' or 'project'" ;;
    esac
    mkdir -p "$DEST"
    rm -rf "$DEST/narvo"
    cp -R "$SKILL_SRC" "$DEST/narvo"
    say ""
    say "Installed ${COUNT} design systems to ${DEST}/narvo"
    say "Restart Claude Code, then try:"
    say "  \"build the pricing page using the Linear system from narvo\""
    ;;

  plain|codex|cursor|windsurf|cline|copilot|gemini)
    DEST=".narvo"
    rm -rf "$DEST"
    mkdir -p "$DEST"
    cp -R "$TMP/narvo/skills" "$DEST/skills"
    cp "$TMP/narvo/catalog.json" "$DEST/catalog.json"
    grep -qxF '.narvo/' .gitignore 2>/dev/null || echo '.narvo/' >> .gitignore

    NOTE="When the user names a product as a visual target (\"make it look like Linear\"),
or asks for a design direction, read .narvo/skills/narvo/SKILL.md for the index
of available systems, then read .narvo/skills/narvo/references/<slug>.md and
build from its documented colors, type scale, radii, and component specs."

    case "$AGENT" in
      codex)    F="AGENTS.md" ;;
      gemini)   F="GEMINI.md" ;;
      copilot)  mkdir -p .github; F=".github/copilot-instructions.md" ;;
      cursor)   mkdir -p .cursor/rules; F=".cursor/rules/narvo.mdc" ;;
      windsurf) mkdir -p .windsurf/rules; F=".windsurf/rules/narvo.md" ;;
      cline)    mkdir -p .clinerules; F=".clinerules/narvo.md" ;;
      plain)    F="" ;;
    esac

    if [ -n "$F" ]; then
      if [ "$AGENT" = "cursor" ]; then
        printf -- '---\ndescription: Design system references — use when the user names a product as a visual target\nalwaysApply: false\n---\n\n%s\n' "$NOTE" > "$F"
      elif [ "$AGENT" = "windsurf" ]; then
        printf -- '---\ntrigger: model_decision\ndescription: Design system references for building UI in a specific product visual language\n---\n\n%s\n' "$NOTE" > "$F"
      else
        printf '\n## Design system references (narvo)\n\n%s\n' "$NOTE" >> "$F"
      fi
      say ""
      say "Installed ${COUNT} design systems to .narvo/ and pointed ${F} at them."
    else
      say ""
      say "Installed ${COUNT} design systems to .narvo/"
      say "Point your agent's instruction file at .narvo/skills/narvo/SKILL.md"
    fi
    ;;

  *) die "unknown NARVO_AGENT '$AGENT'" ;;
esac
