# Transfer: ninety mornings belonging to one person

Everything so far has compared people. Now the unit changes. A clinician opens one patient's logbook before a routine appointment: ninety consecutive morning fasting readings from a single person, in date order.

The columns look familiar and the structure is different. Sixty people measured once gave a distribution across individuals. One person measured ninety times gives a sequence, and a sequence carries something the earlier data never had: order.

## Two questions, two displays

**Is this person's control changing?** That question is about order, so it wants a line chart: date along the horizontal axis, fasting glucose on the vertical, points joined in the sequence they were recorded. The line is legitimate here in a way it was not on the poster in the previous scene, because consecutive mornings really are consecutive, and the space between two points is time that actually passed.

**How much do this person's mornings differ from each other?** That question is about spread, so it wants a histogram of the same ninety values. Choose a bin width, count, draw.

Now the transfer step. Those two displays are built from identical numbers, and each one destroys what the other preserves.

A histogram of ninety readings answers "how often was this person above 150?" and cannot answer "were the high readings all in March?" Sorting the values into bins throws the dates away. Two patients could hand you records with the same histogram down to the last bar: one drifting steadily upward all quarter, the other stable with a bad fortnight after a chest infection. The histogram cannot separate them. The line chart can, instantly, and in exchange it makes the overall spread much harder to judge.

So the answer to "which display" is a question back: *which of these two things am I willing to lose?* Both, usually. The two charts belong side by side, and the practical reason clinicians look at both is that they are asking both questions in the same five minutes.

## The axis question, transferred

A bar chart's numerical axis must start at zero because a bar states a magnitude by its length. A line chart does not: it states a value by position, and the guidance treats breaking the vertical axis on a line chart as acceptable where it is needed. For ninety glucose readings sitting between 110 and 190 mg/dL, forcing the axis down to zero would compress the entire record into the top fifth of the plot and hide precisely the movement the clinician came to see.

That is not an exception to the earlier rule. It is the rule stated properly: the axis has to be honest about the encoding the chart is using. Length-based encodings need a zero. Position-based encodings need a stated range, clearly labelled, so a reader knows how much of the scale they are looking at.

:::{check}
:id: check-transfer-record-review
:kind: transfer

The same patient's record, three further questions. For each one, name the display and say what that display will cost you.

1. Does this person's fasting glucose depend on how much they slept the night before, which they also logged?
2. How many of the ninety mornings were at or above 180 mg/dL?
3. Did the readings recorded on weekend mornings differ from weekdays?
:::

Sleep and glucose are two quantities measured on the same ninety mornings, so a scatter, one point per morning. It costs you the dates: a scatter of the pairs cannot show that both variables drifted together over the quarter rather than tracking each other day by day. The second question wants an exact count, so a frequency table, or simply the number. Any chart would cost precision here for no gain. The third splits ninety readings into two groups by a category, so two histograms on a shared scale, or two box plots side by side; that costs the order again, and it also costs you the raw counts unless you print the two group sizes, which you should, because sixty-four weekdays against twenty-six weekend mornings is a comparison of unequal footing.

:::{callout}
:kind: boundary

**Teaching example, not medical advice.** This logbook is invented to make a display choice concrete. Nothing in this scene describes how any real record should be interpreted, and no reading of any chart here is a clinical judgment.
:::

:::{source-note}
:claims: claim-chart-choice-follows-question, claim-truncated-bar-axis-distorts
:sources: source-af-charts

This source supports the mapping from the relationship being shown to the display type, including line charts for a time series, and the distinct treatment of the numerical axis in bar charts and line charts. The patient, the logbook, and the ninety readings are original teaching material.
:::
