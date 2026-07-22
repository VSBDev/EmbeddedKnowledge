# The exponent does not follow the decimal point

Before reading on, predict the normalized form of $0.00042$ and state why the exponent has its sign.

:::{misconception}
:id: misconception-decimal-direction

A tempting rule is: “I moved the decimal to the right, so the exponent should be positive.” That rule describes the editing motion but not the value.

The number $0.00042$ is smaller than 1. Its normalized coefficient is $4.2$, so the power of ten must shrink $4.2$ back below 1:

$$
0.00042=4.2\times10^{-4}.
$$

A positive exponent would fail the value check because $4.2\times10^4=42{,}000$.

Use **value preservation** instead of a direction slogan:

1. Choose the coefficient with one nonzero digit before its decimal point.
2. Ask which power of ten reconstructs the original value.
3. Expand the power once if the sign is uncertain.

Now recheck with $63{,}000$. The coefficient is $6.3$, and $6.3$ must grow to recover the original number, so $63{,}000=6.3\times10^4$.
:::

The same compensation idea governs re-normalization. In $30\times10^7$, changing 30 to 3 divides the coefficient by 10, so the power must multiply the scale by 10: $3\times10^8$.

:::{source-note}
:claims: claim-normalized-notation, claim-power-ten-arithmetic
:sources: source-nist-sp811

NIST's normalized coefficient and exponent notation support the value-preservation test. The error model and contrasting examples are original and are presented as a tempting boundary error, not a claim about prevalence.
:::

