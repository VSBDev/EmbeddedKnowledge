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

For a sample, the exact value that occurs most often. It is often informative for data recorded as a small number of fixed levels. In finely measured continuous samples, exact repeats depend on measurement precision, so also inspect modal intervals in a histogram; a continuous population can have one or several density peaks even when no exact sample value repeats.
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

For finely measured continuous sample data, an exact-value mode may be absent, tied, or unstable because small changes in measurement precision alter which values repeat. That does not make modal structure meaningless: a histogram can have a modal interval, and a continuous population can have one or several density peaks. The mean and median still have work to do, but they do not replace inspection of those peaks.

## Why the mean and median agreed here

Look at the sixty glucose readings grouped into bins.

:::{chart} ../charts/cohort-fasting-glucose.chart.json
:::

The exact invented observations behind the histogram are given below so its bins and summaries can be recomputed. Each row continues the same group, and every value is in mg/dL.

| Dinner group | Exact readings |
| --- | --- |
| Early, 1–10 | 108, 113, 116, 117, 121, 128, 129, 129, 130, 130 |
| Early, 11–20 | 130, 131, 132, 133, 134, 135, 138, 138, 139, 139 |
| Early, 21–30 | 140, 140, 141, 141, 141, 161, 162, 169, 180, 180 |
| Late, 1–10 | 104, 104, 115, 122, 123, 143, 143, 143, 144, 144 |
| Late, 11–20 | 145, 145, 146, 146, 149, 150, 151, 152, 153, 154 |
| Late, 21–30 | 154, 154, 155, 155, 156, 163, 167, 168, 171, 176 |

The quartiles in this lesson are the midpoints of the two central values in the lower and upper 30-value halves, and every standard deviation is a sample standard deviation with divisor $n-1$. Under those declared conventions, the full cohort has mean 142, median 142, lower quartile 130, upper quartile 154, and sample standard deviation 18.0 mg/dL after rounding to one decimal place.

The chart itself, not equality of two summaries, is the evidence that this particular distribution is symmetric around one central cluster: the counts are 3, 7, 11, 18, 11, 7, and 3 across the seven bins. More generally, for a distribution symmetric about a centre, an existing mean and a unique median lie at that centre; only when the shape is also unimodal with a single central mode does the mode join them. Mean-median agreement alone proves none of those shape conditions. Skewness is the name for a lack of symmetry, and a distribution with a right tail longer than its left is called skewed right.

The agreement here is worth understanding rather than turning into a shape test, because the two summaries respond very differently to extreme values. The mean is computed from every value, so a reading in the far tail is added into the total and pulls the answer toward itself. The median is computed from ranks, so an extreme reading contributes one rank whether it is 190 or 900. A summary that barely moves when a few extreme values change is called resistant. The median is resistant; the mean is not.

Test the difference on a small set before continuing.

:::{check}
:id: check-swap-one-value

Five readings are 130, 138, 142, 146, 154 mg/dL. Their mean is 142 and their median is 142. Now replace 154 with 454, a reading a laboratory might flag but might also simply record. Predict both summaries before you calculate. What happens to the median, and what happens to the mean?

**Answer after your prediction:** The ordered list becomes 130, 138, 142, 146, 454. The middle value is still 142, so the median does not move at all. The total rises from 710 to 1010, so the mean rises from 142 to $1010/5 = 202$ mg/dL. One changed value moved the mean by 60 mg/dL and the median by nothing.
:::

## Accessibility and alternatives

Both charts in this lesson carry their numbers in text as well as in the picture. Each one has a short description, a longer description that states the observed shape and summary values, a table of every bin count and marked value, and an adjacent Markdown table containing every exact invented observation. The bin heights, five-number summaries, means, medians, and standard deviations can therefore be read and recomputed without seeing the plot. Nothing in this lesson depends on colour, hover, animation, or the position of an element on a screen. Numerical summary warnings are always labelled provisional until a learner checks a plot or the raw values.

:::{source-note}
:claims: claim-mean-not-resistant, claim-symmetry-coincidence, claim-right-tail-lifts-mean, claim-skewness-symmetry
:sources: source-nist-location, source-nist-histogram-skewed, source-nist-skewness

The sources support the mean being distorted by extreme tail values while the rank-based median is not, an introductory symmetric unimodal histogram in which the mode, mean, and median share a centre, and skewness as the lack of symmetry with a long right tail meaning positive skew. The learner text states the conditions and counterexamples that prevent treating summary agreement as a theorem about shape. That a high-side tail usually lifts the mean above the median is an explicitly bounded inference rather than a universal rule. The cohort, its exact observations, the adherence table, and the retrieval item are original teaching material.
:::
