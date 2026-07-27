# Reading more than one input

Scene 4 left the gradient with a bound on it. One substance falling in one direction, read through thresholds, carves the axis into a few coarse zones. Nested thresholds buy zones far faster than they buy bits, a binary threshold carries at most one bit and usually less, and noise can only subtract. Scene 4 named one way out: genes that influence one another and report graded levels beat genes acting as independent switches.

There is a second way out, and the crypt uses it. The premise that the cell is reading one signal was never true.

## A second gradient, pointing the other way

Wnt is not the only graded substance along the crypt axis. BMP signalling is highest at the top of the crypt and falls towards the base, which makes its gradient the inverse of Wnt's. The gradient is held that way by BMP antagonists, Noggin and Gremlin among them, secreted by mesenchymal cells at the crypt base. The same mesenchyme that supplies the Wnt at the bottom is suppressing the BMP there.

Work in the mouse small intestine puts a relationship between the two: BMP represses Wnt signalling, and it is expressed in an opposing gradient along the crypt-to-villus axis with the strongest BMP signalling in the cells at the luminal surface. So a cell partway up sits in two gradients at once, running in opposite directions, one of which acts on the other.

Now ask scene 4's question about that arrangement, because the obvious answer is wrong.

:::{callout}
:kind: note
:id: callout-second-gradient-redundancy

**Does a second gradient double the information? No, and the reason is the one scene 4 already gave.**

This paragraph is the lesson's own reasoning applied to sourced facts, and it is flagged as such because no source consulted here counts bits for the crypt.

BMP runs along the same axis as Wnt and falls the other way. That makes a BMP reading close to a restatement of the Wnt reading, in the same sense that scene 4's nested thresholds were restatements of one another. Knowing that BMP is high is nearly the same as knowing that Wnt is low, because both are functions of one coordinate: height. Two readings of one coordinate do not describe two coordinates.

What a second, anti-parallel gradient can plausibly do is different from adding distinctions. It gives the cell a second measurement of the same quantity, and scene 4 established that measurements of a concentration are noisy counts. It also places an active opponent at the far end of the axis, so the difference between the two ends is enforced by two mechanisms working against each other instead of one fading out. Neither of those is a larger number of addresses.

This lesson has no figure for how much either arrangement is worth in the crypt, and asserts none.
:::

## An input that is not a gradient at all

Notch is a different instrument, and scene 3 showed why. Its ligands are membrane proteins carried on neighbouring cells, so the receptor is triggered on cell-to-cell contact. Nothing about that reads a concentration in the fluid, and nothing about it is tied to height.

In the colon, Notch signalling is active in the stem cell niche and the transit-amplifying compartment, the same two regions where Wnt is high. NOTCH1 to NOTCH4 are activated by Delta-like and Jagged ligands displayed on adjacent cells; cleavage releases the intracellular domain, which reaches the nucleus and switches on target genes. One is HES1, which represses ATOH1, a master regulator of secretory-lineage differentiation. The effect is to promote the absorptive colonocyte fate while holding back the secretory fates: goblet, enteroendocrine and tuft cells. Work in the mouse small intestine calls this the binary cell fate decision between the secretory and absorptive lineages.

Here is why that matters. Absorptive or secretory is a distinction the axis cannot make. Two neighbouring cells at the same height are at the same Wnt concentration and the same BMP concentration, and they still have to end up as different cell types. No number of thresholds on a height gradient will separate them, because the quantity being thresholded has the same value for both. A contact-dependent input is not redundant with the axis in the way BMP is, precisely because it is not a function of height.

So the crypt's answer to scene 4's bound is not to squeeze more addresses out of the Wnt gradient. It is to stop asking the gradient for information it does not carry.

## What the sources will and will not support about Wnt and Notch together

The two pathways act on the same cells, and the direction of the relationship is unresolved. That is worth stating plainly, because the temptation is to pick the tidier version.

One review of the intestinal crypt says the Wnt pathway synergises with Notch signalling to sustain undifferentiated and proliferative stem and progenitor cells, and that both are needed for lineage commitment along the absorptive and secretory routes. The same section then describes an experiment pointing the other way: blocking Notch with antibodies converted Lgr5-expressing intestinal stem cells into secretory cells and depleted the stem cell pool, with Wnt signalling going up, and repressing Wnt rescued the phenotype. The authors say this suggests opposing and interconnected activities.

Both statements sit in one section of one review, both trace back to the same primary study, and the review reconciles neither. The other review says only that Notch interacts with pathways such as Wnt, and neither offers a mechanism for the normal colon.

What is safe to carry is weaker than either version and is enough here: both pathways act on the stem and transit-amplifying compartments, the cell is reading both, and whether their relationship is cooperative or opposing is unsettled.

:::{callout}
:kind: note
:id: callout-crosstalk-species-scope

**Whose crypt, and which animal.** This scene is on thinner evidential ground than scene 2, and the difference should be visible.

The colonic review states the BMP gradient and the Notch mechanism for the normal colon without attributing either to a species, and the references underneath those two paragraphs are mouse studies and general pathway reviews. The second review is explicitly about the small intestine, is organised on a crypt-to-villus axis, and notes itself that the colon has crypts and no villi; its evidence is mouse genetics and organoids, and it reports no human crypt data. One detail from it has been left out here for that reason: it attributes the Notch ligands to Paneth cells, which are a small-intestinal cell type that the colonic review says the colon lacks.

