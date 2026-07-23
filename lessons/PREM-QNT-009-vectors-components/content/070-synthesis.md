# Rebuild the vector audit

1. Declare axes, positive directions, angle reference, and units.
2. Resolve every vector into signed components.
3. Combine corresponding components; do not add magnitudes unless direction justifies it.
4. Reconstruct magnitude with the Euclidean norm and direction with a quadrant-aware inverse tangent.
5. Check signs, units, normalization, triangle bounds, and dot-product meaning.

## Retrieval

- How does a scalar differ from a vector?
- Why is the zero vector impossible to normalize?
- What does the sign of a dot product reveal?
- Why can one-argument arctangent give the wrong direction?

Complete `assessment.json`. If component signs fail, return to the axis convention. If magnitude fails, redo component arithmetic before taking the norm. If a sketch feels essential, replace it with a component table and named positive directions before retrying.

:::{source-note}
:claims: claim-scalar-vector, claim-vector-components, claim-vector-norm, claim-dot-product, claim-direction-components, claim-triangle-inequality
:sources: source-nist-dlmf-vectors

The synthesis applies sourced vector relations through an original resolve-combine-reconstruct-check method.
:::
