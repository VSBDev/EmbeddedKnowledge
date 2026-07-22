# Audit one comparison from start to finish

The following indicator run, settings, and results are fictional. You do not need laboratory access, chemicals, or personal experience with fluorescence. The task is to determine what the comparison can mean.

:::{worked-example}
:id: worked-example-indicator-audit
:label: A complete six-role audit

**1. State the task.**

A team wants to test this prediction: under the stated indicator conditions, samples set to 8 target units will produce higher fluorescence than samples set to 2 target units. Identify the six variable and control roles, find any ambiguity, and decide whether an unknown zero reading can be interpreted.

**2. Represent the givens.**

| Part of the run | Stated condition |
| --- | --- |
| Test comparison | 2 or 8 target units |
| Recorded outcome | fluorescence units after 10 minutes |
| Shared settings | 1 mL volume, 25 °C, 10 minutes, reader setting R |
| Scheduling | every 2-unit sample uses lot A in the morning; every 8-unit sample uses lot B in the afternoon |
| No-target condition | expected to remain near baseline |
| Known-target condition | expected to fluoresce clearly |

The unknowns are not numerical. We need to determine which job each part performs and whether another factor is locked to the test comparison.

**3. Choose a plan.**

First locate what the team set differently and what it recorded. Next separate held-alike conditions from extra control conditions. Then search for a separate rival factor that moves with the intended change, could influence the response, and is not a step through which the intended change produces that response. Finally, interpret the controls before interpreting the unknown.

**4. Execute the role map.**

- **Independent variable:** target concentration, set to 2 or 8 units.
- **Dependent variable:** fluorescence recorded after 10 minutes.
- **Controlled variables:** sample volume, temperature, incubation time, and reader setting, because the team holds them alike across the concentration comparison.
- **Negative control:** the no-target condition, expected to show the baseline.
- **Positive control:** the known-target condition, expected to show that the system can produce a clear response.

Reagent lot is a **confounder** because lot A appears only with 2 target units and lot B only with 8 target units, lot could influence fluorescence, and lot assignment is a separate scheduling choice rather than a consequence of concentration. Time of day is another candidate confounder for the same three reasons. If the 8-unit samples fluoresce more, the record cannot separate a concentration effect from a lot or time effect.

**5. Repair the comparison.**

Run both target concentrations across both reagent lots and both time periods instead of pairing one concentration with one lot and time. Keep volume, temperature, incubation time, and reader setting alike. This breaks the fixed link between target concentration and the rival factors. It does not promise that every other influence has vanished.

**6. Check the controls before the unknown.**

Imagine this result pattern:

| Condition | Fictional fluorescence result |
| --- | ---: |
| Negative control | 1 |
| Positive control | 1 |
| Unknown | 0 |

The negative control is near baseline, but the positive control also failed to show the known response. Therefore, the run has not demonstrated that it can detect the target. The unknown zero is not evidence that the target is absent; repair and rerun the system before interpreting it.

As a second check, suppose the negative control reads 70 while the positive control reads 74, even though the negative-control acceptance rule required a near-baseline reading. The negative control has failed that stated baseline check, so background signal or another failure is visible. Without a predefined separation threshold and information about measurement variability, the two values alone do not show whether 70 and 74 are distinguishable. Either way, the failed negative control means the unknown would not support the intended conclusion.

**7. Interpret the bounded result.**

If the confounding is repaired, the negative control stays near baseline, the positive control shows the expected response, and the 8-unit samples consistently exceed the 2-unit samples, the record supports a concentration-related difference under these fictional conditions. It does not establish how the indicator works, guarantee the same result in another setting, or eliminate every remaining source of uncertainty.

**8. Explain the decisive decision.**

Before continuing, answer: why must the positive-control result be inspected before treating an unknown zero as “no target”?
:::

A defensible answer is that a zero has two live explanations until the setup demonstrates that it can show the expected response. The positive control tests that capability. If you answered only “because controls are important,” make the two competing explanations explicit.

## A compact audit you can reuse

:::{check}
:id: check-compact-audit
:kind: retrieval

From memory, complete this sequence before opening the feedback:

> changed → recorded → held alike → ___ → expected baseline → expected response
:::

### Feedback after your attempt

The missing step is **separate rival: changed alongside, could affect the record, and not on the intended pathway**—the confounder check. The whole sequence is a practical audit, not a universal recipe for choosing a study design.

:::{source-note}
:claims: claim-variable-roles, claim-confounder-ambiguity, claim-control-functions, claim-controls-have-limits
:sources: source-nist-handbook, source-ncbi-assay-guidelines, source-confounding-observational

The sources support treating manipulated factors and recorded responses as different roles, addressing extraneous factors through design, and using negative and positive controls as comparison and performance checks. The complete indicator case, target units, result values, audit sequence, and repairs are independently created fictional material.
:::
