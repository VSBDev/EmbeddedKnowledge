# Rebuild the inverse-change method

## Transfer feedback

Compare this reasoning with your completed transfer attempt:

$$0.20=2^{-14/h}.$$

Taking logs of the positive dimensionless ratio gives

$$\ln0.20=-\frac{14}{h}\ln2,$$

so

$$h=-\frac{14\ln2}{\ln0.20}\approx6.03\text{ h}.$$

The sign is sensible: both $\ln0.20$ and the exponent are negative, while $h$ is positive. A reverse check gives $(1/2)^{14/6.03}\approx0.20$.

## Method

1. State the exponential model and time unit.
2. Isolate a positive dimensionless ratio.
3. Translate “unknown exponent” into a logarithm.
4. Apply log laws only to products, quotients, and powers.
5. Solve, bracket the scale, and substitute into the original model.

## Retrieval

:::{check}
:id: check-synthesis-retrieval

Answer before reading the feedback.

1. What does $\log_bx=y$ say exponentially?
2. Why must a real logarithm's argument be positive?
3. Which exponent law produces the logarithm product law?
4. How are a discrete factor $a$ and continuous rate $k$ related?

**Feedback after attempting:**

1. It says $b^y=x$: the logarithm is the exponent on the base.
2. For a valid positive base, $b^y$ is positive for every real $y$, so no real exponent produces a zero or negative argument.
3. The law $b^u b^v=b^{u+v}$ becomes $\log_b(MN)=\log_bM+\log_bN$ when $M$ and $N$ are positive.
4. For the same time unit, $a=e^k$ and $k=\ln a$.
:::

Complete `assessment.json`. If translation fails, return to the definition. If algebra works but the domain fails, revisit the misconception. If a time is uninterpreted, redo the threshold example and distinguish continuous time from completed intervals.

:::{source-note}
:claims: claim-log-inverse, claim-log-laws, claim-log-ratio, claim-exponential-parameterizations, claim-half-life-relation
:sources: source-nist-dlmf-log, source-nist-si-log

The synthesis uses authoritative logarithm definitions and dimensionless-ratio guidance through an original inverse-change procedure.
:::
