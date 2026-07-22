# Recover a power law from a table

A fictional dataset gives exact positive coordinates $(1,5)$, $(2,20)$, and $(4,80)$. Test a power model $y=kx^p$.

:::{worked-example}
:id: worked-example-power-table

**1. Identify scaling.** When $x$ doubles from 1 to 2, $y$ is multiplied by 4. The same happens from 2 to 4.

**2. Recover the exponent.**

$$4=2^p,$$

so $p=2$.

**3. Recover the constant.** Using $(1,5)$,

$$k=\frac{5}{1^2}=5.$$

The model is $y=5x^2$. If $x$ is measured in input units and $y$ in response units, $k$ has response-units per input-unit squared.

**4. Check every coordinate.** The fitted responses are 5, 20, and 80, so all residuals are zero for the stated exact table.

**5. Check on base-10 log coordinates.** The points are approximately $(0,0.699)$, $(0.301,1.301)$, and $(0.602,1.903)$. Each step has slope $0.602/0.301=2$; the intercept is $\log_{10}5\approx0.699$.

**6. Predict within a declared model.** At $x=3$, $\widehat y=5(3^2)=45$. This is interpolation between observed inputs 2 and 4.
:::

:::{check}
:id: check-direct-versus-square

Why is this not direct proportionality even though larger $x$ gives larger $y$?
:::

The ratio $y/x$ changes from 5 to 10 to 20. Direct proportion requires that ratio to remain constant.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-log-linearization
:sources: source-nist-dlmf-powers

The table, solution, log coordinates, unit analysis, and prediction are original applications of standard power and logarithm relations.
:::
