# Work out for yourself why the lens had to come first

Why did nobody see a cell before the seventeenth century? One popular answer is that people were not looking carefully. Another is that anatomy was still primitive. Both are wrong, and you can rule them out with arithmetic you already have.

Here is the task. **Decide whether an unaided human eye, working perfectly, could ever have resolved that the lining of a colon is built from separate units.** Try it before reading on if you like; the worked version follows in full.

## What is being asked

Compare two lengths: the smallest detail a good eye can separate at ordinary viewing distance, and the width of one colonic epithelial cell. If the cell is the smaller of the two, an unaided eye cannot resolve neighbouring cells as separate units, however long anyone stares.

| Quantity | Value | Where it comes from |
| --- | --- | --- |
| Reference limit of human vision | about 1 minute of arc | the standard behind 20/20 vision, equivalent to 60 pixels per degree |
| Study mean for high-contrast foveal achromatic stimuli | about 94 pixels per degree | a 2025 behavioural measurement, finer than the 60 ppd standard under those conditions |
| Viewing distance | 25 cm | an assumption of this calculation, roughly where you hold a page |
| Width of one colonic epithelial cell | about 10 to 20 µm | animal cells sit mostly in the 10 to 20 µm band, and a crypt-modelling study uses a mean cell radius of 5 µm |

Only the first three rows describe the eye. Notice what kind of quantity the eye's limit is. It is an **angle**, not a length. An eye has no fixed length threshold, because the same object subtends a smaller angle the further away it sits. Turning that angle into a length is the whole job here, and it cannot be done without a distance.

## The relation to use

For a small angle measured in radians, the length an object spans and the angle it subtends are tied together by its distance:

:::{equation}
:label: equation-small-angle

s = d\,\theta
:::

In words: the smallest separation you can resolve, $s$, equals your viewing distance $d$ multiplied by your angular limit $\theta$ in radians. The relation holds for small angles, which is the only regime this lesson is in.

## The plan

Convert the angle to radians. Multiply by the viewing distance. Compare the result with a cell. Then check the answer by a second route before believing it.

### Step 1: convert the angle

One degree is $\pi/180$ radians, about $0.0175$ rad, and one minute of arc is a sixtieth of that.

:::{equation}
:label: equation-arcmin-to-radians

\theta = \frac{1}{60}\times\frac{\pi}{180} \approx 2.9\times10^{-4}\ \text{rad}
:::

### Step 2: turn the angle into a length

At $d = 25$ cm, which is 250 mm:

:::{equation}
:label: equation-threshold-length

s = 250\ \text{mm}\times2.9\times10^{-4} \approx 0.073\ \text{mm} = 73\ \mu\text{m}
:::

Hold the page at 35 cm instead and the same arithmetic returns about 100 µm. This threshold is no constant; it drifts with how you hold the thing you are looking at. Round it to **about 0.1 mm**, which is 100 µm, and carry it as an order-of-magnitude figure and never as a measurement.

### Step 3: compare at the stated distance

A colonic epithelial cell is 10 to 20 µm across. At the stated 25 cm viewing distance, divide the calculated 73 µm threshold by the cell-width band:

:::{equation}
:label: equation-the-ratio

\frac{73\ \mu\text{m}}{20\ \mu\text{m}} \approx 3.6, \qquad \frac{73\ \mu\text{m}}{10\ \mu\text{m}} \approx 7.3
:::

A cell sits a factor of about 3.6 to 7.3 below the 25 cm threshold. Both ends of that band return the same verdict, so the verdict does not depend on which cell width you happened to choose. At the separately stated 35 cm benchmark, where the threshold is about 100 µm, the corresponding coarse factor is five to ten; that is the order-of-magnitude comparison carried on the ladder below.

### Step 4: check it by another route

Take the study's mean high-contrast foveal achromatic threshold instead of the classroom standard. A mean of 94 pixels per degree is finer than the standard 60 ppd by a factor of $94/60 \approx 1.6$, so the threshold length falls from about 73 µm to about 47 µm at 25 cm. A 15 µm cell is still roughly three times smaller than that. This is a behavioural threshold under the study's conditions, not a universal two-object resolution limit or the best any participant achieved. It serves only as a robustness check: the cell remains below the threshold when a finer observed mean replaces the classroom standard.

### Units and assumptions, stated plainly

Every length here is in micrometres, where 1 µm is a millionth of a metre and a thousandth of a millimetre. The angle had to be in radians before it could be multiplied by a distance. The 25 cm viewing distance is an assumption of this calculation and not a property of eyes. The cell width is a working figure taken from a band, and human cell sizes across the whole body span about seven orders of magnitude in mass, so no single number deserves to be called the size of a cell.

### What the answer means

