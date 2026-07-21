# Transfer the audit to an observer-coded construct

A fictional teaching laboratory compares two training formats in a colored-water simulation. Nobody treats a patient, handles biological material, or receives a clinical credential. The laboratory wants to interpret one score as **team coordination during the simulation**.

Its first operational definition is:

> Count the number of spoken handoff phrases during a 12-minute simulation. Two observers independently code each recording with the same written phrase list.

For three teams, the observers report:

| Team | Observer 1 | Observer 2 |
| --- | ---: | ---: |
| A | 14 | 14 |
| B | 9 | 10 |
| C | 7 | 7 |

The laboratory concludes, “The observers nearly agree, so phrase count is a valid measure of team coordination and can show which training format produces clinically competent teams.”

Audit that conclusion before reading the analysis. Your response should contain the target and use, the exact operation, the consistency evidence, at least two remaining error questions, one construct-underrepresentation risk, one construct-irrelevant influence, and a bounded conclusion.

## A defensible transfer analysis

**Target and use.** The proposed target is coordination during this particular simulation. The proposed clinical-competence conclusion reaches far beyond the supplied operation and evidence, so it must be rejected. Simulation phrase count cannot by itself establish clinical competence.

**Operation.** The rule is inspectable but incomplete. It names a duration, record type, observers, and phrase list, yet it should also define where a phrase begins and ends, how overlapping speech and repeats are coded, how inaudible sections are handled, and what training and masking the observers receive.

**Consistency.** Observer agreement is close for these three recordings. That is evidence about one condition allowed to vary—the observer—on a very small supplied set. It says nothing yet about the same observer coding twice, new observers, revised phrase lists, other simulations, audio quality, or laboratories.

**Error.** The one-count difference for Team B may reflect a varying coding decision, an ambiguous phrase boundary, or audio quality. A stable rule that excludes quiet but well-timed handoffs could create a predictable distortion. The three rows cannot determine every error source, but they identify checks to design.

**Construct meaning.** Phrase count may omit timing, accuracy, mutual monitoring, correction of misunderstandings, and useful silence. It may also include talkativeness or repeated unnecessary phrases. Those are respectively risks of leaving out relevant parts of coordination and including influences that are not the intended construct.

**Validity evidence.** Before collecting outcome data, the laboratory should state predictions. Experts could examine whether the coding rule covers the intended coordination domain. Researchers could check whether phrase scores relate as predicted to a different, defensible coordination measure and less strongly to a theoretically distinct feature. They should inspect the response and coding process and test whether the interpretation holds across the populations, formats, and simulation conditions in which it will be used.

**Bounded conclusion.** The table suggests close inter-observer agreement for phrase counts on three recordings. It does not establish that phrase count adequately represents team coordination, that either training caused a difference, or that any team is clinically competent.

## Change one fact and update the judgment

For each change, write the audit question it affects most directly.

1. Both observers use the same audio track but one receives a phrase list with an omitted category.
2. The same observer obtains different counts when recoding a recording one week later.
3. Counts are stable across observers and weeks, but teams learn to repeat phrases without improving the timing or accuracy of handoffs.
4. A second laboratory uses new observers and different recording equipment, yet results remain close when both laboratories code the same supplied recordings.

Suggested checks:

1. The operational definition and a systematic between-observer difference need attention.
2. Within-observer repeatability is weak under the stated time change.
3. Consistency may be high while construct validity is weak because the operation responds to coached repetition rather than the intended coordination.
4. This adds reproducibility evidence across the named laboratory, observer, and equipment changes; it still does not settle construct validity.

## Link backward and forward

The prerequisite variable audit asks what researchers change, record, and hold alike. This lesson adds: **Does the recorded dependent variable deserve the interpretation given to it?**

Later work on bias can ask whether measurement error differs systematically between groups. Later work on replication can ask whether a full finding survives a new study. Those are not the same as measurement repeatability or reproducibility, which concern agreement among measurement results under stated conditions.

:::{source-note}
:claims: claim-operational-definition, claim-error-components, claim-averaging-boundary, claim-repeatability-reproducibility, claim-calibration-traceability, claim-validity-interpretation, claim-construct-evidence, claim-consistency-not-sufficient
:sources: source-nist-operational-definition, source-jcgm-vim, source-nist-tn1297, source-testing-standards

The sources support the observer-agreement boundary, named replication conditions, construct underrepresentation and irrelevant influences, and context-specific validity argument. The simulation, phrase rule, values, changed facts, and analysis are original fictional teaching material.
:::
