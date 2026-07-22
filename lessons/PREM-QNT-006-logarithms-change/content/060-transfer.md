# Recover a half-life from two observations

A fictional signal follows $A(t)=A_0(1/2)^{t/h}$, where $h>0$ is its half-life. After 14 hours, the ratio $A/A_0$ is 0.20. Estimate $h$.

## Feedback after a complete attempt

$$0.20=2^{-14/h}.$$

Take logs of the positive dimensionless ratio:

$$\ln0.20=-\frac{14}{h}\ln2.$$

Therefore

$$h=-\frac{14\ln2}{\ln0.20}\approx6.03\text{ h}.$$

The sign is sensible: both $\ln0.20$ and the exponent are negative, while $h$ is positive. A reverse check gives $(1/2)^{14/6.03}\approx0.20$.

This estimates a parameter inside the stated fictional model; it does not establish that any measured system follows exact exponential decay.

:::{source-note}
:claims: claim-log-inverse, claim-log-laws, claim-log-ratio
:sources: source-nist-dlmf-log, source-nist-si-log

The signal model, values, solution, and boundary statement are original.
:::
