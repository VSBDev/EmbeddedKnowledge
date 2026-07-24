# Scale a dose by body mass

In this fictional dosing case, doubling body mass does not mean doubling the modeled clearance—or a dose scaled by the same supplied rule.

Suppose the clearance of a fictional drug follows the supplied model $CL=k\,M^{0.75}$ in this example, with mass $M$ in kg and clearance $CL$ in L/h. The exponent $0.75$ is given for this illustration; every value is author-invented.

:::{check}
:id: check-clinical-allometric-scaling

Use the exact anchor point $(M,CL)=(1,\,3.5)$ to complete four tasks.

1. Recover $k$ from $k=CL/M^{0.75}$.
2. Compare the invariants $CL/M^{0.75}$ and $CL/M$ to identify the model family.
3. Predict $CL$ at $M=16$ and $M=81$, then state the scale-factor rule for doubling mass.
4. Log-linearize the model and identify the log-log slope and intercept, including the required sign condition.
:::

## Feedback after a complete attempt

From the exact anchor, $k=3.5/1^{0.75}=3.5$, so the supplied model is $CL=3.5M^{0.75}$.

The power-law invariant is $CL/M^{0.75}=k=3.5$, which stays constant under the model.

By contrast, $CL/M$ is $3.5$ at $M=1$ and $1.75$ at $M=16$, so it does not stay constant. This is a power law with $p=0.75$, not direct proportion.

The exact predictions are

$$CL(16)=3.5(16^{0.75})=3.5(8)=28\ \text{L/h}$$

and

$$CL(81)=3.5(81^{0.75})=3.5(27)=94.5\ \text{L/h}.$$

Doubling mass multiplies clearance by $2^{0.75}\approx1.68$, not by 2. Within this fictional case, a dose scaled by the same supplied rule therefore would not increase linearly with weight.

For positive $M$ and $CL$, base-10 logs give

$$\log_{10}CL=\log_{10}k+0.75\log_{10}M.$$

On log-log axes, the slope is the exponent $0.75$, and the intercept is $\log_{10}k=\log_{10}3.5\approx0.544$.

The same four moves—identify, parameterize, predict and scale, then log-linearize—complete the case.

*Teaching example—fictional drug and illustrative numbers, not medical advice.*
