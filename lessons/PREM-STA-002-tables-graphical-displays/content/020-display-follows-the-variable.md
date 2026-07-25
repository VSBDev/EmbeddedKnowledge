# The display follows the variable and the question

Two things decide what to draw, and neither of them is taste. The first is what kind of thing sits in the column. The second is what you are trying to find out.

Ask a clinic how many of its patients are on each of four insulin regimens, and the answer is a set of counts across unordered categories. A picture of counts is a bar chart: one bar per regimen, its height the number of patients. Ask instead how a single measured quantity is spread across a group, and counts across categories will not do, because the quantity has no categories until you make some. That is the job a histogram does.

## Six situations and the display each one wants

| What you have | What you want to know | Display |
| --- | --- | --- |
| One categorical column | How many fall in each category | Counts in a table, or a bar chart |
| One quantitative column | Where the values sit and how they are spread | Histogram |
| One quantitative column, several groups | How the groups compare across their whole spread | One histogram per group, or box plots side by side |
| Two quantitative columns | Whether they move together | Scatter plot |
| One quantitative column measured repeatedly over time | How it changed | Line chart |
| Any of the above, when the reader needs the figures | The exact values | Table |

Published guidance from the UK Government Analysis Function builds the same mapping from the other direction: it lists the statistical relationship first, then names the chart. Magnitude and ranking get bars, time series get lines, correlation gets a scatter, spatial patterns get maps. The guidance is blunt about the last row of the table above: a well structured table can do work no chart can, and it recommends one when readers will compare exact values, read summary figures, or handle quantities of very different sizes. Charts earn their place when the point is a pattern, a trend, or a relationship.

That last distinction is worth holding onto. A table answers *what is the value*. A chart answers *what is the shape*. Most poor displays are a chart being asked a table's question, or the reverse.

## Distribution, and the display built for it

:::{definition}
:id: term-distribution

The **distribution** of a variable is the complete account of which values it takes across a set of observations and how often each value, or each interval of values, occurs.
:::

Sixty glucose readings have a distribution. It is not a single number and no single number can carry it. To see it, split the measured range into intervals of equal width, count how many readings fall in each, and draw one bar per interval with its height equal to that count. Those intervals are **bins**, the counts are **frequencies**, and the picture is a **histogram**.

:::{chart} ../charts/fasting-glucose-histogram.chart.json
:::

The NIST/SEMATECH engineering statistics handbook lists what this picture reports about a univariate dataset: where the data sit, how spread out they are, whether they are symmetric or skewed, whether outliers are present, and whether there is more than one mode. Five things. The average reports one of them, and only approximately.

Bar heights can also be given as fractions of the total instead of counts. Divide each bin's frequency by 60 and the heights become **proportions** that sum to 1. Thirteen people fall in the 135 to 145 bin, so that bin holds 13/60 of the cohort, or 0.217, or 21.7%.

:::{callout}
:kind: note

An earlier lesson on ratios used *proportion* for a different job: the statement that two ratios are equal, as in a/b = c/d, which you solve for an unknown. Both senses are standard and the surrounding words tell you which is meant. In this block, a proportion is a part divided by its whole, so it always lands between 0 and 1. When you meet the word in a proportional-reasoning problem, it is the equation. When you meet it beside a count, it is the share.
:::

## The other three, quickly

A **bar chart** puts a category on one axis and a count or a measured amount on the other, one bar per category. Bars are separated by gaps because the categories are separate things; a histogram's bars touch because its bins are adjacent slices of one continuous scale. That visual difference is not decoration. It tells the reader which kind of variable they are looking at.

A **line chart** joins points measured in sequence, usually over time. The line asserts that the space between two points is a path the quantity travelled, so a line chart is wrong for categories: there is no journey between "female" and "male".

A **scatter plot** puts one quantitative variable on each axis and marks one point per observation. It is the display for the question that runs through this whole study, and it gets a scene of its own.

:::{check}
:id: check-match-display
:kind: retrieval

The study has these five columns. For each, name the display you would draw first and say what question it would answer.

1. Nights recorded per person, a whole number from 5 to 14.
2. Sex, recorded as female or male.
3. Fasting glucose, in mg/dL.
4. Adherence rating, 1 to 4.
5. Hours between dinner and sleep, together with fasting glucose.

One of these five has a defensible answer either way. Say which, and why.
:::

Nights recorded is a count with a small range, so a bar chart of how many people recorded 5 nights, 6 nights, and so on shows the whole picture; a histogram would work too and would be the better choice if the range were wide. Sex takes a table of two counts or a bar chart. Fasting glucose takes a histogram. Adherence is the ambiguous one: it is ordered, which invites a histogram, but it has only four values with unequal steps between them, so a bar chart of the four counts is more honest. Hours and glucose together take a scatter.

:::{source-note}
:claims: claim-chart-choice-follows-question, claim-table-for-exact-values, claim-histogram-shows-distribution-features, claim-relative-frequency-proportion
:sources: source-af-charts, source-af-tables, source-nist-histogram

These sources support the mapping from statistical relationship to display type, the conditions under which a table serves a reader better than a chart, the features a histogram reports about a univariate dataset, and the normalisation that turns bin counts into proportions of the total. The cohort's columns and values are original teaching material.
:::
