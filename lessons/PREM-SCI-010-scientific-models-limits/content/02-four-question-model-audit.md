# Four questions before trusting a model

A model becomes usable when you can finish this sentence:

> If this representation fits this system under these conditions, then it supports this output for this purpose—with these limits.

That sentence has four parts. Ask them in order before you let a calculation, diagram, physical replica, or simulation carry an argument.

:::{definition}
:id: definition-scientific-model
:label: Scientific model

A scientific model is a selective representation of a system or process. It preserves relationships needed for a stated question and omits details that are not represented. A physical replica, a conceptual diagram, a mathematical equation, and a computer simulation can all serve as models, but none is the system itself.
:::

## 1. What is the purpose and output?

Name the question before naming the model. “Model the gas” is too vague. “Estimate the equilibrium pressure of this gas sample” identifies an output and lets you judge whether the model contains the needed relationships.

The **output** is the result you want: perhaps a prediction, estimate, explanation, or classification. A model adequate for one output may omit features needed for another. The ideal-gas equation can estimate a macroscopic pressure without tracing the path of every molecule.

## 2. What goes in, and what has been assumed?

List each input, parameter, starting or boundary condition, and omitted process.

- An **input** is supplied for a particular use or run.
- A **variable** can take different values among states, places, or times.
- A **parameter** is held fixed during one run but can change between runs or model instances.
- An **assumption** treats a relationship or omission as acceptable for the purpose—for example, that a chamber is well mixed or that an interaction is negligible.

These roles must be declared rather than guessed. A measured rate may be an input in one model, a fitted parameter in another, and an output in a third.

**Calibration**, in the sense used here, adjusts or estimates parameter values within defensible ranges so outputs fit relevant observations according to stated criteria. A good fit can improve a model's use; it cannot by itself show that every assumption or proposed mechanism is correct.

## 3. At what scale and in what domain?

**Scale** asks how large, how long, and at what level the model represents the system: seconds or years, a cell or an organ, a small chamber or a landscape, one population or another.

The **model domain** is the set of purposes, conditions, scales, and contexts for which the use has a defensible basis. A fitted relation used inside its tested range is interpolation. Carrying it beyond the supported range or context is extrapolation. Extrapolation is not automatically forbidden, but it adds an assumption that the relationship continues. That assumption needs new evidence.

A change of instrument, environment, population, or physical scale can move the case outside the domain even when every input name stays the same.

## 4. What evidence would reveal failure?

Plan a stress test before accepting the output.

- Compare a prediction with observations that were not used merely to set the parameters.
- Try a boundary case where an assumption should stop holding.
- Change plausible inputs or assumptions and inspect the output.
- Ask whether another model or parameter set could produce the same observed result.

A **sensitivity analysis** changes inputs or assumptions and measures the effect on output. Changing one factor while holding the rest fixed is a useful local check, but it can miss interactions and behavior far from the chosen baseline.

Uncertainty and variability also need different questions. **Uncertainty** concerns what is not known about the inputs, parameters, structure, or application. More information or a better model may reduce some of it. **Variability** describes differences or fluctuations in the represented system; more observations may characterize that variability without making it disappear. The boundary depends on the model: a finer model may explain a pattern that a coarser model treated as unexplained variation.

## The complete route

:::{diagram} ../diagrams/model-use-cycle.diagram.json
:label: diagram-model-use-cycle
:alt: A model-use flow checks purpose, structure, scale and domain before prediction, then uses evidence to interpret, restrict, revise, or replace the model.
:longdesc: First define the question and desired output. Next record inputs, parameters, assumptions, and omissions. Then check spatial, temporal, and organizational scale and the defensible conditions. Use the model only after those checks. Stress-test its result with observations, boundary cases, input changes, and competing explanations. If it is adequate for the stated purpose, interpret only within that domain. If it is not adequate or remains uncertain, restrict the claim, recalibrate parameters, revise the structure, or replace the model, and repeat the audit.

Follow the arrows as a reading sequence. The return arrow matters: a failed test is information for improving or restricting a model, not evidence that modeling itself is pointless.
:::

| Audit question | Record in words | What the record prevents |
| --- | --- | --- |
| Purpose and output | the exact question and result needed | solving a different problem precisely |
| Structure and assumptions | inputs, parameters, conditions, omissions | hiding decisive idealizations |
| Scale and domain | size, duration, context, supported range | silent extrapolation |
| Failure evidence | comparison, boundary, sensitivity, alternative | treating one successful fit as proof |

The diagram shows sequence and revision. The table exposes what each step contributes. Neither replaces the scientific judgment needed to decide how much error is acceptable for a particular use.

:::{source-note}
:claims: claim-model-purpose, claim-model-components, claim-model-domain-scale, claim-sensitivity-analysis, claim-model-uncertainty, claim-bounded-evidence
:sources: source-epa-model-guidance

The EPA guidance supports the model, parameter, calibration, application-domain, uncertainty, variability, sensitivity, and corroboration distinctions used here. The four-question organization, flow diagram, table, examples, and wording are original course material.
:::
