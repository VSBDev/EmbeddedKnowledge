# Choose from the comparison you can make

The following employer archive is fictional. It contains no participant or patient data, and you do not need to collect personal information. The task is to choose a study design, not to decide whether a real working pattern affects health.

:::{worked-example}
:id: worked-example-retrospective-cohort
:label: Old records with exposure-to-outcome logic

**1. State the question.**

A fictional employer has complete work-schedule records from 2018 and standardized daytime-alertness assessments from 2022 for the same eligible employees. Did employees recorded on regular night shifts in 2018 have a different chance of low alertness in 2022 than employees recorded on day shifts?

**2. Represent the givens and constraints.**

| Decision feature | What the archive provides |
| --- | --- |
| Exposure | night-shift or day-shift schedule recorded in 2018 |
| Outcome | low-alertness status recorded in 2022 |
| Entry into the data | all employees who met stated eligibility rules, not people chosen because of alertness status |
| Assignment | the research team did not assign shifts |
| Practical boundary | assigning years of work schedules for this question would not be a responsible or practical classroom proposal |

The unknown is the design that matches those features and the strongest conclusion it could support.

**3. Choose a plan.**

Ask in order: Did researchers assign exposure? If not, did a defensible external process assign it? If neither, where does the archive enter the exposure–outcome timeline?

**4. Execute the decision.**

Researchers did not assign shifts, so this is not a planned experiment. No external assignment rule has been described, so “the schedules already existed” does not make it a natural experiment.

The archive begins with a defined eligible population, separates employees by a 2018 exposure, and then compares a 2022 outcome. That exposure-to-later-outcome order fits a **cohort study**.

The cohort is **retrospective** because the research team assembles it after the schedules and alertness outcomes have already been recorded. Retrospective describes when the study is assembled relative to the events. It does not reverse the cohort's central time logic.

**5. Check the nearest alternatives.**

- A **prospective cohort** could record current shift patterns and follow new alertness outcomes into the future. It fits the same exposure-to-outcome logic but not the already-complete archive.
- A **case-control study** would first select employees with low alertness as cases and employees without it as controls, then reconstruct earlier shift exposure. That could reduce how many records need detailed review if low alertness were uncommon, but it is not how this archive enters the population.
- A **cross-sectional study** would measure shift status and alertness in the same survey window. It would lose the four-year temporal order already available.
- A **natural experiment** would require a specific outside rule that determined shift exposure in a plausibly defensible way. Existing schedules alone do not supply that rule.

**6. Interpret the bounded result.**

Suppose low alertness is more frequent in the recorded night-shift group. The archive supports an association between the 2018 shift category and the 2022 outcome in this eligible cohort. It does not by itself establish that night shifts caused the difference. Job type, employee choice, schedule changes, or other features might differ between groups, and the records may be incomplete measures of the relevant exposure or outcome.

**7. Make the decisive choice explicit.**

Why is “the data are old” insufficient for calling this a case-control study?
:::

A defensible answer is that case-control and cohort labels follow how people enter the comparison, not the age of the file. This archive begins with an eligible population and an earlier exposure, then reads toward a later outcome. A case-control study would begin by selecting on the outcome.

## Selection and time are separate questions

Use two lines when a label is unclear:

1. **Selection line:** Who was eligible, and were people included because of exposure, outcome, a population rule, or a one-time sample?
2. **Time line:** Was exposure recorded before the outcome, reconstructed after selecting the outcome, or measured alongside it?

If your two lines disagree with the proposed label, trust the design description rather than a word such as *old*, *follow-up*, or *natural* in the title.

:::{source-note}
:claims: claim-design-assignment, claim-cohort-direction, claim-case-control-use, claim-natural-assignment, claim-causal-boundary
:sources: source-study-design-overview, source-clinical-design-essentials, source-observational-designs, source-natural-experiments

The sources support exposure-to-outcome cohort logic, outcome-first case-control logic, prospective and retrospective timing, externally created exposure in natural experiments, and cautious interpretation without defensible assignment. The employer archive, decision table, constraints, and result are original fictional teaching material.
:::
