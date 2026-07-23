# Recover a distance and direction

A fictional beacon lies at coordinate $(9,12)$ relative to an origin. Find its straight-line distance and its counterclockwise angle from the positive horizontal axis.

:::{worked-example}
:id: worked-example-beacon

**1. Label.** Horizontal leg 9, vertical leg 12, both positive; the point lies in the first quadrant.

**2. Distance.**

$$d=\sqrt{9^2+12^2}=\sqrt{225}=15.$$

**3. Direction.**

$$\tan\theta=\frac{12}{9}=\frac43,$$

so $\theta=\arctan(4/3)\approx53.13^\circ\approx0.9273\text{ rad}$.

**4. Check ratios.** $\cos\theta=9/15=0.6$ and $\sin\theta=12/15=0.8$; $0.6^2+0.8^2=1$.

**5. Check bounds and quadrant.** The distance 15 exceeds both component lengths, and $15^2=9^2+12^2$; both coordinates are positive, so the acute first-quadrant angle is consistent.
:::

:::{check}
:id: check-angle-mode

If a calculator returns approximately 0.9273, why is reporting $0.9273^\circ$ wrong?
:::

The value is in radians. It must be labeled as radians or converted to about $53.13^\circ$.

:::{check}
:id: check-model-choice

Why was tangent the direct ratio for the direction, and how do the coordinate signs constrain the answer?
:::

The two known legs are opposite and adjacent to the requested angle, so tangent uses them without first finding the hypotenuse. Both coordinates are positive, so the standard-position direction must be in quadrant I.

:::{source-note}
:claims: claim-right-triangle-geometry, claim-right-triangle-ratios, claim-angle-conversion, claim-unit-circle
:sources: source-nasa-geometry-trig, source-nist-si-angle

The beacon, values, solution, and checks are original applications of the sourced geometric and angle-unit relations.
:::
