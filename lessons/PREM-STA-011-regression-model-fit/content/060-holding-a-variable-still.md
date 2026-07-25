# Holding one thing still while another moves

The previous section left the slope with a problem. It compares people who differ in when they ate, and those people differ in other ways too, so the −3.37 has other differences folded into it. The standard response is to say that the analysis was **adjusted** for those other things. What follows is about what that phrase buys and what it does not.

## Adding a second predictor

A straight line has one predictor. **Multiple regression** allows several, each with its own coefficient:

:::{equation}
:label: equation-multiple-regression

\hat{y} = a + b_1 x_1 + b_2 x_2 + \cdots
:::

The fitting method is the same one: choose all the coefficients together so the summed squared distances between observed and fitted values are as small as possible. What changes is how each coefficient reads. In a one-predictor line, {math}`b` is the change in fitted response per unit of {math}`x`. With more predictors, **each coefficient is the change in fitted response per unit of its own predictor while the other predictors stay at whatever values they had.** That last clause is the whole of what "adjusting for" means.

Said in a form the clinic would use: the adjusted coefficient for dinner timing compares people who differ in dinner timing *and match on everything else in the model*.

## What that does to a slope

Six people, constructed so the machinery is visible in one glance. Three work days, three work nights. The table is built to stipulate two things: the night workers here happen to leave longer gaps before sleeping, and they happen to run higher glucose for reasons that have nothing to do with when they eat. Whether real night workers do either is beside the point; the arithmetic below is what to watch.

| Person | Shift | Interval (hours) | Fasting glucose (mg/dL) |
| --- | --- | --- | --- |
| 1 | Day | 2 | 130 |
| 2 | Day | 3 | 127 |
| 3 | Day | 4 | 124 |
| 4 | Night | 4 | 160 |
| 5 | Night | 5 | 157 |
| 6 | Night | 6 | 154 |

Fit a single line to all six and ignore the shift column. The slope comes out at **+7.8 mg/dL per hour**, and {math}`r^2` is 0.44. Read straight off, that line says a longer interval goes with *higher* glucose.

Now look within each shift. Among the three day workers, glucose falls by 3 mg/dL per hour of interval. Among the three night workers, glucose falls by 3 mg/dL per hour of interval. Every person in the study belongs to a group in which the relationship is negative, and the pooled line reports positive.

Adding shift as a second predictor produces {math}`\hat{y} = 136 - 3x + 36z`, where {math}`z` is 1 for a night worker and 0 for a day worker. Put each person's numbers in and it reproduces all six glucose values exactly. The coefficient on the interval is now **−3 mg/dL per hour**, and it reads: among people on the same shift, one more hour between dinner and sleep goes with 3 mg/dL lower fasting glucose. The coefficient on shift, +36 mg/dL, reads: at the same interval, a night worker averages 36 mg/dL higher.

The crude slope was not a calculation error. It correctly described a comparison nobody wanted to make, between a group that eats late and runs low and a group that eats early and runs high.

:::{callout}
:kind: note

This six-person table is constructed to make the arithmetic visible, and its reversal is deliberately extreme. The block's own sixty-person study carries only two columns on its plot, so the −3.37 mg/dL per hour reported throughout this lesson is an **unadjusted** slope. Any adjusted figure for that cohort would require the other columns and is not computed here.
:::

## What "holding constant" actually is

The phrase invites a picture of an experiment: fix the shift, vary the dinner time, watch the glucose. Nothing like that happened. The six people were observed once each, and the coefficient was produced by arithmetic that compares people who already matched on shift. Adjustment is a comparison chosen inside data that already exist.

Three consequences follow, and each one has ended an argument in a journal.

**A variable that was not measured cannot be held constant.** Adjusting for shift does nothing about sleep duration, medication timing, or what people ate. The comparison is only as clean as the column list, and the column list is decided before any data arrive. Where a rival factor was omitted or measured poorly, the leftover distortion is the residual confounding named in the earlier [correlation and causation](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007) lesson, and no amount of fitting removes it.

**Holding constant requires people at both values.** If every night worker in a dataset had an interval under three hours and every day worker over three, no comparison within a shift would exist, and the model would still print a coefficient. A coefficient can be produced from data that contain no evidence for it.

**Adjusting for the wrong variable makes things worse.** A variable that lies on the pathway between the predictor and the outcome, or one that is a consequence of both, will change the coefficient in a direction that has nothing to recommend it. Which variables belong in the model is a question about how the world is arranged; the fitting method answers it for you either way, without comment.

That is why an adjusted coefficient is a better description than a crude one and still not an effect. It has narrowed the comparison. It has not turned an observation into an experiment.

:::{check}
:id: check-read-an-adjusted-coefficient
:kind: retrieval

A published table reports, for adults with type 2 diabetes: unadjusted slope for the dinner-to-sleep interval −4.0 mg/dL per hour; slope adjusted for age, sex, and body-mass index −1.2 mg/dL per hour.

1. Write the adjusted figure as a sentence a clinician would understand.
2. What does the change from −4.0 to −1.2 tell you?
3. What claim does the adjusted figure still not support?
:::

The adjusted figure says that among adults of the same age, sex, and body-mass index, those with a one-hour longer interval between dinner and sleep averaged 1.2 mg/dL lower fasting glucose. The change from −4.0 to −1.2 says that adding those covariates materially changed the fitted conditional association. It does not by itself assign the difference to age, sex, or body size: that stronger explanation would require a defensible causal structure, adequate measurement, comparable groups across the needed combinations, and a correctly specified model. The adjusted figure still supports no claim about what would happen to a patient who changed their dinner time, because it is a comparison between people, adjusted for three variables and blind to every variable nobody wrote down.

:::{source-note}
:claims: claim-multiple-regression-holds-constant, claim-least-squares-criterion
:sources: source-schober-linear-regression, source-nist-least-squares, source-kim-regression-basics

These sources support the statements that a regression coefficient is the average change in the dependent variable for each one-unit change in its independent variable, that a model including several independent variables estimates the contribution of each while holding the values of all the others constant, that this is the mechanism by which an analysis controls for confounding, and that the coefficients are obtained by minimising the summed squared deviations between the data and the model. The six-person table, both fitted models, and the published-table exercise are original teaching material.
:::
