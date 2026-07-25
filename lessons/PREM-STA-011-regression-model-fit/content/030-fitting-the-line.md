# Where 153.4 and −3.37 came from

The previous section handed you an equation and asked you to read it. A number you cannot reproduce is a number you cannot check, so this section builds both fitted values from the sixty pairs and then tests them two ways. The sixty pairs enter through six summaries of themselves, each one a sum you could form from the table of raw values; the summaries are listed below so the arithmetic after them can be followed line by line.

The fit needs two summed quantities, and the correlation later in this section needs a third. The {math}`\sum` sign below means add up what follows over all sixty people, one term each. {math}`S_{xy}` measures how the two measurements depart from their means *together*: for each person, multiply their departure in interval by their departure in glucose, then add. That product of two departures is what gets called a **cross-product**. {math}`S_{xx}` and {math}`S_{yy}` each square one departure instead of crossing two, so they measure how much the interval, and how much the glucose, vary on their own.

:::{equation}
:label: equation-sums

S_{xy} = \sum (x - \bar{x})(y - \bar{y}) \qquad S_{xx} = \sum (x - \bar{x})^2 \qquad S_{yy} = \sum (y - \bar{y})^2
:::

With the first two in hand the slope is one division and the intercept is one subtraction, because the least-squares line is guaranteed to pass through the point made by the two means.

:::{equation}
:label: equation-slope-intercept

b = \frac{S_{xy}}{S_{xx}} \qquad a = \bar{y} - b \bar{x}
:::

:::{worked-example}
:id: worked-example-fit-the-line

**The task.** Fit a least-squares line giving next-morning fasting glucose from the dinner-to-sleep interval, using all sixty people, and report the slope and intercept in the units of the data.

**What we have.** Sixty pairs, one per person. The interval runs from 0.8 to 6.5 hours; glucose runs from 100 to 181 mg/dL. Both columns come from the study's own protocol and no new measurement is taken here. Six summaries of those pairs carry everything that follows, the last of which is needed only for the correlation.

| Summary | Symbol | Value |
| --- | --- | --- |
| People | {math}`n` | 60 |
| Mean interval | {math}`\bar{x}` | 3.375 hours |
| Mean glucose | {math}`\bar{y}` | 142.0 mg/dL |
| Summed cross-product | {math}`S_{xy}` | −580.70 |
| Summed squared spread of the interval | {math}`S_{xx}` | 172.3725 |
| Summed squared spread of the glucose | {math}`S_{yy}` | 19116 |

**Why this model.** The scatter drifts steadily downwards with no bend anywhere along it, and a steady drift is what a straight line describes. Fitting a curve would be fitting a feature the plot does not show. So the chosen form is {math}`y = a + bx`, with the interval as the predictor because the clinical question runs in that direction.

**The plan.** Divide to get the slope. Use the point of means to get the intercept. Then check the result by two independent routes before reporting it.

**Step 1, the slope.** {math}`b = -580.70 \div 172.3725 = -3.3689`.

The numerator came out negative because people with an above-average interval mostly had a below-average glucose, and multiplying a positive departure by a negative one gives a negative product. The denominator is a sum of squares, so it is positive whatever the data do. A negative slope was therefore settled by the data before the division finished.

**Step 2, the intercept.** {math}`a = 142.0 - (-3.3689)(3.375) = 142.0 + 11.370 = 153.370`.

Subtracting a negative adds, which is why the intercept sits well above the mean glucose. The line starts high on the left and comes down.

**Step 3, units and signs.** The slope is a change in glucose divided by a change in interval, so it reads −3.37 mg/dL per hour. The intercept is a glucose value, so it reads 153.4 mg/dL. The fitted line is {math}`\hat{y} = 153.4 - 3.37x`, where {math}`\hat{y}` is fitted glucose in mg/dL and {math}`x` is the interval in hours. The hat is the standard mark for a value the model produces, as against a value somebody measured.

**Step 4, first check: the centre.** This is the check performed informally in the previous section, now done deliberately. Put the mean interval back into the fitted line and the mean glucose should return: {math}`153.4 - 3.37 \times 3.375 = 142.03` mg/dL, against a mean of 142.0, the hundredth being the rounded slope again. It costs one line and it catches a mistyped intercept immediately.

