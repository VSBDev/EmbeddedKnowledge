# A study that found nothing, and what it is entitled to say

A second team runs the dinner-timing question on forty adults, twenty in each group. Their report is short.

> Mean fasting glucose was 4.0 mg/dL higher after a late dinner (SE 5.1). The difference did not reach the 0.05 threshold ($p = 0.43$). Dinner timing had no effect on fasting glucose.

The first two sentences are arithmetic. The third is a claim about the world, and the study has not earned it.

:::{misconception}
:id: misconception-large-p-means-no-effect

**The wrong model.** A test has two answers, so a reader treats them as two findings. Below 0.05 the effect is real; above 0.05 the effect is absent. Under that reading a large $p$ is a result in its own right, and a report that fails to cross the threshold has demonstrated that nothing is there.

**Predict first.** Before reading on, write down an answer. Given the numbers in that report, what is the largest true difference in fasting glucose that would still be entirely compatible with what this team observed? Commit to a figure in mg/dL.

**The disconfirming evidence.** Build the interval the report left out. With 20 per group and a within-group standard deviation of 16 mg/dL, the standard error of the difference is

$$16\sqrt{\frac{2}{20}} = 5.06 \text{ mg/dL},$$

so a 95% confidence interval around the observed 4.0 mg/dL runs

$$4.0 \pm 1.96 \times 5.06 = -5.9 \text{ to } 13.9 \text{ mg/dL}.$$

That interval contains zero, which is why the test did not cross. It also contains 9.0, the effect the larger study reported. It contains 12. It contains a 5 mg/dL fall. Every one of those is compatible with the forty readings this team collected.

Now audit what the design was capable of before the data were collected. Its critical value sits at $1.96 \times 5.06 = 9.92$ mg/dL, so it needed to see a gap of nearly 10 mg/dL to cross at all. Against a true effect of 9.0 mg/dL its design power is

$$\text{power} = 0.43.$$

The effect it could detect four times in five is $2.80 \times 5.06 = 14.2$ mg/dL. So if dinner timing really does raise fasting glucose by 9 mg/dL, this design would fail to reject zero more often than it would reject it. That planning audit explains why a non-rejection was foreseeable; it does not tell us which true value produced the completed data. The point estimate and interval carry that evidence.

**Rebuild the model.** A test above the threshold licenses one decision statement: *under the stated model, the data did not reject a difference of zero at this threshold.* The completed result should then report what was observed: a 4.0 mg/dL higher mean, with a 95% interval from a 5.9 mg/dL lower mean to a 13.9 mg/dL higher mean. Converting that result into *there is no effect* requires a meaningful margin fixed in advance and an interval, or a direct equivalence test, that excludes effects beyond that margin. Design power belongs to planning and design audit; it is not a second piece of evidence about which effects fit the observed data.

The rule of thumb is short. **Absence of evidence is not evidence of absence.** To claim absence you need a study with the power to have found the thing, and an interval narrow enough to exclude the sizes that would matter.

**Test the repair.** Four sentences. Decide which the forty-person study supports.

1. "The late-dinner group averaged 4.0 mg/dL higher; the 95% interval ran from 5.9 mg/dL lower to 13.9 mg/dL higher, and the test did not reject zero."
2. "We found evidence that dinner timing does not raise fasting glucose."
3. "Our data are compatible with anything from a 6 mg/dL fall to a 14 mg/dL rise."
4. "This study rules out an effect as large as 9 mg/dL."

Sentences 1 and 3 stand: they report the estimate, interval, and decision without erasing the nonzero observation. Sentence 2 fails, because it converts non-rejection into a positive finding about the world. Sentence 4 fails outright, since 9 mg/dL sits comfortably inside the interval the study produced. If you can sort those four, the repair has taken.
:::

## What a study would need before claiming absence

Three things, and all three have to be present together.

**A meaningful margin named in advance.** Not a boundary invented after the result. The protocol has to say which effects would count as too large to dismiss.

**A confidence interval, or direct equivalence test, that excludes effects beyond that margin.** If the interval still contains an effect outside the acceptable range, the study has not excluded it, whatever the null-test $p$-value says.

**An honest account of the assumptions.** The interval and the power both rest on the standard error being right, which rests on the sample being what it claims to be. A large $p$ can also come from a measurement so noisy that nothing would ever show through it.

A study planned with adequate power against the prespecified margin and whose completed interval excludes effects beyond it has said something substantial: it has bounded the effect. The interval or equivalence test supplies the evidence; the power calculation shows that the design was planned to obtain evidence at that resolution.

## The same trap, wearing the other coat

The forty-person study drew a conclusion from one comparison that came back quiet. The opposite failure is drawing a conclusion from one comparison that came back loud, when it was one of many.

Both mistakes have the same shape. In each case a single number is read as though the design behind it were irrelevant. Scene five works out exactly what the design behind a loud result costs.

:::{check}
:id: check-absence-of-evidence
:kind: retrieval

1. The forty-person study reported $p = 0.43$. In one sentence, what has it shown?
2. Its 95% interval runs from $-5.9$ to $13.9$ mg/dL. Name one true effect the study has ruled out, and one it has not.
3. Why does the report's power of 0.43 against a 9 mg/dL effect matter to how you read its conclusion?
4. A trial of a new drug reports no difference in mortality and enrolled 80,000 patients, with an interval running from a 0.2% fall to a 0.3% rise. Does the "absence of evidence" warning apply with the same force here?
:::

The study estimated a 4.0 mg/dL higher mean, its interval includes zero, and the null test did not reject zero. A true effect of 25 mg/dL sits far outside its interval and fits the data poorly; 9 mg/dL and 12 mg/dL sit inside it, so neither has been excluded. The power of 0.43 is a design audit: if the true effect were 9 mg/dL, this design would fail to reject zero more often than it rejected it, but that probability does not rank the values inside the completed interval. The 80,000-patient trial is different only if its narrow interval excludes effects beyond a clinically prespecified margin. In that case the interval, not the non-rejection by itself, provides evidence that effects outside that margin are incompatible with the data.

:::{source-note}
:claims: claim-large-p-does-not-show-absence, claim-beta-and-power, claim-observed-power-is-uninformative
:sources: source-greenland-misinterpretations, source-nist-statistical-tests

These sources support the statement that observing a p-value above 0.05 for the null hypothesis means only that the null is one among many hypotheses compatible with the data, the correction that accepting a false null leaves the chance of error at 100% rather than at one minus the power, power as the pre-study probability of rejecting the test hypothesis when an alternative is correct, and the dependence of the second-kind error on how large the real discrepancy is. The forty-person study, its figures, and the four test sentences are original teaching material.
:::
