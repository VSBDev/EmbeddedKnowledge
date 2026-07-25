# Transfer: why the smallest unit always wins, and always loses

A regional maternity network publishes a league table each year. Mean birth weight by unit, ranked.

Over five years, one small unit has finished top twice, bottom twice, and mid-table once. No other unit has moved more than three places. Managers have visited, protocols have been reviewed, a consultant retired and was replaced. The table keeps swinging.

Nothing in the lesson so far mentions birth weight or league tables. Everything you need is in it anyway.

:::{check}
:id: check-transfer-league-table
:kind: transfer

Birth weight in this region has a standard deviation of about 500 g, similar across the units. The largest unit delivers 400 babies a year; the small unit delivers 40.

1. Calculate the standard error of each unit's annual mean birth weight, and say what the pair of numbers predicts about the league table before any clinical explanation is considered.
2. The network wants to keep publishing the table. Suggest two changes that would let a reader tell a real difference between units from the movement in part 1, and say what each one does.
3. The network also publishes each unit's rate of admission to the neonatal unit, as a percentage of live births. The small unit's percentage swings even more wildly than its mean birth weight. The formula from this lesson takes a standard deviation and a sample size, and a percentage has no standard deviation of the kind you have been dividing by. Does the reasoning still apply?
:::

## Part 1

The large unit: $\sqrt{400} = 20$, so its standard error is $500 \div 20 = 25$ g. The small unit: $\sqrt{40} = 6.325$, so its standard error is $500 \div 6.325 = 79$ g.

Each small-unit annual mean has an estimated standard deviation of 79 g around its population mean, about three times the large unit's 25 g. Comparing two independent years combines uncertainty from both: the estimated standard error of a year-to-year difference is $\sqrt{2}\times79=112$ g for the small unit and $\sqrt{2}\times25=35$ g for the large one. The ratio remains $79 \div 25 = 3.16$, which is $\sqrt{400 / 40} = \sqrt{10}$. The small unit can therefore spend some years near the top of a ranking and some near the bottom without a single thing changing in the delivery suite, while the large unit's mean is less volatile.

So the swing that prompted the visits and the protocol reviews is what a small denominator does to any average. It is the first thing to rule out, and the league table as published gives a reader no way to rule it out.

## Part 2

Publish the standard error, or a band built from it, beside every unit's mean. A reader can then see that the small unit's figure carries an uncertainty three times the large unit's, and stop reading rank order as performance. This changes nothing about the data and everything about what the table communicates.

Pool several years for the small unit. Five years of 40 births gives $n = 200$ and a standard error of $500 \div \sqrt{200} = 35$ g, close to the large unit's single-year figure. This buys precision with time, and it costs currency: a five-year average cannot show a change that happened last spring. That trade sits in front of anyone who has to report on a small service, and no amount of arithmetic removes it.

A third answer, ranking the units at all, is worth naming as the thing to stop doing. A rank is a summary that carries no uncertainty by construction: eighth place looks equally definite whether it was won by 200 g or by 4.

## Part 3

Yes, and it is the reasoning that transfers while the particular formula does not. A rate computed from one year's births is a statistic computed from a sample, so it has a sampling distribution: run the year again with the same unit, the same staff, and a different 40 babies, and the percentage comes out different. That sampling distribution has a spread, the spread is a standard error, and it shrinks as the number of births grows. Every one of those sentences is a sentence from the second scene with the word *mean* replaced.

What changes is how the standard error is calculated. A percentage carries its own arithmetic for the job, and the lessons ahead supply it. The same is true of the difference between two group means, of a correlation, and of the slope of a fitted line. Each is estimated from a sample, each would come out differently on a repeat, and each therefore has a standard error that says by how much.

The dinner-timing study has one waiting. Its two groups of thirty differ by 9.0 mg/dL, later minus earlier, and the standard error of that difference is 4.13 mg/dL. That is a larger number than the 2.32 attached to the cohort mean, which should make sense: a difference is built from two estimates, each carrying its own uncertainty, so the difference inherits both. The 4.13 is the number the next two lessons are built on, and you now know what kind of number it is.

## Where this leaves the block

Everything from here treats an estimate as a value drawn from a distribution whose width you can calculate. The confidence interval in the next lesson is a band built from a standard error. The p-value in the lesson after it asks how far an observed difference sits from zero, measured in standard errors. Both are ways of saying out loud what this lesson established: the number you have is one draw, its precision is a quantity, and the quantity is knowable.

:::{source-note}
:claims: claim-se-applies-to-other-statistics, claim-se-formula
:sources: source-altman-bland-se

These sources support the statement that the sampling-distribution idea applies to statistics other than a mean, including proportions, regression coefficients, and contrasts such as the difference between two means, and that each such estimate has a standard error indicating its uncertainty. They also support the relation between the standard error, the standard deviation, and the square root of the sample size used in parts 1 and 2. The maternity network, the units, the birth-weight figures, and the league table are original teaching material and describe no real service.
:::
