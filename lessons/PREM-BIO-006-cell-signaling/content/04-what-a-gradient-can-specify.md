# How much position is actually in there

Descriptions of gradients in developmental biology reach for the same metaphor over and over: the gradient is a coordinate system, a chemical map on which the body plan is drawn. It is a good image and it is worth testing, because it is possible to count how much position a gradient can supply and compare that with how much the crypt would need.

Two quantities get counted below and they are easy to confuse, so fix them now. **Zones** are the regions a readout can tell apart. **Bits** measure how much choosing among those regions narrows things down: *n* bits distinguishes 2 to the power *n* zones. **Thresholds** are the switch points a readout implements. Those three are not the same number, and most of the interest in this scene is in how far apart they are.

Everything numerical below is this lesson's own arithmetic applied to figures from its sources, and the scene says so at each step rather than leaving it to the note at the end.

:::{worked-example}
:id: worked-example-bits-of-position

**The question.** A crypt of the descending colon is about 32 cells along its length. Suppose, for the sake of the calculation, that every one of those 32 positions had to be told apart from every other. How much information would that demand, and how many thresholds would supply it?

**Step 1: how many bits would the job take?** Picking one of 32 things out of the set takes a series of yes-or-no questions, each halving the field. Thirty-two halves to sixteen, to eight, to four, to two, to one: five questions. **The demand is 5 bits, which is the same thing as 32 zones.**

**Step 2: how many bits does one threshold supply?** A cell reading a gradient has to turn a concentration into a decision, and the simplest way is a threshold: above some level switch a gene on, below it leave it off. One gene reading one threshold on a gradient that falls in one direction divides the tissue into two regions, above and below. Two zones is **1 bit**. This is the ceiling for that arrangement, and not a defect of a particular gene.

**Step 3: how many thresholds for 32 zones?** Careful here, because the obvious move is wrong. Do not divide 5 bits by 1 bit and answer five. Thresholds on a single falling gradient are *nested*: they sit at different heights on one axis, so knowing the highest one a cell is above tells you the state of every lower one. The genes are maximally redundant with one another, and **their bits do not add.**

Count zones instead. Each threshold draws one boundary across the axis, so *k* thresholds cut the axis into *k* + 1 zones. For 32 zones, *k* + 1 = 32, so **31 thresholds**.

**Step 4: reconcile 5 and 31.** Both numbers are right and they measure different things. Thirty-one nested threshold genes produce 32 distinguishable zones, and 32 zones is 5 bits. So 31 genes carry about 5 bits *between them*, not 31 bits, even though each one carries 1 bit on its own. Redundancy is the whole explanation: reading one gradient at 31 heights is an expensive way to buy 5 bits.

**Step 5: decide which number to doubt.** Nobody proposes that the crypt runs 31 threshold genes. The step to reject is the supposition in Step 1. The crypt has no use for 32 separate addresses, so the demand was never 5 bits, and the mismatch tells you something about the question instead of something about the gradient.

**What the calculation assumes.** Independent genes, one threshold each, a gradient that falls monotonically, and no noise. Those assumptions do not all point the same way when they are loosened, and the difference matters.

Dropping *independent genes* or *one threshold each* raises the supply: genes that regulate one another, or that read graded levels rather than an on-or-off call, can carry more than this floor.

Dropping *no noise* lowers it. The theoretical work this scene draws on is explicit that noise entropy can only subtract from positional information; a reading built on counting randomly arriving molecules cannot beat the same reading made perfectly. So the noiseless assumption is the one that makes this number an optimistic ceiling rather than a floor, and the two kinds of assumption have to be kept apart.

One further correction to the arithmetic above. A binary threshold carries *at most* one bit, and it carries a full bit only when its two outcomes are equally likely. A threshold placed where nearly every cell falls on the same side of it carries almost nothing. So the count of thresholds is an upper bound on the bits they supply, before noise is considered at all.
:::

The compact form of Step 1:

:::{equation}
:label: equation-bits-for-positions

\log_{2} 32 = 5

:::

Carry the bits-are-not-thresholds distinction with you. If a later question asks for thresholds, count boundaries and answer *k*; if it asks for bits, count zones and take the logarithm. Answering one with the other is the single most common way to get this wrong.

## The metaphor breaks here, and the biology is more interesting for it

A gradient is not a coordinate system. What a monotonic gradient plus threshold-reading gives you is a small number of coarse zones, and the number is set by how many thresholds the readout machinery actually implements.

