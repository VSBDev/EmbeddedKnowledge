# Attribution

## Lesson identity and accountability

- Lesson: **PREM-STA-008 — What p = 0.029 claims, and what it does not**
- Graph outcome: `topic-statistics-data-hypothesis-tests` (PREM-04.08, "Hypothesis tests and p-values")
- Version and state: **0.1.0 / draft / pending review**
- Accountable principal: **VSBDev** (`github:VSBDev`), confirmed through the authenticated GitHub CLI session on 25 July 2026
- Course-content license: **Creative Commons Attribution 4.0 International (CC BY 4.0)**

VSBDev is accountable for accepting the scientific baseline, for verifying every source, for the invented teaching cases, and for offering this pack under CC BY 4.0. The agent record below discloses material authoring assistance; it does not move accountability away from VSBDev.

## Authoring provenance

- System: **RUNTIME-STAMPED**
- Provider: **RUNTIME-STAMPED**
- Model: **RUNTIME-STAMPED**
- Version: **RUNTIME-STAMPED**
- Run ID: `claude-author-PREM-STA-008-697e5bdf-a032-4035-827e-40afe6cabb38`
- Exact discloseable material-instruction digest: `sha256:98dfdd5d4b68035565ba882a604fcd0f7cfafbe44a21ef9ca7e86e05b28bf378`

The digest covers the exact discloseable UTF-8 lesson-authoring task payload supplied to this run, including its terminal newline. It does not claim to cover hidden provider or system instructions, which cannot be exported from this environment. The system, provider, model, and version fields are emitted as `RUNTIME-STAMPED` for the operator to stamp; no agent identity has been guessed.

This run operated in the author role only. It produced no review, no adjudication, and no publication transition.

## Original synthesis

The following material is original, created for this pack, and offered under CC BY 4.0:

- the five opening readings of `p` = 0.029 and the meeting they belong to;
- the birth-month study used as the reductio against the inverted reading;
- the paired 1200-participant and 30-participant variants of the dinner-timing study, and the arithmetic separating effect size from precision;
- the declarative `normal-curve` chart of the null distribution, its five markers, and its two shaded tails;
- the four faded practice problems, the education, sub-study, medication-review, and dietary-programme cases behind them, and every feedback route;
- the invented surgical-site infection audit and its 150-per-arm and 600-per-arm comparison, used as the transfer case;
- studies A and B in the mastery check, and every assessment item, distractor, rubric criterion, and retry route;
- the Thursday clinic meeting that closes the pack, its four questions, and the minute it records;
- the instructional sequence, headings, accessibility equivalents, and recovery route.

Every quantity stated in the pack was recomputed during authorship rather than carried over from any source, and the block's canonical values were re-derived rather than assumed:

- `16 x sqrt(2/30) = 4.1312`, reported as the canonical standard error 4.13 mg/dL;
- `9.0 / 4.13 = 2.179`, reported as the normal-approximation statistic `z = 2.18`;
- the two-sided normal-approximation tail area beyond 2.18 standard errors, `0.0293`, reported as the canonical `p` = 0.029;
- `1.96 x 4.13 = 8.0948`, giving `0.905` to `17.095` and so the canonical interval 0.9 to 17.1 mg/dL, and confirming the interval-test correspondence, since the area beyond plus or minus 8.0948 mg/dL is `0.0500` to four decimal places;
- the paired counter-cases: `2.0 / 0.924 = 2.17` giving `p` = 0.030 at 600 per group, and `9.0 / 5.84 = 1.54` giving `p` = 0.12 at 15 per group;
- the transfer audit under its declared unpooled Wald normal approximation: rates of `12/150` and `5/150`, a difference of `4.67` percentage points, a standard error of `2.66` percentage points, `z = 1.76` and `p` = 0.079, against `48/600` and `20/600` giving the same difference with a standard error of `1.33`, `z = 3.51` and `p` = 0.0004;
- the mastery studies: `7.2 / 4.0 = 1.80` with `p` = 0.072 and interval `-0.64` to `15.04`, and `0.9 / 0.30 = 3.00` with `p` = 0.003 and interval `0.312` to `1.488`.

