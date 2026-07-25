# Clinical wrap-up: what the clinic decides on Thursday

The five readings in scene 1 were not an academic exercise. They were the opening of a meeting, and the meeting has to end with somebody deciding what the clinic tells patients.

This is where the lesson's tools get used for the job they exist for.

:::{callout}
:kind: boundary

**Illustrative teaching example, not medical advice.** The dinner-timing study, the clinic, and everyone in the meeting are invented for this course. Nothing here is guidance about when any person should eat, and no reader should change anything about their own care on the strength of it.
:::

## The question on the table

A diabetes clinic runs a standing education session. Someone proposes adding a line to it: *eat your evening meal earlier, and leave a longer gap before sleep*. The evidence offered is the study: 60 adults, a difference of 9.0 mg/dL in mean fasting glucose, *p* = 0.029.

Four questions have to be answered before anyone can decide, and the first three are this lesson's business.

## First: what does 0.029 license the clinic to say?

The correct sentence, and the only one the arithmetic supports: if dinner timing made no difference to fasting glucose, and if the study's other assumptions held, then a difference at least 9.0 mg/dL from zero would show up in about 29 of every 1000 studies run like this one.

That sentence licenses one conclusion. The data sits awkwardly against a model in which dinner timing does nothing. It does not license the registrar's 2.9 per cent, the dietitian's 97 times in 100, or any sentence in which the words "probability that" are followed by a claim about dinner timing.

## Second: how large is the effect, and how well pinned down?

The *p*-value has nothing to contribute here, so put it aside and read the other two numbers.

The estimate is 9.0 mg/dL. The 95 per cent interval runs from 0.9 to 17.1 mg/dL. The clinic should look hard at both ends of that interval, because they represent effect sizes that differ nearly twenty-fold.

This lesson has not established the clinical importance of either 0.9 mg/dL or 17.1 mg/dL, and it has not established how either compares with day-to-day variation in an individual. The interval says only that the data remain compatible with values across that wide statistical range. Judging what any value in the range would mean for care belongs to **PREM-STA-012**.

That width is the honest finding, and it is what a *p*-value of 0.029 conceals when it is reported alone. The consultant in scene 1 was reaching for the right question and using the wrong number to answer it.

The interval and the *p*-value are also, as scene 3 established, one piece of evidence rather than two. The meeting cannot count the interval excluding zero as independent support for the test result.

## Third: does the design carry the weight the number implies?

A *p*-value is computed under the whole model, so the meeting has to ask what else was in it. Scene 2 listed the assumptions; here they turn into questions with names attached.

Were participants allocated to early and late dinners, or did they choose? If they chose, the comparison is observational, and everything **PREM-SCI-007** said about confounding applies. People who eat early may differ in shift work, in age, in what else they do in the evening.

Was the glucose measurement blind to group? **PREM-SCI-005** covers why that matters, and **PREM-SCI-006** covers whether a single fasting reading is a reliable enough measurement to build on.

Were the nights handled properly? Each person contributed between 5 and 14 nights, so the study holds several hundred readings and only 60 people. The standard error of 4.13 was built from 30 people per group, which is the right count only if each person's nights were first averaged into a single value for that person. Had every night been entered as a separate independent observation, the denominator would have run into the hundreds, the standard error would have come out far too small, and the *p*-value with it. Readings from one person on consecutive nights resemble each other, and counting them as independent manufactures precision the study never had.

Was this the only comparison run? If sex, adherence, and age bands were also tested and this one was written up, the 0.029 is being read out of a context it was not computed in. **PREM-STA-009** takes that up properly.

None of these questions can be answered by looking at 0.029. Each of them changes what 0.029 means. A well-designed study and a badly designed one can produce the same *p*-value, and the number itself gives no signal about which one you are holding.

## Fourth: the question this lesson hands on

Suppose the study survives all three examinations. The difference is real enough to take seriously, somewhere between 0.9 and 17.1 mg/dL, from a design that holds up.

Should the clinic change what it tells patients?

That question is not statistical. It weighs how much a fasting glucose change of that size matters to a person's health against what it costs to ask people to reorganise their evenings, and against what else the education session could spend that time on. No test in this lesson reaches it. **PREM-STA-012** is where the block takes it up, and the block ends there because that is where the arithmetic runs out and clinical judgement starts.

## What the meeting should minute

The defensible summary, using every tool from this lesson:

> Mean fasting glucose was 9.0 mg/dL higher after a late dinner (95 per cent interval 0.9 to 17.1 mg/dL; *p* = 0.029, alpha set at 0.05 in advance). The interval and the *p*-value describe one result and agree by construction. The study is compatible with a wide range of effect sizes. The report does not state how participants came to be in each group or how repeated nights were handled, so confounding and overstated precision cannot be excluded. The clinical importance of a change in this range has not been assessed, and this hypothesis-testing analysis alone does not determine whether the education session should change.

Every clause in that paragraph is something this lesson taught you to write. It ends at the boundary the four readings in scene 1 crossed: the test result alone does not make the clinical decision.

:::{source-note}
:claims: claim-null-hypothesis-definition, claim-p-value-definition, claim-p-not-hypothesis-probability, claim-p-not-effect-size, claim-ci-test-correspondence, claim-p-value-assumes-whole-model
:sources: source-asa-p-value-statement, source-p-value-misinterpretations, source-eom-statistical-hypotheses

The association's statement of principles and the methodological guide support the correct reading used in the first question, the rejection of the inverted reading, the separation of the probability from the size of an effect, the correspondence between the interval and the test, and the point that the probability is computed under every assumption in the model, so that design failures enter the calculation as assumptions rather than as anything the number can report. The encyclopedia entry supports the hypothesis framing carried through the meeting. The study, the clinic, the participants, and every number are invented for teaching.
:::
