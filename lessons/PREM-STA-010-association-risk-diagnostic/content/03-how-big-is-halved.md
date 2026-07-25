# What a halving is worth at two baselines

Two press releases land on the same desk. Each says a programme halves the risk of an outcome. Both are true. One of them is worth rearranging a clinic for and the other is close to nothing, and the sentence they share cannot tell you which is which.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The two programmes, the trial, and every count below are invented so the arithmetic is clean. They describe no real intervention and support no clinical decision.
:::

## The same relative change, twice

A relative change is a ratio, so it says nothing about where it started. Fix the ratio at one half and vary the starting point, which is called the **baseline risk**: the risk in the group that did not get the programme.

| Programme | Baseline risk | Risk with programme | Relative reduction | Risk difference |
| --- | ---: | ---: | ---: | ---: |
| A | 24.0% | 12.0% | 50% | 12.0 per 100 |
| B | 0.8% | 0.4% | 50% | 0.4 per 100 |

Programme A spares 12 people in every 100. Programme B spares 4 people in every 1,000. The headline is identical and the absolute gap between them is a factor of thirty.

This is the reason a relative measure travels so well and misleads so often. Clinicians tend to judge an intervention more effective when its result is presented in relative terms than when the same result is given in absolute terms. The arithmetic never lied; the reader supplied a baseline that was not there.

## Turning the difference into people

The risk difference already counts people, and one more step makes the count concrete.

:::{definition}
:id: definition-number-needed-to-treat

**Number needed to treat.** The number of people who would have to receive the intervention instead of the comparison, over the stated period, for one additional person to avoid the outcome. It is the reciprocal of the risk difference.

$$\text{NNT} = \frac{1}{\text{risk difference}}.$$

Programme A: 1 / 0.12 = 8.33, so about 9 people. Programme B: 1 / 0.004 = 250 people. The two halvings are 9 and 250.
:::

Three things ride along with any number needed to treat, and quoting one without them is how the measure gets abused.

- **A baseline.** Change the baseline risk and the number moves, even when the relative effect is fixed. The table above is that sentence in numbers.
- **A time period.** Nine people over one year and nine people over ten years are different claims. A number needed to treat with no time attached is unfinished.
- **A comparison.** "Instead of what?" Usual care, a different drug, and nothing at all give three different answers.

When the outcome being counted is a harm the programme causes, the same reciprocal is usually called a number needed to harm. It is the same arithmetic pointed at an unwanted outcome.

## A worked case: the meal-timing programme trial

The dinner-timing cohort could not support a causal claim, so suppose the service ran the obvious next study. Stipulate a randomised trial: 1,000 adults with type 2 diabetes, 500 assigned to a structured evening-meal-timing programme and 500 to usual care, with a single yes-or-no outcome recorded at twelve months.

:::{worked-example}
:id: worked-example-trial-effect-size

**The table.** Of the 500 on usual care, 130 had the outcome. Of the 500 in the programme, 80 did.

| Arm | Outcome | No outcome | People |
| --- | ---: | ---: | ---: |
| Usual care | 130 | 370 | 500 |
| Programme | 80 | 420 | 500 |

**Step 1. Risks.** Usual care: 130/500 = 0.260. Programme: 80/500 = 0.160.

**Step 2. Risk difference.** 0.260 − 0.160 = 0.100, which is 10 people per 100 over twelve months.

**Step 3. Risk ratio.** 0.160 / 0.260 = 0.615.

**Step 4. Relative reduction.** 1 − 0.615 = 0.385, so a 38.5 per cent relative reduction.

**Step 5. Number needed to treat.** 1 / 0.100 = 10. About 10 adults would join the programme instead of usual care for one additional person to avoid the outcome within twelve months.

**Step 6. Odds ratio, for comparison.** Odds on usual care are 130/370 = 0.351; in the programme, 80/420 = 0.190. The ratio is 0.190 / 0.351 = 0.542. The outcome is common here too, so the odds ratio again sits further from 1 than the risk ratio of 0.615.

**Answer.** In this invented trial the programme cut the twelve-month risk from 26.0 per cent to 16.0 per cent: a reduction of 10 per 100, a relative reduction of 38.5 per cent, and about 10 people treated for one additional person to avoid the outcome.
:::

Read step 4 and step 5 side by side. "Cuts the risk by nearly forty per cent" and "ten people for one avoided outcome" describe one result, and only the second tells a clinic how many appointments buy how much.

## What the cohort cannot say

The trial supports a number needed to treat because people were assigned to the arms. The sixty-row cohort does not, and the distinction is worth stating plainly.

:::{misconception}
:id: misconception-nnt-from-observation

**The claim.** The cohort's risk difference is 30 per 100, so 1 / 0.30 gives about 3.3, and roughly three people would need to move their dinner earlier for one fewer high reading.

**Why it appeals.** The arithmetic is legal. The reciprocal of 0.30 really is 3.33, and the sentence has the same shape as the trial's.

**What is actually true.** A number needed to treat is a statement about what an intervention would do, and it only means anything if the difference between the groups was produced by the intervention. In the cohort nobody assigned dinner times. People who eat late may differ in shift work, medication timing, sleep, and much else, and [From correlation to a causal claim](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007) is the lesson that catalogues those routes. The 30 per 100 is a description of two groups that already existed.

**The repair.** Before computing a reciprocal, ask who decided which group each person was in. If the answer is "nobody, we recorded it", report the risk difference and stop. Call it an association and leave the causal sentence unwritten.

**Where this reappears.** [Regression and model fit](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-011) shows what adjusting for other variables can and cannot repair, and the block's final lesson asks whether an effect of this size should change anything at all.
:::

:::{check}
:id: check-baseline-and-nnt
:kind: retrieval

Work these without looking back.

1. A trial reports a risk difference of 0.025 over two years. What is the number needed to treat, and what phrase must accompany it?
2. A drug halves an outcome whose baseline risk is 40 per cent. Another halves an outcome whose baseline risk is 2 per cent. Which has the smaller number needed to treat, and by roughly what factor?
3. Why can a relative reduction be quoted without a baseline while an absolute reduction cannot?
:::

The first is 1 / 0.025 = 40 people, over two years, compared with whatever the control arm received. In the second, halving 40 per cent gives a difference of 0.20 and a number needed to treat of 5; halving 2 per cent gives 0.01 and 100. The factor is twenty, the same factor as the baselines. The third has a one-line answer: a relative reduction is a ratio and the baseline cancels out of it, which is exactly the information a reader needs and does not get.

:::{source-note}
:claims: claim-report-both-absolute-and-relative, claim-nnt-is-reciprocal-of-risk-difference, claim-effect-measures-from-a-table, claim-odds-ratio-diverges-when-events-common
:sources: source-arr-rrr-nnt, source-nnt-25-years, source-consort-effect-sizes, source-odds-versus-risk

The absolute-and-relative methods paper supports the definitions of absolute and relative risk reduction, the finding that one relative reduction corresponds to very different absolute reductions across baselines, the reported tendency of clinicians to overestimate an effect presented in relative terms, and the number needed to treat as the reciprocal of the absolute risk reduction. The review of that measure supports its dependence on the follow-up period and on baseline risk, and the parallel measure for harms. The reporting guideline supports presenting both absolute and relative effect sizes. The odds-and-risk paper supports the comparison of the odds ratio with the risk ratio in step 6. Both programmes, the trial, and every count are invented.
:::
