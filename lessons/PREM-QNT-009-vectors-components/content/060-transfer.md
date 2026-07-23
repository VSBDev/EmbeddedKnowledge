# Audit a changed angle convention

A fictional imaging-stage calibration records vector $\mathbf a$ as 12 units at $30^\circ$ clockwise from the positive vertical axis. Its component system uses positive horizontal to the right and positive vertical upward. A draft calculation treated the angle as if it were measured counterclockwise from the positive horizontal axis. After $\mathbf a$, the stage applies $\mathbf b=(-4,7)$ units. Audit the convention error, then find the correct resultant vector, magnitude, and standard direction measured counterclockwise from positive horizontal.

## Feedback after a complete attempt

Changing the reference axis changes which trigonometric function gives each component. Here,

$$\mathbf a=(12\sin30^\circ,12\cos30^\circ)\approx(6,10.392).$$

The draft pair $(10.392,6)$ has the expected positive signs, so a sign check alone would not expose the swapped angle convention.

Combine componentwise:

$$\mathbf r=\mathbf a+\mathbf b\approx(2,17.392).$$

Reconstruct:

$$\lVert\mathbf r\rVert\approx\sqrt{2^2+17.392^2}\approx17.507\text{ units},$$

$$\theta=\operatorname{atan2}(17.392,2)\approx83.44^\circ.$$

Both resultant components are positive, so quadrant I is consistent. The magnitude is below $12+\sqrt{65}\approx20.06$, satisfying the triangle bound. Units remain units, not square units. The transferable rule is to project onto the declared axes rather than attach cosine permanently to the horizontal component.

The calibration setting is fictional and is not equipment guidance.

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-direction-components, claim-triangle-inequality
:sources: source-nist-dlmf-vectors

The calibration setting, convention error, numbers, reconstruction, and boundary statement are original.
:::
