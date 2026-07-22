# The unknown is in the exponent

A fictional archive begins with 250 indexed objects and doubles after each completed cycle. When will it first exceed 10,000 objects?

The model is $N=250(2^t)$. Dividing by 250 gives $2^t=40$. The question is no longer ordinary multiplication: **what exponent on 2 produces 40?**

That exponent is $t=\log_2 40\approx5.32$. If only completed cycles count, the first exceeding cycle is 6 because $250(2^5)=8000$ and $250(2^6)=16000$.

This lesson uses logarithms to recover unknown exponents, then checks the answer in the original change model.

## Starting check

:::{check}
:id: check-starting-prerequisites

Answer before reading the feedback.

1. Rewrite $3^4=81$ as a logarithmic statement.
2. Can a real logarithm have argument zero?
3. Does $\log(4+6)$ equal $\log4+\log6$?

**Feedback after attempting:**

1. $\log_3 81=4$ because the logarithm names the exponent on 3.
2. No. For a valid real base, every real power is positive, so a real logarithm requires a positive argument.
3. No. Logarithms split products, not sums: $\log(4+6)=\log10$, whereas $\log4+\log6=\log24$.
:::

If powers are uncertain, return briefly to exponent laws and write a small table of $2^t$ before continuing.

:::{source-note}
:claims: claim-log-inverse, claim-log-ratio, claim-exponential-parameterizations
:sources: source-nist-dlmf-log, source-nist-si-log

NIST sources document logarithm functions and logarithms of dimensionless ratios. The archive, threshold, and teaching sequence are original.
:::

## Accessibility and alternatives

All symbolic relationships are restated in words. No task depends on a plotted curve, color, timing, or calculator layout. Read $\log_b x$ aloud as “log base b of x.”
