# Reading the histogram that 142 was standing in front of

Scroll back to the histogram in the previous scene if you need it. This scene works through it the way you would work through a chest film: in a fixed order, so that you notice the thing you were not looking for.

:::{worked-example}
:id: worked-example-read-the-glucose-histogram

**The task.** Sixty fasting glucose values, binned in 10 mg/dL intervals from 95 to 185. Say what this cohort looks like, and say what the average of 142 mg/dL left out.

**Step 0. Check what the picture is made of.** Before reading any shape, read the construction. The horizontal axis is fasting glucose in mg/dL, running 95 to 185. The vertical axis is a count of people, starting at zero. The bins are 10 mg/dL wide and there are nine of them. A reading that lands exactly on a boundary goes into the upper bin, so the single value of 125 mg/dL is counted in the 125 to 135 bar. That rule has to be stated somewhere, because a reader who assumes the opposite convention will get a different table from the same data.

**Step 1. How many humps?** One. The counts climb from the left, peak at the 135 to 145 bin, and fall away to the right. A single hump means the group behaves like one population on this measurement, so a single centre is a sensible thing to quote. Had there been two humps, the whole idea of a typical value would be in trouble, which is the case worked below.

**Step 2. Where is the middle?** The tallest bar sits at 135 to 145, and the mean of 142 mg/dL falls inside it, near its right edge. Agreement between the peak and the average is worth noting rather than assuming; when they disagree, the disagreement is the finding.

**Step 3. How wide is it?** The lowest occupied bin is 95 to 105 and the highest is 175 to 185, so the values span roughly 80 mg/dL. Note what the picture will not give you: the actual lowest and highest readings are somewhere inside those end bins, and a histogram never says where. Three fifths of the cohort, 36 people, sit between 125 and 155. The bulk is packed into a 30 mg/dL window, and the other 24 people are spread across the 60 mg/dL on either side of it. A group can be tight in the middle and still reach a long way out.

**Step 4. Is it lopsided?** Yes, mildly. Walking left from the peak, counts drop 13, 11, 6, 3, 1. Walking right, they drop 13, 12, 8, 4, 2. The right side takes longer to reach zero, so the tail stretches further towards high glucose than towards low. Whether that lean belongs to this measurement or to these particular sixty people is not something one histogram can settle. The next lesson gives the lean a name and a number.

**Step 5. Is anybody far out on their own?** Nobody is separated by a visible gap. The two people in the 175 to 185 bin are the highest, and four more sit in the bin directly below them, so the top thins out rather than detaching. At the other end, one person occupies the lowest bin alone with only three people above them. That single low reading is the closest thing here to an outlier, and it earns a look at the record rather than a rule.

**The answer.** One hump, centred near 142 mg/dL, most people between 125 and 155, a longer reach towards high values than low, and one low reading worth checking. The average of 142 carried the second of those five findings and nothing else.
:::

## The same reading as a frequency table

A **frequency table** lists each bin beside its count. The picture makes the shape obvious and the exact figures approximate; the table does the reverse.

| Glucose bin (mg/dL) | People | Share of cohort |
| --- | --- | --- |
| 95 to 105 | 1 | 0.017 |
| 105 to 115 | 3 | 0.050 |
| 115 to 125 | 6 | 0.100 |
| 125 to 135 | 11 | 0.183 |
| 135 to 145 | 13 | 0.217 |
| 145 to 155 | 12 | 0.200 |
| 155 to 165 | 8 | 0.133 |
| 165 to 175 | 4 | 0.067 |
| 175 to 185 | 2 | 0.033 |
| All | 60 | 1.000 |

The third column is each count divided by 60, the part-to-whole proportion introduced in the previous scene. It answers a question the count column does not: 21.7% of this cohort sits in the busiest bin, so even the most crowded 10 mg/dL slice holds about a fifth of the group. "A cohort with fasting glucose around 142" invites a mental picture of sixty people bunched near 142. Four fifths of them are somewhere else.

## When one number describes nobody

Now the case that makes the point sharply. Below is a different sixty-person set, constructed for this lesson. Its mean is also exactly 142 mg/dL.

:::{chart} ../charts/bimodal-counter-case.chart.json
:::

Two humps, one near 120 and one near 160, and a hollow between them. The mean falls in the hollow. Two people out of sixty sit in the bin containing the group's own average, and the arithmetic is faultless.

A researcher who reported only "mean fasting glucose 142 mg/dL" would describe these two cohorts identically, and the second one is telling you something the first is not: there are probably two kinds of person in that room. Finding out what separates them is the next question. The histogram is what makes the question askable, and it is why looking precedes summarising.

:::{check}
:id: check-what-the-mean-missed
:kind: retrieval

Without scrolling up: of the five things a histogram reports about a single quantitative column, which one does an average also report, and which four does it not?

Then answer this. If a colleague tells you the mean is 142 mg/dL and the values run from 100 to 181, how much of the shape do you now know?
:::

The average reports roughly where the values sit. It reports nothing about how spread out they are, whether the distribution leans one way, whether outliers are present, or whether there is more than one mode. Adding the minimum and maximum fixes only the second of those, and does it crudely: both cohorts on this page have a mean of 142 and a similar range, and they look nothing alike.

:::{source-note}
:claims: claim-histogram-shows-distribution-features, claim-relative-frequency-proportion, claim-histogram-bins-govern-detail
:sources: source-nist-histogram

This source supports the list of distribution features a histogram reports, the normalisation of bin counts into proportions of the total, and the construction of a histogram from bins of a width the analyst chooses. Both cohorts, their values, and the binning convention used here are original teaching material.
:::
