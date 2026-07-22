# Resolve and reconstruct a directed span

A fictional directed span has magnitude 20 units at $140^\circ$, measured counterclockwise from the positive horizontal axis. Resolve it, normalize it, and reconstruct its magnitude and direction.

:::{worked-example}
:id: worked-example-directed-span

**1. Predict signs.** An angle of $140^\circ$ is in quadrant II, so the horizontal component must be negative and the vertical component positive.

**2. Resolve.**

$$v_x=20\cos140^\circ\approx-15.321,$$

$$v_y=20\sin140^\circ\approx12.856.$$

Thus $\mathbf v\approx(-15.321,12.856)$ units.

**3. Normalize.** Divide by magnitude 20:

$$\widehat{\mathbf v}\approx(-0.7660,0.6428).$$

**4. Reconstruct magnitude.**

$$\sqrt{(-15.321)^2+(12.856)^2}\approx20.$$

**5. Reconstruct direction.**

$$\operatorname{atan2}(12.856,-15.321)\approx140^\circ.$$

**6. Check.** The unit-vector components have squared sum about 1; the signs match quadrant II; neither component magnitude exceeds the vector magnitude.
:::

:::{check}
:id: check-quadrant-aware-direction

Why is $\arctan(12.856/-15.321)\approx-40^\circ$ not the final direction here?
:::

The ratio alone cannot distinguish quadrant II from quadrant IV. The component signs and stated convention require $140^\circ$.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components
:sources: source-nist-dlmf-vectors

The directed span, values, solution, and checks are original applications of the sourced relations.
:::
