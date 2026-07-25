# One study, one number, and the question it leaves open

The dinner-timing study has finished counting. Thirty adults with type 2 diabetes ate late, thirty ate earlier, and the late group's next-morning fasting glucose came out 9.0 mg/dL higher.

Nine milligrams per decilitre. That is the whole result, and by itself it is close to useless.

The previous lesson explained why. Run the same study again on thirty new pairs of people and the difference will not be 9.0. It might be 5. It might be 14. It might come out negative. The estimate carries a standard error, and for this design that standard error is 4.13 mg/dL, which is large compared with the 9.0 sitting on top of it.

So a reader of this study is stuck with a fair question. The study saw 9.0. What could the truth be?

A confidence interval is the answer people actually publish. It converts one estimate into a range of values the sample is compatible with, and it does that with arithmetic you already have.

Medicine asks for that range as a matter of routine. The international guidance that regulators in Europe, Japan and the United States apply to clinical trials says that estimates of treatment effects should be accompanied by confidence intervals whenever possible, and that the protocol should say in advance how they will be worked out. A trial that reported only its point estimate would be an incomplete trial.

## What you will be able to do

By the end of this lesson you will be able to:

- build a confidence interval from an estimate and its standard error;
- say what a stated confidence level claims, and what it does not;
- predict how the interval's width responds to the standard error, to the number of people, and to the level you pick;
- read a published interval by checking where it sits against the value that would mean no effect, and by describing what its width leaves open.

## Bring forward two things from the previous lesson

:::{check}
:id: check-prerequisite-standard-error
:kind: diagnostic

Without looking anything up, answer these two.

First: the standard error of the difference in this study is 4.13 mg/dL. What does that number describe? Say what would have to happen, physically, for you to observe the spread it measures.

Second: the study has 30 people in each group and a within-group standard deviation of 16 mg/dL. If a new team ran the same study with 120 people in each group, would the standard error go up, go down, or stay the same, and roughly by how much?
:::

The standard error describes the spread of the estimate itself. If you repeated the whole study many times over, drawing fresh people each time from the same population and running the same 30-and-30 design, the differences you got would scatter around the true difference. The standard error is the standard deviation of that scatter. Nobody repeats a study a thousand times, which is why the standard error is computed from a formula instead of observed.

More people shrinks it. The count sits under a square root, so four times the people cuts the standard error in half: from 4.13 mg/dL to about 2.07. That fact does a lot of work later in this lesson.

:::{callout}
:kind: recovery

## Recovery route

If either answer felt like a guess, go back to the lesson on sampling distributions and standard error before continuing. Everything here is built on top of it, and the arithmetic will feel arbitrary without it. You do not need a score from that lesson to come back; you need the picture of one estimate scattering around a fixed truth.
:::

## What this lesson does not do

You will not test a hypothesis, compute a p-value, or decide whether a result counts as a finding. The next lesson takes that route through the same data, and the two descriptions agree by construction. You will also not judge whether a 9.0 mg/dL difference matters to a patient. That is a clinical question, the block's final lesson is built around it, and confusing it with the statistics is one of the commonest errors in reading medical evidence.

**Teaching example, not medical advice.** Every cohort, trial, clinic, and threshold in this lesson is invented for teaching. Nothing here reports a finding about real patients or supports any change to anyone's care.

## Accessibility and alternatives

The lesson's quantitative representations are equations and Markdown tables, and every important relationship is also stated in words. No question asks you to estimate a width by eye, distinguish values by colour, drag an object, or depend on a timed reveal.

The arithmetic is the kind you can do on paper: one multiplication and two additions per interval. Every multiplier is printed in the text where it is used, so you never need a statistical table beside you. Limits are given to one decimal place throughout, which occasionally puts a printed width 0.1 away from twice the printed margin of error; the worked example says where that comes from.

:::{source-note}
:claims: claim-ich-e9-report-ci
:sources: source-ich-e9

This source is the international guidance on statistical principles for clinical trials adopted as guidance for industry by the US Food and Drug Administration. It supports the statement that estimates of treatment effects should be reported with confidence intervals wherever possible and that the method of calculation should be identified in advance. The cohort and its numbers are original teaching material.
:::
