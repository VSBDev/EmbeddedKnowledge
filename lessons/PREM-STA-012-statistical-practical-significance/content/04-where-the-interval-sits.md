# Where the interval sits when a line is drawn

Everything so far has been preparation for one move, and the move is simple enough to describe in a sentence. Put the threshold on the same axis as the estimate and its interval, then look at where the interval sits relative to the line.

That is the whole technique. What makes it worth a scene is that it has four outcomes, and three of them are routinely reported as though they were the fourth.

## The dinner-timing result, with a line drawn on it

Take 5 mg/dL as the candidate threshold. It was chosen in the previous scene as an illustration and it carries no authority; treat it as the number a particular clinical team happened to settle on after arguing about it.

:::{chart} ../charts/estimate-against-threshold.chart.json
:::

Two marked lines, two different answers.

The line at 0 sits outside the shaded band. The interval clears it by 0.9 mg/dL at the near end. This is the same fact as *p* = 0.029 falling below 0.05, written in the other notation, and it means the data support a difference in the stated direction.

The line at 5 sits inside the shaded band. The interval reaches 4.1 mg/dL below it and 12.1 mg/dL above it. So the data are compatible with an effect smaller than the team's threshold, and also compatible with an effect more than three times that threshold. On the question the team actually asked, the study has returned nothing.

That combination is the ordinary state of affairs, and it has an ugly property: the paper can honestly report a statistically significant finding while the clinical question stays exactly where it was.

## Four positions

Write T for the threshold and 0 for no difference. Any interval falls into one of four arrangements.

| Position | Where the interval sits | What the study supports |
| --- | --- | --- |
| A | Entirely above T | An effect at least as large as the threshold. The decision is answered in favour |
| B | Excludes 0, entirely below T | A real effect, and one demonstrably too small to matter. Answered against |
| C | Contains T | Inconclusive for the decision, whatever the *p*-value says |
| D | Contains 0 and extends beyond T | Uninformative. Compatible with nothing happening and with a great deal happening |

Four studies from this lesson, one for each position.

| Study | Per group | Difference | 95% interval | *p* | Position |
| --- | --- | --- | --- | --- | --- |
| Evening-meal programme | 60 | 12.0 | 6.3 to 17.7 | < 0.001 | A |
| Large replication | 600 | 2.0 | 0.2 to 3.8 | 0.030 | B |
| Dinner-timing study | 30 | 9.0 | 0.9 to 17.1 | 0.029 | C |
| Half-size pilot | 15 | 9.0 | −2.5 to 20.5 | 0.12 | D |

Three of those four clear the conventional bar. The three that clear it land in three different positions and support three different decisions. Sorting results by statistical significance would have put A, B and C in one pile, which is precisely the sorting that loses the information the clinic needs.

Notice B and D in particular. The replication is statistically significant and settles that the effect is small. The pilot is not statistically significant and settles nothing at all, since its interval covers a reduction of 2.5 and a rise of 20.5. Calling B the positive study and D the negative one describes the *p*-values accurately and the evidence backwards.

## Working one through

:::{worked-example}
:id: worked-example-threshold-reading

A service reads the dinner-timing paper with a threshold of 5 mg/dL already agreed. Four steps.

**Step 1. Recover the estimate and the interval, in the units of the decision.** Difference 9.0 mg/dL, interval 0.9 to 17.1 mg/dL, width 16.2 mg/dL. All three are in mg/dL, and so is the threshold, so no conversion is needed. If the threshold had been expressed as 0.3 mmol/L, everything would have to move onto one scale first, and 5 mg/dL is about 0.28 mmol/L.

**Step 2. Place 0.** The interval excludes it. The direction is supported.

**Step 3. Place T.** 5 falls between 0.9 and 17.1, so the interval contains it. Position C.

**Step 4. State the verdict in words the service can act on.** The data support the claim that later dinners are associated with higher fasting glucose. They do not establish whether the association is large enough to be worth acting on, because they are compatible with 0.9 mg/dL, which nobody would act on, and with 17.1 mg/dL, which would probably change the conversation. The study answers a question about direction and leaves the question about magnitude open.

The fourth step is the one that gets skipped. Steps 2 and 3 are geometry; step 4 is where the reader has to say out loud what has and has not been shown.
:::

:::{misconception}
:id: misconception-borrowed-threshold

**The belief.** There is already a real number for glucose, so use that one. Diabetes is diagnosed at a fasting plasma glucose of 126 mg/dL, so 126 is the threshold that matters.

**Why it fails.** Those published figures are a classification scheme. The national institute that publishes them gives 99 mg/dL or below as normal, 100 to 125 mg/dL as prediabetes, and 126 mg/dL or above as diabetes, with a second test usually used to confirm a diagnosis. Each of those is a value a person's glucose sits *at*. An MCID is a distance a person's glucose *moves*. The two quantities have the same unit and answer different questions, in the way that a temperature of 38 degrees and a rise of 38 degrees do.

**The discriminating case.** A person at 121 mg/dL and a person at 88 mg/dL both gain 9 mg/dL. The first arrives at 130 and crosses into the diabetes band; the second arrives at 97 and stays inside the normal range. The same movement has different consequences at different starting points, which is exactly what a diagnostic cut-point cannot encode and one of the reasons MCID values vary with baseline severity.

**The test.** Ask whether the number you have reached for describes a level or a change. If it describes a level, it is answering a question about classification, and the threshold you need is still missing.
:::

## Accessibility and alternatives

Both charts in this lesson are read entirely from their numbers, and every quantity that appears in either picture also appears in the tables and prose around it. The renderer publishes the underlying values as a data table beside each chart, so nothing in this scene depends on seeing a curve.

If the plots are unavailable, the technique reduces to three comparisons you can carry out on a written interval: is the lower limit above T, is the upper limit below T, and does the interval contain 0. Those three answers select one of the four positions in the table above without reference to any picture. Colour carries no information in either chart, and the shaded band is stated as a pair of numbers wherever it is mentioned.

The arithmetic in this lesson needs nothing beyond addition, subtraction and comparison of decimals. No part of any task requires you to supply your own health information, a glucose reading, or any personal measurement.

:::{source-note}
:claims: claim-report-estimates-and-intervals, claim-size-decides-significance, claim-fpg-diagnostic-ranges
:sources: source-p-value-misinterpretations, source-niddk-diabetes-tests

The methodological guide supports the position that interpreting a test demands looking at the effect estimate and the confidence limits together, and not only at which side of 0.05 a *p*-value fell, and it supports the sample-size point behind the contrast between the replication and the pilot. The national institute's patient information supports the fasting plasma glucose ranges quoted in the misconception and the practice of confirming a diagnosis with a second test. The four studies, the 5 mg/dL threshold, the service and its decision are invented for teaching.
:::
