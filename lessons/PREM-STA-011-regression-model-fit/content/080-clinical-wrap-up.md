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

**Her residual.** She measured 168 where the line fitted 150.0, so her residual is +18.0 mg/dL. This says only that her one observed value sat 18.0 mg/dL above the cross-sectional fitted mean at a one-hour interval. It does not identify why she sat above the line, and it does not tell us what her residual would be after a change in dinner time.

**The size of the fitted contrast against cross-sectional prediction error.** The fitted difference is 6.7 mg/dL. The residual standard error of 17.2 mg/dL describes how far different people's one-time observations typically sat from this line. The fitted contrast is smaller than that cross-sectional individual prediction error, which warns against treating either fitted value as a precise prediction for her. It does **not** show whether a change could be detected over repeated mornings: this dataset has one observation per person and supplies no estimate of within-person day-to-day variation. Answering that question would require repeated measurements and an analysis that accounts for observations from the same person being related.

**The direction the evidence runs.** Every number above compares different people. The study observed adults who already differed in when they ate, and it did not move anyone's dinner. Whatever else separates habitual late eaters from habitual early eaters travels inside the −3.37, and the slope was never adjusted for any of it. The gap between "people who eat earlier average lower" and "this patient will fall" is the gap between an association and an effect, and no fitting method crosses it.

**Clinical importance is not in these data.** The study supplies neither a management target nor a minimum change that matters for an adult already diagnosed with type 2 diabetes. Its fitted difference therefore cannot establish whether a change of 6.7 mg/dL would be clinically important, even if a suitable causal study later showed that such a change occurs.

**What you would say.** Something close to: *in a study of sixty adults like you, people who left two more hours between dinner and sleep averaged about seven milligrams per decilitre lower in the morning, but the study compared different people rather than following anyone who changed their habit, so it cannot tell us what changing your dinner time would do or whether that difference would matter clinically.* Every clause in that sentence came from the design or numbers in this lesson, and the sentence commits to nothing they do not carry.

Whether an average difference of that size should change anything for a patient is a clinical judgment about what counts as worth doing, and it is not a question arithmetic can settle. The lesson that closes this run exists to take that question apart.

:::{callout}
:kind: note

Two things the reasoning above deliberately did not do. It did not extend the line past 6.5 hours to find a more encouraging answer. And it did not report the slope without the residual spread beside it, because the slope alone would have made a 6.7 mg/dL prediction sound like a plan.
:::

## Where this sits, and what to carry forward

Fitting a line is the point where this run of lessons stops describing the data and starts summarising it with a mechanism-shaped object. That is why the lesson has spent as much space on the object's limits as on its construction. The three ideas most worth keeping are that a slope is a rate with units and a sign that depends on how you defined the axis, that the residual plot judges the shape while {math}`r^2` judges the strength and neither answers the other's question, and that adjustment narrows a comparison without converting it into an experiment.

You will meet all three again. The uncertainty around a fitted slope is built with the confidence-interval machinery met earlier. Whether a difference of this size matters to a patient is the closing lesson's subject. And regression reappears wherever a laboratory or clinical measurement is calibrated against another, including the enzyme-investigation work that the course's practical strand links to this outcome.

:::{source-note}
:claims: claim-slope-is-change-per-unit, claim-residual-definition, claim-r-squared-proportion, claim-linear-extrapolation-poor
:sources: source-schober-linear-regression, source-nist-model-fit, source-kim-regression-evaluation, source-nist-least-squares

These sources support the reading of a regression coefficient as an average change per one-unit change in the predictor, the definition of a residual as observed minus fitted response, the coefficient of determination as a proportion of total variability, and the poor behaviour of linear fits outside the range of the data. The distinction between cross-sectional and within-person evidence follows from this invented dataset having one observation per person. The patient, the cohort, and every fitted value quoted are illustrative teaching material, and the lesson makes no diagnostic, monitoring, or treatment recommendation.
:::
