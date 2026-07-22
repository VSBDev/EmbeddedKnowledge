# Use a root to recover a scale

A fictional square array contains $N=7.29\times10^6$ cells arranged with the same number $s$ along each side. Find $s$.

:::{worked-example}
:id: worked-example-square-array

**1. Model.** $N=s^2$ with domain $s\ge0$ because $s$ is a count along a side.

**2. Estimate scale.** Since $N$ is near $10^7$, $s$ should be near $10^{3.5}$, a few thousand.

**3. Apply the principal root.**

$$
s=\sqrt{7.29\times10^6}=\sqrt{7.29}\sqrt{10^6}=2.7\times10^3=2700.
$$

**4. Verify.** $(2.7\times10^3)^2=7.29\times10^6$.

**5. Interpret.** The algebraic equation $s^2=N$ has candidates $s=\pm\sqrt N$, but the declared nonnegative count domain retains only 2700.
:::

:::{check}
:id: check-root-scale

Why would $2.7\times10^6$ be impossible before squaring it exactly?
:::

Squaring a million-scale number produces a trillion-scale result, far above $7.29\times10^6$.

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

The array, derivation, and domain check are original applications of power notation and magnitude reasoning.
:::
