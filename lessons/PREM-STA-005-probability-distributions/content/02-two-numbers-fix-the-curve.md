# Two numbers, and the whole curve is decided

Start with what a distribution model is for. A histogram answers questions about the sixty people in front of you. A **probability distribution** answers questions about a value drawn from the population those sixty came from, including values none of them happened to have. It is a rule that assigns a probability to every range of possible readings.

For a measurement that can take any value in a range, the rule is drawn as a curve, and probability is **area under the curve** between two points. The height of the curve at a single point is a different quantity called **probability density**, and on its own it is not a probability at all. Ask for the probability that someone's fasting glucose is exactly 142.000... mg/dL and the honest answer is zero, because a single point spans no width and encloses no area. Ask for the probability that it lies between 140 and 145 and you get a number. Continuous measurements only answer questions about intervals, which is why a laboratory reports a reference *range*.

## The normal distribution

The **normal distribution** is one specific curve of that kind: symmetric about its centre, single-humped, falling away to zero on both sides without ever quite reaching it. NIST's handbook calls it "probably the most important distribution in statistics", and its usefulness is worth separating from its truth. It is important because it is mathematically tractable, because sample means tend towards it as samples grow, and because a great many measurements resemble it closely enough to be worth approximating. None of that is a promise about your data.

What makes it workable is how little it needs to know. Two **parameters** fix the entire curve:

- a **location parameter**, the mean, which decides where the peak sits on the horizontal axis;
- a **scale parameter**, the standard deviation, which decides how far the curve spreads before it flattens.

Change the mean and the identical curve slides sideways. Change the standard deviation and it stretches or narrows without moving its centre. There is no third knob. A normal curve cannot be lopsided, cannot have two humps, cannot have a floor or a ceiling, and cannot be told to stay above zero. Those are not features left out for simplicity; the family has no way to express them. Hold that thought, because it is where the model fails later.

For the study cohort the two numbers are already in hand from the centre-and-spread lesson: a mean of 142 mg/dL and a standard deviation of 18 mg/dL. Adopting the normal model means declaring that fasting glucose in this population behaves like this curve, and nothing further is chosen.

:::{chart} ../charts/cohort-glucose-normal-curve.chart.json
:::

## The empirical rule

Because the shape is fully determined by two numbers, the same fractions of area fall in the same places on every normal curve ever drawn. Measured in standard deviations from the mean, the three standard bands hold:

| Band | Distance from the mean | Share of the modelled values |
| --- | --- | --- |
| One standard deviation either side | mean ± 1 sd | 68.27 per cent |
| Two standard deviations either side | mean ± 2 sd | 95.45 per cent |
| Three standard deviations either side | mean ± 3 sd | 99.73 per cent |

Rounded to the form people quote from memory, that is the **empirical rule**: about 68, 95 and 99.7 per cent. The word *empirical* is doing no work about your data here. These are exact areas of a mathematical curve, computed once and true for every normal distribution.

Put the cohort's numbers in and the bands become glucose values:

:::{equation}
:label: equation-cohort-bands

\begin{aligned}
142 - 18 &= 124, & 142 + 18 &= 160 \\
142 - 36 &= 106, & 142 + 36 &= 178 \\
142 - 54 &= 88,  & 142 + 54 &= 196
\end{aligned}
:::

So the model says: about 68 per cent of this population sits between 124 and 160 mg/dL, about 95 per cent between 106 and 178, and about 99.7 per cent between 88 and 196. Multiply by the sixty people actually measured and it predicts about 41, about 57, and about 60 of them, since 0.68 × 60 = 40.8, 0.95 × 60 = 57.0 and 0.997 × 60 = 59.8.

Those are predictions. Nobody has looked yet.

## What the model buys, stated plainly

The histogram could not tell you what share of the cohort sat between 130 and 137 mg/dL, because that range cuts across a bin. The curve can, because it has a value everywhere. The histogram had nothing to say about a reading of 205 mg/dL, because nobody recorded one. The curve assigns it a probability. The histogram treated 100 mg/dL and 181 mg/dL as two end bars; the curve puts each at a stated distance from the centre, and the next scene shows they are not the same distance.

Every one of those gains comes from the same source. The model fills in the gaps between the sixty numbers and continues past both ends of them, using a shape assumption to do it. Where the assumption holds, the filling-in is worth having. Where it does not, the model is confidently answering questions about a population that does not exist.

:::{check}
:id: check-parameters-and-area
:kind: retrieval

Answer these without scrolling up.

1. A second cohort has mean fasting glucose 118 mg/dL with standard deviation 18 mg/dL, and its distribution is taken to be normal. Which two glucose values bound its central 95 per cent band?
2. Under a normal model, what is the probability that a person's fasting glucose is exactly 142 mg/dL?
3. A colleague says the empirical rule shows that 95 per cent of *any* dataset lies within two standard deviations of its mean. What is wrong with that sentence?
:::

The first answer is 118 − 36 = 82 and 118 + 36 = 154 mg/dL. Same width as the study cohort's band, because the standard deviation is the same, and shifted down by 24 because the mean is. The second is zero, since a single point encloses no area; any nonzero answer means the question should have named a range. The third is the one that matters: the 68, 95 and 99.7 figures are areas under a normal curve and belong to the model, not to data. A dataset earns those percentages only to the extent that a normal curve describes it, and whether it does is a question you have to go and settle.

:::{source-note}
:claims: claim-normal-two-parameters, claim-empirical-rule-areas, claim-normal-is-a-named-distribution
:sources: source-nist-normal-distribution, source-nist-normal-data

The first source supplies the normal probability density, its identification of the mean as the location parameter and the standard deviation as the scale parameter, the standard normal case with mean 0 and standard deviation 1, and the description of the distribution's standing in statistics. The second supplies the percentages of the population falling between the mean and one, two and three standard deviations, and the statistical meaning of calling data normal. The cohort's mean and standard deviation, the arithmetic on them, and all wording here are original teaching material.
:::
