# Attribution and rights, PREM-BIO-005

## This lesson

Paid for with a gradient: membrane transport. Authored for EmbeddedKnowledge by VSBDev
(github:VSBDev) with material agent assistance, and released under CC BY 4.0 like the rest of the
corpus. Every scene, table, worked example, practice item, assessment item, glossary entry and
diagram in this pack is original expression written for it.

## Illustrations

This pack carries one figure and it is our own.

- `diagrams/transcellular-glucose-route.diagram.json` — the route one glucose molecule takes across
  a single absorptive intestinal cell, as a declarative diagram in this project's own JSON diagram
  format. Written for this lesson from the sourced facts recorded in `claims.json`, declared in
  `originalAssets`, and covered by this lesson's CC BY 4.0 licence. It is not a redrawing of any
  published figure; its six stages and seven labelled relationships were chosen to make the
  lesson's own argument, which is that one sugar crosses the two faces of one cell by two different
  categories of transport and that only one protein in the route splits ATP.

No third-party image, figure, diagram, photograph, dataset or table is reproduced or adapted in this
pack, so `thirdPartyAssets` is empty. Nothing here was taken from a source and relabelled.

## Sources

All twenty-two sources in `references.json` are used on a facts-only basis: the fact is taken and the
sentence is ours. No source's wording, figure, table, dataset, question or example is reproduced or
adapted anywhere in this pack, which is why every recorded use is `factual-reference` against
`facts-only-original-expression`. That basis was chosen even for the sources whose own licences
would permit reuse of their expression, because this lesson does not in fact reuse any.

Seven of the twenty-two are openly licensed, under CC BY 4.0, CC BY or CC0, and the rest are
conventionally copyrighted works that are free to read through PubMed Central or the NCBI Bookshelf.
Each source's licence as displayed on its own page, the locator for the statements relied upon, the
rights basis, the evidence for that basis, and a dated record of its agent-access terms are all
recorded per source in `references.json`.

Two physical constants are quoted from the NIST pages for the CODATA recommended values. A physical
constant is a fact rather than a copyrightable expression, and both of the constants used became
exact by definition following the 2019 revision of the SI.

## Source access

Every source was retrieved through a route checked against
`site/agent/source-access-ledger.json` before retrieval, and that ledger was extended during this
lesson's authoring with five domains: `physics.nist.gov` and `www.who.int` as newly checked,
`journals.physiology.org` and `www.thelancet.com` as newly excluded because their robots files name
ClaudeBot with a site-wide disallow, and a refinement to the existing `www.ncbi.nlm.nih.gov` entry
recording that the Bookshelf record paths are permitted to the wildcard agent while the Bookshelf
search query string is not.

No excluded or human-only domain was fetched. Where an exclusion cost this lesson a source it wanted,
that is recorded rather than worked around: the standard review of sodium-glucose cotransport
energetics sits only on an excluded publisher host, and a widely quoted 1978 editorial could not be
read, so its much-repeated sentence is not quoted here at all.

## Boundary

No dose, composition, formulation, concentration, osmolarity, regimen, volume, duration, threshold,
indication, contraindication, monitoring plan, or recommendation about any patient appears anywhere
in this lesson. Cholera and oral rehydration therapy are discussed only as the setting for a
transport mechanism, under an explicit *teaching example, not medical advice* boundary carried in the
final scene. Nothing in this pack directs diagnosis, treatment, or self-experimentation, and no task
requires a reader's own physiology or health data.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with three major findings and two minor; the
learning-design review approved with two notes and one minor. All six actionable findings were
repaired in one finalization pass and none was declined.

**A physical direction was stated backwards.** The retrieval answer in the water scene said that pure
water in the lumen makes the osmotic difference point the wrong way. Pure water is hypotonic to the
tissue beyond it, so the difference favours absorption and plain water is absorbed. The answer now
gets the direction right and makes the real point, which is a better one: the deficit in secretory
diarrhoea is of salt as well as water, plain water supplies no sodium, and water absorbed without
solute dilutes what is left in the lumen rather than sustaining the absorption it started.

**An answer key inferred a mechanism from the shape of a decline.** The item asked what the timing of
SGLT1's slowdown shows after ATP is abolished, and keyed a gradual decline as demonstrating indirect
dependence. It does not. Abolishing ATP supply is not the same as emptying the ATP pool, so a
transporter that did hydrolyse ATP would also fade rather than stop dead, and even at zero ATP the
decay rate would depend on cycle kinetics, membrane potential, sodium leaks and cell volume. The
pack's own source-note already said no source reports this time course. The item now asks what the
timing does and does not establish, and requires the learner to name the vesicle experiment from
scene 4 — an imposed sodium gradient with no ATP present — as the test that settles it. That is a
better question than the one it replaces, because it is the difference between an inference and a
measurement.

**The classification model was answering two different questions with one word.** The lesson's
two-part test classifies an *event*: a named crossing, and whether it needed energy from outside the
solute's own gradient. Downhill glucose entry through SGLT1 was then called secondary active transport
on the grounds that the category belongs to the protein. Both readings are defensible and they are not
the same reading. The scene now separates them: by the event test that crossing does no uphill work,
SGLT1 is a secondary active cotransporter as a statement about mechanism, the obligatory coupling
means sodium is spent either way, and the cycle is reversible so direction is set by the gradients
rather than by the protein's name. The discipline the scene now teaches is to say which question is
being answered.

Two smaller corrections. The equilibrium limit is a model boundary rather than a wall: it uses raw
concentrations where the relation formally uses activities, it assumes a tightly coupled reversible
cycle with no slippage, and it holds sodium and membrane potential fixed while transport moves both.
And normal histology in cholera shows the cells and brush border are structurally intact; it does not
show that every protein in the diagram is working as before, when raised cyclic AMP is a broad signal
that the same scene describes changing CFTR. The claim is narrowed to the one the argument needs,
which is that glucose-stimulated sodium absorption persists while cyclic AMP is high.

The learning-design reviewer's one correction is also taken: the depolarisation figures are basolateral
measurements in mouse enteroids while the apical figure is from rabbit, so the scene now says that
applying one to the other assumes the two faces depolarise together, and that the result is an
order-of-magnitude sensitivity check rather than a measurement of the apical potential in cholera.

Both reviewers independently recomputed the sodium budget and confirmed every figure in it.
