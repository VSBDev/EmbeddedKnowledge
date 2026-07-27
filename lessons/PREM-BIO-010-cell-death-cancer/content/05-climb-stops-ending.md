# Working out how badly the loop has to fail

Most accounts of cancer start with a list. This one starts with the arithmetic from scene 1, because the arithmetic answers a question the list cannot: how large does the failure have to be?

The intuition almost everyone brings is that a tumour needs a dramatic breakdown, cells dividing wildly, control collapsing. Work the numbers and that intuition does not survive.

One relationship carries the whole calculation. Write the crypt as a single population of size {math}`N`, with cells entering at a production rate {math}`P` and leaving at a loss rate {math}`L`, both in cells per day. The population then changes at whatever rate the two fail to match:

:::{equation}
:label: equation-crypt-balance

\frac{dN}{dt} = P - L
:::

In words: the number of cells in a crypt rises exactly as fast as production exceeds loss, and holds steady only while the two are equal. Scene 1 stated that as a sentence. This is the same statement written so it can be used.

:::{worked-example}
:id: worked-example-how-small-a-mismatch

**The task.** A crypt holds about 700 cells and produces about 175 a day. Suppose removal at the top falls slightly behind production and stays behind. How small can that shortfall be and still change the tissue over a human lifetime?

**Step 1: write down what is given, and in what units.**

Population of one crypt, N, about 700 cells. Production rate, P, about 175 cells per day. For the balance in scene 1 to hold, the loss rate L must also be about 175 cells per day. Every quantity is a rate in cells per day except N, which is a count.

**Step 2: choose the model and say why it fits.**

Use the balance relation stated above, that the rate of change of the population equals production minus loss. It fits because scene 1 established the balance as a statement about rates and not about individual cells, and because every source figure available here is a population figure. It is the simplest model that can answer the question, which is the reason to start with it.

**Step 3: make the shortfall concrete.**

Let removal fall behind production by one per cent. Then L is 0.99 P, so:

dN/dt = P - 0.99P = 0.01P = 0.01 x 175 = 1.75 cells per day.

One and three-quarter extra cells a day. In a structure holding 700. That is a shortfall no measurement of a single crypt would notice.

**Step 4: run it forward, and check the arithmetic independently.**

Time to accumulate an extra 700 cells, doubling the crypt's population:

t = 700 / 1.75 = 400 days.

Check it the other way to make sure the division went the right way up: 1.75 cells per day x 400 days = 700 cells. It agrees. Just over a year, from a one per cent mismatch.

**Step 5: state the assumption that is doing the most work, and which way it errs.**

This treats the accumulating cells as inert, contributing nothing to production. That is almost certainly wrong: if the retained cells divide like the rest, production rises as the population rises, and growth becomes exponential instead of steady. So 400 days is a slow estimate, and the real behaviour of such a population would be faster. The model is a floor, not a forecast.

Two further limits. The figure of 175 cells a day is itself lesson 01's steady-state estimate rather than a measurement of one crypt. And a real crypt is not a well-mixed population; its cells occupy positions, which is precisely what the rest of this lesson is about. The model deliberately ignores position in order to isolate the rate question.

**Step 6: interpret the result in its original context.**

The answer is that the failure does not have to be dramatic. It has to be persistent. A one per cent standing mismatch, invisible in any single snapshot, is enough to change a structure over about a year, and the real growth would be faster than that.

Now put that beside what the cancer genomics says about time. Developing a full-blown metastatic cancer takes decades. A colorectal tumour in a 90-year-old patient carries nearly twice as many mutations as a tumour in a 45-year-old that looks identical under a microscope. The genomic account and the arithmetic account point at the same shape: a small, sustained, cumulative departure from balance running over a very long time.

**Step 7: the self-explanation prompt.** Which single decision in this worked example most determines the answer? Write your answer before reading on.

It is the decision in step 2 to model the crypt as rates instead of as cells. Once the question is "how do two rates compare", a one per cent difference is obviously enough given a long enough run, and the size of the daily number stops mattering. Had the example started from individual cells and their fates, the same conclusion would have needed far more machinery to reach.
:::

## Three places the mismatch can come from

The loop gives exactly three ways for loss to fall behind production, and it is worth naming them separately because they are different biology.

**Production rises.** More cells are made per day at the base than before.

**The climb stops ending.** Cells that should have stopped dividing on the way up keep dividing. Nothing is wrong with removal at the top; the population arriving there is simply too large, and cells that should have differentiated and become a departing enterocyte remain proliferative instead.

**Removal fails.** Cells reach the top and are not taken out of the sheet. This is the failure scenes 2 and 3 make available: the apoptotic programme not running, or attachment-dependence lost so that detachment no longer starts it, or extrusion not happening when the sheet gets crowded.

These are not alternatives to each other. A tissue can suffer more than one, and the second and third are hard to distinguish by looking at a section, which the next scene will make use of.

## The joint lesson 06 identified

Lesson 06 of this block did the hardest part of this already, and it stopped precisely where this lesson takes over.

Its result was about reading position. About 93 per cent of colorectal cancers carry an activating mutation in the Wnt pathway, and the gene most often affected is APC. APC is a component of the destruction complex, and it is also required for that complex to reorient towards a Wnt cue. A cell with damaged APC accumulates beta-catenin and runs the beta-catenin-dependent gene programme whether or not Wnt is present. Lesson 06's summary of the consequence: the gradient outside the cell is unchanged, and the cell now reports that it is at the crypt base at every height.

