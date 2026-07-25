# Sixty rows, and nothing summarised yet

The dinner-timing study spent eleven lessons being designed. Now the file exists: sixty rows, one per adult with type 2 diabetes, and columns that were argued over long before anyone collected a number. Hours between dinner and sleep. Next-morning fasting glucose in mg/dL. Sex. An adherence rating from 1 to 4. How many nights each person actually recorded.

A spreadsheet will average any column in two seconds. Fasting glucose averages 142 mg/dL.

That number is correct and it settles almost nothing. It is equally consistent with sixty people clustered tightly around 142, with thirty people near 110 and thirty near 174, and with fifty-nine people near 138 plus one person at 380. Those are three different clinics with three different problems, and 142 describes all of them.

So the first job with a new dataset is not to summarise it. It is to look at it in a way that would show you if something surprising were there.

## What you will be able to do

By the end of this lesson you will be able to pick a display that matches the kind of variable and the question being asked; read a histogram for shape, centre, spread, outliers, and separate groups; read a scatter for the direction and strength of a relationship between two measurements; decide when a table serves a reader better than any picture; and name what a truncated axis or a badly chosen bin width has done to a chart someone else drew.

## Bring forward two things you already have

:::{check}
:id: check-prerequisite-columns
:kind: diagnostic

Take three of the study's columns: fasting glucose in mg/dL, sex recorded as female or male, and adherence rated 1 to 4.

For each one, say whether the values are categories or quantities, and whether the gaps between neighbouring values mean anything. Then say which of the three you could sensibly take an average of.

Separately, from your work on graphs: what do the two axes of a plot have to tell you before you can read a single point off it?
:::

Fasting glucose is a quantity measured on a scale where the distance from 130 to 140 means the same as the distance from 150 to 160, so an average makes sense. Sex as recorded here is a category with no order, so an average is meaningless; counts are what you can report. Adherence is ordered but the step from 1 to 2 is not guaranteed to match the step from 3 to 4, which is why averaging it is a judgment call rather than an automatic move. An axis has to state what is being measured, in what unit, and where its scale starts and stops. That last part carries more weight in this lesson than you might expect.

:::{callout}
:kind: recovery

## Recovery route

If the category-versus-quantity split felt shaky, return to the preceding lesson on variables and data types and come back when you can label a column without hesitating. If it was the axes, [Read the rule, audit the graph](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-007) covers what an axis has to declare. You do not need a score from either lesson to continue here.
:::

## What this lesson does not do

You will not calculate a mean, a standard deviation, a correlation coefficient, or a p-value. Those arrive in the lessons that follow, and they arrive in better shape if you have already seen the data. You will also not decide whether later dinners cause higher glucose. A picture of two measurements moving together is evidence about a pattern and says nothing on its own about what produced it.

**Teaching example, not medical advice.** The sixty-person cohort in this lesson is invented for teaching. Its values were constructed to be internally consistent across this block of lessons. Nothing here reports a finding about real patients or supports any change to anyone's care.

## Accessibility and alternatives

A lesson about pictures has to work for a reader who is not using them. Every chart here carries a written description and the numbers behind it as a table, and each one opens under "Read the chart as text". Those numbers are the same numbers the picture was drawn from, so nothing that matters appears only in the drawing.

Where a chart makes a teaching point, the surrounding prose states the point in words and gives the counts it rests on. No question in this lesson asks you to judge a colour, hover over a point, drag anything, or estimate a length by eye when the exact value is available. Reading the data table instead of the chart is a complete route through the lesson. The frequency tables also answer a reader who cannot resolve small differences between bars: where the picture is ambiguous, the table decides.

:::{source-note}
:claims: claim-histogram-shows-distribution-features, claim-chart-choice-follows-question
:sources: source-nist-histogram, source-af-charts

These sources support the claim that a display of a distribution reports features a single summary value does not, and that the choice of display follows from the kind of relationship being shown. The cohort, its columns, and its values are original teaching material.
:::
