# Suppose the sixty names had been sixty other names

The dinner-timing study is finished. Mean fasting glucose across the cohort: 142 mg/dL.

Now imagine the clinic list had been shuffled the morning the study opened, and the sixty people who came through the door were sixty different adults with type 2 diabetes from the same list, measured the same way by the same nurse with the same meter. Nothing about the study was done worse. What number comes out?

Not 142. Almost certainly not 142.

Maybe 139. Maybe 145. It depends entirely on whose glucose happened to be in the file, and the observed cohort readings ran from about 100 to about 181 mg/dL. Pick sixty people from a population with substantial individual spread and you get one average; pick sixty others and you get another.

That is uncomfortable, and it is also the ordinary condition of every study ever published. So the question worth asking is not whether the number would change. It is how widely means from samples of sixty scatter around the unknown mean of the population. A narrow scatter makes 142 a more precise estimate; a wide scatter makes the confident decimal point on the slide do damage.

This lesson gives you the number that answers that question, and it is a small piece of arithmetic: one division and one square root.

## What you will be able to do

By the end you will be able to say why the mean of a fresh sample differs from the mean of this one and what makes that difference bigger or smaller; describe the distribution you would get by collecting the means of many repeats; calculate the standard error of a mean from a standard deviation and a sample size, and read a band around a reported mean from it; work out what happens to that band when the study is made four times larger, and how large a study would have to be to reach a target precision; and tell a standard deviation from a standard error in a sentence written by somebody else, which is the single most consequential thing in the lesson.

## A word that means something narrower here

The quantity at the centre of this lesson is called the **standard error**, and the word *error* is a poor fit for what it measures. Nobody has made a mistake. The nurse did not mis-record anything, the meter was not out of calibration, the analysis has no bug in it. A repeat study returns a different mean because it contains different people, and different people have different glucose. That is all *error* means here: variation from one sample to the next, in a quantity computed correctly every time.

Keep the ordinary meaning of the word available, because you will still need it for mis-transcribed values and mis-calibrated meters, which are real and which this lesson does not cover. When *error* appears from here on, it carries the narrow sense.

## Bring forward three things you already have

:::{check}
:id: check-prerequisites-mean-sd-normal
:kind: diagnostic

Answer these before reading on, in a sentence each.

1. The cohort has a mean fasting glucose of 142 mg/dL and a standard deviation of 18 mg/dL. In plain words, what does the 18 tell you? Which people does it describe?
2. On a normal curve, roughly what share of the values sits within one standard deviation of the centre? Within two?
3. The study enrolled 60 adults from a clinic list. Name one thing that decides whether a conclusion about those 60 can be carried across to adults with type 2 diabetes in general.
:::

The 18 mg/dL describes the spread of the sixty observed readings around their sample mean of 142. It also estimates how much individual readings vary in the population, but it is not itself a measured fact about every person in that population. About 68% of a normal distribution lies within one standard deviation of the centre and about 95% within two, which is the rule you met alongside the normal curve; those percentages require a normal model and are not automatic for a skewed set of readings. And what carries a finding beyond the study is the route by which people entered it: a sample can speak for the list it was drawn from, and the list can fall short of the population you actually care about.

That third answer matters more than it looks. This lesson holds the route fixed and asks a narrower question. Given that these 60 came from the list by chance, how much does chance alone move the answer?

:::{callout}
:kind: recovery

## Recovery route

If the meaning of the 18 was the hesitant one, go back to the lesson on centre, spread, and shape and return when you can say what a standard deviation is a distance between. If the 68 and 95 figures were unfamiliar, the lesson on probability distributions introduces them with the normal curve; this lesson leans on them but does not reteach them. If the third question was the difficult one, the sampling and randomisation lesson in the scientific inquiry block covers how a sample reaches a population. Nothing here requires a score from any of the three.
:::

## What this lesson does not do

You will not calculate a confidence interval, run a test, or produce a p-value. Those are the next two lessons, and both are built directly on the quantity introduced here, which is why this one comes first. You will also not decide whether later dinners raise glucose. Everything below concerns how firmly a single number is pinned down, and says nothing about what caused it.

**Teaching example, not medical advice.** The sixty-person cohort, its mean of 142 mg/dL, and its standard deviation of 18 mg/dL are invented for teaching and kept consistent across this block of lessons. Nothing here reports a finding about real patients or supports a change to anyone's care.

## Accessibility and alternatives

This lesson has two model charts, and both carry a written description and the numbers that define them as a table, reachable under "Read the chart as text". Every quantity a chart shows also appears in the surrounding prose. The two curves share a horizontal scale on purpose, and the comparison between them is stated in words and in figures wherever it is drawn, so a reader who is not using the pictures loses nothing.

The arithmetic is a division and a square root throughout. A calculator is expected and no question depends on mental arithmetic, on judging a length by eye, on colour, or on a pointer. Every practice item can be answered from the numbers given in its own text.

:::{source-note}
:claims: claim-sampling-distribution-of-mean, claim-2sd-covers-95
:sources: source-altman-bland-se

This source supports the description of a sample mean as varying from sample to sample, the naming of the standard error as the measure of that sampling spread, and the 68% and 95% coverage rules for a normal distribution. The cohort, its values, and the shuffled-list scenario are original teaching material.
:::
