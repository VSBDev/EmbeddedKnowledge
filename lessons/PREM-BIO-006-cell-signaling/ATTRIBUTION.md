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

Eighteen sources are recorded in `references.json` and every one was retrieved and read directly,
twelve by the original authoring run and six more by the coverage addition recorded below. Every
asserted fact in the scenes maps to a claim in `claims.json`, and every claim appears in a
learner-visible `{source-note}` in each scene where it is used.

Sources by host:

- **pmc.ncbi.nlm.nih.gov** (sixteen sources). Recorded `allowed` in the source-access ledger, whose
  entry cites `robots.txt` carrying `Allow: /articles/`. Nguyen, Lausten & Boman 2025 on the colonic
  crypt; Parker & Neufeld 2020 on APC and destruction complex recruitment in human colonocytes;
  Lee, Salic, Krüger, Heinrich & Kirschner 2003 on the quantitative Wnt pathway; Goentoro &
  Kirschner 2009 on fold-change readout; Mehta, Hingole & Chaudhary 2021 on Wnt secretion
  mechanisms; Hillenbrand, Gerland & Tkačik 2016 on positional information beyond the French flag
  model; Tostevin, ten Wolde & Howard 2007 on the fundamental limits to position determination;
  van der Wath, Gardiner, Burgess & Smith 2013 on crypt geometry; Baker and colleagues 2014 on
  crypt migration speed; Mukherjee, Dhar, Stathos, Schaffer & Kane 2018 on how Wnt influences destruction
  complex activity. Added by the coverage run: Heldin, Lu, Evans & Gutkind 2016 on signals and
  receptors; Silbering & Benton 2010 on ionotropic and metabotropic mechanisms in chemoreception;
  Martinez-Marin, Stroman, Fulton & Pruitt 2025 on Frizzled receptors; Dijksterhuis, Petersen &
  Schulte 2014, IUPHAR Review 3 on WNT/Frizzled signalling; Turku, Schihada, Kozielewicz, Bowin &
  Schulte 2021 on residue 6.43 in class F GPCRs; Spit, Koo & Maurice 2018 on intestinal niche signals.
- **www.ncbi.nlm.nih.gov** (two sources, both NCBI Bookshelf chapters of *Molecular Biology of the
  Cell*, 4th edition). This host is recorded `restricted` in the ledger because `robots.txt`
  disallows the legacy `/pmc/articles` route for unnamed agents. That restriction does not reach the
  Bookshelf chapter route. This run retrieved and read the full `robots.txt` before access and
  confirmed that the wildcard `User-agent: *` block disallows `/pmc/articles` and a set of query and
  tool paths, that its only `books` rule is `Disallow: /books/?term=`, which covers the search query
  route and not chapter pages, and that the file names no AI or LLM crawler and carries no rule
  applying to this agent. A `Crawl-delay: 5` applies and was respected. The same route and the same
  finding are recorded by the earlier published pack PREM-BIO-004.

No new domain was checked by either run, so `site/agent/source-access-ledger.json` is deliberately
left unmodified. Both hosts used already have entries within the ledger's 90-day recheck window. The
additional detail the first run established about the Bookshelf route is recorded in the `agentAccess`
notes of the two affected source records instead of in the shared ledger, because a second agent was
authoring in the same worktree concurrently and an unnecessary write to a shared file risks
clobbering its append. The coverage run followed the same practice.

Two access observations from the coverage run are recorded here because they concern rate and not
rights, and so do not change either ledger verdict. First, `www.ncbi.nlm.nih.gov` returned an
"Access Denied" page citing possible misuse after a burst of requests, and stayed blocked across a
backoff, so no Bookshelf chapter was reopened by that run and no new fact was taken from either
Bookshelf source. The receptor-class material was sourced from PubMed Central instead. Second,
`pmc.ncbi.nlm.nih.gov` served a reCAPTCHA challenge on one article during a rapid sequence of
fetches. That challenge was not circumvented in any way; the run waited and retried the plain URL
once, which succeeded. Future authors should pace requests to these hosts.

No source was retrieved from a domain marked `excluded` or `human-only`. No login, paywall, access
control or bot challenge was bypassed anywhere in either run.

### Sources under restrictive licences

Seven sources carry licences that permit no reuse of expression, or state a licence this pack has
chosen not to rely on, and every one of them is used for unprotectable fact only:

