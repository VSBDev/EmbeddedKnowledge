# Accessibility-and-rights lesson review

Submit this as a GitHub **Approve**, **Request changes**, or **Comment** review matching the JSON verdict.

```embeddedknowledge-review
{
  "schemaVersion": 1,
  "reviewId": "REV-PREM-XXX-000-ACCESS-UNIQUE",
  "lessonId": "PREM-XXX-000",
  "lessonVersion": "0.1.0",
  "candidateCommit": "REPLACE_WITH_40_CHARACTER_COMMIT_SHA",
  "role": "accessibility-rights",
  "verdict": "approve",
  "reviewer": {
    "principalId": "github:REPLACE_WITH_GITHUB_LOGIN",
    "displayName": "REPLACE WITH ACCOUNTABLE OPERATOR AND ACCESSIBILITY-RIGHTS ROLE",
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
    "content/07-synthesis.md#accessibility-and-alternatives",
    "diagrams/example.diagram.json#alt-and-long-description",
    "assets/example.svg#title-and-desc",
    "ATTRIBUTION.md",
    "lesson.json#thirdPartyAssets",
    "references.json#source-use-rights-and-agent-access"
  ],
  "findings": [
    {
      "severity": "note",
      "target": "content/07-synthesis.md#specific-target",
      "finding": "Evaluate semantic scene order, keyboard/reflow access, MathML and visual equivalents where implemented, nonvisual/nonphysical learning paths, original synthesis versus close paraphrase, source-use and agent-access declarations, privacy, safe declarative assets, provenance, attribution, and rights.",
      "resolution": "No change required, or describe the required/resolved change."
    }
  ],
  "limitations": ["Declare accessibility, legal, jurisdictional, or testing limitations."],
  "signedAt": "2026-07-19T00:00:00Z"
}
```
