# The nouns that go wrong

Scene 1 left four wrong readings of *p* = 0.029 on the table, and scene 3 left you with the correct one. Three of the four are taken apart here. The fourth, the visiting student's relief that the number came in under 0.05, belongs to the scene after this one.

Put the correct reading beside the three now, because the distance between them is the point of this lesson.

The correct reading: *if* the true difference were zero and the rest of the model held, differences at least 9.0 mg/dL from zero would turn up about 29 times in 1000 studies like this one.

The registrar's reading: there is a 2.9 per cent chance the whole thing is a fluke.

The dietitian's reading: dinner timing really does matter, 97 times out of 100.

The consultant's reading: the effect is small, because 0.029 is a small number.

Every one of the three is a statement about the world. The correct reading is a statement about data, made on the assumption that a particular claim about the world is already settled. Getting from the first kind of sentence to the second is the move this scene blocks.

## The screening error, back for a second go

:::{misconception}
:id: misconception-inverted-p-value

**Elicit it first.** Before reading on, write down which of the registrar's and dietitian's sentences you find more obviously wrong, and why. Most people find the dietitian's harder to fault, and that is worth knowing about yourself.

**The incorrect model, stated plainly.** The *p*-value is treated as the probability that the null hypothesis is true. On that model, *p* = 0.029 means the null has a 2.9 per cent chance of being correct, so the effect has a 97.1 per cent chance of being real. The registrar's sentence and the dietitian's sentence are the same claim, one subtracted from 1.

**Why it appeals.** Both quantities are probabilities, both are attached to the same study, and English lets you slide between them without any grammatical warning. "The probability of the data given the hypothesis" and "the probability of the hypothesis given the data" differ by two words in the middle of a long phrase.

**The disconfirming observation.** Suppose a second team runs a study of the same size and the same design, testing whether a patient's birth month changes fasting glucose. Their data comes out 9.0 mg/dL apart with a standard error of 4.13, so their arithmetic is identical to ours, and they report *p* = 0.029.

If the *p*-value were the probability that the null is true, then the claim that birth month does nothing to glucose would now have a 2.9 per cent chance of being correct. Nobody accepts that conclusion. The arithmetic knew nothing about birth months, and it knew nothing about dinner timing either. It was handed a difference and a standard error, and it would have returned 0.029 for any pair of numbers in that ratio.

The calculation never saw the subject matter, so it cannot be reporting how likely that subject matter is.

**The better model.** The *p*-value is a probability computed **about data, under an assumed model**. Its conditioning event is the hypothesis. Lesson 04 gave you the machinery for this in the screening tables: moving from P(A given B) to P(B given A) requires knowing how common the conditioning event was to begin with, and the swap turned 0.90 into 0.269 in one clinic and 0.818 in another. The *p*-value carries no equivalent of that starting frequency. It never asked how plausible the null was before the data arrived, so it cannot report how plausible the null is afterwards.

**The same case, both models.** For the dinner-timing study, the incorrect model says the null has a 2.9 per cent chance of being true. The better model says that data this far from zero shows up 2.9 per cent of the time when the null is true. The first is a claim about dinner timing. The second is a claim about what studies produce, given a stipulation about dinner timing. The study supports the second and is silent on the first.

**Recheck in a new case.** A trial reports *p* = 0.004 for a difference in six-month wound healing. Write the correct sentence for it, then write the inverted one, and mark which noun changed. If your correct sentence contains the phrase "the probability that the treatment", start again.
:::

## The word "chance" does the same damage

There is a more careful-sounding version of the registrar's sentence, and it fails for the same reason. It comes out as: *p* = 0.029 means there is a 2.9 per cent probability that the result was produced by chance alone.

Read that against how the number was built. In scene 3 the tail area was computed on a curve that describes a world where chance alone is operating. Chance acting alone was the assumption, supplied at the start, and the whole calculation runs inside it.

A probability deduced from a set of assumptions cannot also be the probability that those assumptions hold. The 2.9 per cent is what chance alone predicts. It is a conclusion drawn from the premise, and it cannot be turned around and used to grade the premise.

There is a further trap in the word "alone". Chance was one of several assumptions in scene 2's list. A small *p*-value tells you the data sits awkwardly against the whole list. Whether the awkwardness came from the null, from correlated nights, from unequal spreads, or from three unreported comparisons is a question no *p*-value answers.

## A small p-value is not a large effect

The consultant's sentence has its own failure mode, and a pair of invented studies exposes it cleanly.

| Study | Participants | Difference | Standard error | *t* | Two-sided *p* |
| --- | ---: | ---: | ---: | ---: | ---: |
| Dinner timing, as run | 60 | 9.0 mg/dL | 4.13 | 2.18 | 0.029 |
| A larger study | 1200 | 2.0 mg/dL | 0.92 | 2.17 | 0.030 |

The second study finds an effect less than a quarter the size of the first, and reports almost the same *p*-value. Run the arithmetic yourself: with 600 per group and a within-group spread of 16 mg/dL, the standard error is 16 x sqrt(2/600) = 0.92, and 2.0 / 0.92 = 2.17.

The *p*-value moved hardly at all because it measures distance in standard errors, and the larger study bought a much smaller standard error. Effect size and precision both feed into it, and the number that comes out has no way of telling you which one it is reporting. The size of the effect in the dinner-timing study is 9.0 mg/dL. That figure sits in the results table, unchanged by any test, and the interval of 0.9 to 17.1 mg/dL describes its uncertainty. Neither of those facts can be recovered from 0.029.

## A large p-value is not a demonstration of nothing

A fourth error runs the other way. Nobody in Thursday's meeting made it, because the study came in under the line, which is exactly why it is worth installing before you need it. It does more quiet damage than the other three, since it usually arrives dressed as a conclusion.

Suppose the dinner-timing study had recruited 30 people instead of 60, split 15 and 15. The observed difference comes out 9.0 mg/dL again, exactly as before. The standard error is now 16 x sqrt(2/15) = 5.84, so *t* = 9.0 / 5.84 = 1.54 and the two-sided *p* is 0.12.

Dinner timing behaved identically in the two versions. The effect is 9.0 mg/dL in both. Half the sample and a *p*-value of 0.12 is a study that failed to pin the difference down, and a report of "no effect" would be describing the study rather than the biology.

The honest reading of *p* = 0.12 goes like this: a difference of 9.0 mg/dL sits comfortably inside the range this small study would produce even if the truth were zero, so zero remains a live possibility. Many other values also remain live, including 9.0 and 15.0. Ruling zero back in is a claim the data does not support any more than ruling it out would have been.

:::{callout}
:kind: note

What a study of a given size can and cannot detect has its own lesson. **PREM-STA-009** takes up the question of what this study might have missed and what testing many things at once would cost. The point to carry out of here is narrower: a *p*-value above the conventional line reports a failure to distinguish, and it does not establish a zero.
:::

:::{source-note}
:claims: claim-p-not-hypothesis-probability, claim-p-not-chance-probability, claim-p-not-effect-size, claim-nonsignificance-not-no-effect
:sources: source-asa-p-value-statement, source-p-value-misinterpretations

The association's statement of principles supports the propositions that a probability of this kind measures neither the probability that the studied hypothesis is true nor the probability that the data arose by chance alone, and that it does not measure the size or the importance of an effect. The methodological guide supports the same three points in detail, together with the correction that a result above the conventional cut-off leaves the tested hypothesis as one of many values compatible with the data and so does not demonstrate absence of an effect. The dinner-timing study, the birth-month study, the larger study, the reduced study, and every number in them are invented for teaching.
:::
