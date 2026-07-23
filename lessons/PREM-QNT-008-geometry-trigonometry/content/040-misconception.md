# Inverse sine is not reciprocal sine

## Commit first

Without calculating, decide whether $\sin^{-1}(0.5)$ should return an angle or a ratio. Write your prediction before continuing.

:::{misconception}
:id: misconception-inverse-reciprocal

### Tempting shortcut

“The exponent $-1$ always means reciprocal, so $\sin^{-1}(x)=1/\sin(x)$.”

### Why the shortcut fails

The two operations have different input and output types. The inverse function $\arcsin(x)$ takes a ratio and returns a principal angle. The reciprocal $1/\sin(x)$ takes an angle and returns a ratio.

With a ratio input of $0.5$,

$$\arcsin(0.5)=30^\circ=\pi/6,$$

whereas using an angle input of $0.5$ radians gives

$$\frac{1}{\sin(0.5\ \mathrm{rad})}\approx2.0858.$$

The unequal outputs—and their different units—disprove the shortcut.

### Repair

Read $\sin^{-1}(x)$ as $\arcsin(x)$ when the task asks for an angle. Write $1/\sin(x)$ or $\csc(x)$ when the task asks for a reciprocal. Then label the angle unit and use the stated domain or quadrant to interpret the principal result.
:::

## Recheck

A calculator shows $\cos^{-1}(0.25)$. Is it finding a reciprocal or an angle, and what input would the reciprocal require?

**Check after committing:** It is finding the principal angle whose cosine is $0.25$. The reciprocal calculation would require an angle input and would be written $1/\cos(\theta)$ or $\sec(\theta)$.

:::{source-note}
:claims: claim-inverse-trig
:sources: source-nist-dlmf-trig

NIST supports inverse-trigonometric definitions and principal values. The repair sequence and numerical contrast are original teaching expression.
:::
