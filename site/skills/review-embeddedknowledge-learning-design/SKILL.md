---
name: review-embeddedknowledge-learning-design
description: Independently review one frozen EmbeddedKnowledge lesson candidate for first-read clarity, natural learner-facing prose, learner fit, explanatory coherence, cognitive support, worked examples, retrieval, practice, feedback, misconception repair, transfer, assessment alignment, mastery, and remediation. Use when assigned the learning-design quorum role and asked for a structured review against an exact candidate commit.
---

# Review EmbeddedKnowledge learning design

Produce one independent learning-design verdict against one frozen candidate commit. Do not edit the lesson, act as author, perform another quorum role, adjudicate, push, or merge.

## Establish the review boundary

1. Locate the repository root with `git rev-parse --show-toplevel`.
2. Require the lesson-pack path, lesson ID and version, exact 40-character candidate commit, accountable GitHub principal, actual agent system/provider/model/version, a unique run ID, and the discloseable material-instructions digest.
3. Stop if the candidate commit is missing, the pack identity differs, or the presented teaching content is not identical to the candidate.
4. Read `AGENTS.md`, `CONTENT-STANDARD.md`, `FORMAT.md`, `lessons/README.md`, `REVIEWING.md`, `site/agent/quorum-policy.json`, `site/schemas/review.schema.json`, and `.github/REVIEW_TEMPLATE/learning-design.md`.
5. Inspect the candidate pack and mapped graph outcomes. Do not read the authoring conversation, other review conclusions, or an adjudication draft. Do not invoke another EmbeddedKnowledge role skill in this run.
6. Declare conflicts, learning-design expertise limits, unavailable learner evidence, and test-environment limits.

## Verify the frozen candidate

Inspect the exact candidate commit. Review all declared scenes, objectives, prerequisites, assessment items, feedback, glossary entries, representations, accessibility equivalents, and recovery paths that affect learning design.

Treat any post-candidate change to teaching content or pack metadata as a stale-review blocker. Do not count successful rendering or schema validation as evidence that students will learn.

## Cold-read the learner experience before checking the rubric

1. Use `lesson.json` only to establish scene order, then read the learner-visible scene Markdown once without first reading claims, references, the authoring brief, prior review material, or validator output. Temporarily ignore `{source-note}` mechanics and judge the explanation a learner actually meets.
2. After the opening and first substantive explanation, state in your own plain language: what the learner is about to learn, why it matters, and how the central relation or procedure works. If the prose does not let you do this at the declared prerequisite level, record a `major` finding even when every required component exists.
3. Apply the first-read gate in `CONTENT-STANDARD.md`. Flag unexplained abstractions, strings of nominalized jargon, internal project machinery, rubric language exposed as teaching, caveats that bury the idea, needless repetition across scene kinds, and sentences that are grammatical but unnatural to say aloud.
4. Check the opening specifically. It must give the learner something concrete to picture, explain, predict, or do before demanding interest in definitions, objectives, exclusions, or course administration.
5. Check motivation without demanding entertainment. The lesson should reveal a meaningful question and attainable progress; decorative anecdotes, hype, and unsupported claims of importance do not repair an opaque explanation.
6. Quote the exact learner-facing words that create a comprehension failure and describe the learner consequence. Do not report a vague style preference.

This cold read is an approval gate, not a readability score and not evidence that real learners mastered the outcome. Continue with the structured instructional trace only after recording the first-read result.

## Trace the instructional argument

1. Identify the intended learner, prior knowledge, target outcome, exclusions, and observable mastery evidence.
2. Verify constructive alignment from graph outcome to objective, explanation, worked use, practice, transfer, assessment, feedback, and remediation.
3. Check that prerequisite knowledge is activated and that a usable recovery route exists.
4. Reconstruct the central explanatory model. Require explicit causal or logical relations, stable terminology, assumptions, limits, and coherent transitions.
5. Check that examples expose expert decisions and self-checks rather than only displaying final steps.
6. Verify that support fades from modeled reasoning to prompts to independent performance without removing necessary conceptual explanation.
7. Require retrieval before answer reveal, information-rich feedback, varied practice, a genuine transfer task, and delayed or cumulative retrieval links.
8. Check that misconceptions are elicited or made plausible, explicitly contrasted with the target model, and tested with a discriminating case.
9. Verify that every diagram, equation, chemical representation, table, analogy, and interaction has a declared instructional job and is explicitly connected to the prose.
10. Check scene boundaries, resumability, navigation cues, and continuous-reading coherence. Reject mechanical one-scene-per-rubric construction and repeated explanations, but do not impose a universal word, page, frame, or interaction quota.
11. Attempt all checks and assessments as the intended learner. Confirm answer logic, rubrics, mastery thresholds, retries, feedback, and remediation are aligned and usable.
12. Look for cognitive overload, unexplained inference jumps, decorative detail, false fluency, redundant busywork, and practice that merely repeats surface features.

Use evidence from the lesson and established learning principles, but do not make unsupported promises about effect sizes or learner outcomes. Flag suspected scientific errors for academic review without converting this role into an academic approval.

## Classify findings and verdict

Use exact pack-relative paths and stable IDs.

- Use `blocking` when the lesson cannot validly or safely teach or assess its claimed outcome.
- Use `major` for first-read comprehension failure, missing explanatory links, invalid alignment, absent transfer, misleading practice, unusable feedback, or assessment that cannot support the mastery claim.
- Use `minor` for bounded sequencing, wording, cueing, or support issues.
- Use `note` for verified strengths, limitations, or nonblocking observations.

Choose `request-changes` for unresolved major or blocking findings. Choose `abstain` when conflict, expertise, access, or learner-context limits prevent a responsible verdict. Choose `approve` only when the declared learner can understand the first read, the instructional argument is coherent, and the mastery evidence is aligned; approval may contain minor findings. Include at least one substantive finding.

## Produce the artifact

1. Follow `.github/REVIEW_TEMPLATE/learning-design.md` and `site/schemas/review.schema.json` exactly.
2. Set `role` to `learning-design` and target the exact candidate commit.
3. Record evidence actually inspected, including stable scene and assessment targets.
4. State concrete findings, learner consequences, resolutions, limitations, conflict status, accountable principal, and real agent provenance.
5. Output one fenced `embeddedknowledge-review` JSON block suitable for an equivalent GitHub review submission.
6. Do not write the artifact into the pack unless explicitly requested. The operator must preserve it exactly.
7. After it is saved, run `npm run validate`. Report structural failures separately from the learning-design verdict.
8. Never claim quorum or merge readiness; one learning-design approval is only one eligible vote.
