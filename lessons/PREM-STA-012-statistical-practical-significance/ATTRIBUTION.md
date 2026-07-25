# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-012 — Does a 9 mg/dL difference matter to a patient?**
- Graph outcome: `topic-statistics-data-statistical-practical-significance` (PREM-04.12, "Statistical versus practical significance")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `claude-author-PREM-STA-012-e6be3ce3-2c6f-498f-9f4d-8b01f9c3a9db`.

The instructions digest is `sha256:d150655bd6b2b08721d6a5a5da18cd0ed50f8e3344f7bce7cb1c621df06a16ea`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked before substantive access and are recorded per source, together with the terms URL for the route actually used.

| Source | Used for | Basis |
| --- | --- | --- |
| American Statistical Association, news release on statistical significance and P-values (2016) | Principle 1, that a p-value indicates how incompatible data are with a specified statistical model; principle 3, that conclusions should not rest only on a threshold being passed; principle 5, that neither a p-value nor statistical significance measures the size of an effect or the importance of a result | Facts only, original expression |
| Greenland and colleagues, "Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations" (2016) | Numbered items 7 and 8, that minor effects reach statistical significance in large studies and large effects can be missed in small ones; the guidance that interpretation requires effect estimates and confidence limits and not merely which side of 0.05 a p-value fell | Facts only, original expression |
| Mishra and colleagues, "Minimal Clinically Important Difference (MCID) in Patient-Reported Outcome Measures for Neurological Conditions" (2023) | The definition of the MCID and its 1989 introduction by Jaeschke and colleagues; anchor-based and distribution-based estimation methods with no gold standard between them; MCID values being dynamic and context-specific and differing across study populations; a statistically significant change not necessarily being one a patient perceives | Facts only, original expression |
| Jeyaraman and colleagues, "Beyond statistical significance: Embracing minimal clinically important difference for better patient care" (2025) | Corroboration only, for the definition and 1980s origin of the MCID, the two families of estimation method and their differing reference points, and the separation of statistical significance from patient-perceived benefit | Facts only, original expression |
| NIDDK, Diabetes Tests & Diagnosis | The fasting plasma glucose diagnostic bands in mg/dL and the practice of confirming a diagnosis with a second test | Facts only, original expression |

No source's wording, structure, table, figure, numbered item, example, question, or dataset is reproduced or adapted. Two sources carry Creative Commons licences that would permit broader reuse, one CC BY 4.0 and one CC BY-NC-SA 4.0, and one carries CC BY-NC 4.0; none of those grants is relied on, because every use here is of facts restated in original expression. No numerical minimal important difference value is carried into this lesson from any source.

### A route excluded on agent-access grounds

The peer-reviewed companion article to the American Statistical Association statement is published at `https://www.tandfonline.com/doi/full/10.1080/00031305.2016.1154108`. That host's robots file carries an explicit record disallowing all paths to the named AI crawler GPTBot, which this project treats as a restriction on agent ingestion. The route was excluded before any substantive reading and the article was neither opened nor processed. The association's own public release, which reproduces the six principles in full, was used instead, and the reference record says so.

The two open-access reviews were read at `pmc.ncbi.nlm.nih.gov/articles/`, a path the PMC robots file explicitly allows ahead of its blanket disallow. The legacy `/pmc/articles/` route on the `www.ncbi.nlm.nih.gov` host is disallowed by that host's own robots file and was not used.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- both chart sources under `charts/`, their alt text, and their long descriptions;
- the four-position scheme for reading an interval against a threshold, its table, and the worked example that runs it in four steps;
- the three-row sample-size table, the four studies in the position table, the three papers in the practice scene, the press release, the retinal-screening reminder trial, and studies S and T in the mastery check;
- the invented 5 mg/dL importance threshold, the 5 percentage point commissioning threshold, the service, the meeting, the consultant, and the patient;
- all scene prose, worked reasoning, checks, misconceptions, assessment items, answer logic, and rubrics.

Every number in the pack was recomputed for this lesson. The canonical figures are fixed by the Statistics and Data block brief so that the twelve lessons describe one consistent study: sixty adults with type 2 diabetes, thirty per group, within-group standard deviation 16 mg/dL, difference 9.0 mg/dL, standard error 4.13, t = 2.18 on 58 degrees of freedom, two-sided p = 0.029, and a 95% interval of 0.9 to 17.1. The derived studies in this pack were constructed against those same figures: the half-size pilot at fifteen per group returns p = 0.12, and the large replication at six hundred per group returns p = 0.030 on a difference of 2.0 mg/dL, both matching the comparison studies used in PREM-STA-008.

## Boundaries

The cohort, the study, the replication, the reminder trial, the service, the commissioning group, the meeting, the consultant, the patient, and every threshold in this pack are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. The lesson carries the *teaching example, not medical advice* boundary in its orientation, practice, transfer, and clinical wrap-up scenes.

The 5 mg/dL importance threshold used throughout is an illustration, labelled as such wherever it appears, including inside both chart long descriptions. It is not a published minimal clinically important difference and no source is cited for it. The lesson states explicitly, in its opening scene and again in the scene that introduces the concept, that it will not supply an importance threshold for fasting glucose, and it gives the reason: such a threshold is anchored to what patients perceive and value, fasting glucose is a laboratory measure a patient does not directly perceive, and the judgement belongs to a clinical team working on a specific decision.

The fasting plasma glucose diagnostic bands are the one set of real clinical values in the pack. They are attributed to the institute that publishes them, dated to its July 2022 review, and used for a single purpose the source does not itself serve: to show that a cut-point describing a level cannot be borrowed as a threshold for a change. That claim is marked `health-sensitive` in `claims.json`.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Both charts in this pack are declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
