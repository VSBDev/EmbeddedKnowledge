# Clinical wrap-up: what a diabetes service should do with 0.7 to 17.3

**Teaching example, not medical advice.** Every cohort, trial, clinic, and threshold in this lesson is invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care.

A diabetes service has the dinner-timing result in front of it. Difference 9.0 mg/dL, 95% confidence interval 0.7 to 17.3. Two decisions are on the agenda.

> Should we start telling patients to move dinner earlier?
>
> Should we fund a larger study?

The interval answers the second question well and the first question only partly. Working out which is which is the skill this lesson exists for.

## Give the interval the right ruler

The ruler must describe the same quantity as the interval: here, a difference between two population averages. A diagnostic cut point for one person's glucose result would answer a different question and cannot establish the clinical importance of this group-mean contrast.

For this teaching example, suppose the service states in advance that a population mean difference smaller than 5 mg/dL would not change its advice. The value is invented; real work would need clinical justification for the exact estimand and population.

## The no-difference value is rarely the number a service cares about

Clearing zero says the direction is supported. A service is asking a different question: is the effect big enough to be worth changing what we say to patients?

That means picking a value first. Equivalence trials, which ask whether two treatments are close enough to be treated as interchangeable, already work this way. In an equivalence trial the margins of acceptable difference are set in advance and justified clinically, and equivalence is inferred only when the entire confidence interval falls inside those margins. The general move is the useful one here: choose the difference that would change practice, then look at where the interval sits relative to *that* number as well as relative to zero.

Suppose the service decides that anything under 5 mg/dL would not change its advice.

- The interval runs from 0.7 to 17.3. The value 5 sits inside it.
- So the study is compatible with the effect being below the service's threshold, and compatible with it being well above.
- The interval has not answered the service's question, even though it excluded zero.

That is the honest answer to the first agenda item. The study supports the direction and cannot support the advice.

## What a larger study could buy

The second agenda item begins with arithmetic. The width is set mainly by the standard error, and the standard error falls with the square root of the group size. Planning can therefore target precision, but it cannot predetermine the next study's centre.

| Study design | Per group | Anticipated standard error | 95% half-width | Interval if the estimate remained 9.0 |
| --- | --- | --- | --- | --- |
| The study in hand | 30 | 4.13 | 8.27 | 0.7 to 17.3 |
| Four times the size, large-sample normal approximation | 120 | about 2.07 | about 4.06 | about 4.9 to 13.1 |

Four times the people approximately halves the anticipated standard error and width if the population spread and design stay the same. The last column is only a conditional illustration: it holds the point estimate at 9.0 to show what the narrower width would look like. A future sample will produce a new estimate and a new estimated spread, so its realised interval is not known in advance and need not be 4.9 to 13.1.

For planning, the service must state an anticipated effect and spread and choose a target half-width or another justified design criterion. If it anticipates a 9 mg/dL effect and wants a lower limit above 5, it needs a target half-width below 4 mg/dL. The four-times design is close but its anticipated half-width of about 4.06 mg/dL does not meet that target. Even a design that meets the precision target cannot guarantee the realised interval will clear 5, because the future estimate is random. Precision is something a study can plan to buy; the eventual location of its interval is not.

## Where this stops

Three things are outside this lesson on purpose.

The interval says nothing about whether the study was any good. A biased design produces a narrow interval around the wrong number, because the width answers how much the estimate would wobble across repeats and says nothing about whether every repeat would be wrong in the same direction. Everything the design lessons taught about allocation, blinding, measurement, and confounding still applies, and none of it is repaired by arithmetic.

The interval says nothing about whether 9 mg/dL matters to a patient. The 5 mg/dL threshold above was invented for the example. Choosing that number in real work needs clinical judgement about outcomes, side effects, cost, and what patients actually want, and the block's final lesson is built around exactly that decision.

The interval attaches no probability to the parameter. That was the misconception scene, and it holds in a meeting room as well as on paper: the service cannot say there is a 95% chance the effect is between 0.7 and 17.3. What it can say is that, under the stated sampling and analysis conditions, a procedure with about 95% long-run coverage produced this range and values outside it are the ones this study argues against.

## What comes next

You now have one description of this evidence. The next lesson builds the other one, which starts from the assumption that the true difference is zero and asks how surprising 9.0 mg/dL would be. It reaches a compatible conclusion, and it is the version most papers lead with. Having built the interval first, you will be able to see what that version leaves out.

:::{source-note}
:claims: claim-ich-e9-margins, claim-width-depends-on-n-and-sd, claim-ich-e9-report-ci, claim-t-multipliers, claim-normal-975-quantile
:sources: source-ich-e9, source-nist-confidence-limits, source-nist-t-table, source-nist-normal-table

These sources support the clinical-trials guidance on pre-specified and clinically justified margins that an entire confidence interval must fall within, the requirement to report effect estimates with confidence intervals, the dependence of interval width on sample size through the square-root term, the t multiplier used for the study in hand, and the normal multiplier used for the larger-study planning approximation. The service, the meeting, the 5 mg/dL threshold, and every figure in the table are original teaching material and are not observations of real patients.
:::
