# Clinical wrap-up: test the late-dinner correlation

This is how a late-dinner correlation is tested before anyone calls it a cause.

**Illustrative teaching example—not medical advice.** This invented case is for causal-reasoning practice. It does not claim that dinner timing truly changes glucose and must not guide care.

Suppose an ordinary observational look in the running diabetes case shows that later habitual dinners correlate with higher next-morning fasting glucose.

## 1. Classify what the correlation supports

The raw result supports an **association**: dinner timing and next-morning fasting glucose differ together in this illustrative dataset.

It does not yet support a **mechanism**, because no link in a process has been tested. It does not yet support **bounded causal attribution**, because the observed groups may differ along other causal paths. A conclusion that later dinners caused the higher glucose without defending those paths is **unsupported**.

## 2. Draw the smallest useful arrow map

Let $D$ be habitual dinner timing and $G$ be next-morning fasting glucose. Every arrow below is a hypothesis for this invented example, not an asserted medical fact.

- **Confounding forks:** $D \leftarrow A \rightarrow G$ and $D \leftarrow T \rightarrow G$. For this invented map, stipulate that $A$ is lower evening physical activity and $T$ is medication timing, each placed before the dinner-time exposure and each hypothesized to cause both $D$ and $G$. Their position makes them confounders.
- **Mediator chain:** $D \rightarrow C \rightarrow G$. If a later dinner leads to a larger evening carbohydrate load $C$, which then raises $G$, carbohydrate load lies on the proposed route. Adjusting for $C$ would remove part of the total effect the question asks about.
- **Reverse-causation caution:** ask whether an earlier glucose-related state could influence dinner timing, represented as $G_{\text{earlier}} \rightarrow D$. The observed correlation cannot dismiss that direction by itself.
- **Collider caution:** suppose an invented study flag $S$ is caused by both dinner timing and another cause $U$ of fasting glucose: $D \rightarrow S \leftarrow U \rightarrow G$. Conditioning on the common effect $S$ could open a noncausal route between $D$ and $G$.

The labels follow from the arrows. The dataset does not draw the arrows for you.

## 3. Choose adjustment for the causal question

If the question asks for the total effect of changing habitual dinner timing from earlier to later, adjust for defensible pre-dinner common causes such as $A$ and $T$. Do not adjust for carbohydrate load when it is the mediator on the route of interest, and do not condition on the collider $S$.

With only the raw correlation, the strongest warranted claim remains the association. If an adjusted contrast remained positive, treat it as an uncertain estimate rather than proof of an increase. A bounded causal attribution would require the identifying assumptions that the arrow directions are correct, the confounders are measured and controlled adequately, no important common cause remains unmeasured, reverse causation does not explain the contrast, and the analysis does not condition on the mediator or collider. It would also require “earlier” and “later” dinner timing to describe a sufficiently well-defined, feasible change and require comparable adults to be represented across the relevant dinner-time levels.

> In this invented comparison, the positive adjusted contrast would estimate the effect of changing habitual dinner timing from earlier to later for the represented adults under the studied conditions only if the stated identifying assumptions hold. Without an interval or equivalent precision information, the magnitude and even the direction of the underlying effect remain uncertain.

That statement does not establish the proposed carbohydrate mechanism, and its scope stops at the represented adults and conditions.

:::{source-note}
:claims: claim-inference-targets, claim-causal-contrast, claim-third-variable-roles, claim-mechanism-evidence
:sources: source-causal-diagrams, source-natural-experiments, source-mechanistic-evidence

The cited sources support distinguishing association, mechanism evidence, and bounded causal attribution; using causal position to reason about confounders, mediators, and colliders; and requiring explicit assumptions before interpreting an observational contrast causally. They do not support a real effect of dinner timing on glucose; every medical detail and arrow in this case is invented for reasoning practice.
:::

The next lesson, **Bias and threats to validity**, treats bias as a separate family from confounding and examines other ways this comparison could mislead.
