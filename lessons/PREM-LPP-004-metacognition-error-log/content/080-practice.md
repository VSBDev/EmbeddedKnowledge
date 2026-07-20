# Fade support across new error records

Work in order. Commit each response before reading its feedback. The support decreases from a missing field to independent error-log construction.

## 1. Complete a log entry

**Record.** The task asks which of two supplied rules applies. Its four-part rubric assigns 25% each for interpretation, retrieval, selection, and execution; verification is not scored in this completion task. Mira restates the condition correctly, writes both rules, and leaves the choice blank. After committing the response, Mira predicts earning 35% of the declared rubric points. Observed rubric performance is 50%: interpretation and retrieval earn 25 points each, while selection and execution earn 0.

Complete: “The earliest unsupported operation is ___ because ___. The signed gap is ___. The next action should ___, followed by ___.”

**Feedback after an attempt.** Selection is the earliest unsupported operation because the evidence supports interpretation and retrieval but contains no model choice. The gap is $35-50=-15$ percentage points. Use a supported condition-to-rule comparison, then a fresh choice with different wording. If you chose retrieval, notice that both rules were produced; if you chose execution, notice that no procedure was selected to execute.

## 2. Compare two records

Both tasks provide the same model and values. Their five-part rubric assigns 15% to interpretation, 15% to retrieval, 10% to selection, 40% to accurate execution, and 20% to the required range check.

- **Record Ash:** the learner interprets the task, retrieves and selects the correct model, substitutes one value into the wrong location, notices that the result violates the supplied range, and predicts earning 55% of the declared rubric points. Observed rubric performance is 60%: $15+15+10+0+20$.
- **Record Brook:** the learner interprets the task, retrieves and selects the correct model, and executes it accurately but does not perform the required range check; the unverified answer happens to be correct. The learner predicts earning 95% of the declared rubric points. Observed rubric performance is 80%: $15+15+10+40+0$.

For each record, name the first unsupported operation and choose a next probe. Then interpret the confidence gap without calling either learner generally confident or unconfident.

**Feedback after an attempt.** Ash first fails at execution; verification is actually evidenced by noticing the range violation. The gap is negative 5 points. A fresh probe should make substitution visible and preserve the range check. Brook first fails at verification; the gap is positive 15 points. A new case should require a written range or boundary check before confidence is recorded. Correct output in Brook does not erase the missing required operation.

## 3. Resolve uncertainty instead of guessing

**Record Cedar.** This task uses an all-or-none 100-point rubric for the final answer: a correct answer earns 100%, and an incorrect answer earns 0%. The final answer is wrong, and no intermediate work was preserved. The learner predicted earning 80% of the declared rubric points; the observed rubric score is therefore 0%.

Create the shortest defensible log entry.

**Feedback after an attempt.** The gap is positive 80 points, but the error category is unresolved. The record does not distinguish interpretation, retrieval, selection, or execution. The next action is not “reread everything”; it is a think-aloud or written-step probe using a new bounded task, with each operation committed before feedback. The new record can then support a targeted repair.

## 4. Independent mixed case

**Record Delta.** A fictional classification task supplies three criteria. The learner restates all three, recalls the category definitions, applies two criteria, omits the third without noticing, and selects the wrong category. After committing the response, the learner predicts earning 65% of the declared rubric points. The analytic rubric assigns 20% to interpretation, 20% to retrieval, 40% to applying all three criteria, and 20% to verification. The learner earns 40%.

Without category hints:

1. locate the first broken link;
2. compute and interpret the gap;
3. state an alternative explanation that the record does not rule out;
4. choose one repair; and
5. specify a delayed, varied probe.

**Feedback after an attempt.** Interpretation and retrieval are supported. Execution first fails when the third criterion is omitted, although an attentional or representation issue remains an alternative because the record does not show why. The gap is positive 25 points. A matching action is to externalize and check all supplied criteria on two completion cases, then remove the checklist and attempt a new three-criterion case after a delay. If the learner cannot restate the third criterion then, revise the diagnosis toward retrieval; if the criterion is stated but again not applied, execution remains better supported.

## Retry rule

Do not replay the same answer sequence. Invent or request an equivalent case with new surface wording, preserve intermediate steps, record confidence after commitment, and decide whether the fresh evidence confirms or moves the first broken link.

:::{source-note}
:claims: claim-monitoring-control, claim-calibration-definition, claim-retrieval-cues, claim-error-log-loop, claim-operational-categories, claim-actionable-feedback
:sources: source-debruin-monitoring-control, source-chen-retrieval-judgments, source-authoring-evidence, source-content-standard

The practice progression applies source-grounded retrieval and process feedback. All records, rules, numbers, classifications, actions, and feedback are original fictional material; the operation categories remain a provisional instructional model.
:::
