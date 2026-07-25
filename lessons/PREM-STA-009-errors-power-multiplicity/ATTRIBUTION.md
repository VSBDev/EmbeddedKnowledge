# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-009 — What the study could have missed: errors, power, and the cost of testing everything**
- Graph outcome: `topic-statistics-data-errors-power` (PREM-04.09, "Type I/II errors, power, and multiplicity")
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Course-content licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- Author-stage state: **draft**, source confidence **pending-review**

VSBDev is accountable for the scientific, editorial, pedagogical, accessibility, rights, and provenance record in this pack. The local authenticated GitHub identity check `gh api user --jq .login` returned `VSBDev` on 2026-07-25.

## Agent provenance

Material authoring assistance was used for this pack. The agent system, provider, model, and version are recorded in `lesson.json` as the literal placeholder `RUNTIME-STAMPED`; the operator stamps the real values with `npm run provenance:stamp` before the candidate is frozen. The authoring run is `author-PREM-STA-009-8909AE0E-4285-435D-A2D8-9EB4365B0611`.

The instructions digest is `sha256:3074b1050c4600f608319b989b833530ce3bfd30555a32be08e3c888ca307ee6`. It covers the recorded discloseable UTF-8 authoring-task payload for this run, including its terminal newline. That payload is the operator's authoring instruction as transcribed for the record; it is not a verbatim export of every layer of instruction the run received, and the digest explicitly does **not** cover hidden provider, system, harness, or tool instructions that cannot be exported.

Only the author role was used. No review, adjudication, or governance artifact was produced, inspected, or anticipated in this run.

## Sources and how they were used

Every source in `references.json` was retrieved and read directly at the URL recorded there on 2026-07-25. No claim rests on a search-result snippet, a generated summary, or a source the run could not open. Agent-access terms were checked before substantive access, and the terms route checked is recorded against each source.

| Source | Used for | Basis |
| --- | --- | --- |
| Greenland, Senn, Rothman, Carlin, Poole, Goodman & Altman, "Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations", Eur J Epidemiol 2016;31:337-350 | The significance level as a cut-off fixed in advance and unchanged by the data; power as the pre-study probability of rejecting the test hypothesis when an alternative is correct; the Type II or beta error rate as one minus the power; that a null p-value above 0.05 does not mean no effect was observed and that a large p-value is not evidence for the test hypothesis; that accepting a false null leaves the chance of error at 100%; that power computed from observed data is a transformation of the null p-value; and the dependence of any of this on analyses not having been selected for significance | Facts only, original expression |
| NIST/SEMATECH e-Handbook of Statistical Methods, 7.1.3 What are statistical tests? | Alpha as the risk of rejecting a true null and the significance level of the test; beta as the error of the second kind; the dependence of beta on the size of the real discrepancy; the rise in beta as alpha falls | Facts only, original expression |
| NIST/SEMATECH e-Handbook of Statistical Methods, 7.2.2.2 Sample sizes required | The four inputs to a sample-size calculation and the two-sided relation built from the sum of the normal quantiles for alpha and beta with the ratio of the standard deviation to the difference to be detected | Facts only, original expression |
| Chen, Feng & Yi, "A general introduction to adjustment for multiple comparisons", J Thorac Dis 2017;9(6):1725-1729 | The Type I error as the incorrect rejection of a true null; the family-wise error rate as the probability of at least one such rejection; the inevitability of at least one incorrect rejection across many simultaneous tests; the Bonferroni correction and its conservativeness | Facts only, original expression |
| Tanniou, van der Tweel, Teerenstra & Roes, "Subgroup analyses in confirmatory clinical trials: time to be specific about their purposes", BMC Med Res Methodol 2016;16:20 | Inflation of type I error in subgroup analyses through multiple testing; the limits of prespecification without multiplicity control; the need for interaction analysis when claiming effect heterogeneity; and the exploratory standing and confirmation of subgroup findings | Facts only, original expression |

No source's wording, structure, table, figure, example, question, or dataset is reproduced or adapted. The Greenland and Tanniou articles are published under CC BY 4.0 and the two NIST handbook pages are US Government works, but no part of this pack relies on those permissions, because nothing from any source is reused. The Chen article carries no open reuse licence and is used for facts only.

### Sources that were checked and not used

**OpenStax** was considered for the definitions of Type I and Type II error and for the power of a test. Its `robots.txt` carries `User-agent: GPTBot` followed by `Disallow: /books/`, an explicit restriction on automated agent retrieval of the book text. The book pages were therefore not opened and nothing from OpenStax is cited or relied on.

**Altman & Bland, "Absence of evidence is not evidence of absence", BMJ 1995;311:485** (PMCID PMC2550545) would have been the natural citation for the rule of thumb quoted in the misconception scene. Its PubMed Central record carries only a scanned page image with no machine-readable body text, so the run could not verify what the article states. It is therefore **not cited**, and the point it would have supported is carried instead by the Greenland article's numbered corrections, which were read in full. The phrase "absence of evidence is not evidence of absence" appears in the lesson as a common English rule of thumb and is not attributed to any source in this pack.

**Bland & Altman, "Multiple significance tests: the Bonferroni method", BMJ 1995;310:170** (PMCID PMC2548561) was checked for the same reason and has the same limitation: scanned image only, no readable body text. It is not cited. The Bonferroni material is carried by the Chen article, whose full text was read.

No source in this pack was cited on the strength of a search result, an abstract, or a summary.

