# Enter the timeline in the right place

Begin with retrieval. Without looking back, write two questions:

1. Who created the exposure difference?
2. Where did the study enter the exposure–outcome timeline?

Then reconstruct the five design names under the answers. Commit the map before reading the practice feedback.

## One part supplied

A fictional materials team can ethically set two curing methods, assign otherwise eligible strips to those methods by chance, hold temperature and strip dimensions alike, and record breaking force.

Which design family fits, and why?

This is a randomized **experiment** because the research team assigns the curing method by chance and then records the outcome. Random assignment strengthens the comparison by making other starting differences comparable in expectation. The team must still implement both methods as planned and measure breaking force consistently.

## Complete the selection lines

Fill the missing entry point before opening the feedback.

| Design | Entry point | What comes next? |
| --- | --- | --- |
| Prospective cohort | groups defined now by exposure or a source population | ___ |
| Retrospective cohort | source population and earlier exposure in existing records | ___ |
| Case-control | ___ | reconstruct earlier exposure |
| Cross-sectional | a defined population in one survey window | ___ |

A complete table says:

- prospective cohort: follow forward for new outcomes;
- retrospective cohort: read the records forward from earlier exposure to later outcome;
- case-control: select cases with the outcome and controls without it;
- cross-sectional: measure current exposure and outcome together.

If you classified every study with old records as case-control, redraw the selection line. Old exposure and later outcome records can form a retrospective cohort.

## Mixed comparisons with less support

Name the best-fit design before reading each answer. State the decisive feature, not only the label.

**A.** A team recruits people who currently use either stairs or lifts by their own choice, records that exposure, and follows new activity outcomes for one year.

This is a **prospective cohort**: exposure is observed rather than assigned, and the team follows from current exposure to later outcomes. The result would show an association unless additional causal assumptions were justified.

**B.** Investigators identify every confirmed case of an uncommon equipment-related skin reaction in a registry, select comparable registry members without the reaction, and compare prior glove-material exposure.

This is a **case-control study**: selection begins with outcome status, then moves backward to earlier exposure. The uncommon outcome makes outcome-first sampling practical. This fictional example does not advise diagnosis or equipment use.

**C.** A representative campus survey measures current residence noise and current morning-alertness scores during the same week to estimate how common low alertness is and whether it varies with noise.

This is **cross-sectional**: exposure and outcome are measured together in one window. It can estimate prevalence and association, but the snapshot alone does not establish which came first.

**D.** A transit agency—not the research team—introduces quieter buses first on routes selected by a maintenance rule written years earlier. Researchers compare outcomes before and after rollout across eligible routes.

This is a **natural-experiment candidate**, not an automatic causal result. Researchers must test whether the maintenance rule, route eligibility, and other changes make the exposure comparison defensible.

**E.** A lab team assigns cell cultures to a defined nutrient concentration or comparison condition and records growth under held-alike settings.

This is an **experiment** because the researchers assign the exposure. Whether assignment is random, whether the comparison condition was run as intended, and whether other settings were held alike affect the strength of the inference.

:::{misconception}
:id: misconception-retrospective-means-case-control
:kind: boundary

**Commit first.** A complete employee roster is grouped by a chemical exposure recorded in 2010, and later diagnoses through 2020 are read from the same archive. Is it case-control because every record is historical?

**Tempting shortcut:** retrospective data always mean case-control.

**Why the shortcut fails:** retrospective describes the study's timing relative to recorded events. Case-control describes outcome-first selection. This archive begins with a roster and exposure, then proceeds to later outcomes.

**Repair:** label the selection point before the calendar. The design is a retrospective cohort.

**Recheck:** investigators instead select 2020 cases with the diagnosis and controls without it, then compare 2010 exposure. Now the outcome-first entry makes it case-control.
:::

:::{misconception}
:id: misconception-any-external-event-natural-experiment
:kind: boundary

**Commit first.** A voluntary wellness program is offered, and people who already exercise more are more likely to enroll. Is the rollout automatically a natural experiment because researchers did not create it?

**Tempting shortcut:** anything that happens outside a laboratory is a natural experiment.

**Why the shortcut fails:** voluntary enrollment may track characteristics that also affect the outcome. An outside event is not enough; the assignment process must create a comparison whose rival differences can be examined and defended.

**Repair:** describe exactly who became exposed and why. If self-selection remains tied to the outcome, call it an observational cohort or cross-sectional comparison as its timing warrants and limit the conclusion to association.

**Recheck:** a program begins above a pre-existing eligibility cutoff that participants could not manipulate. This may create a natural-experiment opportunity, but researchers still need to examine the cutoff, other differences, implementation, and outcomes near the boundary.
:::

## Independent choice

Write a two-sentence design justification for one new scenario: the first sentence names who creates exposure and how units enter; the second names what inference the design can support and one reason it could be weaker.

If your answer contains only a label, add the assignment and selection verbs. If it claims causation from an ordinary observational association, replace *caused* with *was associated with* and name the untested assignment problem. If it says a randomized result is guaranteed, name one implementation or measurement condition that still matters.

:::{source-note}
:claims: claim-design-assignment, claim-cohort-direction, claim-case-control-use, claim-cross-sectional-use, claim-randomized-inference, claim-natural-assignment, claim-causal-boundary
:sources: source-study-design-overview, source-clinical-design-essentials, source-observational-designs, source-natural-experiments

The sources support the defining assignment and selection features, the uncommon-outcome use of case-control sampling, prevalence-focused cross-sectional use, randomized comparability in expectation, and the need to defend outside assignment in a natural experiment. Every practice scenario and recheck is independently created and fictional.
:::
