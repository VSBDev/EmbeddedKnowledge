# An estimate, a ruler, and the range it buys you

Start with the word, because the word will mislead you if you let it.

In ordinary speech, confidence is something a person feels. A doctor is confident about a diagnosis. A student is confident about an exam. It sits inside somebody's head and it moves with the day.

The confidence in a confidence interval is nothing of that kind. It is a property of a calculation. It records how often a procedure of that shape lands on the truth when it is used over and over, and it would mean the same thing if every person using it felt uncertain. When you meet the phrase in a paper, hear it as a claim about a method's track record.

## The two quantities an interval sits between

There is a number you want and cannot see. Here it is the true difference in average fasting glucose between eating late and eating earlier, across the whole population the cohort came from. It is fixed. It has a value right now, the same value it had before anybody was recruited, and sampling does not change it. A fixed unknown quantity of that sort is called a **parameter**.

You met the word once already, in the lesson on scientific models, where a model parameter was a knob you set to make a model behave. This use is different. Nobody sets this number and nobody can read it off. It belongs to the population, and the whole study exists to guess at it.

Then there is the number you can see. The study measured a difference of 9.0 mg/dL. That single value, computed from the data, is a **point estimate** of the parameter. It is the best guess this sample supports, and it is almost certainly off by some amount, because a different thirty pairs of people would have given a different figure.

An **interval estimate** replaces the single guess with a range. Confidence limits are exactly that: an interval estimate, built by a procedure with a stated success rate.

:::{definition}
:id: definition-confidence-interval

A **confidence interval** is a range computed from sample data by a procedure whose stated **confidence level** is the proportion of samples for which such a range would contain the fixed parameter, if you drew sample after sample of the same size and rebuilt the range each time.

At a 95% level: draw many samples, build the interval each time, and about 95 in every 100 of those intervals would contain the true value. The level describes the factory. The interval in front of you is one item off that production line.
:::

## The recipe

Almost every interval in a medical paper has the same three-part shape.

:::{equation}
:label: equation-interval-recipe

\text{estimate} \pm (\text{multiplier}) \times (\text{standard error})
:::

The estimate is what the study measured. The standard error is what the previous lesson taught you to compute, and it sets the natural unit of wobble for that estimate. The multiplier decides how many of those units you reach out in each direction, and it is the only piece the confidence level touches.

Reaching out in both directions is what **two-sided** means. You are drawing a fence with two posts and you have to decide how much probability to leave outside each of them. A two-sided 95% interval leaves 2.5% beyond each post. A one-sided interval spends the whole 5% at one end and gives you a single bound, which is what you want when only one direction of the effect would change anything. Everything in this lesson is two-sided, because a study reporting how big a difference is usually needs both ends.

Where does the multiplier come from? The previous lesson established that an estimate like a group average scatters in an approximately normal shape across repeats, and that shape is what fixes the numbers. For a 95% two-sided interval, the multiplier is **1.96**, and you can read it off a published table of the standard normal distribution. The value with 0.975 of the curve below it is 1.960, so going 1.960 units above and below the centre leaves 0.025 in each tail and encloses the middle 95%.

Two neighbours are worth holding on to, because the next scene uses them:

| Confidence level | Multiplier | Left in each tail |
| --- | --- | --- |
| 90% | 1.645 | 0.05 |
| 95% | 1.960 | 0.025 |
| 99% | 2.576 | 0.005 |

## A first interval, on a single group

Before the difference, do the simpler thing. Take the late-dinner group on its own: 30 people, average fasting glucose 146.5 mg/dL, standard deviation 16 mg/dL.

Its standard error is the group's standard deviation divided by the square root of the group size.

:::{equation}
:label: equation-late-group-standard-error

\mathrm{SE} = \frac{16}{\sqrt{30}} = \frac{16}{5.477} = 2.92 \text{ mg/dL}
:::

Now feed the recipe.

:::{equation}
:label: equation-late-group-interval

146.5 \pm 1.96 \times 2.92 = 146.5 \pm 5.72
:::

The interval runs from **140.8 to 152.2 mg/dL**. It is 11.4 mg/dL wide.

Read that back carefully. It is a range for the average fasting glucose of the population those thirty people came from. It is not a range for any one person's glucose. Most of the thirty individuals sat outside it, which is exactly what you would expect: people differ from each other far more than group averages differ from sample to sample.

:::{check}
:id: check-recipe-parts
:kind: retrieval

Cover the arithmetic above and answer from memory.

1. Which of the three parts of the recipe changes when you move from a 95% interval to a 99% interval?
2. Which part changes when you recruit more people?
3. The range 140.8 to 152.2 mg/dL is a range for what, exactly?
:::

The confidence level touches only the multiplier: 1.96 becomes 2.576, and the interval widens without a single new measurement. Recruiting more people changes the standard error, because the group size sits under a square root in its denominator. And the range is a range for the population mean of the late-dinner group, a fixed number nobody has observed.

:::{source-note}
:claims: claim-ci-definition, claim-confidence-level-long-run, claim-normal-975-quantile
:sources: source-nist-confidence-limits, source-nist-what-are-ci, source-nist-normal-table

The NIST/SEMATECH handbook is the source for the interval-estimate form used above, for the two-sided and one-sided distinction, and for the statement that a stated confidence level is the proportion of samples of a given size whose intervals would contain the true value. Its table of the standard normal distribution supplies the multipliers 1.645, 1.960 and 2.576. Nothing in the cohort or the worked arithmetic comes from a source; both were built for this block.
:::
