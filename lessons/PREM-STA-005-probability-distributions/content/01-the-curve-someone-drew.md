# The curve someone drew over the bars

Somebody at the study meeting puts the fasting glucose histogram on the screen, takes the pen, and sketches a smooth bell across the tops of the bars. Nobody objects. The sketch feels like tidying up: the bars are jagged because there are only sixty people, and the curve is what the jagged thing is *really* trying to be.

That gesture is a decision, and it is the one this lesson is about. Drawing a curve over a histogram swaps a set of sixty measured numbers for a mathematical object that has never been measured. In return you get things the sixty numbers cannot give you on their own. You can ask what fraction of people would fall between any two glucose values, including values nobody in the room recorded. You can say how far out one person's reading sits without quoting a single other person's. You can say what a repeat of this study would probably look like, which is where the next lesson goes.

You also inherit a way of being wrong that the histogram did not have. A histogram can be badly binned, and it still cannot claim something that did not happen. A curve can.

## Three meanings of one word, before we use it

The curve has a name, and the name is a trap.

In plain English, **normal** means usual, expected, unremarkable. In a clinic, a **normal range** is a band of values a laboratory reports as unremarkable for a healthy person, so a fasting glucose result gets called normal or abnormal against a printed cut-off. In statistics, the **normal distribution** is one specific bell-shaped mathematical curve among dozens of named ones, and it carries none of the other two meanings. A measurement can follow a normal distribution beautifully and be catastrophic for every person in the room. A measurement can be perfectly healthy in every individual and follow a distribution nothing like the normal one.

This lesson uses the third meaning throughout. When it needs the clinical sense it says *reference range* or *diagnostic threshold*, and it never uses "normal" to mean "usual". Keep the three apart in your own reading, because the sentence "the glucose values were normal" is ambiguous in a way that has ended arguments in the wrong place.

The same warning applies to the word *model*. Earlier lessons in this course used a model as a purposeful, selective representation of a system, built to answer a question. What this lesson calls a **probability model** is a model in exactly that sense, narrowed to one job: representing how a single measurement is spread across its possible values. It selects, it omits, and it can be checked against the thing it represents.

## What you already have

By this point in the block the study is no longer a design on paper. Sixty adults with type 2 diabetes have a fasting glucose recorded, thirty after an earlier dinner and thirty after a later one, and the dinner-to-sleep interval means that a *later* dinner is a *shorter* interval.

Three earlier results carry into this lesson and are not re-derived here:

- the display lesson gave you the histogram of those sixty values, a single hump peaking in the 135 to 145 bin, an apparently heavier reach towards high glucose than towards low that it left for this lesson to settle, and one person alone in the lowest bin;
- the same lesson built a second, constructed cohort with two humps and an identical mean of 142 mg/dL, where the average described almost nobody;
- the centre-and-spread lesson turned that picture into two numbers, a mean of 142 mg/dL and a standard deviation of 18 mg/dL, and gave the shape of the tails a name and a number.

Everything below is built from that mean and that standard deviation. If either is unfamiliar, go back before going on.

:::{callout}
:kind: recovery

## Recovery route

If a mean and a standard deviation are not yet things you can compute and interpret, return to the centre-and-spread lesson before this one; nothing here works without them. If the trouble is with reading a histogram for shape and tails, the tables and graphical displays lesson covers it. If the trouble is with probability as a long-run proportion, or with independence between events, the probability foundations lesson does that, and the binomial scene near the end of this lesson leans on it directly. No score from any of the three is needed to continue here.
:::

## The question this lesson answers

> Which idealised shape describes fasting glucose, what does adopting it let you say, and how would you find out that it does not fit?

The answer has four parts, and the fourth is the one people skip. A curve with two knobs on it; a rule of thumb for reading areas off it; a way of turning any measurement into a unit-free distance so that different quantities can be compared on one ruler; and a check, run against the data, that can come back negative.

By the end you will be able to fit the normal model to this cohort, read the three standard bands off it, convert a glucose reading into a distance in standard deviations, use tail-by-tail counts as a coarse warning about model fit, explain why a probability plot or calibrated procedure is needed for a binary decision, and test whether a discrete count really meets the conditions for a binomial model.

:::{callout}
:kind: boundary

The cohort summaries, the screening dataset used later, and every case in this lesson are invented for teaching. The underlying sixty cohort readings are not included in this pack, so their reported summaries are stipulated inputs rather than independently reproducible evidence. These are teaching examples, not medical advice, and they describe no real patient. Published reference values are quoted only where the lesson needs a real threshold to reason about, and they are attributed where they appear.
:::

## Accessibility and alternatives

Two charts carry teaching weight here, and neither is the only route to what it shows. Each opens a written description and the numbers behind it as a table, so the curve's parameters, its shaded bands and their percentages, and every bin count in the screening histogram are readable as text. No quantity appears only in a picture.

Where a chart makes an argument, the prose states the argument and gives the figures it rests on, and the tables in the later scenes repeat the counts a reader might otherwise have to estimate from a bar height. No task in this lesson asks you to judge a colour, hover, drag, or read a length by eye when the exact number is available. Working entirely from the data tables and the prose is a complete route through the lesson.

Formulas appear as display mathematics with the arithmetic also written out in the surrounding sentence, so a reader whose software does not render mathematics can follow every calculation from the prose alone.

:::{source-note}
:claims: claim-normal-is-a-named-distribution, claim-normality-is-checkable
:sources: source-nist-normal-distribution, source-nist-normal-data, source-nist-normal-probability-plot

The first source supplies the normal distribution as one named, parameterised distribution among many. The second supplies the statistical meaning of calling data "normal", namely that they are drawn from a population having a normal distribution. The third supplies the fact that whether a data set is approximately normally distributed is something a technique can assess rather than something assumed. The study, the cohort, the meeting, and all wording here are original teaching material.
:::
