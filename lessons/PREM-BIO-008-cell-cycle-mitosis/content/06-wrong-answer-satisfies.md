# A checkpoint a wrong answer can satisfy

Everything so far has described a careful system. A cell will not enter S phase with broken DNA if the damage checkpoint sees it. A cell will not cut cohesin while one kinetochore is unattached. A cell will not sever an intercellular bridge with chromatin caught in it.

From that it is very tempting to draw a conclusion, and the conclusion is wrong.

:::{misconception}
:id: misconception-checkpoints-guarantee

**The mistaken model.** Checkpoints exist to prevent errors, so a cell that passes its checkpoints has divided correctly. Errors in division must therefore mean the checkpoint machinery was broken or missing.

**Why it fails.** A checkpoint detects one specified physical state. It cannot detect an error that does not produce that state. There are wrong configurations that satisfy every condition a checkpoint tests, and those pass a working checkpoint without any component being defective. Separately, checkpoint arrest is a delay rather than a permanent block, and a cell that is held long enough will eventually leave anyway.

**The test that discriminates.** Ask, of a proposed error: what physical variable would a detector have to read in order to notice this? If the answer is a variable no checkpoint reads, or one the error leaves looking normal, then a fully functional checkpoint will pass it. Apply that test to the case below and you can predict the outcome before being told it.
:::

## The attachment that is wrong and looks right

At prometaphase, kinetochores and microtubules find each other by trial. Four configurations are possible for a pair of sister kinetochores.

**Amphitelic** is correct: the sister kinetochores attach to microtubules from opposite spindle poles. **Monotelic** means only one of the two sisters is attached. **Syntelic** means both sisters are attached to the same pole. And **merotelic** means a single kinetochore is connected to both poles at once.

Now apply the discriminating test to merotely. Scene four left open which physical variable the checkpoint actually reads, and named two candidates. Check merotely against both of them, because if it satisfies both then the open question does not need settling here. Is there an unattached kinetochore? No: both sisters are attached, and the offending one is attached twice over. Is there tension across the sister kinetochores? Yes: they are being pulled apart, which is exactly what correct attachment produces.

Both merotelic and amphitelic attachments generate tension across sister kinetochores and neither produces an unattached kinetochore. Whichever of the two candidates is the real signal, merotely supplies it. So merotelic attachments do not trigger a checkpoint-dependent delay of anaphase onset. The checkpoint is working perfectly, its conditions are genuinely satisfied, and the cell proceeds into anaphase with a chromosome attached to both ends of the spindle.

What happens next is mechanical. That chromatid is being pulled in two directions at once, so it cannot travel cleanly to either pole, and it lags behind at the spindle midzone. A lagging chromatid that is still near the midzone as division finishes gets packaged into a small separate nucleus of its own, a micronucleus: in one study, 78 per cent of anaphase cells with laggards produced at least one daughter carrying a distinct micronucleus.

:::{diagram} ../diagrams/checkpoint-blind-spot.diagram.json
:alt: An unattached kinetochore activates the checkpoint complex that blocks APC/C and holds anaphase, while amphitelic and merotelic attachments both satisfy the same two conditions and let anaphase run, with only merotely producing a lagging chromatid.
:longdesc: Three kinetochore states lead into the anaphase decision. An unattached kinetochore activates the mitotic checkpoint complex, which inhibits the step where cohesin is cut and anaphase runs. An amphitelic attachment leads straight to that step because tension is present and no kinetochore is unattached. A merotelic attachment reaches the same step by satisfying the same two conditions, and additionally leads to a lagging chromatid because one chromatid is pulled toward both poles at once. Two further relationships show the checkpoint failing rather than being fooled: the checkpoint complex leads to mitotic slippage as cyclin B decays over hours regardless, and slippage leads to an undivided tetraploid cell.
:::

Detection and correction turn out to be separate systems, which is the reason merotely is not simply a fatal design flaw. Aurora B kinase is enriched specifically at merotelic attachment sites, and inhibiting it increases the number of merotelic attachments, so there is machinery that fixes these errors even though the checkpoint does not report them. Merotelic attachments are frequently observed early in mitosis and most are resolved. The ones that survive to anaphase are the residue of a correction process, not evidence that nothing was watching.

One honest caution about how far to push this. It is well established that merotely escapes the checkpoint and produces lagging chromosomes. Which attachment error is responsible for most actual missegregation is a different question and is disputed: measurements of human cells found that lagging chromosomes in anaphase, while symptomatic of attachment problems, rarely missegregated, and argued that syntelic attachments account for most missegregation events. Do not learn merotely as "the cause of aneuploidy". Learn it as the clean demonstration that a correct-looking state can be a wrong state.

## The hold is finite

The second way a working checkpoint permits an error is by giving up.

A cell arrested by the spindle assembly checkpoint is not frozen. Cyclin B1 decays slowly throughout the arrest, even while the checkpoint remains demonstrably active, with BubR1, Mad1 and Mad2 still present at the kinetochores. When cyclin B falls low enough to no longer sustain the mitotic state, the cell exits mitosis without having divided. This is **mitotic slippage**, and it leaves a single cell containing both sets of chromosomes.

