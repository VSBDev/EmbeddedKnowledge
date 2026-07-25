# One dataset, two pictures, opposite verdicts

Both charts in this scene are drawn from the same two numbers: 137.5 mg/dL for the earlier-dinner group and 146.5 for the later. Nothing was added, removed, rounded, or reweighted between them. Before you scroll, commit to an answer.

:::{misconception}
:id: misconception-the-chart-shows-the-effect

**The wrong model.** A chart is a window onto the data. If the difference looks large in the chart, the difference is large; if it looks small, it is small. When two charts of the same data disagree, one of them must have got the numbers wrong.

**Predict first.** You are about to see two bar charts of these two group means. One will make the difference look decisive, the other will make it look negligible. Write down which one you expect to be the honest chart, and what you expect the difference between the honest and dishonest versions to be: a different number, a different scale, or a different set of people.

**The evidence.** Both charts carry the same two values, and the same difference of 9.0 mg/dL. Neither misreports a number. The only thing that changes is where the vertical axis starts.

**Why the model fails.** A bar encodes a quantity as a length. A reader compares two bars by comparing their lengths, which means the encoding only works if length stays proportional to the quantity. Cut the axis at 135 and the bars no longer show the means; they show what is left of the means after 135 is subtracted. Those remainders, 2.5 and 11.5, stand in a ratio of about 4.6 to 1, while the quantities they represent stand in a ratio of 1.065 to 1. The picture is now a true picture of the wrong quantity.

**The repair.** A chart is a claim about magnitude, and the axis is part of the claim, in exactly the way that a unit is part of a measurement. Read the axis before you read the bars. If a bar chart's numerical axis does not start at zero, no comparison of bar lengths on it can be trusted, and you have to go back to the numbers.

**Test the repair.** Suppose the two group means had been 137.5 and 146.5 as here, but the axis started at 100 instead of 135. What ratio would the bars then show, and would the chart mislead more or less than the one cut at 135?
:::

## The evidence, in order

Here is the version that would win an argument at a meeting.

:::{chart} ../charts/group-means-cut-axis.chart.json
:::

And here is the same difference with the axis starting where a bar chart's axis has to start.

:::{chart} ../charts/group-means-zero-axis.chart.json
:::

The UK Government Analysis Function guidance names this directly: readers perceive bars as proportional to each other, so breaking the numerical axis distorts those relative proportions, and the practice is advised against. Where a difference genuinely is too small to see on a zero-based bar chart, the guidance suggests changing the display rather than the axis, to a dot plot for instance, so the small difference can be shown without pretending to be a large one.

Answer to the repair test: with the axis at 100, the drawn lengths would be 37.5 and 46.5, a ratio of about 1.24 to 1. Still wrong, still exaggerated, and less wrong than 4.6 to 1. A **truncated axis** is a dial rather than a switch, and the further up it is turned the more the picture departs from the quantities it claims to show.

## The same trap on a different lever

Axis start is the famous one. Bin width does the same job quietly. Here are the sixty glucose readings again, unchanged, in bins three times as wide.

:::{chart} ../charts/fasting-glucose-wide-bins.chart.json
:::

One tall bar and two short ones. Every feature the earlier histogram reported has gone: no peak position inside the middle, no sense of how fast the counts fall away, no visible difference between the two tails. A reader shown only this picture would say the cohort is bunched in the middle and leave.

The opposite setting fails in the opposite direction. Sixty values in bins 2 mg/dL wide would give forty-five mostly empty bars with a scatter of ones and twos, and the eye would read the accidental gaps as structure that is not there. Bin width is a choice made by whoever drew the chart, and it decides which features of the distribution the picture is capable of showing. A histogram with no stated bin width is an unfinished chart.

:::{check}
:id: check-audit-a-chart
:kind: retrieval

A colleague sends you a bar chart from a clinic audit. Two bars, "before" and "after" a new appointment reminder system, showing the percentage of patients who attended. The "after" bar is roughly three times the height of the "before" bar. The vertical axis is labelled only with the top value, 90%.

List the questions you would ask before repeating this result to anyone.
:::

Where does the axis start, since only its top is labelled and a three-to-one height ratio next to a 90% ceiling is hard to reach honestly. What are the two actual percentages. How many patients are in each bar, since a percentage over 40 people and a percentage over 4000 are different evidence. Over what period was each measured, and did anything else change at the same time. If the answers turn out to be 78% and 84% on an axis starting at 76, the chart has done to those numbers exactly what the first chart in this scene did to 137.5 and 146.5.

:::{source-note}
:claims: claim-truncated-bar-axis-distorts, claim-histogram-bins-govern-detail
:sources: source-af-charts, source-nist-histogram

These sources support the finding that readers judge bars as proportional to one another so that breaking the numerical axis distorts those proportions, and that a histogram is built from bins whose width is chosen by the analyst. The two group means, the sixty readings, and the clinic-audit example are original teaching material.
:::
