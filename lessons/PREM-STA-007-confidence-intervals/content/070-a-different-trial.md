# The same recipe, a different clinic

Nothing in the last five scenes was about glucose. Change the outcome, change the units, change the disease, and the three parts of the recipe stay where they are.

**Teaching example, not medical advice.** Every cohort, trial, clinic, and threshold in this lesson is invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care.

## The trial

A hospital tests a pharmacist-led medicines review for adults with high blood pressure. Four hundred patients are randomly allocated: half get the review, half get usual care. After six months the team compares the two arms on two outcomes.

| Outcome | Difference, review minus usual care | Standard error |
| --- | --- | --- |
| Systolic blood pressure | 2.4 mmHg lower | 1.1 mmHg |
| Diastolic blood pressure | 1.0 mmHg lower | 3.2 mmHg |

The published abstract says: *the review lowered blood pressure.*

:::{check}
:id: check-transfer-blood-pressure
:kind: retrieval

Do this before reading on.

1. Build the 95% confidence interval for each outcome.
2. Say for each one whether it excludes zero.
3. Write one sentence for the abstract that a careful reader could not object to.
:::

## Working it

For the systolic outcome, the margin of error is 1.96 × 1.1 = 2.16 mmHg. That gives 2.4 − 2.16 = 0.24 and 2.4 + 2.16 = 4.56, so the interval runs from **0.2 to 4.6 mmHg** and is 4.4 mmHg wide.

For the diastolic outcome, the margin of error is 1.96 × 3.2 = 6.27 mmHg. That gives 1.0 − 6.27 = −5.27 and 1.0 + 6.27 = 7.27, so the interval runs from **−5.3 to 7.3 mmHg** and is 12.6 mmHg wide.

## Two intervals, two different readings

The systolic interval excludes zero. It is also tight, and every value inside it is below 5 mmHg. This is the reading that did not appear in the dinner-timing study: a result that establishes a direction *and* rules out anything large. The study has told you the effect is real in direction and small in size, and it has told you both with the same three numbers.

The diastolic interval contains zero and is nearly three times as wide. It rules out almost nothing between a rise of 5 mmHg and a fall of 7. On this outcome the trial has no answer.

An honest abstract sentence has to carry both. Something like: *the review lowered systolic pressure by 2.4 mmHg (95% CI 0.2 to 4.6); the diastolic difference of 1.0 mmHg (95% CI −5.3 to 7.3) was too imprecise to interpret.* The published version, "the review lowered blood pressure", takes one outcome's direction and quietly borrows it for the other, then drops the magnitude for both.

Whether a fall of somewhere between 0.2 and 4.6 mmHg is worth a pharmacist's time is a clinical and economic question, and the interval does not answer it. What the interval does is stop the question being asked about the wrong number. Guidance for clinical trials asks for intervals alongside effect estimates for this reason: the size of an effect and the uncertainty around it are what a reader needs, and neither survives being compressed into a verdict.

:::{check}
:id: check-transfer-sample-size
:kind: retrieval

The team wants the diastolic interval to be about as tight as the systolic one. Roughly how many patients would they need, and what assumption are you making when you answer?
:::

The diastolic interval is about three times as wide, so its standard error has to fall by a factor of about three. Sample size sits under a square root, so that needs roughly nine times as many patients: something near 3,600 instead of 400. The assumption is that everything else stays the same, in particular that patients in the larger trial vary by the same amount as these did. If the wider diastolic spread came from a measurement problem instead of from real variation between people, a better measurement method would be cheaper than nine times the patients.

:::{source-note}
:claims: claim-ich-e9-report-ci, claim-normal-975-quantile
:sources: source-ich-e9, source-nist-normal-table

Two facts here come from outside. Effect estimates should be reported with confidence intervals wherever possible, and two-sided intervals are the usual form for estimating how large a difference between two treatments might be; both are stated in the clinical-trials guidance. The 1.96 multiplier comes from the standard normal table. The trial itself was invented for this scene, arms, outcomes, numbers and abstract alike.
:::
