# What one number is being asked to do

Ask for "the typical fasting glucose in this cohort" and you are asking a single number to stand in for sixty. Three different numbers can take that job, and they answer three different questions.

:::{definition}
:id: definition-mean
:label: Arithmetic mean

Add every value and divide by how many values there are. For the sixty readings the total is 8520 mg/dL, so the mean is $8520/60 = 142$ mg/dL. The mean answers: if the total were shared out equally, how much would each person get?
:::

:::{definition}
:id: definition-median
:label: Median

Put the values in order and take the middle one. With an even count there is no single middle, so take the average of the two central values. Ordering the sixty readings and averaging the 30th and 31st gives 142 mg/dL. The median answers: what value splits the group in half?
:::

:::{definition}
:id: definition-mode
:label: Mode

The value that occurs most often. Fasting glucose measured to the nearest mg/dL rarely repeats, so the mode of this column is close to meaningless. The mode earns its keep on data that comes in a small number of fixed levels.
:::

## Where each one is honest

The adherence rating in this study is ordinal, with four levels, and the sixty adults fall out like this.

| Adherence rating | Number of adults |
| --- | --- |
| 1 | 6 |
| 2 | 14 |
| 3 | 25 |
| 4 | 15 |

The mode is 3, and it says something a reader can act on: more adults gave that rating than any other. The median is also 3, because the 30th and 31st adults in rank order both sit in that level. Averaging the labels gives $169/60 = 2.82$, and 2.82 is not a rating anyone gave. Worse, the arithmetic assumes the step from 1 to 2 is the same size as the step from 3 to 4, which nothing about the rating scale guarantees. Ordinal levels are ordered labels, so the median and the mode describe them and the mean does not.

Continuous readings such as glucose are the opposite case. The mode is empty there, and the mean and median both have work to do.

## Why the mean and median agreed here

Look at the sixty glucose readings grouped into bins.

:::{chart} ../charts/cohort-fasting-glucose.chart.json
:::

The picture is close to symmetric: it looks about the same to the left and the right of its centre, with 3 people in the lowest bin and 3 in the highest, 7 in the second and 7 in the second from the top. Symmetry is exactly the condition under which the mean and the median coincide, which is why both came out at 142 mg/dL. Skewness is the name for the lack of that symmetry, and a distribution with a right tail longer than its left is called skewed right.

That agreement is worth understanding rather than assuming, because the two summaries respond very differently to extreme values. The mean is computed from every value, so a reading in the far tail is added into the total and pulls the answer toward itself. The median is computed from ranks, so an extreme reading contributes one rank whether it is 190 or 900. A summary that barely moves when a few extreme values change is called resistant. The median is resistant; the mean is not.

Test the difference on a small set before continuing.

:::{check}
:id: check-swap-one-value

Five readings are 130, 138, 142, 146, 154 mg/dL. Their mean is 142 and their median is 142. Now replace 154 with 454, a reading a laboratory might flag but might also simply record. Predict both summaries before you calculate. What happens to the median, and what happens to the mean?

**Answer after your prediction:** The ordered list becomes 130, 138, 142, 146, 454. The middle value is still 142, so the median does not move at all. The total rises from 710 to 1010, so the mean rises from 142 to $1010/5 = 202$ mg/dL. One changed value moved the mean by 60 mg/dL and the median by nothing.
:::

## Accessibility and alternatives

Both charts in this lesson carry their numbers in text as well as in the picture. Each one has a short description, a longer description that states the shape and the summary values, and a table of every bin count and every marked value, so the bin heights, the five-number summary, and the positions of the mean and median can be read without seeing the plot. Nothing in this lesson depends on colour, hover, animation, or the position of an element on a screen. Where a scene says a distribution "leans right", the same fact is stated numerically as a gap between the mean and the median, and every calculation can be reproduced from the tables alone.

:::{source-note}
:claims: claim-mean-not-resistant, claim-symmetry-coincidence, claim-right-tail-lifts-mean, claim-skewness-symmetry
:sources: source-nist-location, source-nist-histogram-skewed, source-nist-skewness

The sources support the mean being distorted by extreme tail values while the rank-based median is not, the mode, mean, and median being identical for a symmetric distribution and markedly different for a skewed one, and skewness as the lack of symmetry with a long right tail meaning positive skew. That a high-side tail lifts the mean above the median is drawn from the first two of those facts together rather than quoted from either. The cohort, the adherence table, and the retrieval item are original teaching material.
:::
