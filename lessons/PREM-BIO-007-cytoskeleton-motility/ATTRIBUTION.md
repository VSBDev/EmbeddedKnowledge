# Attribution and rights

## Lesson content

The learner-facing content of this lesson pack, meaning every scene under `content/`, the diagram
source under `diagrams/`, the assessment, the glossary and the claim ledger, is original work
written for this pack and is released under CC BY 4.0, the licence declared in `lesson.json`.

Every explanation, analogy, worked example, practice task, assessment item, answer key and diagram
here was composed for this lesson. Facts were taken from the sources listed in `references.json`
and re-expressed in an independently designed instructional structure. No source's wording, figure,
table, dataset, question, example or organisation was copied, closely paraphrased, translated or
mirrored.

## Third-party assets

None. This lesson ships no third-party image, diagram, dataset or media file, so
`thirdPartyAssets` in `lesson.json` is empty.

The block brief for this module records that this outcome has no correctly licensed third-party
figure available, so the single figure in the pack is original.

## Original assets

- `diagrams/junction-anchors.diagram.json` — original declarative diagram created for this lesson.
  It maps the four attachment structures of a colonic absorptive cell in apical-to-basal order to
  the cytoskeletal polymer each anchors. Structure, node labels, edge labels, alt text and long
  description are all original. It is not a redrawing of any published figure; it was composed from
  the verified facts recorded in `claims.json` and reproduces no source's layout or visual scheme.

## Source use

All eleven records in `references.json` are declared `factual-reference` with the rights basis
`facts-only-original-expression`. No source's expression, media or dataset is reused, quoted or
adapted anywhere in this pack, which is why no source ID needs naming in this file under the
project's rights contract.

Every source was retrieved through `pmc.ncbi.nlm.nih.gov/articles/`, the route the project's
source-access ledger records as permitted by that host's robots file. The ledger entry was read
before any source was opened and is within its stated 90-day recheck window, so no new domain was
added by this pack. No login, paywall, subscription control or access restriction was bypassed for
any source. No source used here is recorded as `human-only`.

Two access notes are worth stating plainly. One source, the 2021 organoid study, carries publisher
terms of use rather than a Creative Commons licence; those terms expressly permit text and data
mining of the content for academic research, they were read before use, and only facts were taken
from it. Two further sources carry non-commercial or share-alike Creative Commons terms; those
conditions are not engaged here because no expression, figure or dataset from either is reproduced
or adapted. The licence of each source is recorded verbatim in its `license` field regardless of how
it is used.

## Prior lessons in this block

This lesson adopts figures, terms and findings established by earlier lessons of the cell biology
block rather than re-deriving them: the membrane's thickness and fluidity, the brush border and the
dimensions of a microvillus, the apical and basolateral surfaces as domains of one membrane, the
tight junction's fence function in the outer leaflet, and the colonic crypt with its turnover
interval. Where this lesson gives its own glossary sense to a term an earlier lesson touched, the
relation is declared in the `alignment` block of that glossary entry, naming the prior lesson and
the disambiguation a reader needs. Three entries carry such a declaration: `microvillus`,
`tight junction` and `basement membrane`.

## Boundary

The clinical material in this pack is a teaching example and not medical advice. It contains no
dose, regimen, indication, diagnostic criterion, threshold or recommendation, describes no real
person, and is not drawn from any patient record. Reported associations between junction proteins
and intestinal conditions are stated at the level of association, with the direction of causation
recorded as unresolved by the source that reports them.

## Adjudication repairs to the 0.1.0 candidate

The academic review returned request-changes with six major findings and two verification notes; the
learning-design review returned request-changes with two major findings and two notes. All ten
actionable findings were repaired in one finalization pass and none was declined.

- **A stiffness class was read as a load-bearing capacity.** The worked example turned a persistence
  length ratio above one into proof that a single actin filament could hold a microvillus out against
  membrane tension. Persistence length is the length over which thermal energy has not randomised a
  filament's direction; whether a structure holds against a force also depends on the force, the
  boundary conditions, the contour length and cross-linking. The pack's own source says the observed
  core is a cross-linked bundle of about 19 filaments. The procedure now narrows the choice of polymer
  and stops there, the bundle is named as how the cell actually meets the load, and the numeric item's
  key asks for the ratio and explicitly refuses credit or penalty for any claim about load.
- **Two junction routes were over-extended from one adhesion system to a whole location.** Nectins
  were grouped with E-cadherin as reaching actin through the catenins; they reach it principally
  through afadin. And every basal integrin was given the integrin-linked-kinase route, which the
  pack's own source limits to the β1 tail, while the α6β4 receptor named in the same sentence carries
  no β1 subunit and in hemidesmosomes connects laminin to keratin through linkers including plectin.
  The prose, the diagram, the diagram's long description and the assessment now say β1. The two
  over-extensions became the two hardest distractors in the pairing item, which is a better item than
  the one it replaces: the classic inversion it previously tested is easy, and generalising a true
  route to a whole class of molecules is the error a learner actually makes.
- **Apolar and motorless was turned into passive.** The lesson concluded that a keratin-linked
  attachment "can hold, and that is all it can do". The desmosome review it cites describes desmosomes
  and their intermediate filaments participating in actin organisation, Rho-family signalling,
  adhesion dynamics, cell mechanics and migration. The claim is now about motors, which is what the
  evidence supports, and the glossary entry carries the same correction.
- **A clinical leak was localised more tightly than the evidence allows.** The wrap-up said a
  desmosomal explanation was ruled out. In an intact epithelium the tight junction is the rate-limiting
  step for the paracellular route, which is why it is implicated first; inflamed tissue also admits
  tracer through gaps left by extrusion, through lost adhesion, and through cross-talk between
  junctions. One desmoplakin deletion, in mouse, under ordinary conditions and without imposed
  mechanical stress, shows that losing keratin's anchor does not by itself break the barrier. It does
  not exclude other contributions. The scene now says the model locates a leak first rather than
  uniquely, and names what ruling one out would take.
- **Six load-bearing facts had no claim record.** The membrane thickness and the two-dimensional-fluid
  behaviour that the opening scene's whole premise rests on, the cell height and microtubule diameter
  used in the comparisons, the stiffness-classification procedure itself, and the leak-localisation
  inference were all asserted without a structured claim. Two reference records were carried unchanged
  from the merged PREM-BIO-004 pack, which established the same facts from the same sources. Being
  inherited from an earlier lesson does not exempt a fact from the ledger, which is the reviewer's
  point and it is correct.
- **Two retrieval checks had no answer.** A check a learner cannot mark against anything is a prompt,
  not a check. Both now carry a worked answer, and the scene-5 one also states that the junctions are
  not independent and that a prediction is not a result.

Recorded rather than resolved: whether the basal surface of a colonic cell carries a second,
keratin-linked attachment is not answered by the sources used here, and the map draws the β1 route for
that reason. The gap is left visible.
