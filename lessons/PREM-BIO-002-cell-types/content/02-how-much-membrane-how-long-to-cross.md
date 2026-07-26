# How much membrane, and how long to cross

A bacterium in the lumen is not a shrunken lining cell. Shrinking something changes two quantities that matter for staying alive, and it changes them by different amounts. Work both out and most of the differences in the rest of this lesson stop needing to be memorised.

Here is the task. **A rod-shaped bacterium about 2 µm long sits against a human cell about 20 µm across. Calculate how much membrane each cell has per unit of interior, and how long a protein takes to cross each cell by diffusion alone. Then say what each result constrains.**

## Givens, unknowns, and what is being assumed

| Quantity | Value used | Where it comes from |
| --- | --- | --- |
| *E. coli* shape and size | rod, about 1 µm in diameter and about 2 µm long | stated for *E. coli* in a cell-biology textbook |
| Human cell size | sphere 20 µm across | the working figure for an animal cell, at the top of the 10 to 20 µm band |
| Diffusion coefficient in cytoplasm | 7.7 µm² per second | measured for a fluorescent protein in living *E. coli* |

Two idealisations are doing work here and both should be said out loud. A bacterium is a rod with rounded ends and a colonic lining cell is a tall column, so treating one as a plain cylinder and the other as a sphere is a simplification. Neither cell is a smooth ball of fluid either: real interiors are crowded. These models are used because they isolate the effect of size, which is the thing being tested, and because the answers they give can be checked against measurements made another way. That check comes at the end.

## The two relations, and why these two

**Exchange with the outside happens across a surface. Chemistry happens in a volume.** So the quantity that decides how easily a cell can supply its own interior is the surface area it has per unit of volume, written $A/V$ and carried in units of reciprocal micrometres. For a sphere the two expressions are $A = 4\pi r^2$ and $V = \tfrac{4}{3}\pi r^3$, and their ratio collapses to something worth memorising:

:::{equation}
:label: equation-sphere-surface-volume

\frac{A}{V} = \frac{4\pi r^{2}}{\tfrac{4}{3}\pi r^{3}} = \frac{3}{r}
:::

In words: a spherical cell's surface area per unit volume is three divided by its radius. Double the radius and you halve the ratio. Nothing about biology enters that statement; it is geometry, and it applies to any sphere.

**Moving things around inside a cell, with no motor pushing them, happens by diffusion.** A molecule jostled at random wanders, and the average of its squared displacement grows in proportion to elapsed time. Distance covered therefore grows only as the square root of time, and the relation rearranges to give the time needed to wander a distance $x$ along one direction:

:::{equation}
:label: equation-diffusion-time

t = \frac{x^{2}}{2D}
:::

Here $D$ is the diffusion coefficient, in square micrometres per second, and $x$ is a distance in micrometres, so $t$ comes out in seconds. The square is the whole story. Ten times the distance costs a hundred times the time.

## The plan

Volumes first, because the volume ratio sets the scale of everything else. Then surfaces, then the ratio of the two. Then diffusion times at each cell's own width, holding $D$ fixed so that only geometry differs. Then two independent checks before believing any of it.

### Step 1: volumes

For the bacterium, model a cylinder of radius $r = 0.5$ µm and length $L = 2$ µm:

:::{equation}
:label: equation-bacterium-volume

V = \pi r^{2} L = \pi (0.5)^{2}(2) \approx 1.6\ \mu\text{m}^{3}
:::

For the human cell, a sphere of radius $r = 10$ µm:

:::{equation}
:label: equation-human-volume

V = \tfrac{4}{3}\pi r^{3} = \tfrac{4}{3}\pi (10)^{3} \approx 4.2\times10^{3}\ \mu\text{m}^{3}
:::

Divide: $4.2\times10^{3} / 1.6 \approx 2.7\times10^{3}$. **One human cell holds the volume of roughly three thousand bacteria.** Between three and four orders of magnitude, then, and that is the number to carry.

### Step 2: surfaces

A cylinder's surface is its curved side plus its two ends:

:::{equation}
:label: equation-bacterium-surface

A = 2\pi r L + 2\pi r^{2} = 2\pi(0.5)(2) + 2\pi(0.5)^{2} \approx 6.3 + 1.6 = 7.9\ \mu\text{m}^{2}
:::

The sphere's surface is $A = 4\pi r^{2} = 4\pi(10)^{2} \approx 1.3\times10^{3}$ µm².

### Step 3: surface per unit volume

:::{equation}
:label: equation-ratio-comparison

\frac{A}{V}\bigg|_{\text{bacterium}} = \frac{7.9}{1.6} \approx 5.0\ \mu\text{m}^{-1}, \qquad \frac{A}{V}\bigg|_{\text{human cell}} = \frac{1.3\times10^{3}}{4.2\times10^{3}} \approx 0.30\ \mu\text{m}^{-1}
:::

The second answer is exactly $3/r$ with $r = 10$ µm, which is a small confirmation that the arithmetic held. Dividing one by the other: $5.0 / 0.30 \approx 17$. **Every cubic micrometre of bacterial interior is served by about seventeen times as much membrane as every cubic micrometre of human-cell interior.**

:::{chart} ../charts/surface-to-volume.chart.json
:::

