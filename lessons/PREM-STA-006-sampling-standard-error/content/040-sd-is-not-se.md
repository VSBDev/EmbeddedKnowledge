# The swap that makes a study look eight times better than it is

Here are two sentences about the same cohort. Both are true. Read them and decide, before continuing, which one you would put in a paper.

> Fasting glucose was 142 mg/dL (SD 18).

> Fasting glucose was 142 mg/dL (SE 2.32).

:::{misconception}
:id: misconception-se-as-spread-of-patients

**The wrong model.** Both figures come out in mg/dL, both sit in brackets after the mean, and the second is smaller, so the second looks like a cleaner result. Reading the pair that way treats the standard error as a tidier version of the standard deviation, and it leads a reader to conclude that the patients in this study were clustered between roughly 139.7 and 144.3 mg/dL.

**Predict first.** Under that reading, how many of the sixty patients had a fasting glucose outside 139.7 to 144.3 mg/dL? Commit to a number before you read on.

**The disconfirming evidence.** The earlier lesson on centre, spread, and shape recorded this fictional cohort summary. It is repeated here so the check does not depend on a missing histogram.

| Carried-forward feature of the sixty readings | Value |
| --- | --- |
| Observed range | about 100 to 181 mg/dL |
| Readings below 126 mg/dL | 11 |
| Readings at or above 180 mg/dL | 1 |
| Largest count in any ten-unit histogram bin | 13 |
| Readings between 139.7 and 144.3 mg/dL | about 6 |

The 139.7 to 144.3 band is only 4.6 mg/dL wide and contains about six of the sixty. About fifty-four people, nine in every ten, fall outside it.

So a reader who takes "142 (SE 2.32)" as a statement about patients has been told that a group of adults with type 2 diabetes were all within a couple of mg/dL of each other, when they in fact spanned more than 80 mg/dL. The apparent scatter of the patients has been shrunk by a factor of $\sqrt{60} = 7.75$.

**Rebuild the model.** The two numbers answer two different questions, and each is the right answer to its own.

- The **sample standard deviation**, 18 mg/dL, describes the spread of the **observed people** and estimates the population standard deviation $\sigma$. Ask it: how different were these patients from one another? Answer: their readings had a typical distance of about 18 mg/dL from their sample mean. If an individual-value distribution were normal, about 68% would lie within one standard deviation and 95% within two; this cohort was right-skewed, so its empirical counts and range must be used instead of importing those percentages. Enrolling more patients does not make patients more alike.
- The **estimated standard error**, 2.32 mg/dL, describes **an estimate**. Ask it: how widely would sample means of 60 scatter around the unknown population mean? Answer: their estimated standard deviation is 2.32 mg/dL. Enrol more independent patients and this number falls, because a mean of many is harder to push around than a mean of few. If the question instead compares this sample mean with a fresh independent mean, the estimated standard error of their difference is $\sqrt{2} \times 2.32 = 3.29$ mg/dL.

One sample statistic describes the observed people and estimates population variability. The other estimates the sampling spread of the mean. They happen to share a unit, which is why the confusion survives.

**Test the repair.** For each sentence, decide which figure belongs in it.

1. "The observed patients' glucose values had a typical distance of about 18 mg/dL from their sample mean."
2. "The estimated spread of sample means around the population mean is about 2 mg/dL."
3. "A patient in this clinic with a fasting glucose of 180 mg/dL is unusual but not extraordinary."
4. "To compare this mean with a fresh independent mean, combine the uncertainty from both estimates."

Sentences 1 and 3 are about how observed patients differ, so they need the sample standard deviation of 18. Sentence 2 needs the estimated standard error of the mean, 2.32. Sentence 4 also requires standard errors, but not 2.32 alone: two independent means each contribute uncertainty, giving an estimated standard error of the difference of 3.29 mg/dL when their sample sizes and variabilities match. If you can sort four sentences that way, the repair has taken.
:::

## Why this survives peer review

The confusion is old and well documented in the medical literature. Papers commonly report a mean joined to a second figure by a plus-or-minus sign, as in 142±2.32 mg/dL, and the notation itself does not say which quantity the second figure is. A review of 88 articles published in 2002 found that 12 of them, 14%, never identified which measure of dispersion they were reporting. The *BMJ* and a number of other journals responded by removing plus-or-minus signs from submitted text and asking authors to write out which quantity they mean.

There is a further reason the error persists, and it is not innocent. Quoting the standard error makes the numbers in a table look tighter. A group described as 142±2.32 reads as more carefully studied than the same group described as 142±18, and nothing was studied more carefully. Whenever you meet a plus-or-minus in a paper and no label, the honest response is that you cannot yet read the sentence, and finding out which quantity it is changes the meaning by a factor of $\sqrt{n}$.

## The reading rule

When a number in mg/dL, or kilograms, or millilitres, sits beside a mean:

- if the sentence is about **who is in the group**, it wants a standard deviation;
- if the sentence is about **how well the group's average is known**, it wants a standard error;
- if the label is missing, the statistic is indeterminate until the authors state what they calculated. You may use $\sqrt{n}$ to show the consequences of each possible reading, but plausibility is not proof of identity.

:::{source-note}
:claims: claim-se-is-precision, claim-se-formula, claim-2sd-covers-95, claim-plus-minus-ambiguity
:sources: source-altman-bland-se

This source supports the distinction between a sample standard deviation as a measure of observed individual variability and a standard error as a measure of the precision of an estimated mean, the relation between the two through the square root of the sample size, normal-model coverage within standard-deviation bands, and the finding that unlabelled plus-or-minus notation is ambiguous. The cohort, the table, the four test sentences, and the reading rule are original teaching material.
:::
