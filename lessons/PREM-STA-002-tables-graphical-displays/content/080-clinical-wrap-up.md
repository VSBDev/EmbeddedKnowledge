# Clinical wrap-up: the question a mean of 142 cannot answer

**Teaching example, not medical advice.** The clinic, the meeting, and all sixty readings below are invented for teaching. Nothing here is a finding about real patients, and nothing here should inform anyone's care. The bands used below are invented analytic intervals, not diagnostic cutoffs or management targets.

A diabetes service reviews the dinner-timing study at its Monday meeting. The summary slide says: *60 adults with type 2 diabetes, mean fasting glucose 142 mg/dL.* A registrar asks the question the slide was not built to answer.

> How many readings fall in each of five bands chosen for this audit?

Three of this lesson's tools answer that, in order.

## First, choose the bands before counting

For this exercise, the analyst chooses five equal-width intervals before counting: 100 to 119, 120 to 139, 140 to 159, 160 to 179, and 180 to 199 mg/dL. These edges are convenient round numbers created for the display exercise. They carry no clinical label and must not be used to classify a person or guide care.

Defined edges make the registrar's question answerable, and they also make the display choice easy. The question asks *how many* in each interval. That is a table's question.

## Second, the frequency table

| Fasting glucose (mg/dL) | People | Share of cohort |
| --- | --- | --- |
| 100 to 119 | 6 | 0.100 |
| 120 to 139 | 21 | 0.350 |
| 140 to 159 | 21 | 0.350 |
| 160 to 179 | 11 | 0.183 |
| 180 to 199 | 1 | 0.017 |
| All | 60 | 1.000 |

The two middle bands each hold 21 readings. Six readings fall in the lowest band, and one falls in the highest.

The mean of 142 mg/dL is nowhere in that table and could not have produced any row of it. The registrar's question was never a question about the centre.

## Third, the picture, for what the table does not show

Scroll back to the histogram in the second scene, or read its data table. Two features stand out that the banded table above smooths over.

One person sat alone in the lowest bin, 95 to 105 mg/dL, with only three people in the bin above them. In the second scene that reading was the closest thing to an outlier; in a clinic it is a specific person, and the first move is the same as it was there. A value that far from its neighbours is a question about the record before it is a question about the patient. Was the reading taken fasting? Is the meter the one the record says it is? Did the value get transcribed correctly? Whatever the answer, the mean absorbed that person completely and the histogram did not.

At the other end, six people sat at or above 165 mg/dL, with the highest at 181. Those values show the high end of the observed range; they do not by themselves establish a right-skewed distribution.

Neither feature is visible in "mean 142 mg/dL". Both were visible in a picture that took one command to draw.

## What the service should not draw

The meeting also wants the dinner-timing comparison: 137.5 mg/dL in the earlier group against 146.5 in the later, a difference of 9.0. Somebody will offer to put that on a slide as two bars.

If those bars sit on an axis starting at 135, the slide will show one bar four and a half times the other and a room full of clinicians will remember a large effect. On a zero-based axis the same two bars differ by about six and a half percent, which is what 9.0 mg/dL out of roughly 140 actually is. Same numbers, and the meeting leaves with a different impression depending on which slide it saw.

Whether 9.0 mg/dL should change anything for a patient is a clinical judgment, and this block returns to it in its final lesson with the whole analysis behind it. What this lesson establishes is narrower and comes first: nobody in that room can weigh a difference they have been shown at the wrong size.

## Where the block goes next

You now have the data in view. The next lesson puts numbers on what you have been describing in words: a single value for the centre, a single value for the spread, and a measure of any asymmetry in the data. Those summaries are safe to use precisely because you have already looked.

:::{source-note}
:claims: claim-table-for-exact-values, claim-histogram-shows-distribution-features, claim-truncated-bar-axis-distorts
:sources: source-af-tables, source-af-charts, source-nist-histogram

These sources support the conditions under which a table serves a reader better than a chart, the distribution features a histogram reports that a summary value does not, and the distortion produced by breaking a bar chart's numerical axis. The clinic, the meeting, the sixty readings, the analytic bands, and the banded counts are original teaching material and are not observations of real patients.
:::
