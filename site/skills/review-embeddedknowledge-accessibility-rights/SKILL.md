---
name: review-embeddedknowledge-accessibility-rights
description: Independently review one frozen EmbeddedKnowledge lesson candidate for accessibility, equivalent learning paths, semantic structure, reflow, interaction access, media provenance, licensing, privacy, security, attribution, and agent disclosure. Use when assigned the accessibility-and-rights quorum role and asked for a structured review against an exact candidate commit.
---

# Review EmbeddedKnowledge accessibility and rights

Produce one independent accessibility-and-rights verdict against one frozen candidate commit. Do not edit the lesson, act as author, perform another quorum role, give legal advice, adjudicate, push, or merge.

## Establish the review boundary

1. Locate the repository root with `git rev-parse --show-toplevel`.
2. Require the lesson-pack path, lesson ID and version, exact 40-character candidate commit, accountable GitHub principal, actual agent system/provider/model/version, a unique run ID, and the discloseable material-instructions digest.
3. Stop if the commit, pack, or candidate identity cannot be verified.
4. Read `AGENTS.md`, `CONTENT-STANDARD.md`, `FORMAT.md`, `lessons/README.md`, `CONTENT-LICENSE.md`, `RIGHTS-POLICY.md`, `REVIEWING.md`, `site/agent/quorum-policy.json`, `site/schemas/review.schema.json`, and `.github/REVIEW_TEMPLATE/accessibility-rights.md`.
5. Inspect the exact candidate pack. Do not read the authoring conversation, other review conclusions, or an adjudication draft. Do not invoke another EmbeddedKnowledge role skill in this run.
6. Declare conflicts and limitations, including jurisdictional limits. Treat the rights review as evidence and policy checking, not a legal opinion.

## Verify the frozen candidate

Inspect every declared scene, diagram, image, structured molecule, asset, interaction dependency, attribution record, third-party asset declaration, and relevant assessment path from the candidate commit.

Treat post-candidate changes to content, metadata, assets, diagrams, attribution, claims, or assessment as stale-review blockers. Treat automated accessibility checks as useful evidence, never complete proof.

## Audit accessibility

1. Verify that semantic source order matches reading and focus order and that headings, lists, tables, equations, controls, and landmarks carry meaningful structure.
2. Check complete keyboard operation, visible focus, sensible focus return, touch access, reduced-motion behavior, and alternatives to hover, drag, sound, animation, timing, color, position, or physical manipulation alone.
3. Check reflow at narrow widths and 200% zoom, bounded overflow for math and chemistry, readable typography, contrast, print continuity, and stable navigation.
4. Verify concise alt text plus a long description, data table, transcript, or stepwise equivalent whenever the visual relationship carries learning content.
5. Confirm that the nonvisual route teaches and assesses the same outcome rather than merely naming the image.
6. Check accessible math and chemistry source, pronunciation or symbol clarity where needed, diagram relationships, captions, legends, and explicit connections between representations.
7. Check plain-language orientation, consistent terms, recovery guidance, predictable interactions, error identification, retry support, and freedom from unnecessary time pressure.
8. Attempt the lesson with keyboard-only and narrow-screen paths. Use available automated checks, then perform manual semantic and equivalent-learning review.

## Audit rights, privacy, and content security

1. Trace every source and asset to its declared use, rights basis, evidence, creator, license, attribution, modification notice, and permission for the proposed reuse or adaptation.
2. Reject “free to view,” search-result availability, or absent notices as proof of reusable rights.
3. Compare lesson language, organization, examples, questions, tables, diagrams, and media with likely sources. Request changes for close paraphrase or source-derived expression without a permitted basis; a citation alone is not permission.
4. Confirm that original course content uses the adopted license and that exceptions, trademarks, personal data, and third-party terms remain separate.
5. Verify each source's dated `agentAccess` record. Treat evidence that an agent processed a `human-only` source as a blocking provenance and rights failure.
6. Check for identifiable learner or patient information, unsafe clinical media, secrets, copyrighted answer banks, and unnecessary personal data.
7. Inspect SVG, diagrams, TeX, links, paths, and embedded material for active content, remote dependencies, event handlers, arbitrary reads, traversal, scripts, or other executable behavior.
8. Verify accountable author and agent provenance without requiring disclosure of unavailable hidden system instructions.
9. Record uncertainty where license compatibility, consent, privacy, or jurisdiction cannot be established. Request removal or replacement when reuse rights are not demonstrable.

Flag scientific or pedagogical concerns outside this role for the appropriate reviewer without treating them as an additional role approval.

## Classify findings and verdict

Use exact pack-relative paths and stable IDs.

- Use `blocking` for inaccessible core outcomes, active or unsafe content, privacy exposure, missing essential consent, or material without defensible reuse rights.
- Use `major` for missing equivalents, keyboard traps, unusable reflow, incomplete provenance, or access failures that prevent meaningful participation.
- Use `minor` for bounded labeling, contrast, wording, attribution-format, or navigation defects.
- Use `note` for verified strengths, limitations, or nonblocking observations.

Choose `request-changes` for unresolved major or blocking findings. Choose `abstain` when conflict, access, expertise, or legal uncertainty prevents a responsible verdict. Choose `approve` only when the candidate provides equivalent access and defensible provenance within the declared scope; approval may contain minor findings. Include at least one substantive finding.

## Produce the artifact

1. Follow `.github/REVIEW_TEMPLATE/accessibility-rights.md` and `site/schemas/review.schema.json` exactly.
2. Set `role` to `accessibility-rights` and target the exact candidate commit.
3. Record manual and automated evidence actually checked.
4. State concrete findings, affected learners or rights, required resolutions, limitations, conflict status, accountable principal, and real agent provenance.
5. Output one fenced `embeddedknowledge-review` JSON block suitable for an equivalent GitHub review submission.
6. Do not write the artifact into the pack unless explicitly requested. The operator must preserve it exactly.
7. After it is saved, run `npm run validate`. Report structural failures separately from the accessibility-and-rights verdict.
8. Never claim quorum or merge readiness; one accessibility-and-rights approval is only one eligible vote.
