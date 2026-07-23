# Move between exponent and logarithm

This illustrative biomedical-modeling worksheet moves from pure log notation to a derived laboratory index, a cell-culture threshold, and a concentration-decay factor. Complete all four prompts before moving to the feedback.

## 1. Translate

:::{check}
:id: check-practice-translate

Rewrite $5^{-2}=1/25$ with a logarithm.
:::

## 2. Expand validly

:::{check}
:id: check-practice-expand

In an illustrative derived laboratory index, expand $\ln(3x^2/y)$ for $x\ne0$ and $y>0$.
:::

## 3. Solve

:::{check}
:id: check-practice-solve

An illustrative cell-culture signal reaches its threshold when $4^t=70$. Solve for the exponent.
:::

## 4. Read a decay factor

:::{check}
:id: check-practice-decay

In an illustrative drug-concentration model $Q=Q_0(0.82)^t$, state the percentage change per interval.
:::

## Feedback after a complete attempt

1. **Translate:** $\log_5(1/25)=-2$ because 5 raised to $-2$ is $1/25$.
2. **Expand validly:** $\ln3+2\ln|x|-\ln y$. The absolute value keeps the squared factor compatible with the real logarithm when $x<0$.
3. **Solve:** $t=\ln70/\ln4\approx3.065$. The check $4^3=64$ places the answer just above 3.
4. **Read a decay factor:** The factor 0.82 retains 82%, so the quantity decreases by 18% per interval.

## Recovery route

- Logarithmic and exponential forms do not match: identify base, exponent, and result in that order.
- A log law is applied to a sum: recombine or evaluate the sum before logging.
- Negative or zero argument: inspect the real domain before calculating.
- Time has the wrong sign: check whether the factor represents growth or decay.
- Decimal answer seems opaque: bracket it between nearby integer powers and substitute back.

:::{source-note}
:claims: claim-log-inverse, claim-log-laws, claim-log-ratio, claim-exponential-parameterizations
:sources: source-nist-dlmf-log, source-nist-si-log

All practice, feedback, recovery guidance, and biomedical teaching scenarios are original and illustrative.
:::
