# Practice, with the props taken away one at a time

Three tasks on three clinics that have nothing to do with the study. The first names the steps to take, the second names only the destination, and the third supplies neither. Attempt each before reading the paragraph that follows it.

## First, with the steps supplied

:::{check}
:id: check-practice-scaffolded
:kind: diagnostic

A second diabetes clinic, unrelated to the study, records fasting glucose for 40 patients. The mean is 155 mg/dL and the standard deviation is 20 mg/dL. Assume for now that a normal model is appropriate.

1. Write the one-standard-deviation and two-standard-deviation bands as glucose values.
2. Standardise a reading of 195 mg/dL.
3. Under the model, what share of patients sit above 195 mg/dL, and roughly how many of the 40 is that?
:::

The bands come from adding and subtracting the standard deviation: 155 − 20 = 135 and 155 + 20 = 175, then 155 − 40 = 115 and 155 + 40 = 195. Standardising 195 gives (195 − 155) ÷ 20 = 40 ÷ 20 = +2.00, so the reading sits exactly on the upper two-standard-deviation boundary. The empirical rule leaves 100 − 95.45 = 4.55 per cent outside that band, split evenly between the two tails, so 2.275 per cent sits above 195 mg/dL. Applied to 40 patients that is 40 × 0.02275 = 0.91, which rounds to about one person. A prediction of "about one" is a useful reminder that a clinic this size cannot check its own model in the far tail.

## Second, with only the destination named

:::{check}
:id: check-practice-partly-faded
:kind: diagnostic

Same clinic, 40 patients, mean 155 mg/dL, standard deviation 20 mg/dL, normal model assumed.

The clinic wants to count patients at or above 175 mg/dL. Work out the probability that any one patient is over that line, then give the expected count and its standard deviation. Last quarter the count was 12. Say whether that is an ordinary result.
:::

The threshold standardises to (175 − 155) ÷ 20 = +1.00, and the empirical rule puts (100 − 68.27) ÷ 2 = 15.87 per cent above one standard deviation, so *p* = 0.16 to two places. The count is a binomial with *n* = 40 and *p* = 0.16, giving a mean of 40 × 0.16 = 6.4 patients and a standard deviation of √(40 × 0.16 × 0.84) = √5.376 = 2.32 patients. A count of 12 sits (12 − 6.4) ÷ 2.32 = 2.4 standard deviations above what the model expects, and working the binomial formula across all counts from 12 upwards gives a probability of 0.019 for a quarter at least this high. That is uncommon enough to ask what changed, and it is not evidence on its own that anything did. The model could be wrong instead of the quarter being unusual, and 40 patients drawn from a different intake would move this count around by two or three people on their own.

## Third, with nothing supplied

:::{check}
:id: check-practice-unfaded
:kind: diagnostic

A third clinic has 100 patients, mean fasting glucose 132 mg/dL, standard deviation 22 mg/dL. Its analyst fitted a normal model and recorded these counts:

| Region | Patients |
| --- | --- |
| Below 88 | 0 |
| 88 up to 110 | 6 |
| 110 up to 154 | 74 |
| 154 up to 176 | 14 |
| 176 and above | 6 |

Decide whether to keep the model, and say what the counts tell you about the shape.
:::

Reject it. The bands are 132 ± 22, giving 110 to 154, and 132 ± 44, giving 88 to 176. The model predicts 68.3 patients in the inner band and observes 74, which alone would be unremarkable. Splitting the misses by side is what settles it: the model predicts 15.87 patients below 110 and 15.87 above 154, and the clinic recorded 6 and 20. Two standard deviations out, the model predicts 2.3 patients in each tail and the clinic recorded 0 below 88 and 6 above 176. Every miss runs the same way. The left tail is thinner than a symmetric model needs and the right tail is fatter, which is a right-hand lean.

Note what a careless total would have done here. Adding the inner three rows gives 94 patients inside the two-standard-deviation band against a prediction of 95.5, near enough to wave through. The aggregate agreed because the two tails were wrong in opposite directions and cancelled, which is the same trap the screening data set earlier in this lesson.

:::{source-note}
:claims: claim-empirical-rule-areas, claim-binomial-mean-sd, claim-z-score-definition, claim-normality-is-checkable
:sources: source-nist-normal-data, source-nist-normal-distribution, source-nist-binomial, source-eom-binomial, source-nist-normal-probability-plot

These sources supply the population percentages within one and two standard deviations that every predicted count above is computed from, the standard normal distribution and the standardising transformation, the binomial mean np and standard deviation of the square root of np(1 − p) together with the independence of trials it assumes, and the treatment of approximate normality as something to be assessed rather than assumed. The three clinics and every figure in these tasks are constructed for this lesson and describe no real service or patient.
:::
