# Attribution and provenance — PREM-BIO-009

## Lesson content licence

The teaching content of this pack is offered under **CC BY 4.0**. That covers the scene prose, the
worked examples, the assessment items and their answer reasoning, the glossary entries, and the one
original diagram listed below. It does not and cannot extend to the sources cited in
`references.json`, which remain under their own terms.

## Accountable principal

VSBDev (`github:VSBDev`) is the accountable author of this candidate. Material agent assistance was
used and is disclosed in `lesson.json` under `aiAssistance`. The agent system, provider, model,
version and run identifier are recorded as the literal `RUNTIME-STAMPED`, which the operator
replaces at stamping time; this run could not verify any of those values and invented none of them.
The `instructionsDigest` is a genuine SHA-256 over the material task instructions this run received,
written verbatim to a file before hashing. Its scope is that payload alone. It excludes the
repository documents the run read, the separate block brief the run was pointed at, and hidden
provider and system instructions that cannot be exported.

## Original assets

- `diagrams/two-divisions-two-connections.diagram.json` — created for this lesson. It carries the
  counting argument for why meiosis needs two divisions rather than one, and the two-stage release of
  cohesion that fixes their order. Declared in `lesson.json` under `originalAssets`.

## Third-party assets

**None.** This outcome has no correctly-licensed third-party figure available under the project's
accepted set of CC BY 4.0, CC0, public domain or written permission, so the pack ships no third-party
image and `thirdPartyAssets` is empty. The single figure is the original declarative diagram above.

## Two declared prerequisites with no published lesson

This pack declares exactly the two graph prerequisites the knowledge graph records for
`topic-cell-biology-meiosis`. Neither has a published lesson, and the two were handled differently.

### `topic-molecular-genetics-chromosomes` (PREM-06.02, "Chromosomes and genomes")

No lesson exists and none was being written when this pack was authored. PREM-06.02 will own what a
chromosome is made of, how DNA is packaged into one, and how a genome is organised across several of
them. This lesson defines only the small amount of chromosome vocabulary its own reasoning needs
(homologous pair, homolog, chromatid, sister chromatids, centromere, bivalent, diploid, haploid) and
names PREM-06.02 as the owner of the rest in a learner-visible callout in scene 1. The gap is stated
to the learner rather than concealed. It is recorded here as a limitation: a learner arriving without
that material is being asked to accept that chromosomes are numbered, individually distinguishable
and pairable, which this lesson asserts and does not establish.

### `topic-cell-biology-cell-cycle-mitosis` (PREM-05.08)

This outcome was being authored in parallel as **PREM-BIO-008** while this pack was written, and this
run could not read it. **PREM-BIO-008 owns the account of mitosis**, together with cell-cycle control,
checkpoints, chromosome segregation, cytokinesis, sources of proliferative error, and stem-cell
renewal in the crypt.

Because this lesson's outcome requires an explicit comparison of meiosis with mitosis, it needs a
mitotic account, and it treats that account as **adopted from PREM-BIO-008 rather than established
here**. Three consequences, all deliberate:

1. **The mitotic content is held to the minimum the comparison needs.** It amounts to: mitosis is the
   division of somatic cells; it separates sister chromatids; homologs behave independently in it and
   are never paired; and its sister kinetochores are bi-oriented back to back, against side-by-side
   mono-orientation at meiosis I. Nothing about cell-cycle phases, checkpoint control, cytokinesis or
   proliferative error appears anywhere in this pack.
2. **It is sourced independently.** Those statements rest on `source-sato-mitosis-meiosis` (Sato,
   Kakui and Toya 2021, a review explicitly comparing the two divisions) and
   `source-alberts-meiosis`, both verified by this run. Two claims carry the mitotic content,
   `claim-mitosis-somatic-meiosis-gametes` and `claim-mitosis-separates-sisters`, and both record in
   their `scope` field that PREM-05.08 owns mitosis.
3. **Nothing is invented about what PREM-BIO-008 says.** This pack makes no reference to that
   lesson's wording, structure, figures, claims or conclusions, and does not assert that it will
   contain anything in particular. The scene 1 callout tells the learner the lesson exists, that it
   owns this material, and that it may not be available to them yet.

No glossary entry for **mitosis** or **cell cycle** is created here, deliberately, to avoid a
collision with the lesson that owns those terms. Both words are used in prose in the ordinary
technical sense. Should PREM-BIO-008 and this pack both reach review, a reviewer should check the two
against each other; if the mitotic statements here disagree with that lesson in any particular, the
statements here are the ones to change.

## Terminology coordination

`site/data/premed-terminology.json` was read before the glossary was designed. One term this lesson
defines is already owned by an earlier lesson in the block:

