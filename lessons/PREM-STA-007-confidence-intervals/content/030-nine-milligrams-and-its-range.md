# Nine milligrams per decilitre, and everything else it could have been

Now the number the study was built to produce.

Late group average 146.5 mg/dL. Early group average 137.5 mg/dL. The difference, late minus early, is 9.0 mg/dL. That is the point estimate, and the parameter behind it is the true difference in the population.

Comparing two independent groups changes only the standard error. The published form pools the two groups' standard deviations into one value, then scales it by both group sizes at once, so with 30 people in each group and a within-group standard deviation of 16 mg/dL:

:::{equation}
:label: equation-difference-standard-error

\mathrm{SE} = 16 \times \sqrt{\frac{1}{30} + \frac{1}{30}} = 16 \times 0.2582 = 4.13 \text{ mg/dL}
:::

Look at that number beside the 9.0 before going further. The estimate is a bit over two standard errors from zero. A study in which the effect is only twice its own wobble is a study whose interval is going to be wide.

:::{worked-example}
:id: worked-example-difference-interval

**Build the 95% confidence interval for the difference in fasting glucose.**

**Step 1. Name the estimate and its units.** The estimate is 9.0 mg/dL, the late group's average minus the early group's. Keeping the direction attached matters: reversing the subtraction would give −9.0 and an interval with both signs flipped.

**Step 2. Take the standard error.** 4.13 mg/dL, from the calculation above.

**Step 3. Choose the level and the matching model.** The within-group standard deviation was estimated from these 60 readings, so use the 95% t multiplier with 58 degrees of freedom: 2.002.

**Step 4. Multiply.** 2.002 × 4.13 = 8.27 mg/dL. This half-width is the **margin of error**.

**Step 5. Add and subtract.**

Lower limit: 9.0 − 8.27 = 0.73, which rounds to 0.7 mg/dL.

Upper limit: 9.0 + 8.27 = 17.27, which rounds to 17.3 mg/dL.

**The 95% confidence interval for the difference is 0.7 to 17.3 mg/dL.**

**Independent check.** The estimate should be the midpoint: (0.7 + 17.3) / 2 = 9.0 mg/dL. The printed limits also sit 8.3 mg/dL on either side of 9.0 after rounding. If either check failed, the first things to inspect would be the subtraction order and whether the margin was added at one end and subtracted at the other.

**A note on rounding.** Both limits are rounded to one decimal place, and this lesson does that everywhere. Widths are always the subtraction you can do on the page: here it is 17.3 − 0.7 = 16.6. Twice the unrounded margin of error is about 16.5 after rounding to one decimal place. The 0.1 difference comes from rounding the two limits separately; trust the subtraction of the displayed limits when reporting their displayed width.

**Explain the decisive choice to yourself.** Why does this calculation use 2.002 rather than 1.96, and why must “late minus early” stay attached to the estimate before either limit is calculated?
:::

## Two things to read off it

The four landmarks on the number line are enough to read the interval without pretending that a future sampling distribution is centred on this study's estimate:

| Landmark | Difference in fasting glucose, late minus early |
| --- | ---: |
| No difference | 0.0 mg/dL |
| Lower confidence limit | 0.7 mg/dL |
| Observed difference | 9.0 mg/dL |
| Upper confidence limit | 17.3 mg/dL |

**It excludes zero.** Zero here is the **no-difference value**: what the difference would be if the two groups had the same population average. It is the number a reader checks against first. Every value inside this interval is positive, which puts the whole compatible range on the side where late dinners go with higher morning glucose in this invented cohort. That direction is what the study supports.

Notice how narrowly it manages it. The lower limit is 0.7 mg/dL. Push the estimate down by more than 0.73 mg/dL while holding the margin fixed, or increase the margin by more than 0.73 mg/dL while holding the estimate fixed, and zero would be inside. This is a result that clears the bar and does not clear it by much.

**It is wide.** The interval spans 16.6 mg/dL, from 0.7 to 17.3. That width is nearly twice the estimate sitting in the middle of it. The study is compatible with a true difference below 1 mg/dL and equally compatible with one above 17 mg/dL. The evidence covers both and does not choose between them. The clinical wrap-up lays the interval against a pre-stated service threshold, and the distance between the limits is why that scene exists.

That double reading is the whole point of the interval. Reporting only "9.0 mg/dL, and it beat zero" hides a study that could not tell a trivial effect from a large one.

## Why the t multiplier is the primary one here

The 1.96 multiplier is read off a normal curve, and that curve assumes you know how much people vary. You do not. The 16 mg/dL came from the same 60 readings as the 9.0, so the study is paying for two guesses at once and the interval has to be a little wider to cover the second one.

Statisticians handle this with the **t distribution**, a curve shaped like the normal one but with slightly fatter tails, so its multipliers are slightly larger. How much larger depends on how much data went into estimating the spread, a quantity counted in **degrees of freedom**. Sixty readings went in, and two group averages were computed from them before any spread could be measured, so 58 numbers were still free to vary. The published table gives 2.002 at 58 degrees of freedom.

That is why the worked interval uses 2.002 as its primary multiplier. Using the large-sample normal approximation of 1.96 would instead give 0.9 to 17.1 mg/dL, moving each end inward by about 0.2. Under the exact 58-degree-of-freedom t model, those z-based limits have about 94.5% coverage rather than the stated 95%. The numerical difference is small here, but the t calculation matches the stated level under the model actually used. The gap between t and normal shrinks as the study grows.

:::{check}
:id: check-reverse-the-interval
:kind: retrieval

A colleague reports the same comparison the other way round: early minus late, and the difference is −9.0 mg/dL.

Write down their 95% confidence interval without recomputing anything, then say whether their result and yours disagree.
:::

Their interval is −17.3 to −0.7 mg/dL. The limits swap places and both change sign, because subtracting in the other order flips every number in the calculation. Nothing disagrees. Two people have described one comparison from opposite ends, and both intervals exclude zero on the same side of it. This is why a reported interval is unreadable until you know which group was subtracted from which.

:::{source-note}
:claims: claim-ci-definition, claim-normal-975-quantile, claim-two-sample-pooled-interval, claim-t-multipliers
:sources: source-nist-confidence-limits, source-nist-what-are-ci, source-nist-normal-table, source-nist-two-sample, source-nist-t-table

The NIST/SEMATECH handbook supports the interval-estimate recipe, the pooled two-sample form of the standard error with its degrees of freedom, the normal comparison value 1.960, and the value 2.002 read from its table of critical values of the t distribution at 58 degrees of freedom. The cohort, its group averages, and every step of the arithmetic above are original teaching material.
:::
