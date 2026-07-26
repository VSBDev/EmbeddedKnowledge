import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { layerNodes, renderDiagramSvg } from "../../scripts/lib/render-diagram.mjs";

// The renderer this replaced laid nodes out in declaration order and put an arrow between each
// adjacent pair, ignoring the declared edges. Nine of the corpus's first eleven diagrams were
// therefore asserting relationships nobody wrote: PREM-BIO-003 told the reader that the apical
// membrane leads to the basolateral membrane, which leads to a lysosome. The long description was
// right in every case, so the picture and its text equivalent disagreed and only one of them was
// checked by anything.
//
// These tests hold the picture to the data. Every declared edge is drawn, nothing else is, and the
// result stays legible — the last one matters because the failure mode of a correct-but-tiny SVG is a
// diagram nobody can read, which is how the old one hid its overflow.

function packDiagrams() {
  const found = [];
  for (const pack of fs.readdirSync("lessons").sort()) {
    const dir = path.join("lessons", pack, "diagrams");
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir).sort()) {
      if (!name.endsWith(".json")) continue;
      const file = path.join(dir, name);
      found.push({ file, diagram: JSON.parse(fs.readFileSync(file, "utf8")) });
    }
  }
  return found;
}

const diagrams = packDiagrams();

test("the corpus has diagrams for this guard to check", () => {
  assert.ok(diagrams.length >= 10, `expected the merged packs' diagrams, found ${diagrams.length}`);
});