## Original material in this pack

Everything below was created for this lesson and is covered by the pack's CC BY 4.0 licence:

- both chart sources under `charts/`, their alt text, long descriptions, axis ranges, shaded region, and markers;
- the two-by-two table of decision against reality;
- the forty-person study, its interval, and its power figures;
- the twenty-subgroup case, its three candidate report sentences, and the eighteen-subgroup assessment extract, each written to distinguish independence illustrations from overlapping subgroup dependence;
- the blood-panel and physiotherapy transfers and all their numbers;
- the journal club, its two papers, its three design options, and the fourth option in the closing check;
- all scene prose, worked reasoning, checks, assessment items, answer logic, and rubrics.

The cohort's headline figures are fixed by the Statistics and Data block brief so that the twelve lessons in the block describe one consistent study: sixty adults with type 2 diabetes, thirty per group, a within-group standard deviation of 16 mg/dL, an observed difference of 9.0 mg/dL for the late-dinner group, and a standard error of 4.13 mg/dL for that difference. Every derived quantity in this pack was recomputed from those figures rather than carried across from another lesson.

The central results are: the critical value $1.96 \times 4.13 = 8.09$ mg/dL, with 0.025 of the null curve beyond each of $\pm 8.09$; two-sided power 0.587 against a true difference of 9.0 mg/dL, including an omitted lower-tail component of about 0.00002, so $\beta = 0.413$ after rounding; the detectable effect at 80% power, $(1.96 + 0.84) \times 4.13 = 11.57$, reported as 11.6 mg/dL; the sample size for 80% power against 9.0 mg/dL, $2(16/3.21)^2 = 49.7$, rounded to 50 per group and 100 in total; the corresponding figure at $\alpha = 0.01$, $2(16/2.63)^2 = 74$ per group and 148 in total; power 0.35 against 9.0 mg/dL at $\alpha = 0.01$; and, for independent comparisons only, the family-wise error rates $1 - 0.95^{5} = 0.226$, $1 - 0.95^{10} = 0.401$, $1 - 0.95^{20} = 0.642$ and $1 - 0.95^{25} = 0.723$. For dependence not specified, the exact rate is not inferred from the count; the pack uses the general upper bound $\min(1,k\alpha)$. The figure $1 - 0.95^{5} = 0.226$ is the same one PREM-STA-004 computed for the same five independent outcome comparisons, and the two lessons agree by construction.

The forty-person study's figures are $16\sqrt{2/20} = 5.06$ mg/dL, a critical value of 9.92 mg/dL, a 95% interval of $-5.9$ to $13.9$ mg/dL, power 0.43 against 9.0 mg/dL, and a detectable effect of 14.2 mg/dL at 80% power. The physiotherapy pilot's figures are $4\sqrt{2/15} = 1.46$ days, a critical value of 2.86 days, power 0.16 against a 1.4-day benefit, and a detectable effect of 4.1 days.

## Terminology

The course terminology ledger was read before the glossary was written. Five of the eleven entries declare an `alignment` block:

| Term | Prior lesson | Relation |
| --- | --- | --- |
| Type I error | PREM-SCI-006 (measurement error) | distinct-sense |
| Type II error | PREM-SCI-008 (random error) | distinct-sense |
| significance level | PREM-STA-008 (hypothesis tests and p-values) | adopt |
| power | PREM-QNT-010 (power law) | distinct-sense |
| prespecified analysis | PREM-SCI-009 (preregistration) | extend |

The block brief requires that the everyday sense of the word describing a result as noteworthy must not appear anywhere in this block, and it appears nowhere in this pack; the word is used only inside the technical term *significance level*, which is defined and cross-referenced to the lesson that owns it. The brief also requires that the collisions on *error* and *power* be named the first time each appears, and the orientation scene does that in learner prose, before either term is used technically, covering the everyday sense of error as a mistake, the everyday sense of power as force or authority, and the algebraic sense of power as an exponent.

Two terms are used in this lesson without being claimed by it. *False positive* and *false negative* appear as aliases of the two error types, and the prose says explicitly that the same two words describe a diagnostic test applied to a patient, which is the subject of PREM-STA-010. *Effect size* is defined here only in the narrow sense a power calculation needs, which is a difference named in advance in the units of the measurement; measures of association belong to PREM-STA-010 and the question of whether an effect matters belongs to PREM-STA-012, and the lesson says so where each boundary is reached.

## Boundaries

The cohort, the forty-person study, the cohort study with eighteen subgroups, the blood panel, the physiotherapy pilot, the diabetes service, and every case in this pack are invented for teaching. Nothing in the pack reports an observation about real patients, and nothing in it recommends or supports a diagnostic, monitoring, or treatment decision. Individual diagnostic categories are not used as a yardstick for between-group mean differences. The *teaching example, not medical advice* boundary is carried in the orientation scene, the transfer scene, and the clinical wrap-up.

The blood-panel transfer states two simplifying suppositions in the learner text before using them: that each analyte's range was drawn to contain 95% of healthy people, and that the analytes are independent. The scene says plainly that real laboratories set their ranges under standards this lesson does not cover, and the pack asserts nothing about any real reference interval.

## Third-party assets

None. `thirdPartyAssets` in `lesson.json` is empty. Both charts in this pack are declarative JSON authored here and rendered from that JSON at build time; no external image, font, script, plotting library, dataset, or remote resource is referenced.
