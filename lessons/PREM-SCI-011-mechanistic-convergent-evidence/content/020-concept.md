# What each evidence line can see

Imagine looking at the same causal question through four windows. One window shows molecular contact. Another shows a whole organism responding. A third shows patterns across a population. A fourth shows what happens after an investigator deliberately changes something. The views can support one another, but they are not interchangeable.

The first three labels mainly describe **where the evidence is observed**. “Intervention” describes **how a comparison was created**. A randomized whole-plant experiment is therefore both organismal and intervention evidence. Treating the four labels as mutually exclusive boxes would hide information about the design.

## Four contributions, four boundaries

| Evidence line | Question it can help answer | Main contribution | Boundary to inspect |
| --- | --- | --- | --- |
| Molecular | Do specified molecules interact or change in the proposed sequence? | Tests a link in a mechanism; assays may measure binding, structure, reaction, or molecular change. | An isolated molecule or cell system may omit metabolism, feedback, tissue context, dose, or time needed in an organism. |
| Organismal | Does the proposed process accompany or alter a phenotype in an intact organism? | Shows the mechanism operating amid interacting organs, behaviour, development, and environment. | Species, strain, life stage, exposure route, dose, and laboratory conditions may not represent the target population. |
| Population | Does exposure or variation track the outcome across people or other organisms, places, or times? | Tests reach, heterogeneity, frequency, and association in the target setting. | Confounding, selection, measurement error, reverse timing, and population structure can distort an observational pattern. |
| Intervention | Does an assigned change produce a different outcome under the studied conditions? | A well-executed randomized comparison can support a bounded causal effect of the assigned intervention. | Concealment, blinding, adherence, attrition, outcome measurement, off-target effects, and limited settings can weaken interpretation or generalization. |

None of these lines automatically answers, “What is the complete mechanism in every population?” A molecular result may be precise but too narrow. A population association may be broad but causally ambiguous. An intervention may identify an effect without identifying the molecular path that produced it.

:::{diagram} ../diagrams/evidence-integration.diagram.json
:alt: Four evidence lines feed an audit and then an integrated, calibrated claim.
:longdesc: A bounded causal question branches to molecular, organismal, population, and intervention evidence. All four feed an audit of reliability, relevance, expected bias, and shared dependence. The audit feeds a comparison of agreement and conflict, which then feeds a calibrated claim containing strength, scope, uncertainty, and a next discriminating test. No evidence line is placed above another.
:::

The diagram's job is to show sequence without turning the evidence lines into a ladder. In text: begin with one question; examine each line; audit quality, fit, bias, and dependence; compare agreement and disagreement; then write the claim. The table carries the same relationships for a nonvisual or print route.

## Weigh before you integrate

For every line, ask three questions.

1. **Reliability:** If the study claims to have measured or changed something, how credible is that information? Inspect design, measurement, bias control, missing data, and reporting.
2. **Relevance:** If the result is reliable, how directly does it answer this question? Match the exposure, outcome, system, population, timing, and dose.
3. **Consistency:** Does the result fit the other relevant results? Agreement helps only after checking whether the studies address the same question and whether a shared flaw could produce the same answer.

Then add a fourth question that prevents false convergence: **How independent are the important biases?** Four analyses of one cohort share its recruitment and measurement errors. Four molecular assays that use the same contaminated reagent can repeat the same artifact. Agreement becomes more informative when different approaches would not be expected to fail in the same way.

## Build the causal bridge

Do not assume that evidence must arrive in this order. Use the sequence below as a gap-finding device:

1. A molecular interaction is possible.
2. The interaction changes a relevant process.
3. The process affects an organismal outcome.
4. The outcome pattern appears in a target population.
5. Deliberately changing the proposed cause changes the outcome under stated conditions.

Mark each link as supported, contradicted, or still open. A missing link does not erase all other evidence. It limits the claim. For example, consistent molecular and whole-organism experiments might support a mechanism in a model species while leaving effects in natural populations unresolved.

## Write only the claim you have earned

A calibrated claim contains five parts:

> **Direction and relation:** what X does or is associated with. **Strength:** how strongly the integrated evidence supports that relation. **Scope:** the systems, populations, doses, and times covered. **Pivotal support:** which evidence lines carry the conclusion. **Uncertainty and next test:** what remains open and what result would change the conclusion.

Useful strength words include **limited**, **moderate**, and **strong**, but they are not universal numerical grades. The reasons beside the word do the scientific work.

Before moving on, close the table and answer from memory: Why can an intervention be organismal evidence too? Why are four agreeing analyses of one dataset not necessarily four independent confirmations?

:::{source-note}
:claims: claim-lines-answer-different-questions, claim-weigh-before-integrate, claim-independent-convergence, claim-randomization-boundary, claim-mechanistic-limits, claim-calibrated-conclusion
:sources: source-efsa-weight-evidence, source-lawlor-triangulation, source-fda-ich-e9, source-iarc-preamble

EFSA supports assembling, weighing, and integrating evidence with explicit attention to reliability, relevance, consistency, and uncertainty. Lawlor and colleagues support comparing approaches with different key biases. FDA/ICH E9 supports the bounded role of randomization and blinding. IARC provides an authoritative example of separately evaluating human, experimental-animal, and mechanistic streams before integration, including limits of experimental systems. The four-window explanation, table, bridge, and claim template are original synthesis.
:::
