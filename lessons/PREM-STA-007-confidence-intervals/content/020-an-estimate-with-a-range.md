# An estimate, a ruler, and the range it buys you

Start with the word, because the word will mislead you if you let it.

In ordinary speech, confidence is something a person feels. A doctor is confident about a diagnosis. A student is confident about an exam. It sits inside somebody's head and it moves with the day.

The confidence in a confidence interval is nothing of that kind. It is a property of a calculation under its sampling and analysis assumptions. It records how often a procedure of that shape lands on the truth when it is used over and over under those conditions, and it would mean the same thing if every person using it felt uncertain. When you meet the phrase in a paper, hear it as a conditional claim about a method's track record.

## The two quantities an interval sits between

There is a number you want and cannot see. Here it is the true difference in average fasting glucose between eating late and eating earlier, across the whole population the cohort came from. It is fixed. It has a value right now, the same value it had before anybody was recruited, and sampling does not change it. A fixed unknown quantity of that sort is called a **parameter**.

You met the word once already, in the lesson on scientific models, where a model parameter was a knob you set to make a model behave. This use is different. Nobody sets this number and nobody can read it off. It belongs to the population, and the whole study exists to guess at it.

Then there is the number you can see. The study measured a difference of 9.0 mg/dL. That single value, computed from the data, is a **point estimate** of the parameter. It is the best guess this sample supports, and it is almost certainly off by some amount, because a different thirty pairs of people would have given a different figure.

An **interval estimate** replaces the single guess with a range. Confidence limits are exactly that: an interval estimate, built by a procedure with a stated success rate.

:::{definition}
:id: definition-confidence-interval

A **confidence interval** is a range computed from sample data by a procedure whose stated **confidence level** is the proportion of samples for which such a range would contain the fixed parameter, if you drew sample after sample of the same size under the stated sampling and analysis model and rebuilt the range each time.

At a 95% level: when the model's conditions hold, draw many samples, build the interval each time, and about 95 in every 100 of those intervals would contain the true value. The level describes the factory under those conditions. The interval in front of you is one item off that production line.
:::

For this invented cohort, that track-record claim assumes that the two groups are independent samples from the population named in the question, that observations within the groups are independent, that the normal two-sample model is adequate, and that the two groups have the same variance as the pooled calculation assumes. It also assumes the study is not systematically biased by recruitment or measurement. The interval describes random sampling error under that model; it cannot repair bias or establish that the sampled population represents some wider population.

## The recipe

Almost every interval in a medical paper has the same three-part shape.

:::{equation}
:label: equation-interval-recipe

\text{estimate} \pm (\text{multiplier}) \times (\text{standard error})
:::

The estimate is what the study measured. The standard error is what the previous lesson taught you to compute, and it sets the natural unit of wobble for that estimate. The multiplier decides how many of those units you reach out in each direction, and it is the only piece the confidence level touches.

Reaching out in both directions is what **two-sided** means. You are drawing a fence with two posts and you have to decide how much probability to leave outside each of them. A two-sided 95% interval leaves 2.5% beyond each post. A one-sided interval spends the whole 5% at one end and gives you a single bound, which is what you want when only one direction of the effect would change anything. Everything in this lesson is two-sided, because a study reporting how big a difference is usually needs both ends.

Where does the multiplier come from? The sampling model fixes it. If the standard error is known or a large-sample normal approximation is justified, a 95% two-sided interval uses **1.96**. The value with 0.975 of the standard normal curve below it is 1.960, so going 1.960 units above and below the centre leaves 0.025 in each tail and encloses the middle 95%.

Two neighbouring normal multipliers are worth holding on to:

| Confidence level | Multiplier | Left in each tail |
| --- | --- | --- |
| 90% | 1.645 | 0.05 |
| 95% | 1.960 | 0.025 |
| 99% | 2.576 | 0.005 |

When the standard deviation is estimated from the same data, the primary calculation uses the **t distribution** instead. Its multiplier is slightly larger and depends on the degrees of freedom. The normal values remain useful large-sample approximations, but the examples with a reported sample standard deviation below use the matching t multiplier.

## A first interval, on a single group

Before the difference, do the simpler thing. Take the late-dinner group on its own: 30 people, average fasting glucose 146.5 mg/dL, standard deviation 16 mg/dL.

Its standard error is the group's standard deviation divided by the square root of the group size.

:::{equation}
:label: equation-late-group-standard-error

\mathrm{SE} = \frac{16}{\sqrt{30}} = \frac{16}{5.477} = 2.92 \text{ mg/dL}
:::

Because the standard deviation of 16 mg/dL was estimated from these 30 people, use the 95% t multiplier with 29 degrees of freedom, **2.045**, rather than 1.96.

:::{equation}
:label: equation-late-group-interval

146.5 \pm 2.045 \times 2.92 = 146.5 \pm 5.97
:::

The interval runs from **140.5 to 152.5 mg/dL**. It is 12.0 mg/dL wide.

Read that back carefully. It is a range for the average fasting glucose of the population those thirty people came from. It is not a range for any one person's glucose. Most of the thirty individuals sat outside it, which is exactly what you would expect: people differ from each other far more than group averages differ from sample to sample.

:::{check}
:id: check-recipe-parts
:kind: retrieval

Cover the arithmetic above and answer from memory.

1. Which of the three parts of the recipe changes when you move from a 95% interval to a 99% interval?
2. How does recruiting more people change the standard error, and what smaller secondary change occurs in a t interval?
3. The range 140.5 to 152.5 mg/dL is a range for what, exactly?
:::

The confidence level changes the multiplier, and the interval widens without a single new measurement. Recruiting more people shrinks the standard error because the group size sits under a square root in its denominator; in a t interval it also increases the degrees of freedom, making the multiplier move slightly towards its normal-curve limit. And the range is a range for the population mean of the late-dinner group, a fixed number nobody has observed.

:::{source-note}
:claims: claim-ci-definition, claim-confidence-level-long-run, claim-normal-975-quantile, claim-t-multipliers
:sources: source-nist-confidence-limits, source-nist-what-are-ci, source-nist-normal-table, source-nist-t-table

The NIST/SEMATECH handbook is the source for the interval-estimate form used above, for the two-sided and one-sided distinction, and for the conditional long-run reading of a confidence level. Its normal table supplies 1.645, 1.960 and 2.576, and its t table supplies 2.045 at 29 degrees of freedom. Nothing in the cohort or the worked arithmetic comes from a source; both were built for this block.
:::
