# Ask what the evidence is trying to prove

A result becomes easier to judge when you first name the question it is meant to answer. “Are app use and scores related?” is not the same question as “Would offering the app change scores?” or “Through what learning process might an effect occur?”

## Three targets of inference

| Target | Question | A conclusion with the right shape |
|---|---|---|
| Association | Do measured values of $X$ and $Y$ differ together in the sampled data? | “App users scored higher on average in this cohort.” |
| Mechanism | What entities, activities, and ordered changes could connect $X$ to $Y$, and which links have evidence? | “The evidence supports a route from reminders to retrieval sessions to later recall.” |
| Causal attribution | How would the outcome differ under a specified change in $X$ versus a relevant alternative? | “Randomly offering access increased the mean score by three points in the studied group under these conditions.” |

Here, $X$ names the exposure or intervention and $Y$ names the outcome. An association is a property of observed data. A causal effect is a contrast between outcomes under alternatives—for example, app access offered now versus after the exam. The same student cannot experience both alternatives at the same moment, so a design must create a comparison group that can stand in for the unobserved alternative.

That is why the assignment process matters. Random assignment makes the assigned groups comparable **in expectation** before the intervention. A single randomization can still produce chance imbalances, and problems after assignment—unequal loss to follow-up, different outcome measurement, one group's treatment affecting the other group, or analyzing people only by what they chose to do—can weaken the comparison. A well-conducted trial therefore supports a bounded effect of *assignment* in the studied sample; it does not automatically establish an effect in every population or an effect of actually receiving the intervention.

An observational comparison starts in a different place. Because exposure was not randomized, the observed groups may differ for reasons that also affect the outcome. Observational data can contribute to causal inference, but only when a design and explicit assumptions make the comparison defensible. “We adjusted for many variables” is not such a defense by itself.

:::{source-note}
:claims: claim-inference-targets, claim-causal-contrast, claim-randomization-scope
:sources: source-causal-diagrams, source-natural-experiments, source-randomized-trials, source-mechanistic-evidence

The sources support defining a causal question as a contrast under specified alternatives, treating mechanism evidence as evidence about the connecting process, and limiting randomized estimates to their actual assignment, implementation, and population conditions.
:::

## A third variable has a job, not just a correlation

Suppose a third variable $Z$ is related to both $X$ and $Y$. That fact does not tell you whether to adjust for $Z$. Its causal position and timing do.

:::{diagram} ../diagrams/third-variable-roles.diagram.json
:label: diagram-third-variable-roles
:alt: Three arrow maps distinguish a confounder, mediator, and collider by their causal positions.
:longdesc: In the confounder fork, prior preparation points to observed app use and to exam score. In the mediator chain, assigned app access points to retrieval sessions, which points to exam score. In the collider inverted fork, app use and seeking extra support both point to inclusion in a help-session sample. Arrows express causal assumptions to defend, not associations learned automatically from data.

Read each arrow as “may causally influence.” The arrow map makes the assumed direction visible so that you can ask whether time order and subject knowledge support it.
:::

- A **confounder** is a pre-exposure common cause on an open noncausal path: $X \leftarrow Z \rightarrow Y$. Prior preparation may influence both choosing the app and the later score. If that path is ignored, part or all of the app–score association may be due to preparation. Adjustment can block a correctly identified and measured path, but unmeasured or poorly measured common causes can leave residual confounding.
- A **mediator** is on a proposed causal route: $X \rightarrow Z \rightarrow Y$. Retrieval sessions might carry part of an effect of assigned access to the score. Adjusting for the mediator is not ordinary confounding control; it changes the question from the total effect to an effect that excludes or fixes that route, and valid mediation analysis needs further assumptions.
- A **collider** is a common effect: $X \rightarrow Z \leftarrow Y$ or, more generally, a common effect of two causes you are comparing. App use and seeking extra support may both affect who appears in a help-session sample. Restricting or adjusting for that common effect can create an association between its causes even if none existed before selection.

**Reverse causation** is a different direction problem: $Y$ influences $X$. If current difficulty prompts students to start using the app, a snapshot association cannot tell whether app use preceded the difficulty. Time order rules out some arrows, but time order alone does not rule out common causes.

The diagram is a thinking tool, not a discovery machine. Its arrows are scientific assumptions that need evidence and may be wrong. Draw the smallest map needed for the question, then ask which paths the design blocks, opens, or leaves uncertain.

:::{source-note}
:claims: claim-third-variable-roles
:sources: source-causal-diagrams

The causal-diagram source supports the fork, chain, and collider structures, the risk of reverse direction, and the warning that adjustment depends on a defensible causal structure rather than on statistical association alone.
:::

## Mechanism evidence answers “how,” not “how much everywhere”

A mechanism claim names the relevant parts, what they do, their order, and the conditions needed for the process. In the app example, a proposed mechanism might be:

> assigned reminder → learner attempts retrieval → memory is updated → later test response

Evidence for one or more links can make the process more credible. Manipulating a reminder and measuring the next step can support a local causal link. Observing the intermediate after exposure can be consistent with the mechanism. Neither result, by itself, estimates the app's effect on every course outcome or population. Conversely, a randomized outcome difference can support causal attribution even when the full mechanism is still uncertain.

Mechanism and difference-making evidence are therefore complementary. Keep the claims separate before integrating them.

:::{source-note}
:claims: claim-mechanism-evidence
:sources: source-mechanistic-evidence

The mechanistic-evidence source supports distinguishing evidence about the existence or details of a connecting process from an outcome comparison, and it explains why mechanism evidence helps interpretation and generalization without replacing a direct effect estimate.
:::
