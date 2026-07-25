# Two questions the table has not answered

Sixty adults with type 2 diabetes took part in the dinner-timing study. Thirty ate their last meal well before sleep, thirty ate late, and each gave one next-morning fasting glucose reading. Sorted against a cut of 140 mg/dL, chosen for these lessons only so there is something to count, the table looks like this.

| Group | Reading 140 mg/dL or above | Reading below 140 mg/dL | People |
| --- | ---: | ---: | ---: |
| Late dinner | 21 | 9 | 30 |
| Early dinner | 12 | 18 | 30 |
| All sixty | 33 | 27 | 60 |

Lesson 08 attached a *p* value to the difference behind that table. Lesson 09 asked what the study might have missed. Neither of them said how large the thing is, and neither said what would happen if somebody built a test to spot it.

Those are this lesson's two questions, and they turn out to be the same question twice.

- **How big?** Twenty-one against twelve can be reported as a gap of 30 people per 100, or as a 1.75-fold change, or as an odds ratio of 3.5. Every one of those is arithmetically correct. They give a reader three very different impressions.
- **How would a test behave?** Suppose a cheap meter could flag a high morning reading in seconds. How often would it be right, and would the answer be the same in a diabetes clinic and at a community health fair?

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The cohort, the 140 mg/dL cut, the meter, the trial, and every count in this lesson are invented for teaching. They describe no real patient, no real device, and no real study, and nothing here supports advice about meal timing or testing.
:::

## Five words that mean something narrower here

This lesson borrows five ordinary words and gives each of them a job with sharp edges. Read the second column before the arithmetic starts.

| Word | Everyday sense | Sense used here |
| --- | --- | --- |
| risk | danger, something to avoid | the probability of a stated outcome in a stated group over a stated period, whether the outcome is welcome or not |
| odds | a betting quote, "the odds are good" | the probability an event happens divided by the probability it does not, so cases per non-case |
| sensitivity | being easily affected or easily upset | the share of people who have a condition whose test picks it up |
| specificity | being detailed or particular | the share of people without the condition whom the test correctly leaves alone |
| positive | good news | the test fired, which for most tests is the result nobody wants |

The last row causes real trouble at a bedside. A positive result on a screening test is a worrying result, and the word carries the opposite feeling. Say "the test fired" in your head until the reflex fades.

One more word arrives with a lesson attached. **Sensitivity analysis**, in [Type I and II errors, power, and multiplicity](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-009) and in [Using scientific models without outrunning their limits](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-010), means rerunning a result under different assumptions to see whether it holds. That is a different idea from the sensitivity of a test, and the two never appear in the same sentence in this lesson.

## What you already need

Everything below is built from conditional probabilities, and [Probability foundations](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-004) established the one fact that matters. P(A given B) and P(B given A) share a numerator and divide it by different totals, so they are different numbers answering different questions. That lesson worked a screening example and then handed the named measures forward to this one. Here they get their names.

:::{check}
:id: check-name-the-denominator
:kind: diagnostic

Answer all four from the sixty-row table before reading on.

1. Of the thirty late diners, what share read 140 mg/dL or above?
2. Of the thirty-three people who read 140 or above, what share ate late?
3. One of those two numbers describes a group of people defined by their behaviour. Which one?
4. Suppose the study had recruited 50 late diners and 10 early diners, with the same shares inside each group. Which of the two answers would move?
:::

The first is 21/30 = 0.70. The second is 21/33 = 0.64. The first divides by a group defined by behaviour, the second by a group defined by the reading. With 50 late diners and 10 early ones the first stays at 0.70, since it is computed inside the late group. The second becomes 35/39 = 0.90, because its denominator is built out of both groups and the mix changed. Hold on to that asymmetry. The whole second half of this lesson is one long consequence of it.

## Recovery route

If question 4 was guesswork, go back to [Probability foundations](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-004) and rework its two screening clinics before continuing. Then come back and try this habit on every number below:

- Say the denominator out loud before the fraction.
- Ask whether the denominator was set by the people or by the test.
- Ask whether the answer would move if the study recruited a different mix.

Nothing here is timed, and there is no penalty for taking the detour.

## Scope for this lesson

You will build effect measures and diagnostic measures from counts in a two-by-two table and read what each one promises. You will not meet confidence intervals for these measures, hazard ratios, survival analysis, receiver operating characteristic curves, or the choice of a cut-off. [Regression and model fit](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-011) takes up adjusted effects, and the block's closing lesson asks the question no formula here can answer: whether an effect of a given size should change what anyone does. This lesson is educational and confers no clinical authority.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-diagnostic-measures-are-conditionals
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-screening-predictive-values

The two methods papers support reading a risk as the probability of an outcome in a group, odds as the ratio of that probability to its complement, and the separation of difference measures from ratio measures. The screening review supports the statement that a test's detection measures and its predictive values are conditional probabilities pointing in opposite directions. The cohort, the cut, and every count above are invented.
:::
