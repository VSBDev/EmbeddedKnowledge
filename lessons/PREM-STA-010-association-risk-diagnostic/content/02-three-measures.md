# Three ways to say how big

Start from the two counts the study cares about. Among the late diners, 21 of 30 read 140 mg/dL or above. Among the early diners, 12 of 30 did. Every measure in this scene comes out of those four numbers and nothing else.

:::{definition}
:id: definition-risk

**Risk.** The probability that a stated outcome occurs in a stated group over a stated period, written as a share of that group. Here the outcome is a reading of 140 mg/dL or above on the recorded morning, and the two groups are the late and early diners.

$$\text{risk}_{\text{late}} = \frac{21}{30} = 0.70, \qquad \text{risk}_{\text{early}} = \frac{12}{30} = 0.40.$$

The word carries no verdict about harm. A risk of recovery is a risk in this sense, and so is a risk of a normal reading.
:::

Notice that a risk is a conditional probability with the group named in the condition. The late-diner risk is P(high reading given late dinner). Nothing new has been introduced; the word is shorter than the notation.

## The difference and the ratio

Two ways to compare 0.70 with 0.40 present themselves, and they are the pair every clinical paper reports.

:::{definition}
:id: definition-risk-difference-and-ratio

**Risk difference.** One risk subtracted from the other. It is an *absolute* measure: it keeps the units of the outcome, so it says how many people per hundred the comparison moves.

$$\text{RD} = 0.70 - 0.40 = 0.30, \text{ or } 30 \text{ people per } 100.$$

**Risk ratio.** One risk divided by the other. It is a *relative* measure: the units cancel and it says how many times as large one risk is.

$$\text{RR} = \frac{0.70}{0.40} = 1.75.$$
:::

The two answers describe one comparison. Thirty people per hundred, and 1.75 times as many. Both are honest, and a reader given only one of them is missing something. Reporting guidance for randomised trials asks for both whenever the outcome is a yes-or-no event, precisely because either alone can leave a false impression.

Say each one as a sentence and the difference in what they claim becomes audible:

- Risk difference: "For every 100 people like the late diners, about 30 more read 140 or above than among 100 people like the early diners."
- Risk ratio: "The late diners' share was 1.75 times the early diners' share."

The second sentence would be identical if the two shares had been 0.007 and 0.004. The first sentence would collapse to less than one person per 100. Scene 3 is built on that gap.

## Odds, and why anyone bothers

The other way to express how often something happens compares an event to its absence instead of to the whole group.

:::{definition}
:id: definition-odds

**Odds.** The probability that an event occurs divided by the probability that it does not. Counting people, it is cases per non-case.

$$\text{odds}_{\text{late}} = \frac{21}{9} = 2.33, \qquad \text{odds}_{\text{early}} = \frac{12}{18} = 0.67.$$

A risk and an odds carry the same information and convert freely: odds = risk / (1 − risk), and risk = odds / (1 + odds). Check the late group: 0.70 / 0.30 = 2.33, and 2.33 / 3.33 = 0.70.
:::

Odds of 2.33 mean seven high readings for every three that are not, since 21 to 9 reduces to 7 to 3. This is the sense a bookmaker uses when quoting "seven to three", and it is the only feature of the gambling sense that survives. Nothing about a stake or a payout comes with it.

:::{definition}
:id: definition-odds-ratio

**Odds ratio.** The odds in one group divided by the odds in the other. From a two-by-two table it is the cross-product of the diagonals.

$$\text{OR} = \frac{21/9}{12/18} = \frac{2.33}{0.67} = 3.5, \qquad \frac{21 \times 18}{9 \times 12} = \frac{378}{108} = 3.5.$$
:::

## The number that looks twice as impressive

Line the two relative measures up. The risk ratio is 1.75 and the odds ratio is 3.5, exactly twice as large. They describe the same table, so at most one of them can be read the way a hurried reader reads it.

The odds ratio is the one that misleads, and the reason is mechanical. An odds divides by the people *without* the outcome, and that group shrinks as the outcome becomes common. Here the outcome is very common: 70 per cent and 40 per cent. When the outcome is rare, under about one in ten, the group without it barely changes and the two ratios come out close together. When events are common, the odds ratio sits further from 1 than the risk ratio and reads as a bigger effect than the table contains.

:::{worked-example}
:id: worked-example-cohort-measures

**Task.** Report the association between dinner timing and a high morning reading in the sixty-row cohort, using measures a reader cannot misread.

**Plan.** Fix the comparison direction, compute both group risks, report one absolute and one relative measure, then compute the odds ratio and label it without substituting it for the risk ratio.

**Step 1. Fix the four counts.** Late: 21 high, 9 not. Early: 12 high, 18 not.

**Step 2. Risks.** 21/30 = 0.70 and 12/30 = 0.40.

**Step 3. Absolute measure.** 0.70 − 0.40 = 0.30, which is 30 per 100 people.

**Step 4. Relative measure.** 0.70 / 0.40 = 1.75.

**Step 5. Odds ratio, and a label for it.** (21 × 18) / (9 × 12) = 3.5. Because 40 to 70 per cent is a long way from rare, record this as an odds ratio and do not describe it as "3.5 times the risk".

**Step 6. Say what kind of claim this is.** These are measures of **association**: the two variables moved together in this sample. [From correlation to a causal claim](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007) established that the pattern alone does not say why. The study observed dinner times and did not assign them, so nothing here licenses "eating late raises your reading by 30 per 100".

**Independent check.** Because the groups are the same size, the nine-person difference in high readings gives 9/30 = 0.30, matching the risk difference. The odds-ratio cross-product also reproduces 3.5.

**Answer.** In this invented cohort, 70 per cent of late diners and 40 per cent of early diners read 140 mg/dL or above: a risk difference of 30 per 100 and a risk ratio of 1.75, with an odds ratio of 3.5 reflecting how common the outcome is.

**Self-explanation.** Why does the odds ratio move much further from 1 than the risk ratio when the outcome is common in both groups?
:::

A note on direction, because this block has been careful about it. The variable the study recorded is the dinner-to-sleep interval in hours, so a *later* dinner is a *shorter* interval. Glucose rises as the interval shortens. Plotted against the interval the association is negative, and it was lesson 02 that turned that sign into a teaching point. The table above groups people instead of plotting the interval, which is why the arithmetic reads the intuitive way round. The underlying association has not changed sign.

:::{check}
:id: check-three-measures
:kind: retrieval

Cover the scene and answer from memory.

1. Which of the three comparison measures keeps the units of the outcome?
2. A study reports an odds ratio of 2.0 for an outcome that occurred in 3 per cent of the control group. Is the risk ratio likely to be close to 2.0, or well below it?
3. Odds of 0.25 correspond to what risk?
:::

The risk difference keeps the units. With a 3 per cent outcome the risk ratio will sit close to 2.0, because rare outcomes make odds and risks nearly the same. Odds of 0.25 give a risk of 0.25 / 1.25 = 0.20.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-odds-ratio-diverges-when-events-common, claim-report-both-absolute-and-relative
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-consort-effect-sizes

The odds-and-risk methods paper supports the definitions of risk and odds, the conversion between them, the definitions of the risk ratio and odds ratio, and the statement that the two ratios stay close when the outcome is rare and separate when it is common. The absolute-and-relative methods paper supports the distinction between difference and ratio measures. The reporting guideline supports the recommendation that trials present both absolute and relative effect sizes for a yes-or-no outcome. The cohort and every count are invented, and no source is offered for any statement about dinner timing.
:::
