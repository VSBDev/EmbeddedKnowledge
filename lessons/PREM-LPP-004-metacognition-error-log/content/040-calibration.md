# Put confidence and performance on one scale

:::{definition}
:id: definition-calibration-gap

For one task, let confidence $C$ be the learner's predicted percentage of points on a declared rubric and let performance $P$ be the percentage actually earned on that same rubric. The **signed calibration gap** is $G=C-P$, measured in percentage points.

- $G>0$ means confidence exceeded performance on that task.
- $G<0$ means confidence was lower than performance on that task.
- $G=0$ means the two values matched; it does not prove that either measure is perfect.
:::

Read the expression as “predicted rubric percentage minus observed rubric percentage.” A prediction of 85% with rubric performance of 55% gives a gap of positive 30 percentage points. A prediction of 45% with performance of 80% gives negative 35 percentage points.

The sign answers direction; the magnitude answers distance on the matched scoring scale. Neither answers why the gap occurred. A learner may predict the rubric inconsistently, a rubric may omit an important operation, or a single item may be noisy. Therefore record the task, scoring rule, support, and timing beside the numbers and look for a pattern across comparable probes. If confidence instead means the probability that the whole response is correct, do not subtract it from a partial-credit score; report the measures separately or use an all-or-none outcome.

## Calibrate a judgment, not a person

Use task-bounded language:

- “Predicted rubric performance exceeded observed performance on this selection task by 30 points.”
- “Predicted rubric performance was lower than observed performance on two varied retrieval tasks.”

Avoid trait labels such as “an overconfident learner.” One result does not establish a stable characteristic. Feedback can ask the learner to point to the evidence used for the confidence judgment and then compare a later judgment with a later result.

## Categories remain provisional

The five operation categories—interpret, retrieve, select, execute, verify—organize evidence for action. They do not become more certain because a number was calculated. If intermediate work is missing, write “unresolved between selection and execution” and choose a probe that makes the plan visible.

One controlled study found that adaptive feedback about metacognitive judgments improved calibration on the trained perceptual task relative to performance-only feedback and generalized to an untrained recognition-memory task. The study aggregated repeated trial-level probability judgments with a quadratic score equal to one minus the Brier score and also analysed signal-detection measures; it did not use this lesson's one-task signed rubric-percentage gap. The result therefore supports the general claim that confidence–performance correspondence can be revised with feedback, not the behaviour or validity of this lesson's $G$. The small laboratory study also does not prove general transfer to every Premed task or validate this lesson's log.

:::{source-note}
:claims: claim-calibration-definition, claim-operational-categories, claim-calibration-feedback
:sources: source-debruin-monitoring-control, source-content-standard, source-carpenter-calibration-training

The broad confidence–performance relation is source grounded. The lesson's signed-gap convention is explicitly separated from the study's repeated-trial quadratic and signal-detection measures; the examples and task-bounded language are original here.
:::
