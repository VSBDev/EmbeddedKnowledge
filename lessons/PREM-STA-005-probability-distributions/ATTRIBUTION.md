# Attribution — PREM-STA-005, Probability distributions

## Accountable author

VSBDev (`github:VSBDev`) is accountable for this lesson pack. Authorship used material agent
assistance, disclosed in `lesson.json` under `aiAssistance`. The agent system, provider, model and
version fields carry the literal placeholder `RUNTIME-STAMPED` and are stamped by the operator at
submission; the run identifier and the instructions digest are recorded as emitted by the run.

The instructions digest covers the exact discloseable UTF-8 lesson-authoring task payload supplied
to this run, including its terminal newline. It does not cover hidden provider or system
instructions, which cannot be exported.

## Licence

Lesson content is released under CC BY 4.0, as recorded in `lesson.json`.

## Sources and how they were used

Every source below was retrieved and read directly during authorship. Agent-access terms were
checked before substantive access in each case, and the check is recorded per source in
`references.json` under `agentAccess`. No source is cited from a search result, a summary, or a
record that could not be opened.

| Source | Used for |
| --- | --- |
| NIST/SEMATECH e-Handbook 1.3.6.6.1, Normal Distribution | The normal density, the mean as location parameter and the standard deviation as scale parameter, the standard normal case, and the distribution's standing in statistics |
| NIST/SEMATECH e-Handbook 6.5.1, What do we mean by "Normal" data? | The statistical meaning of calling data normal, the standardising transformation z = (x − μ)/σ, and the 68.27 / 95.45 / 99.73 per cent population figures |
| NIST/SEMATECH e-Handbook 1.3.3.21, Normal Probability Plot | Approximate normality as something a technique assesses, and departures from the reference line as departures from normality |
| NIST/SEMATECH e-Handbook 1.3.6.6.18, Binomial Distribution | Two mutually exclusive outcomes, fixed p across trials, the probability mass function, and the mean np with standard deviation √(np(1 − p)) |
| Encyclopedia of Mathematics, Binomial distribution | Independence of the underlying trials as a condition of the model, corroborating the expectation and variance |
| Vistisen D, Colagiuri S, Borch-Johnsen K; DETECT-2 Collaboration. Diabetes Care 2009;32(3):397–403 | Fasting and 2-hour plasma glucose distributions being skewed to the right, the log transformation applied before model fitting, the scale of the pooled surveys, and the finding that bimodality is not generally useful for deriving diabetes cut points |
| NIDDK, Diabetes Tests & Diagnosis | Fasting plasma glucose reference values, the definition of fasting, and confirmation by a second test |
| International Hypoglycaemia Study Group. Diabetologia 2017;60(1):3–6 | The glucose alert value of 3.9 mmol/l (70 mg/dl) and the paired reporting of thresholds in both units, which fixes the conversion factor used in the z-score demonstration |

The three NIST handbook sections are US Government work; NIST states that information on its sites
is public information that may be distributed or copied, and requests appropriate credit. The
Encyclopedia of Mathematics entry is available under CC BY-SA 3.0 and the GNU Free Documentation
License. The DETECT-2 article is © 2009 American Diabetes Association, and its PMC record states
that readers may use it under CC BY-NC-ND 3.0 for non-profit educational purposes with proper
citation. The International Hypoglycaemia Study Group statement is © the Author(s) 2016 under CC BY
4.0. NIDDK content is a public service of the National Institutes of Health.

Every use is a factual reference under `facts-only-original-expression`. No table, figure, dataset,
question, example or wording from any source is reproduced or closely paraphrased. Each source's
`rightsBasisEvidence` in `references.json` names the specific facts drawn from it.

## Original material

The following are constructed for this lesson and for the Statistics & Data block, and are not
observations of any real person, service, or dataset:

- the 60-person dinner-timing cohort and its stipulated counts and summaries, including the mean of
  142 mg/dL and standard deviation of 18 mg/dL carried forward from earlier lessons in the block;
  the underlying 60 readings are not included in this pack, so those summaries are teaching inputs
  rather than independently reproducible evidence;
- the 1000-person workplace screening dataset in `charts/screening-glucose-right-skew.chart.json`,
  whose mean of 104.2 mg/dL, standard deviation of 17.4 mg/dL and median of about 101 mg/dL were
  computed here from the bin midpoints shown in the chart's own data table;
- the second and third clinics and the acute medical unit in the practice scene, the renal clinic
  and biochemistry service in the assessment, and the diabetes service in the clinical wrap-up;
- every z-score, band boundary, predicted count, binomial probability, expected count and standard
  deviation stated anywhere in the pack, each computed during authorship from the stated parameters.

Both charts are declarative JSON under `charts/`, authored here, carrying `alt` and
`longDescription` and rendering to a data table so that no quantity appears only in a picture.

## Boundary

Every clinical scenario in this pack is labelled a teaching example and not medical advice. The pack
gives no diagnostic, screening, or treatment recommendation. Published reference values are quoted
only where the reasoning needs a real threshold to work against, and are attributed at the point of
use.

## Status

`status: draft`, `sourceConfidence: pending-review`, and every claim in `claims.json` at
`reviewStatus: pending-review`. No review or adjudication artefact was produced by this run, and
none should be inferred from it.
