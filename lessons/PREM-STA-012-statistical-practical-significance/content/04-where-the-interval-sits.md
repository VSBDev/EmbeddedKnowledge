# Where the interval sits when a line is drawn

Everything so far has been preparation for one move, and the move is simple enough to describe in a sentence. Put the importance threshold on the same axis as the estimate and its interval, then look at where the interval sits relative to the line.

That is the whole technique. What makes it worth a scene is that it has five outcomes, and four of them are routinely reported as though they were the fifth.

## The dinner-timing result, with a line drawn on it

Take 5 mg/dL as the candidate threshold. It was chosen in the previous scene as an illustration and it carries no authority; treat it as the number a particular clinical team happened to settle on after arguing about it.

:::{chart} ../charts/estimate-against-threshold.chart.json
:::

Two marked lines, two different answers.

The line at 0 sits outside the shaded band. The interval clears it by 0.9 mg/dL at the near end. This is the same fact as *p* = 0.029 falling below 0.05, written in the other notation, and it means the data support a difference in the stated direction.

The line at 5 sits inside the shaded band. The interval reaches 4.1 mg/dL below it and 12.1 mg/dL above it. So the data are compatible with an effect smaller than the team's threshold, and also compatible with an effect more than three times that threshold. On the question the team actually asked, the study has returned nothing.

That combination is the ordinary state of affairs, and it has an ugly property: the paper can honestly report a statistically significant finding while the clinical question stays exactly where it was.

## Two questions, asked separately

Write T for the threshold and 0 for no difference. There are two comparisons to make, and the habit worth building is making them one at a time.

The first asks about direction. Does the interval contain 0? If it does not, the study supports an effect in the stated direction.

The second asks about magnitude. Does the interval sit entirely above T, entirely below T, or across it? Every interval does exactly one of those three things, so the question always has an answer.

Combining them gives five arrangements, and since T is a positive number an interval cannot both contain 0 and sit entirely above T. Five is the whole list.

| Position | Contains 0? | Sits, relative to T | What the study supports |
| --- | --- | --- | --- |
| A | No | Entirely above | An effect at least as large as the threshold. Answered in favour |
| B | No | Entirely below | A real effect, demonstrably smaller than the threshold. Answered against |
| C | No | Across it | Direction established, magnitude open. Inconclusive on the decision |
| D | Yes | Entirely below | Direction not established, and an effect as large as T is ruled out. Answered against |
| E | Yes | Across it | Nothing established either way. Uninformative |

Five studies, one for each.

| Study | Per group | Difference | 95% interval | *p* | Position |
| --- | --- | --- | --- | --- | --- |
| Evening-meal programme | 60 | 12.0 | 6.3 to 17.7 | < 0.001 | A |
| Large replication | 600 | 2.0 | 0.2 to 3.8 | 0.030 | B |
| Dinner-timing study | 30 | 9.0 | 0.9 to 17.1 | 0.029 | C |
| Bedtime-snack trial | 300 | 2.0 | −0.6 to 4.6 | 0.13 | D |
| Half-size pilot | 15 | 9.0 | −2.5 to 20.5 | 0.12 | E |

Three of those five clear the conventional bar, and they land in three different positions supporting three different decisions. Sorting by statistical significance would have put A, B and C in one pile, which is exactly the sorting that loses what the clinic needs.

Compare D and E, the two that miss the bar. Both would be written up as negative studies. The bedtime-snack trial is genuinely decisive: it did not establish a direction, and it ruled out anything as large as 5 mg/dL, so the service can stop thinking about it. The half-size pilot settled nothing at all, since its interval covers a fall of 2.5 and a rise of 20.5. One negative study answered the question and the other did not, and the *p*-values, 0.13 and 0.12, are almost identical.

### One restriction on the table

The table assumes T has been stated in the direction of the effect being sought, and that the interval lies on that side of zero or straddles it. An interval sitting entirely below 0, meaning the intervention looks harmful, is a different finding, and reading it as "smaller than the threshold" would be a serious misreading. Harm gets its own threshold and its own comparison, set by the same kind of clinical judgement and usually at a different number.

