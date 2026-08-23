/* Narvo — static front end. No build step, no dependencies, no backend. */
(() => {
"use strict";

/* ── config ─────────────────────────────────────────────────────────── */
const REPO  = "YOUR_GITHUB_USERNAME/narvo";        // ← replace after publishing
const BRANCH = "main";
const REPO_URL = `https://github.com/${REPO}`;
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

/* ── tiny helpers ───────────────────────────────────────────────────── */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2000);
}
async function copy(text, okMsg = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
    toast(okMsg);
    return true;
  } catch {
    const ta = el("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch {}
    ta.remove();
    toast(ok ? okMsg : "Copy failed — select the text manually");
    return ok;
  }
}

/* code block with a copy button; `text` is copied verbatim */
function codeBlock(text, highlighted) {
  const box = el("div", "code");
  box.innerHTML = `<pre><code>${highlighted || esc(text)}</code></pre>`;
  const b = el("button", "copy", "Copy");
  b.addEventListener("click", async () => {
    if (await copy(text)) {
      b.textContent = "Copied"; b.classList.add("done");
      setTimeout(() => { b.textContent = "Copy"; b.classList.remove("done"); }, 1600);
    }
  });
  box.appendChild(b);
  return box;
}
/* shell highlighting: comments grey, the word narvo blue */
const shell = (s) => esc(s)
  .replace(/^(\s*)(#.*)$/gm, '$1<span class="c">$2</span>')
  .replace(/\bnarvo\b/g, '<span class="k">narvo</span>');

/* ── markdown → html (subset used by these documents) ───────────────── */
function md2html(src) {
  const out = [];
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  let i = 0;

  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, (_, c) => `<code>${c}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:!?]|$)/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  const cells = (row) => row.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    // fenced code
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }
    // heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const lv = Math.min(h[1].length, 4);
      out.push(`<h${lv}>${inline(h[2].replace(/^\d+[.)]\s*/, ""))}</h${lv}>`);
      i++; continue;
    }
    // horizontal rule
    if (/^([-*_])\1{2,}\s*$/.test(line)) { out.push("<hr>"); i++; continue; }

    // table
    if (/^\s*\|/.test(line) && /^\s*\|[\s:|-]+\|?\s*$/.test(lines[i + 1] || "")) {
      const head = cells(line.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(cells(lines[i++].trim()));
      out.push(
        `<div class="tbl-scroll"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")
        }</tr></thead><tbody>${rows.map((r) =>
          `<tr>${head.map((_, k) => `<td>${inline(r[k] ?? "")}</td>`).join("")}</tr>`).join("")
        }</tbody></table></div>`);
      continue;
    }
    // blockquote
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ""));
      out.push(`<blockquote>${md2html(buf.join("\n"))}</blockquote>`);
      continue;
    }
    // lists (supports one level of nesting)
    const isUl = (l) => /^\s*[-*+]\s+/.test(l);
    const isOl = (l) => /^\s*\d+[.)]\s+/.test(l);
    if (isUl(line) || isOl(line)) {
      const ordered = isOl(line);
      const tag = ordered ? "ol" : "ul";
      const items = [];
      while (i < lines.length && (isUl(lines[i]) || isOl(lines[i]) || /^\s{2,}\S/.test(lines[i]))) {
        if (isUl(lines[i]) || isOl(lines[i])) {
          const indent = lines[i].length - lines[i].trimStart().length;
          const text = lines[i].replace(/^\s*(?:[-*+]|\d+[.)])\s+/, "");
          items.push({ indent, text });
        } else {
          if (items.length) items[items.length - 1].text += " " + lines[i].trim();
        }
        i++;
      }
      const base = Math.min(...items.map((x) => x.indent));
      let html = "", open = false;
      for (const it of items) {
        if (it.indent > base && !open) { html += "<ul>"; open = true; }
        else if (it.indent <= base && open) { html += "</ul>"; open = false; }
        html += `<li>${inline(it.text)}</li>`;
      }
      if (open) html += "</ul>";
      out.push(`<${tag}>${html}</${tag}>`);
      continue;
    }
    // paragraph
    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>\s?|\s*\|)/.test(lines[i])
           && !isUl(lines[i]) && !isOl(lines[i])) buf.push(lines[i++]);
    if (buf.length) out.push(`<p>${inline(buf.join(" "))}</p>`);
    else i++;
  }
  return out.join("\n");
}

/* ── install recipes ────────────────────────────────────────────────── */
const AGENTS = [
  { id: "skills-cli", label: "skills CLI", title: "Any agent — the skills CLI",
    note: "The <code>skills</code> CLI detects which agents you have installed and places the skill for each of them. Easiest path if you use more than one.",
    steps: [["Install", `npx skills add ${REPO}`]],
    after: "Re-open your agent afterwards so it picks up the new skill." },

  { id: "claude-code", label: "Claude Code", title: "Claude Code",
    note: "Claude Code reads <code>SKILL.md</code> natively. Install once for every project, or per project.",
    steps: [
      ["For every project", `git clone --depth 1 https://github.com/${REPO}.git /tmp/narvo \\\n  && mkdir -p ~/.claude/skills \\\n  && cp -R /tmp/narvo/skills/narvo ~/.claude/skills/ \\\n  && rm -rf /tmp/narvo`],
      ["Or just this project", `git clone --depth 1 https://github.com/${REPO}.git /tmp/narvo \\\n  && mkdir -p .claude/skills \\\n  && cp -R /tmp/narvo/skills/narvo .claude/skills/ \\\n  && rm -rf /tmp/narvo`],
    ],
    after: "Verify with <code>/skills</code>. Then: <em>“build the pricing page using the Linear system from narvo”</em>." },

  { id: "codex", label: "Codex CLI", title: "OpenAI Codex CLI",
    note: "Codex reads <code>AGENTS.md</code> from the repository root.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Point AGENTS.md at them", `cat >> AGENTS.md <<'EOF'\n\n## Design system references (narvo)\n\nWhen the user names a product as a visual target ("make it look like Linear"),\nor asks for a design direction, read the matching file from\n\`.narvo/skills/narvo/references/<slug>.md\` and build from its documented tokens.\nThe index of available systems is \`.narvo/skills/narvo/SKILL.md\`.\nEOF`],
    ] },

  { id: "cursor", label: "Cursor", title: "Cursor",
    note: "Cursor loads project rules from <code>.cursor/rules/</code>. This adds one rule file that indexes the references.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Add the rule", `mkdir -p .cursor/rules && cat > .cursor/rules/narvo.mdc <<'EOF'\n---\ndescription: Design system references — use when the user names a product as a visual target or asks for a design direction\nalwaysApply: false\n---\n\nRead .narvo/skills/narvo/SKILL.md for the index of available design systems,\nthen read .narvo/skills/narvo/references/<slug>.md for the one that matches\nand build from its documented tokens.\nEOF`],
    ] },

  { id: "windsurf", label: "Windsurf", title: "Windsurf (Cascade)",
    note: "Windsurf reads rules from <code>.windsurf/rules/</code>.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Add the rule", `mkdir -p .windsurf/rules && cat > .windsurf/rules/narvo.md <<'EOF'\n---\ntrigger: model_decision\ndescription: Design system references for building UI in a specific product's visual language\n---\n\nRead .narvo/skills/narvo/SKILL.md for the index, then the matching\n.narvo/skills/narvo/references/<slug>.md, and build from its tokens.\nEOF`],
    ] },

  { id: "cline", label: "Cline", title: "Cline / Roo Code",
    note: "Cline reads every file in the <code>.clinerules/</code> directory.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Add the rule", `mkdir -p .clinerules && cat > .clinerules/narvo.md <<'EOF'\n# Design system references (narvo)\n\nWhen the user names a product as a visual target, or asks for a design\ndirection, read .narvo/skills/narvo/SKILL.md for the index and then the\nmatching .narvo/skills/narvo/references/<slug>.md. Build from its tokens.\nEOF`],
    ] },

  { id: "copilot", label: "Copilot", title: "GitHub Copilot",
    note: "Copilot reads <code>.github/copilot-instructions.md</code>.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Add the instructions", `mkdir -p .github && cat >> .github/copilot-instructions.md <<'EOF'\n\n## Design system references (narvo)\n\nWhen asked to build UI in a named product's style, read the matching file in\n.narvo/skills/narvo/references/ and follow its documented colors, type scale,\nradii, and component specs. The index is .narvo/skills/narvo/SKILL.md.\nEOF`],
    ] },

  { id: "gemini", label: "Gemini CLI", title: "Gemini CLI",
    note: "Gemini CLI reads <code>GEMINI.md</code> from the project root.",
    steps: [
      ["Add the references", `git clone --depth 1 https://github.com/${REPO}.git .narvo \\\n  && echo ".narvo/" >> .gitignore`],
      ["Point GEMINI.md at them", `cat >> GEMINI.md <<'EOF'\n\n## Design system references (narvo)\n\nIndex: .narvo/skills/narvo/SKILL.md\nReferences: .narvo/skills/narvo/references/<slug>.md\n\nWhen the user names a product as a visual target or asks for a design\ndirection, read the matching reference and build from its documented tokens.\nEOF`],
    ] },

  { id: "manual", label: "Anything else", title: "Any other agent",
    note: "The library is plain Markdown with YAML frontmatter. Clone it anywhere the agent can read, and tell it when to look.",
    steps: [
      ["Clone", `git clone https://github.com/${REPO}.git`],
      ["Read a single reference straight from the CDN", `curl -fsSL ${RAW}/skills/narvo/references/linear.md`],
      ["Or fetch the machine-readable index", `curl -fsSL ${RAW}/catalog.json`],
    ],
    after: "Every reference carries its tokens in YAML frontmatter, so you can parse them without reading the prose." },
];

