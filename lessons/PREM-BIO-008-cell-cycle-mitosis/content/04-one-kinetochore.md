# One unattached kinetochore, and the whole cell waits

S phase leaves a cell holding two complete copies of its DNA. Mitosis has to put one complete copy in each daughter. Stated that way it sounds like sorting, and it is worth being clear about how unlike sorting it actually is.

## A note on what this lesson assumes about chromosomes

This lesson needs four facts about how DNA is packaged, and it is going to state them and move on rather than teach them. PREM-BIO-002 of this block established that the human nuclear genome runs to about six billion base pairs, two copies of a roughly three-billion-base-pair genome, across more than twenty linear molecules. The proper treatment of how those molecules are organised, how many copies of each a cell carries, and what a locus is belongs to a separate outcome, **PREM-06.02, Chromosomes and genomes**, which has no lesson yet. When it exists it will own chromatin organisation, ploidy, homologues and genome architecture, and this lesson defers to it.

The four facts mitosis needs are these. Each of those linear DNA molecules, packaged with its proteins, is a **chromosome**. A human body cell is **diploid**: it carries two sets of 23 chromosomes, 46 in all. When S phase copies one chromosome, the two copies stay physically attached to each other and are called **sister chromatids**; they are identical, and they must end up in different daughters. And each chromosome carries one specialised region, the **centromere**, which is where the machinery of segregation grips it. After replication the two sister chromatids are held together at that centromere, and each of them builds its own gripping structure there, so a replicated chromosome presents two.

## The machine that does the pulling

One piece of apparatus has to exist before any of this can happen, and it is built for the occasion. During interphase the cell's **centrosomes** duplicate. As mitosis begins they separate and move to opposite sides of the nucleus, where they serve as the two **poles** of the **mitotic spindle**, which starts to form in late prophase. The spindle is made of microtubules, the stiff polymer PREM-BIO-007 of this block introduced, and it is *bipolar*: two poles, with microtubules reaching inward from each.

That geometry is the whole basis of segregation. Microtubules from opposite poles attach to the two kinetochores of a pair of sister chromatids, and because the sisters' kinetochores face opposite ways, the natural result is one sister pulled toward each pole. Everything that goes wrong later in this lesson is a departure from that arrangement.

## Why the DNA has to be repackaged first

A chromosome's DNA is a very long thin molecule, and in interphase it is spread out and being read. Something that long and that floppy cannot be pulled reliably to one end of a cell. Segregating chromosomes requires folding them into units of a size the spindle can handle, and in budding yeast, where this has been tested directly, failure of that folding leads to chromosomes being lost during division. The folding is done by protein complexes called condensins.

There is a neat dependency built into how one of them gets access. Condensin II is in the nucleus through interphase, but condensin I is held out in the cytoplasm and reaches the chromosomes only after the nuclear envelope has broken down. PREM-BIO-002 noted that a human cell dividing has extra work to do that a bacterium does not: condense the chromosomes, build a spindle, take the envelope apart and rebuild it. Here is part of why those items are on one list. Taking the envelope down does more than let the spindle in. It also admits half the condensing machinery.

## The five stages, read as five conditions

The classical stages are easier to hold if you read each transition as a condition being met instead of a scene change.

**Prophase** begins with the appearance of condensed chromosomes, and in higher eukaryotes its end corresponds to the breakdown of the nuclear envelope, which is the event that lets condensin I in. **Prometaphase** is when the microtubules of the spindle attach to the kinetochores, the protein structures assembled on each centromere. **Metaphase** is the state in which the chromosomes are attached and aligned. The transition from metaphase to **anaphase** is triggered by breakage of the link between sister chromatids, after which the separated chromatids are pulled to opposite poles. **Telophase** reverses the setup: the envelope re-forms around each new set.

The interesting transition is metaphase to anaphase, and the reason is that it cannot be taken back.

## The step that cannot be undone

Sister chromatids are held together from S phase until anaphase by a ring-shaped protein complex called **cohesin**. Anaphase happens when that ring is cut. An enzyme called **separase** cleaves cohesin's RAD21 subunit, the ring opens, and the sisters come apart.

