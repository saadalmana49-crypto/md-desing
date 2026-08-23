#!/usr/bin/env node
// Regenerates catalog.json from skills/narvo/references/*.md
// Zero dependencies — run with: node scripts/build-catalog.mjs
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REF_DIR = join(ROOT, "skills/narvo/references");
const REF_REL = "skills/narvo/references";

/* ---------- minimal YAML-subset parser -------------------------------- */
/* Handles what these frontmatter blocks actually use: nested maps, "- "
   sequences, quoted and bare scalars, ">-" folded blocks, # comments.     */

const unquote = (s) => {
  s = s.trim();
  if (s.length > 1 && ((s[0] === "'" && s.at(-1) === "'") || (s[0] === '"' && s.at(-1) === '"'))) {
    return s.slice(1, -1).replace(s[0] === "'" ? /''/g : /\\"/g, s[0]);
  }
  return s;
};

const stripComment = (s) => {
  let q = null;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === q) q = null; }
    else if (c === "'" || c === '"') q = c;
    else if (c === "#" && (i === 0 || /\s/.test(s[i - 1]))) return s.slice(0, i);
  }
  return s;
};

const indentOf = (l) => l.length - l.trimStart().length;

function parseBlock(lines, i, indent) {
  // returns [value, nextIndex]; value is an object or an array
  const isSeq = lines[i] !== undefined && lines[i].trimStart().startsWith("- ");
  const out = isSeq ? [] : {};
  while (i < lines.length) {
    const raw = lines[i];
    if (!raw.trim()) { i++; continue; }
    const ind = indentOf(raw);
    if (ind < indent) break;
    if (ind > indent) { i++; continue; } // defensive: skip stray deeper lines
    const line = stripComment(raw).trim();
    if (!line) { i++; continue; }

    if (line.startsWith("- ")) {
      out.push(unquote(line.slice(2)));
      i++;
      continue;
    }
    const m = line.match(/^([^:]+):\s*(.*)$/);
    if (!m) { i++; continue; }
    const key = unquote(m[1]);
    const rest = m[2];

    if (rest === ">-" || rest === ">" || rest === "|" || rest === "|-") {
      const buf = [];
      i++;
      while (i < lines.length && (!lines[i].trim() || indentOf(lines[i]) > indent)) {
        if (lines[i].trim()) buf.push(lines[i].trim());
        i++;
      }
      out[key] = buf.join(" ");
      continue;
    }
    if (rest === "") {
      // nested map or sequence on following lines
      let j = i + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j < lines.length && indentOf(lines[j]) > indent) {
        const [val, next] = parseBlock(lines, j, indentOf(lines[j]));
        out[key] = val;
        i = next;
      } else { out[key] = null; i++; }
      continue;
    }
    out[key] = unquote(rest);
    i++;
  }
  return [out, i];
}

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return [null, text];
  const lines = m[1].split(/\r?\n/);
  const [obj] = parseBlock(lines, 0, 0);
  return [obj, text.slice(m[0].length)];
}

/* ---------- build ------------------------------------------------------ */

const systems = [];
for (const f of readdirSync(REF_DIR).filter((f) => f.endsWith(".md")).sort()) {
  const text = readFileSync(join(REF_DIR, f), "utf8");
  const [fm, body] = parseFrontmatter(text);
  if (!fm) { console.error(`!! no frontmatter: ${f}`); process.exitCode = 1; continue; }

  for (const k of ["name", "slug", "url", "category", "mode", "preview", "summary"]) {
    if (fm[k] == null) { console.error(`!! ${f}: missing "${k}"`); process.exitCode = 1; }
  }
  if (fm.slug !== f.replace(/\.md$/, "")) {
    console.error(`!! ${f}: slug "${fm.slug}" does not match filename`);
    process.exitCode = 1;
  }

  // tokens = every frontmatter key that isn't catalog metadata
  const META_KEYS = new Set(["name", "slug", "url", "category", "mode", "fonts", "preview", "summary"]);
  const tokens = {};
  for (const [k, v] of Object.entries(fm)) if (!META_KEYS.has(k)) tokens[k] = v;

  systems.push({
    slug: fm.slug,
    name: fm.name,
    url: fm.url,
    category: fm.category,
    mode: fm.mode,
    fonts: Array.isArray(fm.fonts) ? fm.fonts : fm.fonts ? [fm.fonts] : [],
    preview: fm.preview,
    summary: fm.summary,
    file: `${REF_REL}/${fm.slug}.md`,
    bytes: Buffer.byteLength(text, "utf8"),
    sections: [...body.matchAll(/^## (.+)$/gm)].map((x) => x[1].replace(/^\d+[.)]\s*/, "").trim()),
    tokens,
  });
}

systems.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

const catalog = {
  name: "narvo",
  title: "Narvo",
  description: "A reference library of real product design systems, installed into AI coding agents.",
  version: "1.0.0",
  generated: new Date().toISOString().slice(0, 10),
  count: systems.length,
  categories: [...new Set(systems.map((s) => s.category))].sort(),
  modes: [...new Set(systems.map((s) => s.mode))].sort(),
  systems,
};

writeFileSync(join(ROOT, "catalog.json"), JSON.stringify(catalog, null, 2) + "\n");
console.log(`catalog.json — ${systems.length} systems, ${catalog.categories.length} categories`);
