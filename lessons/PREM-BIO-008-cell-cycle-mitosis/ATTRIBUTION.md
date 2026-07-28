# Attribution, coverage, and limitations

**Lesson:** PREM-BIO-008, *What has to be true before a cell divides*
**Graph outcome:** `topic-cell-biology-cell-cycle-mitosis` (PREM-05.08)
**Accountable principal:** VSBDev (`github:VSBDev`)
**Content licence:** CC BY 4.0
**Status:** draft candidate, all claims `pending-review`, lesson `sourceConfidence: pending-review`

## Coverage against syllabus outcome BIO-125

The graph statement for PREM-05.08 is a summary. The binding syllabus outcome is BIO-125 in `course/PREMED-SYLLABUS.md`:

> Explain cell-cycle control, mitosis, checkpoints, apoptosis, stem-cell renewal, and how loss of regulation contributes to cancer.

BIO-125 is deliberately split across two lessons of this block. The division of labour is set out below so a reviewer can check coverage without inferring it.

| BIO-125 component | Owner | Where, in this pack |
| --- | --- | --- |
| Cell-cycle control | **This lesson** | Scene 2: the four phases, cyclin-CDK as the actuator, CDK inhibitors, the G1 restriction point with its disputed location, and the ATM/ATR to CHK to CDC25 and p53 to p21 damage responses. Objective `objective-name-what-is-sensed`. |
| Mitosis | **This lesson** | Scene 4: condensation and condensin access, the five stages read as five conditions, and the cohesin, securin, separase and APC/C chain. Objective `objective-order-mitosis-by-dependency`. |
| Checkpoints | **This lesson** | Scenes 2, 4, 5 and 6. Three distinct checkpoints are taught, the DNA damage checkpoints, the spindle assembly checkpoint, and the abscission checkpoint, all framed as conditions rather than as points in a timetable. Objectives `objective-name-what-is-sensed` and `objective-predict-checkpoint-detection`. |
| Chromosome segregation (from the graph statement) | **This lesson** | Scene 4 for the mechanism, scene 6 for the four attachment geometries and what happens when segregation fails. |
| Cytokinesis (from the graph statement) | **This lesson** | Scene 5: the contractile ring, spindle-directed furrow positioning through centralspindlin, ECT2 and RhoA, abscission by ESCRT-III, the abscission checkpoint, and failure producing a tetraploid cell. |
| Sources of proliferative error (from the graph statement) | **This lesson** | Scene 6, organised as four routes: a wrong state satisfying the detector, a detector that gives up, a cost to waiting, and a failure mode with no detector. Quantified with per-chromosome and per-division missegregation rates. Objective `objective-predict-checkpoint-detection`. |
| Stem-cell renewal | **This lesson**, scoped to the crypt | Scene 1: stem-cell number, division rate, replacement rate, neutral drift and monoclonal conversion. Scene 7 pass one derives the necessity of an amplifying compartment. Objective `objective-explain-crypt-renewal`. |
| Apoptosis | **PREM-BIO-010** | Not taught here. Pointed forward to at the end of scenes 5, 6 and 8. Where a source used in this pack also discusses apoptosis, that material was deliberately left unused, and the `uses` records in `references.json` say so for the quiescence review, the mitotic-slippage review and the mucositis review. |
| Senescence | **PREM-BIO-010** | Not taught here. The quiescence definition in scene 2 stops at reversible arrest and does not develop the contrast with irreversible arrest that its source offers. |
| How loss of regulation contributes to cancer | **PREM-BIO-010** | Not taught here. This lesson stops at the point where a daughter cell with the wrong chromosome content exists, and says so explicitly in scene 6. Scene 8 uses cancer *treatment* as a clinical application of the lesson's own mechanisms, which is a different matter from explaining oncogenesis. |

A reviewer checking the honesty of that last row should look at scene 6's closing paragraph and scene 8's final section, which name the boundary in learner-facing prose rather than only here.

## Pack limitations

### The unbuilt chromosomes prerequisite

`lesson.json` declares the two graph prerequisites for PREM-05.08 exactly as the graph gives them: `topic-cell-biology-organelles` and `topic-molecular-genetics-chromosomes`. **The second has no lesson.** It is PREM-06.02, *Chromosomes and genomes*, whose outcome is to describe chromatin organisation, ploidy, homologs, loci and genome architecture.