Separase is dangerous, so it is kept switched off by an inhibitor bound to it, called **securin**. Securin is destroyed by ubiquitination, and the ubiquitin ligase that marks it for destruction is the **anaphase-promoting complex**, written APC/C.

:::{callout}
:kind: note

A naming collision worth catching now. PREM-BIO-006 of this block introduced **APC**, meaning adenomatous polyposis coli, the large scaffolding protein of the beta-catenin destruction complex. The complex in this scene is the **anaphase-promoting complex**, a completely different protein assembly with a completely different job, and the two are unrelated. The literature distinguishes them by writing the one in this lesson as **APC/C**, and this lesson does the same throughout. If you meet a bare "APC" in a paper, the surrounding sentence will tell you which one it is: Wnt and colorectal adenomas mean lesson six's protein, anaphase and ubiquitin mean this one.
:::

So the chain from decision to irreversibility runs: APC/C ubiquitinates securin, securin is destroyed, separase is released, separase cuts cohesin, sisters separate. Every step before the cut is reversible. The cut is not. Once cohesin has been cleaved there is no mechanism to put the sisters back together and try again, which means that any checking the cell intends to do has to happen upstream of APC/C.

That single design constraint explains the whole architecture of what follows.

## What holds APC/C off

The **spindle assembly checkpoint** is the surveillance that keeps APC/C inactive until the chromosomes are properly attached. It works through a complex assembled at kinetochores that are not correctly engaged, the **mitotic checkpoint complex**, made of MAD2, BUBR1, BUB3 and CDC20. That complex binds APC/C-CDC20 and blocks its activity. No active APC/C means securin survives, separase stays inhibited, cohesin stays intact, and anaphase does not begin.

Now the striking part, and the reason this scene has the title it does.

The checkpoint is not a majority vote. A single kinetochore that is not properly attached is enough to hold the entire cell. This was shown by laser ablation. Take a cell in which every chromosome has attached correctly except one, and that one has managed to attach to a single pole, leaving its other kinetochore bare. Destroy the bare kinetochore with a laser and the cell enters anaphase within about 17 to 20 minutes. Leave it alone and the cell stays held. The experiment was done in PtK1 cells, an epithelial line from rat kangaroo kidney, which is worth naming because the figures are not from human cells.

Think about the sensitivity that implies. A replicated set of 46 chromosomes presents 92 kinetochores, and one of them in the wrong state halts a process the cell has spent most of a day preparing for. A cell that could not do this would be reliably fast and unreliably correct.

## What exactly is being detected is not settled

The obvious follow-up question is what a kinetochore reports. Two candidates have been argued for a long time: whether microtubules are physically bound to it, and whether it is under mechanical tension from being pulled toward opposite poles. Correct attachment produces both, so distinguishing them is hard.

The question is open. Work in human cells using an attachment mutant concluded that tension as such is not a parameter the checkpoint machinery reads, and that stable attachment alone is enough to silence it. Other work argues the opposite, that proper attachment generates tension and stretch within the kinetochore and that this stretched state is what stops the checkpoint proteins binding.

Do not resolve this in your notes. The lesson needs only the part both sides agree on: something about the state of the kinetochore-microtubule interface is being read, and the reading gates APC/C. Which physical variable is the signal remains a live disagreement, and the next scene shows why that ambiguity has consequences.

:::{check}
:id: check-irreversibility
:kind: retrieval

1. Why must the spindle assembly checkpoint act on APC/C rather than on separase directly, or on anything later?
2. A cell is in metaphase with every chromosome correctly attached except one, which has one kinetochore unattached. Predict what happens and say what the checkpoint is doing.
3. Why does condensin I only reach the chromosomes in mitosis and not in interphase?

**Answers.**

1. Because separase's action, cutting cohesin, is irreversible. Any check has to be upstream of the last reversible step. APC/C's ubiquitination of securin is what commits the cell, so that is where the brake has to be applied. Acting later would mean acting after the damage.
2. The cell stays in metaphase. The mitotic checkpoint complex assembled at that one unattached kinetochore keeps APC/C-CDC20 inhibited, so securin is not destroyed, separase stays off, and cohesin is not cut. One kinetochore is sufficient, as the ablation experiment showed.
3. Because condensin I is held in the cytoplasm while the nuclear envelope is intact, and gains access to the chromosomes only once the envelope has broken down. Condensin II, by contrast, is nuclear throughout interphase.
:::

