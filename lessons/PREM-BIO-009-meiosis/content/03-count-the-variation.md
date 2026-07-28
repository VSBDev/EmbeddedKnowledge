# Count it: how many different gametes can one person make?

"Meiosis generates enormous genetic variation" is the sentence every course uses, and it teaches nothing, because *enormous* is not a quantity. Some of this variation is exactly countable, some is measurable, and some cannot honestly be reduced to a single number at all. This scene does all three and says which is which.

## Step 1: assortment alone, and exactly what it counts

Go back to the first division. Each of the 23 bivalents lines up and its two homologs are pulled to opposite poles. Which pole receives the maternal homolog is settled independently for every pair: chromosome 1 going one way tells you nothing about which way chromosome 2 goes.

That is **independent assortment**: a binary choice repeated 23 times.

:::{worked-example}
:id: worked-example-counting-combinations

**One gamete, counting the parental origin of whole chromosomes.**

Pair 1 sends either its maternal or its paternal homolog into this gamete: 2 ways. Pair 2 does the same, independently, so two pairs give $2 \times 2 = 4$ ways. Three pairs give 8. The pattern is 2 multiplied by itself once per pair, so 23 pairs give $2^{23}$.

Working it out: $2^{10} = 1024$, so $2^{20} = 1024^2 = 1\,048\,576$, and $2^{23} = 2^{20} \times 8 = 8\,388\,608$.
:::

:::{equation}
:label: equation-assortment-count

2^{23} = 8\,388\,608

:::

Textbook treatments give the same figure: from this process alone an individual could in principle produce 2 to the power n genetically different gametes, where n is the number of pairs, which for a human is 23. The exponent is the count of pairs and never the count of chromosomes, and the two differ by a factor of two. The phrase "at least" that the textbooks attach to this figure is doing real work: it is a floor, because assortment is only one of the two mechanisms, and the next steps add the other.

Be precise about what those 8.4 million combinations are combinations *of*. Crossing over rearranges chromosome arms, so the chromosome you pass on may be maternal along part of its length and paternal along the rest. What a reciprocal exchange does not do is move a **centromere** from one homolog to the other: the exchange swaps the material beyond the break, and each chromatid keeps its own centromere. So the exact thing $2^{23}$ counts is the number of distinct patterns of parental origin across the 23 centromeres, which is precisely the thing the first division sorts.

Hold that. Scene 5 needs it, and it is why the marker used there has to sit at a centromere.

**Now a couple.** A zygote takes one gamete from each parent, and those two choices are independent of each other:

:::{equation}
:label: equation-zygote-count

2^{23} \times 2^{23} = 2^{46} \approx 7.0 \times 10^{13}

:::

Seven times ten to the thirteen distinct centromere-origin patterns, from assortment alone.

Stop on that, because you have met a number like it. Lesson 01 put the number of cells in an adult human body at the order of ten to the thirteen, around three times ten to the thirteen for a 70 kg reference man. Divide: $7.04 \times 10^{13}$ over $3 \times 10^{13}$ is about 2.3. The count of chromosomally distinct children one couple could produce, ignoring crossing over entirely, is a little over twice the number of cells in a body. Lesson 01 also quoted a second, larger estimate of the body's cell count, so treat the comparison as an order-of-magnitude match and not as a fixed ratio.

## Step 2: how much crossing over actually happens

Crossing over is the second mechanism, and unlike the first it has to be measured. It has been.

The measurement works by staining cells caught in the act of meiosis for a protein that gathers at crossover sites, then counting the bright spots, called **foci**, in each cell. Each focus marks one crossover.

The cells come from the two tissues where meiosis happens. A **spermatocyte** is a cell part-way through meiosis in the testis; an **oocyte** is a cell part-way through meiosis in the ovary. In one study, the counts were 49.09 foci per cell in males, across 4660 spermatocytes from 56 testicular biopsy samples, and 69.25 per cell in females, across 2038 oocytes from fetal ovarian tissue from 63 donors. The standard errors, which say how tightly each mean is pinned down by that many cells, were 0.07 and 0.29 respectively: both means are precise.

Roughly 49 crossovers per meiosis in the male and 69 in the female, genome-wide. Divide by the number of pairs:

:::{equation}
:label: equation-crossovers-per-bivalent

\frac{49.09}{23} \approx 2.13 \qquad \frac{69.25}{23} \approx 3.01

:::

About two crossovers per chromosome pair in the male and about three in the female.

## Step 3: a prediction from that average, and the measurement that refuses it

Here the arithmetic invites a conclusion, and it is worth following it into the wall.