**Step 5, second check: an independent route to the slope.** The slope can also be assembled from the correlation and the two standard deviations, {math}`b = r \times s_y / s_x`, where {math}`s_y` is the standard deviation of the glucose column and {math}`s_x` that of the interval column. Each comes from the sums already in the table: {math}`s_y = \sqrt{S_{yy} / 59} = \sqrt{19116/59} = 18.0` mg/dL, and {math}`s_x = \sqrt{S_{xx} / 59} = \sqrt{172.3725/59} = 1.709` hours, the 59 being the usual one less than sixty. With the correlation at −0.3199 that gives {math}`-0.3199 \times 18.0 \div 1.709 = -3.369` mg/dL per hour.

That is the same slope by a different road, which is worth more than repeating the first calculation. It also exposes what a slope is made of. The correlation carries the strength of the association and no units at all; multiplying by the spread of glucose and dividing by the spread of the interval is what attaches the units, turning a bare strength into milligrams per decilitre per hour.

**Interpretation.** Across these sixty adults, fitted fasting glucose falls by 3.37 mg/dL for each additional hour between dinner and sleep, and the fitted value at the cohort's average interval is the cohort's average glucose. Put the way the clinic would hear it: dinner two hours earlier corresponds to a fitted difference of about 6.7 mg/dL, in an outcome whose values here run from 100 to 181.

**Self-explanation prompt.** Step 1 does the real work. Say in your own words why {math}`S_{xy}` had to come out negative for these data, given how the horizontal axis was defined, and what would have had to be true of the sixty people for it to come out positive.
:::

## The correlation, since we borrowed it

Step 5 leaned on {math}`r`, which this lesson has quoted twice and not yet unpacked. The **correlation coefficient** takes the same summed cross-product and strips its units off, by dividing it by the square root of {math}`S_{xx}` times {math}`S_{yy}`. That denominator carries hours multiplied by mg/dL, exactly what the numerator carries, so the two cancel and what survives is a bare number.

:::{equation}
:label: equation-correlation

r = \frac{S_{xy}}{\sqrt{S_{xx} S_{yy}}} = \frac{-580.70}{\sqrt{172.3725 \times 19116}} = \frac{-580.70}{1815.2} = -0.3199
:::

The result always lands between −1 and +1. Its sign matches the slope's sign every time, because the two share a numerator. Its size reports how tightly the dots hug a straight line, with ±1 meaning every dot sits exactly on one. Here it is −0.32 to two places, the same value reported when this scatter was first drawn and its drift called mild.

Two properties matter more than the number itself. The coefficient measures the strength of a *straight-line* relationship only, so a strong curved relationship can produce a small {math}`r`, and a U-shaped one can produce an {math}`r` near zero while the two quantities are tightly connected. Very different pictures can also produce the same {math}`r`, including a picture whose whole tilt is being set by one far-off observation. Looking at the scatter before trusting the coefficient is the only thing that separates those cases.

:::{check}
:id: check-recompute-with-one-change
:kind: retrieval

Suppose the sixty intervals had been recorded in minutes instead of hours, everything else identical. Without recomputing anything, say what happens to the slope, the intercept, and the correlation.
:::

The slope is divided by 60, becoming −0.0561 mg/dL per minute, because a minute is a sixtieth of an hour and the same total change is now spread across sixty times as many predictor units. The intercept is unchanged at 153.4 mg/dL, because an interval of zero hours and an interval of zero minutes describe the same situation. The correlation is unchanged at −0.32, because it has no units to change: rescaling the predictor rescales {math}`S_{xy}` and {math}`\sqrt{S_{xx}}` by the same factor and they cancel. So one of these three numbers survives a change of units and two do not, which is a quick way of seeing that they are reporting different kinds of thing.

:::{source-note}
:claims: claim-least-squares-criterion, claim-slope-from-correlation, claim-correlation-linear-only
:sources: source-nist-least-squares, source-kim-regression-basics, source-kim-covariance-correlation

These sources support the least-squares criterion, the algebraic relation between the slope and the correlation coefficient scaled by the two standard deviations, the range of the correlation coefficient from −1 to +1 and the meaning of its sign, and the limitation that it reflects the strength of a linear relationship only, so that different underlying relationships can give the same coefficient and a scatter plot should be inspected before it is calculated. Every value in this section is computed from this study's own sixty pairs.
:::
