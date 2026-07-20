# Monitor, diagnose, control, and probe

An error log is useful only when it closes a decision loop. A list of wrong answers records history; it does not yet explain what failed or what evidence should come next.

## The four-part decision loop

1. **Monitor:** preserve the attempt before feedback, its conditions, intermediate work, rubric performance, and confidence.
2. **Diagnose:** locate the earliest operation for which the record lacks adequate evidence.
3. **Control:** choose the smallest learning action that directly exercises that operation.
4. **Probe:** attempt a fresh, bounded case after repair; revise the diagnosis and confidence from the result.

Monitoring and control are connected because the chosen action should respond to the monitored evidence. The fresh probe matters because the diagnosis is a hypothesis. If a targeted selection contrast produces correct model choice but execution still fails, the new evidence moves the earliest unsupported link.

## Locate the first broken link

Use this ordered representation:

**interpret → retrieve → select → execute → verify**

- **Interpret:** identify what the task, representation, conditions, and output require.
- **Retrieve:** bring the relevant concept, rule, relation, or procedure to mind before feedback.
- **Select:** choose which available model or procedure fits the conditions.
- **Execute:** apply the selected model accurately and completely.
- **Verify:** check the result against units, boundary conditions, an alternative representation, or another task-specific criterion.

The instructional job of this chain is localization. Start at interpretation and move forward. The **first broken link** (`term-first-broken-link`) is the earliest operation whose required evidence is absent or contradicted. Later failures may be consequences. These categories are not claimed to be exhaustive psychological causes; they are an author-created procedure for choosing a discriminating next probe.

## Add calibration without replacing performance

After committing the attempt but before feedback, predict the percentage of points the response will earn on the declared rubric. Compare that prediction with the percentage actually earned on the same rubric. This matched comparison is **calibration** (`term-calibration`). High predicted performance is not evidence of accuracy by itself, and a low prediction does not erase a strong response. The pair—predicted and observed rubric performance—reveals a gap that can be updated after another task.

Do not subtract unlike quantities. A 70% probability that an entire answer is correct and a 40% partial-credit rubric score answer different questions. Either predict the rubric percentage directly or report the two measures separately.

Retrieval supplies observable performance cues that rereading alone cannot. In the cited bounded laboratory tasks, the reported advantage concerned the across-item rank correspondence between judgments and later accuracy after retrieval versus restudy. That repeated-item correspondence is mathematically distinct from this lesson's signed gap for one task: either measure can look favourable while the other does not. The finding therefore supports retrieval performance as one useful cue; it does not make retrieval the only useful cue, validate this lesson's gap, or guarantee accurate judgment in every domain.

## Minimal error-log row

Record these fields in order:

| Field | Question |
|---|---|
| Task and conditions | What performance was required, with what support, delay, and representation? |
| Attempt evidence | What did the learner actually produce before feedback? |
| First broken link | Which earliest operation is unsupported, and what alternative remains possible? |
| Calibration | What was the predicted rubric percentage, what percentage was earned, and what was their signed difference? |
| Next action | Which activity directly exercises the proposed broken link? |
| Fresh probe | What new case and timing could confirm or revise the diagnosis? |

In a linear format, write each field as a heading followed by one or two sentences. The table carries no information that is absent from the ordered questions.

:::{source-note}
:claims: claim-monitoring-control, claim-calibration-definition, claim-retrieval-cues, claim-error-log-loop, claim-operational-categories
:sources: source-debruin-monitoring-control, source-chen-retrieval-judgments, source-authoring-evidence, source-content-standard

The sources support monitoring linked to control, calibration against performance, retrieval-based cues, and feedback that produces a next action. The five-link chain and six log fields are an explicitly bounded author synthesis pending review.
:::
