# The same two mistakes, a long way from any study

Neither idea in this lesson belongs to research papers. Both describe what happens when a decision rule with a fixed error rate meets a world that offers it many chances, or too few.

## Transfer one: the healthy patient with an abnormal result

A patient with no symptoms has a routine blood panel. Twenty analytes come back, and one sits just outside its range. She is worried, and the clinician has to decide what that one result is worth.

Suppose, for the arithmetic only, that each analyte's range was drawn to contain 95% of healthy people, and that the twenty analytes are independent of one another. Then for a healthy person, each result stays inside its range with probability 0.95, and all twenty stay inside with probability

$$0.95^{20} = 0.36.$$

So the probability that a perfectly healthy person has at least one result outside its range is

$$1 - 0.95^{20} = 0.64.$$

Two healthy people in three will produce an abnormal-looking panel. The arithmetic is identical to the twenty subgroups in the previous scene, and so is the lesson: a rule with a 5% error rate, applied twenty times, produces an error most of the time.

Two things follow, and neither is that the panel is useless.

The first is that a single mildly out-of-range value on a broad panel carries much less information than the same value would carry if that analyte had been the one thing the clinician set out to measure. Ordering the test because you had a question about it is the clinical version of prespecifying an outcome.

The second is that the reasonable response to one odd value among twenty is often to repeat it. A repeat is a fresh comparison on fresh data, and a result that was a chance excursion usually does not survive one. That is the same instinct as demanding replication of a subgroup finding, arrived at from the bedside instead of from a journal.

Real laboratories set their ranges under standards that this lesson does not cover, and both suppositions above are simplifications. The direction of the effect survives them: broaden a panel and the chance of at least one out-of-range value in a healthy person rises.

## Transfer two: the pilot that "showed no benefit"

A physiotherapy team pilots an early mobilisation programme after hip fracture. Thirty patients, fifteen in each arm. The outcome is days from surgery to walking twenty metres unaided. The programme arm averaged 1.4 days faster, the comparison did not cross 0.05, and the report concludes that early mobilisation does not speed recovery.

Take the report's own figures. Days to walking varies between patients with a standard deviation of about 4 days, so the standard error of the difference is

$$4\sqrt{\frac{2}{15}} = 1.46 \text{ days}.$$

The critical value is $1.96 \times 1.46 = 2.86$ days. The pilot would have had to see a gap of nearly three days to cross the threshold, and the effect it could detect four times in five is $2.80 \times 1.46 = 4.1$ days.

Four days. On an outcome where a difference of a day or two would change discharge planning for a whole ward, the pilot was built to notice only a difference nobody expected. Its power against a true benefit of 1.4 days is 0.16. It would find such an effect about once in six attempts, and it did not find it.

The report's own numbers support one sentence: *this pilot was too small to distinguish a useful benefit from no benefit at all.* That sentence is worth writing, because it is the sentence that gets the full trial funded. The sentence the team actually wrote closes the question down.

:::{check}
:id: check-transfer-reasoning
:kind: transfer

1. The blood panel is broadened from twenty analytes to forty. What happens to the probability that a healthy person has at least one out-of-range result, and roughly what does it become?
2. Which of the two errors in this lesson does the broad panel produce, and which one does the physiotherapy pilot produce?
3. The physiotherapy team wants 80% power to detect a benefit of 1.5 days, with the same standard deviation of 4 days. What standard error do they need, and roughly how many patients per arm?
4. A manager proposes fixing the blood-panel problem by widening every reference range so that each contains 99% of healthy people. What does that fix, and what does it break?
:::

For forty analytes the probability becomes $1 - 0.95^{40} = 0.87$, so nearly nine healthy people in ten would have something flagged. The broad panel produces Type I errors, flagging what is not there; the pilot produced a Type II error, missing what may well be. For 80% power against 1.5 days the team needs a standard error no larger than $1.5 / 2.80 = 0.54$ days, so $n = 2(4/0.54)^{2}$, which is about 110 patients per arm and 220 in total, against the 15 per arm they ran. And widening every range to 99% would cut the chance of a false flag in a healthy person to $1 - 0.99^{40} = 0.33$, while making every range worse at catching the patient who genuinely has an abnormal value. It is the $\alpha$-against-$\beta$ trade from scene two, transplanted into a laboratory.

**Teaching example, not medical advice.** The patient, the panel, the physiotherapy pilot, and every figure above are invented for teaching. Nothing here describes a real laboratory's ranges, a real rehabilitation programme, or how any individual result should be acted on.

:::{source-note}
:claims: claim-multiplicity-inflates-false-positives, claim-beta-and-power, claim-what-drives-beta, claim-large-p-does-not-show-absence, claim-subgroups-are-exploratory
:sources: source-chen-multiple-comparisons, source-greenland-misinterpretations, source-nist-statistical-tests, source-tanniou-subgroups

These sources support the rise in the probability of at least one incorrect rejection as more independent comparisons are made, power as the pre-study probability of detecting a correct alternative with the Type II error rate as its complement, the dependence of that error rate on the size of the real discrepancy and its rise as the threshold tightens, the limits of what a result above the threshold licenses, and the standing of findings that emerge from many comparisons as exploratory and in need of replication. The panel, the pilot, and every figure here are original teaching material.
:::
