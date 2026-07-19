# The map's grammar

A useful reading starts by separating five questions: **What is this item? What contains it? What must normally come first? Which route includes it? What does its evidence label mean?** Mixing those questions produces bad plans even when every displayed word is read correctly.

## Three layers, one tracked target

| Layer | Instructional job | What not to infer |
|---|---|---|
| Domain | A broad curricular region | A domain is not one mastery score. |
| Module | A coherent cluster of related topics | A module title is not an independently assessed outcome. |
| Topic | An observable outcome tracked as an atomic mastery unit | Its screen position is not its identity. |

The stable topic ID carries identity when a title is improved or the display is rearranged. A plan should therefore name `topic-...` IDs, not “the third circle on the left.”

## Two links with different jobs

A **prerequisite** link points from an earlier dependency to the outcome that depends on it. It asserts a normal learning order. A **cross-link** says that two topics illuminate one another; it does not choose which one must be studied first. Containment links answer the separate question of which domain or module owns a child node.

Read arrows in words. For `A → B` labelled *prerequisite*, say: “A should normally be secure before B.” For an A–B cross-link, say: “A and B are conceptually related; this edge alone specifies no order.” This verbal translation prevents visual direction or proximity from silently changing the relation.

## Scope labels are not dependency links

`requirement`, `pathway`, `sourceTags`, and `evidenceConfidence` answer different questions:

- **requirement** describes curricular placement such as portable core, medicine bridge, pathway, or on-ramp;
- **pathway** supports route filtering;
- **source tags** identify evidence families used to justify placement, not membership of a route;
- **evidence confidence** reports confidence in curricular placement, not the probability that a scientific claim is true and not the percentage of institutions requiring it.

For a named route, the effective topic set combines topics tagged for that route with portable-core topics. The portable-core route resolves to its own tagged set. After filtering, prerequisites still decide sequence: membership makes a topic relevant, not automatically ready.

## A four-pass planning model

1. **Identity:** locate the target by stable topic ID and confirm its outcome statement.
2. **Scope:** apply the route rule and inspect requirement and pathway labels.
3. **Order:** follow prerequisite edges backward until you reach outcomes already secure or outcomes with no unmet dependencies.
4. **Evidence and boundary:** read placement evidence honestly, then verify any external admissions requirement with its current primary source.

The model assumes that the published graph is current enough for curriculum planning and that your mastery record is stored separately. It does not infer mastery from time, confidence, or having opened a lesson.

:::{source-note}
:claims: claim-map-layers, claim-map-link-types, claim-map-route-resolution, claim-map-label-scope, claim-map-stable-identity
:sources: source-premed-knowledge-graph

The project knowledge-graph specification defines these node layers, link meanings, route rule, label boundaries, and identity conventions. The claims ledger records their current-version scope.
:::
