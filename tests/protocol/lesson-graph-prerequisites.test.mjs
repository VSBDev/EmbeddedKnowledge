import assert from "node:assert/strict";
import test from "node:test";
import { prerequisiteGaps, graphPrerequisites } from "../../scripts/lib/lesson-graph-prerequisites.mjs";

const graph = {
  links: [
    { type: "prerequisite", source: "topic-sci-variables-controls", target: "topic-sta-data-types" },
    { type: "prerequisite", source: "topic-qnt-ratios", target: "topic-sta-data-types" },
    { type: "cross-link", source: "topic-bio-cells", target: "topic-sta-data-types" }
  ]
};

test("a lesson must cover every prerequisite edge the graph draws into its outcome", () => {
  // The case this exists for. PREM-STA-001 declared none, and the graph agreed with it, while the
  // lesson's own first scene opened with a retrieval check on another lesson. Both copies were wrong
  // together, and their agreement is why nothing noticed.
  const gaps = prerequisiteGaps({
    lessons: [{ id: "PREM-STA-001", outcomes: ["topic-sta-data-types"], prerequisites: [] }],
    graph
  });
  assert.equal(gaps.length, 1);
  assert.match(gaps[0], /topic-qnt-ratios, topic-sci-variables-controls/);

  assert.deepEqual(prerequisiteGaps({
    lessons: [{
      id: "PREM-STA-001",
      outcomes: ["topic-sta-data-types"],
      prerequisites: ["topic-sci-variables-controls", "topic-qnt-ratios"]
    }],
    graph
  }), []);
});

test("a lesson may declare more than the graph draws, but never fewer", () => {
  // PREM-STA-009 declares three where the graph draws one, and it is right: an author knows what
  // their scenes lean on and the graph is coarser than a lesson. Equality would have made being
  // right about your own lesson a validation failure.
  assert.deepEqual(prerequisiteGaps({
    lessons: [{
      id: "PREM-STA-009",
      outcomes: ["topic-sta-data-types"],
      prerequisites: ["topic-sci-variables-controls", "topic-qnt-ratios", "topic-extra-the-author-knows-about"]
    }],
    graph
  }), []);

  // One of the two missing is still a gap.
  assert.equal(prerequisiteGaps({
    lessons: [{ id: "X", outcomes: ["topic-sta-data-types"], prerequisites: ["topic-qnt-ratios"] }],
    graph
  }).length, 1);
});

test("only prerequisite links count, and a lesson never requires an outcome it teaches", () => {
  // A cross-link is explicitly not an ordering constraint; the graph document says so.
  assert.deepEqual(graphPrerequisites(graph).get("topic-sta-data-types"),
    new Set(["topic-sci-variables-controls", "topic-qnt-ratios"]));

  // A lesson teaching two topics where one leads to the other satisfies that edge itself.
  assert.deepEqual(prerequisiteGaps({
    lessons: [{
      id: "Y",
      outcomes: ["topic-sta-data-types", "topic-qnt-ratios"],
      prerequisites: ["topic-sci-variables-controls"]
    }],
    graph
  }), []);
});
