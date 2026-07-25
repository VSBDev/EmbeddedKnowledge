# Choose the summary, then defend it

Work all four before reading any feedback. The support fades: the first item names the steps, the last names nothing.

:::{check}
:id: check-practice-centre-and-range

**1. Centre and range, with the steps given.** Seven adults in a fictional screening clinic record fasting glucose of 121, 128, 133, 139, 144, 150, 187 mg/dL. Add the values and divide by seven for the mean. Order them and take the middle one for the median. Subtract the smallest from the largest for the range. Then say which of the two centre summaries the value 187 has moved, and by roughly how much.
:::

:::{check}
:id: check-practice-diagnose-shape

**2. Diagnose a shape you cannot see.** A discharge audit reports the interval from discharge to first follow-up appointment for 180 patients: minimum 2 days, lower quartile 5, median 7, upper quartile 10, maximum 46, mean 9.8, standard deviation 6.9. Work out the interquartile range, compare it with the standard deviation, compare the mean with the median, and state what shape the two comparisons agree on. Then name the pair of numbers you would print in the audit.
:::

:::{check}
:id: check-practice-compute-sd

**3. Spread from scratch.** Five fasting glucose readings: 134, 138, 142, 146, 150 mg/dL. Report the variance and the standard deviation, each with its unit.
:::

:::{check}
:id: check-practice-units

**4. Units, unaided.** A colleague's output for the sixty-person cohort reads `variance = 324`. What number belongs in the paper, what are the units of each of the two quantities, and why does the one they printed rarely appear in a results table?
:::

## Feedback after all four attempts

1. The total is 1002, so the mean is $1002/7 = 143.1$ mg/dL. The middle value of seven ordered readings is the fourth, so the median is 139 mg/dL. The range is $187 - 121 = 66$ mg/dL. The reading of 187 sits far above the rest and has pushed the mean about 4 mg/dL above the median; the median would be 139 whether that last reading were 187 or 1187, because it contributes one rank either way.
2. The interquartile range is $10 - 5 = 5$ days. The standard deviation of 6.9 days is larger than that, where a symmetric shape would put it near $5/1.35 = 3.7$. The mean of 9.8 sits 2.8 days above the median of 7. Both comparisons say the same thing: the distribution leans right, with a small number of long waits, the longest at 46 days. Print the median with the quartiles, so the audit reads 7 days with a middle half of 5 to 10.
3. The total is 710 and the mean is 142 mg/dL. The deviations are $-8, -4, 0, 4, 8$, their squares are 64, 16, 0, 16, 64, and those sum to 160. Dividing by $n-1 = 4$ gives a variance of 40 mg²/dL². The square root gives a standard deviation of 6.3 mg/dL.
4. The paper needs $\sqrt{324} = 18$ mg/dL. The variance of 324 is in mg²/dL² and the standard deviation of 18 is in mg/dL. Squared milligrams per squared decilitre answers no question a reader has; the standard deviation can be set beside a mean of 142 mg/dL or a group difference of 9 mg/dL and compared directly, because all three are in the same unit.

## Where to go if one of these failed

- Mean and median swapped, or the median taken before ordering: redo item 1 by writing the ordered list on its own line first.
- Shape called symmetric in item 2: recheck which of the interquartile range and the standard deviation was larger, then reread the two-signal test in the misconception scene.
- Divided by 5 instead of 4 in item 3: the divisor is one less than the count, and the worked example explains what it compensates for.
- Units missing anywhere: attach the unit to every line of the calculation rather than to the final answer, and squaring will carry itself through.

:::{source-note}
:claims: claim-mean-not-resistant, claim-right-tail-lifts-mean
:sources: source-nist-location, source-nist-histogram-skewed

The sources support the mean being distorted by extreme tail values while the rank-based median is not, and the centre summaries of a skewed distribution differing markedly from one another. That a high-side tail lifts the mean above the median follows from those two facts together. Every practice item, data set, and feedback route is original teaching material.
:::
