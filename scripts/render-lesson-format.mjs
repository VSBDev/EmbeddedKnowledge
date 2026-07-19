import fs from "node:fs";
import path from "node:path";
import { marked, Renderer } from "marked";
import temml from "temml";

const allowedDirectives = new Set([
  "callout",
  "check",
  "chemistry",
  "definition",
  "derivation",
  "diagram",
  "equation",
  "figure",
  "investigation",
  "misconception",
  "source-note",
  "theorem",
  "worked-example"
]);

const forbiddenTex = /\\(?:class|def|href|html|include|input|newcommand|renewcommand|require|style|url|write|write18)\b/i;

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function copyLessonAssetTree(sourceRoot, destinationRoot) {
  if (!fs.existsSync(sourceRoot)) return;
  const rootStat = fs.lstatSync(sourceRoot);
  if (rootStat.isSymbolicLink()) throw new Error(`Lesson asset roots may not be symbolic links: ${sourceRoot}`);
  if (!rootStat.isDirectory()) throw new Error(`Lesson asset roots must be directories: ${sourceRoot}`);
  const source = fs.realpathSync(sourceRoot);
  const copyDirectory = (currentSource, currentDestination) => {
    fs.mkdirSync(currentDestination, { recursive: true });
    const entries = fs.readdirSync(currentSource, { withFileTypes: true })
      .sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const sourcePath = path.join(currentSource, entry.name);
      const destinationPath = path.join(currentDestination, entry.name);
      const stat = fs.lstatSync(sourcePath);
      if (stat.isSymbolicLink()) throw new Error(`Lesson asset trees may not contain symbolic links: ${sourcePath}`);
      if (stat.isDirectory()) copyDirectory(sourcePath, destinationPath);
      else if (stat.isFile()) fs.copyFileSync(sourcePath, destinationPath);
      else throw new Error(`Lesson asset trees may contain only regular files and directories: ${sourcePath}`);
    }
  };
  copyDirectory(source, destinationRoot);
}

