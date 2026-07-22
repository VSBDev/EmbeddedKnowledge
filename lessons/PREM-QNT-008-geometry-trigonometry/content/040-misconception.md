# Inverse sine is not reciprocal sine

:::{misconception}
:id: misconception-inverse-reciprocal

The notation $\sin^{-1}(x)$ often means the inverse function $\arcsin(x)$: it returns an angle whose sine is $x$. It does not mean $1/\sin(x)$, which is the reciprocal function cosecant.

For example,

$$\arcsin(0.5)=30^\circ=\pi/6,$$

whereas $1/\sin(0.5)$ treats 0.5 as an angle input and is a different calculation.
:::

Write `arcsin`, `arccos`, or `arctan` when ambiguity matters. Then label the returned angle unit and use geometric context to select or reject a quadrant.

:::{source-note}
:claims: claim-trig-functions, claim-inverse-trig
:sources: source-nist-dlmf-trig

The distinction and numerical counterexample are original teaching expression based on standard function and inverse-function notation.
:::
