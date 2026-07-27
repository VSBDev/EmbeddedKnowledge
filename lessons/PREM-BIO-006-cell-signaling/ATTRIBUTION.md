# Attribution and provenance for PREM-BIO-006

## Lesson content licence

The teaching content of this pack, including all scene prose, the declarative diagram, the
assessment items and answer keys, the glossary and the claim ledger, is original to this pack and is
released under **CC BY 4.0**. Facts drawn from the sources listed in `references.json` are used as
facts. No source's wording, figure, table, schematic, dataset, question or example is reproduced or
adapted anywhere in this pack.

## Assets

**Original assets.** One, declared in `lesson.json` under `originalAssets`:

- `diagrams/wnt-reception-to-response.diagram.json` — a declarative flow diagram of canonical Wnt
  signalling in a colonic crypt cell, seven stages and six links, written for this lesson. Its
  `longDescription` is a faithful text equivalent of the same graph and states every node, every
  edge, the direction of each edge, which two edges are inhibitory, and the conclusion the shape of
  the graph supports.

**Third-party assets.** None. The `thirdPartyAssets` array in `lesson.json` is empty, and no scene
uses a `{figure}` directive.

The block brief records that this outcome has no correctly-licensed third-party figure available, so
the signalling figure is original by design rather than by omission. A search for a reusable figure
was not conducted against `smart.servier.com`, whose entry in `site/agent/source-access-ledger.json`
is `human-only`: its terms of use forbid automated access even though the medical images themselves
carry CC BY 4.0. An authoring agent may not fetch from that host, and the ledger's note that the
same art is mirrored on Wikimedia Commons under a superseded share-alike licence rules that route
out as well.

## Sources

Twelve sources are recorded in `references.json` and every one was retrieved and read directly by
this run. Every asserted fact in the scenes maps to a claim in `claims.json`, and every claim appears
in a learner-visible `{source-note}` in each scene where it is used.

Sources by host:

- **pmc.ncbi.nlm.nih.gov** (ten sources). Recorded `allowed` in the source-access ledger, whose
  entry cites `robots.txt` carrying `Allow: /articles/`. Nguyen, Lausten & Boman 2025 on the colonic
  crypt; Parker & Neufeld 2020 on APC and destruction complex recruitment in human colonocytes;
  Lee, Salic, Krüger, Heinrich & Kirschner 2003 on the quantitative Wnt pathway; Goentoro &
  Kirschner 2009 on fold-change readout; Mehta, Hingole & Chaudhary 2021 on Wnt secretion
  mechanisms; Hillenbrand, Gerland & Tkačik 2016 on positional information beyond the French flag
  model; Tostevin, ten Wolde & Howard 2007 on the fundamental limits to position determination;
  van der Wath, Gardiner, Burgess & Smith 2013 on crypt geometry; Baker and colleagues 2014 on
  crypt migration speed; Mukherjee, Dhar, Stathos, Schaffer & Kane 2018 on how Wnt influences destruction
  complex activity.
- **www.ncbi.nlm.nih.gov** (two sources, both NCBI Bookshelf chapters of *Molecular Biology of the
  Cell*, 4th edition). This host is recorded `restricted` in the ledger because `robots.txt`
  disallows the legacy `/pmc/articles` route for unnamed agents. That restriction does not reach the
  Bookshelf chapter route. This run retrieved and read the full `robots.txt` before access and
  confirmed that the wildcard `User-agent: *` block disallows `/pmc/articles` and a set of query and
  tool paths, that its only `books` rule is `Disallow: /books/?term=`, which covers the search query
  route and not chapter pages, and that the file names no AI or LLM crawler and carries no rule
  applying to this agent. A `Crawl-delay: 5` applies and was respected. The same route and the same
  finding are recorded by the earlier published pack PREM-BIO-004.

No new domain was checked, so `site/agent/source-access-ledger.json` was deliberately left
unmodified. Both hosts used already have entries within the ledger's 90-day recheck window. The
additional detail this run established about the Bookshelf route is recorded in the `agentAccess`
notes of the two affected source records instead of in the shared ledger, because a second agent was
authoring in the same worktree concurrently and an unnecessary write to a shared file risks
clobbering its append.

No source was retrieved from a domain marked `excluded` or `human-only`. No login, paywall or access
control was bypassed anywhere in this run.

### Sources under restrictive licences

Two sources carry licences that permit no reuse of expression, and both are used for unprotectable
fact only:

- `source-goentoro-fold-change` — Molecular Cell, © 2009 Elsevier Inc., all rights reserved, read as
  a PubMed Central author manuscript. Only the fold-change range, the span of absolute
  concentrations, and the authors' stated proposal are taken.
