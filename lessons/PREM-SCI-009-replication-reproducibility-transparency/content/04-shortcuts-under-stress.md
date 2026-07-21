# Put the shortcuts under stress

Start without looking back. Write the four audit questions from memory. Then attach one word to each question: **before**, **inspect**, **new data**, and **alternatives**.

A complete reconstruction is:

1. What was fixed **before** outcomes were known? — preregistration
2. Can another person **inspect** what was done? — open methods
3. Does the claim survive **new data**? — replication
4. Does the conclusion survive plausible **alternatives**? — sensitivity analysis

If you remembered the terms but not the questions, practise the questions. They tell you what evidence to look for.

## One answer supplied

A research team publicly posts its protocol, variable definitions, raw non-sensitive measurements, analysis code, and software versions. A second analyst uses those files and regenerates the published table.

This demonstrates **computational reproducibility** for the table because the same inputs and steps produced the same output. It also shows one benefit of open methods. It does not demonstrate replication because nobody collected new data.

## Complete the audit

For each fictional case, name the missing or tested safeguard and state one limit.

**A. The late registration**

A team examines all outcomes on Monday and uploads its “preregistration” on Tuesday without saying that the outcomes were already known.

This record cannot establish which decisions preceded those outcomes. Registration after seeing the relevant results is not preregistration for that analysis. The team can still report the work honestly as exploratory and disclose the timing.

**B. The new sample**

Another laboratory uses a sufficiently detailed protocol to repeat the test with new specimens. Its result is smaller and in the opposite direction.

This is a replication result. It lowers confidence in an unqualified original claim, but it does not identify one certain cause of disagreement. Compare samples, implementation, measurement, analysis, and random variation before proposing explanations.

**C. The protected records**

A human-participant study publishes its protocol, variable dictionary, analysis code, and a description of its de-identification process. Row-level data are available only through a reviewed request and data-use agreement because combinations of variables could reveal participants.

This can be a responsible form of transparency, not an automatic failure of openness. A reader should be able to see what exists, why access is controlled, who may request it, and which conditions apply. Public access must not override consent, law, or privacy.

**D. The changing target**

A primary analysis asks whether a treatment changes day-14 height. An “alternative analysis” instead asks whether leaves are darker at day 30.

That is a new outcome and a new question, not a sensitivity analysis of the day-14 height claim. Sensitivity analysis changes a consequential assumption or analytic choice while keeping the target question aligned.

## Repair two tempting models

:::{misconception}
:id: misconception-transparency-certifies-truth
:kind: boundary

**Commit first.** A preregistered study has open files and fully reproducible code. Must its scientific conclusion be correct?

**Tempting model:** enough transparency badges certify a result.

**Why it fails:** the plan could ask a poor question, the measurement could miss the intended concept, and reproducible code could repeat a mistake.

**Repair:** treat safeguards as evidence about a trail. Ask what each one makes inspectable and what uncertainty remains.

**Recheck:** open code reveals that two category labels were reversed. Openness helped find the error; it did not prevent it.
:::

:::{misconception}
:id: misconception-replication-is-verdict
:kind: boundary

**Commit first.** A replication agrees with the original. Does that prove the effect is real and general?

**Tempting model:** replication success proves truth, while disagreement proves falsehood or misconduct.

**Why it fails:** every replication changes some conditions, and both agreement and disagreement must be interpreted against sampling variation, method quality, and the claim's scope.

**Repair:** use directional confidence language. Agreement generally raises confidence across the tested changes; disagreement generally lowers confidence in the claim as stated or helps locate a boundary.

**Recheck:** three close repeats agree in one laboratory and a deliberately broader repeat disagrees in another setting. The combined evidence may support a narrow claim while weakening a broad one.
:::

## Faded practice

For each case below, write three lines: **safeguard**, **evidence gained**, **remaining limit**. No template words are supplied this time.

1. A registered plan names one primary outcome, but a broken instrument forces a replacement measure. The report marks the change and gives the reason.
2. Twelve reasonable data-processing combinations produce estimates ranging from nearly zero to a large difference.
3. A new team follows the same core procedure in a different season and finds a similar result.

Use this guide only after committing:

1. The preregistration provides a time-stamped comparison point; the disclosed deviation preserves the actual history. The replacement measure may still change what the study tested.
2. A multiverse-style sensitivity analysis shows that processing choices strongly affect the estimate. The result does not say which path is best, and it cannot test omitted alternatives.
3. Replication with new data raises confidence across the changed team and season. It does not prove the claim in every season or setting.

If your three answers all said “the study is valid,” replace that verdict with a specific change in confidence. If your sensitivity answer chose the largest estimate, report the distribution instead. If your replication answer ignored what changed, name the changed condition and narrow the conclusion.

:::{source-note}
:claims: claim-four-safeguards-complementary, claim-terminology-convention, claim-preregistration-role, claim-open-methods-role, claim-privacy-boundary, claim-replication-role, claim-sensitivity-role, claim-multiverse-role
:sources: source-reproducibility-consensus, source-replication-perspective, source-cos-preregistration, source-nih-data-privacy, source-fda-sensitivity, source-multiverse-analysis

The sources support the distinctions, privacy boundary, and calibrated interpretations used in the cases. Every scenario is fictional and independently written. The multiverse is presented as an extension of sensitivity reasoning, not as a mechanical guarantee that every reasonable analysis was included.
:::
