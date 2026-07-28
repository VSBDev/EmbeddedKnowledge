# Which division failed, and how anyone could tell

Everything so far has assumed the separations work. Occasionally during meiosis chromosomes fail to separate normally into the four haploid products, and that failure has a name: **non-disjunction**. Some of the products end up lacking a chromosome and others end up with more than one copy.

Now, scene 2 established that the two divisions separate different things. So a failure at the first division and a failure at the second should not produce the same wreckage. Work out what each produces, and you will find they differ in two ways that anyone can check.

## Setting up the notation

Follow chromosome 21 through a single meiosis, in spermatogenesis, so that all four products survive and can be counted. Take one pair:

- **M** is the homolog inherited from the mother. Replication has made it two sister chromatids, **M₁** and **M₂**, identical to each other *at the moment of copying*.
- **P** is the homolog inherited from the father, replicated into **P₁** and **P₂**, identical to each other.

M and P are similar in sequence without being identical, because they came from different people. M₁ and M₂ started identical, because one was copied from the other, and near the centromere they stay that way.

Along the arms they need not. A crossover with a non-sister chromatid swaps material into one sister and not the other, so after recombination two sisters can differ over any stretch beyond the exchange. The textbook this lesson cites limits sister identity to the regions where recombination has not occurred, and that limit is the reason the whole inference below is built on a centromere-proximal marker rather than any marker on the arm.

So state the two cases in the form the evidence supports. A first-division failure delivers a cell holding the centromeric identity of *both* parental homologs. A second-division failure delivers a cell holding *one* homolog's centromeric identity twice over. That is a difference about centromeres, and it survives recombination because recombination near the centromere is rare. Read as a claim about whole chromosomes it would not survive at all. That distinction is the whole of what follows.

A normal meiosis gives four products: M₁, M₂, P₁, P₂. Each carries exactly one chromosome 21.

## Case A: the first division fails

The first division is supposed to send M one way and P the other. Suppose it does not, and both go to the same side.

One cell receives all four chromatids, M₁ M₂ P₁ P₂, which is two chromosomes. The other cell receives no chromosome 21 at all.

The second division now proceeds normally in both. In the first cell, sisters separate: one product gets M₁ and P₁, the other gets M₂ and P₂. Which maternal chromatid travels with which paternal one is arbitrary and makes no difference to anything below; what is fixed is that each product receives one maternal-derived and one paternal-derived chromatid, because M and P split independently of each other. Each of those products therefore carries **two** chromosome 21s. In the second cell there is nothing to separate, so both of its products carry **none**.

:::{worked-example}
:id: worked-example-first-division-failure

**Products of a first-division failure, one pair affected:**

| Product | Chromosome 21 content | Count |
| --- | --- | --- |
| 1 | M₁ and P₁ | 2 |
| 2 | M₂ and P₂ | 2 |
| 3 | none | 0 |
| 4 | none | 0 |

**Four of four products are abnormal.** Two carry an extra copy and two carry none.

And note *what* the two-copy products carry: one maternal homolog and one paternal homolog. Two chromosomes carrying **different parental centromeric identities**, one from each homolog.
:::

## Case B: the second division fails

Now let the first division work correctly. M goes one way, P the other. One cell holds M₁ M₂, the other holds P₁ P₂.

At the second division, suppose the sisters fail to separate in the cell holding M. Both M₁ and M₂ go into one product; the other product from that cell gets nothing. The cell holding P divides normally and gives two ordinary products.

:::{worked-example}
:id: worked-example-second-division-failure

**Products of a second-division failure, one pair affected:**

| Product | Chromosome 21 content | Count |
| --- | --- | --- |
| 1 | M₁ and M₂ | 2 |
| 2 | none | 0 |
| 3 | P₁ | 1 |
| 4 | P₂ | 1 |

**Two of four products are abnormal.** One carries an extra copy, one carries none, and two are entirely normal.

And *what* the two-copy product carries: M₁ and M₂, which are copies of the same homolog. Two chromosomes carrying **the same parental centromeric identity**, copied from one homolog.
:::

## The two differences, stated plainly

Put the cases side by side.

| | First division fails | Second division fails |
| --- | --- | --- |
| Products with wrong copy number | 4 of 4 | 2 of 4 |
| Normal products | none | two |
| The extra-copy product contains | two different homologs | two copies of one homolog |

The first row is a difference in how much of the output is spoiled. The second row is the interesting one, because it survives into the resulting person and can be read years later.

## Reading it backwards from a marker

If a product carrying two copies fuses with a normal gamete, the result carries three copies of that chromosome: a **trisomy**, written 2N+1. If a product carrying none fuses with a normal gamete, the result carries one: a **monosomy**, written 2N-1.

Both are cases of **aneuploidy**, which is the word this lesson's outcome turns on: an unbalanced chromosome number, in which certain chromosomes no longer come in pairs. A balanced number is called **euploid**, and for a human that is 46 in 23 pairs. Trisomy and monosomy are whole-chromosome changes, as distinct from segmental changes in which only pieces of chromosomes are gained or lost; this lesson deals only with whole chromosomes.

Two words are needed for this, and neither has appeared in this block before.

:::{definition}
:id: definition-heterozygous-homozygous

Pick one position on a chromosome and read the DNA sequence there on each copy a cell holds. If the copies read differently, the cell is **heterozygous** at that position. If they read the same, it is **homozygous** there.

