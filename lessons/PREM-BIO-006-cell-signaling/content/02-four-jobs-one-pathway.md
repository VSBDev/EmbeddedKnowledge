# Four jobs, and the one pathway that does them

Any system that lets one cell change another cell's behaviour has to solve four separate problems, and it helps to keep them apart because different molecules solve each one.

Something has to carry the message. Something has to notice it arriving. Something has to get the news across a membrane that the message itself cannot cross. And something has to change, at the end, or nothing was communicated.

The names for those four jobs are the **signal**, the **receptor**, **transduction**, and the **response**. A fifth job is easy to forget and does most of the work of making a signal useful: the whole thing has to be able to stop.

:::{definition}
:id: definition-four-parts

A **signal** is a molecule released by one cell whose presence and amount change what another cell does. When the emphasis is on the molecule binding to something, the same molecule is called a **ligand**.

A **receptor** is a protein that binds a particular signal and, as a consequence of binding it, changes what it does. A cell-surface receptor sits in the membrane with a part outside the cell and a part inside.

**Transduction** is the conversion of the binding event into a change inside the cell. Cell-surface receptors act as signal transducers: they turn an extracellular ligand-binding event into intracellular signals that alter the behaviour of the target cell.

The **response** is the change in the cell's behaviour: a gene transcribed, a protein activated, a channel opened, a division started or stopped.

**Termination** is the return towards the unstimulated state when the signal is withdrawn.
:::

Now watch one real pathway do all five. This is the pathway that reads position in the crypt.

## Reception

:::{diagram} ../diagrams/wnt-reception-to-response.diagram.json
:alt: A chain from mesenchyme at the crypt base through Wnt protein and its receptor to the destruction complex, free beta-catenin, its partnership with TCF/LEF, and the stem-cell gene programme.
:longdesc: Seven stages read left to right, with two inhibitory links. Mesenchyme at the crypt base secretes Wnt protein. Wnt protein binds the receptor pair Frizzled with LRP5/6. The bound receptor recruits the destruction complex, which includes APC, Axin, CK1A and GSK3B, to the membrane, and that link is inhibitory. The destruction complex marks free beta-catenin for degradation, which is the second inhibitory link. Free beta-catenin enters the nucleus and partners TCF/LEF. That partnership switches on the stem-cell gene programme, including c-MYC, LGR5 and cyclin D1. Only two links carry a negative sign and they sit next to each other, so Wnt does not switch beta-catenin on: it blocks the machine that was destroying it. Remove the Wnt and the chain reverts, because the destruction complex runs all the time and beta-catenin is being replaced and destroyed continuously.
:::

The signal is a Wnt protein, secreted by mesenchymal cells near the crypt base. The receptor is a pair of proteins working together: Frizzled, with LRP5/6 alongside it. Wnt binding to that receptor complex is what drives everything downstream.

Note what reception does and does not do. One Wnt molecule occupies one receptor complex. Nothing is multiplied at this step, and nothing about the molecule tells the cell a position. All the cell obtains from a single binding event is one bit of the crudest kind: something arrived. The position information is in the *rate* at which such events happen, which depends on the concentration outside, which depends on height in the crypt. A cell near the base has many occupied receptors at any moment; a cell near the top has few. That is the whole of the trick, and scene 3 asks how well it can possibly work.

## Transduction, which runs backwards

Here the pathway does something that catches most people out on first reading.

### Naming the quantity that matters

One definition first, because every number in this lesson refers to it. Beta-catenin exists in a cell in more than one state, and they are not interchangeable. A large and highly stable share of it sits at the membrane bound up with E-cadherin, and that pool takes no part in this pathway; the study that measured the pathway's dynamics removed that fraction before analysing anything. Separately, beta-catenin can be held inside the destruction complex, and it can be phosphorylated and on its way to being destroyed.

**Free beta-catenin** in this lesson means the pool that is neither held in the destruction complex nor yet phosphorylated. That is the quantity the pathway's own measurements report, quoted as free non-phosphorylated beta-catenin in nanomolar, and it is the pool that can reach the nucleus. When a source says "available" beta-catenin it means the same thing. Every figure below refers to this pool and to no other.

### The machine that keeps it scarce

In a cell receiving no Wnt, a set of proteins assembles into a **destruction complex**. It includes APC, Axin, and two kinases, CK1A and GSK3B. Beta-catenin is drawn into that complex, phosphorylated there, and the phosphorylated form is tagged with ubiquitin and destroyed in the proteasome. So without a signal, beta-catenin is made and then continuously destroyed, and little free beta-catenin accumulates.

When Wnt binds the receptor complex, free beta-catenin rises. The signal does not switch on the production of beta-catenin. It interferes with the machine that was destroying it, and beta-catenin accumulates because synthesis was never the limiting step; destruction was. A signal that arrives as an inhibitor of an inhibitor produces a rise in the output.

### Why interference happens is not settled, and the candidates are worth knowing

The link from Wnt binding to a fall in destruction is where accounts differ, and the difference is instructive rather than a detail to skip.

What is agreed is that some destruction complexes move. On exposure to a localised Wnt cue, work in human colon epithelial cells found the complex reorienting towards the cue and travelling towards the plasma membrane while keeping its composition and its hold on beta-catenin. So the complex is not taken apart; it changes address, and the authors of that study propose relocation rather than disassembly on that basis.

