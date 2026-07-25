# The formula, and the price list hidden inside it

Two things should decide how tightly a sample mean is pinned down, and both are already in your hands.

If the people differ a lot, any sixty of them will average out differently from any other sixty, so a large standard deviation should widen the sampling distribution. If you take a lot of people, the highs and lows inside one draw have more chance to cancel, so a large sample size should narrow it. The formula says exactly that, and it says how the two trade off against each other.

:::{equation}
:label: equation-standard-error-of-the-mean

\mathrm{SE} = \frac{s}{\sqrt{n}}
:::

Read it aloud: the standard error of the mean equals the standard deviation of the data divided by the square root of the number of observations. Here $s$ is the standard deviation computed from the sample, $n$ is how many observations went into the mean, and the standard error comes out in whatever unit $s$ was in.

The square root is the interesting part, and half of this scene is about what it costs you.

:::{worked-example}
:id: worked-example-cohort-standard-error

**The task.** The dinner-timing study measured 60 adults. Fasting glucose had a mean of 142 mg/dL and a standard deviation of 18 mg/dL. How precisely has the study pinned down the mean?

**Step 1. Decide which quantity the question asks for.** The question is about the mean, so the answer is a standard error. The 18 mg/dL already in hand describes how much individual patients differ from one another. It is an input to this calculation and it is not the answer.

**Step 2. Identify $s$ and $n$.** Here $s = 18$ mg/dL and $n = 60$. A common slip is to reach for the number of groups, or the number of nights recorded per person. What belongs in $n$ is the number of observations that went into the mean being reported, and sixty people each contributed one fasting glucose reading to it.

**Step 3. Take the square root of $n$.** $\sqrt{60} = 7.746$.

**Step 4. Divide.** $18 \div 7.746 = 2.324$, so the standard error is 2.32 mg/dL.

**Step 5. Attach the unit and say what it means.** The standard error of the cohort mean is 2.32 mg/dL. Repeat the study on sixty fresh adults from the same list and the new mean would typically land within about 2.3 mg/dL of 142, and would land within about 4.6 mg/dL of it roughly 95 times in 100.

**Step 6. Check it against something you already know.** The standard error should come out smaller than the standard deviation, because dividing by $\sqrt{n}$ shrinks it for any $n$ above 1. It does: 2.32 against 18. It should also carry the unit mg/dL, and it does. A standard error larger than its standard deviation means the division went the wrong way up.
:::

That final ratio deserves a second look. Individual patients scatter with a standard deviation of 18 mg/dL; the study's estimate of their mean scatters with a standard error of 2.32 mg/dL. The estimate is $18 \div 2.32 = 7.75$ times more tightly pinned down than any single patient's reading, and 7.75 is $\sqrt{60}$. Averaging sixty people bought a factor of about eight, which is a genuine bargain, and it is precisely what the formula predicted.

## What the square root costs

Suppose 2.32 mg/dL is not good enough. You want half of it. How many patients?

Halving the standard error means dividing $s / \sqrt{n}$ by two, and since $s$ stays where it is, $\sqrt{n}$ has to double. Doubling $\sqrt{n}$ means multiplying $n$ by four.

**To halve the standard error, quadruple the sample.** Here is the price list for this study, holding $s$ at 18 mg/dL:

| Patients enrolled | Square root of $n$ | Standard error (mg/dL) |
| --- | --- | --- |
| 15 | 3.873 | 4.65 |
| 30 | 5.477 | 3.29 |
| 60 | 7.746 | 2.32 |
| 120 | 10.954 | 1.64 |
| 240 | 15.492 | 1.16 |
| 960 | 30.984 | 0.58 |

Read down the column. Going from 60 patients to 120 buys a drop from 2.32 to 1.64, a factor of about 1.41 and nowhere near a half. Getting the half needs 240. Halving it again needs 960. The fourth patient you recruit improves the estimate far more than the four hundredth does, and every study ever designed has had to live with that.

Turn the formula round and it answers the planning question directly. Squaring both sides of $\mathrm{SE} = s / \sqrt{n}$ and rearranging gives the sample size needed for a target standard error. To reach 1.00 mg/dL with $s = 18$:

:::{equation}
:label: equation-sample-size-from-target

n = \left(\frac{s}{\mathrm{SE}}\right)^{2} = \left(\frac{18}{1.00}\right)^{2} = 324
:::

Three hundred and twenty-four patients, to move from 2.32 to 1.00. Whether that is worth the money, the clinic time, and the extra years of recruitment is a question the arithmetic makes no pretence of answering. What the arithmetic does is put a number on what is being bought, so the people deciding can see the price.

:::{callout}
:kind: note

The formula assumes each observation is an independent draw. Sixty adults each contributing one reading satisfies that closely enough. Sixty readings taken from six patients on ten mornings each does not, because readings from the same person resemble one another, so the effective number of independent observations is nearer six than sixty. Dividing by $\sqrt{60}$ there would advertise a precision the data does not have. Designs that measure people repeatedly need a method built for them, which sits beyond this lesson, and the trap is worth recognising now: $n$ counts independent observations, not rows in a file.
:::

:::{source-note}
:claims: claim-se-formula, claim-se-is-precision
:sources: source-altman-bland-se

These sources support the relation between the standard error, the standard deviation, and the square root of the sample size, the statement that the standard error falls as the sample grows while the standard deviation does not tend to change, and the use of that relation when the size of a study is being planned. The worked figures, the price-list table, and the cohort are original teaching material.
:::