This lesson does not re-teach that material and does not quietly pre-empt it. It was handled as follows.

- Scene 4 opens with a short named section stating the four facts about chromosome packaging that mitosis needs, saying plainly that they are stated rather than taught, and naming PREM-06.02 as the outcome that will own the full treatment. The four facts are: that each linear DNA molecule with its proteins is a chromosome; that a human somatic cell is diploid, carrying two sets of 23 chromosomes; that replication leaves two attached identical sister chromatids, each building its own kinetochore at the shared centromere; and that the centromere is where the segregation machinery grips.
- The glossary entry `term-chromosome` repeats the deferral in the definition itself, so a learner meeting the term through the glossary rather than the prose gets the same signal.
- **The scope of what is borrowed is deliberately minimal.** The chromosome count is used for exactly two purposes: to make the published per-chromosome to per-division conversion of the missegregation rate checkable by the learner rather than taken on trust, and to let the words diploid, tetraploid and aneuploid be glossed in one clause each at first use. It is sourced to `source-bryant-cytogenetics` and carried by `claim-human-chromosome-number`. Nothing about homologues, loci, karyotype notation, sex-chromosome variation or chromatin organisation is asserted anywhere in the pack.
- **This was a mid-authoring correction, and the reasoning is recorded because a reviewer should see it.** The pack was first drafted under a stricter rule, that no arithmetic would multiply by a chromosome number at all, on the view that asserting a count trespassed on the unbuilt outcome. A first-read comprehension check by a fresh reader-proxy carrying only lessons 01 to 07 showed that rule had produced a worse result than the trespass would have: scene 6 set the learner a conversion from a per-chromosome rate to a per-division rate while describing the multiplier only as "a few dozen", so the reader had to invent an input to a calculation the lesson had set, and the corresponding practice item was unanswerable. Withholding one sourced integer had made a quantitative argument unfollowable. The count was added, with its own source and claim, and the conversion is now shown in full.
- Nothing here contradicts PREM-BIO-002, which established the genome as about three billion base pairs across more than twenty linear molecules. That figure is carried forward unchanged, and the diploid count of 46 is consistent with it rather than a revision of it.

**Consequence for review:** a learner arriving with only lessons 01 to 07 has not been taught chromatin structure, homologues, or where ploidy comes from, and this lesson supplies only the bare count. Scene 4 is written to be readable on that basis, but the pack cannot verify that PREM-06.02 will define these terms compatibly. When that lesson is authored, `term-chromosome` and `claim-human-chromosome-number` here should be checked against it, and this lesson should probably hand the count back.

### Numbers this lesson could not source, and therefore did not assert

- **A cell-cycle time for human colonic crypt cells measured in vivo.** None was reachable on a permitted route from a primary, openly licensed source. A mid-crypt figure of about 30 hours exists in the literature but was only reachable second-hand through a paper whose licence reserves all rights, so it is not cited. This gap is the reason scene 3 derives a cycle time from a proliferative fraction and a turnover time instead of quoting one, and the derivation is labelled as this lesson's own throughout.
- **A per-division spontaneous rate of cytokinesis failure in normal human cells.** Nothing measured was found, and nothing at all for colonic epithelium. The lesson therefore states that failed cytokinesis produces a tetraploid cell and that no checkpoint stops it, without any claim about how often this happens. A tetraploid *prevalence* figure of about 8 per cent exists for cultured primary human mammary epithelial cells undergoing telomere attrition, but a prevalence in a stressed culture is not a per-division failure rate, and it was rejected rather than repurposed.
- **A total number of crypts in the human colon.** Only order-of-magnitude assertions exist, and the one giving a numeric range sits behind an all-rights-reserved licence. The lesson uses whole-organ cell and production totals from a CC BY source instead, and never multiplies a per-crypt rate up to a whole-colon rate.
- **A number of transit-amplifying division rounds measured in human colon.** The comparison figure of 4 to 5 rounds used in scene 7 is mouse small intestine, and it appears in its source as an introductory citing statement rather than as that paper's own measurement. Both limitations are stated in the learner-facing prose, the claim is rated `confidence: low` with `support: context`, and **no assessment item is keyed to it.**
- **A numeric threshold for the cyclin B level below which mitotic arrest cannot be sustained.** No source consulted supplies one. Scene 6 says so explicitly and presents the threshold as a modelled quantity rather than supplying a number.
- **A crisp mechanical statement, for human cells, of why an uncondensed chromosome cannot be segregated.** The claim rests on a study in budding yeast, and the organism is named in the prose rather than elided.
- **A missegregation rate for cells in a living human tissue.** None exists. All published rates in this pack are from cultured cell lines, the source study makes no in-vivo claim, and both the prose and the claim record say so.

