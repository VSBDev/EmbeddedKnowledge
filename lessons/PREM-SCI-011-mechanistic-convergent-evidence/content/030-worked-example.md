# A complete evidence integration

This worked example uses invented data. Its purpose is to expose the decisions between reading four study summaries and writing one defensible claim.

:::{worked-example}
:id: worked-example-tide-one
:label: Does Tide-1 contribute to salt tolerance?

**Task.** Integrate the evidence below to answer: “Does Tide-1 contribute to survival of fictional Seamarsh grass during a 14-day salt exposure?” State the strength and scope of support, the pivotal evidence, the largest uncertainty, and the next study that would most reduce it.

**Givens.**

| Line | Design and result | Important limitation |
| --- | --- | --- |
| Molecular | Purified Tide-1 attached to a regulatory DNA sequence beside an ion-transport gene. Replacing six bases in that sequence removed detectable attachment in the same assay. | A purified system does not show that attachment changes gene activity or plant survival. |
| Organismal | In one grass background, two independently edited Tide-1 loss-of-function lines and unedited sibling controls were exposed to the same salt regimen. At day 14, 24 of 50 plants from edited line E1 and 25 of 50 from edited line E2 survived; pooled edited survival was therefore 49 of 100, compared with 82 of 100 unedited sibling controls. | Both edited lines came from one genetic background; unintended editing effects were checked at predicted sites but cannot be excluded everywhere. The summary does not preserve batch-level allocation or dependence information. |
| Population | Across 800 plants in 12 estuaries, a Tide-1 variant was associated with higher survival after measured salinity was included in the analysis. | Estuary ancestry and several habitat differences were not adequately separated from the variant. |
| Intervention | Within each of three grass backgrounds, 100 matched seedlings per arm were randomly assigned to a Tide-1 inhibitor or vehicle. Outcome assessors were masked. Among seedlings with observed outcomes, 50 of 96 (52.1%) survived with inhibitor and 72 of 97 (74.2%) with vehicle. Four inhibitor-assigned and three vehicle-assigned seedlings lacked outcomes after labels detached during masked handling; the reported percentages exclude them. | The missing-outcome reason was operational, but whether missingness depended on survival cannot be established. The inhibitor may affect another protein, and the three backgrounds do not represent every estuary population. |

The studies are fictional. Counts are supplied for reasoning practice, not to imitate a real species or establish a biological fact.

**Unknown.** We are not estimating a universal effect size. We need the strongest causal statement that all four lines can jointly support.

**Why this model fits.** The task asks for evidence integration, so use four operations: check that every line addresses the same bounded question; weigh reliability and relevance; inspect agreement and shared bias; then calibrate the claim.

**Plan.**

1. Translate each result into the narrowest claim it supports.
2. Mark the main threat and the direction it could push the result, when knowable.
3. Identify which agreements come from genuinely different designs.
4. Find the weakest bridge from molecule to survival.
5. Write the claim and try to falsify it with the strongest rival explanation.

**Step 1: translate before combining.**

- The molecular assay supports “Tide-1 can attach to this DNA sequence under the assay conditions.” It does not yet support “Tide-1 increases survival.”
- The organismal comparison supports a Tide-1-related survival difference in one background. Each edited line has lower survival than the pooled controls: $24/50 = 48\%$ for E1, $25/50 = 50\%$ for E2, and $82/100 = 82\%$ for controls. The pooled difference is $49\% - 82\% = -33$ percentage points for edited versus control plants. Because genotype was deliberately edited, this is also intervention evidence, although the table places it under organismal evidence to emphasize scale.
- The population study supports an association across estuaries. Uncontrolled ancestry and habitat prevent a confident causal interpretation.
- The randomized inhibitor experiment supports a causal effect of the assigned inhibitor under the tested greenhouse conditions, provided the comparison remained valid. Its relevance to Tide-1 depends on inhibitor specificity. Among observed outcomes, the difference is approximately $52.1\% - 74.2\% = -22.1$ percentage points.

**Step 2: weigh reliability and relevance.**

