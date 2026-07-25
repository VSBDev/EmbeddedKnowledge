# A line with units on both ends

Sixty dots, and you want one line through them. Lay a ruler on the scatter and you could defend a dozen positions. The method that settles it is old, and one step of it is a convention rather than a necessity, which is worth knowing before you rely on what it produces.

For any candidate line, every person sits some vertical distance away from it: their actual glucose minus the glucose the line gives at their interval. Square each of those sixty distances and add them up. The **least-squares line** is the one line for which that total is as small as it can be. No other slope and intercept make it smaller.

Distances are measured *vertically* rather than perpendicular to the line. That follows from the job: the line is being asked to give glucose from the interval, so it is the miss in glucose that should count, and a perpendicular distance would mix the two measurements together in units that mean nothing.

Squaring is the convention. Something has to stop a miss of +20 from cancelling a miss of −20, and squaring is not the only thing that would. Adding up the plain sizes of the misses and ignoring their signs would do it too; that is a real method, called least absolute deviations, and it is used when the data contain wild values. Squaring wins here because it gives the tidy formulas of the next section, which is a better reason than it sounds: those formulas are what let you compute a fit by hand and check it.

What squaring costs is even-handedness. A miss of 40 contributes sixteen times what a miss of 10 does, because 40 squared is sixteen times 10 squared. A large vertical miss therefore weighs heavily in the quantity being minimised. **Leverage** is a different property: it comes from sitting at an extreme of the predictor, whether or not the point has a large residual. A point is especially influential when high leverage is combined with a substantial residual, because then it has both room and weight to pull the fitted line. This dataset happens not to contain such a combination, which is worth knowing about a method before you meet a dataset that does.

:::{chart} ../charts/fitted-line-dinner-glucose.chart.json
:::

## Reading the line the machine hands back

Fitted to these sixty people, the line is:

:::{equation}
:label: equation-fitted-line

\text{fitted glucose} = 153.4 - 3.37 \times \text{interval}
:::

In words: take the number of hours between dinner and sleep, multiply by 3.37, subtract the result from 153.4, and you have the glucose value the line assigns to that interval. Glucose is in mg/dL and the interval is in hours throughout. The next section derives both numbers from the data; this one is about what they mean once you have them.

:::{callout}
:kind: note

The two numbers above are rounded for reading. Every fitted value in this lesson, and every value in the two charts, is computed from the unrounded slope −3.368867 and intercept 153.369926. If you work a fitted value out from the two-decimal equation instead, your answer can land 0.1 mg/dL from the one printed, and the printed one is right. Nothing here turns on that tenth, and it is worth seeing once: rounding the slope before you use it moves every prediction the line makes.
:::

### The slope: −3.37 mg/dL per hour

The slope is the number that answers the woman in the clinic. Its units are the units of the vertical axis divided by the units of the horizontal axis, milligrams per decilitre per hour, and its value is **−3.37 mg/dL per hour**.

Read it like this: **across these sixty people, each additional hour between dinner and sleep goes with a fitted fasting glucose 3.37 mg/dL lower.** Two extra hours, the change the woman is asking about, moves the fitted value down by 2 × 3.37 = 6.74, or 6.7 mg/dL.

Now the minus sign, which is the part people get wrong. The rule to hold is short: **later dinner, shorter interval, higher glucose.**

Here is why the arithmetic agrees with it. The horizontal axis counts the *gap* between dinner and sleep, so eating later shortens the gap and moves a person to the *left*. The line runs downhill from left to right, so anyone further left sits higher on it. Later eating therefore lands on a higher fitted glucose, which is the same worry the earlier group comparison reported when it counted lateness instead. The association comes out negative against the interval and positive against lateness, and both describe one pattern. A sign is meaningless until you know what the axis counts.

:::{check}
:id: check-slope-sign
:kind: retrieval

A colleague reruns the fit after replacing each person's interval with how many hours *shorter* than six their gap was, so someone with a two-hour interval now scores 4 and someone with a five-hour interval scores 1. A bigger number now means a later dinner. The glucose column is untouched. What happens to the slope, and does the finding change?
:::

The slope changes sign to **+3.37 mg/dL per hour of lateness**, and the finding does not change at all. The new predictor is six minus the old one, so every step up on the new axis is a step down on the old, and the rate keeps its size while reversing its direction. The intercept moves too, to 133.2 mg/dL, which is simply the fitted glucose at the six-hour interval the new axis now counts from. Two equations describe one cloud of dots and report one finding. This is why a reported slope has to arrive with its variable definition attached, and why these lessons fixed one convention and kept it.

