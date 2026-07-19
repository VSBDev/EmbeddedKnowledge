# Adapt the map to a real decision

A fictional learner, Noor, plans to apply to Harbor Medical School next year. Harbor's current website lists an institution-specific prerequisite that Noor cannot find as a Premed topic title. Noor also wants the Premed US-oriented route.

This is not a request to guess Harbor's rule. It is a route-planning problem with an external-boundary check.

## Your task

Write a five-step plan that:

1. resolves the named route's effective topic set by combining its `pathway`-tagged topics with `core: true` topics when that route includes the common core;
2. locates candidate content by outcome meaning and stable ID rather than title matching alone;
3. traces unmet prerequisite links;
4. treats cross-links and evidence labels according to their actual jobs; and
5. records a separate check of Harbor's current primary-source requirement.

Then identify the first topic Noor should study **only if** the supplied mastery record shows its prerequisites secure. The correct response is conditional: the curriculum map can organize a route, but it cannot supply missing external policy or infer mastery.

This transfer differs from the worked example. The target is not already named by an exact graph ID, the route filter and dependency order must be coordinated, and one decision belongs outside the graph. Complete `item-route-plan` in `assessment.json` for the scored version.

:::{source-note}
:claims: claim-map-layers, claim-map-link-types, claim-map-route-resolution, claim-map-label-scope, claim-map-stable-identity
:sources: source-premed-knowledge-graph

The transfer applies the graph contract while preserving its explicit boundary: pathway labels are curriculum filters rather than institution-specific admissions promises.
:::
