# Transfer: a quality report that needs rewriting

An emergency department's quality-improvement group has drafted a slide. The department and its figures were invented for this exercise.

Their file holds four columns for every attendance in a quarter.

| Column | What it holds |
| --- | --- |
| Triage level | 1 to 5, assigned at the door, where **1 is the most urgent** and 5 the least |
| Pain score | 0 to 10, the patient's own answer to a standard numeric rating question |
| Door to clinician | minutes from arrival to first clinician contact |
| Disposition | admitted, discharged, or transferred |

The draft slide makes two moves. First it reports that "average triage level improved from 3.1 last quarter to 2.8 this quarter." Second it asks for a single **acuity index** for each patient, to be built by averaging that patient's triage level and pain score.

:::{check}
:id: check-triage-transfer
:kind: transfer

Work all four before reading the response.

1. Classify each of the four columns.
2. Say whether the sentence about 3.1 and 2.8 is interpretable, and give every reason it is not, if it is not.
3. Say whether the acuity index can be built as described.
4. Write two or three lines the group could put on the slide instead, using only what these columns support.
:::

## Compare your answer

**1. The columns.** Triage level is categorical and ordinal: five ranked urgency bands with no measured spacing between them. Disposition is categorical and nominal: three named outcomes with no order. Door to clinician is quantitative and continuous on a ratio scale, since a minute is a minute and zero minutes would mean immediate contact. Pain score is the awkward one and is treated below.

**2. The sentence has two separate problems.** The first is the one this lesson has been drilling: triage level is a rank, so an average of the numerals 1 to 5 moves whenever someone renumbers the bands, and 3.1 and 2.8 are statements about the numbering scheme.

The second problem is new. Suppose for a moment that the mean were legitimate. On this scale, lower means more urgent, so a fall from 3.1 to 2.8 describes a sicker set of arrivals. Triage level records who walked through the door. It is not a measure of anything the department did, so no movement in it can be an improvement or a decline in the service. A number can be arithmetically defensible and still answer a different question from the one on the slide.

**3. The acuity index cannot be built that way.** Averaging triage level with pain score adds a rank code to a rating and divides by two, which requires that one triage band and one point of pain be the same size of thing. Nothing has established the size of a triage band, nothing has established the size of a pain point, and no work has been done to put the two on a common scale. The two scales also run in opposite directions. A very sick patient scores low on triage and high on pain, so averaging the two would pull the index down and up at the same time and hide exactly the patients it was meant to find.

Pain score itself deserves a sentence. Zero to ten from a patient is a set of ordered answers, and the numerals do not establish that the step from 2 to 3 is the same amount of pain as the step from 8 to 9. Many services treat these scores as measurements and report means. That is a working convention which someone should be able to defend for the particular instrument. Treating it as ordinal, with a median and a distribution, always remains available and never requires the extra assumption.

**4. A defensible slide.** Report the count and share of attendances in each triage band, this quarter beside last quarter, so a change in the case mix is visible band by band. Report the median door-to-clinician time within each triage band, in minutes, because that is a measured quantity and it is the part the department controls. Report the share admitted, discharged, and transferred. Between them, those three lines say more than the two averages did and none of them depends on the numbering.

## What this lesson set up

The route through the file was short: name what each column is, then let that decide what may be computed.

[Measurement, reliability, and validity (PREM-SCI-006)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-006) asked whether a recorded value deserves to stand for the thing you meant to capture. This lesson asks the next question about the same value: given how it was produced, what arithmetic will it hold still under. A column can be reliable, valid, and still not add up.

Everything after this inherits the answer. Centre and spread only exist for the columns that permit them, and the intervals, tests, and models later in the block all run on quantitative columns whose distances are real. Getting a column wrong here is not caught downstream, because every downstream step will run happily on the wrong classification and return a number.

## Mastery check

The assessment holds four untimed, retakeable items worth twelve points. Attempt each before opening its reasoning. Mastery means all twelve: three for classifying supplied columns with justifications, three for matching summaries to levels and refusing an unsupported one, two for reading paired or independent structure, and four for an integrated audit of a clinical file you have not seen. Missing a criterion routes you to a different context rather than to the same case again.

## Accessibility and alternatives

Every task can be answered in prose, in bullets, or in a table, whichever suits you. You may type, dictate, or use assistive technology, and no upload, image, chart, or spreadsheet software is required. All tables are read in normal reading order and every relationship they carry is also stated in nearby prose. Nothing in the lesson depends on colour, position on a page, dragging, sound, motion, or speed. No task asks for your own health information, medication, or test results, and no clinical contact or laboratory access is needed.

## Recovery route

If the word *variable* still means only the roles from an experiment, return to [Variables and controls (PREM-SCI-003)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-003) and then reread the first scene here, where a column's role and a column's level are separated.

If nominal and ordinal blur, ask whether shuffling the list of groups would destroy anything. Shuffling blood groups loses nothing; shuffling NYHA classes loses the ranking.

If discrete and continuous blur, ask what lies between two neighbouring values. Nothing lies between 9 nights and 10 nights. Something always lies between 130 mg/dL and 131 mg/dL.

If ordinal and discrete blur, which is the hardest pair, use only question 4: is the gap between two neighbouring values a fixed amount you could state. One night is a fixed amount. One triage band is not.

If a mean keeps appearing where it should not, run the recoding test in writing every time before reporting one. When the summary changes and no participant has changed, the summary is not about the participants.

If the interval scale and ratio scale distinction is unclear, return to [Ratios, proportions, and percentages (PREM-QNT-003)](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-003), which sets out both scales and shows why an arbitrary zero blocks a ratio. If you are still stuck after that, ask your course text or instructor rather than pressing on, since the rest of this block builds on this distinction.

:::{source-note}
:claims: claim-level-constrains-summary, claim-ordinal-codes-lack-spacing
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

The department, its quarterly figures, and the acuity-index proposal were written for this exercise. The methods sources support the summaries each measurement level sustains and the point that ordered response categories carry rank without a measurable distance, so an average of their codes assumes a spacing the scale has not supplied. What they do not settle is whether any particular pain-rating instrument has been shown to behave as a measured scale. That is evidence about the instrument, services answer it differently, and this lesson takes no position on it.
:::
