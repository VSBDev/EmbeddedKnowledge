# A difference with no "per" in it

A woman in the diabetes clinic has read that eating late is bad for her morning sugars. She eats at ten and goes to bed at eleven. She wants to know what happens if she moves dinner to eight.

The study these lessons have been analysing cannot answer her. It compared two groups: thirty people who left three hours or less between dinner and sleep, and thirty who left more. The later-dinner group averaged 9.0 mg/dL higher. That number is a difference between two piles of people. Her question asks for a rate, and a rate needs a "per" on the end of it. Nine milligrams per decilitre per *what*?

Splitting sixty people at three hours also throws away most of what was recorded. Someone who left 0.8 hours and someone who left 3.0 hours went into the same pile. So did someone at 3.2 hours and someone at 6.5. The interval was measured to a tenth of an hour, and the comparison kept a single yes-or-no fact from it.

This lesson puts the whole interval back on the axis and draws a straight line through the cloud. The line has a slope, the slope carries units, and those units are milligrams per decilitre per hour. That gives an answer with the same shape as her question, which is progress, and it is not the same as an answer she can act on. Holding those two things apart is most of the work here.

## What this lesson establishes, and what it does not

You will be able to fit a straight line to paired measurements, read its slope and intercept in the units of the data, compute what the line missed for any particular person, judge how much of the variation the line accounts for, and say where the line stops being usable.

You will not be able to conclude that moving dinner earlier *causes* lower fasting glucose. A fitted line describes a pattern in sixty people. Whether that pattern reflects an effect of dinner timing is a separate question with its own machinery, and the earlier lesson on [correlation and causation](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-SCI-007) owns it. This lesson keeps returning to that boundary because a drawn line is unusually good at making people forget it.

:::{callout}
:kind: boundary

The sixty-person cohort running through these lessons is an illustrative teaching dataset, invented so the arithmetic can be followed end to end. It is a **teaching example, not medical advice**, and nothing here supports a recommendation about meal timing for any real person.
:::

## A word that means something else here

**Regression** is an unhelpful name and you are stuck with it. In ordinary speech, to regress is to slide backwards: a patient regresses, a skill regresses. The statistical word carries none of that. It is a historical label for a family of methods that fit an equation describing one measured quantity from one or more others. The quantity being described is the **response**; the quantities it is described from are the **predictors**. Because the fit is built from data that scatter, the equation is always understood to come with an admission that individual observations will sit off it, and how far off is a question this lesson spends a whole section on. When a paper says the authors ran a regression, read it as "they fitted a line, or something close to one". Nobody deteriorated.

Two other everyday words also take on a technical sense here, and both are flagged where they arrive: a **model** in this lesson is a fitted equation and not an account of a mechanism, and a **residual** is a leftover distance on a graph and not something left over in a patient. One ordinary word is used without warning throughout, so here it is: a **cohort** is just the group of people a study followed, in this case the same sixty adults every time.

## What you need before starting

:::{check}
:id: check-prerequisites
:kind: diagnostic

Answer these from earlier lessons before going on.

1. A straight line is written {math}`y = a + bx`. If {math}`x` goes up by one, what happens to {math}`y`?
2. In the scatter of the sixty people, the interval is on the horizontal axis. Does a *later* dinner sit towards the left or the right?
3. The cohort's fasting glucose has a mean of 142 mg/dL and a standard deviation of 18 mg/dL. In rough terms, what does the 18 tell you?
:::

The first answer is that {math}`y` changes by {math}`b`, the slope, which is why the slope is the number carrying a rate. The second is towards the left: the axis counts hours *between* dinner and sleep, so a later dinner leaves a shorter interval and sits nearer zero. That convention was fixed when the scatter was first drawn and this lesson keeps it, sign and all. The third is that individual readings sit roughly 18 mg/dL away from 142 on a typical morning, so people differ from one another a good deal more than a group difference of 9.0 mg/dL might suggest.

Hold on to that 18. Later in the lesson the fitted line will be judged by how far it shrinks it, and the answer is a great deal less far than the picture suggests.

:::{callout}
:kind: recovery

## Recovery route

If the first question was uncomfortable, reread the treatment of straight lines and rates of change in [Functions and graphs](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-QNT-007), which is where {math}`y = a + bx` was built. If the third was uncomfortable, the standard deviation is handled in the earlier lesson on [centre and spread](https://embeddedknowledge.io/premed/lessons/read/?lesson=PREM-STA-003). Neither is a reason to stop, both are lighter reading than this lesson, and you can come straight back.
:::

## Accessibility and alternatives

Both plots open under "Read the chart as text", where you get a written description and a table of every number the picture was drawn from. Nothing in this lesson lives only in a drawing: where the text says the cloud drifts downwards, the fitted numbers behind that sentence are always given too, and every residual discussed appears as a figure you can check. No task asks you to judge a colour, hover, drag, estimate a length by eye, or use your own health data.

:::{source-note}
:claims: claim-regression-describes-response-by-predictors
:sources: source-nist-model-terminology

The account of what a regression asserts is drawn from this source, including its point that such a relationship is expected to hold on average across a dataset and not for any individual observation. The clinic question, the cohort, and its numbers were written for this lesson.
:::
