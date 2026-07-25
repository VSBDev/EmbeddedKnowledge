# Attribution

## Lesson identity and licence

- Lesson: **PREM-STA-003 — Look at the shape before you choose the summary: centre, spread, and distribution shape**
- Outcome: **PREM-04.03** (`topic-statistics-data-center-spread`)
- Accountable principal: **VSBDev** (`github:VSBDev`)
- Licence: **Creative Commons Attribution 4.0 International (CC BY 4.0)**
- State: **draft**, source confidence **pending-review**

## Material agent assistance

One author-role run researched, drafted, and packaged the frozen candidate. No review or adjudication artifact was produced by that run. The isolated review runs are disclosed in their unchanged structured artifacts, and the post-review finalizer run is disclosed in `adjudication.json`.

| System | Provider | Model | Version | Run ID | Material-instructions digest |
| --- | --- | --- | --- | --- | --- |
| `RUNTIME-STAMPED` | `RUNTIME-STAMPED` | `RUNTIME-STAMPED` | `RUNTIME-STAMPED` | `author-PREM-STA-003-65b2222e-b9fd-43f4-919c-7f26134b9c27` | `sha256:0cd10dccc8c84bfc77ea7fb97850404677c91ceae86d6025bbfac63f9be4acc2` |

The four runtime identity fields are left as `RUNTIME-STAMPED` for the accountable operator to replace from what the runtime actually reported, because an agent cannot reliably report its own model. The digest covers the exact discloseable UTF-8 authoring task payload supplied to the run, including its terminal newline. It does not cover hidden provider or system instructions, which cannot be exported.

## Originality, sources, and rights

Every data set in this lesson is invented for teaching and is labelled as such: the sixty-adult dinner-timing cohort, the participant recording five mornings, the two clinics with equal means, the right-skewed clinic audit and its intervention, the grouped dinner-to-sleep column, the screening-clinic readings, the discharge and emergency-department audits, and the trial in the assessment. They describe no real patient, clinic, or study. All prose, tables, chart source, worked steps, retrieval prompts, practice items, feedback, recovery routes, and assessment content are original.

Sources are used for facts only, under an independently written instructional structure and expression. No source wording, worked example, table, figure, dataset, or question is copied or adapted.

- The NIST/SEMATECH e-Handbook of Statistical Methods supports the location facts (extreme tail values distort the mean; the rank-based median is not distorted; the median is the better location estimate for such data), the scale facts (the sample variance with its `n - 1` divisor, the standard deviation as its square root restoring the original data units, the range as largest minus smallest, the interquartile range as the seventy-fifth minus the twenty-fifth percentile), the definition of skewness as a lack of symmetry, an introductory symmetric unimodal histogram example whose centre summaries coincide, an introductory right-skewed histogram example whose summaries differ, and the recommendation to report at least the mean and median for an inspected skewed distribution. The lesson adds explicit existence, uniqueness, and unimodality conditions and does not treat those examples as a general theorem.
- Wan, Wang, Liu and Tong (2014), read from its open-access PubMed Central copy under CC BY 4.0, supports the observation that some medical trial reports give the median with quartiles or with minimum and maximum instead of the mean and standard deviation, that the interquartile range is usually less sensitive to outliers than the range, and that the ratio of interquartile range to standard deviation converges to about 1.35 for normal data.
- MedlinePlus, published by the United States National Library of Medicine, supports the fasting condition a fasting blood glucose test requires. No diagnostic threshold or reference range is drawn from it or asserted anywhere in this lesson.

One statement in the lesson, that a high-side tail lifts the mean above the median, is recorded in `claims.json` as an inference combining two sourced facts rather than as a direct quotation of either, and the lesson demonstrates it arithmetically on its own invented data.

## A source opened and then excluded

OpenStax *Introductory Statistics 2e* section 2.6 was opened during research before its terms were checked. The check then found that the OpenStax `robots.txt` disallows `/books/` for at least one named AI crawler, and an earlier academic review in this repository recorded that current OpenStax book pages carry an explicit restriction on ingestion into large-language-model or generative-AI offerings. The source was therefore removed from `references.json`, from every claim, and from every source note, and the affected claims were re-grounded on the NIST handbook. Nothing read from OpenStax is quoted, adapted, or relied on as support in this pack.

## Access checks

The displayed licences, terms routes, and public access conditions for every retained source were checked on 2026-07-25 and recorded with that date in `references.json`. No login, paywall, or technical control was bypassed for any source. The PubMed Central `robots.txt` was read and explicitly allows `/articles/` for all user agents. The NIST handbook host serves no `robots.txt`; a request for one redirects to the NIST ITL landing page.

No third-party assets, images, datasets, personal data, or patient material are included. `thirdPartyAssets` in `lesson.json` is empty.

## Boundaries

This lesson teaches descriptive statistics. It provides no clinical advice, asserts no diagnostic threshold, and makes no claim of review, approval, publication, measured effectiveness, academic credit, or clinical competence. The clinical wrap-up is an illustrative reporting exercise built on invented data and is labelled as a teaching example rather than medical advice.
