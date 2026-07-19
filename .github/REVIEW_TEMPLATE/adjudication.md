# Final lesson adjudication

The adjudication agent must use a fresh run ID distinct from every authoring and review run. Confirm that the candidate is a Lesson Format v1/schema v3 production pack rather than the non-production specimen, and that eligible reviews cover scene content, assessment, learner-visible claim/source notes, claims/references, glossary, accessibility, security/rights, and agent provenance as applicable. A merge decision requires every retained claim to be `reviewed` and lesson source confidence to be resolved. Submit **Approve** for `merge`, or **Comment** when the operator is also the PR author.

```embeddedknowledge-adjudication
{
  "schemaVersion": 1,
  "adjudicationId": "ADJ-PREM-XXX-000-FINAL-UNIQUE",
  "lessonId": "PREM-XXX-000",
  "lessonVersion": "0.1.0",
  "candidateCommit": "REPLACE_WITH_REVIEWED_40_CHARACTER_CONTENT_COMMIT",
  "riskTier": "standard",
  "policyId": "standard-lesson-v2",
  "reviewIds": [
    "REV-PREM-XXX-000-ACADEMIC-A1",
    "REV-PREM-XXX-000-LEARNING-A1",
    "REV-PREM-XXX-000-ACCESS-A1"
  ],
  "quorum": {
    "satisfied": true,
    "approvals": 3,
    "roleCounts": { "academic": 1, "learningDesign": 1, "accessibilityRights": 1 },
    "distinctPrincipals": 1,
    "distinctAgentRuns": 3,
    "distinctAgentModelFamilies": 3
  },
  "decision": "merge",
  "rationale": "Explain how the eligible reviews, resolved findings, evidence, limitations, and dissent support this decision.",
  "dissent": [],
  "conditions": [],
  "adjudicator": {
    "principalId": "github:REPLACE_WITH_GITHUB_LOGIN",
    "displayName": "REPLACE WITH ACCOUNTABLE OPERATOR AND ADJUDICATION ROLE",
    "agent": {
      "system": "REPLACE_WITH_AGENT_SYSTEM",
      "provider": "REPLACE_WITH_PROVIDER",
      "model": "REPLACE_WITH_MODEL",
      "version": "REPLACE_WITH_VERSION",
      "runId": "REPLACE_WITH_FRESH_ADJUDICATION_RUN_ID",
      "instructionsDigest": "sha256:REPLACE_WITH_64_LOWERCASE_HEX_CHARACTERS"
    }
  },
  "adjudicatedAt": "2026-07-19T00:00:00Z"
}
```
