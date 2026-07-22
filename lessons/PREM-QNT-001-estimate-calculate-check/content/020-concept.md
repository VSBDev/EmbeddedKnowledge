# Separate the digits from the scale

Scientific notation writes a nonzero number as

$$
a \times 10^n,
$$

where $a$ is the **coefficient** and $n$ is an integer **exponent**. The form is **normalized** when $1 \leq |a| < 10$. The coefficient carries the leading digits; the power of ten carries the scale.

:::{definition}
:id: definition-scientific-notation

**Normalized scientific notation** is $a \times 10^n$ with integer $n$ and exactly one nonzero digit before the coefficient's decimal point: $1 \leq |a| < 10$.
:::

For a negative number, keep the minus sign in the coefficient. For example,

$$
-63{,}000=-6.3\times10^4.
$$

The exponent still describes scale: $10^n$ is positive for every integer $n$, so the sign of a product or quotient comes from the coefficient arithmetic. Zero is the boundary case. Write an exact zero result as $0$; it has no unique normalized exponent because $0\times10^n=0$ for every integer $n$.

For example,

$$
63{,}000 = 6.3 \times 10^4
$$

because multiplying by $10^4$ moves the value four decimal places upward in scale. Likewise,

$$
0.00042 = 4.2 \times 10^{-4}
$$

because $10^{-4}=1/10{,}000$. The negative exponent describes a scale below 1; it does not make the coefficient or the whole quantity negative.

NIST also uses `E` notation in technical tables: `3.523907 E-02` means $3.523907 \times 10^{-2}$. This lesson uses the multiplication-sign form because it exposes the mathematics directly.

:::{source-note}
:claims: claim-normalized-notation
:sources: source-nist-sp811

NIST SP 811 Appendix B.2 directly documents positive conversion factors with coefficients from 1 up to but not including 10 and the meaning of E notation. The signed definition above is an elementary algebraic extension: retain the minus sign while applying the positive coefficient convention to the magnitude. NIST does not state that signed extension directly. The zero boundary follows from the definition and $0\times10^n=0$ for every integer $n$.
:::

## Multiplication and division

Powers of ten follow the exponent laws:

$$
10^m \times 10^n = 10^{m+n}, \qquad \frac{10^m}{10^n}=10^{m-n}.
$$

So scientific-notation multiplication separates into two jobs:

$$
(a \times 10^m)(b \times 10^n)=(ab)\times 10^{m+n}.
$$

Division does the same with subtraction:

$$
\frac{a \times 10^m}{b \times 10^n}=\frac{a}{b}\times 10^{m-n}, \qquad b\neq0.
$$

Because every power of ten here is positive, apply the ordinary sign rules to the coefficients: a negative coefficient times a positive one gives a negative result, while dividing two coefficients with the same sign gives a positive result.

Normalize only after the coefficient operation. For example,

$$
(6 \times 10^4)(5 \times 10^3)=30\times10^7=3.0\times10^8.
$$

The last equality preserves value: shrinking the coefficient by a factor of 10 requires increasing the exponent by 1.

## Addition and subtraction

Addition and subtraction require a shared power of ten. You may add coefficients only after both terms describe the same scale:

$$
4.0\times10^6+3.0\times10^4
=4.0\times10^6+0.030\times10^6
=4.030\times10^6.
$$

Adding 4 and 3 first would treat millions and ten-thousands as though they were equal-sized pieces. Matching exponents prevents that category error.

:::{source-note}
:claims: claim-power-ten-arithmetic
:sources: source-nist-sp811

The exponent operations here follow directly from integer exponent laws and the normalized notation documented by NIST. The derivations and numerical examples are original to this lesson.
:::

## Order of magnitude as a prediction

An **order-of-magnitude estimate** tracks the nearest useful power-of-ten scale rather than every digit. For a quick calculation, round coefficients to easy one-digit values while preserving the exponent. Then predict:

- the sign;
- whether multiplication or division should make the result larger or smaller;
- the rough exponent;
- a simple upper or lower bound when one is available.

The estimate is intentionally coarser than the exact result. If both calculations repeat the same detailed steps, they can repeat the same error.

:::{source-note}
:claims: claim-estimation-reasonableness
:sources: source-nist-everyday-estimation

NIST describes estimation as approximation used for magnitude, ordering, sensemaking, and checking reasonableness. This lesson narrows that purpose to a pre-calculation scale prediction.
:::
