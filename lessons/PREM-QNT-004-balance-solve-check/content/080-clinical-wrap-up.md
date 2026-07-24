# Clinical wrap-up: solve for the infusion time, then check it

An infusion must reach a planned total delivered amount. An initial bolus is already in, and the clinician needs the remaining run time. Turn that relationship into an equation, then balance it.

**Teaching example—not medical advice.** This scenario and all numbers are invented for equation-solving practice. They do not describe a real drug or regimen and must not guide care.

## 1. Read the algebra

Use the illustrative relationship $D = D_0 + R\,t$: total delivered equals the initial bolus plus the maintenance rate multiplied by infusion time.

Here, $D_0 = 90\text{ mg}$, $R = 45\text{ mg/hr}$, and the target is $D = 360\text{ mg}$.

The unknown is $t$. In $90 + 45t = 360$, 45 is the coefficient of $t$, while 90 and 360 are constants. The domain constraint is $t \ge 0$ because a run time cannot be negative.

## 2. Solve while preserving equality

Substitute the invented values, subtract 90 from both sides, and then divide both sides by 45:

$$90 + 45t = 360 \Rightarrow 45t = 270 \Rightarrow t = 6\text{ hr}.$$

Each operation acts on both sides, so the transformed equation preserves the original equality.

## 3. Rearrange for a requested variable

Starting from the general relationship, solve for the rate:

$$Rt = D - D_0 \Rightarrow R = \dfrac{D - D_0}{t}.$$

Dividing by $t$ introduces the restriction $t \ne 0$; the rearranged rate formula does not apply when $t=0$.

## 4. Check by substitution and domain

Substitute the candidate time into the original equation:

$$90 + 45\times 6 = 90 + 270 = 360\text{ mg}.$$

The substitution returns the target total, and $t = 6\ \text{hr}$ satisfies $t \ge 0$. A negative candidate time would be rejected by the domain even if it satisfied the arithmetic.

For these invented figures, the equation is balanced and the infusion-time solution is verified. This is not a real infusion order.
