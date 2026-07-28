# The sentence that swaps the denominator

"The screen picks up ninety per cent of cases, so if yours came back positive there is a ninety per cent chance you have it."

The first clause is a fact about the test. The second is a fact about the patient. Getting from one to the other requires the starting prevalence and the test's result pattern among people without the condition, and the two answers can differ widely. This scene works the arithmetic until the size of the error is impossible to mistake.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The screen below does not exist. Its performance figures and both clinic populations are stipulated so the arithmetic comes out cleanly. Nothing here describes any real test, condition, or clinic.
:::

## One screen, one clinic, ten thousand adults

Stipulate a screen for a condition that is often present before anyone looks for it, with two performance figures:

- Among people who have the condition, 90 per cent screen positive. This is the **sensitivity**: $P(\text{positive} \mid \text{condition}) = 0.90$.
- Among people who do not have it, 95 per cent screen negative. This is the **specificity**: $P(\text{negative} \mid \text{no condition}) = 0.95$, so 5 per cent screen positive in error.

Run it across 10,000 adults in a general walk-in clinic where 2 in 100 have the condition. This starting share is the **prevalence**, $P(\text{condition}) = 0.02$.

| | Has the condition | Does not have it | All |
| --- | ---: | ---: | ---: |
| Screens positive | 180 | 490 | 670 |
| Screens negative | 20 | 9,310 | 9,330 |
| All | 200 | 9,800 | 10,000 |

Every cell is forced. Two per cent of 10,000 is 200 with the condition and 9,800 without. Ninety per cent of 200 is 180 true positives, leaving 20 missed. Five per cent of 9,800 is 490 false positives, leaving 9,310 correctly cleared.

Read down the true-state columns first:

$$\text{sensitivity} = \frac{180}{200} = 0.90, \qquad
\text{specificity} = \frac{9{,}310}{9{,}800} = 0.95.$$

Sensitivity and specificity condition on whether the person has the condition. They do not yet answer either question asked after a result is known.

Now ask the patient's question. Of the 670 people holding a positive result, how many have the condition?

$$P(\text{condition} \mid \text{positive}) = \frac{180}{670} \approx 0.269.$$

This result-conditioned probability is the **positive predictive value**. It is about 27 per cent, against the 90 per cent sensitivity in the opening sentence. Notice what stayed put and what moved: both fractions have 180 on top. Sensitivity divides by the 200 people with the condition; positive predictive value divides by the 670 people with a positive result. It is the same swap of denominators that made $P(H \mid L)$ and $P(L \mid H)$ different numbers in the study table, and here it changes the answer by a factor of more than three.

The other result-conditioned measure is the **negative predictive value**, the share of people with a negative result who do not have the condition:

$$P(\text{no condition} \mid \text{negative}) = \frac{9{,}310}{9{,}330} \approx 0.998.$$

The complement rule also says that if 0.269 of positives have the condition, then $1 - 0.269 = 0.731$ of them do not. In this invented table, 490 of the 670 positive results are false positives. The table does not say whether anyone experiences anxiety or receives follow-up testing.

## Bayes reasoning in natural frequencies

The table is a **natural-frequency** representation: probabilities are applied to a convenient whole and written as counts of people. The Bayes step is not to swap the words around a conditional. It is to build the whole table and then change which total supplies the denominator.

1. Start with prevalence to split 10,000 people into 200 with the condition and 9,800 without it.
2. Apply sensitivity to the first column and specificity to the second.
3. Read sensitivity and specificity down the true-state columns.
4. Reverse direction by reading positive and negative predictive values across the result rows.

That reversal through the full table is Bayes reasoning in natural-frequency form. It gives all four measures from the same four cells:

- sensitivity = true positives / everyone with the condition;
- specificity = true negatives / everyone without the condition;
- positive predictive value = true positives / everyone with a positive result;
- negative predictive value = true negatives / everyone with a negative result.

The table makes the denominators visible, which is why it repairs the inversion more reliably than memorising four abbreviations.

## The same test, a different room

Move the screen down the corridor to a clinic that sees people already flagged as higher risk, where 20 in 100 have the condition. For this invented comparison, change only how common the condition is and hold the two conditional performance rates fixed.

| | Has the condition | Does not have it | All |
| --- | ---: | ---: | ---: |
| Screens positive | 1,800 | 400 | 2,200 |
| Screens negative | 200 | 7,600 | 7,800 |
| All | 2,000 | 8,000 | 10,000 |

