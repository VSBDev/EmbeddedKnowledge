# Choose it, draw it, break it

Three tasks. The first walks you through the decision, the second gives you the data and lets you make the decision, the third hands you a finished chart and asks what is wrong with it. Work each one before reading on.

## One: with the decision broken down

:::{check}
:id: practice-guided-display-choice
:kind: practice

A diabetes service wants to know how long its patients wait between referral and first appointment. It has 240 waits, in days, ranging from 4 to 96.

Answer in order:

1. How many columns does the question involve, and what kind is each?
2. Is the question about exact values or about shape?
3. Which display follows, and what two decisions do you have to make before drawing it?
:::

One column, a quantity measured in days. The question is about shape: the service wants to know how the waits are distributed, not what patient 137 waited. So a histogram, and the two decisions are the bin width and where the vertical axis starts. Bins of 10 days give around ten bars across a range of 92 days, which is a reasonable place to begin; the count axis starts at zero because bar length has to stay proportional to the count. If the service also needs to state how many patients waited more than six weeks, add a frequency table, because that is a question about an exact value and a bar chart answers it only approximately.

## Two: with the data and no scaffolding

:::{check}
:id: practice-independent-display-choice
:kind: practice

The same service records, for each of six clinic sites, the number of patients seen last month and the median wait in days.

| Site | Patients seen | Median wait (days) |
| --- | --- | --- |
| Northgate | 210 | 22 |
| Riverside | 96 | 41 |
| Eastfield | 178 | 26 |
| Hillcrest | 44 | 63 |
| Templeton | 133 | 30 |
| Weir Park | 61 | 48 |

Two questions are on the table. Which site has the longest waits, and does a busier site tend to have shorter waits? Say what you would draw for each, and name every axis decision you would make.
:::

The first question ranks one quantity across six named categories, so a bar chart with one bar per site, sites on one axis and median wait on the other, ordered longest to shortest rather than alphabetically. The wait axis starts at zero. Six values is also small enough that the table above already answers the question, and saying so is a legitimate answer.

The second question pairs two quantities measured on the same six units, so a scatter with patients seen on the horizontal axis and median wait on the vertical. Neither axis needs to start at zero, because a scatter encodes position and not length; state the ranges you used. Then say the honest thing about six points: the fall in median wait as patient numbers rise is visible here, and six sites cannot establish it. That is a hypothesis to check with more sites, not a finding.

## Three: with a chart that is already wrong

:::{check}
:id: practice-critique-a-chart
:kind: practice

A poster reports the dinner-timing study like this.

> A line chart. The horizontal axis is labelled "Group" with two positions, "Early" and "Late". The vertical axis is labelled "Glucose" with no unit, running from 136 to 148. Two points, joined by a rising line. Caption: "Fasting glucose rises with later dinners."

Name every problem you can find, and say what you would draw instead.
:::

Six problems, and the first one is structural. A line asserts that the space between its endpoints is a path something travelled, so joining two categories with a line invents a continuum between "early" and "late" that the display does not contain. The vertical axis carries no unit, so a reader cannot tell whether the gap is 9 mg/dL or 9 mmol/L, and those two are not interchangeable. The axis starts at 136, which inflates the visible gap for the reason worked in the previous scene. Two plotted points hide sixty people and the entire spread of the cohort, including the overlap between the groups. The caption says "rises", a word about change over time, when nothing was measured twice. And nothing on the poster states how many people are in each group.

What to draw instead: two histograms of glucose, one per group, on a shared horizontal scale, so a reader can see both centres and the overlap at once. Add a table with the two group sizes and the two means beneath it, for the reader who wants the figures.

## Where this is going

The assessment for this lesson asks you to do these three things once more without the worked answers underneath: choose a display for a stated question, read a distribution off a histogram, and say what a chart's axis has done to a difference. If the third task was the one that felt shakiest, reread the misconception scene before attempting it, since that is the judgment this lesson most wants you to leave with.

:::{source-note}
:claims: claim-chart-choice-follows-question, claim-table-for-exact-values, claim-truncated-bar-axis-distorts
:sources: source-af-charts, source-af-tables

These sources support matching the display to the relationship being shown, the conditions under which a table serves a reader better than a chart, and the effect of breaking a bar chart's numerical axis. The waiting-time service, its six sites, and the poster are original teaching material.
:::
