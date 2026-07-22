import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked, Renderer } from "marked";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const syllabi = [
  {
    source: "course/PREMED-SYLLABUS.md",
    template: "site/premed/syllabus/template.html",
    output: "site/premed/syllabus/index.html"
  },
  {
    source: "course/PSYCHIATRY-SYLLABUS.md",
    template: "site/psychiatry/syllabus/template.html",
    output: "site/psychiatry/syllabus/index.html"
  }
];

function plainHeading(markdown) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .trim();
}

function baseSlug(value) {
  return plainHeading(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildToc(items) {
  const sections = items.filter((heading) => heading.depth === 2);
  return `<ol>${sections.map((section) => {
    const sectionIndex = items.indexOf(section);
    const children = [];
    for (let index = sectionIndex + 1; index < items.length && items[index].depth > 2; index += 1) {
      if (items[index].depth === 3) children.push(items[index]);
    }
    const nested = children.length
      ? `<ul>${children.map((child) => `<li><a href="#${child.id}" data-toc-link="${child.id}">${escapeHtml(child.title)}</a></li>`).join("")}</ul>`
      : "";
    return `<li><a href="#${section.id}" data-toc-link="${section.id}">${escapeHtml(section.title)}</a>${nested}</li>`;
  }).join("")}</ol>`;
}

function renderSyllabus(config) {
  const sourcePath = path.join(projectRoot, config.source);
  const templatePath = path.join(projectRoot, config.template);
  const outputPath = path.join(projectRoot, config.output);
  const source = fs.readFileSync(sourcePath, "utf8");
  const template = fs.readFileSync(templatePath, "utf8");
  const slugCounts = new Map();
  const headings = [];

  for (const match of source.matchAll(/^(#{1,6})\s+(.+)$/gm)) {
    const depth = match[1].length;
    const title = plainHeading(match[2]);
    const base = baseSlug(match[2]);
    const count = slugCounts.get(base) || 0;
    slugCounts.set(base, count + 1);
    headings.push({ depth, title, id: count ? `${base}-${count + 1}` : base });
  }

  let headingIndex = 0;
  let sectionIsOpen = false;
  const renderer = new Renderer();

  renderer.heading = function renderHeading({ tokens, depth }) {
    const metadata = headings[headingIndex];
    headingIndex += 1;
    const inner = this.parser.parseInline(tokens);
    const anchor = depth >= 2
      ? `<a class="heading-anchor" href="#${metadata.id}" aria-label="Link to ${escapeHtml(metadata.title)}">#</a>`
      : "";
    let prefix = "";

    if (depth === 2) {
      prefix = `${sectionIsOpen ? "</section>" : ""}<section class="syllabus-section" data-section-id="${metadata.id}">`;
      sectionIsOpen = true;
    }

    return `${prefix}<h${depth} id="${metadata.id}">${inner}${anchor}</h${depth}>\n`;
  };

  const rendered = marked.parse(source, { gfm: true, renderer });
  const syllabusHtml = `${rendered}${sectionIsOpen ? "</section>" : ""}`;
  const output = template
    .replace("<!-- SYLLABUS_TOC -->", buildToc(headings))
    .replace("<!-- SYLLABUS_CONTENT -->", syllabusHtml)
    .replace("<!DOCTYPE html>", `<!DOCTYPE html>\n<!-- Generated from ${config.source}. Edit the source and run npm run site:build. -->`);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output);

  const topLevelSections = headings.filter((heading) => heading.depth === 2).length;
  console.log(`Rendered ${topLevelSections} syllabus sections to ${path.relative(projectRoot, outputPath)}.`);
}

for (const syllabus of syllabi) renderSyllabus(syllabus);
