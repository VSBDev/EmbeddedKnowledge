# What moves a cell up a crypt

Everything so far has been about holding still: a projection held out, a sheet held together, a cell held onto its mat. The crypt does not hold still. Cells are made at the base, they travel to the surface, and they are shed there, and the whole lining turns over in a few days.

So what moves them?

The textbook answer is that division below pushes them up. It is a good answer, it has real evidence behind it, and it is not settled. This scene is about how to hold a question like that properly, because a learner who files it as settled will be wrong in a way that is hard to undo.

## First, get the scale of the movement

Take the migration velocity measured on mouse small-intestinal villi under control conditions: 9.00 ± 0.465 µm per hour in the duodenum, 5.96 ± 0.379 µm per hour in the ileum.

Convert the faster figure into something you can picture. In a day:

$9.00\ \mu\text{m/h} \times 24\ \text{h} = 216\ \mu\text{m}$

And in cells, using this block's working height of about 22 µm for an absorptive cell:

$216\ \mu\text{m} \div 22\ \mu\text{m} \approx 10$

Roughly ten cell-lengths a day. A cell in this tissue is displaced by about its own height every two and a half hours, continuously, for the few days it lives. Whatever mechanism does this is not a rare event; it is a steady process running the whole time the sheet is doing its other work.

## Position one: the push from below

Cell proliferation in the crypt is the primary force driving migration. The strongest version of this case measured cell positions over time along mouse duodenum and ileum in living animals, together with crypt proliferation rates, across several conditions including a transgenic line in which proliferation was suppressed. Migration velocities on the villi tracked crypt proliferation rates in every condition tested. The authors' conclusion is that proliferation within the crypt is the primary force that drives migration along the villus.

That is a serious result in intact tissue with normal geometry, which is the hardest place to measure anything.

Now read the design carefully. What was measured was a coupling between two rates: how fast cells are produced below, and how fast cells move above. A coupling of that kind is consistent with proliferation pushing cells upward. It is also consistent with proliferation and migration both being set by something further upstream, with neither causing the other. The measurement cannot separate those, because it never measured a force.

The authors are explicit about the residue. They state that they cannot rule out additional mechanisms, naming active migration and villus contraction and expansion, affecting the tight coupling in some cases. They also note a mismatch that their own model does not explain: migration on the villus follows a circadian rhythm, and crypt proliferation does not. A rhythm in the output that is missing from the proposed cause is a real problem for the proposed cause.

## Position two: the pull from above

A different study went after the force itself.

Working with mouse intestinal organoids grown on soft gels, it measured traction and monolayer tension directly. The transit amplifying zone came out under tension. Cells were pulled out of the crypt along a gradient of increasing tension, dragged by cells further into the villus-like domain, in the way the trailing edge of a migrating cell cluster is dragged by its leading edge. Cell velocity ran parallel to cell-substrate traction, which is the signature of collective migration and not of being shoved. Blocking myosin II abolished the traction forces and the tissue flattened, so the forces were actomyosin-generated.

These authors put the disagreement in plain terms: the widely assumed mechanism, a pushing force arising from compression downstream of mitotic pressure, is incompatible with their observation that the transit amplifying zone is under tension. Compression and tension have opposite signs. A region cannot be both.

And this design has the complementary weakness. It measured the disputed quantity directly, which the first design could not, but in a preparation the authors themselves qualify: the transit amplifying zone is shorter than in living tissue, the villus geometry is not reproduced, and the cells in the villus-like domain are thinner than in vivo and lack a well-developed brush border.

That last limitation deserves a moment, because this lesson has spent five scenes on the brush border and the terminal web anchored beneath it. A preparation whose cells have not built a proper brush border is missing an apical actin structure that is mechanically continuous with the junctions carrying these very forces. It does not make the force measurement wrong. It does mean the mechanical state of a cell in that dish differs from the mechanical state of a cell in a crypt in a way directly relevant to what was measured.

## Holding the question honestly

Lay the two side by side and the shape of the disagreement is clear.

