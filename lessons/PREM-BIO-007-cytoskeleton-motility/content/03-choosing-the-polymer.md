# Choosing a polymer for a stated job

The previous scene gave three persistence lengths and two cell dimensions. This scene turns them into a decision procedure you can run on a new structure, and then runs it four times.

The whole method is one comparison. Take the length of the structure that has to be held rigid, call it $L$, and divide the filament's persistence length by it.

:::{equation}
:label: equation-stiffness-ratio

R = \frac{\ell_p}{L}
:::

Read the answer like this. When $R$ is comfortably greater than 1, the filament stays essentially straight over that distance and behaves as a rod. When $R$ is about 1 or less, thermal motion bends it appreciably over that distance and a single filament will not hold the shape on its own.

The two lengths in play for a colonic absorptive cell are its height, about 20 to 25 µm, and the length of one microvillus on its apical surface, about 1 µm.

:::{worked-example}
:id: worked-example-which-polymer

**The task.** For each of four demands on this cell, decide which filament system can meet it, and say which property decided it.

**Demand 1: hold a 1 µm projection out against the surface tension of a fluid membrane.**

Start with actin, taking the working figure of about 10 µm for its persistence length.

$R = 10\ \mu\text{m} / 1\ \mu\text{m} = 10$

Ten is comfortably above 1, so a single actin filament is rod-like rather than coiled over the length of a microvillus. Check the pessimistic end of the published range as well, because a conclusion that only survives the favourable number is not a conclusion: at the bottom of the 3 to 17 µm range, $R = 3$, still above 1. The classification holds across the range.

Be exact about what that ratio has and has not established. Persistence length is the length over which thermal energy has not yet randomised a filament's direction, so $R$ above 1 says the polymer belongs to the stiff class at this scale and $R$ below 1 says it does not. It does not say the filament can carry the load. Whether a structure holds against a given force depends on the force, on how the ends are held, on the filament's own length, and on whether filaments are cross-linked into a bundle, and the ratio contains none of those.

Which is why the observed microvillus is not one filament. Its core is a cross-linked bundle of about 19 actin filaments, tied together by fimbrin and villin, with myosin-1A cross-bridges to the membrane. The ratio did the job it can do: it narrowed four polymers to one. The bundle is how the cell then meets the load, and a single filament of the right stiffness class is the starting material rather than the finished structure.

Test an intermediate filament against the same demand. With a persistence length of about 0.2 to 1 µm, $R$ runs from 0.2 to 1. At best it is marginal, and at worst the filament bends five times over within the length it is meant to hold straight. Intermediate filaments are ruled out here on stiffness alone, without needing any other argument.

A microtubule would certainly be stiff enough, with $R$ greater than 1000. It is ruled out on a different ground: at about 25 nm across it is a quarter of the width of the projection it would have to sit inside, and the observed structure is a bundle of thin filaments and not one thick tube. Being sufficient is not the same as being what is used.

**Answer: actin. Decided by stiffness at the micrometre scale.**

**Demand 2: define the cell's apical-to-basal axis across its full 20 to 25 µm height.**

Actin first, because it won the previous round and a good procedure does not assume the previous answer transfers.

$R = 10\ \mu\text{m} / 22\ \mu\text{m} \approx 0.45$

Below 1. A single actin filament is floppy over the height of this cell, so it cannot by itself mark out an axis from apical surface to basement membrane.

Microtubule:

$R > 1000\ \mu\text{m} / 25\ \mu\text{m} = 40$

Forty cell-heights of straightness. A microtubule crossing this cell is, for practical purposes, a straight rod. Add polarity, which gives the axis a direction and lets kinesins and dyneins run traffic one way or the other along it, and the case is made twice over. The observation that microtubules in these cells are in fact arranged along the apicobasal axis agrees with the prediction.

**Answer: microtubules. Decided by stiffness at the cell scale, and confirmed by polarity.**