The timescale is hours. Human retinal pigment epithelial cells held with a microtubule poison stayed arrested for around 546 to 875 minutes on average, depending on the dose, before slipping. So the checkpoint buys somewhere between nine and fifteen hours of delay in these cells, and then stops buying.

The threshold idea is a model and not a measurement, and it should be held as one: cyclin B1 has been observed to ramp down roughly linearly until the cell exits, and the existence of a level below which arrest cannot be sustained is inferred from that behaviour. The ten-to-twenty figure is the detection floor reported in that work rather than a constant of the checkpoint.

## Waiting has its own cost

Arrest is not a neutral state to sit in either. Hold a cell at metaphase long enough and the spindle's own pulling forces begin to separate the sister chromatids asynchronously, without separase being involved and with cohesin still present on the separated chromatids. This is called cohesion fatigue, and in HeLa cells held at metaphase by proteasome inhibition it took around 4.7 hours on average to appear.

Put that next to the slippage figures and the shape of the problem emerges. The checkpoint's only remedy is to wait. Waiting is safe for a while. Beyond a few hours it starts generating a second class of error, and beyond nine to fifteen hours the cell leaves regardless. There is no setting of this system that is safe indefinitely.

## The same pattern outside mitosis

The DNA damage checkpoints behave the same way, and have been studied precisely for their limits. In human fibroblasts the G1/S checkpoint is slowly activated and lets cells enter S phase while double-strand breaks are still unrepaired. The G2/M checkpoint holds longer the more damage a cell has taken, and it releases the cell once repair has brought the remaining breaks below a threshold of roughly ten to twenty double-strand breaks. Cells therefore enter mitosis before repair is complete, carrying that residual load. The reviewers' summary of their own field is that checkpoints are not foolproof but carry inherent limitations.

Read that threshold the right way round, because the tempting reading is the opposite one. It is not that heavy damage overwhelms the checkpoint and it gives up: heavy damage produces a *longer* arrest, and arrest duration rises with dose. What the threshold describes is the checkpoint's insensitivity at the bottom end. Below about ten to twenty breaks it can no longer tell that anything is wrong, so it releases a cell that is still damaged. The limitation is a detection floor, not a breaking point.

## Two more mechanical routes to a wrong daughter

Two further sources of error are worth naming, because both are structural instead of regulatory.

Scene four described the spindle's two poles as being organised by the cell's two centrosomes. A cell that has acquired extra centrosomes therefore starts out with too many poles: it builds a transient multipolar spindle before the extra centrosomes cluster together and restore a two-pole arrangement, and merotelic attachments accumulate during that multipolar phase, because a kinetochore facing three or four poles has more ways to be caught by two of them. The presence of extra centrosomes during an otherwise bipolar anaphase raised the frequency of lagging chromosomes by three- to tenfold across every cell line tested.

And failed cytokinesis, from the previous scene, produces a tetraploid cell that no checkpoint stops.

## How often, and in what units

A number is available here, and it has to be read carefully, because the units are where people go wrong.

In cultured human cells that are chromosomally stable and carry close to the normal 46 chromosomes, the measured rate of chromosome missegregation is about 0.025 per cent **per chromosome** per division. Induce merotely experimentally and it rises to 0.6 to 0.8 per cent per chromosome. Tumour lines with chromosomal instability sit at 0.3 to 1.0 per cent per chromosome.

The per-chromosome figure is what was measured. To turn it into a statement about divisions, note that a cell has 46 chromosomes and any one of them could be the one that goes wrong, and assume they all behave the same way. Then the chance that at least one goes wrong is roughly 46 times 0.025 per cent, a little over one per cent, which is about one division in ninety. The authors made that conversion themselves and stated it as about one missegregation every 100 cell divisions, rising to about one in every third division when merotely is elevated.

What a missegregation leaves behind is **aneuploidy**: a chromosome count that has gained or lost less than a whole set of 23, so one daughter holds too many copies of some chromosome and the other too few.

Keep the two apart. "0.025 per cent" and "one in a hundred" are the same finding expressed per chromosome and per division, roughly a factor of 46 apart, and quoting either figure in the other's units is a factual error. And note the boundary on all of it: these are cultured cell lines, and the study makes no claim about rates in living tissue. Nobody has measured the missegregation rate in a human colonic crypt.

## What this scene has established

Proliferative error is not a sign of broken machinery. Four separate routes have appeared, all of them in cells whose checkpoints work:

1. A wrong state that satisfies the detector's conditions, as in merotely.
2. A detector that gives up after hours, as in mitotic slippage.
3. A cost to the waiting itself, as in cohesion fatigue.
4. A failure mode with no detector at all, as in tetraploidy after failed cytokinesis.

Every one of those leaves a daughter cell that differs from its parent in chromosome content. What then happens to such a cell, whether it is removed, stopped permanently, or kept, is the subject of lesson 10 of this block, and this lesson stops at the point where the wrong daughter exists.

