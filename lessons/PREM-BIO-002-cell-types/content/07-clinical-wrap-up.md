# Clinical wrap-up: the drug that can tell your cells from theirs

Someone swallows a tablet for a chest infection. Over the next few hours it reaches essentially every tissue, including the colon, where it meets a bacterial population of about 10¹¹ organisms per millilitre of contents lying against an epithelium one cell thick. The tablet kills bacteria. It does not kill the patient.

That is a strange thing for a small molecule to manage, and this lesson's model explains part of it, misses part of it, and predicts the most important side effect. Work through it in that order.

:::{callout}
:kind: boundary

A teaching example, not medical advice. Nothing here is a recommendation about any drug, dose, patient, or decision, and no drug is named as a treatment for anything. The point is to show the lesson's model doing work on a real clinical question.
:::

## Part the model explains

Both cell types build protein on ribosomes. The ribosomes are not the same. A bacterial ribosome and a eukaryotic cytoplasmic ribosome differ enough in sequence and structure that a molecule can bind one and not the other, and the difference that decides it is sometimes a single nucleotide or a single amino acid.

That difference is enough for whole drug classes. Eukaryotic cytoplasmic ribosomes are insensitive to macrolides, lincosamides, streptomycin and 2-deoxystreptamines, while bacterial ribosomes are sensitive to them. A drug of that kind, arriving in a tissue where a bacterium sits next to a human cell, shuts down protein synthesis in one and leaves the other running.

Now place that fact in the right tier of the diagram from scene 4. The ribosome difference does **not** follow from the nuclear envelope. Nothing about a membrane around DNA determines the sequence of a ribosomal RNA. It is a difference between two lineages that also happen to differ in architecture, which puts it on the correlate branch. Getting this right matters, because a learner who files it under "follows from the criterion" will make a prediction the next section shows to be wrong.

## Part the model misses

Look inside a human cell, at the mitochondria. Their ribosomes retain bacterial-like features, enough that they are susceptible to drugs the cell's cytoplasmic ribosomes shrug off. The proposal in the literature is that the toxicity of ribosome-targeting drugs in patients is most likely a consequence of that susceptibility, and the ototoxicity and nephrotoxicity that limit aminoglycoside use are the standing example.

So the two-architecture picture has a seam running through the inside of your own cells. A eukaryotic cell contains a compartment whose protein-synthesis machinery answers to the other side of the divide. Why that should be is lesson 03's subject and it is worth waiting for; the endosymbiotic origin of mitochondria is one of the better stories in cell biology and it deserves more than a sentence here. What this scene needs is only the consequence: a criterion about where the DNA sits does not carry all the way down to every machine in the cell, and a clinical prediction built on assuming it does will be too optimistic.

## What the model predicts, and the crypt confirms

Return to the colon. The drug is selective between cell architectures. It is not selective between one bacterium and another.

Everything in the lumen that is susceptible is hit. The resident population is not a bystander in that tissue; it occupies the space and the resources that would otherwise be available to something else, and removing it removes that occupancy. Perturbing the gut microbiota with antibiotics is what allows *Clostridioides difficile* spores to germinate into vegetative cells, colonise, and produce toxins. Those toxins, TcdA and TcdB, inactivate proteins of the Rho family, which alters cell integrity and shape, breaks the tight junctions between neighbouring cells, and increases the permeability of the intestinal epithelial layer. The clinical range runs from mild diarrhoea to pseudomembranous colitis and toxic megacolon.

Read that last paragraph against scene 3. A sheet of cells one thick, dividing about once a day, cannot out-multiply a population that at laboratory speed doubles in under twenty minutes. Its entire strategy is exclusion: stay continuous, replace worn cells before they fail, and keep the lumen on the lumen side. That strategy has a hidden dependency, which is that the population on the far side stays roughly the same population. A drug chosen for its ability to distinguish two cell architectures does its most serious damage precisely at the surface where those two architectures meet.

:::{check}
:id: check-predict-the-selectivity
:kind: retrieval

Answer from the model rather than from memory.

1. A new drug binds a structure present in bacterial cells and absent from human cells. Does that guarantee it is safe for a patient? Name the specific thing this lesson says to check.
2. A colleague argues that because the drug cannot enter the nucleus, it cannot harm a human cell. Say what is wrong with the argument.
3. Predict one consequence of giving that drug to someone whose colonic epithelium is already damaged, and say which part of this lesson supports the prediction.
:::

For the first question: no. Check the mitochondria. A structure absent from the eukaryotic cytoplasm may still be present, in a bacterial-like form, inside a compartment of the same cell, and ribosome-targeting drugs are the documented case.