for (const { file, diagram } of diagrams) {
  const name = path.basename(file);

  test(`${name} draws every declared edge and no others`, () => {
    const svg = renderDiagramSvg(diagram, diagram.alt);
    const drawn = (svg.match(/class="ek-diagram-edge/g) || []).length;
    assert.equal(drawn, diagram.edges.length,
      `${diagram.edges.length} edge(s) declared but ${drawn} arrow(s) drawn`);
    const boxes = (svg.match(/<rect /g) || []).length;
    assert.equal(boxes, diagram.nodes.length);
    // A marker element is stripped by the reader, so each edge carries its own polygon head.
    const heads = (svg.match(/class="ek-diagram-head"/g) || []).length;
    assert.equal(heads, diagram.edges.length, `${diagram.edges.length} edge(s) but ${heads} arrowhead(s)`);
  });

  test(`${name} lays out from the edges rather than declaration order`, () => {
    const { layers } = layerNodes(diagram);
    // A node may only sit in a layer after every node that points at it, back edges excepted. This is
    // the property the old renderer lacked: it put node i+1 after node i whatever the edges said.
    const layerOf = new Map();
    layers.forEach((entries, index) => entries.forEach((node) => layerOf.set(node.id, index)));
    const { isBackEdge } = layerNodes(diagram);
    for (const edge of diagram.edges) {
      if (isBackEdge(edge)) continue;
      assert.ok(layerOf.get(edge.to) > layerOf.get(edge.from),
        `${edge.from} -> ${edge.to} does not move forward a layer`);
    }
    assert.equal(layers.flat().length, diagram.nodes.length, "every node is placed exactly once");
  });

  test(`${name} is drawn at its own size so its labels keep theirs`, () => {
    const svg = renderDiagramSvg(diagram, diagram.alt);
    const [, , width, height] = svg.match(/viewBox="(-?[\d.]+) (-?[\d.]+) ([\d.]+) ([\d.]+)"/).slice(1).map(Number);
    // The label size is fixed in the stylesheet, so it survives only if the drawing is not scaled to
    // its container. That means carrying the natural size in width and height — the reader strips a
    // style attribute, so a CSS max-width set inline silently does nothing — and letting anything
    // wider than the column pan in its scroller instead. Scaling to fit is what put 11.5px labels at
    // 7.4px in the 404px column a 1280px viewport gives.
    assert.match(svg, new RegExp(`width="${width}"`), "the drawn width must travel as an attribute");
    assert.match(svg, new RegExp(`height="${height}"`), "the drawn height must travel as an attribute");
    assert.doesNotMatch(svg, /style="/, "a style attribute is stripped by the reader and must not be relied on");
    // Nothing the reader's sanitiser drops: tspan, defs, marker, marker-end, textLength.
    for (const banned of [/<tspan/, /<defs/, /<marker/, /marker-end=/, /textLength=/]) {
      assert.doesNotMatch(svg, banned, `${banned} does not survive the reader and must not be emitted`);
    }
    assert.ok(height > 0 && width > 0);
  });

  test(`${name} carries an accessible name and a title`, () => {
    const svg = renderDiagramSvg(diagram, diagram.alt);
    assert.match(svg, /role="img"/);
    assert.ok(diagram.alt && diagram.alt.length > 20, "alt text must say what the diagram shows");
    assert.ok(diagram.longDescription && diagram.longDescription.length > diagram.alt.length,
      "the long description is the text equivalent and must say more than the alt");
    assert.match(svg, /<title>/);
  });
}

test("a scene's own alt overrides the diagram file's as the accessible name", () => {
  const diagram = {
    id: "diagram-alt-precedence", direction: "top-to-bottom",
    alt: "The description in the diagram file.",
    nodes: [{ id: "a", label: "A" }, { id: "b", label: "B" }],
    edges: [{ id: "e", from: "a", to: "b" }]
  };
  assert.match(renderDiagramSvg(diagram, "The description in the scene."), /aria-label="The description in the scene\."/);
  assert.match(renderDiagramSvg(diagram), /aria-label="The description in the diagram file\."/);
  // The caption a sighted reader sees and the name a screen reader announces must be one sentence.
  assert.match(renderDiagramSvg(diagram, "The description in the scene."), /<title>The description in the scene\.<\/title>/);
});

test("a deliberate cycle is drawn as a return rather than refused or mangled", () => {
  // PREM-SCI-010's model-use-revision loop is a cycle on purpose. Layering has to ignore the closing
  // edge and the renderer still has to draw it, or the lesson's point disappears.
  const diagram = {
    id: "diagram-loop", direction: "top-to-bottom",
    alt: "A three-step loop that returns to its start.",
    nodes: [{ id: "a", label: "Build" }, { id: "b", label: "Use" }, { id: "c", label: "Revise" }],
    edges: [{ id: "e1", from: "a", to: "b" }, { id: "e2", from: "b", to: "c" }, { id: "e3", from: "c", to: "a" }]
  };
  const { layers, isBackEdge } = layerNodes(diagram);
  assert.equal(layers.flat().length, 3, "a cycle still places every node");
  assert.equal(diagram.edges.filter(isBackEdge).length, 1, "exactly the closing edge is a back edge");
  const svg = renderDiagramSvg(diagram, diagram.alt);
  assert.equal((svg.match(/class="ek-diagram-edge/g) || []).length, 3, "all three edges are drawn");
  assert.equal((svg.match(/class="ek-diagram-head"/g) || []).length, 3, "every edge keeps its head");
  assert.match(svg, /ek-diagram-edge--return/, "the closing edge is marked as a return");
  // The bow sits outside the stack, so the viewBox has to start before the origin or it is clipped.
  // Which axis it extends depends on the orientation the renderer chose, so either one satisfies it.
  const [x0, y0] = svg.match(/viewBox="(-?[\d.]+) (-?[\d.]+)/).slice(1).map(Number);
  assert.ok(x0 < 0 || y0 < 0,
    `a bowed return needs the viewBox extended to contain it; got origin ${x0},${y0}`);
});

test("a branch puts its siblings in one layer instead of a false chain", () => {
  // This is PREM-BIO-003's shape reduced to its bones: one sorting step, three destinations. The old
  // renderer drew destination one into destination two into destination three.
  const diagram = {
    id: "diagram-branch", direction: "left-to-right",
    alt: "One sorting step dispatching to three destinations.",
    nodes: ["sort", "one", "two", "three"].map((id) => ({ id, label: id })),
    edges: [{ id: "e1", from: "sort", to: "one" }, { id: "e2", from: "sort", to: "two" }, { id: "e3", from: "sort", to: "three" }]
  };
  const { layers } = layerNodes(diagram);
  assert.equal(layers.length, 2, "a one-to-many step is two layers, not four");
  assert.deepEqual(layers[1].map((n) => n.id), ["one", "two", "three"], "the destinations are siblings");
  const svg = renderDiagramSvg(diagram, diagram.alt);
  assert.equal((svg.match(/class="ek-diagram-edge/g) || []).length, 3);
});
