# Why the repeats came out in a bell shape at all

Look again at what the second scene quietly assumed.

The chart of a thousand repeat cohort means was drawn as a smooth bell curve, and the shaded band was read off it using the same 68 and 95 figures you learned for the normal distribution. Both moves need a licence. Nothing so far has established that repeat means arrange themselves in a normal shape, and the cohort they came from is not normal: its histogram leans right, with a longer tail towards the high readings than towards the low ones.

Skewed data going in. A symmetric bell coming out. Something has to justify that.

## The result that justifies it

:::{theorem}
:id: theorem-central-limit

**Central limit theorem.** Let $X_1,\ldots,X_n$ be independent observations drawn from the same population, with finite mean $\mu$ and finite variance $\sigma^2$. For every $n$,

$$
\mathrm{E}(\bar X)=\mu
\qquad\text{and}\qquad
\mathrm{Var}(\bar X)=\frac{\sigma^2}{n}.
$$

The central limit theorem adds the asymptotic shape result: as $n$ grows, the standardized sampling distribution of $\bar X$ approaches a normal distribution. The population itself need not be normal, but the stated independence, common-population, and finite-variance conditions matter.
:::

Take the three parts one at a time, because each one is doing separate work in this lesson.

**Approximately normal in the limit.** This is the striking part. A population may be skewed, lumpy, or bounded at zero, yet its sample means can approach a bell shape as $n$ grows. "Regardless of shape" does not mean regardless of all conditions: dependence, mixtures of changing populations, or a distribution without finite variance fall outside this statement.

**Centred at the population mean.** This identity is exact under the stated sampling model, not an approximation that waits for a large sample. The repeat means average to the population's own mean, so the sample mean is aiming at the right target. The observed 142 estimates that target; it does not reveal it.

**Variance $\sigma^2/n$, exactly.** Independence makes the variances in the average add, so the standard deviation of the sampling distribution is $\sigma/\sqrt{n}$ for every $n$ under these conditions. This spread identity is not the asymptotic part of the theorem. In practice $\sigma$ is unknown, so the sample standard deviation $s$ is substituted and $s/\sqrt{n}$ is reported as an estimated standard error.

## What "enough" means, and where it fails

The theorem describes a limit as $n$ grows. Every real study has a finite $n$, so the practical question is whether a normal approximation is accurate enough for the intended use. The theorem supplies no universal sample-size threshold.

Use this decision order:

1. Check whether the observations can reasonably be treated as independent draws from one population with finite variance. If not, this version of the theorem does not license a normal band.
2. If the population is known to be normal, its sample mean is normal at every sample size.
3. Otherwise, use knowledge of the population shape and tail behaviour, together with a distribution-specific calculation or a prespecified simulation when available. Strong skew or rare extreme values can make convergence slow.
4. Do not use the largest value in one observed sample to declare the population tail harmless. A rare tail can simply be absent from that sample.

The fictional cohort is right-skewed, and $n=60$ alone does not prove that a normal approximation is accurate. The bell curve earlier in the lesson is therefore labelled as a model illustration. Its 68% and 95% readings are conditional on that normal model, not conclusions extracted from the observed maximum.

:::{callout}
:kind: note

The theorem is about the **mean**, and it says nothing about the individual readings. No amount of extra recruitment changes the population distribution from which those readings are drawn. If that population is right-skewed, collecting more observations does not make its individuals normal; only the sampling distribution of their average can approach normality. Every sentence in this lesson that mentions a bell shape is a sentence about sample means or an explicitly hypothetical individual-value model.
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

At $n = 25$, the sample size by itself does not justify reading 68% and 95% from a normal curve for a strongly right-skewed time variable. The team needs evidence about the population shape, a distribution-specific model or simulation, or a method that does not rely on that approximation. At $n = 400$, approximate normality of the mean is more plausible if the observations are independent draws from one finite-variance population, but the number 400 is not proof by itself. The individual dispensing times remain exactly as skewed as they were; only the sampling distribution of their average can approach normality. And the colleague has attached the theorem to the wrong quantity. It is a statement about the distribution of sample means, not about the measurements themselves.

:::{source-note}
:claims: claim-central-limit-theorem, claim-clt-skew-and-n30, claim-2sd-covers-95
:sources: source-nist-normal-clt, source-kwak-kim-clt, source-altman-bland-se

These sources support the bounded statement of the central limit theorem used above and the 68% and 95% coverage readings for a normal distribution. Under the stated sampling conditions, sample means approach normality as sample size grows even when the population is skewed, are centred at the population mean, and have variance $\sigma^2/n$. The sources do not supply a universal finite-sample threshold. The decision order, pharmacy example, cohort, and failure cases are original synthesis.
:::
