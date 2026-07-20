import { isDeepStrictEqual } from "node:util";

function clone(value) {
  return structuredClone(value);
}

export function lessonMetadataChangeIsGovernanceOnly(candidate, current) {
  const candidateComparable = clone(candidate);
  const currentComparable = clone(current);
  for (const metadata of [candidateComparable, currentComparable]) {
    delete metadata.status;
    delete metadata.sourceConfidence;
  }
  return isDeepStrictEqual(candidateComparable, currentComparable);
}

export function claimsChangeIsGovernanceOnly(candidate, current) {
  const candidateComparable = clone(candidate);
  const currentComparable = clone(current);
  for (const ledger of [candidateComparable, currentComparable]) {
    for (const claim of ledger.claims || []) delete claim.reviewStatus;
  }
  return isDeepStrictEqual(candidateComparable, currentComparable);
}
