# Five calculations, and one that is not a calculation

Everything below uses the same three tools. A standard error from a standard deviation and a sample size. A critical value at $1.96 \times \text{SE}$. A power read off a normal curve, or a detectable effect at $2.80 \times \text{SE}$.

Attempt each before reading its answer. The support thins as you go.

:::{check}
:id: check-faded-practice-power
:kind: practice

**One. Power of a stated design, fully guided.**

A diabetes clinic plans a comparison with 25 patients per group. Within-group standard deviation of fasting glucose is 16 mg/dL, and the test is two-sided at $\alpha = 0.05$.

- (a) Compute the standard error of the difference.
- (b) Compute the critical value in mg/dL.
- (c) The clinic hopes for a true difference of 9.0 mg/dL. How many standard errors below 9.0 does the critical value sit?
- (d) Read off the power.

**Two. Detectable effect, partly guided.**

A different design has a standard error of 2.5 mg/dL for its difference. Working at $\alpha = 0.05$ two-sided, what difference could it detect with 80% power? State the rule you used.

**Three. Sample size.**

A team wants 80% power to detect a true difference of 6.0 mg/dL, at $\alpha = 0.05$ two-sided, with a within-group standard deviation of 16 mg/dL. How many patients per group?

**Four. Family-wise rate.**

A report presents 12 independent comparisons, each judged at 0.05, and suppose none of them reflects a real difference. What is the probability that at least one crosses? What threshold per comparison would hold the family-wise rate near 0.05?

**Five. Not a calculation.**

A registrar shows you a trial abstract. It enrolled 44 patients, reports no difference in fasting glucose between two meal-timing regimes ($p = 0.61$), gives no confidence interval, and concludes that meal timing is irrelevant to glycaemic control. Write the two questions you would ask before accepting or rejecting that conclusion, and say what answer to each would change your mind.
:::

## Answers, with the reasoning shown

**One.** The standard error is

$$16\sqrt{\frac{2}{25}} = 4.53 \text{ mg/dL}.$$

The critical value is $1.96 \times 4.53 = 8.87$ mg/dL. That sits $(8.87 - 9.0)/4.53 = -0.03$ standard errors from a true value of 9.0, which is essentially on top of it, so the area of the curve above the threshold is a hair over half: power $= 0.51$. Twenty-five per group buys a design that finds a real 9 mg/dL effect about half the time. Compare that with the sixty-person study's 0.59 and the hundred-person study's 0.80, and the shape of the trade becomes clear. Power climbs slowly, because the standard error only falls with the square root of the sample size.

**Two.** The detectable effect at 80% power is $2.80 \times \text{SE}$, where 2.80 is 1.96 plus 0.84: the first term buys the 5% false-alarm rate, the second buys the 80% detection rate. So

$$2.80 \times 2.5 = 7.0 \text{ mg/dL}.$$

The design can detect 7 mg/dL and upwards reliably. Anything smaller it will find less than four times in five.

**Three.** Work backwards from the detectable effect. To detect 6.0 mg/dL at 80% power the standard error has to be no larger than $6.0 / 2.80 = 2.14$ mg/dL. Then

$$n = 2\left(\frac{16}{2.14}\right)^{2} = 112 \text{ per group},$$

so 224 people in total. Notice what happened between question three and the earlier calculation for a 9 mg/dL effect, which needed 50 per group. The target effect shrank by a third and the sample size more than doubled. Sample size scales with the inverse square of the effect you want to catch, which is why chasing small effects is so expensive and why an underpowered study is usually a study that hoped for a bigger effect than the field had any reason to expect.

**Four.** For twelve independent comparisons,

$$1 - 0.95^{12} = 0.46,$$

so very nearly even odds that a report of twelve dead ends contains a crossing. Holding the family-wise rate near 0.05 needs $0.05 / 12 = 0.0042$ per comparison, and at that threshold the critical value moves out past 2.86 standard errors, with the power cost that implies.

**Five.** There is no arithmetic here, and there are two questions worth asking.

*What is the confidence interval?* Without it you cannot tell whether the trial excluded the effects that would matter or merely failed to see them. With 22 per group and a standard deviation near 16, the interval will be roughly $\pm 9.5$ mg/dL wide either side of whatever was observed, which is wide enough to contain almost every effect anyone would care about. An interval that turns out to run from $-1$ to $+2$ mg/dL would change my mind entirely, since a trial that tight has genuinely bounded the effect.

*What effect was the trial designed to detect, and was that written down before it started?* With 22 per group the standard error is 4.82 mg/dL, so a trial of 44 people can detect about 13.5 mg/dL at 80% power. If the protocol named a difference near that size as the one worth finding, the trial did what it set out to do, and its silence is about differences of that size only. If the protocol named 5 mg/dL, the trial was never able to answer its own question.

Either answer leaves the abstract's conclusion unsupported as written. The correct summary of that trial is that it found no evidence of a difference, and that its data remain compatible with differences large enough to matter.

:::{callout}
:kind: boundary

## What the arithmetic will not tell you

Every number in this scene depends on a standard deviation and an effect size supplied from outside. The standard deviation comes from previous data or a pilot, and if it is optimistic the whole calculation is optimistic. The effect size comes from a judgement about what would be worth finding, and no formula produces it.

A power calculation is therefore a statement of intent with arithmetic attached. It says: this is the effect we decided to be able to see, and this is what seeing it costs. Both halves are open to challenge, and the second half is the only one the mathematics owns.
:::

:::{source-note}
:claims: claim-sample-size-formula, claim-beta-and-power, claim-multiplicity-inflates-false-positives, claim-bonferroni-adjustment, claim-large-p-does-not-show-absence
:sources: source-nist-sample-sizes, source-greenland-misinterpretations, source-chen-multiple-comparisons, source-nist-statistical-tests

These sources support the sample-size relation built from the two normal quantiles together with the standard deviation and the difference to be detected, power as the pre-study probability of rejecting the test hypothesis when an alternative is correct with beta as its complement, the rise in the family-wise error rate as more hypotheses are tested at once, the Bonferroni adjustment of the per-test threshold, and the limits of what a large p-value licenses. Every clinic, trial, and figure in this scene is original teaching material.
:::
