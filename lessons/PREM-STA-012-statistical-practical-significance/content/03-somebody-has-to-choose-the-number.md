# Somebody has to choose the number

The consultant's question was whether 9 mg/dL is a lot. Questions of that shape only have answers once something else is fixed: a lot *compared with what*.

Zero is one comparison, and the study has already made it. The interval runs from 0.9 to 17.1 and clears zero, so under the stated model and confidence procedure the data support a difference in the stated direction. That is evidence about direction, not proof that a non-zero effect is true. It leaves untouched whether the difference is worth anything.

The comparison the consultant needs is a second number on the same axis: the smallest difference that would change what he does. An estimated minimal clinically important difference can inform that number, but it is not identical to a service decision rule.

## The minimal clinically important difference

:::{definition}
:id: definition-mcid

The **minimal clinically important difference** is the smallest change in an outcome measure that patients perceive as beneficial. It is often written MCID, and the terms *minimal important difference* and *minimum clinically important difference* are used for the same idea.

The concept was introduced in the late 1980s by Jaeschke, Singer and Guyatt, who framed it as the smallest difference in score in the domain of interest that patients perceive as beneficial.

It belongs to a specified outcome and population and to a patient-referenced judgement of meaningful change. Sample data can contribute to estimating it, but sample variability alone cannot establish what patients perceive as beneficial.
:::

Two features of that definition deserve attention before anything is done with it.

The first is the word *patients*. The reference point is what the people with the condition notice and value. A change a laboratory can measure reliably and a change a person can feel are different quantities, and the MCID is anchored to the second one.

The second is that the definition contains no sample size, standard error, or *p*-value. Those quantities can describe measurement variation and precision, but they do not by themselves supply the patient-referenced judgement in the definition.

## How an MCID is estimated

Researchers who set out to estimate an MCID use two broad families of method.

**Anchor-based methods** relate each person's observed change on the outcome measure to an external anchor, usually an independent patient-reported judgement such as feeling a little better, about the same, or a little worse. The target-score changes among people in the anchor category then inform an MCID estimate. The anchor supplies a reference for meaningful change, and the outcome measure supplies the scale.

**Distribution-based methods** work from the statistical characteristics of the scores in a sample, using quantities like the standard deviation of change or the measurement error of the instrument.

The second family does use the study sample. It is worth being precise about what it delivers. A distribution-based figure describes change relative to score variation or measurement error. That is useful information, but by itself it cannot establish whether a change matters to the person who has it. Reviews of the field treat distribution-based figures as supporting evidence rather than a replacement for a meaningful external anchor.

There is no gold-standard method. Different approaches on the same instrument give different numbers, and reviewers of this literature say so plainly.

The service's rule is a third construct. A **service decision threshold** states how large a between-group effect would have to be before the service acts, after considering patient preferences, costs, alternatives, harms, and the outcome being compared. An MCID for change in an individual outcome measure does not automatically become a threshold for a difference between group means; that translation needs an explicit clinical and statistical argument. The 5 mg/dL value used later is only an invented service decision threshold. It is not presented as an MCID.

## Why an estimate does not travel automatically

MCID values are described in the literature as dynamic and context-specific. The same outcome measure applied to different study populations can yield different thresholds. A value estimated for improvement need not match the value for deterioration on the same scale. Age, baseline severity, and what a person's daily life demands all bear on how much change registers as worthwhile.

This has a consequence people find uncomfortable. An MCID estimate is local to an outcome, population and method. Lifting one from a paper about a different population and applying it to yours needs a clinical argument; turning it into a service decision threshold also needs an explicit bridge to the estimand and decision.

:::{check}
:id: check-where-thresholds-come-from

Which of these could, in principle, contribute to a defensible service decision threshold for a fasting glucose outcome, and what kind of contribution would each make?

1. Asking a panel of people living with type 2 diabetes how much of a morning reading change would make a dietary restriction worth keeping up.
2. Taking the standard deviation of fasting glucose in the study cohort and using half of it.
3. Choosing the smallest difference the study happened to have the power to detect.
4. Adopting the value a guideline committee published for the same outcome in the same population, with its reasoning attached.

Answers. (1) This is patient preference elicitation. It could inform the service's decision threshold, but it is not an anchor-based MCID estimate because it does not relate observed changes on the target measure to an independent external anchor. (2) This is distribution-based information. It describes change relative to variation, so it can contribute supporting evidence but cannot by itself establish patient-perceived importance or a service rule. (3) No. This reverses the logic and lets the sample size decide what matters. (4) Potentially, provided the outcome, population, estimand and decision genuinely match and the reasoning travels with the number; otherwise the committee must justify a new threshold.
:::

## What this lesson will not hand you

There is no MCID for fasting plasma glucose quoted in this lesson, and that omission is deliberate.

Fasting glucose is a laboratory measurement used to classify and monitor. A person does not directly perceive a change in the laboratory value in the way they might perceive a change in pain or physical function. That makes a patient-referenced MCID difficult to interpret without a clearly defined external anchor and outcome.

That does not make a service decision impossible. It means the accountable group must state what decision it is making, whose preferences it elicited, which outcomes and costs it considered, and how an individual-change concept relates to the between-group effect it will compare. Later scenes use 5 mg/dL as a worked-through service threshold. That figure is an illustration chosen so the arithmetic has something to bite on, and it carries no authority whatever.

Say the number out loud, say where it came from, and let a reader disagree with it. A threshold stated openly can be argued with. A threshold left implicit governs the conclusion anyway.

:::{source-note}
:claims: claim-mcid-definition, claim-mcid-methods, claim-mcid-context-specific, claim-statistical-significance-not-clinical-relevance
:sources: source-mcid-neurology-review, source-mcid-methodology-review

Both reviews support the definition of the minimal clinically important difference as the smallest change patients perceive as beneficial, its introduction by Jaeschke and colleagues in the late 1980s, and the division of estimation methods into anchor-based and distribution-based families with no gold standard between them. The neurology review supports the statement that MCID values are dynamic and context-specific and that the same measure can yield different estimates in different populations, and both reviews support the point that a statistically significant change need not be one a patient perceives. The distinction among an MCID estimate, preference elicitation and a service decision threshold is the lesson's synthesis of those definitions; the dinner-timing study, the consultant, the four options and the 5 mg/dL threshold are invented for teaching.
:::
