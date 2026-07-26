# An acid compartment is no use if the enzyme never arrives

Dividing a cell into compartments creates a problem the undivided cell did not have. Every protein is built by a ribosome, and ribosomes start work in the cytosol. The hydrolase that has to end up at pH 5, the pump that has to end up on the apical face and nowhere else, the enzyme that has to end up inside a peroxisome: all of them begin in the same place, and none of them belongs there.

So a compartmentalised cell needs a postal system. Each newly made protein has to find its way from a ribosome to its working location by a specific route, guided by signals in its own amino-acid sequence. That is a real, separate piece of machinery, and it is a large part of what compartmentalisation costs.

## The route, once

:::{diagram} ../diagrams/route-to-the-surface.diagram.json
:alt: The route from nucleus to ribosome to rough endoplasmic reticulum to Golgi to the trans-Golgi network, which branches to the apical membrane, the basolateral membrane and the lysosome.
:longdesc: A single route with a three-way branch. Nucleus at about pH 7.2, then a cytosolic ribosome at about pH 7.2, then the rough endoplasmic reticulum at about pH 7.2 where the chain is threaded in and folding starts, then the Golgi stack running from about pH 6.7 to 6.0 where the protein is successively modified and lysosomal enzymes are tagged with mannose 6-phosphate, then the trans-Golgi network which sorts cargo by destination. From there, three branches: the apical membrane facing the lumen, the basolateral membrane facing neighbours and blood, and the lysosome at about pH 5 reached by mannose 6-phosphate receptors. The apical branch is the one that fails in the clinical case at the end of the lesson.
:::

Take that route one step at a time, because each step is answering a different question.

**Where the instructions are kept.** The nucleus holds the main genome and is the principal site of DNA and RNA synthesis. Translation happens outside it, on ribosomes in the cytosol. That separation of where a message is written from where it is read is itself a compartment doing work, and later lessons in this course use it heavily.

**How a protein gets diverted off the default path.** Translation starts in the cytosol for every nucleus-encoded protein, which is nearly all of them; the thirteen proteins encoded by mitochondrial DNA are translated by mitochondrial ribosomes inside the mitochondrion and never join this route. For everything on the route taught here, about thirty per cent of newly synthesised ones are pulled off that default course almost immediately. As the first stretch of the new chain emerges from the ribosome, a **signal sequence** in it is recognised and captured by a particle called the signal recognition particle, which carries the whole ribosome-and-chain assembly to the endoplasmic reticulum membrane and hands the signal sequence over to a channel there, the Sec61 translocon. The chain is then threaded across the membrane as it is made.

Notice what kind of thing that is. The address is part of the product, readable while the product is still being built, and it is read by a receptor whose job is to recognise it. No sorting office attaches it afterwards. Compartmentalisation obliges a cell to encode a destination in every item it makes.

**What the sequence of compartments does to the product.** Once inside the endoplasmic reticulum the protein folds. From there it moves on through the Golgi apparatus, and along that path it passes through a series of compartments where it is successively modified. Order matters here: the same protein arriving at the Golgi is not the object that left the ribosome, and it will not be the object that leaves the Golgi.

This is the second purchase. **A fixed order of compartments imposes a fixed order of operations.** A cell with one internal volume would have to control the sequence of a dozen modifications some other way, with every enzyme present in the same solution at the same time. A cell with a route gets the sequence for free from the geometry.

**How the cell decides where it goes next.** The route ends at the **trans-Golgi network**, which is where sorting happens. It packages finished proteins into transport vesicles and dispatches them to their specific destinations. The clearest worked case is the lysosome: enzymes bound for lysosomes have mannose 6-phosphate groups added to their sugar chains as they pass through the Golgi, those groups are recognised by mannose 6-phosphate receptors in the trans-Golgi network, and the tagged enzyme is diverted accordingly.

A chemical tag, and a receptor that reads it. That is the whole address system in miniature, and it explains something the previous scene left open: how the hydrolases and the acid compartment ever find each other, given that they are made in different places by different machinery.

