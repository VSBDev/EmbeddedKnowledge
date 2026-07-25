# Two people read one sentence

Here is the result line from the dinner-timing study, written the way a journal would print it.

> Fasting glucose was 9.0 mg/dL higher after a late dinner than after an early one (95% CI 0.9 to 17.1; *p* = 0.029).

Two people read it on the same morning.

The trial statistician reads it and stops. Every question she was asked has an answer now. The estimate is 9.0. The data are compatible with true differences from 0.9 to 17.1. A test of zero returns 0.029, which falls below the level the protocol fixed before recruitment. Her work is finished and it is correct.

The diabetes consultant reads the same line and has not started. He wants to know whether he should say anything different to the person coming into clinic at ten past nine. For that he needs to know whether 9 mg/dL is a lot of glucose or a little. And nothing in that sentence tells him.

That gap is what this lesson is about. It is the last lesson in the block, and it exists because the arithmetic runs out before the decision does.

## The number, in units a person might feel

Nine milligrams per decilitre is about 0.5 mmol/L, the unit used in most of the world outside the United States. Across the whole cohort the mean fasting glucose was 142 mg/dL, about 7.9 mmol/L.

So the study is proposing that moving dinner later shifts a person from roughly 137 to roughly 146 on a morning meter reading. Whether that shift is worth a conversation in clinic is a question about diabetes, about what patients are already being asked to do, and about what else that conversation would displace. It is not a question about *p*.

**Teaching example, not medical advice.** The cohort, the study, the clinic, and every threshold discussed in this lesson are invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care. Two things in this lesson are real and are named where they appear: the American Statistical Association's published principles on *p*-values, and the diagnostic glucose ranges published by the US National Institute of Diabetes and Digestive and Kidney Diseases.

## Three things you should already be able to say

Answer these before going on. Each takes one sentence.

:::{check}
:id: check-prerequisites

1. The interval runs from 0.9 to 17.1. What does that range describe?
2. *p* = 0.029 is a probability. A probability of what?
3. The interval excludes zero and the *p*-value is below 0.05. Are those two separate pieces of evidence?

Answers. (1) The values of the true difference that these data are compatible with, at the 95% level. It describes a range of possible true differences, and it attaches no probability to any of them. (2) The probability, computed while assuming the true difference is zero and the rest of the model holds, of getting a difference at least 9.0 mg/dL away from zero in either direction. (3) No. They are one result written twice, built from the same 9.0 and the same standard error of 4.13.
:::

## Recovery route

If question 1 felt uncertain, go back to **PREM-STA-007** and re-read how the interval was built from 9.0 and 4.13. This lesson does arithmetic on that interval in almost every scene, so a shaky grip there will cost you later.

If question 2 or 3 felt uncertain, go back to **PREM-STA-008**, particularly the scene on where the 0.05 line sits. That lesson introduced the phrase *statistically significant* and marked the collision this lesson takes apart. Rereading it will cost you fifteen minutes and save you the central confusion.

If all three came easily, carry on. Nothing below assumes more than those three answers.

## What this lesson does

By the end you will be able to do four things.

State what the phrase *statistically significant* claims and what it leaves untouched, and rewrite a sentence that has slid from the technical sense into the everyday one. Show why a study's size decides whether a difference clears the conventional bar, so that a difference of no consequence can clear it and a large one can miss it. Say what a minimal clinically important difference is, who fixes it, and why it can never be read off the study's own data. And take an estimate with its interval, lay it against a stated threshold, and say which of five verdicts the study supports.

## What this lesson will not do

It will not tell you whether 9 mg/dL of fasting glucose matters.

That is not evasion. No published number settles it, and inventing one here and dressing it up as settled would teach the exact habit this lesson is trying to break. Whether a difference is worth acting on is fixed by clinicians, patients, and the people who have to live with the consequences, working on the specific outcome, the specific population, and the specific alternatives on the table. What this lesson can give you is the reasoning those people use, and the discipline to notice when a number has been smuggled in without one.

:::{source-note}
:claims: claim-significance-not-importance
:sources: source-asa-p-value-statement

The association's published principles support the position that a *p*-value, or statistical significance, reports nothing about the size of an effect or the importance of a result. That is the gap the consultant runs into above. The cohort, the two readers, and the clinic appointment are invented for this lesson.
:::
