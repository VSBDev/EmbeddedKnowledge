# Attribution and rights

## Lesson content

Lesson PREM-BIO-010, "When the climb stops ending: cell death, senescence, and cancer", version 0.1.0, is licensed CC BY 4.0 as part of the EmbeddedKnowledge Premed corpus.

The accountable principal is VSBDev (`github:VSBDev`), verified in this run with `gh api user`.

Material agent assistance was used to draft the pack and is disclosed in `lesson.json` rather than hidden. The agent system, provider, model, version and run identifier are recorded as the literal `RUNTIME-STAMPED` because this authoring run could not verify them from inside itself; the operator stamps them. No value for any of those fields has been guessed. The `instructionsDigest` is a genuine SHA-256 over the discloseable material instructions supplied to this run, which were the cell-biology block brief and the lesson-specific task instructions. Its scope is those two documents and nothing more: it does not cover provider or harness system instructions, which this run cannot export.

This run performed authorship only. It produced no review artifact, no `adjudication.json`, no commit, no branch and no pull request, and it did not inspect or anticipate any review conclusion.

Every sentence of learner-facing prose, every worked example, every practice task, every retrieval prompt and every assessment item is written for this lesson. No source's wording, figure, table, dataset, teaching example or assessment item was copied or adapted.

## Third-party assets

None. The pack contains no third-party image, figure, dataset or media file.

## Original assets

Two declarative diagrams, both authored for this lesson and declared in `lesson.json` under `originalAssets`:

- `diagrams/renewal-loop.diagram.json` — the five-stage crypt renewal loop, whose closing edge carries the lesson's central relation, that the rate of loss sets the rate that must be replaced.
- `diagrams/one-driver-many-outcomes.diagram.json` — a concept map in which the same driver mutation appears on the path to a clone in working tissue and on the path to growth that does not end, with two limiting edges from what the tissue does.

Both are bounded JSON with every relationship declared as an explicit edge, and both carry a `longDescription` that states the same nodes, edges, directions and conclusion as the picture. Neither contains hand-written SVG, script, style, remote reference or active markup.

## Source use

Sixteen sources are registered in `references.json`. Every one was retrieved and read in this run through `pmc.ncbi.nlm.nih.gov/articles/`, which the project source-access ledger records as allowed and which was consulted before any retrieval. No login, paywall or access control was bypassed anywhere, and no source recorded as `human-only` or `excluded` was opened.

Every use is `factual-reference` on the basis `facts-only-original-expression`. Several of the sources are conventionally copyrighted or carry non-commercial or share-alike licences that this project does not accept for adaptation, which is precisely why nothing is adapted: the facts were read and the expression is this lesson's own.

Four of the sixteen were established for this block by earlier lessons. `source-nguyen-colonic-crypt`, `source-vanderwath-crypt-model`, `source-benoit-crypt-integrins`, `source-segawa-flippases` and `source-parker-apc-recruitment` are carried forward, and this run re-retrieved and re-verified each of them against the statements it uses rather than relying on the earlier packs' records. That re-verification found one addition worth recording: the human intestinal crypt review already in the block states that integrin receptors have a central role in controlling anoikis in this tissue, which lets the lesson locate attachment-dependent survival in the colonic crypt rather than only in a cultured kidney line.

Three access findings from this run are appended to `site/agent/source-access-ledger.json` so the next author inherits them:

- `europepmc.org` returns HTTP 403 on `/robots.txt`, so its access terms could not be established and it is recorded as excluded on the same grounds as an unresolvable host, not on any finding about its terms.
- `eutils.ncbi.nlm.nih.gov` was used twice, for bibliographic identifier resolution only, before its robots file was requested; that request was redirected to an NCBI misuse notice, so its terms could not be read. It is recorded as restricted, it is the source of no claim in this pack, and every identifier it returned was confirmed on `pmc.ncbi.nlm.nih.gov` itself.
- A `pmc.ncbi.nlm.nih.gov/articles/pmid/...` redirect form returned a challenge page. Nothing was taken from it and the article was read at its canonical article path instead.

## The parallel dependency on PREM-BIO-008

This lesson declares `topic-cell-biology-cell-cycle-mitosis` as a graph prerequisite. The pack teaching that outcome, PREM-BIO-008, was being authored at the same time as this one and could not be read.

The lesson therefore does not summarise, characterise or anticipate PREM-BIO-008 anywhere. PREM-BIO-008 owns cell-cycle control, mitosis, chromosome segregation, cytokinesis, the checkpoints and stem-cell renewal in the crypt, and the pack says so in learner-facing prose in a dedicated callout in scene 1 and again in scene 5, and in the `scope` field of `claim-damage-checkpoint-minimum`.

