# Scale a box and recover a direction

This cumulative exercise uses a fictional coordinate workspace. It represents no patient, scan, lesion, device, or real procedure.

:::{check}
:id: check-clinical-wrap-up

**Part A — Scale a box.** A rectangular box measures 10 units by 8 units by 5 units. Calculate its volume. A similar box has every linear dimension multiplied by 1.2. Find its volume scale factor and scaled volume.

**Part B — Recover a direction.** A marker lies 24 units left and 7 units above the origin. Calculate its straight-line distance from the origin and its counterclockwise standard-position direction. Report the direction in degrees and radians. Explain how the coordinate signs change the interpretation of a one-argument arctangent result, and state a bound check for the triangle.
:::

## Feedback after a complete attempt

For Part A,

$$V=(10)(8)(5)=400\ \text{cubic units}.$$

The linear scale factor is 1.2. Because volume carries three length dimensions, the volume factor is

$$1.2^3=1.728.$$

The scaled volume is therefore

$$400(1.728)=691.2\ \text{cubic units}.$$

For Part B, the Pythagorean relation gives

$$d=\sqrt{(-24)^2+7^2}=\sqrt{625}=25\ \text{units}.$$

The acute reference angle uses the vertical-to-horizontal component ratio:

$$\tan\alpha=\frac{7}{24},\qquad \alpha=\arctan\left(\frac{7}{24}\right)\approx16.26^\circ.$$

The horizontal coordinate is negative and the vertical coordinate is positive, so the marker is in quadrant II. Its standard-position direction is

$$\theta=180^\circ-\alpha\approx163.74^\circ.$$

The raw one-argument value $\arctan(7/(-24))\approx-16.26^\circ$ is a principal value, not the quadrant-II standard direction. Converting the interpreted direction gives

$$163.74^\circ\left(\frac{\pi\ \text{rad}}{180^\circ}\right)\approx2.8578\ \text{rad}.$$

The straight-line distance is the hypotenuse. The bound check passes because 25 units exceeds each component magnitude and $25^2=24^2+7^2$.

:::{source-note}
:claims: claim-geometric-scaling, claim-right-triangle-geometry, claim-right-triangle-ratios, claim-angle-conversion, claim-inverse-trig, claim-quadrant-direction
:sources: source-nasa-geometry-trig, source-nist-dlmf-trig, source-nist-si-angle

NASA supports geometric scaling, the Pythagorean relation, right-triangle ratios, and coordinate conversion; NIST supports principal inverse-trigonometric values and degree-radian conversion. The box, marker, values, questions, and solution are original.
:::