## The extra axis a polarised cell has to sort on

For a cell that is not polarised, the plasma membrane is one destination. For the colonocyte it is two. The apical face and the basolateral face carry different proteins and do different work, so a vesicle leaving the trans-Golgi network cannot simply be addressed to "the surface". It has to be addressed to a *face*.

Hold on to that, because it is where the lesson ends. A cell that has to sort to two surfaces has a delivery step that can fail on its own, without anything being wrong with manufacture. The final scene is a case where exactly that happens.

## Retrieval, before you move on

:::{check}
:id: check-route-failure-points
:kind: retrieval

A colonocyte makes a transport protein whose working location is the apical membrane.

1. Name the step at which this protein first leaves the default cytosolic route, and say what physically causes it to leave.
2. Two different faults are possible: the protein could be built wrongly, or it could be built correctly and delivered wrongly. For each, say where in the route you would look.
3. If a fault removed the mannose 6-phosphate tag from a lysosomal enzyme, where would you predict that enzyme ends up, and why?
:::

The protein leaves the cytosolic route at the ribosome, as soon as its signal sequence emerges and is caught by the signal recognition particle. A fault of manufacture shows up early, in the sequence itself or in folding inside the endoplasmic reticulum, and the product is defective wherever it goes. A fault of delivery shows up after the trans-Golgi network, and the product is intact but in the wrong place. Those are different diagnoses with different consequences, and separating them is the skill this lesson is training.

For the third: an untagged lysosomal enzyme has nothing for the mannose 6-phosphate receptors to recognise, so it is not diverted at the sorting step. It stays in the default flow of the secretory route, which runs to the cell surface, and leaves the cell. The lysosome is not damaged and the enzyme is not defective. It is simply not there. Predicting that from the tag alone is the point of understanding the address system as a separate system.

:::{source-note}
:claims: claim-sorting-signals-and-route, claim-cotranslational-er-targeting, claim-successive-modification-and-tgn-sorting, claim-mannose-6-phosphate-address, claim-nucleus-site-of-rna-synthesis, claim-colonocyte-polarity, claim-compartment-ph-landscape
:sources: source-alberts-compartmentalization, source-sun-signal-sequences, source-alberts-er-golgi, source-alberts-tgn-lysosomes, source-nguyen-colonic-crypt, source-schneeberger-mvid, source-banerjee-organelle-ph, source-feng-lysosome-hydrolases

A cell-biology textbook chapter on cellular compartmentalisation supports the statement that each newly synthesised organelle protein must find its way from a ribosome in the cytosol by a specific pathway guided by signals in its amino-acid sequence, and that the nucleus contains the main genome and is the principal site of DNA and RNA synthesis. A 2022 review supplies the figure that about thirty per cent of newly synthesised proteins from cytosolic ribosomes are delivered to the endoplasmic reticulum by co-translational targeting, and the mechanism: the signal sequence emerging from the ribosome is recognised and captured by the signal recognition particle, the assembly is delivered to the endoplasmic reticulum membrane through the signal recognition particle receptor, and the sequence is transferred to the Sec61 translocon. A textbook chapter on transport from the endoplasmic reticulum through the Golgi supports the successive modification of proteins along that route and the trans-Golgi network as the station that packages proteins into transport vesicles and dispatches them to their destinations. A textbook chapter on transport from the trans-Golgi network to lysosomes supports the addition of mannose 6-phosphate groups to lysosomal enzymes in the Golgi and their recognition by mannose 6-phosphate receptors in the trans-Golgi network. The two-faced destination problem rests on the polarity of the colonocyte reported in a 2025 crypt review and in a 2018 review of intestinal epithelial polarity. The pH values shown in the diagram are the ones tabulated in the second scene. The prediction that an untagged lysosomal enzyme leaves the cell by the default secretory flow is stated here as a prediction from the sorting mechanism; the sources establish the tag and the receptor, not the fate of a particular untagged enzyme in a colonocyte.
:::
