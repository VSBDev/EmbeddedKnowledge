# Attribution and provenance

## Lesson identity

- Lesson: **PREM-BIO-004 — Held together by water: membrane structure and fluidity**
- Version: `0.1.0`
- Outcome: `topic-cell-biology-membrane-structure` / PREM-05.04
- Outcome statement, exactly as the graph records it: *Predict how lipids, proteins, cholesterol, and temperature alter membrane behavior.*
- Graph prerequisite declared: `topic-biomolecules-lipids` / PREM-09.05, *Lipids and membranes*. That is the ID the graph carries for the outcome coded PREM-09.05; the pack declares the graph's ID rather than a longer descriptive form of it.
- Accountable principal: VSBDev (`github:VSBDev`)
- Course-content licence: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Original contribution

The lesson prose, the two-faces diagram, the unit conversion and diffusion arithmetic, the crossing-time worked example and its recomputation at the slower in-cell coefficient, the order-of-magnitude comparison between lateral and transbilayer movement, the dial table, the two-organism prediction task, the disrupted-monolayer prediction task, the experimental-antifungal case in the assessment, all prompts, feedback, assessment items, rubrics, and glossary definitions were created for EmbeddedKnowledge and are contributed under CC BY 4.0 by the accountable principal.

## Assets

Two figures appear in this pack.

