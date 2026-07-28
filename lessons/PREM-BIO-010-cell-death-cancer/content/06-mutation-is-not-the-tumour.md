# One mutation, several possible outcomes

Commit to an answer before reading on, and write it down so you can check it against yourself later.

A patch of ordinary, healthy-looking skin is sampled from a middle-aged adult and sequenced deeply. What fraction of its cells would you expect to carry a mutation in a gene that drives cancers when it is mutated in a tumour? Give a number.

Most people answer with something very small. A fraction of a per cent, perhaps. Something rare enough that finding one would be notable.

## The model that produces that answer

:::{misconception}
:id: misconception-mutation-equals-cancer

**The model.** A cancer is a mutated cell that has multiplied. Mutations in cancer genes are therefore rare in healthy tissue, because a cell that acquires one becomes a cancer cell, and cancer is uncommon. On this account the disease lives in the genome: identify the mutations, and you have identified the cancer. Tissue is the place it happens, and the interesting causation is all inside the cell.

This is a reasonable model to hold. It is what a list of cancer genes implies, it explains why mutation-causing exposures raise cancer rates, and every part of it that concerns mutation is correct. Mutations in driver genes really are what start the process.

**What it cannot explain.** In 2015 Martincorena and colleagues sequenced 234 small biopsies of sun-exposed eyelid epidermis from four donors aged 55 to 73. The skin was normal epidermis free of visible lesions, and it was doing its job.

Mutations in *NOTCH1* were present in 14 to 21 per cent of skin cells. *NOTCH2* in 5 to 7 per cent, *NOTCH3* in 2 to 3 per cent. Taken together, about a quarter of all skin cells in those biopsies carried a NOTCH mutation. *TP53* and *FAT1* mutations were each in 3 to 5 per cent of cells. On average each normal cell carried 0.27 driver point mutations, with a 95 per cent confidence interval from 0.19 to 0.35. The authors' summary is that aged, sun-exposed skin is a patchwork of thousands of evolving clones, with over a quarter of its cells carrying mutations of the kind found in cancers while the epidermis goes on maintaining its physiological functions.

These were not early cancers found by looking hard. The mutations were under positive selection, meaning the statistics showed the mutated cells were doing better than their neighbours instead of drifting along by chance. Each patch of descendants of one such cell is a *clone*, and those clones had expanded. And the tissue was working throughout. Some clones carried two or three driver mutations and had still not acquired malignant potential, which led the authors to ask what combinations of events are actually sufficient for transformation.

The first model has no room for this result. If a driver mutation made a cell a cancer cell, a quarter of that epidermis would have been cancer, and it was not.

**The more adequate model.** A driver mutation is necessary and it is not sufficient. What happens to a cell carrying one is decided by the mutation together with the state of the tissue it is sitting in: what its neighbours are doing, whether it is still attached where it should be, how crowded the sheet is, and which of the available responses that particular tissue reaches for. The mutation sets what is possible. The tissue decides much of what actually occurs.

**Comparing the two models on the same case.** Take one epidermal cell with a *NOTCH1* mutation, in the eyelid skin above.

The first model predicts a cancer cell, and a tissue containing a great many of them. It cannot then explain the intact epidermis, and it has no way to describe the difference between this cell and one in a tumour, because on its account they are the same cell.

The second model predicts what was found. A cell with a growth advantage relative to its neighbours founds a clone, that clone expands, and it stays inside a functioning epithelium because the other controls have not failed: the cells are still attached, still responsive to crowding, still able to run the death programme, still able to arrest. The difference between this clone and a tumour is a difference in how many of those controls are intact, not in whether a mutation is present.
:::

## What "tissue context" actually consists of

The phrase is easy to say and easy to leave vague. This lesson has been building its content for four scenes, and it comes to three specific things, none of which is written in the cell's genome.