function renderAgents() {
  const tabs = $("#agentTabs"), panel = $("#agentPanel");
  const show = (a) => {
    $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.id === a.id)));
    panel.innerHTML = "";
    const p = el("div", "panel");
    p.appendChild(el("h3", null, esc(a.title)));
    p.appendChild(el("p", "note", a.note));
    a.steps.forEach(([label, cmd]) => {
      p.appendChild(el("p", "step", esc(label)));
      p.appendChild(codeBlock(cmd, shell(cmd)));
    });
    if (a.after) p.appendChild(el("p", "note", `<br>${a.after}`));
    panel.appendChild(p);
  };
  AGENTS.forEach((a, k) => {
    const t = el("button", "tab", esc(a.label));
    t.type = "button"; t.role = "tab"; t.dataset.id = a.id;
    t.setAttribute("aria-selected", String(k === 0));
    t.addEventListener("click", () => show(a));
    tabs.appendChild(t);
  });
  show(AGENTS[0]);
}

/* ── grid ───────────────────────────────────────────────────────────── */
let DATA = null, FILTER = { q: "", cat: "All", mode: "All" };

function miniPreview(s) {
  const { bg, fg, accent } = s.preview;
  const m = el("div", "mini");
  m.style.background = bg;
  m.innerHTML =
    `<div class="mini-bar mini-h"  style="background:${esc(fg)}"></div>` +
    `<div class="mini-bar mini-l1" style="background:${esc(fg)}"></div>` +
    `<div class="mini-bar mini-l2" style="background:${esc(fg)}"></div>` +
    `<div class="mini-bar mini-btn" style="background:${esc(accent)}"></div>`;
  return m;
}

