# Follow the evidence pipeline

Before naming a bias, write the target in one sentence: the population or set of cases, the quantity or comparison, the time window, and the intended use. Then trace what happened to each case on the way to the final claim.

The evidence path can be pictured as a series of filters and measurements:

1. target cases must be reachable and eligible;
2. eligible cases must enter the study;
3. exposures, outcomes, and other variables must be recorded;
4. enrolled cases must remain observable and be retained in the analysis;
5. results must enter a report; and
6. the report must become part of the visible evidence base.

:::{diagram} ../diagrams/evidence-pipeline.diagram.json
:label: diagram-evidence-pipeline
:alt: A result passes through availability, entry, measurement, retention, reporting, and publication stages.
:longdesc: Start with the target cases. An availability or survival filter determines which cases are reachable; a recruitment and eligibility rule determines which enter; a measurement process creates recorded variables; loss and exclusion determine which records remain in the analysis; choices among outcomes and analyses determine what enters the report; and whole-study dissemination determines what reaches the visible evidence base. The corresponding threats are survivorship, selection, information or observer, attrition, selective outcome reporting, and publication bias.

This diagram has one job: it locates the mechanism in time. The same sequence is stated in the numbered list, so spatial layout carries no unique information.
:::

A perfect label is less important than a correct mechanism. Several labels can describe the same flawed path, and the same label can arise through different mechanisms.

## Entry: selection bias

**Selection bias** occurs when the rule that determines who or what enters a sample or analysis distorts the target quantity or comparison. The warning sign is not merely “the sample differs from the population.” Ask whether the inclusion process is related to the outcome, the compared groups, or their causes in a way that changes the result being estimated.

An unrepresentative sample can limit which population a result applies to without necessarily destroying a randomized comparison inside that sample. Conversely, a sample that looks demographically similar to its target can still be selected through a rule that distorts the comparison. State which target you mean before deciding.

## Measurement: information and observer bias

**Information bias** is systematic error in measuring or classifying an exposure, outcome, or other study variable. A measurement process is **differential** when its error mechanism differs according to another variable in the analysis—for example, when past exposure is sought much more intensely from one outcome group than another. Differential error can shift an estimate in either direction.

Equal-looking error rates do not give a universal direction rule. The familiar shortcut “nondifferential misclassification biases toward no association” holds only under particular variable types and error structures; there are important exceptions. Unless those conditions are established, describe the mechanism and leave the direction open.

**Observer bias** is a specific information-bias mechanism: an assessor's knowledge, expectations, or predispositions influence a judgment, measurement, classification, or recording decision. It need not be deliberate. Risk is especially plausible when the judgment is subjective and the assessor knows the comparison group. Masking assessors, standardizing decision rules, training observers, and checking agreement against a reference can close or reveal that route. “Double blind” is not a complete audit; identify exactly who was unaware of what.

## Retention and survival: two related filters

**Attrition bias** is distortion created by loss, withdrawal, missing outcomes, or exclusion after units entered a longitudinal study. The percentage missing is only a clue. The stronger questions are why outcomes are missing, whether those reasons differ across groups, whether they relate to the outcome, and how the analysis handled the missing cases. Equal percentages can hide different mechanisms; unequal percentages do not by themselves prove a biased estimate.

**Survivorship bias** occurs when the observed set contains only cases that passed an earlier survival, persistence, success, or availability filter, while cases that failed that filter are absent. It is a form of selection bias. “Survival” can mean remaining alive, but it can also mean a business still operating, a device still functioning, or a specimen remaining usable. Attrition usually begins with an enrolled cohort whose members later become missing; survivorship often appears when the sampling frame already contains only those still observable. The boundary can overlap, so name the filter and its timing.

## Dissemination: publication bias

**Publication bias** occurs when a whole study's chance of entering the accessible literature depends on the nature, direction, magnitude, or statistical significance of its results. The visible studies then need not represent all completed studies addressing the question.

Do not confuse this with **selective outcome reporting**, in which a study is published but only some outcomes, time points, or analyses are fully reported based on their results. Comparing a dated protocol or registry entry with the report can reveal within-study discrepancies. Looking for completed but unpublished studies addresses whole-study visibility.

Funnel-plot asymmetry can prompt questions about missing evidence, but it is not a definitive detector of publication bias. Chance, real differences between small and large studies, methods, and other reporting processes can also produce asymmetry, especially when few studies are available.

## A five-part bias statement

For any suspected bias, write:

1. **Target:** What quantity or comparison was intended?
2. **Stage:** Entry, measurement, retention/survival, or dissemination?
3. **Mechanism:** What made inclusion, measurement, retention, or visibility depend on something relevant?
4. **Consequence:** Which estimate or conclusion could change, and is the direction supported or unknown?
5. **Check:** What record, comparison, design feature, or sensitivity analysis would test the concern?

This format prevents two weak habits: naming a bias without showing a mechanism, and guessing a direction from the label alone.

:::{source-note}
:claims: claim-bias-versus-random-error, claim-selection-mechanism
:sources: source-bias-taxonomy, source-information-bias, source-selection-framework

These sources support bias as systematic rather than random error and selection bias as distortion produced by an inclusion or analytic selection rule. The selection framework also separates internal selection bias from questions about applying a result to a different population.
:::

:::{source-note}
:claims: claim-information-misclassification, claim-observer-mechanism
:sources: source-information-bias, source-misclassification-direction, source-bias-taxonomy, source-observer-systematic-review

The sources support the measurement and misclassification definitions, document exceptions to the nondifferential-toward-the-null shortcut, and provide empirical evidence that unmasked assessment of subjective outcomes can differ from masked assessment. The empirical observer estimate is specific to the trial outcomes studied and is not used as a universal effect size.
:::

:::{source-note}
:claims: claim-attrition-mechanism, claim-survivorship-filter
:sources: source-attrition-reporting, source-bias-taxonomy, source-selection-toolkit

These sources support examining the reasons, prognostic differences, and handling of missing outcomes rather than relying on a loss percentage alone, and they describe loss to follow-up and differential survival as related selection mechanisms.
:::

:::{source-note}
:claims: claim-publication-versus-reporting, claim-funnel-limits
:sources: source-bias-taxonomy, source-publication-bias, source-outcome-reporting

These sources distinguish whole-study publication from selective reporting within a study. They also support treating funnel asymmetry as a prompt to investigate small-study effects and competing explanations, not as proof of publication bias.
:::

## Accessibility and alternatives

The diagram presents the six-stage path as connected boxes. The numbered list above is the complete nonvisual equivalent: target cases; reachable cases; enrolled cases; recorded variables; retained analysis cases; study report; visible evidence base. The transitions are, in order, survivorship or availability, selection into the study, information or observer measurement, attrition or exclusion, selective outcome reporting, and whole-study publication. No distinction depends on color, position, pointer movement, sound, or timed display. You can complete every task by writing the five-part statement in text.
