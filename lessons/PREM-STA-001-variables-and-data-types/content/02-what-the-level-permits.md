# What each level lets you say

Think of the four levels as a ladder. Each rung keeps everything the rungs below it allow and adds one new operation. Climbing tells you what you may write in a results table; refusing to climb further than the data allow is most of the skill.

## Rung one: labelled groups

With nominal values you can do exactly one thing: count how many rows fall in each group.

Of the sixty participants, 36 are women and 24 are men. From those counts you can report a **proportion**, the part divided by the whole: 36 out of 60 is 0.6, or 60 per cent.

You have met that word before, carrying a related but different meaning. [Ratios, proportions, and percentages (PREM-QNT-003)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-003) used *proportion* for a statement that two ratios are equal, as in the equation `4/10 = 6/15`. From this block onward the word carries a second technical sense: one number between 0 and 1 giving a part's share of its whole. Both senses are built from division, and the statistical one always divides a part by the total it belongs to. When a page in this block says *proportion* without qualification, that share is what it means.

You can also report which group is largest, the **mode**. What you cannot do is average the group labels, because there is no order for an average to sit in the middle of.

## Rung two: ranked groups

Ordinal values add order, so they add every summary that depends on putting values in a line.

You can now name the **median**, the middle value once the rows are sorted. You can report the number and share of participants in each rating. You can name the quartiles, the values a quarter and three quarters of the way along that sorted line. You can also report a cumulative share, such as the proportion rated *usually* or better, which is often the single most useful line in an adherence table.

What order does not supply is spacing. The adherence rating tells you that *usually* outranks *sometimes* and that *always* outranks *usually*. Nothing in the rating establishes that the first of those steps is the same size as the second. A mean needs the steps to be the same size, so a mean is still out of reach.

## Rung three: measured differences

Once the distance between two values is a fixed and knowable quantity, subtraction starts to mean something, and the **mean** becomes interpretable. So does the **standard deviation**, which is a single number saying how far the values typically sit from that mean. Both are built by subtracting, so both need the subtraction to mean something. The third lesson of this block builds them properly; here they are simply the operations that this rung unlocks.

[Ratios, proportions, and percentages (PREM-QNT-003)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-003) already named this rung an **interval scale**: differences are meaningful while the zero point is a convention someone chose. Temperature in degrees Celsius is the standard case. The 4-degree gap from 18 to 22 equals the 4-degree gap from 32 to 36, so a mean temperature is a real summary. Yet 0 °C is the freezing point of water rather than an absence of temperature, so 36 °C is not "twice as hot" as 18 °C.

## Rung four: a real zero

A **ratio scale** adds a zero that means none of the quantity, which is what makes division between two values interpretable. The same earlier lesson defined it that way and this block keeps that definition.

All three quantitative columns in the dinner-timing file sit here. Fasting glucose of 0 mg/dL would mean no glucose in the sample; nights recorded of 0 would mean no usable nights; dinner time of 0 hours before sleep would mean the meal ended as the person fell asleep. Because the zeros are real, a sentence like "she recorded twice as many nights as he did" is arithmetically defined.

Arithmetic being defined is a separate question from the sentence being clinically useful. A fasting glucose of 260 mg/dL is twice 130 mg/dL as a number. Whether that patient is twice as unwell is a clinical judgement the arithmetic cannot make. The block returns to that gap in its final lesson.

## The permission table

| Level | Count and proportion | Mode | Median and quartiles | Mean and standard deviation | Ratios between values |
| --- | :---: | :---: | :---: | :---: | :---: |
| Nominal | yes | yes | no | no | no |
| Ordinal | yes | yes | yes | no | no |
| Interval | yes | yes | yes | yes | no |
| Ratio | yes | yes | yes | yes | yes |

Read the table downward and each row inherits everything above it. Read it across and every *no* marks an operation whose answer would be a fact about the coding scheme rather than about the sixty people.

## The same rule chooses the picture

Displays follow the level for the same reason summaries do.

A categorical column is usually shown as a bar for each group, with a gap between the bars, because there is nothing between *female* and *male* for a bar to occupy. For a nominal column you may sort those bars however you like, tallest first if that helps. For an ordinal column the bars must stay in rating order, since the order is data.

A continuous column is usually shown as a histogram, where the horizontal axis is a measured scale and neighbouring bins are genuinely adjacent stretches of that scale. A box plot or a dot plot would also respect the measured scale; what the level rules out is a picture that invents spacing the data does not have. Putting the sex codes 1 and 2 on a histogram axis invents a scale that was never measured, and the picture then implies a midpoint at 1.5 that no participant can occupy.

:::{check}
:id: check-permission-reasoning
:kind: retrieval

Answer both before reading on.

1. The study team wants one number describing adherence across the sixty participants. Name a summary the rating supports and say why the mean is not on that list.
2. Nights recorded runs from 5 to 14 and only ever takes whole values. Which rung does it sit on, and how do you know?
:::

### Feedback after your attempt

For adherence, the median rating and the share of participants at each rating are both supported, and the share rated *usually* or better is often the most readable single figure. The mean is excluded because averaging requires equal steps between ratings and the rating scale never established them.

Nights recorded sits on the ratio rung. The step from 9 nights to 10 is one night, the same size as the step from 13 to 14, so differences are fixed; and zero nights means no nights, so the zero is real. Being restricted to whole numbers makes it discrete, which is a statement about which values can occur rather than about which arithmetic is allowed.

:::{source-note}
:claims: claim-variable-type-taxonomy, claim-level-constrains-summary
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

Three methods papers from clinical research and medical education support the four measurement scales, the use of frequency summaries for categorical data against central-tendency and dispersion summaries for quantitative data, and the point that a mean requires measurable distances while ordered categories do not supply them. Read the permission table for what is interpretable rather than for what is best: a mean can be available and still describe a lopsided column poorly, which the third lesson of this block takes up. The ladder, the table, and the display rules are this lesson's own arrangement.
:::
