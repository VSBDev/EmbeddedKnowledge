# Connect shape, scale, and angle

Geometry relates measurements to structure. If a shape is enlarged by linear factor $k$, corresponding lengths scale by $k$, areas by $k^2$, and volumes by $k^3$.

For a right triangle with legs $a,b$ and hypotenuse $c$,

$$a^2+b^2=c^2.$$

Relative to an acute angle $\theta$:

$$\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},\quad
\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},\quad
\tan\theta=\frac{\text{opposite}}{\text{adjacent}}.$$

The labels “opposite” and “adjacent” depend on the chosen angle; the hypotenuse is always opposite the right angle.

:::{definition}
:id: definition-radian

One **radian** is the angle subtending an arc whose length equals the circle radius. A full turn is $2\pi$ radians, so $180^\circ=\pi$ radians and $1^\circ=\pi/180$ radians.
:::

## Unit-circle meaning

On a unit circle centered at the origin, the point reached by angle $\theta$ measured counterclockwise from the positive horizontal axis has coordinates

$$(\cos\theta,\sin\theta).$$

This extends sine and cosine beyond acute triangles and supplies signs by quadrant. It also gives $\sin^2\theta+\cos^2\theta=1$ from the circle equation.

## Recovering an angle

If a right triangle has opposite/adjacent ratio $r$, then $\theta=\arctan(r)$ returns a principal angle. Context must still identify the intended quadrant. Calculator angle mode must match the requested unit.

:::{source-note}
:claims: claim-trig-functions, claim-angle-conversion, claim-unit-circle
:sources: source-nist-dlmf-trig, source-nist-si-angle

NIST supports trigonometric definitions/relations and exact degree-radian conversion. The geometric scaling and accessible explanations are original mathematical synthesis.
:::
