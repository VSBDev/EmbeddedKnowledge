# Predict, and refuse to predict

A fitted line will return a number for any input you hand it. Type in an interval of forty hours and the arithmetic completes without complaint. Knowing when the answer is worth having is a separate skill from producing it, and this section builds it in three steps: one with the working shown, one with prompts, one with neither.

## Inside the data and outside it

The sixty intervals ran from 0.8 hours to 6.5 hours. That span is the evidence. Anywhere inside it, the line is interpolating between observations that exist; outside it, the line is extending a shape nobody checked, and the further out you go the more extreme the answer becomes. That failure has a name the course already uses.

:::{definition}
:id: definition-extrapolation

**Extrapolation** is using a fitted relationship beyond the range or conditions that supplied its evidence. **Interpolation** is using it inside that range. The equation looks identical in both cases; only the support behind the answer differs.
:::

This is the meaning [Scientific models and their limits](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-010) gave the word, applied here to the range of a predictor. Straight-line fits are particularly badly behaved outside their range, because a line never levels off: push the predictor far enough and it will hand you any value you like, including impossible ones.

Here is what that looks like with this lesson's line, {math}`\hat{y} = 153.4 - 3.37x`.

| Interval asked for | Fitted glucose | Standing |
| --- | --- | --- |
| 4.0 hours | 139.9 mg/dL | Inside the data |
| 0.8 hours | 150.7 mg/dL | The lowest interval recorded |
| 0 hours | 153.4 mg/dL | Outside: nobody ate at bedtime |
| 11 hours | 116.3 mg/dL | Far outside: nobody came close |
| 16.1 hours | 99.1 mg/dL | Lower than any reading in the study |

Read the last row slowly. Extended far enough, the fitted line says that an adult who left about sixteen hours between dinner and sleep would come in at 99.1 mg/dL, below every one of the sixty glucose values the study recorded, the lowest of which was 100. The arithmetic is correct and the statement is worthless. The study contains nobody past 6.5 hours, a sixteen-hour gap is most of a waking day, and the line has no way to know that glucose cannot be talked downwards indefinitely by waiting longer. Keep pushing and the same equation reaches zero at about 45 hours.

## Step one: completion

Fill in the blanks. The reasoning is already laid out for you.

:::{check}
:id: check-completion-prediction
:kind: retrieval

A person in the study left 4.0 hours between dinner and sleep and recorded a fasting glucose of 154 mg/dL.

- Fitted value at an interval of 4.0 hours: ______ mg/dL
- Residual: {math}`154 - \,` ______ {math}`= \,` ______ mg/dL
- Is this prediction an interpolation or an extrapolation, and how do you know?
:::

The fitted value is 153.4 − 3.37 × 4.0 = 139.9 mg/dL. The residual is 154 − 139.9 = +14.1 mg/dL, positive because the person came in above the line. It is an interpolation, because 4.0 hours sits inside the recorded range of 0.8 to 6.5 hours.

## Step two: prompted

Less scaffolding now. The prompts name the decisions but not the answers.

:::{check}
:id: check-prompted-slope-reading
:kind: retrieval

A different team fits fasting glucose against the dinner-to-sleep interval in their own cohort of 200 adults with type 2 diabetes, whose intervals run from 1.0 to 8.0 hours. They report a slope of −1.9 mg/dL per hour, an intercept of 148 mg/dL, and {math}`r^2 = 0.04`.

1. State the slope as a sentence about people, with its units.
2. Their line and this lesson's line disagree about the fitted glucose at 3 hours. Compute both and say what the size of the gap tells you.
3. A colleague wants to use their line to predict glucose at an interval of 9 hours. Answer them in one sentence.
:::

Their slope says that across their 200 adults, people whose interval was one hour longer averaged 1.9 mg/dL lower fasting glucose. At 3 hours their line gives 148 − 1.9 × 3 = 142.3 mg/dL, and this lesson's line gives 153.4 − 3.37 × 3 = 143.3 mg/dL, a gap of 1.0 mg/dL. Two independent cohorts landing within about a milligram of each other at the middle of the range is worth noticing, and it says nothing about whether either slope is right, because both fits are weak and the two cohorts may differ in ways neither line records. The colleague should be told that 9 hours is outside the range their data cover, so the line has no evidence there, and the answer it prints would be an extension of a shape nobody tested.

## Step three: independent

No prompts.

:::{check}
:id: check-independent-mixed
:kind: retrieval

Four statements about this lesson's fitted line. Mark each as supported or not supported, and give one sentence of reasoning for each.

1. "Fasting glucose falls by about 3.4 mg/dL for every extra hour between dinner and sleep."
2. "Ten per cent of the differences in fasting glucose between these adults go with differences in dinner timing."
3. "The model predicts a fasting glucose of 153 mg/dL for someone who eats as they get into bed."
4. "Because {math}`r^2` is only 0.10, the straight line is the wrong shape for these data."
:::

Statement 1 is not supported as written. "Falls" describes a change happening to somebody; the line compares different people. Supported version: adults whose interval was one hour longer averaged about 3.4 mg/dL lower fasting glucose. Statement 2 is supported, and it is the honest reading of {math}`r^2 = 0.10`, provided "go with" is left as a statement of association. Statement 3 is not supported: the arithmetic is right and 0 hours lies outside a range that starts at 0.8, so the model is being asked about a person the study never saw. Statement 4 is not supported, and it confuses the two questions the misconception section separated: {math}`r^2` measures how much of the variation the line accounts for, while this residual plot provides no clear evidence against the straight-line form over the observed range. Neither result proves that the form is uniquely correct.

## What to do when the fit is weak

A slope of −3.37 mg/dL per hour with {math}`r^2 = 0.10` is not a failed analysis, and it is not a licence to report the slope as though it were strong. Three honest uses survive.

Report it as a group-level description with its uncertainty attached, which is the work of the earlier lesson on confidence intervals. Use it to decide whether a larger or better-designed study is worth running, since a small observed association can still motivate a better question. If a sufficiently precise uncertainty interval excludes a large population linear slope under the fitted model and the variables as measured, that can bound the observed linear association. This lesson does not calculate that interval, so this fit is not used to rule out any slope size. Even such a bound would not be evidence against a large causal effect, because this observational fit does not identify one.

What does not survive is using it to tell one patient what will happen to their morning reading.

:::{source-note}
:claims: claim-linear-extrapolation-poor, claim-r-squared-proportion, claim-slope-is-change-per-unit
:sources: source-nist-least-squares, source-kim-regression-evaluation, source-schober-linear-regression

These sources support the statements that linear least-squares models have poor extrapolation properties because their outputs become increasingly extreme as the explanatory variables move to extreme values, that the coefficient of determination is the proportion of total variability accounted for by the fitted model, and that a regression coefficient is the average change in the response for each one-unit change in its predictor. The second cohort, and every fitted value and residual quoted, were written or computed for this lesson.
:::
