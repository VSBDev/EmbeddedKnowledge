# Transfer the audit to a larger chamber

This task removes the familiar gas equation. The model, scale, and evidence are different; the audit stays useful.

## The fictional case

A research team built Model M in 20 L test chambers. Model M treats each chamber as perfectly mixed and predicts one chamber-wide tracer concentration ten minutes after a release. Under that assumption, the predicted value is both the value everywhere and the chamber-volume average. During development, a fan ran continuously and one sensor sat at the chamber centre.

The team now wants to use Model M in a 2,000 L chamber whose fan cycles on and off. At ten minutes, Model M predicts 10 concentration units everywhere. Three supplied sensor records are:

| Sensor position | Recorded concentration units |
| --- | ---: |
| lower zone | 14 |
| centre zone | 10 |
| upper zone | 6 |

The arithmetic mean of the three point-sensor records is 10, exactly the model output. That calculation describes only the three sampled locations. No sampling geometry, represented zone volumes, or spatial weights have been supplied to show that the three points estimate the chamber-volume average.

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

**Purpose and output.** Model M was built to predict one chamber-wide value at ten minutes under continuous mixing in a 20 L chamber. If the new question is the chamber-volume average, comparison evidence must estimate that same quantity. If the question concerns the concentration in a particular zone, a one-value model omits the required spatial pattern.

**Assumptions, scale, and domain.** Perfect mixing, continuous fan operation, small volume, central sensing, and the ten-minute time point define important parts of the original use. Chamber volume increased by a factor of 100, the fan regime changed, and several positions are now observed. Matching variable names do not erase those differences.

**Evidence.** The unweighted point-sensor mean happens to match the prediction, but that numerical agreement does not yet corroborate the chamber-volume average. It would do so only if the sampling design justified the three readings as representative of equal volumes, or supplied defensible volume weights. The spread from 6 to 14 does contradict the prediction that the value is the same everywhere. A convenient aggregate can hide both a failed spatial distribution and an untested representativeness assumption.

**Next test.** Define the target average and collect measurements across known represented volumes, using equal-volume zones or stated volume weights, then repeat them over time under both continuous and cycling fan conditions. The spatial design tests whether a chamber-volume average can be estimated; the fan comparison tests whether the mixing assumption drives the spatial difference. Varying fan state is a sensitivity test, while measurements across position and time test whether the model's one-value structure can answer the new question.

**Decision.** For a bounded average-only question, do not claim corroboration from the three-point mean. First obtain a representative, volume-aware estimate and independent repetitions; only then could the team consider restricted provisional use for that explicitly defined average. For zone-specific decisions, parameter recalibration cannot create spatial structure that the model lacks. Revise or replace the structure with one that represents zones, then test it with observations not used merely to set its parameters.

## Why this is transfer

The worked example asked whether a thermodynamic approximation fit a gas state. This case asks whether a well-mixed representation survives a change in size, operation, measurement, and desired output. You had to select the same reasoning procedure without being cued by the same formula.

## Equivalent nonvisual route

The table's learning operation is fully stated in sentences: the lower, centre, and upper point records are 14, 10, and 6; their unweighted mean is 10; the readings vary by position; and no equal-volume or weighted sampling basis is supplied. No conclusion depends on seeing rows spatially or comparing colors.

:::{source-note}
:claims: claim-model-domain-scale, claim-sensitivity-analysis, claim-bounded-evidence
:sources: source-epa-model-guidance

The source supports renewed evaluation after a context or scale transfer, representative corroboration evidence, sensitivity testing, and conclusions bounded to purpose. Model M, the chambers, records, questions, and feedback are original fictional teaching material and contain no experimental or personal data.
:::
