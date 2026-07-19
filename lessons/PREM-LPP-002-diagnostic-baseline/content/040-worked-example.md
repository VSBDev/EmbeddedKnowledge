# Work a three-node baseline

:::{worked-example}
:id: worked-example-three-node-baseline

**Task.** Classify three fictional prerequisite nodes from one low-stakes record and choose the next route for each. The unknowns are the provisional state, the key uncertainty, and the next evidence-producing action.

**Givens, assumptions, and boundary.** Every prompt was untimed, attempted before feedback, and available as plain text. The prompts are assumed to target the same declared node within each row, so the representation change is a bounded variation rather than a new construct. No units or sign conventions apply to this classification task, and no personal record is involved.

| Node | Access and accuracy | Reasoning | Bounded variation | Confidence |
| --- | --- | --- | --- | --- |
| Alder | No attempt on either probe; learner writes “I have not met this notation” | None yet | Not attempted | Low |
| Birch | Accurate on a familiar form after a cue; second response uses the same memorized steps incorrectly | Names the steps but not the relation | Fails when the same relation is presented as a table | High |
| Copper | Accurate independently on two forms | Explains why the relation applies and checks the result | Selects the same relation in a new bounded case | Medium |

**Model selection.** The task asks for current knowledge accessibility and routing, so use the five evidence dimensions and three operational states. Do not average the rows or let confidence decide the state.

**Plan.** For each row: establish whether a usable model is accessible; inspect accuracy and explanation; test whether the relation survives variation; compare confidence with the record; assign the narrowest defensible state; then choose a route that will produce new evidence.

**Alder.** No usable response model appears, and the learner explicitly reports no prior encounter. Classify Alder as **unfamiliar**, provisionally. Begin with a bounded explanation and complete worked model, then ask for an explained completion response. Before concluding that the node itself is unfamiliar, verify that notation and response access did not cause the blank.

**Birch.** Some procedure is accessible, so “unfamiliar” discards evidence. Yet the response depends on a cue, the explanation does not identify the relation, and the table variation fails. Classify Birch as **fragile**. Compare the familiar and table forms, model the shared relation, fade the prompts, and retry with a different table. High confidence adds a calibration-repair flag; it does not make the knowledge secure.

**Copper.** The record contains accurate independent responses, an explanation, a check, and bounded adaptation. Classify Copper as **provisionally secure**. Skip redundant initial instruction, advance to the reachable node, and schedule a delayed varied prompt. Medium confidence is consistent with, but does not prove, the performance state.

**Independent check.** Reverse-test each decision. Calling Alder fragile would require some usable relevant knowledge that the record does not show. Calling Birch secure would have to explain the failed variation and cue dependence. Calling Copper fragile would ignore the independent varied pattern. The labels therefore discriminate the three records without treating them as permanent.

**Interpretation.** The result is not “this learner is one-third unfamiliar, one-third fragile, and one-third secure.” It is three node-specific route decisions: initial instruction for Alder, targeted repair for Birch, and delayed verification after advancement for Copper.

**Self-explanation prompt.** Which observation most strongly separates Birch from Copper, and why is confidence not that observation?
:::

:::{source-note}
:claims: claim-three-state-model, claim-pattern-over-snapshot, claim-guidance-fades, claim-confidence-calibration
:sources: source-premed-syllabus, source-content-standard, source-authoring-evidence, source-premed-graph

The example applies the operational three-state model, multiple-evidence principle, and adaptive fading rule. All node names, observations, decisions, and routes in the example are original fictional material.
:::
