# A calculation that checks itself

Return to the fictional particle counter. The task is

$$
\frac{7.84\times10^6\ \text{events}}{4.0\times10^{-3}\ \text{seconds}}.
$$

The units are already aligned; this lesson is about the arithmetic, not conversion.

:::{worked-example}
:id: worked-example-counter-rate

**1. Represent the givens and unknown.** The numerator is a positive event count, the denominator is a positive time, and the unknown is a positive rate.

**2. Select a model.** This is division because a rate is count divided by elapsed time. Scientific notation lets us divide coefficients and subtract exponents separately.

**3. Estimate first.** Round $7.84$ to $8$ and keep $4.0$ as $4$:

$$
\frac{8\times10^6}{4\times10^{-3}}=2\times10^{6-(-3)}=2\times10^9.
$$

The exact answer should be positive and near two billion events per second.

**4. Calculate.**

$$
\frac{7.84\times10^6}{4.0\times10^{-3}}
=\frac{7.84}{4.0}\times10^{6-(-3)}
=1.96\times10^9.
$$

Subtracting a negative exponent adds 3: $6-(-3)=9$. The coefficient is already normalized.

**5. Challenge with the inverse operation.** Multiply the result by the elapsed time:

$$
(1.96\times10^9)(4.0\times10^{-3})
=7.84\times10^6.
$$

That recovers the original count. The result also lies near the prior estimate $2\times10^9$.

**6. Interpret.** Under the fictional aggregation described, the rate is $1.96\times10^9$ events per second. The calculation does not establish measurement accuracy, uncertainty, or instrument validity; those require other evidence.
:::

The decisive move was not the final division. It was predicting the scale before exact calculation. That made the software's displayed $1.96\times10^3$ visibly implausible even though its coefficient looked convincing.

:::{check}
:id: check-worked-example

Which step would catch an exponent error without repeating the original division: retyping the division, comparing with $2\times10^9$, or counting decimal places again? Explain why.
:::

The comparison with the independent estimate is the strongest choice here. Retyping can repeat the same entry error, and counting decimal places can repeat the same sign rule. The estimate predicts the scale by a simpler route.

:::{source-note}
:claims: claim-normalized-notation, claim-power-ten-arithmetic, claim-estimation-reasonableness, claim-independent-challenge
:sources: source-nist-sp811, source-nist-everyday-estimation

NIST supports the notation convention and the use of estimation for reasonableness. The estimate–calculate–challenge procedure, fictional context, arithmetic, and inverse check are original synthesis from those mathematical relations.
:::

