# Inside changes run opposite to the sign

:::{check}
:id: check-shift-prediction

Before reading the repair, predict whether $f(x+3)$ shifts the parent graph left or right. Which new input recreates the parent input 0?
:::

:::{misconception}
:id: misconception-horizontal-shift

It is tempting to see $f(x+3)$ and say “right 3” because the sign is positive. Instead, ask which new input makes the inside equal the parent key input 0:

$$x+3=0\quad\Rightarrow\quad x=-3.$$

So the point that was at input 0 appears at input -3: the graph shifts left 3.
:::

Outside changes act directly on outputs; inside changes alter which input reaches a given parent input. Testing a known point is safer than memorizing “opposite direction” without meaning.

:::{check}
:id: check-shift-repair

Recheck the idea with $p(x-5)$: which input recreates the parent input 0, and which way does the graph shift?
:::

**Feedback after attempting:** Solve $x-5=0$ to get $x=5$. The parent point at input 0 therefore appears at input 5, so the graph shifts right 5.

:::{source-note}
:claims: claim-function-notation, claim-transform-inference
:sources: source-common-core-functions

The standards source supports reasoning about input transformations. The misconception, prediction, and key-input repair are original in expression.
:::