- **stem cell** — originated by PREM-BIO-001 and adopted unchanged by PREM-BIO-006. This pack adopts
  the same capacity-based sense and declares `alignment` with relation `adopt` naming PREM-BIO-001.
  The definition is not converted to an activity-based one even though this lesson quotes a division
  interval for the crypt population.

Terms used in prose in the sense an earlier lesson established, and deliberately not redefined here,
include *cell*, *tissue*, *epithelium*, *lumen*, *colonic crypt*, *cell nucleus*, *genome* and
*diffusion*. Terms this lesson introduces to the corpus, and which no earlier lesson owned, include
*meiosis*, *homologous chromosomes*, *chromatid*, *sister chromatids*, *centromere*, *bivalent*,
*diploid*, *haploid*, *gamete*, *zygote*, *germ line*, *somatic cell*, *spindle*, *anaphase*,
*independent assortment*, *meiotic recombination*, *crossing over*, *crossover*, *chiasma*,
*sister-chromatid cohesion*, *reductional and equational division*, *non-disjunction*, *aneuploidy*,
*trisomy and monosomy*, *heterozygous and homozygous*, *polar body*, and *oogenesis and spermatogenesis*.

The word **chromosome** is used throughout and is deliberately **not** owned here, because
PREM-06.02 will own it and PREM-BIO-008 may need it. That follows the existing practice of the block,
where PREM-BIO-002 uses the word in prose without a glossary entry.

## Sources and rights bases

Twelve sources are recorded in `references.json`, each verified directly by this run. Every one is
used on a **facts-only, original-expression** basis: a fact was read and a new sentence was written.
No source wording, figure, table, dataset, question or example was copied or adapted, including from
the four sources that are openly licensed and would have permitted more.

Domains fetched from, both recorded as permitted in `site/agent/source-access-ledger.json` and both
inside the ledger's 90-day recheck window when checked:

- `pmc.ncbi.nlm.nih.gov` — allowed, on an explicit `Allow: /articles/` in its robots file. Eleven of
  the twelve sources were read here.
- `www.ncbi.nlm.nih.gov` — the `/books/NBK...` Bookshelf route, separately permitted. One source, the
  Molecular Biology of the Cell chapter on meiosis. Following the ledger's caution for that title,
  only the single cited section was retrieved rather than paged through, and because the book is
  conventionally copyrighted the rights basis is facts-only.
- `pubmed.ncbi.nlm.nih.gov` — allowed, one record at a time, and used **only** for bibliographic
  checks: confirming the complete author lists and citation details of three papers. No claim in this
  pack rests on an abstract.

No new domain was opened, so no entry was appended to the ledger. No excluded domain was approached:
`journals.physiology.org`, `www.thelancet.com`, `reactome.org`, `openstax.org` and the others carrying
an `excluded` verdict were not requested, and `smart.servier.com`, recorded as human-only, was not
requested either.

One retrieval was abandoned rather than pursued. A candidate source for the mitosis comparison,
Ohkura's review of key differences between meiosis and mitosis on PMC, returned a reCAPTCHA challenge
instead of the article. The challenge was not circumvented and nothing from that article is cited;
the comparison rests on Sato, Kakui and Toya 2021 instead, which was retrieved normally.

## Health-sensitive material

This lesson covers reproductive and prenatal biology and an aneuploidy that has a named clinical
association. Eleven claims are marked `health-sensitive` in `claims.json`.

Two learner-visible boundary callouts carry the *teaching example, not medical advice* limit, in
scene 4 (covering scenes 4 to 6) and again in scene 8. No screening test, threshold, age
recommendation, individual risk figure, prognosis or reproductive recommendation appears anywhere in
the pack, and none is implied. Every quantitative figure about human outcomes is a published
population aggregate and is labelled as one. No individual is described: the biopsy in scene 8, the
three marker findings in scene 7 and the hypothetical animal in scene 7 are all constructed for
teaching, and the 170 infants and 218 oocytes are published aggregates.

## Limitations a reviewer should examine first

1. **One claim is an inference, not a sourced mechanism.** `claim-chiasma-resolution-reading` holds
   that releasing arm cohesion is what allows a chiasma to stop holding a pair. It is this lesson's
   reading of two statements that sit adjacent in one textbook chapter, its `support` is recorded as
   `inference`, its confidence as `medium`, and scene 2 tells the learner in prose that it is a
   reading rather than a quotation. It is the first thing to challenge.
2. **An unresolved discrepancy is reported rather than settled.** A per-bivalent frequency of 2.60
   per cent of female bivalents lacking a crossover marker, compounded across 23 bivalents under an
   independence assumption, gives about 45 per cent of oocytes carrying at least one such bivalent,
   against a review's figure of over 10 per cent. Scene 6 states both published figures, gives three
   candidate explanations, declines to choose, and marks the 45 per cent as what an independence
   assumption yields rather than a measured quantity. No assessment item depends on it.