That curve is worth pausing on. Between 0.25 and 1 µm of radius it falls off a cliff; past about 5 µm it is nearly flat. A bacterium that grows half a micrometre wider pays a real price in membrane per unit of interior. A human cell that grows half a micrometre wider barely notices. The same physical relation is a hard constraint at one size and a non-issue at the other.

### Step 4: how long a protein takes to cross

Use $t = x^{2}/2D$ with $D = 7.7$ µm² per second, and take $x$ as the distance across each cell.

:::{equation}
:label: equation-crossing-times

t_{\text{bacterium}} = \frac{(2)^{2}}{2(7.7)} \approx 0.26\ \text{s}, \qquad t_{\text{human cell}} = \frac{(20)^{2}}{2(7.7)} \approx 26\ \text{s}
:::

Ten times the distance, a hundred times the time. In a bacterium, a newly made protein reaches the far end in about a quarter of a second, so nothing inside is ever far from anything else. In a cell 20 µm across, the same journey by diffusion alone takes half a minute, and half a minute is a long time if what is arriving is a signal.

### Step 5: check it two ways before believing it

The first check is a measurement nobody made for this purpose. Our modelled bacterium came out at 1.6 µm³, which is 1.6 femtolitres. A study that measured *E. coli* volume across 22 growth conditions found single-cell volumes from 1.5 to 4.4 femtolitres. The model lands at the bottom of the measured range, which is where a cylinder built from the smaller quoted dimensions should land. It is not proof that the model is right; it is evidence that it is not wildly wrong.

The second check is on the volume ratio. A textbook statement, arrived at independently of this arithmetic, is that eukaryotic cells are frequently at least a thousandfold greater in volume than prokaryotic cells. Our figure of roughly three thousand sits comfortably above that floor.

Both checks pass, so the two headline numbers stand: a factor of about 17 in membrane per unit volume, and a factor of 100 in diffusion time.

### The assumptions you would attack first

The diffusion coefficient was measured inside *E. coli* and then applied to both cells. That was deliberate: holding $D$ fixed isolates geometry, which is what the comparison is testing.

It is worth seeing how much the answer moves when the idealisation is dropped. Measured in the cytoplasm of cultured mammalian cells, the same fluorescent protein diffuses at about 26 µm² per second, more than three times faster than in *E. coli*. Redo the second calculation with that value and the crossing time falls from 26 s to about 7.7 s. The gap between the two cells narrows from a factor of 100 to a factor of about 30, and the conclusion survives: crossing the larger cell is one to two orders of magnitude slower whichever value you use. A comparison that changes by a factor of three when a questionable assumption is corrected, while its conclusion holds, is a comparison worth keeping.

A second limit worth naming is that a real cell does not rely on diffusion alone. Directed transport, cytoskeletal tracks, and bulk flow all exist, and lesson 07 is where they arrive. What the calculation establishes is what unaided diffusion can and cannot deliver, which is the baseline everything else has to beat.

Before moving on, answer this in your own words: **why does holding the diffusion coefficient fixed strengthen the comparison rather than weaken it?** If your answer mentions accuracy, try again; the question is about what the calculation is for.

## What the two numbers constrain

The surface ratio constrains supply. A bacterium can take up what it needs across a generous surface and its metabolism can run fast, which is part of why it can rebuild itself in the time a human cell takes to do very much less. The diffusion result constrains coordination. A cell 2 µm long can leave its parts loose in one compartment and rely on everything finding everything else. A cell 20 µm across cannot, and the next scene is about what it does instead.

:::{source-note}
:claims: claim-ecoli-dimensions, claim-animal-cell-size-band, claim-cytoplasmic-diffusion, claim-mammalian-diffusion, claim-surface-volume-model, claim-ecoli-measured-volume, claim-eukaryote-volume-ratio
:sources: source-cooper-origin-evolution-cells, source-li-cell-size, source-elowitz-protein-mobility, source-braeckmans-line-frap, source-volkmer-ecoli-volume

The dimensions of the modelled rod, about 1 µm in diameter and about 2 µm long, are stated for *E. coli* in a cell-biology textbook chapter, which is also where the statement comes from that eukaryotic cells frequently exceed prokaryotic cells in volume by at least a thousandfold. The 10 to 20 µm band for animal cells comes from a cell-size review, and 20 µm is used here as a working figure rather than a measured value for any colonic cell. The diffusion coefficient of 7.7 µm² per second is the apparent value measured for green fluorescent protein in living *E. coli*; the same study reports that a small protein is expected to diffuse across about 1 µm in of order 100 milliseconds, which the relation used above reproduces to within a factor of two. The comparison value of about 26 µm² per second was measured for the same protein in the cytoplasm of cultured mammalian cells by a different group using a different method, so the two numbers are not a controlled comparison and are used only to show how far the conclusion moves. The measured single-cell volume range of 1.5 to 4.4 femtolitres comes from a study of *E. coli* across 22 growth conditions, which also reports a cell diameter near 1.26 µm, slightly wider than the 1 µm used in the model; the modelled volume is therefore a lower bound rather than a central estimate. Every geometric result above is this lesson's own arithmetic on those sourced inputs, and the cylinder and sphere are declared idealisations.
:::