**Demand 3: carry a vesicle from the Golgi to a chosen face of the cell.**

Stiffness is not the deciding property here; direction is. The demand contains the word "chosen", and only a polar filament can distinguish one destination from the other. Actin and microtubules are both polar and both carry motors, so both are admissible, and over a 20 µm journey the microtubule's rigidity and directionality make it the long-haul option.

Intermediate filaments are excluded absolutely, not marginally. They are apolar and carry no motors, so there is no mechanism by which anything could be moved along one in a selected direction. This is a different kind of exclusion from Demand 1: there, intermediate filaments were too floppy for the job, and here, no amount of stiffness would help.

**Answer: microtubules, with actin admissible for short distances. Decided by polarity.**

**Demand 4: keep the sheet intact while it is stretched and scraped for days on end.**

Run the stiffness comparison and it gives the wrong kind of answer. Intermediate filaments lose that comparison at every length scale in this cell. So the comparison is the wrong one, which is itself the lesson: pick the property the demand names.

The demand names deformation and survival, so compare extensibility. Intermediate filaments stretch past 200 per cent of their resting length without breaking, some to 350 per cent, and their networks stiffen progressively from about 10 to 20 per cent strain instead of failing. Against actin directly, they hold force at higher tensile loads. Nothing in the actin or microtubule data comes near this.

Their disadvantages are irrelevant to this demand. Floppiness does not matter when the job is to be pulled, not to push. Having no motors does not matter when nothing needs to be transported.

**Answer: intermediate filaments. Decided by extensibility, and their apolarity costs nothing here.**
:::

## What the procedure does not settle

Two limits, and both matter.

The persistence lengths above were measured on purified single filaments in vitro. A cell does not use single filaments; it cross-links them. Nineteen actin filaments tied together into a bundle resist bending far better than one does, so the single-filament figure is a floor on what an actin structure can achieve, not a ceiling. Demand 1 came out the same either way, which is why the argument was safe to make there. Do not carry that luck into a case where the single-filament number lands near $R = 1$.

And a favourable ratio never establishes that a cell actually uses a given polymer for a given job. Demand 2 was checked against an observation, not left as a prediction. Where an argument from mechanics is all you have, that is where the argument stops.

:::{source-note}
:claims: claim-persistence-lengths, claim-if-apolar-no-motors, claim-if-extensibility, claim-if-tensile-vs-actin, claim-mt-apicobasal, claim-microvillus-dimensions, claim-microvillus-core-actin, claim-microtubule-diameter, claim-enterocyte-height, claim-stiffness-classification
:sources: source-pegoraro-cytoskeleton-mechanics, source-vanbodegraven-if-mechanics, source-green-desmosomes, source-sumigray-desmoplakin, source-brown-microvillar, source-nguyen-colonic-crypt

The persistence lengths, the extensional-strain figures and the network strain-stiffening onsets come from the two mechanics sources introduced in the previous scene; the direct tensile comparison between intermediate filaments and actin comes from the desmosome review; the apicobasal microtubule arrangement in these enterocytes comes from the 2012 desmoplakin deletion study; and the microvillus length, the count of about 19 core filaments and the microtubule diameter of about 25 nm come from the 2010 microvillar cytoskeleton study.

Every ratio computed in this scene is this lesson's own arithmetic on those published lengths. No source states these ratios or draws the four conclusions in this form. The enterocyte height of 20 to 25 µm is the working figure carried forward from earlier lessons in this block. The claim that cross-linking raises a bundle's bending resistance above a single filament's is presented as a physical argument and as a limit on the procedure, not as a measured result from these sources.

The decision procedure in this scene is the lesson's own, built on the sourced persistence lengths. What it establishes is a stiffness class over a stated length and not a filament's capacity to bear a load, which is why the microvillus core is a cross-linked bundle rather than one filament. The cell height is the working figure this block uses, an order of magnitude and not a constant.
:::
