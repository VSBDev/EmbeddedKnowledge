# Transfer: a different kind of number

Everything so far has been a difference between two averages, measured in mg/dL. The reasoning does not depend on that. Take a decision where the outcome is a count of people and the units change completely.

**Teaching example, not medical advice.** The trial, the commissioning group and the threshold below are invented for teaching.

## The problem

The same diabetes service runs annual retinal screening. Attendance is poor, and a large invented trial has tested an automated text-message reminder against the usual letter. Five thousand people were assigned to each arm, and the outcome is the share of people who attended within the year.

Here *share* means a part-to-whole fraction, the number who attended out of the number invited. That is the statistical sense of the word proportion, and it is a different object from the equation between two ratios that the arithmetic lessons called a proportion.

| Arm | Attended | Share attending |
| --- | --- | --- |
| Usual letter | 2000 of 5000 | 40.0% |
| Text reminder | 2100 of 5000 | 42.0% |

The trial reports: attendance rose from 40.0% to 42.0%, a relative increase of 5%, *p* = 0.042.

The commissioning group has already stated the condition under which it will fund the rollout. Reminders cost money and staff attention, and it has judged that anything below a 5 percentage point gain would not justify diverting either from other screening work. That is its threshold, arrived at by weighing cost against benefit, and it sits on the absolute scale.

## Reading it

Two numbers in the report look similar and behave completely differently.

The **relative increase** is 42.0 divided by 40.0, which is 1.05, a rise of 5%. The **absolute difference** is 42.0 minus 40.0, which is 2.0 percentage points. Both describe the same trial correctly. The commissioning group's threshold is 5 percentage points, so only the second number can be compared with it.

That coincidence, a 5% relative rise against a 5 percentage point threshold, is the trap set deliberately. A reader skimming for the number 5 will find one and match it to the other, and the two quantities are not on the same scale at all.

Now do the four steps.

**Step 1. Get the estimate and interval onto the decision's scale.** The absolute difference is 2.0 percentage points. Its standard error is 0.98 percentage points, and the 95% interval runs from 0.1 to 3.9 percentage points.

**Step 2. Place the no-difference value.** Zero sits outside the interval, just, by 0.1 of a point. That matches the reported *p* = 0.042.

**Step 3. Place the threshold.** Five percentage points sits above the interval's upper limit of 3.9. The whole interval falls below the threshold.

**Step 4. Say what the trial supports.** Position B. Under the stated model, the data support a positive attendance difference, while every value in the reported interval falls short of the commissioning group's 5-point threshold. On that prespecified criterion, the evidence weighs against the rollout; this is not a claim that the effect is proved or that no other decision consideration matters.

This is the useful case that a threshold-free reading destroys. Reported as "a statistically significant 5% improvement in screening attendance", the same trial reads as a success.

## What travelled and what did not

The procedure travelled unchanged. Put the estimate and its interval on the scale the decision uses, mark zero, mark the threshold, read off the position.

The threshold itself did not travel at all. Five percentage points of screening attendance and 5 mg/dL of fasting glucose share a numeral and nothing else. They were set by different people weighing different things: one by a commissioning group balancing cost against screening yield, the other by a clinical team thinking about what a patient would have to change to gain it. Thresholds are local to the outcome, the population and the decision, and the literature on minimal important differences says the same thing about its own estimates.

One further translation is worth having. Two percentage points means about 50 people moved from the letter to the text reminder for every one extra person screened, because 1 divided by 0.02 is 50. Whether one extra retinal screen per 50 people switched is worth the programme's cost is, again, a question for the people holding the budget and the clinical responsibility. The arithmetic hands them a clean number and stops.

:::{check}
:id: check-transfer-scales

A second version of the same trial, run in 1000 people per arm, reports attendance of 46.0% against 40.0%: an absolute difference of 6.0 percentage points, 95% interval 1.7 to 10.3, *p* = 0.007.

Against the same 5 percentage point threshold, which position is this, and how does the decision differ from the first trial's?

Answer. Position C. The interval contains 5, running from 1.7 at one end to 10.3 at the other, so the data are compatible with a gain well below the threshold and with one twice the threshold. The first trial, with its smaller effect and its larger *p*-value, reports an interval entirely below the commissioning group's threshold. This one, with the larger effect and the smaller *p*-value, leaves values on both sides of the threshold in its interval. The decision evidence differs because the interval positions differ, and *p* = 0.007 against *p* = 0.042 does not identify which position either trial occupies.
:::

:::{source-note}
:claims: claim-size-decides-significance, claim-report-estimates-and-intervals, claim-mcid-context-specific
:sources: source-p-value-misinterpretations, source-mcid-neurology-review

The methodological guide supports the recommendation to read the effect estimate together with its confidence limits, and the point that a large trial reaches statistical significance on a small effect, which is what the first trial above does. The neurology review supports the statement that importance thresholds are context-specific and take different values in different populations and settings. The trial, its arms, the commissioning group and both thresholds are invented for teaching, and the risk-difference arithmetic is this lesson's own.
:::
