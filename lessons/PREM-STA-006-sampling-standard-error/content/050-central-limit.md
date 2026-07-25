# Why the repeats came out in a bell shape at all

Look again at what the second scene quietly assumed.

The chart of a thousand repeat cohort means was drawn as a smooth bell curve, and the shaded band was read off it using the same 68 and 95 figures you learned for the normal distribution. Both moves need a licence. Nothing so far has established that repeat means arrange themselves in a normal shape, and the cohort they came from is not normal: its histogram leans right, with a longer tail towards the high readings than towards the low ones.

Skewed data going in. A symmetric bell coming out. Something has to justify that.

## The result that justifies it

:::{theorem}
:id: theorem-central-limit

**Central limit theorem.** As the sample size $n$ grows, the sampling distribution of the mean becomes approximately normal regardless of the distribution of the original variable, is centred at the population mean, and has a standard deviation approaching $\sigma / \sqrt{n}$, where $\sigma$ is the population standard deviation.
:::

Take the three parts one at a time, because each one is doing separate work in this lesson.

**Approximately normal regardless of the original variable.** This is the striking part. The individual fasting glucose readings lean right; the repeat means do not. The shape of the population washes out of the averages as $n$ grows. Work with a population that is skewed, or lumpy, or bounded at zero, and you still get a bell for the means, provided you take enough of them each time.

**Centred at the population mean.** The result you already used when you treated 142 as an estimate of something. The repeat means pile up around the population's own mean, so the sample mean is aiming at the right target.

**Standard deviation approaching $\sigma / \sqrt{n}$.** The formula from the previous scene, arriving as a consequence rather than an assertion. The theorem quotes the population standard deviation $\sigma$; in practice nobody has it, so the sample's own $s$ stands in for it, which is exactly the substitution the previous scene made when it divided 18 by $\sqrt{60}$.

## What "enough" means, and where it fails

The theorem holds as $n$ grows without limit. Every real study has a finite $n$, so the practical question is how large is large enough, and the answer depends on how far from normal the population is.

A common working convention treats $n = 30$ as sufficient for a population that is not too badly behaved, and this study's 60 sits comfortably past it. That convention is a rule of thumb and not a theorem. Two situations break it:

- **A strongly skewed population.** Hospital length of stay is the standard example: most patients go home in a few days and a small number stay for months. Averages of small samples from a distribution like that stay noticeably lopsided, and 30 will not be enough.
- **A heavy contribution from a few extreme values.** If one observation in a sample can move the mean substantially on its own, the averaging that the theorem relies on has not really happened.

Fasting glucose in this cohort leans right without being extreme: no reading is more than about 2.2 standard deviations above the mean. At $n = 60$ the approximation is a reasonable one, which is why the first chart could be drawn as a bell and read with the 68 and 95 figures.

:::{callout}
:kind: note

The theorem is about the **mean**, and it says nothing about the individual readings. No amount of extra recruitment makes the patients' own distribution normal; the right tail on that histogram is a property of the population and it stays there. What becomes normal is the distribution of the averages. Every sentence in this lesson that mentions a bell shape is a sentence about repeats of the study.
:::

## Retrieval before the next scene

:::{check}
:id: check-clt-conditions
:kind: retrieval

Work these out before reading the answers.

1. A pharmacy records the time from prescription to dispensing for every item. Most take under 10 minutes; a handful take over 4 hours. The audit team plans to report the mean of 25 items and quote a standard error. What is the problem?
2. The same team instead reports the mean of 400 items. Has the shape of the individual dispensing times changed?
3. A colleague says the central limit theorem means fasting glucose is normally distributed. What has been mixed up?
:::

At $n = 25$ from a distribution that skewed, the sampling distribution of the mean is still visibly lopsided, so the neat 68 and 95 readings do not apply and a symmetric band around the mean would misdescribe the repeats. The fix is more items, a different summary such as the median, or a method that does not lean on the approximation. At $n = 400$ the mean is on much safer ground, and the individual dispensing times are exactly as skewed as they always were; nothing about the patients or the pharmacy changed, only what can safely be said about an average of many of them. And the colleague has attached the theorem to the wrong quantity. It is a statement about the distribution of sample means, and it makes no claim at all about the distribution of the measurements themselves.

:::{source-note}
:claims: claim-central-limit-theorem, claim-clt-skew-and-n30
:sources: source-nist-normal-clt, source-kwak-kim-clt

These sources support the statement of the central limit theorem used above, including the approach to normality regardless of the original variable's distribution, the centring on the population mean, the standard deviation approaching the population standard deviation over the square root of the sample size, the finding that a skewed population does not prevent the sample means from approaching normality as the sample grows, and the conventional treatment of about 30 observations as a working threshold. The pharmacy example, the cohort, and the failure cases described here are original teaching material.
:::
