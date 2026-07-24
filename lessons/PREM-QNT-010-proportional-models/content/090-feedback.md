# Feedback after the independent attempts

Open this scene after completing the practice, microscope-calibration, and fictional-clearance prompts.

## Practice feedback

1. For the direct model, $k=y/x=3$, so $y=3x$ and $y(10)=30$.
2. For the inverse model, $k=xy=60$, so $y=60/15=4$; tripling the input divides the response by 3.
3. The power-law response factor is $4^{3/2}=8$.
4. The log-log slope is $p=(4-1)/(2-0)=1.5$. The intercept is 1, so $k=10$.

If an answer differs, identify whether the error came from selecting the invariant, recovering a parameter, or applying a scale factor, then retry with new numbers before proceeding.

## Microscope-calibration feedback

The inverse invariant is $Mw=40(0.60)=24$, so

$$w=\frac{24}{M}.$$

Because $A=w^2$,

$$A=\left(\frac{24}{M}\right)^2=576M^{-2}.$$

The combined exponent is $p=-2$: multiplying magnification by a factor multiplies area by the reciprocal square of that factor. At $M=60$, $w=24/60=0.40$ mm and $A=(0.40)^2=0.16$ mm$^2$.

This result depends on inverse calibration for side length and unchanged square field geometry. It says nothing about unmodeled instrument behavior or a specimen. The setting and values are fictional training material, not laboratory or clinical guidance.

## Fictional-clearance feedback

The shared anchor gives $a=3.5$ and $b=3.5$, so Model D is $CL=3.5M$ and Model P is $CL=3.5M^{0.75}$.

At $M=16$, Model D predicts $56$ L/h, giving residual $29-56=-27$ L/h. Model P predicts

$$CL(16)=3.5(16^{0.75})=3.5(8)=28\ \text{L/h},$$

giving residual $29-28=1$ L/h. Model P is closer to this observation.

Under Model P,

$$CL(81)=3.5(81^{0.75})=3.5(27)=94.5\ \text{L/h},$$

and doubling mass multiplies clearance by $2^{0.75}\approx1.68$.

For $M>0$, $CL>0$, and $b>0$, base-10 logarithms give

$$\log_{10}CL=\log_{10}b+0.75\log_{10}M.$$

The log-log slope is $0.75$, and the intercept is $\log_{10}b=\log_{10}3.5\approx0.544$.

One approximate non-anchor observation only shows that Model P is closer in this comparison; it does not establish a biological mechanism, a causal law, or performance beyond the supplied range. An additional observation at another positive mass—especially one far from both existing masses—would better discriminate the candidates. This fictional calculation does not support treatment or medical advice.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

NIST supports the power and logarithm relations and the use of residual comparisons for model checking. All prompts, values, calculations, and applied settings are original.
:::
