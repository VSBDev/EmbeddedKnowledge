# The same meter in a different room

The diabetes service is asked to take the meter to a community health fair. Same device, same firmware, same 90 per cent and 85 per cent. The people walking past the table are different, and that is enough to change what a beep means.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The meter, the health fair, and every count below are invented. Nothing here describes a real screening programme or supports any decision about testing.
:::

## Prevalence, and what it reaches

**Prevalence** is the share of a defined population that has the condition at the time of interest, a term [Choosing a study design](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-004) already established and this lesson adopts unchanged. In the diabetes clinic it was 40 per cent. Among the general adults who stop at a health fair table, stipulate 4 per cent.

Rebuild the table from the outside in, exactly as before. Ten thousand people, 4 per cent gives 400 with the condition and 9,600 without. Ninety per cent of 400 is 360, leaving 40. Eighty-five per cent of 9,600 is 8,160, leaving 1,440.

| | Laboratory at or above 140 | Laboratory below 140 | All |
| --- | ---: | ---: | ---: |
| Meter fires | 360 | 1,440 | 1,800 |
| Meter quiet | 40 | 8,160 | 8,200 |
| All | 400 | 9,600 | 10,000 |

Check the device first. Sensitivity is 360/400 = 0.90. Specificity is 8,160/9,600 = 0.85. Both are untouched, because each divides inside a single column and the columns are the only thing the change in population touched.

Now the two row-wise measures.

$$\text{PPV} = \frac{360}{1{,}800} = 0.20, \qquad \text{NPV} = \frac{8{,}160}{8{,}200} = 0.995.$$

A beep at the health fair carries a 20 per cent probability of a high laboratory value. The same beep in the clinic carried 80 per cent. Four out of five people who leave the fair worried have nothing to be worried about, and the meter behaved identically in both rooms.

:::{chart} ../charts/predictive-values-by-prevalence.chart.json
:::

Look at what moved. The false positives are the mechanism: 900 in the clinic and 1,440 at the fair, drawn from a much larger pool of people without the condition, while the true positives fell from 3,600 to 360. The fired-test column filled up with the wrong people.

The negative predictive value moved the other way, from 0.927 to 0.995. A quiet meter is worth more at the health fair than in the clinic. That is the same arithmetic and it is easy to forget, because the alarming direction gets all the attention.

## The error, named

:::{misconception}
:id: misconception-sensitivity-read-as-ppv

**The claim.** The meter picks up 90 per cent of high readings, so a person whose meter fired has about a 90 per cent chance of a high reading.

**Why it appeals.** Both sentences use the same three ideas in a different order, and English does not mark the swap. The first is a property of the device and is stable. The second feels like a restatement of it.

**What is actually true.** Sensitivity is P(test fires given condition present) and positive predictive value is P(condition present given test fires). They share the true-positive cell and divide it by different totals: 4,000 against 4,500 in the clinic, 400 against 1,800 at the fair. Formal logic calls treating one as the other confusion of the inverse, and [Probability foundations](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-004) met it before either measure had a name. Here it turns 0.90 into 0.80 in one room and 0.20 in the other.

**The repair.** When a number is attached to a test, ask which of the two questions it answers. "Out of everyone with the condition" describes the device. "Out of everyone whose test fired" describes the patient. Then ask how common the condition is where the test is being used, because that is the only thing standing between the two answers.

**Where this reappears.** Every time a test moves from the population it was validated in to a population with a different prevalence. A test written up as excellent in a specialist clinic can produce mostly false alarms in general screening without a single figure in its validation paper being wrong.
:::

## Why the direction of the shift is predictable

You do not have to rebuild a table to know which way a predictive value will move. Odds from scene 2 do the work in one line.

Start with the odds that a person walking up has the condition. In the clinic that is 0.40 / 0.60 = 0.667. At the fair it is 0.04 / 0.96 = 0.0417. A fired test multiplies those odds by a fixed factor, the sensitivity divided by one minus the specificity, which here is 0.90 / 0.15 = 6.

- Clinic: 0.667 × 6 = 4.0, and converting back, 4.0 / 5.0 = 0.80.
- Fair: 0.0417 × 6 = 0.25, and 0.25 / 1.25 = 0.20.

The multiplier belongs to the device and never moves. The starting odds belong to the population. A multiplier of 6 cannot lift starting odds of 0.0417 into anything confident, which is why the same device is a reasonable triage step in one room and a false-alarm generator in the next.

## Accessibility and alternatives

The chart carries no number that is missing from the prose. Its four bars are the positive predictive value in the clinic at 80.0 per cent and at the fair at 20.0 per cent, then the negative predictive value in the clinic at 92.7 per cent and at the fair at 99.5 per cent, with sensitivity fixed at 90 per cent and specificity at 85 per cent throughout. The renderer emits those values as a data table beside the picture, and the chart's long description states them in sentences.

:::{callout}
:kind: accessibility

Nothing in this lesson depends on colour, position, or the shape of a bar. Every table can be read row by row, every fraction is written out with its numerator and denominator, and the mathematics displays restate in symbols what the sentence before them says in words. A learner working entirely from text or from a screen reader can complete every task, including the mastery check.
:::

:::{check}
:id: check-prevalence-direction
:kind: retrieval

Predict before you compute.

1. The service takes the meter to a specialist clinic where 70 per cent of samples are at or above the cut. Will the positive predictive value be above or below 0.80, and will the negative predictive value be above or below 0.927?
2. Compute both, using 10,000 people, a sensitivity of 0.90, and a specificity of 0.85.
3. Which two of the four measures did not move?
:::

Prevalence rose, so the positive predictive value rises and the negative predictive value falls. Building it: 7,000 with the condition and 3,000 without; 6,300 true positives and 700 missed; 2,550 true negatives and 450 false positives. Fired tests total 6,750, so PPV = 6,300/6,750 = 0.933. Quiet tests total 3,250, so NPV = 2,550/3,250 = 0.785. Sensitivity and specificity are still 0.90 and 0.85.

:::{source-note}
:claims: claim-predictive-values-depend-on-prevalence, claim-diagnostic-measures-are-conditionals
:sources: source-screening-predictive-values

The screening review supports the statement that predictive values depend on the prevalence of the target condition in the group tested while sensitivity and specificity are conditioned on a person's true state, and it names the reversal of the two conditionals confusion of the inverse. The meter, both populations, the chart, and every count are invented.
:::