### The intercept: 153.4 mg/dL

The intercept is the fitted value when the predictor is zero, so here it is the glucose the line gives to someone whose interval between dinner and sleep is zero hours: eating as they get into bed.

Nobody in this study did that. The shortest interval recorded was 0.8 hours. The intercept is therefore a real feature of the equation and a fictional statement about people. It has to exist because a line needs somewhere to start, and of the two fitted numbers it is the one you would least want to have to defend. Read it as the anchor that positions the line vertically, and be suspicious the moment anyone quotes it as a finding.

There is a second reading of the intercept worth having. Because the least-squares line always passes through the point made by the two means, you can rebuild the whole equation from the average person: mean interval 3.375 hours, mean glucose 142.0 mg/dL. Check it against the equation: 153.4 − 3.37 × 3.375 = 142.03, against a mean glucose of 142.0, with the last hundredth coming from the rounded slope. So the line is pinned at the centre of the data and tilted from there by the slope.

## What kind of thing this line is

:::{definition}
:id: definition-regression-model

A **regression model** here is a fitted equation that gives an expected value of one measured quantity from one or more others, together with the acknowledgement that individual observations depart from it. In this lesson the fitted part is a straight line, {math}`y = a + bx`, and the departures are the subject of a later section.
:::

You have met the word **model** twice already in this course, and this is a third, narrower use. In the earlier lesson on scientific models, a model was any purposeful representation of a system built to answer a question. In [Proportional models](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-010) it narrowed to a fitted relationship of the form {math}`y = kx^p`, judged by how well it fitted and by whether its assumptions held. A regression model is a sibling of that one: same job, same standard of judgment, different family of shapes. The proportional model multiplies; this one adds a constant and a rate. Neither claims to say why anything happens.

:::{callout}
:kind: note

**Statistically linear** has a wider meaning than "draws a straight line". A model counts as linear when each predictor is multiplied by an unknown parameter and the resulting terms are then added up, with at most one parameter standing alone as a constant. The parameters have to enter that way; the predictors are free to be anything. So {math}`y = a + bx + cx^2` is a linear model: {math}`b` multiplies {math}`x`, {math}`c` multiplies {math}`x^2`, {math}`a` is the lone constant, and the terms are summed. It draws a curve. Feed the fitting method a column of {math}`x` and a column of {math}`x^2` and it will not notice the second came from the first.

For a case on the other side of the line, take the proportional model {math}`y = kx^p` from the earlier lesson. If {math}`p` is fixed in advance it is linear in {math}`k` alone. If {math}`p` has to be estimated from the data, the model is **not** linear in this sense, because {math}`p` sits in the exponent instead of multiplying anything, and the tidy formulas below stop working. The straight line here is the simplest member of the linear family and the only member this lesson fits.
:::

:::{check}
:id: check-read-the-equation
:kind: retrieval

Using the fitted line above, without reading ahead:

1. What fasting glucose does the line give someone who leaves 1.0 hour between dinner and sleep?
2. And someone who leaves 3.0 hours?
3. What is the difference between those two answers, and where could you have read it off directly?
:::

At 1.0 hour the line gives 150.0 mg/dL, and at 3.0 hours it gives 143.3 mg/dL. The difference is 6.7 mg/dL, and you could have read it straight off the slope, because two hours of interval is worth 2 × 3.37 mg/dL and the intercept cancels when you subtract one fitted value from the other. Any question of the form "how much does the fitted value change" is answered by the slope alone.

:::{source-note}
:claims: claim-least-squares-criterion, claim-slope-is-change-per-unit, claim-linear-in-parameters, claim-least-squares-outlier-sensitivity
:sources: source-nist-least-squares, source-kim-regression-basics, source-schober-linear-regression

These sources support the least-squares criterion and its sensitivity to unusual observations, the names intercept and slope, the reading of a coefficient as the average response difference per one-unit predictor difference, and the fact that "linear" describes how parameters enter rather than the shape drawn. The distinction among a large residual, leverage from predictor-space extremeness, and influence is stated explicitly so those ideas are not conflated. The sixty people, the equation fitted to them, and the woman in the clinic were written for this lesson.
:::
