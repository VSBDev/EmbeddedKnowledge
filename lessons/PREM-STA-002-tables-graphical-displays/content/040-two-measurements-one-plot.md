# Two measurements from the same person, one plot

A histogram takes one column at a time. The **scatter plot** takes two. The study's actual question needs two: for each person, when they ate and what their glucose did overnight. Put one measurement on each axis, mark a point where that person's two values meet, and the sixty rows become sixty dots.

:::{chart} ../charts/dinner-gap-glucose-scatter.chart.json
:::

Read the axes before the cloud. Horizontal is the interval between dinner and sleep, in hours. **A later dinner leaves a shorter interval, so later dinners sit towards the left.** Vertical is next-morning fasting glucose in mg/dL. Every dot is one person contributing both of their numbers at once, which is why a scatter needs the two measurements to be paired: shuffle one column and the plot becomes noise.

## The four questions a scatter answers

:::{investigation}
:id: investigation-read-the-scatter

**Question.** Do the interval and the glucose reading move together across these sixty people?

**Data.** Sixty paired values. The interval runs from 0.8 to 6.5 hours; glucose runs from 100 to 181 mg/dL. Both were recorded per person under the protocol fixed in the design lessons. No new measurement was taken for this scene.

**1. Is there a relationship at all?** Yes, a weak one. Follow the cloud from left to right and its centre drifts downwards. Shorter intervals, meaning later dinners, sit with somewhat higher glucose.

**2. What form does it take?** Nothing bends. The drift is roughly steady across the whole range, so a straight line is the sensible first description. Nothing here argues for a curve.

**3. How strong is it?** Weak enough that you should say so out loud. Between 1.5 and 2.5 hours the plot holds one person at 181 mg/dL and another at 100. Between 6 and 6.5 hours it holds one at 164 and one at 116. The vertical spread at any given interval is far larger than the drift across the whole horizontal range. Knowing when someone ate tells you very little about that individual's next reading.

**4. Is anyone an outlier?** One person at an interval of 1.7 hours has a glucose of 100 mg/dL, the lowest reading in the cohort, sitting well below everyone else at that end. This is the same low value flagged in the histogram, now with a second coordinate attached. The scatter adds conditional context: it shows that an already low glucose value is also unusual among people with similarly short intervals.

**Conclusion.** A mild downward drift, a wide cloud, and one point worth checking. That is the whole of what this plot supports.
:::

## The same finding, counted

Split the cohort at three hours and count. Thirty people left three hours or less between dinner and sleep; thirty left more.

| Group | People | Mean fasting glucose (mg/dL) |
| --- | --- | --- |
| Later dinner, 3 hours or less before sleep | 30 | 146.5 |
| Earlier dinner, more than 3 hours before sleep | 30 | 137.5 |
| Difference, later minus earlier | | 9.0 |

Nine milligrams per decilitre. That figure is the one this block keeps returning to, and it is the same fact the cloud is showing: the left half of the plot sits a little higher than the right half. A scatter and a two-row table can describe one relationship, and here they do.

Notice that the drift and the difference carry opposite arithmetic signs while saying the same thing. Glucose goes **down** as the interval gets longer, and **up** as dinner gets later, because a longer interval and a later dinner are opposite ends of one measurement. The sign of a relationship depends on which direction you chose to measure your variable, so a reported sign means nothing until you know what the axis counts.

## What the plot cannot do

:::{callout}
:kind: boundary

A scatter shows **association**: a pattern in which the values of two variables differ together in the data you have. That is the sense established in [From correlation to a causal claim](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007), and this lesson adopts it unchanged. The pattern alone does not say why it occurs.

People who eat late may differ from people who eat early in ways nobody plotted: shift work, sleep length, what they ate as well as when, medication timing. The plot is silent about all of it. Deciding what a dinner-timing association means about causes is the work of that earlier lesson, and quantifying the change per hour is the work of the regression lesson later in this block. This scene stops at description.
:::

:::{check}
:id: check-scatter-or-not
:kind: retrieval

Three proposed plots from the same study. For each, say whether a scatter is the right display, and if not, what is.

1. Adherence rating, 1 to 4, against fasting glucose.
2. Nights recorded against fasting glucose.
3. Fasting glucose on the horizontal axis and the dinner interval on the vertical.
:::

Adherence is ordered but has only four levels, so a scatter would draw four vertical stacks of dots and waste the horizontal axis; one histogram or box plot of glucose per adherence level compares the groups better. Nights recorded is a genuine count with a range of 5 to 14, so a scatter works, though many dots will overlap on the same whole number and you should say how you handled that. The third is a scatter with the axes swapped, which is allowed and changes nothing about the association; convention puts the variable you think of as the input on the horizontal axis, and this study thinks of dinner timing that way.

:::{source-note}
:claims: claim-scatter-two-variables
:sources: source-nist-scatter

This source supports the questions a scatter plot is used to answer about two quantitative variables, including whether they are related, whether the relationship is linear, whether the spread of one changes across the other, and whether outliers are present. The sixty paired values and the group comparison are original teaching material.
:::
