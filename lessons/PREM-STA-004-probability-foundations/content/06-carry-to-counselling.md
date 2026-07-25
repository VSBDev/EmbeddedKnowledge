# Carrying the rules into a different room

Nothing in the last four scenes was about glucose. Counting, complements, conditioning, and independence are indifferent to what is being counted, which is why they turn up wherever medicine has to reason under uncertainty. Here they are in a genetics counselling conversation, where the tables are smaller and the stakes for getting a denominator wrong are higher.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** What follows is a deliberately simplified single-gene model, stipulated so the arithmetic is clean. Real inheritance involves penetrance, new mutations, linked variants, testing error, and family structure that this model ignores entirely, and real counselling is a clinical conversation this lesson does not prepare anyone to have. The genetics module takes the biology up properly.
:::

## The stipulated model

Two parents each carry one copy of a recessive variant and one ordinary copy. Stipulate that each parent passes one of their two copies to a child with equal probability, that the two parents' contributions are independent, and that a child shows the condition only with two copies of the variant.

That makes four equally likely outcomes for any one child. Writing the ordinary copy as $N$ and the variant as $v$: $NN$, $Nv$, $vN$, $vv$. Counting them is the whole calculation.

- **Affected**, meaning $vv$: $P = 1/4 = 0.25$.
- **Unaffected**, by the complement rule: $P = 1 - 0.25 = 0.75$.
- **Carrier**, meaning exactly one variant copy: two of the four outcomes, $P = 1/2 = 0.50$.

## Four questions, four rules

**Is a second child's risk changed by the first child's result?** No. The stipulation says each conception draws independently, so if the first child is affected the second is still $0.25$, and if the first three are unaffected the fourth is still $0.25$. A family that has had one affected child has no credit banked against the next, and one that has had three unaffected children is not owed anything either. This is the same structure as the run of low glucose nights in scene 2, met by people with far more reason to want it to work the other way.

**What is the probability that four children are all unaffected?** Independence permits the plain product: $0.75^{4} = 81/256 \approx 0.316$. The complement then gives the probability that at least one of the four is affected: $1 - 0.316 = 0.684$.

**A child is unaffected. What is the probability they carry the variant?** This one needs conditioning, and it is where intuition usually reaches for 0.50. Restricting to unaffected children throws away the $vv$ outcome and leaves three equally likely outcomes, two of which are carriers:

$$P(\text{carrier} \mid \text{unaffected}) = \frac{P(\text{carrier} \cap \text{unaffected})}{P(\text{unaffected})} = \frac{0.50}{0.75} = \frac{2}{3} \approx 0.667.$$

**Now invert it.** What is $P(\text{unaffected} \mid \text{carrier})$? Under the stipulated model a carrier has one ordinary copy and therefore never shows the condition, so this probability is exactly 1. The two conditionals are $0.667$ and $1$: same two events, same shared outcomes, different denominators, different answers. The screening arithmetic of scene 4 was the same manoeuvre with larger numbers.

:::{check}
:id: check-transfer-two-children
:kind: transfer

Two children of these parents are both unaffected. Using only the rules above:

1. What is the probability that both are carriers?
2. What is the probability that at least one of the two is a carrier?
3. Which of your two answers used the complement rule, and why was it the easier route?

Work them before reading on.
:::

Each child's genotype is drawn independently, so conditioning on both being unaffected leaves two independent draws from the same three-outcome set. Both carriers: $(2/3) \times (2/3) = 4/9 \approx 0.444$. At least one carrier is the complement of neither being a carrier: $1 - (1/3) \times (1/3) = 1 - 1/9 = 8/9 \approx 0.889$. The complement was easier because "at least one" spreads across three separate cases while "neither" is a single product.

## What the model is not

The arithmetic is exact given the stipulations, and the stipulations are the fragile part. Independence between conceptions is a modelling assumption; so is the claim that carriers never show the condition; so is the assumption that both parents' carrier status is known instead of inferred from a test with its own error rates. Change any of those and the numbers change. That habit of separating the arithmetic from the assumptions it rests on is worth more than any single result in this lesson.

:::{source-note}
:claims: claim-complement-and-addition, claim-conditional-probability-definition, claim-independence-product-rule, claim-short-run-compensation-error
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-conditional-probability, source-eom-independence, source-eom-law-of-large-numbers, source-resident-probability-biases

The reference works support the complement rule, the definition of conditional probability, independence as the product condition, and the law of large numbers as a long-run statement that leaves the next independent trial unchanged. The survey of medical residents supports treating expected short-run correction as a documented reasoning error among clinicians. The inheritance model here is stipulated for arithmetic practice and no source is offered for it as biology.
:::
