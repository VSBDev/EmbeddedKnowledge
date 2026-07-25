# What a probability is a promise about

Say the probability that a late-dinner participant's night comes in at or above 140 mg/dL is 0.70. What has been promised?

Not that seven of any ten nights will be high. The honest content of 0.70 is about the long run: as the number of recorded nights grows, under conditions that stay the same, the share of high nights settles toward 0.70 and stops wandering far from it. That reading of a probability is the one this block uses, and it is the reason the number is checkable at all. You can hold a probability up against a record and see whether the record agrees.

The word **chance** in everyday speech covers luck, opportunity, and rough likelihood all at once. From here on, **probability** means the specific number just described, always between 0 and 1, always attached to a stated event under stated conditions.

## Counting, when the outcomes are interchangeable

Where does such a number come from? Sometimes from long records. Sometimes from a structure you can count.

Pull one of the sixty study rows at random, in the sense that every row has the same opportunity of being drawn. Each row is one **outcome**, and the set of all sixty is the **sample space**. An **event** is any collection of outcomes you care about: "the row is a late diner", "the reading is 140 mg/dL or above", "both".

When the outcomes in a sample space are interchangeable in this way, the probability of an event is a counting exercise.

:::{definition}
:id: definition-counting-probability

For a sample space of $n$ equally likely outcomes, the probability of event $A$ is

$$P(A) = \frac{\text{number of outcomes in } A}{n}.$$

$P(A)$ is never below 0, never above 1, and equals 1 for the event containing every outcome.
:::

Applied to the sixty rows, with $L$ for "late diner" and $H$ for "reading 140 mg/dL or above":

$$P(L) = \frac{30}{60} = 0.50, \qquad P(H) = \frac{33}{60} = 0.55, \qquad P(L \cap H) = \frac{21}{60} = 0.35.$$

The symbol $L \cap H$ names the event that both hold: the twenty-one people who ate late and read high.

Notice how little machinery that took. The whole apparatus so far is careful counting plus an agreement about which whole to divide by.

## The other half of every event

Every event has a partner. $H$ has "reading below 140", written $H^{c}$ and read as the **complement** of $H$. The two cover the sample space between them and share no outcome, so their probabilities must sum to 1.

:::{definition}
:id: definition-complement

For any event $A$,

$$P(A^{c}) = 1 - P(A).$$
:::

For the sixty rows, $P(H^{c}) = 1 - 0.55 = 0.45$, and the count agrees: 27 of 60 is 0.45. The rule earns its keep whenever the thing you want is awkward to count and its opposite is easy. "At least one high night in the next five" has many ways to happen; "no high night in the next five" has one. Compute the easy one and subtract.

## What forty nights actually look like

Here is one participant's invented forty-night record, generated so that every night carries the same 0.70 probability of a high reading. The chart tracks the running share of high nights as the record grows.

:::{chart} ../charts/running-share-of-high-nights.chart.json
:::

Two readings of that line matter.

The first four nights all came in low. That is not evidence the 0.70 was wrong; four independent low nights have probability $0.30^{4} = 0.0081$ at any given starting point, which is uncommon without being impossible, and across sixty participants each recording five to fourteen nights, some such run turning up somewhere is unremarkable. After ten nights the running share stands at 0.50, still nowhere near 0.70. Short records are poor witnesses. Lesson 06 turns that observation into the reason one study's result is not the last word.

The second reading is about how the line eventually behaves. This is the **law of large numbers**: as trials accumulate under stable conditions, the observed relative frequency of an event closes on its probability. The law is a statement about the long run and says nothing about the next trial.

## The correction that never comes

:::{misconception}
:id: misconception-short-run-balance

**The claim.** Four low nights in a row means a high night is now more likely. The record is behind and has to catch up.

**Why it appeals.** The law of large numbers really does say the share ends up near 0.70, and catching up is the obvious way to get there.

**What is actually true.** The trials are independent by construction, which means the probability of a high reading on night five is 0.70 whatever nights one to four did. There is no mechanism by which past nights push future ones. Follow the arithmetic in this record and watch the shortfall survive.

- By night ten the record holds 5 high nights where 0.70 predicted 7. It is 2 short.
- Suppose every night from eleven onward runs at exactly the 0.70 rate, 7 high nights in each block of 10.
- At night 1000 the count is $5 + 0.70 \times 990 = 698$. The prediction was 700. Still 2 short, exactly as before.
- Yet the running share is $698 / 1000 = 0.698$, within 0.002 of 0.70.

Nothing repaid the deficit. The share converged because a fixed shortfall of 2 shrinks to nothing against a growing denominator. Dilution, not compensation.

**The repair.** Read the law of large numbers as a claim about the share, never about the count and never about the next trial. When you catch yourself thinking an outcome is "due", check whether the trials are independent. If they are, nothing is ever due.

**Why this is worth the space.** This error is not confined to casinos. In a multicentre survey of 153 medical residents, a clinical vignette built on exactly this reasoning was answered correctly by 54.2 per cent, and residents who scored higher on biostatistics questions were less likely to fall for it.
:::

## Two cautions about this record

The forty nights were built to be independent so that the point about runs could be made cleanly. Real repeated readings from one person are not independent; they share that person's physiology, medication, and habits, which is why lesson 01 separates paired measurements from independent ones. Treating nights as independent is a modelling choice you should be able to defend, and it is defended nowhere in this lesson.

The word **random** is also carrying a narrow load here. It means only that a stated chance mechanism selected the outcome. It is not the same use as random allocation to a study arm or random selection into a sample, both of which the design lessons define.

:::{source-note}
:claims: claim-probability-as-long-run-frequency, claim-complement-and-addition, claim-short-run-compensation-error
:sources: source-sep-probability-interpretations, source-gum-statistical-terms, source-eom-law-of-large-numbers, source-resident-probability-biases

The reference works support the long-run relative-frequency reading of a probability and its limits, the axioms from which the complement rule follows, and the law of large numbers as convergence of an observed frequency to a probability under independent repetition. The survey of medical residents is the source of the 153 respondents and the 54.2 per cent figure. No source supports the invented forty-night record or any statement about dinner timing.
:::
