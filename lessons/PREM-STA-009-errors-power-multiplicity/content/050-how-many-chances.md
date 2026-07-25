# How many chances did the study give itself?

Go back to the promise $\alpha$ made. Set the threshold at 0.05 and, in a world where the null is true, 5 studies in 100 will cross it anyway. That promise is exact, and it is made **per comparison**.

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

That formula assumes the five comparisons are independent. Real outcomes rarely are. All five were measured on the same sixty people, and outcomes that rise and fall together within a person carry overlapping information, so their crossings tend to coincide instead of adding. Correlated tests inflate the family-wise rate by less than the formula says.

Which cuts one way only. Correlation softens the number; it never removes the problem, and the direction of the inflation is always upward. Treat $1 - (1-\alpha)^{k}$ as the ceiling, treat $\alpha$ itself as the floor that only applies when there is genuinely one comparison, and know that the truth for a real report sits between them.

## What to do about it

Two honest responses, and they cost different things.

**Nominate one comparison in advance.** Write into the protocol which single outcome the study is about. That outcome keeps the full 0.05 and the full power. The other four become exploratory: reported, useful for generating the next question, and never described as findings.

**Split the threshold.** If several outcomes genuinely have to carry equal weight, divide $\alpha$ between them. Five comparisons at $0.05 / 5 = 0.01$ each brings the family-wise rate back to $1 - 0.99^{5} = 0.049$, which is the 0.05 that was promised in the first place. This is the Bonferroni approach, and it works.

It also has a bill attached, and scene two already predicted it. Tightening $\alpha$ to 0.01 moves the dinner-timing critical value from 8.09 mg/dL out to 10.64 mg/dL. Against a true effect of 9.0 mg/dL, the study's power drops from 0.59 to 0.35. The effect it could detect with 80% power rises from 11.6 mg/dL to 14.1 mg/dL. Buying protection against the first kind of error with a fixed sample size always means paying in the second kind.

To keep 80% power against 9.0 mg/dL *and* run five comparisons at 0.01 each, the study would need 74 people per group, 148 in total, against the 100 it would have needed for a single prespecified outcome. That is the real price of asking five questions instead of one, and it is payable in participants.

:::{misconception}
:id: misconception-subgroup-found-after-looking

**The wrong model.** A trial reports no overall effect. Buried in the paper is a subgroup: among women over 60, the late-dinner group ran 11 mg/dL higher, $p = 0.03$. A reader concludes that dinner timing matters in older women, and the clinic starts advising them differently.

**Predict first.** The investigators examined twenty subgroups: by sex, by age band, by body mass index band, by diabetes duration, by treatment, and so on. Suppose dinner timing does nothing in any subgroup. Before reading on, write down your estimate of the probability that at least one of the twenty comparisons crossed 0.05 anyway.

**The disconfirming evidence.** Use the formula:

$$1 - 0.95^{20} = 0.64.$$

Roughly two chances in three that a completely null trial hands you at least one subgroup that crosses. The reader has found the thing the arithmetic says was always going to be there, and read it as though it had been the question.

There is a second problem stacked on the first. Each subgroup is smaller than the whole trial, so each has a larger standard error and lower power. The comparisons most likely to throw up a crossing are also the ones least able to support a conclusion when they do.

**Rebuild the model.** What makes a result interpretable is not where it appears in the paper but when the question was asked. A comparison named in the protocol, before anyone saw the data, has the false-alarm rate it was designed to have. A comparison chosen after looking at twenty has an unknown one, because the choosing was done by the data.

Subgroup findings arrived at this way are worth exactly one thing: a hypothesis for the next study. That is not a small thing. It is simply a different thing from a result.

**Test the repair.** Three ways of reporting the same subgroup. Which is defensible?

1. "Late dinner raised fasting glucose in women over 60 ($p = 0.03$)."
2. "In the prespecified subgroup of women over 60, late dinner was associated with an 11 mg/dL higher mean fasting glucose ($p = 0.03$)."
3. "Of twenty exploratory subgroups examined, one crossed 0.05; among twenty null comparisons at least one crossing occurs about 64% of the time, so this finding is offered as a hypothesis for a further study."

Number 3 is defensible, and it is the only one that tells you what you need to know. Number 2 would be defensible if the subgroup really had been named in the protocol; the word "prespecified" is doing all of the work in that sentence, and it must be true. Number 1 conceals the count entirely.
:::

:::{check}
:id: check-multiplicity-arithmetic
:kind: practice

1. A study reports 8 outcome comparisons, each at 0.05, and none is real. Calculate the probability that at least one crosses.
2. The same study wants a family-wise rate of 0.05 across all 8. What threshold should each comparison use?
3. Explain in one sentence why the answer to question 1 would be smaller if the eight outcomes were strongly correlated.
4. A colleague says the multiplicity problem is solved by reporting all comparisons honestly. What does full reporting fix, and what does it leave untouched?
:::

For eight comparisons, $1 - 0.95^{8} = 0.337$, so about a one-in-three chance of at least one crossing. To hold the family-wise rate near 0.05, each comparison takes $0.05 / 8 = 0.00625$. Correlated outcomes carry overlapping information, so their crossings tend to coincide instead of adding, and the family-wise rate is lower than the independent formula gives. Full reporting fixes the reader's information problem, since you can now count the comparisons and apply the arithmetic yourself. It does nothing to the arithmetic: eight comparisons still produce a 0.337 chance of a crossing whether or not the paper admits to eight.

:::{source-note}
:claims: claim-multiplicity-inflates-false-positives, claim-bonferroni-adjustment, claim-subgroups-are-exploratory, claim-alpha-is-chosen, claim-what-drives-beta
:sources: source-chen-multiple-comparisons, source-tanniou-subgroups, source-greenland-misinterpretations, source-nist-statistical-tests

These sources support the definition of a Type I error as incorrectly rejecting a true null hypothesis, the family-wise error rate as the probability of incorrectly rejecting at least one, the observation that simultaneous testing of many hypotheses makes at least one incorrect rejection close to inevitable, the Bonferroni adjustment of the threshold to alpha divided by the number of tests, the inflation of Type I error in subgroup analyses through multiple testing together with their exploratory standing and the need for replication, the significance level as a cut-off fixed in advance, and the rise in the second-kind error as alpha is tightened. The five outcomes, the twenty subgroups, the chart, and every figure computed here are original teaching material.
:::
