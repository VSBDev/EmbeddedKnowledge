# Redesign a score-only weekly review

A study group holds a weekly review. Its current dashboard stores each member's name, total percentage, and a red or green icon. The group responds to every low total by assigning the entire chapter again. Members report confidence only once at the end of the week.

Your task is to redesign the process so it chooses evidence-based next actions without collecting private learner profiles.

## New constraints

The redesigned review must:

1. use anonymous task IDs rather than names;
2. preserve one attempt before feedback and enough intermediate evidence to locate or delimit the first broken link;
3. record a predicted rubric percentage and the percentage earned on that same rubric;
4. distinguish an observed fact from a provisional error hypothesis;
5. assign a targeted action and a fresh varied probe;
6. delete or keep local any individual record after its decision is complete; and
7. work as ordered text without icons, color, pointing, dragging, or a timer.

## Required output

Submit:

- a six-field record template;
- decision rules for resolved and unresolved classifications;
- two examples showing how the same total score can produce different actions;
- a confidence-calibration rule that does not label people;
- an aggregate planning summary containing only counts of action needs, such as “four selection contrasts needed”; and
- a fresh-probe schedule linked to the next weekly plan.

The group context changes the problem. You must coordinate privacy, aggregation, access, and action selection; renaming the worked learner is insufficient.

## Self-check

Ask whether someone using only your ordered text could determine:

1. what was observed;
2. which classification is provisional;
3. why the action matches the evidence;
4. how confidence compares with performance; and
5. what new evidence could reverse the decision.

If any answer depends on a color, total score, identity, or hidden conversation, revise the system.

:::{source-note}
:claims: claim-monitoring-control, claim-calibration-definition, claim-error-log-loop, claim-operational-categories
:sources: source-debruin-monitoring-control, source-content-standard

The sources support connecting monitoring evidence to control decisions and preserving accessible, actionable feedback. The dashboard, privacy constraints, aggregation rule, and transfer task are original and are not presented as a validated institutional system.
:::
