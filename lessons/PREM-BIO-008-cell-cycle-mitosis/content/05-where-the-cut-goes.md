# The spindle decides where the cut goes

Separating the chromatids is only half of a division. Two sets of chromosomes sitting at opposite ends of one cell are still one cell. Something has to cut it in two, and the cut has to fall between the two sets rather than through either of them.

That constraint is sharper than it first looks. A cell has no external reference for where its middle is. It has just moved its chromosomes to two poles, and the place the cut belongs is defined entirely by where those poles ended up. So the positioning problem is one of getting information from the chromosome-sorting machinery to the cell surface.

## The ring

The cut is made by a **contractile ring** that assembles just under the plasma membrane around the cell's equator and then constricts, drawing the membrane inward as a cleavage furrow. It is built from filamentous actin and myosin II.

Those are the components PREM-BIO-007 of this block spent a scene on. Actin filaments are polar, myosin motors walk along them, and cross-linking many filaments makes an assembly far stiffer than any one filament. Lesson seven used those properties to explain a microvillus standing up and a junction holding a sheet together. The same polymer, with the same motor, now pulls a cell in half. Learning what a polymer's properties are is worth more than learning where it is found, and this is the payoff.

## How the ring learns where to be

In animal cells the position of the anaphase spindle directs the position of the cleavage furrow, and the chain of signals that carries the information runs as follows.

During anaphase a complex called **centralspindlin** accumulates at the central spindle, the bundle of microtubules between the separating chromosome sets. Centralspindlin is built from two copies each of two proteins: a kinesin-6 motor called MKLP1, and a GTPase-activating protein of the Rho family that appears in the literature under two names, MgcRacGAP and Cyk4. Centralspindlin then activates ECT2, a guanine nucleotide exchange factor for the small GTPase RhoA. Active RhoA accumulates in a zone at the equatorial cortex, and there it does two things: it drives formin-mediated assembly of actin filaments, and it promotes activation of myosin II. Those two products are the ring.

Read the chain backwards and the logic is clean. The ring forms where RhoA is active; RhoA is active where ECT2 was activated; ECT2 was activated where centralspindlin sits; centralspindlin sits on the central spindle, which lies between the two separated chromosome sets. The structure that segregated the chromosomes is the structure that positions the cut. A cell does not need to know where its middle is, because it does not use its middle. It uses its spindle.

## The last cut, and the checkpoint nobody expects

Constricting the ring does not finish the job. It leaves the two daughters joined by a narrow **intercellular bridge** with a dense structure called the midbody in it, and the membrane still has to be severed. That final severing is **abscission**, and it is carried out by the ESCRT-III machinery: CEP55 at the midbody recruits TSG101 and ALIX, ALIX links CEP55 to ESCRT-III, and CHMP4 subunits of ESCRT-III polymerise toward the constriction site.

The timing has been measured in HeLa cells. Abscission follows anaphase by about 90 minutes, and the ESCRT-III subunit that carries out the cut arrives at the midbody roughly 20 minutes before it happens. So the last step of a division is still an hour and a half away when the chromosomes have already reached the poles.

And now a third checkpoint appears, which is the one that makes the "condition, not a clock" framing hardest to argue with, because what it senses is a physical obstruction you could point at.

Sometimes a piece of chromatin gets caught in the intercellular bridge. Cutting there would break the DNA, and letting the furrow regress instead would fuse the two daughters back into one cell with double the chromosomes. Cells faced with this delay abscission. The delay is called the **abscission checkpoint**, it depends on Aurora B kinase being localised at the midbody and catalytically active, and Aurora B acts by phosphorylating CHMP4C, one member of the same CHMP4 family that does the cutting. The effect on timing is large: in control cells, chromatin bridges took around 576 minutes to resolve, roughly six times the interval an unobstructed abscission takes.

How the bridge is actually detected is explicitly an open question in the current literature, and the papers that establish the checkpoint say so. This lesson leaves it open.

## When the cut fails

Cytokinesis can fail outright. The furrow ingresses and then regresses, or abscission never completes, and the result is one cell with two nuclei and twice the normal DNA content. A cell carrying two full sets where it should carry one is called **tetraploid**, since a normal body cell's two sets of 23 have become four.

