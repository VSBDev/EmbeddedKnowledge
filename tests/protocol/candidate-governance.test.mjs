import test from "node:test";
import assert from "node:assert/strict";
import {
  claimsChangeIsGovernanceOnly,
  lessonMetadataChangeIsGovernanceOnly
} from "../../scripts/lib/candidate-governance.mjs";

const metadata = {
  id: "PREM-LPP-001",
  version: "0.1.0",
  status: "draft",
  sourceConfidence: "pending-review",
  outcomes: ["topic-orientation-map-and-pathways"]
};

const ledger = {
  lessonId: "PREM-LPP-001",
  lessonVersion: "0.1.0",
  claims: [
    {
      id: "claim-one",
      statement: "A bounded claim.",
      sourceIds: ["source-one"],
      confidence: "high",
      reviewStatus: "pending-review"
    }
  ]
};

test("post-candidate lesson governance may change only status and source confidence", () => {
  assert.equal(lessonMetadataChangeIsGovernanceOnly(metadata, {
    ...metadata,
    status: "published",
    sourceConfidence: "high"
  }), true);
  assert.equal(lessonMetadataChangeIsGovernanceOnly(metadata, {
    ...metadata,
    version: "0.1.1"
  }), false);
});

test("post-candidate claim governance may change only retained review-status fields", () => {
  const promoted = structuredClone(ledger);
  promoted.claims[0].reviewStatus = "reviewed";
  assert.equal(claimsChangeIsGovernanceOnly(ledger, promoted), true);

  const rewritten = structuredClone(promoted);
  rewritten.claims[0].statement = "A materially different claim.";
  assert.equal(claimsChangeIsGovernanceOnly(ledger, rewritten), false);

  const remapped = structuredClone(promoted);
  remapped.claims[0].sourceIds = ["source-two"];
  assert.equal(claimsChangeIsGovernanceOnly(ledger, remapped), false);

  const added = structuredClone(promoted);
  added.claims.push({ ...added.claims[0], id: "claim-two" });
  assert.equal(claimsChangeIsGovernanceOnly(ledger, added), false);
});
