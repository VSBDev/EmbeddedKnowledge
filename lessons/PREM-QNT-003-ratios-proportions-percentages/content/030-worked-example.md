# Solve by following one multiplier

A fictional imaging queue processes 42 frames in 6 minutes at a constant rate. How many frames would it process in 15 minutes under that model?

:::{worked-example}
:id: worked-example-frame-rate

**1. Label the ratio.** $42\text{ frames}/6\text{ min}$.

**2. State the assumption.** The rate is constant, so frames are proportional to time.

**3. Find the unit rate.** $42/6=7\text{ frames/min}$.

**4. Scale.** $7\text{ frames/min}\times15\text{ min}=105\text{ frames}$.

**5. Verify.** $105/15=7$, recovering the original quotient. Also, 15 minutes is 2.5 times 6 minutes, and $42\times2.5=105$.

**6. Bound the claim.** The result follows only under the stated constant-rate model; the arithmetic does not establish that a real queue remains constant.
:::

:::{check}
:id: check-proportional-assumption

If the first five minutes include a fixed startup delay, would direct proportionality necessarily remain appropriate? Explain.

**Feedback after an attempt:** No. A fixed offset can break the “same multiplier” structure. Proportionality is a model to justify, not a default triggered by two numbers.
:::

:::{source-note}
:claims: claim-ratio-quotient, claim-proportion-equation
:sources: source-nist-si-chapter8, source-openstax-prealgebra-ch6

The sources support ordered quotient and equivalent-ratio reasoning. The worked example is original and does not claim the fictional rate is empirical.
:::
