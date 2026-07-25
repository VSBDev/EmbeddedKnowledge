# Practice with the props removed

Four problems, each with less help than the one before. Every study below is invented for teaching, and none describes a real trial or a real patient.

Work each one on paper before opening the feedback. The feedback tells you what was right, which idea explains the error, and what to do next.

Unless a problem says otherwise, use the same two-sided normal approximation and the same 1.96 interval multiplier as the worked example.

## Problem 1, with most of the work already done

An education trial compares two formats for teaching self-monitoring. Mean HbA1c at six months is 0.30 percentage points lower in the group given the structured format. The standard error of that difference is 0.15 percentage points. Alpha was fixed at 0.05 before recruitment.

Three of the four steps are filled in. Supply the missing one, then answer the question underneath.

- Null hypothesis: the true difference in mean HbA1c is 0 percentage points.
- Test statistic: $z = 0.30 / 0.15 = ?$
- Two-sided *p*: 0.046.
- 95 per cent interval: 0.30 plus or minus 1.96 x 0.15, giving 0.01 to 0.59 percentage points.

Question: does the interval exclude zero, and could it have done otherwise given that *p* = 0.046?

:::{callout}
:kind: note

**Feedback for problem 1.** The statistic is 0.30 / 0.15 = 2.00. The interval runs from 0.01 to 0.59 and excludes zero, and it could not have done otherwise. A *p*-value below 0.05 and a 95 per cent interval clear of zero are the same statement, as scene 3 established with the equivalence. If you answered that the interval "confirms" the *p*-value, revise that wording: one fact appears twice.

Notice how narrowly this one clears. At *p* = 0.046 the interval's lower end sits at 0.01, a whisker from zero. Report both numbers and let the reader see that.

What next: if the equivalence still feels like a coincidence, rebuild it by computing 1.96 x 0.15 = 0.294 and comparing it against the difference of 0.30.
:::

## Problem 2, with prompts only

A sub-study of 40 adults compares mean fasting glucose between those who walked after dinner and those who did not. The difference comes out 4.2 mg/dL, with a standard error of 3.0 mg/dL.

1. State the null and alternative hypotheses.
2. Compute the test statistic.
3. The two-sided *p* is 0.16. Write one sentence saying what that 0.16 is the probability of.
4. Write one sentence saying what this result does **not** establish.

:::{callout}
:kind: note

**Feedback for problem 2.** The statistic is 4.2 / 3.0 = 1.40. The null fixes the true difference at 0 mg/dL; the alternative allows any other value, in either direction.

For step 3, a correct sentence runs: if the true difference were zero and the rest of the model held, about 16 studies in 100 like this one would produce a difference at least 4.2 mg/dL from zero. If your sentence began "there is a 16 per cent chance that", check what noun followed. The principle is the one from scene 4: the probability is computed about data, with the hypothesis assumed.

For step 4, the result does not establish that walking after dinner makes no difference. The observed difference is 4.2 mg/dL, and the interval runs from about -1.7 to 10.1 mg/dL, so values as large as 10 remain compatible with this data. A study of 40 people could not separate them.

What next: write the same two sentences for a version of this study that reported *p* = 0.02, and check that only the numbers change and the grammar does not.
:::

## Problem 3, on your own

A trial reports that a medication-review clinic lowered mean systolic blood pressure by 5.5 mmHg against usual care, with a standard error of 2.5 mmHg. The published discussion says:

> The intervention was effective (*p* = 0.028), indicating a 97 per cent probability that the clinic improves blood pressure control.

Do all four of these.

1. Verify the reported *p* from the difference and the standard error.
2. Compute the 95 per cent interval.
3. Identify every error in the quoted sentence.
4. Rewrite it.

:::{callout}
:kind: note

**Feedback for problem 3.** The statistic is 5.5 / 2.5 = 2.20, and the two-sided *p* is 0.028, so the reported figure checks out. The interval is 5.5 plus or minus 1.96 x 2.5, which gives 0.60 to 10.40 mmHg.

The quoted sentence contains two errors. The 97 per cent is the inverted conditional from scene 4, subtracted from 1; the *p*-value never reports the probability that a claim is true. The word "effective" then imports a judgement about clinical worth from a number that measures distance in standard errors.

A defensible rewrite: mean systolic blood pressure was 5.5 mmHg lower in the clinic group, 95 per cent interval 0.60 to 10.40 mmHg, statistically significant at the 0.05 level (*p* = 0.028). Whether a reduction in that range is worth the clinic's cost is a separate question this trial does not answer.

If you caught the 97 per cent and missed "effective", the principle to revisit is in scene 5: the technical label attaches to the test result and carries no claim about magnitude or worth.

What next: find the interval's lower end, 0.60 mmHg, and ask yourself whether a trial whose data are compatible with a 0.6 mmHg reduction has shown what the discussion says it has.
:::

## Problem 4, selection under mixed conditions

A large trial of a dietary programme reports a mean fasting glucose difference of 0.4 mg/dL, standard error 0.16 mg/dL, two-sided *p* = 0.012.

Which of the following are licensed by that result? Mark each yes or no and give your reason in one clause.

1. The difference is statistically significant at the 0.05 level.
2. The programme produces a worthwhile improvement in glucose control.
3. There is a 1.2 per cent probability that the programme does nothing.
4. Under the null model and its assumptions, a difference at least 0.4 mg/dL from zero would arise about 12 times in 1000 trials like this one.
5. The effect here is stronger than the dinner-timing effect, because 0.012 is smaller than 0.029.

:::{callout}
:kind: note

**Feedback for problem 4.** Yes to 1 and 4 only.

Statement 1 holds, since 0.012 is below 0.05. Statement 4 is the correct reading, with the conditional stated and the noun attached to data.

Statement 2 is the everyday sense of the word sneaking back in. The difference is 0.4 mg/dL; whether a change of that size is worth anything to a patient is the question **PREM-STA-012** takes up.

Statement 3 is the inversion.

Statement 5 is the error worth dwelling on, because it feels quantitative. The dinner-timing study found 9.0 mg/dL; this trial found 0.4 mg/dL, more than twenty times smaller. The smaller *p*-value came from a much smaller standard error, which the trial bought with its size. Ordering effects by their *p*-values compares precision and calls it magnitude.

What next: for each of the two studies, write down the effect size and the interval side by side, then cover the *p*-values and decide which result you would rather have. That comparison is the one scene 5 was preparing you for.
:::

:::{source-note}
:claims: claim-null-hypothesis-definition, claim-p-value-definition, claim-p-not-hypothesis-probability, claim-p-not-effect-size, claim-nonsignificance-not-no-effect, claim-ci-test-correspondence
:sources: source-asa-p-value-statement, source-p-value-misinterpretations, source-eom-statistical-hypotheses

These problems apply the readings established earlier. The methodological guide and the association's statement of principles support the correct reading of the probability, the rejection of the inverted reading, the separation of the probability from effect size, and the point that a result above the cut-off does not demonstrate absence of an effect; the guide also supports the correspondence between the interval and the test used in problems 1 and 3. The encyclopedia entry supports the null and alternative framing requested in problem 2. Every trial, sub-study, and number on this page is invented for teaching.
:::