Here is the part worth pausing on. A cell in that state has clearly made a serious mistake, and you might expect a surveillance mechanism to catch it. There is not one. Work on primary human fibroblasts found that binucleate cells produced by cleavage failure went on to replicate their DNA at almost the same frequency as their normal neighbours, with over 94 per cent of binucleate cells incorporating a DNA-synthesis label, and most of them entered mitosis again within 36 hours. The authors' conclusion was blunt: a tetraploidy checkpoint does not exist in normal mammalian somatic cells. Nothing in a cell reads its own DNA content and objects.

So the cell has an elaborate checkpoint for a chromatin bridge in the intercellular canal, and no checkpoint at all for having ended up with two nuclei. Surveillance in the cell cycle is not a general audit. It is a collection of specific detectors for specific physical states, and a failure mode that no detector was built for passes through unremarked.

That observation is the bridge into the next scene.

:::{source-note}
:claims: claim-contractile-ring-composition, claim-spindle-positions-furrow, claim-centralspindlin-ect2-rhoa, claim-abscission-escrt, claim-abscission-timing, claim-abscission-checkpoint, claim-abscission-sensing-unresolved, claim-no-tetraploidy-checkpoint, claim-human-chromosome-number
:sources: source-verma-cytokinesis, source-basant-glotzer-rhoa, source-horvath-escrt-abscission, source-renshaw-abscission, source-carlton-chmp4c, source-petsalaki-abscission-checkpoint, source-petsalaki-top2a-bridges, source-uetake-sluder-tetraploidy, source-bryant-cytogenetics

That the contractile ring is made of filamentous actin and myosin II and that its constriction generates a cleavage furrow comes from a 2019 review of cytokinesis regulation in animal cells, which also states that the spindle apparatus specifies the position of the cleavage furrow. A 2018 review of RhoA regulation during cytokinesis independently states that the position of the anaphase spindle directs the position of the cleavage furrow, and supplies the chain: centralspindlin as a heterotetramer of the kinesin-6 MKLP1 and the RhoGAP Cyk4, RhoA activation by the exchange factor ECT2, centralspindlin's activation of ECT2, zones of active RhoA at sites of furrow formation, and RhoA's activation of formin-mediated actin assembly and of myosin II. The same review names MgcRacGAP and Cyk4 as the alternative names for the same protein. The abscission machinery, CEP55 recruiting TSG101 and ALIX, ALIX linking CEP55 to ESCRT-III, and CHMP4 subunits polymerising toward the constriction site, comes from a 2020 review of ESCRT-mediated abscission and a 2014 study in HeLa cells describing the intercellular bridge as the site where abscission occurs. The timings, an interval of about 93 to 94 minutes from anaphase to abscission in control HeLa cells, the arrival of the executing ESCRT-III subunit at the midbody about 21 minutes before the cut, and a chromatin-bridge resolution time of about 576 minutes, all come from a 2012 study of ESCRT-III and the abscission checkpoint. That bridge-resolution figure carries a large reported spread, so it is used here to establish an order-of-magnitude difference against the unobstructed interval rather than a precise ratio. That cells delay abscission to prevent chromatin breakage or tetraploidisation by furrow regression, that chromatin trapped in the midzone is the primary trigger, that the checkpoint requires persistent Aurora B localisation and catalytic activity at the midbody, and that Aurora B phosphorylates CHMP4C, come from a 2021 review of the abscission checkpoint. That how chromatin bridges are detected remains unresolved is stated in that review and again in a 2023 study of the same checkpoint. That binucleate primary human fibroblasts produced by cleavage failure incorporated a DNA-synthesis label at over 94 per cent, that most entered mitosis within 36 hours, and that a tetraploidy checkpoint does not exist in normal mammalian somatic cells, come from a 2004 study of cell-cycle progression after cleavage failure.

That a human body cell carries two sets of 23 chromosomes, which is what makes a doubled cell tetraploid, comes from a 2020 educational case in cytogenetics. The properties of actin filaments and myosin motors referred to at the start of this scene are carried forward from PREM-BIO-007 of this block and are not re-derived here. Reading the positioning chain backwards to conclude that the cell uses its spindle rather than its geometry is this lesson's own presentation of the sourced chain. The closing generalisation, that cell-cycle surveillance is a set of specific detectors rather than a general audit, is this lesson's inference from the contrast between the sourced abscission checkpoint and the sourced absence of a tetraploidy checkpoint.
:::
