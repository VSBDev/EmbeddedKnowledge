# Clinical wrap-up: the question a mean of 142 cannot answer

**Teaching example, not medical advice.** The clinic, the meeting, and all sixty readings below are invented for teaching. Nothing here is a finding about real patients, and nothing here should inform anyone's care. Reference values are quoted only so the display choices have something real to be measured against.

A diabetes service reviews the dinner-timing study at its Monday meeting. The summary slide says: *60 adults with type 2 diabetes, mean fasting glucose 142 mg/dL.* A registrar asks the question the slide was not built to answer.

> How many of those sixty people are where we would want them, and how many are a long way from it?

Three of this lesson's tools answer that, in order.

## First, the cut-points the question needs

The clinical reference values do not come from the data; they come from outside it. The US National Institute of Diabetes and Digestive and Kidney Diseases gives fasting plasma glucose of 99 mg/dL or below as normal, 100 to 125 mg/dL as prediabetes, and 126 mg/dL or above as diabetes, with a doctor usually running a second test before confirming a diagnosis. Fasting means nothing to eat or drink beforehand except sips of water.

Those thresholds are what makes the registrar's question answerable, and they are also what makes the display choice easy. The question asks *how many*, in bands with defined edges. That is a table's question.

## Second, the frequency table

| Fasting glucose (mg/dL) | People | Share of cohort |
| --- | --- | --- |
| 100 to 125 | 11 | 0.183 |
| 126 to 139 | 16 | 0.267 |
| 140 to 159 | 21 | 0.350 |
| 160 to 179 | 11 | 0.183 |
| 180 or above | 1 | 0.017 |
| All | 60 | 1.000 |

Forty-nine of the sixty sat at or above 126 mg/dL on the morning they were measured; eleven sat below it. Nobody in this cohort was at or below 99.

The mean of 142 mg/dL is nowhere in that table and could not have produced any row of it. The registrar's question was never a question about the centre.

## Third, the picture, for what the table does not show

Scroll back to the histogram in the second scene, or read its data table. Two features stand out that the banded table above smooths over.

One person sat alone in the lowest bin, 95 to 105 mg/dL, with only three people in the bin above them. In the second scene that reading was the closest thing to an outlier; in a clinic it is a specific person, and the first move is the same as it was there. A value that far from its neighbours is a question about the record before it is a question about the patient. Was the reading taken fasting? Is the meter the one the record says it is? Did the value get transcribed correctly? Whatever the answer, the mean absorbed that person completely and the histogram did not.

At the other end, six people sat at or above 165 mg/dL, with the highest at 181. They are the right-hand tail worked through earlier, and a service looking at its own list would want their names.

Neither feature is visible in "mean 142 mg/dL". Both were visible in a picture that took one command to draw.

## What the service should not draw

The meeting also wants the dinner-timing comparison: 137.5 mg/dL in the earlier group against 146.5 in the later, a difference of 9.0. Somebody will offer to put that on a slide as two bars.

If those bars sit on an axis starting at 135, the slide will show one bar four and a half times the other and a room full of clinicians will remember a large effect. On a zero-based axis the same two bars differ by about six and a half percent, which is what 9.0 mg/dL out of roughly 140 actually is. Same numbers, and the meeting leaves with a different impression depending on which slide it saw.

Whether 9.0 mg/dL should change anything for a patient is a clinical judgment, and this block returns to it in its final lesson with the whole analysis behind it. What this lesson establishes is narrower and comes first: nobody in that room can weigh a difference they have been shown at the wrong size.

## Where the block goes next

You now have the data in view. The next lesson puts numbers on what you have been describing in words: a single value for the centre, a single value for the spread, and a name for the lean you found in the right tail. Those summaries are safe to use precisely because you have already looked.

:::{source-note}
:claims: claim-fpg-thresholds, claim-table-for-exact-values, claim-histogram-shows-distribution-features, claim-truncated-bar-axis-distorts
:sources: source-niddk-diabetes-tests, source-af-tables, source-af-charts, source-nist-histogram

These sources support the fasting plasma glucose reference values and confirmation practice quoted above, the conditions under which a table serves a reader better than a chart, the distribution features a histogram reports that a summary value does not, and the distortion produced by breaking a bar chart's numerical axis. The clinic, the meeting, the sixty readings, and the banded counts are original teaching material and are not observations of real patients.
:::
