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

The question asks how well the average is known, so it wants a standard error. Here $s = 11$ and $n = 100$, and $\sqrt{100} = 10$, so the standard error is $11 \div 10 = 1.1$ beats per minute. The one-standard-error band runs from 70.9 to 73.1 beats per minute. It is smaller than 11, it carries the unit of the measurement, and it says that a repeat on 100 fresh adults would typically land within about 1 beat per minute of 72.

## Two: same task, no route

:::{check}
:id: practice-independent-standard-error
:kind: practice

A renal service measures serum creatinine in 36 patients. Mean 96 µmol/L, standard deviation 24.

Give the standard error of the mean and state in one sentence what it describes.
:::

$\sqrt{36} = 6$, so the standard error is $24 \div 6 = 4$ µmol/L. It describes how far the service's estimate of the mean would move if the audit were repeated on 36 different patients. It says nothing about how much individual patients differ from one another, which is the job of the 24.

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
2. "A second cohort of the same size from the same list would probably return a mean within this distance of 142."
3. "The middle 95% of patients lie within this distance of 142."
4. "Ninety-five repeats in a hundred would return a mean within this distance of 142."
:::

Sentence 1 needs one standard deviation: 18 mg/dL, giving 124 to 160. Sentence 2 needs one standard error: 2.32 mg/dL, giving 139.7 to 144.3. Sentence 3 needs two standard deviations: 36 mg/dL, giving 106 to 178. Sentence 4 needs two standard errors: 4.65 mg/dL, giving 137.4 to 146.6.

All four bands are in mg/dL and all four describe the same cohort, which is exactly why the label on the number has to be written out.

## Six: find the question

:::{check}
:id: practice-audit-the-poster
:kind: practice

A trainee brings you this paragraph from a poster.

> "We audited fasting glucose in 25 patients on the diabetes ward, mean 151±3.4 mg/dL. Compared with last year's ward audit of 100 patients, mean 148±1.6, control has deteriorated. Both audits used the same laboratory assay."

Say what you can and cannot conclude, and name every quantity you would need before the sentence about deterioration could be assessed. This item has no single numerical answer; it asks you to notice what is absent.
:::

The two figures after the plus-or-minus are unlabelled, so until they are labelled the paragraph cannot be read at all. Test the possibility that they are standard errors: $3.4 \times \sqrt{25} = 17.0$ and $1.6 \times \sqrt{100} = 16.0$, giving standard deviations of about 17 and 16 mg/dL, plausible for fasting glucose on a diabetes ward and consistent with each other. Test the alternative that they are standard deviations: patients on a diabetes ward whose glucose readings scattered by only 3.4 mg/dL would be a remarkable and unlikely group. So the figures are almost certainly standard errors, and the trainee should confirm it before quoting them.

Read that way, the estimates are 151 with a standard error of 3.4 and 148 with a standard error of 1.6. The gap of 3 mg/dL is smaller than one standard error of the less precise estimate, so a difference of that size is the kind of thing repeat audits produce with no change in ward practice whatever. Deciding whether the data supports a claim of deterioration is the job of the next two lessons; this lesson is enough to say that the poster has not shown one.

Two further things are missing and neither is a statistical detail. Who was on the ward each year, since a change in case mix would move the mean without any change in care; and how the 25 and the 100 patients were chosen, since an audit of whoever happened to be admitted in one week is a different object from an audit of a full year. Both belong to the sampling questions from the scientific inquiry block, and no standard error repairs a sample that reached the wrong people.

:::{source-note}
:claims: claim-se-formula, claim-plus-minus-ambiguity
:sources: source-altman-bland-se

These sources support the relation between the standard error, the standard deviation, and the square root of the sample size used in every calculation above, and the ambiguity of unlabelled plus-or-minus notation that the last item turns on. The clinics, the audits, the poster, and all figures in this scene are original teaching material.
:::
