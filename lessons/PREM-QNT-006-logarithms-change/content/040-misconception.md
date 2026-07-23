# Logs split products, not sums

Suppose an illustrative biomedical monitor combines two positive signal contributions before applying a base-10 logarithm. The contributions are 10 and 90 in the same arbitrary units; the monitor story supplies context, but the mathematical question is still whether a logarithm can split their sum.

:::{check}
:id: check-predict-log-sum

Before calculating, decide whether $\log(10+90)$ should equal $\log10+\log90$. Commit to yes or no and name the exponent law you think applies.
:::

:::{misconception}
:id: misconception-log-sum

The valid product law does **not** imply $\log(M+N)=\log M+\log N$.

For base 10, $\log(10+90)=\log100=2$, while $\log10+\log90=1+\log90\approx2.95$.

The law works for products because $b^u b^v=b^{u+v}$. Addition inside a logarithm has no corresponding exponent law.
:::

Domain checking also comes first. An algebraic transformation that asks for $\ln(-3)$ has left the real-logarithm domain even if later calculator steps produce an error code rather than an explanation.

:::{check}
:id: check-repair-log-sum

Recheck the rule with two new illustrative signal contributions: for base 10, does $\log(2+8)$ equal $\log2+\log8$?

**Feedback after attempting:** No. The left side is $\log10=1$, while the right side is $\log(2\times8)=\log16$. Addition inside a logarithm must be evaluated as a sum; only multiplication permits the product law.
:::

:::{source-note}
:claims: claim-log-inverse, claim-log-laws
:sources: source-nist-dlmf-log

The biomedical-monitor framing is illustrative. The counterexample and misconception repair are original mathematical synthesis from the logarithm definition.
:::
