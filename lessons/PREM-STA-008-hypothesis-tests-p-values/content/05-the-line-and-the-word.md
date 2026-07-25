# Where the line sits, and the word it dragged in

The visiting student in scene 1 was glad the result squeaked in, and was relieved it had not come out at 0.06. That relief is worth examining, because it treats a number as a boundary when it started life as a suggestion.

## The line at 0.05 is a convention

Nothing in the arithmetic of scene 3 produced 0.05. The tail area came out at 0.029 on its own. The 0.05 arrived separately, from custom, and it plays a different role in the reasoning.

:::{definition}
:id: definition-significance-level

The **significance level**, usually written as alpha, is a probability chosen before the data are seen. It sets how far into the tail a result must fall before the analysis will call the null incompatible with the data. It is part of the study's design.

The ***p*-value** is computed after the data arrive. It reports where this particular result actually fell.

One is a rule fixed in advance. The other is a measurement. They are compared, and they are never the same object.
:::

That distinction gets lost because both are probabilities and both are often written as decimals near 0.05. Keeping them apart matters here: alpha belongs to the plan, and the *p*-value belongs to the result.

The choice of 0.05 for alpha is conventional, and scene 3 already showed how little weight the third decimal place can bear: changing nothing but the reference curve moved the same study from 0.029 to about 0.033, a shift as wide as the whole 0.048-to-0.052 band the convention treats as the difference between a finding and nothing.

Consider what the convention implies if taken literally. A result at *p* = 0.049 and a result at *p* = 0.051 come from studies whose data differ by a hair. Treated as a boundary, the line sorts them into different categories and reports one as a finding and the other as nothing. The evidence in the two studies is nearly identical.

The practical instruction is short. Report the *p*-value itself, alongside the effect size and the interval, and let a reader see where the result actually fell. A conclusion that depends on which side of 0.05 a number landed is a conclusion resting on the convention rather than on the data.

## The word the convention dragged in

A result falling beyond the chosen alpha gets a name, and the name is the most overloaded word in statistics.

:::{definition}
:id: definition-statistically-significant

A result is **statistically significant** at a stated level when its *p*-value falls at or below the alpha chosen in advance. At the conventional alpha of 0.05, the dinner-timing result qualifies, because 0.029 is below 0.05.

The phrase describes the outcome of a test procedure. It reports where a number landed relative to a threshold, and it says nothing about how large the effect is, how important it is, or whether anyone should act on it.
:::

Here the lesson has to stop and name a collision, because the technical sense above shares a word with an everyday sense that means important, sizeable, or worth attention. Those two senses are unrelated, and the shared spelling does an enormous amount of harm.

A statistically significant result can be much smaller than another result. The larger study in scene 4 found 2.0 mg/dL with *p* = 0.030, which clears the conventional bar while describing a difference less than a quarter of the 9.0 mg/dL dinner-timing estimate. Run a study large enough and almost any non-zero difference will clear it. A result that fails to clear the bar can be larger, as the reduced 30-person version of the dinner study showed at 9.0 mg/dL and *p* = 0.12.

So the technical phrase carries no information about magnitude or importance, and the everyday word carries nothing else. This course uses the phrase only in its technical sense, and uses plain words like large, small, or worth acting on for the other job.

:::{callout}
:kind: note

Separating the two senses properly is the work of **PREM-STA-012**, the lesson that closes this block. It takes the 9.0 mg/dL difference and asks whether a change that size should alter anything for a patient. That question cannot be settled by any test in this lesson, and the block ends there deliberately.
:::

## What the phrase attaches to

One more precision, and it follows from everything above.

Statistical significance describes a test result. It is a property of the analysis, not a property of the difference out in the world. The 9.0 mg/dL difference either reflects something real about dinner timing or it does not, and that fact was settled before anyone computed a standard error.

This is why "a significant effect" is a slippery phrase even when used technically. The effect is not the thing that passed a threshold. The test result passed a threshold. Sentences like "the study found a statistically significant difference of 9.0 mg/dL, 95 per cent interval 0.9 to 17.1" stay honest because they keep the label attached to the finding and put the numbers where a reader can weigh them.

:::{check}
:id: check-threshold-and-word

Decide whether each sentence is safe to write, and repair the ones that are not.

1. "The difference was statistically significant at the 0.05 level (*p* = 0.029)."
2. "The 0.029 result shows a significant improvement in glucose control."
3. "Because *p* = 0.029 is well under 0.05, the effect is well established."
4. "We set alpha at 0.05 before recruitment and observed *p* = 0.029."

Answers. Sentence 1 is safe: it names the level, gives the number, and claims nothing about size. Sentence 2 uses the everyday sense and implies both magnitude and benefit; repair it by stating the difference and its interval, then labelling the test result separately. Sentence 3 is a threshold argument in disguise; 0.029 sits close to 0.05, and "well under" is doing work the arithmetic does not support. Sentence 4 is safe, and it is the clearest of the four, because it separates the rule set in advance from the measurement that followed.
:::

:::{source-note}
:claims: claim-threshold-is-convention, claim-alpha-distinct-from-p, claim-significance-property-of-test
:sources: source-asa-p-value-statement, source-p-value-misinterpretations, source-eom-significance-level

The association's statement of principles supports the position that conclusions and decisions should not rest only on whether such a probability passes a specified threshold, and its release records the executive director describing that threshold as arbitrary. The methodological guide supports the separation of a cut-off fixed in advance as part of the design from the probability computed from the data, together with the point that statistical significance describes the result of a test and is not a property of the effect or the population being studied. The encyclopedia entry supports the definition of the level as a probability fixed for a test in advance. The dinner-timing study and all comparison studies are invented for teaching.
:::