An unaided eye could never have settled the question, because at the stated 25 cm distance the units it would have had to separate are about 3.6 to 7.3 times finer than the finest detail it can separate. That gap is under one order of magnitude, which is a small gap, and the smallness is the interesting part. An optical system needs enough resolving power to separate neighbouring cells, enough contrast to detect their boundaries, and enough magnification to make the resolved information visible; ten-times magnification alone does not guarantee any of those. Cell theory waited on an instrument and specimen conditions that could supply them.

Before moving on, explain the decision that controlled the whole solution: why did the angular limit have to be converted into a length using the viewing distance, and why would treating the eye's threshold as a fixed physical length give the wrong model?

## Put the numbers on a ladder

:::{diagram} ../diagrams/scale-ladder.diagram.json
:alt: A ladder of five sizes running from the 0.1 mm unaided-eye threshold through a modelled colonic crypt opening, one crypt cell, the light-microscope threshold, and the 2 nm DNA double helix.
:longdesc: Five rungs, largest at the top. The unaided-eye threshold is about 0.1 millimetres, or 100 micrometres. In a simplified circular model, 22 cells of about 10 micrometres around a crypt perimeter imply an opening about 70 micrometres across, so the opening is finer than the eye threshold and is not resolved by it. One crypt cell is about 10 to 20 micrometres, five to ten times finer than the eye threshold. A conventional light microscope separates detail down to about 0.25 micrometres, so cell-scale boundaries are forty to eighty times wider than that limit and can be resolved when specimen contrast is adequate. The DNA double helix is about 2 nanometres across, roughly a hundred times finer than the light-microscope limit, so its 2 nanometre width is not resolved by conventional light microscopy. This statement does not rule out detecting or localising a suitably labelled helix. Crypt depth is not used to decide what a surface view resolves.
:::

Two thresholds sit on that ladder, and between them they explain how this block is sequenced. The eye's threshold explains why cell biology begins in the 1660s. The light microscope's threshold of about 0.25 µm explains why the three centuries that followed produced a detailed account of cells and a very thin account of what is inside them. Spatial detail under a quarter of a micrometre remained unresolved by conventional light microscopy. A sufficiently contrasting or labelled feature below that limit may still be detected or localised, but its width, shape, or close neighbours are not thereby resolved.

:::{check}
:id: check-thresholds-and-rungs
:kind: retrieval

Work from the ladder alone, without recomputing anything.

1. Which biological dimensions on the ladder are coarser than the unaided-eye threshold, and which are finer?
2. Which are coarser than the conventional light-microscope threshold, and which are finer?
3. Which dimensions change side between the two answers, and what does that tell you about the sentence "you can see it"?
:::

An unaided eye resolves none of the biological dimensions on this ladder: the modelled crypt opening is about 70 µm across, below the 100 µm threshold, and the cell and DNA-helix widths are finer still. The crypt-opening and cell widths are coarser than a light microscope's 0.25 µm spatial-resolution limit, while the 2 nm helix width is about a hundred times finer and remains unresolved. Both the opening and the cell change side, and that is the point: "you can see it" is an incomplete sentence until someone names the instrument, the viewing direction, the dimension being compared, and whether *see* means detect, localise, or resolve. A threshold comparison answers only the spatial-resolution part; real detection also depends on contrast, labelling, sampling and noise.

:::{source-note}
:claims: claim-eye-resolution, claim-cell-size-band, claim-cell-size-spread, claim-crypt-cell-count, claim-crypt-opening-scale, claim-light-microscope-limit, claim-dna-helix-width
:sources: source-ashraf-eye-resolution, source-li-cell-size, source-vanderwath-crypt-model, source-hatton-cell-count, source-galbraith-resolution-limit, source-seeman-dna

The angular limit comes from a 2025 study of human spatial resolution, which states the 1 minute of arc standard and reports a mean foveal achromatic threshold near 94 pixels per degree for high-contrast stimuli under the study's conditions. Converting that angle into a length at a stated viewing distance is this lesson's own arithmetic, and the result moves with the distance you assume, which is why it is carried as about 0.1 mm and never as a fixed value. The cell width comes from a review reporting that most animal cells are 10 to 20 µm across, together with a crypt-modelling study that uses a mean cell radius of 5 µm; the same model places about 22 cells around a crypt perimeter. Treating those cells as 10 µm wide gives a circumference near 220 µm and, after dividing by $\pi$, an opening diameter near 70 µm. That is this lesson's simplified geometric inference, not a measured opening diameter, and the source gives no opening-to-opening separation from which surface density could be inferred. A 2023 census of human cells reports that cell sizes across the body span about seven orders of magnitude in mass, so the working figure is a band and never a constant. The light-microscope limit of about 250 nm and the DNA helix width of about 2 nm come from a microscopy review and a structural review respectively. The microscopy review defines the limit through the point-spread function: it bounds distinguishable spatial detail, not detection or localisation of every sub-resolution signal.
:::
