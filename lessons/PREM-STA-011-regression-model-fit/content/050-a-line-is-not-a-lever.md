# Two things the line does not say

A drawn line is persuasive in a way a table of sixty rows never is. It goes in one direction, it has a rate attached, and it looks like an instruction. Both of the errors below come from that appearance, and both survive in published work.

Commit to an answer before reading on.

:::{check}
:id: check-commit-before-repair
:kind: diagnostic

The fitted line is {math}`\hat{y} = 153.4 - 3.37x`, with {math}`r^2 = 0.10`.

1. True or false: the study shows that moving a patient's dinner two hours earlier would lower their fasting glucose by about 6.7 mg/dL.
2. A second team fits a line to different data and reports {math}`r^2 = 0.90`. Is their straight-line model better supported than this one?
:::

Hold your two answers. The rest of this section is about why both questions are traps.

## The line as a lever

:::{misconception}
:id: misconception-line-is-a-lever

**The incorrect model.** The slope is −3.37 mg/dL per hour. Therefore each hour added to a patient's dinner-to-sleep interval removes 3.37 mg/dL from their fasting glucose, and a clinic that persuades patients to eat two hours earlier should expect around 6.7 mg/dL less.

This reading is natural, it is what the units seem to promise, and it is wrong about what was measured.

**What it cannot explain.** The slope was estimated by comparing *different people* who happened to eat at different times. It contains no information about what happens inside one person when their habit changes. Those two quantities can differ in size, in direction, or in existence. People who habitually eat early may differ from people who eat late in shift pattern, sleep length, what they eat as well as when, medication timing, and a list nobody recorded. Any of those could produce a downward drift in the scatter while dinner timing itself does nothing.

**A test that separates the two readings.** If the line described a mechanism connecting the two quantities, it should not matter which one you put on the left. So fit it the other way: predict the interval from the glucose. Least squares happily obliges and returns a slope of −0.0304 hours per mg/dL. Turn that upside down to put it back in the first fit's units and it claims −32.9 mg/dL per hour, nearly ten times as steep as the −3.37 the first fit gave.

Both lines are correct least-squares fits to the same sixty dots. They disagree because each one minimises errors in a different direction, and the choice of direction is made by the analyst, not by the data. Multiply the two slopes together and you get 0.102, which is {math}`r^2` exactly. The gap between the two answers *is* the weakness of the association. A relationship in the world would not care which axis you chose; a description of a cloud does.

**The better model.** The slope is a statement about *association per hour*: across these sixty adults, the ones with a one-hour longer interval averaged 3.37 mg/dL lower fasting glucose. Whether an *effect per hour* exists, and whether it is that size, is a question about causes, and it is settled by design and by evidence outside this dataset. The earlier lesson on [correlation and causation](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007) sets out what that takes; nothing in the fitting method supplies any of it.
:::

So the answer to the first question is false. The study supports "people who left two more hours averaged about 6.7 mg/dL lower", and does not support "moving a patient would lower theirs by 6.7". One sentence describes sixty people who were observed; the other predicts one person who would be changed.

## A high {math}`r^2` as a certificate

:::{misconception}
:id: misconception-high-r-squared

**The incorrect model.** {math}`r^2` measures how well the model fits, so a high value means the model is right and a low value means it is wrong. A team reporting 0.90 has a better model than a team reporting 0.10.

**What it cannot explain.** Here are nine paired values, invented to make exactly one point. A straight line fitted to them has {math}`r = 0.95` and {math}`r^2 = 0.90`, which by the incorrect model would be an excellent result.

| {math}`x` | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| {math}`y` | 30 | 48 | 60 | 69 | 76 | 81 | 85 | 88 | 90 |
| residual | −11.5 | −0.6 | +4.4 | +6.4 | +6.3 | +4.3 | +1.3 | −2.8 | −7.8 |

Read the residual row from left to right. It starts far below zero, climbs to a peak in the middle, and falls away again. That arch is the signature of a curve that has had a straight line forced through it. The response here rises quickly and then flattens, the line cannot flatten, so it undershoots at both ends and overshoots through the middle. Ninety per cent of the variation being accounted for did not stop the shape from being wrong, and no summary number would have revealed it. The residual plot did, in one glance.

**The better model.** Treat {math}`r^2` as a measure of *how much*, and the residual plot as the test of *whether the shape is right*. They answer different questions and neither substitutes for the other. A high {math}`r^2` also says nothing about whether the predictor was the sensible one to use, whether the data reach the values you care about, or whether one extreme point is holding the whole fit in place through the leverage described earlier.
:::

Which makes this lesson's own fit an instructive case in the opposite corner. Its {math}`r^2` is 0.10, near the bottom of anything a journal would print, and its residual plot is clean: no arch, no funnel, no single point dragging the line. The straight form is right and the relationship is weak. Those are separate findings, and the second question above has no answer without seeing the other team's residual plot.

:::{check}
:id: check-diagnose-two-reports
:kind: retrieval

Two fitted lines arrive on your desk.

**Report A.** Serum potassium against a fictional drug dose in 50 adults. {math}`r^2 = 0.71`. The residual plot bows: negative at both ends of the dose range, positive through the middle.

**Report B.** Serum potassium against the same dose in a different 50 adults. {math}`r^2 = 0.11`. The residual plot is a shapeless band around zero.

Which model's *form* is better supported, which relationship is *stronger*, and what would you ask each team for?
:::

Report B's form is better supported: its residuals carry no structure, so a straight line is an adequate shape for those data. Report A's relationship is stronger, since it accounts for 71% of the variation against 11%. Those verdicts point in opposite directions and both are correct, which is the whole point of this comparison. Report A should be asked to refit with a form that can bend, because a straight line is demonstrably the wrong shape and its slope is therefore an average of a rate that changes. Report B should be asked what the slope is in the units of the data and how wide the residual band is, because with 11% accounted for the line may be honest and still be nearly useless for saying anything about one patient.

:::{source-note}
:claims: claim-r-squared-not-sufficient, claim-residual-plot-structure, claim-least-squares-outlier-sensitivity
:sources: source-nist-model-fit, source-nist-residual-structure, source-nist-least-squares

These sources support the statements that a high coefficient of determination does not guarantee that a model fits the data well, that graphical residual analysis is the primary means of judging fit while no single residual plot can justify a model on its own, that systematic structure in the residuals indicates the functional form can be improved, and that least-squares fits are highly sensitive to outliers because one or two unusual points can seriously distort the result. The reverse fit, the nine constructed values, and both laboratory reports were written for this lesson.
:::
