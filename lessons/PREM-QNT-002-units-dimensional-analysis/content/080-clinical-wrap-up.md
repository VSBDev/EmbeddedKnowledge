# Clinical wrap-up: let the units set the pump rate

An invented order is written in weight-based dose units, but the infusion pump must be programmed in millilitres per hour. A continuous unit chain makes each relation visible so the units can audit it.

**Teaching example—not medical advice.**
The scenario, Drug X, and every number below are invented for dimensional-analysis practice and must not guide care.

## Build the continuous chain

Use only the definitions stated for this task:

- the fictional patient mass is $80\text{ kg}$;
- the invented ordered rate is $0.05\text{ mg}/(\text{kg}\cdot\text{min})$;
- Drug X is supplied as $250\text{ mg}$ in $50\text{ mL}$, defined here as $5\text{ mg/mL}$; and
- the target unit is $\text{mL/hr}$.

The time equality $60\text{ min}=1\text{ hr}$ gives a unit conversion factor equal to one. The fictional concentration $5\text{ mg/mL}$ instead relates drug mass to solution volume under the model stated for this task; its reciprocal, $1\text{ mL}/5\text{ mg}$, maps the calculated mass rate to a solution-volume rate. Orient both relations so the unwanted unit cancels:

$$
0.05\,\frac{\text{mg}}{\text{kg}\cdot\text{min}}\times 80\ \text{kg}\times \frac{60\ \text{min}}{1\ \text{hr}}\times \frac{1\ \text{mL}}{5\ \text{mg}}=48\ \frac{\text{mL}}{\text{hr}}.
$$

Kilograms cancel kilograms, minutes cancel minutes, and milligrams cancel milligrams. Exactly $\text{mL/hr}$ remains.

## Audit before trusting the display

1. **Dimension check.** The surviving unit is the target $\text{mL/hr}$, which rules out the displayed dimension-changing omissions or inversions. If the concentration relation were flipped, the leftover mass–volume unit would read $\text{mg}^2\cdot\text{mL}^{-1}$, still carried per hour, rather than millilitres per hour; the chain would fail the dimension audit. A target unit cannot detect an omitted or inverted dimensionless factor, a wrong numerical value attached to a dimensionally valid relation, or a wrong model with the same dimensions.

2. **Magnitude check.** The intermediate rate is $80\text{ kg}\times0.05\text{ mg}/(\text{kg}\cdot\text{min})=4\text{ mg/min}$, or $240\text{ mg/hr}$. Using the defined $5\text{ mg/mL}$ supply gives a plausible $48\text{ mL/hr}$ because $5\times48=240$, consistent with the continuous chain.

The audit confirms that the invented result has consistent units and magnitude. It does not confirm that the invented order is true or safe.

:::{source-note}
:claims: claim-conversion-preserves-quantity, claim-dimensional-consistency-limit
:sources: source-nist-si-chapter7, source-jcgm-vim3

NIST supports unit conversion based on equal quantities. JCGM supports dimensional screening and the boundary that matching dimensions cannot establish numerical correctness or model validity. The fictional concentration, scenario, values, chain, and checks are original.
:::
