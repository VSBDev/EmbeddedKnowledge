# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-007 — Nine milligrams, give or take: confidence intervals**
- Graph outcome: `topic-statistics-data-confidence-intervals` (PREM-04.07, "Confidence intervals")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `author-PREM-STA-007-C23AC166-284D-4DFE-BB93-F6B3B307EB33`.

The instructions digest is `sha256:5e503b01adbb2327caae3d05876924d57a93e00f58b0a66f0b233ff10580fba4`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked before substantive access in every case and are recorded per source with the checked route's terms URL.

| Source | Used for | Basis |
| --- | --- | --- |
| NIST/SEMATECH e-Handbook, 1.3.5.2 Confidence Limits for the Mean | The interval-estimate form; the statement that a 95% interval is not a 95% probability that the interval holds the true mean; the dependence of width on sample size and standard deviation | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 7.1.4 What are confidence intervals? | The interval as a range likely to contain the parameter; the repeated-sampling reading of the level; two-sided versus one-sided | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 1.3.6.7.1 Cumulative Distribution Function of the Standard Normal Distribution | The multipliers 1.645, 1.960 and 2.576 at the 90%, 95% and 99% levels | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 1.3.6.7.2 Critical Values of the Student's t Distribution | The value 2.002 at 58 degrees of freedom, used only to size the approximation this lesson accepts by working with 1.96 | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 7.3.1 Do two processes have the same mean? | The pooled two-sample standard error and its degrees of freedom | Facts only, original expression |
| FDA, Guidance for Industry: E9 Statistical Principles for Clinical Trials | Reporting effect estimates with confidence intervals; two-sided intervals for the size of a difference; equivalence margins that the whole interval must fall within; the preference for intervals where estimates are imprecise; the glossary definition of frequentist methods | Facts only, original expression |
| NIDDK, Diabetes Tests & Diagnosis | Fasting plasma glucose reference values, the use of a second test to confirm, and the definition of fasting | Facts only, original expression |

No source's wording, structure, table, figure, example, question, or dataset is reproduced or adapted. Where the lesson repeats a source's position closely enough for a reader to check it, the passage is a statement of fact, is attributed in the surrounding source note, and is written in this pack's own words.

## Access and exclusions

No source was excluded from this pack on agent-access grounds: every source recorded above was checked before access and none restricted automated retrieval or agent ingestion.

Two access notes belong on the record. The NIST handbook is served from `itl.nist.gov`, which does not publish a robots file of its own and redirects that path to the NIST ITL landing page; the applicable NIST robots file at `www.nist.gov/robots.txt` was retrieved and places no restriction on the `/div898/` handbook tree. The FDA's HTML landing page for the E9 guidance returned HTTP 404 on the access date, so the PDF in the FDA guidance library is the route recorded in `references.json` and the route the text was read from. That PDF's cover states September 1998; a later addendum, ICH E9(R1), extends the guidance on estimands and sensitivity analysis and leaves the passages relied on here in place. That limitation is recorded in the claim ledger rather than hidden in the prose.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- both chart sources under `charts/`, their alt text, and their long descriptions;
- every worked interval in the pack, including the single-group interval of 140.8 to 152.2 mg/dL, the main interval of 0.9 to 17.1, the level comparison at 90% and 99%, the four-times-larger study at 4.9 to 13.1, and the narrower-population case at 3.9 to 14.1;
- the twenty-city thought experiment and the four candidate sentences the misconception scene sorts;
- the three practice trials, the reverse-engineered 90% interval, the pharmacist-led medicines review and its two blood-pressure outcomes, and the diabetes service's invented 5 mg/dL decision threshold;
- all scene prose, checks, assessment items, answer logic, and rubrics.

The cohort's headline figures are fixed by the Statistics and Data block brief so that the twelve lessons in the block describe one consistent study: sixty adults with type 2 diabetes, thirty in each dinner-timing group, a within-group standard deviation of 16 mg/dL, an observed difference of 9.0 mg/dL, and a standard error of 4.13 for that difference. Every interval in this pack was recomputed from those figures rather than copied, and the resulting 95% interval of 0.9 to 17.1 mg/dL is the one the block's later lessons rely on.

## Boundaries

The cohort, the diabetes service, the Monday decision, the three practice trials, and the blood-pressure trial are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. The 5 mg/dL and 6 mg/dL thresholds used to show how an interval is read against a clinical value were chosen for the example and are labelled as invented wherever they appear. Clinical reference values appear only so that an interval measured in mg/dL has a real scale to be laid against, and they are attributed to the body that publishes them. The lesson carries the *teaching example, not medical advice* boundary in its orientation, practice, transfer, and clinical wrap-up scenes.

The lesson deliberately stops short of two neighbouring outcomes. It does not test a hypothesis or interpret a p-value, which the next lesson owns, and it does not judge whether a 9 mg/dL difference matters to a patient, which the block's final lesson owns.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Both charts in this pack are declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
