# Practice: work the pathway, then bound it

Four tasks, with the support falling away as you go. Work each one before reading its answer. The first gives you the steps to fill in; the last gives you only a situation.

## Task 1: run the pathway at the other end of the crypt

A cell has reached the top of the crypt and is about to be shed. Fill in its state at each stage, and give your reason for each.

Wnt reaching its receptors: high or low? Occupied Frizzled and LRP5/6 complexes: many or few? Destruction complex: mostly at the membrane or mostly working in the cytosol? Phosphorylation of beta-catenin: fast or slow? Free beta-catenin: high or low? TCF and LEF partnership: formed or not? c-MYC, LGR5 and cyclin D1: on or off? The cell: dividing or not?

**Answer.** Low, few, mostly working in the cytosol, fast, low, largely not formed, off, not dividing. The reason is one chain running from the outside inward: the source of Wnt is the mesenchyme near the base, so a cell at the top receives little; with few binding events, few complexes are drawn away to the membrane and most stay in the cytosol doing their usual work; a working destruction complex phosphorylates beta-catenin rapidly, and the phosphorylated form is tagged and destroyed; free beta-catenin therefore stays low; with little of it reaching the nucleus the TCF and LEF partnership largely does not form; the stem-cell genes stay off; and a cell without that programme running is a differentiated cell finishing its working life.

## Task 2: explain a difference in sensitivity

Work from these four figures, all from the same quantitative model of the canonical pathway.

```text
Axin concentration                                  about 20 picomolar
APC concentration                                   about 100 nanomolar
Doubling Axin:   beta-catenin half-life falls by     50 per cent
Doubling GSK3B:  beta-catenin half-life falls by     about 10 per cent
```

You want to reduce a cell's free beta-catenin by making its destruction faster. Which of the two doublings do you choose, and why is a shorter half-life the thing to want? Then account for the gap between 50 and 10 using the concentrations. Note that 20 picomolar and 100 nanomolar are not in the same units; convert before comparing.

**Answer.** Choose the Axin doubling. A shorter half-life means beta-catenin is destroyed faster, so at an unchanged rate of synthesis less of it accumulates, which is the reduction asked for.

For the gap, put the concentrations in one unit. 100 nanomolar is 100,000 picomolar, so APC is present at about 5000 times the concentration of Axin. Axin is the scarcest of the major components by a wide margin, which makes it the component that limits how much destruction complex can be assembled at all. Adding to the part in shortest supply increases how much working complex exists and therefore how fast beta-catenin is cleared. Adding to a part that is already in large excess changes little, because it was never what ran out. That is why the sensitivity is concentrated in Axin instead of spread evenly across the complex.

One thing this does not show: that GSK3B matters less to the mechanism. GSK3B does the phosphorylation, so the pathway cannot work without it. Being essential and being rate-limiting are different properties, and only the second is what a doubling tests.

## Task 3: bound a gradient in a new tissue

A different epithelial structure has to distinguish 8 positions along an axis, and it reads a single substance whose concentration falls monotonically from one end to the other. It reads that gradient with genes that act independently of one another and that each switch at a single threshold.

Answer three things, and watch your units: (a) how many bits does distinguishing 8 positions represent? (b) how many thresholds are needed to produce 8 distinguishable zones? (c) state one assumption in the setup that a real tissue is likely to break.

**Answer.** (a) **3 bits**, because 8 halves to 4 to 2 to 1, and the base-2 logarithm of 8 is 3. (b) **7 thresholds**, because *k* thresholds cut an axis into *k* + 1 zones, and 8 zones needs 7 cuts. The two answers differ because bits count zones logarithmically while thresholds count boundaries; the thresholds on one falling gradient are nested and therefore redundant with each other, so 7 of them buy only 3 bits between them. Giving 3 as the answer to (b) is the mistake this task is built to catch. (c) Assumptions a real tissue is likely to break: that the genes act independently, when in practice genes reading a gradient influence one another's expression; that each gene contributes only an on-or-off call, when graded expression levels carry more; and that the reading is noiseless, when it rests on counting randomly arriving molecules. Each of those, once broken, raises the information available above this floor.

