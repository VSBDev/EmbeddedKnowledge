# How the gradient gets made, and what is still argued about

Everything so far has taken the gradient as given: more Wnt at the base, less at the top, and a cell reading whatever reaches it. That is the part supported well enough to teach. How the gradient comes to exist is a different question, and it is one where the field has not finished.

The trouble starts with chemistry. Wnt proteins are hydrophobic, because they carry a lipid modification. That modification is not incidental: attaching a fatty acid to a conserved serine is required for a Wnt protein to be secreted at all, and cells that cannot perform the attachment retain their Wnt in the endoplasmic reticulum instead of releasing it.

Read that against what a gradient needs. The textbook picture of a gradient has a substance released at a source and spreading outward through the fluid between cells until distance and breakdown thin it out. That picture requires the substance to be at home in water. Wnt is not. A greasy protein released into an aqueous space has a travel problem, and how it is solved is exactly what remains open.

## The proposals, and what is said for each

Several mechanisms have been put forward, and a 2021 review of Wnt secretion treats them as coexisting instead of competing for a single winner. Some may operate together on one ligand in one tissue while others are context-dependent.

**Carried by something.** Lipoproteins, heparan sulphate proteoglycans, and exosomes have each been proposed as vehicles that let a lipid-modified protein move through an aqueous space.

**Handed along a projection.** Cytonemes, thin cellular extensions, have been proposed as a route by which a source cell delivers Wnt to a distant cell directly, bypassing the extracellular fluid.

**Travelling as its own micelle.** Oligomerisation was proposed as a way for Wnt molecules to shield their greasy faces from water by clustering. That one has evidence against it: in flies, blocking the movement of one labelled form of the Wnt homologue Wingless did not affect the spreading of a differently labelled form, which is difficult to reconcile with the two moving together as a shared particle.

**Not travelling far at all.** The reading most directly relevant to this lesson comes from the intestine itself. Work on Wnt3 in mouse intestinal crypts found a short-range distribution mediated by lateral transcytosis: the ligand is passed between neighbouring cells instead of being released to diffuse freely, and it moves away from its source in a cell-bound way as those cells divide and are displaced.

Whether Wnts act as long-range signalling molecules has been described as a long-debated question, with the exact range of their action not known.

## What that does to the picture

Suppose the short-range reading is right for the colonic crypt. Then the word "gradient" is still correct about the *profile*, because the amount of Wnt a cell receives still falls with height. It becomes wrong about the *mechanism*, because nothing is diffusing down a concentration gradient in the way the phrase invites you to imagine. The falling profile would instead be produced by handover between neighbours combined with dilution as cells divide and climb away from the source.

This distinction has teeth. Under free diffusion, the profile is set by how fast the substance spreads and how fast it is destroyed, and it exists independently of the cells. Under contact-dependent handover, the profile is a property of the cell population itself: its arrangement, its divisions, and its movement. Change the division rate and you change the gradient. Those are different theories of what a crypt is.

:::{callout}
:kind: note
:id: callout-what-survives

**Which statements in this lesson depend on the answer, and which do not.**

Unaffected. A cell's free beta-catenin level tracks how much Wnt binds its receptors. The amount binding falls with height in the crypt. The destruction complex, its recruitment, and the TCF and LEF response work the same way whatever delivered the ligand. The whole of scenes 2 and 4 stands either way, and so does the information-theoretic bound in scene 3, which cares only that a graded quantity is being read.

Affected. Any statement about *why* the profile has the shape it has. Any prediction about what happens to the gradient if you block diffusion, or if you stop the cells dividing. Any calculation of gradient shape from a diffusion coefficient, which is why this lesson does not attempt one.

The word **morphogen** is worth flagging here. Classically it names a substance that spreads from a source and specifies cell fate according to its local concentration, with spreading normally understood as diffusion. Wnt in the crypt satisfies the "specifies fate by local concentration" half comfortably. Whether it satisfies the spreading half in the classical sense is the open question above, so this lesson uses the word for the *role* Wnt plays and not as a claim about how it travels.
:::

:::{check}
:id: check-settled-and-proposed

1. Name the physical property of Wnt proteins that makes their spread a problem to explain, and the modification responsible.

2. A colleague says "the Wnt gradient forms by diffusion from the crypt base." What is right about that sentence and what overstates the evidence?

3. If the short-range handover reading turned out to be correct for human colonic crypts, which claim from scene 2 would you have to withdraw?

**Answers.** (1) They are hydrophobic, because of a lipid modification, and attaching that fatty acid is required for secretion. (2) Right: the source is near the base and the amount falls with height. Overstated: that the falling profile is produced by diffusion. The mechanism is debated, the range is described as not known, and one line of work in intestinal crypts reports short-range handover between cells instead. (3) None of them. Scene 2 describes what happens once Wnt reaches a receptor, and that is downstream of however the Wnt arrived. What would need withdrawing is any explanation of the profile's shape in terms of diffusion, which is why scene 2 does not offer one.
:::

:::{source-note}
:claims: claim-wnt-hydrophobic-lipid-modified, claim-wnt-transport-debated, claim-wnt-short-range-intestine, claim-crypt-wnt-gradient
:sources: source-mehta-wnt-secretion, source-nguyen-colonic-crypt

Wnt hydrophobicity and lipid modification, the requirement for palmitoylation and the conserved serine, the long-debated range, the four proposed carriers, the Wingless labelling result against oligomeric travel, and the short-range lateral transcytosis of Wnt3 in mouse intestinal crypts: a 2021 review of Wnt secretion, whose own language for the field includes "remains unclear", "poorly understood" and "controversial". The undisputed profile, WNT falling up the crypt axis from a mesenchymal source near the base: a 2025 review of the colonic crypt.

Which of this lesson's statements would and would not change under the short-range reading, and the contrast between a diffusion-set and a population-set profile, are the lesson's own analysis.
:::
