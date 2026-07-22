# Build a chain that explains itself

A fictional cart travels at $54\text{ km/h}$ for $25\text{ s}$. Find the distance in metres.

:::{worked-example}
:id: worked-example-cart

**1. Name the target.** Distance in metres.

**2. Write the quantity relation.** $d=vt$. Its dimensions pass: $([L]/[T])([T])=[L]$.

**3. Build the chain.** Convert the speed while retaining its meaning:

$$
54\frac{\text{km}}{\text{h}}
\times\frac{1000\text{ m}}{1\text{ km}}
\times\frac{1\text{ h}}{3600\text{ s}}
=15\frac{\text{m}}{\text{s}}.
$$

**4. Combine with time.**

$$
15\frac{\text{m}}{\text{s}}\times25\text{ s}=375\text{ m}.
$$

**5. Challenge it.** At roughly $15\text{ m/s}$ for roughly $25\text{ s}$, several hundred metres is plausible. Dividing $375\text{ m}$ by $25\text{ s}$ recovers $15\text{ m/s}$.

**6. Interpret cautiously.** The computed fictional distance is $375\text{ m}$ under the stated constant-speed model. Unit consistency does not establish that the speed was actually constant or accurately measured.
:::

:::{check}
:id: check-chain-direction

Why must hours appear in the numerator of the second time factor, $1\text{ h}/3600\text{ s}$?
:::

Because the original hour is in the denominator of `km/h`. One hour above and one hour below cancel, leaving seconds below.

:::{source-note}
:claims: claim-conversion-preserves-quantity, claim-quantity-equations-independent
:sources: source-nist-si-chapter7

The example applies NIST's distinction between quantities and their unit-dependent numerical values. Its model, values, scaffold, and checks are original.
:::
