# Clinical wrap-up: let the units set the pump rate

An invented order is written in weight-based dose units, but the infusion pump must be programmed in millilitres per hour. The conversion, not the arithmetic, is where the risk lives, so let the units audit it.

**Teaching example—not medical advice.**
The scenario, Drug X, and every number below are invented for dimensional-analysis practice and must not guide care.

## Build the continuous chain

Use only the definitions stated for this task:

- the fictional patient mass is $80\text{ kg}$;
- the invented ordered rate is $0.05\text{ mg}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}$;
- Drug X is supplied as $250\text{ mg}$ in $50\text{ mL}$, defined here as $5\text{ mg/mL}$; and
- the target unit is $\text{mL/hr}$.

The stated equalities $60\text{ min}=1\text{ hr}$ and $5\text{ mg}=1\text{ mL}$ provide factors that leave the represented quantity unchanged. Orient each factor so the unwanted unit cancels:

$$
0.05\,\frac{\text{mg}}{\text{kg}\cdot\text{min}}\times 80\ \text{kg}\times \frac{60\ \text{min}}{1\ \text{hr}}\times \frac{1\ \text{mL}}{5\ \text{mg}}=48\ \frac{\text{mL}}{\text{hr}}.
$$

Kilograms cancel kilograms, minutes cancel minutes, and milligrams cancel milligrams. Exactly $\text{mL/hr}$ remains.

## Audit before trusting the display

1. **Dimension check.** The surviving unit is the target $\text{mL/hr}$, so no factor is missing or inverted. If the concentration factor were flipped, the leftover mass–volume unit would read $\text{mg}^2\cdot\text{mL}^{-1}$, still carried per hour, rather than millilitres per hour; the chain would fail the dimension audit.

2. **Magnitude check.** The intermediate rate is $80\text{ kg}\times0.05\text{ mg}\cdot\text{kg}^{-1}\cdot\text{min}^{-1}=4\text{ mg/min}$, or $240\text{ mg/hr}$. Using the defined $5\text{ mg/mL}$ supply gives a plausible $48\text{ mL/hr}$ because $5\times48=240$, consistent with the continuous chain.

The audit confirms that the invented result has consistent units and magnitude. It does not confirm that the invented order is true or safe.
