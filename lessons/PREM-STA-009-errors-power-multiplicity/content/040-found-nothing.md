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

Now ask what the design could have done. Its critical value sits at $1.96 \times 5.06 = 9.92$ mg/dL, so it needed to see a gap of nearly 10 mg/dL to cross at all. Against a real effect of 9.0 mg/dL its power is

$$\text{power} = 0.43.$$

The effect it could detect four times in five is $2.80 \times 5.06 = 14.2$ mg/dL. So if dinner timing really does raise fasting glucose by 9 mg/dL, this study was set up to miss it more often than to find it. It then missed it, and reported the miss as an answer.

**Rebuild the model.** A test above the threshold licenses one sentence: *the data are not far enough from the null to reject it at this threshold.* That sentence is a statement about the data and the rule. Converting it into *there is no effect* needs an extra ingredient nobody supplied, which is evidence that the study would have found a real effect had one been there. Power is that ingredient, and this study did not have it.

The rule of thumb is short. **Absence of evidence is not evidence of absence.** To claim absence you need a study with the power to have found the thing, and an interval narrow enough to exclude the sizes that would matter.

**Test the repair.** Four sentences. Decide which the forty-person study supports.

1. "We found no evidence that dinner timing raises fasting glucose."
2. "We found evidence that dinner timing does not raise fasting glucose."
3. "Our data are compatible with anything from a 6 mg/dL fall to a 14 mg/dL rise."
4. "This study rules out an effect as large as 9 mg/dL."

Sentence 1 stands: it reports what the study did and did not see. Sentence 3 stands, and it is the honest headline, because it hands the reader the whole range the data allow. Sentence 2 fails, because it converts silence into a positive finding about the world. Sentence 4 fails outright, since 9 mg/dL sits comfortably inside the interval the study produced. If you can sort those four, the repair has taken.
:::

## What a study would need before claiming absence

Three things, and all three have to be present together.

**Power against an effect somebody named in advance.** Not the effect the study happened to see. A number written into the protocol, chosen because an effect that size would change what clinicians do.

**A confidence interval that no longer contains it.** If the interval still holds the effect you said would matter, the study has not excluded that effect, whatever the $p$-value says.

**An honest account of the assumptions.** The interval and the power both rest on the standard error being right, which rests on the sample being what it claims to be. A large $p$ can also come from a measurement so noisy that nothing would ever show through it.

A study that satisfies all three and reports no difference has said something substantial. It has bounded the effect. That is a genuine finding, it is publishable, and it is rare, because it usually needs several times the sample size that finding an effect would need.

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

The study has shown that its data sit close enough to zero that the null survives at this threshold, and nothing more. A true effect of 25 mg/dL sits far outside its interval and fits the data poorly; 9 mg/dL and 12 mg/dL sit inside it and fit perfectly well, so neither has been excluded. The power of 0.43 matters because it says the study would have missed a real 9 mg/dL effect more often than it caught it, so its silence is what you would expect either way. And the 80,000-patient trial is the case where absence really is evidence: the interval is narrow, it excludes every effect anyone would act on, and the design had the power to have seen one. Sample size is what turns a quiet result from uninformative into informative.

:::{source-note}
:claims: claim-large-p-does-not-show-absence, claim-beta-and-power, claim-observed-power-is-uninformative
:sources: source-greenland-misinterpretations, source-nist-statistical-tests

These sources support the statement that observing a p-value above 0.05 for the null hypothesis means only that the null is one among many hypotheses compatible with the data, the correction that accepting a false null leaves the chance of error at 100% rather than at one minus the power, power as the pre-study probability of rejecting the test hypothesis when an alternative is correct, and the dependence of the second-kind error on how large the real discrepancy is. The forty-person study, its figures, and the four test sentences are original teaching material.
:::
