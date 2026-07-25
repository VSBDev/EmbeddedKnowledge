# Show that both denominators are under control

Five items, retakeable, feedback after the attempt. Each one tests whether you can name the group a number divides by before you divide.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The audit, the trial, and the test below are invented for assessment.
:::

## The audit

An invented clinic audit records 500 adults with type 2 diabetes attending morning appointments. Each reported a dinner-to-sleep interval, and each gave one fasting glucose reading. A shorter interval means a later dinner.

| Group | Reading 140 mg/dL or above | Reading below 140 mg/dL | People |
| --- | ---: | ---: | ---: |
| Interval under 3 hours | 90 | 160 | 250 |
| Interval 3 hours or more | 50 | 200 | 250 |
| All | 140 | 360 | 500 |

**Item 1.** Compute the risk difference between the two groups, taking the three-hours-or-more group as the baseline. Give a decimal to two places.

**Item 2.** Compute the odds ratio for a high reading, short interval against long. Give a decimal to two places, then state in one sentence whether it may be reported as a risk ratio.

## The trial

An invented randomised trial assigns 1,200 adults with type 2 diabetes to a meal-timing programme or to usual care, 600 per arm, and records one yes-or-no outcome at twelve months. Usual care: 168 had the outcome. Programme: 120 had it.

**Item 3.** Compute the number needed to treat, to one decimal place, and write the sentence a clinician could say, including the period.

## The test

An invented point-of-care test has a sensitivity of 0.80 and a specificity of 0.95. It is deployed where 10 per cent of people have the target condition.

**Item 4.** Using 10,000 people, compute the positive predictive value. Give a decimal to two places.

**Item 5.** A colleague reads the same figures and says: "It picks up 80 per cent, so eight in ten people whose test fires have the condition." Name the error and give the correct number.

Answers, worked reasoning, and routes back into the lesson are in `assessment.json`. Attempt every item before opening it.

## If an item did not go well

Each item has one place to return to.

- Item 1 or 3: rework the two press releases and the trial in scene 3, then redo them with the audit table.
- Item 2: redo the cross-product on the sixty-row cohort and say aloud why the outcome being common matters.
- Item 4 or 5: rebuild both meter tables from their column totals without looking, then check the four denominators against the table at the end of scene 4.

## Spaced retrieval

Come back to these three questions in about a week, without the lesson open.

1. Write the four fractions from one two-by-two diagnostic table and name the group each divides by.
2. A relative reduction of 25 per cent corresponds to what absolute reduction at a baseline risk of 60 per cent, and at a baseline of 1.2 per cent?
3. Which two of sensitivity, specificity, positive predictive value, and negative predictive value change when the same test is moved to a population with half the prevalence, and in which direction does each move?

The second is 15 per 100 and 0.3 per 100. The third: the two predictive values move, the positive one down and the negative one up.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-odds-ratio-diverges-when-events-common, claim-nnt-is-reciprocal-of-risk-difference, claim-diagnostic-measures-are-conditionals, claim-predictive-values-depend-on-prevalence
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-nnt-25-years, source-consort-effect-sizes, source-screening-predictive-values

The methods papers support the effect measures and the reciprocal relation tested in items 1 to 3. The screening review supports the diagnostic measures and the prevalence dependence tested in items 4 and 5. The audit, the trial, and the test are invented, and no source supports any statement about dinner timing.
:::
