# Learning-design lesson review

Submit this as a GitHub **Approve**, **Request changes**, or **Comment** review matching the JSON verdict.

Cold-read the ordered learner-visible scenes before inspecting claims, references, validator output, or prior review material. The review must say whether the declared learner can explain after one careful read what the lesson teaches, why it matters, and how its central idea works. Grammatically valid but opaque, bureaucratic, validator-facing, or needlessly abstract prose is a major learning-design failure, not a minor style preference.

```embeddedknowledge-review
{
  "schemaVersion": 1,
  "reviewId": "REV-PREM-XXX-000-LEARNING-UNIQUE",
  "lessonId": "PREM-XXX-000",
  "lessonVersion": "0.1.0",
  "candidateCommit": "REPLACE_WITH_40_CHARACTER_COMMIT_SHA",
  "role": "learning-design",
  "verdict": "approve",
  "reviewer": {
    "principalId": "github:REPLACE_WITH_GITHUB_LOGIN",
    "displayName": "REPLACE WITH ACCOUNTABLE OPERATOR AND LEARNING-DESIGN ROLE",
    "agent": {
      "system": "REPLACE_WITH_AGENT_SYSTEM",
      "provider": "REPLACE_WITH_PROVIDER",
      "model": "REPLACE_WITH_MODEL",
      "version": "REPLACE_WITH_VERSION",
      "runId": "REPLACE_WITH_UNIQUE_REVIEW_RUN_ID",
      "instructionsDigest": "sha256:REPLACE_WITH_64_LOWERCASE_HEX_CHARACTERS"
    }
  },
  "conflictOfInterest": { "declared": false, "details": null },
  "evidenceChecked": [
    "content/*.md#cold-first-read-without-ledgers-or-review-context",
    "lesson.json#objectives-and-scenes",
    "content/04-practice.md#practice",
    "content/05-retrieval.md#retrieval-check",
    "assessment.json#rubric-and-recovery"
  ],
  "findings": [
    {
      "severity": "note",
      "target": "content/04-practice.md#specific-target",
      "finding": "Record the cold-reader result with exact learner-facing evidence, then evaluate scene sequence and alignment among outcomes, objectives, explanation, cognitive load, retrieval, misconception repair, practice, transfer, assessment, mastery, and remediation.",
      "resolution": "No change required, or describe the required/resolved change."
    }
  ],
  "limitations": ["Declare learning-design scope or evidence limitations."],
  "signedAt": "2026-07-19T00:00:00Z"
}
```
