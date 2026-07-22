# A tidy number with the wrong unit

A fictional pump moves liquid at `18 L/min` for `40 s`. A dashboard multiplies 18 by 40 and reports **720 L**.

The arithmetic is tidy, but the unit audit fails. Multiplying the written quantities gives

$$
18\frac{\text{L}}{\text{min}}\times40\text{ s}=720\frac{\text{L}\cdot\text{s}}{\text{min}},
$$

not litres. Seconds and minutes have not cancelled. Converting $40\text{ s}$ to $2/3\text{ min}$ gives $12\text{ L}$.

This lesson makes units an active error detector. For each calculation you will:

1. name the quantity sought;
2. multiply by conversion factors equal to one;
3. cancel units before trusting the number;
4. challenge the final dimension and magnitude.

The settings and values are fictional. The lesson develops mathematical unit reasoning, not dosing, clinical decision-making, measurement uncertainty, or laboratory procedure.

## Starting check

Without calculating, decide whether each target is possible.

- Multiplying `m/s` by `s` to obtain `m`.
- Adding `4 kg` to `3 s`.
- Converting `2 m²` to square centimetres with only one factor of `100 cm/m`.

If cancellation is unfamiliar, write every compound unit as a fraction and cross out only identical factors that occur once above and once below the fraction bar.

:::{source-note}
:claims: claim-quantity-value-unit, claim-quantity-equations-independent
:sources: source-nist-si-chapter7

NIST distinguishes a quantity from its numerical value and unit and explains that quantity equations are independent of the units chosen. The pump story, numbers, error, and teaching loop are original.
:::

## Accessibility and alternatives

Every cancellation is stated in words as well as symbols. No task depends on color, dragging, timing, or a visual crossing-out gesture. A screen-reader-friendly alternative is to say: “the second unit in the numerator cancels the second unit in the denominator.”
