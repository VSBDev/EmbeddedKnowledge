# Read powers as repeated structure

For positive integer $n$, $a^n$ means $n$ repeated factors of $a$. That definition explains the laws rather than merely naming them:

$$a^m a^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n}\ (a\ne0),\qquad (a^m)^n=a^{mn}.$$

Also $(ab)^n=a^n b^n$. This rule applies to a product, not a sum: $(a+b)^2$ requires distribution.

For integer exponents, the product rule follows by joining repeated factors, the quotient rule follows by cancelling common nonzero factors, and the power rule follows by repeating the whole group. Zero and negative exponents preserve those laws through the reciprocal definition:

$$a^0=1,\qquad a^{-n}=\frac1{a^n},\qquad a\ne0.$$

:::{definition}
:id: definition-rational-exponent

Write $m/n$ in lowest terms with $n>0$. Then $a^{m/n}=(\sqrt[n]{a})^m$ when that real root exists. Every rational exponent is allowed when $a>0$. When $a=0$, require $m>0$. When $a<0$, require odd $n$. A negative $m$ also requires $a\ne0$.
:::

For a positive base, the exponent laws extend consistently to rational exponents. To see why, write $r=m/n$ and $s=p/q$, with positive denominators. Both $a^r$ and $a^s$ are positive, and

$$
(a^r a^s)^{nq}=a^{mq+np}.
$$

Therefore $a^r a^s$ is the unique positive $(nq)$th root represented by $a^{r+s}$. The same argument for a quotient gives $a^r/a^s=a^{r-s}$, and $((a^r)^s)^{nq}=a^{mp}$ gives $(a^r)^s=a^{rs}$.

Thus $27^{2/3}=(\sqrt[3]{27})^2=9$. For a negative base, first reduce the exponent and evaluate the permitted odd root; do not apply rational power laws without a separate domain check. For example, $(-8)^{2/6}=(-8)^{1/3}=-2$, while $((-1)^2)^{1/2}=1$ but $(-1)^{2(1/2)}=-1$. This failure is why the unrestricted rational laws above require a positive base.

## Powers and order of magnitude

If $x\approx10^k$, then $x^p\approx10^{kp}$. A square doubles the base-10 exponent; a square root halves it. So $\sqrt{10^8}$ should be near $10^4$, not $10^8$.

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

NIST supports the power-of-ten representation and magnitude-checking role. It is not the source for the exponent laws; those laws and their stated domain boundaries are derived above from repeated multiplication, reciprocals, and unique positive roots.
:::
