# Assuming the thing you doubt

Every test in this family starts with a move that sounds backwards. To ask whether dinner timing changed anything, you first assume it changed nothing, and then see how badly that assumption fits what you actually recorded.

The assumption has a name.

:::{definition}
:id: definition-null-hypothesis

The **null hypothesis** is a statement that fixes the quantity of interest at one specific value, adopted so that the arithmetic has a definite place to start. In the dinner-timing study it fixes the true difference in mean fasting glucose between the late and early groups at 0 mg/dL.

The **alternative hypothesis** is what remains if that value is wrong. Here it says the true difference takes some value other than zero, in either direction.
:::

Notice what the null hypothesis is doing. Nobody at the clinic believes that dinner timing has an effect of exactly 0.000 mg/dL. Biology rarely hands out exact zeros. The null earns its place by being the one hypothesis specific enough to predict something.

That is the whole trick. "Dinner timing matters" predicts almost nothing; it is consistent with a difference of 1 mg/dL, or 9, or 40. "The true difference is exactly zero" predicts a great deal. Fix the difference at zero, add what lesson 06 established about how estimates scatter, and you can say what range of results a repeat of this study should throw up. A hypothesis you can compute with is a hypothesis you can hold up against data.

## The null is one assumption among several

Here is where most readings of a *p*-value go wrong before they have started. The null hypothesis does not generate a prediction on its own. It generates one only when it is dropped into a surrounding set of assumptions, and that whole set is what the arithmetic actually leans on.

:::{definition}
:id: definition-statistical-model

A **statistical model** is the full set of assumptions used to turn a hypothesis into a prediction about data. For the dinner-timing comparison it includes the null value of zero, plus the assumption that the sixty participants behave like independent draws, that the within-group spread is about 16 mg/dL, that the reference curve describing how the estimate scatters is the right shape, and that the analysis reported was the analysis planned.
:::

Every one of those can fail. If adherence was patchy in one group, if the same person contributed correlated nights, if the spread differs between groups, if three other comparisons were run and this one was written up because it came out best, then the prediction the model makes is the wrong prediction, and the number computed against it inherits the fault.

So the honest reading of any *p*-value begins with a long "if", and that "if" holds more than the null. It runs: if dinner timing has no effect **and** every other assumption in the model holds. When a *p*-value comes out small, the model has taken a hit somewhere. The null is the assumption people reach for first, and it is only one of the candidates in the room.

:::{callout}
:kind: note

This connects to work you have already done. **PREM-SCI-008** catalogued the ways a study estimate gets systematically distorted, and **PREM-SCI-005** covered how allocation and blinding protect it. Those threats do not disappear when the arithmetic starts. They enter the test as assumptions, silently, and a small *p*-value cannot tell you which assumption cracked.
:::

## Writing the two hypotheses down

For the dinner-timing study, with the difference defined as late group minus early group:

:::{equation}
:label: equation-null-and-alternative

H_0: \mu_{\text{late}} - \mu_{\text{early}} = 0 \qquad H_1: \mu_{\text{late}} - \mu_{\text{early}} \neq 0
:::

Three details in that line are worth slowing down for.

The Greek letters refer to the true group means in the population the sample was drawn from, and not to the two sample means already sitting in the results table. Those sample means are known; they came out 9.0 mg/dL apart. The hypotheses are about the quantities that generated them.

The alternative is written with "not equal", which makes it **two-sided**. It counts a difference in either direction as evidence against the null. That choice matters later, because it doubles the tail area the *p*-value ends up measuring. A one-sided alternative would be the right choice only if a difference in the opposite direction were of no interest at all, and for a study asking whether dinner timing moves glucose, both directions are of interest.

The subtraction runs late minus early. Keep that order and the sign of the interval convention from lesson 02 in view together: a later dinner means a shorter dinner-to-sleep gap, so the +9.0 mg/dL attached to the late group is the same fact as the negative association between the interval and glucose. Two descriptions, one direction.

:::{check}
:id: check-hypothesis-statements

For each statement, decide whether it could serve as a null hypothesis in this framework, and say why.

1. The true difference in mean fasting glucose is 0 mg/dL.
2. Dinner timing affects fasting glucose.
3. The true difference in mean fasting glucose is 5 mg/dL.
4. The observed difference in this sample is 0 mg/dL.

Answers. Statement 1 works, and is the usual choice. Statement 2 fails, because it fixes nothing and so predicts nothing computable. Statement 3 works perfectly well; nothing forces a null to sit at zero, and testing against 5 is legitimate whenever 5 is the value in question. Statement 4 fails for a different reason: it is a claim about the sample, which has already been measured, and hypotheses are about the unmeasured quantities behind it.
:::

:::{source-note}
:claims: claim-null-hypothesis-definition, claim-p-value-assumes-whole-model
:sources: source-eom-statistical-hypotheses, source-p-value-misinterpretations, source-asa-p-value-statement

The encyclopedia entry supports the framing of a null and an alternative as two competing hypotheses about the distribution behind the data, with the null the one held for testing. The methodological guide supports the statement that the probability behind a test is computed under every assumption in the model, so that the test bears on the whole model and not on the targeted hypothesis alone; the association's statement of principles supports the reading of such a probability as a measure of how compatible data are with a specified statistical model. The dinner-timing study and its numbers are invented.
:::
