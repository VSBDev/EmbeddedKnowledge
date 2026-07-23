# Predictable change is not always direct proportion

A fictional training setup has a pump deliver a fixed 48 mL volume. Its idealized delivery times are:

| Delivery rate $x$ (mL/min) | Delivery time $y$ (min) | Ratio $y/x$ | Product $xy$ (mL) |
| ---: | ---: | ---: | ---: |
| 2 | 24 | 12 | 48 |
| 4 | 12 | 3 | 48 |
| 8 | 6 | 0.75 | 48 |

The time changes predictably, but it is not directly proportional to delivery rate: $y/x$ is not constant. The product $xy=48$ is constant, identifying the inverse model $y=48/x$. Doubling the rate halves the idealized delivery time.

This lesson uses a four-part model audit: **identify** a candidate family from its invariant or scaling behavior, **parameterize** it, **predict**, then **check** residuals and assumptions.

The setup is a mathematical training example, not instructions for operating a pump or making a patient-care decision.

## Starting check

- Under direct proportion, what happens to $y$ when $x$ triples?
- Under inverse proportion, what happens to $y$ when $x$ triples?
- Which invariant calculation distinguishes direct from inverse proportion?

If a graph is inaccessible, use a coordinate table plus columns for candidate invariants and predicted values.

:::{source-note}
:claims: claim-power-law-scaling, claim-invariants, claim-model-checking
:sources: source-nist-dlmf-powers, source-nist-scatterplot, source-nist-transformations

NIST sources support the power relations and residual-based model checking used. The training setup, table, and audit are original.
:::

## Accessibility and alternatives

Every essential pattern is represented by equations, coordinates, tables, and verbal scale-factor descriptions. No task requires judging curve shape visually, distinguishing colors, or interacting with a graph.
