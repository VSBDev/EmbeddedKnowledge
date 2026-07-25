# Practice with the scaffolding taken away

Five tasks. The first walks you through the steps, the last gives you a paragraph and no instructions. Work each one on paper before reading the answer under it.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** Every registry, trial, device, and count in this scene is invented so the arithmetic is clean.
:::

## 1. Fully scaffolded

A stipulated registry follows 400 adults with type 2 diabetes for one month. Two hundred recorded the meal-timing plan on five or more nights; 200 recorded it on fewer. The outcome is a fasting glucose reading of 140 mg/dL or above on a set morning.

| Group | Outcome | No outcome | People |
| --- | ---: | ---: | ---: |
| Five or more nights | 36 | 164 | 200 |
| Fewer nights | 60 | 140 | 200 |

**Step 1.** Compute the risk in each group.
**Step 2.** Compute the risk difference, taking the fewer-nights group as the baseline.
**Step 3.** Compute the risk ratio for the five-or-more group against the fewer group.
**Step 4.** Say in one sentence what kind of claim these numbers support.

*Answers.* Risks are 36/200 = 0.18 and 60/200 = 0.30. The risk difference is 0.30 − 0.18 = 0.12, which is 12 per 100. The risk ratio is 0.18 / 0.30 = 0.60. These are measures of association in an observational registry, so they describe two groups that already differed and support no claim that recording the plan caused the lower share.

## 2. Partly scaffolded

Use the same registry table. Compute the odds in each group and the odds ratio, then say whether the odds ratio can be described as a risk ratio here.

*Answer.* Odds are 36/164 = 0.220 and 60/140 = 0.429. The odds ratio is 0.220 / 0.429 = 0.512, and the cross-product confirms it: (36 × 140) / (164 × 60) = 5,040 / 9,840 = 0.512. The outcome occurred in 18 and 30 per cent of the groups, which is common, so 0.512 sits further from 1 than the risk ratio of 0.60 and may not be reported as a risk ratio.

## 3. A rare outcome, for contrast

A stipulated trial randomises 800 adults, 400 per arm, and records one uncommon safety outcome over six months. Four people in the intervention arm and two in the comparison arm had it.

Compute the risk in each arm, the risk ratio, the odds ratio, and the number of people who would have to receive the intervention for one additional person to have the outcome. Then say why the two ratios came out close together.

*Answer.* Risks are 4/400 = 0.010 and 2/400 = 0.005. The risk ratio is 2.00. The odds ratio is (4 × 398) / (396 × 2) = 1,592 / 792 = 2.01. The risk increase is 0.005, and its reciprocal is a number needed to harm of 200 people over six months. The two ratios agree to two decimal places because the outcome is rare, so the group without it is barely changed by removing the few who had it. A headline of "double the risk" here covers a gap of 5 people per 1,000.

## 4. Build the table yourself

A stipulated screening test has a sensitivity of 0.80 and a specificity of 0.90. It is used in a population where 5 per cent have the target condition. Using 10,000 people, build the two-by-two table and compute both predictive values.

*Answer.* Five per cent of 10,000 is 500 with the condition and 9,500 without. Eighty per cent of 500 is 400 true positives, leaving 100 missed. Ninety per cent of 9,500 is 8,550 true negatives, leaving 950 false positives.

| | Condition present | Condition absent | All |
| --- | ---: | ---: | ---: |
| Test fires | 400 | 950 | 1,350 |
| Test quiet | 100 | 8,550 | 8,650 |
| All | 500 | 9,500 | 10,000 |

The positive predictive value is 400/1,350 = 0.296. The negative predictive value is 8,550/8,650 = 0.988. Roughly seven in ten people whose test fires do not have the condition, and the test's own figures are perfectly good.

## 5. No scaffolding

Read this stipulated press summary and write down every sentence you would refuse to repeat, with the reason.

> "The new screen detects 95 per cent of cases, so a positive result is almost certainly correct. In our trial the screen halved the risk of a late diagnosis, a 50 per cent reduction, and the odds ratio of 2.8 shows how strong the effect is. We plan to roll it out to the general population, where it should perform as it did in our specialist clinic."

*Answer.* Four refusals.

- "Detects 95 per cent of cases, so a positive result is almost certainly correct" reads a sensitivity as a positive predictive value. The two divide by different groups, and the second cannot be computed without knowing how common the condition is.
- "Halved the risk, a 50 per cent reduction" gives only a relative measure. Without the baseline risk it could be 40 per cent down to 20, or 0.4 per cent down to 0.2.
- "The odds ratio of 2.8 shows how strong the effect is" leaves out the outcome and comparison direction. A value above 1 could reverse the groups or concern the complementary outcome, so its sign alone neither confirms nor contradicts the stated halving. Even after those directions are fixed, an odds ratio must not be read as a risk ratio unless the outcome is rare.
- "It should perform as it did in our specialist clinic" assumes transportability. Even if sensitivity and specificity were stipulated unchanged, predictive values would move when prevalence changed; in practice sensitivity and specificity may also change with the cut-off, reference standard, sample, and patient spectrum.

:::{source-note}
:claims: claim-effect-measures-from-a-table, claim-odds-ratio-diverges-when-events-common, claim-report-both-absolute-and-relative, claim-nnt-is-reciprocal-of-risk-difference, claim-diagnostic-measures-are-conditionals, claim-predictive-values-depend-on-prevalence
:sources: source-odds-versus-risk, source-arr-rrr-nnt, source-nnt-25-years, source-consort-effect-sizes, source-screening-predictive-values

The methods papers support the definitions and the relationships used in tasks 1 to 3, including the closeness of the odds ratio and risk ratio for a rare outcome and the reciprocal relation between a risk difference and a number needed to treat. The reporting guideline supports the objection to a relative measure quoted alone. The screening review supports tasks 4 and 5, including the dependence of predictive values on prevalence. Every registry, trial, test, and press summary here is invented.
:::
