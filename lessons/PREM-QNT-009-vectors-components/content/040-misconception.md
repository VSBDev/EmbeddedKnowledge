# Add components, not magnitudes

:::{misconception}
:id: misconception-add-magnitudes

The magnitude of $\mathbf u+\mathbf v$ is not generally $\lVert\mathbf u\rVert+\lVert\mathbf v\rVert$. That equality requires the vectors to point in the same direction.

For $\mathbf u=(3,0)$ and $\mathbf v=(-3,0)$, both magnitudes are 3, but

$$\mathbf u+\mathbf v=(0,0),\qquad\lVert\mathbf u+\mathbf v\rVert=0.$$
:::

Resolve first and add corresponding signed components. Only then reconstruct the magnitude. The triangle bound

$$\lVert\mathbf u+\mathbf v\rVert\leq\lVert\mathbf u\rVert+\lVert\mathbf v\rVert$$

is a useful check, not a universal equality.

:::{source-note}
:claims: claim-vector-components, claim-direction-components
:sources: source-nist-dlmf-vectors

The counterexample and repair are original teaching expression based on standard component arithmetic.
:::
