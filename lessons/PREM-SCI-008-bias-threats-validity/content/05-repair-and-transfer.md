# Repair two shortcuts, then transfer the audit

:::{misconception}
:id: misconception-large-sample-cures-bias

**Commit before reading on.** Two laboratories use the same caliper, which adds exactly 2 mm to every length. Laboratory A measures 40 specimens; Laboratory B measures 40,000. Which laboratory's mean is closer to the true mean solely because of sample size?

The tempting model is “more data cures error.” More observations can reduce random sampling fluctuation, but both means retain the 2 mm systematic offset unless the instrument is calibrated or the bias is otherwise corrected. Laboratory B can produce a narrower uncertainty interval around a wrong value.

**Recheck in a changed case.** An automated classifier systematically treats one shade of blue as a positive result. Would processing one million images remove that classification rule's distortion? No. More images help characterize the output of the flawed rule; they do not make the rule valid.
:::

A second shortcut is “the name tells me the direction.” The seedling audit disproved that: conditioning on survivors reduced the planned contrast in that particular table. Other survivor filters can exaggerate an apparent success. Direction follows the joint pattern of inclusion, measurement, and outcomes—not the label.

## Transfer: audit a computational evidence claim

A fictional consortium compares a new acoustic classifier with a standard method for detecting bat species in field recordings. Its preregistered target is all recordings captured at 12 named sites during one season.

You learn that:

- only storage cards still readable at season end enter the archive, and card loss is more common at humid sites where several uncommon species were expected;
- human annotators create the reference labels after seeing the new classifier's suggestions;
- recordings on which the new classifier times out are removed from its denominator but remain in the standard method's denominator; and
- all 12 site comparisons were completed, but the report presents only the four sites where the new classifier performed better.

Write a compact audit for a reader deciding whether the superiority claim is supported.

Your response must:

1. state the target comparison;
2. identify and justify at least three stage-specific mechanisms;
3. distinguish the within-study reporting problem from the evidence needed to establish publication bias;
4. avoid guessing a direction where the facts do not determine it; and
5. propose one matching check for each mechanism you identify.

### Transfer feedback

A strong response can include all of the following:

- **Survivorship or selection:** archive availability depends on a card remaining readable, and readability is related to site conditions and expected species. Request the original capture log, card-failure records, and recovery attempts.
- **Observer within information bias:** annotators see the new model's suggestions before assigning reference labels, so the purported reference can be pulled toward that model. Request independent masked annotation, prespecified rules, and adjudication of disagreements.
- **Post-entry exclusion or attrition-like analysis selection:** timeouts disappear only from the new method's denominator, making the denominators incomparable. Restore all prespecified recordings and count timeout as the protocol specifies; at minimum, report performance with and without plausible timeout results.
- **Selective outcome reporting:** the study reports a result-dependent subset of its 12 prespecified site comparisons. Compare the preregistration and analysis plan with complete site-level results.
- **Publication bias remains unestablished from this study alone:** determining whether whole studies became visible based on results requires a wider search for completed projects, registrations, reports, and investigator data.

The audit should not claim that every correction favors one method. The missing-card and masked-label results are not known. The unequal timeout denominator and the four-of-twelve reporting choice are directly visible process problems, but their exact combined effect still requires the omitted data.

## Recovery after transfer

If you named fewer than three mechanisms, draw seven boxes—target, reachable, enrolled, measured, retained, reported, visible—and attach each fact to a transition. If you named a direction without a comparison of omitted and retained cases, replace it with “direction unresolved” and state what data would resolve it. Then retry with a different context: a benchmark of protein-structure predictions that includes only proteins with solved structures, lets unmasked curators resolve ambiguous matches, drops software failures, and reports only favorable protein families.

:::{source-note}
:claims: claim-bias-versus-random-error, claim-selection-mechanism, claim-information-misclassification, claim-observer-mechanism, claim-attrition-mechanism, claim-survivorship-filter, claim-publication-versus-reporting
:sources: source-bias-taxonomy, source-information-bias, source-selection-framework, source-misclassification-direction, source-observer-systematic-review, source-attrition-reporting, source-selection-toolkit, source-publication-bias, source-outcome-reporting

The methodological sources support the repaired principles and stage distinctions. The caliper, image classifier, acoustic benchmark, and retry benchmark are original fictional cases, not sourced datasets or empirical findings.
:::