## Task 4: audit an unfamiliar pathway

Here is a signalling pathway, written for this exercise rather than taken from a source. A hormone binds a cell-surface receptor. The occupied receptor activates many copies of an intracellular enzyme. Each activated enzyme converts many molecules of a small precursor into a second messenger. The second messenger binds and activates a protein kinase, one molecule of messenger per kinase. The kinase phosphorylates many target proteins. Removing the hormone leaves the second messenger to be broken down by a phosphodiesterase already present in the cytosol.

Identify every step that multiplies and every step that does not, say whether "cascade" is a fair word for this chain, and say what terminates it and whether anything new has to be made for termination to happen.

**Answer.** Multiplying steps: receptor to enzyme (one occupied receptor activates many enzymes), enzyme to second messenger (each enzyme converts many precursor molecules), and kinase to targets (one kinase phosphorylates many proteins). Non-multiplying step: second messenger to kinase, which is one for one. "Cascade" is fair, because the chain contains several amplification steps, which is what the word means. Termination is the breakdown of the second messenger by a phosphodiesterase that is already present, so nothing new has to be made; the chain reverts because the signal was carried by a molecule under continual turnover. Note also what this pathway is built for: with three multiplying steps on the response arm it is built for gain, which suits reporting that a hormone is present and suits reporting a position badly.

## Accessibility and alternatives

Every diagram, equation and figure here has a full text equivalent in the prose beside it, no task depends on colour, position, motion or sound, and nothing asks about your own health.

## Recovery route

If a task came out wrong, go back to the joint that failed instead of rereading from the start.

Task 1 wrong in the middle of the chain, most often at the destruction complex: reread the transduction section of scene 2 and check the two inhibitory links in the diagram. The step people invert is that Wnt slows destruction instead of starting production.

Task 2 wrong: if you picked GSK3B, you used "does the chemistry" where the question asked "runs out first". If the direction was the problem, note that faster destruction means less accumulation.

Task 3 wrong: go to Step 3 and Step 4 of the worked example in scene 3, which is where bits and thresholds are separated. If you answered 3 for part (b), you gave bits where the question asked for boundaries. If you answered 8, you matched one threshold to each zone instead of counting the cuts between zones.

Task 4 wrong: scene 4, the three corrective questions at the end of the misconception box. Apply them one step at a time and write an answer for each step before forming a view about the whole chain.

If the pathway's parts feel unstable, redo the retrieval check at the end of scene 2 before the assessment. If the information argument feels unstable, the sentence to hold is that one threshold on one gradient separates two regions and nothing more, and that adding nested thresholds adds zones far faster than it adds bits.

:::{callout}
:kind: boundary
:id: callout-teaching-boundary-practice

Task 2 reasons about a published model. It is a **teaching example, not medical advice**: no drug, dose, regimen, recommendation or patient appears in it.
:::

:::{source-note}
:claims: claim-axin-sensitivity, claim-axin-scarcity, claim-positional-information-ceiling, claim-crypt-wnt-gradient, claim-destruction-complex-role, claim-cascade-definition, claim-termination-by-turnover
:sources: source-lee-wnt-quantitative, source-hillenbrand-positional-information, source-nguyen-colonic-crypt, source-alberts-cell-communication

The four figures in task 2, Axin at about 20 picomolar, APC at about 100 nanomolar, and the 50 and 10 per cent half-life changes: a 2003 experimental and modelling study of the Wnt pathway. The one-bit ceiling for a single threshold read: a 2016 study of positional information. The Wnt gradient and the destruction complex's action: a 2025 review of the colonic crypt. The definition of a cascade and the account of termination by turnover: a textbook chapter on cell communication.

The unit conversion and the 5000-fold comparison in task 2, the arithmetic in task 3, and the composite pathway in task 4 are the lesson's own; task 4 describes no specific named pathway from any source.
:::
