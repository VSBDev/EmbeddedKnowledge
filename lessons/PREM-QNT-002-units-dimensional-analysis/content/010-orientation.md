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

Try these before continuing. The first three check the arithmetic and estimation prerequisite; the last three preview the unit reasoning this lesson will teach.

:::{check}
:id: check-starting-skills

1. Compute $18\times(2/3)$.
2. Without exact multiplication, is $49\times21$ closest to $10^2$, $10^3$, or $10^4$?
3. Compute $720/60$ and state whether the result is larger or smaller than 720.
4. Can multiplying `m/s` by `s` produce `m`?
5. Can `4 kg` be added to `3 s` as one physical quantity?
6. Can `2 m²` be converted to square centimetres with only one factor of `100 cm/m`?
:::

**Feedback after an attempt.**

1. $18\times(2/3)=12$.
2. $49\times21$ is close to $50\times20=1000=10^3$.
3. $720/60=12$, which is smaller than 720.
4. Yes: seconds cancel from metres per second times seconds.
5. No: mass and time have incompatible dimensions, so their sum is not one physical quantity.
6. No: square metres contain two metre factors, so both must be converted.

If the first three arithmetic or estimation steps are difficult, revisit the arithmetic-and-estimation prerequisite before continuing.

If cancellation is unfamiliar, write every compound unit as a fraction and cancel only identical factors that occur once above and once below the fraction bar.

:::{source-note}
:claims: claim-quantity-value-unit, claim-quantity-equations-independent, claim-dimensional-consistency-limit
:sources: source-nist-si-chapter7, source-jcgm-vim3

NIST supports the distinction among a quantity, its numerical value, and its unit. JCGM quantity-kind and dimension records support using incompatible dimensions to reject an operation while not treating a match as proof. The pump story, numbers, error, and teaching loop are original.
:::

## Accessibility and alternatives

Every cancellation is stated in words as well as symbols. No task depends on color, dragging, timing, or a visual crossing-out gesture. Read the opening equation linearly as “litres per minute multiplied by seconds leaves litres-times-seconds per minute”; after seconds are converted to minutes, minutes cancel and litres remain.
