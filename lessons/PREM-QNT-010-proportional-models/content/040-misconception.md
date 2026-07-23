# A smooth pattern does not select the model

:::{misconception}
:id: misconception-smooth-means-direct

Before reading further, commit to an answer: the coordinates $(2,8)$, $(4,4)$, and $(8,2)$ form a smooth, predictable decrease. Does that make the relationship directly proportional? Which calculation will decide?

A tempting shortcut is “smooth and predictable means directly proportional.” Test that shortcut rather than accepting it. The ratios $y/x$ are 4, 1, and 0.25, so the direct invariant fails. Every product $xy$ is 16, so the inverse invariant succeeds.

The repair is specific: direct proportionality requires $y/x$ to remain constant, whereas inverse proportionality requires $xy$ to remain constant. These coordinates support $y=16/x$, not a direct model.
:::

For approximate observations, compare candidate invariants and residuals rather than demanding exact equality. A convincing fit still does not prove causation or erase measurement uncertainty.

**Recheck before reading the feedback:** For $(3,18)$, $(6,9)$, and $(9,6)$, is the relationship direct or inverse? Calculate the deciding invariant.

**Recheck feedback:** The ratios are 6, 1.5, and $2/3$, while every product is 54. The relationship is inverse: $y=54/x$.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

NIST supports the mathematical relations and the use of scatterplots and transformations to inspect relationships. The counterexample and repair are original.
:::
