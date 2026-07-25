# Nine milligrams, measured in standard errors

A difference of 9.0 mg/dL means nothing on its own. Nine is large against a background of twos and small against a background of fifties. Before the number can be judged it has to be measured against something, and the null hypothesis supplies exactly that something.

## The reference the number is measured against

Assume the true difference is zero. Lesson 06 already established what follows: run this study again and the estimated difference will not come back at zero, because two samples of thirty people never hand you two identical means. The estimates scatter, and the width of that scatter is the standard error.

With a within-group standard deviation of 16 mg/dL and thirty people in each group:

:::{equation}
:label: equation-standard-error

\mathrm{SE} = 16 \sqrt{\frac{1}{30} + \frac{1}{30}} = 16 \sqrt{\frac{2}{30}} = 16 \times 0.2582 = 4.13 \ \text{mg/dL}
:::

So the null model makes a definite prediction. Differences produced by a world where dinner timing changes nothing should pile up around 0 mg/dL, with a spread of 4.13 mg/dL. That prediction is a whole distribution, and it has a name: the **null distribution**. It is the set of results the null model expects, drawn as a curve.

Here it is, with the study's actual difference marked on it.

:::{chart} ../charts/null-distribution-of-the-difference.chart.json
:::

Look at where 9.0 falls. The curve is still drawn there, so the null model does not forbid a difference that size. It just makes it uncommon. The height of the curve at 9.0 is about a tenth of its height at the centre, and the area lying that far out or further is the quantity the *p*-value reports.

## Turning the picture into a number

:::{worked-example}
:id: worked-example-difference-to-p

**The task.** Compute the test statistic and the two-sided *p*-value for the dinner-timing difference, and state what the resulting number is the probability of.

**Givens.** Observed difference, late minus early: 9.0 mg/dL. Within-group standard deviation: 16 mg/dL. Group sizes: 30 and 30. Null hypothesis: true difference 0 mg/dL. Alternative: true difference not 0, either direction.

**Unknowns.** The test statistic and the tail area beyond it.

**The principle, and why it applies.** A raw difference cannot be compared across studies, because every study has its own units and its own noise. Dividing the difference by its own standard error strips both away. The result counts how many standard errors the observation sits from the null value, which is a pure number and can be looked up on the reference curve. This works here because the quantity of interest is a difference of two means and its standard error has already been established.

**The plan.** Divide the observed difference by its standard error. Use the same normal approximation that produced the reported 1.96-based interval. Read the area in both tails beyond that distance. Interpret the area.

**Execution.**

Step 1, the distance. Divide 9.0 by 4.13.

$$z = \frac{9.0 - 0}{4.13} = 2.18$$

Zero is written into the numerator on purpose. It is the null value, and a null placed at some other number would change what gets subtracted and therefore the answer. So the study's difference sits 2.18 standard errors above what the null model expects.

Step 2, the reference curve. This worked example uses a large-sample normal approximation, so the standardized statistic is labelled $z$ and its tail area is read from the standard normal curve. That choice keeps the test consistent with the reported interval, which used the normal multiplier 1.96. The 4.13 mg/dL standard error is still estimated rather than known exactly, so the normal curve is an approximation, not a claim that no uncertainty entered the spread. The last section of this scene compares it with a pooled two-sample $t$ procedure.

Step 3, the tail area. This is the one step you cannot do with arithmetic alone. The area under a bell curve beyond a given distance has no elementary formula, so it is read from a table of the standard normal distribution or returned by a statistical function in software. Look up 2.18: the area beyond it is 0.0146, which is where that number comes from and the only place it could have come from. The alternative is two-sided, so the area at or beyond -2.18 counts too, and it is the same size by symmetry. Adding them:

$$p = 0.0146 + 0.0146 = 0.029$$

**Units, signs, and assumptions.** The 9.0, the 4.13, and the axis of the chart are all in mg/dL. The 2.18 has no units, which is the point of the division. The sign is positive because the late group ran higher; a difference of -9.0 would give $z = -2.18$ and, on a two-sided test, exactly the same *p*. The arithmetic assumes everything listed in the model from scene 2, and the shaded area is only as trustworthy as that list.

**An independent check.** A result sitting exactly two standard errors from centre leaves about 4.6 per cent in the two tails of a normal curve. That figure is worth memorising, because it lets you audit any tail area you are handed without a table. This result sits further out than two, at 2.18, so the answer has to come in below 4.6 per cent. It does, at 2.9 per cent. The check fixes the direction and the ceiling; it will not confirm the third decimal place, and tail areas fall away faster than the distance grows, so do not expect the two figures to sit close.

**A cross-check that has to agree.** Lesson 07 built its interval as 9.0 plus or minus 1.96 standard errors. Since 1.96 x 4.13 = 8.09, the interval runs 0.91 to 17.09, which rounds to the 0.9 to 17.1 already on record. The observed 9.0 is bigger than that 8.09 half-width, so the difference sits further from zero than the 0.05 boundary, and the tail area must therefore come in under 0.05. It does.

