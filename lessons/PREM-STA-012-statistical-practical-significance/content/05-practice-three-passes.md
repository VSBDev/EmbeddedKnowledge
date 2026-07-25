# Practice: three passes at the same skill

Work each task before reading its answer. The support falls away as you go. The first gives you every number you need, the second withholds one on purpose, and the third asks you to run the reasoning forwards from a decision instead of backwards from a result.

**Teaching example, not medical advice.** Every study, service, clinic and threshold below is invented for teaching.

## Task one: classify and state

A hospital diabetes service has agreed in advance that it will change its dietary advice only for an effect of at least 5 mg/dL on fasting glucose. Three papers land on the same desk.

| Paper | Difference | 95% interval | *p* |
| --- | --- | --- | --- |
| P | 6.8 mg/dL | 5.4 to 8.2 | < 0.001 |
| Q | 14.0 mg/dL | −1.0 to 29.0 | 0.067 |
| R | 3.1 mg/dL | 1.9 to 4.3 | < 0.001 |

For each paper, say which of the five positions it occupies and write one sentence the service could put in its minutes.

---

**Paper P is position A.** The whole interval sits above 5, with the lower limit at 5.4. Minute: the data support an effect of at least the size the service agreed to act on, somewhere between 5.4 and 8.2 mg/dL.

**Paper Q is position E.** The interval contains 0 and it also contains 5, so both questions come back open. Minute: this study distinguishes nothing, since it is compatible with a small effect in the opposite direction and with an effect nearly six times the agreed threshold. The estimate of 14.0 is the value most compatible with the data and the study cannot support acting on it.

**Paper R is position B.** The interval excludes 0 and its upper limit of 4.3 falls below 5. Minute: the effect is real and the study has shown it is smaller than the threshold the service set. This is the most decisive of the three, and it decides against changing the advice.

Notice the ranking by *p*-value would put P and R together at the top and Q at the bottom. The ranking by usefulness to the service puts R first, P second, and Q nowhere.

## Task two: work out what is missing

A press release states:

> A large trial has shown a statistically significant reduction in fasting glucose with the new meal-replacement programme (*p* = 0.004, n = 2400).

Write down what you can conclude, what you cannot, and the single most useful thing to ask for.

---

What you can conclude is thin. The data sit awkwardly with a true difference of zero, under the trial's model. That is very nearly everything the sentence supports.

What you cannot conclude is most of what a reader would take from it. You have no effect size, so "reduction" is a direction with no magnitude attached. With 1200 people in each group a difference of about 1.3 mg/dL would already clear the 0.05 line, so *p* = 0.004 is compatible with a difference far too small to matter and with a large one. The word *large* in the first clause describes the trial, and a reader's eye moves it onto the effect.

The single most useful thing to ask for is the effect estimate with its confidence interval, in mg/dL. One line of that kind settles the position question immediately, and no *p*-value ever will. The methodological literature makes the same request in general form: read the size of the estimate and the confidence limits, and treat which side of 0.05 the *p*-value fell on as the least informative part of the report.

## Task three: run it forwards

The service is now designing its own trial. It has agreed on the 5 mg/dL threshold and it wants a trial that can actually return a verdict. Suppose the true difference really is 9.0 mg/dL, and the within-group spread is 16 mg/dL as before.

1. How large must each group be for the interval to exclude 5 at its lower end?
2. What happens to that plan if the true difference is 3.0 mg/dL instead?

---

**Part 1.** The lower limit is the estimate minus 1.96 standard errors, and it sits above 5 when 1.96 × SE is less than 9.0 − 5.0 = 4.0 mg/dL. So the standard error must fall below 4.0 / 1.96 = 2.0408 mg/dL.

Now turn that into people. **PREM-STA-006** gave the standard error of a difference between two equal groups of *n* as the within-group spread times √(2/*n*), which here is 16 × √(2/*n*). Setting that below 2.0408 means √(2/*n*) < 2.0408 / 16 = 0.12755. Squaring both sides to get *n* out from under the root gives 2/*n* < 0.016269, so *n* > 122.9, which rounds up to **123 per group**. A calculator handles every step.

Check it. At 123 per group the standard error is 2.04, the margin is 1.96 × 2.04 = 4.00, and the interval runs from 5.00 to 13.00 mg/dL. Position A, by the smallest margin the arithmetic allows. The service would sensibly recruit somewhat more than 123 to leave itself room.

Compare that with the 30 per group it has. Four times the people is what it takes to move from a study that cannot answer its own question to one that can.

**Part 2.** Nothing works. If the true difference is 3.0 mg/dL, it sits below the threshold, so no sample size will ever put the whole interval above 5. A very large trial would put the whole interval *below* 5, which is position B and a perfectly good answer: the service would learn that the effect is real and too small to act on. What no trial can deliver is position A for an effect that is genuinely smaller than the threshold.

That is the honest relationship between design and importance. Sample size buys precision. Precision lets you find out which side of the line the effect falls. It cannot move the effect across the line.

:::{source-note}
:claims: claim-report-estimates-and-intervals, claim-size-decides-significance
:sources: source-p-value-misinterpretations

The methodological guide supports the recommendation in task two, that interpretation demands the size of the effect estimate and the confidence limits and not merely which side of the conventional cut-off a *p*-value fell on, and it supports the point behind the 1.3 mg/dL figure, that minor effects reach statistical significance when a study is large. The three papers, the press release, the service and every number in the tasks are invented for teaching, and the sample-size arithmetic is this lesson's own.
:::
