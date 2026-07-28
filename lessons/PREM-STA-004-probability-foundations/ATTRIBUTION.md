# Attribution

## Lesson identity and accountability

- Lesson: **PREM-STA-004 — What chance alone would produce**
- Graph outcome: `topic-statistics-data-probability` (PREM-04.04, "Probability foundations")
- Version and state: **0.2.0 / draft / pending review**
- Accountable principal: **VSBDev** (`github:VSBDev`), confirmed through the authenticated GitHub CLI session on 25 July 2026
- Course-content license: **Creative Commons Attribution 4.0 International (CC BY 4.0)**

VSBDev is accountable for accepting the scientific baseline, for verifying every source, for the invented teaching cases, and for offering this pack under CC BY 4.0. The agent record below discloses material authoring assistance; it does not move accountability away from VSBDev.

## Authoring provenance

- System: **RUNTIME-STAMPED**
- Provider: **RUNTIME-STAMPED**
- Model: **RUNTIME-STAMPED**
- Version: **RUNTIME-STAMPED**
- Run ID: `claude-author-PREM-STA-004-0abe69cb-d664-4af2-ada7-a1a58255f55f`
- Exact discloseable material-instruction digest: `sha256:48b31dbf1e1c8430f959af311fe5605ae46300b6e75b3f532ca191b96ec176fd`

The digest covers the exact discloseable UTF-8 lesson-authoring task payload supplied to this run, including its terminal newline. It does not claim to cover hidden provider or system instructions, which cannot be exported from this environment. The system, provider, model, and version fields are emitted as `RUNTIME-STAMPED` for the operator to stamp; no agent identity has been guessed.

This run operated in the author role only. It produced no review, no adjudication, and no publication transition.

## Original synthesis

The following material is original, created for this pack, and offered under CC BY 4.0:

- the sixty-row dinner-timing table and its 21 / 9 / 12 / 18 split;
- the forty-night running-share record and the declarative chart derived from it;
- the two invented screening clinics, their 2 in 100 and 20 in 100 compositions, and every cell in both tables;
- the adherence-rating practice table, the automated-meter flag scenario, and all five practice tasks;
- the stipulated single-gene transfer case and its counselling framing;
- the eighty-adult clinic audit used for the mastery check, and every assessment item, distractor, rubric criterion, and feedback route;
- the registrar wrap-up case and the four sentences it tests;
- the instructional sequence, headings, accessibility equivalents, and recovery route.

Every quantity stated in the pack was recomputed during authorship rather than carried over from any source. The 21 / 12 split was chosen to sit close to what the block's canonical mean of 142 mg/dL, group difference of 9.0 mg/dL, and within-group standard deviation of 16 mg/dL would imply at a 140 mg/dL cut, so that this lesson does not contradict the arithmetic later lessons in the block depend on. The 140 mg/dL cut is an arbitrary teaching threshold and is labelled as such wherever it appears.

## Source use

Every source in `references.json` was used as a factual reference only, under the facts-only basis in `RIGHTS-POLICY.md`. No source wording, notation choice, distinctive example, question, table, figure, media, or dataset was copied, translated, adapted, or redistributed. Two cases deserve explicit record:

- The screening review names the reasoning error "confusion of the inverse" and illustrates it with its own examples. The term is used here as established terminology; the review's illustrations are not reproduced, and the two clinic tables were constructed independently.
- The survey of medical residents establishes its finding with a clinical vignette of its own. That vignette is not reproduced, paraphrased, or re-skinned. Only the study's sample size, response rate, reported percentage, and the direction of its reported association are cited, and the lesson's own run-of-nights and run-of-mornings scenarios were written from scratch.

Displayed source licences are recorded in `references.json` for transparency. None of them is relied on to reuse source expression, including the share-alike licence displayed by the mathematics reference work.

## Source-access attestation

Before substantive access on 25 July 2026, the robots route or published terms of every host were checked and recorded per source in `references.json`.

- Stanford Encyclopedia of Philosophy: robots route disallows only case-variant archive paths and a script directory, with a five-second crawl delay. The entry route is permitted and was read over plain HTTPS.
- Bureau International des Poids et Mesures: robots route contains a single wildcard record with an empty Disallow. The public JCGM 100:2008 document was retrieved in one request and only Annex C was read.
- Encyclopedia of Mathematics: robots route is empty and the copyrights page states CC BY-SA 3.0 and GFDL terms with no machine-reading prohibition. The host returned intermittent 502 responses during this session and served the entries normally on retry; the recorded content was read directly from the live entries on the access date.
- NCBI: the generic PMC article route is disallowed for unnamed agents and was not used. The three articles were read through their public NCBI BioC REST endpoints, which are not disallowed, at a low request rate, with stable PubMed records used for metadata.

No login, paywall, rate limit, or technical control was bypassed, and no source is marked `human-only`.

## Terminology handling

`site/data/premed-terminology.json` was read before the glossary was designed. Thirteen terms are defined here; twelve are new to the course. The exception is declared:

- **proportion** carries an `alignment` block with relation `distinct-sense` naming **PREM-QNT-003**, which owns the equal-ratios-equation sense. This lesson introduces the part-to-whole sense, and the opening scene bridges the two before the word is used.

Two further collisions are handled in prose rather than by a glossary entry, because the colliding published terms are different words:

- **independent events** sits beside the **independent variable** of PREM-SCI-003. Scene 3 names the collision and states that the shared word is an accident of English.
- **conditional probability** sits beside the **conditioning** of PREM-SCI-007, which is a design decision with causal consequences rather than an arithmetic operation. Scene 3 separates them and points the learner at the owning lesson.

Terms this lesson deliberately does not claim: sensitivity, specificity, and predictive values are used as illustrative vehicles in scene 4 and named as belonging to the block's diagnostic-measures lesson; p values are used only to fix the direction of a conditional and are left to the hypothesis-testing lesson.

## Boundaries

Every clinical detail in this pack is invented for teaching. The cohort, the screening test, the two clinics, the inheritance model, and the clinic audit are labelled illustrative teaching examples that are not medical advice, at the point where each appears. The pack asserts nothing about dinner timing, evening walking, screening performance, or inheritance as medicine, and it introduces no clinical fact that is not sourced under the claim discipline. It confers no clinical authority, professional authorization, academic credit, or admission eligibility.

## Third-party assets

None. The chart under `charts/` is declarative JSON authored for this pack and is offered under CC BY 4.0. No image, audio, video, software, or dataset from any third party is included.

## Finalization boundary

This pack remains a draft. Every claim in `claims.json` remains `pending-review` and the lesson's `sourceConfidence` remains `pending-review`. The eligible advisory reviews are preserved under `reviews/`, and the fresh finalization record is preserved in `adjudication.json` with its final-commit and runtime identity values reserved for operator stamping. No publication transition has occurred, and none may be inferred from this file.
