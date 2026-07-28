/**
 * Hold a lesson's declared prerequisites against the graph edges for the outcome it teaches.
 *
 * `prerequisites` in lesson.json is a hand-written copy of a fact the knowledge graph already owns.
 * Nothing read it, nothing checked it, and nothing consumed it, so it could disagree with the graph
 * indefinitely and no one would find out. A sweep of the 44 premed packs found exactly one
 * disagreement -- which sounds reassuring until you notice what the agreement was worth: PREM-STA-001
 * declared no prerequisites and the graph agreed, while the lesson's own first scene opened with a
 * retrieval check on PREM-SCI-003 and its second built a second meaning on top of PREM-QNT-003. Both
 * copies were wrong together, and their agreement was the reason it went unnoticed.
 *
 * So the rule is coverage, not equality: every prerequisite edge the graph draws into a lesson's
 * outcome must appear in the lesson's own list. A lesson may declare more, because an author knows
 * what their scenes actually lean on and the graph is coarser than a lesson -- PREM-STA-009 declares
 * three where the graph draws one, and it is right. What it may not do is declare fewer, because then
 * a learner arriving from the syllabus is told a route is open that the graph says is not.
 */

/** Prerequisite sources for each topic, read off the graph's link list. */
export function graphPrerequisites(graph) {
  const byTarget = new Map();
  for (const link of graph?.links ?? []) {
    if (link.type !== "prerequisite") continue;
    if (!byTarget.has(link.target)) byTarget.set(link.target, new Set());
    byTarget.get(link.target).add(link.source);
  }
  return byTarget;
}

/**
 * Report lessons whose declared prerequisites do not cover the graph's edges into their outcome.
 *
 * @param lessons  [{ id, outcomes, prerequisites }]
 * @param graph    the parsed graph dataset, used for its prerequisite links
 */
export function prerequisiteGaps({ lessons, graph }) {
  const byTarget = graphPrerequisites(graph);
  const problems = [];

  for (const lesson of lessons ?? []) {
    const declared = new Set(lesson.prerequisites ?? []);
    const required = new Set();
    // A lesson may teach more than one topic, and it inherits the dependencies of each.
    for (const outcome of lesson.outcomes ?? []) {
      for (const source of byTarget.get(outcome) ?? []) required.add(source);
    }
    // An outcome is its own prerequisite only in a cycle, which validate-premed-graph.mjs rejects;
    // but a lesson teaching two topics where one leads to the other would otherwise be told to
    // declare a prerequisite it satisfies itself.
    for (const outcome of lesson.outcomes ?? []) required.delete(outcome);

    const missing = [...required].filter((source) => !declared.has(source)).sort();
    if (missing.length) {
      problems.push(
        `${lesson.id} declares ${declared.size ? [...declared].join(", ") : "no prerequisites"}, but the graph ` +
        `draws ${missing.join(", ")} into ${(lesson.outcomes ?? []).join(", ")}. A learner arriving from the ` +
        "syllabus is told a route is open that the graph says is not. Declare it, or remove the graph edge if " +
        "the lesson genuinely does not need it."
      );
    }
  }

  return problems;
}
