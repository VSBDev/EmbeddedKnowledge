# Five calculations and one judgement

The support fades as you go down. The first item hands you the route; the last hands you a paragraph and expects you to find the question inside it. Work each one before reading the discussion under it.

## One: with the route supplied

:::{check}
:id: practice-guided-standard-error
:kind: practice

A cardiology clinic measures resting heart rate in 100 adults. Mean 72 beats per minute, standard deviation 11.

Follow the same six steps as the worked example. Which quantity does the question want? What are $s$ and $n$? What is $\sqrt{n}$? Divide. Attach a unit. Check that the answer is smaller than $s$.

Report the standard error of the mean, then give the band one standard error either side of 72.
:::

The question asks about the sampling spread of the average, so it wants an estimated standard error. Here $s = 11$ and $n = 100$, and $\sqrt{100} = 10$, so the estimated standard error is $11 \div 10 = 1.1$ beats per minute. The arithmetic band one estimated standard error around the observed mean runs from 70.9 to 73.1 beats per minute. It shows the precision scale around the reported estimate; it is not a 68% prediction band for a fresh independent mean around 72.

## Two: same task, no route

:::{check}
:id: practice-independent-standard-error
:kind: practice

A renal service measures serum creatinine in 36 patients. Mean 96 µmol/L, standard deviation 24.

Give the standard error of the mean and state in one sentence what it describes.
:::

$\sqrt{36} = 6$, so the estimated standard error is $24 \div 6 = 4$ µmol/L. It estimates the standard deviation of sample means of 36 around the unknown population mean. It says nothing about how much individual patients differ from one another, which is the job of the sample standard deviation of 24.

## Three: run the formula backwards

:::{check}
:id: practice-sample-size-backwards
:kind: practice

The renal service wants its estimate good to a standard error of 2 µmol/L, and expects the standard deviation to stay at 24.

How many patients does it need? Then say in one sentence what the answer would have been for a target of 1 µmol/L.
:::

Rearranging gives $n = (s / \mathrm{SE})^{2} = (24 / 2)^{2} = 144$ patients. Check it against the square-root relation: going from 4 to 2 is a halving, so the sample has to quadruple, and 36 times 4 is indeed 144. For a target of 1 µmol/L the requirement is $(24/1)^{2} = 576$ patients, four times again. Each halving costs four times the sample of the one before it.

## Four: two studies, one comparison

:::{check}
:id: practice-compare-two-studies
:kind: practice

Two teams each estimate mean fasting glucose in adults with type 2 diabetes.

| Team | Patients | Standard deviation (mg/dL) | Mean reported (mg/dL) |
| --- | --- | --- | --- |
| A | 40 | 12 | 145 |
| B | 250 | 21 | 139 |

Which team's mean is the more precisely determined, and by how much? Give both standard errors.
:::

Team A: $\sqrt{40} = 6.325$, so $12 \div 6.325 = 1.90$ mg/dL. Team B: $\sqrt{250} = 15.811$, so $21 \div 15.811 = 1.33$ mg/dL. Team B's estimate is the tighter one, even though its patients differ from one another substantially more, because a sample more than six times larger outweighs a standard deviation not quite twice as big. The ratio of the two standard errors is $1.90 \div 1.33 = 1.43$.

Neither standard error says anything about which team's patients were sicker. The two means, 145 and 139, are what speak to that, and the standard errors say how firmly each of those means has been pinned down.

## Five: which quantity does the sentence need?

:::{check}
:id: practice-match-quantity-to-sentence
:kind: practice

For each sentence, name the quantity it requires and give its value for the dinner-timing cohort, where the mean is 142 mg/dL, the standard deviation is 18 mg/dL, and $n$ is 60.

1. "Most patients in the study had a fasting glucose within this distance of 142."
2. "Sample means of 60 have this estimated standard deviation around the population mean."
3. "If individual fasting glucose followed a normal model with standard deviation 18, about 95% of individuals would lie within this distance of the population mean."
4. "Under an independent equal-variance normal model, about 95% of differences between two sample means of 60 would lie within this distance of zero when the population has not changed."
:::

Sentence 1 needs the sample standard deviation: 18 mg/dL is the observed typical distance from the sample mean. Sentence 2 needs the estimated standard error of one mean: 2.32 mg/dL. Sentence 3 needs about two population standard deviations, estimated here as 36 mg/dL, but only under the stated hypothetical normal model; the actual skewed cohort does not inherit that 95% reading. Sentence 4 needs about two standard errors of the **difference**: $2\sqrt{2}\times2.324 = 6.57$ mg/dL.

All four distances are in mg/dL, but they attach to different distributions. That is exactly why the quantity and model must be written out.

## Six: find the question

:::{check}
:id: practice-audit-the-poster
:kind: practice

A trainee brings you this paragraph from a poster.

> "We audited fasting glucose in 25 patients on the diabetes ward, mean 151±3.4 mg/dL. Compared with last year's ward audit of 100 patients, mean 148±1.6, control has deteriorated. Both audits used the same laboratory assay."

Say what you can and cannot conclude, and name every quantity you would need before the sentence about deterioration could be assessed. This item has no single numerical answer; it asks you to notice what is absent.
:::

The two figures after the plus-or-minus are unlabelled, so the paragraph does not identify what they are. If they are standard errors, the implied sample standard deviations are $3.4 \times \sqrt{25} = 17.0$ and $1.6 \times \sqrt{100} = 16.0$ mg/dL. If they are sample standard deviations, the implied estimated standard errors are $3.4 \div \sqrt{25} = 0.68$ and $1.6 \div \sqrt{100} = 0.16$ mg/dL. Those conditional calculations show how different the two readings would be; they do not prove which statistic the trainee calculated. The trainee must identify the quantity and method before anyone quotes it.

Conditionally, if 3.4 and 1.6 are standard errors from independent audits, the estimated standard error of their difference is $\sqrt{3.4^2+1.6^2}=3.76$ mg/dL. The observed gap of 3 mg/dL is smaller than that precision scale. This calculation still does not establish deterioration or no deterioration; a formal comparison requires methods taught later, and the unlabelled report has not supplied enough information to choose one.

Two further things are missing and neither is a statistical detail. Who was on the ward each year, since a change in case mix would move the mean without any change in care; and how the 25 and the 100 patients were chosen, since an audit of whoever happened to be admitted in one week is a different object from an audit of a full year. Both belong to the sampling questions from the scientific inquiry block, and no standard error repairs a sample that reached the wrong people.

:::{source-note}
:claims: claim-se-formula, claim-se-applies-to-other-statistics, claim-2sd-covers-95, claim-plus-minus-ambiguity
:sources: source-altman-bland-se

This source supports the relation between the standard error, the standard deviation, and the square root of the sample size; normal-model coverage; the extension of standard errors to differences between two means; and the ambiguity of unlabelled plus-or-minus notation. The independent-difference calculation follows by adding the variances of independent estimates. The clinics, audits, poster, and all figures in this scene are original teaching material.
:::
