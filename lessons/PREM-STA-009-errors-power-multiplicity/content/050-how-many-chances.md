# How many chances did the study give itself?

Go back to the promise $\alpha$ made. Set the threshold at 0.05 and, under a valid test with a prespecified analysis rule, 5 studies in 100 will cross it when the null is true. That long-run promise is made **per comparison**.

The dinner-timing report did not run one comparison. It examined fasting glucose, adherence, the number of nights completed, and two further measurements the team had collected. Take that as five comparisons, each judged against 0.05, which is the same count the probability lesson used on this study.

So ask the question the promise does not cover. Across five comparisons, in a world where none of them is real, what is the probability that at least one crosses?

## The arithmetic

Count the complement, exactly as the probability lesson did with the coins.

A single comparison fails to cross with probability $1 - 0.05 = 0.95$. If the five comparisons are independent, all five fail to cross with probability

$$0.95^{5} = 0.774,$$

so at least one crosses with probability

$$1 - 0.95^{5} = 0.226.$$

About 23 chances in 100 that a report of five dead ends contains something that looks like news. The general form is

$$P(\text{at least one crosses}) = 1 - (1 - \alpha)^{k}$$

for $k$ independent comparisons at level $\alpha$, and it has a name.

:::{definition}
:id: definition-multiplicity-and-fwer

**Multiplicity** is the situation in which a study runs more than one hypothesis test. Every extra test is another opportunity for a Type I error.

The **family-wise error rate** is the probability of at least one Type I error across the whole set of tests. For $k$ independent tests at level $\alpha$ it is $1 - (1 - \alpha)^{k}$, and it climbs quickly.
:::

:::{chart} ../charts/false-positive-inflation.chart.json
:::

Read the three marked positions. At 5 comparisons the family-wise rate is 0.23. At 10 it is 0.40. At 20 it is 0.64, which means that a study running twenty independent dead-end comparisons is more likely than not to produce something that crosses.

The curve flattens as it rises, and there is a reason. Each additional comparison adds its 0.05 only to the shrinking share of studies where nothing has crossed yet. Doubling the tests never doubles the rate.

## The independence assumption, stated plainly

That formula assumes the five comparisons are independent. Real outcomes rarely are. All five were measured on the same sixty people, so the rejection events have a joint dependence structure.

Without that joint structure, the exact family-wise rate cannot be inferred from $k$ and $\alpha$ alone. Strong positive dependence often makes rejections coincide and can put the rate below the independent value, but other dependence patterns can put it above. One bound does hold without assuming independence: the Bonferroni inequality says the family-wise rate is no greater than $\min(1,k\alpha)$. For five tests at 0.05, the independence calculation is 0.226 and the general upper bound is 0.25.

## What to do about it

Two honest responses, and they cost different things.

**Nominate one comparison in advance.** Write into the protocol which single outcome the study is about. That outcome keeps the full 0.05 and the full power. The other four become exploratory: reported, useful for generating the next question, and never described as findings.

**Split the threshold.** If several outcomes genuinely have to carry equal weight, divide $\alpha$ between them. Five comparisons at $0.05 / 5 = 0.01$ each guarantee a family-wise rate no greater than 0.05 under any dependence structure. If the tests are independent, the exact rate is $1 - 0.99^{5} = 0.049$. This is the Bonferroni approach, and it works.

It also has a bill attached, and scene two already predicted it. Tightening $\alpha$ to 0.01 moves the dinner-timing critical value from 8.09 mg/dL out to 10.64 mg/dL. Against a true effect of 9.0 mg/dL, the study's power drops from 0.59 to 0.35. The effect it could detect with 80% power rises from 11.6 mg/dL to 14.1 mg/dL. Buying protection against the first kind of error with a fixed sample size always means paying in the second kind.

To keep 80% power against 9.0 mg/dL *and* run five comparisons at 0.01 each, the study would need 74 people per group, 148 in total, against the 100 it would have needed for a single prespecified outcome. That is the real price of asking five questions instead of one, and it is payable in participants.

:::{misconception}
:id: misconception-subgroup-found-after-looking

**The wrong model.** A trial reports no overall effect. Buried in the paper is a subgroup: among women over 60, the late-dinner group ran 11 mg/dL higher, $p = 0.03$. A reader concludes that dinner timing matters in older women, and the clinic starts advising them differently.

