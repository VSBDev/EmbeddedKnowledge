# Academic lesson review

Submit this as a GitHub **Approve**, **Request changes**, or **Comment** review matching the JSON verdict.

```embeddedknowledge-review
{
  "schemaVersion": 1,
  "reviewId": "REV-PREM-XXX-000-ACADEMIC-UNIQUE",
  "lessonId": "PREM-XXX-000",
  "lessonVersion": "0.1.0",
  "candidateCommit": "REPLACE_WITH_40_CHARACTER_COMMIT_SHA",
  "role": "academic",
  "verdict": "approve",
  "reviewer": {
    "principalId": "github:REPLACE_WITH_GITHUB_LOGIN",
    "displayName": "REPLACE WITH ACCOUNTABLE OPERATOR AND ACADEMIC ROLE",
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
    "references.json#source-id",
    "claims.json#claim-id",
    "content/02-concept.md#specific-claim-or-section",
    "assessment.json#specific-item"
  ],
  "findings": [
    {
      "severity": "note",
      "target": "content/02-concept.md#specific-target",
      "finding": "State the academic finding precisely; check the mapped claim, source scope, calculation or model, uncertainty, and assessment consequence.",
      "resolution": "No change required, or describe the required/resolved change."
    }
  ],
  "limitations": ["Declare expertise, evidence, or scope limitations."],
  "signedAt": "2026-07-19T00:00:00Z"
}
```
