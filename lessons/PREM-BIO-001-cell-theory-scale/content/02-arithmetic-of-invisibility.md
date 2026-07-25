# Work out for yourself why the lens had to come first

Why did nobody see a cell before the seventeenth century? One popular answer is that people were not looking carefully. Another is that anatomy was still primitive. Both are wrong, and you can rule them out with arithmetic you already have.

Here is the task. **Decide whether an unaided human eye, working perfectly, could ever have shown that the lining of a colon is built from separate units.** Try it before reading on if you like; the worked version follows in full.

## What is being asked

Compare two lengths: the smallest detail a good eye can separate at ordinary viewing distance, and the width of one colonic epithelial cell. If the cell is the smaller of the two, an unaided eye cannot show it, however long anyone stares.

| Quantity | Value | Where it comes from |
| --- | --- | --- |
| Reference limit of human vision | about 1 minute of arc | the standard behind 20/20 vision, equivalent to 60 pixels per degree |
| Best measured foveal limit | about 94 pixels per degree | a 2025 measurement, finer than the 60 ppd standard |
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

### Step 3: compare

A colonic epithelial cell is 10 to 20 µm across. Dividing:

:::{equation}
:label: equation-the-ratio

\frac{100\ \mu\text{m}}{20\ \mu\text{m}} = 5, \qquad \frac{100\ \mu\text{m}}{10\ \mu\text{m}} = 10
:::

A cell sits a factor of five to ten below the threshold. Both ends of that band return the same verdict, so the verdict does not depend on which cell width you happened to choose.

### Step 4: check it by another route

Take the best measured performance instead of the classroom standard. A foveal limit of 94 pixels per degree is finer than the standard 60 ppd by a factor of $94/60 \approx 1.6$, so the threshold length falls from about 73 µm to about 47 µm at 25 cm. A 15 µm cell is still roughly three times smaller than that. Handing the eye its best possible performance leaves the answer standing, which is the mark of a conclusion resting on the size gap and not on the input someone picked.

### Units and assumptions, stated plainly

Every length here is in micrometres, where 1 µm is a millionth of a metre and a thousandth of a millimetre. The angle had to be in radians before it could be multiplied by a distance. The 25 cm viewing distance is an assumption of this calculation and not a property of eyes. The cell width is a working figure taken from a band, and human cell sizes across the whole body span about seven orders of magnitude in mass, so no single number deserves to be called the size of a cell.

### What the answer means

An unaided eye could never have settled the question, because the units it would have had to separate are five to ten times finer than the finest detail it can separate at all. That gap is under one order of magnitude, which is a small gap, and the smallness is the interesting part. A lens giving ten times magnification closes it. Cell theory did not wait on a revolution in optics; it waited on a modest instrument that nobody had yet turned on a piece of tissue.

## Put the numbers on a ladder

:::{diagram} ../diagrams/scale-ladder.diagram.json
:alt: A ladder of five sizes running from the 0.1 mm limit of unaided vision down to the 2 nm width of the DNA double helix, with a colonic crypt, one crypt cell, and the light-microscope limit in between.
:longdesc: Five rungs, largest at the top. The unaided eye separates detail down to about 0.1 mm. One colonic crypt, about 700 cells stacked roughly 32 along its length, comes to a few hundred micrometres and is therefore three to six times larger than that threshold. One crypt cell is about 10 to 20 micrometres, which is five to ten times below the threshold, and that is the gap a lens had to close. A conventional light microscope separates detail down to about 0.25 micrometres, so a cell is forty to eighty times wider than that limit and is shown easily. The DNA double helix is about 2 nanometres across, roughly a hundred times finer than the light-microscope limit, so no light microscope shows it at all.
:::

Two thresholds sit on that ladder, and between them they explain how this block is sequenced. The eye's threshold explains why cell biology begins in the 1660s. The light microscope's threshold of about 0.25 µm explains why the three centuries that followed produced a detailed account of cells and a very thin account of what is inside them. Structures under a quarter of a micrometre were not small mysteries awaiting a clever experiment. They were invisible to every instrument in the building.

:::{check}
:id: check-thresholds-and-rungs
:kind: retrieval

Work from the ladder alone, without recomputing anything.

1. Which entries on the ladder could an unaided eye separate, and which could it not?
2. Which entries could a conventional light microscope separate, and which could it not?
3. One entry changes side between the two answers. Which, and what does that tell you about the sentence "you can see it"?
:::

An unaided eye could separate the crypt and nothing below it, since the crypt is a few times above the 0.1 mm threshold while a cell is five to ten times below it. A light microscope separates the crypt and the cell easily, and fails on the DNA helix, which is about a hundred times finer than its 0.25 µm limit. The cell is the entry that changes side, and that is the point: "you can see it" is an incomplete sentence until someone names the instrument. Every claim about what is visible in biology is a claim about a threshold, and the threshold belongs to the equipment.

:::{source-note}
:claims: claim-eye-resolution, claim-cell-size-band, claim-cell-size-spread, claim-crypt-cell-count, claim-light-microscope-limit, claim-dna-helix-width
:sources: source-ashraf-eye-resolution, source-li-cell-size, source-vanderwath-crypt-model, source-hatton-cell-count, source-galbraith-resolution-limit, source-seeman-dna

The angular limit comes from a 2025 study of human spatial resolution, which states the 1 minute of arc standard and reports a measured foveal achromatic limit near 94 pixels per degree. Converting that angle into a length at a stated viewing distance is this lesson's own arithmetic, and the result moves with the distance you assume, which is why it is carried as about 0.1 mm and never as a fixed value. The cell width comes from a review reporting that most animal cells are 10 to 20 µm across, together with a crypt-modelling study that uses a mean cell radius of 5 µm; a 2023 census of human cells reports that cell sizes across the body span about seven orders of magnitude in mass, so the working figure is a band and never a constant. The light-microscope limit of about 250 nm and the DNA helix width of about 2 nm come from a microscopy review and a structural review respectively.
:::
