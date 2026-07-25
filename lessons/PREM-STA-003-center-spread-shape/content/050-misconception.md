# The average patient who does not exist

A fictional clinic audit opens with this sentence: "Across the 60 adults reviewed, mean fasting glucose was 160 mg/dL." The arithmetic behind it is flawless. The sentence is still misleading, and the histogram shows why.

:::{chart} ../charts/skewed-clinic-sample.chart.json
:::

Thirty-nine of these sixty adults have a reading below 150 mg/dL. Thirty of them are at or below 140. The 160 in the audit sentence sits above the reading of about seven adults in every ten it claims to describe, and it got there because twelve readings stretch from 190 up to 382 and each one enters the total at full weight.

:::{misconception}
:id: misconception-mean-on-skewed-data

**The wrong model:** the mean is the average, the average is the typical value, so the mean is what you report.

**What the data shows instead:** this sample's median is 140 mg/dL and its mean is 160 mg/dL, a gap of 20 mg/dL. Half the sample sits below 140. The mean is not describing a middle; it is describing a total shared out equally, and a handful of very high readings have loaded that total. Values that sit far from the bulk of the data like this are called outliers, and calling a reading an outlier says only where it sits, not that it is a mistake: a fasting glucose of 382 mg/dL in a clinic caring for people with poorly controlled diabetes is a real measurement of a real problem. The distribution is skewed right, its long tail is on the high side, and skew is exactly the condition that separates the mean from the median.

**The repair:** for a skewed distribution, report the median as the centre and pair it with the quartiles. Here the five-number summary is 96, 122, 140, 179, 382 mg/dL. Those five numbers say the middle half of the clinic sits between 122 and 179, one person is at 382, and no single value was ever going to carry all of that.

**A test you can run without seeing the picture:** compare the two spread measures. This sample has an interquartile range of 57 mg/dL and a standard deviation of about 61 mg/dL, so the standard deviation is the larger of the two. In the symmetric cohort from earlier the interquartile range was 25 and the standard deviation 18, the other way round, and their ratio of 1.39 was near the 1.35 a normal shape produces. When the standard deviation swells past the interquartile range, values far out in a tail are doing the work, and the mean is being pulled with them. Checking the gap between the mean and the median tests the same thing: 20 mg/dL on a distribution whose middle half is 57 mg/dL wide is not a rounding difference.
:::

## Now the mistake people make on the way back

The repair above is easy to over-apply. A learner who has been burned once starts reporting the median for everything and treating the mean as a trap. That throws away information the median never had.

:::{misconception}
:id: misconception-median-only

**The wrong model:** the median is resistant, therefore the median is always the safer summary, so report it and drop the mean.

**What the data shows instead:** resistance cuts both ways. A summary that does not move when extreme values change also fails to report it when those values change for a real reason. Suppose this clinic runs an intervention aimed squarely at its worst-controlled patients, and the five highest readings, which were spread from 280 up to 382 mg/dL, come down to around 180. Nobody else changes at all.

The median is calculated from the 30th and 31st readings in rank order. Those two people were untouched, so the median stays at exactly 140 mg/dL. The total falls by about 720 mg/dL, so the mean drops from 160 to $8880/60 = 148$ mg/dL. A report giving only the median would state that the clinic's fasting glucose was unchanged, which is false, and would hide the only effect the intervention had.

**The repair:** choose the summary that matches the question, and when a distribution is skewed, say so and give both. The median answers "what is the middle person like". The mean answers "what is the total, shared out", and multiplying it by the number of people returns that total, which the median cannot do. A question about who is typical wants the median. A question about aggregate burden, total dose, or total cost wants the mean. A question about whether a treatment reached the sickest patients wants the tail, which neither centre summary reports and the quartiles and the maximum do.
:::

:::{check}
:id: check-diagnose-the-shape

A colleague reports a hospital length-of-stay figure for 200 admissions: mean 6.4 days, median 4.0 days, interquartile range 3.0 days, standard deviation 7.1 days. You have not seen the data. Decide, before reading on, what shape it has, which summary you would print, and what you would ask for next.

**Answer after your attempt:** Two signals agree. The mean sits 2.4 days above the median, and the standard deviation of 7.1 days is more than twice the interquartile range of 3.0, where a symmetric shape would put it at roughly $3.0/1.35 = 2.2$. Both point to a right-skewed distribution with a small number of very long stays. Print the median with the quartiles. Then ask for the maximum and the number of stays beyond, say, 14 days, because those long admissions are likely to be where most of the total bed-days actually sit, and the median cannot show them.
:::

:::{source-note}
:claims: claim-mean-not-resistant, claim-right-tail-lifts-mean, claim-range-iqr, claim-report-both-when-skewed
:sources: source-nist-location, source-nist-histogram-skewed, source-nist-scale, source-wan-median-to-mean

The sources support extreme tail values distorting the mean while the rank-based median resists them, a skewed distribution having no single centre and its summaries differing markedly, the recommendation to report at least the mean and the median for such a distribution, the interquartile range as the middle-half width that is less sensitive to outliers than the range, and the roughly 1.35 ratio of interquartile range to standard deviation for normal data. That the mean is lifted above the median specifically when the long tail is on the high side follows from combining the first two of those facts. The clinic sample, the intervention scenario, and the length-of-stay item are original teaching material and describe no real patients.
:::