- `source-goentoro-fold-change` — Molecular Cell, © 2009 Elsevier Inc., all rights reserved, read as
  a PubMed Central author manuscript. Only the fold-change range, the span of absolute
  concentrations, and the authors' stated proposal are taken.
- `source-baker-crypt-dynamics` — CC BY-NC-ND, so both the non-commercial and the no-derivatives
  terms bar reuse. Only the measured migration speed is taken.
- `source-mukherjee-destruction-complex` — CC BY-NC-ND 4.0, same bar. Only the competing proposed
  mechanisms, the partial nature of relocalisation, and the existence of an E-cadherin-bound
  beta-catenin pool are taken.
- `source-heldin-signals-receptors` — Cold Spring Harbor Laboratory Press. The article page carries no
  Creative Commons licence and no open-access grant, so only the receptor architectures and their
  activation and shut-off mechanisms are taken.
- `source-silbering-chemoreception-timing` — © 2010 European Molecular Biology Organization, no
  Creative Commons licence on the page. Only the ionotropic and metabotropic timescale figures are taken.
- `source-dijksterhuis-iuphar-frizzled` — a bare British Pharmacological Society copyright line and no
  Creative Commons licence. Only the IUPHAR classification, the retained and missing structural
  features, and the review's own characterisation of the evidence are taken.
- `source-martinez-marin-frizzled` — the page states a Creative Commons Attribution licence but names
  no version and links no versioned deed, so this pack does not rely on the grant and treats it as
  facts-only like the entries above.

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

**2. No receptor copy number.** The noise argument in scene 4 depends on a cell counting randomly
arriving molecules at a finite number of receptors. No published figure for the number of Wnt
receptors on a human colonic crypt cell was found, and none is supplied. Scene 4 says so in a
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
open, and scene 7 presents the competing readings with the observation behind each rather than
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
per-step figures are published, and through a composite pathway written for scene 8's audit. The
reason is stated in scene 6 rather than hidden: no source consulted here reports a per-event
catalytic gain for any step of the canonical Wnt pathway, and the transcriptional step in particular
is left unaudited because no figure was found that this pack could stand behind. What the pack does
establish about Wnt is where its multiplying steps sit, namely on the arm that destroys the output,
and what its output ratio is. What it cannot state is by how much any single Wnt step multiplies.

**10. The two gain figures are not commensurable, and the pack says so instead of comparing them.**
An earlier draft divided phototransduction's tally of more than 100,000 molecules per absorbed photon
by the Wnt pathway's roughly sixfold change and reported a four-orders-of-magnitude difference. That
comparison is invalid: the first is a per-event catalytic count with units, the second a
dimensionless ratio of two steady-state concentrations. Scene 6 now names the error explicitly, an
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

**12. No timescale comparison across receptor classes.** Scene 3 compares receptor architectures by
what crosses the membrane and by how each is switched off, and it deliberately has no speed column.
The only timescale figure this pack could source is the ionotropic against metabotropic comparison in
`source-silbering-chemoreception-timing`, which was established in insect and mammalian chemosensory
systems and reports nothing about receptor tyrosine kinases or intracellular receptors. No source
consulted places all of the compared architectures on one timescale. The scene therefore states the
chemosensory figures inside their scope, keeps the source's latency and duration apart instead of
merging them into a single notion of speed, and refuses in prose to convert a count of stages into a
rate. An assessment item is keyed on exactly that refusal.

**13. Frizzled's membership of the GPCR class is contested and is left contested.** The pack reports
the formal IUPHAR placement with the three grounds given for it, and reports the dispute with named
sources on each side, and takes no position. The three sources do not weigh equally: only
`source-martinez-marin-frizzled` frames the classification itself as debated, while
`source-dijksterhuis-iuphar-frizzled` and `source-turku-class-f` both lean toward Frizzleds being
genuine GPCRs and hedge about mechanism instead of membership. The claim's `uncertainty` field says
so, so that a reviewer is not left to infer a balance the sources do not have. Nothing elsewhere in
the pack depends on the answer: the Wnt chain traced in scene 2 invokes no heterotrimeric G protein at
any step, and that is stated in the scene.