What this lesson borrows is one statement and no more: that a cell can be held in arrest in response to DNA-damage signals long enough to repair its genome before continuing through the cycle. That statement is sourced independently, to a 2014 review of p53 (`source-bieging-p53-suppression`), and not inferred from what PREM-BIO-008 might say. An earlier draft also borrowed a cell-cycle duration figure; it was removed because the argument does not need it and because the figure sits inside PREM-BIO-008's territory.

## Prior lessons in this block

The pack adopts and does not redefine: the crypt architecture, cell count and renewal intervals from PREM-BIO-001 and PREM-BIO-006; the steady-state estimate of about 175 cells a day per crypt from PREM-BIO-001, carried forward with that lesson's own caveat that it is a population rate and not a per-cell lifetime; the phosphatidylserine eat-me signal from PREM-BIO-004; the Wnt gradient, the destruction complex, APC and the conclusion that a cell with damaged APC reports crypt-base position at every height from PREM-BIO-006; and the basal integrin attachment, the junction map and the statement that an enterocyte never leaves the sheet from PREM-BIO-007.

Three deliberate restraints follow from that. Apoptosis at the crypt top was already asserted in the block by PREM-BIO-007's `claim-crypt-context`, so this lesson adopts that claim's source rather than minting a rival account. The migration mechanism PREM-BIO-007 left open is left open. And the unsettled Wnt inhibition mechanism PREM-BIO-006 left open is not touched.

The glossary adds seventeen terms new to the corpus and repeats one, `basement membrane`, with an `alignment` block declaring relation `adopt` to PREM-BIO-007, because attachment to that specific structure is the survival condition scene 3 turns on. No alias in the glossary is a part standing for a whole or a narrower term standing for a broader one: `apoptosis` carries no alias precisely because programmed cell death is the wider category and not a synonym, and `p53` carries no alias because TP53 is the gene and p53 the protein.

## Boundary

This is the most health-sensitive lesson in the block and it is written accordingly.

Every clinical or disease statement is scoped as teaching material. Boundary callouts appear in scene 1, in scene 6 beside the normal-tissue mutation study, and at the head of the clinical wrap-up. The lesson states no diagnosis, no prognosis, no staging, no treatment, no screening or monitoring recommendation, no risk counselling and no personal risk estimate, and it contains no dose, threshold, interval or diagnostic criterion. Clinical oncology management is excluded by this module's syllabus and is not discussed. Population figures are presented as properties of studied groups and are explicitly not anyone's personal risk, following the precedent PREM-BIO-006 set for the same 93 per cent figure.

The tissue described in the clinical wrap-up, and every finding and preparation in the practice scene, are constructed for this lesson from sourced features. None is a real specimen, a real report or a real person, and each says so.

Cancer claims are marked `health-sensitive` in `claims.json`: eleven of the twenty-nine claims carry that risk level. No war or conflict metaphor is used anywhere in the pack, and no framing of the material as a struggle, a defeat or a victory.

## Stated limitations

Recorded here because a reviewer should not have to find them.

The clearest evidence that normal, functioning tissue carries driver mutations under positive selection comes from sun-exposed eyelid epidermis in four donors aged 55 to 73. It is skin, not colon, and four donors. This pack holds no equivalent dataset for the human colon: the obvious candidate study of normal colorectal crypts is not deposited in PMC, and Europe PMC could not be used because its access terms could not be established. The lesson therefore presents its extension of that finding to colonic crypts explicitly as a use of the model rather than as a reported measurement, in prose, in the retrieval check that does it, and in the `uncertainty` field of `claim-drivers-in-normal-tissue`.

Whether shedding at an intestinal surface is caused by detachment or preceded by death is not known, and the review that examines it most closely says so while reporting evidence on both sides. The lesson leaves it open and no assessment key depends on it being settled.

Which of p53's three responses carries its tumour-suppressing effect is unresolved and tissue-dependent, and the lesson keys nothing to it.

The per-villus shedding estimate and the gap-sealing interval are small-intestinal figures, used for the mechanism and the sense of scale they give, and not transferred to the colon.

The rate arithmetic in scene 5 and in the practice scene is the lesson's own illustration of what a balance relation implies. No source calculates a tolerable mismatch between production and loss, and the example states its assumptions, names the one doing the most work, and says which direction its estimate errs in.