### A genuine disagreement in the literature, handled rather than hidden

Published cell counts for a human colonic crypt disagree. This block has used about 700 cells since PREM-BIO-001, from a computational model of a descending-colon crypt built on measured dimensions. Direct whole-crypt counts of human biopsies average about 2428 cells, and a separate review gives two to three thousand.

Both figures are retained and named in scenes 1 and 3. The block's 700-cell figure is kept as the running crypt, for continuity, and the larger measured count is stated beside it along with the counting study's own explanation of why such counts vary between the intestine and the colon and between markers. The worked example then makes the disagreement moot: the quantity it derives depends on the proliferative *fraction*, and the crypt's total cell count cancels out of the steady-state relation exactly. That cancellation is the pedagogical point of the scene as well as its escape from the conflict.

The same treatment was applied to the number of stem cells per crypt, where functional clone-tracing, methylation inference and marker staining give 5 to 10, 15 to 20, and 1 to 3 respectively because they count different things. The lesson uses the functional clone-tracing figure, and the claim record states the full spread and the reason for it.

### Open questions the lesson declines to resolve

Three mechanistic questions are live in the current literature and are presented as open, with sources on both sides where both sides exist. No assessment key depends on resolving any of them.

1. **What the spindle assembly checkpoint reads**, microtubule occupancy or mechanical tension. One primary study in human cells and one review are cited taking opposing positions, and the review states in its own words that the discrimination mechanism is not clear.
2. **Which attachment error accounts for most chromosome missegregation.** Merotely's escape from the checkpoint is established and is taught. That merotely is the main cause of aneuploidy is disputed, and the study arguing for syntely instead is cited. Scene 6 warns the learner against the stronger claim, and the open-response assessment item is keyed to the dispute rather than to either position.
3. **How the abscission checkpoint detects a chromatin bridge.** Both cited sources state that this is unresolved.

The restriction point is handled the same way: taught as a real transition, with its disputed location and questioned universality stated beside it.

## Sources and rights

`references.json` records 44 sources. Every one was opened and read on a permitted route before the claim resting on it was written.

**Rights basis.** All 44 sources are used under `facts-only-original-expression`. No wording, figure, table, dataset, question or example is reproduced or adapted from any source. This basis was chosen uniformly rather than per-licence, because the pack's sources span CC BY 4.0, CC BY 3.0, CC BY-NC, CC BY-NC-ND, CC BY-NC-SA, one publisher open-access term that is not a Creative Commons licence, NIH author manuscripts, and conventional textbook and journal copyright. Several carry no-derivatives or non-commercial terms that would place any expressive reuse outside this project's accepted set, so facts-only use is the only defensible basis across the whole set. Reviewers should note in particular:

- `source-deckbar-checkpoint-limits` carries an Informa "iOpenAccess" term, which reads as attribution-style but is not a standard Creative Commons licence. Flagged here for the rights review.
- `source-baker-crypt-dynamics`, `source-gregan-merotelic` and `source-lara-gonzalez-sac` carry no-derivatives terms. Nothing was adapted from any of them.
- `source-renshaw-abscission` and `source-balachandran-kipreos-slippage` are CC BY 3.0, which is outside this project's accepted set for reusing expression. Facts only.
- `source-bryant-cytogenetics` and `source-lara-gonzalez-sac` carry both non-commercial and no-derivatives terms. Two bare facts are taken from the first and one from the second; nothing was adapted.

**Domains fetched.** Two, both already recorded as permitted in `site/agent/source-access-ledger.json`:

- `pmc.ncbi.nlm.nih.gov`, on the `/articles/` route the ledger records as explicitly allowed. 41 sources.
- `www.ncbi.nlm.nih.gov`, on the `/books/NBK...` Bookshelf route the ledger records as separately permitted after a full reading of its wildcard robots block. 3 sources. Only the specific cited section was retrieved for each, in keeping with the publisher note that these works are searchable rather than browsable, and no table content is cited from that route, per the ledger's caution that tables are often not served there.

