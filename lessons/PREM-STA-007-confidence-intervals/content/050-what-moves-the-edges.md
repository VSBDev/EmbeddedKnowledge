# What moves the edges

An interval's width is the part people skip, and it carries most of the information about how good the study was.

The width is the margin of error twice over:

:::{equation}
:label: equation-interval-width

\text{width} = 2 \times (\text{multiplier}) \times (\text{standard error})
:::

Only two quantities appear. So only two things can move the edges: the multiplier, which you choose when you choose a confidence level, and the standard error, which the study's design and the biology hand you.

## Lever one: the confidence level

This is the lever that costs nothing and buys nothing. Keep the study exactly as it is, keep the estimate at 9.0 and the standard error at 4.13, and change only the multiplier.

| Level | Multiplier | Margin of error | Interval (mg/dL) | Width |
| --- | --- | --- | --- | --- |
| 90% | 1.645 | 6.79 | 2.2 to 15.8 | 13.6 |
| 95% | 1.960 | 8.09 | 0.9 to 17.1 | 16.2 |
| 99% | 2.576 | 10.64 | −1.6 to 19.6 | 21.2 |

Read down the last two columns and something uncomfortable appears. At 95% the interval clears zero. At 99% it does not: −1.6 is a negative number, so the 99% interval contains the possibility that late dinners go with *lower* morning glucose.

No new data arrived. Nobody measured anything again. The only thing that changed was how often the author wants the procedure to succeed in the long run, and asking for a better success rate means casting a wider net. Demand certainty about the method and you give up sharpness about the answer.

Keep checking intervals against zero; that check tells you which directions the study supports and it is the first thing to do with any reported effect. What this table takes the drama out of is the *verdict* people attach to it. Whether an interval clears zero depends on a level somebody chose, and ninety-five per cent is a habit rather than a law of nature. The next lesson will show you the same convention wearing a different costume.

## Lever two: the standard error

This is the lever that costs money and buys precision. The word arrives with baggage: the measurement lesson used *precision* for how closely one instrument's repeated readings agree. Here it means something wider, namely how tightly a whole study has pinned down the quantity it set out to estimate, and you read it straight off the interval's width. A perfectly repeatable glucose meter still gives an imprecise study if only thirty people were measured with it.

The standard error of a two-group difference has two inputs: how much people differ from each other within a group, and how many of them you recruited.

:::{investigation}
:id: investigation-what-a-bigger-study-buys

Work these three out before reading on. The estimate stays at 9.0 mg/dL and the level stays at 95%.

**A.** A repeat study recruits 120 people per group instead of 30, in a population with the same within-group standard deviation of 16 mg/dL. Compute the new standard error, then the new interval.

**B.** A different repeat keeps 30 per group but recruits from a narrower population, where the within-group standard deviation is 10 mg/dL. Compute that standard error and interval.

**C.** Which of the two repeats gives the tighter answer, and which one could a research team actually arrange?
:::

**A.** With 120 in each group, the standard error becomes 16 × √(1/120 + 1/120) = 16 × 0.1291 = 2.07 mg/dL. The margin of error is 1.96 × 2.07 = 4.06, so the interval runs from **4.9 to 13.1 mg/dL** and is 8.2 mg/dL wide.

:::{chart} ../charts/difference-interval-larger-study.chart.json
:::

Follow the standard error rather than the printed limits, because that is where the rule lives: 4.13 became 2.07, exactly half, since the group size sits under a square root and four times 30 is 120. Half the standard error is half the margin of error and so half the width, next to the 16.2 mg/dL you started with. The rule generalises and it is a harsh one. To halve an interval you need four times the sample, and to reach a tenth of the width you need a hundred times.

**B.** With a within-group standard deviation of 10 mg/dL and 30 people per group, the standard error is 10 × 0.2582 = 2.58 mg/dL. The margin of error is 1.96 × 2.58 = 5.06, so the interval runs from **3.9 to 14.1 mg/dL** and is 10.2 mg/dL wide.

**C.** Repeat A is tighter. It is also the only one a team can arrange. Recruiting more people is a budget decision. Making people less variable is not a decision at all, though a study can get part of the way there by measuring more carefully, by narrowing who is eligible, or by comparing each person with themselves. Those choices belong to the design lessons, and this is where their payoff finally becomes visible as a number.

## What a wide interval is telling you

A wide interval is not a broken result. It is an accurate report that the study was too small, or too noisy, or both, to pin the answer down.

The clinical-trials guidance makes this an argument for intervals in the first place. Where events are rare and estimates are shaky, it prefers reporting an interval precisely because the imprecision is then displayed instead of hidden. A summary that reports only which direction a study leant can be written from an interval spanning almost everything, and the reader will never know.

:::{check}
:id: check-predict-the-width
:kind: retrieval

Answer from the width formula alone, without arithmetic.

1. A trial reports a difference of 3.0 units with a 95% interval of 2.8 to 3.2. Roughly what is its standard error?
2. Two trials report identical estimates. One used 400 patients, the other 100, and both populations were equally variable. How do the two interval widths compare?
3. An author widens their interval from 95% to 99% and the interval starts to include zero. What changed about the evidence?
:::

The first interval has a width of 0.4, so the margin of error is 0.2 and the standard error is 0.2 / 1.96, which is about 0.10 units. The second pair differ by a factor of four in sample size, so their widths differ by a factor of two: the 400-patient trial's interval is half as wide. And in the third, nothing about the evidence changed. One estimate, one standard error, one dataset, and a different convention applied to it.

:::{source-note}
:claims: claim-width-depends-on-n-and-sd, claim-width-depends-on-level, claim-normal-975-quantile, claim-ich-e9-imprecision
:sources: source-nist-confidence-limits, source-nist-normal-table, source-ich-e9

The NIST/SEMATECH handbook supports the statements that the interval narrows as the sample size grows through the square-root term and widens with the sample standard deviation, and its normal table supplies the three multipliers used in the level comparison. The clinical-trials guidance supports the point that an interval is preferred where estimates are imprecise because it displays that imprecision. Every worked figure above is computed from this block's own cohort values.
:::
