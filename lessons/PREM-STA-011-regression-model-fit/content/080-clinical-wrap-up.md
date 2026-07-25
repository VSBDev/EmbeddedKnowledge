# Clinical wrap-up: one patient, and a line built from sixty others

The lesson opened with a woman who eats at ten and sleeps at eleven. Everything since then has been about a cohort. This last part is the harder move: taking a line fitted to sixty people and using it, or declining to use it, for the one person in front of you.

Nothing so far has done this. The worked example fitted a line to a group and read a group-level rate. A patient is not a group, and making that step honestly is the point of what follows.

## The case

:::{callout}
:kind: boundary

**Teaching example, not medical advice.** The patient below is invented, as is the sixty-person cohort her clinician is reasoning from. What follows demonstrates how a fitted line is interrogated in a clinical conversation. It recommends nothing about meal timing, monitoring, or treatment for any real person, and no reader should change anything about their own care on the strength of it.
:::

A 58-year-old woman with type 2 diabetes attends a routine review. Her fasting glucose this morning was **168 mg/dL**. She eats dinner at 10 pm and goes to bed at 11 pm, so her dinner-to-sleep interval is **1.0 hour**. She has read that late eating raises morning sugars, and she asks whether moving dinner to 8 pm would help.

Her clinician has the study these lessons have been analysing: sixty adults with type 2 diabetes, fitted line {math}`\hat{y} = 153.4 - 3.37x`, correlation −0.32, {math}`r^2 = 0.10`, typical miss around 17 mg/dL, and a recorded interval range of 0.8 to 6.5 hours.

Do the work before reading the analysis.

:::{check}
:id: check-clinical-transfer
:kind: retrieval

Using only what the study provides:

1. What glucose does the line give at her current interval of 1.0 hour, and at the 3.0 hours she is proposing?
2. Her actual reading is 168. What is her residual from the line, and what does it mean that it is that size?
3. Is the difference between the two fitted values large compared with how wrong the line usually is?
4. Write the one sentence you would say to her about what the study does and does not establish.
:::

## Working it through

**The fitted values.** At 1.0 hour the line gives 150.0 mg/dL, and at 3.0 hours it gives 143.3 mg/dL. Both intervals sit inside the recorded range of 0.8 to 6.5 hours, so these are interpolations and the line has evidence behind them. The difference is 6.7 mg/dL, which is the slope multiplied by the two-hour change and nothing else.

**Her residual.** She measured 168 where the line expected 150.0, so her residual is +18.0 mg/dL. That single number reframes the whole conversation. Most of what separates her morning reading from the typical reading at her interval has nothing to do with her dinner time, because dinner time is the only thing the line knows and the line is 18.0 mg/dL short. If she moved to a three-hour interval and her residual stayed where it is, she would land near 161 mg/dL, still the same distance above the line, because the line has no mechanism for closing that gap.

**The size of the shift against the size of the error.** The predicted difference is 6.7 mg/dL. The typical distance between an individual and this line is 17.2 mg/dL. The proposed change is roughly a third of the ordinary, unexplained distance between one person and the line. A predicted shift that small, sitting inside a spread that large, could not be picked out from an ordinary reading in one patient. It is a statement about an average across sixty people, and an average is the one thing an individual never is.

**The direction the evidence runs.** Every number above compares different people. The study observed adults who already differed in when they ate, and it did not move anyone's dinner. Whatever else separates habitual late eaters from habitual early eaters travels inside the −3.37, and the slope was never adjusted for any of it. The gap between "people who eat earlier average lower" and "this patient will fall" is the gap between an association and an effect, and no fitting method crosses it.

**A yardstick from outside the study.** Fasting plasma glucose is read against published cut-points: 99 mg/dL or below is called normal, 100 to 125 mg/dL indicates prediabetes, and 126 mg/dL or above indicates diabetes, with a second test usually used to confirm a diagnosis. She is at 168, well above the diabetes cut-point. A change of 6.7 mg/dL, if it happened to her at all, would leave her above it. This is where the line's answer meets a clinical scale and turns out not to reach any boundary that a decision depends on.

**What you would say.** Something close to: *in a study of sixty adults like you, people who left two more hours between dinner and sleep averaged about seven milligrams per decilitre lower in the morning, but the study compared different people rather than following anyone who changed their habit, and the difference is small next to how much people vary from one another and from morning to morning.* Every clause in that sentence came from a number in this lesson, and the sentence commits to nothing the numbers do not carry.

Whether an average difference of that size should change anything for a patient is a clinical judgment about what counts as worth doing, and it is not a question arithmetic can settle. The lesson that closes this run exists to take that question apart.

:::{callout}
:kind: note

Two things the reasoning above deliberately did not do. It did not extend the line past 6.5 hours to find a more encouraging answer. And it did not report the slope without the residual spread beside it, because the slope alone would have made a 6.7 mg/dL prediction sound like a plan.
:::

## Where this sits, and what to carry forward

Fitting a line is the point where this run of lessons stops describing the data and starts summarising it with a mechanism-shaped object. That is why the lesson has spent as much space on the object's limits as on its construction. The three ideas most worth keeping are that a slope is a rate with units and a sign that depends on how you defined the axis, that the residual plot judges the shape while {math}`r^2` judges the strength and neither answers the other's question, and that adjustment narrows a comparison without converting it into an experiment.

You will meet all three again. The uncertainty around a fitted slope is built with the confidence-interval machinery met earlier. Whether a difference of this size matters to a patient is the closing lesson's subject. And regression reappears wherever a laboratory or clinical measurement is calibrated against another, including the enzyme-investigation work that the course's practical strand links to this outcome.

:::{source-note}
:claims: claim-fpg-thresholds, claim-slope-is-change-per-unit, claim-r-squared-proportion, claim-linear-extrapolation-poor
:sources: source-niddk-diabetes-tests, source-schober-linear-regression, source-kim-regression-evaluation, source-nist-least-squares

The diagnostic reference values, the use of a confirmatory second test, and the meaning of fasting come from the US National Institute of Diabetes and Digestive and Kidney Diseases. The remaining sources support the reading of a regression coefficient as an average change per one-unit change in the predictor, the coefficient of determination as a proportion of total variability, and the poor behaviour of linear fits outside the range of the data. The patient, the cohort, and every fitted value quoted are illustrative teaching material, and the lesson makes no diagnostic, monitoring, or treatment recommendation.
:::