Scene 2 established that a bivalent with no crossover has no chiasma and nothing holding it together. At an average of two or three crossovers per pair, you would expect almost every pair to receive at least one, and you would expect the sex with *more* crossovers to have *fewer* empty pairs.

The measured frequency of bivalents with no crossover focus was 0.38 per cent in males and 2.60 per cent in females.

Rare in both, so the first half of the prediction holds. But the second half is backwards. The female has about 40 per cent more crossovers per meiosis and about seven times as many bivalents with none.

An average cannot explain that, and the reason is that an average is not a distribution. A second study measured the spread: the cell-to-cell variation in crossover number, expressed as a percentage of the mean, was 18 per cent in females against 10 per cent in males. The female process is nearly twice as variable between cells. A higher mean with a much wider spread can easily leave more cells and more individual bivalents at zero.

That same study found something sharper. Meiosis marks out more sites as candidate crossovers than it finishes. In human female meiosis about a quarter of the sites committed to becoming crossovers never complete the process, while in the male essentially all of them do. So the female is both less consistent and less efficient at finishing what it started, and either finding alone would help explain the empty bivalents that the mean does not.

Two lessons from this step. A mean and a rate of failure are different questions, and an average will mislead you about the tails. And a prediction that fails against data is more informative than one that succeeds, provided you look at why.

## Step 4: checking a number against itself

Genetic distances are quoted in **centimorgans**, a unit of how often two positions on a chromosome are separated by crossing over, and not a unit of physical distance. A single crossover in a meiosis separates the positions on either side of it in half the resulting gametes, and a genome-wide conversion is being used here: the study counts one cytologically visible crossover per meiosis as contributing an expected 50 cM, so one crossover contributes about 50 cM to a map. The focus counts therefore predict total map lengths of

:::{equation}
:label: equation-map-length-check

49.09 \times 50 \approx 2455\ \text{cM} \qquad 69.25 \times 50 \approx 3463\ \text{cM}

:::

and those are exactly the genome-wide genetic lengths the same study reports: 2455 cM in males and 3463 cM in females.

Which teaches something about reading a paper, and confirms nothing. The agreement is perfect because the authors calculated those map lengths *from* the focus counts using the conversion just applied. Two numbers that agree to four figures were never independent measurements. The same authors note that linkage studies, which measure map length by tracking inheritance through families and so arrive at it a genuinely different way, report longer maps than these. Two different methods disagreeing is information. One measurement restated in other units is not.

## Step 5: what crossing over does to the count, and what it does not

Now the tempting calculation, and why this lesson will not give you a headline number for it.

The tempting version runs: assortment gave 23 binary choices, and crossing over adds 49 more switch points, so the count becomes $2^{23+49} = 2^{72} \approx 4.7 \times 10^{21}$.

That figure is wrong, and it is worth taking apart because every one of its four faults is a real property of meiosis.

1. **A crossover touches two chromatids, not four.** The 49 is a count per meiosis, and a bivalent holds four chromatids while a gamete receives one. Any single crossover has about an even chance of landing on the chromatid that ends up in a given gamete. So a gamete does not carry 49 switch points.
2. **The positions are not fixed slots.** Crossover sites differ from one meiosis to the next, so there is no standing set of 49 independent segments to choose from.
3. **Crossovers are not placed independently of each other.** One crossover reduces the chance of another nearby.
4. **Nearby segments are not free choices.** Two positions close together on one chromosome travel together far more often than not.

Objection 1 is the only one that can be corrected by arithmetic, so correct it. If each of about 49 crossovers has an even chance of being on the inherited chromatid, a gamete carries about 24 switch points, spread over 23 chromosomes: roughly one per chromosome. That is a defensible and useful figure. The typical chromosome you pass on is not either of the two you received; it is one of them with about one join in it.

Push that back into a count and you would get something like $2^{23+24} = 2^{47} \approx 1.4 \times 10^{14}$. That is larger than assortment alone by a factor of $2^{24}$, which is about 17 million. Objections 2 to 4 still apply, and there is a fourth problem with the number that matters more than any of them: calling it an upper bound is the wrong way round.

An upper bound would require the 24 to be a fixed count of independent binary choices. It is neither. It is an expectation derived from the male mean of 49.09, and the female mean would give about 34.6. Crossover number varies between meioses, which chromatids take part is constrained, and once the starting homolog and the breakpoints are fixed the parental origin alternates along the chromatid rather than being chosen afresh at each switch.

And the breakpoints themselves are not a fixed set of positions. They fall at variable places along the chromosome, so the number of distinguishable mosaic chromatids is far larger than any count built from a fixed number of switch points. So 2 to the 47 is an illustration of the direction crossing over pushes the count, and the true number of distinguishable gametes exceeds it rather than falling under it. Treat it as neither a result nor a bound.