So the direction of the BMP gradient in the human colon is sourced, and the mechanisms attached to it are better evidenced in mouse small intestine than in human colon. This scene says which is which instead of levelling them.
:::

## What this changes, and what it leaves standing

Scene 4's arithmetic survives all of this untouched. Noise still only subtracts: a cell reading two concentrations is counting two sets of randomly arriving molecules, and neither count beats the same count made perfectly. A binary threshold still carries at most one bit, and a full bit only when its two outcomes are equally likely.

What this scene withdraws is an assumption scene 4 stated openly, that there is one input. A 2025 review of the colon puts the general claim as the coordinated interplay of Wnt, Notch, BMP and FGF signalling maintaining colonic epithelial homeostasis. A cell partway up is reading a Wnt level, a BMP level, and whatever its neighbours display on their surfaces.

That is a better answer to scene 1's question than the one this lesson started with. The cell does not know how far up it is. It knows how much Wnt is arriving, how much BMP is arriving, and who is touching it, and those are enough to behave correctly without any of them being an address.

:::{check}
:id: check-crosstalk

1. A cell partway up the crypt reads both Wnt and BMP. Why does adding the BMP reading fail to multiply the number of positions the cell can distinguish?

2. Two cells are side by side at the same height in a crypt. One becomes a colonocyte, the other a goblet cell. Explain why no threshold on the Wnt gradient can account for that, and name the kind of input that can.

3. A revision summary states: "Wnt and Notch cooperate to maintain crypt stem cells." What is right about that, and what does this lesson's evidence not let you say?

**Answers.** (1) Because BMP varies along the same axis as Wnt and in the opposite direction, so a BMP reading is close to a restatement of the Wnt reading. Both are functions of one coordinate, height, and two readings of one coordinate do not supply two coordinates. What the second gradient can plausibly offer is a second noisy measurement of the same quantity and an opposing activity at the far end of the axis, and this lesson quantifies neither. (2) Both cells sit at the same Wnt concentration, so any threshold on that concentration returns the same answer for both, and thresholds are the only thing the gradient offers. The distinction has to come from an input that is not a function of height. Notch is one: its ligands sit on neighbouring cells and it is triggered on cell-to-cell contact, so what it reports is which cells are adjacent. (3) One review does state that Wnt synergises with Notch to sustain undifferentiated and proliferative stem and progenitor cells, so the sentence is not invented. What the evidence does not support is stating the direction as settled. The same section of that review reports Notch inhibition depleting stem cells while Wnt signalling went up, with the phenotype rescued by repressing Wnt, which its authors say suggests opposing and interconnected activities. Both readings rest on the same primary study and the review reconciles neither.
:::

:::{source-note}
:claims: claim-bmp-opposing-gradient, claim-notch-crypt-fate-choice, claim-wnt-notch-relationship-unresolved, claim-crypt-multi-pathway-integration, claim-combining-inputs-not-additive, claim-notch-contact-and-cleavage, claim-crypt-wnt-gradient, claim-positional-information-ceiling, claim-noise-averaging-limit
:sources: source-nguyen-colonic-crypt, source-spit-crypt-niche, source-heldin-signals-receptors, source-hillenbrand-positional-information, source-tostevin-position-limits

BMP signalling highest at the crypt top and decreasing towards the base, inverse to the Wnt gradient, held by the antagonists Noggin and Gremlin secreted by mesenchymal cells at the base; Notch active in the stem cell niche and transit-amplifying compartment, activated by Delta-like and Jagged ligands on adjacent cells, with HES1 repressing ATOH1 to promote the absorptive fate and hold back the secretory fates; and the statement that coordinated interplay of Wnt, Notch, BMP and FGF signalling maintains colonic epithelial homeostasis: a 2025 review of the colonic crypt. BMP repressing Wnt in an opposing gradient along the crypt-to-villus axis with the strongest signalling at the luminal surface, the synergy statement for stem and progenitor cells, the Notch-blocking experiment with its stem cell depletion and Wnt upregulation and the authors' reading of opposing and interconnected activities, and the binary fate decision between secretory and absorptive lineages: a 2018 review of intestinal niche signals, whose evidence is mouse small intestine and organoids. Notch ligands as membrane proteins on neighbouring cells with the receptor triggered on cell-to-cell contact: a 2016 review of signals and receptors. The one-bit ceiling for a threshold read of a monotonic gradient and the finding that gene interaction supplies information beyond independent thresholds: a 2016 study of positional information. The result that noise entropy subtracts from a reading built on randomly arriving molecules: a 2007 theoretical study. The crypt Wnt gradient and its mesenchymal source: the 2025 colonic review.

The argument that an anti-parallel gradient on the same axis is largely redundant with Wnt, that a contact-dependent input is not redundant in the same way, and that this is why the crypt can separate two cells at one height, is this lesson's own reasoning and is labelled as such where it appears. No source consulted here counts bits for the crypt or measures what any second input contributes, and no figure is asserted.
:::
