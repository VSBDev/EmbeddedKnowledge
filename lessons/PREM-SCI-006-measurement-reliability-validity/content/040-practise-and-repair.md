# Separate scatter from shift, then ask what the value means

Begin without looking back. Write the four audit questions in your own words. Then complete this sentence:

> Repeated agreement tells me ___ under ___ conditions; it does not by itself tell me ___ or ___.

A strong reconstruction says that repeated agreement supplies evidence about precision under stated conditions. It does not by itself show agreement with a reference or support the intended construct interpretation.

## Completion problem: two instruments, two patterns

Two fictional instruments measure the same stable 50.0-unit reference under one set of repeatability conditions.

| Replicate | Instrument A | Instrument B |
| ---: | ---: | ---: |
| 1 | 49.6 | 52.0 |
| 2 | 50.4 | 52.1 |
| 3 | 49.7 | 52.0 |
| 4 | 50.3 | 51.9 |
| 5 | 50.0 | 52.0 |

Before reading the feedback, calculate each mean and range. Decide which instrument has less short-term scatter and which has the smaller shift from the reference.

- Instrument A has mean 50.0 and range 0.8 units. Its results scatter more, but their mean matches the stated reference in this small set.
- Instrument B has mean 52.0 and range 0.2 units. It is more repeatable here, yet its results share an approximately +2.0-unit shift.

The comparison does not establish each instrument's behavior outside the tested range or conditions. It does show why “more repeatable” and “closer to this reference” are different judgments.

:::{misconception}
:id: misconception-average-fixes-error
:kind: repair

**Commit first.** If the laboratory collects 100 more Instrument B readings and averages them, will the +2.0-unit pattern necessarily disappear?

**Tempting model:** every kind of measurement error cancels when enough readings are averaged.

**Why it fails:** repeated values that remain shifted in the same direction carry that shift into their mean. More readings can characterize or reduce suitable random variation, but they do not identify and remove a stable offset by arithmetic alone.

**Repair:** separate scatter from shift. Use replicates to study dispersion; use a defensible reference, calibration relation, method comparison, or design change to investigate a systematic component.

**Recheck:** five readings are 47, 53, 48, 52, and 50 for a 50-unit reference. Their mean is 50 despite broad scatter. The average happens to match the reference in this set, but the individual measurement process is not precise.
:::

## Supported problem: name the conditions that changed

A reference sample has an assigned value of 8.0 units. One operator uses Instrument C in Laboratory 1 on Monday and obtains 7.9, 8.0, and 8.1. A different operator uses Instrument D in Laboratory 2 on Friday and obtains 8.8, 8.9, and 9.0.

Answer in three lines:

1. What evidence concerns repeatability?
2. What evidence concerns reproducibility?
3. What should the team investigate next?

Both triplets are tightly grouped, so each supplies condition-specific repeatability evidence. Agreement becomes worse when operator, instrument, laboratory, and day all change together, so the between-set comparison raises a reproducibility problem. Because four conditions changed at once, the table does not identify which condition caused the shift. The team should vary conditions in a planned way, check both systems against appropriate references, and document any calibration and correction.

## Less support: ratings are also measurements

Two trained observers independently classify the same 20 original microscope images using a written low, medium, or high surface-damage rule. They agree on 18 classifications.

Write one warranted statement and two unwarranted statements before reading on.

A warranted statement is that the observers show high agreement on this image set under the stated coding rule. It would be unwarranted to claim that the rule measures the full biological construct of “cell health” or that the same agreement will hold for other observers, microscopes, preparations, or image sets. Agreement across raters addresses rater-related consistency; it does not settle every other error source or the intended meaning.

## Independent audit: a narrow indicator with a broad name

A fictional campus study defines **social belonging** as “the number of messages a student sends in one week.” The automated count is exact and gives the same result whenever the stored log is processed again.

Without using personal data or proposing surveillance, write a four-part critique:

1. identify the target construct and the operation;
2. state what the processing consistency does establish;
3. identify one way the operation may omit part of belonging and one irrelevant influence it may include; and
4. propose two kinds of evidence that could test the intended interpretation in an ethically collected, consented study.

Use this feedback after attempting the critique:

- If you wrote only “invalid,” name the proposed interpretation and why the available evidence is insufficient.
- If you treated an exact count as proof of belonging, separate record accuracy from construct meaning.
- If you proposed another measure with the same messaging bias, choose a different method or a theoretically distinct comparison.
- If your evidence plan requires private communication logs, replace it with consented, purpose-limited data or a non-identifying supplied dataset. Measurement quality never removes privacy obligations.

:::{source-note}
:claims: claim-operational-definition, claim-error-components, claim-averaging-boundary, claim-repeatability-reproducibility, claim-calibration-traceability, claim-validity-interpretation, claim-construct-evidence, claim-consistency-not-sufficient
:sources: source-nist-operational-definition, source-jcgm-vim, source-nist-tn1297, source-testing-standards

The sources support the scatter/shift distinction, conditional meanings of repeatability and reproducibility, limits of averaging, rater-related error, and construct-validity questions. All values, images, instruments, and campus scenarios are original fictional teaching material.
:::
