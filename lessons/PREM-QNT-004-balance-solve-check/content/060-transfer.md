# Rearrange before inserting numbers

A fictional process uses the quantity relation

$$Q=r(t-t_0),$$

where $Q$ is accumulated output in millilitres (mL), $r$ is a constant rate in millilitres per minute (mL/min), and $t$ and $t_0$ are times in minutes (min).

:::{check}
:id: check-transfer-rate-time

Solve symbolically for $t$, then evaluate for $Q=126\ \mathrm{mL}$, $r=9\ \mathrm{mL/min}$, and $t_0=4\ \mathrm{min}$. Before substituting, show why $Q/r$ can be added to $t_0$.

**Feedback after a complete attempt:**

Divide by $r$ only with restriction $r\ne0$:

$$
\frac{Q}{r}=t-t_0.
$$

Add $t_0$ to both sides:

$$
t=t_0+\frac{Q}{r},\qquad r\ne0.
$$

The quotient $Q/r$ has units $(\mathrm{mL})/(\mathrm{mL/min})=\mathrm{min}$, so it can be added to $t_0$. Substitute only after rearranging: $t=4\ \mathrm{min}+14\ \mathrm{min}=18\ \mathrm{min}$.

Check in the original: $(9\ \mathrm{mL/min})(18\ \mathrm{min}-4\ \mathrm{min})=126\ \mathrm{mL}$. The rearranged quantity equation remains meaningful across compatible unit choices; the numerical values must use a coherent set of units.
:::

:::{source-note}
:claims: claim-quantity-equation, claim-numerical-equation, claim-unit-independent-rearrangement
:sources: source-nist-si-chapter7

NIST directly distinguishes quantity equations from unit-dependent numerical equations. The process relation, values, solution, and checking route are original.
:::
