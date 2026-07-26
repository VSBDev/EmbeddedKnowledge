# Fluid does not mean shuffled

There is one error that the phrase *fluid mosaic* invites, and it is worth meeting head on because it wears the look of understanding.

:::{misconception}
:id: misconception-fluid-implies-uniform

**The incorrect model.** Everything in a membrane diffuses. Given time, therefore, everything ends up everywhere. A membrane is a well-stirred two-dimensional solution, and any difference between one part of it and another is temporary.

**Why it fails.** It treats one measured rate as though it were the only one. Movement in the plane is fast, so anything free to move in the plane does mix. Movement between the two layers is slower by about thirteen orders of magnitude, so a difference between the two layers does not run down on any timescale a cell cares about. Diffusion mixes what it can reach, and there is a great deal it cannot reach.

**The corrective test.** The incorrect model expects a difference between the two layers to even out on the timescale that mixing within a layer takes, which is seconds to minutes. Establish such a difference and measure it. A difference set up in a plasma membrane takes several days to run down without enzymes helping, and in synthetic bilayers a given phospholipid crosses less than once a month. The prediction misses by five or six orders of magnitude, and the model that made it is the one to discard.
:::

The word *mosaic* never implied a uniform distribution. Evidence for uneven distribution within membranes goes back to the 1960s, before the fluid mosaic model was set out in 1972, and the misreading came later.

## Two layers, two compositions

Take the real inventory. In eukaryotic plasma membranes, phosphatidylcholine and the sphingolipids sit mostly in the outer layer, while phosphatidylserine, phosphatidylethanolamine and the phosphoinositides are restricted to the layer facing the cytoplasm.

The diagram in the first scene draws the same lipids on both sides. That is the notation limit mentioned there, and this is where it bites: a membrane's two halves are chemically different, and a picture that draws them the same is leaving out one of the two most important organising facts about the structure.

Slow spontaneous crossing lets a difference persist once it exists. It does not create one. Three families of protein do that work.

- A **flippase** moves selected phospholipids, phosphatidylserine and phosphatidylethanolamine among them, from the outer side to the cytoplasmic side. Flippases belong to the P4-ATPase family and spend ATP.
- A **floppase** moves phospholipid in the reverse direction, outward from the cytoplasmic side. Floppases are ABC transporters and also spend ATP.
- A **scramblase** moves phospholipids in both directions without specificity and without ATP, randomising the distribution instead of maintaining it.

Read that list as a budget. Maintaining the asymmetry is an ongoing expense, paid continuously, in a structure where the physics is already resisting the change. A cell would not pay it unless the arrangement were doing something.

## What the arrangement is for

It is a signal. Phosphatidylserine kept out of the outer layer is a molecule the outside world never sees, so putting it there means something specific.

When a scramblase is switched on and phosphatidylserine appears on the outer surface of an activated platelet, it promotes blood clotting. When it appears on the outer surface of a dying cell, macrophages read it as an instruction to engulf that cell. A crypt cell reaching the top of its climb is a cell about to be removed, and lesson 10 takes up how that removal is controlled.

The general shape of the argument is worth keeping. A cell built a difference that physics tends to preserve, spent energy maintaining it anyway, and then acquired a way to abolish it on demand. The abolition is the message. Nothing about that is available to a well-stirred solution.

:::{check}
:id: check-asymmetry-mechanism
:kind: retrieval

A drug blocks all flippase activity in a cell without affecting anything else. Predict what happens to the distribution of phosphatidylserine between the two layers over the following minutes, and over the following week. State which rate you used for each answer.
:::

Over minutes, close to nothing. Spontaneous crossing has a half-time of days, so blocking the enzyme that opposes it removes a correction that was operating against a very slow leak. Over a week the asymmetry degrades substantially, because days is now the only timescale in the system. The first answer uses the spontaneous crossing rate; the second uses the same rate run for long enough to matter. Note what the question did not include: a scramblase being switched on would collapse the difference in far less time than either answer, and that is a different mechanism rather than a faster version of this one.

:::{source-note}
:claims: claim-flip-flop-rate, claim-leaflet-asymmetry, claim-flippase-scramblase, claim-ps-exposure-signal, claim-fluid-mosaic-revision, claim-enterocyte-context
:sources: source-alberts-lipid-bilayer, source-segawa-flippases, source-hankins-flippases, source-bernardino-plasma-membrane, source-nguyen-colonic-crypt

A cell-biology textbook chapter supplies the rarity of crossing between layers in synthetic bilayers and the distribution of choline-containing lipids to the outer layer with amino-group-containing lipids to the inner one. A review of plasma-membrane lipid transporters supplies the same distribution independently, the half-time of several days for an established asymmetry to decay without enzymatic help, the ATP-dependence of flippases moving phosphatidylserine and phosphatidylethanolamine to the cytoplasmic side, the ATP-independent bidirectional action of scramblases, and both signalling roles of exposed phosphatidylserine in clotting and in clearance of apoptotic cells. A second review of phospholipid transport supplies the three-family scheme used above: P4-ATPase flippases moving lipid inward, ABC-transporter floppases moving it in the reverse direction, both ATP-dependent, and ATP-independent scramblases randomising the distribution bidirectionally. It also supplies the restriction of phosphatidylserine, phosphatidylethanolamine and the phosphoinositides to the cytosolic layer against phosphatidylcholine and sphingolipids outside. A review of plasma-membrane organisation supplies the 1972 date of the fluid mosaic model and the point that heterogeneity within membranes was observed from the 1960s, so *mosaic* never carried a claim of uniformity. A review of colonic crypt biology supplies the crypt context in which cells are removed at the top of the climb.

The thirteen-orders-of-magnitude figure is carried forward from the second scene's own arithmetic.
:::
