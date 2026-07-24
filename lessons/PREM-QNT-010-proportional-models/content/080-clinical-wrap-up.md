# Compare fictional clearance models

This is a mathematical model-selection case about fictional clearance. It does not support treatment or a patient-care decision.

Let mass $M$ be measured in kg and fictional clearance $CL$ in L/h. Two candidate models share the exact anchor $(M,CL)=(1,3.5)$:

- Model D: direct proportionality, $CL=aM$.
- Model P: a supplied power exponent, $CL=bM^{0.75}$.

A separate approximate observation is $(M,CL)=(16,29)$. The exponent and every value are author-invented.

:::{check}
:id: check-clinical-allometric-scaling

1. Recover $a$ and $b$ from the shared anchor.
2. Predict $CL$ at $M=16$ under each model, calculate residuals as observed minus predicted, and choose which candidate is closer to the approximate observation.
3. For the closer candidate, predict $CL$ at $M=81$ and state the scale-factor rule for doubling mass.
4. Log-linearize the closer candidate and identify its log-log slope, intercept, and required positivity condition.
5. Explain why the comparison does not establish a true biological or causal law, and name one additional observation that would better discriminate the candidates.
:::

Record the comparison and its limitations before opening the final feedback scene.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

NIST supports the power and logarithm relations and the use of residuals to compare candidate relationships. The competing models, values, and fictional clearance setting are original.
:::
