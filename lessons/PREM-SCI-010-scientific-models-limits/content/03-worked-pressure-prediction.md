# Predict pressure, then test the prediction

The ideal-gas equation gives us a model simple enough to calculate by hand and rich enough to expose every decision in the audit.

:::{equation}
:label: equation-ideal-gas-worked

P=\frac{nRT}{V}
:::

In words, predicted pressure equals the amount of gas multiplied by the gas constant and absolute temperature, divided by volume.

:::{worked-example}
:id: worked-example-pressure-audit
:label: A complete model use and stress test

**1. State the task.**

A fictional laboratory record describes 0.100 mol of argon in a rigid 2.50 L vessel at 298 K. Use the ideal-gas model to estimate pressure. The supplied gas constant is $R=8.314\ \text{L kPa mol}^{-1}\text{K}^{-1}$. Then decide what the number does and does not establish.

**2. Represent the givens, unknown, and conditions.**

| Role | Record |
| --- | --- |
| desired output | pressure $P$ in kPa |
| inputs | $n=0.100$ mol, $T=298$ K, $V=2.50$ L |
| parameter for this run | $R=8.314\ \text{L kPa mol}^{-1}\text{K}^{-1}$ |
| physical conditions | one equilibrium gas state in a rigid vessel |
| central idealization | the real gas behaves closely enough like an ideal gas for the required accuracy |
| scale | macroscopic pressure, not individual molecular paths |

**3. Select the model and explain why.**

The task asks for a first estimate linking pressure, volume, amount, and absolute temperature. The ideal-gas equation contains exactly those quantities. The stated pressure and ordinary room temperature will be checked after calculation; selecting the equation is a provisional choice, not a guarantee.

**4. Plan.**

Rearrange the relation for $P$, substitute compatible units, compute, check the units and proportional direction, then stress-test a plausible input change and inspect the domain.

**5. Execute with reasons.**

Substitute the supplied values:

$P=(0.100\ \text{mol})(8.314\ \text{L kPa mol}^{-1}\text{K}^{-1})(298\ \text{K})/(2.50\ \text{L})$.

The mole, kelvin, and litre units cancel, leaving kPa. The result is

$P=99.1\ \text{kPa}$ to three significant figures.

**6. Check independently.**

The direction is sensible inside the model: increasing amount or temperature raises pressure; increasing volume lowers it. One mole at these conditions would occupy about ten times this volume near the same pressure, so 0.100 mol in 2.50 L giving a pressure near 100 kPa is plausible.

**7. Test sensitivity.**

Suppose the true volume could be 2.45 L rather than 2.50 L while the other inputs remain fixed. The model gives $P=101.1$ kPa, about 2% higher. A 2% decrease in a denominator produces about a 2% increase here. This local result tells us that volume uncertainty of this size matters similarly to the pressure estimate. It does not test interactions or the ideal-gas assumption itself.

**8. Inspect the domain.**

The calculation is a defensible first estimate only if argon at the stated conditions behaves sufficiently like an ideal gas for the intended tolerance. The same arithmetic applied at very high pressure or low temperature would need a real-gas check because molecular spacing and attractions can become important. The equation can always emit a number; evidence decides whether that number is useful.

**9. Interpret the result.**

The model predicts about 99.1 kPa for the stated equilibrium state. The result is not a measurement, not a claim of exactness, and not permission to use the same approximation at every pressure and temperature.

**10. Explain the decisive choice.**

Which decision mattered more than the arithmetic: rearranging the equation, or deciding that the model's domain and assumptions fit the vessel? Explain why.
:::

The model-choice decision mattered more. Correct algebra can only preserve the consequences of the selected assumptions. It cannot repair an inappropriate representation.

## Fade one support step

:::{check}
:id: check-temperature-sensitivity
:kind: completion

Keep $n$ and $V$ fixed but change $T$ from 298 K to 303 K. Before calculating, predict the direction and approximate percentage change in $P$. Then calculate the new pressure.
:::

Temperature rises by about 1.7%, so the model predicts pressure will also rise by about 1.7%. Direct substitution gives about 100.8 kPa. If your arithmetic gave a lower pressure, return to the proportional relation before repeating the calculation.

:::{source-note}
:claims: claim-model-components, claim-model-domain-scale, claim-sensitivity-analysis, claim-ideal-gas-relation, claim-ideal-gas-limits
:sources: source-epa-model-guidance, source-nasa-equation-state, source-nasa-real-gas-limits

The sources support the input/parameter distinction, local sensitivity logic, ideal-gas relation, and qualitative real-gas boundary. The vessel record, numbers, audit table, sensitivity variation, checks, and interpretation are original fictional teaching material.
:::
