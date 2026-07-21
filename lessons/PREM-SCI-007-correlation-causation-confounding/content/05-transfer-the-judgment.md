# Transfer the judgment to a laboratory system

A university laboratory office has ten automated pipette-checking stations for forty introductory teaching labs. Researchers want to know whether receiving a station reduces liquid-transfer errors. This transfer case is fictional; its allocation, measurements, and results were created for this lesson.

The evidence arrives in three forms:

1. **Routine records:** labs already using a station report fewer transfer errors than labs without one. Better-funded labs were more likely to buy stations and also had more staff training.
2. **Bench evidence:** when researchers deliberately introduce a calibration fault under controlled conditions, the station detects the fault before transfer and blocks the next automated step.
3. **External allocation:** among forty eligible applicants, the equipment office uses a documented computer lottery to allocate its ten stations. Researchers compare all labs according to lottery allocation, use the same blinded scoring procedure, and record outcomes for every lab. The packet does not report the station and no-station groups' error results.

:::{check}
:id: check-transfer-laboratory
:kind: transfer

Without copying the app example's wording, prepare an evidence judgment that does all of the following:

- states the association supported by the routine records;
- maps one confounder and explains its direction;
- states the mechanism supported by the bench evidence and its boundary;
- decides whether the external allocation is a natural-experiment candidate and names two assignment facts to verify;
- explains what the verified lottery could identify and what cannot be inferred without the group results;
- names one reason a future allocation-effect statement may not transport beyond the applicant labs; and
- explains how the three evidence forms can be integrated without pretending that one design supplies another design's strength.

Attempt the complete judgment before reading the model response.
:::

## Model response

The routine records support an association: existing station use accompanies fewer recorded transfer errors. Funding is a plausible common cause because it can influence both purchasing a station and staff training, which can influence errors. The crude station–error difference therefore does not isolate a station effect.

The bench perturbation supports a mechanism segment: under the tested fault and bench conditions, the station detects the fault and prevents the next automated step. It does not establish how often that fault occurs in teaching labs, the total effect on all error types, or the effect in another setting.

The office lottery is a natural-experiment candidate because an external process, not the research team or lab preference, allocated access. Before giving it experiment-like weight, verify at least that every eligible applicant truly had the stated lottery chance, the allocation could not be manipulated or overridden, no other resource was bundled with a station, and outcome recording stayed complete and comparable. If those checks hold, a reported comparison could estimate the effect of **allocation** among the applicant labs. The packet supplies no group outcome values, however, so it does not show benefit, harm, no effect, or any magnitude. The strongest current statement is:

> A verified lottery and complete comparable follow-up would make the station-allocation contrast causally interpretable among the forty applicant labs during the study period, but the evidence supplied contains no result from which to infer the effect's direction or magnitude.

The statement is about **allocation**, the applicant labs, the measured errors, and the study period. It may not transport to nonapplicant labs with different staff, workflows, equipment, or error patterns. Actual station use may also differ from allocation.

Together, the routine records show a real-setting pattern, the bench study supports how one detection step can work, and the lottery creates a potentially strong route to causal attribution for allocation. They do not yet converge on a field-outcome effect because the lottery packet reports no outcome contrast. If that result were later supplied, agreement across designs with genuinely different weaknesses could be more informative than repetition of one analysis, but it would still not erase a shared measurement problem or justify a claim outside the studies' scope.

## Stress-test the conclusion

Change one fact at a time.

- **Managers could trade lottery positions before allocation.** The assignment is no longer defensibly chance-based without further analysis; fall back to an observational association unless another design repairs the comparison.
- **Only labs that filed an incident report entered the dataset, and both station use and severe errors affected filing.** Report inclusion is a collider; conditioning on it can induce selection bias.
- **The station flag is analyzed as though it were a pre-allocation confounder.** The flag occurs after allocation and is part of the proposed mechanism, so routine adjustment changes the target.
- **A negative-control error category that the station cannot detect also falls sharply after allocation.** Investigate a shared recording or co-intervention explanation before crediting the station.
- **A second study uses the same records and a different regression program.** That may test software or model sensitivity, but it does not by itself create triangulation with unrelated bias sources.

:::{source-note}
:claims: claim-inference-targets, claim-causal-contrast, claim-third-variable-roles, claim-randomization-scope, claim-mechanism-evidence, claim-natural-experiments, claim-negative-controls, claim-triangulation
:sources: source-causal-diagrams, source-natural-experiments, source-randomized-trials, source-mechanistic-evidence, source-negative-controls, source-triangulation

The sources support calibrating each conclusion to assignment, causal structure, mechanism evidence, population, and measurement; treating external allocation as a causal opportunity only after its assignment process is defended; and using negative controls or genuinely different bias structures to probe the result. The laboratory case and all of its details are original fictional teaching material.
:::
