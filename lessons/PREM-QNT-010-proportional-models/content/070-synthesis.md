# Rebuild the proportional-model audit

1. Define variables, units, domain, and whether observations are exact or approximate.
2. Identify candidates using $y/x$, $xy$, $y/x^p$, or scale-factor behavior.
3. Parameterize $k$ and $p$; state the units of $k$.
4. Predict, then compare fitted values and residuals with observations.
5. Check log-log behavior only for positive values and label interpolation versus extrapolation.

## Retrieval

- What invariant distinguishes direct from inverse proportion?
- How does multiplying $x$ by $c$ affect $y=kx^p$?
- What do slope and intercept mean on log-log coordinates?
- Why can a good visual fit still be an inadequate model?

Complete `assessment.json`. If family selection fails, rebuild the invariant columns. If log interpretation fails, redo the exact three-point example. If a plot feels essential, replace it with ordered coordinates, predictions, and residuals before retrying.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

The synthesis applies sourced mathematical and model-checking relations through an original identify-parameterize-predict-check method.
:::