**No new domain was opened, so nothing was appended to the source-access ledger.** Excluded and human-only domains were not fetched. Search results repeatedly surfaced the legacy `www.ncbi.nlm.nih.gov/pmc/articles/` path, which the ledger records as disallowed for unnamed agents; the allowed `pmc.ncbi.nlm.nih.gov` route was used instead in every such case, and the `agentAccess` notes record this for the three sources where it arose.

**One source was rejected on accuracy.** A widely used textbook chapter on the anaphase-promoting complex describes it as *cleaving* securin and M-phase cyclin. The APC/C is a ubiquitin ligase: it ubiquitinates its substrates for proteasomal destruction and cleaves nothing. That chapter was not cited, and a different chapter that correctly describes the complex as a ubiquitin ligase was used instead. This is recorded in the `uses` entry for `source-cooper-mitosis`.

### Repairs made after the first-read check

A fresh reader-proxy holding only lessons 01 to 07 read the eight scenes with no access to the ledgers, the answer keys or this file. Its report drove the following corrections, listed so a reviewer can see what was wrong rather than only what is now right.

- **A false answer key.** Pass three A had asked what a 12-hour arrest ending in *slippage* implies for a tissue's output, and its key answered as though the cell went on to divide late. Scene 6 teaches that a cell which slips does not divide at all. The stem now specifies an arrest that resolves, the key works the turnover consequence through properly using {math}`T_t = T_c / f` to reach about six days, and it then states separately what changes if the cell slips instead.
- **An arithmetic error.** Scene 8 gave S phase as "35 to 40 per cent" of a 25-hour cycle and then multiplied by an unexplained 0.37. The sourced durations of 7.6 to 10.1 hours are 30 to 40 per cent of 25 hours; the scene now carries both ends of that range and shows the multiplication at each.
- **A misstated magnitude.** Pass three C described 0.5 against 1.0 per cent as "several times better". It is twice as good. Corrected, in a lesson whose own argument is about not misquoting magnitudes.
- **A gap created by a definite article.** Scene 2 enumerated two ways to switch off a CDK and then, fourteen lines later, relied on inhibitory phosphate being stripped from CDKs by CDC25, a third route never introduced. The enumeration now names all three.
- **An unbuilt machine.** The mitotic spindle was first mentioned already assembled, and centrosomes were used in scene 6 without ever being defined. Scene 4 now builds the spindle before it is needed: centrosomes duplicating, separating, and serving as the two poles, with the bipolar geometry identified as the basis of segregation. Nuclear envelope breakdown is also now placed at the end of prophase, which matters because condensin I depends on it. All of this is sourced to the mitosis chapter already cited.
- **An open question quietly closed.** Scene 6 had referred to "the two conditions scene four identified", but scene 4 had identified two *candidates* and declined to choose. Scene 6 now says so, and makes the stronger point that merotely satisfies both, so the disagreement need not be settled for the argument to hold.
- **Unglossed vocabulary.** Diploid, tetraploid and aneuploid were used as if known. Each is now glossed in a clause at first use in prose, not only in the glossary.
- **Two mis-framed practice items.** Pass two asked whether "the spindle assembly checkpoint will delay anaphase" for two cases that involve neither anaphase nor that checkpoint. The instruction now asks whether *any* checkpoint holds the cell and tells the learner that spotting the wrong-checkpoint cases is part of the task.
- **A diagram label that wrapped badly.** The rendered SVG was inspected rather than assumed: all seven declared edges draw as seven paths with seven arrowheads, but the longest node label wrapped and left one word orphaned on its own line. The label was shortened to stay within the width the other nodes render on one line.
- **Validator-facing register in learner prose.** The accessibility notice explained the pack's compliance posture to an auditor, including a reassurance about family history that no reader had reason to want. It has been rewritten to tell a learner what they can skip and still succeed. The recovery route's explanation of the pack's own citation apparatus was cut, and a bare cross-course catalogue reference was replaced with a description of the skill involved.
- **Unearned confidence in two consistency checks.** Scene 3 had presented its derived 25 hours as corroborating the block's 24-hour figure without noting that the phase durations measured in the same source sum to between about 14 and 22 hours; scene 8 had called a prediction landing between 0.23 and 0.8 per cent as much as could be expected. Both now state what the agreement does and does not establish, and scene 2 sums the phase durations openly so the learner meets the tension rather than discovering it.

