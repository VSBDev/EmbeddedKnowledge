# What this study could have found, and what it could not

Power is the other side of $\beta$, and it is the quantity people actually plan with.

:::{definition}
:id: definition-power

The **power** of a test against a stated true effect is the probability that the test rejects the null hypothesis when that effect is real:

$$\text{power} = 1 - \beta.$$

Power is always power *against something*. A design has one power against a 5 mg/dL difference and a different power against a 15 mg/dL difference, and quoting a bare percentage without saying which is not a statement about anything.
:::

## Draw both worlds at once

The reason power can be calculated at all is that two distributions are in play, and they are both distributions of the same thing: the difference the study would report.

If dinner timing does nothing, repeats of the study scatter around 0, with a standard error of 4.13 mg/dL. If dinner timing raises fasting glucose by a true 9.0 mg/dL, repeats scatter around 9.0, with the same 4.13, because the standard error depends on the sample size and the variability and not on where the centre sits.

Two curves, the same width, sitting 9.0 mg/dL apart. The critical value at $+8.09$ is one vertical line, and it cuts both.

:::{chart} ../charts/power-null-and-alternative.chart.json
:::

Read the picture in that order. On the curve centred on zero, the slivers past $\pm 8.09$ are $\alpha$: 0.025 in each tail, 0.05 together, under the stated model. On the curve centred on 9.0, power includes both rejection tails: the area above $+8.09$ and the tiny area below $-8.09$. The chart shades only the upper component, 0.587; the omitted lower component is about 0.00002 and does not change the rounded power. $\beta$ is the area between the two critical values under the alternative curve.

## Work out the number

The critical value sits at 8.09 mg/dL. If the true difference is 9.0 mg/dL, how far is the threshold from the centre of the curve the study is actually drawing from?

$$z = \frac{8.09 - 9.0}{4.13} = -0.22.$$

The threshold is 0.22 standard errors *below* the true value. Power is the area of that curve lying above the threshold, which is the area to the right of $z = -0.22$ on a standard normal curve:

$$\text{power} = 0.59.$$

So a design of this size, chasing a real difference of 9 mg/dL in a population where fasting glucose varies by 16 mg/dL within a group, would report a result crossing 0.05 about 59 times in 100. And $\beta = 1 - 0.59 = 0.41$. It would come back empty-handed 41 times in 100, with a real effect sitting there the whole time.

The study reported 9.0 mg/dL and crossed. Read the 0.59 correctly: it does not say the reported result is doubtful. It says the design was a coin-flip-plus for finding an effect of that size, and the version of this study that returned 6 mg/dL and $p = 0.15$ was equally likely, and would have been filed away as showing nothing.

## Run the calculation the useful way round

Planning a study means turning that arithmetic on its head. Instead of asking what power a design has against a given effect, ask what effect a design can detect at a power you are willing to accept. Eighty per cent is the usual floor.

Power 0.80 needs the true effect to sit far enough above the critical value that only 20% of the curve falls back below it. On a standard normal curve, 0.84 standard errors above the threshold does that. So the detectable effect is

$$\delta = (1.96 + 0.84) \times \text{SE} = 2.80 \times 4.13 = 11.6 \text{ mg/dL}.$$

Two numbers, added and then multiplied by the standard error. The 1.96 buys the false-alarm rate you promised, the 0.84 buys the detection rate you want, and the standard error converts both into the units of the measurement.

Now put the two figures side by side. This design could reliably detect a difference of **11.6 mg/dL**. The difference it was looking for, and found, was **9.0 mg/dL**. The study was set up to detect something larger than the thing it was studying.

That is not a scandal and it is not a flaw in the analysis. It is a plain property of the design, it was knowable on the day the protocol was written, and it has a consequence worth stating plainly: run this study again on sixty fresh adults, with a real 9 mg/dL effect present the whole time, and about four repeats in ten would come back without crossing the threshold.

