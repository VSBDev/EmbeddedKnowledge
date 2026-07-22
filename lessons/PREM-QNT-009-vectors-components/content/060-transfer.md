# Audit a two-vector route

A fictional route consists of vector $\mathbf a$ with magnitude 12 units at $30^\circ$ counterclockwise from positive horizontal, followed by $\mathbf b=(-4,7)$ units. Find the resultant vector, magnitude, and direction.

## Feedback after a complete attempt

Resolve the first vector:

$$\mathbf a=(12\cos30^\circ,12\sin30^\circ)\approx(10.392,6).$$

Combine componentwise:

$$\mathbf r=\mathbf a+\mathbf b\approx(6.392,13).$$

Reconstruct:

$$\lVert\mathbf r\rVert\approx\sqrt{6.392^2+13^2}\approx14.487\text{ units},$$

$$\theta=\operatorname{atan2}(13,6.392)\approx63.82^\circ.$$

Both resultant components are positive, so quadrant I is consistent. The magnitude is below $12+\sqrt{65}\approx20.06$, satisfying the triangle bound. Units remain units, not square units.

The route is fictional and is not navigation guidance.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components
:sources: source-nist-dlmf-vectors

The route, numbers, reconstruction, and boundary statement are original.
:::
