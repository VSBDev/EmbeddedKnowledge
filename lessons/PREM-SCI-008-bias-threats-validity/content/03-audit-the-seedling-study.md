# Audit a result one decision at a time

Consider this fictional experiment.

Researchers want to know whether a new coating improves the fraction of drought-exposed seedlings that are **alive and healthy 30 days after assignment**. They randomly assign 100 seedlings from one drought-tolerant cultivar to the coating and 100 to an uncoated comparison. The planned outcome counts a seedling as successful only if it is alive on day 30 and meets a visible-health rubric.

On day 30:

| Assigned group | Assigned | Alive | Rated healthy among survivors |
| --- | ---: | ---: | ---: |
| Coating | 100 | 90 | 72 |
| Comparison | 100 | 70 | 49 |

The assessor knows which seedlings received the coating. The report compares 72 of 90 with 49 of 70 and states that healthy appearance was 80% versus 70%, a difference of 10 percentage points. The methods do not explain why dead seedlings were removed from the planned outcome. A dated protocol also lists root mass, but the report gives no root-mass result.

## 1. Represent the task before judging it

The target is not “health among survivors.” It is the fraction of **all assigned seedlings** that are alive and healthy on day 30. The relevant denominators are therefore 100 and 100. The treatment assignment, survival filter, health judgment, and reporting decision are separate parts of the path.

## 2. Choose an audit plan

Work from earliest to latest:

1. check who entered and how comparison groups were created;
2. compare the planned and analyzed outcome;
3. examine how health was judged;
4. inspect losses, exclusions, and denominators; and
5. compare the protocol with the report and then the report with the wider evidence base.

## 3. Execute the audit

### Entry and assignment

Using one drought-tolerant cultivar narrows the population to which the result can be applied. On the facts given, however, all 200 seedlings entered before random assignment, so cultivar choice does not by itself show that the coating-versus-comparison contrast inside this experiment was selected differently between groups. Record the transportability limit; do not automatically relabel it as an internally biased comparison.

### Survival and the denominator

The analysis retained only seedlings that survived, even though survival was part of the planned success outcome and differed between groups. That is a survivorship filter tied directly to treatment group and outcome.

Using the planned denominator gives:

- coating: 72 alive-and-healthy seedlings out of 100 assigned, or 72%;
- comparison: 49 alive-and-healthy seedlings out of 100 assigned, or 49%; and
- planned absolute difference: 72% minus 49% = 23 percentage points.

The survivors-only calculation gave 10 percentage points. In this case, excluding non-survivors made the difference smaller, not larger. That numerical check is why “survivorship bias always exaggerates success” is not a safe rule.

This is not ordinary attrition on the facts given: the deaths were observed and were part of the planned outcome. If the investigators had lost contact with living seedlings or discarded unreadable day-30 records, those missing outcomes would require an attrition audit.

### Health measurement

The health rubric requires judgment, and the assessor knows group assignment. This creates a plausible observer-bias route within information bias. The table cannot reveal how many borderline ratings would change under masked assessment, so the direction and magnitude of this component remain unknown. A masked second rating of stored images, using the same prespecified rubric, would be an informative check.

### Reporting and publication

The missing root-mass result is evidence of a possible within-study reporting problem because it appears in the dated protocol but not the report. It is selective outcome reporting, not by itself publication bias. To investigate publication bias, an evidence reviewer would need to look beyond this one report for registered or otherwise documented completed studies that never became accessible.

## 4. Check the interpretation

The denominator check is independently reproducible from the flow counts and changes the reported contrast from 10 to 23 percentage points for the planned outcome. The observer concern cannot be corrected from the published counts. A defensible appraisal therefore separates what can be recomputed from what remains uncertain.

The strongest current statement is: “For this cultivar under the stated conditions, the planned alive-and-healthy comparison favors the coating by 23 percentage points in the observed assignments, but unmasked health ratings create unresolved measurement risk, and the unreported protocol outcome requires follow-up.” This is an appraisal of a fictional study, not evidence that any seed coating is effective.

:::{source-note}
:claims: claim-selection-mechanism, claim-information-misclassification, claim-observer-mechanism, claim-attrition-mechanism, claim-survivorship-filter, claim-publication-versus-reporting
:sources: source-selection-framework, source-information-bias, source-misclassification-direction, source-bias-taxonomy, source-observer-systematic-review, source-attrition-reporting, source-selection-toolkit, source-publication-bias, source-outcome-reporting

The source set supports the stage-specific distinctions used in this audit. The seedling design, counts, calculations, and appraisal are original teaching material rather than data or examples drawn from any source.
:::

## 5. Choose checks that match the stage

- **Selection or scope:** inspect eligibility, source population, recruitment, and assignment records.
- **Information or observer:** inspect the rubric, calibration, masking, repeat measurements, and disagreement with a reference or masked second assessor.
- **Attrition:** inspect a participant or specimen flow record, reasons and timing of missingness, early outcome predictors, and analyses under plausible missing outcomes.
- **Survivorship:** restore the cases that failed the survival filter when the target requires them, or redefine and justify the target explicitly.
- **Selective reporting or publication:** compare protocol, registry, analysis plan, report, and records of completed studies.

## Self-explanation

Which audit decision most strongly changed the numerical answer here, and which concern could not be quantified from the available table? Explain why those two concerns should not be merged into one vague statement that “the study is biased.”
