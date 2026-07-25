# When the question is a count, the curve is the wrong tool

A clinical director does not ask what fraction of the area under a curve lies past 126 mg/dL. She asks how many of her sixty patients were over the line this quarter, and whether next quarter's number would tell her anything.

That question has changed type. A glucose reading can be any value in a range and takes a curve. A count of people over a threshold is a whole number, it cannot go below zero, it cannot exceed sixty, and there is nothing between 48 and 49. It needs a **discrete distribution**: one that assigns an honest probability to each individual outcome instead of to intervals. For counting yes-or-no results, that distribution is the **binomial**.

## Four conditions, all of them checkable

The binomial describes the number of "yes" results in a sequence of trials when all four of these hold.

1. **The number of trials is fixed in advance.** Here it is 60, one per person in the cohort.
2. **Each trial has exactly two mutually exclusive outcomes.** Fasting glucose at or above 126 mg/dL, or below it. The threshold is the NIDDK diagnostic value for diabetes on a fasting plasma glucose test, and the reduction to yes-or-no is a deliberate loss: someone at 127 and someone at 210 both count once.
3. **The probability of "yes" is the same on every trial.** Call it *p*.
4. **The trials are independent.** One person's result changing does not change anybody else's probability.

Conditions three and four are where real data argue back, and this scene comes back to both.

Given those, the probability of exactly *k* yes results in *n* trials is:

:::{equation}
:label: equation-binomial-pmf

P(X = k) = \binom{n}{k} \, p^{k} (1-p)^{n-k}
:::

The three pieces do separate jobs. The power of *p* counts the yes results, the power of (1 − *p*) counts the no results, and the binomial coefficient counts how many different orderings of *k* yes results among *n* people would produce the same total. The counting rules from the probability lesson are doing the last of those.

## Where p comes from

For a conditional teaching calculation, the fitted normal model supplies a probability. The threshold is 126 mg/dL, the mean is 142 and the standard deviation is 18, so:

:::{equation}
:label: equation-threshold-z

z = \frac{126 - 142}{18} = -0.89, \qquad P(X \ge 126) = 0.8130
:::

Round to *p* = 0.81. Three cautions apply before using it. This *p* was estimated from the same stipulated cohort summaries the model will be compared against, so a good match is partly guaranteed and is weaker evidence than a match against an independently obtained probability. Converting a z-score into a probability requires the normal shape to hold, which this pack has not established with reproducible observations. Finally, a binomial count requires the same *p* for every person; the dinner-time subgroups later in this scene show why that condition cannot simply be assumed for this cohort.

## Five patients first

First isolate the binomial arithmetic from the cohort problem. Consider five independent, exchangeable patients in a constructed homogeneous group for which *p* = 0.81 applies to every person.

:::{worked-example}
:id: worked-example-five-patients

**All five at or above 126.** Every trial has to come out yes, and there is only one way for that to happen: 0.81⁵ = 0.3487. About a 35 per cent chance.

**Exactly four of the five.** One person is below the threshold and any of the five could be that person, so the coefficient is 5. That gives 5 × 0.81⁴ × 0.19 = 5 × 0.4305 × 0.19 = 0.4089. This is the single most likely outcome, at about 41 per cent.

**Exactly three of the five.** Two people below, and there are 10 ways to choose which two: 10 × 0.81³ × 0.19² = 10 × 0.5314 × 0.0361 = 0.1918, about 19 per cent.

**Two or fewer.** Add the three remaining counts instead of subtracting, so the rounding does not accumulate: 0.0450 + 0.0053 + 0.0002 = 0.0505, about 5 per cent.

**Read it back.** The six possible counts have probabilities 0.0002, 0.0053, 0.0450, 0.1918, 0.4089 and 0.3487 for zero through five, and they account for every outcome there is, summing to 1 up to rounding. Notice what a discrete distribution can do that a curve cannot: "exactly four" has a real, quotable probability of 0.409. Ask a normal curve for the probability of exactly 4.0 and the answer is zero.

**Self-explanation.** Why does the choice to use five independent people from one homogeneous group matter more to this model than the fact that the outcome is written as a whole-number count?
:::

## Sixty patients

