# Find the role, then find the flaw

Begin without looking back. Write six short questions that recover the six jobs. Put the technical name beside each only after you have described its job in ordinary language.

A useful check is:

> changed; recorded; held alike; changed alongside and able to affect the record; expected baseline; expected known response

If **held alike** and **expected baseline** sound identical, keep going: the first describes a condition maintained across the main groups; the second describes an extra comparison whose expected result helps interpret the system.

## One part supplied

A fictional materials team compares two curing temperatures for the same resin. It records the force needed to break each cured strip. Resin volume, mould shape, curing duration, and testing machine are kept alike. The lower-temperature strips are all made by technician K and the higher-temperature strips by technician M.

Complete the role map before reading the feedback:

| Role | Part of the comparison |
| --- | --- |
| Independent variable | ___ |
| Dependent variable | ___ |
| Two controlled variables | ___ |
| Candidate confounder | ___ |

A defensible map identifies curing temperature as the independent variable, breaking force as the dependent variable, any two of resin volume, mould shape, curing duration, and testing machine as controlled variables, and technician as a candidate confounder. Technician qualifies only if technician differences could affect breaking force; the fixed pairing with temperature creates the ambiguity.

To repair the pairing, have both technicians prepare strips at both temperatures under the same stated conditions. If technician cannot affect the response, it is not a confounder even though it differs. The label follows the relationship, not a memorized list of suspicious factors.

## Less support: a condition is not a group

A fictional seedling comparison gives one group nutrient solution and another group the same volume of water. It records stem-height change over seven days. Both groups use the same seed variety, soil mass, pot size, light schedule, and liquid volume.

Answer before continuing:

1. Which factor is the independent variable?
2. Which record is the dependent variable?
3. Name two controlled variables.
4. Is the water-only group a controlled variable or a control condition? Explain.

The independent variable is liquid treatment: nutrient solution or water. The dependent variable is seven-day stem-height change. Seed variety, soil mass, pot size, light schedule, and liquid volume are controlled variables. The water-only group is a **control condition** because it supplies a comparison level; it is not a condition held at one value across both groups.

Whether that water-only group should be called a negative control depends on the prediction and expected response. If it is expected to lack the nutrient-associated response and provide the baseline, it performs a negative-control role. “Control group” alone does not tell you what every control is designed to reveal.

:::{misconception}
:id: misconception-any-uncontrolled-confounds
:kind: boundary

**Commit first.** A different desk position is chosen at random for every strip in a materials test. Is desk position automatically a confounder because it was not held constant?

**Tempting shortcut:** every uncontrolled variable is a confounder.

**Why the shortcut fails:** a confounder must create a rival explanation for the comparison. It must vary systematically with the independent variable and be able to affect the dependent variable. Random desk positions that occur across both curing temperatures are not automatically confounded with temperature.

**Repair:** ask two questions: “Does this factor track the independent variable?” and “Could it affect the recorded response?” Both must be plausible for the factor to confound this comparison.

**Recheck:** all 20 °C strips are tested on Monday and all 30 °C strips on Friday after the machine was recalibrated. Day or calibration state could affect breaking force and is locked to temperature. That is a candidate confounder.
:::

## Independent mixed practice

For each case, identify the requested roles before reading the feedback.

**Case A: background where there should be none.** A fictional image detector should highlight cracks. A blank, crack-free reference image is the negative control; a reference image with a known crack is the positive control. The blank image is highlighted, and the known-crack image is also highlighted.

Which control failed, and what should happen next?

The negative control failed because the detector produced the tested signal where the baseline was expected. The positive control alone does not rescue the run: investigate the background or false-positive behavior before interpreting unknown images.

**Case B: no response where one should appear.** The same detector leaves both the blank reference and known-crack reference unmarked.

The positive control failed. The blank result is expected for the negative control, but the detector has not shown that it can reveal a crack. Repair the detection path before treating unmarked unknown images as crack-free.

**Case C: build your own audit.** Choose a supplied classroom, engineering, or biological comparison that does not require new data collection. Name the independent and dependent variables, at least two controlled variables, one factor that would become a confounder if paired with the independent variable, and plausible positive- and negative-control conditions. Then explain what a failure of each control would mean.

If you cannot create a meaningful positive control, state what system capability needs checking rather than inventing a condition that does not test it. Different fields use different control forms.

:::{source-note}
:claims: claim-variable-roles, claim-confounder-ambiguity, claim-control-functions, claim-controls-have-limits
:sources: source-nist-handbook, source-ncbi-assay-guidelines

The sources support the manipulated-factor, response, extraneous-variable, and control roles used in these discrimination tasks. They also support holding some influential conditions constant while recognizing the scope limits of that choice. All resin, seedling, and image-detector cases are original fictional examples.
:::
