# Carrying the measures out of the diabetes clinic

Nothing in this lesson is about glucose. The two-by-two table works anywhere a yes-or-no outcome is compared across two groups, or a yes-or-no test is scored against something more trusted. Two settings from other corners of medicine make that portable.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** Both cases below are invented, including the drug, the condition, the screening test, and every count. They describe no real trial, no real programme, and no real disease.
:::

## An abstract that gives you only half of it

A stipulated cardiology trial reports: 2,400 adults randomised, 1,200 to a drug and 1,200 to placebo, followed for 24 months, with a 33 per cent relative reduction in the primary event. The results table gives 180 events on placebo and 120 on the drug.

The abstract's sentence is a ratio. The table lets you supply everything it left out.

- Risks: 180/1,200 = 0.150 on placebo, 120/1,200 = 0.100 on the drug.
- Risk ratio: 0.100 / 0.150 = 0.667, so a relative reduction of 33.3 per cent. The abstract's figure checks out.
- Risk difference: 0.150 − 0.100 = 0.050, which is 5 people per 100 over 24 months.
- Number needed to treat: 1 / 0.050 = 20 adults for one additional person to avoid the event within two years.

The odds ratio is worth computing for the practice: odds are 180/1,020 = 0.176 on placebo and 120/1,080 = 0.111 on the drug, so the ratio is 0.630. The event occurred in 15 and 10 per cent of the arms, which is common enough for the odds ratio to sit further from 1 than the risk ratio of 0.667.

Now change one thing and nothing else. Suppose the same drug produced the same 33 per cent relative reduction in a lower-risk group whose event risk on placebo was 1.5 per cent. The risk difference becomes 0.005 and the number needed to treat becomes 200. Same drug, same relative claim, ten times the people treated per person helped.

## A screening programme where almost every alarm is false

A stipulated newborn screening test for a rare metabolic condition has a sensitivity of 0.99 and a specificity of 0.995. These high values are held fixed for the calculation. The invented condition affects 1 in 5,000 newborns.

Build the table across a million births. One in 5,000 gives 200 affected and 999,800 unaffected. Ninety-nine per cent of 200 is 198 detected, leaving 2 missed. Ninety-nine and a half per cent of 999,800 is 994,801 correctly cleared, leaving 4,999 false alarms.

| | Condition present | Condition absent | All |
| --- | ---: | ---: | ---: |
| Screen positive | 198 | 4,999 | 5,197 |
| Screen negative | 2 | 994,801 | 994,803 |
| All | 200 | 999,800 | 1,000,000 |

$$\text{PPV} = \frac{198}{5{,}197} = 0.038, \qquad \text{NPV} = \frac{994{,}801}{994{,}803} = 0.999998.$$

Fewer than four positives in every hundred are true. The remaining 96 are families told their newborn needs another test. The specificity of 0.995 sounds like a rounding error until it is applied to 999,800 babies, at which point the 0.5 per cent becomes 4,999 people and swamps the 198 the programme was built to find.

One possible hypothetical response is a two-stage sequence: use an initial test intended to miss few cases, then apply a more demanding test only to the smaller flagged group. The table does not establish that every real screening programme uses or should use this design. It only shows why a second test applied to the 5,197 flagged newborns would start from a 3.8 per cent probability rather than 0.02 per cent and would therefore have different predictive values.

:::{check}
:id: check-transfer-reasoning
:kind: retrieval

Answer both before reading on.

1. In the cardiology trial, which single number would you add to the abstract if you could add only one, and why?
2. In the newborn programme, would raising the sensitivity from 0.99 to 1.00 do more or less for the positive predictive value than raising the specificity from 0.995 to 0.999?
:::

For the first, add the risk difference or the number needed to treat: the relative reduction is already there, and the absolute measure is what tells a reader how many people the result concerns. For the second, specificity does far more here. Perfect sensitivity would add at most the 2 missed cases to a numerator of 198. Raising specificity to 0.999 would cut the false alarms from 4,999 to about 1,000, so the positive predictive value would rise from 3.8 per cent to about 16.5 per cent. When a condition is rare, almost everyone tested is in the specificity column, so that is where the arithmetic lives.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-odds-ratio-diverges-when-events-common, claim-report-both-absolute-and-relative, claim-nnt-is-reciprocal-of-risk-difference, claim-diagnostic-measures-are-conditionals, claim-predictive-values-depend-on-prevalence
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-nnt-25-years, source-consort-effect-sizes, source-screening-predictive-values

The methods papers support the definitions of the effect measures, the separation of the odds ratio from the risk ratio when the outcome is common, the dependence of an absolute reduction on the baseline risk, and the number needed to treat as the reciprocal of a risk difference computed over a stated period. The reporting guideline supports the objection to an abstract that gives only a relative measure. The screening review supports the diagnostic measures and their dependence on how common the condition is. The trial, the drug, the screening test, the condition, and every count are invented.
:::
