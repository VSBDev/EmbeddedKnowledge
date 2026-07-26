# Do the arithmetic before you accept the number

Somewhere in the colonocyte you have just met there is a small sac called a **lysosome**, and the fluid inside it is acid. Not slightly acid. The cytosol around it sits near pH 7.2, and the lysosome runs somewhere around pH 5 and can be lower.

Written as pH values those two numbers look close together, which is exactly the trap. pH is a logarithmic scale, so a gap of two and a bit is not a small difference in a shared quantity. Work out how large it really is before reading on.

:::{check}
:id: check-proton-ratio
:kind: retrieval

Take the cytosol at pH 7.2 and the lysosome at pH 4.5, which is the acid end of the reported range.

1. Write the hydrogen-ion concentration in each compartment as a power of ten.
2. Divide one by the other. How many times more concentrated are hydrogen ions inside the lysosome than outside it?
3. Say in one sentence what has to be true of the lysosomal membrane for that answer to be possible.

Attempt all three before you read the next paragraph. The third one is the point of the scene.
:::

## Working it through

**The task.** Two compartments, two stated pH values, and one question: what is the ratio of hydrogen-ion concentrations between them?

**What is given, and what the symbols mean.** pH is defined so that $\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$, with the concentration in moles per litre. Rearranged, $[\mathrm{H}^+] = 10^{-\mathrm{pH}}$. The two given values are cytosol 7.2 and lysosome 4.5, both dimensionless, both approximate.

**Choosing the relation.** The question asks for a ratio of concentrations, and the given quantities are logarithms of those concentrations. A ratio of two numbers is a difference of their logarithms, so the whole job is a subtraction followed by one power of ten. This is the reason the pH scale is worth having: it turns a factor into a gap you can read off by eye.

:::{equation}
:label: equation-proton-ratio

\frac{[\mathrm{H}^+]_{\text{lysosome}}}{[\mathrm{H}^+]_{\text{cytosol}}} = \frac{10^{-4.5}}{10^{-7.2}} = 10^{7.2 - 4.5} = 10^{2.7}
:::

**Execution.** $10^{2.7}$ is a little over 500. In words: the lysosome holds hydrogen ions about five hundred times more concentrated than the fluid immediately outside it, across a boundary a few nanometres thick.

**Check it against something that was not fitted to it.** Published work on lysosomes reports the hydrogen-ion gradient across the lysosomal membrane as 500 to 1000-fold, established and maintained by vacuolar-type proton pumps, the V-ATPases, which drive protons inward at the expense of ATP. Our 500 came out of two pH values and a subtraction; their figure came out of measurements of the gradient. The two agree at the acid end of the range, which is the end we picked, and that agreement is a reason to trust both. Had the arithmetic produced 5, or 50 000, one of the inputs would have been wrong.

**Interpretation.** The answer to the third part of the check is now forced. A five-hundred-fold difference does not sit still on its own. Protons leak back down a gradient that steep, so something has to keep pushing them in, continuously, for as long as the lysosome exists. That something is a pump, and it runs on ATP.

## What a compartment actually is

:::{definition}
:id: definition-compartment
:label: Compartment

A **compartment** is a space inside a cell enclosed by membrane, holding conditions that differ from the cytosol and that are actively maintained against the tendency of those differences to even out. An **organelle** is a compartment, or in a few cases a structure, with a recognisable identity and a distinct job.

The operative word is *maintained*. A compartment is not a container that happens to hold something; it is a difference that costs energy to hold. Stop paying and the difference goes, while the membrane is still perfectly intact.
:::

It is tempting to call a compartment a room, and the picture is useful for about one sentence. Rooms and compartments both let you keep incompatible things apart, and both need a way in and out. The mapping fails at the wall. A room's wall is passive: it does nothing, costs nothing to keep standing, and holds a temperature difference only until the heat leaks away. A compartment's boundary is loaded with pumps and channels, it is where a good deal of the chemistry actually happens, and holding the difference is a continuous expense. Once you have that, drop the room and use the real word.

## The cell keeps several conditions at once

The lysosome is not one exception in an otherwise uniform interior. Measured across a mammalian cell, the pH landscape looks like this.

| Compartment | Approximate pH |
| --- | --- |
| Cytosol, nucleus, endoplasmic reticulum | 7.2 |
| Golgi network, falling from its entry face to its exit face | 6.7 down to 6.0 |
| Early and recycling endosomes | 6.3 to 6.5 |
| Late endosomes | 5.5 |
| Secretory granules | 5.2 to 5.7 |
| Lysosome, the most acidic | 4.7 to 5.5 by one report, 4.5 to 5.0 by another |

Read that table as a list of simultaneous conditions instead of a list of numbers. At this moment the same cell is holding a near-neutral compartment, a mildly acid one, and a strongly acid one, side by side, each one steady, each one costing energy. That is the first of the three purchases: **incompatible chemistries running at the same time.** A reaction that needs pH 5 and a reaction that needs pH 7.2 cannot both proceed in one shared volume, and a cell with one internal volume has to choose. A compartmentalised cell does not.

Notice also what the two reports of lysosomal pH do. They overlap and they disagree at the edges, because these are measurements on living cells using different probes and different cell types, not constants. Take about pH 5 as the working figure, remember it is a band, and do not carry a decimal place through a calculation that its inputs cannot support.

:::{source-note}
:claims: claim-compartment-ph-landscape, claim-lysosome-proton-gradient, claim-proton-ratio-arithmetic
:sources: source-banerjee-organelle-ph, source-feng-lysosome-hydrolases

A 2020 review of V-ATPase regulation supplies the pH landscape: cytosol, nucleus and endoplasmic reticulum near 7.2; the Golgi network at roughly 6.7 down to 6.0 across its cis, medial and trans compartments; early and recycling endosomes at 6.3 to 6.5 and late endosomes at 5.5; secretory granules at 5.2 to 5.7; and the lysosome as the most acidic organelle at 4.7 to 5.5 in mammals. It also states that V-ATPase hydrolyses cytosolic ATP to drive proton transport from the cytosol into the organelle lumen, and that the acidic lysosomal environment is optimal for hydrolytic enzymes. A 2023 review of lysosomal hydrolase activation reports the lysosomal lumen at pH 4.5 to 5.0 and the resulting hydrogen-ion gradient across the lysosomal membrane as 500 to 1000-fold, established by V-ATPase pumping at the expense of ATP. The ratio of about 500 computed above is this lesson's own arithmetic from two stated pH values; it is presented as a consistency check against the independently reported gradient and not as a measurement.
:::
