# Audit an unfamiliar transport calculation

A fictional storage system moves data at $1.8\text{ GB/min}$ for $2.5\text{ h}$. Its log claims that $270\text{ GB}$ moved. Treat the decimal relations $1\text{ h}=60\text{ min}$ and $1\text{ GB}=1000\text{ MB}$ as definitions for this task.

Determine the transferred amount in megabytes and audit the log.

## Build your response

1. Name the target quantity and unit.
2. Write one continuous factor chain.
3. Show every cancellation in words or symbols.
4. Compare your result with the log and perform a magnitude check.

## Feedback after a complete attempt

$$
1.8\frac{\text{GB}}{\text{min}}
\times2.5\text{ h}
\times\frac{60\text{ min}}{1\text{ h}}
\times\frac{1000\text{ MB}}{1\text{ GB}}
=270{,}000\text{ MB}.
$$

Minutes cancel minutes, hours cancel hours, and gigabytes cancel gigabytes. The equivalent amount is $270\text{ GB}$, so the fictional log is consistent with the stated rate and duration.

A rough check gives $(2\text{ GB/min})(150\text{ min})\approx300\text{ GB}$, close to 270 GB. This validates arithmetic consistency, not the truth of the fictional measurements.

If you multiplied $1.8$ by $2.5$ and stopped, your result retained `GB·h/min`; the unit showed that a conversion was still missing.

:::{source-note}
:claims: claim-conversion-preserves-quantity, claim-quantity-equations-independent, claim-dimensional-consistency-limit
:sources: source-nist-si-chapter7, source-jcgm-vim3

The transfer problem is an original fictional application of unit-independent quantity relations, unit-dependent numerical values, and the boundary that consistency does not verify a measurement.
:::
