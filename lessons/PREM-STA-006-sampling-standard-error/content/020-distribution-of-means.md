# A distribution made of averages

Do the thought experiment properly. Draw sixty adults from the clinic list, record the mean fasting glucose, write it down, put everyone back, draw sixty more, write that mean down too. Keep going for a thousand repeats.

You now hold a thousand numbers. Every one is a cohort mean, computed correctly, from a real sixty people. They are not all the same.

Those thousand numbers have a shape, a centre, and a spread, exactly like any other column of numbers, and the lesson on centre and spread already taught you how to describe them. That column has a name.

:::{definition}
:id: definition-sampling-distribution

The **sampling distribution** of a statistic is the distribution of the values that statistic would take across repeated samples of a fixed size drawn from the same population.

The statistic here is the mean of sixty fasting glucose readings. Its sampling distribution answers: if I did this again, where would the answer land, and how often there?
:::

Two things about that distribution decide everything in this lesson.

**Its centre sits where the population's centre sits.** Some repeats overshoot, some undershoot, and there is no reason for one direction to win. Averaged over the thousand repeats, the cohort means pile up around the mean glucose of the whole population the list represents. This is why a sample mean is a usable estimate of a population mean at all.

**Its spread is much smaller than the spread of the people.** This is the part that surprises everyone the first time, so it is worth seeing before it is explained. Compare the two pictures below. They are drawn on the same horizontal axis, from 88 to 196 mg/dL, so nothing about the comparison is a trick of scaling.

:::{chart} ../charts/sampling-distribution-mean.chart.json
:::

:::{chart} ../charts/individual-values.chart.json
:::

The second curve is the cohort as you have known it since the lesson on tables and displays: individual people, standard deviation 18 mg/dL, readings running from about 100 to 181 mg/dL. The first curve is the thousand repeat means, and it is a spike by comparison. Nearly all of it lies between 135 and 149 mg/dL. A repeat of this study landing at 128, or at 160, essentially never happens, even though individual patients sit at 128 and at 160 all the time.

## Why averaging shrinks the spread

An individual reading is high because that person's glucose is high. Nothing balances it.

A cohort mean is high only if the sixty people, taken together, ran high. To push the mean of sixty up to 160, chance would have to hand you an unusual run of high readings and almost no low ones. It is much easier to draw one person at 178 than to draw sixty people who average 178. Within any one draw, the high readings and the low readings sit in the same sum and partly cancel, and how much they cancel depends on how many of them there are.

That is the mechanism in words. The next scene turns it into the arithmetic that says exactly how much.

## The spread of the repeats has its own name

The standard deviation of the sampling distribution of the mean is called the **standard error of the mean**. For this study it is 2.32 mg/dL, and the shaded band on the first chart is that quantity marked once either side of 142: from 139.7 to 144.3 mg/dL.

Read the band the way you would read any one-standard-deviation band on a bell curve. About two thirds of repeats of this study would return a cohort mean somewhere between 139.7 and 144.3 mg/dL. Widen it to two standard errors, 137.4 to 146.6, and you have covered about 95% of them.

Hold on to the units. The standard error is 2.32 **mg/dL**, the same unit as the glucose readings and the same unit as the standard deviation of 18. Two quantities in mg/dL, describing two completely different things, and the whole of the fourth scene is about not confusing them.

:::{check}
:id: check-what-varies
:kind: retrieval

Before reading on, answer without scrolling back.

1. The curve of repeat means is centred on 142. What does the 142 estimate?
2. If the study had enrolled 600 people instead of 60, would the curve of repeat means be wider, narrower, or the same width? Would the curve of individual values change?
3. A colleague says the shaded band means that two thirds of the patients in the study had a fasting glucose between 139.7 and 144.3 mg/dL. What is wrong with that?
:::

The 142 estimates the mean fasting glucose of the population the clinic list represents, which is a number nobody has ever measured and nobody ever will. With 600 people the curve of repeat means would be substantially narrower, because a mean of 600 is harder to push around than a mean of 60. The curve of individual values would not change at all; enrolling more people does not make patients more alike. And the colleague has read a band about repeats of the study as though it were a band about patients. Look at the second chart: the individual readings run from roughly 100 to 181, and a band from 139.7 to 144.3 would contain about six of the sixty. That mistake gets a scene to itself shortly, because it is the one that does damage in print.

:::{source-note}
:claims: claim-sampling-distribution-of-mean, claim-se-formula, claim-se-is-precision
:sources: source-altman-bland-se

These sources support the description of the sample mean as varying from sample to sample, the naming of that variation's spread as the standard error of the estimate of the mean, and the standard error's role as a measure of how precisely the mean has been pinned down. The cohort, the thousand-repeat thought experiment, and both charts are original teaching material.
:::
