# Logs split products, not sums

:::{misconception}
:id: misconception-log-sum

The valid product law does **not** imply $\log(M+N)=\log M+\log N$.

For base 10, $\log(10+90)=\log100=2$, while $\log10+\log90=1+\log90\approx2.95$.

The law works for products because $b^u b^v=b^{u+v}$. Addition inside a logarithm has no corresponding exponent law.
:::

Domain checking also comes first. An algebraic transformation that asks for $\ln(-3)$ has left the real-logarithm domain even if later calculator steps produce an error code rather than an explanation.

:::{source-note}
:claims: claim-log-inverse, claim-log-laws
:sources: source-nist-dlmf-log

The counterexample and misconception repair are original mathematical synthesis from the logarithm definition.
:::
