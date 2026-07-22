# Before you trust the display

A fictional particle counter stores **7.84 million events** from **0.004 seconds** of observation. Its software reports a rate of `1.96 × 10^3` events per second.

The digits look polished. Are they believable?

Without doing exact arithmetic, compare the scales. About eight million divided by about four thousandths is about

$$
\frac{8 \times 10^6}{4 \times 10^{-3}} = 2 \times 10^9.
$$

The display is smaller than that estimate by roughly a millionfold. Exact arithmetic is still needed, but the estimate has already exposed a scale failure.

This lesson builds a three-part reliability loop:

1. **Estimate** the sign and rough scale.
2. **Calculate** while keeping digits and powers of ten visible.
3. **Challenge** the answer with a bound or a reverse operation.

You will use that loop to write numbers in scientific notation, perform the four arithmetic operations, and decide whether a numerical result is plausible. Unit conversion, significant-figure rules, formal uncertainty, logarithms, and calculator keystrokes are deliberately left for later lessons.

## A quick starting check

Try these without a calculator.

1. Is $10^{-3}$ greater than or less than 1?
2. Is $(6 \times 10^4)(2 \times 10^2)$ closer to $10^4$, $10^6$, or $10^8$?
3. Which could be the result of $4.8 \times 10^6 + 2.0 \times 10^4$: $6.8 \times 10^{10}$ or $4.82 \times 10^6$?

If negative exponents or place value feel uncertain, write out $10^3=1000$, $10^0=1$, and $10^{-3}=1/1000$ before continuing. If grouping is the difficulty, rewrite every expression as “coefficient operation” and “power-of-ten operation” on separate lines.

Estimation is an approximation, not a random guess. Its useful job here is to predict the scale and help judge whether a computed result is reasonable.

:::{source-note}
:claims: claim-estimation-reasonableness
:sources: source-nist-everyday-estimation

NIST's estimation guidance supports using approximate magnitude and comparison to check whether scientific results are reasonable. The lesson's fictional counter and numbers are original.
:::

## Accessibility and alternatives

All essential relationships appear in prose and equations. No task depends on color, pointing, dragging, timing, or a particular calculator interface. Read $a \times 10^n$ aloud as “a times ten to the power n.” The source order is also the intended keyboard, screen-reader, narrow-screen, and print order.

