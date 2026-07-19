# Build a route to a study plan

## Task

A learner wants to reach `topic-orientation-study-plan`. Build the shortest prerequisite-respecting route shown by the current map, and explain what the route does and does not establish.

## Givens and representation

The map records this chain:

| Outcome ID | Direct prerequisite |
|---|---|
| `topic-orientation-map-and-pathways` | none |
| `topic-orientation-diagnostic-baseline` | `topic-orientation-map-and-pathways` |
| `topic-orientation-mastery-and-retrieval` | `topic-orientation-diagnostic-baseline` |
| `topic-orientation-metacognition-and-error-log` | `topic-orientation-mastery-and-retrieval` |
| `topic-orientation-study-plan` | `topic-orientation-metacognition-and-error-log` |

The unknown is the justified study order. The relevant relation is *prerequisite*, because the task asks about sequence; containment and cross-links cannot answer that question.

:::{worked-example}
:id: worked-example-orientation-route

1. **Select the model.** Use directed prerequisite links, not screen position or module order.
2. **Plan.** Start at the target, follow each prerequisite backward, stop at a node without a prerequisite, then reverse the collected list.
3. **Execute.** The resulting order is map-and-pathways → diagnostic-baseline → mastery-and-retrieval → metacognition-and-error-log → study-plan.
4. **Check direction.** In every adjacent pair, the source is the listed prerequisite of the next outcome. The first topic has no graph prerequisite, so the backward trace is complete.
5. **Interpret.** If none of these outcomes is yet secure, begin with map-and-pathways. If the first three are already demonstrated, begin with metacognition-and-error-log; do not replay secure work solely because it appears earlier.
6. **State the boundary.** The chain gives a curriculum dependency, not proof of mastery, a required calendar, or an admissions rule.
:::

The table and the arrow sentence carry the same relation. The table is convenient for checking one dependency at a time; the arrow chain makes the whole order easier to summarize. Neither representation is the learner's actual progress record.

**Self-explanation prompt:** Which decision mattered most—choosing a target, recognizing the link type, or reversing the backward trace? Explain why choosing the wrong link type would invalidate the rest of the solution.

:::{source-note}
:claims: claim-map-layers, claim-map-link-types, claim-map-label-scope, claim-map-stable-identity
:sources: source-premed-knowledge-graph

The worked example applies the current graph's stable topic records and directed prerequisite semantics. It makes no claim that completing or viewing a node demonstrates mastery.
:::
