# Audit one measure without letting a tidy number decide for you

The following laboratory is fictional. The task uses no participant records and makes no claim about diagnosis, treatment, or safe scheduling. It asks whether a proposed measurement can support a bounded research interpretation.

:::{worked-example}
:id: worked-example-alertness-audit
:label: A response timer that agrees with itself

**1. State the task.**

A research team wants to compare acute alertness under two simulated scheduling conditions. It proposes this operational definition:

> Acute alertness is the median response time, in milliseconds, across 20 valid trials of a simple computer response task, after 5 practice trials, using the same device and scripted instructions.

Before using the task, the team sends five 200.0 ms reference intervals into the timer. The reference generator has a current calibration record, and its uncertainty is small relative to the timer's 1 ms display.

| Reference interval | Timer result |
| ---: | ---: |
| 200.0 ms | 211 ms |
| 200.0 ms | 212 ms |
| 200.0 ms | 212 ms |
| 200.0 ms | 213 ms |
| 200.0 ms | 212 ms |

The team must decide what the table establishes, what needs correction, and whether the task is ready to stand for acute alertness.

**2. Represent the givens, constraints, and unknowns.**

- Target construct: acute alertness in the stated simulated context.
- Operation: median response time from a specified 20-trial task after practice.
- Reference check: five identical assigned intervals under the same procedure, device, location, and short time period.
- Unknowns: the error pattern, the condition-specific precision, and the evidence supporting the alertness interpretation.

The reference check evaluates the timer. It does not evaluate whether people stayed unchanged, because no people produced these five intervals.

**3. Choose the audit plan.**

Apply the four questions in order: inspect the operation; examine agreement among repeats; compare the repeats with the reference; then ask what evidence connects response time to the intended construct and use.

**4. Execute the repeatability and error check.**

The five displayed results have a mean of 212 ms and a range of 2 ms. Their tight grouping is evidence of good repeatability for this timer under the checked conditions. It does not establish reproducibility across other devices, operators, laboratories, software versions, or days because none of those conditions changed.

Every result is also 11–13 ms above the 200.0 ms reference. The simplest model for these data includes an approximately +12 ms systematic component plus a smaller varying component. Calling all 12 ms “random error” would ignore the shared direction of the discrepancy.

**5. Decide what repetition can and cannot repair.**

More repeats could describe the short-term scatter more precisely. Averaging the five existing results gives 212 ms, so averaging has not removed the approximate +12 ms offset. The team needs to investigate the timing system and, if the calibration relation and conditions justify it, apply and document a correction or repair the system. It should then check the measurement process again.

**6. Audit the intended meaning.**

The operational definition is explicit enough to reproduce. That is a strength, but “median response time on this task” and “acute alertness” are not identical ideas. Response time may represent one relevant performance feature while also depending on motor response, perception of the stimulus, task familiarity, hardware, and instructions.

A stronger validity argument would begin with predictions made before looking at results. For example, the team could ask whether the task samples the relevant aspects of its alertness construct, whether participants use the intended response process, whether scores relate as predicted to another defensible alertness measure, whether they relate less strongly to a measure of an irrelevant construct, and whether those patterns hold in the population and setting in which the interpretation will be used.

**7. Check the conclusion against the task.**

A defensible conclusion is:

> The timer produced tightly grouped results under one set of repeatability conditions, but its raw indications showed an approximately +12 ms offset from the stated reference. The response-time operation is explicit, yet the information supplied does not by itself justify interpreting the result as a complete measure of acute alertness.

This conclusion separates three judgments that the tidy table could otherwise blur: precision under stated conditions, agreement with a reference, and validity of the construct interpretation.

**8. Explain the decisive choice.**

Why would five corrected readings near 200 ms still fail to prove construct validity for acute alertness?
:::

A correction could improve the timer's relation to the duration reference. It would not show that response time covers the intended alertness construct or rules out construct-irrelevant influences. That requires a different body of evidence.

## Plausibility check in words

Read the result without the table: all five readings are close to one another, and all five are high relative to the reference. “Close together” supports repeatability; “high together” signals a systematic component. Neither phrase establishes what the participant score means.

:::{source-note}
:claims: claim-operational-definition, claim-error-components, claim-averaging-boundary, claim-repeatability-reproducibility, claim-calibration-traceability, claim-validity-interpretation, claim-construct-evidence, claim-consistency-not-sufficient
:sources: source-nist-operational-definition, source-jcgm-vim, source-nist-tn1297, source-testing-standards

The sources support the audit distinctions and limits applied here. The response task, reference data, calculations, validity questions, and conclusion are original fictional teaching material; they are not empirical results about people.
:::