One arithmetic point deserves explicit record because it affects how a reviewer should read the pack. The block's canonical `p` = 0.029 and its canonical interval are both computed with a declared large-sample **normal approximation**, which is what the block's use of the 1.96 multiplier implies. The worked statistic is therefore labelled `z`, not `t`. Because the standard error is estimated, a pooled Student *t* procedure is a defensible alternative; with 58 degrees of freedom it returns about **0.033** for the same data. The pack states this openly in scene 3 and uses it in scene 5 as evidence that the 0.05 convention cannot bear the weight often placed on it.

The transfer audit uses the unpooled Wald normal approximation consistently for both its statistic and interval. The five-event cell makes that approximation fragile, so scene 7 explicitly limits the calculation to an interpretation exercise and does not recommend it for clinical analysis.

## Source use

Every source in `references.json` was used as a factual reference only, under the facts-only basis in `RIGHTS-POLICY.md`. No source wording, notation choice, distinctive example, question, table, figure, media, or dataset was copied, translated, adapted, or redistributed. Two cases deserve explicit record:

- The association's release states its six principles as a numbered list. None of the six is quoted or reproduced here. Each proposition the lesson takes from them is restated in this pack's own words and demonstrated on invented data, and the lesson's ordering of the errors follows its own teaching sequence.
- The methodological guide presents its corrections as a numbered catalogue of misinterpretations with its own examples. That catalogue's wording, numbering, and examples are not reproduced or re-skinned. Only the underlying propositions are used, and the birth-month reductio, the paired studies, the infection audit, and every worked case here were written from scratch.
- The NIST Dataplot reference is used only to verify the unpooled Wald formula and its below-nominal coverage limitation. Its example, software output, wording, and organisation are not reused.

Displayed source licences are recorded in `references.json` for transparency. The share-alike licence displayed by the mathematics reference work is not relied on, because no expression from those entries is reused.

## Source-access attestation

Before substantive access on 25 July 2026, the robots route or published terms of every host were checked and recorded per source in `references.json`.

- **American Statistical Association (amstat.org):** the host publishes no robots file, the route returning HTTP 404, and exposes no terms page or machine-readable crawler directive restricting automated reading. The three-page release PDF was retrieved in one plain HTTPS request.
- **NCBI:** the wildcard record in the robots file disallows the generic `/pmc/articles/` route, which was not used. The guide was read through the public NCBI BioC REST endpoint for PMC4877414, which no record disallows, with the stable PubMed record used for metadata.
- **Encyclopedia of Mathematics:** the robots route serves no path restrictions and the copyrights page states CC BY-SA 3.0 and GFDL terms with no machine-reading prohibition. Both entries were read over plain HTTPS at a low request rate, and their revision identifiers are recorded in `references.json`.
- **NIST Information Technology Laboratory:** a search result identified the page, after which the NIST use policy and privacy notice were checked before the page was opened directly. Those policies permit ordinary access to public information and state no agent-ingestion restriction for the Dataplot reference page. The page was opened over HTTPS without a login, paywall, CAPTCHA, rate-limit breach, or access-control bypass.

No login, paywall, rate limit, CAPTCHA, or technical control was bypassed, and no source is marked `human-only`.

### Sources excluded on agent-access grounds

Two routes were checked and then deliberately not used. Both exclusions are disclosed here because each would otherwise have been the obvious source to reach for.

- **Taylor & Francis (tandfonline.com), the publisher route for the ASA statement.** The peer-reviewed article is Wasserstein and Lazar, *The American Statistician* 70(2):129-133, DOI 10.1080/00031305.2016.1154108. That host's robots file carries an explicit record disallowing all paths to the named AI crawler GPTBot. This project treats a declared prohibition on AI crawling as a restriction on agent ingestion, so the article was neither opened nor processed at that route. The association's own distribution of its own statement was used instead, and `references.json` records that the cited document is the ASA news release reproducing the six principles rather than the journal article. A human reviewer with institutional access may wish to confirm the six principles against the article directly.
- **PubChem (`/rest/pug/`), for the glucose molar mass behind a mg/dL to mmol/L conversion.** The wildcard record in that host's robots file disallows `/rest/pug/`. One metadata request reached that route before the wildcard record had been read to its end. On discovering the restriction the returned value was discarded and not used, and the two places in the draft that referenced mmol/L were rewritten to remove the conversion entirely. No claim in this pack depends on that request, and no unit conversion for glucose appears in the learner-facing text.

