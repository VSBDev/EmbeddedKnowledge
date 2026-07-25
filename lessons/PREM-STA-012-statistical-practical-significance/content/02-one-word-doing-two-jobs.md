# One word doing two jobs

Ask someone outside a statistics class what a significant difference is and you will get an answer about size. A significant pay rise is a large one. A significant delay is one you notice. In ordinary English the word means *big enough to matter*, and that meaning is old, stable, and useful.

Statistics borrowed the word in the early twentieth century for a completely different job, and the two meanings have been colliding ever since.

## What the technical phrase actually claims

:::{definition}
:id: definition-statistical-significance

A result is **statistically significant** at a stated level when the *p*-value computed from the data falls at or below a cut-off chosen in advance.

The *p*-value measures how compatible the data are with one specified statistical model, the one containing the null value together with every other assumption the calculation needs. A small value says the data sit awkwardly with that whole model.

The label therefore reports one thing: where a number computed from the data landed relative to a line drawn beforehand.
:::

Read that definition again and notice everything it has no room for. It says nothing about how big the difference is. It says nothing about whether the difference would change a decision. It says nothing about who would benefit or by how much. Those quantities never enter the calculation, so no arrangement of the output can return them.

The association of professional statisticians that publishes principles on this puts the point directly: a *p*-value, or statistical significance, does not measure the size of an effect or the importance of a result.

## Why the shared spelling does damage

The everyday sense carries importance and nothing else. The technical sense carries a threshold comparison and nothing else. When a paper reports "a statistically significant improvement" and a reader's ear supplies the everyday meaning, the reader has acquired a belief about magnitude that the study never offered.

This block has a rule about that, and it has been in force since lesson 01. The word *significant* appears here only in its technical sense, always with *statistically* attached. When the everyday job needs doing, plain words do it: large, small, worth acting on, too small to notice.

The second question deserves a name of its own, so that it can be asked out loud instead of arriving smuggled inside the first one.

:::{definition}
:id: definition-practical-significance

An effect has **practical significance** when it is large enough to change a decision that someone is actually facing.

Deciding that takes three things the statistical machinery cannot supply: the effect estimate in the units of the decision, a threshold saying how much would be enough, and a judgement about the cost of acting. Only the first comes out of the analysis.

Practical significance is sometimes called clinical significance or clinical importance when the decision is a clinical one. All three names point at the same question, and none of them is settled by a *p*-value.
:::

The two kinds of significance can occur in any combination. A result can have both, either one alone, or neither, and the rest of this scene shows how easily the two come apart.

## The size of the study is the lever

The clearest way to see that the two senses are unrelated is to move one while holding the other still. Take the dinner-timing comparison and change only the number of people in it.

Three versions, all with the same within-group spread of 16 mg/dL.

| Version | Per group | Difference | Standard error | *p* | 95% interval |
| --- | --- | --- | --- | --- | --- |
| Half-size pilot | 15 | 9.0 mg/dL | 5.84 | 0.12 | −2.5 to 20.5 |
| The study you have | 30 | 9.0 mg/dL | 4.13 | 0.029 | 0.9 to 17.1 |
| Large replication | 600 | 2.0 mg/dL | 0.92 | 0.030 | 0.2 to 3.8 |

Read the first two rows together. The difference is identical at 9.0 mg/dL. Doubling the group size shrinks the standard error from 5.84 to 4.13, and the *p*-value falls from 0.12 to 0.029. The pilot and the full study disagree about statistical significance while agreeing exactly about the size of the effect they found.

Now read the last two rows together. The large replication found a difference of 2.0 mg/dL, less than a quarter of 9.0, and it produced a *p*-value of 0.030, which sits within a thousandth of the full study's 0.029. A difference four and a half times smaller cleared the same bar, because 1200 people were measured instead of 60.

Here is that replication drawn out.

:::{chart} ../charts/larger-study-smaller-difference.chart.json
:::

The shaded band excludes zero, so the result is statistically significant at the conventional level. The band is also entirely below 5 mg/dL, and 3.8 mg/dL is the largest difference the data are compatible with. Both statements are true of the same study at the same time.

Push the arithmetic further and the point becomes hard to escape. With this spread, a difference of 1.0 mg/dL would clear the 0.05 line in a trial of about 1970 people per group, and a difference of 0.5 mg/dL would do it with about 7870 per group. Those are large trials and they get run. Statistical significance is reachable for almost any non-zero difference if you recruit enough people.

The same lever runs the other way. Methodologists cataloguing the standard misreadings put both halves plainly: when a study is large, very minor effects can produce statistically significant tests, and when a study is small, even large effects can be drowned in noise and fail to be detected.

:::{misconception}
:id: misconception-smaller-p-bigger-effect

**The belief.** A smaller *p*-value means a larger effect, so a result at *p* = 0.001 has found something bigger than one at *p* = 0.04.

**Why it fails.** The test statistic is the difference divided by its standard error. Two quantities go in and one comes out, and the output cannot be taken apart again. A tiny difference measured very precisely and a large difference measured roughly can return the same number.

**The discriminating case.** Compare the half-size pilot with the large replication in the table above. The pilot found 9.0 mg/dL at *p* = 0.12; the replication found 2.0 mg/dL at *p* = 0.030. The study with the smaller *p*-value found an effect four and a half times smaller. If *p* tracked magnitude, that pair could not exist.

**The test.** Whenever you find yourself ranking two findings by their *p*-values, write the two effect sizes and the two standard errors on the same page. If the ranking survives, it was the effect sizes doing the work.
:::

## Where this leaves the consultant

Everything in this scene is negative work. It clears away a reading of the result line that would have answered the consultant's question falsely.

What it has not done is answer his question. He still needs to know whether 9 mg/dL is a lot of glucose. The next scene is about where a number like that comes from.

:::{check}
:id: check-two-senses

A colleague says: "The replication is the stronger finding. It got *p* = 0.030 with a much tighter interval, so the effect is better established and therefore more clinically relevant."

Two of those three clauses are fine. One is doing something the data cannot support. Which, and why?

Answer. The tight interval is real: 0.2 to 3.8 is a precise result and the replication has pinned its effect down well. "Better established" is defensible in the sense that the study has narrowed the range of compatible values. The last clause fails. The replication established that the difference is somewhere between 0.2 and 3.8 mg/dL, which is a statement that the effect is *small*. Precision and importance move independently, and here the precise study is the one that ruled the larger effects out.
:::

:::{source-note}
:claims: claim-significance-is-model-compatibility, claim-significance-not-importance, claim-size-decides-significance
:sources: source-asa-p-value-statement, source-p-value-misinterpretations

The association's principles support two of the statements above: that a *p*-value indicates how incompatible data are with a specified statistical model, and that neither a *p*-value nor statistical significance measures the size of an effect or the importance of a result. The methodological guide supports both halves of the sample-size point, that minor effects reach statistical significance in large studies and that large effects can miss it in small ones. The three versions of the study, their arithmetic, and the 4000-per-group figure are this lesson's own computations on invented data.
:::
