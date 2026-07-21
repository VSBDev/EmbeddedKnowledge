# Four questions connect a concept to a defensible claim

A measurement begins before a device displays a number or an observer checks a box. It begins when researchers decide what they want the record to stand for.

The chain is:

> target quantity or construct → operational definition → recorded result → intended interpretation and use

Each arrow can fail. A vague operation can produce records that nobody can repeat. A noisy procedure can hide differences. A stable offset can move every reading. A perfectly consistent procedure can still represent only a narrow or irrelevant part of the intended construct.

:::{diagram} ../diagrams/measurement-audit.diagram.json
:alt: Four connected audit questions move from the target, through the operation and error checks, to the intended interpretation.
:longdesc: The concept map starts with “Target: what is meant?” and points to “Operation: what produces the record?” The operation points to two linked checks: “Consistency and error: what changes within or across stated conditions, and what comparison to a reference shows?” and “Meaning: what interpretation and use are proposed?” The final relation says that a defensible measurement claim needs evidence across the chain; success at one check cannot substitute for the others.
:label: diagram-measurement-audit

Use the diagram as an ordered checklist. Its layout adds no extra step beyond the text sequence below.
:::

## 1. Name the target, then make the operation inspectable

A **quantity** can be expressed with a number and a reference, such as a duration in milliseconds. A **construct** is an idea used to organize related observations, such as alertness, belonging, or coordination. A construct is not read directly from nature; researchers choose observable indicators that they expect to represent it.

An **operational definition** states the procedure or rule that turns the target into a record. “Measure alertness” is not operational. “Record the median response time, in milliseconds, across 20 valid trials of a specified computer task after 5 practice trials” is operational because another team can inspect and repeat the operation.

Precision of wording does not prove precision of results, and neither proves construct validity. The operation may be reproducible yet omit important parts of alertness or respond to something else.

## 2. Look for scatter and shift

When a suitable reference value exists, a simple reasoning model is:

:::{equation}
:label: equation-error-model

x_{\mathrm{observed}} = x_{\mathrm{reference}} + b + \varepsilon
:::

Read this as: the observed value equals the reference value, plus a component $b$ that stays constant or changes predictably, plus a component $\varepsilon$ that varies unpredictably across repeated measurements. The model is a teaching aid for a bounded case with a reference; it is not a complete uncertainty analysis, and the components are not known perfectly in ordinary work.

- **Random measurement error** is the component that varies unpredictably across replicate measurements. It appears as scatter under stated conditions.
- **Systematic measurement error** is the component that remains constant or varies predictably across replicates. It appears as a shift or pattern when results are compared with an appropriate reference or method.

Repeating a measurement helps estimate its dispersion. Averaging can reduce the influence of a random component only when the relevant observations behave independently enough and the component is centered around zero for the intended conditions. Averaging a stable offset leaves the offset in place.

## 3. State what was allowed to vary

**Repeatability** is measurement precision under repeatability conditions: the procedure, operator, measuring system, location, and a short time interval are kept the same as specified. It asks how tightly results agree when conditions change as little as the protocol permits.

**Reproducibility** is measurement precision under reproducibility conditions, where relevant conditions change. A useful report names those changes—for example, different operators and laboratories using the same written procedure. “The measure is reproducible” is incomplete if nobody says across which changes.

Both ideas describe precision. Neither, by itself, shows closeness to a reference or that the intended construct was captured. For ratings, the changed condition may be the rater; agreement across independent raters then addresses one specific source of inconsistency.

Other fields often use **reliability** for score consistency across a stated domain of replications, such as occasions, raters, or item samples. A reliability statement is incomplete unless that domain is clear: a score can be consistent across raters yet unstable across days. This lesson uses repeatability and reproducibility when discussing measurement precision so that the conditions stay visible.

## 4. Connect the result to a reference and to its intended meaning

**Calibration** establishes a relation between indications and values supplied by standards under specified conditions, including their uncertainties, and then uses that relation to obtain a measurement result. Calibration may support a correction; it is not the same act as adjusting the instrument.

**Metrological traceability** is a property of a measurement result: the result can be related to a stated reference through a documented, unbroken calibration chain, with each link contributing to uncertainty. Traceability does not guarantee that uncertainty is small enough for a purpose or that no mistakes occurred.

For a construct, there may be no single reference value. **Construct validity** is therefore evaluated through an argument: do evidence and theory support the proposed interpretation of the results for the stated use? Useful evidence can ask whether the measure covers the intended construct, whether irrelevant features contaminate it, whether the response process makes sense, and whether relationships with other variables match prior predictions.

Relations with measures of the same or a closely related construct can provide **convergent evidence**. Weaker relations with measures of different constructs can provide **discriminant evidence**. Those patterns are sources of evidence, not automatic certificates. Population, language, setting, procedure, and use can change the meaning of a result, so validity belongs to an interpretation in context rather than to an instrument forever.

| Audit question | Evidence it can supply | What it cannot establish alone |
| --- | --- | --- |
| Is the operation explicit? | Inspectability and repeatable implementation | Low error or valid meaning |
| Do replicates agree under stated conditions? | Repeatability or reproducibility precision | Closeness to a reference |
| Do results agree with a defensible reference? | Evidence about shift, calibration, or accuracy | Representation of a broad construct |
| Do predicted content, processes, and relationships hold? | Construct-validity evidence for an interpretation and use | Universal validity in every population or setting |

:::{source-note}
:claims: claim-operational-definition, claim-error-components, claim-averaging-boundary, claim-repeatability-reproducibility, claim-calibration-traceability, claim-validity-interpretation, claim-construct-evidence, claim-consistency-not-sufficient
:sources: source-nist-operational-definition, source-jcgm-vim, source-nist-tn1297, source-testing-standards

NIST and JCGM support the operational, error, precision, calibration, and traceability distinctions. The Testing Standards support validity as evidence for a proposed interpretation and use, the need to state replication conditions, and convergent, discriminant, population, and setting evidence. The four-question chain, equation framing, examples, and table are original synthesis.
:::
