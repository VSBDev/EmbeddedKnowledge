# Make the model show where it breaks

The next tasks fade support. Answer each prompt before reading its feedback.

## Retrieve the domain, not just the equation

:::{check}
:id: check-ideal-gas-domain
:kind: retrieval

Without looking back, write the ideal-gas relation, name its four represented gas quantities, and state one condition change that should trigger a real-gas check.
:::

A complete response gives $PV=nRT$; identifies pressure, volume, amount, and absolute temperature; and names a move such as substantially higher pressure or lower temperature. If you recalled only the formula, add the boundary before continuing. Model knowledge includes conditions of use.

## Repair a tempting conclusion

:::{misconception}
:id: misconception-fit-means-true
:label: “It fits, so the mechanism must be true”

Two models predict the same output at three observed input values. Model A is $y=2x$. Model B is $y=2x+0.2(x-1)(x-2)(x-3)$. At $x=1$, $2$, and $3$, the extra term in Model B is zero, so both models match the same three observations.

Commit to a prediction before calculating: will the models also agree at $x=4$?

They do not. Model A gives 8, while Model B gives 9.2. Matching the first three records did not select a unique relation. A discriminating observation at $x=4$, or at another point where the predictions differ, can test the alternatives.

The repair is not “a fit means nothing.” Agreement is evidence within the tested conditions. The stronger conclusion is: *both models remain possible for the existing purpose and data; new evidence is needed where their predictions diverge*.

Recheck the repair: if a fourth observation is 8.1 with measurement uncertainty of plus or minus 0.2, which model is better corroborated near $x=4$, and what remains unproven?
:::

Model A is better corroborated near $x=4$ because 8.1 is close to its prediction of 8 and far from 9.2 at the stated uncertainty. That result still does not prove Model A is uniquely true at every input or that its mechanism is correct.

## Completion problem: inside and outside a fitted range

A fictional feeder-count model is $N(t)=120-8t$, where $N$ is the predicted number of tagged beads remaining and $t$ is hours. It was calibrated with observations from 0 through 10 hours.

1. Predict $N(6)$ and classify the use as inside or outside the calibrated time range.
2. Predict $N(20)$ and identify two warnings.
3. Choose a next action for the 20-hour use: accept, restrict, recalibrate, revise, or replace.

At 6 hours, the model predicts 72 beads, an interpolation inside the fitted interval. At 20 hours it predicts -40 beads. The time is outside the calibrated interval, and a negative count cannot represent the physical output. The structure is failing, not merely the parameter value. Restrict the linear model to its supported interval and test a revised model that cannot produce an impossible count before using it at later times.

If you only wrote “extrapolation is bad,” make the diagnosis more precise: the fitted slope was carried beyond its evidence, the output violated a boundary of the represented quantity, and the response follows from those two observations.

## Supported problem: separate calibration from a test

A fictional sensor model has one adjustable parameter. A team chooses that parameter using records 1 through 20. It then reports that the model matches records 1 through 20 closely and calls this an independent test.

- What did the team actually show?
- What additional comparison would better test performance?
- If the model is highly sensitive to small changes in the fitted parameter, what should the report say?

The team showed calibration fit on the same records used to choose the parameter. A better test uses relevant observations not used for that choice, while keeping the intended domain visible. High sensitivity means the output is fragile to that parameter near the tested value; the report should show the range of outputs and avoid presenting one fitted value as stable.

## Independent model audit

A fictional relation predicts response $y=3.0+0.50x$. It was fitted for $x$ values from 2 through 8 under one instrument and one preparation method. A new laboratory proposes using it at $x=7$ with a different instrument and at $x=14$ with the original instrument.

Write two short audits. For each proposed use, identify the domain question, one failure test, and the conclusion you could defend before new data arrive.

Useful feedback:

- At $x=7$, the numerical range is familiar but the instrument context changed. Compare the instruments on shared samples before assuming transfer.
- At $x=14$, the instrument matches but the input is outside the fitted range. Gather observations where the extrapolated models or plausible alternatives differ.
- Neither proposal is settled by saying only “inside” or “outside.” Domain has several dimensions.

On a retry, change both the instrument and the range and decide which check must happen before interpreting the output.

:::{source-note}
:claims: claim-model-domain-scale, claim-sensitivity-analysis, claim-ideal-gas-relation, claim-ideal-gas-limits, claim-bounded-evidence
:sources: source-epa-model-guidance, source-nasa-equation-state, source-nasa-real-gas-limits

The sources support the ideal-gas boundary, purpose-bound model domain, calibration-versus-comparison distinction, sensitivity limits, and testing of competing representations. All functions, records, instruments, values, and feedback in this scene are original fictional teaching material.
:::
