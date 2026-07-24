# Solve a threshold time and check it

An illustrative cell-culture signal follows $N(t)=320(1.18)^t$. Find when it reaches 1000 under the model. The values are invented for this teaching example and do not describe a specific culture.

:::{worked-example}
:id: worked-example-threshold

**1. Isolate the exponential factor.**

$$\frac{1000}{320}=1.18^t,$$

so $3.125=1.18^t$.

**2. Estimate.** Since $1.18^5\approx2.29$ and $1.18^{10}\approx5.23$, the time lies between 5 and 10 intervals.

**3. Take logs of both positive sides.**

$$\ln3.125=t\ln1.18,$$

$$t=\frac{\ln3.125}{\ln1.18}\approx6.88.$$

**4. Check.** $320(1.18)^{6.88}\approx1000$; the result lies inside the estimated interval.

**5. Interpret.** The continuous-time threshold under this fictional model is about 6.88 intervals. If observations occur only after completed intervals, compare interval 6 and 7 rather than rounding without context.
:::

:::{check}
:id: check-log-solution

Why must the ratio $1000/320$ be formed before taking a logarithm?

**Feedback after attempting:** It isolates the dimensionless growth factor and keeps the logarithm's argument positive and comparable to $1.18^t$.
:::

:::{source-note}
:claims: claim-log-inverse, claim-log-laws, claim-log-ratio, claim-exponential-parameterizations
:sources: source-nist-dlmf-log, source-nist-si-log

The illustrative cell-culture signal, numbers, derivation, and interpretation are original applications of the sourced logarithm framework.
:::
