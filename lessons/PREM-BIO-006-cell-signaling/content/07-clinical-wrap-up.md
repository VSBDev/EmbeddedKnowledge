# Clinical wrap-up: the cell that reports "base" wherever it is

Here is a question the lesson's own machinery can answer, and it is a question about a disease.

Among colorectal cancers, about 93 per cent carry an activating mutation in the Wnt pathway, and the gene most often hit is APC. APC is the largest scaffolding component of the destruction complex, and it has appeared twice in this lesson already. Why should damaging a scaffold in a pathway that reports position produce a tumour?

Work the pathway instead of reaching for a general statement about cancer genes.

## Following the lesion through the chain

APC has two jobs in what this lesson covered, and losing it interferes with both.

It is part of the destruction complex, the assembly that phosphorylates beta-catenin so that it is tagged and destroyed. And the colonocyte work in scene 2 found that full-length APC is required for the complex to reorient towards a Wnt cue. This is where the borrowed idea of separable protein parts earns its place: a shortened APC is still a protein and still does some of what APC does, and it has specifically lost the part needed for that reorientation.

The numbers from that study come with a condition attached. Three components of the complex were scored separately for whether they gathered towards Wnt-coated beads, and the figure depends on which one you follow: across Axin1, GSK3B and beta-catenin the proportion of cells showing the movement ran from 61 to 80 per cent when APC was full length. In a line expressing a truncated APC it fell to about 30 per cent, and where APC had been deleted outright the Wnt-induced localisation was abolished. So the range is a spread across the components measured, not an uncertainty about one of them.

Now put a cell with damaged APC anywhere you like in the crypt and trace scene 2 forward. The destruction complex is impaired, so beta-catenin is no longer cleared efficiently. Free beta-catenin accumulates. It reaches the nucleus, partners TCF and LEF, and switches on c-MYC, LGR5 and cyclin D1: the programme of a dividing, undifferentiated cell. All of that happens whether or not any Wnt arrived.

That last clause is the whole point, and it is a specific kind of failure. The gradient outside the cell is unchanged. The mesenchyme near the base is still secreting, the concentration still falls with height, the positional information is still sitting there in the fluid. What has broken is the reading. The output has become independent of the input, so the cell now reports "I am at the crypt base" at every height, and behaves accordingly at every height.

The same holds under either account of what the cell reads. If the readout tracks the absolute level, the level is now high everywhere. If instead it compares against a recent baseline, as scene 4's fold-change hypothesis proposes, then a cell whose destruction machinery is broken has lost the falling baseline that comparison depended on. Neither version leaves the cell able to locate itself, so the conclusion here does not rest on settling that question.

Read that against the opening of this lesson. The problem was a cell with no map and no address, solved by reading a concentration. A cell with damaged APC has lost the solution while keeping the problem. It is not receiving a wrong answer about where it is; it has stopped asking.

## Why this tissue

The crypt is a place where that failure has unusual consequences, and two facts from earlier lessons in this block say why.

The colonic epithelium renews itself on a timescale of a few days, with absorptive cells replaced every four to five days. And the architecture of the crypt, the stem cells at the base and the differentiation that proceeds as cells climb, is organised by the gradient this lesson has been describing. A tissue that rebuilds itself that fast is a tissue in which the instruction "divide and stay undifferentiated" is being issued and withdrawn continuously, in the right places, over and over for a lifetime in every crypt. Removing the withdrawal step from that arrangement is a serious matter in a way it would not be in a tissue that renews once a decade.

How that becomes a tumour, what else has to go wrong, how the process is staged and detected: none of that is this lesson's material. Lesson 08 of this block (PREM-05.08) takes up the cell cycle that the stem-cell programme is driving, and lesson 10 of this block (PREM-05.10) takes up cell death, senescence and cancer, where this thread is picked up properly. What this lesson hands them is the reading mechanism and a precise account of the joint that fails.

:::{callout}
:kind: boundary
:id: callout-clinical-boundary

A **teaching example, not medical advice.** This scene traces a published molecular account and nothing more. No patient, drug, dose or recommendation appears in it, and nothing here supports a diagnosis, prognosis, screening or treatment decision. The 93 per cent is a population figure from a review; it is not anyone's personal risk.
:::

## What the lesson established

A cell in a tube 32 cells tall works out where it is by measuring how much of one substance reaches it, and that measurement runs through four parts and a fifth job: a signal, a receptor, transduction, a response, and the capacity to stop.

The measurement is bounded, and the bounds are countable. One threshold on one falling gradient separates two regions and no more, and nested thresholds add zones far faster than they add bits. Precision is bought with averaging time, at four times the time for half the uncertainty, spent by a cell that is moving while it counts.

On amplification the honest result is narrower than the textbook slogan. The identifiable catalytic steps in the canonical Wnt pathway sit on the arm that destroys the output rather than the arm that produces it, and the output shifts about sixfold between two resting levels. Phototransduction, measured a different way, hydrolyses more than 100,000 molecules per absorbed photon. Those two figures cannot be divided into one another, and the lesson traced per-step amplification through phototransduction and a constructed example because the per-step figures for Wnt were not available.

How the gradient is built is partly unsettled, and so is how Wnt binding slows the destruction. The lesson said which of its own statements would survive either answer.

And the reading can fail in a way that leaves the gradient intact. That is where this block goes next.

:::{source-note}
:claims: claim-apc-pathway-mutation-frequency, claim-apc-required-for-relocation, claim-apc-loss-decouples-readout, claim-destruction-complex-role, claim-tcf-target-genes, claim-epithelial-renewal-interval, claim-crypt-wnt-gradient, claim-crypt-geometry, claim-wnt-sixfold-response, claim-phototransduction-gain, claim-positional-information-ceiling, claim-noise-averaging-limit, claim-fold-change-readout
:sources: source-nguyen-colonic-crypt, source-parker-apc-recruitment, source-lee-wnt-quantitative, source-alberts-gprotein-signaling, source-hillenbrand-positional-information, source-tostevin-position-limits, source-vanderwath-crypt-model, source-goentoro-fold-change

The 93 per cent figure with APC most often affected, the impairment of the destruction complex on APC loss, the complex's composition and action, the named target genes, the crypt gradient, and the renewal intervals: a 2025 review of colonic crypt biology. The localisation figures, including the 61 to 80 per cent spread across the three components scored: a 2020 study in human colon epithelial cells. Crypt length of about 32 cells: a 2013 modelling study. The sixfold rise in free beta-catenin: a 2003 study. The phototransduction tally per absorbed quantum: a textbook chapter. The one-bit ceiling: a 2016 study of positional information. The inverse-square-root scaling of precision with averaging time: a 2007 theoretical study. The fold-change proposal: a 2009 study, offered by its authors as evidence for a hypothesis.

Two things here are the lesson's own inference and are labelled as such in the scene: that a cell with damaged APC reports the crypt base at every height, and that rapid renewal makes this failure more consequential in the colon than in a slowly renewing tissue. Why particular tissues are susceptible is outside this lesson's scope and is not attempted.
:::
