# Make the diabetes result checkable

This is how a first positive result is made checkable instead of merely reported.

**Illustrative teaching example—not medical advice.** Suppose the first small crossover study reported one bounded result: in its participants, later dinners were followed by higher next-morning fasting glucose than earlier dinners. This fictional result does not establish that dinner timing truly changes glucose or recommend when anyone should eat.

## Give each check one job

| Check | Evidence question and action in this case | What the result would change |
| --- | --- | --- |
| Preregistration | **What was fixed before outcomes were known?** Before collecting new data, record next-morning fasting glucose as the outcome, define “earlier” and “later,” and specify the planned comparison and rules for missing nights. | A report that follows or openly explains departures from this record would raise confidence in the visibility of the decision trail. Unexplained departures would lower confidence in interpreting the analysis as planned. The record would not prove the dinner-timing claim. |
| Open methods | **Can another person inspect what was done?** Make the crossover protocol, dinner-time recording instructions, variable definitions, analysis code, and software information inspectable. Explain any privacy-protecting limits on participant-level data and the route for appropriate access. | A complete trail would raise confidence that another team can inspect what was done. Missing detail would lower that confidence. Transparency alone would not show that the conclusion is correct. |
| Computational reproducibility | **Can the same data and scripts regenerate the result?** Ask an independent analyst to use the same participant data and scripts to regenerate the reported numbers. | Matching numbers would raise confidence that the documented computation produces the report. A mismatch would lower confidence in that computational result. Because no new participants are involved, either outcome says nothing by itself about replication. |
| Replication | **Does the claim survive a new-data test?** Run the crossover study with new participants, stating what stays close to the first protocol and what intentionally changes. | Agreement would raise confidence that the bounded result can appear in another tested group under the stated conditions. Disagreement would lower confidence in the claim as stated or suggest that its scope needs narrowing. Neither result would be proof. |
| Sensitivity analysis | **Does the conclusion survive plausible alternatives?** Re-run the same target comparison using plausible alternative definitions of “late” or justified ways of handling missing nights. | Similar conclusions would raise confidence in stability across those tested choices. Materially different conclusions would lower confidence in that stability. Neither result addresses alternatives that were not examined. |

The distinctions depend on the evidence question. **Same data and scripts** test computational reproducibility. **New participants** test replication. **Alternative definitions or missing-night rules for the same question** test sensitivity. The open trail makes all three inspectable, while preregistration shows which decisions were fixed before the new outcomes were known.

## Tie the checks into one verification plan

1. Before enrolling new participants, register the outcome, earlier/later definitions, analysis, and missing-night rules.
2. Release an inspectable protocol and code package, with participant-level information protected and any access route explained.
3. Have a second analyst re-run the first study's data and scripts, recording whether the same numbers appear.
4. Have another team collect new participant data under a prespecified crossover protocol.
5. For the first study and the new-data study, report the planned analysis beside the declared sensitivity analyses.
6. Summarize the trails separately: whether the computation re-ran, whether the conclusion survived the tested alternatives, whether the new-data result agreed or disagreed, and which materials were inspectable or protected.

The final sentence should stay bounded: these checks may raise or lower confidence in the reported participant-level pattern under the tested definitions and conditions, but no single agreement, disagreement, or act of transparency proves a general effect.

The next lesson, **Scientific models and their limits**, builds a simple model of the glucose response. That is the next question; this scene stops at making the evidence trail checkable.

:::{source-note}
:claims: claim-four-safeguards-complementary, claim-terminology-convention, claim-preregistration-role, claim-open-methods-role, claim-privacy-boundary, claim-replication-role, claim-sensitivity-role
:sources: source-reproducibility-consensus, source-replication-perspective, source-cos-preregistration, source-nih-data-privacy, source-fda-sensitivity

These sources support the distinct jobs and limits assigned to preregistration, open methods, computational reproducibility, replication, sensitivity analysis, and privacy-protecting access in this fictional clinical recap. The dinner-timing case, sequence, and wording are original teaching material, not evidence about a real glucose effect or medical advice.
:::