**BMJ (bmj.com)** was also considered for the classic statement that absence of evidence is not evidence of absence. Its robots route is served behind an interactive bot challenge returning HTTP 403. No attempt was made to satisfy or bypass that challenge, so the host's terms could not be established and no BMJ source is cited. The point is instead carried by the methodological guide, which supports it directly.

## Terminology handling

`site/data/premed-terminology.json` was read before the glossary was designed. Nine terms are defined here. Four carry an `alignment` block:

- **null hypothesis** — relation `narrow`, prior lesson **PREM-SCI-002**, which owns *hypothesis* as a proposed explanation yielding observable expectations. A null hypothesis narrows that to a numerical statement fixed at one value and adopted in order to be tested against. Scene 2 bridges the two senses where the word first appears in the new sense.
- **alternative hypothesis** — relation `narrow`, prior lesson **PREM-SCI-002**, for the same reason; it is defined by what the null excludes rather than by an explanatory account of its own.
- **statistical model** — relation `narrow`, prior lesson **PREM-SCI-010**, which owns *scientific model* and *model assumption*. This lesson narrows both to the statistical case without displacing the broader sense.
- **confusion of the inverse** — relation `adopt`, prior lesson **PREM-STA-004**, whose meaning is taken over unchanged. That lesson forwarded this exact application to this lesson, and no new sense is introduced.

**significant** is introduced here in its technical sense, as the block brief specifies, and no prior published lesson owns it. The collision with the everyday sense meaning sizeable or worth attention is named explicitly in scene 5 and again in the glossary entry, and scene 5 records that **PREM-STA-012** exists to separate the two. The word is never used in its everyday sense anywhere in this pack; where an ordinary meaning is wanted, the prose uses *large*, *small*, or *worth acting on*.

Terms this lesson deliberately does not claim, because the block assigns them elsewhere: **standard error** and **sampling distribution** belong to **PREM-STA-006** and are recalled as prerequisites; **confidence interval** belongs to **PREM-STA-007**; **conditional probability** belongs to **PREM-STA-004**; **Type I and Type II error**, **power**, and **multiplicity** belong to **PREM-STA-009** and are named only as forward references. The significance level is defined here strictly as a cut-off fixed in advance, and its development as a long-run error rate is left to PREM-STA-009.

## Boundaries

Every clinical detail in this pack is invented for teaching. The dinner-timing cohort, the birth-month study, the education and medication-review and dietary-programme cases, the surgical-site infection audit, the two mastery studies, and the Thursday clinic meeting are labelled illustrative teaching examples that are not medical advice, at the point where each appears. The pack asserts nothing about dinner timing, pharmacist review, dietary programmes, or skin-preparation protocols as medicine, and it introduces no clinical fact that is not sourced under the claim discipline. It confers no clinical authority, professional authorization, academic credit, or admission eligibility.

The pack also stops short of two judgements on purpose. Whether a 9.0 mg/dL difference should change any patient's care is left to **PREM-STA-012**. What a study of this size could have failed to detect is left to **PREM-STA-009**.

## Third-party assets

None. The chart under `charts/` is declarative JSON authored for this pack and is offered under CC BY 4.0. No image, audio, video, software, or dataset from any third party is included.

## Finalization boundary

This pack remains in draft state. Every claim in `claims.json` remains `pending-review` and the lesson's `sourceConfidence` remains `pending-review`; the maintainer performs any permitted publication transition separately. The frozen review records and final adjudication are governance artifacts and do not themselves publish the lesson.