$$P(\text{condition} \mid \text{positive}) = \frac{1{,}800}{2{,}200} \approx 0.818,$$

while the negative predictive value is $7{,}600/7{,}800 \approx 0.974$.

The 90 per cent and the 95 per cent are unchanged here because the example holds them fixed by stipulation. In real applications, rates conditioned on true state are not fixed test attributes: estimates can change with the threshold, case spectrum and subgroup composition, and reference-standard procedures, so they must fit the population and setting where they are used. Within this bounded comparison, the answer to the patient's question moved from 0.269 to 0.818 because that question conditions on the test result, and how many positives are true depends on how many people had the condition to begin with.

You can get both answers straight from the definition, without a table. In the walk-in clinic,

$$P(\text{positive}) = 0.90 \times 0.02 + 0.05 \times 0.98 = 0.018 + 0.049 = 0.067,$$

and $P(\text{condition} \mid \text{positive}) = 0.018 / 0.067 \approx 0.269$. In the higher-risk clinic the same two lines give $0.18 + 0.04 = 0.22$ and $0.18 / 0.22 \approx 0.818$.

## Naming the error

:::{misconception}
:id: misconception-inverted-conditional

**The claim.** A test that detects 90 per cent of cases gives a positive result that is 90 per cent likely to be right.

**Why it appeals.** Both statements can be written with the same words in a different order, and English does not flag the swap. Formal logic calls it confusion of the inverse; the two conditional probabilities are treated as though they were one quantity.

**What is actually true.** $P(A \mid B)$ and $P(B \mid A)$ answer different questions and are equal only by coincidence. They share a numerator, $P(A \cap B)$, and divide it by different totals. In screening, the detection rate is conditioned on the disease; the probability that a positive result is correct is conditioned on the result and shifts with how common the condition is in the group being screened. The two-clinic comparison isolates that prevalence effect by holding the conditional performance rates fixed. Real performance estimates can also vary across thresholds, populations, and reference procedures.

**The repair.** Before you accept any probability attached to a test or a study, say the denominator out loud. "Out of everyone who has the condition" and "out of everyone who tested positive" are different rooms of people. If the sentence does not tell you which room, it has not told you the probability.

**Where this reappears.** Twice more in this block, in higher-stakes clothing. Lesson 10 develops how these screening measures are estimated, compared, and applied. Lesson 08 meets the same inversion in the study's own result.
:::

## The inversion this block is really aiming at

Suppose a later analysis of the dinner-timing study reports a two-sided $p$ value of about 0.03. This is a hypothetical value for interpretation, not a number computed from the count table or any other inputs in this lesson. Here only its direction matters; lesson 08 teaches how such a value is obtained.

A $p$ value is computed by assuming the tested hypothesis and the rest of the statistical model are correct, then asking how extreme the observed result is under that assumption. Its conditioning event is the hypothesis. It is therefore not the probability that the hypothesis is true given the data, and reading it that way inverts the conditional exactly as the screening sentence did.

Two sentences, both about this hypothetical $p \approx 0.03$:

- "If dinner timing made no difference and the model held, a difference at least this large would come up about 3 times in 100 studies like this one." Correct in direction.
- "There is a 3 per cent probability that dinner timing makes no difference." Inverted, and no arithmetic in the study supports it.

The screening tables above are the reason the second sentence is not a small slip. Moving from one conditional to the other requires knowing how common the conditioning event was to start with, and the swap changed 0.90 into 0.269 in one clinic and 0.818 in another.

:::{source-note}
:claims: claim-conditional-probability-definition, claim-conditional-asymmetry-screening, claim-p-value-conditional-direction
:sources: source-sep-probability-interpretations, source-eom-conditional-probability, source-screening-predictive-values, source-p-value-misinterpretations

The reference works support the definition of conditional probability. The screening review supports the separation of detection-rate measures, which condition on the person's true state, from predictive values, which condition on the test result and depend on how common the condition is in the tested group. It also supports the caveat that test-performance estimates are tied to threshold and applicable sample, and it names the reversal confusion of the inverse. The guide to misinterpretations supports the statement that a $p$ value assumes the tested hypothesis rather than giving its probability. The screen, both clinics, all counts, and the study are invented.
:::
