# Attribution and provenance

## Lesson identity

- Lesson: **PREM-STA-001 — Variables and data types: what kind of thing is each column?**
- Version: `0.1.0`
- Outcome: `topic-statistics-data-data-types` / PREM-04.01
- Accountable principal: VSBDev (`github:VSBDev`)
- Course-content licence: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Original contribution

The lesson prose, the invented dinner-timing file and its values, the heart-failure register, the emergency-department quality report, the renal and asthma audit cases, all tables, prompts, feedback, assessment items, rubrics, and glossary definitions were created for EmbeddedKnowledge and are contributed under CC BY 4.0 by the accountable principal. No third-party visual, media, dataset, quotation, or adapted expression is included, and the pack carries no assets.

The published learner-facing packs for PREM-SCI-003, PREM-SCI-006, and PREM-QNT-003 were consulted for terminology continuity and for the cross-references this lesson makes to them. No review or adjudication artifact from any prior lesson was consulted, and no prior lesson prose, example, assessment item, or structured artifact was copied into this pack.

## Terminology continuity

The course terminology ledger was read before the glossary was designed. Four entries relate to terms a prior published lesson already owns, and each declares an `alignment` block in `glossary.json`:

- **variable** — `extend` from PREM-SCI-003. That lesson defines a variable by its role in a comparison; this one widens the frame to any recorded characteristic that differs across the cases in a file. The first scene separates a column's role from its level of measurement so the learner sees both senses at once.
- **interval scale** — `adopt` from PREM-QNT-003, unchanged in meaning.
- **ratio scale** — `adopt` from PREM-QNT-003, unchanged in meaning.
- **proportion** — `distinct-sense` from PREM-QNT-003. That lesson uses the word for an equation stating that two ratios are equal; this block uses it for a part-to-whole fraction between 0 and 1. The second scene names the collision in prose where the statistical sense first appears.

## Source use and rights

Four sources support the factual claims. All were used for facts only, followed by independent instructional structure and original expression. Complete locators, use records, rights evidence, and dated agent-access checks appear in `references.json`.

- Ali and Bhaskar, *Basic statistical tools in research and data analysis*: the categorical and quantitative variable families, the discrete and continuous division, the nominal to ratio measurement scales, and the distinction between two independent samples and two dependent samples measured on the same subjects.
- Sullivan and Artino, *Analyzing and Interpreting Data From Likert-Type Scales*: ordered response categories can be ranked while the distance between them is not measurable, so a median and category frequencies suit them while means and standard deviations belong to scales with measurable differences.
- Mishra and colleagues, *Descriptive Statistics and Normality Tests for Statistical Data*: frequency summaries for categorical data as against central-tendency and dispersion summaries for quantitative data.
- Sapra and Bhandari, *Diabetes*, StatPearls on NCBI Bookshelf: the fasting plasma glucose level of 126 mg/dL or higher used as a diagnostic criterion, and the 100 to 125 mg/dL range described as impaired fasting glucose. This is a tertiary reference cited for two numbers so the clinical wrap-up can show where a clinical category comes from. The lesson does not teach diagnosis and gives no guidance on interpreting anyone's readings; a reviewer should confirm current national guidance before publication.

Before substantive source access on 2026-07-25, the accountable run checked the PMC robots route, which carries a single `User-agent: *` block explicitly allowing `/articles/`, and the NCBI robots route, whose default block disallows query routes such as `/books/?term=` but not the `/books/NBK...` chapter path used here. Neither names an AI or LLM crawler restriction. No login, paywall, or access control was bypassed.

An OpenStax route was considered and excluded before substantive access. Its robots file carries a rule directed at an AI crawler covering the book content that would have been read, so the route was treated as restricted; no OpenStax material was opened or used, and it is not a lesson source.

## Agent assistance disclosure

- System: `RUNTIME-STAMPED`
- Provider: `RUNTIME-STAMPED`
- Model: `RUNTIME-STAMPED`
- Version: `RUNTIME-STAMPED`
- Author run ID: `author-PREM-STA-001-A16D33E3-9D82-49C4-A5AF-6F2ABCFE5665`
- Material-instructions digest: `sha256:a56b0a56109a75f3ccf8a786f738c2320ae6352c4557e4a12c04bce857302edd`

VSBDev, the accountable principal, is verified as `github:VSBDev`. The system, provider, model, and version fields carry the operator-stamped literal `RUNTIME-STAMPED` and are stamped by the operator before review. The digest covers the exact UTF-8 material task payload supplied to this authoring run, including its final newline. It excludes hidden provider and system instructions that cannot be exported. VSBDev remains accountable for the contribution and attests the disclosed provenance.

## Assets, boundaries, and exceptions

No third-party assets are present and the pack contains no images, diagrams, or datasets. Every learner task has a text-first path; the tables are original semantic text rather than reused figures or extracted data.

Every case in the lesson is invented for teaching. The dinner-timing study, the sixty participants, the heart-failure register, the emergency department, and the renal, asthma, and epilepsy audit files describe no real person, clinic, or service. The clinical wrap-up carries an explicit teaching-example boundary and states that it is not medical advice. There are no licence exceptions to the CC BY 4.0 contribution grant.