- `source-baker-crypt-dynamics` — CC BY-NC-ND, so both the non-commercial and the no-derivatives
  terms bar reuse. Only the measured migration speed is taken.
- `source-mukherjee-destruction-complex` — CC BY-NC-ND 4.0, same bar. Only the competing proposed
  mechanisms, the partial nature of relocalisation, and the existence of an E-cadherin-bound
  beta-catenin pool are taken.

The two NCBI Bookshelf chapters are under publisher copyright and are likewise used for fact only.

## Known limitations of this pack

These are recorded deliberately. An honest gap is more useful to a reviewer than a confident guess.

**1. The protein prerequisite has no lesson.** This outcome declares two graph prerequisites, and one
of them, `topic-biomolecules-proteins` (PREM-09.03, "Protein structure and folding"), has no
published lesson anywhere in the corpus. That gap bites directly on this material, because a
receptor is a protein and what a receptor does on binding a ligand is change shape. This pack does
not re-teach protein structure and folding and does not paper over the absence. Scene 1 names the
dependency explicitly, says that PREM-09.03 will own it, says it should be read first once it
exists, and reduces what this lesson needs to a single stated sentence: a protein has a definite
shape, and binding something can change it. Nothing downstream in the pack requires more protein
chemistry than that. What a learner will therefore not get here is any account of how a sequence
produces a fold, why a binding site has a particular geometry, or how binding at one end of a
protein moves the other end.

**2. No receptor copy number.** The noise argument in scene 3 depends on a cell counting randomly
arriving molecules at a finite number of receptors. No published figure for the number of Wnt
receptors on a human colonic crypt cell was found, and none is supplied. Scene 3 says so in a
scoping callout rather than substituting a plausible number.

**3. The noise limit is transferred from a subcellular model.** `source-tostevin-position-limits`
models gradients used for positioning inside a single cell, of the kind bacteria use to find their
own middle, not a tissue-scale gradient across an epithelium. The pack transfers only the structure
of the argument and the square-root scaling of precision with averaging time, both consequences of
molecules arriving at random, and states the limitation where it is used.

**4. The positional information figure is from an insect.** The 4.2-bit estimate is for the
Drosophila gap genes, in a syncytium of nuclei sharing a cytoplasm. No equivalent measurement for
the human colonic crypt was found. The scene states this and does not present the figure as the
crypt's value.

**5. The Wnt gain figure is a model of a frog extract.** The approximately sixfold rise in free
non-phosphorylated beta-catenin comes from a fitted model supported by measurements in *Xenopus* egg
extracts, not from a measurement inside a human crypt cell, and the comparison with phototransduction
sets a modelled figure beside textbook figures from a different system. Both scenes that use it say
so. The comparison is offered to show that measured gains differ by orders of magnitude, not to rank
the two pathways precisely.

**6. Gradient formation is unsettled and is left unsettled.** How a Wnt gradient forms is genuinely
open, and scene 5 presents the competing readings with the observation behind each rather than
choosing one. The short-range lateral transcytosis result is reported in a 2021 review of a 2016
primary study; the primary study was not itself retrieved, and the pack attributes the finding to
work reported in the review rather than presenting it first-hand. That work is in mouse small
intestine and concerns Wnt3, whereas this block follows the human colonic crypt, where the same
review identifies the mesenchyme as the ligand source.

**7. The destruction complex composition is stated non-exhaustively on purpose.**
`source-nguyen-colonic-crypt` lists Dishevelled among the complex's components. Dishevelled's
placement is described differently across the literature, so this pack names only APC, Axin, CK1A
and GSK3B, says the complex "includes" them, and records the divergence in scene 2's source note and
in the claim's uncertainty field. Nothing taught here depends on settling it.

**8. The positional interpretation of APC loss is an inference.** That a cell with damaged APC
reports the crypt base at any height is this pack's reading of two sourced molecular findings, not a
quoted conclusion. `claim-apc-loss-decouples-readout` records it as `support: inference` at `medium`
confidence, and the scene labels it as an interpretation.

**9. Amplification is the one job of five not traced through Wnt itself.** The outcome asks for
reception, transduction, amplification, response and termination. Four of those are traced through
the crypt's own Wnt pathway. Amplification is traced through vertebrate phototransduction, whose
per-step figures are published, and through a composite pathway written for scene 6's audit. The
reason is stated in scene 4 rather than hidden: no source consulted here reports a per-event
catalytic gain for any step of the canonical Wnt pathway, and the transcriptional step in particular
is left unaudited because no figure was found that this pack could stand behind. What the pack does
establish about Wnt is where its multiplying steps sit, namely on the arm that destroys the output,
and what its output ratio is. What it cannot state is by how much any single Wnt step multiplies.

