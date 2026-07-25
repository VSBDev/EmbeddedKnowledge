# The average that moves when nothing moves

Back to the 2.7.

The full adherence column, across all sixty participants, looks like this:

| Rating | Meaning | Participants |
| :---: | --- | ---: |
| 1 | rarely | 10 |
| 2 | sometimes | 13 |
| 3 | usually | 22 |
| 4 | always | 15 |

Add the ratings and divide by sixty and you get 2.7 exactly. Two people on the team disagree about whether that number should appear in the write-up. One says it should, because the ratings are ordered and 1 to 4 is a perfectly good numeric range. The other says it should not, and cannot immediately say why.

:::{misconception}
:id: misconception-mean-of-an-ordinal-code
:kind: repair

**Commit first.** Decide now whether 2.7 belongs in the results, and write your reason in one sentence before continuing.

**The model being tested.** If the values are numbers and the numbers are in a sensible order, the mean summarises them. Sex fails that test because its codes have no order. Adherence passes it, so the mean is available.

**What the model cannot explain.** Keep the same sixty people and the same four rungs, and rewrite only the numerals printed on the rungs. Every participant stays in exactly the rating the nurse gave them.

| Numerals used for the four ratings | Resulting mean |
| --- | ---: |
| 1, 2, 3, 4 | 2.7 |
| 1, 2, 3, 3.2 | 2.5 |
| 1, 2, 3, 10 | 4.2 |

Nobody moved. Nobody was re-rated. The ranking of the four ratings is identical in all three rows. The mean travels from 2.5 to 4.2 anyway, so the mean is answering a question about the printing rather than about adherence.

Run the same test on the median. Sort all sixty values and the thirtieth and thirty-first both fall in *usually*, in every one of the three codings, because sorting only ever used the order. Run it on the share rated *usually* or better: 37 of 60, or about 62 per cent, in all three. Those summaries survive because they use only what the rating actually recorded.

**A more adequate model.** A mean is a balance point along a scale, so computing one commits you to a claim about distance: that the step from *rarely* to *sometimes* is the same size as the step from *usually* to *always*. The four-point rating never established that. It established an order and stopped. What a mean needs, ordinal values do not supply.

**The two models on the same case.** Here are both write-ups of the identical column.

> Mean adherence was 2.7.

> The median rating was *usually*. Thirty-seven of sixty participants, about 62 per cent, were rated *usually* or better, and ten were rated *rarely*.

The second version is longer, and it tells the team something the first hides completely: ten people barely followed the schedule. If those ten are removed or handled separately, every later result changes. In 2.7 they are invisible.

**Recheck on two new cases.** One of these repeats the error and one does not.

1. The same file reports a mean of 10.4 nights recorded per participant.
2. A cancer registry reports a mean stage of 2.3, from stages I to IV coded 1 to 4.

Decide both before reading the next paragraph.

The first is sound. Ten nights and eleven nights differ by one night, the same amount everywhere on the scale, so the balance point is a real quantity and 10.4 nights is a statement about the participants. The second repeats the adherence error exactly. Stages I to IV rank, and the gap between stage I and stage II is not the same clinical distance as the gap between stage III and stage IV. The numerals 1 to 4 are a filing convenience.

Some fields sum several ordered items into one total and then treat the total as a measured scale. That step is an assumption someone has to defend for the particular instrument. It is a decision about the analysis rather than a property the individual ratings establish on their own.
:::

## Why this one is worth guarding against

The sex code is a harmless mistake because it announces itself. Nobody reads "mean sex = 1.4" and nods.

An ordinal code produces a number that looks exactly like a measurement. It has a plausible range, it moves in the direction you would expect when adherence improves, and it can be tracked across clinics and quarters. Nothing about its appearance flags the problem. The only way to catch it is at the point where the column is classified, which is before any analysis begins.

That is why this lesson sits first in the block. Every summary, interval, and test that follows inherits the classification made here.

:::{check}
:id: check-code-invariance
:kind: retrieval

A hospital rates patient-reported nausea as none, mild, moderate, or severe, stored as 0 to 3. Two wards report their quarterly figures.

- Ward A reports a mean nausea score of 1.2.
- Ward B reports that 68 per cent of patients recorded none or mild, and that the median was mild.

Which report survives a change in the storage codes, and what would you have to know about the rating before Ward A's figure could be defended?
:::

### Feedback after your attempt

Ward B's report survives. Percentages in named categories and a median category depend only on which rung each patient was placed on, so recoding none, mild, moderate, and severe as 1 to 4, or as 0, 1, 2, 5, leaves both figures untouched.

Ward A's mean would need evidence that the steps between the four descriptions are equal in whatever nausea is being measured. That evidence would have to come from work on the rating instrument itself, not from the fact that someone stored the answers as 0 to 3.

:::{source-note}
:claims: claim-variable-type-taxonomy, claim-level-constrains-summary, claim-ordinal-codes-lack-spacing
:sources: source-ali-bhaskar, source-mishra-descriptive, source-sullivan-artino

A medical-education methods paper supports the point that ordered response categories can be ranked while the distance between them is not measurable, and that a median and category frequencies suit such data while means and standard deviations belong to scales with measurable differences. Two clinical-research methods papers support the variable families and the summaries each sustains. Published practice is not uniform on the last paragraph above: some fields do analyse a summed set of ordered items as a measured scale, and whether that holds up depends on evidence about the particular instrument rather than on a general rule. The adherence counts, the recodings, and the ward figures are invented.
:::