:::{source-note}
:claims: claim-genome-scale, claim-human-chromosome-number, claim-condensation-required-for-segregation, claim-condensin-access, claim-mitotic-stage-transitions, claim-cohesin-separase-securin-apcc, claim-sac-inhibits-apcc, claim-mcc-composition, claim-single-unattached-kinetochore, claim-attachment-versus-tension-unsettled
:sources: source-nurk-complete-human-genome, source-bryant-cytogenetics, source-kruitwagen-condensation, source-hirano-condensins, source-cooper-mitosis, source-brooker-cohesins, source-lara-gonzalez-sac, source-rieder-single-kinetochore, source-tauchman-attachment-silences-sac, source-lischetti-nilsson-sac

The scale of the human nuclear genome, about six billion base pairs, two copies of a roughly three-billion-base-pair genome, across more than twenty linear molecules, is carried forward from PREM-BIO-002 of this block and rests on the gapless human genome assembly it cited. That segregating eukaryotic chromosomes requires folding them into units of a size the spindle can handle, and that failure of that folding causes chromosome loss during division, comes from a 2015 study in budding yeast, and the organism is named in the prose because the demonstration is not in human cells. That condensin II is nuclear through interphase while condensin I is sequestered in the cytoplasm and reaches chromosomes only after nuclear envelope breakdown comes from a 2012 review of condensins. That a human somatic cell is diploid with two sets of 23 chromosomes, 46 in all, comes from a 2020 educational case in cytogenetics. The stage transitions and the spindle come from a chapter on the events of mitosis: the appearance of condensed chromosomes at prophase, the end of prophase corresponding to nuclear envelope breakdown in higher eukaryotes, centrosomes duplicating in interphase and then separating to serve as the two poles of the spindle which begins forming in late prophase, microtubules from opposite poles attaching to the two kinetochores of sister chromatids, sister chromatids being held together at the centromere as the sequence to which proteins bind to form the kinetochore, the metaphase-to-anaphase transition being triggered by breakage of the link between sister chromatids, and the description of APC/C as a ubiquitin ligase. That cohesin holds sister chromatids together, that separase cleaves the RAD21 kleisin subunit to open the ring, and that securin is destroyed by APC/C-mediated ubiquitination come from a 2014 review of cohesins in mitosis and meiosis. The composition of the mitotic checkpoint complex as MAD2, CDC20, BUBR1 and BUB3, and its binding to APC/C-CDC20 to block its activity, come from a 2021 review of the spindle assembly checkpoint. That a single unattached kinetochore sustains the arrest, with anaphase following about 17 to 20 minutes after that kinetochore was destroyed by laser ablation in PtK1 rat-kangaroo kidney epithelial cells, comes from a 1995 study of the metaphase-to-anaphase transition. The unsettled question of what the checkpoint reads is represented by both sides: a 2015 study in human cells concluding that stable kinetochore-microtubule attachment is sufficient to silence the checkpoint and that tension as such is not read, and a review arguing that attachment-generated tension and intrakinetochore stretch produce a state unable to bind checkpoint proteins.

Two framings in this scene are this lesson's own. Reading the five mitotic stages as five conditions rather than as a sequence of appearances is this lesson's presentation of the sourced transitions. The argument that the checkpoint must act upstream of APC/C *because* cohesin cleavage is irreversible is this lesson's inference from the sourced chain; the sources establish the order of events and the irreversibility of the cut, and the design conclusion drawn from them is stated here as reasoning rather than as a reported result.

The count of 92 kinetochores in a replicated set is this lesson's arithmetic from the sourced chromosome number and the sourced fact that each replicated chromosome presents two. The four facts about chromosomes stated at the top of this scene are the minimum this lesson needs and are not its material to teach. PREM-06.02, Chromosomes and genomes, owns chromatin organisation, ploidy, homologues and loci, and no lesson covers it yet.
:::
