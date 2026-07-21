# Transfer the audit to a larger chamber

This task removes the familiar gas equation. The model, scale, and evidence are different; the audit stays useful.

## The fictional case

A research team built Model M in 20 L test chambers. Model M treats each chamber as perfectly mixed and predicts one average tracer concentration ten minutes after a release. During development, a fan ran continuously and one sensor sat at the chamber centre.

The team now wants to use Model M in a 2,000 L chamber whose fan cycles on and off. At ten minutes, Model M predicts 10 concentration units everywhere. Three supplied sensor records are:

| Sensor position | Recorded concentration units |
| --- | ---: |
| lower zone | 14 |
| centre zone | 10 |
| upper zone | 6 |

The arithmetic mean of the three records is 10, exactly the model output.

:::{check}
:id: check-transfer-chamber
:kind: transfer

Before reading the feedback, write a model audit that answers all five prompts:

1. What question can Model M answer in its development setting?
2. Which assumption, scale, and domain features changed?
3. What does the new evidence corroborate, and what does it contradict?
4. What sensitivity or discriminating test should come next?
5. Should the team accept, restrict, recalibrate, revise, or replace Model M for the new use? Tie the decision to the desired output.
:::

## Feedback for a defensible transfer

**Purpose and output.** Model M was built to predict one chamber-average value at ten minutes under continuous mixing in a 20 L chamber. If the new question is still only the average of representative measurements, its output may remain useful. If the question concerns the concentration in a particular zone, a one-value model omits the required spatial pattern.

**Assumptions, scale, and domain.** Perfect mixing, continuous fan operation, small volume, central sensing, and the ten-minute time point define important parts of the original use. Chamber volume increased by a factor of 100, the fan regime changed, and several positions are now observed. Matching variable names do not erase those differences.

**Evidence.** The mean of the three records corroborates the predicted average for this one trial. The spread from 6 to 14 contradicts the prediction that the value is the same everywhere. One successful aggregate can hide a failed distribution.

**Next test.** Repeat measurements across position and time under both continuous and cycling fan conditions. That comparison tests whether the fan assumption drives the spatial difference. Varying fan state is a sensitivity test; using several positions and times also tests whether the model's one-value structure can answer the new question.

**Decision.** For a bounded average-only question, the team could provisionally restrict Model M to estimating an explicitly defined average and seek independent repetitions. For zone-specific decisions, parameter recalibration cannot create spatial structure that the model lacks. Revise or replace the structure with one that represents zones, then test it with observations not used merely to set its parameters.

## Why this is transfer

The worked example asked whether a thermodynamic approximation fit a gas state. This case asks whether a well-mixed representation survives a change in size, operation, measurement, and desired output. You had to select the same reasoning procedure without being cued by the same formula.

## Equivalent nonvisual route

The table's learning operation is fully stated in sentences: the lower, centre, and upper records are 14, 10, and 6; their mean is 10; and position changes the recorded value. No conclusion depends on seeing rows spatially or comparing colors.

:::{source-note}
:claims: claim-model-domain-scale, claim-sensitivity-analysis, claim-bounded-evidence
:sources: source-epa-model-guidance

The source supports renewed evaluation after a context or scale transfer, sensitivity testing, and corroboration bounded to purpose. Model M, the chambers, records, questions, and feedback are original fictional teaching material and contain no experimental or personal data.
:::
