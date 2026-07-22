# Treat units as part of the algebra

A measured or specified quantity can be written conceptually as

$$
\text{quantity}=\text{numerical value}\times\text{unit}.
$$

The same quantity can have different numerical values in different units: $1\text{ m}=100\text{ cm}$. The number changes; the length does not.

:::{definition}
:id: definition-conversion-factor

A **conversion factor** is a ratio of equal quantities and therefore has value one, such as $100\text{ cm}/1\text{ m}$. Multiplying by it changes the unit representation without changing the underlying quantity.
:::

Orientation matters. To convert $2.5\text{ m}$ to centimetres, choose the form that cancels metres:

$$
2.5\text{ m}\times\frac{100\text{ cm}}{1\text{ m}}=250\text{ cm}.
$$

The reciprocal is also one, but it points toward metres rather than away from them.

## Compound units

Read `km/h` as kilometres divided by hours. A chain can contain several factors:

$$
72\frac{\text{km}}{\text{h}}
\times\frac{1000\text{ m}}{1\text{ km}}
\times\frac{1\text{ h}}{3600\text{ s}}
=20\frac{\text{m}}{\text{s}}.
$$

Kilometres cancel; hours cancel; metres per second remain. The surviving unit answers “what kind of quantity did this chain produce?”

## Dimensions as a structural test

Units are conventional labels; dimensions describe broad quantity types such as length $[L]$, time $[T]$, and mass $[M]$. Speed has dimension $[L][T]^{-1}$ and area has $[L]^2$.

An equation can be numerically evaluated yet still be structurally impossible. You may add $3\text{ m}+2\text{ m}$, but $3\text{ m}+2\text{ s}$ has no single resulting dimension. Likewise, distance $d=vt$ passes because $([L][T]^{-1})([T])=[L]$.

Dimensional agreement is necessary, not sufficient: the wrong equation can still have the right dimensions. It is an audit, not proof.

:::{source-note}
:claims: claim-quantity-value-unit, claim-conversion-preserves-quantity, claim-quantity-equations-independent, claim-unit-writing
:sources: source-nist-si-chapter7

NIST documents number-times-unit quantity values, unit-independent quantity equations, and clear unit-symbol writing. The factor-chain derivations, dimension labels, and examples are original synthesis.
:::
