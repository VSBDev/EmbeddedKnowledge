# Direction survives the arithmetic

A fictional route moves 8 units east and then 6 units north. One report calls its displacement 14 units because $8+6=14$.

Distance traveled is 14 units, but displacement is a vector from start to finish. With east as positive horizontal and north as positive vertical, its components are $(8,6)$ and its magnitude is

$$\sqrt{8^2+6^2}=10\text{ units}.$$

Its direction is $\operatorname{atan2}(6,8)\approx36.87^\circ$ north of east. The direction did not disappear when the two legs were combined.

This lesson uses a four-part vector audit: **resolve** every vector into signed components, **combine** matching components, **reconstruct** magnitude and direction, then **check** signs, units, and bounds.

## Starting check

- Is temperature alone a scalar or a vector in an ordinary model?
- What sign should a westward horizontal component have if east is positive?
- Can two nonzero vectors add to the zero vector?

If a spatial description is difficult, replace it with an axis convention and a component table before calculating.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-direction-components
:sources: source-nist-dlmf-vectors

NIST DLMF records standard vector component, norm, and angle relations. The route and audit are original.
:::

## Accessibility and alternatives

Every essential vector is given through words, signed component pairs, coordinates, and equations. No task requires seeing an arrow, estimating direction visually, using color, or dragging an object.
