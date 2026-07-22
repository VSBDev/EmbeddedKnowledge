# Audit a near-square scaling model

A fictional process returns approximate observations:

| Input $x$ | Observed $y$ | $y/x^2$ |
| ---: | ---: | ---: |
| 1 | 6.1 | 6.100 |
| 2 | 24.2 | 6.050 |
| 4 | 95.5 | 5.969 |
| 8 | 386.0 | 6.031 |

Assess the candidate model $\widehat y=6x^2$ and predict at $x=6$.

## Feedback after a complete attempt

The near-constant $y/x^2$ values support a square-law candidate with $p=2$ and $k\approx6$. Model predictions for the observed inputs are 6, 24, 96, and 384. Residuals $y-\widehat y$ are 0.1, 0.2, -0.5, and 2.0.

At $x=6$,

$$\widehat y=6(6^2)=216.$$

This is interpolation because 6 lies between observed inputs 4 and 8. The largest absolute residual occurs at $x=8$, but residual size should also be judged against response scale and measurement context. The model is an economical summary, not proof of a mechanism.

All values are fictional, and the calculation is not forecasting or engineering advice.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

The dataset, candidate, residual audit, prediction, and boundary statement are original.
:::
