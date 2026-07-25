# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-011 — A rate, not a gap: regression and how well a line fits**
- Graph outcome: `topic-statistics-data-regression` (PREM-04.11, "Regression and model fit")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `author-PREM-STA-011-6F2C41B8-0D7A-4E39-9C5B-71A3D6E80F24`.

The instructions digest is `sha256:8b774e85c365c78a0aa7ccacc985e261de1b20c6101dbca0e5f50be86873ebd1`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked **before** substantive access and are recorded per source with the checked route's terms URL.

| Source | Used for | Basis |
| --- | --- | --- |
| NIST/SEMATECH e-Handbook, 4.1.2 Terminology for process models | The general form of a statistical model: response, predictors, parameters, function, and an error term, holding on average and not per observation | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 4.1.4.1 Linear Least Squares Regression | The least-squares criterion; the meaning of linearity in the parameters; the poor extrapolation behaviour of linear models; their sensitivity to outliers | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 4.4.4 How can I tell if a model fits my data? | The definition of a residual; graphical residual analysis as the primary test of fit; that a high R-squared does not guarantee a good fit | Facts only, original expression |
| NIST/SEMATECH e-Handbook, 4.4.4.1 Sufficiency of the functional part of the model | Residual plots against the predictor, and systematic structure as an indication that the functional form can be improved | Facts only, original expression |
| Kim, *Statistical notes for clinical researchers: covariance and correlation* (Restor Dent Endod 2018;43(1):e4) | The correlation coefficient as standardised covariance; its range and sign; that it reflects linear strength only and that different relationships can give the same value | Facts only, original expression |
| Kim, *Simple linear regression 1 — basic concepts* (Restor Dent Endod 2018;43(2):e21) | The naming of intercept and slope; the least-squares criterion; the identity slope = r × SD(y) / SD(x) | Facts only, original expression |
| Kim, *Simple linear regression 2 — evaluation of regression line* (Restor Dent Endod 2018;43(3):e34) | The coefficient of determination as the regression sum of squares over the total sum of squares, read as a proportion of total variability | Facts only, original expression |
| Schober & Vetter, *Linear Regression in Medical Research* (Anesth Analg 2021;132(1):108–109) | A coefficient as the average change in the response per one-unit change in its predictor; a multivariable model estimating each contribution while holding the others constant, so controlling for confounding | Facts only, original expression |
| NIDDK, *Diabetes Tests & Diagnosis* | Fasting plasma glucose reference values, the confirmatory second test, and the definition of fasting | Facts only, original expression |

No source's wording, structure, table, figure, example, question, or dataset is reproduced or adapted anywhere in this pack.

### Licence notes on the four journal sources

Three of the journal sources are published under CC BY-NC 4.0 and one under CC BY-NC-ND 4.0. Both licences fall outside the reuse bases `RIGHTS-POLICY.md` permits for this corpus, so **none of their expression, figures, tables, examples, or data is reused, adapted, or redrawn**. They are cited as evidence for the underlying facts only, and every number in this lesson is computed from the block's own dataset. The exact licence as displayed is recorded in `references.json` for each one.

### Sources checked and excluded on agent-access grounds

- **OpenStax** (`https://openstax.org`), whose introductory statistics texts would otherwise be an obvious source for this outcome, was **excluded without being opened**. `https://openstax.org/robots.txt`, retrieved on 2026-07-25, carries an explicit `User-agent: GPTBot` group with `Disallow: /books/`. That is a source-side restriction on automated ingestion of exactly the material a lesson would draw on, so no OpenStax page was fetched, read, summarised, or used in this run, and no OpenStax record appears in `references.json`.
- **Schober, Boer & Schwarte, *Correlation Coefficients: Appropriate Use and Interpretation*** (Anesth Analg 2018) was identified as relevant and **not cited**, because no free full text was reachable at an agent-accessible route. Citing it from a search-result summary would breach the claim discipline, so the correlation facts this lesson needs are sourced to the PubMed Central article that was read directly instead.
- PubMed Central was reached only on the `https://pmc.ncbi.nlm.nih.gov/articles/` route. Its `robots.txt`, retrieved on 2026-07-25, uses a single `User-agent: *` group that explicitly allows `/articles/` ahead of a blanket disallow, names no AI-specific or agent-specific user agent, and sets a one-second crawl delay.
- `https://www.itl.nist.gov/robots.txt` returns HTTP 302 to `https://www.nist.gov/itl/` and serves no robots file, which leaves the handbook path unrestricted under the robots exclusion standard. The parent domain's `robots.txt` was retrieved the same day and restricts only administrative, login, and site-search paths.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- both chart sources under `charts/`, their alt text, and their long descriptions;
- every fitted quantity reported in the lesson, each computed from the block's sixty paired values: slope −3.3689 mg/dL per hour, intercept 153.3699 mg/dL, correlation −0.3199, coefficient of determination 0.1023, total sum of squares 19116, residual sum of squares 17160, and the residual standard deviation of 17.20 mg/dL;
- all sixty residuals, the four-person and five-person residual tables, and every fitted value quoted in the practice and wrap-up scenes;
- the constructed nine-point counter-case whose fitted line reaches r-squared 0.90 with an arched residual pattern, and the constructed six-person shift-work table whose crude slope of +7.8 mg/dL per hour reverses to −3.0 on adjustment;
- the second cohort in the practice scene, the two laboratory reports in the misconception scene, and the invented patient in the clinical wrap-up;
- all scene prose, worked reasoning, checks, glossary entries, assessment items, answer logic, and rubrics.

### Reused from a sibling lesson in this block

The **sixty paired values** plotted in `charts/fitted-line-dinner-glucose.chart.json` are the same sixty pairs first published in PREM-STA-002 (`charts/dinner-gap-glucose-scatter.chart.json`), reproduced without alteration so that the two lessons cannot disagree about the study they both analyse. They are original EmbeddedKnowledge material under the same CC BY 4.0 licence, invented for teaching and not extracted from any external dataset. The residual chart is derived from those same pairs and this lesson's fitted line.

The cohort's headline figures are fixed by the Statistics and Data block brief: sixty adults, mean fasting glucose 142 mg/dL, standard deviation 18 mg/dL, and a later-minus-earlier difference of 9.0 mg/dL. Fitting a line to the sixty pairs reproduces all three exactly, and returns a correlation of −0.3199, which rounds to the −0.32 the block records. The negative sign follows from the axis convention the block fixed: the predictor counts hours *between* dinner and sleep, so a later dinner is a shorter interval.

## Boundaries

The cohort, the patient, the two laboratory reports, the second cohort, and every case in this pack are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. Clinical reference values appear only so that the size of a fitted difference has a real scale to be judged against, and they are attributed to the body that publishes them. The lesson carries the *teaching example, not medical advice* boundary in its orientation scene and again in the clinical wrap-up.

## Format change accompanying this pack

Rendering a fitted line over a scatter of observations required one additive change to the chart contract, made in the same branch: an optional `mark` property on a chart series, taking `point` or `line`, which overrides the chart type's default drawing. Charts that do not set it render exactly as before. The change is recorded in `site/schemas/chart.schema.json`, `scripts/lib/render-chart.mjs`, and the Charts section of `FORMAT.md`.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Both charts in this pack are declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
