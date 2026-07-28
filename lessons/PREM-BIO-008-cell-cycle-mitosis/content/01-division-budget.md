# Two hundred divisions a day, in one crypt

You have spent seven lessons inside a single colonic crypt. You know its shape: a blind tube of epithelium about 700 cells in all, roughly 32 cells from base to surface and about 22 around. You know that cells climb it at around 4 micrometres an hour, that they are joined to their neighbours by four kinds of attachment, and that a Wnt gradient tells each one how high up it sits. You also know the fact that makes all of it urgent, and that has been quoted in every lesson of this block: the lining is replaced on a timescale of three to five days.

Turn that last fact into a rate and the lesson begins.

If a crypt holds about 700 cells and empties itself in about four days, it has to make about 175 cells a day. That is roughly seven an hour, one every eight minutes or so, in a structure narrower than a hair, and it does not stop. Measurements of the whole organ give figures on the same scale, arrived at independently: the human colon carries on the order of a hundred billion cells, and something close to ten trillion colonocytes are generated in it every year. Those two are consistent with each other, which is worth checking rather than taking. A hundred billion cells replaced every four days is about ninety replacements a year, and ninety lots of a hundred billion is nine trillion.

No cell is manufactured. Each one of those 175 daily arrivals is a cell that already existed, dividing in two. So the crypt's real daily output is not 175 new cells; it is 175 completed cell divisions, each of which had to copy a genome, sort it into two equal sets, and cut one cell into two without losing anything.

## Where in the tube the dividing happens

The divisions are not spread evenly. Stain a human colonic crypt for Ki-67, a protein present in cells that are proliferating and absent from cells that are not, and the positive cells sit in the bottom third of the tube. The top two thirds are Ki-67 negative: those cells have stopped dividing and are doing the absorptive work that lesson 03 described.

One study counted every cell in 49 human colonic crypts this way and found, on average, 2428 cells per crypt, of which 624 were Ki-67 positive. Notice that this crypt is much larger than the 700-cell crypt this block has been using. Both figures are real. The 700-cell figure comes from a computational model of a crypt in the descending colon built on measured dimensions; the 2428-cell figure is a direct count of whole crypts from human biopsies whose colonic region is not stated. The authors of the counting study say plainly why numbers like these vary: crypts differ in size between the small intestine and the colon, and between regions, and different markers count different cells.

The ratio is the thing to carry forward. About a quarter of the cells in a human colonic crypt are proliferating. That single proportion is going to do more work in this lesson than either total.

## Seven cells at the bottom, and a lot of amplification above them

At the very base sit the stem cells, and there are startlingly few of them. Clone-tracing in human colonic epithelium puts the number of active stem cells at between 5 and 10 per crypt, with a mean of 7.

Set 7 against 175. Seven cells cannot produce 175 daughters a day; a stem cell at the crypt base divides only about once every two to three days. That count of about seven is what clone-tracing gives for a human colonic crypt, and it is worth noticing that it does not scale with the crypt-size figures above: the same handful of stem cells is reported whether the crypt is counted at 700 cells or at 2428. Seven cells dividing at that rate contribute about three divisions a day between them. The other 172 have to come from somewhere else, and they come from the daughters: a cell that leaves the stem compartment divides several more times on its way up before it stops. Those dividing daughters are the **transit-amplifying** cells, and they are most of the 624 Ki-67-positive cells in the crypt. The stem cells are the source; the amplifying compartment is the multiplier.

This is what "stem-cell renewal" means in a real tissue, and it is worth being careful about the word renewal, because the stem population renews itself in a stranger way than the name suggests. Human colonic stem cells are replaced at a rate of about 1.3 stem-cell replacements per crypt per year. When one is lost, a neighbour's daughter takes the vacancy, and which neighbour wins is not decided by merit. Clone-tracing shows the process behaves like a random walk: a stem cell's descendants expand or vanish by chance. The consequence is measurable. Starting from a crypt with several genetically distinguishable stem lineages, all but one lineage eventually disappears, and the crypt becomes the descendant of a single stem cell, with a median time to that state of about 6.3 years.

Sit with that for a moment. Any mutation that arises in one stem cell has roughly a one-in-seven chance of being the lineage that takes over the crypt, and about six years for the question to resolve. This lesson is not going to follow that thread to its clinical end. Lesson 10 of this block does that.

## The question this lesson answers

A tissue running 175 divisions a day cannot treat division as routine. Copying three billion base pairs and sorting them into two equal sets is a large mechanical operation, and a cell that begins it at the wrong moment, or with the wrong things true about itself, produces a daughter that is wrong in a way that persists.

So what decides that a cell may divide?

The tempting answer is a schedule, as though the cell held a timer that fired every 24 hours. The rest of this lesson argues that the cell holds nothing of the sort. What it has instead is a set of conditions, each of which is tested, and each of which can hold the whole process indefinitely when the answer comes back "not yet".

:::{source-note}
:claims: claim-crypt-geometry, claim-epithelial-renewal, claim-crypt-daily-production, claim-colon-total-throughput, claim-ki67-proliferative-fraction, claim-crypt-count-disagreement, claim-human-colonic-stem-cell-number, claim-stem-cell-division-rate, claim-stem-replacement-and-drift
:sources: source-vanderwath-crypt-model, source-nguyen-colonic-crypt, source-bravo-axelrod-crypt-model, source-boman-fields-crypt-axis, source-nicholson-somatic-mutations, source-baker-crypt-dynamics

The crypt's dimensions and its roughly 700 cells come from a computational model of the human descending colon built on measured crypt geometry, carried forward unchanged from PREM-BIO-001 of this block. The three-to-five-day renewal interval is the figure this block has used since PREM-BIO-001 and is supported here by a 2025 review of the colonic crypt. A 2013 study that counted every cell in 49 whole human colonic crypts stained for Ki-67 supplies the mean of 2428 cells per crypt with 624 of them Ki-67 positive, the location of the proliferating cells in the bottom third, and the authors' own explanation that cell counts differ between intestine and colon and between markers. The colon's approximately one hundred billion cells and the figure of nearly ten trillion colonocytes generated per year come from a 2013 paper on division along the human colonic crypt axis. The count of between 5 and 10 active stem cells per human colonic crypt with a mean of 7, the replacement rate of about 1.3 stem-cell replacements per crypt per year, and the median 6.3 years to a single surviving lineage are all from a 2018 study of somatic mutation in adult human colonic epithelium. The estimate that a crypt-base cell divides about once every two to three days, and the finding that stem-lineage competition behaves as a neutral random walk, come from a 2014 study of crypt and stem-cell evolution in the human colon.

Two of the numbers in this scene are this lesson's arithmetic rather than anybody's measurement, and both are marked as such above. Dividing 700 cells by four days to get about 175 cells a day is the steady-state estimate PREM-BIO-001 introduced, and it assumes the crypt is neither growing nor shrinking. Multiplying seven stem cells by a division every two to three days to get about three divisions a day, and subtracting to get 172, is this lesson's own calculation from the two sourced figures; no source states it. The one-in-seven chance that a given stem lineage takes over a crypt follows from there being about seven equivalent stem cells and is stated here as a consequence of the neutral-drift result, not as a separately measured probability.

The Ki-67 proportion of about a quarter is this lesson's division of 624 by 2428. Ki-67 marks proliferating cells; treating a Ki-67-positive cell as a cell currently working through a division cycle is an approximation, and the next scenes depend on it, so it is flagged here rather than buried.
:::