function swatchStrip(s) {
  const cols = Object.values(s.tokens?.colors || {})
    .filter((v) => typeof v === "string" && /^#|^rgb|^hsl/.test(v))
    .slice(0, 14);
  const strip = el("div", "swatches");
  (cols.length ? cols : [s.preview.bg, s.preview.fg, s.preview.accent])
    .forEach((c) => { const sp = el("span"); sp.style.background = c; strip.appendChild(sp); });
  return strip;
}

function card(s) {
  const c = el("button", "card");
  c.type = "button";
  c.setAttribute("aria-label", `Open the ${s.name} design system`);
  c.appendChild(miniPreview(s));
  c.appendChild(swatchStrip(s));
  const body = el("div", "card-body");
  body.innerHTML =
    `<div class="card-top"><span class="card-name">${esc(s.name)}</span>` +
    `<span class="card-cat">${esc(s.category)}</span></div>` +
    `<p class="card-sum">${esc(s.summary)}</p>` +
    `<div class="card-meta">` +
      `<span class="tagx">${esc(s.mode)}</span>` +
      s.fonts.slice(0, 2).map((f) => `<span class="tagx">${esc(f)}</span>`).join("") +
    `</div>`;
  c.appendChild(body);
  c.addEventListener("click", () => openSheet(s.slug));
  return c;
}

function matches(s) {
  if (FILTER.cat !== "All" && s.category !== FILTER.cat) return false;
  if (FILTER.mode !== "All" && s.mode !== FILTER.mode) return false;
  const q = FILTER.q.trim().toLowerCase();
  if (!q) return true;
  const hay = [s.name, s.slug, s.category, s.mode, s.summary, s.fonts.join(" "),
               Object.entries(s.tokens?.colors || {}).flat().join(" ")].join(" ").toLowerCase();
  return q.split(/\s+/).every((w) => hay.includes(w));
}

function renderGrid() {
  const grid = $("#grid"), list = DATA.systems.filter(matches);
  grid.innerHTML = "";
  list.forEach((s) => grid.appendChild(card(s)));
  $("#empty").hidden = list.length > 0;
  $("#count").textContent = `${list.length} of ${DATA.systems.length} systems`;
}

function renderFilters() {
  const mk = (host, values, key) => {
    values.forEach((v, k) => {
      const b = el("button", "chip", esc(v));
      b.type = "button";
      b.setAttribute("aria-pressed", String(k === 0));
      b.addEventListener("click", () => {
        FILTER[key] = v;
        $$(".chip", host).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        renderGrid();
      });
      host.appendChild(b);
    });
  };
  mk($("#catChips"),  ["All", ...DATA.categories], "cat");
  mk($("#modeChips"), ["All", ...DATA.modes],      "mode");

  let t;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(t);
    t = setTimeout(() => { FILTER.q = e.target.value; renderGrid(); }, 120);
  });
  $("#clearFilters").addEventListener("click", () => {
    FILTER = { q: "", cat: "All", mode: "All" };
    $("#search").value = "";
    $$("#catChips .chip, #modeChips .chip").forEach((x, i) =>
      x.setAttribute("aria-pressed", String(x.textContent === "All")));
    renderGrid();
  });
}

