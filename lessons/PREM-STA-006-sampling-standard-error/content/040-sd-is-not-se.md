# The swap that makes a study look eight times better than it is

Here are two sentences about the same cohort. Both are true. Read them and decide, before continuing, which one you would put in a paper.

> Fasting glucose was 142 mg/dL (SD 18).

> Fasting glucose was 142 mg/dL (SE 2.32).

:::{misconception}
:id: misconception-se-as-spread-of-patients

**The wrong model.** Both figures come out in mg/dL, both sit in brackets after the mean, and the second is smaller, so the second looks like a cleaner result. Reading the pair that way treats the standard error as a tidier version of the standard deviation, and it leads a reader to conclude that the patients in this study were clustered between roughly 139.7 and 144.3 mg/dL.

**Predict first.** Under that reading, how many of the sixty patients had a fasting glucose outside 139.7 to 144.3 mg/dL? Commit to a number before you read on.

**The disconfirming evidence.** Go back to the histogram of the sixty readings. They ran from about 100 to 181 mg/dL. Eleven people sat below 126 mg/dL, one sat at or above 180, and the tallest bin held thirteen people spread across a ten-unit width. The band 139.7 to 144.3 is 4.6 mg/dL wide and contains something like six of the sixty. Fifty-four people, nine in every ten, fall outside it.

So a reader who takes "142 (SE 2.32)" as a statement about patients has been told that a group of adults with type 2 diabetes were all within a couple of mg/dL of each other, when they in fact spanned more than 80 mg/dL. The apparent scatter of the patients has been shrunk by a factor of $\sqrt{60} = 7.75$.

**Rebuild the model.** The two numbers answer two different questions, and each is the right answer to its own.

- The **standard deviation**, 18 mg/dL, describes **people**. Ask it: how different are these patients from one another? Answer: a typical patient sits about 18 mg/dL away from 142, so roughly two thirds of them lie between 124 and 160, and roughly 95% between 106 and 178. Enrol six hundred more patients and this number stays near 18, because more patients does not make patients more alike.
- The **standard error**, 2.32 mg/dL, describes **an estimate**. Ask it: how firmly has this study pinned down the average? Answer: a repeat would typically land within 2.3 mg/dL of 142. Enrol six hundred more patients and this number falls, because a mean of many is harder to push around than a mean of few.

One is a fact about the population. The other is a fact about the study. They happen to share a unit, which is why the confusion survives.

**Test the repair.** For each sentence, decide which figure belongs in it.

1. "We recruited a group whose glucose control varied widely; the middle two thirds fell between 124 and 160 mg/dL."
2. "Our estimate of the group's average is good to about 2 mg/dL either way."
3. "A patient in this clinic with a fasting glucose of 180 mg/dL is unusual but not extraordinary."
4. "A repeat of this audit next year would probably return an average within 5 mg/dL of this one."

Sentences 1 and 3 are about how patients differ, so they need the standard deviation of 18. Sentences 2 and 4 are about how well a number has been measured, so they need the standard error of 2.32; sentence 4 is the two-standard-error band of 137.4 to 146.6 mg/dL stated in words. If you can sort four sentences that way, the repair has taken.
:::

## Why this survives peer review

The confusion is old and well documented in the medical literature. Papers commonly report a mean joined to a second figure by a plus-or-minus sign, as in 142±2.32 mg/dL, and the notation itself does not say which quantity the second figure is. A review of 88 articles published in 2002 found that 12 of them, 14%, never identified which measure of dispersion they were reporting. The *BMJ* and a number of other journals responded by removing plus-or-minus signs from submitted text and asking authors to write out which quantity they mean.

There is a further reason the error persists, and it is not innocent. Quoting the standard error makes the numbers in a table look tighter. A group described as 142±2.32 reads as more carefully studied than the same group described as 142±18, and nothing was studied more carefully. Whenever you meet a plus-or-minus in a paper and no label, the honest response is that you cannot yet read the sentence, and finding out which quantity it is changes the meaning by a factor of $\sqrt{n}$.

## The reading rule

When a number in mg/dL, or kilograms, or millilitres, sits beside a mean:

- if the sentence is about **who is in the group**, it wants a standard deviation;
- if the sentence is about **how well the group's average is known**, it wants a standard error;
- if the label is missing, work out $\sqrt{n}$ from the reported sample size and see which of the two candidate values the reported figure is consistent with, then say in your write-up that you had to infer it.

:::{source-note}
:claims: claim-se-is-precision, claim-se-formula, claim-2sd-covers-95, claim-plus-minus-ambiguity
:sources: source-altman-bland-se

These sources support the distinction between a standard deviation as a measure of how much individuals vary and a standard error as a measure of the precision of an estimated mean, the relation between the two through the square root of the sample size, the coverage of a two-standard-deviation band, and the finding about unlabelled plus-or-minus notation together with the editorial response to it. The cohort, the four test sentences, and the reading rule are original teaching material.
:::
