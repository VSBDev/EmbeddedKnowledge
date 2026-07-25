# What the line leaves over

Look back at the fitted line lying across the sixty dots. Almost none of them are on it. The line is a statement about where glucose sits on average at each interval, and the study measured sixty individuals, so the interesting quantity is how far each person landed from the statement.

:::{definition}
:id: definition-residual

A **residual** is an observed value minus the value the model gives at the same input. For person {math}`i` it is {math}`e_i = y_i - \hat{y}_i`, measured in the units of the response, here mg/dL. A positive residual means the person came in above the line, a negative one below it.
:::

This is the same meaning [Proportional models](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-010) gave the word when it judged fitted curves, carried across unchanged. Only the fitted shape has changed. The everyday sense of "residual" as something left behind in the body has no bearing here; a residual is a vertical distance on a graph.

## Four people, four residuals

Take the fitted line {math}`\hat{y} = 153.4 - 3.37x` and put four of the study's intervals through it.

| Interval (hours) | Observed glucose | Fitted glucose | Residual |
| --- | --- | --- | --- |
| 3.5 | 141 | 141.6 | −0.6 |
| 4.2 | 138 | 139.2 | −1.2 |
| 4.3 | 173 | 138.9 | +34.1 |
| 1.6 | 181 | 148.0 | +33.0 |

The first two people are as close to the line as anyone gets: the model was almost right about them, and it was almost right by luck, because a line this weak has no business predicting anybody well. The third came in 34 mg/dL above what the line expected at a 4.3-hour interval, and the fourth 33 mg/dL above at 1.6 hours. Read those two rows together. One of them ate over four hours before sleeping and the other barely an hour and a half before, so the line puts 9 mg/dL between them, and both of them then sit about 33 mg/dL above it anyway. Whatever pushed this pair towards 180 is not the variable on the horizontal axis.

The single largest miss in the study belongs to the person at 1.7 hours whose glucose was 100 mg/dL, the lowest reading in the cohort. The line expected 147.6 there and was wrong by 47.6 mg/dL.

Nothing in those four rows says the line is wrong. It says the line is a weak description of individuals, which is a different fault and one you can only assess by looking at all sixty residuals at once.

:::{chart} ../charts/residuals-against-interval.chart.json
:::

## Reading a residual plot

A **residual plot** puts the residuals on the vertical axis against the predictor on the horizontal, with a line at zero. It is a magnifying glass: the fitted trend has been subtracted away, so whatever is left is displayed at full height instead of being flattened against a slope.

What you are looking for is *structure*. If the residuals scatter randomly above and below zero with no pattern, the model has extracted what it can and the leftovers carry no further shape. If some systematic pattern is visible, the form of the function can be improved, and the plot usually tells you how.

Three patterns are worth recognising on sight.

- **An arch or a bowl.** Residuals negative at both ends and positive in the middle, or the reverse. The true relationship bends and a straight line has been forced through it. The repair is a different functional form, not a different slope.
- **A funnel.** Residuals tightly bunched at one end of the range and widely spread at the other. The line may sit in the right place while the spread around it changes across the range, so a single statement about typical error is wrong at both ends.
- **One point far from the rest.** A single large residual, worst when it sits at an extreme of the predictor, where it has the leverage described earlier. Refit without that observation and see whether the slope moves; if one person's inclusion changes the answer, that fact belongs in the report.

The plot above shows none of the three. The dots sit above and below zero across the whole range from 0.8 to 6.5 hours, they do not arch, and the band does not narrow. The person at 1.7 hours with a residual of −47.6 sits clearly below the pack but is inside the range of intervals rather than out at an end, and removing them would not change the picture's shape. So the straight line is an adequate *form* for these data. It is still, as the next part of this section makes plain, a weak one.

:::{callout}
:kind: note

Residuals from a least-squares fit always add up to zero. That is a property the fitting method forces, not evidence that the fit is good, so a report stating that the residuals summed to zero has told you nothing about the model. What carries information is their pattern and their size.
:::

## How much of the variation the line accounts for

Two summaries answer that question, the correlation {math}`r` and its square, and they turn out to be one summary written two ways. Building the second one first makes the pair easier to read.

Glucose in this cohort varies. Add up every person's squared distance from the cohort mean and the total is 19116. Add up every person's squared distance from the *line* and the total is 17160. The difference, 1956, is what the line accounted for. All three are in squared mg/dL, which is why they are large numbers that mean nothing on their own; only their ratio is worth reading.

:::{equation}
:label: equation-r-squared

r^2 = \frac{\text{variation the line accounts for}}{\text{total variation}} = \frac{1956}{19116} = 0.102
:::

The **coefficient of determination**, {math}`r^2`, is that proportion: about 0.10, or 10%. It is also, in a fit with one predictor, exactly the square of the correlation, and {math}`(-0.3199)^2 = 0.1023`. So a paper reporting {math}`r = -0.32` and a paper reporting {math}`r^2 = 0.10` on the same data are agreeing with each other, in different notation.

Ninety per cent of the variation in fasting glucose across these sixty people is left unaccounted for by when they ate.

There is a way to feel that number rather than accept it. Before fitting anything, your best single guess for a person's glucose is the cohort mean, 142 mg/dL, and you would typically be wrong by about 18 mg/dL, the standard deviation. After fitting the line, your best guess is whatever the line gives at that person's interval, and you are typically wrong by 17.2 mg/dL. That second figure comes straight from the 17160 above: divide it by 58, which is the sixty people less the two numbers the line itself used up, and take the square root. Knowing exactly when someone ate dinner improves your guess about their fasting glucose by less than one milligram per decilitre.

That is what {math}`r^2 = 0.10` means once it is put in the units a clinic works in. A percentage invites you to round it up in the retelling; a gain of under one milligram per decilitre does not.

:::{check}
:id: check-residual-and-fit
:kind: retrieval

A fifth person in the study left 3.2 hours between dinner and sleep and had a fasting glucose of 128 mg/dL.

1. What does the line give for them?
2. What is their residual, with its sign?
3. A colleague looks at that residual and says the model is broken. What is the better response?
:::

The line gives 153.4 − 3.37 × 3.2 = 142.6 mg/dL. The residual is 128 − 142.6 = −14.6 mg/dL, negative because they came in below the line. And the better response is that one residual cannot condemn a model: this person's miss is about the size of the typical miss in this dataset, which was already known to be around 17 mg/dL. A model with {math}`r^2 = 0.10` is *expected* to be wrong by that much about most people. Whether the line is broken is a question about the pattern across all sixty residuals, and that pattern is the plot above.

:::{source-note}
:claims: claim-residual-definition, claim-residual-plot-structure, claim-r-squared-proportion, claim-correlation-linear-only
:sources: source-nist-model-fit, source-nist-residual-structure, source-kim-regression-evaluation, source-kim-covariance-correlation

These sources support the definition of a residual as the difference between an observed response and the corresponding prediction, the use of graphical residual analysis as the primary tool for judging fit, the reading that randomly behaving residuals suggest the model fits while systematic structure in residuals plotted against a predictor indicates the form of the function can be improved, and the definition of the coefficient of determination as the proportion of the total variability accounted for by the fitted model. The residuals, the sums of squares, and the typical-error figures were computed here from the study's sixty pairs.
:::