For the crypt this turns out to be the right shape of answer, because a crypt does not need 32 addresses. It needs a handful of regimes: divide and stay undifferentiated near the base, stop dividing and mature further up, work and be shed at the surface. A gradient read through a few thresholds delivers exactly that. The metaphor oversold the mechanism, and the mechanism is well matched to the job.

That conclusion is about the *output* of the readout, and it carries a requirement for everything upstream of it that scene 6 will need. Coarse zones have to be carved out of something continuous. If the pathway that converts outside concentration into inside signal were to saturate early, every threshold would have to be crammed into the narrow input range below saturation, and no zone boundary could be placed higher up the crypt at all. A few coarse output zones therefore demand a faithfully graded intermediate, not a saturating one. Keep that: the readout is coarse, and what it reads has to be smooth.

Real tissues also do better than the crude accounting above. In the fruit-fly embryo, where this has been measured most carefully, four genes reading the early gradients were estimated to carry 4.2 plus or minus 0.05 bits of positional information between them, enough for a nucleus to place itself to roughly 1 per cent relative precision. Set that against the arithmetic, which is again this lesson's own. Four genes acting as four independent on-or-off switches could carry at most 4 bits. Four *nested* threshold genes on one falling gradient would manage only five zones, about 2.3 bits. Measured at 4.2 bits, that system exceeds both: the genes influence one another, and their graded expression levels carry information that on-or-off calls would discard. Cells beat the simple threshold ceiling by declining to use simple thresholds.

Two cautions on that figure. It is from an insect embryo, a syncytium of nuclei in a shared cytoplasm, and no equivalent measurement is quoted here for the human colonic crypt. It is offered as the best-characterised case of how much position a gradient system can carry, not as the crypt's value.

## The noise floor, and why precision costs time

There is a second limit, underneath the first, and it comes from the fact that molecules arrive one at a time.

A cell does not perceive a concentration. It perceives a sequence of binding events at a finite number of receptors, and that sequence is random even when the concentration is perfectly steady. Estimating a concentration from it is a counting problem, and counting problems get more accurate the longer you count. Theoretical work on the limits of position determination from concentration gradients puts a shape on that: the width of the region a cell can localise itself to shrinks in proportion to the averaging time raised to the power minus one half. Longer averaging, narrower uncertainty.

That scaling law has a consequence worth stating plainly, because it is the sort of thing a metaphor hides. Halving your positional uncertainty costs four times the averaging time, since the width follows the inverse square root. Precision is bought with time.

And a crypt cell does not have unlimited time, because it is moving while it measures. Cells in the lower half of the human colonic crypt migrate upward at an average speed of around 4 micrometres per hour, and a crypt cell is around 10 micrometres across. By this lesson's arithmetic, an hour of patient averaging carries the cell about 4 micrometres, close to half a cell position. The longer it averages to pin down where it is, the further it has gone from wherever that was. A cell reading a positional gradient is estimating a quantity that its own measurement time is changing.

Neither of these limits says the mechanism fails. Both say it is bounded, and they say where the bounds come from: the number of thresholds the readout implements, the number of receptors, the number of molecules arriving, and the time available to count them. A description that leaves those out is describing something tidier than a cell.

:::{callout}
:kind: note
:id: callout-scope-of-noise-limit

Scope check on the noise result. The study quoted here models gradients used for positioning *inside* a single cell, of the kind bacteria use to find their own middle. What transfers to the crypt is the structure of the argument and the inverse-square-root scaling, both of which follow from molecules arriving at random. What does not transfer is any particular molecule or receptor count, so none is quoted. This lesson found no published figure for the number of Wnt receptors on a human colonic crypt cell, which means the noise floor here can be given a shape but not a value.
:::

:::{source-note}
:claims: claim-positional-information-ceiling, claim-gap-gene-information, claim-noise-averaging-limit, claim-crypt-geometry, claim-crypt-migration-speed, claim-crypt-cell-diameter
:sources: source-hillenbrand-positional-information, source-tostevin-position-limits, source-vanderwath-crypt-model, source-baker-crypt-dynamics

The coordinate-system framing, the one-bit ceiling for a gene reading a threshold with a monotonic response, the point that the position-to-cue mapping can be noisy or ambiguous, the 4.2 plus or minus 0.05 bit gap-gene estimate with its 1 per cent precision, and the finding that cells exceed thresholds by gene interaction and spatial coupling: a 2016 study of positional information. The inverse-square-root scaling of positional width with averaging time, in models of positioning inside a single cell: a 2007 theoretical study. Crypt length of about 32 cells and mean cell radius of 5 micrometres: a 2013 modelling study. Upward migration of around 4 micrometres per hour in the lower half of the crypt: a 2014 study of human colonic crypts.
:::