**14. The cross-talk mechanisms are better evidenced in mouse small intestine than in human colon.**
`source-nguyen-colonic-crypt` states the BMP gradient direction and the Notch fate mechanism for the
normal colon without attributing either to a species, and the references beneath those two paragraphs
are mouse studies and general pathway reviews. `source-spit-crypt-niche` is explicitly about the small
intestine, is organised on a crypt-to-villus axis, notes itself that the colon has crypts and no
villi, and reports no human crypt data; its evidence is mouse genetics and organoids. Scene 5 carries
a scoping callout saying which statement rests on which, and deliberately omits that review's
attribution of the Notch ligands to Paneth cells, a small-intestinal cell type the colonic review
states the colon lacks. `source-nguyen-colonic-crypt` also swaps the secretory and absorptive labels
in its section 2.1; this pack uses its section 4.5, which states them correctly, and records the
discrepancy in that source's rights-basis note so no later author copies the error.

**15. The information argument about combining inputs is reasoning, not measurement.** Scene 5 argues
that a second gradient running the other way along the same axis is largely redundant with Wnt, while
a contact-dependent input is not. That argument is `claim-combining-inputs-not-additive`, carried at
`support: inference` and `medium` confidence. No source consulted counts bits for the crypt, measures
what any second input contributes, or states that the Wnt and BMP readings are informationally
redundant. The scene labels the argument as the lesson's own where it appears, names the conditions
under which it would weaken, and asserts no figure. The assessment item built on it asks for the
reasoning and explicitly does not ask for a number.

**16. The direction of the Wnt and Notch relationship is unresolved and is carried that way.** One
review states that Wnt synergises with Notch to sustain undifferentiated proliferative stem and
progenitor cells, and in the same section reports an experiment its authors read as showing opposing
and interconnected activities. Both statements trace back to a single primary study, which this pack
did not retrieve, so they are not independent, and the review reconciles neither. The other review
says only that Notch interacts with pathways such as Wnt, and neither gives a mechanism for the normal
colon. The pack states both readings and settles nothing, and the short-answer item is keyed so that
asserting either direction as settled is the error it catches.

## Coverage addition: receptor classes and cross-talk

An independent academic review found that this pack traced one canonical Wnt example and covered
neither the receptor-class comparison nor the cross-talk that the syllabus outcome BIO-124 asks for,
and that an earlier version of this file had declared a receptor-class survey out of scope. That
finding is correct and this section records how it was closed. The out-of-scope declaration has been
removed from the scope exclusions above.

Two scenes were added and the existing seven were left as they were, apart from renumbering.

- **Scene 3, "What kind of receptor is Frizzled?"** (`content/03-what-kind-of-receptor.md`, 11
  minutes). It sits immediately after the scene that introduces the receptor. It compares ligand-gated
  ion channels, receptor tyrosine kinases, G-protein-coupled receptors, Notch, and intracellular or
  nuclear receptors by what each architecture predicts, ties each back to the pack's five jobs, and
  places Frizzled among them with its class F assignment and the dispute over that assignment. It was
  written as its own scene instead of a section inside scene 2 because scene 2's structure is a march
  through the five jobs traced in one pathway, and a comparison across pathways interrupts it.
- **Scene 5, "Reading more than one input"** (`content/05-reading-more-than-one-input.md`, 10
  minutes). It sits immediately after the scene that bounds what one gradient can specify, because it
  is the answer to the limit that scene establishes. It covers the anti-parallel BMP gradient, the
  contact-dependent Notch input, what the sources do and do not settle about Wnt with Notch, and the
  argument that combining inputs does not automatically add positional information.

The scenes were inserted in reading order, so the seven existing scenes were renumbered and every
numeric scene cross-reference in the pack's prose, in this file, and in the content filenames was
updated to match. No existing teaching content was rewritten.

Also added: fifteen claims in `claims.json` and six sources in `references.json`; three assessment
items and one rubric; six glossary terms; two objectives in `lesson.json`; and the Notch and BMP
pointers in the locator and rights-basis note of `source-nguyen-colonic-crypt`, which the coverage run
re-read for that purpose. `estimatedMinutes` rises from 115 to 136.

Nothing the pack already taught was contradicted. In particular the addition preserves the record that
how membrane recruitment of the destruction complex leads to the rise in beta-catenin is unsettled,
that noise can only subtract from positional information, that a binary threshold carries at most one
bit, and that "cascade" is a convention and not an exclusive definition. Scene 3's account of Frizzled
being removed by ZNRF3 and RNF43 is stated as a receptor-level control acting alongside, and not in
place of, the intracellular termination account in scene 2, and the scene says the two act at
different places without comparing their magnitudes.

One thing was wanted and left out for lack of a source. A speed column for the receptor comparison was
intended and is not there, for the reason recorded as limitation 12.