## Working one through

:::{worked-example}
:id: worked-example-threshold-reading

A service reads the dinner-timing paper with a threshold of 5 mg/dL already agreed. Four steps.

**Step 1. Recover the estimate and the interval, in the units of the decision.** Difference 9.0 mg/dL, interval 0.9 to 17.1 mg/dL, width 16.2 mg/dL. All three are in mg/dL, and so is the threshold, so no conversion is needed. If the threshold had been expressed as 0.3 mmol/L, everything would have to move onto one scale first, and 5 mg/dL is about 0.28 mmol/L.

**Step 2. Place 0.** The interval excludes it. The direction is supported.

**Step 3. Place T.** 5 falls between 0.9 and 17.1, so the interval contains it. Position C.

**Step 4. State the verdict in words the service can act on.** The data support the claim that later dinners are associated with higher fasting glucose. They do not establish whether the association is large enough to be worth acting on, because they are compatible with 0.9 mg/dL, a fifth of the service's threshold, and with 17.1 mg/dL, more than three times it. The study answers a question about direction and leaves the question about magnitude open.

The fourth step is the one that gets skipped. Steps 2 and 3 are geometry; step 4 is where the reader has to say out loud what has and has not been shown.
:::

:::{misconception}
:id: misconception-borrowed-threshold

**The belief.** There is already a real number for glucose, so use that one. Diabetes is diagnosed at a fasting plasma glucose of 126 mg/dL, so 126 is the threshold that matters.

**Why it fails.** Those published figures are a classification scheme. The US National Institute of Diabetes and Digestive and Kidney Diseases gives 99 mg/dL or below as normal, 100 to 125 mg/dL as prediabetes, and 126 mg/dL or above as diabetes, with a second test usually used to confirm a diagnosis. Each of those is a value a person's glucose sits *at*. An MCID is a distance a person's glucose *moves*. The two quantities have the same unit and answer different questions, in the way that a temperature of 38 degrees and a rise of 38 degrees do.

**The discriminating case.** A person at 121 mg/dL and a person at 88 mg/dL both gain 9 mg/dL. The first arrives at 130 and crosses into the diabetes band; the second arrives at 97 and stays inside the normal range. The same movement has different consequences at different starting points, which is exactly what a diagnostic cut-point cannot encode and one of the reasons MCID values vary with baseline severity.

**The test.** Ask whether the number you have reached for describes a level or a change. If it describes a level, it is answering a question about classification, and the threshold you need is still missing.
:::

## Accessibility and alternatives

Both charts in this lesson are read entirely from their numbers, and every quantity that appears in either picture also appears in the tables and prose around it. The renderer publishes the underlying values as a data table beside each chart, so nothing in this scene depends on seeing a curve.

If the plots are unavailable, the technique reduces to three comparisons you can carry out on a written interval: is the lower limit above T, is the upper limit below T, and does the interval contain 0. Those three answers select one of the five positions in the table above without reference to any picture. Colour carries no information in either chart, and the shaded band is stated as a pair of numbers wherever it is mentioned.

Most of the arithmetic here needs only addition, subtraction and comparison of decimals. One task in the practice scene works a sample size backwards and uses a square root, and an ordinary calculator is enough for it. No task at any point requires you to supply your own health information, a glucose reading, or any personal measurement.

:::{source-note}
:claims: claim-report-estimates-and-intervals, claim-size-decides-significance, claim-fpg-diagnostic-ranges
:sources: source-p-value-misinterpretations, source-niddk-diabetes-tests

The methodological guide supports the position that interpreting a test demands looking at the effect estimate and the confidence limits together, and not only at which side of 0.05 a *p*-value fell, and it supports the sample-size point behind the contrast between the replication and the pilot. The national institute's patient information supports the fasting plasma glucose ranges quoted in the misconception and the practice of confirming a diagnosis with a second test. The four studies, the 5 mg/dL threshold, the service and its decision are invented for teaching.
:::