/* ── detail sheet ───────────────────────────────────────────────────── */
const mdCache = new Map();
let CURRENT = null, VIEW = "tokens";

async function fetchDoc(slug) {
  if (mdCache.has(slug)) return mdCache.get(slug);
  const res = await fetch(`skills/narvo/references/${slug}.md`, { cache: "force-cache" });
  if (!res.ok) throw new Error(`${res.status}`);
  const text = await res.text();
  mdCache.set(slug, text);
  return text;
}

const scalar = (v) => (Array.isArray(v) ? v.join(", ") : String(v));

/* Groups whose members are themselves objects (typography roles, components…)
   render as a matrix: one row per member, one column per property. Everything
   else renders as a flat token/value list. */
function tokenTable(obj) {
  const entries = Object.entries(obj);
  const nested = entries.filter(([, v]) => v && typeof v === "object" && !Array.isArray(v));
  const w = el("div", "tbl-scroll");

  if (nested.length && nested.length === entries.length) {
    const cols = [...new Set(nested.flatMap(([, v]) => Object.keys(v)))];
    w.innerHTML =
      `<table class="tbl"><thead><tr><th></th>${cols.map((c) => `<th>${esc(c)}</th>`).join("")}` +
      `</tr></thead><tbody>` +
      nested.map(([k, v]) =>
        `<tr><td>${esc(k)}</td>${cols.map((c) =>
          `<td>${v[c] == null ? "" : esc(scalar(v[c]))}</td>`).join("")}</tr>`).join("") +
      `</tbody></table>`;
    return w;
  }

  const rows = [];
  const walk = (o, prefix) => {
    for (const [k, v] of Object.entries(o)) {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, key);
      else rows.push([key, scalar(v)]);
    }
  };
  walk(obj, "");
  w.innerHTML = `<table class="tbl"><thead><tr><th>Token</th><th>Value</th></tr></thead><tbody>` +
    rows.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join("") +
    `</tbody></table>`;
  return w;
}

