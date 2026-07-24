# Size a lesion and aim a needle

Geometry and trigonometry can connect an illustrative scan image to a size estimate and a procedure-planning angle.

:::{check}
:id: check-clinical-wrap-up

**Teaching example.** A fictional patient's scan uses author-invented numbers.

**Part A — Estimate volume and scaled volume.** Model a lesion as a sphere of radius $r=5$ mm. Calculate its volume using $V=\tfrac{4}{3}\pi r^3$. A fictional follow-up scan shows every linear dimension larger by a factor of $1.2$. Find the volume scale factor and the follow-up volume.

**Part B — Recover a path and angle.** On an illustrative axial image, the target center lies $40$ mm deep, opposite the skin-surface angle, and $30$ mm lateral, adjacent to that angle, from the entry point. Calculate the straight-line needle path. Form a right-triangle trigonometric ratio, use inverse trigonometry to recover the insertion angle, and report it in both degrees and radians. State a bound check for the triangle.
:::

## Feedback after a complete attempt

For Part A,

$$V=\frac{4}{3}\pi(5)^3=\frac{500}{3}\pi\approx523.6\ \text{mm}^3.$$

Because volume carries three length dimensions, the follow-up volume factor is

$$1.2^3=1.728.$$

The illustrative follow-up volume is therefore

$$523.6(1.728)\approx904.8\ \text{mm}^3.$$

For Part B, the Pythagorean relation gives

$$d=\sqrt{30^2+40^2}=\sqrt{2500}=50\ \text{mm}.$$

Relative to the skin-surface angle, the opposite leg is $40$ mm and the adjacent leg is $30$ mm, so

$$\tan\theta=\frac{40}{30},\qquad \theta=\arctan\left(\frac{40}{30}\right)\approx53.13^\circ.$$

Convert that angle to radians:

$$53.13^\circ\left(\frac{\pi\ \text{rad}}{180^\circ}\right)\approx0.927\ \text{rad}.$$

Both legs are positive, so the angle is acute in quadrant I. The bound check passes because $50$ mm exceeds each leg and $50^2=30^2+40^2$.

All patient, scan, lesion, and path values are fictional and author-invented. This calculation is not procedural guidance or engineering certification.

*Teaching example — illustrative numbers, not medical advice.*
