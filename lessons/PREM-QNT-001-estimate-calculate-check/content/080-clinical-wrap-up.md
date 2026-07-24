# Wrap-up: catch the scale error

An invented arithmetic exercise pairs a mass of $70\text{ kg}$ with a per-mass factor of $4\text{ mg/kg}$. Decide whether the exercise's displayed product is plausible.

**Arithmetic example only—not medical advice.** The labels and numbers do not represent a patient, medicine, device setting, or real dosing instruction and must not guide care.

## Work the estimate–calculate–challenge loop

Use the invented values exactly as written; the task is to check arithmetic and scale, not to convert units.

1. **Represent scale.** Write the givens as $7.0\times10^{1}\text{ kg}$ and $4\times10^{0}\text{ mg/kg}$. The answer will be expressed as a normalized coefficient times a power of ten.

2. **Estimate first.** $70\times4\approx3\times10^{2}\text{ mg}$. Before exact calculation, this fixes the expected order of magnitude at $10^{2}\text{ mg}$.

3. **Calculate exactly.** $70\times4=280\text{ mg}=2.8\times10^{2}\text{ mg}$. The normalized result lies at the estimated order of magnitude.

4. **Challenge with the inverse.** $280\div70=4\text{ mg/kg}$. The inverse recovers the invented per-mass factor, so the multiplication is internally consistent.

5. **Diagnose the scale error.** A fictional display of $2{,}800\text{ mg}=2.8\times10^{3}\text{ mg}$ is one order of magnitude too high. The digits “2 8” look familiar, but the estimate rejects the extra factor of ten.

## Check

Which checkpoint catches the faulty display before the exact multiplication is repeated? The order-of-magnitude estimate does: $10^{3}\text{ mg}$ falls outside the expected $10^{2}\text{ mg}$ scale.

The plausible value for this invented exercise is $2.8\times10^{2}\text{ mg}$, and the estimate bounds its scale. This arithmetic checks scale and internal consistency; it does not evaluate any real measurement, product, device, or decision.

:::{source-note}
:claims: claim-normalized-notation, claim-power-ten-arithmetic, claim-estimation-reasonableness, claim-independent-challenge
:sources: source-nist-sp811, source-nist-everyday-estimation

NIST SP 811 supports the coefficient-and-exponent notation, and NIST's estimation guidance supports using approximate magnitude to check reasonableness. The exponent rules and inverse check are derived algebraically in earlier scenes. The unit-labelled exercise, values, and checking sequence are original and make no claim about clinical practice.
:::
