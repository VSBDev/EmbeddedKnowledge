# Add components, not magnitudes

:::{misconception}
:id: misconception-add-magnitudes

**1. Predict.** Two moves are $\mathbf u=(3,0)$ and $\mathbf v=(0,4)$. Before continuing, commit to a prediction: is the magnitude of $\mathbf u+\mathbf v$ equal to $3+4=7$?

**2. Name the tempting model.** The incorrect shortcut is “add the magnitudes to get the magnitude of the sum.” It ignores the directions encoded by the components.

**3. Test it.** Component addition gives $\mathbf u+\mathbf v=(3,4)$, whose magnitude is $\sqrt{3^2+4^2}=5$, not 7. An even sharper counterexample uses $\mathbf u=(3,0)$ and $\mathbf v=(-3,0)$: both magnitudes are 3, but

$$\mathbf u+\mathbf v=(0,0),\qquad\lVert\mathbf u+\mathbf v\rVert=0.$$

**4. Explain the failure.** A magnitude is nonnegative, so it discards the signs that distinguish reinforcement, partial cancellation, and complete cancellation.

**5. Repair the model.** Resolve first, add corresponding signed components, and only then reconstruct the magnitude. The triangle inequality

$$\lVert\mathbf u+\mathbf v\rVert\leq\lVert\mathbf u\rVert+\lVert\mathbf v\rVert$$

is a check, not a universal equality. For two nonzero Euclidean vectors, equality holds exactly when one is a positive scalar multiple of the other, so they point in the same direction. Equality also holds if either vector is zero, even though the zero vector has no direction.

**6. Recheck.** For $\mathbf a=(2,0)$ and $\mathbf b=(0,2)$, decide whether the resultant magnitude is 4 before reading the feedback.

**Feedback:** $\mathbf a+\mathbf b=(2,2)$ and $\lVert\mathbf a+\mathbf b\rVert=2\sqrt{2}$, so the sum-of-magnitudes shortcut fails again.
:::

:::{source-note}
:claims: claim-vector-components, claim-vector-norm, claim-triangle-inequality
:sources: source-nist-dlmf-vectors

The prediction sequence, counterexamples, and repair are original teaching expression based on standard component arithmetic, norms, and the triangle inequality.
:::
