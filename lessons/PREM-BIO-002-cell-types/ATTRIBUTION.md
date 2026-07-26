# Attribution and provenance

## Lesson identity

- Lesson: **PREM-BIO-002 — One membrane decides it: prokaryotic and eukaryotic cells in contact**
- Version: `0.1.0`
- Outcome: `topic-cell-biology-cell-types` / PREM-05.02
- Prerequisite: `topic-cell-biology-cell-theory-scale` / PREM-05.01
- Accountable principal: VSBDev (`github:VSBDev`)
- Course-content licence: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Original contribution

The lesson prose, the cylinder-and-sphere geometry and every factor derived from it, the crossing-time comparison, the criterion diagram and its three tiers, the surface-to-volume chart, the generations-per-renewal arithmetic, the twenty-seven-doublings estimate and its check against published culture times, the constructed deep-sea organism, the constructed engineered bacterium, the constructed gut organism, all tables, prompts, feedback, assessment items, rubrics, and glossary definitions were created for EmbeddedKnowledge and are contributed under CC BY 4.0 by the accountable principal.

## Assets

Three visuals appear in this pack: one third-party figure and two original artefacts.

- `assets/prokaryote-cell-labelled.png` is **third party**. It is *Average prokaryote cell* by Mariana Ruiz Villarreal (LadyofHats), released by its author into the public domain, from the [file page for `File:Average prokaryote cell- en.svg`](https://commons.wikimedia.org/wiki/File:Average_prokaryote_cell-_en.svg) on Wikimedia Commons. The licence was verified on the file's own Commons page rather than on any front page, search result, or mirror. That page carries the PD-self template with the wording: *This work has been released into the public domain by its author, LadyofHats. This applies worldwide. In some countries this may not be legally possible; if so: LadyofHats grants anyone the right to use this work for any purpose, without any conditions, unless such conditions are required by law.* The page's structured data records copyright status as *copyrighted, dedicated to the public domain by copyright holder* and copyright licence as *released into the public domain by the copyright holder*. The Source field reads *Own work* and the Author field names Mariana Ruiz Villarreal, LadyofHats. The hard rule about mirrors was checked and does not bite here: the file names no upstream artwork and no external creator site, so the Commons upload is the creator's own release venue and not a copy of something licensed elsewhere. The copy in this pack was rendered from the original SVG to a 1280 by 768 pixel PNG by the Wikimedia thumbnail service, with no change to the content; that rendering is the only modification and is declared in `lesson.json`. Rendering rather than embedding the SVG was necessary because the original uses SVG `switch` elements to carry 36 embedded translations, which the format's inert-SVG rules do not permit. The credit recorded in `lesson.json` is shown to the learner beside the image. Displayed attribution: Average prokaryote cell by Mariana Ruiz Villarreal (LadyofHats), released into the public domain.
- `diagrams/what-the-criterion-licenses.diagram.json` is **original work created for this lesson**. Its nodes, its three tiers of consequence, its edge labels, its alt text, and its long description were written here. It is declared in `originalAssets`.
- `charts/surface-to-volume.chart.json` is **original work created for this lesson**. Its fourteen points are the function three divided by the radius, computed here; the two markers, the axis labels, and the long description were written here. It is declared in `originalAssets`.

`File:Animal_cell_structure_en.svg` was also checked on its own Commons file page and carries the same PD-self release by the same author. It was not used. A fully labelled animal-cell diagram teaches the organelle inventory, which is lesson 03's outcome rather than this one's, and at the 20vh cap the guided reader applies to a figure its twenty labels would not be legible. The eukaryotic side of the contrast is carried here in prose and by the original diagram instead.

No Servier Medical Art asset was fetched, downloaded, or used in this pack. `smart.servier.com` was never contacted during this run.

No other image, media file, or dataset appears in the pack, and the lesson ships no third-party expression.

## Terminology continuity

The course terminology ledger was read before the glossary was designed. Thirteen of the fourteen entries introduce terms no published lesson currently owns: prokaryotic cell, eukaryotic cell, cell nucleus, nucleoid, cytoplasm, ribosome, plasmid, genome, compartmentalisation, surface-to-volume ratio, diffusion, generation time, and archaea. One declares an `alignment` block in `glossary.json`.

- **domain** — `distinct-sense` against PREM-QNT-007. PREM-QNT-005 and PREM-QNT-007 both use *domain* for the set of inputs on which an expression or function is defined. Biology uses the same word for the highest rank in classification, above kingdom, which is how it appears in the three-domain proposal this lesson cites. The two senses share nothing but the spelling, so the fourth scene names the collision in prose at the point where the taxonomic sense first appears and links back to the lesson that owns the mathematical sense.

Terms this lesson uses but does not redefine, because PREM-BIO-001 already owns them, are cell, tissue, epithelium, lumen, colonic crypt, stem cell, micrometre, and order of magnitude. Their meanings are carried forward unchanged.

## Source use and rights

Twenty-three sources support the factual claims. Every one was used for facts only, followed by an independent instructional structure and original expression; no source is quoted, adapted, redrawn, or reorganised anywhere in the pack, and no example, question, table, figure, or dataset is taken from any of them. Complete locators, use records, rights evidence, and dated agent-access checks appear in `references.json`.

- `source-cooper-origin-evolution-cells`, Cooper, *The Cell: A Molecular Approach*, chapter *The Origin and Evolution of Cells*: the structural criterion separating the two cell classes, the nucleoid described as not surrounded by a membrane in contrast to the eukaryotic nucleus, *E. coli* as a rod about 1 µm in diameter and about 2 µm long, bacterial DNA contents of about 0.6 to 5 million base pairs, approximately 30,000 ribosomes per cell, linear rather than circular eukaryotic DNA, and eukaryotic cell volumes frequently at least a thousandfold greater.
- `source-cooper-cell-cycle`, Cooper, same book, chapter *The Eukaryotic Cell Cycle*: human cells in culture dividing approximately every 24 hours, with mitosis and cytokinesis occupying about an hour.
- `source-elowitz-protein-mobility`, Elowitz, Surette, Wolf, Stock and Leibler: the apparent diffusion coefficient of GFP in living *E. coli* of 7.7 ± 2.5 µm² per second, and the order-of-100-millisecond crossing time over 1 µm that the authors derive from it.
- `source-braeckmans-line-frap`, Braeckmans and colleagues: a diffusion coefficient of 26 ± 3 µm² per second for GFP in the cytoplasm of cultured mammalian cells, used only to test how far the lesson's conclusion moves when the common-coefficient idealisation is dropped.
- `source-volkmer-ecoli-volume`, Volkmer and Heinemann: *E. coli* single-cell volumes of 1.5 to 4.4 femtolitres, lengths of 1.6 to 3.9 µm, and a condition-independent diameter of 1.26 ± 0.16 µm, used as an independent check on this pack's cylinder model and as the reason its modelled volume is labelled a lower bound.
- `source-irwin-doubling-time`, Irwin, Nguyen, Paoli and Chen: measured *E. coli* doubling times of 17 to 18 minutes in Luria-Bertani broth and 51 to 54 minutes in a defined minimal medium at 37 °C.
- `source-ecmdb-ecoli-genome`, Sajed and colleagues: the single circular *E. coli* K-12 chromosome of 4.639 million base pairs.
- `source-nurk-complete-human-genome`, Nurk and colleagues and the Telomere-to-Telomere Consortium: 3,054,815,472 base pairs of nuclear DNA across gapless assemblies of all 22 autosomes and chromosome X.
- `source-woodgate-coupling`, Woodgate and Zenkin: that transcription and translation are separated by a nuclear envelope in eukaryotes and share one compartment in bacteria, where a pioneering ribosome begins translating a transcript still being made.
- `source-shine-cotranscriptional`, Shine, Gordon, Schärfen, Zigackova, Herzel and Neugebauer: co-transcriptional processes in eukaryotes confined to the nucleus, the regulatory potential the nuclear envelope adds including processing and quality control before translation, and the qualification that tight coupling is not universal across prokaryotes or growth conditions.
- `source-zhu-intestinal-stem-cells`, Zhu, Hu and Xi: intestinal stem cells dividing about once every 24 hours, with epithelial turnover of 3 to 5 days.
- `source-nguyen-colonic-crypt`, Nguyen, Lausten and Boman: colonic epithelial renewal every 3 to 5 days and the crypt architecture this lesson assumes from PREM-BIO-001.
- `source-sender-cell-numbers`, Sender, Fuchs and Milo: about 3.8 × 10^13 bacteria and about 3.0 × 10^13 human cells for a 70 kg reference adult, with the colon holding the overwhelming majority of the bacteria.
- `source-ocallaghan-epithelium-bacteria`, O'Callaghan and Corr: a colonic microbial load of about 10^11 bacteria per millilitre of content, and the intestinal epithelium described as a single continuous layer acting as a semipermeable barrier.
- `source-li-cell-size`, Li, Rycaj, Chen and Tang: that the majority of animal cells are 10 to 20 µm in diameter.
- `source-woese-domains`, Woese, Kandler and Wheelis: the proposal of the three domains Archaea, Bacteria and Eucarya, and the statement that neither the five-kingdom taxonomy nor the eukaryote–prokaryote dichotomy reflects the primary tripartite division.
- `source-spang-asgard`, Spang, Eme, Saw, Caceres, Zaremba-Niedzwiedzka, Lombard, Guy and Ettema: Asgard archaea as the prokaryotic lineages most closely related to eukaryotes, with eukaryotes emerging from within archaeal diversity.
- `source-maccready-carboxysome`, MacCready and Vecchiarelli: that bacteria possess organelles, naming the anammoxosome, magnetosome, chromatophore and chlorosome, and the carboxysome's selectively permeable protein shell.
- `source-ionescu-giant-bacteria`, Ionescu, Volland, Contarini and Gros: *Candidatus* Thiomargarita magnifica at a maximal 2 cm in length and 50 µm across, with one or more chromosomes in membrane-bound organelles termed pepins.
- `source-mcmurray-mycobacteria`, McMurray, *Medical Microbiology*, chapter *Mycobacteria and Nocardia*: *M. tuberculosis* doubling times of 18 to 24 hours on enriched media and identifiable colonies on solid media taking 4 to 6 weeks.
- `source-ghodbane-culture-time`, Ghodbane, Raoult and Drancourt: that with current tools a primary mycobacterial culture is obtained in two to four weeks on average, with susceptibility testing a further two to four weeks. Cited so that a 1996 figure is not presented as current practice.
- `source-bottger-ribosomal-antibiotics`, Böttger, Springer, Prammananan, Kidan and Sander: eukaryotic cytoplasmic ribosomes insensitive to macrolides, lincosamides, streptomycin and 2-deoxystreptamines while bacterial ribosomes are sensitive, selectivity often turning on a single nucleotide or amino acid, and the authors' proposal that in-vivo toxicity most likely follows from mitochondrial ribosome susceptibility.
- `source-spigaglia-cdi`, Spigaglia: antibiotic perturbation of the gut microbiota permitting *Clostridioides difficile* spore germination and colonisation, TcdA and TcdB inactivating Rho-family proteins with loss of tight junctions and increased epithelial permeability, and presentations up to pseudomembranous colitis and toxic megacolon.

Several of these sources carry NonCommercial or NoDerivatives terms, and several others retain publisher copyright or appear as publisher-terms manuscripts. None supplies any expression, figure, table, dataset, or example to this pack; all are used strictly as evidence for facts, which is the default basis recorded in `references.json` for every source here.

Before substantive source access on 2026-07-26, this run consulted `site/agent/source-access-ledger.json`. Peer-reviewed sources were read through the `pmc.ncbi.nlm.nih.gov/articles/` route, which the ledger records as allowed because that host's robots file carries `Allow: /articles/` with no AI or LLM crawler restriction. The three textbook chapters were read through NCBI Bookshelf's `/books/NBK` route; the NCBI robots file was re-read on 2026-07-26 and disallows the legacy `/pmc/articles/` path but not `/books/`. No login, paywall, rate limit, robots rule, or access control was bypassed for any source, and no source recorded as `human-only` or `excluded` was opened.

The figure was licensed from `commons.wikimedia.org`, recorded in the ledger as restricted to the CC0 and public-domain seam, and the rendered PNG was fetched from `upload.wikimedia.org` only after the licence had been read on the corresponding Commons file page, which is the order that ledger entry requires.

## Agent provenance

Material agent assistance was used and is disclosed in `lesson.json`. The run ID is `author-PREM-BIO-002-8BDF09DB-992E-47E4-93D9-5BBD15BD116E`. The agent system, provider, model, and version are recorded as the literal `RUNTIME-STAMPED` and are stamped by the operator before review. The recorded instruction digest is the SHA-256 of the exact disclosed UTF-8 material task payload, including the mid-run operator correction about illustration sourcing and the payload's final newline; it does not cover hidden provider or system instructions, which cannot be exported.

No review or adjudication artifact was produced by this run. Claims remain `pending-review` and lesson source confidence remains `pending-review`, as an authoring candidate requires.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with one blocking finding, three major, three minor and
one verification note; the learning-design review approved with five notes. All seven actionable
findings were repaired in one finalization pass and none was declined.

**The blocking finding was right, and it was the lesson arguing with itself.** Scene 4 already taught
the correct position: a criterion stated as a bright line met an organism sitting on the line, and
what settled the organism was ancestry rather than counting membranes. The objective, the scene 1
definition, the diagram, the glossary and four answer keys had never caught up with it. They asked the
learner to classify *any* cell from DNA location alone, which is the exact habit scene 4 spends a page
dismantling, and which has no answer for a bacterium whose chromosomes sit inside pepins.

The repair does not weaken the test, because the test is the right place for a learner to start. It
states its standing. It is the working criterion, it is how the two words get applied to almost every
cell you will meet, and it describes construction rather than deciding membership. The objective now
requires the learner to say what the test does not settle. The glossary entries for both cell types
say that ancestry decides the group. The diagram gained a branch off the test itself for what the test
does not settle at all.

Two consequences of that finding needed separate work. The claim that transcription and translation
are separated is true of nuclear genes and not of mitochondrial ones, which are transcribed and
translated in the same compartment inside a eukaryotic cell; scene 3, the diagram and the sort item now
say so. And the lesson had three tiers where it needed four. Transcript processing and quality control
are *made possible* by the separation, not caused by it — a membrane inspects nothing, and each step
needs machinery the envelope does not supply. Scene 3 now names that tier where it first earns it,
scene 4's sorting rule has four entries, the diagram has a made-possible branch, and the sort item's
discriminating option tests it.

The three majors were all in answer keys.

- **A tier error inside the item that teaches tiers.** The sort item's key scored transcript
  processing and quality control as following directly. The lesson's own `claim-nucleus-regulatory-layer`
  scopes them as regulatory *potential*. The option now states the direct consequence, that a nuclear
  transcript cannot be read until it has crossed, and a new option carries the quality-control claim as
  the option a learner should leave unselected.
- **False precision on a diffusion time.** Inverting the mean-squared-displacement relation gives the
  characteristic time at which typical displacement reaches a distance, not the latency for a protein
  to cross a cell. The cited source supports an order of magnitude. The prompt now says characteristic
  time and says what it is not, the tolerance is loosened from 0.8 to 1.5 seconds, and the key states
  that diffusion has no arrival time.
- **A ploidy error and an unsupported causal chain.** The key used 3,054,815,472 base pairs, one
  haploid telomere-to-telomere assembly, as the amount a human cell copies. A diploid cell copies
  roughly six billion across 46 chromosome copies, so the key had halved the work it was asking the
  learner to explain. It also attributed genome size, linear chromosomes, open mitosis and cycle
  duration to the nuclear envelope, none of which the criterion entails — bacteria organise and
  segregate chromosomes too, and eukaryotic lineages differ in mitotic architecture. The key now says
  these features travel together in the two cells being compared rather than being produced by the
  criterion, which is the same tier discipline the rest of the lesson teaches, applied to itself.

The three minors: scene 1 asserted functions for the capsule, plasmids, pili and the flagellum that no
claim in this pack establishes, so those are now labels with the gap stated; the mycobacterial culture
claim called a 2014 study "current tools" and said a two-week negative means almost nothing, and now
says what that study reported, that molecular testing leads initial diagnosis while culture stays slow,
and that how weak an interim negative is depends on specimen, burden and system; and the mitochondrial
ribosome key presented one medium-confidence 2001 proposal as the reason such drugs are toxic at all,
and now carries it at the strength it was offered.

The academic reviewer also independently recalculated the scene 2 geometry and all fourteen chart
points and confirmed them. That is recorded as verified rather than as a change.