## Original material

**Original assets.** One, `diagrams/checkpoint-blind-spot.diagram.json`, created for this pack. It is a declarative diagram in the project's bounded JSON format, with eight nodes and seven explicitly declared edges. No third-party asset is used anywhere in this pack, and `thirdPartyAssets` is empty.

The diagram's `longDescription` is a complete text equivalent: it names every node, every relationship, the kind and direction of each relationship, and the conclusion the graph carries. Every relationship intended to be drawn is declared in the `edges` array, since the renderer computes layout from edges and infers nothing from the order in which nodes are declared.

**Original reasoning.** The following are this lesson's own and are attributed as such in the learner-facing source notes, not only here:

- The steady-state derivation that the average cycle time of a proliferative compartment equals its proliferative fraction multiplied by the tissue turnover time, and the observation that the tissue's total cell count cancels exactly.
- The resulting figure of about 25 hours for the human colonic crypt's proliferative compartment, its 19-to-31-hour band, and the consistency check against the cultured-cell figure PREM-BIO-002 quoted.
- The separation of the stem contribution from the amplifying contribution, and the conclusion that the amplifying compartment cycles two to three times faster than the stem cells feeding it.
- The estimate that roughly six rounds of amplifying division are required in a 700-cell crypt and nearly eight in a 2428-cell crypt, with its four stated assumptions.
- The predicted share of crypt cells in S phase and in mitosis, and its comparison against measured mitotic counts per crypt.
- The argument that surveillance must act upstream of APC/C because cohesin cleavage is irreversible.
- The four-route organisation of proliferative error in scene 6, and the discriminating test that asks what physical variable a detector would have to read.
- The generalisation that cell-cycle surveillance is a collection of specific detectors rather than a general audit, drawn from the contrast between a checkpoint for a chromatin bridge and the absence of one for tetraploidy.
- The reading of one property twice in scene 8, as a source of error in a healthy crypt and a source of treatment failure in a tumour.

## Continuity with the rest of the block

Figures carried forward unchanged, with the lesson that established each: the crypt's roughly 700 cells and 32-by-22 arrangement and the derived 175 divisions a day (PREM-BIO-001); the three-to-five-day epithelial renewal interval (PREM-BIO-001, restated in every lesson since); the 24-hour cultured human cell cycle with about an hour of mitosis and 95 per cent interphase (PREM-BIO-002, which twice promised that this lesson would explain it, and which this lesson redeems in scene 3); the human nuclear genome at about three billion base pairs across more than twenty linear molecules (PREM-BIO-002); the Wnt gradient's transcriptional output including cyclin D1, and the proliferative compartment at the crypt base (PREM-BIO-006); the properties of actin filaments and myosin motors (PREM-BIO-007).

**Terminology.** Two `alignment` blocks are declared in `glossary.json`.

- `term-stem-cell` declares `adopt` against PREM-BIO-001. The meaning is kept unchanged, including lesson one's insistence that capacity is not continuous activity, which this lesson's quiescence material and its two-to-three-day stem division rate both support. What this lesson adds is the division arithmetic lesson one deferred.
- `term-anaphase-promoting-complex` declares `distinct-sense` against PREM-BIO-006. Lesson six owns **APC** meaning adenomatous polyposis coli; this lesson's **APC/C** is an unrelated complex that shares only the abbreviation. The collision is real, it is resolved by writing APC/C throughout, and the disambiguation is given to the learner in a callout in scene 4 rather than being left in the ledger. Bare `APC` is deliberately **not** listed as an alias of this term, because it is not a synonym for it.

No term another lesson owns is silently redefined. Terms introduced fresh here, none of which any prior lesson in the corpus defines, include cell cycle, interphase, checkpoint, cyclin, cyclin-dependent kinase, restriction point, quiescence, chromosome, sister chromatid, centromere, kinetochore, mitotic spindle, mitosis, cohesin, separase, securin, the spindle assembly checkpoint and its checkpoint complex, the amphitelic and merotelic attachment geometries, lagging chromosome, micronucleus, mitotic slippage, cohesion fatigue, cytokinesis, contractile ring, abscission, proliferative compartment, proliferative fraction, transit-amplifying cell, neutral drift, aneuploidy and tetraploid.