The `instructionsDigest` in `lesson.json` was not re-stamped by the coverage run. It remains a genuine
SHA-256 over the original authoring run's disclosed task payload and does not cover the coverage run's
own instructions, which are not represented by any digest in this pack. That is recorded here instead
of being papered over, and it is the operator's to resolve alongside the other `RUNTIME-STAMPED`
provenance fields.

## Deliberate scope exclusions

- **Non-canonical Wnt signalling.** The planar cell polarity and calcium branches are not covered.
  The outcome is served by tracing one pathway completely instead of surveying several partially.
- **Second messengers.** Scene 4 compares receptor architectures and scene 8 uses phototransduction as
  its high-gain case, but no systematic account of cyclic AMP, cyclic GMP, calcium or the
  phosphoinositides is given, and none is needed by anything this pack asserts.
- **Cancer mechanism.** Scene 9 sets up `topic-cell-biology-cell-death-cancer` (PREM-05.10) and
  stops. How a decoupled readout becomes a tumour, what else must go wrong, and anything about
  staging, screening, prognosis or treatment are outside this pack.
- **Gradient shape from first principles.** No calculation of a concentration profile from a
  diffusion coefficient is attempted, because scene 7 establishes that the mechanism of spread is
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

Every clinical statement in this pack is scoped as teaching material. Scene 8 and scene 9 each carry
an explicit **teaching example, not medical advice** boundary callout. The pack describes no patient
and no case history, names no drug, dose or regimen, makes no recommendation, and offers nothing
that could support a diagnosis, a prognosis, a screening decision or a treatment choice. The
colorectal cancer mutation frequency quoted in scene 9 is a population figure from a review and is
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

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with five major findings, two minor and one verification
note; the learning-design review approved with five notes. All seven actionable findings were repaired
in one finalization pass and none was declined.

**The largest was a coverage gap, not a slip.** The syllabus outcome behind this graph node, BIO-124,
requires comparing receptor classes and tracing a signal through to cross-talk. The candidate traced
one canonical Wnt example, and its own attribution file declared a receptor-class survey out of scope.
Two scenes now close that: a comparison reading four receptor architectures as predictions about what
crosses the membrane and how the signal stops, and a scene on reading more than one input at once,
which is placed directly after the scene bounding what a single gradient can specify because it is the
answer to that limit. Six new sources support them, all from PMC.

Two corrections went to the heart of the lesson's quantitative argument.

- **The direction of the noise term was wrong.** The worked example said that loosening its
  assumptions, including the noiseless one, raises the information supply. The theoretical work cited
  says noise entropy can only subtract. Independence and graded reading raise the figure; noise lowers
  it, which makes the number an optimistic ceiling rather than a floor. The two kinds of assumption
  are now kept apart in the scene and in the practice task that repeated the error.
- **A binary threshold carries at most one bit**, and a full bit only when its two outcomes are equally
  likely. The count of thresholds is an upper bound on the bits they supply, before noise.

Two answer keys required an account the pack itself does not hold.

- The ordering item made recruitment of the destruction complex to the membrane a mandatory causal
  stage, while the pack's own claim records that mechanism as unsettled, with saturation and impaired
  ubiquitin-ligase docking also proposed. The item now asks for the *observed* sequence and instructs
  the marker not to penalise a learner who adds that the causal link is open.
- The APC item keyed complete Wnt independence as a categorical consequence of truncation. The study
  cited reports retained localisation and partial regulation, and the pack's own claim says the degree
  of decoupling depends on which part of APC is lost. The stem now fixes which regions are lost, and
  the final part asks the learner to name a feature of the truncation that would change the answer.

The amplification audit was also drawing more from its numbers than they carry. A sixfold ratio of two
steady states is not a gain without the input change and the operating range; one-to-one receptor
occupancy does not establish that nothing multiplies downstream over time; and high gain does not by
itself entail early saturation, which depends on dose-response shape, dynamic range, feedback,
adaptation and input scale. Each is now stated at the strength the evidence supports.

Two minor corrections: the practice scene restates four claims it was not mapped to, and repetition in
practice does not exempt a claim from carrying its evidence; and "cascade" is a convention that a
textbook records as common usage rather than an exclusive definition, so the pack now says it is
holding to the narrower sense and why.

Recorded rather than resolved: no timescale is asserted for any receptor class, because the only
sourced figures are ionotropic against metabotropic in chemoreception and say nothing about receptor
tyrosine kinases or nuclear receptors. The table has no speed column, the scene says why, and an
assessment distractor offers exactly that inference so a learner is asked to refuse it.
