# Combine scaling rules in microscope calibration

An idealized microscope calibration treats the field of view as a square. At magnification $M=40$, its side length is $w=0.60$ mm. The supplied calibration says that multiplying $M$ by a factor $c$ divides $w$ by the same factor.

Without converting the prompt into a data table:

1. Identify, write, and parameterize the model for $w$ as a function of $M$.
2. Combine that model with $A=w^2$ to identify the power exponent relating square field area $A$ to magnification.
3. Predict the side length and area at $M=60$.
4. State which supplied assumptions must remain true for the calculation to apply.

## Feedback after a complete attempt

The inverse invariant is $Mw=40(0.60)=24$, so

$$w=\frac{24}{M}.$$

Because $A=w^2$,

$$A=\left(\frac{24}{M}\right)^2=576M^{-2}.$$

The combined exponent is $p=-2$: multiplying magnification by a factor multiplies area by the reciprocal square of that factor. At $M=60$, $w=24/60=0.40$ mm and $A=(0.40)^2=0.16$ square millimetres ($0.16$ mm$^2$).

This result depends on both supplied assumptions: inverse calibration for side length and an unchanged square field geometry. The calculation says nothing about unmodeled instrument behavior or a specimen. The setting and values are fictional training material, not laboratory or clinical guidance.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

The calibration premise, composed model, prediction, and boundary statement are original.
:::