**Predict first.** The investigators examined twenty overlapping subgroups: by sex, by age band, by body mass index band, by diabetes duration, by treatment, and so on. Suppose dinner timing does nothing in any subgroup. Can the probability that at least one comparison crossed 0.05 be calculated from the count alone? Commit to an answer before reading on.

**The disconfirming evidence.** If twenty tests were independent, the illustration would be

$$1 - 0.95^{20} = 0.64.$$

But these subgroups reuse participants and overlap. Their exact family-wise rate depends on their joint rejection pattern and cannot be calculated from the count alone; the general Bonferroni upper bound is $\min(1,20 \times 0.05)=1$, which is valid but uninformative here. What the count does establish is that the highlighted $p=0.03$ cannot be read as though it came from the only comparison attempted.

There is a second problem stacked on the first. Each subgroup is smaller than the whole trial, so each has a larger standard error and lower power. The comparisons most likely to throw up a crossing are also the ones least able to support a conclusion when they do.

**Rebuild the model.** What makes a result interpretable is not where it appears in the paper but the confirmatory strategy in which it was tested. Prespecification improves interpretability because it separates planned tests from data-selected ones, but it does not remove multiplicity when several subgroups were named. A confirmatory subgroup claim needs a prespecified family of tests with its error-rate allocation stated. A claim that effects differ between subgroups also needs an appropriate treatment-by-subgroup interaction analysis; one subgroup crossing while another does not is not itself evidence of a difference between them.

Subgroup findings arrived at this way are worth exactly one thing: a hypothesis for the next study. That is not a small thing. It is simply a different thing from a result.

**Test the repair.** Three ways of reporting the same subgroup. Which is defensible?

1. "Late dinner raised fasting glucose in women over 60 ($p = 0.03$)."
2. "In one of several prespecified subgroups, women over 60, late dinner was associated with an 11 mg/dL higher mean fasting glucose ($p = 0.03$)."
3. "Of twenty exploratory, overlapping subgroups examined, one crossed 0.05. The exact family-wise rate cannot be recovered from the count alone, and this data-selected finding is offered as a hypothesis for a prespecified confirmatory study."

Number 3 is defensible, and it is the only one that tells you what you need to know. Number 2 is not yet confirmatory: saying *prespecified* does not state how multiplicity was controlled or show, through an interaction analysis, that the subgroup effect differs from the rest. Number 1 conceals the count entirely.
:::

:::{check}
:id: check-multiplicity-arithmetic
:kind: practice

1. A study reports 8 outcome comparisons, each at 0.05, and none is real. Calculate the probability that at least one crosses.
2. The same study wants a family-wise rate of 0.05 across all 8. What threshold should each comparison use?
3. Explain why the exact answer cannot be obtained from the count alone if independence is removed, and what strong positive dependence often does to it.
4. A colleague says the multiplicity problem is solved by reporting all comparisons honestly. What does full reporting fix, and what does it leave untouched?
:::

For eight independent comparisons, $1 - 0.95^{8} = 0.337$, so about a one-in-three chance of at least one crossing. To control the family-wise rate at no more than 0.05 under any dependence structure, each comparison takes $0.05 / 8 = 0.00625$. Without independence the exact rate needs the joint dependence structure; strong positive dependence often makes crossings coincide and lowers the rate relative to independence, but correlation in the abstract does not guarantee that direction. Full reporting fixes the reader's information problem by revealing the family of tests. It does not undo the multiple opportunities for a crossing or make an unadjusted selected result confirmatory.

:::{source-note}
:claims: claim-multiplicity-inflates-false-positives, claim-bonferroni-adjustment, claim-subgroups-are-exploratory, claim-alpha-is-chosen, claim-what-drives-beta
:sources: source-chen-multiple-comparisons, source-tanniou-subgroups, source-greenland-misinterpretations, source-nist-statistical-tests

These sources support the definition of a Type I error as incorrectly rejecting a true null hypothesis, the family-wise error rate as the probability of incorrectly rejecting at least one, the inflation produced by simultaneous testing, the Bonferroni adjustment of the threshold to alpha divided by the number of tests, and the multiplicity, prespecification, interaction-analysis, exploratory-status, and replication boundaries for subgroup analyses. They also support the significance level as a cut-off fixed in advance and the rise in the second-kind error as alpha is tightened. The five outcomes, the twenty subgroups, the chart, and every figure computed here are original teaching material.
:::
