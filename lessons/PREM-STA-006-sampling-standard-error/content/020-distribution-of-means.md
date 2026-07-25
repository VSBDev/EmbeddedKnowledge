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

**Its centre sits where the population's centre sits.** If the samples are drawn independently from the same population, the average of all possible sample means equals the population mean, written $\mu$. Some repeats overshoot $\mu$, some undershoot it, and there is no reason for one direction to win. The observed 142 mg/dL is one sample mean and therefore an estimate of $\mu$; it is not known to be the centre itself.

**Its spread is much smaller than the spread of the people.** This is the part that surprises everyone the first time, so it is worth seeing before it is explained. The population mean and standard deviation are unknown, so the two pictures below are a model comparison rather than a reconstruction of the cohort. They temporarily set the population mean to 142 mg/dL and the population standard deviation to 18 mg/dL, the corresponding sample estimates, and assume independent samples of 60. They share the same horizontal axis, from 88 to 196 mg/dL, so nothing about the comparison is a trick of scaling.

:::{chart} ../charts/sampling-distribution-mean.chart.json
:::

:::{chart} ../charts/individual-values.chart.json
:::

The wide curve is an explicitly hypothetical normal distribution of individual values with standard deviation 18 mg/dL; the actual fictional cohort was right-skewed and is not represented by that bell. The narrow curve is the corresponding model sampling distribution of means. Nearly all of that model curve lies between 135 and 149 mg/dL. Its job is to show the scale change caused by averaging, not to prove the population shape or locate the unknown $\mu$.

## Why averaging shrinks the spread

An individual reading is high because that person's glucose is high. Nothing balances it.

A cohort mean is high only if the sixty people, taken together, ran high. To push the mean of sixty up to 160, chance would have to hand you an unusual run of high readings and almost no low ones. It is much easier to draw one person at 178 than to draw sixty people who average 178. Within any one draw, the high readings and the low readings sit in the same sum and partly cancel, and how much they cancel depends on how many of them there are.

That is the mechanism in words. The next scene turns it into the arithmetic that says exactly how much.

## The spread of the repeats has its own name

The standard deviation of the sampling distribution of the mean is called the **standard error of the mean**. If the population standard deviation is $\sigma$, the true standard error for independent samples of size $n$ is $\sigma / \sqrt{n}$. Because $\sigma$ is unknown here, the sample standard deviation $s = 18$ mg/dL is substituted to give an **estimated** standard error of $s / \sqrt{60} = 2.32$ mg/dL.

On the model chart, the shaded band runs one standard error either side of the model's assumed population mean of 142, from 139.7 to 144.3 mg/dL. If that centre and the normal model were correct, about 68% of sample means would fall in that band and about 95% would fall within two standard errors, 137.4 to 146.6. In the real study, 142 is the observed mean rather than the known population mean. Drawing those same numerical bands around it gives a useful precision scale, but it does not put 68% or 95% of future independent means around the observed result.

Hold on to the units. The estimated standard error is 2.32 **mg/dL**, the same unit as the glucose readings and the same unit as the sample standard deviation of 18. Two quantities in mg/dL, describing two completely different things, and the whole of the fourth scene is about not confusing them.

## One repeat compared with another

There are now two different spreads to keep apart. One sample mean scatters around $\mu$ with standard error $\mathrm{SE}$. The difference between two independent sample means carries uncertainty from both. When the two samples have the same size and variability, its estimated standard error is

$$
\mathrm{SE}_{\mathrm{difference}} = \sqrt{\mathrm{SE}^{2} + \mathrm{SE}^{2}} = \sqrt{2}\,\mathrm{SE}.
$$

For two independent samples of 60 like this one, that is $\sqrt{2} \times 2.324 = 3.29$ mg/dL. Under the same normal model and no population change, about 68% of the differences would lie within 3.29 mg/dL of zero and about 95% within 6.57 mg/dL. This is the appropriate scale for asking how far a fresh independent mean might land from the first one.

:::{check}
:id: check-what-varies
:kind: retrieval

Before reading on, answer without scrolling back.

1. The model curve is drawn with its centre at 142. What does the observed 142 estimate, and what is the unknown centre called?
2. If the study had enrolled 600 people instead of 60, would the curve of repeat means be wider, narrower, or the same width? Would the curve of individual values change?
3. A colleague says the shaded band means that two thirds of the patients in the study had a fasting glucose between 139.7 and 144.3 mg/dL. What is wrong with that?
:::

The 142 estimates the population mean $\mu$, the unknown centre of the true sampling distribution. With 600 people the curve of sample means would be substantially narrower, because a mean of 600 is harder to push around than a mean of 60. The distribution of individual values would not change at all; enrolling more people does not make patients more alike. And the colleague has read a band about the modelled spread of sample means as though it were a band about patients. The cohort readings ran from roughly 100 to 181, and the earlier cohort summary records only about six of the sixty inside 139.7 to 144.3. That mistake gets a scene to itself shortly, because it is the one that does damage in print.

:::{source-note}
:claims: claim-sampling-distribution-of-mean, claim-se-formula, claim-se-is-precision, claim-se-applies-to-other-statistics, claim-2sd-covers-95
:sources: source-altman-bland-se

This source supports the description of a sample mean as varying from sample to sample, the naming of that variation's spread as the standard error, the standard error's role as a measure of precision, normal-model coverage, and the extension of standard errors to differences between two means. The $\sqrt{2}$ result follows by adding the variances of two independent estimates with equal standard errors. The cohort, the repeat-sample thought experiment, and both model charts are original teaching material.
:::