function renderTokens(s) {
  const frag = document.createDocumentFragment();
  const colors = s.tokens?.colors;

  if (colors) {
    const g = el("div", "tok-group");
    g.appendChild(el("h4", null, `Colors — ${Object.keys(colors).length} documented`));
    const pal = el("div", "pal");
    for (const [k, v] of Object.entries(colors)) {
      if (typeof v !== "string") continue;
      const item = el("div", "pal-item");
      item.title = "Click to copy";
      item.innerHTML =
        `<span class="pal-chip" style="background:${esc(v)}"></span>` +
        `<span class="pal-txt"><span class="pal-k">${esc(k)}</span><br>` +
        `<span class="pal-v">${esc(v)}</span></span>`;
      item.addEventListener("click", () => copy(v, `${v} copied`));
      pal.appendChild(item);
    }
    g.appendChild(pal);
    frag.appendChild(g);
  }

  for (const [key, val] of Object.entries(s.tokens || {})) {
    if (key === "colors" || !val || typeof val !== "object") continue;
    const g = el("div", "tok-group");
    g.appendChild(el("h4", null, esc(key)));
    g.appendChild(tokenTable(val));
    frag.appendChild(g);
  }

  if (!frag.childNodes.length) {
    frag.appendChild(el("p", "empty",
      "This system is documented in prose only — open <strong>Full document</strong> for its values."));
  }

  const secs = el("div", "tok-group");
  secs.appendChild(el("h4", null, "Sections in the document"));
  secs.appendChild(el("p", "card-sum", s.sections.map(esc).join(" · ")));
  frag.appendChild(secs);
  return frag;
}

function sheetActions(s) {
  const host = $("#sheetActions");
  host.innerHTML = "";
  const add = (label, cls, fn) => {
    const b = el("button", `btn ${cls} btn-sm`, label);
    b.type = "button"; b.addEventListener("click", fn); host.appendChild(b);
  };

  add("Copy Markdown", "btn-primary", async () => {
    try { await copy(await fetchDoc(s.slug), `${s.name} reference copied`); }
    catch { toast("Could not read the file"); }
  });

  add("Download .md", "btn-secondary", async () => {
    try {
      const text = await fetchDoc(s.slug);
      const url = URL.createObjectURL(new Blob([text], { type: "text/markdown" }));
      const a = el("a"); a.href = url; a.download = `${s.slug}.md`;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      toast(`${s.slug}.md downloaded`);
    } catch { toast("Could not read the file"); }
  });

  add("Copy install command", "btn-secondary", () =>
    copy(`curl -fsSL ${RAW}/skills/narvo/references/${s.slug}.md \\\n  -o ~/.claude/skills/narvo/references/${s.slug}.md`,
         "Single-file install command copied"));

  add("Copy palette as CSS", "btn-secondary", () => {
    const cols = s.tokens?.colors || s.preview;
    const body = Object.entries(cols)
      .filter(([, v]) => typeof v === "string")
      .map(([k, v]) => `  --${s.slug}-${k}: ${v};`).join("\n");
    copy(`:root {\n${body}\n}\n`, "CSS custom properties copied");
  });

  const link = el("a", "btn btn-ghost btn-sm", "Source site ↗");
  link.href = s.url; link.target = "_blank"; link.rel = "noopener noreferrer";
  host.appendChild(link);
}

