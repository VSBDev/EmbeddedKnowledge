# Clinical wrap-up: what a diabetes service should do with 0.9 to 17.1

**Teaching example, not medical advice.** Every cohort, trial, clinic, and threshold in this lesson is invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care. The one exception in this scene is the set of diagnostic reference values quoted below: those are real, they are attributed to the body that publishes them, and they appear only to give an interval measured in mg/dL a genuine scale to be laid against.

A diabetes service has the dinner-timing result in front of it. Difference 9.0 mg/dL, 95% confidence interval 0.9 to 17.1. Two decisions are on the agenda.

> Should we start telling patients to move dinner earlier?
>
> Should we fund a larger study?

The interval answers the second question well and the first question only partly. Working out which is which is the skill this lesson exists for.

## Give the interval a ruler

Numbers in mg/dL mean nothing until something clinical is standing next to them. The US National Institute of Diabetes and Digestive and Kidney Diseases publishes the fasting plasma glucose ranges used in diagnosis: 99 mg/dL or below is normal, 100 to 125 mg/dL indicates prediabetes, and 126 mg/dL or above indicates diabetes, with a doctor usually running a second test before confirming a diagnosis. Fasting there means nothing to eat or drink except sips of water.

The prediabetes band is 25 mg/dL wide. Lay the interval against it.

| Value | Share of the 25 mg/dL prediabetes band |
| --- | --- |
| Lower limit, 0.9 mg/dL | about 4% |
| Point estimate, 9.0 mg/dL | about 36% |
| Upper limit, 17.1 mg/dL | about 68% |

At the bottom end the study is compatible with an effect too small for any clinic to notice in a person. At the top end it is compatible with an effect covering two-thirds of the distance between a normal reading and a diagnosis of diabetes. Both readings survive the data. That is what a width of 16.2 mg/dL means when it is put in front of clinicians instead of statisticians.

## The no-difference value is rarely the number a service cares about

Clearing zero says the direction is supported. A service is asking a different question: is the effect big enough to be worth changing what we say to patients?

That means picking a value first. Equivalence trials, which ask whether two treatments are close enough to be treated as interchangeable, already work this way. In an equivalence trial the margins of acceptable difference are set in advance and justified clinically, and equivalence is inferred only when the entire confidence interval falls inside those margins. The general move is the useful one here: choose the difference that would change practice, then look at where the interval sits relative to *that* number as well as relative to zero.

Suppose the service decides that anything under 5 mg/dL would not change its advice.

- The interval runs from 0.9 to 17.1. The value 5 sits inside it.
- So the study is compatible with the effect being below the service's threshold, and compatible with it being well above.
- The interval has not answered the service's question, even though it excluded zero.

That is the honest answer to the first agenda item. The study supports the direction and cannot support the advice.

## What would settle it

The second agenda item is arithmetic. The width is set by the standard error, and the standard error falls with the square root of the group size.

| Study | Per group | Standard error | 95% interval | Width |
| --- | --- | --- | --- | --- |
| The one you have | 30 | 4.13 | 0.9 to 17.1 | 16.2 |
| Four times the size | 120 | 2.07 | 4.9 to 13.1 | 8.2 |

Four times the people halves the standard error and so halves the width, and the compatible values would run from 4.9 to 13.1 mg/dL instead of from 0.9 to 17.1. Notice what that still would not do. The service's threshold of 5 sits 0.1 mg/dL above the new lower limit, so even the four-times study would leave the service's own question open, by the narrowest margin the arithmetic allows. A threshold of 3 mg/dL would have been settled comfortably. A threshold of 5 would not.

This is the calculation to run *before* recruiting, and it is why intervals belong in the planning stage as well as the results section. Ask what value you would need to rule out, work backwards to the width that would rule it out, and the sample size falls out of the arithmetic. Precision is something a study buys deliberately, at a price it can be told in advance.

## Where this stops

Three things are outside this lesson on purpose.

The interval says nothing about whether the study was any good. A biased design produces a narrow interval around the wrong number, because the width answers how much the estimate would wobble across repeats and says nothing about whether every repeat would be wrong in the same direction. Everything the design lessons taught about allocation, blinding, measurement, and confounding still applies, and none of it is repaired by arithmetic.

The interval says nothing about whether 9 mg/dL matters to a patient. The 5 mg/dL threshold above was invented for the example. Choosing that number in real work needs clinical judgement about outcomes, side effects, cost, and what patients actually want, and the block's final lesson is built around exactly that decision.

The interval attaches no probability to the parameter. That was the misconception scene, and it holds in a meeting room as well as on paper: the service cannot say there is a 95% chance the effect is between 0.9 and 17.1. What it can say is that a procedure with a nineteen-in-twenty record produced this range, and that values outside it are the ones this study argues against.

## What comes next

You now have one description of this evidence. The next lesson builds the other one, which starts from the assumption that the true difference is zero and asks how surprising 9.0 mg/dL would be. It reaches a compatible conclusion, and it is the version most papers lead with. Having built the interval first, you will be able to see what that version leaves out.

:::{source-note}
:claims: claim-fpg-thresholds, claim-ich-e9-margins, claim-width-depends-on-n-and-sd, claim-ich-e9-report-ci
:sources: source-niddk-diabetes-tests, source-ich-e9, source-nist-confidence-limits

These sources support the fasting plasma glucose reference values and confirmation practice quoted above, the clinical-trials guidance on pre-specified and clinically justified margins that an entire confidence interval must fall within, the requirement to report effect estimates with confidence intervals, and the dependence of interval width on sample size through the square-root term. The service, the meeting, the 5 mg/dL threshold, and every figure in the two tables are original teaching material and are not observations of real patients.
:::
