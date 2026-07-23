# Audit a rotated panel

A fictional rigid rectangular panel is 12 units long and 5 units wide. Its 12-unit edge is tilted $30^\circ$ above the positive horizontal direction, and its perpendicular 5-unit edge points toward the upper left. The panel rests with its lowest corner at height zero. Decide whether its highest corner fits below an opening 10 units high. Then predict the height and area factors for a similar panel with every length multiplied by 0.8.

## Feedback after a complete attempt

This is not one right-triangle component. Both perpendicular edges contribute to the height. The 12-unit edge contributes

$$12\sin30^\circ=6,$$

and the 5-unit edge is at $120^\circ$, so its upward contribution is

$$5\sin120^\circ=5\cos30^\circ\approx4.33.$$

The total height is about $10.33$ units, so the panel exceeds the opening by about $0.33$ unit. A coordinate check for the long edge gives horizontal and vertical components $(12\cos30^\circ,12\sin30^\circ)\approx(10.39,6)$, whose squared lengths sum to $12^2$.

Scaling every length by 0.8 makes the height factor 0.8, so the new height is about $8.26$ units. Area has two length dimensions, so its factor is $0.8^2=0.64$; the original area is 60 square units and the scaled area is 38.4 square units. The angle is $30^\circ=\pi/6$ radians, and $\arctan(6/10.39)$ reconstructs the first-quadrant direction as about $30^\circ$.

The context is fictional and the calculation is not engineering certification.

:::{source-note}
:claims: claim-geometric-scaling, claim-right-triangle-geometry, claim-right-triangle-ratios, claim-angle-conversion, claim-inverse-trig
:sources: source-nasa-geometry-trig, source-nist-dlmf-trig, source-nist-si-angle

The rotated panel, numbers, clearance decision, reconstruction, and boundary statement are original.
:::