For the second, the argument assumes that "eukaryotic cell" means "everything important happens behind the nuclear envelope". Most of what a drug can interfere with is outside the nucleus: ribosomes, membranes, metabolism, and the mitochondrial compartment. The criterion locates the DNA and nothing else.

For the third, a reasonable prediction is that removing the resident population from the lumen makes an already-compromised barrier worse instead of better, because the epithelium's exclusion strategy depends on the community on the far side staying stable. The support is the antibiotic-perturbation route to *C. difficile* colonisation and the toxin damage to junctions and permeability described above. This is a prediction about mechanism, not a claim about how often it happens in any particular group of patients, and nothing here should be read as advice about a real decision.

## Where this leaves you, and what comes back later

Six scenes ago the question was what separates a bacterium in the lumen from the cell it is touching. The answer turned out to be one structural fact with a short list of genuine consequences and a long list of things people wrongly attach to it.

Carry four things forward.

The criterion: whether a membrane envelope encloses the DNA, and nothing else.

The arithmetic: surface per unit volume goes as $1/r$ and diffusion time goes as $x^{2}$, so a cell twenty times larger has a twentieth of the membrane per unit interior and takes four hundred times as long to mix.

The trade: a compartment buys staged control and charges transport and time.

The discipline: sort every claim about the two cell types into follows, tends to, or does not follow, before you use it.

Lesson 03 opens the eukaryotic interior that this lesson deliberately left shut, and it will ask you to reuse the diffusion argument to explain why a cell 20 µm across needs compartments at all. Lesson 08 returns to the 24-hour cell cycle with the machinery to explain it. Lesson 10 comes back to the crypt when division stops being controlled. When any of those arrives, recover the surface-to-volume relation and the crossing-time relation from memory first, before rereading; that retrieval is worth more than the reread.

## Accessibility and alternatives

Every task in this lesson can be answered in prose, a list, or a table, whichever suits you, and typed, dictated, or entered through assistive technology. All arithmetic is one or two steps and can be done on paper, in your head, or with a calculator; answers are ranges, and an estimate anywhere inside a stated range is correct.

The three visuals each carry a text equivalent that contains everything they are used for. The labelled prokaryotic cell has a long description that names every structure, states where each sits relative to the others, and gives the teaching point, which is that no membrane runs between the DNA and the ribosomes. The surface-to-volume chart has a long description listing the ratio at eleven radii and both marked positions, so the curve's shape and the two comparisons are available as numbers. The criterion diagram is a list of nodes and labelled links, and its long description states the three tiers and which statements sit in each. No task depends on seeing any of them, and none of the three encodes information by colour alone.

Nothing here depends on position on a page, dragging, sound, motion, or speed. No task asks about your own body, health, medication, infections, or test results, and no activity involves handling, culturing, or being exposed to any organism.

:::{source-note}
:claims: claim-ribosome-selectivity, claim-mitoribosome-toxicity, claim-cdi-after-antibiotics, claim-colonic-bacterial-density, claim-epithelium-single-layer, claim-ecoli-generation-time, claim-crypt-stem-cell-division
:sources: source-bottger-ribosomal-antibiotics, source-spigaglia-cdi, source-ocallaghan-epithelium-bacteria, source-irwin-doubling-time, source-zhu-intestinal-stem-cells

A 2001 study of ribosomal antibiotics supplies both the selectivity and the toxicity claims: eukaryotic cytoplasmic ribosomes are insensitive to macrolides, lincosamides, streptomycin and 2-deoxystreptamines while bacterial ribosomes are sensitive; selectivity can be determined by a single nucleotide or amino acid; and the authors propose that the toxicity of ribosomal drugs in patients most likely follows from the susceptibility of the mitochondrial ribosome, with aminoglycoside ototoxicity and nephrotoxicity as the example. That proposal is an interpretation offered by those authors rather than a settled mechanism, and it is presented here as such. The route from antibiotic perturbation of the gut microbiota to *Clostridioides difficile* germination, colonisation and toxin production, the action of TcdA and TcdB on Rho-family proteins with loss of tight junctions and increased epithelial permeability, and the range of clinical presentation up to pseudomembranous colitis and toxic megacolon, come from a 2024 review. The colonic microbial load of about 10¹¹ bacteria per millilitre of content, and the description of the intestinal epithelium as a single continuous layer acting as a semipermeable barrier, come from a 2019 review of epithelial and bacterial interaction. The division rates used in the closing comparison are the ones established earlier in this lesson and carry their original sources. No claim here concerns the frequency of any outcome in any population, and none is offered as guidance for a clinical decision.
:::
