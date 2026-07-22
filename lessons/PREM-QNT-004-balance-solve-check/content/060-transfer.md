# Rearrange before inserting numbers

A fictional process uses the quantity relation

$$Q=r(t-t_0),$$

where $Q$ is accumulated output, $r$ is a constant rate, $t$ is final time, and $t_0$ is start time. Solve symbolically for $t$, then evaluate for $Q=126$, $r=9$, and $t_0=4$ in mutually compatible units supplied by the task.

## Feedback after a complete attempt

Divide by $r$ only with restriction $r\ne0$:

$$
\frac{Q}{r}=t-t_0.
$$

Add $t_0$ to both sides:

$$
t=t_0+\frac{Q}{r},\qquad r\ne0.
$$

Substitute only after rearranging: $t=4+126/9=18$.

Check in the original: $9(18-4)=9(14)=126$. The rearranged quantity equation remains meaningful across compatible unit choices; the numerical values must use a coherent set of units.

:::{source-note}
:claims: claim-quantity-equation, claim-numerical-equation, claim-unit-independent-rearrangement
:sources: source-nist-si-chapter7

NIST directly distinguishes quantity equations from unit-dependent numerical equations. The process relation, values, solution, and checking route are original.
:::
