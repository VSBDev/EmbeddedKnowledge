# The sentence that swaps the denominator

"The screen picks up ninety per cent of cases, so if yours came back positive there is a ninety per cent chance you have it."

The first clause is a fact about the test. The second is a fact about the patient. Getting from one to the other takes an assumption almost nobody says out loud, and in most screening settings that assumption is false by a wide margin. This scene works the arithmetic until the size of the error is impossible to mistake.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The screen below does not exist. Its performance figures and both clinic populations are stipulated so the arithmetic comes out cleanly. Nothing here describes any real test, condition, or clinic.
:::

## One screen, one clinic, ten thousand adults

Stipulate a screen for a condition that is often present before anyone looks for it, with two performance figures:

- Among people who have the condition, 90 per cent screen positive. That is $P(\text{positive} \mid \text{condition}) = 0.90$.
- Among people who do not have it, 95 per cent screen negative. That is $P(\text{negative} \mid \text{no condition}) = 0.95$, so 5 per cent screen positive in error.

Run it across 10,000 adults in a general walk-in clinic where 2 in 100 have the condition.

| | Has the condition | Does not have it | All |
| --- | ---: | ---: | ---: |
| Screens positive | 180 | 490 | 670 |
| Screens negative | 20 | 9,310 | 9,330 |
| All | 200 | 9,800 | 10,000 |

Every cell is forced. Two per cent of 10,000 is 200 with the condition and 9,800 without. Ninety per cent of 200 is 180 true positives, leaving 20 missed. Five per cent of 9,800 is 490 false positives, leaving 9,310 correctly cleared.

Now ask the patient's question. Of the 670 people holding a positive result, how many have the condition?

$$P(\text{condition} \mid \text{positive}) = \frac{180}{670} \approx 0.269.$$

Twenty-seven per cent, against the ninety per cent in the opening sentence. Notice what stayed put and what moved: both fractions have 180 on top. The first divides by the 200 people with the condition. The second divides by the 670 people with a positive result. It is the same swap of denominators that made $P(H \mid L)$ and $P(L \mid H)$ different numbers in the study table, and here it changes the answer by a factor of more than three.

The complement rule finishes the picture. If 0.269 of positives have the condition, then $1 - 0.269 = 0.731$ of them do not. Roughly seven in ten people holding a positive result from this screen are in for a scare, a repeat test, and no disease.

## The same test, a different room

Move the identical screen down the corridor to a clinic that sees people already flagged as higher risk, where 20 in 100 have the condition. Nothing about the test changes.

| | Has the condition | Does not have it | All |
| --- | ---: | ---: | ---: |
| Screens positive | 1,800 | 400 | 2,200 |
| Screens negative | 200 | 7,600 | 7,800 |
| All | 2,000 | 8,000 | 10,000 |

$$P(\text{condition} \mid \text{positive}) = \frac{1{,}800}{2{,}200} \approx 0.818.$$

The 90 per cent and the 95 per cent are untouched, because they are conditioned on the person's true state and the population mix cannot reach them. The answer to the patient's question moved from 0.269 to 0.818, because that question conditions on the test result, and how many positives are true depends on how many people had the condition to begin with.

You can get both answers straight from the definition, without a table. In the walk-in clinic,

$$P(\text{positive}) = 0.90 \times 0.02 + 0.05 \times 0.98 = 0.018 + 0.049 = 0.067,$$

and $P(\text{condition} \mid \text{positive}) = 0.018 / 0.067 \approx 0.269$. In the higher-risk clinic the same two lines give $0.18 + 0.04 = 0.22$ and $0.18 / 0.22 \approx 0.818$.

## Naming the error

:::{misconception}
:id: misconception-inverted-conditional

**The claim.** A test that detects 90 per cent of cases gives a positive result that is 90 per cent likely to be right.

**Why it appeals.** Both statements can be written with the same words in a different order, and English does not flag the swap. Formal logic calls it confusion of the inverse; the two conditional probabilities are treated as though they were one quantity.

**What is actually true.** $P(A \mid B)$ and $P(B \mid A)$ answer different questions and are equal only by coincidence. They share a numerator, $P(A \cap B)$, and divide it by different totals. In screening, the detection rate is conditioned on the disease and describes the test; the probability that a positive result is correct is conditioned on the result, describes the patient, and shifts with how common the condition is in the group being screened. This is why the same test can be reassuring in one clinic and misleading in another.

**The repair.** Before you accept any probability attached to a test or a study, say the denominator out loud. "Out of everyone who has the condition" and "out of everyone who tested positive" are different rooms of people. If the sentence does not tell you which room, it has not told you the probability.

**Where this reappears.** Twice more in this block, in higher-stakes clothing. Lesson 10 develops the screening measures properly and gives them their names. Lesson 08 meets the same inversion in the study's own result.
:::

## The inversion this block is really aiming at

The dinner-timing study will report a two-sided $p$ of 0.029. Lesson 08 unpacks what that number is; here, only its direction matters.

A $p$ value is computed by assuming the tested hypothesis and the rest of the statistical model are correct, then asking how extreme the observed result is under that assumption. Its conditioning event is the hypothesis. It is therefore not the probability that the hypothesis is true given the data, and reading it that way inverts the conditional exactly as the screening sentence did.

Two sentences, both about $p = 0.029$:

- "If dinner timing made no difference and the model held, a difference at least this large would come up about 3 times in 100 studies like this one." Correct in direction.
- "There is a 3 per cent probability that dinner timing makes no difference." Inverted, and no arithmetic in the study supports it.

The screening tables above are the reason the second sentence is not a small slip. Moving from one conditional to the other requires knowing how common the conditioning event was to start with, and the swap changed 0.90 into 0.269 in one clinic and 0.818 in another.

:::{source-note}
:claims: claim-conditional-probability-definition, claim-conditional-asymmetry-screening, claim-p-value-conditional-direction
:sources: source-sep-probability-interpretations, source-eom-conditional-probability, source-screening-predictive-values, source-p-value-misinterpretations

The reference works support the definition of conditional probability. The screening review supports the separation of detection-rate measures, which condition on the person's true state, from predictive values, which condition on the test result and depend on how common the condition is in the tested group, and it names this reversal confusion of the inverse. The guide to misinterpretations supports the statement that a $p$ value assumes the tested hypothesis rather than giving its probability. The screen, both clinics, all counts, and the study are invented.
:::
