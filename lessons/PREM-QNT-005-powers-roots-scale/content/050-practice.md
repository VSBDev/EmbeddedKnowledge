# Switch deliberately between power and root

## 1. Combine powers

Simplify $x^5x^{-2}$ for $x\ne0$.

**Feedback:** $x^{5-2}=x^3$. The common base remains $x$.

## 2. Power of a power

Simplify $(3a^2)^3$.

**Feedback:** $3^3a^{2\cdot3}=27a^6$. The outer exponent acts on the entire product.

## 3. Rational exponent

Evaluate $16^{3/4}$ over the reals.

**Feedback:** $(\sqrt[4]{16})^3=2^3=8$ using the principal fourth root.

## 4. Solve and restrict

Solve $y^3=-125$ over the reals.

**Feedback:** $y=\sqrt[3]{-125}=-5$. Odd roots permit negative real inputs; check $(-5)^3=-125$.

## 5. Predict scale before rooting

Without calculating first, place $\sqrt{3.6\times10^9}$ between two consecutive powers of ten. Then estimate it to one significant digit.

**Feedback:** Because $10^8<3.6\times10^9<10^{10}$, the root lies between $10^4$ and $10^5$. Rewrite the radicand as $36\times10^8$ to obtain $\sqrt{36\times10^8}=6\times10^4$.

## Recovery route

- Bases changed while multiplying: expand one case and preserve the shared base.
- Exponents multiplied in a product: distinguish $a^ma^n$ from $(a^m)^n$.
- Negative exponent made the value negative: rewrite it as a reciprocal.
- Root lost a candidate: distinguish principal-root evaluation from solving an equation.
- Exact result has implausible scale: predict the exponent before calculating coefficients.

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-estimation

NIST supports the notation and magnitude-checking role, not the exponent laws. All practice and recovery content applies the original derivations in this lesson.
:::
