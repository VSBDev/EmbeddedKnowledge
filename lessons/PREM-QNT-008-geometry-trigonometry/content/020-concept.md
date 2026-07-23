# Connect shape, scale, and angle

Geometry relates measurements to structure. If a shape is enlarged by linear factor $k$, corresponding lengths scale by $k$, areas by $k^2$, and volumes by $k^3$. The powers come from how many independent length dimensions are multiplied: a rectangle changes from $lw$ to $(kl)(kw)=k^2lw$, while a rectangular solid changes from $lwh$ to $(kl)(kw)(kh)=k^3lwh$. The same dimensional count applies to similar figures and solids.

For a right triangle with legs $a,b$ and hypotenuse $c$,

$$a^2+b^2=c^2.$$

Relative to an acute angle $\theta$:

$$\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}},\quad
\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}},\quad
\tan\theta=\frac{\text{opposite}}{\text{adjacent}}.$$

The labels “opposite” and “adjacent” depend on the chosen angle; the hypotenuse is always opposite the right angle. The ratios also show that $\tan\theta=\sin\theta/\cos\theta$ wherever $\cos\theta\ne0$.

:::{definition}
:id: definition-radian

One **radian** is the angle subtending an arc whose length equals the circle radius. A full turn is $2\pi$ radians, so $180^\circ=\pi$ radians and $1^\circ=\pi/180$ radians.
:::

## Unit-circle meaning

On a unit circle centered at the origin, the point reached by angle $\theta$ measured counterclockwise from the positive horizontal axis has coordinates

$$(\cos\theta,\sin\theta).$$

This extends sine and cosine beyond acute triangles and supplies signs by quadrant. The unit-circle equation is $x^2+y^2=1$. Substituting $x=\cos\theta$ and $y=\sin\theta$ gives $\cos^2\theta+\sin^2\theta=1$.

## Recovering an angle

If a right triangle has opposite/adjacent ratio $r$, then $\theta=\arctan(r)$ returns a principal angle. For real inputs, the usual principal ranges are $[-90^\circ,90^\circ]$ for arcsine, $[0^\circ,180^\circ]$ for arccosine, and $(-90^\circ,90^\circ)$ for arctangent. Calculator angle mode must match the requested unit.

For a standard-position direction from coordinates $(x,y)$, the signs identify the quadrant. When $x\ne0$, first find the acute reference angle $\alpha=\arctan(|y/x|)$, then use $\alpha$ in quadrant I, $180^\circ-\alpha$ in quadrant II, $180^\circ+\alpha$ in quadrant III, or $360^\circ-\alpha$ in quadrant IV. If $x=0$, the direction is $90^\circ$ for $y>0$ or $270^\circ$ for $y<0$. For example, $(-3,4)$ gives $\alpha\approx53.13^\circ$ but a quadrant-II direction of about $126.87^\circ$. A raw one-argument arctangent cannot choose that quadrant from the ratio alone.

:::{source-note}
:claims: claim-geometric-scaling, claim-right-triangle-geometry, claim-right-triangle-ratios, claim-trig-functions, claim-angle-conversion, claim-unit-circle, claim-inverse-trig, claim-quadrant-direction
:sources: source-nasa-geometry-trig, source-nist-dlmf-trig, source-nist-si-angle

NASA supports geometric dimensions, right-triangle relations, ratios, and coordinate conversion; NIST supports trigonometric principal values and exact degree-radian conversion. The explanations and examples are original synthesis.
:::
