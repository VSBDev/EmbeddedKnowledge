# Attribution and provenance

## Lesson identity

- Lesson: **PREM-BIO-001 — Five times too small to see: cell theory, scale, and emergence**
- Version: `0.1.0`
- Outcome: `topic-cell-biology-cell-theory-scale` / PREM-05.01
- Accountable principal: VSBDev (`github:VSBDev`)
- Course-content licence: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)

## Original contribution

The lesson prose, the scale ladder and every factor on it, the small-angle worked example and its numbers, the hand-lens task, the emergent-or-not classification set, the invented imaging protocol reviewed in the assessment, the invented patient and colonoscopy in the clinical wrap-up, all tables, prompts, feedback, assessment items, rubrics, and glossary definitions were created for EmbeddedKnowledge and are contributed under CC BY 4.0 by the accountable principal.

## Assets

Two figures appear in this pack.

- `assets/cork-bark-micrograph.jpg` is **third party**. It is an optical micrograph of cork bark by Giovanna Canu, Michela E. Pedretti, Lucia Conzatti and Eva Santini, published on Wikimedia Commons under the Creative Commons Attribution 4.0 International licence, at the [file page for `File:2. Portion of a cork bark under the optical microscope.tif`](https://commons.wikimedia.org/wiki/File:2._Portion_of_a_cork_bark_under_the_optical_microscope.tif). The licence was verified on the file's own Commons page, which carries the CC BY 4.0 template, names the four authors, and records the file as their own work; the Commons API returns the same licence for the same file. The copy in this pack was rendered from the original TIFF to PNG at 1280 pixels wide by the Wikimedia thumbnail service and then converted to JPEG, with no change to the content. That conversion is the only modification and is declared in `lesson.json`. The credit recorded there is shown to the learner beside the image. Displayed attribution: Cork bark under the optical microscope by Canu, Pedretti, Conzatti and Santini, CC BY 4.0.
- `diagrams/scale-ladder.diagram.json` is **original work created for this lesson**. Its five rungs, the factors on its edges, the alt text, and the long description were written here from the numbers this pack's own sources supply. It is declared in `originalAssets`.

No other image, media file, or dataset appears in the pack, and the lesson ships no third-party expression.

## Terminology continuity

The course terminology ledger was read before the glossary was designed. Twelve of the fourteen entries introduce terms no published lesson currently owns: cell, cell theory, resolution, magnification, micrometre, tissue, epithelium, lumen, colonic crypt, stem cell, emergent property, and biological organisation. Two declare an `alignment` block in `glossary.json`.

- **order of magnitude** — `adopt` from PREM-QNT-005, which owns the powers-and-orders-of-magnitude sense. The meaning is unchanged and the arithmetic is not re-taught. This lesson is where that arithmetic does its work, because every size, threshold, and count in cell biology is a band rather than a constant.
- **theory** — `adopt` from PREM-SCI-010. No prior published lesson holds a glossary entry for this word, so the block brief's ruling is recorded here as an adoption rather than as the resolution of a ledger collision, and the note in `glossary.json` says so plainly. What is adopted is the standard PREM-SCI-010 established for judging a scientific account: stated assumptions, a declared domain of use, and tests that could have failed. The fourth scene names the learner's everyday sense of the word and separates it from that standard in prose, because the phrase *cell theory* is in the lesson title and the everyday sense would invert its meaning.

## Source use and rights

Thirteen sources support the factual claims. Every one was used for facts only, followed by an independent instructional structure and original expression; no source is quoted, adapted, redrawn, or reorganised anywhere in the pack, and no example, question, table, figure, or dataset is taken from any of them. Complete locators, use records, rights evidence, and dated agent-access checks appear in `references.json`.

- `source-ashraf-eye-resolution`, Ashraf, Chapiro and Mantiuk, *Resolution limit of the eye*: the 1 minute of arc standard behind 20/20 vision, its equivalence to 60 pixels per degree, and the measured foveal limit near 94 pixels per degree. Converting that angle to a length at a stated viewing distance is this pack's own arithmetic and is presented as such.
- `source-li-cell-size`, Li, Rycaj, Chen and Tang: that the majority of animal cells are 10 to 20 µm in diameter.
- `source-hatton-cell-count`, Hatton and colleagues, *The human cell count and size distribution*: total body cell counts of about 36 trillion for an adult male and 28 trillion for an adult female, and the spread of human cell sizes over about seven orders of magnitude.
- `source-sender-cell-numbers`, Sender, Fuchs and Milo: 3.0 × 10^13 human cells and 3.8 × 10^13 bacteria for a 70 kg reference man, and 3.8 × 10^13 bacteria in the colon.
- `source-vanderwath-crypt-model`, van der Wath and colleagues: about 700 cells in a descending-colon crypt arranged 32 along the length and 22 around the perimeter, a mean cell radius of 5 µm, and replacement of the human intestinal epithelium every 3 to 5 days.
- `source-nguyen-colonic-crypt`, Nguyen, Lausten and Boman: the crypt base as the stem-cell niche, differentiation during upward migration, Wnt signalling decreasing up the crypt axis, renewal every 3 to 5 days with enterocytes replaced every 4 to 5, and the barrier and mucus roles of the epithelium.
- `source-baker-crypt-dynamics`, Baker and colleagues: the measured average migration speed of about 4 µm per hour in the lower half of the human colonic crypt, and evidence that quantitative colon research operates at crypt level.
- `source-galbraith-resolution-limit`, Galbraith and Galbraith: the roughly 250 nm lateral resolution limit of conventional light microscopy, and that enlarging past that limit separates nothing further.
- `source-seeman-dna`, Seeman: the DNA double helix at about 20 angstroms, that is 2 nm, across.
- `source-kutschera-leeuwenhoek`, Kutschera: publication of Hooke's *Micrographia* in 1665 and Hooke's definition there of the term *cell*.
- `source-peters-hooke`, Peters: Hooke's cork observations, his comparison of cork with a mushroom rather than with plant tissue, and his separate note that cells in plants were filled with fluid. This article exists to correct the popular retelling of the episode, and it is cited here to avoid repeating the version it corrects.
- `source-kettenmann-virchow`, Kettenmann: cell theory established in Berlin in 1838 and 1839 by Schleiden for plants and Schwann for animals, Virchow's *Cellularpathologie* of 1858, and the origin of histological diagnosis.
- `source-mullerwille-cell-theory`, Müller-Wille: the standard three-part statement of the tenets, including that cells arise from division of pre-existing cells, and the point that the propositions were refined over decades.

Two of these sources carry NonCommercial or NoDerivatives terms and two are publisher-terms author manuscripts. None of the four supplies any expression, figure, or data to this pack; all four are used strictly as evidence for facts, which is the default basis recorded in `references.json` for every source here.

Before substantive source access on 2026-07-25, the accountable run consulted `site/agent/source-access-ledger.json` and used the `pmc.ncbi.nlm.nih.gov/articles/` route, which the ledger records as allowed on the basis that its robots file carries `Allow: /articles/` with no AI or LLM crawler restriction. No login, paywall, rate limit, or access control was bypassed for any source.

Two domains were checked for the first time during this run and appended to the ledger. `book.bionumbers.org`, which hosts *Cell Biology by the Numbers* and is the obvious reference for order-of-magnitude cell quantities, serves a robots file that sets `Disallow: /` for `ClaudeBot` and for `anthropic-ai` among many other agents; it was therefore not opened, and every quantity it would have supplied was taken from primary literature on PMC instead. `bionumbers.hms.harvard.edu` serves no robots file, returning a 404 page through a Cloudflare-style edge, so its agent-access terms could not be established; given the sibling host's explicit exclusion it was recorded as excluded and not opened either.

## Agent assistance disclosure

- System: `RUNTIME-STAMPED`
- Provider: `RUNTIME-STAMPED`
- Model: `RUNTIME-STAMPED`
- Version: `RUNTIME-STAMPED`
- Author run ID: `author-PREM-BIO-001-D1FEE388-72AC-4923-B2B8-AC4329B34DEC`
- Material-instructions digest: `sha256:53b1b021e40bb77839505dc9d287d1719fdd4edad43bde0bf2ac22a1282ba957`

VSBDev, the accountable principal, is verified as `github:VSBDev`. The system, provider, model, and version fields carry the operator-stamped literal `RUNTIME-STAMPED` and are stamped by the operator before review. The digest covers the exact UTF-8 material task payload supplied to this authoring run, including its final newline. It excludes hidden provider and system instructions that cannot be exported. VSBDev remains accountable for the contribution and attests the disclosed provenance.

## Boundaries and exceptions

Every learner task has a text-first path. The scale-ladder diagram and the cork micrograph both carry long descriptions that state the relationships and the conclusion drawn from them, so no task in the lesson depends on seeing either figure. All tables are original semantic text.

The clinical material is illustrative. The patient having a colonoscopy in the seventh scene, the imaging system's stipulated 0.1 mm of delivered detail, the invented research team in the assessment and its 40 µm instrument, and the hand lens in the practice scene are all constructions for teaching. No source in this pack reports the resolution of any real clinical instrument, and the lesson states that plainly where the figures are used. The wrap-up carries an explicit teaching-example boundary, describes no real patient, service, device, or procedure, and contains no diagnostic criterion, threshold, test performance, or statement of what any finding would mean. Nothing in the pack is medical advice.

There are no licence exceptions to the CC BY 4.0 contribution grant beyond the single third-party asset recorded above, which is itself CC BY 4.0 and therefore redistributable within this corpus.