As a conditional calculation, suppose sixty independent, exchangeable patients each have *p* = 0.81. Two summaries come straight from the parameters:

:::{equation}
:label: equation-binomial-mean-sd

\mu = np = 60 \times 0.81 = 48.6, \qquad \sigma = \sqrt{np(1-p)} = \sqrt{60 \times 0.81 \times 0.19} = \sqrt{9.234} = 3.04
:::

So the conditional model expects about 49 of the sixty at or above 126 mg/dL. The value 3.04 patients is the standard deviation of one quarter's count around 48.6, not the standard deviation of the change between two independent quarters. Under the same assumptions, the difference between two independent quarterly counts would have standard deviation $\sqrt{2} \times 3.04 = 4.30$ patients. Working the probability formula at each count, 49 is the single most likely outcome at 0.131, and the counts from 43 to 55 together hold 0.967 of the probability.

The earlier clinical table stipulates 49 of the sixty at or above 126 mg/dL. Conditional prediction 48.6, stipulated count 49.

That agreement is worth exactly what the cautions above allow. It confirms that the normal model and the binomial count are arithmetically consistent with each other on this dataset, which checks the chain of reasoning and does not independently confirm either link.

## Where the conditions bend

**Constant probability.** The cohort is not one group. For this constructed illustration, the thirty earlier-dinner patients are assigned a threshold probability of 0.76 and the thirty later-dinner patients a probability of 0.86. Their equally weighted average is 0.81, but averaging two different probabilities does not make the individual trials share one. A single binomial with *p* = 0.81 would silently erase the heterogeneity and violate its own fixed-probability condition.

**Independence.** This is the one that breaks properly, and the study's own design shows how. Each participant recorded between 5 and 14 nights. A tempting move is to treat every night as a trial, giving several hundred trials instead of sixty and a much narrower answer. It is wrong, and the reason is the meaning of independence from the probability lesson: nights from the same person are not independent, because knowing that Tuesday was above 126 tells you a great deal about Wednesday for that individual. Counting them as separate trials manufactures precision out of repetition. The count of *people* over the threshold keeps one trial per person and stays defensible.

:::{check}
:id: check-binomial-conditions
:kind: retrieval

For each situation, say whether a binomial model is defensible and name the condition at stake.

1. Of 60 people in the cohort, how many are at or above 165 mg/dL, given a model probability of 0.10 for each.
2. Of 60 people, how many will still be enrolled at 12 months, where withdrawals happen partly because a clinic closed and took its patients with it.
3. Across the whole cohort, how many of the recorded nights showed a fasting glucose above 126 mg/dL, treating every night as a trial.
4. How many fasting glucose readings in the cohort exceed 250 mg/dL, using a probability read off the fitted normal curve.
:::

The first is defensible as stated: sixty fixed trials, a binary outcome, one stated probability applying to every person, and one reading per person. The model expects 60 × 0.10 = 6.0 people, and the earlier lesson stipulated 6 at or above 165 mg/dL. The second fails independence, since a clinic closure removes a block of people together and the outcomes are linked through a shared cause. The third fails independence too, for the reason set out above: nights are clustered within people. The fourth is not defensible for two reasons. The cohort's subgroups already undermine the assumption that one common *p* applies to all sixty people, and the proposed probability comes from a far tail that no observation in the stipulated summaries reaches. Both the binomial condition and its upstream input need justification.

:::{source-note}
:claims: claim-binomial-conditions, claim-binomial-mean-sd, claim-fpg-thresholds, claim-z-score-definition
:sources: source-nist-binomial, source-eom-binomial, source-niddk-diabetes-tests, source-nist-normal-data, source-nist-normal-distribution

The first source supplies the binomial as the distribution for exactly two mutually exclusive outcomes of a trial, the probability of x successes in N trials with the probability of success on a single trial fixed for all trials, the probability formula, and the mean np and standard deviation of the square root of np(1 − p). The second supplies the requirement that the underlying trials be independent. The third supplies the fasting plasma glucose diagnostic value of 126 mg/dL or above. The fourth and fifth supply the standardising transformation used to obtain p and the standard normal distribution it maps onto. The cohort, its stipulated subgroup probabilities, the nights recorded, and every probability computed here are original teaching material.
:::
