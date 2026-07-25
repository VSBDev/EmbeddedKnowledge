# The average patient who does not exist

A fictional clinic audit opens with this sentence: "Across the 60 adults reviewed, mean fasting glucose was 160 mg/dL." The arithmetic behind it is flawless. The sentence is still misleading, and the histogram shows why.

:::{chart} ../charts/skewed-clinic-sample.chart.json
:::

The exact invented observations behind the histogram are sorted below, ten per row. Every value is in mg/dL.

| Positions in order | Exact readings |
| --- | --- |
| 1–10 | 96, 100, 104, 106, 108, 110, 112, 114, 116, 118 |
| 11–20 | 120, 120, 121, 121, 122, 122, 123, 124, 125, 126 |
| 21–30 | 128, 129, 130, 132, 134, 136, 137, 138, 139, 139 |
| 31–40 | 141, 142, 143, 144, 145, 146, 147, 148, 149, 150 |
| 41–50 | 154, 158, 162, 168, 179, 179, 182, 187, 190, 200 |
| 51–60 | 204, 210, 220, 230, 250, 280, 300, 320, 340, 382 |

Using the quartile and sample-standard-deviation conventions declared in the centre scene, these values reproduce the mean of 160, median of 140, quartiles of 122 and 179, and sample standard deviation of 60.7 mg/dL, which is reported as about 61.

Thirty-nine of these sixty adults have a reading below 150 mg/dL. Thirty of them are at or below 140. The 160 in the audit sentence sits above the reading of about seven adults in every ten it claims to describe, and it got there because twelve readings stretch from 190 up to 382 and each one enters the total at full weight.

:::{misconception}
:id: misconception-mean-on-skewed-data

**The wrong model:** the mean is the average, the average is the typical value, so the mean is what you report.

**What the data shows instead:** this sample's median is 140 mg/dL and its mean is 160 mg/dL, a gap of 20 mg/dL. Half the sample sits below 140. The mean is not describing a middle; it is describing a total shared out equally, and a handful of very high readings have loaded that total. Values that sit far from the bulk of the data like this are called outliers, and calling a reading an outlier says only where it sits, not that it is a mistake. An extreme observation may be valid or may reflect measurement, transcription, or protocol error, so its status must be investigated before it is retained or excluded. This invented value carries no clinical interpretation. The histogram is skewed right, its long tail is on the high side, and in this data set that tail lifts the mean above the median; this is a common pattern, not a universal shape theorem.

**The repair:** for a skewed distribution, report the median as the centre and pair it with the quartiles. Here the five-number summary is 96, 122, 140, 179, 382 mg/dL. Those five numbers say the middle half of the clinic sits between 122 and 179, one person is at 382, and no single value was ever going to carry all of that.

**A warning you can calculate before seeing the picture:** compare the two spread measures. This sample has an interquartile range of 57 mg/dL and a standard deviation of about 61 mg/dL, so $57/60.7 = 0.94$, well below the 1.35 reference for normal data. That departure says the two spread measures are responding differently; it does not identify why. Skew, heavy tails, truncation, or another non-normal structure can alter the ratio. The mean-median gap is another warning, not a diagnosis. Here the raw values and histogram settle the question by displaying the long right tail directly.
:::

## Now the mistake people make on the way back

The repair above is easy to over-apply. A learner who has been burned once starts reporting the median for everything and treating the mean as a trap. That throws away information the median never had.

:::{misconception}
:id: misconception-median-only

**The wrong model:** the median is resistant, therefore the median is always the safer summary, so report it and drop the mean.

**What the data shows instead:** resistance cuts both ways. A summary that does not move when extreme values change also fails to report it when those values change for a real reason. Suppose this clinic runs an intervention aimed squarely at its five highest readings. Those readings, 280, 300, 320, 340, and 382 mg/dL, become 178, 179, 180, 181, and 184 mg/dL. Nobody else changes at all.

The median is calculated from the 30th and 31st readings in rank order. Those two people were untouched, so the median stays at exactly 140 mg/dL. The total falls by 720 mg/dL, so the mean drops from 160 to $8880/60 = 148$ mg/dL. A report giving only the median would state that the clinic's fasting glucose was unchanged, which is false, and would hide the only change in this invented scenario.

**The repair:** choose the summary that matches the question, and when an inspected distribution is skewed, say so and give both. The median answers "what is the middle observation like". The mean answers "what is the total, shared out", and multiplying it by the number of observations returns that total, which the median cannot do. A question about what is typical may want the median. A question about a total wants the mean. A question about whether an intervention changed the highest observations wants the tail, which neither centre summary reports and the quartiles and maximum help to show.
:::

:::{check}
:id: check-diagnose-the-shape

A colleague reports a hospital length-of-stay figure for 200 admissions: mean 6.4 days, median 4.0 days, interquartile range 3.0 days, standard deviation 7.1 days. You have not seen the data. State what shape those summaries suggest, why the conclusion must remain provisional, which summary you would print while investigating, and what evidence you would ask for next.

**Answer after your attempt:** Two warnings agree. The mean sits 2.4 days above the median, and the standard deviation of 7.1 days is far above the $3.0/1.35 = 2.2$ normal-reference value implied by the interquartile range. A long right tail is a plausible explanation, but those summaries cannot distinguish it from every heavy-tailed, truncated, or mixed distribution. Print the median with the quartiles while the shape is unresolved. Then ask for a histogram or the ordered raw values, plus the maximum and the count beyond a predeclared audit threshold, before naming the shape.
:::

:::{source-note}
:claims: claim-mean-not-resistant, claim-right-tail-lifts-mean, claim-range-iqr, claim-report-both-when-skewed
:sources: source-nist-location, source-nist-histogram-skewed, source-nist-scale, source-wan-median-to-mean

The sources support extreme tail values distorting the mean while the rank-based median resists them, an introductory right-skewed histogram example whose centre summaries differ, the recommendation to report at least the mean and median for an inspected skewed distribution, the interquartile range as the middle-half width that is less sensitive to outliers than the range, and the roughly 1.35 ratio of interquartile range to standard deviation for normal data. The ratio is used only as a nonspecific warning. That a high-side tail usually lifts the mean above the median is an explicitly bounded inference. The clinic sample, its exact observations, the intervention scenario, and the length-of-stay item are original teaching material and describe no real patients.
:::
