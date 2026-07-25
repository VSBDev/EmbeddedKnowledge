# Clinical wrap-up: audit the diabetes crossover study

This is how the dinner-timing study decides who gets in, how nights are assigned, and who is kept unaware.

**Teaching example—not medical advice.** This invented study setup exists only to practise design reasoning. It makes no claim that earlier or later dinner changes glucose and gives no guidance for care.

PREM-SCI-004 chose a within-person (crossover) comparison of earlier versus later dinner nights, with next-morning fasting glucose as the outcome. Keep that design; do not re-derive it here.

This scene retrieves only the four-question audit. It does not establish that the full crossover comparison is valid or replace the design-specific assumptions taught in PREM-SCI-004.

## Entry: give the estimate an address

Suppose the study makes adults with type 2 diabetes on one clinic list eligible, then recruits volunteers from that list. The resulting estimate describes eligible volunteers reachable through that clinic route. It does not automatically describe every adult with type 2 diabetes or people recruited through other settings.

That is an external-validity boundary, not damage to the within-person comparison. Each enrolled participant contributes an earlier-dinner night and a later-dinner night, so the narrow entry route limits who the comparison describes without making one timing come from a different recruited population.

## Allocation: let chance set the night order

For each participant, a prespecified chance procedure sets whether the earlier- or later-dinner night comes first. Across the possible assignments, chance rather than participant or researcher preference determines that order, so the earlier-first and later-first sequence groups are comparable in expectation with respect to order assignment. This claim is only about how order was assigned; it does not establish the validity of the full crossover comparison.

Randomization does not promise perfect matching in one small realized run. Chance imbalance can remain, so the observed schedule must not be described as balanced merely because its order was randomized.

## Foreknowledge and awareness: separate the moments

The prespecified night-order sequence is concealed from anyone who could decide whether an eligible participant enters until consent and enrolment are irrevocably recorded. This is allocation concealment in the person-by-person recruitment step. It acts before the upcoming order becomes knowable and protects entry from being steered through foreknowledge.

After allocation, the participant necessarily knows whether dinner is earlier or later on a given night. The exposure is therefore open-label. That is a blinding question because the awareness exists after allocation; concealment cannot make the participant unaware of a timing already in progress.

The person reading or handling the next-morning glucose result can still be blinded to which dinner timing came before it, for example by receiving the result under a neutral study code. This step acts after allocation and protects result handling from knowledge of the assigned timing. It does not change who entered, how the order was chosen, or what the participant knew.

## The four-question audit

- **Entry:** one clinic list and its eligible volunteers set the population the estimate describes.
- **Allocation:** prespecified chance sets the order and supports comparability in expectation for the order assignment, without validating the full crossover comparison.
- **Foreknowledge:** concealment keeps the assigned order unknowable until consent and enrolment are committed.
- **Awareness:** the participant knows the dinner timing, while the person handling the glucose result can remain unaware of it.

That audit supports only a bounded account of entry, order assignment, foreknowledge, and awareness among the recruited participants. It does not by itself validate the crossover comparison, assert that the dinner timings produce different glucose results, or suggest that either timing should be preferred.

The next lesson, **Measurement: reliability and validity**, asks whether dinner time and fasting glucose are measured well.

:::{source-note}
:claims: claim-entry-bounds-applicability, claim-random-allocation-comparability, claim-concealment-definition, claim-concealment-blinding-distinct, claim-blinding-definition-scope, claim-blinding-prevents
:sources: source-consort-2025-elaboration, source-blinding-overview

The cited trial guidance and blinding review support the general distinctions applied here: entry bounds applicability, chance-based assignment supports comparability in expectation without guaranteeing a realized result, concealment protects an open entry decision from foreknowledge, and blinding concerns knowledge after allocation. Their principal scope is clinical trials, especially individually randomized parallel-group designs. This fictional crossover scene uses those distinctions only for a bounded four-question retrieval audit and does not treat them as evidence that all crossover-specific validity conditions have been met.
:::
