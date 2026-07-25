# Two ways to be wrong, and only one of them was chosen

The dinner-timing study has reported. Late diners averaged 9.0 mg/dL higher fasting glucose than early diners, the standard error of that difference was 4.13 mg/dL, and the two-sided $p$ came out at 0.029. The previous lesson said what that $p$ claims and what it does not.

Two questions were never put to the study, and both of them were settled before a single reading was taken.

Here is the first. Suppose dinner timing makes no difference whatsoever. How often would a study run exactly this way still report a gap big enough to cross the threshold? Somebody fixed that answer at 5 in 100 when they chose 0.05, and they chose it in advance, on purpose.

Here is the second. Suppose dinner timing does make a difference, a real one of about 9 mg/dL. How often would a study run exactly this way report a gap too small to cross the threshold, and send everyone home with nothing? Nobody chose that answer. It fell out of the sample size, the variability of fasting glucose, and the threshold, and for sixty people it comes to about 41 times in 100.

Four in ten. This study did cross its threshold. It did so with a design that, facing a real effect of that size, would have come back with nothing in four repeats out of ten, and the report carries no trace of that number.

There is a third question, and it is the one that changes how you read almost every paper you will ever open. The dinner-timing report did not examine one comparison. It looked at fasting glucose, at adherence, at the number of nights completed, at two more besides. Five comparisons, each judged against 0.05. Suppose nothing in the study were real and the five comparisons were independent of one another. The probability that at least one of them crossed anyway is 0.226.

## What you will be able to do

By the end of this lesson you will be able to name the two ways a test can be wrong and say which one a chosen threshold controls; calculate the power of a stated design against a stated effect, and the effect a design could detect with 80% power; predict what happens to power when the sample size, the variability, the threshold, or the size of the real effect changes; explain why a small study reporting "no difference" has usually shown nothing at all; and work out how much a study's chance of at least one false alarm rises when it runs several comparisons instead of one.

## Two words that mean something narrower here

Both of the words this lesson is built on already mean something else in ordinary English, and both ordinary meanings will get in the way.

**Error.** In a hospital an error is a mistake: a mis-transcribed value, a meter out of calibration, the wrong dose drawn up. None of that is what a **Type I error** or a **Type II error** means. A test that commits either one has been carried out correctly, on honest data, by people who did nothing wrong. The word marks a decision that turned out not to match reality, and the whole point of this lesson is that a proportion of such decisions is unavoidable and can be worked out in advance. Keep the ordinary meaning available for meters and prescriptions, because that meaning is real and this lesson does not cover it. From here on, an error is a decision, not a mistake.

**Power.** In everyday speech power is force, or authority, or the electricity supply. In algebra it is an exponent, the *p* in $y = kx^{p}$, which is the sense the proportional-models lesson used. Statistical **power** is none of those. It is a probability between 0 and 1: the chance that a study, designed as it is, would detect an effect of a stated size if that effect were really there. A study with power 0.59 is not a forceful study. It is a study that would find what it is looking for about three times in five.

Neither word gets used in its ordinary sense again in this lesson.

## Bring forward four things you already have

:::{check}
:id: check-prerequisites-null-p-se
:kind: diagnostic

Answer each in a sentence before reading on.

1. The study's difference has a standard error of 4.13 mg/dL. What does that 4.13 describe?
2. The two-sided $p$ was 0.029. State what event has probability 0.029, and what is being held true while that probability is computed.
3. A test rejects the null hypothesis when $p$ falls below 0.05. Where did the 0.05 come from?
4. Two coins are tossed independently. Each lands heads with probability 0.5. What is the probability that at least one lands heads, and how did you get it without listing cases?
:::

The 4.13 is the spread of the difference across repeats of the study: run it again on sixty other adults and the reported gap moves, and 4.13 mg/dL says by roughly how much. The 0.029 is the probability of a difference at least as far from zero as 9.0 mg/dL, computed while holding the null hypothesis and the study's assumptions true. The 0.05 came from a person, not from the data; it is a convention someone adopted. And the coins are 1 minus the probability of no heads, $1 - 0.5^{2} = 0.75$, which is the complement rule applied to independent events. That last piece of arithmetic returns in scene five doing much heavier work.

:::{callout}
:kind: recovery

## Recovery route

If the standard error was the shaky one, go back to the sampling distributions lesson; everything here treats 4.13 as a known quantity and does not rebuild it. If the $p$-value answer came out backwards, the hypothesis-testing lesson immediately before this one is the repair, and this lesson assumes it. If the complement rule felt unfamiliar, the probability foundations lesson introduces it and computes $1 - 0.95^{5}$ on the same study. No score is needed from any of them.
:::

## What this lesson does not do

You will not learn how large an effect has to be before it matters to a patient. That is a clinical judgement, it is the last lesson of this block, and nothing here anticipates it. You will not learn how to describe the size of an association, which is the lesson after this one. And the terms *false positive* and *false negative* appear here as properties of a **decision rule applied to a study**; the same two words describe a diagnostic test applied to a patient, and that use belongs to the lesson on risk and diagnostic measures.

**Teaching example, not medical advice.** The sixty-person cohort, its difference of 9.0 mg/dL, its standard error of 4.13, and every study, clinic, and journal club below are invented for teaching and kept consistent across this block. Nothing here reports a finding about real patients or supports a change to anyone's care.

## Accessibility and alternatives

Two charts appear in this lesson. Each carries a written description and its underlying numbers as a table, both reachable under "Read the chart as text", and every quantity a chart shows is also stated in the surrounding prose. The first chart shows two overlapping curves; the areas that matter on it are named and given as numbers in the text, so nothing depends on judging a shaded region by eye.

The arithmetic is multiplication, division, a square root, and reading a value from a normal curve. A calculator is expected. No question depends on mental arithmetic, on colour, on a pointer, or on estimating a length from a picture, and every practice item can be answered from figures printed in its own text.

:::{source-note}
:claims: claim-alpha-is-chosen, claim-beta-and-power, claim-multiplicity-inflates-false-positives
:sources: source-greenland-misinterpretations, source-nist-statistical-tests, source-chen-multiple-comparisons

These sources support the description of the significance level as a cut-off fixed in advance as part of the study design, the naming of the probability of failing to reject a false test hypothesis as the Type II or beta error rate with power as its complement, and the statement that testing several hypotheses at once raises the probability of incorrectly rejecting at least one of them. The cohort, its figures, and every scenario in this lesson are original teaching material.
:::