Treat this as arithmetic confirming itself and nothing more. The next section explains why the interval could not have disagreed.

**Interpretation.** The number 0.029 answers one question: if the true difference were zero and every other model assumption held, how often would a study like this one produce a difference at least as far from zero as 9.0 mg/dL, in either direction? The answer is about 29 times in 1000.

**Explain it to yourself.** Cover the page and say aloud what each of the three numbers is: what 9.0 measures, what 4.13 measures, and what 0.029 is the probability of. Then explain why this lesson doubles the one-tail area of 0.0146 instead of stopping there, and name the choice in the hypotheses that made both tails count. If the third sentence starts with the words "the probability that", check very carefully what noun comes next. The following scene is about the wrong nouns.
:::

## The interval and the test are one fact, described twice

The cross-check above deserves more attention than it got, because it exposes something that regularly gets miscounted as two pieces of evidence.

Lesson 07 reported an interval of 0.9 to 17.1 mg/dL that excludes zero. This lesson reports *p* = 0.029, which falls under 0.05. Those look like two findings pointing the same way. They are one finding, written in two notations.

A word first, since it is about to do some work. To **reject** a candidate value at the 0.05 level means only this: test that value as the null, and the tail area comes out at or below 0.05. It is a label for where a number fell, and scene 5 returns to how little it licenses.

Both statements are built from the same two numbers, 9.0 and 4.13, and the same reference curve. The interval collects every candidate value of the true difference that the data would not reject at the 0.05 level. Zero sits outside that collection exactly when a test of zero returns *p* below 0.05. The two cannot disagree, because each follows from the other by rearranging one inequality.

:::{equation}
:label: equation-interval-test-equivalence

|9.0 - 0| > 1.96 \times 4.13 \iff 0 \notin (0.9,\ 17.1) \iff p < 0.05
:::

This has a practical consequence. A paper reporting both an interval excluding zero and a *p*-value under 0.05 has not confirmed its result twice. It has reported one result twice. Convergent evidence, in the sense **PREM-SCI-011** developed, requires findings that could have disagreed. These two could not.

The interval carries more information for a reader, because it names the range of effect sizes the data leaves standing. The *p*-value compresses that range into a single yes-or-no distance from one particular value.

## A choice hiding inside the reference curve

One more honesty check, and it prepares the next scene.

The reference curve used throughout this block is the normal curve, and 1.96 is its 0.05 cut-off. The worked statistic is therefore a normal-approximation $z$, not a $t$ statistic. Because the 4.13 mg/dL standard error was estimated from the two groups, a pooled two-sample $t$ procedure is a defensible alternative. It would use the same standardized distance of 2.18 with 30 + 30 - 2 = 58 degrees of freedom. The $t$ curve has slightly heavier tails than the normal curve, so it returns about 0.033 instead of 0.029.

No participant was added and no glucose reading moved; changing only the reference curve shifted the third decimal place. The gap it opened, from 0.029 to 0.033, is about the same size as the gap between 0.048 and 0.052.

The worked example above reads its area from the normal curve, which keeps it consistent with the interval lesson 07 built using 1.96, and here both readings land on the same side of the conventional line. Keep the wobble in mind anyway. A number that moves when you change the curve behind it is a number that should not be carrying a decision on its own.

## Accessibility and alternatives

The chart in this scene is fully readable without seeing it. Its long description states every quantity in the picture, and the numbers behind the curve appear as text alongside it. Nothing in the figure is carried by colour, position, or shape alone.

The whole argument of this scene also runs in five sentences with no picture at all. The null model predicts differences centred on 0 mg/dL with a spread of 4.13 mg/dL. The study recorded 9.0 mg/dL. That is 2.18 spreads away from the centre. Under the null model, results at least 2.18 spreads from centre in either direction occur about 2.9 per cent of the time. That 2.9 per cent is the *p*-value.

Learners who prefer counting to geometry can work the whole lesson from the ratio 9.0 / 4.13 and the tail areas, with no reference to the curve's shape. Learners who want the picture and cannot use a screen can have the long description read aloud; it is written to stand alone as a paragraph of prose.

:::{source-note}
:claims: claim-test-statistic-definition, claim-p-value-definition, claim-ci-test-correspondence
:sources: source-eom-statistical-hypotheses, source-p-value-misinterpretations

The encyclopedia entry supports the construction of a test from a function of the observations chosen to take larger values as the data depart from the hypothesis. The methodological guide supports the definition of the probability reported by a test as the chance, computed with every model assumption in force, of a test statistic at least as large as the one observed; it also supports the correspondence between an interval at a stated level and the set of hypothesised values whose tests exceed the matching cut-off. The study, its 60 participants, and every number computed from them are invented for teaching.
:::