Take that sentence into this lesson's loop and the second failure follows immediately. The gene programme a crypt-base cell runs is the programme of a dividing, undifferentiated cell. A cell running it at every height keeps dividing at every height and never completes the differentiation that ends the climb. The climb stops ending, in the most literal sense available: the signal that would have ended it is being read as its opposite.

Nothing about removal has broken in that account. The cell has simply never become the kind of cell that leaves.

Colorectal cancer is described as following a stepwise progression from normal epithelium through characterised mutations to a carcinoma. The intermediate stage is called an adenoma, and the sequence is named after the two of them: the adenoma-to-carcinoma sequence. Those two words are stage names from pathology and this lesson uses them as labels, at the level of adenoma being the earlier and benign stage and carcinoma the later one; what distinguishes them under a microscope is not this lesson's material.

APC is usually where that sequence starts in the colon. The literature calls the first mutation in such a sequence a gatekeeping one, and in the colon it most often occurs in APC, with mutations in KRAS and other genes following.

## Where checkpoints come in, and how little this lesson needs from them

The lesson's outcome asks for failed checkpoints as well, and here is the minimum required.

A cell with damaged DNA can be held back in the cycle long enough to repair its genome before continuing. p53 is the protein most associated with that hold. It is a stress sensor that responds to DNA damage, to hyperproliferative signalling and to several other stresses, and it can produce three outcomes: transient arrest, permanent arrest as senescence, or apoptosis. TP53, the gene encoding it, is inactivated in more than half of all sporadic human cancers.

So one protein sits at the junction of all three scenes so far. It can arrest a cell, it can send it into the senescence of scene 4, and it can start the apoptosis of scene 2. Losing it removes an input to all three at once, which is a large part of why its loss is so common in cancers.

Be careful about what follows from that, because the field is careful. The downstream genes and pathways that matter for p53's tumour suppression remain unresolved, and depending on the tissue either the cell-cycle arrest function or the apoptosis function can be the one that matters. Which of p53's three responses does the tumour-suppressing work is not a settled question, and a lesson that told you it was would be teaching you something false.

Lesson 08 of this block owns the cell cycle and its checkpoints, and the account above is deliberately the smallest one this lesson's argument needs. What this lesson supplies is the other end: what the arrested or damaged cell does next, and what the tissue does about it.

:::{source-note}
:claims: claim-crypt-population, claim-colon-renewal-interval, claim-crypt-homeostatic-balance, claim-decades-and-mutation-accumulation, claim-apc-crc-frequency, claim-apc-loss-decouples-position, claim-drivers-and-passengers, claim-p53-stress-sensor, claim-p53-downstream-unresolved, claim-damage-checkpoint-minimum
:sources: source-vanderwath-crypt-model, source-nguyen-colonic-crypt, source-vogelstein-cancer-genome-landscapes, source-parker-apc-recruitment, source-bieging-p53-suppression

A 2013 modelling study of the colonic crypt supplies the crypt population of about 700 cells; a 2025 review of the colonic crypt supplies the 3-to-5-day colonic renewal interval, the balance of proliferation, differentiation, apoptosis and extrusion required for crypt homeostasis, the figure that about 93 per cent of colorectal cancers carry an activating Wnt-pathway mutation and particularly in APC, the impairment of the destruction complex by APC mutation with consequent beta-catenin accumulation, and the description of colorectal cancer as following a stepwise adenoma-to-carcinoma sequence. A 2020 study of destruction-complex recruitment supplies the requirement for full-length APC in the complex's reorientation towards a Wnt cue, which is the result lesson 06 built its conclusion on.

A 2013 review of cancer genome landscapes supplies the statement that it takes decades to develop a full-blown metastatic cancer, the comparison of mutation counts between a colorectal tumour in a 90-year-old and a morphologically identical tumour in a 45-year-old, the account of gatekeeping mutations in the colon occurring most often in APC with KRAS and other mutations following, and the driver-and-passenger distinction used later in the lesson. A 2014 review of p53 supplies p53 as a stress sensor triggering transient arrest, senescence and apoptosis in response to DNA damage and hyperproliferative signals among other stresses, the inactivation of TP53 in more than half of all sporadic human cancers, the arrest that allows a genome to be repaired before the cycle continues, the statement that the downstream genes and pathways important for p53-mediated tumour suppression remain unresolved, and the finding that depending on the tissue either the arrest or the apoptosis function can be the one that matters.

The arithmetic in the worked example is this lesson's own, built on lesson 01's steady-state estimate of about 175 cells a day per crypt and carrying that lesson's caveat that the figure is a population rate rather than a per-cell lifetime. No source consulted here calculates a tolerable mismatch between production and loss, states that a one per cent shortfall doubles a crypt population in 400 days, or claims that any real lesion arose that way; the calculation is an illustration of what a rate balance implies, and its assumptions and direction of error are stated inside the example. The three-way classification of where a mismatch can arise is likewise this lesson's own organisation of the sourced mechanisms. Adenoma, carcinoma and gatekeeping are used here as the stage and step names the sources use, glossed only far enough to be readable and explicitly not unpacked; no claim in this pack rests on those glosses and no assessment item tests them. The inference that a cell reading crypt-base position at every height therefore never completes the differentiation that ends the climb follows lesson 06's own conclusion about that cell and is marked here as a lesson inference rather than a source statement.
:::
