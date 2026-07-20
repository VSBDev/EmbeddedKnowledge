# When nothing happened has two meanings

A small fluorescence reader displays **0** for an unknown sample. One explanation is that the sample contains none of the target. Another is that the indicator failed, the reader was mis-set, or the reaction never had a chance to work. The same zero can support very different stories.

To tell those stories apart, you need more than a prediction. You need to know what was deliberately changed, what was recorded, what should stay alike, what else might be changing with the comparison, and which extra test conditions show that the setup can produce both an expected signal and an expected baseline.

By the end of this lesson, you will be able to name those jobs and use them to decide what a comparison actually tests. The goal is not to make an experiment “perfect.” It is to make the intended comparison and its remaining limits visible.

## Retrieve the chain you already built

Before reading on, reconstruct the chain from the previous two lessons:

:::{check}
:id: check-prerequisite-chain
:kind: retrieval

> observation → bounded empirical question → ___ → conditions → ___

Fill both blanks from memory, then add one sentence explaining what the prediction contributes that the hypothesis does not.
:::

A useful completion is **hypothesis → prediction**. A question says what you want to find out; a hypothesis proposes an answer or relationship; and a prediction names the record expected if the hypothesis holds under stated conditions.

Variables and controls turn those stated conditions into an inspectable comparison. They show which link the record can test.

## Six questions, six jobs

Suppose a fictional indicator should fluoresce when a target molecule is present. A team compares a low target concentration with a high target concentration and records fluorescence after ten minutes.

Ask these questions in order:

| Ordinary-language question | Technical name |
| --- | --- |
| What factor did the team deliberately change? | **Independent variable** |
| What response did the team record? | **Dependent variable** |
| Which other relevant conditions did the team deliberately keep alike? | **Controlled variables** |
| What other factor changed with the independent variable and could also change the response? | **Confounder** |
| Which condition should show little or no tested response? | **Negative control** |
| Which condition should produce a known response if the setup is working? | **Positive control** |

In this comparison, target concentration is the **independent variable** because the team intentionally sets it to different levels. Fluorescence after ten minutes is the **dependent variable** because it is the recorded response.

Sample volume, temperature, incubation time, and reader setting are **controlled variables** when the team deliberately keeps them alike across the target-concentration groups. A controlled variable is a condition, such as temperature. It is not the same thing as a control condition or control group, which is an extra comparison included for a particular purpose.

What if every low-concentration sample uses reagent lot A in the morning, while every high-concentration sample uses reagent lot B in the afternoon? Reagent lot now travels with target concentration. If reagent lot can also change fluorescence, it is a **confounder**: the fluorescence difference could reflect concentration, reagent lot, or both. The problem is not merely that reagent lot varies. It varies in step with the independent variable and could affect the dependent variable.

Two extra conditions make the zero reading more informative:

- A **negative control** contains no target and is expected to stay near the baseline. If it fluoresces strongly, background signal or contamination may be present.
- A **positive control** contains a known target condition that is expected to fluoresce. If it stays near zero, the run has not shown that the setup can reveal a signal.

The negative control asks, “Does the setup produce a signal when it should not?” The positive control asks, “Can the setup produce the expected signal when it should?” These names describe expected response roles, not whether the result is good or bad.

Controls expose particular failures and rival explanations. They do not erase measurement error, sampling limits, or every unmeasured influence. The next scene shows how the six jobs work together in one complete audit.

:::{source-note}
:claims: claim-variable-roles, claim-confounder-ambiguity, claim-control-functions, claim-controls-have-limits
:sources: source-nist-handbook, source-ncbi-assay-guidelines

The NIST handbook and the NCBI-hosted assay guidance support the factor/response distinction, the need to manage other influential variables, and the comparison and quality-check functions of controls. Terminology and concrete control materials vary across fields; the fictional indicator, six-question table, and wording are original teaching material.
:::
