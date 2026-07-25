# Somebody has to choose the number

The consultant's question was whether 9 mg/dL is a lot. Questions of that shape only have answers once something else is fixed: a lot *compared with what*.

Zero is one comparison, and the study has already made it. The interval runs from 0.9 to 17.1 and clears zero, so the data support a difference in the stated direction. That settles whether there is something there. It leaves untouched whether the something is worth anything.

The comparison the consultant needs is a second number on the same axis: the smallest difference that would change what he does. Clinical research has a name for that number and a small literature about how to obtain one.

## The minimal clinically important difference

:::{definition}
:id: definition-mcid

The **minimal clinically important difference** is the smallest change in an outcome measure that patients perceive as beneficial. It is often written MCID, and the terms *minimal important difference* and *minimum clinically important difference* are used for the same idea.

The concept was introduced in the late 1980s by Jaeschke, Singer and Guyatt, who framed it as the smallest difference in score in the domain of interest that patients perceive as beneficial.

It is a property of the outcome, the population, and the people judging. It is not a property of any particular study's data.
:::

Two features of that definition deserve attention before anything is done with it.

The first is the word *patients*. The reference point is what the people with the condition notice and value. A change a laboratory can measure reliably and a change a person can feel are different quantities, and the MCID is anchored to the second one.

The second is that the definition contains no arithmetic. Nothing about a sample size, a standard error, or a *p*-value appears in it. That absence is the whole reason the number has to come from outside the analysis.

## How a threshold is actually obtained

Researchers who set out to estimate an MCID use two broad families of method.

**Anchor-based methods** compare change on the outcome measure with an external standard, an anchor, which is usually something the patient reports and considers meaningful. Ask people whether they feel a little better, about the same, or a little worse, then read off how much the measured score moved in the group who said "a little better". The anchor supplies the judgement about what counts as beneficial, and the measurement supplies the scale.

**Distribution-based methods** work from the statistical characteristics of the scores in a sample, using quantities like the standard deviation of change or the measurement error of the instrument.

The second family looks, at first glance, like a way of getting the threshold from the data after all. It is worth being precise about what it delivers. A distribution-based figure answers a question about detectability: how large a change has to be before it stands clear of measurement noise. That is a useful question and a different one from whether a change matters to the person who has it. Reviews of the field treat distribution-based figures as supporting evidence, most useful when an anchor-based estimate is unavailable or needs a sanity check.

There is no gold-standard method. Different approaches on the same instrument give different numbers, and reviewers of this literature say so plainly.

## The threshold moves with the situation

MCID values are described in the literature as dynamic and context-specific. The same outcome measure applied to different study populations can yield different thresholds. A value estimated for improvement need not match the value for deterioration on the same scale. Age, baseline severity, and what a person's daily life demands all bear on how much change registers as worthwhile.

This has a consequence people find uncomfortable. A threshold is a local instrument. Lifting one from a paper about a different population and applying it to yours is a move that needs an argument, and the argument is clinical.

:::{check}
:id: check-where-thresholds-come-from

Which of these could, in principle, produce a defensible importance threshold for a fasting glucose outcome, and which could not?

1. Asking a panel of people living with type 2 diabetes how much of a morning reading change would make a dietary restriction worth keeping up.
2. Taking the standard deviation of fasting glucose in the study cohort and using half of it.
3. Choosing the smallest difference the study happened to have the power to detect.
4. Adopting the value a guideline committee published for the same outcome in the same population, with its reasoning attached.

Answers. (1) Yes, and this is an anchor-based approach in its simplest form: the judgement comes from the people who bear the outcome. (2) Partly. This is a distribution-based figure and it tells you about detectability against variation, so it is supporting evidence and does not on its own establish that patients notice or value the change. (3) No. This reverses the logic entirely and lets the sample size decide what matters, which is the failure the whole lesson is about. (4) Yes, provided the population and outcome genuinely match and the reasoning travels with the number, because a threshold without its justification cannot be checked.
:::

## What this lesson will not hand you

There is no MCID for fasting plasma glucose quoted in this lesson, and that omission is deliberate.

Fasting glucose is a laboratory measurement used to classify and monitor. It is a stand-in for the outcomes people actually care about, which arrive years later as eye, kidney, nerve and vascular disease. An MCID is anchored to what patients perceive, and a person does not perceive a fasting glucose value at all. They perceive the meter reading and what they have been told it means.

That does not make the question unanswerable. It makes the answer the property of a clinical team working on a specific decision, weighing what the change is likely to be worth against what achieving it would cost the person in effort, diet, sleep and attention. Later scenes in this lesson use 5 mg/dL as a worked-through candidate. That figure is an illustration chosen so the arithmetic has something to bite on, and it carries no authority whatever.

Say the number out loud, say where it came from, and let a reader disagree with it. A threshold stated openly can be argued with. A threshold left implicit governs the conclusion anyway.

:::{source-note}
:claims: claim-mcid-definition, claim-mcid-methods, claim-mcid-context-specific, claim-statistical-significance-not-clinical-relevance
:sources: source-mcid-neurology-review, source-mcid-methodology-review

Both reviews support the definition of the minimal clinically important difference as the smallest change patients perceive as beneficial, its introduction by Jaeschke and colleagues in the late 1980s, and the division of estimation methods into anchor-based and distribution-based families with no gold standard between them. The neurology review supports the statement that MCID values are dynamic and context-specific and that the same measure can yield different thresholds in different populations, and both reviews support the point that a statistically significant change need not be one a patient perceives. The dinner-timing study, the consultant, the four options in the check, and the 5 mg/dL candidate are invented for teaching.
:::