**Whether the cell is where it belongs.** Scene 3: epithelial survival can depend on attachment to the matrix, and a cell that loses that attachment can run the apoptotic programme. Position is a survival condition. Two cells with identical genomes, one attached and one not, are not in the same situation.

**How many cells the sheet is carrying.** Scene 3 again: crowding drives extrusion, and in the 2012 work most cells extruded during ordinary homeostasis were still alive when they left. A sheet at normal density and the same sheet when crowded do different things to the same cell. The decision to remove is being made by mechanical state, and the cell being removed had no vote.

**Which response the tissue reaches for.** Scene 4 and scene 5 together: p53 can produce transient arrest, senescence or apoptosis, and depending on the tissue either its arrest function or its apoptosis function can be the one that matters for suppressing tumours. One protein, one kind of damage, and the response that does the work differs by tissue. That is not a gap in the knowledge waiting to be filled by a better list of genes. It is the finding.

:::{diagram} ../diagrams/one-driver-many-outcomes.diagram.json
:alt: A driver mutation plus other controls still holding gives a clone in working tissue; that clone plus more drivers over decades, and several controls failing too, is what gives growth that does not end.
:longdesc: Six ideas joined by five contributing links, each link meaning that what it starts from contributes to what it points at. Three ideas start the map because nothing points into them: a driver mutation, other controls still hold, and several controls fail too. Two links converge on the first outcome, a clone in working tissue, one from the driver mutation and one from other controls still hold, that second idea covering attachment, the death programme and the response to crowding all still working. A single driver therefore gives a clone and not a cancer, because the tissue's other controls contribute to that outcome as much as the mutation does. From the clone in working tissue a link leads to more drivers over decades, a typical tumour carrying two to eight driver mutations. Two links then converge on the second outcome, growth that does not end, one from more drivers over decades and one from several controls fail too. Compare what feeds the two outcomes. The driver mutation lies upstream of both, since it feeds the clone and the clone feeds the second outcome. What differs is whether the tissue's other controls are still holding or have given way, which is the conclusion of the map: the mutation alone does not select which outcome occurs.
:::

Read the two outcomes in that map by comparing what feeds each one. Every arrow is a contribution, and both outcomes have more than one arrow arriving. The mutation is upstream of both, so it is not what tells them apart. What tells them apart is whether the tissue's own controls are still working.

## How the numbers on both sides fit together

Two sets of figures now sit side by side, and they agree.

From normal tissue: an average of 0.27 driver point mutations per cell in normal skin, with individual clones carrying two or three and still not malignant.

From tumours: a typical tumour contains two to eight driver mutations, and in common adult tumours including colorectal cancer the number of mutated driver genes is often three to six. Of everything else in a tumour's genome, more than 99.9 per cent of the alterations are immaterial to the disease. In a common solid tumour of the colon, breast, brain or pancreas, an average of 33 to 66 genes carry mutations that would be expected to change their protein products, and only a few of those are drivers. The rest are passengers, conferring no growth advantage, carried along.

So the difference between a normal-looking clone and a tumour is a small number of additional drivers, accumulated over decades, in a tissue whose other controls have also given way. Not a bright line. A count, plus a context.

That is also why the failure analysis in scene 5 matters more than a list of mutations would. Two of its three failure modes concern removal and differentiation, and only the third concerns division, and those are exactly the controls that decide whether a mutated clone stays a clone.

:::{check}
:id: check-recheck-new-case

Recheck the model on a case that is not skin.

A study sequences normal colonic crypts from adults with no known bowel disease and reports that some crypts carry mutations in genes recurrently mutated in colorectal cancer, in tissue that is histologically normal.

Two questions. Does this result surprise you, given this scene? And what would have to be shown in addition before anyone could say those crypts were on the way to becoming a tumour?

**Answers.** It should not surprise you. The skin result establishes that normal, functioning tissue can carry driver mutations under positive selection, and the model that replaced the first one predicts that this is a general feature of renewing tissues rather than a peculiarity of eyelid skin. Predicting the colonic case is a fair use of the model.

