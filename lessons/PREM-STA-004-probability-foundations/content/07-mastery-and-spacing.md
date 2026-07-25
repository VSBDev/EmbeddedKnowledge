# Show that the denominator is under control

The mastery check runs on a table you have not seen, so that nothing can be answered from memory of the study. Five items, retakeable, feedback after the attempt. Work each with the table in front of you and a pencil; nothing here needs software.

An invented clinic audit records 80 adults with type 2 diabetes over one morning, noting whether each took an evening walk the night before and whether the morning fasting reading came in at or above 140 mg/dL.

| Group | Reading 140 mg/dL or above | Reading below 140 | People |
| --- | ---: | ---: | ---: |
| Took an evening walk | 15 | 25 | 40 |
| Did not | 28 | 12 | 40 |
| All eighty | 43 | 37 | 80 |

**Illustrative teaching example, not medical advice.** The audit is invented. It supports no claim about evening walking, and the 140 mg/dL cut remains an arbitrary teaching threshold.

The five items ask you to:

1. combine two events with the addition rule, keeping the overlap out of the total exactly once;
2. compute a conditional probability whose conditioning event is the reading and not the behaviour;
3. test whether two events in the table are independent and then apply whichever multiplication form your test permits;
4. read a screening sentence and say which conditional it actually reports;
5. decide what a run of like results does to the probability of the next independent one.

Award yourself nothing for a right number with the wrong denominator. Every item is scored on the reasoning as much as the arithmetic, and the rubrics say so explicitly.

## Recovering from a miss

Each item's feedback names the rule that would have produced the correct answer and points at the scene that teaches it. A miss on the conditional items sends you back to the two fractions in scene 1 and the definition in scene 3; a miss on the independence item sends you to the product test in scene 3; a miss on the run item sends you to the shortfall arithmetic in scene 2. Retake as often as you want. Nothing is timed.

## Spacing this so it survives

Probability rules fade quickly because they feel obvious while you are reading them. Three deliberate returns will hold them:

- **Within two days.** Reconstruct the sixty-person study table from memory, then compute $P(H \mid L)$ and $P(L \mid H)$ and say in a sentence why they differ.
- **Within two weeks.** Take any screening figure you meet in reading or teaching, write down what it conditions on, and state what else you would need to answer the patient's version of the question.
- **When lesson 08 arrives.** Before reading it, write down what you expect a $p$ value to be conditioned on. Lesson 08 will tell you whether you were right, and the whole misreading it corrects is the inversion you have already practised here.

:::{source-note}
:claims: claim-probability-as-long-run-frequency, claim-complement-and-addition, claim-conditional-probability-definition, claim-independence-product-rule, claim-conditional-asymmetry-screening, claim-short-run-compensation-error
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-law-of-large-numbers, source-eom-conditional-probability, source-eom-independence, source-screening-predictive-values, source-resident-probability-biases

The reference works support the long-run reading of a probability, the complement and addition rules, the definition of conditional probability, and independence as the product condition. The screening review supports the separation between a measure conditioned on a person's true state and one conditioned on a test result. The survey of medical residents supports treating expected short-run correction as a documented reasoning error among clinicians. The audit table is invented.
:::
