# Clinical wrap-up: catch the scale error before you dose

A clinician is about to give a weight-based loading dose. Before trusting the pump or dose calculator, the clinician needs to decide whether its displayed number is plausible.

**Teaching example—not medical advice.** The bedside scenario and every number below are invented for arithmetic practice and must not guide care.

## Work the estimate–calculate–challenge loop

The calculator has been given a mass of $70\text{ kg}$ and an illustrative loading dose of $4\text{ mg/kg}$. Use the values exactly as written; the task is to check arithmetic and scale, not to convert units.

1. **Represent scale.** Write the givens as $7.0\times10^{1}\text{ kg}$ and $4\times10^{0}\text{ mg/kg}$. The answer will be expressed as a normalized coefficient times a power of ten.

2. **Estimate first.** $70\times4\approx3\times10^{2}\text{ mg}$. Before exact calculation, this fixes the expected order of magnitude at $10^{2}\text{ mg}$.

3. **Calculate exactly.** $70\times4=280\text{ mg}=2.8\times10^{2}\text{ mg}$. The normalized result lies at the estimated order of magnitude.

4. **Challenge with the inverse.** $280\div70=4\text{ mg/kg}$. The inverse recovers the invented per-kilogram rate, so the multiplication is internally consistent.

5. **Diagnose the scale error.** A display of $2{,}800\text{ mg}=2.8\times10^{3}\text{ mg}$ is one order of magnitude too high. The digits “2 8” look familiar, but the estimate rejects the extra factor of ten.

## Check

Which checkpoint catches the faulty display before the exact multiplication is repeated? The order-of-magnitude estimate does: $10^{3}\text{ mg}$ falls outside the expected $10^{2}\text{ mg}$ scale.

The plausible value for this invented case is $2.8\times10^{2}\text{ mg}$, and the estimate bounds its scale. This arithmetic checks scale and internal consistency, not the correctness or safety of any real prescription.
