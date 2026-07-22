# Tripling a length does not triple an area

A fictional square detector changes side length from 4 units to 12 units. A report says its active area also triples.

The side ratio is $12/4=3$, but area depends on the square of length:

$$
\frac{12^2}{4^2}=\left(\frac{12}{4}\right)^2=3^2=9.
$$

The report confused linear scaling with quadratic scaling. This lesson asks four questions whenever a power appears: What is the base? What is the exponent acting on? What inverse root is valid in the declared domain? What scale should the result have?

## Starting check

- Is $2^3\cdot2^4$ equal to $2^7$ or $4^7$?
- Does $x^2=25$ have one real solution or two?
- Is $\sqrt{x^2}$ always equal to $x$?

If exponent laws feel memorized but fragile, expand one small integer case into repeated factors before using the symbolic rule.

:::{source-note}
:claims: claim-power-notation, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

NIST documents power-of-ten notation and the use of magnitude estimates for reasonableness. The detector and scaling diagnosis are original.
:::

## Accessibility and alternatives

Every exponent and root is stated in prose and symbols. No task relies on superscript size, color, dragging, or a diagram. Read $x^{3/2}$ aloud as “x to the three-halves power.”
