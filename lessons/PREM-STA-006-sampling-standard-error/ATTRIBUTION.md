# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-006 — Run the study again: sampling distributions and standard error**
- Graph outcome: `topic-statistics-data-sampling-standard-error` (PREM-04.06, "Sampling distributions and standard error")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `author-PREM-STA-006-382C0370-ACA5-405B-AC6F-21FFBFDD70C1`.

The instructions digest is `sha256:5a938256b353351dc84f84115e3391cd6722bb7a9dd65aa9c7d36452e2929639`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked before substantive access and are recorded per source with the terms route that was checked.

| Source | Used for | Basis |
| --- | --- | --- |
| Altman & Bland, "Standard deviations and standard errors", BMJ 2005;331:903 | The sampling distribution of the mean; the standard error as its standard deviation; the estimated SE as sample SD divided by the square root of sample size; the standard error as a measure of precision; normal-model standard-deviation coverage; the extension of the principle to proportions, regression coefficients, and differences; and the ambiguity of unlabelled plus-or-minus notation | Facts only, original expression |
| NIST/SEMATECH e-Handbook of Statistical Methods, 1.3.6.6.1 Normal Distribution | The bounded central-limit result for independent observations from one finite-variance population: asymptotic normality of the mean's sampling distribution, centring on the population mean, and spread governed by population standard deviation over the square root of sample size | Facts only, original expression |
| Kwak & Kim, "Central limit theorem: the cornerstone of modern statistics", Korean J Anesthesiol 2017;70(2):144-156 | That skew in the population does not prevent sample means from approaching normality under the theorem's conditions, and that population shape and sample size affect the finite-sample approximation; its size-30 discussion is not used as a general threshold | Facts only, original expression |

No source's wording, structure, table, figure, example, question, or dataset is reproduced or adapted. The Kwak & Kim article is published under a Creative Commons Attribution Non-Commercial licence; nothing from it is reused, so that licence's conditions are not relied on and the non-commercial restriction does not attach to any part of this pack. The Altman & Bland article carries no open reuse licence, and it is used for facts only.

### A source that was checked and not used

OpenStax was considered for the central limit theorem. Its `robots.txt`, retrieved on 2026-07-25, carries `User-agent: GPTBot` followed by `Disallow: /books/`, an explicit restriction on automated agent retrieval of the book text. The book pages were therefore not opened and nothing from OpenStax is cited. The two sources used for the theorem place no comparable restriction on the paths they were read from.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- both hypothetical model chart sources under `charts/`, their alt text, and their long descriptions, including the shared horizontal range of 88 to 196 mg/dL that lets the two model curves be compared;
- the thousand-repeat thought experiment, the sample-size price list, and every figure in it;
- the cardiology, renal, pharmacy, maternity-network, and ward-poster cases, and all their numbers;
- the two precision-target audit proposals in the clinical wrap-up and the sample sizes computed for each;
- all scene prose, worked reasoning, checks, assessment items, answer logic, and rubrics.

The cohort's headline figures are fixed by the Statistics and Data block brief so that the twelve lessons in the block describe one consistent study: sixty adults, sample mean fasting glucose 142 mg/dL, sample standard deviation 18 mg/dL, and a later-minus-earlier group difference of 9.0 mg/dL with an estimated standard error of 4.13 mg/dL. Every derived quantity in this pack was recomputed from those figures rather than carried across from another lesson. Central results include the estimated standard error $18/\sqrt{60}=2.324$ mg/dL; the arithmetic band 139.7 to 144.3 mg/dL around the observed mean; the estimated standard error $\sqrt{2}\times2.324=3.29$ mg/dL for the difference between two independent equally sized means; the ratio 7.75 between the modelled individual and mean spreads; 81 patients for a target one-mean estimated standard error of 2.00 mg/dL; 162 per year for a target independent-difference estimated standard error of 2.00 mg/dL; and 324 patients for a target one-mean estimated standard error of 1.00 mg/dL.

## Terminology

The course terminology ledger was read before the glossary was written. Six of the eleven entries declare an `alignment` block:

| Term | Prior lesson | Relation |
| --- | --- | --- |
| population | PREM-SCI-005 (target population) | extend |
| sampling variation | PREM-SCI-008 (random error) | narrow |
| standard deviation | PREM-STA-003 | adopt |
| precision | PREM-SCI-006 (measurement precision) | extend |
| parameter | PREM-SCI-010 (model parameter) | distinct-sense |
| standard error | PREM-SCI-006 (measurement error) | distinct-sense |

The block brief rules that the everyday sense of the word describing a result as noteworthy must not appear anywhere in this block, and it appears nowhere in this pack. The orientation scene names the collision on the word *error* in learner prose, before the term is first used, so that a learner does not read the lesson's central quantity as a report of a mistake.

## Boundaries

The cohort, clinic, audits, maternity network, poster, and every case in this pack are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. The final audit case uses only author-created population-level precision targets and explicitly states that a population mean cannot classify individuals. The lesson carries the *teaching example, not medical advice* boundary in its orientation and clinical wrap-up scenes.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Both charts in this pack are declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
