# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-002 — Look before you summarise: tables and graphical displays**
- Graph outcome: `topic-statistics-data-graphs-tables` (PREM-04.02, "Tables and graphical displays")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `author-PREM-STA-002-AA0725D5-9A91-44BC-83AC-5AC3E2687598`.

The instructions digest is `sha256:61e55ba9891cf86298e8812a8adabfef691d9b66800f9601596e901ebb7c41cb`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked before substantive access and are recorded per source, with the checked route's terms URL.

| Source | Used for | Basis |
| --- | --- | --- |
| NIST/SEMATECH e-Handbook of Statistical Methods, 1.3.3.14 Histogram | What a histogram summarises and displays; construction from equal-sized bins the analyst defines; normalisation of counts into proportions of the total | Facts only, original expression |
| NIST/SEMATECH e-Handbook of Statistical Methods, 1.3.3.26 Scatter Plot | The questions a scatter plot is used to answer about two variables | Facts only, original expression |
| Government Analysis Function, Data visualisation: charts | Matching a display type to the statistical relationship shown; the effect of breaking a bar chart's numerical axis and the advice against it; the different treatment of a line chart's vertical axis | Facts only, original expression |
| Government Analysis Function, Data visualisation: tables | The conditions under which a table serves a reader better than a chart | Facts only, original expression |

No source's wording, structure, table, figure, example, question, or dataset is reproduced or adapted. The Government Analysis Function terms of use place most of its content under the Open Government Licence v3.0 while separately withholding permission to reuse the site's images; no image from that source is used, redrawn, or adapted here.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- the sixty-person illustrative cohort, its sixty fasting glucose values, its sixty dinner-to-sleep intervals, and every count, proportion, and group mean derived from them;
- the constructed two-humped counter-case in `charts/bimodal-counter-case.chart.json`, with every observation placed at its stated bin midpoint;
- all six chart sources under `charts/`, their alt text, and their long descriptions;
- the frequency tables, the six-site waiting-time table, the conference poster, the clinic-audit bar chart, the ninety-morning logbook, and the Monday-meeting slide;
- all scene prose, worked reasoning, checks, assessment items, answer logic, and rubrics.

The cohort's headline figures are fixed by the Statistics and Data block brief so that the twelve lessons in the block describe one consistent study: sixty adults, mean fasting glucose 142 mg/dL, standard deviation 18 mg/dL, and a later-minus-earlier difference of 9.0 mg/dL. The sixty individual values in this pack were constructed to reproduce those figures exactly, and the histogram and the scatter plot are built from the same sixty values so the two displays cannot disagree.

## Boundaries

The cohort, the clinic, the meeting, the logbook, and every case in this pack are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. The clinical wrap-up uses explicitly invented equal-width analytic bands that have no diagnostic or management meaning. The lesson carries the *teaching example, not medical advice* boundary in its orientation, transfer, and clinical wrap-up scenes.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Every chart in this pack is declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
