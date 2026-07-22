# Audit cubic scaling

A fictional spherical storage design states only that capacity $C$ is proportional to the cube of a linear scale $r$: $C=kr^3$, with $k>0$.

One design increases $r$ by a factor of 1.5. Determine the capacity factor. Then find the required $r$ factor for doubling capacity.

## Feedback after a complete attempt

For the first change,

$$\frac{C_2}{C_1}=\left(\frac{r_2}{r_1}\right)^3=1.5^3=3.375.$$

Capacity increases by a factor of 3.375, not 1.5.

For doubling capacity,

$$2=f^3,\qquad f=2^{1/3}\approx1.260.$$

Check: $1.260^3\approx2.00$. The positive root is selected because the scale factor is positive.

:::{source-note}
:claims: claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

The scaling law is supplied as a fictional task assumption. All derivations and checks are original.
:::