The words describe the comparison at one position, and nothing else. They say nothing about the whole chromosome and nothing about any trait.
:::

Now a shift of generation to keep track of. Up to this point M and P have been the two homologs of the person whose meiosis you were following. From here the question is asked about a *child*, so the person making the gamete is that child's parent, and it is the parent's two homologs that M and P name.

Suppose you have a trisomic individual and both parents available, and you can read DNA sequence differences at the centromere of the tripled chromosome. What do you see?

- If the error was at the **first** division, the two copies from the contributing parent are different homologs, so they carry different sequence at the centromere. The individual is **heterozygous** there for that parent's two versions.
- If the error was at the **second** division, the two copies from that parent are copies of one homolog, so they carry the same sequence. The individual is **homozygous** there.

That is exactly the method used. Studies of the origin of naturally occurring trisomies use centromeric heterozygosity or homozygosity to infer the meiotic stage at which the error occurred. The reasoning you just did is the reasoning the method rests on.

Work out for yourself why the marker has to sit *at* the centromere and not elsewhere along the chromosome. Scene 3 gives you what you need: crossing over swaps segments between the two homologs along their lengths. A marker some distance from the centromere may therefore have been exchanged, so its sequence no longer tells you which homolog the centromere came from. The centromere is the part whose parental identity the first division actually sorts.

## What the method has found

Applied to 170 infants with trisomy 21 in one population-based study, the distribution of origin was 86 per cent maternal, and within those, 75 per cent at the first division and 25 per cent at the second. Nine per cent were paternal, split evenly between the two divisions. Five per cent arose not in meiosis at all but by a mitotic error after fertilisation.

Two things in that result are worth pausing on. The overwhelming maternal excess is what scene 4's table predicted. And the presence of a mitotic category is a reminder that "trisomy" names an outcome and not a mechanism.

## Two boundaries on the model you have just built

The clean two-case analysis above is a model, and two of its edges need marking.

**It counted four products.** That is spermatogenesis. In oogenesis, as scene 4 established, only one of the four becomes the egg and the rest are polar bodies. The "four of four" and "two of four" rows still describe what the divisions did, but whether the error is transmitted depends on which product is kept.

**Human oocytes do more than these two things.** A study of 218 oocytes from donors aged 9 to 43 classified errors into three patterns, and only one of them is first-division non-disjunction as modelled above. The others are precocious separation of sister chromatids, in which the sisters of one homolog separate already at the first division, and reverse segregation, in which both homologs split their sister chromatids at the first division. Sisters separating at the first division is not a possibility the two-case model contains at all.

So treat the two cases as a tool for reasoning about what each division does, which is what they are good for, and not as a complete taxonomy of what goes wrong in a human oocyte.

:::{check}
:id: check-which-division

1. In a first-division failure, how many of the four products have a normal chromosome count?
2. A trisomic individual is homozygous at the centromere of the tripled chromosome for one of the mother's two versions. Which division failed?
3. Why can a marker halfway along the chromosome arm not be used for that inference?
4. Which of the two cases leaves two entirely normal gametes, and why does that follow from what the second division separates?
:::

:::{source-note}
:claims: claim-nondisjunction-definition, claim-anaphase-i-homologs-anaphase-ii-sisters, claim-aneuploidy-definitions, claim-centromere-marker-inference, claim-trisomy21-origin-split, claim-error-patterns-beyond-two-cases, claim-oogenesis-one-gamete, claim-human-chromosome-number, claim-cohesion-two-steps, claim-crossing-over-swaps-segments
:sources: source-alberts-meiosis, source-potapova-aneuploidy, source-nagaoka-aneuploidy, source-yoon-down-syndrome, source-gruhn-egg-errors, source-cahoon-libuda

Non-disjunction as the failure of chromosomes to separate normally, leaving some products lacking a chromosome and others with more than one copy, and the separation of homologs at the first division against sister chromatids at the second: a cell-biology textbook chapter on meiosis. That chapter also supplies the exchange of segments between homologs that the centromere-marker argument uses. Trisomy as 2N+1, monosomy as 2N-1, and the 46-chromosome count: a 2013 review of aneuploidy.

That naturally occurring trisomies are assigned to a meiotic stage using centromeric heterozygosity or homozygosity: a 2012 review of human aneuploidy. The 170 infants, the 86 per cent maternal origin with its 75:25 split between the divisions, the 9 per cent paternal split evenly, and the 5 per cent arising after fertilisation: a 1996 population-based study of trisomy 21 origin. That study reports the distribution in its own cohort of 170; it is not a universal constant, and a different population or ascertainment method would be expected to give somewhat different proportions.

The three error patterns in human oocytes, including precocious separation of sister chromatids and reverse segregation, and the study's 218 oocytes from donors aged 9 to 43: a 2019 study of chromosome errors in human eggs. That study does not say these patterns are misclassified by centromere-marker studies, and no such claim is made here; what is claimed is only that patterns in which sisters separate at the first division exist and are outside the two-case model. The single functional gamete of oogenesis comes from a 2019 review of sexually dimorphic meiotic prophase.

Both product tables, the M and P notation, the side-by-side comparison of the two cases, and the backwards inference from a marker to a division are this lesson's own construction. No individual is described anywhere in this scene; the 170 infants are a published aggregate.
:::
