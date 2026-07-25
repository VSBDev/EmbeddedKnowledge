# A column where both centre summaries agree and both hide the split

Turn away from glucose and look at the study's other main column: the interval between the last meal and going to sleep, recorded in hours for the same sixty adults. Here is the whole column, grouped.

| Hours from dinner to sleep | Number of adults |
| --- | --- |
| 1.0 to 1.4 | 8 |
| 1.4 to 1.8 | 14 |
| 1.8 to 2.2 | 8 |
| 2.2 to 2.6 | 0 |
| 2.6 to 3.0 | 0 |
| 3.0 to 3.4 | 0 |
| 3.4 to 3.8 | 4 |
| 3.8 to 4.2 | 7 |
| 4.2 to 4.6 | 8 |
| 4.6 to 5.0 | 7 |
| 5.0 to 5.4 | 4 |

The mean is 3.0 hours. The median is 2.9 hours. Those two summaries sit a tenth of an hour apart. If agreement were treated as a shape diagnosis, either number might look safe to report.

Now read the table again. Not one adult in this study recorded an interval between 2.2 and 3.4 hours. The mean and the median have landed together in a gap where the data has nobody at all.

## Work out what happened before reading on

:::{check}
:id: check-transfer-bimodal

Answer these four before continuing.

1. Why did the mean and the median agree even though this shape is nothing like the symmetric glucose histogram?
2. The standard deviation of the whole column is about 1.5 hours. Within the group below 2.2 hours it is about 0.3 hours, and within the group above 3.4 hours about 0.5 hours. Where did the extra spread come from?
3. The lower quartile of this column is 1.6 hours and the upper quartile is 4.4. Work out the interquartile range, divide it by the standard deviation of 1.5, and compare the result with the 1.35 a normal shape gives. Which direction did it move, and why is that the opposite of what the skewed clinic sample did?
4. What should the study's results table actually print for this column?

**Answers after your attempt.**

1. Agreement of the mean and median does not rule out a lean, a heavy tail, or a hole in the middle. Here the grouped table supplies the missing evidence: two clusters of thirty people lie roughly on opposite sides of a gap, so their pulls on the mean nearly balance and the 30th and 31st values in rank order fall on opposite banks. The summaries agree because of this constructed balance, not because agreement diagnoses a single symmetric peak.
2. From the separation itself. Each cluster is tight, with people sitting a few tenths of an hour from their own group's centre. The whole-column standard deviation of 1.5 hours is three to five times larger than either of those, and the difference is almost entirely the 2.8 hours between one cluster's centre and the other's. A standard deviation calculated across two separated groups measures the gap between them more than it measures the variation among people.
3. The interquartile range is $4.4 - 1.6 = 2.8$ hours, and $2.8/1.5 = 1.9$, well above 1.35. That departure from the normal reference says only that the two spread measures are responding differently. The grouped table explains why in this case: the lower and upper quartiles lie in different clusters, so the middle half straddles the empty gap and the interquartile range partly measures separation. In the inspected clinic histogram, the long right tail instead made the ratio $57/60.7 = 0.94$. Those explanations come from viewing the distributions; a ratio below or above 1.35 does not by itself identify a tail or a split.
4. The two groups separately. This study recruited thirty adults who ate early and thirty who ate late, so the two clusters are the design, not a quirk of the data. The honest line reads: early group 4.4 hours, late group 1.6 hours. A single pooled centre of 3.0 hours would erase the exposure contrast the whole study was built to examine.
:::

## The rule this generalizes to

Every summary in this lesson answers a question, and every one of them can be handed a distribution it was never meant to describe. A mean given a long tail reports a value nobody has. A median given a treatment effect confined to the extremes reports no change. A pooled standard deviation given two distinct groups reports the distance between them and calls it variability.

None of that is a fault in the arithmetic. It is what happens when a summary is chosen before the shape is looked at. Order the values, look at the shape, then choose. That order is the transferable part, and it holds whether the column is glucose, hours, hospital days, or a laboratory assay you have never seen before.

:::{source-note}
:claims: claim-symmetry-coincidence, claim-skewness-symmetry, claim-iqr-sd-normal
:sources: source-nist-histogram-skewed, source-nist-skewness, source-wan-median-to-mean

The sources support an introductory symmetric unimodal case in which the centre summaries coincide, skewness as a measure of the lack of symmetry, and the ratio of interquartile range to standard deviation approaching about 1.35 for normal data. The learner text supplies the necessary conditions and counterexample, and uses departures from 1.35 only as nonspecific warnings. The dinner-timing column, its grouped table, and the ratios computed from it are original teaching material.
:::