2a. **A second unresolved conflict, added after review.** The 1996 study reports first-division
   maternal errors becoming more common with age (odds ratio 5.2); the 2019 study reports
   first-division non-disjunction *decreasing* with age. Scene 6 now states the conflict outright in
   its own subsection, offers three differences in what the two studies measured that could account
   for it (infants born against oocytes examined; chromosome 21 alone against all chromosomes;
   and the 2019 study's three-way split of first-division errors, which the marker method does not
   use), and concludes that the direction of first-division errors with maternal age is not settled
   by these two studies together. The status table records it as unresolved, and the claim that the
   two divisions behave differently is explicitly attributed to the 1996 study alone. No assessment
   item keys the direction of first-division errors.
3. **The maternal-age mechanism is represented as unsettled, deliberately.** The association is
   treated as well documented. The mechanism is not: cohesion weakening is presented as the leading
   candidate and as the cited authors' proposal, alongside one review's explicit judgment that
   cohesin loss is unlikely to be the only driver and one study's statement that the young-age arm of
   the curve is currently unclear. `item-audit-age-claims` keys the proposal form as supported and
   keys the settled-cause and young-age-explained forms as **not** supported. No item anywhere in the
   pack keys cohesion weakening as the cause.
4. **The two-case non-disjunction model is a teaching simplification and says so.** Scene 5 bounds it
   twice: the four-product enumeration describes spermatogenesis, and human oocytes show patterns in
   which sister chromatids separate at meiosis I. The source establishing those patterns was checked
   specifically for whether it states that they are misclassified by centromere-marker studies; it
   does not, so no such claim is made and `item-which-division-from-marker` confines its stem to the
   model explicitly so that its key is true by construction.
5. **The kinetochore mono-orientation mechanism is bounded to geometry.** The molecular components
   named by the cited review are established largely in fission yeast. A learner-visible callout in
   scene 2 says so, and the claim's `uncertainty` field records it.
6. **Two counts of double-strand breaks disagree by roughly half again** between the two cited
   studies, in the same direction for both sexes. Scene 3 reports the disagreement instead of
   averaging it and uses only the direction both agree on.
7. **A figure new to the block is introduced here.** The count of 12 to 16 intestinal stem cells per
   crypt appears in no earlier lesson, so it is not inherited; it is sourced to the 2021 review of the
   intestinal stem-cell niche that PREM-BIO-002 already used for the division interval.
8. **The `estimatedMinutes` total of 118 is an authoring estimate** and rests on no timing data, as
   is the case throughout this block. It was recalibrated after review repairs against the words-per-minute rate the merged packs in this block imply.

9. **The central "why two divisions" argument is the lesson's own reasoning, not a sourced one.**
   Scene 2 argues that meiosis performs two different halvings: the chromosome number at division I
   and the number of DNA copies per chromosome at division II, and that a cell haploid by chromosome
   count is still not a gamete because each of its 23 chromosomes holds two DNA copies. Every
   component fact is sourced, but the argument assembling them is the lesson's construction and no
   cited source presents it in this form. A reviewer should check it on the biology rather than on
   the citations.

   Recorded for the reviewer's benefit: an earlier proposed version of this argument held that two
   such cells fusing would give a zygote whose first division hands each daughter 23 chromosomes, so
   the body would be haploid. That version is wrong, and it was not used. The zygote's first division
   is mitotic and separates sister chromatids, so each daughter would receive one chromatid from each
   of the 46 chromosomes and would be diploid. The argument the lesson actually makes rests on DNA
   copy number and on each parent contributing one copy rather than two.

10. **Accessibility statements were shortened during review repairs.** The learner-facing
   accessibility section no longer enumerates every modality it does not depend on, and no longer
   states that nothing asks for the learner's own health data. Both remain true of the pack. The
   second is recorded under "Health-sensitive material" above, which is the durable record of it.

## Source list

Full records, with locators, licences, rights bases, retrieval dates and dated agent-access findings,
are in `references.json`. In short:

