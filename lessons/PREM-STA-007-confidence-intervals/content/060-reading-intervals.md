# Three kinds of practice

Work each task before reading its answer. The support drops away as you go: the first gives you every input, the second gives you no arithmetic at all, and the third asks you to run the recipe backwards.

**Teaching example, not medical advice.** Every cohort, trial, clinic, and threshold in this lesson is invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care.

## Task one: build it

A second team repeats the dinner-timing comparison in a large clinic. Their estimate, late group minus early group, is 6.4 mg/dL and its standard error is 3.5 mg/dL. The report specifies a large-sample normal approximation, so use 1.96.

Build the 95% confidence interval, state its width, and say in one sentence what the interval supports.

---

The margin of error is 1.96 × 3.5 = 6.86 mg/dL. Subtracting gives 6.4 − 6.86 = −0.46, and adding gives 6.4 + 6.86 = 13.26. The interval runs from **−0.5 to 13.3 mg/dL** and is 13.8 mg/dL wide.

It contains zero. This clinic's data are compatible with no difference at all, and equally compatible with a difference of 13 mg/dL, and with a small effect running the other way. What it supports is very little. A study can produce a positive-looking estimate and still leave the direction open, and reporting 6.4 mg/dL on its own would have concealed that.

## Task two: read three of them

Three trials of three different interventions report the difference in average fasting glucose as **control minus intervention**, in mg/dL, with a 95% confidence interval. Positive values mean the intervention group's average was lower; negative values mean it was higher. No clinical-importance threshold has been supplied, so interpret direction and numerical precision only.

| Trial | Estimate | 95% interval | Width |
| --- | --- | --- | --- |
| A | 0.4 | 0.1 to 0.7 | 0.6 |
| B | 12.0 | −3.0 to 27.0 | 30.0 |
| C | 9.0 | 6.0 to 12.0 | 6.0 |

No arithmetic. Answer three questions.

1. Which trials exclude zero?
2. Which trial has pinned down the size of its effect most tightly?
3. Which trial's result would you describe as uninformative, and why is that different from saying the intervention does nothing?

---

Trials A and C exclude zero. Trial B does not: its interval reaches from −3 to 27.

Trial A has pinned its effect down most tightly in absolute terms, with a width of 0.6 mg/dL. Its whole compatible range is positive under the stated control-minus-intervention contrast. Trial C is also entirely positive, but its interval is 6.0 mg/dL wide—ten times the width of A's. Without a pre-stated clinical threshold, neither interval justifies calling its effect clinically small, large, or appreciable.

Trial B is the uninformative one for direction and size. Its interval covers negative values, zero, and positive values across a 30.0 mg/dL span. That is not the same as evidence of no effect. Trial B is compatible with values far from zero in either direction; it simply cannot locate the parameter well. A reader who writes "trial B showed no effect" has turned an absence of evidence into evidence of absence, which is a stronger claim and one this trial cannot support.

## Task three: run it backwards

A large-sample paper reports a difference of 6.0 mg/dL with a normal-approximation **90%** confidence interval of 0.8 to 11.2. The authors note that the interval excludes zero.

1. Recover the standard error.
2. Work out what the 95% interval would have been.
3. Say what you now think of the authors' note.

---

The margin of error is half the width, and the width is 10.4, so the margin is 5.2 mg/dL. A 90% interval uses a multiplier of 1.645, so the standard error is 5.2 / 1.645 = 3.16 mg/dL. Check it against the centre: (0.8 + 11.2) / 2 = 6.0, which matches the reported estimate.

At 95% the multiplier is 1.96, so the margin becomes 1.96 × 3.16 = 6.19. The interval would have been **−0.2 to 12.2 mg/dL**, and it would have contained zero.

The authors' note is true and it is doing a lot of quiet work. The same data at the level almost every journal uses would not have excluded zero. Reporting a 90% interval is a legitimate choice if it was made in advance and stated plainly, and it is something else if the level was chosen after the 95% interval was inspected. You cannot tell which happened from the paper alone, which is why the design lessons insisted on saying what you will do before you look.

:::{source-note}
:claims: claim-ci-definition, claim-confidence-level-long-run
:sources: source-nist-confidence-limits, source-nist-what-are-ci

These sources support two things only: the interval-estimate recipe run in every task above, and the reading of a confidence level as a property of the procedure across repeated samples. The three trials and the paper reporting at 90% were invented for this lesson.
:::
