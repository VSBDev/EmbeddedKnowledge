# Two clinics with the same average and nothing else in common

Five readings from one fictional clinic: 138, 140, 142, 144, 146 mg/dL. Five from another: 102, 122, 142, 162, 182 mg/dL. Both total 710, so both have a mean of 142 mg/dL. A report that gave only the mean would describe these two clinics identically, and they are not remotely alike. The first clinic's patients are almost interchangeable. The second contains someone at 102 and someone at 182, and any advice built for the average patient there fits neither.

A centre summary on its own is half a description. The other half is spread: how far the values sit from each other and from the middle.

## Three ways to measure how far apart people are

The bluntest measure subtracts the smallest value from the largest.

:::{definition}
:id: definition-range
:label: Range, in the sense used here

The largest value minus the smallest. For the sixty-person cohort the lowest reading is 104 mg/dL and the highest is 181, so the range is 77 mg/dL. Note that earlier quantitative lessons used the word *range* for the set of outputs a function can produce, which is a collection of values. Here it is a single number with the same unit as the data, and it depends only on the two most extreme observations in the set.
:::

Depending on only two observations makes the range fragile. One mistyped reading of 1810 instead of 181 would multiply it by more than twenty. The second measure ignores the extremes on purpose.

:::{definition}
:id: definition-iqr
:label: Quartiles and the interquartile range

The quartiles cut an ordered data set into four parts of equal size. The lower quartile Q1 is the value at the 25th percentile, the second quartile is the median, and the upper quartile Q3 sits at the 75th percentile. The interquartile range is $Q_3 - Q_1$, the width of the middle half of the data. For the cohort, Q1 is 130 mg/dL and Q3 is 155 mg/dL, so the interquartile range is 25 mg/dL.
:::

Those five numbers together are called the five-number summary, and for this cohort they are 104, 130, 142, 155, 181 mg/dL. Read left to right they say: the lowest quarter of the group runs from 104 up to 130, the middle half occupies 130 to 155, and the top quarter runs from 155 to 181. Half the cohort sits inside a 25 mg/dL band while the full spread is three times as wide, which is a fact about the shape and not just about the size of the numbers.

## The measure that uses every value

Range uses two observations and the interquartile range uses the middle half. The third measure uses all of them, by asking how far each value sits from the mean and then averaging those distances.

Distances have a sign problem. The deviations from the mean always sum to zero, because that is what the mean is, so averaging them directly gives zero every time. Squaring each deviation removes the signs and gives a quantity that grows when values sit further out.

:::{equation}
:label: Sample variance

s^2 = \frac{1}{n-1}\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2
:::

Read it as: subtract the mean from every value, square each result, add them up, and divide by one less than the number of values. That quantity is the sample variance. The divisor is $n-1$ rather than $n$ because the deviations were measured from the sample's own mean rather than from the true population mean, which makes them slightly too small on average; dividing by the smaller number compensates.

The variance has one awkward property. Squaring mg/dL gives mg²/dL², so a variance of 324 is 324 mg²/dL², a unit nobody has any feel for. Taking the square root undoes it.

:::{equation}
:label: Sample standard deviation

s = \sqrt{s^2} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2}
:::

The standard deviation returns the spread to the original data units. That is the whole reason it, rather than the variance, is the number that gets reported. A standard deviation of 18 mg/dL can be compared directly with a reading of 142 mg/dL, with a group difference of 9 mg/dL, and with a laboratory's stated measurement precision, because all four are in mg/dL. A variance of 324 mg²/dL² can be compared with nothing a clinician handles.

Applied to the two clinics at the top of this scene: the first has deviations of $-4, -2, 0, 2, 4$, giving a variance of $40/4 = 10$ and a standard deviation of 3.2 mg/dL. The second has deviations exactly ten times as large, giving a variance of $4000/4 = 1000$ and a standard deviation of 31.6 mg/dL. Same mean, spreads a factor of ten apart, and now the report can say so in one number each.

For the full cohort the standard deviation is 18 mg/dL. Treat it as roughly the distance a typical person sits from 142, in either direction.

## Two spread measures on the same data

The cohort now has two spread figures: an interquartile range of 25 mg/dL and a standard deviation of 18 mg/dL. They are not competitors, and their ratio carries information. When data follow a normal shape, the interquartile range settles at about 1.35 standard deviations. Here $25/18 = 1.39$, close to that value, which is one more sign that this distribution is behaving symmetrically. When the ratio departs sharply from 1.35, something about the shape is worth looking at, and the next scene shows what.

:::{source-note}
:claims: claim-variance-sd-units, claim-range-iqr, claim-iqr-sd-normal
:sources: source-nist-scale, source-wan-median-to-mean

The sources support the sample variance formula with its $n-1$ divisor, the standard deviation as its square root restoring the original data units while the variance squares them, the range as the largest minus the smallest value depending only on the extremes, the interquartile range as the 75th minus the 25th percentile describing variability near the centre and being less sensitive to outliers than the range, and the ratio of interquartile range to standard deviation approaching about 1.35 for normal data. The two clinics, the cohort figures, and the worked comparisons are original teaching material.
:::
