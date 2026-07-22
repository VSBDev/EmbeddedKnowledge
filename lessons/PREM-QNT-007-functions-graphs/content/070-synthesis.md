# Rebuild the graph audit

1. Name input and output quantities, units, and allowed domain.
2. Treat each graph point as $(x,f(x))$.
3. Read intercepts and extrema against the stated domain and axis scale.
4. Compute average rate from changes in both coordinates.
5. Verify transformations with a key input and an accessible value table.

## Retrieval

:::{check}
:id: check-synthesis-retrieval

- What makes a relation a function?
- How do domain and range differ?
- Why does $f(x+3)$ shift a key point left?
- Why is average rate not endpoint divided by elapsed input?
:::

**Feedback after attempting:** A function assigns one output to each allowed input. The domain contains allowed inputs, whereas the range contains produced outputs. In $f(x+3)$, the new input $x=-3$ recreates the parent input 0, so its key point moves left 3. Average rate compares output change with input change, so its numerator is $f(b)-f(a)$ rather than an endpoint output alone.

Complete `assessment.json`. If notation fails, return to the concept scene. If a transformation direction fails, use the key-input equation. If a graph interpretation depends only on visual shape, rewrite it as coordinates, intervals, and axis labels before retrying.

:::{source-note}
:claims: claim-function-notation, claim-axis-quantity, claim-transform-inference, claim-average-rate
:sources: source-common-core-functions, source-nist-si-axis

The synthesis combines sourced function, rate, transformation, and axis-labeling relations through an original graph-audit procedure.
:::
