# Read powers as repeated structure

For positive integer $n$, $a^n$ means $n$ repeated factors of $a$. That definition explains the laws rather than merely naming them:

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n}\ (a\ne0),\qquad (a^m)^n=a^{mn}.$$

Also $(ab)^n=a^n b^n$. This rule applies to a product, not a sum: $(a+b)^2$ requires distribution.

Zero and negative exponents preserve the laws:

$$a^0=1,\qquad a^{-n}=\frac1{a^n},\qquad a\ne0.$$

:::{definition}
:id: definition-rational-exponent

For real-number work where the indicated root exists, $a^{1/n}$ denotes the principal $n$th root of $a$, and $a^{m/n}=(a^{1/n})^m$. For even $n$, require $a\ge0$; for negative exponents also require $a\ne0$.
:::

Thus $27^{2/3}=(\sqrt[3]{27})^2=9$. The cube root is defined for negative real inputs, but the real square root is not.

## Powers and order of magnitude

If $x\approx10^k$, then $x^p\approx10^{kp}$. A square doubles the base-10 exponent; a square root halves it. So $\sqrt{10^8}$ should be near $10^4$, not $10^8$.

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

NIST supports the power-of-ten representation and magnitude-checking role. The laws and rational-exponent derivations are original mathematical inference from repeated multiplication and inverse operations.
:::