:::{worked-example}
:id: worked-example-sample-size-for-eighty-percent

**How large would the study have to be?**

Keep the effect at 9.0 mg/dL, the within-group standard deviation at 16 mg/dL, $\alpha$ at 0.05 two-sided, and demand 80% power.

**Step 1. Find the standard error that 80% power requires.** The detectable effect is $2.80 \times \text{SE}$, and it has to be no larger than 9.0, so

$$\text{SE} \le \frac{9.0}{2.80} = 3.21 \text{ mg/dL}.$$

**Step 2. Turn a standard error into a sample size.** For a difference between two groups of $n$ people each,

$$\text{SE} = 16\sqrt{\frac{2}{n}}.$$

Set that equal to 3.21 and solve for $n$:

$$n = 2\left(\frac{16}{3.21}\right)^{2} = 2 \times 24.8 = 49.7.$$

**Step 3. Round up and read it back.** Fifty per group, so **100 people in total**. Check it: with 50 per group the standard error is $16\sqrt{2/50} = 3.20$ mg/dL, the critical value moves to $1.96 \times 3.20 = 6.27$ mg/dL, and the true effect of 9.0 now sits $(9.0 - 6.27)/3.20 = 0.85$ standard errors above it, giving power 0.80.

**Self-explain before moving on.** Why does reducing the target difference make the required sample size rise with the inverse square of that difference? Trace the two steps: the required standard error is proportional to the target difference, while $n$ is proportional to $1/\text{SE}^{2}$.

**What the answer means.** The study ran 60 people. To have had a four-in-five chance of finding the effect it was after, it needed 100. Sixty was not a small shortfall in confidence; it was a 40% chance of learning nothing from a year of work.
:::

## The four things that move power, and what each is worth

| Change | Effect on power |
| --- | --- |
| The true effect is larger | power rises |
| More participants | power rises, through a smaller standard error |
| Noisier measurement or a more variable population | power falls |
| A stricter $\alpha$ | power falls |

Only two of those are under anyone's control. You cannot make the effect bigger, and it is the effect that dominates. Against a true difference of 5 mg/dL this design has power 0.23. Against 7 mg/dL, 0.40. Against 9 mg/dL, 0.59. Against 11.6, 0.80. The same sixty people, the same nurse, the same meter, and the study's chance of success ranges from one in four to four in five depending on a quantity nobody knows in advance.

Which is why a power calculation is a statement about an effect you have *decided to be able to detect*, and why writing that decision down before the study starts is the whole discipline. Whether 9 mg/dL is a difference worth detecting is a clinical question, and the last lesson of this block is where it gets asked.

:::{callout}
:kind: warning

## Computing power after the fact tells you nothing new

There is a tempting move that does not work. A study comes back with $p = 0.31$, somebody plugs the observed difference back into a power calculation, and reports that the study "only had 22% power, so the negative result is uninformative".

Power computed from the observed result is a re-expression of the $p$-value and carries no separate information. A large $p$ always yields a small computed power, and saying so twice does not make it two pieces of evidence.

Everything in this scene is a **design** calculation. It asks what a design can detect against an effect named independently of the data, and that question is worth asking before the study, and worth asking afterwards using the effect size the field cares about, not the one this study happened to produce.
:::

:::{source-note}
:claims: claim-beta-and-power, claim-what-drives-beta, claim-sample-size-formula, claim-observed-power-is-uninformative
:sources: source-greenland-misinterpretations, source-nist-statistical-tests, source-nist-sample-sizes

These sources support power as the pre-study probability that a test rejects the test hypothesis when an alternative is correct, with the Type II or beta error rate as its complement; the dependence of the second-kind error on the size of the real discrepancy and its increase as alpha is tightened; the sample-size relation built from the two normal quantiles, the standard deviation, and the difference to be detected; and the statement that power calculated from the observed data is a transformation of the null p-value and provides no test of the alternatives. The cohort, the chart, and every figure computed here are original teaching material.
:::