What would have to be shown: that the additional drivers a tumour needs have accumulated, since a typical tumour carries two to eight and normal cells average well under one; and that the tissue-level controls have failed too, which means evidence about attachment, about removal at the surface, and about whether the affected cells still respond to crowding. Mutation in a histologically normal crypt is one of those requirements and not the set. Note also that this check is testing whether you can extend a model, not reporting a measurement: the evidence quoted in this lesson is from skin, and this pack contains no colonic dataset of that kind.

If your prediction at the top of the scene was "a fraction of a per cent", say specifically which part of your model produced that number. It will almost always be the assumption that a driver mutation and a cancer cell are the same thing.
:::

:::{callout}
:id: callout-normal-tissue-boundary
:kind: boundary

A word on what the skin finding does and does not say, because it is easy to misread in either direction.

It is a study of 234 biopsies from four donors, all of sun-exposed eyelid skin, all aged 55 to 73. It describes what those tissues contained. It is a teaching example here and it is not a statement about any reader's tissue, it carries no personal risk figure, and nothing in it supports or discourages any screening, monitoring or clinical action. This lesson makes no recommendation of any kind. The reason the study appears is narrower: it is the clearest available demonstration that carrying a driver mutation and having a cancer are different states, which is a fact about biology and not advice about anyone.
:::

:::{source-note}
:claims: claim-drivers-in-normal-tissue, claim-drivers-and-passengers, claim-decades-and-mutation-accumulation, claim-p53-downstream-unresolved, claim-anoikis-named, claim-crowding-extrusion
:sources: source-martincorena-normal-skin, source-vogelstein-cancer-genome-landscapes, source-bieging-p53-suppression, source-frisch-anoikis-1994, source-eisenhoffer-crowding-extrusion

A 2015 Science paper on somatic mutation in normal human skin supplies the design of 234 biopsies of sun-exposed eyelid epidermis from four donors aged 55 to 73, the description of that epidermis as normal and free of macroscopic lesions while maintaining its physiological functions, the mutant-cell fractions of 14 to 21 per cent for NOTCH1, 5 to 7 per cent for NOTCH2, 2 to 3 per cent for NOTCH3 and 3 to 5 per cent for TP53 and for FAT1, the summary that about a quarter of skin cells carried NOTCH mutations, the average of 0.27 driver point mutations per cell with a 95 per cent confidence interval of 0.19 to 0.35, the evidence of positive selection on those genes, and the report of clones carrying two to three driver mutations that had not acquired malignant potential together with the authors' resulting question about what combinations of events are sufficient for transformation.

A 2013 review of cancer genome landscapes supplies the two-to-eight driver mutations in a typical tumour, the three-to-six figure for common adult tumours including colorectal, the driver-and-passenger distinction with passengers conferring no selective growth advantage, the statement that more than 99.9 per cent of alterations in tumours are immaterial to neoplasia, the average of 33 to 66 genes carrying protein-altering mutations in common solid tumours of the colon, breast, brain or pancreas, and the decades-long timescale. A 2014 review of p53 supplies the finding that the arrest or the apoptosis function can be the decisive one depending on the tissue, and the unresolved state of which downstream pathways carry p53's tumour suppression. The attachment-dependence of epithelial survival comes from the 1994 anoikis paper and the crowding-driven extrusion of live cells from the 2012 extrusion paper, both introduced in scene 3.

Three limits belong to this scene. The normal-tissue evidence is from skin, and this pack contains no equivalent dataset for the colon, so the extension to colonic crypts in the retrieval check is presented as a use of the model and explicitly not as a reported measurement. The three components listed under tissue context are this lesson's own assembly of mechanisms drawn from separate sources; no single source consulted here presents them as one framework. And the closing statement that the difference between a normal-looking clone and a tumour is a count of drivers plus a context is this lesson's synthesis of the two sets of figures rather than a claim either source makes in that form.
:::