**10. The two gain figures are not commensurable, and the pack says so instead of comparing them.**
An earlier draft divided phototransduction's tally of more than 100,000 molecules per absorbed photon
by the Wnt pathway's roughly sixfold change and reported a four-orders-of-magnitude difference. That
comparison is invalid: the first is a per-event catalytic count with units, the second a
dimensionless ratio of two steady-state concentrations. Scene 4 now names the error explicitly, an
assessment item uses the invalid division as its most attractive distractor, and no numerical
comparison between the two pathways' gains is asserted anywhere in the pack.

**11. How Wnt slows destruction is unsettled, and the pack carries all the candidates.** Scene 2
originally joined "the complex is recruited to the membrane" and "available beta-catenin rises" with
an "and", leaving the causal step blank. It now reports what the sources support: relocation of some
complexes is real and is the authors' proposal, relocation alone does not account for the loss of
activity because the complexes that stay in the cytosol remain active, and saturation of the complex
or interruption of the ubiquitin-tagging step are both proposed for the remainder. The literature
calls the question controversial and the pack does not resolve it. Nothing taught in the pack depends
on which mechanism wins, because every candidate delivers the same reduction in destruction rate.

## Deliberate scope exclusions

- **Non-canonical Wnt signalling.** The planar cell polarity and calcium branches are not covered.
  The outcome is served by tracing one pathway completely rather than surveying several partially.
- **A survey of receptor classes and second messengers.** G-protein-linked receptors appear only as
  the contrasting high-gain case in scene 4. Ion channels, enzyme-linked receptors and intracellular
  receptors are not covered.
- **Cancer mechanism.** Scene 7 sets up `topic-cell-biology-cell-death-cancer` (PREM-05.10) and
  stops. How a decoupled readout becomes a tumour, what else must go wrong, and anything about
  staging, screening, prognosis or treatment are outside this pack.
- **Gradient shape from first principles.** No calculation of a concentration profile from a
  diffusion coefficient is attempted, because scene 5 establishes that the mechanism of spread is
  the disputed part.
- **Membrane structure and fluidity.** Owned by PREM-BIO-004 and adopted rather than re-taught.

## Block continuity

Figures shared with earlier packs in this block are kept identical: the crypt at about 32 cells along
its length and about 22 around its circumference with roughly 700 cells, a mean cell radius of
5 micrometres, upward migration at around 4 micrometres per hour in the lower half of the crypt, and
colonic renewal every three to five days with enterocytes replaced every four to five days. The
`stem cell` glossary entry adopts PREM-BIO-001's definition and declares `alignment` with relation
`adopt`. PREM-BIO-001's `claim-crypt-architecture` recorded that the mechanism by which a cell reads
its position was the subject of a later lesson in this block; this pack is that lesson, and scene 2
supplies the mechanism it deferred.

## Educational and medical boundary

Every clinical statement in this pack is scoped as teaching material. Scene 6 and scene 7 each carry
an explicit **teaching example, not medical advice** boundary callout. The pack describes no patient
and no case history, names no drug, dose or regimen, makes no recommendation, and offers nothing
that could support a diagnosis, a prognosis, a screening decision or a treatment choice. The
colorectal cancer mutation frequency quoted in scene 7 is a population figure from a review and is
labelled as such; it is not a personal risk and says nothing about any individual. Two claims are
flagged `health-sensitive` in `claims.json`.

## Provenance

The accountable principal is VSBDev (`github:VSBDev`), consistent with the other packs in this block.
This run was instructed not to execute any `gh` command, so the identity was not re-verified against
the GitHub API in this run and is carried from the block's existing published packs rather than
guessed.

Agent system, provider, model, version and run identifier are recorded in `lesson.json` as the
literal `RUNTIME-STAMPED` for the operator to stamp before review. None of them is asserted by this
run, because this run could not obtain them without inventing them.

The `instructionsDigest` is a genuine SHA-256 over the exact disclosed UTF-8 material task payload
supplied to this run, including its final newline. It could not be emitted as `RUNTIME-STAMPED`
because `site/schemas/lesson.schema.json` constrains the field to the pattern
`^sha256:[a-f0-9]{64}$`, so a real digest is recorded rather than a placeholder that would fail
schema validation. The digest covers only that payload and excludes hidden provider and system
instructions that cannot be exported.

## Governance status

This pack is an authoring candidate. `status` is `draft`, `sourceConfidence` is `pending-review`, and
every claim in `claims.json` carries `reviewStatus: pending-review`. No review or adjudication
artifact was created by this run, and none exists in this pack. Nothing here has been reviewed,
approved, published or merged, and this pack claims no coverage of its outcome until independent
review and adjudication say otherwise.
