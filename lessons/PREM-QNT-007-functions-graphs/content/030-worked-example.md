# Transform a parent rule and verify key points

Consider the fictional response rule

$$g(t)=2(t-3)^2+5.$$

:::{worked-example}
:id: worked-example-quadratic-transform

**1. Identify the parent.** Start with $f(t)=t^2$, whose minimum point is $(0,0)$.

**2. Track transformations.** Replacing $t$ by $t-3$ moves the key input to 3. Multiplying outputs by 2 stretches them vertically. Adding 5 moves every output up 5.

**3. Verify the minimum.** At $t=3$, $g(3)=5$. Because a square is nonnegative, $g(t)\ge5$, so $(3,5)$ is the minimum point.

**4. Build accessible points.**

| $t$ | $g(t)$ |
| ---: | ---: |
| 2 | 7 |
| 3 | 5 |
| 4 | 7 |
| 6 | 23 |

**5. Calculate average rate from 4 to 6.**

$$\frac{g(6)-g(4)}{6-4}=\frac{23-7}{2}=8.$$

**6. Interpret.** The average output change is 8 output units per input unit over that interval; it is not the instantaneous rate at every point.
:::

:::{check}
:id: check-key-input

Which substitution most directly verifies the claimed right shift: $t=0$ or $t=3$?
:::

$t=3$ makes the transformed inner expression zero and locates the parent function's key input.

:::{source-note}
:claims: claim-function-notation, claim-transform-inference
:sources: source-nist-dlmf-functions

The response rule, value table, and interpretation are original.
:::
