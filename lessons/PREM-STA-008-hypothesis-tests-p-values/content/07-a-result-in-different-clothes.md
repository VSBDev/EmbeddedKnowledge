# A result in different clothes

Everything so far has run on differences between two means, measured in mg/dL. That was one setting. The reading you have learned is meant to survive leaving it.

Here the outcome is a count, the measurement is a rate, and the arithmetic behind the standard error is different. Watch what stays the same.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The audit below, its two protocols, and all of its counts are invented for teaching. Nothing here describes a real hospital, a real infection rate, or a real surgical practice, and nothing here is guidance about infection control.
:::

## The audit

A surgical unit changes its skin-preparation protocol and audits surgical-site infections over the following months.

| Protocol | Operations | Infections | Rate |
| --- | ---: | ---: | ---: |
| Previous | 150 | 12 | 8.0 per cent |
| New | 150 | 5 | 3.3 per cent |

The infection rate under the new protocol is less than half the old one. The difference between the two rates is 4.7 percentage points.

The standard error of a difference between two rates is built from the two rates and the two denominators, and for these figures it comes to 2.66 percentage points. That formula is not this lesson's business. What matters is that it does the same job the 4.13 did in scene 3: it says how far apart two rates would drift if the protocol changed nothing and only sampling variation were at work.

From there the machinery is the machinery you already have.

$$z = \frac{4.67 - 0}{2.66} = 1.76$$

The letter changed from *t* to *z*, and the reason is worth one sentence. With measurements like glucose the spread has to be estimated from the data, which costs degrees of freedom and calls for a *t* curve. With counts the spread follows from the rates themselves, so nothing extra is estimated, there are no degrees of freedom to report, and the normal curve is the reference.

The two-sided *p* is 0.079. The 95 per cent interval for the difference in rates runs from -0.5 to 9.9 percentage points.

## Reading it

The unit's audit meeting produces the predictable sentence: the new protocol showed no benefit, since the result was not statistically significant.

Take that apart with what you have.

The observed difference is 4.7 percentage points, and the infection rate more than halved. That is what the audit found, and no test alters it. The *p*-value of 0.079 says something narrower: if the two protocols were truly identical and the rest of the model held, audits like this one would produce a gap at least 4.7 percentage points wide about 79 times in 1000.

The interval carries the honest summary. It runs from -0.5 to 9.9 percentage points, so the data is compatible with the new protocol being very slightly worse, and equally compatible with it cutting infections by nearly ten percentage points. Those are wildly different conclusions, and 300 operations cannot separate them.

"No benefit" picks one end of that interval and reports it as the finding. The audit did not show that the protocols are alike. It failed to distinguish them, and the reason sits in the denominator.

## The same protocols, four times the operations

Suppose the unit had audited 600 operations under each protocol and found the same two rates: 48 infections out of 600, against 20 out of 600.

| Quantity | 150 per arm | 600 per arm |
| --- | ---: | ---: |
| Difference in rates | 4.67 pp | 4.67 pp |
| Standard error | 2.66 pp | 1.33 pp |
| *z* | 1.76 | 3.51 |
| Two-sided *p* | 0.079 | 0.0004 |
| 95 per cent interval | -0.5 to 9.9 pp | 2.1 to 7.3 pp |

Both protocols behaved identically across the two columns. The infection rates are the same, 8.0 per cent against 3.3 per cent, and the difference is 4.67 percentage points in both. Quadrupling the audit halved the standard error, which doubled *z* and dropped the *p*-value by a factor of about 200.

Read the two columns together and the *p*-value stops looking like a verdict on the protocol. It is a verdict on the protocol **and** the size of the audit, mixed together in one number, and the mixture cannot be unmixed after the fact. The effect size is the same in both columns. The interval shows what changed: it narrowed from a width of ten percentage points to a width of five.

## What transferred

The outcome changed from a continuous measurement to a count. The units changed from mg/dL to percentage points. The standard-error formula changed completely, and the statistic changed its letter along with its reference curve.

Four things did not change.

The null hypothesis still fixes one quantity at one value so the model can predict. The statistic still measures how far the observation sits from that value in standard errors. The *p*-value still reports a tail area computed under the model, about data. And the *p*-value still refuses to tell you the probability that the protocols differ, the size of the difference, or whether the difference is worth acting on.

That last group is the reason this lesson exists. The machinery varies from test to test, and the reading does not.

:::{check}
:id: check-transfer-reading

A colleague summarises the 150-per-arm audit in one line for the unit's newsletter. Which of these is defensible?

1. "Infections fell from 8.0 to 3.3 per cent after the protocol change, but the difference did not reach statistical significance at the 0.05 level (*p* = 0.079); the audit is compatible with anything from a slight increase to a large reduction, and a larger audit is needed."
2. "The protocol change made no difference to infection rates (*p* = 0.079)."
3. "There is a 92 per cent probability that the new protocol reduces infections."

Answers. Only the first. It reports the rates, labels the test result correctly at a stated level, and describes the range the data leaves open. The second states an equivalence the audit never demonstrated. The third is the inversion, computed as 1 minus 0.079, and no arithmetic in the audit supports it.
:::

:::{source-note}
:claims: claim-p-value-definition, claim-p-not-hypothesis-probability, claim-nonsignificance-not-no-effect, claim-significance-property-of-test
:sources: source-asa-p-value-statement, source-p-value-misinterpretations

The association's statement of principles and the methodological guide support the reading of the probability as a statement about data computed under an assumed model, the rejection of the inverted reading, the correction that a result above the cut-off does not demonstrate absence of an effect, and the point that the technical label describes a test result and not the effect being studied. The audit, both protocols, and all counts are invented for teaching.
:::
