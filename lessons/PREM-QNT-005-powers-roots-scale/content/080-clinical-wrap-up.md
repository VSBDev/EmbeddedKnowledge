# Clinical wrap-up: track the orders of magnitude in a serial dilution

**Teaching example—not medical advice.** The scenario, assay model, and numbers are invented for powers, roots, and scale practice and must not guide care.

Treat every domain detail below—including the label $\text{CFU/mL}$, the five $1\!:\!10$ steps, and the squared-signal model—as a stipulated fictional mathematical input. Only the arithmetic is taught.

In this invented microbiology-bench scenario, a specimen starts at $3\times10^8\text{ CFU/mL}$ and is diluted $1\!:\!10$ five times before plating. Within the stipulated model, a power-of-ten error would change the reported concentration by orders of magnitude.

## Predict first, then apply exponent laws

Each tenfold step lowers the power-of-ten scale by one, so predict a drop of exactly five orders of magnitude: from a $10^8$ scale to a $10^3$ scale.

Five tenfold dilution factors combine as

$$
(10^{-1})^5=10^{(-1)(5)}=10^{-5}.
$$

This is the power-of-a-power rule, $(a^m)^n=a^{mn}$.

Apply that multiplier to the invented starting concentration:

$$
3\times10^8\text{ CFU/mL}\times10^{-5}
=3\times10^{8+(-5)}\text{ CFU/mL}
=3\times10^3\text{ CFU/mL}.
$$

This is the product-of-powers rule, $a^ma^n=a^{m+n}$. The coefficient remains 3 while the exponent changes from 8 to 3.

## Use a principal root to invert a power

Suppose an invented assay uses $S=kc^2$, with fixed $k>0$ and declared domain $c>0$. Solving the power equation gives $c=\sqrt{S/k}$; the principal positive root is the value retained by that domain.

A stipulated $100$-fold drop in $S$ therefore needs a concentration drop factor of $\sqrt{100}=100^{1/2}=10$, or one order of magnitude. The root recovers the scale that squaring changed.

## Challenge the exact result against the prediction

The exact reduction factor is $(3\times10^8)/(3\times10^3)=10^5$. The exact result confirms the predicted five-order drop.

The exponent bookkeeping is internally consistent for these invented figures; it is not a real measurement of any organism.

:::{check}
:id: check-clinical-scale

Before reading the feedback, explain why five tenfold reduction factors combine to $10^{-5}$ rather than $5\times10^{-1}$. Which exponent operation controls the result?

**Feedback after an attempt.** The same base 10 is multiplied five times, so the exponents add: $-1-1-1-1-1=-5$. Equivalently, the power-of-a-power rule multiplies the exponents in $(10^{-1})^5$. If you added the five factors instead, you would model a sum rather than repeated dilution.
:::

:::{source-note}
:claims: claim-power-notation, claim-exponent-laws, claim-magnitude-check
:sources: source-nist-sp811-notation, source-nist-dlmf-powers, source-nist-estimation

NIST supports the power-of-ten notation and magnitude-checking role, while the NIST Digital Library of Mathematical Functions supports the power definitions and identities. The clinical labels, dilution setup, squared-signal relation, numbers, calculation, and feedback are stipulated fictional inputs and original teaching expression.
:::
