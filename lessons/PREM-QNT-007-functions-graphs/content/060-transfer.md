# Audit a transformed square-root rule

A fictional calibration curve uses distance $x$ in centimetres and signal $h(x)$ in volts:

$$h(x)=-2\sqrt{x-1}+6.$$

:::{check}
:id: check-transfer-calibration

Without relying on a picture, determine its domain, range, starting point, direction of change, and the average rate from $x=2$ to $x=10$.
:::

## Feedback after a complete attempt

The square root requires $x-1\ge0$, so the domain is $x\ge1$. At $x=1$, $h(1)=6$, giving starting point $(1,6)$.

As $x$ grows, $\sqrt{x-1}$ grows; multiplication by -2 makes the output decrease. Therefore the range is $h(x)\le6$.

Values: $h(2)=4$ and $h(10)=0$. The average rate is

$$\frac{0-4}{10-2}=-\frac12.$$

The average rate is $-0.5$ volts per centimetre. Its negative sign agrees with the decreasing rule. These statements completely specify the requested features in a screen-reader and text-only route.

:::{source-note}
:claims: claim-function-notation, claim-transform-inference, claim-average-rate
:sources: source-common-core-functions

The standards source supports the function, transformation, graph-feature, and average-rate relations. The calibration rule, feature audit, and calculations are fictional original material.
:::
