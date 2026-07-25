# Attribution

## Lesson identity and accountability

- Lesson: **PREM-STA-010 — How big is it, and how would a test for it behave?**
- Graph outcome: `topic-statistics-data-association-risk` (PREM-04.10, "Association, risk, and diagnostic measures")
- Version and state: **0.1.0 / draft / pending review**
- Accountable principal: **VSBDev** (`github:VSBDev`), confirmed through the authenticated GitHub CLI session on 25 July 2026
- Course-content license: **Creative Commons Attribution 4.0 International (CC BY 4.0)**

VSBDev is accountable for accepting the statistical baseline, for verifying every source, for the invented teaching cases, and for offering this pack under CC BY 4.0. The agent record below discloses material authoring assistance; it does not move accountability away from VSBDev.

## Authoring provenance

- System: **RUNTIME-STAMPED**
- Provider: **RUNTIME-STAMPED**
- Model: **RUNTIME-STAMPED**
- Version: **RUNTIME-STAMPED**
- Run ID: `claude-author-PREM-STA-010-1fc5e244-ff53-4bf9-8841-a879aab51e63`
- Exact discloseable material-instruction digest: `sha256:c4998a05b97c3597a1b51b2502570459346ba9911ff8d7be1519bfa2dd866786`

The digest covers the exact discloseable UTF-8 lesson-authoring task payload supplied to this run, including its terminal newline. It does not claim to cover hidden provider or system instructions, which cannot be exported from this environment. The system, provider, model, and version fields are emitted as `RUNTIME-STAMPED` for the operator to stamp; no agent identity has been guessed.

This run operated in the author role only. It produced no review, no adjudication, and no publication transition.

## Original synthesis

The following material is original, created for this pack, and offered under CC BY 4.0:

- the two-question framing that treats an effect measure and a diagnostic measure as one problem seen twice;
- the five-word collision table in scene 1 and the sensitivity-analysis disambiguation beside it;
- the two invented press releases at baselines of 24.0 and 0.8 per cent;
- the invented meal-timing programme trial, its 500-per-arm counts of 130 and 80, and every measure derived from them;
- the invented fingerstick meter, its stipulated sensitivity of 0.90 and specificity of 0.85, both ten-thousand-person tables, and the declarative chart derived from them;
- the odds-based account of why a predictive value moves in a predictable direction;
- the registry, the rare-outcome trial, the screening test, and the press summary used in the practice scene;
- the cardiology-trial abstract and its 180-against-120 counts, and the newborn-screening case with its 1-in-5,000 prevalence and million-birth table, used in the transfer scene;
- the five-hundred-person clinic audit, the twelve-month trial, and the test used for the mastery check, together with every assessment item, distractor, rubric criterion, and feedback route;
- the outreach-morning wrap-up case and the four sentences it produces;
- the instructional sequence, headings, accessibility equivalents, and recovery route.

Every quantity stated in the pack was recomputed during authorship. The sixty-row table and its 21 / 9 / 12 / 18 split are carried forward unchanged from PREM-STA-004 so the block stays arithmetically consistent, and the 140 mg/dL cut is an arbitrary teaching threshold labelled as such wherever it appears. Both diagnostic tables were built from stipulated column totals so that every cell is a whole number, and each of the four measures was checked back against the figures it was built from.

## Source use

Every source in `references.json` was used as a factual reference only, under the facts-only basis in `RIGHTS-POLICY.md`. No source wording, notation choice, distinctive example, question, table, figure, media, or dataset was copied, translated, adapted, or redistributed. Three cases deserve explicit record:

- Both methods papers in the *Common pitfalls in statistical analysis* series illustrate their definitions with the same clinical example of their own. That example is not reproduced, paraphrased, or re-skinned, and none of its numbers appear here; the cohort, trial, and registry in this pack were constructed independently.
- The screening review names the reasoning error "confusion of the inverse" and illustrates it with an analogy of its own. The term is used here as established terminology, established in this course by PREM-STA-004; the review's analogy is not reproduced.
- The reporting guideline is cited only for the existence and direction of its recommendation on absolute and relative effect sizes. Its checklist is not reproduced, and no wording from item 17b or its elaboration appears in this pack.

