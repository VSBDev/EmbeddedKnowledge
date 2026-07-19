# Classify before the explanation

Write one state and one evidence phrase for each case before reading below the divider.

:::{check}
:id: check-three-state-retrieval

1. **Delta:** produces no relevant response, reports no prior encounter, and can use the response format without difficulty.
2. **Elm:** recalls a rule and succeeds with the familiar wording, but cannot explain the relation and selects a different rule after the representation changes.
3. **Fjord:** answers accurately without cues across two representations, explains the decision, and succeeds in one bounded application, while reporting low confidence.
:::

---

**Feedback after the attempt**

1. Delta is provisionally **unfamiliar** because no usable response model appears. Next, provide initial instruction and seek a first explained response.
2. Elm is **fragile** because relevant knowledge is accessible but cue-bound, weakly explained, and not adaptable. Next, compare representations and retry after faded support.
3. Fjord shows **provisionally secure performance with a calibration flag**. The independent varied pattern supports secure knowledge; low confidence calls for a later calibration check rather than erasing that evidence.

If your labels differed, identify the dimension you used. A label based only on “some answer was correct” ignores explanation and adaptation. A label based only on confidence ignores the response record. Retry by covering the feedback and inventing one surface change that preserves each node's underlying operation.

:::{source-note}
:claims: claim-three-state-model, claim-pattern-over-snapshot, claim-retrieval-before-feedback, claim-confidence-calibration
:sources: source-premed-syllabus, source-content-standard, source-authoring-evidence, source-premed-graph

The sources support retrieval before feedback and a varied evidence pattern rather than a one-response security judgment. These cases and their feedback are original.
:::
