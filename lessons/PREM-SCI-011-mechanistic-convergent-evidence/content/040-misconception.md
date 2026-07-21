# Agreement is not a vote count

Two tempting rules would make evidence integration easy:

1. four agreeing studies are four votes for the claim;
2. a randomized intervention settles causation and mechanism.

Both rules fail in predictable ways. Commit to an answer in each case before reading the repair.

:::{misconception}
:id: misconception-four-votes
:label: Four agreeing analyses equal four independent confirmations

**Prediction.** One cohort is analysed with four statistical methods. All four estimates point in the same direction. A second cohort is unavailable. Has the causal claim been confirmed four independent times?

Write **yes** or **no**, then name the feature that determines independence.

**Why the model feels reasonable.** Repetition often reduces random error, and seeing the same answer several times feels reassuring.

**What it cannot explain.** All four analyses share the same recruitment, exposure measurement, outcome measurement, missing participants, and unmeasured variables. A shared error can survive every analysis. Changing the calculation is not the same as changing the source of evidence.

**More adequate model.** Agreement carries more information when the approaches answer the same underlying question but have different key biases. Count neither papers nor methods. Map the dependence.

**Compare on the same case.** The four analyses may test sensitivity to statistical assumptions, which is useful. They do not by themselves test sensitivity to a mismeasured exposure or an unmeasured confounder shared by the dataset.

**Recheck.** A molecular assay, a whole-organism gene edit, and a population cohort agree. The assay and edit use one laboratory's antibody, but the cohort does not. Is the bundle fully independent? No. It contains partial convergence: the cohort has a different bias structure, while the two experimental lines share a reagent-dependent vulnerability.
:::

:::{misconception}
:id: misconception-randomization-proves-all
:label: Randomization rules out every rival explanation

**Prediction.** Seedlings are randomly assigned to inhibitor or vehicle. Investigators know the assignments, a third of inhibitor-assigned seedlings lack outcomes, and the inhibitor can affect a second protein. Does random assignment alone prove that Tide-1 caused the outcome?

Answer before continuing.

**Why the model feels reasonable.** Random assignment can make comparison groups similar in their starting prognostic factors, including factors the investigators did not measure.

**What it cannot explain.** Knowledge of assignment can influence care or measurement. Differential missing outcomes can break the original comparison. An off-target intervention can cause the outcome through another route. Randomization concerns assignment; it does not certify every later step or identify the molecular mediator.

**More adequate model.** A well-conducted randomized comparison supports the causal effect of **assignment to the intervention under the studied conditions**. To connect that effect to a specific mechanism, add target-specific evidence and preserve the randomized comparison through follow-up and analysis.

**Compare on the same case.** Concealed assignment and masked outcome assessment protect different parts of the study. Neither makes a three-background greenhouse result automatically apply to every field population.

**Recheck.** Suppose all assigned seedlings are followed, outcome scoring is masked, and a second target-specific intervention produces the same direction. Confidence in a Tide-1 contribution rises. It still does not establish Tide-1 as the only pathway or the effect in every habitat.
:::

## What to do when results disagree

Disagreement is not a cue to hide the inconvenient result or average unlike outcomes. First ask whether the studies really asked the same question.

- Did they use the same exposure, outcome, dose, timing, and population?
- Could one method's main bias push upward while another's pushes downward?
- Are the measurements comparable?
- Does the apparent conflict locate a failed bridge—for example, a molecular effect that never reaches the organism?

If a difference in scale or timing explains the results, rewrite the claim so each result has a place. If a likely bias explains one result, state that judgment and its evidence. If neither explanation is secure, lower confidence and design a study that makes the competing explanations predict different outcomes.

:::{check}
:id: check-conflict
:label: Retrieval before feedback

A molecular change appears after one hour, but no organismal effect appears after 14 days. Give two explanations that do not require either study to be fraudulent or careless. Then name one measurement that would discriminate between them.
:::

Possible explanations include a transient change that is reversed by feedback, an effect too small to alter the phenotype, an irrelevant tissue, an assay artifact, or compensating pathways in the intact organism. A discriminating measurement must sit between the results: for example, measure the proposed downstream process over time in the relevant tissue while confirming that the molecular intervention reached its target. “Repeat both studies” is not yet discriminating because it does not separate the explanations.

:::{source-note}
:claims: claim-independent-convergence, claim-randomization-boundary, claim-mechanistic-limits, claim-conflict-response, claim-calibrated-conclusion
:sources: source-efsa-weight-evidence, source-lawlor-triangulation, source-fda-ich-e9, source-iarc-preamble

Lawlor and colleagues support distinguishing triangulation across methods with different biases from repeated analyses that share bias, and using inconsistency to direct further research. FDA/ICH E9 supports the roles of randomization, blinding, protocol conduct, withdrawals, and missing data. EFSA and IARC support explicit uncertainty, system limits, and transparent integration. The cases and repair prompts are original.
:::
