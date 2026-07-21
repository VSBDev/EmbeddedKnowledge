# Follow a seedling claim through four checks

The following study, numbers, laboratories, and results are fictional teaching material. They are not evidence about a real supplement.

:::{worked-example}
:id: worked-example-seedling-trail
:label: One claim, four different checks

**1. State the claim to be checked.**

A campus lab asks whether adding supplement S to a standard growth medium increases day-14 height in one bean cultivar under specified greenhouse conditions.

The claim is deliberately bounded. It does not say that S improves every plant, every measure of growth, or every growing condition.

**2. Record the before-results decisions.**

Before outcomes are visible, the team registers:

- the primary outcome: day-14 height in centimetres;
- the standard and supplemented conditions;
- the cultivar, growth period, and greenhouse settings;
- the sample-size and stopping rule;
- the rule for excluding a damaged measurement;
- the main comparison and planned way to handle missing day-14 measurements.

This plan does not make those choices correct. It makes their timing inspectable. If a sensor failure later requires a different rule, the team can explain the deviation and label the revised analysis.

**3. Leave an inspectable trail.**

The team deposits the protocol, supplier and batch information, allocation procedure, measurement instructions, variable definitions, raw observations, analysis script, and software environment. A second analyst can now trace how each recorded height became the reported estimate.

The planned analysis reports a mean difference of **+1.8 cm** for S compared with the standard medium. A second analyst uses the same files and obtains +1.8 cm. That is a successful computational re-run. It has not produced replication evidence because no new seedlings were measured.

**4. Test plausible assumptions without changing the question.**

Four day-14 heights are missing. The preregistered analysis handles them under one stated assumption. The team also uses two other defensible missing-data assumptions aimed at the same day-14 comparison.

| Analysis of the same fictional study | Estimated difference for S |
| --- | ---: |
| Preregistered handling of missing heights | +1.8 cm |
| Plausible alternative A | +0.9 cm |
| Plausible alternative B | +0.2 cm |

The result is computationally reproducible, yet the size of the estimated difference depends on how the missing measurements are handled. The honest report shows that range and names the assumptions. It does not display only +1.8 cm or call the conclusion robust without qualification.

**5. Collect new data.**

Another lab follows the disclosed method with new seeds from the stated cultivar and reports **+0.4 cm**. This is a replication because it uses new data to test the bounded claim. The smaller estimate weakens confidence in a large effect under the stated conditions. It does not, by itself, tell us whether the difference arose from sampling variation, a hidden procedural detail, seed batches, greenhouse conditions, or a problem in one of the studies.

**6. Calibrate the conclusion.**

A defensible summary is:

> In this fictional example, the reported estimate can be reproduced from the original files, but it is sensitive to plausible handling of missing observations, and a new-data repeat found a smaller estimate. The evidence does not support a confident claim of a large, condition-independent effect.

Notice what the summary does not say. It does not declare S effective because the first estimate was positive. It does not discard the first result because the repeat was smaller. It reports what each check changed about confidence.
:::

## Why the four checks cannot substitute for one another

Suppose the second analyst finds a mislabeled variable in the open code. That discovery matters even if a new-data replication later agrees. Suppose both analyses of the first data set re-run perfectly, but every plausible missing-data assumption gives a different estimate. The files are reproducible; the conclusion is fragile. Suppose a replication disagrees but the original method omitted the temperature cycle. Openness might reveal why the two tests were not as similar as intended.

Each safeguard produces a different kind of evidence:

- **Preregistration** reveals the planned path and later deviations.
- **Open methods** allow inspection and re-use of the path.
- **Replication** follows a new-data path.
- **Sensitivity analysis** compares plausible analytic paths for the same question.

## Fade one part of the reasoning

For each event, name the safeguard and write one sentence about what it changes. Commit before checking the guide.

1. An analyst gets +1.8 cm from the original files.
2. The estimate ranges from +0.2 to +1.8 cm under justified missing-data assumptions.
3. A second lab measures new seedlings and gets +0.4 cm.
4. The original team explains that a sensor failure forced a deviation from its registered exclusion rule.

A complete response says:

1. **Computational reproducibility:** the disclosed inputs and steps regenerate the reported estimate, but this does not test new data.
2. **Sensitivity analysis:** the estimate depends on a plausible assumption, so the uncertainty should appear in the conclusion.
3. **Replication:** the new-data test supplies evidence about whether the bounded claim survives a changed sample and lab.
4. **Preregistration with transparent deviation:** the dated plan shows what changed; the explanation lets a reader judge the change instead of pretending it was planned.

If you swapped events 1 and 3, circle the words *original files* and *new seedlings*. If you treated event 2 as a hunt for the best number, replace “Which answer wins?” with “How dependent is the conclusion on reasonable choices?”

:::{source-note}
:claims: claim-four-safeguards-complementary, claim-preregistration-role, claim-open-methods-role, claim-replication-role, claim-sensitivity-role
:sources: source-reproducibility-consensus, source-replication-perspective, source-cos-preregistration, source-fda-sensitivity

The sources support the four types of check and the calibrated interpretation. All study details, numbers, tables, deviations, and reasoning prompts in this scene are original fictional teaching material; they should not be generalized to real supplements or plant biology. The sensitivity interpretation is limited to the alternatives examined, and replication disagreement can have several explanations.
:::
