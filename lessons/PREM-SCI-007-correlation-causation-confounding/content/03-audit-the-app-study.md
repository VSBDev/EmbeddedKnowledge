# Audit three evidence packets about one app

This worked example is fictional. Its numbers were created for instruction; they are not a report about a real app or a claim about learning effectiveness.

:::{worked-example}
:id: worked-example-app-evidence
:label: From observed difference to calibrated claim

**Task.** A course team asks, “Does offering this flashcard app improve the final-exam score, and if so, how might it work?” Judge the strongest conclusion supported by each packet of evidence.

| Packet | Design and result |
|---|---|
| A: ordinary cohort | Of 580 students, those who chose the app averaged 81 and nonusers averaged 73. Before app use, the two groups' prior-course averages were 84 and 76, respectively. |
| B: mechanism study | In a separate 60-person laboratory task, participants were randomly assigned to receive or not receive a scheduling reminder. The reminder group initiated more retrieval sessions before a delayed recall task. The study did not measure a course exam. |
| C: randomized course study | Six hundred eligible students were randomly offered immediate app access or access after the final. The immediate-offer group averaged 77 and the delayed-offer group 74 on the same anonymously graded exam. Seven percent of assigned students in each group lacked an exam score. |

**Represent the question.** Let $X$ be the immediate offer of app access, $M$ be app-mediated retrieval sessions, and $Y$ be the final-exam score. The causal contrast of interest is the mean score if all eligible students were offered access now versus the mean score if all were offered access after the final. Prior preparation $C$ could influence both self-selected use and the score.

**Plan.** For each packet:

1. identify how $X$ was assigned and whether $X$ preceded $Y$;
2. locate a plausible common cause, reverse arrow, mediator, or selection step;
3. match the conclusion to association, mechanism, or causal attribution;
4. state what the conclusion is about and where it stops.

**Packet A.** App users scored eight points higher in this cohort. That is an association. The prior-course difference is evidence that the groups were already unlike one another before app use. Prior preparation is a plausible common cause of app choice and final score, so the crude eight-point contrast cannot be attributed to app use. Measuring preparation does not prove that every common cause was measured or controlled well. The strongest short conclusion is:

> In this cohort, self-selected app use was associated with a higher mean score; the comparison does not isolate an effect of app use.

**Packet B.** The randomized reminder isolates a causal effect of the reminder on the measured intermediate—starting retrieval sessions—in this laboratory task, assuming the randomization and measurement were carried out as described. It supplies evidence for one link in a proposed mechanism. It does not measure the app offer's effect on a course exam, so it cannot answer the whole effectiveness question. The strongest conclusion is:

> The laboratory result supports the reminder-to-retrieval link in a proposed mechanism under the task conditions; it does not estimate an effect on course scores.

**Packet C.** Random assignment creates comparable offer groups in expectation, the offer precedes the exam, and both groups take the same anonymously graded outcome. The difference in means is $77 - 74 = 3$ points. An intention-to-treat comparison keeps students in their assigned offer groups whether or not each one used the app. Under the stated implementation and missing-outcome conditions, the strongest conclusion is:

> Offering immediate access increased the mean exam score by three points compared with delayed access among eligible students in this course.

That sentence attributes an effect to the **offer**, not to actual use. It also stays within the studied course and conditions. Generalizing to other subjects, assessment types, access arrangements, or populations needs additional evidence.

**Independent checks.** The eight-point observational contrast is much larger than the three-point randomized-offer contrast. That does not prove the cohort was confounded, but it is consistent with positive self-selection into app use. Equal missing-score percentages do not prove missingness was harmless; investigators would still inspect why scores were missing and whether missingness differed in relevant ways. If 30% of one assigned group but 5% of the other lacked outcomes, attrition would become a serious rival explanation.

**Interpret all three together.** Packet A detects an association worth explaining. Packet B supports one mechanistic link. Packet C supports a bounded causal attribution for the offer. Combining packets can give a richer account, but one packet cannot silently inherit the strengths of another.

**Self-explanation.** Which single design feature changes the score comparison from association by default in Packet A to bounded causal attribution in Packet C? Why does that feature justify a claim about the offer rather than a claim about app use by every student?
:::

:::{source-note}
:claims: claim-inference-targets, claim-causal-contrast, claim-third-variable-roles, claim-randomization-scope, claim-mechanism-evidence
:sources: source-causal-diagrams, source-natural-experiments, source-randomized-trials, source-mechanistic-evidence

The sources support the worked audit's reasoning structure: define the causal contrast, identify assignment and alternative paths, keep effects of assignment distinct from actual receipt, separate mechanism evidence from outcome-effect evidence, and limit any conclusion to the population and conditions studied. All study details and numbers in the example are original fictional teaching material.
:::

