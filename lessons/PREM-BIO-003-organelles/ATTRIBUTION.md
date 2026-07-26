# Attribution and provenance

## Lesson identity

- Lesson: **PREM-BIO-003 — Why a cell pays to keep its chemistry apart**
- Version: `0.1.0`
- Outcome: `topic-cell-biology-organelles` / PREM-05.03
- Prerequisite: `topic-cell-biology-cell-types` / PREM-05.02
- Accountable principal: VSBDev (`github:VSBDev`)
- Course-content licence: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Original contribution

The lesson prose, the organising argument of three purchases and a standing bill, the proton-ratio
worked example and every number derived in it, the pH table as it is set out and interpreted here,
the room analogy and the point at which it is retired, the misconception sequence and its
discriminating prediction, the three practice passes, the invented infant in the clinical wrap-up,
the invented laboratory interventions in the assessment, all prompts, feedback, assessment items,
rubrics, and glossary definitions were created for EmbeddedKnowledge and are contributed under
CC BY 4.0 by the accountable principal.

## Assets

Two figures appear in this pack, one of each kind.

- `assets/animal-cell-structure.png` is **third party**. It is a labelled cutaway of a generic
  animal cell by LadyofHats (Mariana Ruiz), released by its author into the public domain, at the
  [file page for `File:Animal_cell_structure_en.svg`](https://commons.wikimedia.org/wiki/File:Animal_cell_structure_en.svg).
  The licence was verified on the file's own Commons page, which carries the PD-self template
  worded "This work has been released into the public domain by its author, LadyofHats. This applies
  worldwide", records the copyright status as dedicated to the public domain by the copyright holder,
  and gives the source as own work using Adobe Illustrator. The Commons API returns Public domain for
  both LicenseShortName and UsageTerms, Copyrighted false, and the same author. The page names no
  upstream artwork creator with a site of its own, so the rule against sourcing another creator's art
  through Commons does not bite here. The copy in this pack was rendered from the original SVG to PNG
  at 1280 pixels wide by the Wikimedia thumbnail service, with no change to the content; that
  rendering is the only modification and is declared in `lesson.json`. The credit recorded there is
  shown to the learner beside the image. Displayed attribution: Animal cell structure by LadyofHats
  (Mariana Ruiz), released into the public domain.
- `diagrams/route-to-the-surface.diagram.json` is **original work created for this lesson**. Its
  eight nodes, seven edges, pH annotations, alt text and long description were written here from the
  mechanisms this pack's own sources establish. It is declared in `originalAssets`. No third-party
  figure was copied, adapted, or redrawn to produce it.

The two figures do different jobs, and the first scene says so. The third-party drawing is a
reference that lets a learner attach names to places once; it is a generic animal cell with a
flagellum and no apical or basolateral asymmetry, so the scene states plainly that it is not the
lesson's case cell and that the argument is not organised around it. The route diagram is the figure
that does the teaching, and it is ours.

The Servier Medical Art library on `smart.servier.com` was considered and rejected. Its images are
genuinely CC BY 4.0, but section 3 of its terms of use requires a user not to use automated methods
to access or download site content, and an authoring agent is an automated method; a licence does
not override an access restriction. Nothing was fetched from that host for this pack and no Servier
asset appears in it. `site/agent/source-access-ledger.json` has been corrected from `allowed` to
`excluded` for that domain so the next author inherits the finding. Two further findings recorded
there: the component images are icon-sized and there is no standalone whole-cell item in the library.

## Terminology continuity

The course terminology ledger was read before the glossary was designed. All nineteen entries
introduce terms no published lesson currently owns: compartment, organelle, compartmentalisation,
cytosol, colonocyte, apical surface, basolateral surface, brush border, lysosome, acid hydrolase,
peroxisome, endoplasmic reticulum, Golgi apparatus, signal sequence, protein targeting, transport
vesicle, mitochondrion, proton gradient, and butyrate. No entry declares an `alignment` block,
because none of these words is defined by an earlier lesson in either course.

Terms this lesson uses without redefining, because PREM-BIO-001 owns them, are *cell*, *tissue*,
*epithelium*, *lumen*, *colonic crypt*, *stem cell*, *emergent property* and *biological
organisation*. The first scene cross-references the emergence definition and its two-part test
instead of restating them, and the `compartmentalisation` entry names that relationship explicitly.

The word *membrane* is deliberately left undefined here. Membrane structure and fluidity is a
separate outcome in this module, and this lesson treats a membrane only as a boundary capable of
holding a difference, saying so in the first scene and handing the question on in the last.

## Source use and rights

Twelve sources support the factual claims. Every one was used for facts only, followed by an
independent instructional structure and original expression; no source is quoted, adapted, redrawn,
or reorganised anywhere in the pack, and no example, question, table, figure, or dataset is taken
from any of them. Complete locators, use records, rights evidence, and dated agent-access checks
appear in `references.json`.

- `source-nguyen-colonic-crypt`, Nguyen, Lausten and Boman, *The Colonic Crypt* (Cells, 2025,
  CC BY 4.0): that colonocytes are polarised with a distinct basolateral end and an apical membrane
  carrying microvilli that increase surface area and aid water absorption, and that enterocytes are
  replaced every four to five days while some enteroendocrine cells persist far longer.
- `source-schneeberger-mvid`, Schneeberger, Roth, Nieuwenhuis and Middendorp (Disease Models &
  Mechanisms, 2018): the apical and basolateral domains and what each is for, the roughly one
  thousand microvilli forming the brush border of a mature enterocyte, and the cause, trafficking
  mechanism, biopsy findings and neonatal presentation of microvillus inclusion disease.
- `source-alberts-compartmentalization`, Alberts and colleagues, *Molecular Biology of the Cell*,
  chapter on the compartmentalisation of cells: that membrane-enclosed compartments occupy nearly
  half a cell's volume, that each organelle holds a distinct protein set, that the nucleus is the
  principal site of DNA and RNA synthesis, that sorting signals are carried in a protein's own
  amino-acid sequence, and that oxidative phosphorylation requires a membrane to couple proton
  transport to ATP synthesis.
- `source-alberts-er-golgi`, same work, chapter on transport from the ER through the Golgi: the
  successive modification of proteins along a fixed series of compartments, and the trans-Golgi
  network as the station that packages cargo into vesicles and dispatches it by destination.
- `source-alberts-tgn-lysosomes`, same work, chapter on transport from the trans-Golgi network to
  lysosomes: the acid-hydrolase requirement, the lysosomal interior near pH 5.0, the double
  protection of the cytosol at pH 7.2, the mannose 6-phosphate tag and its receptors, and what
  lysosomes are observed to digest.
- `source-banerjee-organelle-ph`, Banerjee and Kane (Frontiers in Cell and Developmental Biology,
  2020, CC BY): the pH values of the cytosol, nucleus, endoplasmic reticulum, Golgi, endosomes,
  secretory granules and lysosome, and that the V-ATPase hydrolyses cytosolic ATP to drive protons
  into an organelle lumen.
- `source-feng-lysosome-hydrolases`, Feng, Liu and Xu (The Journal of Cell Biology, 2023): the
  lysosomal lumen at pH 4.5 to 5.0, the acid optima of its hydrolases, and the 500 to 1000-fold
  proton gradient across the lysosomal membrane held at the expense of ATP.
- `source-schrader-peroxisome`, Schrader and Fahimi (Histochemistry and Cell Biology, 2008): that
  peroxisomal beta-oxidation and other oxidases produce hydrogen peroxide, that catalase in the same
  organelle decomposes it, and that peroxisomes handle very-long-chain fatty acids.
- `source-sun-signal-sequences`, Sun, Li and Mariappan (The Journal of Cell Biology, 2022): that
  about thirty per cent of newly synthesised proteins enter the endoplasmic reticulum
  co-translationally, and the recognition, delivery and hand-off sequence through the signal
  recognition particle and its receptor to the Sec61 translocon.
- `source-xu-atp-synthase`, Xu, Pagadala and Mueller (Microbial Cell, 2015, CC BY): that the
  electron transport chain creates a proton potential across the mitochondrial membrane whose return
  flow drives ATP synthesis, and that chemical uncouplers dissipate that potential so respiration
  proceeds without ATP synthesis.
- `source-gasaly-butyrate`, Gasaly, Hermoso and Gotteland (International Journal of Molecular
  Sciences, 2021, CC BY): that butyrate oxidation supplies seventy to eighty per cent of a mature
  colonocyte's energy, that it runs through mitochondrial oxidative phosphorylation, and that the
  butyrate is made by resident bacteria.
- `source-litvak-colonocyte-metabolism`, Litvak, Byndloss and Bäumler (Science, 2018): that mature
  colonocytes consume oxygen heavily through mitochondrial oxidation, giving an oxygen partial
  pressure below 7.6 mmHg at the epithelium.

Several of these sources retain publisher copyright, and two carry NonCommercial and ShareAlike
terms which this project does not accept as a reuse basis. One is displayed under CC BY 3.0, a
version outside the accepted set. None supplies any expression, figure, table, dataset, or example
to this pack; all are used strictly as evidence for facts, which is the basis recorded for every
source in `references.json`.

Before substantive source access on 2026-07-26, the accountable run consulted
`site/agent/source-access-ledger.json`. Every source was read either through the
`pmc.ncbi.nlm.nih.gov/articles/` route, which the ledger records as allowed on the basis that its
robots file carries `Allow: /articles/` with no AI or LLM crawler restriction, or through the NCBI
Bookshelf `/books/NBK` route on `www.ncbi.nlm.nih.gov`, which the ledger records as permitted while
the legacy `/pmc/articles` route on the same host is not. Both entries were checked on 2026-07-25
and sit inside the ledger's ninety-day recheck window. No login, paywall, rate limit, or access
control was bypassed for any source, and no new domain required an entry in the ledger.

## Agent assistance disclosure

- System: `RUNTIME-STAMPED`
- Provider: `RUNTIME-STAMPED`
- Model: `RUNTIME-STAMPED`
- Version: `RUNTIME-STAMPED`
- Author run ID: `author-PREM-BIO-003-CABC592B-3985-448D-A0B2-6E8253DF2544`
- Material-instructions digest: `sha256:7063c9ca91ad3dc4a82c4902d1bcdbceadc071dbe6989991d5aa8a5dca4ce171`

VSBDev, the accountable principal, is verified as `github:VSBDev`. The system, provider, model, and
version fields carry the operator-stamped literal `RUNTIME-STAMPED` and are stamped by the operator
before review. The digest covers the exact UTF-8 material task payload supplied to this authoring
run, including its final newline. It excludes hidden provider and system instructions that cannot be
exported. VSBDev remains accountable for the contribution and attests the disclosed provenance.

## Boundaries and exceptions

Every learner task has a text-first path. The route diagram carries a long description stating every
node, every step, the pH of each compartment and all three destinations in the order the argument
uses them, and the surrounding prose walks the same route in sentences, so no task depends on seeing
it. The cell drawing carries a long description naming every labelled structure and stating the
conclusion the figure exists to support, so a reader who never sees it loses nothing the lesson
needs. The pH landscape is a table of text and its two load-bearing values appear in the prose as
well.
All arithmetic is written out in symbols and in words together. Nothing in the pack encodes meaning
by colour, position, animation, hover, pointer gesture or timing, and no task requires dragging.

The clinical material is illustrative. The infant in the seventh scene is invented, and so are the
laboratory group and the two interventions in the final assessment item. The condition described in
the wrap-up is real and its features are cited to published review, but the pack states no
diagnostic criterion, threshold, test performance, frequency, prognosis, or management step, and it
takes no position on what any finding would mean in any real specimen or person. The wrap-up carries
an explicit teaching-example boundary. Nothing in the pack is medical advice. The three claims about
that condition are recorded as `health-sensitive` in `claims.json`.

The uncoupler named in the fifth scene appears only as a laboratory demonstration that a dissipated
proton potential stops ATP synthesis. Nothing in the pack concerns its use, dose, exposure or effect
in people, and no such statement is made or implied.

There is one licence exception to the CC BY 4.0 contribution grant: the third-party figure recorded
above, which is in the public domain and therefore redistributable within this corpus without
further condition. The pack contains no other third-party expression, media, or dataset.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with six major and three minor findings; the
learning-design review approved with four notes. All were repaired in one finalization pass and none
was declined.

- **A consistency check was described as an independent measurement.** The 500 to 1000-fold figure
  the literature quotes is itself derived from pH values, so comparing it with the lesson's own
  subtraction confirms the arithmetic and not the inputs. The scene now says exactly that, and the
  claim ledger was reconciled with it. The check is kept, because it still catches a wrong exponent.
- **An answer key inferred maintenance cost from pH.** A concentration ratio gives thermodynamic work
  per proton; the power a cell spends holding a compartment also depends on leakiness, membrane area,
  membrane potential and pump regulation, none of which the stem supplies. The key now credits the
  two ratios and the statement that relative ATP use cannot be inferred from pH alone.
- **Acidity was made the sole switch for lysosomal hydrolases.** Many are made as inactive precursors
  and cleaved on the way, and some need cofactors. Containment and activation are tightly coupled
  rather than the same act, and pH is the condition this scene can demonstrate arithmetically rather
  than the whole mechanism.
- **The peroxisome was described as preventing all escape.** Hydrogen peroxide crosses membranes and
  is used deliberately as a signal elsewhere. Colocalising catalase with the oxidases limits how much
  accumulates and how far the cell is exposed; the unsourced distance claim is gone and segregation is
  now presented as a matter of degree.
- **"Bacteria pay none of these costs and buy none of these things" was false.** Bacteria build
  membranes, run a proton-motive force and make ATP from it, localise proteins, and some carry
  genuine internal compartments including the carboxysome and the chromosome compartments of the
  two-centimetre bacterium from the previous lesson. What most lack is the eukaryotic endomembrane
  system, and that is what the comparison now says.
- **The clinical picture was attributed to lost surface area alone.** The review the case rests on
  states that reduced surface area does not fully account for the fluid loss. The scene now
  distinguishes apical transporters that fail to arrive from secretory routes that are less affected,
  says the balance between absorption and secretion is disturbed as well as the surface reduced, and
  notes that the contribution varies by genotype and model. That is a better fit for a scene about
  delivery: a sorting failure removes what depended on the broken route, not function evenly.
- Three minor corrections: translation is stated for nucleus-encoded proteins with the thirteen
  mitochondrially encoded exceptions named, in the prose and in the diagram; *microvillus* and
  *microvilli* are no longer aliases of *brush border*, since one projection is not the array; and the
  proton-gradient entry now separates the concentration gradient, the membrane potential, and the
  proton-motive force, and says the lesson computes only the first.
