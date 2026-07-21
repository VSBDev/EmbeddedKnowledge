# Four questions for one claim

Scientific fields do not use *replication*, *reproducibility*, and related terms in exactly the same way. In this lesson, the verbs matter more than the labels:

- **Re-run:** Can someone use the same data and documented computational steps to obtain the reported result? We call this **computational reproducibility**.
- **Repeat:** Can someone collect new data in an informative test of the claim? We call this **replication**.

A computationally reproducible error is still an error. A replication that disagrees is still informative. Keep asking what was held the same, what changed, and what claim was tested.

## 1. What was fixed before the outcomes were known?

A **preregistration** is a dated research plan placed in a registry before the relevant outcomes are inspected. A useful plan states the question, primary outcome, sampling or stopping rule, exclusions, and main analysis precisely enough to distinguish planned tests from later exploration.

Preregistration does not forbid learning from surprises. If an instrument fails or an assumption becomes implausible, investigators can change course. They should identify what changed, when, and why. The safeguard is the visible timeline, not obedience to a plan that no longer makes scientific sense.

A **Registered Report** adds a publication process to that idea. A journal evaluates the question and proposed method before results are known and can offer in-principle acceptance. After the study, the journal checks adherence, justified changes, and the quality of the conclusions. Exploratory findings can still be reported when clearly distinguished.

## 2. Can another person inspect what was done?

**Open methods** means reporting enough procedural and analytic detail for another person to understand and, where feasible, repeat the work. Depending on the study, the inspectable trail may include materials, protocols, instruments, variable definitions, analysis code, software versions, and data.

“Open” does not always mean “download everything without conditions.” Human-participant data may require de-identification, data-use agreements, or controlled access. Consent, law, and the risk of re-identification still apply. A clear route to appropriately protected access can be more responsible than a public file.

## 3. Does the claim survive a new-data test?

A **replication** collects new data to test a claim from prior evidence. No repeat is literally identical: time, samples, investigators, and settings change. A useful replication therefore states which parts were kept close to the original and which parts changed.

Agreement generally raises confidence that the claim survives the changed conditions. Disagreement generally lowers confidence in the claim as stated, but it does not by itself show fraud, incompetence, or that one study is the sole “true” result. It can expose chance variation, an error, a poorly described method, or a boundary on where the effect occurs.

## 4. Does the conclusion survive plausible alternatives?

A **sensitivity analysis** repeats the analysis for the same scientific question while changing a consequential assumption or analytic choice. Examples include defensible ways to handle missing observations or plausible model forms. The alternatives should be justified, not selected because they produce a preferred answer.

If the conclusion is similar across the tested alternatives, it is robust **to those alternatives**. If it changes materially, report the dependence instead of choosing the most convenient result. A **multiverse analysis** extends this logic by examining many reasonable analytic paths. It can reveal which choices matter, but judgment is still required to decide which paths are reasonable.

:::{diagram} ../diagrams/four-safeguard-questions.diagram.json
:alt: Four parallel questions examine when decisions were fixed, whether work is inspectable, whether a claim survives new data, and whether a conclusion survives plausible analytic alternatives.
:longdesc: A starting node labeled “Research claim” branches to four safeguard nodes. Preregistration asks what was fixed before outcomes were known. Open methods asks whether the procedure and analytic trail can be inspected. Replication asks whether the claim survives an informative new-data test. Sensitivity analysis asks whether the conclusion survives plausible assumptions or analytic choices. All four paths lead to a final node labeled “Calibrated conclusion,” emphasizing that the checks inform confidence rather than certify truth.
:::

The diagram is a map, not a sequence. You do not have to finish one safeguard before thinking about another. Here is the same information without a visual layout:

| Safeguard | The audit question | What it can expose | What it cannot guarantee |
| --- | --- | --- | --- |
| Preregistration | What was fixed before outcomes were known? | outcome-guided switching, undisclosed stopping or exclusions | a good question, valid measurements, or correct analysis |
| Open methods | Can another person inspect what was done? | missing procedural detail, coding choices, inaccessible evidence | that the disclosed work is error-free |
| Replication | Does the claim survive an informative new-data test? | chance findings, method dependence, limits across samples or settings | final proof or a unique explanation for disagreement |
| Sensitivity analysis | Does the conclusion survive plausible alternatives? | dependence on assumptions or defensible analytic choices | robustness to alternatives that were never tested |

:::{check}
:id: check-same-or-new-data
:kind: retrieval

Commit an answer before continuing: a second analyst receives the original data and code, rebuilds the environment, and obtains the reported estimate. Which question has been answered, and which has not?
:::

The analyst has shown computational reproducibility for that result: the same inputs and documented steps produced the same output. No new data were collected, so the claim has not yet been replicated.

:::{source-note}
:claims: claim-terminology-convention, claim-preregistration-role, claim-registered-reports-role, claim-open-methods-role, claim-privacy-boundary, claim-replication-role, claim-sensitivity-role, claim-multiverse-role
:sources: source-reproducibility-consensus, source-replication-perspective, source-cos-preregistration, source-cos-registered-reports, source-nih-data-privacy, source-fda-sensitivity, source-multiverse-analysis

The sources support the declared terminology, safeguards, process descriptions, and limits. The four-question map, table wording, retrieval prompt, and examples are independently synthesized. The Registered Reports source describes a publication model; policies and implementation can vary by journal. Sensitivity findings apply only to the alternatives examined.
:::
