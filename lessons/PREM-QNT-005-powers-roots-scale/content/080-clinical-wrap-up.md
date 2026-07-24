# Clinical wrap-up: track the orders of magnitude in a serial dilution

**Teaching example—not medical advice.** The scenario, assay model, and numbers are invented for powers, roots, and scale practice and must not guide care.

In this invented microbiology-bench scenario, a specimen starts at $3\times10^8\text{ CFU/mL}$ and is diluted $1\!:\!10$ five times before plating. A power-of-ten error would make the reported concentration wrong by orders of magnitude.

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
