# Do not adjust by reflex

Before looking back, reconstruct the core model on paper or in plain text.

:::{check}
:id: check-reconstruct-causal-judgment
:kind: retrieval

1. Complete the sentence: an association asks whether two variables vary together, whereas a causal contrast asks ______.
2. Draw the three arrow shapes for a confounder, mediator, and collider.
3. Explain why random assignment makes groups comparable in expectation but not necessarily identical in one realized experiment.

Pause and commit to an answer before reading the feedback.
:::

A causal contrast asks how the outcome would differ under specified alternatives. The three shapes are $X \leftarrow C \rightarrow Y$ for a confounder, $X \rightarrow M \rightarrow Y$ for a mediator, and $X \rightarrow S \leftarrow Y$ for a collider or selection variable. Random assignment breaks systematic links between assignment and pre-assignment causes over repeated randomizations, but chance can leave a particular pair of groups imbalanced.

If the contrast was missing from your answer, return to “Three targets of inference.” If the arrowheads were reversed, say each map aloud as a sentence about what causes what. If “identical” appeared in your randomization answer, replace it with “comparable in expectation” and name one possible chance imbalance.

:::{source-note}
:claims: claim-inference-targets, claim-causal-contrast, claim-third-variable-roles, claim-randomization-scope
:sources: source-causal-diagrams, source-natural-experiments, source-randomized-trials, source-mechanistic-evidence

The sources support the reconstructed distinctions, the three causal positions, and the difference between balance in expectation and exact balance in one assigned sample.
:::

## Repair the tempting rule

:::{misconception}
:id: misconception-adjust-everything
:label: If a third variable is related to exposure and outcome, always adjust for it

**Commit first.** A dataset contains exposure $X$, outcome $Y$, and a third variable $Z$ associated with both. Should the analysis always adjust for $Z$?

**Why “yes” fails.** Association with both variables does not reveal $Z$'s causal job. If $Z$ is a pre-exposure common cause, adjustment may help block a confounding path. If $Z$ carries part of the effect, adjustment removes part of the total-effect route. If $Z$ is a common effect, adjustment or selection on it may open a noncausal path.

**Better model.** Put the question first, establish time order, draw the assumed arrows, and adjust only for a set of variables that blocks the relevant noncausal paths without blocking the effect of interest or opening a collider path. Even a sensible adjustment set cannot remove bias from common causes that were not measured well enough.

**Recheck.** In the randomized app study, retrieval sessions occur after assigned access and before the exam. If the target is the total effect of the offer, should retrieval sessions be treated as a routine confounder? Explain your arrow map.
:::

Retrieval sessions are a proposed mediator, not a pre-offer common cause. Routine adjustment would change the question away from the total effect of the offer. A formal direct-effect or mediation question is possible, but it needs a separately specified target and additional assumptions.

:::{source-note}
:claims: claim-third-variable-roles
:sources: source-causal-diagrams

The causal-diagram source supports choosing adjustment from the assumed causal structure and target effect, including the risks of controlling for mediators or colliders and of leaving common-cause paths open.
:::

## Fade the support

Each case below is fictional and exists only to test the causal structure.

### Completion problem: label the arrows

Across a workshop network, airborne dust $C$ influences whether technicians turn on a filter $X$ and also raises a particle-count measurement $Y$. Complete the map and conclusion:

> $X$ ______ $C$ ______ $Y$. Therefore $C$ is a ______, and the crude filter–particle association is ______ by default.

**Feedback.** The map is $X \leftarrow C \rightarrow Y$. Dust is a confounder, so the crude filter–particle comparison does not isolate a causal effect by default. If you drew $X \rightarrow C$, check the timing: the background dust level affected the decision to use the filter.

### Supported problem: separate a mechanism from a total effect

Researchers randomly assign a brief light pulse $X$ to cell cultures. The pulse changes a transcription factor $M$; the factor then changes reporter fluorescence $Y$. They have experimental evidence for the first link and a separate perturbation study for the second.

1. Draw the proposed mechanism.
2. What does the combined evidence support?
3. What would remain unjustified if the work used one cell line under one laboratory condition?

**Feedback.** The proposed chain is $X \rightarrow M \rightarrow Y$. The two perturbations support a mechanism in which the transcription factor carries a causal link under the tested conditions. The evidence does not by itself justify the same pathway, effect size, or outcome in other cell types, organisms, doses, or environments. If your conclusion jumped directly to patients or populations, shrink it to the experimental system.

### Independent problem: spot selection on a common effect

Machine age $X$ and an operator's maintenance skill $Y$ both affect whether a machine enters a repair registry $S$. An analyst studies only registered machines and finds that older machines tend to have more skilled operators.

Write a two-sentence audit: name $S$'s role, then explain why the selected-sample association need not exist in all machines.

**Feedback.** The registry is a collider on $X \rightarrow S \leftarrow Y$. Restricting analysis to $S=1$ can induce an association between machine age and operator skill because either cause can help a machine enter the registry. If you called the registry a confounder, ask whether it precedes and causes both $X$ and $Y$; it does not.

:::{source-note}
:claims: claim-inference-targets, claim-third-variable-roles, claim-mechanism-evidence
:sources: source-causal-diagrams, source-mechanistic-evidence

The sources support distinguishing an observed association from a causal chain, treating perturbation evidence as local to its tested system, and recognizing selection on a common effect as a route to noncausal association.
:::

## Two probes for rival explanations

A **negative control** deliberately substitutes an exposure or outcome that should not have the tested causal relation but should share important bias-producing conditions. If the supposedly impossible association appears, residual confounding, selection, or measurement error may still be present. A clean negative control does not prove that every bias is absent; the control works only if its own assumptions are credible.

**Triangulation** compares evidence from approaches chosen because their important potential biases differ and are expected to be largely unrelated. Convergence can strengthen confidence when the same wrong answer is unlikely to arise from those different biases. Repeating several statistical methods on the same confounded dataset is not automatically triangulation, and convergence is not proof.

:::{check}
:id: check-negative-control-triangulation
:kind: application

An observational app analysis and its negative-control outcome both show similar associations with app use. What should happen to confidence in a causal app effect, and why? Then name one genuinely different approach that could contribute to triangulation.
:::

Confidence should decrease because the negative-control association suggests a shared noncausal process. A randomized offer study, a defensible external allocation rule, or a mechanism experiment could add a different route of evidence, provided its main bias sources are not the same as the cohort's. The appropriate next step is to diagnose the shared bias, not to average the two associations.

:::{source-note}
:claims: claim-negative-controls, claim-triangulation
:sources: source-negative-controls, source-triangulation

The sources support using negative controls as bias detectors under stated assumptions and using triangulation only when the contributing approaches have meaningfully different key sources of potential bias.
:::