| ID | Source |
| --- | --- |
| `source-alberts-meiosis` | Alberts et al., *Molecular Biology of the Cell* 4th ed., "Meiosis", NCBI Bookshelf NBK26840 |
| `source-gruhn-cytological` | Gruhn, Rubio, Broman, Hunt and Hassold, *PLoS ONE* 8(12):e85075, 2013 |
| `source-wang-crossover-maturation` | Wang, Hassold, Hunt, White, Zickler, Kleckner and Zhang, *Cell* 168(6):977-989, 2017 |
| `source-nagaoka-aneuploidy` | Nagaoka, Hassold and Hunt, *Nature Reviews Genetics* 13(7):493-504, 2012 |
| `source-yoon-down-syndrome` | Yoon, Freeman, Sherman et al., *American Journal of Human Genetics* 58(3):628-633, 1996 |
| `source-gruhn-egg-errors` | Gruhn, Zielinska, Shukla et al., *Science* 365(6460):1466-1469, 2019 |
| `source-sanders-oocyte` | Sanders and Jones, *Biochemical Society Transactions* 46(4):797-806, 2018 |
| `source-cahoon-libuda` | Cahoon and Libuda, *Chromosoma* 128(3):199-214, 2019 |
| `source-sato-mitosis-meiosis` | Sato, Kakui and Toya, *Frontiers in Cell and Developmental Biology* 9:660322, 2021 |
| `source-potapova-aneuploidy` | Potapova, Zhu and Li, *Cancer and Metastasis Reviews* 32, 2013 |
| `source-nguyen-colonic-crypt` | Nguyen, Lausten and Boman, *Cells* 14(18):1428, 2025 |
| `source-zhu-intestinal-stem-cells` | Zhu, Hu and Xi, *Cell Regeneration* 10:1, 2021 |

## Status

`status: draft`, `sourceConfidence: pending-review`, every claim `reviewStatus: pending-review`. This
is an authoring candidate and nothing more. It has not been reviewed, adjudicated, approved, published
or merged, it carries no `reviews/` directory and no `adjudication.json`, and it makes no claim to
outcome coverage, clinical sufficiency or academic credit.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with seven major findings and one minor; the
learning-design review approved with four notes. All eight were repaired in one pass and none was
declined. This was the most technically searching review any pack in this block received, and the
first finding went to the centre of the lesson.

**The mechanism holding the homologs together was wrong.** The scene said that after a crossover the
two chromatids "have become one molecule with a join in it", and that this covalent continuity is the
chiasma. A reciprocal crossover resolves into two separate recombinant DNA molecules; nothing is left
welded across the pair. What holds the homologs together is the configuration the crossover leaves,
maintained by sister-chromatid cohesion *distal* to the exchange. The correction matters twice over,
because the release order the scene teaches next only makes sense once it is right: cutting arm
cohesion dismantles the chiasma precisely because cohesion beyond the crossover is what made the
crossover into a link.

**A number presented as an upper bound was the wrong way round.** Building 2^47 from 23 assortment
choices plus about 24 crossover switch points assumes the 24 is a fixed count of independent binary
choices. It is an expectation from the male mean, the female mean would give about 34.6, and once the
starting homolog and breakpoints are fixed the parental origin alternates rather than being chosen
afresh. More decisively, breakpoints fall at variable positions, so the number of distinguishable
mosaic chromatids *exceeds* 2^47 rather than falling under it. The figure is now an illustration of
direction and is called neither a result nor a bound.

**Sister chromatids were treated as identical whole chromosomes.** They are identical only where no
recombination has intervened, which is why the two-case model works on a centromere-proximal marker
and not on any marker along the arm. The cases are now stated as they can be supported: a
first-division failure delivers both parental centromeric identities, a second-division failure
delivers one identity twice. Read as a claim about whole chromosomes the inference does not survive
recombination at all.

**An item testing epistemic restraint rewarded an overstatement.** Its keyed option said aneuploidy
"rises with maternal age", while the pack's own sources describe a U-shaped relation in oocytes and a
J-shaped one in conceptions: elevated at the youngest ages, lowest in the middle, rising again at the
oldest. The option now says higher at older ages than in the middle, and the steady-rise version is
the distractor.

**A retrospective association was said to locate a mechanism in time.** It cannot. The authors reason
from the meiosis-II association that at least one mechanism must act near conception, which is an
interpretation of an association and a reasonable one; no timing was measured.

**A clinical dichotomy was too clean.** Patch distribution was treated as deciding which division
erred. A meiotic abnormality can become mosaic through postzygotic rescue or a later mitotic error,
and an early embryonic mitotic error lands in many tissues rather than one crypt patch. Distribution
now supports constitutional against clonal, which is the useful distinction, and the narrower claim
that a crypt cell cannot have performed meiosis is what carries the argument.

Two smaller corrections: the glossary said gametes are the only cells meiosis produces and the only
job it does, when polar bodies are meiotic products and meiosis yields spermatids that differentiate
afterwards, so even in the sex where the count is four it does not hand over four finished gametes; and
"50 per cent recombination is defined as 50 cM" conflated recombination fraction with map distance, and
now states the genome-wide conversion the study actually used.
