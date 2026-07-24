# Resolve the force on a joint

Vector components let you track the direction of an illustrative force in a fictional joint-coordinate model.

In this teaching case, two invented forces act at a point representing a joint. This coordinate exercise does not define a bone free body, contact plane, or compression/tension sign convention, so it does not interpret the components as compression, tension, or shear. Take positive horizontal to the right and positive vertical upward, measure every angle counterclockwise from the positive horizontal axis, and measure force in newtons (N).

:::{check}
:id: check-clinical-joint-force

1. Force $\mathbf A$ has magnitude $60$ N at $30^\circ$. Force $\mathbf B$ has magnitude $40$ N at $120^\circ$. Predict each component's sign, then resolve both forces into signed components.
2. Add the forces componentwise to obtain $\mathbf R=\mathbf A+\mathbf B$. Reconstruct its magnitude and use the component signs to choose a quadrant-aware direction.
3. Use $\mathbf A\mathbin{\boldsymbol\cdot}\mathbf B$ to test alignment. Check the result against the angle between the forces.
4. Take the fictional segment axis as the unit vector $\widehat{\mathbf u}=(0,1)$. Find the signed axial scalar projection of $\mathbf R$ along this axis and the magnitude of the perpendicular component; check both against $\lVert\mathbf R\rVert$.
:::
## Feedback after a complete attempt

Force $\mathbf A$ lies in quadrant I, so both components are positive:

$$\mathbf A=(60\cos30^\circ,\,60\sin30^\circ)\approx(51.96,\,30.00)\text{ N}.$$

Force $\mathbf B$ lies in quadrant II, so its horizontal component is negative and its vertical component positive:

$$\mathbf B=(40\cos120^\circ,\,40\sin120^\circ)=(-20.00,\,34.64)\text{ N}.$$

Add corresponding components:

$$\mathbf R=\mathbf A+\mathbf B\approx(31.96,\,64.64)\text{ N}.$$

Therefore,

$$\lVert\mathbf R\rVert=\sqrt{31.96^2+64.64^2}\approx72.1\text{ N},\qquad \theta=\arctan\left(\frac{64.64}{31.96}\right)\approx63.7^\circ.$$

Both components are positive, so the quadrant-I principal value is the final direction.

For alignment,

$$\mathbf A\mathbin{\boldsymbol\cdot}\mathbf B=51.96(-20)+30(34.64)\approx0.$$

The pulls are perpendicular, consistent with $\lVert\mathbf A\rVert\lVert\mathbf B\rVert\cos(120^\circ-30^\circ)=60(40)\cos90^\circ=0$.

Along the fictional segment axis, $\mathbf R\mathbin{\boldsymbol\cdot}\widehat{\mathbf u}\approx64.64$ N, so the signed axial component points in the positive axis direction. The perpendicular component is $\mathbf R-(64.64)\widehat{\mathbf u}\approx(31.96,0)$ N and has magnitude $31.96$ N. These are coordinate components, not claims about compression or shear. The check closes:

$$\lVert\mathbf R\rVert^2\approx64.64^2+31.96^2.$$

*Fictional coordinate exercise with invented values — not a biomechanical model or medical advice.*