Displayed source licences are recorded in `references.json` for transparency. None of them is relied on to reuse source expression, including the two non-commercial share-alike licences.

## Source-access attestation

Before substantive access on 25 July 2026, the robots route of every host was retrieved and recorded per source in `references.json`.

- `pmc.ncbi.nlm.nih.gov`: the wildcard robots record allows `/articles/` with a one-second crawl delay. All five sources were read through that route over plain HTTPS at a low request rate.
- `www.ncbi.nlm.nih.gov`: the wildcard record disallows `/pmc/articles/`. That legacy route was not used for any source.
- `www.bmj.com`: the publisher's own site returns an interactive challenge to automated requests. It was not accessed; the open-access deposit of the reporting guideline at PMC was used instead.

No login, paywall, rate limit, or technical control was bypassed, and no source is marked `human-only`.

### One source excluded for restricting agent ingestion

The *Cochrane Handbook for Systematic Reviews of Interventions*, version 6.5, chapters 6 and 15, was the first candidate for the effect-measure and number-needed-to-treat material. Its robots route permits the chapter paths, so the site's published terms were checked next. Cochrane's website terms and conditions prohibit text and data mining and web scraping for any purpose including the development, training, fine-tuning, or validation of AI systems or models, and separately withhold consent for any such use of data accessible via the site.

That is an explicit restriction on agent ingestion, so the handbook was excluded. It is not cited, it supports no claim in this pack, and nothing was drawn from it. The two peer-reviewed methods papers and the number-needed-to-treat review in `references.json` were located afterwards and carry every definition the handbook would have supported. The chapter pages were opened only far enough to establish that the terms applied before the source was dropped.

## Terminology handling

`site/data/premed-terminology.json` was read before the glossary was designed. Fourteen terms are defined here. Twelve are new to the course and two carry a declared `alignment`:

- **association** carries an `alignment` block with relation `adopt` naming **PREM-SCI-007**, which owns the term. The definition is kept faithful, and this lesson adds only measurement: the risk difference, risk ratio, and odds ratio give an association a size without saying why it is there.
- **prevalence** carries an `alignment` block with relation `adopt` naming **PREM-SCI-004**. The definition is unchanged, and this lesson applies it to the group a test is used in, where it becomes the quantity that separates a test's detection measures from its predictive values.

Five ordinary words with a narrower technical sense here are named for the learner in scene 1 before any arithmetic starts: **risk**, **odds**, **sensitivity**, **specificity**, and **positive**. The last is flagged because a positive result means the test fired, which is usually unwelcome news, and the everyday sense pulls the opposite way.

Two further collisions are handled in prose and in the glossary rather than by protest, because the colliding published entries are different terms:

- **sensitivity** here is a property of a test. **Sensitivity analysis**, owned by PREM-SCI-009 and narrowed by PREM-SCI-010, is the rerunning of a result under alternative assumptions. Scene 1 names the collision and the two never share a sentence.
- **risk** here is a measured probability. It does not redefine any published term, and it is kept away from the informal use of "risk" as danger throughout.

The word **significant** does not appear in this pack in either sense. Statistical significance belongs to PREM-STA-008 and the separation of the two senses belongs to the block's closing lesson, and this pack pre-empts neither.

## Boundaries

Every clinical detail in this pack is invented for teaching. The cohort, the two press releases, the meal-timing programme trial, the fingerstick meter, both testing populations, the registry, the clinic audit, and the outreach morning are labelled illustrative teaching examples that are not medical advice, at the point where each appears. The pack asserts nothing about dinner timing, meal-timing programmes, glucose meters, or screening as medicine, and it introduces no clinical fact that is not sourced under the claim discipline. It confers no clinical authority, professional authorization, academic credit, or admission eligibility.

## Third-party assets

None. The chart under `charts/` is declarative JSON authored for this pack and is offered under CC BY 4.0. No image, audio, video, software, or dataset from any third party is included.

## Candidate boundary

This pack is a draft candidate. Every claim in `claims.json` remains `pending-review` and the lesson's `sourceConfidence` remains `pending-review`. No review record, adjudication, or publication transition is present, and none may be inferred from this file.
