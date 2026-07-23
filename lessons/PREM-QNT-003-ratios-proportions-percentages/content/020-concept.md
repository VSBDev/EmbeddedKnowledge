# Keep the ratio labels attached

A **ratio** compares two quantities by division. Order matters:

$$
\text{red-to-blue}=\frac{3\ \text{red}}{5\ \text{blue}}\neq\frac{5\ \text{red}}{3\ \text{blue}}.
$$

Multiplying both terms by the same nonzero number creates an equivalent ratio: $3:5=6:10$. The compared amounts change, but the quotient does not.

:::{definition}
:id: definition-proportion

A **proportion** is an equation stating that two ratios are equal, such as $3/5=x/20$.
:::

Solve by following the multiplier: $5\to20$ multiplies by 4, so $3\to x$ also multiplies by 4 and $x=12$. Cross multiplication encodes the same equality, but the multiplier exposes why the answer scales.

## Part–whole percentages

“Percent” means per hundred. For a part $P$ of whole $W$,

$$
r=\frac{P}{W},\qquad p=100r,\qquad P=\frac{p}{100}W.
$$

The whole $W$ is the reference that represents 100%. A result between 0% and 100% is expected only when $0\le P\le W$; ratios and percent changes can exceed 100% in other contexts.

## Percent change

For an ordinary increase or decrease, first check that the starting value $O$ is positive and that the quantity is measured on a **ratio scale** with a meaningful zero. Then

$$
\text{percent change}=\frac{N-O}{O}\times100\%.
$$

The denominator is the old value because the question asks how large the change is relative to the starting amount. Always report direction: increase or decrease.

This introductory rule has boundaries:

- If $O=0$, division by the starting value is undefined.
- If $O<0$, the formula's sign can conflict with ordinary increase/decrease language. For example, $-2$ to $-1$ is an increase, but the quotient is $-50\%$.
- On an **interval scale** with an arbitrary zero, a relative percentage depends on the chosen origin. A rise from $10\ ^\circ\mathrm{C}$ to $20\ ^\circ\mathrm{C}$ looks like 100% in Celsius, while the same temperatures in kelvin rise by only about 3.5%.

For these cases, report an absolute difference or use a domain-specific comparison whose reference is justified. Do not force the ordinary percent-change label.

:::{source-note}
:claims: claim-ratio-quotient, claim-proportion-equation, claim-percentage-part-whole, claim-percent-change-reference, claim-relative-change-domain
:sources: source-nist-si-chapter8, source-openstax-prealgebra-ch6, source-nist-metrics-measures, source-moj-percentage-comparisons

NIST and OpenStax support the quotient, proportion, and per-hundred relationships. OpenStax and the Ministry of Justice report support use of the starting reference. NIST's measurement-scale discussion supports the meaningful-zero boundary. The organization and examples are original.
:::
