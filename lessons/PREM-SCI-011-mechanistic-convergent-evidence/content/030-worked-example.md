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
| Organismal | In one grass background, two independently edited Tide-1 loss-of-function lines and unedited sibling controls were exposed to the same salt regimen. At day 14, 49 of 100 edited plants and 82 of 100 controls survived. | Both edited lines came from one genetic background; unintended editing effects were checked at predicted sites but cannot be excluded everywhere. |
| Population | Across 800 plants in 12 estuaries, a Tide-1 variant was associated with higher survival after measured salinity was included in the analysis. | Estuary ancestry and several habitat differences were not adequately separated from the variant. |
| Intervention | Within each of three grass backgrounds, matched seedlings were randomly assigned to a Tide-1 inhibitor or vehicle. Outcome assessors were masked. Survival was 52% with inhibitor and 74% with vehicle; seven seedlings lacked an outcome, four in the inhibitor group and three in the vehicle group. | The inhibitor may affect another protein; the three backgrounds do not represent every estuary population. |

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
- The organismal comparison supports a Tide-1-related survival difference in one background. The observed difference is $49\% - 82\% = -33$ percentage points for edited versus control plants. Because genotype was deliberately edited, this is also intervention evidence, although the table places it under organismal evidence to emphasize scale.
- The population study supports an association across estuaries. Uncontrolled ancestry and habitat prevent a confident causal interpretation.
- The randomized inhibitor experiment supports a causal effect of the assigned inhibitor under the tested greenhouse conditions, provided the comparison remained valid. Its relevance to Tide-1 depends on inhibitor specificity. The observed difference is $52\% - 74\% = -22$ percentage points.

**Step 2: weigh reliability and relevance.**

| Line | Reliability for its measured result | Relevance to Tide-1 causing survival | Weight in this question |
| --- | --- | --- | --- |
| Molecular | Good internal contrast: changing the proposed binding sequence removed attachment. | Indirect; attachment is upstream of the outcome. | Supports a plausible link, not the whole claim. |
| Organismal edit | Two edited lines point the same way, with sibling controls. | Direct for one background and exposure; unintended edits remain possible. | Important loss-of-function evidence. |
| Population | Large and distributed, but unresolved ancestry and habitat remain. | Directly concerns field populations, yet causal relevance is uncertain. | Compatible context, not pivotal causal evidence. |
| Randomized inhibitor | Random assignment and masked outcome assessment protect the comparison; missing outcomes are few and nearly balanced. | Direct for the inhibitor's effect; indirect for Tide-1 if the inhibitor is not specific. | Important intervention evidence with a specificity boundary. |

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

- Direction check: both interventions that reduce Tide-1 function also reduce survival.
- Scale check: the conclusion names greenhouse conditions rather than all estuaries.
- Rival-explanation check: off-target effects remain possible, so the proposed restoration study must reverse the phenotype through Tide-1 itself.
- Data check: the supplied percentages agree with the counts where counts are given; no confidence interval can be computed from the summaries alone without additional assumptions and data.

**Self-explanation prompt.** Which decision changed the final claim most: the population sample size, the two intervention directions, or the untested molecule-to-phenotype hinge? Explain why the other two do not determine the wording by themselves.
:::

The strongest answer identifies the hinge. Agreement among the interventions raises confidence, while the population line broadens relevance. But the untested link is what prevents a stronger mechanistic claim.

:::{source-note}
:claims: claim-lines-answer-different-questions, claim-weigh-before-integrate, claim-independent-convergence, claim-randomization-boundary, claim-mechanistic-limits, claim-calibrated-conclusion
:sources: source-efsa-weight-evidence, source-lawlor-triangulation, source-fda-ich-e9, source-iarc-preamble

The sources support the integration procedure, the need to compare differing bias structures, the qualified role of randomization and blinding, the limits of experimental systems, and transparent rationale for a bounded conclusion. Tide-1, Seamarsh grass, all results, calculations, limits, and the restoration study are original fictional teaching material.
:::
