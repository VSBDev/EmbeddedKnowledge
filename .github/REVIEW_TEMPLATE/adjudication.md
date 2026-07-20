# Final lesson adjudication

For a standard lesson, use a fresh finalizer run after exactly one academic and one learning-design review of the original candidate. Read both records, dispose every finding, make the one coherent final lesson edit, commit that content, and record its SHA as `finalCommit`. Complete the accessibility-and-rights audit yourself; it is an accountable final check, not a third review vote. Do not launch another cohort. Submit **Approve** for `merge`, or **Comment** when the operator is also the PR author.

```embeddedknowledge-adjudication
{
  "schemaVersion": 1,
  "adjudicationId": "ADJ-PREM-XXX-000-FINAL-UNIQUE",
  "lessonId": "PREM-XXX-000",
  "lessonVersion": "0.1.0",
  "candidateCommit": "REPLACE_WITH_ORIGINAL_REVIEWED_40_CHARACTER_COMMIT",
  "finalCommit": "REPLACE_WITH_FINALIZER_40_CHARACTER_CONTENT_COMMIT",
  "riskTier": "standard",
  "policyId": "standard-lesson-v3",
  "reviewIds": [
    "REV-PREM-XXX-000-ACADEMIC-UNIQUE",
    "REV-PREM-XXX-000-LEARNING-UNIQUE"
  ],
  "quorum": {
    "satisfied": true,
    "approvals": 1,
    "reviewInputs": 2,
    "changeRequests": 1,
    "roleCounts": { "academic": 1, "learningDesign": 1, "accessibilityRights": 0 },
    "distinctPrincipals": 1,
    "distinctAgentRuns": 2,
    "distinctAgentModelFamilies": 2
  },
  "decision": "merge",
  "finalization": {
    "materialChanges": [
      "Describe each coherent change made between candidateCommit and finalCommit."
    ],
    "reviewDispositions": [
      {
        "reviewId": "REV-PREM-XXX-000-ACADEMIC-UNIQUE",
        "findingIndex": 0,
        "action": "incorporated",
        "rationale": "Explain exactly how the final lesson resolves or answers this indexed finding."
      },
      {
        "reviewId": "REV-PREM-XXX-000-LEARNING-UNIQUE",
        "findingIndex": 0,
        "action": "no-change-required",
        "rationale": "Explain why the cited final text already satisfies this indexed finding."
      }
    ],
    "accessibilityRightsAudit": {
      "satisfied": true,
      "evidenceChecked": [
        "List the final semantic, interaction, alternative-format, provenance, licensing, attribution, privacy, and security evidence actually checked."
      ],
      "limitations": [
        "Declare any assistive-technology, export, source-access, or rights-verification limitation."
      ]
    }
  },
  "rationale": "Explain why the original candidate, two advisory reviews, indexed dispositions, final content, verification results, audit, limitations, and dissent support this decision.",
  "dissent": [],
  "conditions": [],
  "adjudicator": {
    "principalId": "github:REPLACE_WITH_GITHUB_LOGIN",
    "displayName": "REPLACE WITH ACCOUNTABLE OPERATOR AND FINALIZER ROLE",
    "agent": {
      "system": "REPLACE_WITH_AGENT_SYSTEM",
      "provider": "REPLACE_WITH_PROVIDER",
      "model": "REPLACE_WITH_MODEL",
      "version": "REPLACE_WITH_VERSION",
      "runId": "REPLACE_WITH_FRESH_FINALIZER_RUN_ID",
      "instructionsDigest": "sha256:REPLACE_WITH_64_LOWERCASE_HEX_CHARACTERS"
    }
  },
  "adjudicatedAt": "2026-07-20T00:00:00Z"
}
```
