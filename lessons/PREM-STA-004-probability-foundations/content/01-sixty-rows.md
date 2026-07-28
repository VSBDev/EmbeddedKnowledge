# Sixty rows arrive

The dinner-timing study has stopped collecting. What comes back is a spreadsheet of sixty rows, one for each adult with type 2 diabetes who took part: thirty whose last meal sat well before sleep, thirty who ate late. Beside each row is one next-morning fasting glucose reading in mg/dL.

Someone sorts the rows against a cut of 140 mg/dL, chosen for this lesson only so that there is something to count, and reads out the headline.

| Group | Reading 140 mg/dL or above | Reading below 140 mg/dL | People |
| --- | ---: | ---: | ---: |
| Late dinner | 21 | 9 | 30 |
| Early dinner | 12 | 18 | 30 |
| All sixty | 33 | 27 | 60 |

Twenty-one against twelve. Before anything follows from that, a careful reader wants to know how often a split that lopsided would turn up if dinner timing had nothing to do with morning glucose.

Putting a defensible number on "how often" is the job of the whole block. Lesson 06 asks why a repeat of this study would land somewhere else; lesson 08 attaches a figure to the question and says exactly what that figure claims. This lesson builds the machinery underneath both: how to attach a number to an event, how to combine two events, and how to tell apart two questions that sound alike and have different answers.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The cohort, the readings, the 140 mg/dL cut, and every figure in this lesson are invented for teaching. They describe no real patient, support no claim about dinner timing, and set no clinical target.
:::

## What you already need

Every probability in this lesson is a count divided by a total. That is a part-to-whole fraction, and it is worth flagging that the word **proportion** is doing new work here. In [Ratios, proportions, and percentages](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-003) a proportion is a statement that two ratios are equal, as in a/b = c/d. From here on, a proportion is the second thing that word means in ordinary scientific speech: a part measured against the whole it came from, a number between 0 and 1. Both senses are standard. Only the second is used below.

:::{check}
:id: check-part-to-whole
:kind: diagnostic

Answer from the table, from memory of part-to-whole fractions, before reading on.

1. What fraction of all sixty participants had a reading of 140 mg/dL or above? Give it as a decimal.
2. What fraction of the thirty late-dinner participants had a reading of 140 mg/dL or above?
3. Of the thirty-three participants whose reading was 140 mg/dL or above, what fraction ate late?
4. Questions 2 and 3 both concern late dinners and high readings. Why are their answers different numbers?

Work all four before checking the routing below.
:::

The answers are 33/60 = 0.55, then 21/30 = 0.70, then 21/33 = 0.64 to two decimal places. They differ because each divides the same 21 people by a different whole. Question 2 asks about late diners; question 3 asks about high readings. If that landed, you are ready. If question 4 felt like a trick, it was not, and the distinction it points at is the one this lesson is built around.

## Recovery route

Rebuild the part-to-whole reading first. Work through [Ratios, proportions, and percentages](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-003), then come back and try this three-step habit on the table above:

- Name the group you are counting inside. That group is the denominator.
- Name the feature you are counting. Those people are the numerator.
- Say the fraction aloud as a sentence: "of the people who ..., this share also ...".

Nothing here is punitive and nothing is timed. Do not move on until you can produce all three fractions and say which whole each one used.

## Scope for this lesson

You will work with finitely many outcomes you can count. In the screening example you will use natural-frequency Bayes reasoning and calculate sensitivity, specificity, and both predictive values from a two-by-two table. You will not meet probability density, expectation and variance of a random variable, Bayes' theorem in its general algebraic form, combinations and permutations beyond simple counting, or the axioms in their measure-theoretic dress. Lesson 05 takes up distributions; lesson 10 develops how diagnostic measures are estimated and used in practice. The lesson is educational and confers no clinical authority.

:::{source-note}
:claims: claim-probability-as-long-run-frequency
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-law-of-large-numbers

The metrology standard and the two reference works support the reading of a probability as a number between 0 and 1 attached to an event, relatable to the relative frequency it settles toward over many repetitions under stable conditions, together with the recorded limits of that reading. Neither supports any statement about dinner timing or glucose; the cohort is invented.
:::