| Line | Reliability for its measured result | Relevance to Tide-1 causing survival | Weight in this question |
| --- | --- | --- | --- |
| Molecular | Good internal contrast: changing the proposed binding sequence removed attachment. | Indirect; attachment is upstream of the outcome. | Supports a plausible link, not the whole claim. |
| Organismal edit | E1 and E2 separately show lower survival than the pooled sibling controls. | Direct for one background and exposure; unintended edits and unreported batch structure remain possible. | Important loss-of-function evidence. |
| Population | Large and distributed, but unresolved ancestry and habitat remain. | Directly concerns field populations, yet causal relevance is uncertain. | Compatible context, not pivotal causal evidence. |
| Randomized inhibitor | Random assignment and masked outcome assessment protect the comparison. Complete-case reporting omits 4% of inhibitor assignments and 3% of vehicle assignments; even the most outcome-adverse allocation of those missing results preserves a lower survival proportion in the inhibitor arm. | Direct for the inhibitor's effect; indirect for Tide-1 if the inhibitor is not specific. | Important intervention evidence, with uncertainty about exact effect size and a specificity boundary. |

“Large” does not automatically mean “heavy.” The population study includes the most plants, but its unresolved confounding makes it less decisive for the causal question than its sample size suggests.

**Step 3: inspect convergence and dependence.**

The edit and inhibitor experiments use different manipulations, so a single unintended DNA edit would not explain both. The molecular assay uses another method and endpoint. Their biases are not wholly independent, however: all three interpret Tide-1 as the relevant target. If the inhibitor is nonspecific and the edited region alters a neighbouring process, both organismal results could point in the same direction for different reasons.

The population association agrees in direction but carries a separate ancestry-and-habitat threat. It extends the setting, but it cannot rescue a weak experiment merely by agreeing.

**Step 4: locate the hinge.**

The evidence connects Tide-1 perturbation to survival and Tide-1 to a molecular binding event. It does not yet show that the particular binding event causes the survival difference. That molecule-to-phenotype link is the hinge.

**Step 5: state and challenge the result.**

> The bundle provides **moderate support** that Tide-1 contributes to survival of Seamarsh grass during the tested 14-day greenhouse salt exposure. The pivotal evidence is the lower survival after two distinct Tide-1-directed perturbations, supported by a sequence-specific molecular interaction. The estuary association is compatible with the claim but is not decisive because ancestry and habitat remain confounded. The evidence does not establish that Tide-1 is the sole salt-tolerance mechanism, that the proposed DNA-binding step mediates the survival effect, or that the effect generalizes to every genetic background or field exposure. Restoring functional Tide-1 in edited plants across several backgrounds, while measuring both target-gene activity and survival, would most directly test the remaining hinge.

The phrase **moderate support** fits because several different methods converge, yet the target-specificity and cross-scale link remain uncertain. “Tide-1 causes salt tolerance” would be too broad. “Tide-1 is merely associated with survival” would ignore the interventions.

**Independent checks.**

- Direction check: both edited lines have lower survival than controls, and the inhibitor arm has lower survival than the vehicle arm.
- Scale check: the conclusion names greenhouse conditions rather than all estuaries.
- Rival-explanation check: off-target effects remain possible, so the proposed restoration study must reverse the phenotype through Tide-1 itself.
- Missing-outcome check: if every missing inhibitor outcome were a survival and every missing vehicle outcome were not, survival would be $54/100 = 54\%$ versus $72/100 = 72\%$. Reversing those assignments gives 50% versus 75%. Thus the inhibitor arm remains lower by 18 to 25 percentage points across these extreme allocations, although the exact effect remains uncertain.
- Uncertainty check: if the pooled edited and control plants are treated as independent binomial observations, an assumption-dependent 95% interval for the $-33$-percentage-point difference is approximately $-45$ to $-21$ percentage points. That calculation is a sensitivity summary, not a defensible design-based interval, because the supplied data do not describe allocation by edit line, batches, or other dependence.

**Self-explanation prompt.** Which decision changed the final claim most: the population sample size, the two intervention directions, or the untested molecule-to-phenotype hinge? Explain why the other two do not determine the wording by themselves.
:::

The strongest answer identifies the hinge. Agreement among the interventions raises confidence, while the population line broadens relevance. But the untested link is what prevents a stronger mechanistic claim.

:::{source-note}
:claims: claim-lines-answer-different-questions, claim-weigh-before-integrate, claim-independent-convergence, claim-randomization-boundary, claim-mechanistic-limits, claim-calibrated-conclusion
:sources: source-efsa-weight-evidence, source-lawlor-triangulation, source-fda-ich-e9, source-iarc-preamble

The sources support the integration procedure, the need to compare differing bias structures, the qualified role of randomization and blinding, the limits of experimental systems, and transparent rationale for a bounded conclusion. Tide-1, Seamarsh grass, all results, calculations, limits, and the restoration study are original fictional teaching material.
:::
