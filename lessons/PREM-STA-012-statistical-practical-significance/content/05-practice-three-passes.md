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

**Paper R is position B.** The interval excludes 0 and its upper limit of 4.3 falls below 5. Minute: under the stated model, the data support a positive effect while every value in the reported interval is smaller than the threshold the service set. On that criterion, the evidence weighs against changing the advice.

Notice the ranking by *p*-value would put P and R together at the top and Q at the bottom. The ranking by usefulness to the service puts R first, P second, and Q nowhere.

## Task two: work out what is missing

A press release states:

> A large trial has shown a statistically significant reduction in fasting glucose with the new meal-replacement programme (*p* = 0.004, n = 2400).

Write down what you can conclude, what you cannot, and the single most useful thing to ask for.

---

What you can conclude is thin. The data sit awkwardly with a true difference of zero, under the trial's model. That is very nearly everything the sentence supports.

What you cannot conclude is most of what a reader would take from it. You have no effect size, so "reduction" is a direction with no magnitude attached. With 1200 people in each group a difference of about 1.3 mg/dL would already clear the 0.05 line, so *p* = 0.004 does not tell you whether the difference is below or above the service's threshold. The word *large* in the first clause describes the trial, and a reader's eye moves it onto the effect.

The single most useful thing to ask for is the effect estimate with its confidence interval, in mg/dL. One line of that kind settles the position question immediately, and no *p*-value ever will. The methodological literature makes the same request in general form: read the size of the estimate and the confidence limits, and treat which side of 0.05 the *p*-value fell on as the least informative part of the report.

## Task three: run it forwards

The service is now designing its own trial. It has agreed on the 5 mg/dL threshold and wants an 80% probability that the lower limit of its 95% interval will exceed 5 mg/dL if the true difference is 9.0 mg/dL. Use the same known-spread normal approximation as the rest of the lesson, with a within-group spread of 16 mg/dL.

1. How large must each group be to meet that 80% target?
2. What happens to that plan if the true difference is 3.0 mg/dL instead?

---

**Part 1.** The future estimate is random. Its lower limit is the observed estimate minus 1.96 standard errors, so designing around the expected estimate of 9.0 mg/dL would give only about a 50% chance of clearing 5 mg/dL. The design also needs the standard-normal quantile for the target probability, $z_{0.80} \approx 0.84$.

For an 80% chance that the lower limit exceeds 5, the true difference must clear the threshold by $1.96 + 0.84 = 2.80$ standard errors. Therefore the standard error target is

$$
\mathrm{SE} \leq \frac{9.0 - 5.0}{1.96 + 0.84} \approx 1.43\ \mathrm{mg/dL}.
$$

**PREM-STA-006** gave the standard error of a difference between two equal groups of $n$ as the within-group spread times $\sqrt{2/n}$, which here is $16\sqrt{2/n}$. Substitution gives

$$
n \geq 2\left(\frac{16(1.96 + 0.84)}{9.0 - 5.0}\right)^2 \approx 251.2.
$$

Round up to **252 people per group**. Check it: at 252 per group the standard error is about 1.43 mg/dL, the expected lower limit is about 6.21 mg/dL, and the probability that the observed lower limit exceeds 5 mg/dL is about 80% under the assumed true difference, spread and normal model. This is an operating probability, not a promise about one realised study.

**Part 2.** If the true difference is 3.0 mg/dL, position A would be an error rather than the intended conclusion. A random finite sample can still return it, so “no sample size will ever do so” would be false. With 252 per group the probability is about 0.04% under these assumptions. As the groups grow, that error probability approaches zero and the interval increasingly tends to fall below 5.

The 252-per-group design is not symmetric: if the true effect is 3.0 mg/dL, it has only about a 29% chance of putting the whole 95% interval below 5. To obtain an 80% chance of position B at a true difference of 3.0 mg/dL, the same calculation uses the 2.0 mg/dL gap and requires about **1005 people per group**.

That is the honest relationship between design and importance. Sample size buys precision and changes the probabilities of the possible interval positions. It cannot move the true effect across the line or guarantee the position returned by one random study.

:::{source-note}
:claims: claim-report-estimates-and-intervals, claim-size-decides-significance
:sources: source-p-value-misinterpretations

The methodological guide supports the recommendation in task two, that interpretation demands the size of the effect estimate and the confidence limits and not merely which side of the conventional cut-off a *p*-value fell on, and it supports the point behind the 1.3 mg/dL figure, that minor effects reach statistical significance when a study is large. The three papers, the press release, the service and every number in the tasks are invented for teaching, and the sample-size arithmetic is this lesson's own.
:::
