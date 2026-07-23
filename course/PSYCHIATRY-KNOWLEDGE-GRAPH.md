# Psychiatry knowledge graph and contribution intake

**Version:** 0.1.0 proposal

**Status:** external review required; merging this proposal opens lesson intake for the reviewed common-academic outcomes

**Canonical source:** `scripts/build-psychiatry-graph.mjs`

**Generated artifact:** `site/data/psychiatry-graph.json`

**Content licence:** CC BY 4.0

## Purpose and boundary

This graph turns the 1,440-hour common academic core in `PSYCHIATRY-SYLLABUS.md` into stable, contribution-sized learning outcomes. It is a curriculum map for open education, not a diagnostic system, treatment guide, residency, clinical placement, licence, board-eligibility route, or authorization to practise psychiatry. Real-patient care, prescribing, psychotherapy delivery, compulsory-care decisions, workplace supervision, and protected professional titles remain outside EmbeddedKnowledge.

Every learner-facing clinical example must therefore use fictional, de-identified, or fully consented material; distinguish education from advice; preserve uncertainty and alternatives; and state when local law, policy, culture, access, or service context controls the answer.

## Shape

The generated graph contains:

- 4 developmental stages;
- 26 syllabus modules;
- 154 atomic, observable outcomes;
- 1,440 hours of common academic study and simulation;
- 180 hierarchy links, 178 prerequisite links, and 27 bidirectional cross-concept pairs (54 directed cross-links are represented as 27 graph relationships);
- three non-credential routes: open scholar, physician learner, and educator/system learner.

The optional 120–240-hour area of depth is deliberately excluded. It should receive a separate graph only after pathway hosts, supervision, assessment, and jurisdictional boundaries exist.

## Stable identity

Topic IDs use `topic-psy-<module>-<slug>`, for example `topic-psy-101-field-and-boundaries`. Human-facing topic codes use `<module>.<sequence>`, for example `PSY-101.01`.

Once this graph is merged, an outcome ID is permanent. Editorial improvements change its title, summary, evidence, or version; they do not silently recycle its ID. A materially different learning destination receives a new ID, and any retirement is recorded with an explicit replacement or no-replacement decision. Lesson IDs use `PSY-<AREA>-<NNN>` and map only to Psychiatry graph outcomes.

## Relationship semantics

- `contains` expresses stage → module and module → atomic-outcome membership.
- `prerequisite` points from the earlier outcome to the outcome that depends on it. The prerequisite layer must remain acyclic.
- `cross-link` records a meaningful conceptual bridge that is not a prerequisite. The source declarations are symmetric; the public graph stores each pair once.

Prerequisites are deliberately sparse. They signal a learning dependency, not merely a useful association. Cross-links make recurring strands—rights, culture, lived experience, uncertainty, safety, evidence, and systems—visible without forcing a false linear sequence.

## Evidence and status

The graph synthesizes the Psychiatry syllabus, its dated source catalog, and primary specialist-training frameworks from ACGME, the Royal College of Psychiatrists, the Royal College of Physicians and Surgeons of Canada, RANZCP, UEMS, WPA, WHO, and WHO/OHCHR. Source tags support audit; they do not imply endorsement or equivalence to any training program.

All 154 outcomes carry `evidenceConfidence: pending-external-review` in this proposal. No expert, trainee, or lived-experience approval is claimed by the artifact or by automated validation.

## Review requested before merge

This proposal should not be marked ready until its scope, omissions, ordering, workload, language, and rights posture have been reviewed in public by a deliberately plural group that includes, where available:

- practising psychiatrists from more than one jurisdiction and service setting;
- current psychiatry residents or trainees;
- people with lived experience, survivor perspectives, peer workers, carers, and family advocates, without treating any one voice as representative of all;
- nursing, psychology, social work, occupational therapy, pharmacy, primary care, emergency medicine, and public-health perspectives;
- specialists in education, measurement, statistics, disability access, culture, human rights, privacy, security, and open licensing.

Reviewers should identify missing or overclaimed outcomes, unsafe sequencing, culturally narrow assumptions, coercive or stigmatizing language, hidden prerequisites, infeasible workload, and areas where a route should stop rather than simulate clinical authority. Disagreement should be documented, not averaged away.

## Intake rule after merge

Merging this graph opens focused lesson proposals for its common-academic outcomes under the existing Lesson Format v1, evidence, rights, provenance, independent review, and fresh-finalization contracts. It does not publish a lesson, count the specimen, or waive quorum. An outcome is available only when it has no merged lesson and no active lesson proposal in `site/data/psychiatry-open-prs.json`.

The first intended contribution target is `topic-psy-101-field-and-boundaries`. A local welcome-lesson prototype may inform a later candidate, but it must not enter `lessons/` or count toward coverage until this graph and intake contract are merged and the authoring skill is run fresh against the live target state.

## Deterministic maintenance

Run:

```bash
npm run graph:build
npm run graph:validate
npm run site:build
npm run validate
```

Edit the builder, not the generated JSON. Validation checks identity, endpoints, graph shape, declared relationships, course hours, prerequisite acyclicity, routes, source tags, outcome form, and the pending-review marker. Automated validation establishes internal consistency only; it cannot substitute for the external review requested above.