- `assets/cell-membrane-components.svg` is **third party**. It is the labelled cell membrane diagram by Mariana Ruiz, who publishes on Wikimedia Commons as LadyofHats, at the [file page for `File:Cell membrane detailed diagram en.svg`](https://commons.wikimedia.org/wiki/File:Cell_membrane_detailed_diagram_en.svg). The licence was verified on the file's own page, which states that the work has been released into the public domain by its author and that anyone may use it for any purpose without conditions unless conditions are required by law. The source field records own work and the page names no upstream creator or organisation, so this is not a case of a third party's art mirrored onto Commons. The Commons API returns the same result for the same file: licence short name *Public domain*, usage terms *Public domain*, copyrighted *False*, attribution required *false*, artist *Mariana Ruiz*, credit *Own work*. The file is 877 by 361 pixels, an aspect ratio near 2.4 to 1, which sits inside the landscape band this project prefers for a guided frame; aspect ratio was checked before the licence, as the illustration rules direct. Three modifications were made and are declared in `lesson.json`: the XML prolog and generator comment were removed, the DOCTYPE was removed, and `title` and `desc` accessibility elements were added. The artwork itself is unchanged. The file was scanned before use and contains no script, style, use, image, foreignObject, href, external reference, or data URI. Displayed attribution: Cell membrane detailed diagram by Mariana Ruiz (LadyofHats), released into the public domain.
- `diagrams/enterocyte-two-faces.diagram.json` is **original work created for this lesson**. Its nodes, its edges, its alt text, and its long description were written here from the numbers this pack's own sources supply. It is declared in `originalAssets`.

The third-party figure has one visible flaw worth recording: its label reads *Peripherial protein*, which is a spelling slip for *peripheral*. The prose spells the term correctly and the figure's long description uses the correct spelling. Nothing else on the figure is wrong, and correcting the label would mean redrawing artwork this pack has no reason to redraw.

That figure also draws the same lipid on both leaflets, which is a limit of what a static inventory diagram can show. The lesson names that limit where the figure appears and again in the fourth scene, where leaflet asymmetry is taught. The two-faces diagram exists because no correctly licensed third-party figure this pack found makes the apical-against-basolateral argument the fifth scene needs.

No Servier Medical Art asset appears in this pack, and no request was made to `smart.servier.com` during this authoring run.

No other image, media file, or dataset appears in the pack, and the lesson ships no third-party expression.

## Terminology continuity

The course terminology ledger was read before the glossary was designed. Every one of the twenty-two entries introduces a term no published lesson currently owns, so no `alignment` block was required. The ledger matches on the term string, and the entries closest to an existing one are checked below.

- **liquid-ordered domain** does not collide with *domain*, which PREM-QNT-005 and PREM-QNT-007 own in a mathematical sense. The alias *ordered domain* is used rather than the bare word, so no ledger match arises and no mathematical sense is displaced.
- **membrane fluidity** and **lateral diffusion** are new to the corpus. The glossary states plainly that *fluidity* is used qualitatively here and that the measurable quantities behind it are viscosity and chain order.
- **membrane** arrives loaded from everyday English, which the block brief flags. The collision is named once in the first scene, where the ordinary sense of a thin separating sheet is kept and the three things the biological sense adds are stated.
- **cell**, **tissue**, **epithelium** and **stem cell** are owned by PREM-BIO-001 and are used here in that lesson's sense without being redefined, so they carry no glossary entry in this pack.

## Source use and rights

Fifteen sources support the factual claims. Every one was used for facts only, followed by an independent instructional structure and original expression; no source is quoted, adapted, redrawn, or reorganised anywhere in the pack, and no example, question, table, figure, or dataset is taken from any of them. Complete locators, use records, rights evidence, and dated agent-access checks appear in `references.json`.

- `source-alberts-lipid-bilayer`, Alberts and colleagues, *Molecular Biology of the Cell*, chapter on the lipid bilayer: water-driven assembly and the free-energy cost of ordering water around a hydrophobic molecule; the impossibility of a free edge and the spontaneous closure of a tear; about 5 × 10^6 lipid molecules per square micrometre and about 10^9 in a small animal cell's plasma membrane; the two-dimensional-fluid description; exchange with a neighbour about 10^7 times per second, a lateral diffusion coefficient near 10^-8 cm²/s, and about 2 µm per second; flip-flop less than once a month in synthetic bilayers; the phase transition and its lowering by short chains and cis double bonds; cholesterol's two effects and its reduction of permeability to small water-soluble molecules; the leaflet distribution of the phospholipid classes.
- `source-alberts-membrane-proteins`, the same textbook's chapter on membrane proteins: protein at about 50 per cent of a typical plasma membrane's mass, below 25 per cent in myelin and about 75 per cent in ATP-producing membranes; the distinction between proteins embedded in the bilayer and peripheral proteins releasable by gentle extraction; rotation and lateral diffusion of membrane proteins without flip-flop, and the mouse-and-human heterokaryon in which the two sets of surface proteins mixed across the whole surface within about half an hour; confinement of particular plasma-membrane enzymes and transporters to the apical or to the basal and lateral surfaces, attributed at least in part to tight junctions.
- `source-bickerton-bilayer-thickness`, Bickerton, Johnson, Kerckhoffs and Langton: overall membrane thickness of about 5 to 5.5 nm including the head groups, with a hydrophobic interior of about 3 to 3.5 nm. This is the source behind the block's canonical 5 nm figure as used here.
- `source-bernardino-plasma-membrane`, Bernardino de la Serna, Schütz, Eggeling and Cebecauer: sterols up to 40 per cent of plasma-membrane lipid and hundreds to thousands of phospholipid species; lipid tracers diffusing about four times faster in model membranes than in living-cell plasma membranes; the 1971 to 1972 date of the fluid mosaic model and 1960s evidence of membrane heterogeneity.
- `source-galbraith-resolution-limit`, Galbraith and Galbraith: the roughly 250 nm lateral resolution limit of conventional light microscopy. PREM-BIO-001 established the same figure from the same source; it was re-verified for this pack.
- `source-segawa-flippases`, Segawa, Suzuki and Nagata: the leaflet distribution of the phospholipid classes; ATP-dependent flippases and ATP-independent scramblases; a half-time of several days for an established asymmetry to decay without enzymatic help; phosphatidylserine exposure promoting clotting on activated platelets and acting as an eat-me signal on apoptotic cells.
- `source-hankins-flippases`, Hankins, Baldridge, Xu and Graham: the three-family scheme of P4-ATPase flippases, ABC-transporter floppases and ATP-independent scramblases, their directions, and the restriction of phosphatidylserine, phosphatidylethanolamine and the phosphoinositides to the cytosolic leaflet.
- `source-hoogerland-homeoviscous`, Hoogerland, van den Berg, Suo and colleagues: the definition of homeoviscous adaptation; the compositional strategies of unsaturation, branching and chain length; the broad conservation of the trait; and the growth defect and rescue of an *Escherichia coli* strain unable to make the required lipid. The lesson presents that experiment as bacterial.
- `source-vanmeer-tight-junction`, van Meer and Simons: the liposome-fusion experiment in a polarised kidney monolayer, both conditions, both results, and the conclusion that the tight junction is a diffusion barrier in the exoplasmic leaflet and not in the cytoplasmic one.
- `source-danielsen-brush-border`, Danielsen and Hansen: brush border glycolipids exceeding 30 per cent in pig against about 5 per cent in typical cell membranes; liquid-ordered domains formed by glycolipids with cholesterol and sphingomyelin in the outer leaflet; and the stability that organisation gives against bile salts, pancreatic digestive enzymes and pathogens in the lumen.
- `source-brown-microvillar`, Brown and McKnight: microvilli about 1 µm long with a radius of about 50 nm, thousands per brush border, and a roughly 30-fold increase in apical surface area.
- `source-mitra-bilayer-thickness`, Mitra, Ubarretxena-Belandia, Taguchi, Warren and Engelman: phosphate-to-phosphate bilayer thicknesses of 42.5 Å apical, 35.6 Å basolateral, 39.5 Å Golgi and 37.5 Å endoplasmic reticulum in rat liver membranes, with protein rather than cholesterol accounting for the modulation. The lesson states that these are hepatocyte measurements.
- `source-schneeberger-polarity`, Schneeberger, Roth, Nieuwenhuis and Middendorp: apical and basolateral membranes as biochemically and functionally distinct domains with different protein and lipid compositions; what each faces and does; and the position of the tight junction between them.
- `source-carolus-amphotericin`, Carolus, Pierson, Lagrou and Van Dijck: the drug's interaction with ergosterol; the pore and sterol-sponge accounts; the three binding interactions and the attachment point absent with cholesterol; the sterol-to-phospholipid ratio basis of selectivity; the tenfold affinity preference alongside continuing non-selective disruption of mammalian membranes; the described contributions to kidney toxicity and to infusion reactions; the toxicity difference between formulations; and resistance through altered fungal sterol composition.
- `source-nguyen-colonic-crypt`, Nguyen, Lausten and Boman: the crypt context carried forward from PREM-BIO-001, including upward migration with differentiation, replacement of absorptive cells every four to five days, and the barrier role of the epithelium.

Several of these sources retain publisher copyright and one is a public-access author manuscript. None supplies any expression, figure, table, dataset, or example to this pack; all are used strictly as evidence for facts, which is the basis recorded in `references.json` for every source here.

Before substantive source access on 2026-07-26, the accountable run consulted `site/agent/source-access-ledger.json`. Twelve sources were read through the `pmc.ncbi.nlm.nih.gov/articles/` route, which the ledger records as allowed on the basis of an explicit `Allow: /articles/` in its robots file. Two textbook chapters were read through the `www.ncbi.nlm.nih.gov/books/NBK` route after re-reading NCBI's robots file on 2026-07-26; its wildcard user-agent block disallows `/pmc/articles/` and the `/books/?term=` search route but not the chapter route used here, and sets no AI or LLM crawler rule. The illustration's licence was checked on `commons.wikimedia.org`, which the ledger records as restricted and usable for its public-domain and CC0 seam, and the file itself was fetched from `upload.wikimedia.org` after that check, in the order the ledger requires. No login, paywall, rate limit, or access control was bypassed for any source or asset.

One domain was checked for the first time during this run and appended to the ledger. `pubmed.ncbi.nlm.nih.gov` serves a robots file whose wildcard block sets a one-second crawl delay and disallows the API, export, citation, similar-article, search and collection routes while leaving the article-record path open, with no AI or LLM crawler rule. No source in this pack ultimately needed that route, and the finding is recorded so the next author inherits it.

## Agent assistance disclosure

- System: `RUNTIME-STAMPED`
- Provider: `RUNTIME-STAMPED`
- Model: `RUNTIME-STAMPED`
- Version: `RUNTIME-STAMPED`
- Author run ID: `author-PREM-BIO-004-83C5781A-9000-4794-8F9B-998998A62257`
- Material-instructions digest: `sha256:eb5301a45bd0d2c2154cc935718c2687afe333beb376f43c7176cc9e4bb779a1`

VSBDev, the accountable principal, is verified as `github:VSBDev`. The system, provider, model, and version fields carry the operator-stamped literal `RUNTIME-STAMPED` and are stamped by the operator before review. The digest covers the exact UTF-8 material task payload supplied to this authoring run, including its final newline. It excludes hidden provider and system instructions that cannot be exported, and it excludes a mid-run operator instruction restricting the illustration source, which arrived after the payload was fixed and which this pack already complied with. VSBDev remains accountable for the contribution and attests the disclosed provenance.

## Boundaries and exceptions

Every learner task has a text-first path. Both figures carry long descriptions that state their content and the conclusion drawn from them, and no task in the lesson depends on seeing either. The two displayed relations are each restated in words beside the symbols. All tables are original semantic text and every direction they record is also given in the surrounding prose.

The clinical material is illustrative. The seventh scene works through a real medicine's published mechanism as a membrane-composition exercise and carries an explicit teaching-example boundary. It states no dose, indication, contraindication, threshold, regimen, duration, monitoring plan, or recommendation, and describes no patient. The experimental antifungal in the assessment is invented for the exercise, its thirtyfold binding preference is stipulated rather than measured, and the item's prompt and rubric both exclude clinical advice. Nothing in the pack is medical advice.

Two figures in this pack are carried at scopes narrower than the running case, and both are labelled where they are used. The brush border composition figures come from small-intestinal epithelium and in part from pig; the bilayer thickness measurements come from rat liver. The lesson states each restriction in the scene where the number appears and does not assert either for the human colonic absorptive cell.

The graph prerequisite `topic-biomolecules-lipids` has no published lesson. The first scene states that plainly, supplies the three definitions the rest of the lesson needs, and directs the learner to read the prerequisite lesson first once it exists. No lipid chemistry beyond those three definitions is assumed anywhere in the pack.

There are no licence exceptions to the CC BY 4.0 contribution grant beyond the single third-party asset recorded above, which is in the public domain and therefore redistributable within this corpus.
