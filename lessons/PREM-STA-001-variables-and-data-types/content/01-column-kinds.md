# Two averages, one of them meaningless

The dinner-timing study is finished. Sixty adults with type 2 diabetes kept a two-week record of when they ate their evening meal, when they went to bed, and what their meter read the next morning before breakfast. The file that comes back has six columns and sixty rows.

A colleague opens it, highlights every column that holds digits, and asks the spreadsheet for an average. Two of the answers are:

> mean sex = 1.4
>
> mean adherence = 2.7

Everyone spots the first one. Sex was typed as 1 for female and 2 for male, so an average of 1.4 says only that the study enrolled more women than men, and it says that badly. The second answer raises no alarm at all. It carries a decimal point, it sits inside the range the protocol allows, and it would reach a slide with nobody asking a question.

Both numbers came out of the same operation on the same kind of storage. Deciding whether the second one is any better than the first is what this lesson is for.

## What the study actually recorded

Here is the file, described one column at a time.

| Column | One example value | What the value is doing |
| --- | --- | --- |
| Participant | `P07` | naming a person so their rows can be found again |
| Sex | `1` (female) or `2` (male) | naming which of two groups the person is in |
| Dinner time | `2.6` | how many hours before sleep the evening meal ended |
| Fasting glucose | `132` | the next-morning meter reading in mg/dL |
| Adherence | `3` | the protocol's 1-to-4 rating of how closely the person followed the schedule, where 1 is *rarely*, 2 is *sometimes*, 3 is *usually*, and 4 is *always* |
| Nights recorded | `9` | how many nights of usable data that person contributed |

Five of those six columns hold digits. Only three of them hold numbers in the sense that lets you add, subtract, or average.

## Retrieve what you already call a variable

:::{check}
:id: check-prior-variable-sense
:kind: retrieval

[Variables and controls (PREM-SCI-003)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-003) sorted the parts of a comparison into three roles: the independent variable, which is the factor deliberately set differently; the dependent variable, which is the response recorded; and the controlled variables, which are the conditions held alike.

From memory, put dinner time and fasting glucose into two of those roles. Then answer a harder question: does that sorting tell you whether it is legitimate to average either one?
:::

Dinner time is the independent variable and fasting glucose is the dependent variable, so the earlier lesson's roles apply cleanly here. They apply to sex and adherence too, as background characteristics. What they do not settle is the second question. A role tells you what job a column does in the study's reasoning. It says nothing about what arithmetic the column's values will tolerate.

That second property has its own name. The **level of measurement** of a column is what its values can support, and it is fixed by how the values were produced, not by how they are stored.

## Four kinds of column

Sort every column into one of two families first.

A **categorical** column puts each row into a group. The value is a label. Categorical columns divide again by whether the groups have an order:

- **Nominal** groups have no inherent order. Sex, blood group, admitting ward, and the participant identifier are all nominal. You can rearrange the list of groups in any order you like and lose nothing.
- **Ordinal** groups rank. Adherence runs from *rarely* up to *always*; triage levels run from most urgent to least; a tumour stage runs from I to IV. Rearranging the list destroys real information, because the order was part of what was recorded.

A **quantitative** column holds a number on a measurement scale, so the gap between two values is itself a quantity. Quantitative columns divide by which values can occur:

- **Discrete** columns admit only separated values, most often whole counts. Nights recorded is discrete: a person contributed 9 nights or 10 nights and nothing in between.
- **Continuous** columns admit any value inside a range, and the only limit is how finely the instrument reports. Dinner time and fasting glucose are continuous. Between 2.6 hours and 2.7 hours there is a real 2.63, whether or not anyone wrote it down.

:::{definition}
:id: definition-column-families
:label: The four kinds in one line each

- **Nominal:** labelled groups, no order. Example: sex.
- **Ordinal:** ranked groups, order but no known spacing. Example: the 1-to-4 adherence rating.
- **Discrete quantitative:** counted amounts, separated values, known spacing. Example: nights recorded.
- **Continuous quantitative:** measured amounts, any value in a range, known spacing. Example: fasting glucose in mg/dL.
:::

## The test is not "does it look like a number"

Four of the six columns store digits, and the digits mean four different things.

Ask what happens when someone changes the code. Recoding sex as 0 and 1 rather than 1 and 2 changes nothing about any patient, and it changes the average. Recoding adherence as 1, 2, 3, 10 leaves every person ranked exactly where they were, and it also changes the average. Recoding nights as anything other than the actual count is not recoding at all; it is an error, because 9 means nine nights and the gap from 9 to 10 is one night no matter who reads the file.

That is the working test. For each column, ask: **is the distance between two values a fixed, knowable amount?** When the answer is yes, arithmetic on those values reports something about the patients. When the answer is no, arithmetic reports something about whoever chose the codes.

Sex fails the test outright, because its values were never ordered. Adherence fails it in a quieter way, which is why the 2.7 survived. The next scene works out what each level does permit.

:::{source-note}
:claims: claim-variable-type-taxonomy
:sources: source-ali-bhaskar

A methods review written for clinical researchers supports the split between qualitative and quantitative variables, the discrete and continuous division, and the ordered scales of measurement from nominal upward. Names differ between fields: what this lesson calls categorical is often called qualitative, and what it calls quantitative is often called numerical. Expect to meet both. The dinner-timing file and the recoding test are this lesson's own inventions.
:::
