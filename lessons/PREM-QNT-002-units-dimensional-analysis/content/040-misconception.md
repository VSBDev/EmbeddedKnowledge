# A squared unit needs a squared factor

Suppose a fictional sensor pad has area $0.32\text{ m}^2$. A tempting conversion is

$$
0.32\text{ m}^2\times\frac{100\text{ cm}}{1\text{ m}}=32\text{ m}\cdot\text{cm}.
$$

The number 32 may look familiar, but the unit audit exposes the problem: only one of the two metre factors cancelled.

:::{misconception}
:id: misconception-powered-unit

The relation $1\text{ m}=100\text{ cm}$ applies to every length factor. Because $\text{m}^2=\text{m}\times\text{m}$, square the entire conversion factor:

$$
0.32\text{ m}^2
\times\left(\frac{100\text{ cm}}{1\text{ m}}\right)^2
=0.32\times10{,}000\text{ cm}^2
=3200\text{ cm}^2.
$$

For a cubed unit, cube the factor. For a rate, convert each numerator and denominator unit in the power where it occurs.
:::

A quick magnitude check agrees: one square metre contains a $100$-by-$100$ grid of square centimetres, so it contains $10{,}000\text{ cm}^2$, not $100\text{ cm}^2$.

:::{source-note}
:claims: claim-conversion-preserves-quantity, claim-powered-units
:sources: source-nist-si-chapter7

The number-times-unit relation supports applying a linear equality to each unit factor. The pad, grid explanation, and misconception repair are original mathematical synthesis.
:::