## Educational and medical boundary

This is pre-medical teaching material. It diagnoses nothing, recommends nothing, and states no dose, schedule, regimen or management step anywhere.

Scene 8 discusses cancer chemotherapy because the cell cycle explains a pattern of clinical observation, and it carries an explicit `boundary` callout saying that it is a teaching example and not medical advice. Drug names appear in it only to identify which phase of the cell cycle a mechanism acts on. The five claims in that scene are marked `risk: health-sensitive` in `claims.json`, and each records what it does and does not support. No part of this lesson asks a learner for personal health information, family history, or any measurement from their own body, and none is needed to complete any item.

## Governance

This run authored only. No review artifact, adjudication, or publication decision was produced, and `reviews/` and `adjudication.json` are deliberately absent. All claims are `pending-review` and lesson `sourceConfidence` is `pending-review`, as authorship requires. The pack is a candidate and is not a published lesson; validation establishes structural integrity and says nothing about whether the teaching is correct or the sourcing sufficient. Those are for independent review to determine.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with seven major findings and one minor; the
learning-design review approved with two notes. All eight were repaired in one pass and none was
declined.

**A threshold was read backwards.** The scene said that more DNA damage does not mean a longer hold and
that past a threshold the G2/M checkpoint stops holding at all. The cited review reports the opposite:
arrest duration rises with dose, and cells are released once repair has brought the residual damage
*below* an insensitive threshold of roughly ten to twenty double-strand breaks. The limitation is a
detection floor, not a breaking point, and the claim ledger carried the reversed reading too.

**Two accounts of slippage and of APC/C were teaching the wrong mechanism.** Mitotic slippage was
described as a case where no checkpoint holds the cell and the detector gives up. The pack's own source
says BubR1, Mad1 and Mad2 stay at the unattached kinetochores and the spindle checkpoint remains
active: the cell leaves because cyclin B keeps being degraded through the hold until too little
remains. The detector is outlasted, neither satisfied nor switched off. And an item keyed a design
rationale — that the checkpoint must act on APC/C because only cohesin cleavage is irreversible — which
the pathway source does not establish; securin and cyclin B proteolysis are themselves effectively
irreversible on that timescale, and separase is restrained by more than securin.

**A definition was made falsely absolute.** Saying that nothing in the mechanism measures duration
overstates a true point. Whether the checkpoint is satisfied is a question about state; what happens
downstream during a sustained hold is not, and that is exactly how slippage works. The claim is now
about the detector, and the scene says plainly that exit is not always state-dependent.

**A universal absence rested on one experiment.** The pack said normal mammalian somatic cells have no
tetraploidy checkpoint and that nothing detects the post-cytokinesis-failure state. One 2004 primary
fibroblast study supports the narrower finding that there is no simple sensor of DNA content or nucleus
number. Later primary work reports context-dependent responses, including a Hippo-LATS2-p53 arrest in
tetraploid retinal epithelial cells and reduced proliferation of tetraploid hepatocytes. The teaching
point is sharper for being scoped: surveillance is a set of specific detectors, not a general audit.

**The clinical scene overstated drug phase specificity**, which matters most because it is the
health-sensitive part. Four drugs were grouped under one mechanism and described as acting only on S
phase. Doxorubicin also poisons topoisomerase II, intercalates and generates oxidative damage, and can
injure cells that are not dividing. Paclitaxel's spindle-checkpoint account does not generalise at
clinically relevant exposure. The argument is now about why the crypt is hit hardest, which is what the
lesson needs, rather than about why other tissues are spared.

**The derived conclusions had no claim records.** The T_cycle = f × T_turnover derivation, the 25-hour
estimate and its 19-to-31-hour band, the amplification argument, and the clinical cycling fractions were
all things a learner must accept and use, and their source notes listed only the inputs. Original
inference is still a material claim. Four claims now carry them, each at `support: inference` with its
own scope and uncertainty, and each exposed in the scene that asserts it.

One minor correction with a history: the pack quoted three billion base pairs as what a dividing human
cell copies. That is one haploid genome; a diploid cell copies about six billion. The same error was
found in PREM-BIO-002 earlier in this block, which suggests it is worth a corpus-wide check rather than
a per-pack fix. "Single-copy" DNA in G1 has also been reworded, since it risked reading as haploid when
it means unreplicated.
