# A graph is a set of input-output claims

A **function** assigns exactly one output to each allowed input. In $y=f(x)$, $x$ is an input, $f(x)$ is its output, and the graph contains every ordered pair $(x,f(x))$ in the domain.

:::{definition}
:id: definition-domain-range

The **domain** is the set of allowed inputs. The **range** is the set of outputs the function actually produces over that domain.
:::

For $f(x)=\sqrt{x-2}$ over the reals, require $x\ge2$, so the domain begins at 2. Because a principal square root is nonnegative, the range begins at 0.

## Composition

Composition feeds one output into another function:

$$ (f\circ g)(x)=f(g(x)). $$

The domain must satisfy both stages. If $f(u)=\sqrt u$ and $g(x)=x-2$, then $(f\circ g)(x)=\sqrt{x-2}$ requires $x\ge2$.

## Reading graph structure

- An $x$-intercept has output 0.
- A $y$-intercept is $f(0)$ when 0 is in the domain.
- A maximum or minimum compares outputs over a stated domain.
- Increasing means later inputs have larger outputs over an interval; it does not mean the outputs must be positive.
- Average rate of change from $a$ to $b$ is $[f(b)-f(a)]/(b-a)$ for $a\ne b$.

## Transformations

Starting from $y=f(x)$:

- $f(x-h)+k$ shifts right by $h$ and up by $k$;
- $-f(x)$ reflects outputs across the horizontal axis;
- $f(-x)$ reflects inputs across the vertical axis;
- $af(x)$ multiplies every output by $a$.

Test a key input instead of relying on a slogan.

:::{source-note}
:claims: claim-function-notation, claim-axis-quantity, claim-transform-inference
:sources: source-nist-dlmf-functions, source-nist-si-axis

The NIST records support function notation and explicit numerical-value/axis relations. Definitions, transformations, and examples are original mathematical synthesis.
:::
