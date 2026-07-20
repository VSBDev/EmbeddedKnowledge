# Trace a high-confidence wrong answer

:::{worked-example}
:id: worked-example-model-selection

**Task.** A fictional rule-selection exercise supplies two models:

- Model A applies only when condition Alpha is present.
- Model B applies only when condition Beta is present.

The prompt states that Beta is present and asks the learner to choose a model, carry out its two supplied steps, and state a conclusion. The rubric assigns 25 points each for interpreting the condition, retrieving both model rules, selecting the applicable model, and executing the selected steps.

**Observed record.** Before feedback, Kai correctly restates that Beta is present, writes both model rules accurately, selects Model A, executes Model A's supplied steps without a procedural slip, and gives the wrong conclusion. After committing the response, Kai predicts earning 90% of the declared rubric points. The observed rubric performance is 50%: interpretation and retrieval are correct; selection and final execution under the applicable model are not.

**Unknown.** Which operation first failed, how is confidence calibrated on this attempt, and what should happen next?

**Model selection.** Use the monitor → diagnose → control → probe loop because the task supplies an observable response chain, scored performance, and confidence. Locate the earliest broken link before choosing an activity.

**Plan.** Check interpretation, retrieval, selection, execution, and verification in that order. Compute confidence minus performance. Choose an action that discriminates the proposed cause, then specify a new probe.

**Execution.**

1. Interpretation is supported: Kai correctly records Beta.
2. Retrieval is supported: both conditional rules are stated accurately.
3. Selection is contradicted: Beta calls for Model B, but Kai selects Model A. This is the first broken link.
4. Accurate execution of Model A does not rescue the answer because Model A is inapplicable. The later wrong conclusion follows from the earlier selection error.
5. The signed calibration gap is $90-50=+40$ percentage points. Predicted rubric performance exceeded observed performance on this task.
6. The next action is a short contrast set in which Alpha and Beta appear in varied wording and the learner must name the decisive condition before choosing a model. Rereading both full procedures would be broader than the evidence requires.
7. The fresh probe supplies a new pair of conditions after a delay, asks for the condition–model justification before execution, and records confidence only after the response is committed.

**Independent check.** Imagine Kai executes every Model A step perfectly again while Beta remains present. The answer is still wrong. Imagine instead that Kai selects Model B and then makes an arithmetic slip. The first broken link moves to execution. This counterfactual check confirms that selection, not general execution, is the best current diagnosis.

**Interpretation.** The completed log should read “selection error; high positive calibration gap on this task; contrast conditions and justify model choice; retest with a varied condition.” It should not read “does not know the chapter” or “is overconfident.”

**Self-explanation prompt.** Which observation ruled out retrieval as the first broken link, and why must the next probe expose model choice before execution?
:::

## Error-log row

| Task and conditions | Attempt evidence | First broken link | Calibration | Next action | Fresh probe |
|---|---|---|---|---|---|
| Choose between supplied Models A and B; Beta present; no feedback during attempt | Correct condition and rules; Model A selected; its steps executed | Selection; execution remains testable after correct selection | 90% predicted rubric score, 50% earned, +40 points | Contrast Alpha/Beta cases and justify choice | New condition wording after delay; justify, execute, then predict the rubric score |

The same information can be written as six labelled sentences. Visual alignment is not required.

:::{source-note}
:claims: claim-monitoring-control, claim-calibration-definition, claim-retrieval-cues, claim-error-log-loop, claim-operational-categories, claim-actionable-feedback
:sources: source-debruin-monitoring-control, source-chen-retrieval-judgments, source-authoring-evidence, source-content-standard

The sources support evidence-linked monitoring, retrieval before feedback, task/process feedback, and a next action. All task rules, names, scores, calculations, and log entries are original fictional material.
:::