async function paintView() {
  const s = CURRENT, body = $("#sheetBody");
  $$(".sheet-tab").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.view === VIEW)));
  body.scrollTop = 0;

  if (VIEW === "tokens") { body.innerHTML = ""; body.appendChild(renderTokens(s)); return; }

  body.innerHTML = `<p class="card-sum">Loading…</p>`;
  let text;
  try { text = await fetchDoc(s.slug); }
  catch {
    body.innerHTML = `<p class="empty">Could not load <code>${esc(s.file)}</code>. ` +
      `<a href="${RAW}/${esc(s.file)}" target="_blank" rel="noopener noreferrer">Open it on GitHub</a>.</p>`;
    return;
  }
  if (CURRENT !== s) return;                            // a different card was opened
  if (VIEW === "raw") {
    body.innerHTML = "";
    body.appendChild(codeBlock(text));
  } else {
    const doc = text.replace(/^---\n[\s\S]*?\n---\n/, "");
    body.innerHTML = `<div class="md">${md2html(doc)}</div>`;
  }
}

function openSheet(slug, push = true) {
  const s = DATA.systems.find((x) => x.slug === slug);
  if (!s) return;
  CURRENT = s; VIEW = "tokens";
  $("#sheetTitle").textContent = s.name;
  $("#sheetSub").innerHTML =
    `${esc(s.category)} · ${esc(s.mode)} · ${esc(s.fonts.join(", ") || "—")} · ` +
    `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.url.replace(/^https?:\/\//, ""))}</a>`;
  sheetActions(s);
  paintView();
  $("#overlay").setAttribute("open", "");
  document.body.style.overflow = "hidden";
  $("#closeSheet").focus();
  if (push && location.hash !== `#s/${slug}`) history.pushState({ slug }, "", `#s/${slug}`);
}

function closeSheet(pop = true) {
  $("#overlay").removeAttribute("open");
  document.body.style.overflow = "";
  CURRENT = null;
  if (pop && location.hash.startsWith("#s/")) history.pushState({}, "", location.pathname + "#systems");
}

/* ── boot ───────────────────────────────────────────────────────────── */
async function init() {
  $$("[data-repo-href]").forEach((a) => { a.href = REPO_URL; a.target = "_blank"; a.rel = "noopener noreferrer"; });

  try {
    const res = await fetch("catalog.json", { cache: "no-cache" });
    DATA = await res.json();
  } catch {
    $("#grid").innerHTML = `<p class="empty">Could not load <code>catalog.json</code>. ` +
      `If you opened this file directly from disk, serve the folder instead — ` +
      `<code>npx serve .</code> — because <code>fetch</code> is blocked on <code>file://</code>.</p>`;
    return;
  }

  const nColors = DATA.systems.reduce((n, s) => n + Object.keys(s.tokens?.colors || {}).length, 0);
  $("#brandCount").textContent = `${DATA.count} systems`;
  $("#eyebrowCount").textContent = DATA.count;
  $("#statSystems").textContent = DATA.count;
  $("#statColors").textContent = nColors;
  $("#statCats").textContent = DATA.categories.length;

  renderAgents();
  renderFilters();
  renderGrid();

  $("#closeSheet").addEventListener("click", () => closeSheet());
  $("#overlay").addEventListener("mousedown", (e) => { if (e.target.id === "overlay") closeSheet(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && CURRENT) closeSheet();
    if (e.key === "/" && !CURRENT && document.activeElement !== $("#search")) {
      e.preventDefault(); $("#search").focus();
    }
  });
  $$(".sheet-tab").forEach((t) =>
    t.addEventListener("click", () => { VIEW = t.dataset.view; paintView(); }));

  const route = () => {
    const m = location.hash.match(/^#s\/([\w.-]+)$/);
    if (m) openSheet(m[1], false); else if (CURRENT) closeSheet(false);
  };
  window.addEventListener("popstate", route);
  route();
}

document.addEventListener("DOMContentLoaded", init);
})();
