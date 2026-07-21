# A precise answer from the wrong tool

A sealed vessel contains gas. You enter its amount, temperature, and volume into the ideal-gas equation, and the calculator returns a pressure to three significant figures. The arithmetic is clean.

Now imagine a second vessel at much higher pressure and lower temperature. The same equation still returns a neat number. It does not flash a warning when the gas no longer behaves closely enough like the idealized gas that the equation represents.

The difference is not better algebra. It is whether the model's assumptions and domain fit the case.

A **scientific model** keeps selected features and relationships so that we can describe, explain, or predict something. It leaves other features out. That selectivity makes a model useful, but it also makes every result conditional: useful for *which question*, at *which scale*, and under *which conditions*?

The ideal-gas model will be our first case. It relates pressure $P$, volume $V$, amount of gas $n$, and absolute temperature $T$ through the gas constant $R$:

:::{equation}
:label: equation-ideal-gas-orientation

PV=nRT
:::

Read the equation in words: pressure times volume equals amount of gas times the gas constant times absolute temperature. For many low-pressure or high-temperature gas states it can be a useful approximation. As gas molecules become crowded or their attractive interactions matter more, the idealization can become inadequate. The exact error depends on the gas, the conditions, and how much accuracy the task needs.

By the end of the lesson, you will be able to:

- name the output, inputs, parameters, assumptions, scale, and domain of a model;
- make a prediction and stress-test it by changing an input or assumption; and
- use evidence to decide whether to restrict, recalibrate, revise, or replace the model.

This is a lesson about disciplined model use, not a full treatment of gas chemistry, global sensitivity analysis, machine-learning validation, or clinical decision models.

## Retrieve the prerequisite

:::{check}
:id: check-hypothesis-prediction
:kind: diagnostic

A model proposes that, for a fixed amount of gas in a rigid vessel, pressure rises in direct proportion to absolute temperature. Write one prediction that could test that proposal. State what must be held fixed.
:::

One defensible prediction is: if the absolute temperature rises from 300 K to 330 K while the gas amount and vessel volume remain fixed, then the measured pressure should rise by about 10%. The model supplies the relationship; the prediction states an observable outcome under named conditions.

## Recovery route

:::{callout}
:id: recovery-hypothesis-prediction
:kind: recovery

If your answer only repeated the proposed relationship, pause here. A **hypothesis** proposes an explanation or relationship. A **prediction** says what record should appear if that proposal holds under stated conditions. Try again with this frame: “If ___ changes while ___ stays fixed, then I expect to observe ___.” Continue when your sentence names both a change and an observable result.
:::

## Accessibility and alternatives

All essential relationships are in the reading order. Equations are also stated in words. The lesson's diagram includes a complete long description, and every table can be read row by row without color, position, dragging, sound, motion, hover, or time limits. Practice uses supplied fictional records; no physical experiment, personal data, or sensory judgment is required.

:::{source-note}
:claims: claim-model-purpose, claim-model-domain-scale, claim-ideal-gas-relation, claim-ideal-gas-limits
:sources: source-epa-model-guidance, source-nasa-equation-state, source-nasa-real-gas-limits

The sources support the purpose-bound definition of a model, the ideal-gas relation, and its qualitative domain limits. The two-vessel opening, diagnostic, wording, and instructional sequence are original. No universal numerical cutoff for ideal behavior is asserted.
:::
