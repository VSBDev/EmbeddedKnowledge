# Recover a power law from a table

A fictional fabrication process makes five square sensor pads. Their side length is $x$ millimetres, and their total face area is $y$ square millimetres. Exact measurements give coordinates $(1,5)$, $(2,20)$, and $(4,80)$. Test a power model $y=kx^p$, recover $p$ and $k$, and predict the total area when $x=3$ mm.

:::{worked-example}
:id: worked-example-power-table

**Givens, constraints, and unknowns.** The three coordinates are exact; $x>0$ and $y>0$; five equally sized square pads are retained throughout. The unknowns are the exponent $p$, the constant $k$, and the predicted area at $x=3$ mm. The model is limited to this fixed-number, fixed-shape setup.

**Plan.** Use scale factors to remove $k$ and recover $p$, use one coordinate to recover $k$, check all coordinates and the log-log form, then make and interpret the prediction.

**1. Identify scaling.** When $x$ doubles from 1 mm to 2 mm, $y$ is multiplied by 4. The same happens from 2 mm to 4 mm.

**2. Recover the exponent.**

$$4=2^p,$$

so $p=2$. The positive exponent agrees with total area increasing as side length increases.

**3. Recover the constant.** Using $(1,5)$,

$$k=\frac{5}{1^2}=5.$$

The model is $y=5x^2$. Here $k=5$ is the dimensionless count of identical square pads, so millimetres squared on the right match the square-millimetre unit of $y$.

**4. Check every coordinate.** The fitted responses are 5, 20, and 80 mm$^2$, so all residuals are zero for the stated exact table.

**5. Check on base-10 log coordinates.** The points are approximately $(0,0.699)$, $(0.301,1.301)$, and $(0.602,1.903)$. Each step has slope $0.602/0.301=2$; the intercept is $\log_{10}5\approx0.699$.

**6. Predict and interpret within the declared model.** At $x=3$ mm, $\widehat y=5(3^2)=45$ mm$^2$. This is the total face area of five pads, each with area $9$ mm$^2$; the second calculation independently checks the prediction.
:::

:::{check}
:id: check-direct-versus-square

Why is this not direct proportionality even though larger $x$ gives larger $y$?

Which decision in the solution determined the exponent, and why did comparing scale factors remove $k$?
:::

The ratio $y/x$ changes from 5 to 10 to 20. Direct proportion requires that ratio to remain constant.

The scale-factor comparison determined $p$: dividing one response by another cancels the fixed $k$, leaving the input scale factor raised to $p$.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

The table, solution, log coordinates, residual check, and prediction are original applications of standard power, logarithm, and model-checking relations.
:::
