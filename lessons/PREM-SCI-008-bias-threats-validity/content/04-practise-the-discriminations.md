# Practise the discriminations, then remove the hints

The goal is not to collect six definitions. It is to reconstruct what became observable and explain why that path could change the target result.

:::{check}
:id: check-rebuild-pipeline

Without looking back, write the four broad checkpoints in order. Under each checkpoint, place the bias labels that can arise there. Then compare your reconstruction with the feedback below.
:::

### Retrieval feedback

One useful reconstruction is:

1. **Entry or inclusion:** selection bias; survivorship bias when earlier persistence or survival determines availability.
2. **Measurement or classification:** information bias; observer bias when assessor knowledge or predisposition changes a judgment.
3. **Retention or analysis:** attrition bias; selection or survivorship can also describe the mechanism if analysis conditions on remaining observable.
4. **Dissemination:** selective outcome reporting within a study; publication bias when whole-study visibility depends on results.

If you placed one label in two stages, that may be defensible. Explain the filter and its timing rather than forcing the categories to be mutually exclusive.

## Completion problem: the missing machines

A company estimates the ten-year failure rate of a machine model by inspecting only units that are still in service. Maintenance files for scrapped units were discarded.

Complete the five-part statement:

- Target: all units placed in service over the ten-year window.
- Stage: ______.
- Mechanism: units become observable only if ______.
- Consequence: the estimated failure rate will probably be too ______ if failed units were especially likely to be scrapped.
- Check: obtain ______.

### Completion feedback

The stage is availability before analysis; the mechanism is survival in service; the likely consequence in the stated case is an underestimated failure rate; and a matching check is to obtain purchase, failure, and disposal records for the original inception cohort. **Survivorship bias** is the most specific label. The direction is supported here only because the case tells you failed units were especially likely to be removed.

## Supported problem: equal loss, different risk

Two randomized groups each have 20% missing day-60 outcomes.

- In Group A, a barcode failure occurred before any day-60 measurement and was spread across baseline response levels.
- In Group B, units with the lowest day-30 response were much more likely to be missing at day 60.

Which group gives the stronger attrition concern, and what else would you request?

### Supported feedback

Group B gives the stronger mechanism: missingness is related to an earlier predictor of the later outcome. Equal percentages did not make the risks equal. Request missingness by assigned group, reasons and timing, baseline and intermediate values for retained and missing units, the prespecified handling of missing outcomes, and sensitivity analyses under plausible missing values. Group A still needs verification; “barcode failure” is not automatically harmless.

## Independent mixed set

For each case, name the most specific requested bias, then write one mechanism sentence. Do not infer direction unless the case supports it.

A. A case-control study draws cases from a regional registry but draws controls only from a fitness club whose membership is related to the exposure being studied.

B. A temperature sensor reads 2 °C too low only in the high-humidity comparison chamber.

C. A scorer who knows which culture received treatment calls borderline images “growth” more often in that group.

D. After enrollment, low early responders are more likely to stop returning measurements, and the analysis keeps completers only.

E. A registry lists 14 completed studies, but studies with null results are much less likely to have an accessible report.

F. A durability analysis samples only device models still sold; discontinued models and their failure records are absent.

### Independent feedback

- **A—selection bias:** the control-entry rule is tied to exposure and does not represent the source that produced the cases.
- **B—information bias:** measurement error differs by comparison condition.
- **C—observer bias:** group knowledge changes a subjective classification; this is also information bias.
- **D—attrition bias:** post-entry outcome availability depends on earlier response, and complete-case analysis selects those retained.
- **E—publication bias:** whole-study accessibility depends on the result.
- **F—survivorship bias:** current availability conditions the sample on persistence in the market; this is also selection bias.

Notice that C and F legitimately have a broader and a narrower label. A good audit preserves that relationship instead of pretending every category is separate.

:::{source-note}
:claims: claim-selection-mechanism, claim-information-misclassification, claim-observer-mechanism, claim-attrition-mechanism, claim-survivorship-filter, claim-publication-versus-reporting
:sources: source-selection-framework, source-information-bias, source-misclassification-direction, source-bias-taxonomy, source-observer-systematic-review, source-attrition-reporting, source-selection-toolkit, source-publication-bias, source-outcome-reporting

The cases are original. The sources support the mechanisms used in the feedback: source-population selection, differential measurement, assessor-knowledge effects, outcome-related loss, differential survival or persistence, and result-dependent whole-study visibility.
:::
