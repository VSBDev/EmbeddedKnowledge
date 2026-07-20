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

`requirement`, `core`, `pathway`, `sourceTags`, and `evidenceConfidence` answer different questions:

- **requirement** describes curricular placement. Its complete current legend is `portable-core` (common guaranteed minimum), `medicine-bridge`, `pathway` (required only for a named route or broad qualification), `on-ramp`, and `enrichment` (useful extension outside the guaranteed minimum);
- **core** is the Boolean membership field used by the route rule for the common portable core; in the current graph it is derived from `requirement: portable-core`;
- **pathway** is an array of route tags used for route filtering. Do not confuse a topic whose requirement value is `pathway` with the separate `pathway` array;
- **source tags** identify evidence families used to justify placement, not membership of a route;
- **evidence confidence** reports confidence in curricular placement, not the probability that a scientific claim is true and not the percentage of institutions requiring it.

For a named route that includes the common core, the effective topic set combines topics whose `pathway` array names that route with topics whose `core` field is `true`—equivalently, topics with `requirement: portable-core` in the current graph. A `portable-core` entry in the `pathway` array is not the field that supplies common-core membership for this rule. The portable-core route itself resolves to its own pathway-tagged set. After filtering, prerequisites still decide sequence: membership makes a topic relevant, not automatically ready.

:::{callout}
:kind: boundary

**A topic filter is not an instrumented route.** A non-empty pathway-tag filter does not prove that the corresponding documented syllabus route is implemented. In curriculum version 1.0, PW-US, PW-BIO, and PW-QNT are instrumented. PW-UK and PW-ES are documented but not instrumented: the `uk-direct-entry` and `spain-bach-pau` tags filter relevant content, but they are not implementations of PW-UK or PW-ES and cannot establish pathway completion. Confirm route status before using a filtered topic set as a study route.
:::

## A four-pass planning model

1. **Identity:** locate the target by stable topic ID and confirm its outcome statement.
2. **Scope:** confirm that the documented route is currently instrumented, then apply its route rule and inspect requirement and pathway labels.
3. **Order:** follow prerequisite edges backward until you reach outcomes already secure or outcomes with no unmet dependencies.
4. **Evidence and boundary:** read placement evidence honestly, then verify any external admissions requirement with its current primary source.

The model assumes that the published graph is current enough for curriculum planning and that your mastery record is stored separately. It does not infer mastery from time, confidence, or having opened a lesson.

:::{source-note}
:claims: claim-map-layers, claim-map-link-types, claim-map-route-resolution, claim-map-label-scope, claim-map-stable-identity
:sources: source-premed-knowledge-graph

The project knowledge-graph specification defines these node layers, link meanings, route rule, label boundaries, and identity conventions. The claims ledger records their current-version scope.
:::
