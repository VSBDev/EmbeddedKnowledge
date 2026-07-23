# Identify a model by what stays invariant

In this lesson a *model* means one of the fitted quantitative relationships below: an economical description judged by fit and residuals, not a claim about mechanism.

Three related families can be written as power laws.

| Family | Equation | Exact invariant | If $x$ is multiplied by $c$ |
| --- | --- | --- | --- |
| Direct | $y=kx$ | $y/x=k$ | $y$ is multiplied by $c$ |
| Inverse | $y=k/x$ | $xy=k$ | $y$ is divided by $c$ |
| Power | $y=kx^p$ | $y/x^p=k$ | $y$ is multiplied by $c^p$ |

Direct and inverse models are the cases $p=1$ and $p=-1$. A power with $p=0$ is constant with respect to $x$, not directly proportional.

## Parameters from exact points

For two exact points with positive responses and distinct positive inputs $x_1\ne x_2$, use the same valid logarithm base throughout:

$$\frac{y_2}{y_1}=\left(\frac{x_2}{x_1}\right)^p,$$

so

$$p=\frac{\log(y_2/y_1)}{\log(x_2/x_1)},\qquad k=\frac{y_1}{x_1^p}.$$

## Log-log linearization

For positive $x,y,k$,

$$\log y=\log k+p\log x.$$

Thus coordinates $(\log x,\log y)$ follow a line with slope $p$ and intercept $\log k$ under an exact power law. The logarithm base changes the coordinate numbers but not the fitted slope when used consistently.

## Checking a candidate

A scatterplot can expose relationship structure, but shape alone does not establish a law. Calculate fitted values $\widehat y$ and residuals $e=y-\widehat y$; look for systematic sign patterns, changing spread, or influential points. Interpret the candidate within its declared assumptions; a close fit alone does not establish causation.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

NIST supports powers/logarithms and the roles of scatterplots and transformations in checking relationships. The family comparison and audit are original synthesis.
:::
