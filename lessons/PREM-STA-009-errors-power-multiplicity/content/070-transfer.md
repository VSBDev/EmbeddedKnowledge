# The same two mistakes, a long way from any study

Neither idea in this lesson belongs only to research papers. The two cases below are analogies: they show what can happen when a rule with a fixed tail probability is applied many times, or when a study has too little power. They are not automatically instances of Type I or Type II error unless a null hypothesis, decision rule, and true state have been specified.

## Transfer one: the healthy patient with an abnormal result

A patient with no symptoms has a routine blood panel. Twenty analytes come back, and one sits just outside its range. She is worried, and the clinician has to decide what that one result is worth.

Suppose, for the arithmetic only, that each analyte's range was drawn to contain 95% of healthy people, and that the twenty analytes are independent of one another. Then for a healthy person, each result stays inside its range with probability 0.95, and all twenty stay inside with probability

$$0.95^{20} = 0.36.$$

So the probability that a perfectly healthy person has at least one result outside its range is

$$1 - 0.95^{20} = 0.64.$$

About two healthy people in three will have at least one result outside a central 95% range. The arithmetic is identical to twenty independent tests, but the interpretation is not: a healthy individual can genuinely fall in a distribution's tail, and no hypothesis-test decision has been defined here. The result is a multiplicity analogy, not proof that a Type I error occurred.

Two things follow, and neither is that the panel is useless.

The first is that a single mildly out-of-range value on a broad panel carries much less information than the same value would carry if that analyte had been the one thing the clinician set out to measure. Ordering the test because you had a question about it is the clinical version of prespecifying an outcome.

The second is the general statistical value of independent replication: a chance tail observation often does not recur in fresh data. Whether and when any clinical test should be repeated depends on the analyte, the patient, and applicable clinical guidance, all outside this lesson.

Real laboratories set their ranges under standards that this lesson does not cover, and both suppositions above are simplifications. The direction of the effect survives them: broaden a panel and the chance of at least one out-of-range value in a healthy person rises.

## Transfer two: the pilot that "showed no benefit"

A physiotherapy team pilots an early mobilisation programme after hip fracture. Thirty patients, fifteen in each arm. The outcome is days from surgery to walking twenty metres unaided. The programme arm averaged 1.4 days faster, the comparison did not cross 0.05, and the report concludes that early mobilisation does not speed recovery.

Suppose this fictional team named a 1.5-day benefit in advance as the smallest operational difference its full study should be able to detect. Take the report's own figures. Days to walking varies between patients with a standard deviation of about 4 days, so the standard error of the difference is

$$4\sqrt{\frac{2}{15}} = 1.46 \text{ days}.$$

The critical value is $1.96 \times 1.46 = 2.86$ days. The pilot would have had to see a gap of nearly three days to cross the threshold, and the effect it could detect four times in five is $2.80 \times 1.46 = 4.1$ days.

Four days. The pilot was therefore planned at a much coarser resolution than the team's stated 1.5-day target. If the true benefit were 1.4 days, the design power would be 0.16 and failure to reject zero would be a Type II error in about five attempts out of six.

The completed data do not establish that the true benefit is 1.4 days. They estimate a 1.4-day faster recovery, with an approximate 95% interval from 1.5 days slower to 4.3 days faster, and the test did not reject zero. That interval includes both no benefit and the team's prespecified 1.5-day target. The power calculation audits the design; the estimate and interval describe what the pilot observed.

:::{check}
:id: check-transfer-reasoning
:kind: transfer

1. The blood panel is broadened from twenty analytes to forty. What happens to the probability that a healthy person has at least one out-of-range result, and roughly what does it become?
2. Why does neither observed case by itself prove that a Type I or Type II error occurred, and which risk is each case analogous to?
3. The physiotherapy team wants 80% power to detect a benefit of 1.5 days, with the same standard deviation of 4 days. What standard error do they need, and roughly how many patients per arm?
4. A manager proposes widening every reference range so that each contains 99% of healthy people. What happens to the chance that a healthy person has at least one flagged result, and why is that calculation alone insufficient to quantify missed abnormalities?
:::

For forty analytes the probability becomes $1 - 0.95^{40} = 0.87$, so nearly nine healthy people in ten would have something flagged under the simplifying assumptions. An out-of-range value is not a Type I error without a formal test and true null; it is analogous to the many-chances problem. The pilot's non-rejection would be a Type II error only if a true benefit existed, so the pilot creates that risk without proving the error occurred. For 80% power against 1.5 days the team needs a standard error no larger than $1.5 / 2.80 = 0.54$ days, so $n = 2(4/0.54)^{2}$, which is about 110 patients per arm and 220 in total, against the 15 per arm they ran. Widening every range to 99% would cut the chance that a healthy person has at least one flagged result to $1 - 0.99^{40} = 0.33$. Quantifying missed abnormalities would additionally require distributions for the relevant conditions and a defined clinical decision rule; the healthy-range calculation does not supply either.

**Teaching example, not medical advice.** The patient, the panel, the physiotherapy pilot, and every figure above are invented for teaching. Nothing here describes a real laboratory's ranges, a real rehabilitation programme, or how any individual result should be acted on.

:::{source-note}
:claims: claim-multiplicity-inflates-false-positives, claim-beta-and-power, claim-what-drives-beta, claim-large-p-does-not-show-absence, claim-subgroups-are-exploratory
:sources: source-chen-multiple-comparisons, source-greenland-misinterpretations, source-nist-statistical-tests, source-tanniou-subgroups

These sources support the rise in the probability of at least one incorrect rejection as more independent comparisons are made, power as the pre-study probability of detecting a stated alternative with the Type II error rate as its complement, the dependence of that error rate on the size of the real discrepancy and its rise as the threshold tightens, the limits of what a result above the threshold licenses, and the standing of findings that emerge from many comparisons as exploratory and in need of replication. The panel is explicitly an analogy rather than a hypothesis-test classification; the panel, the pilot, and every figure here are original teaching material.
:::
