# An equation describes a solution set

An **expression** such as $4x-9$ represents a value. An **equation** such as $4x-9=15$ asserts that two expressions are equal. Its **solution set** contains every allowed value that makes the assertion true.

:::{definition}
:id: definition-equivalent-equations

**Equivalent equations** have the same solution set. Adding or subtracting the same expression on both sides preserves equality; multiplying or dividing both sides by the same nonzero quantity also preserves it.
:::

For $4x-9=15$:

$$
4x-9+9=15+9,\qquad 4x=24,\qquad x=6.
$$

The final substitution $4(6)-9=15$ confirms the candidate in the original constraint.

## Structure before arithmetic

Parentheses group a single factor: $3(x-2)=21$ means the entire difference is tripled. You may divide by 3 first or distribute first; either valid path preserves the solution set.

Fractions can be cleared by multiplying every term on both sides by a common nonzero denominator. For

$$
\frac{x}{3}+\frac{x}{4}=7,
$$

multiplying the whole equation by 12 gives $4x+3x=84$, so $x=12$.

## Three possible outcomes

- A statement such as $x=5$: one solution.
- A contradiction such as $0=7$: no solution.
- An identity such as $0=0$: every value in the declared domain is a solution.

Domain restrictions remain part of the problem. Division by a variable requires recording that it is nonzero; a count may require a nonnegative integer even when the equation is defined for all real numbers.

:::{source-note}
:claims: claim-quantity-equation, claim-numerical-equation, claim-unit-independent-rearrangement
:sources: source-nist-si-chapter7

NIST supports the separation between unit-independent quantity relations and numerical-value equations. The solution-set framework and algebraic derivations are original mathematical synthesis.
:::