function safeUrl(value = "") {
  const trimmed = String(value).trim();
  if (/^(https?:|mailto:)/i.test(trimmed)) return trimmed;
  if (/^(#|\/assets\/|\.\.?\/|[A-Za-z0-9_-]+\/)/.test(trimmed)) return trimmed;
  return null;
}

function createRenderer() {
  const renderer = new Renderer();
  renderer.html = ({ text }) => `<pre class="lesson-raw-html">${escapeHtml(text)}</pre>`;
  renderer.link = function renderSafeLink({ href, title, tokens }) {
    const label = this.parser.parseInline(tokens);
    const safe = safeUrl(href);
    if (!safe) return label;
    const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";
    const external = /^https?:/i.test(safe) ? ' rel="noreferrer noopener"' : "";
    return `<a href="${escapeHtml(safe)}"${titleAttribute}${external}>${label}</a>`;
  };
  renderer.image = ({ href, title, text }) => {
    const safe = safeUrl(href);
    if (!safe) return `<span>[Image: ${escapeHtml(text)}]</span>`;
    const titleAttribute = title ? ` title="${escapeHtml(title)}"` : "";
    return `<img src="${escapeHtml(safe)}" alt="${escapeHtml(text)}"${titleAttribute} loading="lazy">`;
  };
  return renderer;
}

function renderMath(tex, displayMode = false) {
  const source = String(tex).trim();
  if (!source) throw new Error("Empty TeX expression.");
  if (forbiddenTex.test(source)) throw new Error(`Unsafe TeX command in expression: ${source}`);
  try {
    return temml.renderToString(source, {
      displayMode,
      throwOnError: true,
      xml: true,
      annotate: true
    });
  } catch (error) {
    throw new Error(`Unable to render TeX expression ${JSON.stringify(source)}: ${error.message}`);
  }
}

function extractMath(markdown) {
  const replacements = [];
  let source = markdown.replace(/\{(math|chem)\}`([^`]+)`/g, (_match, role, tex) => {
    const token = `EKMATHROLE${replacements.length}TOKEN`;
    const expression = role === "chem" && !tex.trim().startsWith("\\ce{") ? `\\ce{${tex.trim()}}` : tex;
    replacements.push({ token, html: `<span class="ek-inline-math ek-inline-math--${role}">${renderMath(expression, false)}</span>` });
    return token;
  });
  source = source.replace(/\$\$([\s\S]+?)\$\$/g, (_match, tex) => {
    const token = `EKMATHDISPLAY${replacements.length}TOKEN`;
    replacements.push({ token, html: `<div class="ek-display-math">${renderMath(tex, true)}</div>` });
    return `\n\n${token}\n\n`;
  });
  source = source.replace(/(^|[^\\])\$([^$\n]+?)\$/g, (_match, prefix, tex) => {
    const token = `EKMATHINLINE${replacements.length}TOKEN`;
    replacements.push({ token, html: `<span class="ek-inline-math">${renderMath(tex, false)}</span>` });
    return `${prefix}${token}`;
  });
  return { source, replacements };
}

function parseDirectiveBody(body) {
  const lines = body.split("\n");
  const options = {};
  while (lines.length) {
    const match = lines[0].match(/^:([a-z][a-z0-9-]*):\s*(.*)$/i);
    if (!match) break;
    options[match[1]] = match[2].trim();
    lines.shift();
  }
  while (lines[0] === "") lines.shift();
  return { options, content: lines.join("\n").trim() };
}

function resolvePackFile(context, target) {
  const resolved = path.resolve(path.dirname(context.sourcePath), target);
  const packRoot = path.resolve(context.packPath);
  if (resolved !== packRoot && !resolved.startsWith(`${packRoot}${path.sep}`)) {
    throw new Error(`Directive path escapes the lesson pack: ${target}`);
  }
  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    throw new Error(`Directive file does not exist: ${target}`);
  }
  const relative = path.relative(packRoot, resolved).split(path.sep).join("/");
  const realPackRoot = fs.realpathSync(packRoot);
  const realResolved = fs.realpathSync(resolved);
  const realRelative = path.relative(realPackRoot, realResolved).split(path.sep).join("/");
  if (realResolved !== realPackRoot && (realRelative === ".." || realRelative.startsWith("../"))) {
    throw new Error(`Directive path resolves outside the lesson pack through a symbolic link: ${target}`);
  }
  if (realRelative !== relative) {
    throw new Error(`Directive paths may not use symbolic-link indirection: ${target}`);
  }
  return {
    resolved: realResolved,
    relative
  };
}

function renderDiagram(head, options, context) {
  if (!head) throw new Error("diagram directive requires a pack-local JSON source.");
  const file = resolvePackFile(context, head);
  const diagram = JSON.parse(fs.readFileSync(file.resolved, "utf8"));
  const nodes = (diagram.nodes || []).map((node, index) => {
    const arrow = index ? '<span class="ek-diagram-arrow" aria-hidden="true">→</span>' : "";
    return `${arrow}<span class="ek-diagram-node ek-diagram-node--${escapeHtml(node.shape || "box")}">${escapeHtml(node.label)}</span>`;
  }).join("");
  const relationships = (diagram.edges || []).map((edge) => {
    const from = diagram.nodes.find((node) => node.id === edge.from)?.label || edge.from;
    const to = diagram.nodes.find((node) => node.id === edge.to)?.label || edge.to;
    return `<li><strong>${escapeHtml(from)}</strong> → <strong>${escapeHtml(to)}</strong>${edge.label ? `: ${escapeHtml(edge.label)}` : ""}</li>`;
  }).join("");
  const alt = options.alt || diagram.alt || "Structured lesson diagram.";
  const longDescription = options.longdesc || diagram.longDescription || alt;
  return `<figure class="ek-block ek-diagram" data-directive="diagram" data-diagram-source="${escapeHtml(file.relative)}">
    <div class="ek-block-label directive-label">Diagram</div>
    <div class="ek-diagram-visual" role="img" aria-label="${escapeHtml(alt)}">${nodes}</div>
    <figcaption>${escapeHtml(alt)}</figcaption>
    <details class="ek-long-description"><summary>Read the diagram as text</summary><p>${escapeHtml(longDescription)}</p><ul>${relationships}</ul></details>
  </figure>`;
}

function renderFigure(head, options, context) {
  if (!head) throw new Error("figure directive requires a pack-local image source.");
  if (!options.alt) throw new Error(`figure ${head} requires :alt:.`);
  const file = resolvePackFile(context, head);
  const source = `${context.publicAssetBase}/${file.relative}`;
  const longDescription = options["long-description"] || options.longdesc || null;
  return `<figure class="ek-block ek-figure" data-directive="figure">
    <img src="${escapeHtml(source)}" alt="${escapeHtml(options.alt)}" loading="lazy">
    ${options.caption ? `<figcaption>${escapeHtml(options.caption)}</figcaption>` : ""}
    ${longDescription ? `<details class="ek-long-description"><summary>Read the image description</summary><p>${escapeHtml(longDescription)}</p></details>` : ""}
  </figure>`;
}

function renderDirective(name, head, body, context) {
  if (!allowedDirectives.has(name)) throw new Error(`Unsupported lesson directive: ${name}`);
  const { options, content } = parseDirectiveBody(body);
  if (name === "diagram") return renderDiagram(head, options, context);
  if (name === "figure") return renderFigure(head, options, context);
  if (name === "equation") {
    const label = options.label || "Equation";
    return `<figure class="ek-block ek-equation" data-directive="equation"><div class="ek-block-label directive-label">${escapeHtml(label)}</div>${renderMath(content, true)}<figcaption>TeX source: <code>${escapeHtml(content)}</code></figcaption></figure>`;
  }
  if (name === "chemistry") {
    const source = content.startsWith("\\ce{") ? content : `\\ce{${content}}`;
    return `<figure class="ek-block ek-chemistry" data-directive="chemistry"><div class="ek-block-label directive-label">${escapeHtml(options.label || "Chemical equation")}</div>${renderMath(source, true)}<figcaption>${escapeHtml(content)}</figcaption></figure>`;
  }

  const tone = name === "callout" ? (options.kind || "note") : name;
  const title = name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
  const metadata = Object.entries(options)
    .filter(([key]) => key !== "kind")
    .map(([key, value]) => `<span><b>${escapeHtml(key.replaceAll("-", " "))}</b> ${escapeHtml(value)}</span>`)
    .join("");
  return `<aside class="ek-block ek-${escapeHtml(name)} ek-block--${escapeHtml(tone)}" data-directive="${escapeHtml(name)}">
    <div class="ek-block-label directive-label">${escapeHtml(title)}</div>
    ${metadata ? `<div class="ek-block-meta">${metadata}</div>` : ""}
    <div class="ek-block-content">${renderLessonMarkdown(content, context)}</div>
  </aside>`;
}

function extractDirectives(markdown, context) {
  const lines = markdown.split("\n");
  const output = [];
  const replacements = [];
  let inCodeFence = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*```/.test(line)) {
      inCodeFence = !inCodeFence;
      output.push(line);
      continue;
    }
    const opening = !inCodeFence && line.match(/^:::\{([a-z][a-z0-9-]*)\}(?:\s+(.+?))?\s*$/i);
    if (!opening) {
      output.push(line);
      continue;
    }

    const body = [];
    let closing = -1;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (/^:::\s*$/.test(lines[cursor])) {
        closing = cursor;
        break;
      }
      if (/^:::\{/.test(lines[cursor])) throw new Error(`Nested directives are not supported in ${context.sourcePath}.`);
      body.push(lines[cursor]);
    }
    if (closing === -1) throw new Error(`Unclosed ${opening[1]} directive in ${context.sourcePath}.`);
    const token = `EKDIRECTIVE${replacements.length}TOKEN`;
    replacements.push({
      token,
      html: renderDirective(opening[1], opening[2]?.trim() || "", body.join("\n"), context)
    });
    output.push("", token, "");
    index = closing;
  }
  if (inCodeFence) throw new Error(`Unclosed code fence in ${context.sourcePath}.`);
  return { source: output.join("\n"), replacements };
}

export function renderLessonMarkdown(markdown, context) {
  const directivePass = extractDirectives(String(markdown), context);
  const mathPass = extractMath(directivePass.source);
  let html = marked.parse(mathPass.source, { gfm: true, renderer: createRenderer() });
  for (const replacement of [...mathPass.replacements, ...directivePass.replacements]) {
    html = html
      .replace(`<p>${replacement.token}</p>`, replacement.html)
      .replaceAll(replacement.token, replacement.html);
  }
  return html;
}
