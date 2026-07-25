# One number, five readings

The dinner-timing study is finished. Sixty adults with type 2 diabetes were followed, thirty after an early dinner and thirty after a late one. The late group's mean fasting glucose came in 9.0 mg/dL higher. At the bottom of the results table sits one line:

> Difference 9.0 mg/dL, two-sided *p* = 0.029.

By Thursday five people have read that line and reached five different places.

The registrar says there is a 2.9 per cent chance the whole thing is a fluke. The dietitian says it means dinner timing really does matter, 97 times out of 100. A consultant says the effect is small, because 0.029 is a small number. A visiting student says the result would have been meaningless at *p* = 0.06, and is glad it squeaked in. The statistician in the corner says only one of the four sentences is close, and that the closest one is still wrong.

This lesson settles what that line claims. It is a narrow question with an unusually wide blast radius, because the same four readings turn up in journal clubs, in guideline committees, and in the discussion sections of papers that ought to know better.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The dinner-timing study is invented for this course. Its sixty participants, its glucose readings, and every number computed from them are teaching material. Nothing here describes a real cohort, and nothing here is advice about when anyone should eat.
:::

## What you are carrying in from earlier lessons

Three results arrive with the study, and this lesson leans on all three.

From lesson 03, the spread: fasting glucose varies across these adults with a standard deviation of about 16 mg/dL inside each group. From lesson 06, the reason a repeat of the study would not return 9.0 again: the difference between two group means has a standard error, and here it is 4.13 mg/dL. From lesson 07, the interval: 0.9 to 17.1 mg/dL, the range of true differences this sample leaves standing.

From lesson 04 you carry something less numerical and more dangerous to lose. The probability of A given B and the probability of B given A are different quantities. A screen that catches 90 per cent of cases does not hand a positive result a 90 per cent chance of being right. That same distinction is what scene 4 turns on.

One convention travels with the study and is easy to trip over. The recorded variable is the gap between dinner and sleep, measured in hours, so a later dinner means a **shorter** interval. The +9.0 mg/dL belongs to the late group. Put those two facts together: glucose runs higher where the interval is shorter, so plotted against the interval the association slopes downward, at about r = -0.32. Lesson 02 made that sign a teaching point. Nothing here changes it, and a reported direction still means nothing until you know what the axis counts.

:::{check}
:id: check-prerequisites

Answer these from memory before reading on. Write your answers down; the rest of the lesson will correct them if they drift.

1. The standard error of the difference is 4.13 mg/dL. What quantity does that 4.13 describe: the spread of glucose across people, or the spread of an estimate across repeats of the study?
2. The 95 per cent interval runs from 0.9 to 17.1 mg/dL. Does zero lie inside it?
3. A test detects 80 per cent of cases. A colleague says a positive result is therefore 80 per cent likely to be correct. What has the colleague swapped?

Answers. The 4.13 describes the second: how far the estimated difference would scatter if the whole study were run again, which is why it is smaller than the 16 mg/dL spread among people. Zero lies outside the interval, below its lower end of 0.9. The colleague has swapped the two conditionals, reading the probability of a positive result given the disease as though it were the probability of the disease given a positive result.
:::

## Recovery route

If any of those three answers felt like a guess, the repair is short and worth doing before scene 3.

For question 1, return to **PREM-STA-006** and re-read what the standard error measures. Everything in this lesson is built by counting standard errors, so a shaky grip there will not survive the arithmetic. For question 2, return to **PREM-STA-007** and recover how the interval was constructed from 9.0 and 4.13. For question 3, return to the screening tables in **PREM-STA-004**, scene 4. That scene is the direct ancestor of the misconception this lesson exists to repair, and re-reading it will cost you ten minutes and save you the central confusion.

If all three came easily, go on. The next scene assumes exactly those three things and no more.

## What this lesson will and will not do

By the end you will be able to state the two hypotheses behind that *p* = 0.029, compute the statistic it came from, read the number correctly, and say precisely what it refuses to tell you.

Two neighbouring questions belong elsewhere and are left alone here. What this study might have missed, and what testing many things at once would cost, is **PREM-STA-009**. Whether 9.0 mg/dL should change anyone's advice is **PREM-STA-012**. This lesson stops at the meaning of the number.

:::{source-note}
:claims: claim-misinterpretation-is-documented
:sources: source-asa-p-value-statement, source-p-value-misinterpretations

The American Statistical Association's release and the methodological guide both support the statement that these readings are common enough in published work to have drawn a formal response from a statistical body and a catalogued list of specific errors. The study, its participants, and its numbers are invented for teaching.
:::