Relocation on its own does not finish the explanation, and the literature says so. A complex sitting at the membrane is away from the cytosol where its substrate is, and moving some complexes there does reduce the phosphorylating activity, but the residual activity after Wnt stimulation comes mainly from the complexes that did not move, and those remain intact and active in the cytoplasm. Partial removal of the machinery gives partial loss of destruction. Two further mechanisms are proposed to account for the rest, and they are not variations on each other:

**Inactivation by saturation.** Wnt stimulation may temporarily clog the destruction complex with beta-catenin that has already been phosphorylated, so the complex is occupied and cannot process more.

**Blocking the tagging step.** Wnt stimulation may release a partner from the complex in a way that stops the ubiquitin-attaching enzyme from docking, so beta-catenin is phosphorylated but never tagged for the proteasome.

Which of these carries the load is described in the literature as controversial. The honest summary for this lesson: Wnt binding reduces the rate at which free beta-catenin is destroyed, relocation of some complexes is part of it, and the remainder is unsettled between saturation of the complex and interruption of the tagging step. What follows in this lesson depends only on the reduction in destruction rate, which every one of those accounts delivers.

One detail from the relocation work matters later. The move requires full-length APC: where APC was truncated or deleted, the reorientation largely failed. Hold on to that for the final scene.

## Response

Free beta-catenin that escapes destruction enters the nucleus, where it partners the transcription factors TCF and LEF. The partnership switches on a set of genes, among them c-MYC, LGR5 and cyclin D1. Those are the genes of a dividing, undifferentiated, stem-like cell, which is the behaviour appropriate to the crypt base and inappropriate at the crypt top.

So the loop closes. High Wnt at the base means a lot of free beta-catenin, which means the stem-cell programme is on. Low Wnt near the surface means beta-catenin is destroyed nearly as fast as it is made, the programme is off, and the cell differentiates. The gradient outside has become a gradient of gene expression inside.

## Termination, which is already built in

A signalling system that cannot stop is not a signalling system; it is a switch that has been thrown once. Asking what happens when a signal is withdrawn is as much a part of the account as asking what happens when it arrives, and the general reason such effects are transitory is that a signal works by altering a set of molecules that are themselves unstable and undergoing continual turnover.

The Wnt pathway gets this almost for free. The destruction complex runs continuously instead of being assembled on demand, and beta-catenin is being synthesised and degraded the whole time. Take the Wnt away and the complex returns to its usual work, free beta-catenin falls back to its low level, and the gene programme switches off. Termination is the resting state reasserting itself.

That is also why a cell can *track* its position instead of merely recording it once. A cell partway up the crypt is continuously re-reading a concentration that is continuously falling as it climbs, and its free beta-catenin level is continuously following.

One caution on that picture, because scene 4 will disturb it. Everything above treats the cell as reading the current concentration, with no reference to any earlier value. That is the straightforward reading of the mechanism, and it is the one this scene has described. Scene 4 introduces evidence for a different possibility, in which what the downstream machinery reads is the *change* in beta-catenin against its recent level, which would require the cell to hold a short-term baseline. Nothing in this scene settles that, so treat "the cell reads the level here and now" as this scene's working account and expect it to be qualified.

:::{check}
:id: check-two-negatives

Before going on, answer these from what you have just read, without scrolling back.

1. A drug blocks the kinase GSK3B in a colonic crypt cell that is receiving no Wnt at all. What happens to that cell's free beta-catenin level, and why?

2. Which single step in the chain above involves one molecule of signal and one receptor complex, with no multiplication?

3. A cell's Wnt receptors are all occupied for one second and then the Wnt is washed away. Name the thing that returns free beta-catenin to its low level, and say whether it had to be built first.

**Answers.** (1) It rises. GSK3B is one of the two kinases whose phosphorylation of beta-catenin leads to its being tagged and destroyed, so blocking GSK3B slows the destruction and free beta-catenin accumulates. (2) Reception: a Wnt molecule binding its Frizzled and LRP5/6 receptor complex. (3) The destruction complex, and no. It runs continuously, so termination needs nothing new to be made.
:::

:::{source-note}
:claims: claim-transduction-definition, claim-wnt-receptor-complex, claim-destruction-complex-role, claim-wnt-recruits-complex, claim-complex-relocates, claim-inhibition-mechanism-unsettled, claim-beta-catenin-pools, claim-tcf-target-genes, claim-termination-by-turnover, claim-crypt-wnt-gradient
:sources: source-alberts-cell-communication, source-nguyen-colonic-crypt, source-parker-apc-recruitment, source-mukherjee-destruction-complex

Definitions of ligand, of receptors as signal transducers, and the account of termination through the turnover of unstable molecules: a textbook chapter on the general principles of cell communication. The pathway's parts and wiring, the ubiquitin-mediated proteasomal route, the recruitment of the complex to the membrane with a consequent rise in available beta-catenin, the named target genes, and the crypt gradient: a 2025 review of colonic crypt biology. The reorientation of the complex towards a localised Wnt cue with its composition and beta-catenin binding retained, its dependence on full-length APC, and relocation as the authors' proposal: a 2020 study in human colon epithelial cells. The E-cadherin-bound pool and its exclusion from the measurements, the residual cytosolic activity after stimulation, and the two further proposed mechanisms of saturation and blocked ubiquitination, with the field described as controversial: a 2018 review of destruction complex activity.
:::
