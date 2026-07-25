# The two-by-two nobody prints

A test ends in a decision. Either the study rejects the null hypothesis or it does not. Reality has already settled the other half of the question, and reality does not consult the study. Cross the two and there are four ways an investigation can end.

| | The null is actually true | The null is actually false |
| --- | --- | --- |
| **Test rejects the null** | Type I error | correct detection |
| **Test does not reject** | correct silence | Type II error |

Two cells are the outcomes everyone wants. The other two are the subject of this lesson, and they are not symmetrical in any respect that matters.

:::{definition}
:id: definition-type-i-and-type-ii

A **Type I error** is rejecting the null hypothesis when the null hypothesis is true. The study announces an effect that is not there. Its probability, computed before the study runs, is written $\alpha$ and is called the **significance level**.

A **Type II error** is failing to reject the null hypothesis when the null hypothesis is false. The study misses an effect that is there. Its probability is written $\beta$.

Both are properties of a decision rule, not verdicts on anybody's conduct.
:::

## The one you choose

$\alpha$ is set by a person, in advance, as part of the design. Choose 0.05 and you have said: I will accept a 5 in 100 chance of announcing an effect in a world where there is none. Choose 0.01 and you have said 1 in 100. The number is a policy about how much false alarm you are willing to live with, and it is fixed before the data arrive so that it cannot be adjusted to suit them.

This is why $\alpha$ behaves so tidily. In the dinner-timing study the threshold works out to a difference of

$$1.96 \times 4.13 = 8.09 \text{ mg/dL},$$

because a two-sided test at $\alpha = 0.05$ rejects the null when the reported difference sits more than 1.96 standard errors from zero. Any reported gap beyond $+8.09$ or below $-8.09$ crosses. The study reported 9.0, which clears $+8.09$ with a little to spare, and that is the same fact as $p = 0.029$ said differently.

Notice what fixing $\alpha$ has bought. Across a great many studies of populations where dinner timing truly does nothing, 5 in 100 would still report a gap past those lines. That rate holds whatever the sample size, whatever the variability, whatever the disease. It is guaranteed by construction, because the threshold was placed to guarantee it.

## The one you inherit

$\beta$ is different in kind. Nobody sets it. It is whatever the design happens to produce, and it is not even a single number: it depends on how big the real effect is.

Think about why. To miss an effect, the study has to report a difference that falls short of 8.09 mg/dL. If the true difference is enormous, say 30 mg/dL, almost no repeat of the study would report anything that small, so $\beta$ is nearly zero. If the true difference is tiny, say 1 mg/dL, almost every repeat reports something under 8.09, so $\beta$ is close to 1. Between those extremes $\beta$ slides continuously. Asking "what is this study's Type II error rate?" is an incomplete question until you say against what.

Three other things move $\beta$, and each of them will get used later in this lesson.

**The sample size.** More people means a smaller standard error, which pulls the whole distribution of possible results tighter around the truth. A tighter distribution spills less of itself back across the threshold.

**The variability of the measurement.** Fasting glucose that scatters by 16 mg/dL within a group is harder to see through than glucose that scatters by 8. The standard deviation enters the standard error directly, so a noisier measurement acts exactly like a smaller study.

**The threshold itself.** Move $\alpha$ down to 0.01 and the critical value moves out to $2.576 \times 4.13 = 10.64$ mg/dL. Fewer false alarms, and also fewer true detections, because the same line does both jobs. Guarding harder against one error always concedes ground to the other, at a fixed sample size.

## Why the asymmetry is deliberate

The conventional test is built to protect against Type I error and to leave Type II error to look after itself. The threshold is a promise about how often a true null will be rejected, and no comparable promise is made in the other direction.

That is a defensible design when a false alarm is the expensive mistake. Announcing that dinner timing raises morning glucose, when it does not, sends clinicians into conversations that waste appointment time and patients into changing their evenings for nothing.

It becomes indefensible when the missed effect is the expensive one. A screening programme that fails to detect a treatable disease, a trial that overlooks a genuine harm signal, an audit that misses a ward drifting out of control: in all three the Type II error is the one that hurts, and the standard machinery is not watching it. Somebody has to watch it deliberately, before the study runs. That is what the next scene does.

:::{check}
:id: check-alpha-beta-basics
:kind: retrieval

Without scrolling back.

1. Which of the two error probabilities is chosen by the investigator, and at what point?
2. A colleague says a study's Type II error rate is 0.30. What is missing from that statement?
3. The team drops $\alpha$ from 0.05 to 0.01 and changes nothing else. What happens to the chance of a Type I error, and what happens to the chance of a Type II error?
4. The dinner-timing critical value is 8.09 mg/dL. Where did the 1.96 in that calculation come from?
:::

The investigator chooses $\alpha$, and chooses it before collecting data, as part of the design. A Type II error rate of 0.30 is incomplete because $\beta$ is measured against a particular true effect; 0.30 against a 9 mg/dL difference and 0.30 against a 20 mg/dL difference describe very different studies. Dropping $\alpha$ to 0.01 lowers the Type I error rate to 1 in 100 and raises $\beta$, because the critical value moves further from zero and more genuine effects now fall short of it. And 1.96 is the point on a standard normal curve that leaves 2.5% in each tail, so that the two tails together come to the 5% the threshold promised.

:::{source-note}
:claims: claim-alpha-is-chosen, claim-beta-and-power, claim-what-drives-beta
:sources: source-greenland-misinterpretations, source-nist-statistical-tests

These sources support the description of the significance level as a cut-off fixed in advance and unchanged in light of the data, the naming of the risk of rejecting a true null hypothesis as the significance level and of the risk of failing to reject a false one as the error of the second kind, the statement that large discrepancies are easier to detect and lead to small errors of the second kind while small discrepancies lead to large ones, and the statement that the risk beta increases as the risk alpha decreases. The two-by-two table, the cohort, and every figure computed above are original teaching material.
:::