| | Push from below | Pull from above |
| --- | --- | --- |
| What was measured | positions and proliferation rates over time | traction and monolayer tension |
| Where | intact mouse duodenum and ileum, in vivo | mouse organoid flattened on a gel |
| Strength | normal tissue, normal geometry | measures the force in dispute |
| Weakness | infers the force from a correlation | geometry and brush border not reproduced |

Neither study is careless and neither is decisive. They differ in what they measured and in the preparation they measured it in, and each is strong exactly where the other is weak. The defensible position is that proliferation in the crypt is tightly coupled to migration and is very likely a major contributor, that actomyosin-generated tension in the sheet is measurably present and pulls cells out of the crypt, and that the relative contribution of the two is open.

What would settle it is not a third opinion. It is a direct measurement of tension or traction in intact tissue with normal three-dimensional geometry, which is the one combination neither study achieved. Until then the circadian mismatch remains the sharpest single piece of evidence against pushing being the whole story, because it is a prediction failure and not a difference of preparation.

## A word about the word "motility"

Motility usually calls up a single cell crawling across a dish: a fibroblast extending a free front edge, gripping, and hauling itself forward. Almost none of that describes what happens here, and this lesson has deliberately used no single-cell crawling evidence at all.

An enterocyte never leaves the sheet. It stays joined to its neighbours by every attachment in the previous scene for the whole journey, and it is shed only at the end of it. There is no free leading edge, and the cell in front of it is not empty space but another cell it is bolted to. The organoid study's own description is of collective movement in which a cell's velocity aligns with traction and cells are dragged by those ahead.

Some of the machinery is genuinely shared, and that is the part worth carrying across: actomyosin generates the force in both cases, and integrin-based adhesion to the matrix transmits it in both cases. What does not carry across is the free front edge, the freedom to make and break adhesions at will, and the independence of one cell's direction from its neighbours'. A model of crawling imported wholesale into a crypt predicts a cell that could turn around and leave, and this cell cannot.

:::{source-note}
:claims: claim-proliferation-drives, claim-proliferation-limits, claim-tension-pulls, claim-organoid-limits, claim-collective-mode, claim-crypt-context, claim-crypt-integrins
:sources: source-parker-crypt-migration, source-perezgonzalez-crypt-tension, source-nguyen-colonic-crypt, source-benoit-crypt-integrins

A 2016 study of mouse small intestine supplies the control villus migration velocities of 9.00 ± 0.465 µm per hour in the duodenum and 5.96 ± 0.379 µm per hour in the ileum, the coupling of migration velocity to crypt proliferation rate across all conditions tested including a transgenic line with suppressed proliferation, the conclusion that crypt proliferation is the primary force driving migration along the villus, the explicit statement that additional mechanisms such as active migration and villus contraction and expansion cannot be ruled out, and the observation that villus migration shows a circadian rhythm not seen in crypt proliferation. A 2021 study of mouse intestinal organoids supplies the direct measurement of traction and monolayer tension, the finding that the transit amplifying zone is under tension, the pulling of cells out of the crypt along a gradient of increasing tension, the dragging of cells by those further into the villus-like domain, the alignment of cell velocity with cell-substrate traction as a signature of collective migration, the loss of traction and flattening of the tissue when myosin II was inhibited, the statement that a pushing force from compression downstream of mitotic pressure is incompatible with the transit amplifying zone being under tension, and the stated limitations that the transit amplifying zone is shorter than in vivo, the villus geometry is not recapitulated, and villus-domain cells are thinner than in vivo and lack a well-developed brush border. A review of colonic crypt biology supplies the upward migration with differentiation, the replacement of enterocytes every 4 to 5 days within a colon renewing every 3 to 5 days, and the shedding of cells at the surface. A study of the human intestinal crypt supplies integrin-based adhesion to the basement membrane, named here as the machinery shared with single-cell migration.

Both mechanical studies are mouse, and the velocity figures are small-intestinal villus measurements rather than colonic crypt ones; the colonic turnover interval comes from the human-focused review and the two are not combined into a single quantity. The conversion of 9.00 µm per hour into about ten cell-lengths per day is this lesson's own arithmetic, using the block's working absorptive-cell height of about 22 µm. The judgement that the open question requires a direct force measurement in intact three-dimensional tissue is this lesson's own reading of the two designs and is not a claim either study makes.
:::
