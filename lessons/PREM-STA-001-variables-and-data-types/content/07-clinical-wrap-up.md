# Clinical wrap-up: should the glucose column become a yes or a no?

:::{callout}
:kind: boundary
:id: callout-teaching-boundary

Teaching example, not medical advice. The dinner-timing study, its sixty participants, and every value shown are invented for reasoning practice. Nothing here describes a real patient or tells anyone how to interpret their own glucose readings, and no part of this lesson is a basis for changing anyone's care.
:::

The Scientific Inquiry block ended with a designed study and a question: in adults with type 2 diabetes, is a later dinner associated with a higher next-morning fasting glucose? The data have now arrived. Before anyone analyses them, the team makes a proposal that sounds sensible and would quietly decide the answer.

## The proposal

The clinic's record system prefers flags to numbers. Rather than carry the meter reading, it would store one field per participant: whether that morning's fasting reading reached 126 mg/dL.

For this invented exercise, 126 mg/dL is an explicitly chosen teaching cut point. It has no diagnostic or treatment meaning here. The readings came from participants' own meters, not from a qualifying laboratory diagnostic test, and the flag must not be used to classify any person's health.

The question for this lesson is narrower than whether the flag is good clinical practice. It is whether the study can still answer its own question after the swap.

## Work it with the lesson's own tools

**Name both versions.** The meter reading is a quantitative, continuous column on a ratio scale: one mg/dL is one mg/dL, and zero would mean no glucose in the sample. The flag is a categorical column with two groups. The nominal and ordinal distinction stops mattering once there are only two groups, because every summary an order would unlock, such as a median, is already given by the two counts.

**Say what each supports.** The reading supports a mean and a standard deviation in mg/dL, and it supports the question the study actually asked, which is how the reading changes per hour of dinner delay. The flag supports a count and a proportion, and it supports comparing that proportion between earlier and later dinners. Both are honest summaries. They answer different questions.

**Find what the swap costs.** Take the six rows from the worked audit and apply the cut point.

| Participant | Reading (mg/dL) | Flag at 126 |
| --- | ---: | --- |
| P07 | 132 | at or above |
| P12 | 118 | below |
| P23 | 141 | at or above |
| P31 | 126 | at or above |
| P44 | 155 | at or above |
| P58 | 129 | at or above |

P31 at 126 and P44 at 155 are now the same value, 29 mg/dL apart. P12 at 118 and P31 at 126 are now different values, 8 mg/dL apart. Distance on the measured scale has been replaced by which side of one line a person landed on, so a shift of a few mg/dL in everybody can move the mean while leaving the proportion untouched, or can move the proportion sharply if many participants sit near 126. The final lesson of this block asks whether a difference of 4 mg/dL should change anything for a patient. The flag cannot see a 4 mg/dL difference at all unless it happens to cross the line.

**Notice what the pairing costs too.** The strongest form of this study compares each participant's own later-dinner mornings with their own earlier-dinner mornings, which is a paired structure. On the measured scale, every participant contributes a change in mg/dL. On the flag, anyone who stays on the same side of 126 in both conditions contributes nothing, whether their reading moved by 1 mg/dL or by 25.

**Check the three-band version.** The record system could instead store three ordered bands, below 100, 100 to 125, and 126 and above, and number them 1, 2, and 3. That column is ordinal, and the temptation returns in its usual disguise: a mean band of 2.4 would be a fact about the numbering, since nothing establishes that the step from the first band to the second is the same size as the step from the second to the third. The band widths are not even equal in mg/dL, and the top band has no upper limit.

## The decision, and when the flag wins

Record the measurement. Derive the category whenever a question needs it. A category can always be made from a number, and a number can never be recovered from a category, so the choice is not symmetric and it is made once, at collection.

The flag is the right column when the flag is the question. A service asking how many readings met a predeclared monitoring cut point wants a count and a proportion, and a mean in mg/dL would not answer it. What the team must avoid is storing only the flag and later asking a question that needs the number.

So the answer to the proposal is a qualified no. The study can survive it, in the sense that a proportion comparison remains possible. The question it was designed to ask, about how the morning reading moves with dinner timing, cannot be asked of a column that has thrown the movement away.

The next outcome in this block, tables and graphical displays, takes these same columns and asks what the data look like before any summary at all.

:::{source-note}
:claims: claim-variable-type-taxonomy, claim-level-constrains-summary, claim-ordinal-codes-lack-spacing
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

Three methods sources support the variable families, the summaries each level sustains, and the point that ordered bands carry rank without a measurable distance. Everything about the study itself, including the six readings, the 126 mg/dL teaching cut point, and the record-system proposal, is invented. The cut point carries no clinical interpretation in this lesson.
:::