:::{source-note}
:claims: claim-attachment-geometries, claim-merotely-escapes-checkpoint, claim-lagging-to-micronucleus, claim-aurora-b-corrects-merotely, claim-merotely-syntely-dispute, claim-mitotic-slippage, claim-slippage-duration, claim-cyclin-b-threshold-modelled, claim-cohesion-fatigue, claim-checkpoints-not-foolproof, claim-extra-centrosomes-merotely, claim-missegregation-rates, claim-no-tetraploidy-checkpoint, claim-sac-inhibits-apcc, claim-attachment-versus-tension-unsettled, claim-human-chromosome-number, claim-mitotic-stage-transitions
:sources: source-bryant-cytogenetics, source-cooper-mitosis, source-gregan-merotelic, source-cimini-merotelic-history, source-thompson-compton-lagging, source-brito-rieder-slippage, source-huang-cyclin-b-ramp, source-daum-cohesion-fatigue, source-deckbar-checkpoint-limits, source-ganem-extra-centrosomes, source-thompson-compton-missegregation, source-uetake-sluder-tetraploidy, source-lara-gonzalez-sac, source-tauchman-attachment-silences-sac, source-lischetti-nilsson-sac

The four attachment geometries and their definitions, the statement that merotelic attachments do not trigger a checkpoint-dependent delay of anaphase onset, the reason given for it, that both merotelic and amphitelic attachments generate tension across sister kinetochores and produce no unattached kinetochores, the frequent observation of merotelic attachments early in mitosis, and Aurora B's enrichment at merotelic sites with increased merotely on its inhibition, all come from a 2011 review of merotelic kinetochore attachment. That a persistent lagging chromosome forms a micronucleus is from a 2023 historical review of merotely, and the measured figure that 78 per cent of anaphase cells with laggards produced a daughter with a distinct micronucleus is from a 2011 study in human cells; the measured figure is used in the prose in preference to the review's stronger wording. That same 2011 study is the source of the dispute recorded here, that lagging chromosomes rarely missegregated and that syntelic attachments were argued to account for most missegregation. Mitotic slippage through slow cyclin B decay while BubR1, Mad1 and Mad2 remain at kinetochores, and the arrest durations of about 546 to 875 minutes in human RPE1 cells across nocodazole doses, come from a 2006 study of checkpoint slippage in human cells. The approximately linear ramp-down of cyclin B1 until it drops below a level required to sustain arrest comes from a 2010 study, and the absence of any established numeric threshold is recorded because no source consulted supplies one. Cohesion fatigue, its dependence on spindle pulling forces, its independence from separase, the persistence of cohesin on the separated chromatids, and the mean metaphase-to-scatter interval of about 4.7 hours come from a 2011 study. The G1/S checkpoint being slowly activated and allowing entry into S with unrepaired double-strand breaks, the G2/M checkpoint ceasing to hold in the majority of cells carrying 10 to 20 unrepaired breaks, release into mitosis before repair is complete, and the summary that checkpoints are not foolproof but carry inherent limitations, come from a 2011 review of radiation-induced checkpoint limitations in human fibroblasts. The transient multipolar spindle intermediate in which merotelic errors accumulate, and the three- to tenfold increase in lagging chromosomes with extra centrosomes present during bipolar anaphase, come from a 2009 study. The missegregation rate of about 0.025 per cent per chromosome in untreated chromosomally stable near-diploid human lines, the rise to 0.6 to 0.8 per cent per chromosome on induced merotely, the range of 0.3 to 1.0 per cent per chromosome in chromosomally unstable tumour lines, and the authors' own stated conversion to about one missegregation per 100 cell divisions with its explicit assumption that all chromosomes behave equivalently, come from a 2008 study; that study reports cultured cells only and makes no claim about living tissue. The absence of a tetraploidy checkpoint is carried forward from the previous scene's source. The checkpoint's inhibition of APC/C and the unsettled attachment-versus-tension question are carried forward from scene four, where both sides of that disagreement are cited; the review arguing the tension position independently states that merotelic attachments generate tension and are therefore not sensed as erroneous, which corroborates this scene's central point from the opposite side of the mechanistic argument.

The chromosome count of 46 and the definition of aneuploidy as a gain or loss of less than a whole haploid set of 23 come from a 2020 educational case in cytogenetics; that the spindle's poles are organised by centrosomes is carried forward from the mitosis chapter cited in scene four. The multiplication of 0.025 per cent by 46 to reach a little over one per cent is this lesson's arithmetic, shown so that the authors' own published conversion to about one division in a hundred can be checked rather than taken on trust; the assumption that all chromosomes behave equivalently is theirs and is stated. The four-route summary at the end of this scene is this lesson's organisation of the sourced findings and is not a taxonomy taken from any source. The discriminating test offered in the misconception box, asking what physical variable a detector would have to read, is this lesson's own heuristic. The observation that the G2/M threshold behaviour runs against intuition is this lesson's comment on the sourced result. The statement that the checkpoint buys between nine and fifteen hours is this lesson's conversion of the sourced arrest durations in minutes into hours.
:::
