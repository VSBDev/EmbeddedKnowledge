# Use a root to recover a scale

A fictional square array contains $N=6.25\times10^6$ cells arranged with the same number $s$ along each side. Find $s$.

:::{worked-example}
:id: worked-example-square-array

**1. Model.** $N=s^2$ with domain $s\ge0$ because $s$ is a count along a side.

**2. Estimate scale.** Since $10^6<N<10^8$, its principal square root lies between $10^3$ and $10^4$: a few thousand.

**3. Apply the principal root.**

$$
s=\sqrt{6.25\times10^6}=\sqrt{(2.5\times10^3)^2}=2.5\times10^3=2500.
$$

**4. Verify.** $(2.5\times10^3)^2=6.25\times10^6$.

**5. Interpret.** The algebraic equation $s^2=N$ has candidates $s=\pm\sqrt N$, but the declared nonnegative count domain retains only 2500.
:::

:::{check}
:id: check-root-scale

Why would $2.5\times10^6$ be impossible before squaring it exactly?
:::

Squaring a million-scale number produces a trillion-scale result, far above $6.25\times10^6$.

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

NIST supports the notation and magnitude-checking role, not the exponent laws. The array, derivation, and domain check are original applications of the rules derived in the concept scene.
:::
