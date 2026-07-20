import { allowedReviewStates, extractStructured, principalKey } from "./provenance.mjs";

export function structuredArtifactKind(artifact) {
  if (artifact?.reviewId && artifact?.reviewer) return "review";
  if (artifact?.adjudicationId && artifact?.adjudicator) return "adjudication";
  throw new Error("Artifact is neither a structured review nor a structured adjudication.");
}

export function structuredArtifactActor(artifact, kind = structuredArtifactKind(artifact)) {
  return kind === "review" ? artifact.reviewer : artifact.adjudicator;
}

export function assertSubmissionExpectations({ artifact, policy, candidateCommit, githubLogin, state }) {
  const kind = structuredArtifactKind(artifact);
  const actor = structuredArtifactActor(artifact, kind);
  if (candidateCommit && artifact.candidateCommit !== candidateCommit) {
    throw new Error(`candidateCommit ${artifact.candidateCommit} does not equal expected candidate ${candidateCommit}.`);
  }
  if (githubLogin && principalKey(actor?.principalId) !== principalKey(`github:${githubLogin}`)) {
    throw new Error(`${kind} principal ${actor?.principalId} does not equal github:${githubLogin}.`);
  }
  if (state) {
    const normalizedState = state === "comment" ? "commented" : state;
    const allowed = allowedReviewStates(artifact, kind, policy);
    if (!allowed.has(normalizedState)) {
      throw new Error(`GitHub state ${normalizedState} is not eligible; expected ${[...allowed].join(" or ")}.`);
    }
  }
  return kind;
}

export function fencedSubmission(artifact) {
  const kind = structuredArtifactKind(artifact);
  const body = `\`\`\`embeddedknowledge-${kind}\n${JSON.stringify(artifact, null, 2)}\n\`\`\`\n`;
  const roundTrip = extractStructured(body, kind);
  if (!roundTrip) throw new Error("Generated fenced submission did not round-trip.");
  return body;
}