:::{callout}
:kind: note
:id: callout-what-to-quote

What to quote from this scene, and how.

Quote 8.4 million as a count, because it is one: an exact count of centromere-origin patterns for one person's gametes. Quote about 24 switch points per gamete, or about one per chromosome, as an estimate with a stated assumption. Quote the effect of crossing over on the total as an increase of many orders of magnitude, and give a figure only alongside the assumption it rests on. Do not quote $2^{72}$ at all.
:::

## Where the crossovers come from

One more measurement, because it changes what you think crossing over is.

Scene 2 said meiotic recombination begins by breaking the cell's own DNA. Those breaks can be counted the same way, by staining for a protein that gathers at them. In the same study, the count averaged 134.07 per cell in males, from 44 spermatocytes, and 250.28 per cell in females, from 39 oocytes.

So roughly 134 breaks yield about 49 crossovers in the male, and roughly 250 breaks yield about 69 in the female. Most breaks are repaired without producing a crossover at all. Meiosis makes far more damage than it converts into exchanges.

The second study puts the break counts higher, at around 200 per nucleus in males and around 400 in females. Against the first study's figures that is about 50 per cent more in males and about 60 per cent more in females. Two counts of the same quantity differing by that much, in the same direction for both sexes, is worth reporting as a disagreement instead of averaging away. What both agree on is the sex difference and the large excess of breaks over crossovers.

:::{check}
:id: check-count-the-variation

1. Compute 2 to the power 23. State exactly what that number counts, and name the one feature of a chromosome whose parental origin it tracks.
2. A friend says crossing over multiplies the number of possible gametes by about 49. Give two separate reasons that is wrong, one about the arithmetic and one about the biology.
3. Females average more crossovers per meiosis than males and yet have about seven times as many bivalents with none. What quantity, other than the mean, resolves that?
4. Why is the agreement between 49.09 foci and a 2455 cM map not evidence that either number is right?
5. About how many switch points does a single gamete carry, and what assumption did you use to get there?
:::

:::{source-note}
:claims: claim-independent-assortment-count, claim-human-chromosome-number, claim-crossover-counts, claim-achiasmate-frequency, claim-dsb-counts, claim-crossover-maturation-inefficiency, claim-chiasma-holds-homologs, claim-crossing-over-swaps-segments, claim-anaphase-i-homologs-anaphase-ii-sisters
:sources: source-alberts-meiosis, source-gruhn-cytological, source-wang-crossover-maturation, source-potapova-aneuploidy

The independent assortment of homologs at the first division, the 2-to-the-n rule, the human figure of at least 2 to the 23 or about 8.4 million, the reciprocal exchange of segments between homologs, the mechanical role of the chiasma used in step 3, and the separation of homologs at the first division: a cell-biology textbook chapter on meiosis. The 46 chromosomes in 23 pairs: a 2013 review of aneuploidy.

A 2013 cytological study of human meiosis supplies 49.09 foci per cell in males with standard error 0.07 from 4660 spermatocytes and 56 testicular biopsies, 69.25 with standard error 0.29 from 2038 oocytes and 63 fetal ovaries, the 0.38 and 2.60 per cent frequencies of bivalents lacking a focus, the break-marker averages of 134.07 and 250.28 with their cell counts, and the genome-wide genetic lengths of 2455 cM and 3463 cM. That study states that it calculated those map lengths itself and notes that linkage studies report longer ones, which is the whole basis of step 4.

A 2017 study of crossover maturation supplies the higher break estimates of about 200 and about 400 per nucleus, the finding that about a quarter of sites committed to becoming crossovers in the female never complete while essentially all do in the male, and the cell-to-cell variation of 18 per cent against 10 per cent.

A focus count is a count of labelled sites, so it can undercount events the marker misses; that is one reason two studies of the same quantity differ, and it is a reason to read the 2.60 per cent as a marker-based figure rather than a direct count of chiasmata.

Every calculation here is the lesson's own: the 2-to-the-46 figure for a couple, the comparison with lesson 01's body cell count, the per-bivalent divisions, the 50 cM conversion applied as a check, the resolution of step 3's failed prediction using the variability and maturation figures, the estimate of about 24 switch points per gamete from an even-chance assumption, and the 2-to-the-47 figure, which the scene treats as an illustration rather than a bound. The argument that a reciprocal exchange leaves each chromatid's own centromere in place, so that 2 to the 23 counts centromere-origin patterns exactly, is the lesson's reasoning from the sourced description of reciprocal exchange and is not a sentence taken from a source. No source presents 2 to the 72, 2 to the 47, or the 24-switch-point figure, and none should be cited for them.
:::
